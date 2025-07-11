export default function QuickActions() {
  return (
    <div className="w-full p-16 bg-white rounded-2xl hover:-translate-y-4">
      <div className="space-y-8">
        <h3 className="flex items-center text-5xl font-semibold text-nowrap">quick actions</h3>
        <div className="grid w-full grid-cols-2 gap-8">
          <div className="flex items-center p-4 text-3xl font-medium border cursor-pointer hover:scale-95 hover:bg-gray-200 rounded-2xl bg-gray-50 text-wrap">
            sleep help
          </div>
          <div className="flex items-center p-4 text-3xl font-medium border cursor-pointer hover:scale-95 hover:bg-gray-200 rounded-2xl bg-gray-50 text-wrap">
            hydration reminder
          </div>
          <div className="flex items-center p-4 text-3xl font-medium border cursor-pointer hover:scale-95 hover:bg-gray-200 rounded-2xl bg-gray-50 text-wrap">
            quick medication
          </div>
          <div className="flex items-center p-4 text-3xl font-medium border cursor-pointer hover:scale-95 hover:bg-gray-200 rounded-2xl bg-gray-50 text-wrap">
            mood check
          </div>
        </div>
      </div>
    </div>
  );
}
