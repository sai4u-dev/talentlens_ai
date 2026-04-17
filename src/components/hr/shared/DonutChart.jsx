"use client";

import { motion } from "framer-motion";

export default function DonutChart({ data, size = 100 }) {
    const total = data.reduce((a, d) => a + d.count, 0);
    let offset = 0;
    const R = size / 2 - 10;
    const C = size / 2;
    const circ = 2 * Math.PI * R;

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {data.map((d, i) => {
                const pct = d.count / total;
                const dash = circ * pct;
                const gap = circ - dash;
                const rotation = offset * 360;
                offset += pct;

                return (
                    <motion.circle
                        key={i}
                        cx={C}
                        cy={C}
                        r={R}
                        fill="none"
                        stroke={d.color}
                        strokeWidth="12"
                        strokeDasharray={`${dash} ${gap}`}
                        strokeDashoffset={circ * 0.25}
                        style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${C}px ${C}px` }}
                        initial={{ strokeDasharray: `0 ${circ}` }}
                        animate={{ strokeDasharray: `${dash} ${gap}` }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                    />
                );
            })}
        </svg>
    );
}