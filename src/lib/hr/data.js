export const navItems = [
    { label: "Dashboard", id: "dashboard", icon: "grid", href: "/dashboard" },
    { label: "Inbox", id: "inbox", icon: "mail", href: "/inbox" },
    { label: "Calendar", id: "calendar", icon: "calendar", href: "/calendar" },
    { label: "Employees", id: "employees", icon: "users", href: "/employees" },
    { label: "Attendance", id: "attendance", icon: "clock", href: "/attendance" },
    { label: "Performance", id: "performance", icon: "trending-up", href: "/performance" },
    { label: "Payroll", id: "payroll", icon: "dollar", href: "/payroll" },
    { label: "Leave Management", id: "leave", icon: "file", href: "/leave" },
    { label: "Recruitment", id: "recruitment", icon: "search", href: "/recruitment" },
];

export const employees = [
    { id: "EMP-001", name: "Olivia Mason", role: "UI/UX Designer", dept: "Product Design", type: "Full-Time", status: "Active", rating: 4.8, avatar: "OM", color: "#3EB97A", joined: "12 Jan 2032", performance: 92, salary: "$4,200" },
    { id: "EMP-002", name: "Ethan Ray", role: "Frontend Developer", dept: "Engineering", type: "Full-Time", status: "Active", rating: 4.6, avatar: "ER", color: "#F59E0B", joined: "3 Mar 2031", performance: 88, salary: "$5,100" },
    { id: "EMP-003", name: "Lina Armand", role: "Marketing Manager", dept: "Marketing", type: "Full-Time", status: "On Leave", rating: 4.3, avatar: "LA", color: "#8B5CF6", joined: "22 Jun 2030", performance: 85, salary: "$4,800" },
    { id: "EMP-004", name: "Jacob Yuan", role: "Data Analyst", dept: "R&D", type: "Part-Time", status: "Active", rating: 4.5, avatar: "JY", color: "#EC4899", joined: "8 Sep 2033", performance: 90, salary: "$3,600" },
    { id: "EMP-005", name: "Mia Torres", role: "HR Officer", dept: "Human Resources", type: "Full-Time", status: "Active", rating: 4.7, avatar: "MT", color: "#06B6D4", joined: "15 Feb 2029", performance: 87, salary: "$4,400" },
    { id: "EMP-006", name: "Daniel Huang", role: "Sales Executive", dept: "Operations", type: "Full-Time", status: "Active", rating: 4.2, avatar: "DH", color: "#10B981", joined: "1 Apr 2032", performance: 83, salary: "$4,000" },
    { id: "EMP-007", name: "Arya Rodriguez", role: "Customer Support", dept: "Customer Service", type: "Full-Time", status: "Active", rating: 4.4, avatar: "AR", color: "#F97316", joined: "19 Nov 2031", performance: 86, salary: "$3,800" },
    { id: "EMP-008", name: "Ryan Kim", role: "DevOps Engineer", dept: "Engineering", type: "Full-Time", status: "Active", rating: 4.9, avatar: "RK", color: "#6366F1", joined: "5 Jul 2030", performance: 95, salary: "$5,800" },
    { id: "EMP-009", name: "Kelvin Yu", role: "Graphic Designer", dept: "Product Design", type: "Freelance", status: "Active", rating: 4.1, avatar: "KY", color: "#84CC16", joined: "30 Oct 2033", performance: 80, salary: "$3,200" },
    { id: "EMP-010", name: "Farah Habib", role: "Finance Analyst", dept: "Finance", type: "Full-Time", status: "Active", rating: 4.6, avatar: "FH", color: "#A855F7", joined: "14 Jan 2031", performance: 91, salary: "$4,600" },
    { id: "EMP-011", name: "June Park", role: "Recruiter", dept: "Human Resources", type: "Full-Time", status: "On Leave", rating: 4.0, avatar: "JP", color: "#14B8A6", joined: "22 Mar 2032", performance: 78, salary: "$3,900" },
    { id: "EMP-012", name: "Hana Patil", role: "Content Strategist", dept: "Marketing", type: "Full-Time", status: "Active", rating: 4.3, avatar: "HP", color: "#F43F5E", joined: "9 Aug 2033", performance: 84, salary: "$4,100" },
];

export const applicants = [
    { id: 1, name: "William Hartono", email: "william.hartono@email.com", avatar: "WH", color: "#3EB97A", jobTitle: "UI Designer", dept: "Product Design", appliedDate: "15 Jun 2035", type: "Full-Time", mode: "Remote", stage: "Interview Scheduled", stageNum: 2, totalStages: 5 },
    { id: 2, name: "Fanny Rizal", email: "fanny.rizal@email.com", avatar: "FR", color: "#F59E0B", jobTitle: "Sales Manager", dept: "Operations", appliedDate: "12 Jun 2035", type: "Full-Time", mode: "On-Site", stage: "Final Interview", stageNum: 4, totalStages: 5 },
    { id: 3, name: "Lala Wijaya", email: "lala.wijaya@email.com", avatar: "LW", color: "#8B5CF6", jobTitle: "Data Analyst", dept: "R&D", appliedDate: "14 Jun 2035", type: "Full-Time", mode: "Hybrid", stage: "Test Completed", stageNum: 3, totalStages: 5 },
    { id: 4, name: "Arifin Maulana", email: "arifin.maulana@email.com", avatar: "AM", color: "#EC4899", jobTitle: "Customer Support", dept: "Customer Service", appliedDate: "13 Jun 2035", type: "Full-Time", mode: "On-Site", stage: "Interview Scheduled", stageNum: 2, totalStages: 5 },
    { id: 5, name: "Clara Mentari", email: "clara.mentari@email.com", avatar: "CM", color: "#06B6D4", jobTitle: "HR Assistant", dept: "Human Resources", appliedDate: "10 Jun 2035", type: "Internship", mode: "On-Site", stage: "Application Received", stageNum: 1, totalStages: 5 },
];

export const attendanceRecords = [
    { name: "William Hartono", id: "EMP-001", dept: "Product Design", date: "16 Jun 2035", checkIn: "8:45 AM", checkOut: "5:00 PM", status: "Present", avatar: "WH", color: "#3EB97A" },
    { name: "Fanny Rizal", id: "EMP-002", dept: "Operations", date: "16 Jun 2035", checkIn: "9:10 AM", checkOut: "6:00 PM", status: "Present", avatar: "FR", color: "#F59E0B" },
    { name: "Lala Wijaya", id: "EMP-003", dept: "R&D", date: "16 Jun 2035", checkIn: "–", checkOut: "–", status: "On Leave", avatar: "LW", color: "#8B5CF6" },
    { name: "Arifin Maulana", id: "EMP-004", dept: "Customer Service", date: "16 Jun 2035", checkIn: "8:00 AM", checkOut: "4:30 PM", status: "Present", avatar: "AM", color: "#EC4899" },
    { name: "Clara Mentari", id: "EMP-005", dept: "Human Resources", date: "16 Jun 2035", checkIn: "–", checkOut: "–", status: "Absent", avatar: "CM", color: "#06B6D4" },
    { name: "Ryan Kim", id: "EMP-006", dept: "Engineering", date: "16 Jun 2035", checkIn: "7:55 AM", checkOut: "5:15 PM", status: "Present", avatar: "RK", color: "#6366F1" },
    { name: "Olivia Mason", id: "EMP-007", dept: "Product Design", date: "16 Jun 2035", checkIn: "9:00 AM", checkOut: "5:30 PM", status: "WFH", avatar: "OM", color: "#14B8A6" },
];

export const leaveRequests = [
    { name: "Fanny Rizal", dept: "Operations", type: "Annual Leave", from: "18 Jun 2035", to: "22 Jun 2035", days: 5, status: "Pending", avatar: "FR", color: "#F59E0B" },
    { name: "Lala Wijaya", dept: "R&D", type: "Sick Leave", from: "16 Jun 2035", to: "17 Jun 2035", days: 2, status: "Approved", avatar: "LW", color: "#8B5CF6" },
    { name: "Clara Mentari", dept: "Human Resources", type: "Casual Leave", from: "20 Jun 2035", to: "20 Jun 2035", days: 1, status: "Rejected", avatar: "CM", color: "#06B6D4" },
    { name: "Ryan Kim", dept: "Engineering", type: "Annual Leave", from: "25 Jun 2035", to: "30 Jun 2035", days: 6, status: "Pending", avatar: "RK", color: "#6366F1" },
];

export const scheduleEvents = [
    { time: "10:00 AM", title: "Interview – Product Designer Candidate", tag: "Meeting Room", avatars: ["AB", "CD", "EF"] },
    { time: "01:00 PM", title: "Mid-Year Performance Review – Design Dept", tag: "Online Review Sheet", avatars: ["GH", "IJ"] },
    { time: "03:00 PM", title: "Quarterly Policy Review Meeting", tag: "Conference Room B", avatars: ["KL", "MN", "OP", "QR"] },
];

export const calDays = Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    hasEvent: [6, 10, 12, 16, 23, 27].includes(i + 1),
    today: i + 1 === 20,
}));