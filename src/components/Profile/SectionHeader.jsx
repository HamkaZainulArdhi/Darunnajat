"use client";

export default function SectionHeader({ label, title, light = false }) {
  return (
    <div className="mb-12">
      <span className="block font-headline-lg text-headline-lg text-primary mb-2.5">
        {label}
      </span>
      <h2 className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        {title}
      </h2>
    </div>
  );
}
