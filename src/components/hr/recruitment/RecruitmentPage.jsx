import { applicants } from "@/lib/hr/data";
import { Card, CardHeader } from "../shared/Card";
import Avatar from "../shared/Avatar";
import StatusBadge from "../shared/StatusBadge";
import StageDots from "../shared/StageDots";

export default function RecruitmentPage() {
    return (
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px", display: "flex", flexDirection: "column", gap: 16 }}>
            <Card>
                <CardHeader title="Applicants Pipeline" />
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1.3fr 1fr 1fr 1.2fr 1.2fr", gap: 8, padding: "6px 10px", fontSize: 10, color: "#bbb", fontWeight: 600, borderBottom: "1px solid #f5f5f5" }}>
                    <div>Candidate</div><div>Role</div><div>Type</div><div>Mode</div><div>Stage</div><div>Progress</div>
                </div>

                {applicants.map((item) => (
                    <div key={item.id} style={{ display: "grid", gridTemplateColumns: "2fr 1.3fr 1fr 1fr 1.2fr 1.2fr", gap: 8, padding: "10px", borderBottom: "1px solid #f7f7f7", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Avatar initials={item.avatar} color={item.color} size={34} />
                            <div>
                                <div style={{ fontSize: 11.5, fontWeight: 700 }}>{item.name}</div>
                                <div style={{ fontSize: 9.5, color: "#bbb" }}>{item.email}</div>
                            </div>
                        </div>
                        <div style={{ fontSize: 11 }}>{item.jobTitle}</div>
                        <StatusBadge label={item.type} />
                        <StatusBadge label={item.mode} />
                        <div style={{ fontSize: 11 }}>{item.stage}</div>
                        <StageDots num={item.stageNum} total={item.totalStages} />
                    </div>
                ))}
            </Card>
        </div>
    );
}