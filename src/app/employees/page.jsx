import Link from "next/link";
import AppShell from "@/components/hr/layout/AppShell";
import EmployeesPage from "@/components/hr/employees/EmployeesPage";
import { G } from "@/lib/hr/constants";
import { Ico } from "@/components/hr/shared/icons";

export default function Page() {
    const topSlot = (
        <div style={{ background: "#fff", padding: "8px 22px", display: "flex", justifyContent: "flex-end", borderBottom: "1px solid #f5f5f5" }}>
            <Link href="/employees/new" style={{ background: G, borderRadius: 8, padding: "6px 14px", fontSize: 11, color: "#fff", fontWeight: 700, display: "flex", alignItems: "center", gap: 5 }}>
                <Ico.plus /> Add New Employee
            </Link>
        </div>
    );

    return (
        <AppShell title="Employees" breadcrumb="Employees" topSlot={topSlot}>
            <EmployeesPage />
        </AppShell>
    );
}