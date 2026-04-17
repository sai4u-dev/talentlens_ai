"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { G, GL } from "@/lib/hr/constants";
import { Card, CardHeader } from "../shared/Card";
import InputField from "../shared/InputField";

export default function AddEmployeePage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dept: "",
        role: "",
        type: "Full-Time",
        startDate: "",
    });

    if (submitted) {
        return (
            <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px" }}>
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh", gap: 16 }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: GL, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700 }}>Employee Registered!</div>
                    <div style={{ fontSize: 12, color: "#bbb" }}>The new employee has been added to the system.</div>
                    <button onClick={() => setSubmitted(false)} style={{ background: G, border: "none", borderRadius: 9, padding: "10px 24px", color: "#fff", fontWeight: 700, cursor: "pointer" }}>Add Another</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px" }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Register New Employee</div>
                <div style={{ fontSize: 11, color: "#bbb", marginBottom: 20 }}>Fill in all the required details to register a new employee.</div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    <Card>
                        <CardHeader title="Personal Information" />
                        <InputField label="First Name" field="firstName" form={form} setForm={setForm} placeholder="e.g. John" />
                        <InputField label="Last Name" field="lastName" form={form} setForm={setForm} placeholder="e.g. Doe" />
                        <InputField label="Email Address" field="email" form={form} setForm={setForm} type="email" placeholder="john.doe@company.com" />
                        <InputField label="Phone Number" field="phone" form={form} setForm={setForm} placeholder="+1 (555) 000-0000" />
                    </Card>

                    <Card>
                        <CardHeader title="Employment Details" />
                        <InputField label="Department" field="dept" form={form} setForm={setForm} placeholder="e.g. Engineering" />
                        <InputField label="Role / Position" field="role" form={form} setForm={setForm} placeholder="e.g. Senior Developer" />
                        <div style={{ marginBottom: 12 }}>
                            <label style={{ fontSize: 10.5, color: "#888", display: "block", marginBottom: 4 }}>Employment Type</label>
                            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} style={{ width: "100%", padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, outline: "none", background: "#f9fafb" }}>
                                {["Full-Time", "Part-Time", "Freelance", "Internship"].map((t) => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                        <InputField label="Start Date" field="startDate" form={form} setForm={setForm} type="date" />
                    </Card>
                </div>

                <div style={{ display: "flex", gap: 10, marginTop: 16, justifyContent: "flex-end" }}>
                    <button style={{ background: "#f3f4f6", border: "none", borderRadius: 9, padding: "10px 20px", cursor: "pointer" }}>Cancel</button>
                    <button onClick={() => setSubmitted(true)} style={{ background: G, border: "none", borderRadius: 9, padding: "10px 20px", cursor: "pointer", color: "#fff", fontWeight: 700 }}>Register Employee</button>
                </div>
            </div>
        </div>
    );
}