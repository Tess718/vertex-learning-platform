import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VertexLogo } from "@/components/brand/logo";

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
}

export function Navbar({
  items = [
    { label: "Courses", href: "/courses", isActive: true },
    { label: "My Learning", href: "/my-learning", isActive: false },
  ],
  className,
  ...props
}: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between w-full py-4 bg-white",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center">
          <VertexLogo size={28} />
        </Link>

        <div className="flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-sans font-medium transition-colors select-none",
                item.isActive
                  ? "text-primary-500"
                  : "text-neutral-900 hover:text-neutral-700"
              )}
              aria-current={item.isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
