import React, { useState } from "react";
import { register } from "../../https";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";

const Register = ({setIsRegister}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelection = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate(formData);
  };

  const registerMutation = useMutation({
    mutationFn: (reqData) => register(reqData),
    onSuccess: (res) => {
      const { data } = res;
      enqueueSnackbar(data.message, { variant: "success" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
      
      setTimeout(() => {
        setIsRegister(false);
      }, 1500);
    },
    onError: (error) => {
      const { response } = error;
      const message = response.data.message;
      enqueueSnackbar(message, { variant: "error" });
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-400 mb-2 text-sm font-medium">
            Employee Name
          </label>
          <div className="flex item-center rounded-lg p-5 px-4 bg-gray-800/50 border border-gray-700">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-400 mb-2 mt-3 text-sm font-medium">
            Employee Email
          </label>
          <div className="flex item-center rounded-lg p-5 px-4 bg-gray-800/50 border border-gray-700">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter employee email"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-400 mb-2 mt-3 text-sm font-medium">
            Employee Phone
          </label>
          <div className="flex item-center rounded-lg p-5 px-4 bg-gray-800/50 border border-gray-700">
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter employee phone"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-400 mb-2 mt-3 text-sm font-medium">
            Password
          </label>
          <div className="flex item-center rounded-lg p-5 px-4 bg-gray-800/50 border border-gray-700">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-400 mb-2 mt-3 text-sm font-medium">
            Choose your role
          </label>

          <div className="flex item-center gap-3 mt-4">
            {["Waiter", "Cashier", "Admin"].map((role) => {
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => handleRoleSelection(role)}
                  className={`bg-gray-800/50 border border-gray-700 px-4 py-3 w-full rounded-lg text-gray-400 transition-colors ${
                    formData.role === role ? "bg-indigo-600 text-white border-indigo-500" : "hover:bg-gray-700/50"
                  }`}
                >
                  {role}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg mt-6 py-3 text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
