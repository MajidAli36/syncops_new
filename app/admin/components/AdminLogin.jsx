'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff, Lock } from 'lucide-react';

export default function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/admin/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to sign in.');
      onSuccess?.();
    } catch (err) {
      setError(err.message || 'Unable to sign in.');
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0A1C] px-4 py-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#00B894]/15 blur-3xl" />
        <div className="absolute -right-16 bottom-16 h-80 w-80 rounded-full bg-[#00C4FF]/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-md sm:p-8">
        <div className="mb-8 text-center">
          <div className="relative mx-auto mb-5 h-10 w-[148px]">
            <Image
              src="/images/logo-footer.png"
              alt="SyncOps"
              fill
              sizes="148px"
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-white/55">
            Enter the admin password to continue to the panel.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="admin-password"
              className="mb-1.5 block text-sm font-medium text-white/80"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                autoFocus
                autoComplete="current-password"
                placeholder="Enter admin password"
                className="w-full rounded-lg border border-white/15 bg-white/5 py-2.5 pl-10 pr-11 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/25"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/45 transition hover:text-white/80"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-400" role="alert">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting || !password.trim()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#00B894] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00a383] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Checking…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/35">
          Secure server session · expires after 8 hours
        </p>
      </div>
    </div>
  );
}
