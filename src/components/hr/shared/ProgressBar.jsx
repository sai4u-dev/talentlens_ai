"use client";

import { motion } from "framer-motion";
import { G } from "@/lib/hr/constants";

export default function ProgressBar({ pct, color = G, delay = 0 }) {
    return (
        <div style={{ height: 4, background: "#f0f0f0", borderRadius: 99, overflow: "hidden" }}>
            <motion.div
                style={{ height: "100%", borderRadius: 99, background: color }}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ delay, duration: 0.7, ease: "easeOut" }}
            />
        </div>
    );
}