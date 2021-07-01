import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Posts, Login, Register } from "./components";
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
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
