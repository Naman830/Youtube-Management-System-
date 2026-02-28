import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center px-24 
        bg-gradient-to-br from-[#0d0d0d] via-[#120707] to-[#1a0000]
        border-r border-[#2a0f0f]">

        <h1 className="text-4xl font-bold leading-tight mb-6">
          Take Control of Your YouTube <br />
          <span className="text-[#db0000]">Content Machine.</span>
        </h1>

        <p className="text-gray-400 max-w-md mb-10">
          Built for creators who treat YouTube like a business — not a hobby.
          Plan smarter. Execute faster. Scale intentionally.
        </p>

        <div className="space-y-3 text-sm text-gray-500">
          <p className="flex items-center gap-2">
            <span className="text-[#db0000]">●</span> Structured Ideation
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#db0000]">●</span> Production Workflow
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#db0000]">●</span> Smart Planning
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#db0000]">●</span> Personal Creator SOP
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 items-center justify-center px-6 bg-[#0f0f12]">
        <div className="w-full max-w-md 
          bg-[#141414] 
          border border-[#2a2a2a] 
          rounded-xl 
          p-10 
        ">

          <Outlet />
        </div>
      </div>

    </div>
  );
}