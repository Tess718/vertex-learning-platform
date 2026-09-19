import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VertexLogo } from "@/components/brand/logo";
import { Bell } from "lucide-react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

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
        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button
                type="button"
                className="text-sm font-sans font-medium text-neutral-700 hover:text-neutral-900 px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors select-none cursor-pointer"
              >
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button
                type="button"
                className="inline-flex items-center justify-center font-medium font-sans h-9 px-4 text-xs sm:text-sm rounded-[10px] bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600 transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 select-none cursor-pointer"
              >
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" strokeWidth={1.8} />
            </button>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9 border border-neutral-200 shadow-2xs",
                },
              }}
            />
          </Show>
        </div>
      ) : null}
    </nav>
  );
}
