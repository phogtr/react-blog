import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Posts, Login, Register } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <h1>Hello World</h1>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
