"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { employees } from "@/lib/hr/data";
import { G } from "@/lib/hr/constants";
import { Card, CardHeader } from "../shared/Card";
import SearchBox from "../shared/SearchBox";
import DonutChart from "../shared/DonutChart";
import ProgressBar from "../shared/ProgressBar";
import EmployeeGridCard from "./EmployeeGridCard";
import EmployeeListRow from "./EmployeeListRow";
import { Ico } from "../shared/icons";

export default function EmployeesPage() {
    const [view, setView] = useState("grid");
    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        return employees.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase()) ||
            e.dept.toLowerCase().includes(search.toLowerCase()) ||
            e.role.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const deptData = [
        { name: "Engineering", count: 24, color: G },
        { name: "Design", count: 18, color: "#6B7280" },
        { name: "Marketing", count: 15, color: "#9CA3AF" },
        { name: "Others", count: 71, color: "#E5E7EB" },
    ];

    return (
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 260px", gap: 14 }}>
                <Card>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {[
                            { label: "Total Employees", value: "128" },
                            { label: "Departments", value: "7" },
                            { label: "Growth", value: "3.5%" },
                            { label: "New Hires", value: "4" },
                        ].map((s, i) => (
                            <div key={i} style={{ textAlign: "center", padding: "10px", background: "#f9fafb", borderRadius: 10 }}>
                                <div style={{ fontSize: 20, fontWeight: 800, color: i === 0 ? G : "#1a1a1a" }}>{s.value}</div>
                                <div style={{ fontSize: 9.5, color: "#bbb" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card>
                    <CardHeader title="Department Breakdown" />
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <DonutChart data={deptData} size={90} />
                        <div style={{ flex: 1 }}>
                            {deptData.map((d, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color, flexShrink: 0 }} />
                                    <span style={{ fontSize: 10, color: "#555", flex: 1 }}>{d.name}</span>
                                    <span style={{ fontSize: 10, fontWeight: 700 }}>{d.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                <Card>
                    <CardHeader title="Top Department" />
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Customer Service</div>
                    <ProgressBar pct={78} delay={0.3} />
                    <div style={{ fontSize: 10, color: "#bbb", marginTop: 4 }}>78% satisfaction score</div>
                </Card>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search employees..." />
                <button style={{ display: "flex", alignItems: "center", gap: 5, background: "#f7f8f9", border: "none", borderRadius: 8, padding: "7px 12px", cursor: "pointer", fontSize: 11 }}><Ico.filter /> Filter</button>
                <Link href="/employees/new" style={{ display: "flex", alignItems: "center", gap: 5, background: G, borderRadius: 8, padding: "7px 12px", fontSize: 11, color: "#fff", fontWeight: 700, marginLeft: "auto" }}><Ico.plus /> Add Employee</Link>
                <div style={{ display: "flex", background: "#f0f0f0", borderRadius: 8, padding: 2 }}>
                    {["grid", "list"].map((v) => (
                        <button key={v} onClick={() => setView(v)} style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 10.5, background: view === v ? "#fff" : "transparent", color: view === v ? "#1a1a1a" : "#888", fontWeight: view === v ? 700 : 400 }}>
                            {v === "grid" ? "⊞ Grid" : "≡ List"}
                        </button>
                    ))}
                </div>
            </div>

            {view === "grid" ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
                    {filtered.map((employee, i) => <EmployeeGridCard key={employee.id} employee={employee} index={i} />)}
                </div>
            ) : (
                <Card>
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.2fr 1fr 1fr 1fr 100px", gap: 8, padding: "6px 10px", fontSize: 10, color: "#bbb", fontWeight: 600, borderBottom: "1px solid #f5f5f5" }}>
                        <div>Name</div><div>Role</div><div>Department</div><div>Type</div><div>Status</div><div>Rating</div><div>Actions</div>
                    </div>
                    {filtered.map((employee, i) => <EmployeeListRow key={employee.id} employee={employee} index={i} />)}
                </Card>
            )}
        </div>
    );
}