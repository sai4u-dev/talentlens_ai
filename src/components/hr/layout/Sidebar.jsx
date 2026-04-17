"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "@/lib/hr/data";
import { G } from "@/lib/hr/constants";
import { Ico } from "../shared/icons";


export default function Sidebar() {
    const pathname = usePathname();


    return (
        <motion.aside initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} style={{ width: 250, background: "#fff", borderRight: "1px solid #f3f4f6", display: "flex", flexDirection: "column", padding: 10 }}>
            <div style={{ padding: "10px 12px", fontWeight: 800, fontSize: 18 }}>TeamHub</div>

            <nav style={{ marginTop: 10 }}>
                {navItems.map((item, i) => {
                    const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    const Icon = Ico[item.icon];

                    return (
                        <Link key={item.id} href={item.href}>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.04 * i }}
                                whileHover={!active ? { background: "#f5f5f5", color: "#333" } : {}}
                                style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 11px", borderRadius: 9, marginBottom: 2, cursor: "pointer", background: active ? G : "transparent", color: active ? "#fff" : "#888", fontWeight: active ? 700 : 400, fontSize: 12 }}
                            >
                                {Icon ? <Icon /> : null}
                                <span>{item.label}</span>
                            </motion.div>
                        </Link>
                    );
                })}
            </nav>

            <div style={{ margin: "10px 10px 0", background: "linear-gradient(145deg,#1a2e25,#2d5a40)", borderRadius: 13, padding: "14px", color: "#fff", marginTop: "auto" }}>
                <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4, lineHeight: 1.4 }}>Level Up Your HR System</div>
                <div style={{ fontSize: 9.5, color: "#9de0be", lineHeight: 1.5, marginBottom: 10 }}>TeamHub Pro gives you full control with advanced modules.</div>
                <button style={{ width: "100%", background: G, border: "none", borderRadius: 7, padding: "7px", color: "#fff", fontWeight: 700, fontSize: 10.5, cursor: "pointer" }}>Get TeamHub Pro</button>
            </div>
        </motion.aside>
    );
}