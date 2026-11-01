"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "next-themes";
import {
Menu,
X,
Moon,
Sun,
UserRound,
ChevronDown,
LayoutDashboard,
PlusCircle,
Building2,
CalendarDays,
LogOut,
UserCircle,
} from "lucide-react";

type NavbarUser = {
name: string;
email: string;
image?: string;
};

type NavbarProps = {
user?: NavbarUser | null;
onLogout?: () => void;
};

const navLinks = [
{ name: "Home", href: "/" },
{ name: "Explore Studios", href: "/studios" },
{ name: "How It Works", href: "/how-it-works" },
{ name: "About Us", href: "/about" },
];

const dashboardLinks = [
{
name: "Dashboard",
href: "/dashboard",
icon: LayoutDashboard,
},
{
name: "Add New Studio",
href: "/add-studio",
icon: PlusCircle,
},
{
name: "My Studio Listings",
href: "/my-listings",
icon: Building2,
},
{
name: "My Bookings",
href: "/my-bookings",
icon: CalendarDays,
},
{
name: "My Profile",
href: "/profile",
icon: UserCircle,
},
];

export default function Navbar({ user = null, onLogout }: NavbarProps) {
const pathname = usePathname();
const { theme, setTheme } = useTheme();

const [menuOpen, setMenuOpen] = useState(false);
const [profileOpen, setProfileOpen] = useState(false);

const isActive = (href: string) => {
if (href === "/") return pathname === "/";
return pathname === href || pathname.startsWith(`${href}/`);
};

const closeMenus = () => {
setMenuOpen(false);
setProfileOpen(false);
};

const toggleTheme = () => {
setTheme(theme === "dark" ? "light" : "dark");
};

const userInitial = user?.name?.charAt(0).toUpperCase() || "U";

const profileAvatar = (
<div
className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-lime-400 bg-gray-100 text-sm font-bold text-gray-900 dark:bg-gray-800 dark:text-white"
style={
user?.image
? {
backgroundImage: `url("${user.image}")`,
backgroundSize: "cover",
backgroundPosition: "center",
}
: undefined
}
aria-label="User avatar"
>
{!user?.image && userInitial} </div>
);

return ( <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/95"> <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"> <Link
       href="/"
       onClick={closeMenus}
       className="flex items-center gap-2"
     > <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-gray-950"> <svg
           viewBox="0 0 24 24"
           fill="none"
           className="h-6 w-6"
           aria-hidden="true"
         > <path
             d="M3 20V4h3.5l5.5 8 5.5-8H21v16h-3.5V9.5l-5.5 7.8-5.5-7.8V20H3Z"
             fill="currentColor"
           /> </svg> </div>


      <span className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
        Studio<span className="text-lime-500">Space.</span>
      </span>
    </Link>

    <div className="hidden items-center gap-7 lg:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={isActive(link.href) ? "page" : undefined}
          className={`relative py-2 text-sm font-semibold transition ${
            isActive(link.href)
              ? "text-lime-600 dark:text-lime-400"
              : "text-gray-600 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-400"
          }`}
        >
          {link.name}

          {isActive(link.href) && (
            <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-lime-400" />
          )}
        </Link>
      ))}
    </div>

    <div className="hidden items-center gap-3 lg:flex">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="rounded-full p-2.5 text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      >
        <Sun size={20} className="hidden dark:block" />
        <Moon size={20} className="block dark:hidden" />
      </button>

      {user ? (
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            aria-expanded={profileOpen}
            aria-label="Open profile menu"
            className="flex items-center gap-2 rounded-full border border-gray-200 p-1.5 pr-3 transition hover:border-lime-400 dark:border-gray-700"
          >
            {profileAvatar}
            <span className="max-w-28 truncate text-sm font-semibold text-gray-800 dark:text-white">
              {user.name}
            </span>
            <ChevronDown size={16} />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-14 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-900">
              <div className="border-b border-gray-200 px-3 py-3 dark:border-gray-700">
                <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                  {user.name}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {user.email}
                </p>
              </div>

              <div className="py-2">
                {dashboardLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenus}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                        isActive(link.href)
                          ? "bg-lime-50 font-semibold text-lime-700 dark:bg-gray-800 dark:text-lime-400"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                      }`}
                    >
                      <Icon size={17} />
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  closeMenus();
                  onLogout?.();
                }}
                className="flex w-full items-center gap-3 rounded-lg border-t border-gray-200 px-3 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:border-gray-700 dark:hover:bg-red-950"
              >
                <LogOut size={17} />
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-lime-500 hover:text-lime-600 dark:border-gray-700 dark:text-white"
          >
            <UserRound size={17} />
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-gray-950 transition hover:bg-lime-300"
          >
            Register
          </Link>
        </>
      )}
    </div>

    <div className="flex items-center gap-2 lg:hidden">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
      >
        <Sun size={20} className="hidden dark:block" />
        <Moon size={20} className="block dark:hidden" />
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        className="rounded-lg p-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </nav>

  {menuOpen && (
    <div className="border-t border-gray-200 bg-white px-5 py-5 dark:border-gray-800 dark:bg-gray-950 lg:hidden">
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenus}
            className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
              isActive(link.href)
                ? "bg-lime-50 text-lime-700 dark:bg-gray-800 dark:text-lime-400"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}

        <div className="my-2 border-t border-gray-200 dark:border-gray-800" />

        {user ? (
          <>
            <div className="flex items-center gap-3 px-3 py-3">
              {profileAvatar}
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                  {user.name}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>

            {dashboardLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  <Icon size={18} />
                  {link.name}
                </Link>
              );
            })}

            <button
              onClick={() => {
                closeMenus();
                onLogout?.();
              }}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <LogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              onClick={closeMenus}
              className="flex items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 dark:border-gray-700 dark:text-white"
            >
              <UserRound size={17} />
              Login
            </Link>

            <Link
              href="/register"
              onClick={closeMenus}
              className="rounded-full bg-lime-400 px-5 py-3 text-center text-sm font-bold text-gray-950"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  )}
</header>


);
}
