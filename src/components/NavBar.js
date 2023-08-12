import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
function NavBar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div class='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'>
      <h5 class='my-0 mr-md-auto font-weight-normal'>Sumanas Technology</h5>

      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {isAuthenticated && (
        <nav class='my-2 my-md-0 mr-md-3 ml-3'>
          <a class='navbar-brand' style={{ fontSize: "16px" }}>
            <img
              src={user.picture}
              alt={user.name}
              style={{ width: "40px", borderRadius: "50%" }}
            />{" "}
            {user.name}
          </a>
        </nav>
      )}
    </div>
  );
}
export default NavBar;
