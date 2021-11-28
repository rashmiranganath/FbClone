import * as api from "../services/index";

export const loginAction = (user) => async (dispatch) => {
  try {
    const { data } = await api.login(user);
    console.log(user, "payload");
    dispatch({ type: "LOGIN", payload: data });
  } catch (error) {
    console.log("err");
    console.log(error);
  }
};
