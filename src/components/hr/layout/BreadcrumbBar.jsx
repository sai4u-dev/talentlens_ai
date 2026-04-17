import Link from "next/link";
import { G } from "@/lib/hr/constants";
import { Ico } from "../shared/icons";

export default function BreadcrumbBar({ backHref = "/employees", label = "Back", current = "New Employee" }) {
    return (
        <div style={{ background: "#fff", padding: "8px 22px", display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#bbb", borderBottom: "1px solid #f5f5f5" }}>
            <Link href={backHref} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Ico.chevLeft /> {label}
            </Link>
            <span>·</span>
            <span style={{ color: G, fontWeight: 600 }}>{current}</span>
        </div>
    );
}