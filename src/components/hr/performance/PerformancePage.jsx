import { Card, CardHeader } from "../shared/Card";
import Gauge from "../shared/Gauge";
import Sparkline from "../shared/Sparkline";
import BarChart from "../shared/BarChart";

export default function PerformancePage() {
    const trend = [
        { label: "Jan", value: 62 },
        { label: "Feb", value: 68 },
        { label: "Mar", value: 70 },
        { label: "Apr", value: 74 },
        { label: "May", value: 80 },
        { label: "Jun", value: 84 },
    ];

    const deptBars = [
        { dept: "Eng", value: 92 },
        { dept: "Design", value: 78 },
        { dept: "Ops", value: 71 },
        { dept: "HR", value: 75 },
        { dept: "Mktg", value: 69 },
    ];

    return (
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 22px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Card>
                    <CardHeader title="Performance Trend" />
                    <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>84.20%</div>
                    <div style={{ fontSize: 10, color: "#bbb", marginBottom: 12 }}>+4.8% vs previous month</div>
                    <Sparkline data={trend} w={420} h={90} />
                </Card>

                <Card>
                    <CardHeader title="Department Performance" />
                    <BarChart data={deptBars} height={110} />
                </Card>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Card>
                    <CardHeader title="Overall Score" />
                    <div style={{ textAlign: "center" }}>
                        <Gauge value={84} size={120} />
                        <div style={{ fontSize: 11, color: "#bbb", marginTop: 8 }}>Company-wide performance</div>
                    </div>
                </Card>
            </div>
        </div>
    );
}