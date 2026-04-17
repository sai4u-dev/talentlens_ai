"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Avatar from "../shared/Avatar";
import StatusBadge from "../shared/StatusBadge";
import Stars from "../shared/Stars";
import { G, GL } from "@/lib/hr/constants";
import { Ico } from "../shared/icons";

export default function EmployeeGridCard({ employee, index }) {
    return (
        <Link href={`/employees/${employee.id}`}>
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                style={{ background: "#fff", borderRadius: 14, padding: 16, cursor: "pointer", textAlign: "center" }}
            >
                <Avatar initials={employee.avatar} color={employee.color} size={54} />
                <div style={{ marginTop: 10, fontWeight: 700, fontSize: 12.5 }}>{employee.name}</div>
                <div style={{ fontSize: 10, color: "#bbb", marginBottom: 8 }}>{employee.role}</div>
                <StatusBadge label={employee.type} />
                <div style={{ margin: "8px 0 6px", display: "flex", justifyContent: "center" }}><Stars rating={employee.rating} /></div>
                <div style={{ fontSize: 9.5, color: "#bbb" }}>{employee.dept}</div>
                <div style={{ display: "flex", gap: 6, marginTop: 10, justifyContent: "center" }}>
                    <button style={{ background: GL, border: "none", borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: 10, color: G, fontWeight: 600 }}>View</button>
                    <button style={{ background: "#f7f8f9", border: "none", borderRadius: 6, padding: "4px 8px", cursor: "pointer", color: "#888" }}><Ico.edit /></button>
                </div>
            </motion.div>
        </Link>
    );
}