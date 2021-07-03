import { BrowserRouter as Router } from "react-router-dom";
import { NavBar, RouteWrapper } from "./components";
import { useSession } from "./utils/useSession";
import { UserContext } from "./utils/UserContext";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { userData, setUser } = useSession();
  const value = { userData, setUser };

  if (userData?.accessToken) {
    axios.defaults.headers.common["authorization"] = "Bearer " + userData.accessToken;
  }

  return (
    <>
      <UserContext.Provider value={value}>
        <Router>
          <NavBar />
          <h1>Hello World</h1>
          <RouteWrapper />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
