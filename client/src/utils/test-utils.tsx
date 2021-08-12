import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../redux/configureStore";
import { UserContext } from "./UserContext";
import { useSession } from "./useSession";

const AllTheProviders: FC = ({ children }) => {
  const { userData, setUser } = useSession();
  const value = { userData, setUser };

  return (
    <Provider store={store}>
      <UserContext.Provider value={value}>
        <Router>{children}</Router>
      </UserContext.Provider>
    </Provider>
  );
};

const customRender = (ui: ReactElement) => render(ui, { wrapper: AllTheProviders });

export * from "@testing-library/react";
export { customRender as render };
