import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import Input from "../../components/Inputs/Input";
import Modal from "../../components/Modal";
import DeleteAlert from "../../components/DeleteAlert";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS);
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Edit
  const handleEdit = (user) => {
    setEditUser({ ...user });
    setEditModalOpen(true);
  };

  // Handle Delete
  const handleDelete = (userId) => {
    setDeleteUserId(userId);
    setDeleteModalOpen(true);
  };

  // Save Edit
  const handleSaveEdit = async () => {
    setLoading(true);
    try {
      await axiosInstance.put(API_PATHS.USERS.UPDATE_USER(editUser._id), {
        name: editUser.name,
        email: editUser.email,
        profileImageUrl: editUser.profileImageUrl, // Keep the existing profile image URL
      });
      toast.success("User updated");
      setEditModalOpen(false);
      fetchUsers();
    } catch (err) {
      console.error("Error updating user:", err);
      toast.error("Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  // Confirm Delete
  const confirmDelete = async () => {
    setLoading(true);
    try {
      await axiosInstance.delete(API_PATHS.USERS.DELETE_USER(deleteUserId));
      toast.success("User deleted");
      setDeleteModalOpen(false);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout activeMenu="Team Members">
      <div className="my-5">
        <h2 className="text-xl font-medium mb-4">Manage Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user._id} className="user-card flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img
                  src={user.profileImageUrl}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="card-btn" onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button className="card-btn-fill" onClick={() => handleDelete(user._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        <Modal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} title="Edit User">
          {editUser && (
            <div className="space-y-3">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500 mb-1">Current Profile Picture</span>
                <img
                  src={editUser.profileImageUrl}
                  alt="Current"
                  className="w-16 h-16 rounded-full border mb-2"
                />
              </div>
              <Input
                value={editUser.name}
                onChange={({ target }) => setEditUser((u) => ({ ...u, name: target.value }))}
                label="Full Name"
                placeholder="Name"
                type="text"
              />
              <Input
                value={editUser.email}
                onChange={({ target }) => setEditUser((u) => ({ ...u, email: target.value }))}
                label="Email"
                placeholder="Email"
                type="text"
              />
              <div className="flex justify-end">
                <button className="btn-primary" onClick={handleSaveEdit} disabled={loading}>
                  Save
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* Delete Modal */}
        <Modal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          title="Delete User"
        >
          <DeleteAlert
            content="Are you sure you want to delete this user? Deleting this user may also delete tasks assigned to them if no other user is working on those tasks."
            onDelete={confirmDelete}
            onCancel={() => setDeleteModalOpen(false)} // Pass the onCancel function
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default ManageUsers;
