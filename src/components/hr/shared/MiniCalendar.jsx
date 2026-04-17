"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { G, GL } from "@/lib/hr/constants";
import { calDays } from "@/lib/hr/data";
import { Ico } from "./icons";

export default function MiniCalendar() {
    const [month] = useState("June 2035");
    const days = ["S", "M", "T", "W", "T", "F", "S"];

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#bbb" }}><Ico.chevLeft /></button>
                <span style={{ fontSize: 11, fontWeight: 700 }}>{month}</span>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#bbb" }}><Ico.chevRight /></button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2, textAlign: "center", marginBottom: 4 }}>
                {days.map((d, i) => <div key={i} style={{ fontSize: 8, color: "#bbb", padding: "2px 0" }}>{d}</div>)}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2 }}>
                {calDays.map((d, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        style={{ textAlign: "center", padding: "4px 2px", borderRadius: 7, fontSize: 10.5, cursor: "pointer", background: d.today ? G : d.hasEvent ? GL : "transparent", color: d.today ? "#fff" : "#333", fontWeight: d.today ? 700 : 400, position: "relative" }}
                    >
                        {d.date}
                        {d.hasEvent && !d.today ? <div style={{ width: 4, height: 4, borderRadius: "50%", background: G, margin: "0 auto", marginTop: 1 }} /> : null}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}