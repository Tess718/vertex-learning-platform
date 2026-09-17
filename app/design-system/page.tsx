import React from "react";
import type { Metadata } from "next";
import { VertexLogo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { CourseCard } from "@/components/cards/course-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Navbar } from "@/components/nav/navbar";
import { Breadcrumbs } from "@/components/nav/breadcrumbs";
import { Pagination } from "@/components/nav/pagination";
import {
  Bell,
  Search,
  Play,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  Eye,
  Grid,
  Target,
  Accessibility,
  ExternalLink,
  PlayCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vertex Design System",
  description: "A unified design language for Vertex learning platform.",
};

function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="text-primary-500 font-sans font-bold text-xs tracking-wider">
        {number}
      </span>
      <h2 className="text-neutral-900 font-sans font-bold text-xs uppercase tracking-wider">
        {title}
      </h2>
    </div>
  );
}

export default function DesignSystemPage() {
  const primarySwatches = [
    { name: "Primary 500", hex: "#F97316", bgClass: "bg-primary-500" },
    { name: "Primary 400", hex: "#FB923C", bgClass: "bg-primary-400" },
    { name: "Primary 300", hex: "#FDBA74", bgClass: "bg-primary-300" },
    { name: "Primary 200", hex: "#FED7AA", bgClass: "bg-primary-200" },
    { name: "Primary 100", hex: "#FFEEE5", bgClass: "bg-primary-100" },
  ];

  const neutralSwatches = [
    { name: "Neutral 900", hex: "#0F172A", bgClass: "bg-neutral-900", border: false },
    { name: "Neutral 700", hex: "#334155", bgClass: "bg-neutral-700", border: false },
    { name: "Neutral 500", hex: "#64748B", bgClass: "bg-neutral-500", border: false },
    { name: "Neutral 300", hex: "#CBD5E1", bgClass: "bg-neutral-300", border: false },
    { name: "Neutral 200", hex: "#E2E8F0", bgClass: "bg-neutral-200", border: false },
    { name: "Neutral 100", hex: "#F1F5F9", bgClass: "bg-neutral-100", border: false },
    { name: "Neutral 50", hex: "#FAFAFC", bgClass: "bg-neutral-50", border: true },
    { name: "White", hex: "#FFFFFF", bgClass: "bg-white", border: true },
  ];

  const spacingScale = [
    { px: "4", rem: "(0.25rem)", sizeClass: "w-1 h-1" },
    { px: "8", rem: "(0.5rem)", sizeClass: "w-2 h-2" },
    { px: "12", rem: "(0.75rem)", sizeClass: "w-3 h-3" },
    { px: "16", rem: "(1rem)", sizeClass: "w-4 h-4" },
    { px: "24", rem: "(1.5rem)", sizeClass: "w-6 h-6" },
    { px: "32", rem: "(2rem)", sizeClass: "w-8 h-8" },
    { px: "40", rem: "(2.5rem)", sizeClass: "w-10 h-10" },
    { px: "48", rem: "(3rem)", sizeClass: "w-12 h-12" },
    { px: "64", rem: "(4rem)", sizeClass: "w-16 h-16" },
  ];

  const radiusScale = [
    { label: "4px", sub: "(xs)", radiusClass: "rounded-xs" },
    { label: "8px", sub: "(sm)", radiusClass: "rounded-sm" },
    { label: "12px", sub: "(md)", radiusClass: "rounded-md" },
    { label: "16px", sub: "(lg)", radiusClass: "rounded-lg" },
    { label: "24px", sub: "(xl)", radiusClass: "rounded-xl" },
    { label: "Full", sub: "(circle)", radiusClass: "rounded-full" },
  ];

  const shadowScale = [
    { name: "Sm", css: "0 1px 2px 0\nrgba(15, 23, 42, 0.05)", shadowClass: "shadow-sm" },
    { name: "Md", css: "0 4px 12px -2px\nrgba(15, 23, 42, 0.08)", shadowClass: "shadow-md" },
    { name: "Lg", css: "0 12px 24px -4px\nrgba(15, 23, 42, 0.10)", shadowClass: "shadow-lg" },
    { name: "Xl", css: "0 20px 40px -8px\nrgba(15, 23, 42, 0.12)", shadowClass: "shadow-xl" },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFC] text-neutral-900">
      <div className="max-w-[1240px] mx-auto space-y-12 bg-white p-8 md:p-14 rounded-2xl border border-neutral-200 shadow-sm">
        
        {/* ROW 1: HEADER & 01 COLORS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-neutral-200">
          {/* Header left */}
          <div className="lg:col-span-4 space-y-6">
            <VertexLogo size={36} />
            <h1 className="text-display-1 font-display font-bold tracking-tight text-neutral-900 pt-4">
              Design System
            </h1>
            <p className="text-sm font-sans text-neutral-500 leading-relaxed max-w-sm">
              A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences.
            </p>
            <div className="pt-6 text-xs font-sans tracking-wider text-neutral-500 uppercase font-medium">
              VERSION 1.0 · MAY 2025
            </div>
          </div>

          {/* Section 01: Colors */}
          <div className="lg:col-span-8 space-y-6">
            <SectionHeader number="01" title="COLORS" />

            {/* Primary */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-3 font-sans">
                Primary
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {primarySwatches.map((swatch) => (
                  <div key={swatch.name} className="space-y-1.5">
                    <div className={`h-16 rounded-md ${swatch.bgClass} shadow-2xs`} />
                    <div>
                      <div className="text-xs font-medium text-neutral-900">{swatch.name}</div>
                      <div className="text-[11px] text-neutral-500">{swatch.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Neutral */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold text-neutral-900 mb-3 font-sans">
                Neutral
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                {neutralSwatches.map((swatch) => (
                  <div key={swatch.name} className="space-y-1.5">
                    <div
                      className={`h-14 rounded-md ${swatch.bgClass} ${
                        swatch.border ? "border border-neutral-200" : ""
                      }`}
                    />
                    <div>
                      <div className="text-xs font-medium text-neutral-900 leading-snug truncate">
                        {swatch.name}
                      </div>
                      <div className="text-[11px] text-neutral-500">{swatch.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: 02 TYPOGRAPHY & 03 TYPE SCALE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-neutral-200">
          {/* Section 02 Typography */}
          <div className="lg:col-span-4 space-y-6">
            <SectionHeader number="02" title="TYPOGRAPHY" />

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <span className="font-display font-bold text-5xl text-neutral-900 select-none">
                  Ag
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg text-neutral-900">
                    Playfair Display
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">
                    Elegant · Readable · Timeless
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <span className="font-sans font-bold text-5xl text-neutral-900 select-none">
                  Ag
                </span>
                <div>
                  <h3 className="font-sans font-bold text-lg text-neutral-900">
                    Inter
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">
                    Clean · Modern · Highly legible
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 03 Type Scale */}
          <div className="lg:col-span-8 space-y-6">
            <SectionHeader number="03" title="TYPE SCALE" />

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-neutral-200 text-neutral-500 font-medium pb-2">
                    <th className="py-2.5 font-medium">Style</th>
                    <th className="py-2.5 font-medium">Font</th>
                    <th className="py-2.5 font-medium">Size / Line Height</th>
                    <th className="py-2.5 font-medium">Weight</th>
                    <th className="py-2.5 font-medium">Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-900">
                  <tr>
                    <td className="py-3 font-display font-bold text-xl">Display 1</td>
                    <td className="py-3 text-neutral-500">Playfair Display</td>
                    <td className="py-3 text-neutral-500">48 / 56</td>
                    <td className="py-3">Bold</td>
                    <td className="py-3 text-neutral-500">Page titles</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-display font-bold text-lg">Display 2</td>
                    <td className="py-3 text-neutral-500">Playfair Display</td>
                    <td className="py-3 text-neutral-500">36 / 44</td>
                    <td className="py-3">Bold</td>
                    <td className="py-3 text-neutral-500">Section titles</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-base">Heading 1</td>
                    <td className="py-3 text-neutral-500">Inter</td>
                    <td className="py-3 text-neutral-500">28 / 36</td>
                    <td className="py-3">Semi Bold</td>
                    <td className="py-3 text-neutral-500">Card titles</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-sm">Heading 2</td>
                    <td className="py-3 text-neutral-500">Inter</td>
                    <td className="py-3 text-neutral-500">22 / 30</td>
                    <td className="py-3">Semi Bold</td>
                    <td className="py-3 text-neutral-500">Sub section</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-sm">Heading 3</td>
                    <td className="py-3 text-neutral-500">Inter</td>
                    <td className="py-3 text-neutral-500">18 / 26</td>
                    <td className="py-3">Medium</td>
                    <td className="py-3 text-neutral-500">Small titles</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm">Body Large</td>
                    <td className="py-3 text-neutral-500">Inter</td>
                    <td className="py-3 text-neutral-500">16 / 24</td>
                    <td className="py-3">Regular</td>
                    <td className="py-3 text-neutral-500">Body copy</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-xs">Body</td>
                    <td className="py-3 text-neutral-500">Inter</td>
                    <td className="py-3 text-neutral-500">14 / 20</td>
                    <td className="py-3">Regular</td>
                    <td className="py-3 text-neutral-500">Supporting text</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-xs">Small</td>
                    <td className="py-3 text-neutral-500">Inter</td>
                    <td className="py-3 text-neutral-500">12 / 16</td>
                    <td className="py-3">Regular</td>
                    <td className="py-3 text-neutral-500">Captions, meta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ROW 3: 04 SPACING SYSTEM & 05 RADIUS & SHADOWS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-neutral-200">
          {/* Section 04 Spacing */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader number="04" title="SPACING SYSTEM" />
            <p className="text-xs font-sans font-medium text-neutral-900 -mt-3">
              Base unit: 4px
            </p>

            <div className="flex items-end gap-3.5 flex-wrap pt-4">
              {spacingScale.map((item) => (
                <div key={item.px} className="flex flex-col items-center gap-2">
                  <div className="h-16 flex items-end justify-center">
                    <div className={`bg-primary-200 rounded-[2px] ${item.sizeClass}`} />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-semibold text-neutral-900">{item.px}</div>
                    <div className="text-[10px] text-neutral-500">{item.rem}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 05 Radius & Shadows */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader number="05" title="RADIUS & SHADOWS" />

            {/* Radius */}
            <div>
              <h3 className="text-xs font-semibold text-neutral-900 mb-3 font-sans">
                Radius
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {radiusScale.map((r) => (
                  <div key={r.label} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-12 h-12 border border-neutral-300 bg-white ${r.radiusClass}`}
                    />
                    <div className="text-center">
                      <div className="text-xs font-medium text-neutral-900">{r.label}</div>
                      <div className="text-[10px] text-neutral-500">{r.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold text-neutral-900 mb-3 font-sans">
                Shadows
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {shadowScale.map((s) => (
                  <div
                    key={s.name}
                    className={`bg-white border border-neutral-200 rounded-md p-3 flex flex-col justify-between h-24 ${s.shadowClass}`}
                  >
                    <div className="text-xs font-semibold text-neutral-900">{s.name}</div>
                    <div className="text-[10px] text-neutral-500 font-mono whitespace-pre-line leading-tight">
                      {s.css}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROW 4: 06 ICONS, 07 BUTTONS, 08 INPUTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-neutral-200">
          {/* Section 06 Icons */}
          <div className="lg:col-span-4 space-y-5">
            <SectionHeader number="06" title="ICONS" />

            <div>
              <h3 className="text-xs font-medium text-neutral-700 mb-2 font-sans">
                Outline Style
              </h3>
              <div className="flex items-center gap-3 text-neutral-900 flex-wrap">
                <Bell className="w-5 h-5" strokeWidth={2} />
                <Search className="w-5 h-5" strokeWidth={2} />
                <Play className="w-5 h-5" strokeWidth={2} />
                <FileText className="w-5 h-5" strokeWidth={2} />
                <Bookmark className="w-5 h-5" strokeWidth={2} />
                <BarChart2 className="w-5 h-5" strokeWidth={2} />
                <Clock className="w-5 h-5" strokeWidth={2} />
                <User className="w-5 h-5" strokeWidth={2} />
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-medium text-neutral-700 mb-2 font-sans">
                Filled Style
              </h3>
              <div className="flex items-center gap-3 text-neutral-900 flex-wrap">
                <Bell className="w-5 h-5 fill-neutral-900" strokeWidth={0} />
                <Search className="w-5 h-5 strokeWidth={2.5}" />
                <Play className="w-5 h-5 fill-neutral-900" strokeWidth={0} />
                <FileText className="w-5 h-5 fill-neutral-900" strokeWidth={0} />
                <Bookmark className="w-5 h-5 fill-neutral-900" strokeWidth={0} />
                <BarChart2 className="w-5 h-5 fill-neutral-900" strokeWidth={0} />
                <Clock className="w-5 h-5 fill-neutral-900" strokeWidth={0} />
                <User className="w-5 h-5 fill-neutral-900" strokeWidth={0} />
                <ChevronRight className="w-5 h-5 strokeWidth={2.5}" />
              </div>
            </div>

            <div className="pt-3">
              <h3 className="text-xs font-semibold text-neutral-900 mb-2 font-sans">
                Icon Specs
              </h3>
              <ul className="text-xs font-sans text-neutral-500 space-y-1 list-disc list-inside">
                <li>24x24px grid</li>
                <li>2px stroke width (outline)</li>
                <li>Rounded line caps</li>
                <li>Consistent optical balance</li>
              </ul>
            </div>
          </div>

          {/* Section 07 Buttons */}
          <div className="lg:col-span-5 space-y-5">
            <SectionHeader number="07" title="BUTTONS" />

            <div className="overflow-x-auto">
              <table className="w-full text-xs font-sans border-separate border-spacing-y-2.5">
                <thead>
                  <tr className="text-neutral-500 font-medium text-left">
                    <th className="w-16"></th>
                    <th>Primary</th>
                    <th>Secondary</th>
                    <th>Tertiary</th>
                    <th>Text</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-neutral-500 font-medium pr-2">Default</td>
                    <td className="pr-2">
                      <Button variant="primary" size="md" className="h-[38px] text-xs px-3">
                        Get Started
                      </Button>
                    </td>
                    <td className="pr-2">
                      <Button variant="secondary" size="md" className="h-[38px] text-xs px-3">
                        Explore Courses
                      </Button>
                    </td>
                    <td className="pr-2">
                      <Button
                        variant="tertiary"
                        size="md"
                        className="h-[38px] text-xs px-3"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                      >
                        View Lesson
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="text"
                        size="md"
                        className="text-xs"
                        icon={<PlayCircle className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        Watch Video
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-neutral-500 font-medium pr-2">Hover</td>
                    <td className="pr-2">
                      <button
                        type="button"
                        className="h-[38px] px-3 rounded-md font-sans font-medium text-xs bg-primary-600 text-white select-none inline-flex items-center justify-center"
                      >
                        Get Started
                      </button>
                    </td>
                    <td className="pr-2">
                      <button
                        type="button"
                        className="h-[38px] px-3 rounded-md font-sans font-medium text-xs bg-primary-100 border border-primary-500 text-primary-500 select-none inline-flex items-center justify-center"
                      >
                        Explore Courses
                      </button>
                    </td>
                    <td className="pr-2">
                      <button
                        type="button"
                        className="h-[38px] px-3 rounded-md font-sans font-medium text-xs bg-neutral-50 border border-neutral-200 text-neutral-900 select-none inline-flex items-center justify-center gap-1.5"
                      >
                        <span>View Lesson</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="text-xs font-sans font-medium text-primary-600 select-none inline-flex items-center gap-1.5"
                      >
                        <span>Watch Video</span>
                        <PlayCircle className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-neutral-500 font-medium pr-2">Disabled</td>
                    <td className="pr-2">
                      <Button variant="primary" size="md" disabled className="h-[38px] text-xs px-3">
                        Get Started
                      </Button>
                    </td>
                    <td className="pr-2">
                      <Button variant="secondary" size="md" disabled className="h-[38px] text-xs px-3">
                        Explore Courses
                      </Button>
                    </td>
                    <td className="pr-2">
                      <Button
                        variant="tertiary"
                        size="md"
                        disabled
                        className="h-[38px] text-xs px-3"
                        icon={<ExternalLink className="w-3.5 h-3.5" />}
                      >
                        View Lesson
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="text"
                        size="md"
                        disabled
                        className="text-xs"
                        icon={<PlayCircle className="w-4 h-4" />}
                        iconPosition="right"
                      >
                        Watch Video
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-semibold text-neutral-900 mb-2 font-sans">
                Button Specs
              </h3>
              <ul className="text-xs font-sans text-neutral-500 space-y-1 list-disc list-inside">
                <li>Height: 44px (default)</li>
                <li>Padding: 0 16px (lg), 0 12px (md)</li>
                <li>Radius: 12px</li>
                <li>Font: Inter Medium (14–16px)</li>
              </ul>
            </div>
          </div>

          {/* Section 08 Inputs */}
          <div className="lg:col-span-3 space-y-5">
            <SectionHeader number="08" title="INPUTS" />

            <div>
              <h3 className="text-xs font-medium text-neutral-700 mb-2 font-sans">
                Search / Text Input
              </h3>
              <SearchInput placeholder="Search anything..." />
            </div>

            <div>
              <h3 className="text-xs font-medium text-neutral-700 mb-2 font-sans">
                Select
              </h3>
              <Select
                options={[
                  { value: "most-relevant", label: "Most Relevant" },
                  { value: "newest", label: "Newest" },
                  { value: "popular", label: "Most Popular" },
                ]}
              />
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-semibold text-neutral-900 mb-2 font-sans">
                Field Specs
              </h3>
              <ul className="text-xs font-sans text-neutral-500 space-y-1 list-disc list-inside">
                <li>Height: 44px</li>
                <li>Radius: 12px</li>
                <li>Border: 1px solid #E2E8F0</li>
                <li>Padding: 0 16px</li>
                <li>Focus: Border color #FB923C</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROW 5: 09 BADGES, 10 STATUS, 11 PROGRESS BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pb-12 border-b border-neutral-200">
          {/* Section 09 Badges */}
          <div className="space-y-4">
            <SectionHeader number="09" title="BADGES / TAGS" />
            <div className="flex items-center gap-6">
              <div>
                <div className="text-xs text-neutral-500 font-sans mb-1.5">Video</div>
                <Badge variant="video">VIDEO</Badge>
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-sans mb-1.5">Lesson</div>
                <Badge variant="lesson">LESSON</Badge>
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-sans mb-1.5">Popular</div>
                <Badge variant="popular">POPULAR</Badge>
              </div>
            </div>
          </div>

          {/* Section 10 Status Indicators */}
          <div className="space-y-4">
            <SectionHeader number="10" title="STATUS / INDICATORS" />
            <div className="flex items-center gap-4 flex-wrap">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now-playing" />
              <StatusIndicator status="locked" />
            </div>
          </div>

          {/* Section 11 Progress Bar */}
          <div className="space-y-4">
            <SectionHeader number="11" title="PROGRESS BAR" />
            <div className="pt-2">
              <ProgressBar value={35} />
            </div>
          </div>
        </div>

        {/* ROW 6: 12 CARDS */}
        <div className="space-y-6 pb-12 border-b border-neutral-200">
          <SectionHeader number="12" title="CARDS" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* 1. Course Card */}
            <div className="space-y-2 flex flex-col">
              <div className="text-xs text-neutral-500 font-sans">Course Card</div>
              <CourseCard className="flex-1" />
            </div>

            {/* 2. Lesson Card (Video) */}
            <div className="space-y-2 flex flex-col">
              <div className="text-xs text-neutral-500 font-sans">Lesson Card (Video)</div>
              <LessonVideoCard className="flex-1" />
            </div>

            {/* 3. Lesson Card (Lesson) */}
            <div className="space-y-2 flex flex-col">
              <div className="text-xs text-neutral-500 font-sans">Lesson Card (Lesson)</div>
              <LessonCard className="flex-1" />
            </div>

            {/* 4. Resource Card */}
            <div className="space-y-2 flex flex-col">
              <div className="text-xs text-neutral-500 font-sans">Resource Card</div>
              <ResourceCard className="flex-1" />
            </div>
          </div>
        </div>

        {/* ROW 7: 13 NAVIGATION */}
        <div className="space-y-6 pb-12 border-b border-neutral-200">
          <SectionHeader number="13" title="NAVIGATION" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <Navbar />
            </div>

            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs text-neutral-500 font-sans">Breadcrumbs</div>
              <Breadcrumbs />
            </div>

            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs text-neutral-500 font-sans">Pagination</div>
              <Pagination currentPage={1} totalPages={8} />
            </div>
          </div>
        </div>

        {/* ROW 8: 14 PRINCIPLES */}
        <div className="space-y-6">
          <SectionHeader number="14" title="PRINCIPLES" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-3.5">
              <Eye className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <h4 className="text-xs font-semibold text-neutral-900 font-sans">
                  Clarity First
                </h4>
                <p className="text-xs text-neutral-500 font-sans mt-1 leading-relaxed">
                  Every element should communicate clearly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Grid className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <h4 className="text-xs font-semibold text-neutral-900 font-sans">
                  Consistency
                </h4>
                <p className="text-xs text-neutral-500 font-sans mt-1 leading-relaxed">
                  Use components and patterns consistently across the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Target className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <h4 className="text-xs font-semibold text-neutral-900 font-sans">
                  Focus &amp; Calm
                </h4>
                <p className="text-xs text-neutral-500 font-sans mt-1 leading-relaxed">
                  Remove noise and help learners focus on what matters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Accessibility className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <h4 className="text-xs font-semibold text-neutral-900 font-sans">
                  Accessible
                </h4>
                <p className="text-xs text-neutral-500 font-sans mt-1 leading-relaxed">
                  Design with accessibility and inclusivity in mind.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
