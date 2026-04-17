"use client";

import { motion } from "framer-motion";
import { G } from "@/lib/hr/constants";

export default function Sparkline({ data, w = 280, h = 90, color = G }) {
    const min = Math.min(...data.map((d) => d.value)) - 5;
    const max = Math.max(...data.map((d) => d.value)) + 5;

    const pts = data.map((d, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - ((d.value - min) / (max - min)) * h;
        return [x, y];
    });

    const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]},${p[1]}`).join(" ");
    const areaD = `M 0,${h} L ${pathD.slice(2)} L ${w},${h} Z`;
    const gradientId = `g${color.replace("#", "")}`;

    return (
        <svg width="100%" viewBox={`0 0 ${w} ${h + 16}`} style={{ overflow: "visible" }}>
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>

            <motion.path d={areaD} fill={`url(#${gradientId})`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} />
            <motion.path d={pathD} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />

            {pts.map(([x, y], i) => (
                <motion.circle key={i} cx={x} cy={y} r={3.5} fill="#fff" stroke={color} strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }} />
            ))}

            {data.map((d, i) => (
                <text key={i} x={(i / (data.length - 1)) * w} y={h + 14} textAnchor="middle" fontSize="8.5" fill="#ccc">
                    {d.month || d.label}
                </text>
            ))}
        </svg>
    );
}