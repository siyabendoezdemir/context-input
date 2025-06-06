@layer theme, base, components, utilities;
@import '@rowsncolumns/spreadsheet/dist/spreadsheet.min.css';

@import '@silk-hq/components/unlayered-styles' layer(silk);
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import 'tailwindcss/utilities.css';

@custom-variant dark (&:is(.dark \*));

@plugin 'tailwind-scrollbar';

:root {
/_ Airgap mode banner height _/
--airgap-banner-height: 0px;

/_ Add transition for CSS variables _/
transition: --airgap-banner-height 0.3s ease;

/_ CORE VARIABLES _/
/_ Shadow border variables _/
--shadow-border: rgb(20 20 20 / 0.05);
--shadow-border-emphasis: rgb(20 20 20 / 0.1);
--shadow-border-emphasis-high: rgb(20 20 20 / 0.16);

/_ Border color variables _/
--border-default: rgb(20 20 20 / 0.05);
--border-variant: rgb(20 20 20 / 0.1);
--border-emphasis: rgb(20 20 20 / 0.1);
--border-emphasis-high: rgb(20 20 20 / 0.2);

/_ Text color variables _/
--text-default: rgb(20 20 20);
--text-primary: rgb(20 20 20);
--text-secondary: rgb(20 20 20 / 0.6);
--text-tertiary: rgb(20 20 20 / 0.4);
--text-quartinary: rgb(20 20 20 / 0.25);
--text-semi-primary: rgb(20 20 20 / 0.8);
--text-inverse: rgb(255 255 255);

/_ Surface variables _/
--surface-default: rgb(255 255 255);
--surface-container-low: rgb(248 248 248);
--surface-container: rgb(243 243 243);
--surface-container-high: rgb(225 225 225);
--surface-container-higher: rgb(210 210 210);
--surface-container-highest: rgb(195 195 195);
--surface-container-low-opacity: rgb(20 20 20 / 0.03);
--surface-container-opacity: rgb(20 20 20 / 0.05);
--surface-container-high-opacity: rgb(20 20 20 / 0.1);
--surface-container-higher-opacity: rgb(20 20 20 / 0.15);
--surface-container-highest-opacity: rgb(20 20 20 / 0.2);
--surface-inverse: rgb(48 48 48);

/_ SHADCN UI VARIABLES, mapped to core variables _/
--radius: 0.5rem;
--background: var(--surface-default);
--foreground: var(--text-default);
--card: var(--surface-default);
--card-foreground: var(--text-default);
--popover: var(--surface-default);
--popover-foreground: var(--text-default);
--primary: var(--text-primary);
--primary-foreground: var(--surface-default);
--secondary: var(--text-secondary);
--secondary-foreground: var(--text-primary);
--muted: var(--surface-container);
--muted-foreground: var(--text-secondary);
--accent: var(--surface-container);
--accent-foreground: var(--text-primary);
--destructive: rgb(211 47 47);
--border: var(--border-default);
--input: var(--border-default);
--ring: var(--border-emphasis-high);
--chart-1: rgb(245 124 0);
--chart-2: rgb(2 119 189);
--chart-3: rgb(3 169 244);
--chart-4: rgb(255 193 7);
--chart-5: rgb(255 152 0);
--sidebar: var(--surface-default);
--sidebar-foreground: var(--text-default);
--sidebar-primary: var(--text-primary);
--sidebar-primary-foreground: var(--surface-default);
--sidebar-accent: var(--surface-container);
--sidebar-accent-foreground: var(--text-primary);
--sidebar-border: var(--border-default);
--sidebar-ring: var(--border-emphasis-high);

/_ BRAND colors _/
--color-brand-light: #004359;
--color-brand-dark: #8cc5d9;
--color-brand: var(--color-brand-light);
--color-on-brand: #fff;
}

/_ If using class-based dark mode _/
.dark {
/_ CORE VARIABLES _/
--color-brand: var(--color-brand-dark);

/_ Shadow border variables _/
--shadow-border: rgb(255 255 255 / 0.08);
--shadow-border-emphasis: rgb(255 255 255 / 0.11);
--shadow-border-emphasis-high: rgb(255 255 255 / 0.14);

/_ Border color variables _/
--border-default: rgb(255 255 255 / 0.08);
--border-variant: rgb(255 255 255 / 0.12);
--border-emphasis: rgb(255 255 255 / 0.12);
--border-emphasis-high: rgb(255 255 255 / 0.2);
--border-emphasis-highest: rgb(255 255 255 / 0.3);
--border-emphasis-highest: rgb(255 255 255 / 0.4);

/_ Text color variables _/
--text-default: rgb(255 255 255);
--text-primary: rgb(255 255 255);
--text-secondary: rgb(255 255 255 / 0.7);
--text-tertiary: rgb(255 255 255 / 0.5);
--text-quartinary: rgb(255 255 255 / 0.4);
--text-semi-primary: rgb(255 255 255 / 0.85);
--text-inverse: rgb(20 20 20);

/_ Surface variables _/
--surface-default: rgb(20 20 20);
--surface-container-low: rgb(29 29 29);
--surface-container: rgb(36 36 36);
--surface-container-high: rgb(46 46 46);
--surface-container-higher: rgb(54 54 54);
--surface-container-highest: rgb(61 61 61);
--surface-container-low-opacity: rgb(255 255 255 / 0.04);
--surface-container-opacity: rgb(255 255 255 / 0.07);
--surface-container-high-opacity: rgb(255 255 255 / 0.11);
--surface-container-higher-opacity: rgb(255 255 255 / 0.15);
--surface-container-highest-opacity: rgb(255 255 255 / 0.2);
--surface-inverse: rgb(255 255 255);

/_ SHADCN UI VARIABLES, mapped to core variables _/
--background: var(--surface-default);
--foreground: var(--text-default);
--card: var(--surface-container-low);
--card-foreground: var(--text-default);
--popover: var(--surface-container-low);
--popover-foreground: var(--text-default);
--primary: var(--text-default);
--primary-foreground: var(--surface-container-low);
--secondary: var(--text-secondary);
--secondary-foreground: var(--text-default);
--muted: var(--surface-container);
--muted-foreground: var(--text-secondary);
--accent: var(--surface-container);
--accent-foreground: var(--text-default);
--destructive: rgb(244 67 54);
--border: var(--border-default);
--input: var(--border-variant);
--ring: var(--border-emphasis-high);
--chart-1: rgb(103 58 183);
--chart-2: rgb(0 188 212);
--chart-3: rgb(255 152 0);
--chart-4: rgb(156 39 176);
--chart-5: rgb(244 67 54);
--sidebar: var(--surface-container-low);
--sidebar-foreground: var(--text-default);
--sidebar-primary: var(--text-default);
--sidebar-primary-foreground: var(--surface-container-low);
--sidebar-accent: var(--surface-container);
--sidebar-accent-foreground: var(--text-default);
--sidebar-border: var(--border-default);
--sidebar-ring: var(--border-emphasis-high);

/_ BRAND colors _/
--color-brand: var(--color-brand-dark);
}

@theme inline {
/_ This is where Tailwind v4 looks for color mappings _/
/_ Make sure all your custom colors are defined here with the --color- prefix _/

--breakpoint-2.5xl: 104rem;

--ease-quint-out: cubic-bezier(0.23, 1, 0.32, 1);

/_ BRAND colors _/
--color-brand: var(--color-brand-light);
--color-on-brand: #fff;

/_ Border colors _/
--border-color-DEFAULT: var(--border-default);
--border-color-variant: var(--border-variant);
--border-color-emphasis: var(--border-emphasis);
--border-color-emphasis-high: var(--border-emphasis-high);

/_ Text colors _/
--text-color-DEFAULT: var(--text-default);
--text-color-primary: var(--text-primary);
--text-color-secondary: var(--text-secondary);
--text-color-tertiary: var(--text-tertiary);
--text-color-quartinary: var(--text-quartinary);
--text-color-brand: var(--color-brand);
--text-color-semi-primary: var(--text-semi-primary);
--text-color-inverse: var(--text-inverse);

/_ Surface colors _/
--color-surface: var(--surface-default);
--color-surface-container-low: var(--surface-container-low);
--color-surface-container: var(--surface-container);
--color-surface-container-high: var(--surface-container-high);
--color-surface-container-higher: var(--surface-container-higher);
--color-surface-container-highest: var(--surface-container-highest);
--color-surface-container-low-opacity: var(--surface-container-low-opacity);
--color-surface-container-opacity: var(--surface-container-opacity);
--color-surface-container-high-opacity: var(--surface-container-high-opacity);
--color-surface-container-higher-opacity: var(--surface-container-higher-opacity);
--color-surface-container-highest-opacity: var(--surface-container-highest-opacity);
--color-surface-inverse: var(--surface-inverse);

/_ Border colors _/
--color-border: var(--border-default);
--color-border-emphasis: var(--border-emphasis);
--color-border-emphasis-high: var(--border-emphasis-high);

/_ Shadow colors _/
--shadow-border-color: var(--shadow-border);
--shadow-border-emphasis-color: var(--shadow-border-emphasis);
--shadow-border-emphasis-high-color: var(--shadow-border-emphasis-high);

/_ Existing box shadows _/
--shadow-lg:
0px 0px 0.5px 0.5px rgba(20, 20, 20, 0.12), 0px 2px 4px rgba(20, 20, 20, 0.04),
0px 16px 22px rgba(20, 20, 20, 0.03) !important;
--shadow-md: 0px 1px 2px rgba(20, 20, 20, 0.03), 0px 10px 11px rgba(20, 20, 20, 0.02) !important;

/_ Existing mappings _/
--radius-sm: calc(var(--radius) - 4px);
--radius-md: calc(var(--radius) - 2px);
--radius-lg: var(--radius);
--radius-xl: calc(var(--radius) + 4px);
--radius-2xl: calc(var(--radius) + 6px);
--color-background: var(--background);
--color-foreground: var(--foreground);
--color-card: var(--card);
--color-card-foreground: var(--card-foreground);
--color-popover: var(--popover);
--color-popover-foreground: var(--popover-foreground);
--color-primary: var(--primary);
--color-primary-foreground: var(--primary-foreground);
--color-secondary: var(--secondary);
--color-secondary-foreground: var(--secondary-foreground);
--color-muted: var(--muted);
--color-muted-foreground: var(--muted-foreground);
--color-accent: var(--accent);
--color-accent-foreground: var(--accent-foreground);
--color-destructive: var(--destructive);
--color-input: var(--input);
--color-ring: var(--ring);
--color-chart-1: var(--chart-1);
--color-chart-2: var(--chart-2);
--color-chart-3: var(--chart-3);
--color-chart-4: var(--chart-4);
--color-chart-5: var(--chart-5);
--color-sidebar: var(--sidebar);
--color-sidebar-foreground: var(--sidebar-foreground);
--color-sidebar-primary: var(--sidebar-primary);
--color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
--color-sidebar-accent: var(--sidebar-accent);
--color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
--color-sidebar-border: var(--sidebar-border);
--color-sidebar-ring: var(--sidebar-ring);
}

@layer base {

- {
  @apply border-border outline-ring/50;
  }
  body {
  @apply bg-background text-foreground;
  }

/_ Light mode scrollbar styles _/
::-webkit-scrollbar {
width: 14px;
height: 14px;
}

::-webkit-scrollbar-track {
background: transparent;
}

::-webkit-scrollbar-thumb {
background-color: var(--surface-container-high);
border: 3px solid var(--surface-default);
border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
background-color: var(--surface-container-high-opacity);
}

/_ Dark mode scrollbar styles _/
.dark ::-webkit-scrollbar-thumb {
background-color: var(--surface-container-high);
border: 3px solid var(--surface-default);
}

.dark ::-webkit-scrollbar-thumb:hover {
background-color: var(--surface-container-high-opacity);
}
}

@layer utilities {
.shadow-border {
box-shadow: 0 0 0 0.5px var(--shadow-border-color);
}
.shadow-border-emphasis {
box-shadow: 0 0 0 0.5px var(--shadow-border-emphasis-color);
}
.shadow-border-emphasis-high {
box-shadow: 0 0 0 0.5px var(--shadow-border-emphasis-high-color);
}
/_ Custom font weight utility for 450 (book) _/
.font-book {
font-weight: 450;
}
.scrollbar-overlay {
scrollbar-gutter: 0;
}
}

/_ Browser skeleton animations _/
@keyframes float {
0% {
transform: translateY(0px);
}
50% {
transform: translateY(-10px);
}
100% {
transform: translateY(0px);
}
}

@keyframes float-delayed {
0% {
transform: translateY(0px);
}
50% {
transform: translateY(-15px);
}
100% {
transform: translateY(0px);
}
}

@keyframes float-slow {
0% {
transform: translateY(0px);
}
50% {
transform: translateY(-5px);
}
100% {
transform: translateY(0px);
}
}

.animate-float {
animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
animation: float-delayed 4s ease-in-out infinite;
animation-delay: 1s;
}

.animate-float-slow {
animation: float-slow 5s ease-in-out infinite;
animation-delay: 0.5s;
}

/_ Artifact placeholder blur animation _/
@keyframes pulseBlur {
0% {
filter: blur(1px);
opacity: 0.85;
transform: scale(0.99);
}
50% {
filter: blur(2px);
opacity: 0.92;
transform: scale(1.005);
}
100% {
filter: blur(1px);
opacity: 0.85;
transform: scale(0.99);
}
}

/_ Add shimmer effect for loading placeholders _/
@keyframes shimmer {
0% {
background-position: -300px 0;
}
100% {
background-position: 300px 0;
}
}

.artifact-loading-shimmer {
background: linear-gradient(
90deg,
rgba(255, 255, 255, 0) 0%,
rgba(255, 255, 255, 0.4) 50%,
rgba(255, 255, 255, 0) 100%
);
background-size: 600px 100%;
animation: shimmer 2s infinite linear;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
}

.dark .artifact-loading-shimmer {
background: linear-gradient(
90deg,
rgba(20, 20, 20, 0) 0%,
rgba(60, 60, 60, 0.3) 50%,
rgba(20, 20, 20, 0) 100%
);
background-size: 600px 100%;
}

/_ Pulsing border for artifact placeholders _/
@keyframes pulseBorder {
0% {
border-color: rgba(59, 130, 246, 0.3);
}
50% {
border-color: rgba(59, 130, 246, 0.6);
}
100% {
border-color: rgba(59, 130, 246, 0.3);
}
}

.artifact-placeholder-border {
animation: pulseBorder 2.5s infinite ease-in-out;
border-width: 2px;
border-style: solid;
border-radius: 12px;
}

/_ needed for silk mobile sidebar _/
.Sidebar-view {
/_ SELF-LAYOUT _/
z-index: 1;
/_ Adding 60px to make it fully visible below iOS Safari's
bottom UI _/
height: calc(var(--silk-100-lvh-dvh-pct) + 60px);
}

.Sidebar-content {
/_ SELF-LAYOUT _/
width: min(90vw, 325px);

/_ APPEARANCE _/
background-color: var(--surface-default);
box-shadow: var(--shadow-4);

/_ INNER-LAYOUT _/
display: grid;
}

/_ Mobile artifact drawer styles _/
[data-silk-artifact-drawer] {
/_ Ensure full height _/
height: 100%;
}

/_ Ensure the artifact panel fills the drawer _/
[data-silk-artifact-drawer] > \* {
height: 100%;
}

/_ The multi-line clamp helper was removed in favour of the built-in
truncate / text-ellipsis utilities for single-line clamping. _/

/_ Fade in animation _/
@keyframes fadeIn {
from {
opacity: 0;
}
to {
opacity: 1;
}
}

.animate-fadeIn {
animation: fadeIn 0.6s ease-out;
}

/_ TipTap Editor Styles _/
.tiptap-editor {
min-height: 64px;
max-height: 192px;
padding: 0;
margin: 0;
}

.tiptap-editor p {
margin: 0;
}

.tiptap-editor p.is-empty::before {
content: attr(data-placeholder);
float: left;
color: var(--text-tertiary);
pointer-events: none;
height: 0;
}

.tiptap-editor:focus {
outline: none;
}

/_ Mention styles for future use _/
.mention {
color: rgb(59, 130, 246);
background-color: rgb(219, 234, 254);
border-radius: 0.25rem;
/_ Add padding for better visual appearance in messages _/
padding: 0.125rem 0.25rem;
/_ Give the caret some breathing room after the mention _/
margin-right: 0.125rem;
}

.dark .mention {
background-color: rgb(30, 58, 138);
color: rgb(147, 197, 253);
/_ Match spacing tweaks in dark mode _/
padding: 0.125rem 0.25rem;
margin-right: 0.125rem;
}
