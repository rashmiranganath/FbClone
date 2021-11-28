const login = (userData = [], action) => {
  console.log("payload", action.payload);
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return [...userData, action.payload];

    default:
      return userData;
  }
};

export default login;
