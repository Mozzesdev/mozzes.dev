import { Link } from "wouter";
import NavBar from "./navbar";

export function Header() {
  return (
    <header className="px-6 pt-6 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between pb-6 relative z-10">
        <Link
          href="/"
          className="text-xl font-bold relative group animate-entrance"
        >
          <span className="text-g-blue z-[1] inline-block relative group-hover:-translate-y-[8%] group-hover:duration-150 duration-500">
            MOZZES
          </span>
          <span className="absolute inset-0 text-blue-900 inline-block z-0">
            MOZZES
          </span>
        </Link>
        <NavBar />
      </div>
    </header>
  );
}

