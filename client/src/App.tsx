import { BrowserRouter as Router } from "react-router-dom";
import { NavBar, RouteWrapper } from "./components";
import { useSession } from "./utils/useSession";
import { UserContext } from "./utils/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { userData, setUser } = useSession();
  const value = { userData, setUser };

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
