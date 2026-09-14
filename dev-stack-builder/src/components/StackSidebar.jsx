const StackSidebar = ({ stack, onRemove }) => {
  return (
    <aside className="w-full lg:w-[300px]">
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack ({stack.length})
        </h2>

        {stack.length === 0 ? (
          <>
            <p className="text-sm text-gray-400 mt-1">No technologies selected yet.</p>
            <div className="mt-5 border border-dashed border-gray-300 rounded-xl h-32 flex items-center justify-center">
              <p className="text-sm text-gray-400">Your stack is empty.</p>
            </div>
          </>
        ) : (
          <ul className="mt-4 space-y-2">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="border rounded-lg p-2 flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold">{tech.name}</span>
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                    {tech.category}
                  </span>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-red-500 text-sm font-semibold hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default StackSidebar;
