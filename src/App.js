import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <NavBar />
      {isAuthenticated ? <Profile /> : <Home />}
    </div>
  );
}

export default App;
