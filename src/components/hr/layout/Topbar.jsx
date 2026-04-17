"use client";

import { useState } from "react";
import IconBtn from "../shared/IconBtn";
import SearchBox from "../shared/SearchBox";
import { G } from "@/lib/hr/constants";

export default function Topbar({ title, breadcrumb }) {
    const [search, setSearch] = useState("");

    return (
        <header style={{ background: "#fff", padding: "11px 22px", display: "flex", alignItems: "center", gap: 12, flexShrink: 0, borderBottom: "1px solid #f5f5f5" }}>
            <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: 17, fontWeight: 700, margin: 0 }}>{title}</h1>
                <div style={{ fontSize: 10, color: "#bbb" }}>Dashboard / <span style={{ color: G }}>{breadcrumb}</span></div>
            </div>
            <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} />
            <IconBtn icon="settings" />
            <IconBtn icon="bell" />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg,${G},#2a8a57)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12 }}>DL</div>
                <div><div style={{ fontSize: 12, fontWeight: 600 }}>Davis Levin</div><div style={{ fontSize: 9, color: "#bbb" }}>User</div></div>
            </div>
        </header>
    );
}