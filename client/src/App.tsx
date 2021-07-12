import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components";
import store from "./redux/configureStore";
import { UserContext } from "./utils/UserContext";
import { useSession } from "./utils/useSession";

function App() {
  const { userData, setUser } = useSession();
  const value = { userData, setUser };

  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <UserContext.Provider value={value}>
          <Router>
            <Layout />
          </Router>
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
