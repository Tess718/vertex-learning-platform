"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center w-full max-w-[680px] mx-auto shadow-xs"
    >
      <label htmlFor="hero-search-input" className="sr-only">
        Ask anything about your learning
      </label>
      <Search
        className="absolute left-5 w-5 h-5 text-neutral-400 pointer-events-none"
        strokeWidth={2}
        aria-hidden="true"
      />
      <input
        id="hero-search-input"
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask anything about your learning..."
        className="w-full h-14 pl-13 pr-16 text-base font-sans text-neutral-900 placeholder:text-neutral-400 bg-white border border-neutral-200 rounded-[16px] transition-all duration-150 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20"
      />
      <div className="absolute right-4 pointer-events-none flex items-center">
        <kbd className="inline-flex items-center justify-center px-2 py-1 text-xs font-sans font-medium text-neutral-500 bg-neutral-50 rounded-md border border-neutral-200">
          ⌘ K
        </kbd>
      </div>
    </form>
  );
}
