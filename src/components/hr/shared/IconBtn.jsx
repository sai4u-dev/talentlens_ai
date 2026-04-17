import { Ico } from "./icons";


export default function IconBtn({ icon }) {
    const Icon = Ico[icon];
    return (
        <button style={{ width: 34, height: 34, borderRadius: 9, background: "#f7f8f9", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>
            {Icon ? <Icon /> : null}
        </button>
    );
}