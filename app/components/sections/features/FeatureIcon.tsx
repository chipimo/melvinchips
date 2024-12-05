"use client";

interface FeatureIconProps {
  icon: string;
}

export function FeatureIcon({ icon }: FeatureIconProps) {
  return (
    <div className="w-12 h-12 bg-black rounded-xl glass-effect flex items-center justify-center mb-4">
      <span className="text-2xl">{icon}</span>
    </div>
  );
}