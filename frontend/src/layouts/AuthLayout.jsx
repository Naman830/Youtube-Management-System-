import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
      
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 blur-3xl opacity-50 pointer-events-none" />

      {/* Auth Container */}
      <div className="relative w-full max-w-md p-8 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl">
        
        {/* Logo / Branding */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Creator Control
          </h1>
          <p className="text-sm text-neutral-400 mt-2">
            Manage your YouTube workflow with clarity.
          </p>
        </div>

        {/* Form Content */}
        <Outlet />

      </div>
    </div>
  );
}