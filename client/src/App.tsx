import { BrowserRouter as Router } from "react-router-dom";
import { NavBar, RouteWrapper } from "./components";
import { useSession } from "./utils/useSession";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const { userData, setUser } = useSession();

  if (userData?.accessToken) {
    axios.defaults.headers.common["authorization"] = "Bearer " + userData.accessToken;
  }

  return (
    <>
      <Router>
        <NavBar userData={userData} setUser={setUser} />
        <h1>Hello World</h1>
        <RouteWrapper setUser={setUser} />
      </Router>
    </>
  );
}

export default App;
