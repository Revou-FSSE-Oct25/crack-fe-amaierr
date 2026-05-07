"use client";

import { useUserStore } from "@/stores/userStore";
import InstructorDashboard from "./instructorDashboard";
import StudentDashboard from "./studentDashboard";

export default function DashboardPage() {
  const { user } = useUserStore();

  return (
    <div>
      {user.role === "Student" && <StudentDashboard />}
      {user.role === "Instructor" && <InstructorDashboard />}
    </div>
  );
}
