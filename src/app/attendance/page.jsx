import AppShell from "@/components/hr/layout/AppShell";
import AttendancePage from "@/components/hr/attendance/AttendancePage";

export default function Page() {
    return (
        <AppShell title="Attendance" breadcrumb="Attendance">
            <AttendancePage />
        </AppShell>
    );
}