import AppShell from "@/components/hr/layout/AppShell";
import RecruitmentPage from "@/components/hr/recruitment/RecruitmentPage";

export default function Page() {
    return (
        <AppShell title="Recruitment" breadcrumb="Recruitment">
            <RecruitmentPage />
        </AppShell>
    );
}