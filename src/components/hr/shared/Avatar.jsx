export default function Avatar({ initials, color, size = 32 }) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                background: color + "22",
                color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: size * 0.31,
                fontWeight: 700,
                flexShrink: 0,
                border: `1.5px solid ${color}44`,
            }}
        >
            {initials}
        </div>
    );
}