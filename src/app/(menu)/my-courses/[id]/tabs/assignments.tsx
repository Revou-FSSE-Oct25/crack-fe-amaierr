interface AssignmentTabData{
    assignments: {
        id: number;
        title: string;
        dueDate: string;
        points: number;
        status: "pending" | "submitted";
        grade?: string;
    }[]
}

export default function AssignmentsTab({assignments}: AssignmentTabData){
    return (
        <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Course Assignments</h2>

                {assignments.map((assignment) => (
                  <div key={assignment.id} className="rounded-2xl border p-6">
                    <div className="flex flex-col justify-between gap-6 md:flex-row">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-semibold">
                            {assignment.title}
                          </h3>

                          <p className="mt-2 text-gray-500">
                            Due: {assignment.dueDate}
                          </p>
                        </div>

                        {assignment.grade && (
                          <p className="font-semibold">
                            Grade: {assignment.grade}
                          </p>
                        )}

                        <button className="rounded-xl border px-5 py-3 font-medium transition hover:bg-gray-50">
                          {assignment.status === "pending"
                            ? "Submit Assignment"
                            : "View Submission"}
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium capitalize">
                          {assignment.status}
                        </span>

                        <p className="mt-4 text-lg text-gray-500">
                          {assignment.points} points
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    )
}