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
    <header className="flex justify-between items-center py-4 px-8 bg-white/10 backdrop-blur-md border-b border-white/20">
      {/* LOGO */}
      <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
        <img src={logo} className="h-8 w-8" alt="restro logo" />
        <h1 className="text-lg font-semibold text-white tracking-wide">
          Restro
        </h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-white" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white placeholder-white/70 w-full"
        />
      </div>

      {/* LOGGED USER DETAILS */}
      <div className="flex items-center gap-4">
        {userData.role === "Admin" && (
          <div onClick={() => navigate("/dashboard")} className="bg-white/20 backdrop-blur-sm rounded-[15px] p-3 cursor-pointer hover:bg-white/30 transition-all">
            <MdDashboard className="text-white text-2xl" />
          </div>
        )}
        <div className="bg-white/20 backdrop-blur-sm rounded-[15px] p-3 cursor-pointer hover:bg-white/30 transition-all">
          <FaBell className="text-white text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-white text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-white font-semibold tracking-wide">
              {userData.name || "TEST USER"}
            </h1>
            <p className="text-xs text-white/70 font-medium">
              {userData.role || "Role"}
            </p>
          </div>
          <IoLogOut
            onClick={handleLogout}
            className="text-white ml-2 hover:text-red-300 transition-colors"
            size={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
