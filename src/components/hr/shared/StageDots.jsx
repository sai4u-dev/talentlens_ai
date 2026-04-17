import { G } from "@/lib/hr/constants";
import { Ico } from "./icons";

export default function StageDots({ num, total = 5 }) {
    return (
        <div style={{ display: "flex", gap: 3 }}>
            {Array.from({ length: total }).map((_, i) => (
                <div key={i} style={{ width: 15, height: 15, borderRadius: 4, background: i < num ? G : "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {i < num && <Ico.check />}
                </div>
            ))}
        </div>
    );
}