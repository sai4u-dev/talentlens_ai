import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function AppShell({ title, breadcrumb, children, topSlot = null }) {
    return (
        <div style={{ display: "flex", height: "100vh", background: "#eaeeed", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 13, color: "#1a1a1a", overflow: "hidden" }}>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9.40,300;0,9.40,400;0,9.40,500;0,9.40,700;0,9.40,800&display=swap" rel="stylesheet" />
            <Sidebar />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <Topbar title={title} breadcrumb={breadcrumb} />
                {topSlot}
                <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>{children}</div>
                <Footer />
            </div>
        </div>
    );
}