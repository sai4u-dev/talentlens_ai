import { Ico } from "./icons";

export default function Stars({ rating }) {
    return (
        <div style={{ display: "flex", gap: 2 }}>
            {[1, 2, 3, 4, 5].map((i) => (
                <span key={i}>
                    <Ico.star filled={i <= Math.round(rating)} />
                </span>
            ))}
        </div>
    );
}