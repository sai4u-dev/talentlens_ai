import { employees, scheduleEvents } from "@/lib/hr/data";
import { Card, CardHeader } from "../shared/Card";
import Gauge from "../shared/Gauge";
import Sparkline from "../shared/Sparkline";
import MiniCalendar from "../shared/MiniCalendar";
import StatusBadge from "../shared/StatusBadge";

export default function EmployeeDetailPage({ employeeId }) {
    const emp = employees.find((item) => item.id === employeeId) || employees[4];

    const perfTrend = [
        { month: "Jan", value: 60 }, { month: "Feb", value: 72 }, { month: "Mar", value: 65 },
        { month: "Apr", value: 80 }, { month: "May", value: 86 }, { month: "Jun", value: 84 },
    ];

    const leaveTypes = [
        { label: "All Leaves", used: 14, total: 30, color: "#3EB97A" },
        { label: "Annual Leaves", used: 10, total: 18, color: "#6B7280" },
        { label: "Casual Leaves", used: 8, total: 12, color: "#9CA3AF" },
        { label: "Sick Leaves", used: 3, total: 8, color: "#D1D5DB" },
    ];

    return (
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px", display: "grid", gridTemplateColumns: "1fr 280px", gap: 16, alignContent: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Card>
                    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                        <div style={{ width: 80, height: 80, borderRadius: 14, background: emp.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: emp.color, flexShrink: 0 }}>{emp.avatar}</div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 2 }}>{emp.name}</div>
                            <div style={{ fontSize: 11, color: "#888", marginBottom: 8 }}>{emp.role} · {emp.dept}</div>
                            <div style={{ display: "flex", gap: 8 }}>
                                <span style={{ fontSize: 10, background: "#f0f0f0", padding: "3px 10px", borderRadius: 99, color: "#555" }}>{emp.id}</span>
                                <StatusBadge label={emp.status} />
                            </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: 10, color: "#bbb", marginBottom: 4 }}>Employment Type</div>
                            <StatusBadge label={emp.type} />
                        </div>
                    </div>
                </Card>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                    {leaveTypes.map((l, i) => (
                        <Card key={i} style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 9.5, color: "#bbb", marginBottom: 8 }}>{l.label}</div>
                            <Gauge value={Math.round((l.used / l.total) * 100)} size={70} color={l.color} />
                            <div style={{ fontSize: 9, color: "#bbb", marginTop: 4 }}>{l.used}/{l.total} days</div>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardHeader title="Performance Overview"><div style={{ background: "#f7f8f9", padding: "3px 10px", borderRadius: 99, fontSize: 10, color: "#555" }}>Last Year ▾</div></CardHeader>
                    <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>86.75%</div>
                    <div style={{ fontSize: 10, color: "#bbb", marginBottom: 12 }}>+2.3% increased vs last year</div>
                    <Sparkline data={perfTrend} w={320} h={75} />
                </Card>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <Card>
                        <CardHeader title="Personal Information" />
                        {[
                            { label: "Full Name", value: emp.name },
                            { label: "Department", value: emp.dept },
                            { label: "Role", value: emp.role },
                            { label: "Joined", value: emp.joined },
                            { label: "Salary", value: emp.salary },
                        ].map((f, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #f5f5f5", fontSize: 11 }}>
                                <span style={{ color: "#bbb" }}>{f.label}</span>
                                <span style={{ fontWeight: 600 }}>{f.value}</span>
                            </div>
                        ))}
                    </Card>
                    <Card>
                        <CardHeader title="Contact Information" />
                        {[
                            { label: "Email", value: `${emp.avatar.toLowerCase()}@teamhub.com` },
                            { label: "Phone", value: "+1 (555) 012-3456" },
                            { label: "Location", value: "San Francisco, CA" },
                            { label: "Emergency", value: "+1 (555) 098-7654" },
                        ].map((f, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #f5f5f5", fontSize: 11 }}>
                                <span style={{ color: "#bbb" }}>{f.label}</span>
                                <span style={{ fontWeight: 600 }}>{f.value}</span>
                            </div>
                        ))}
                    </Card>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Card>
                    <CardHeader title="Attendance Report" />
                    <Gauge value={emp.performance} size={120} />
                    <div style={{ fontSize: 11, color: "#bbb", textAlign: "center", marginTop: 4 }}>Attendance Rate</div>
                </Card>
                <Card>
                    <CardHeader title="MiniCalendar" />
                    <MiniCalendar />
                </Card>
                <Card>
                    <CardHeader title="Schedules" />
                    {scheduleEvents.slice(0, 2).map((s, i) => (
                        <div key={i} style={{ borderLeft: "3px solid #3EB97A", padding: "7px 10px", background: "#f9fafb", borderRadius: "0 9px 9px 0", marginBottom: 8 }}>
                            <div style={{ fontSize: 9, color: "#bbb" }}>{s.time}</div>
                            <div style={{ fontSize: 11, fontWeight: 700 }}>{s.title}</div>
                        </div>
                    ))}
                </Card>
            </div>
        </div>
    );
}