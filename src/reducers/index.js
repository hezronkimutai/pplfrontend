const initialState = {
  navItems: [
    {
      name: "Home",
      url: "/",
      loggedIn: false
    },
    {
      name: "Signup",
      url: "/signup",
      loggedIn: false
    },
    {
      name: "Signin",
      url: "/signin",
      loggedIn: false
    },
    {
      name: "Create Property",
      url: "/createProperty",
      loggedIn: false
    },
    {
      name: "Property",
      url: "/property",
      loggedIn: false
    },
    {
      name: "Properties",
      url: "/properties",
      loggedIn: false
    },
    {
        name: "Profile",
        url: "/profile",
        loggedIn: false
      },
  ]
};
const cc = (state = initialState, action) => {
  switch (action.type) {
    case "NAV_LOGGED_IN":
      return state.navItems.filter(nav => nav.loggedIn == true);
    case "NAV_NOT_LOGGED_IN":
      return state.navItems.filter(nav => nav.loggedIn == true);
    default:
      return state;
  }
};
export default cc;
