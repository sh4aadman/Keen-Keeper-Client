"use client";
import { ChartLine, Clock, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={`px-4 py-3 text-base ${pathname === "/" ? "font-semibold text-white bg-primary" : "font-medium text-not-active"} active:bg-white`}
        >
          <House /> Home
        </Link>
      </li>
      <li>
        <Link
          href="/timeline"
          className={`px-4 py-3 text-base ${pathname === "/timeline" ? "font-semibold text-white bg-primary" : "font-medium text-not-active"} active:bg-white`}
        >
          <Clock /> Timeline
        </Link>
      </li>
      <li>
        <Link
          href="/stats"
          className={`px-4 py-3 text-base ${pathname === "/stats" ? "font-semibold text-white bg-primary" : "font-medium text-not-active"} active:bg-white`}
        >
          <ChartLine /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-white shadow-sm px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            type="button"
            aria-label="Open Navigation Menu"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </button>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-bold">
          Keen<span className="font-medium text-primary">Keeper</span>
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal">{navLinks}</ul>
      </div>
    </nav>
  );
}

export default Navbar;
