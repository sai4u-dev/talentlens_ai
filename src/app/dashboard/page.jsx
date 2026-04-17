import AppShell from "@/components/hr/layout/AppShell";
import DashboardPage from "@/components/hr/dashboard/DashboardPage";

export default function Page() {
    return (
        <AppShell title="Dashboard" breadcrumb="Dashboard">
            <DashboardPage />
        </AppShell>
    );
}