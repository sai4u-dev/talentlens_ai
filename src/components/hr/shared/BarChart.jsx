"use client";

import { motion } from "framer-motion";
import { G } from "@/lib/hr/constants";

export default function BarChart({ data, height = 80 }) {
    const max = Math.max(...data.map((d) => d.value));

    return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height }}>
            {data.map((d, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    <span style={{ fontSize: 9, fontWeight: 600, color: "#555" }}>{d.value}</span>
                    <motion.div
                        style={{ width: "100%", borderRadius: 5, background: d.dark ? "#1a2e25" : G }}
                        initial={{ height: 0 }}
                        animate={{ height: (d.value / max) * (height - 24) }}
                        transition={{ delay: i * 0.07, duration: 0.55, ease: "easeOut" }}
                    />
                    <span style={{ fontSize: 7.5, color: "#ccc", textAlign: "center", lineHeight: 1.2 }}>{d.dept || d.label}</span>
                </div>
            ))}
        </div>
    );
}