export function Card({ children, style = {} }) {
    return <div style={{ background: "#fff", borderRadius: 14, padding: 16, ...style }}>{children}</div>;
}

export function CardHeader({ title, children }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <span style={{ fontWeight: 700, fontSize: 13 }}>{title}</span>
            {children}
        </div>
    );
}