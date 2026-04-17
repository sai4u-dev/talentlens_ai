"use client";

import { motion } from "framer-motion";
import { G, GL } from "@/lib/hr/constants";
import { scheduleEvents } from "@/lib/hr/data";
import { Card, CardHeader } from "../shared/Card";
import MiniCalendar from "../shared/MiniCalendar";
import Sparkline from "../shared/Sparkline";
import Gauge from "../shared/Gauge";
import ProgressBar from "../shared/ProgressBar";
import Stars from "../shared/Stars";

export default function DashboardPage() {
    const perfData = [
        { label: "May", value: 60 }, { label: "Jun", value: 45 }, { label: "Jul", value: 50 },
        { label: "Aug", value: 65 }, { label: "Sep", value: 48 }, { label: "Oct", value: 70 },
        { label: "Nov", value: 62 }, { label: "Dec", value: 58 },
    ];

    const satisfactionRatings = [
        { label: "Compensation & Benefits", score: 4.25 },
        { label: "Work Environment", score: 4.0 },
        { label: "Work-Life Balance", score: 4.25 },
        { label: "Career Growth Opportunities", score: 3.75 },
    ];

    const tasks = [
        { title: "Complete pre-session survey for Leadership Track", due: "Employee Development • 26 Jun 2035", done: false },
        { title: "Review Q3 budget proposal and submit feedback", due: "Finance • 28 Jun 2035", done: true },
    ];

    const fu = (d = 0) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.42 } });

    return (
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px", display: "grid", gridTemplateColumns: "1fr 280px", gap: 16, alignContent: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <motion.div {...fu(0)} style={{ background: "linear-gradient(135deg,#1a2e25,#2d5a40)", borderRadius: 14, padding: "18px 22px", color: "#fff" }}>
                    <div style={{ fontSize: 11, color: "#9de0be", marginBottom: 4 }}>Hello Davis,</div>
                    <div style={{ fontSize: 20, fontWeight: 800 }}>Good Morning 👋</div>
                    <div style={{ fontSize: 11, color: "#9de0be", marginTop: 4 }}>Here's what's happening in your organization today.</div>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                    {[
                        { label: "Total Employees", value: "128", badge: null, badgeNote: "You're part of a growing team!" },
                        { label: "Attendance", value: "92%", badge: null, badgeNote: "Your attendance this month is looking solid" },
                        { label: "Job Openings", value: "+12%", badge: "37", badgeNote: "You have 37 new applicants" },
                    ].map((s, i) => (
                        <motion.div key={i} {...fu(0.1 + i * 0.07)}>
                            <Card>
                                <div style={{ fontSize: 10, color: "#bbb", marginBottom: 6 }}>{s.label}</div>
                                <div style={{ fontSize: 26, fontWeight: 800 }}>{s.value}</div>
                                {s.badge ? <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: GL, padding: "2px 8px", borderRadius: 99, marginTop: 4 }}><span style={{ fontSize: 10, fontWeight: 700, color: G }}>{s.badge}</span></div> : null}
                                <div style={{ fontSize: 9.5, color: "#bbb", marginTop: 6, padding: "6px 10px", background: "#f9fafb", borderRadius: 8 }}>{s.badgeNote}</div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 14 }}>
                    <motion.div {...fu(0.3)}>
                        <Card style={{ height: "100%" }}>
                            <CardHeader title="June 2035 ▾" />
                            <MiniCalendar />
                        </Card>
                    </motion.div>
                    <motion.div {...fu(0.35)}>
                        <Card>
                            <CardHeader title="Team Performance">
                                <div style={{ display: "flex", gap: 6 }}>
                                    <div style={{ background: GL, color: G, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 99 }}>This Month</div>
                                    <div style={{ background: "#f7f8f9", color: "#666", fontSize: 10, padding: "3px 10px", borderRadius: 99 }}>Last 6 Months ▾</div>
                                </div>
                            </CardHeader>
                            <div style={{ marginBottom: 6 }}>
                                <span style={{ fontSize: 22, fontWeight: 800 }}>89.52%</span>
                                <span style={{ fontSize: 10, color: "#bbb", marginLeft: 8 }}>+1.5% vs last week</span>
                            </div>
                            <Sparkline data={perfData} w={320} h={80} />
                        </Card>
                    </motion.div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                    <motion.div {...fu(0.4)}>
                        <Card>
                            <CardHeader title="Employee Satisfaction" />
                            <div style={{ textAlign: "center", marginBottom: 10 }}>
                                <Gauge value={73} size={90} />
                                <div style={{ fontSize: 11, color: "#bbb", marginTop: 4 }}>Employee Satisfaction</div>
                            </div>
                            {satisfactionRatings.map((r, i) => (
                                <div key={i} style={{ marginBottom: 8 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                                        <span style={{ fontSize: 9.5, color: "#888" }}>{r.label}</span>
                                        <Stars rating={r.score} />
                                    </div>
                                    <ProgressBar pct={(r.score / 5) * 100} delay={0.5 + i * 0.1} />
                                </div>
                            ))}
                        </Card>
                    </motion.div>

                    <motion.div {...fu(0.45)}>
                        <Card>
                            <CardHeader title="Employment Status" />
                            <div style={{ fontSize: 12, color: "#bbb", marginBottom: 10 }}>128 Employees</div>
                            {[
                                { label: "Full-Time", count: 68, pct: 53, color: G },
                                { label: "Part-Time", count: 19, pct: 15, color: "#9CA3AF" },
                                { label: "Freelance", count: 32, pct: 25, color: "#6B7280" },
                                { label: "Internship", count: 9, pct: 7, color: "#D1D5DB" },
                            ].map((s, i) => (
                                <div key={i} style={{ marginBottom: 10 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                                        <span style={{ fontSize: 10.5, color: "#555" }}>{s.label}</span>
                                        <div style={{ display: "flex", gap: 6 }}>
                                            <span style={{ fontSize: 10, color: "#bbb" }}>{s.pct}%</span>
                                            <span style={{ fontSize: 10.5, fontWeight: 700 }}>{s.count}</span>
                                        </div>
                                    </div>
                                    <ProgressBar pct={s.pct} color={s.color} delay={0.5 + i * 0.1} />
                                </div>
                            ))}
                        </Card>
                    </motion.div>

                    <motion.div {...fu(0.5)}>
                        <Card>
                            <CardHeader title="Tasks" />
                            {tasks.map((t, i) => (
                                <div key={i} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: i < tasks.length - 1 ? "1px solid #f5f5f5" : "none" }}>
                                    <div style={{ width: 16, height: 16, borderRadius: 4, background: t.done ? G : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                                        {t.done ? <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg> : null}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 11.5, fontWeight: t.done ? 400 : 600, color: t.done ? "#bbb" : "#1a1a1a", textDecoration: t.done ? "line-through" : "none" }}>{t.title}</div>
                                        <div style={{ fontSize: 9.5, color: "#bbb", marginTop: 3 }}>{t.due}</div>
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </motion.div>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <motion.div {...fu(0.15)}>
                    <Card>
                        <CardHeader title="Leave Requests"><div style={{ background: "#FEF3C7", color: "#92400E", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 99 }}>2 Pending</div></CardHeader>
                        {[{ name: "Annual Leaves", count: 3, color: G }, { name: "Casual Leaves", count: 1, color: "#9CA3AF" }].map((l, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid #f5f5f5" }}>
                                <span style={{ fontSize: 11 }}>{l.name}</span>
                                <span style={{ fontSize: 12, fontWeight: 700, color: l.color }}>{l.count}</span>
                            </div>
                        ))}
                    </Card>
                </motion.div>

                <motion.div {...fu(0.2)}>
                    <Card>
                        <CardHeader title="Schedules"><div style={{ fontSize: 10, color: G, fontWeight: 600, cursor: "pointer" }}>21 Jun ▾</div></CardHeader>
                        {scheduleEvents.map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} style={{ borderLeft: `3px solid ${G}`, padding: "8px 10px", background: "#f9fafb", borderRadius: "0 10px 10px 0", marginBottom: 8, cursor: "pointer" }}>
                                <div style={{ fontSize: 9, color: "#bbb", marginBottom: 2 }}>{s.time}</div>
                                <div style={{ fontSize: 11.5, fontWeight: 700, marginBottom: 4 }}>{s.title}</div>
                                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                                    <span style={{ fontSize: 9, background: GL, color: G, padding: "2px 7px", borderRadius: 99, fontWeight: 600 }}>{s.tag}</span>
                                </div>
                            </motion.div>
                        ))}
                    </Card>
                </motion.div>

                <motion.div {...fu(0.25)}>
                    <Card style={{ background: "linear-gradient(145deg,#1a2e25,#2d5a40)", color: "#fff" }}>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Level Up Your HR System</div>
                        <div style={{ fontSize: 10.5, color: "#9de0be", lineHeight: 1.6, marginBottom: 12 }}>TeamHub Pro gives you full control with advanced modules and extended layouts.</div>
                        <button style={{ width: "100%", background: G, border: "none", borderRadius: 9, padding: "9px 0", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>Get TeamHub Pro</button>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}