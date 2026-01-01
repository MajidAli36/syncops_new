"use client";
import React, { useState, useEffect } from "react";
import { X, Phone, Mail, User, MapPin, MessageSquare } from "lucide-react";
import Toast from "./Toast";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceDrawerOpen, setIsServiceDrawerOpen] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    region: "",
    services: [],
    description: "",
  });

  // Map service names from Services component to FloatingCTA service values
  const serviceNameMap = {
    "Custom Development": "custom-software",
    "MVP Development": "custom-software",
    "API Development": "web-development",
    "Process Automation": "devops",
    "AI Integration": "ai-ml",
    "DevOps Automation": "devops",
    "Cloud Migration": "cloud-solutions",
    "Performance Optimization": "devops",
    "Monitoring & Analytics": "devops"
  };

  // Listen for custom event to open form with pre-filled service
  useEffect(() => {
    const handleOpenContactForm = (event) => {
      const { service } = event.detail || {};
      if (service) {
        const serviceValue = serviceNameMap[service];
        if (serviceValue) {
          setFormData(prev => ({
            ...prev,
            services: prev.services.includes(serviceValue)
              ? prev.services
              : [...prev.services, serviceValue]
          }));
        }
        setIsOpen(true);
      }
    };

    window.addEventListener('openContactForm', handleOpenContactForm);
    return () => {
      window.removeEventListener('openContactForm', handleOpenContactForm);
    };
  }, []);

  // Listen for service drawer open/close events
  useEffect(() => {
    const handleServiceDrawerOpen = () => {
      setIsServiceDrawerOpen(true);
    };
    const handleServiceDrawerClose = () => {
      setIsServiceDrawerOpen(false);
    };

    window.addEventListener('serviceDrawerOpen', handleServiceDrawerOpen);
    window.addEventListener('serviceDrawerClose', handleServiceDrawerClose);
    return () => {
      window.removeEventListener('serviceDrawerOpen', handleServiceDrawerOpen);
      window.removeEventListener('serviceDrawerClose', handleServiceDrawerClose);
    };
  }, []);


  const regionOptions = [
    { value: "", label: "Select Region" },
    { value: "north-america", label: "North America" },
    { value: "europe", label: "Europe" },
    { value: "asia-pacific", label: "Asia Pacific" },
    { value: "middle-east", label: "Middle East" },
    { value: "africa", label: "Africa" },
    { value: "latin-america", label: "Latin America" }
  ];

  const serviceOptions = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "cloud-solutions", label: "Cloud Solutions" },
    { value: "ai-ml", label: "AI & Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "devops", label: "DevOps & CI/CD" },
    { value: "consulting", label: "IT Consulting" },
    { value: "custom-software", label: "Custom Software" }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox changes for services
  const handleServiceChange = (serviceValue) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter(s => s !== serviceValue)
        : [...prev.services, serviceValue]
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          region: formData.region,
          services: formData.services.join(", "), // Convert array to string
          description: formData.description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setToast({
        show: true,
        message: "Email sent successfully! We'll get back to you soon.",
        type: "success",
      });

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        region: "",
        services: [],
        description: "",
      });

      // Close drawer after a short delay
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    } catch (error) {
      setToast({
        show: true,
        message: "Failed to send email: " + error.message,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Close panel on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Listen for ScrollToTop visibility changes to move button
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = (event) => {
      const visible = event?.detail?.visible ?? false;
      setIsScrollTopVisible(Boolean(visible));
    };

    window.addEventListener("scrollToTopVisibility", handler);
    return () => window.removeEventListener("scrollToTopVisibility", handler);
  }, []);

  return (
    <>
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}
      
      {/* Mobile: Circular button at bottom */}
      {!isOpen && !isServiceDrawerOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-8 sm:hidden z-[9999] w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full shadow-lg cursor-pointer hover:brightness-110 transition-all duration-300 ease-in-out flex items-center justify-center"
          aria-label="Open Contact Form"
          style={{
            transform: "translateZ(0)",
            // Keep above Book Now bar even when arrow is hidden,
            // and move further up when arrow appears
            bottom: isScrollTopVisible ? "8.5rem" : "4.5rem",
            transition: "bottom 0.35s ease-in-out, transform 0.35s ease-in-out",
          }}
        >
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Desktop: Vertical side button */}
      {!isOpen && !isServiceDrawerOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="hidden sm:flex fixed top-1/3 right-0 z-[9999] w-[56px] h-[160px] bg-gradient-to-b from-teal-400 to-cyan-500 rounded-l-xl shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out items-center justify-center"
          aria-label="Open Contact Form"
          style={{ transform: 'translateZ(0)' }}
        >
          <span className="rotate-90 text-white font-semibold text-sm tracking-wide whitespace-nowrap pointer-events-none select-none">
            Let&apos;s Talk Business
          </span>
        </button>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-xl border-l border-gray-200 z-50 transform transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="relative p-6 pt-4 border-b border-gray-200">
            <h2 className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text text-2xl font-bold">
              Let's Talk Business
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-4 text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-200"
              aria-label="Close panel"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="flex-1 p-6 pb-28 overflow-y-auto">
              <div className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                        placeholder="Enter first name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter email address"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">We'll never share your contact info.</p>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                {/* Region */}
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                    Region
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                    >
                      {regionOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, ideas, and requirements..."
                      rows={4}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Services You're Looking For
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map(service => (
                      <label key={service.value} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          value={service.value}
                          checked={formData.services.includes(service.value)}
                          onChange={() => handleServiceChange(service.value)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-700">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* Description */}

            </div>

            {/* Submit Button - sticky footer */}
            <div className="p-6 border-t border-gray-200 bg-white sticky bottom-0 z-40">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA; 