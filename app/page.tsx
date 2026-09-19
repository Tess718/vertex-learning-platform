import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/nav/navbar";
import { CourseCard } from "@/components/cards/course-card";
import { NextjsIcon, DockerIcon, TypeScriptIcon } from "@/components/brand/course-icons";
import { HeroSearch } from "@/components/home/hero-search";
import { GradientBars } from "@/components/home/gradient-bars";
import { ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Vertex — Search your learning in plain English",
  description:
    "Vertex understands what you want to learn and finds the exact lessons across all your courses with AI-powered search.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] bg-[repeating-linear-gradient(-45deg,rgba(249,115,22,0.025)_0,rgba(249,115,22,0.025)_1px,transparent_0,transparent_10px)] text-neutral-900 selection:bg-primary-100 selection:text-primary-600">
      {/* Top Header */}
      <header className="w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Navbar
            items={[
              { label: "Courses", href: "/courses", isActive: false },
              { label: "My Learning", href: "/my-learning", isActive: false },
            ]}
            showActions={true}
          />
        </div>
      </header>

      {/* Main Content Area with white canvas */}
      <div className="w-full flex-1 flex flex-col items-center bg-white/85 backdrop-blur-xs">
        {/* Hero Section */}
        <section className="w-full pt-16 md:pt-20 pb-12 px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center font-sans uppercase font-semibold text-xs tracking-wider px-3.5 py-1 rounded-md bg-[#FFEEE5] text-primary-500 border border-[#FED7AA] mb-8 select-none">
              INTELLIGENT LEARNING
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[60px] text-neutral-900 tracking-tight leading-[1.12] mb-5">
              Search your learning<br />in plain English.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Vertex understands what you want to learn and finds the exact lessons across all your courses.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center font-medium font-sans h-12 px-6 text-sm rounded-[12px] bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600 shadow-md gap-2 transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Search Input Bar */}
            <HeroSearch />
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full border-t border-neutral-200" />

        {/* All Courses Section */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-2xl text-neutral-900">
              All Courses
            </h2>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors group"
            >
              <span>View all courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              level="Intermediate"
              duration="18h 24m"
              modulesCount={12}
              icon={<NextjsIcon className="w-14 h-14" />}
              layout="stacked"
              titleFont="display"
              href="/courses/nextjs-for-production"
            />

            <CourseCard
              title="Docker Essentials"
              description="Containerize applications and streamline your development workflow."
              level="Beginner"
              duration="10h 12m"
              modulesCount={8}
              icon={<DockerIcon className="w-14 h-14" />}
              layout="stacked"
              titleFont="display"
              href="/courses/docker-essentials"
            />

            <CourseCard
              title="TypeScript Deep Dive"
              description="Go beyond the basics and write safer, more expressive code."
              level="Intermediate"
              duration="14h 36m"
              modulesCount={10}
              icon={<TypeScriptIcon className="w-14 h-14" />}
              layout="stacked"
              titleFont="display"
              href="/courses/typescript-deep-dive"
            />
          </div>

          {/* New Courses Added Banner */}
          <div className="flex items-center justify-center gap-4 mt-12 text-center">
            <div className="h-px bg-neutral-200 flex-1 max-w-xs" />
            <div className="flex items-center gap-2 text-neutral-700 text-sm font-sans font-medium select-none">
              <Star className="w-4 h-4 text-primary-500 fill-transparent" strokeWidth={2} />
              <span>New courses and lessons added every week.</span>
            </div>
            <div className="h-px bg-neutral-200 flex-1 max-w-xs" />
          </div>
        </section>

        {/* Bottom Decorative Skyline Graphic */}
        <div className="w-full">
          <GradientBars />
        </div>
      </div>
    </div>
  );
}
