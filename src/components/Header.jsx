import React from "react";
import { LogOut } from "react-feather";
import { useAuth } from "../utils/AuthContext";

function Header() {
  const { user, handleLogout } = useAuth();
  return (
    <div id="header--wrapper">
      {user ? (
        <>
          welcome {user.name}
          <LogOut onClick={handleLogout} className="header--link" />
        </>
      ) : (
        <button>LogIn</button>
      )}
    </div>
  );
}

export default Header;
