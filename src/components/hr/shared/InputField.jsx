export default function InputField({ label, field, form, setForm, type = "text", placeholder = "" }) {
    return (
        <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 10.5, color: "#888", display: "block", marginBottom: 4 }}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={form[field] || ""}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                style={{ width: "100%", padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, outline: "none", background: "#f9fafb" }}
            />
        </div>
    );
}