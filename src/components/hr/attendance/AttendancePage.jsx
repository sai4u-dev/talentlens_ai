"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { attendanceRecords } from "@/lib/hr/data";
import { G, GL } from "@/lib/hr/constants";
import { Card, CardHeader } from "../shared/Card";
import Avatar from "../shared/Avatar";
import StatusBadge from "../shared/StatusBadge";
import { Ico } from "../shared/icons";

export default function AttendancePage() {
    const tabs = ["Today", "Weekly", "Monthly"];
    const [activeTab, setActiveTab] = useState("Today");

    return (
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px", display: "grid", gridTemplateColumns: "1fr", gap: 16, alignContent: "start" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {tabs.map((tab) => (
                    <motion.button key={tab} onClick={() => setActiveTab(tab)} whileHover={{ scale: 1.03 }} style={{ padding: "8px 18px", borderRadius: 9, border: "none", cursor: "pointer", fontSize: 12, fontWeight: activeTab === tab ? 700 : 400, background: activeTab === tab ? G : "#fff", color: activeTab === tab ? "#fff" : "#888", boxShadow: activeTab === tab ? "0 4px 12px rgba(62,185,122,0.3)" : "none" }}>
                        {tab}
                    </motion.button>
                ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {[
                    { label: "Present", value: 93, sub: "out of 128", color: G },
                    { label: "On Leave", value: 6, sub: "employees", color: "#F59E0B" },
                    { label: "Absent", value: 3, sub: "employees", color: "#EF4444" },
                ].map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 28, fontWeight: 800, color: s.color }}>{s.value}</div>
                            <div style={{ fontSize: 11, fontWeight: 600 }}>{s.label}</div>
                            <div style={{ fontSize: 9.5, color: "#bbb" }}>{s.sub}</div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card>
                <CardHeader title="Employee Attendance">
                    <div style={{ display: "flex", gap: 8 }}>
                        <button style={{ display: "flex", alignItems: "center", gap: 5, background: "#f7f8f9", border: "none", borderRadius: 8, padding: "5px 10px", cursor: "pointer", fontSize: 10.5 }}><Ico.filter /> Filter</button>
                        <button style={{ background: GL, border: "none", borderRadius: 8, padding: "5px 12px", cursor: "pointer", fontSize: 10.5, color: G, fontWeight: 600 }}>Export</button>
                    </div>
                </CardHeader>

                <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 1fr 1fr", gap: 8, padding: "6px 10px", fontSize: 10, color: "#bbb", fontWeight: 600, borderBottom: "1px solid #f5f5f5" }}>
                    <div>Employee</div><div>Department</div><div>Date</div><div>Check-In</div><div>Check-Out</div><div>Status</div>
                </div>

                <AnimatePresence>
                    {attendanceRecords.map((a, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 1fr 1fr", gap: 8, padding: "10px", borderBottom: "1px solid #f7f7f7", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <Avatar initials={a.avatar} color={a.color} size={30} />
                                <div>
                                    <div style={{ fontSize: 11, fontWeight: 600 }}>{a.name}</div>
                                    <div style={{ fontSize: 9.5, color: "#bbb" }}>{a.id}</div>
                                </div>
                            </div>
                            <div style={{ fontSize: 11, color: "#555" }}>{a.dept}</div>
                            <div style={{ fontSize: 11, color: "#555" }}>{a.date}</div>
                            <div style={{ fontSize: 11, color: "#555" }}>{a.checkIn}</div>
                            <div style={{ fontSize: 11, color: "#555" }}>{a.checkOut}</div>
                            <StatusBadge label={a.status} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Card>
        </div>
    );
}