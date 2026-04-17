import AppShell from "@/components/hr/layout/AppShell";
import BreadcrumbBar from "@/components/hr/layout/BreadcrumbBar";
import EmployeeDetailPage from "@/components/hr/employees/EmployeeDetailPage";
import { employees } from "@/lib/hr/data";

export default function Page({ params }) {
    const employee = employees.find((item) => item.id === params.id);

    return (
        <AppShell
            title="Employee Details"
            breadcrumb="Employee Details"
            topSlot={<BreadcrumbBar backHref="/employees" label="Back" current={employee?.name || "Employee"} />}
        >
            <EmployeeDetailPage employeeId={params.id} />
        </AppShell>
    );
}