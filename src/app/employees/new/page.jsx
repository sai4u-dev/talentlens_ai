import AppShell from "@/components/hr/layout/AppShell";
import BreadcrumbBar from "@/components/hr/layout/BreadcrumbBar";
import AddEmployeePage from "@/components/hr/employees/AddEmployeePage";

export default function Page() {
    return (
        <AppShell
            title="Add New Employee"
            breadcrumb="Add Employee"
            topSlot={<BreadcrumbBar backHref="/employees" label="Back" current="New Employee" />}
        >
            <AddEmployeePage />
        </AppShell>
    );
}
