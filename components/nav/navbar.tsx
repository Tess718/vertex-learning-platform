import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VertexLogo } from "@/components/brand/logo";
import { Bell } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  showActions?: boolean;
  avatarSrc?: string;
  avatarAlt?: string;
  rightContent?: React.ReactNode;
}

export function Navbar({
  items = [
    { label: "Courses", href: "/courses", isActive: false },
    { label: "My Learning", href: "/my-learning", isActive: false },
  ],
  showActions = false,
  avatarSrc = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
  avatarAlt = "User avatar",
  rightContent,
  className,
  ...props
}: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between w-full py-4 bg-transparent",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center" aria-label="Vertex Home">
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

      {rightContent ? (
        rightContent
      ) : showActions ? (
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" strokeWidth={1.8} />
          </button>

          <div className="w-9 h-9 rounded-full overflow-hidden border border-neutral-200 shadow-2xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarSrc}
              alt={avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : null}
    </nav>
  );
}
