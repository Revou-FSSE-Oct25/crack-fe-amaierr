export function StatCard({ title, value, icon: Icon }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex justify-between">
        <p className="text-sm text-black font-semibold">{title}</p>
        <Icon size={18} strokeWidth={1} />
      </div>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
