import { removeUser } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface AccountDropdownProps {
  isSignedIn: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({
  isSignedIn,
  onSignIn,
  onSignOut,
}) => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    onSignOut();
    dispatch(removeUser());
  };
  return (
    <div className="absolute top-full right-0 w-96 bg-white text-black shadow-lg rounded-lg">
      <div className="p-4 flex justify-center items-center ">
        {isSignedIn ? (
          <button
            onClick={handleSignout}
            className="w-72 h-14 text-lg bg-yellow-300 hover:bg-yellow-500 py-2 px-1 rounded-md font-semibold"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={onSignIn}
            className="w-72 h-14 text-lg bg-yellow-300 hover:bg-yellow-500 py-2 px-4 rounded-md font-semibold"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountDropdown;
