import React from 'react'

const DeleteAlert = ({ content, onDelete, onCancel }) => {
  return (
    <div>
      <p className="text-sm text-black">
        {content}
      </p>

      <div className="flex justify-end mt-6 gap-3">
        {/* Cancel Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium text-gray-500 whitespace-nowrap bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 cursor-pointer"
          onClick={onCancel}
        >
          Cancel
        </button>

        {/* Delete Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium text-rose-500 whitespace-nowrap bg-rose-50 border border-rose-100 rounded-lg px-4 py-2 cursor-pointer"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert