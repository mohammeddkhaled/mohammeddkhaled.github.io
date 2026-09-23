import React from 'react';

export default function TechnologyTags({ technologies = [], max = 6, className = "" }) {
  if (!technologies || technologies.length === 0) return null;

  const visibleTechs = technologies.slice(0, max);
  const remaining = technologies.length - max;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {visibleTechs.map((tech, idx) => (
        <span 
          key={idx}
          className="font-mono text-[11px] text-pearl-300 bg-midnight-950/50 px-2.5 py-1 rounded-md border border-white/5 whitespace-nowrap"
        >
          {tech}
        </span>
      ))}
      {remaining > 0 && (
        <span className="font-mono text-[11px] text-pearl-400 px-2 py-1 flex items-center whitespace-nowrap">
          +{remaining} More
        </span>
      )}
    </div>
  );
}
