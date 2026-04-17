"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Avatar from "../shared/Avatar";
import StatusBadge from "../shared/StatusBadge";
import Stars from "../shared/Stars";
import { G, GL } from "@/lib/hr/constants";
import { Ico } from "../shared/icons";

export default function EmployeeListRow({ employee, index }) {
    return (
        <Link href={`/employees/${employee.id}`}>
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ background: "#fafafa" }}
                style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.2fr 1fr 1fr 1fr 100px", gap: 8, padding: "10px 10px", borderBottom: "1px solid #f7f7f7", alignItems: "center", borderRadius: 8, cursor: "pointer" }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <Avatar initials={employee.avatar} color={employee.color} size={30} />
                    <div>
                        <div style={{ fontWeight: 600, fontSize: 12 }}>{employee.name}</div>
                        <div style={{ fontSize: 9.5, color: "#bbb" }}>{employee.id}</div>
                    </div>
                </div>
                <div style={{ fontSize: 11, color: "#555" }}>{employee.role}</div>
                <div style={{ fontSize: 11, color: "#555" }}>{employee.dept}</div>
                <StatusBadge label={employee.type} />
                <StatusBadge label={employee.status} />
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Stars rating={employee.rating} />
                    <span style={{ fontSize: 10, color: "#888" }}>{employee.rating}</span>
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                    <button style={{ background: GL, border: "none", borderRadius: 6, padding: "3px 8px", cursor: "pointer", fontSize: 9.5, color: G }}>View</button>
                    <button style={{ background: "#f7f8f9", border: "none", borderRadius: 6, padding: "3px 6px", cursor: "pointer", color: "#888" }}><Ico.trash /></button>
                </div>
            </motion.div>
        </Link>
    );
}