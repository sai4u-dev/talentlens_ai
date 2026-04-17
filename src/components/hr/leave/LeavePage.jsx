import { leaveRequests } from "@/lib/hr/data";
import { Card, CardHeader } from "../shared/Card";
import Avatar from "../shared/Avatar";
import StatusBadge from "../shared/StatusBadge";

export default function LeavePage() {
    return (
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px", display: "flex", flexDirection: "column", gap: 16 }}>
            <Card>
                <CardHeader title="Leave Requests" />
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr", gap: 8, padding: "6px 10px", fontSize: 10, color: "#bbb", fontWeight: 600, borderBottom: "1px solid #f5f5f5" }}>
                    <div>Employee</div><div>Department</div><div>Type</div><div>From</div><div>To</div><div>Status</div>
                </div>

                {leaveRequests.map((item, index) => (
                    <div key={index} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr", gap: 8, padding: "10px", borderBottom: "1px solid #f7f7f7", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Avatar initials={item.avatar} color={item.color} size={30} />
                            <div>
                                <div style={{ fontSize: 11.5, fontWeight: 700 }}>{item.name}</div>
                                <div style={{ fontSize: 9.5, color: "#bbb" }}>{item.days} day(s)</div>
                            </div>
                        </div>
                        <div style={{ fontSize: 11 }}>{item.dept}</div>
                        <div style={{ fontSize: 11 }}>{item.type}</div>
                        <div style={{ fontSize: 11 }}>{item.from}</div>
                        <div style={{ fontSize: 11 }}>{item.to}</div>
                        <StatusBadge label={item.status} />
                    </div>
                ))}
            </Card>
        </div>
    );
}