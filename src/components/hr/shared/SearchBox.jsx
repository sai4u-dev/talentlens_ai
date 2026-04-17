"use client";

import { Ico } from "./icons";

export default function SearchBox({ placeholder = "Search anything...", value, onChange }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 7, background: "#f7f8f9", borderRadius: 9, padding: "7px 13px", flex: "0 0 260px" }}>
            <Ico.search />
            <input value={value} onChange={onChange} placeholder={placeholder} style={{ border: "none", background: "transparent", outline: "none", fontSize: 12, width: "100%", color: "#555" }} />
        </div>
    );
}