"use client";

import { motion } from "framer-motion";
import { G } from "@/lib/hr/constants";

export default function Gauge({ value, size = 80, color = G }) {
    const r = size / 2 - 8;
    const C = size / 2;
    const circ = Math.PI * r;
    const dash = circ * (value / 100);

    return (
        <svg width={size} height={size / 2 + 8} viewBox={`0 0 ${size} ${size / 2 + 8}`}>
            <path d={`M 8,${size / 2} A ${r},${r} 0 0 1 ${size - 8},${size / 2}`} fill="none" stroke="#f0f0f0" strokeWidth="10" strokeLinecap="round" />
            <motion.path
                d={`M 8,${size / 2} A ${r},${r} 0 0 1 ${size - 8},${size / 2}`}
                fill="none"
                stroke={color}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${circ}`}
                initial={{ strokeDashoffset: circ }}
                animate={{ strokeDashoffset: circ - dash }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            <text x={C} y={size / 2 + 4} textAnchor="middle" fontSize="13" fontWeight="700" fill="#1a1a1a">{value}%</text>
        </svg>
    );
}