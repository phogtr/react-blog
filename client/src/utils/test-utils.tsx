import { mount, ReactWrapper } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "./UserContext";

export const mountComponent = (component: JSX.Element): ReactWrapper => {
  const wrapper = mount(<Router>{component}</Router>);
  return wrapper;
};

export const userLoginMountComponent = (component: JSX.Element): ReactWrapper => {
  const value = {
    userData: {
      accessToken: "user_token",
      userId: "60dc19fb0248aa3b1c5706f1",
      userName: "test",
      isAdmin: false,
    },
    setUser: () => {},
  };

  const wrapper = mount(
    <UserContext.Provider value={value}>
      <Router>{component}</Router>
    </UserContext.Provider>
  );
  return wrapper;
};
