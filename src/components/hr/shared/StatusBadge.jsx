const cfg = {
    Active: { bg: "#E8F8F0", color: "#1a7a50" },
    "On Leave": { bg: "#FEF3C7", color: "#92400E" },
    Absent: { bg: "#FEE2E2", color: "#991B1B" },
    Present: { bg: "#E8F8F0", color: "#1a7a50" },
    WFH: { bg: "#EDE9FE", color: "#6D28D9" },
    Pending: { bg: "#FEF3C7", color: "#92400E" },
    Approved: { bg: "#E8F8F0", color: "#1a7a50" },
    Rejected: { bg: "#FEE2E2", color: "#991B1B" },
    Remote: { bg: "#E8F8F0", color: "#1a7a50" },
    "On-Site": { bg: "#1a1a1a", color: "#fff" },
    Hybrid: { bg: "#FEF3C7", color: "#92400E" },
    Internship: { bg: "#EDE9FE", color: "#6D28D9" },
    "Full-Time": { bg: "#EFF6FF", color: "#1D4ED8" },
    "Part-Time": { bg: "#F0FDF4", color: "#166534" },
    Freelance: { bg: "#FFF7ED", color: "#C2410C" },
};

export default function StatusBadge({ label }) {
    const s = cfg[label] || { bg: "#f0f0f0", color: "#333" };
    return (
        <span style={{ fontSize: 9.5, fontWeight: 600, padding: "3px 8px", borderRadius: 99, background: s.bg, color: s.color, whiteSpace: "nowrap" }}>
            {label}
        </span>
    );
}
