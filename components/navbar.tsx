
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Book, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/sellmybook/logo.png" alt="SellMyBook Logo" width={60} height={60} />

          <span className="font-bold text-xl">SellMyBook</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavItem href="#features" label="Features" />
          <NavItem href="#how-it-works" label="How It Works" />
          <NavItem href="#download" label="Download" />
        </nav>

        {/* Right Side (Theme & Button) */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#download">Get the App</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Sliding Menu) */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-background shadow-lg transition-all">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavItem href="#features" label="Features" onClick={toggleMenu} />
            <NavItem href="#how-it-works" label="How It Works" onClick={toggleMenu} />
            <NavItem href="#download" label="Download" onClick={toggleMenu} />
            <Button asChild size="sm" className="w-40">
              <Link href="#download" onClick={toggleMenu}>Get the App</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

// Reusable Nav Item Component
const NavItem = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <Link
    href={href}
    className="text-sm font-medium transition-colors hover:text-primary"
    onClick={onClick}
  >
    {label}
  </Link>
);
