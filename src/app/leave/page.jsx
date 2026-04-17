import AppShell from "@/components/hr/layout/AppShell";
import LeavePage from "@/components/hr/leave/LeavePage";

export default function Page() {
    return (
        <AppShell title="Leave Management" breadcrumb="Leave Management">
            <LeavePage />
        </AppShell>
    );
}