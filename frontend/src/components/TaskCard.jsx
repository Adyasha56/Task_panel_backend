const TaskCard = ({ task, onEdit, onDelete, onStatusChange, currentUser }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  const priorityColors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
  };

  const isOwnTask = task.user._id === currentUser?._id;
  const isAdminTask = task.user.role === 'admin';
  const canDelete = isOwnTask; // Only delete your own tasks
  const canEdit = isOwnTask || currentUser?.role === 'admin'; // Owner or admin can edit

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-blue-500">
      {/* Creator Info */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-700 rounded">
            {isOwnTask ? 'Your Task' : `Created by ${task.user.name}`}
          </span>
          {task.user.role === 'admin' && (
            <span className="text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-700 rounded">
              Admin
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              statusColors[task.status]
            }`}
          >
            {task.status}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              priorityColors[task.priority]
            }`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-4">{task.description}</p>

      {task.dueDate && (
        <p className="text-sm text-gray-500 mb-4">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      <div className="flex gap-2 flex-wrap">
        {/* Edit Button - Only if owner or admin */}
        {canEdit && (
          <button
            onClick={() => onEdit(task)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm font-semibold"
          >
            Edit
          </button>
        )}

        {/* Status Change for non-owner (user viewing admin task) */}
        {!isOwnTask && !canEdit && (
          <button
            onClick={() => onStatusChange(task)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition text-sm font-semibold"
          >
            Update Status
          </button>
        )}

        {/* Delete Button - Only for own tasks */}
        {canDelete && (
          <button
            onClick={() => onDelete(task._id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm font-semibold"
          >
            Delete
          </button>
        )}

        {/* Info for admin tasks that user can't delete */}
        {isAdminTask && !isOwnTask && (
          <span className="text-xs text-gray-500 self-center italic">
            Admin tasks cannot be deleted
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;