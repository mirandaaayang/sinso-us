import React from 'react';

export interface Stat {
  value: string;
  label: string;
}

export interface StatBarProps {
  stats: Stat[];
}

/** Horizontal band of divided stat callouts (e.g. homepage proof numbers). */
export function StatBar({ stats }: StatBarProps) {
  return (
    <div className="ds-stats-bar">
      <div className="ds-stats-grid" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
        {stats.map((stat) => (
          <div className="ds-stat-item" key={stat.label}>
            <div className="ds-stat-num">{stat.value}</div>
            <div className="ds-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
