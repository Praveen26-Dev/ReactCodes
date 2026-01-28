import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-slate-100">BHAR</span>
          <span className="text-rose-500">PET</span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavItem label="POS" />
          <NavItem label="Add ons" />
          <NavItem label="Outlet types" />
          <NavItem label="Pricing" />
          <NavItem label="Resources" />
        </nav>

        {/* CTA */}
        <Link
          to="/app/sell"
          className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
        >
          Book A Demo
        </Link>
      </div>
    </header>
  );
}

function NavItem({ label }) {
  return (
    <button className="text-sm font-medium text-slate-400 transition hover:text-white">
      {label}
    </button>
  );
}
