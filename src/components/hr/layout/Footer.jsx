export default function Footer() {
    return (
        <footer style={{ background: "#fff", padding: "8px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 9.5, color: "#bbb", flexShrink: 0 }}>
            <span>Copyright © 2025 TeamHub · Privacy Policy · Terms and Conditions · Contact</span>
            <div style={{ display: "flex", gap: 10 }}>
                {['f', '𝕏', '▶', 'in'].map((icon, i) => <span key={i} style={{ cursor: 'pointer' }}>{icon}</span>)}
            </div>
        </footer>
    );
}