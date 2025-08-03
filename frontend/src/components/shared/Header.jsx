import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Header = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {
      console.log(data);
      dispatch(removeUser());
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      {/* LOGO */}
      <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
        <img src={logo} className="h-8 w-8" alt="restro logo" />
        <h1 className="text-lg font-semibold text-white tracking-wide">
          Restro
        </h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-4 bg-gray-800/50 rounded-xl px-5 py-3 w-[500px] border border-gray-700">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white placeholder-gray-400 flex-1"
        />
      </div>

      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        {userData.role === "Admin" && (
          <div onClick={() => navigate("/dashboard")} className="bg-gray-800/50 rounded-xl p-3 cursor-pointer hover:bg-gray-700/50 transition-colors border border-gray-700">
            <MdDashboard className="text-white text-2xl" />
          </div>
        )}
        <div className="bg-gray-800/50 rounded-xl p-3 cursor-pointer hover:bg-gray-700/50 transition-colors border border-gray-700">
          <FaBell className="text-white text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-indigo-400 text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-white font-semibold tracking-wide">
              {userData.name || "TEST USER"}
            </h1>
            <p className="text-xs text-gray-400 font-medium">
              {userData.role || "Role"}
            </p>
          </div>
          <IoLogOut
            onClick={handleLogout}
            className="text-gray-400 hover:text-red-400 ml-2 transition-colors cursor-pointer"
            size={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
