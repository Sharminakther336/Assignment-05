const StackSidebar = () => {
  return (
    <aside className="w-full lg:w-[300px]">
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-1">
          No technologies selected yet.
        </p>

        {/* Empty Box */}
        <div className="mt-5 border border-dashed border-gray-300 rounded-xl h-32 flex items-center justify-center">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>
        </div>

      </div>
    </aside>
  );
};

export default StackSidebar;