import React from "react";
import NavbarComponent from "../../components/common/NavbarComponent";

function NavbarContainer({ isLoggined, user }) {
  return <NavbarComponent user={user} isLoggined={isLoggined} />;
}

export default NavbarContainer;
