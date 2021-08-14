import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { mountComponent, userLoginMountComponent } from "../../../utils/test-utils";
import { NavBar } from "../NavBar";

const shallowComponent = (): ShallowWrapper => {
  const wrapper = shallow(<NavBar />);
  return wrapper;
};

describe("shallow render testing", () => {
  let shallowWrapper: ShallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallowComponent();
  });

  test("should render the logo name", () => {
    // console.log(wrapper.debug());
    const logo = shallowWrapper.find("Link");
    expect(logo.text()).toContain("React Blog");
  });
});

describe("mount render testing", () => {
  let mountWrapper: ReactWrapper;
  beforeEach(() => {
    mountWrapper = mountComponent(<NavBar />);
  });

  test("should render the logo name", () => {
    // console.log(mountWrapper.debug());
    const logo = mountWrapper.find("h5");
    expect(logo.text()).toContain("React Blog");
  });

  test("should have 3 links: Logo, Login, Register", () => {
    const navLinks = mountWrapper.find("Link");
    expect(navLinks.length).toBe(3);
  });

  test("the first Guess's nav link is Login", () => {
    const firstNavLink = mountWrapper.find("Link").at(1);
    expect(firstNavLink.text()).toContain("Login");
  });

  test("the second Guess's nav link is Register", () => {
    const firstNavLink = mountWrapper.find("Link").at(2);
    expect(firstNavLink.text()).toContain("Register");
  });
});

describe("user login mount render testing", () => {
  let userLoginmountWrapper: ReactWrapper;
  beforeEach(() => {
    userLoginmountWrapper = userLoginMountComponent(<NavBar />);
  });

  test("should have 4 links: Logo, Create Post, username, Logout", () => {
    const navLinks = userLoginmountWrapper.find("Link");
    expect(navLinks.length).toBe(4);
  });

  test("the first User's nav link is Create Post", () => {
    const firstNavLink = userLoginmountWrapper.find("Link").at(1);
    expect(firstNavLink.text()).toContain("Create Post");
  });

  test("the second User's nav link is username", () => {
    const firstNavLink = userLoginmountWrapper.find("Link").at(2);
    expect(firstNavLink.text()).toContain("test");
  });

  test("the third User's nav link is Logout", () => {
    const firstNavLink = userLoginmountWrapper.find("Link").at(3);
    expect(firstNavLink.text()).toContain("Logout");
  });
});
