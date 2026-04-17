import AppShell from "@/components/hr/layout/AppShell";
import PerformancePage from "@/components/hr/performance/PerformancePage";

export default function Page() {
    return (
        <AppShell title="Performance" breadcrumb="Performance">
            <PerformancePage />
        </AppShell>
    );
}