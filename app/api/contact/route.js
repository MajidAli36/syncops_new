import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP Configuration
const smtpConfig = {
  host: "email-smtp.ap-southeast-2.amazonaws.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "AKIA3WHMQWIVQ2OSH2VN",
    pass: "BGNHsSVSc8mFd8vOQ/aEwOPDB9u1X5qglic9HnXO17AF"
  }
};

// Email configuration
const emailConfig = {
  from: "rimsha@rimshaimran.tech",
  to: "rimsha@rimshaimran.tech"
};

// Turnstile configuration
const turnstileSecret = "0x4AAAAAACAmIS7JxMDXy-Lr";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      region,
      services,
      description,
      turnstileToken
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify Turnstile token if provided
    if (turnstileToken) {
      try {
        const formData = new URLSearchParams();
        formData.append('secret', turnstileSecret);
        formData.append('response', turnstileToken);

        const verifyResponse = await fetch(
          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
          {
            method: 'POST',
            body: formData,
          }
        );

        const verifyData = await verifyResponse.json();
        if (!verifyData.success) {
          return NextResponse.json(
            { error: 'Turnstile verification failed' },
            { status: 400 }
          );
        }
      } catch (error) {
        console.error('Turnstile verification error:', error);
        return NextResponse.json(
          { error: 'CAPTCHA verification error' },
          { status: 400 }
        );
      }
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Format services list
    const servicesList = services && services.length > 0 
      ? (typeof services === 'string' 
          ? services.split(', ').map(s => `• ${s}`).join('\n')
          : services.map(s => `• ${s}`).join('\n'))
      : 'None specified';

    // Format region display
    const regionDisplay = region || 'Not specified';

    // Email content
    const emailSubject = `New Contact Form Submission from ${firstName} ${lastName}`;
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #00B894 0%, #00C4FF 100%);
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: #f9f9f9;
              padding: 20px;
              border: 1px solid #ddd;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #00B894;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              padding-left: 10px;
            }
            .footer {
              background: #f0f0f0;
              padding: 15px;
              text-align: center;
              font-size: 12px;
              color: #666;
              border-radius: 0 0 8px 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Region:</div>
                <div class="value">${regionDisplay}</div>
              </div>
              
              <div class="field">
                <div class="label">Services Interested In:</div>
                <div class="value" style="white-space: pre-line;">${servicesList}</div>
              </div>
              
              ${description ? `
              <div class="field">
                <div class="label">Project Description:</div>
                <div class="value" style="white-space: pre-wrap;">${description}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>This email was sent from the SyncOps contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}Region: ${regionDisplay}
Services Interested In:
${servicesList}

${description ? `Project Description:\n${description}\n` : ''}

---
This email was sent from the SyncOps contact form.
Submitted at: ${new Date().toLocaleString()}
    `;

    // Send email
    const mailOptions = {
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}

