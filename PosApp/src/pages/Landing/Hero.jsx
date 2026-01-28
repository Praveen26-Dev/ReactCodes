import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background accent */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600">
              Restaurant POS Platform
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Run your restaurant <br />
              <span className="text-indigo-600">smarter, faster, better</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              A modern POS to manage selling, registers, sessions, bills
              and customer displays — all from one powerful dashboard.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/app/sell")}
                className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-indigo-700"
              >
                Launch POS
              </button>

              <button
                className="rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                View Features
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <span>Trusted by restaurants</span>
              <div className="flex gap-3">
                <div className="rounded bg-slate-100 px-3 py-1">Swiggy</div>
                <div className="rounded bg-slate-100 px-3 py-1">Zomato</div>
                <div className="rounded bg-slate-100 px-3 py-1">UPI</div>
              </div>
            </div>
          </div>

          {/* RIGHT PREVIEW */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">
                  POS Dashboard
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Live
                </span>
              </div>

              {/* Fake dashboard blocks */}
              <div className="space-y-4">
                <div className="h-4 w-3/4 rounded bg-slate-200" />
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="h-20 rounded-xl bg-white shadow" />
                  <div className="h-20 rounded-xl bg-white shadow" />
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-orange-400/90 shadow-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
