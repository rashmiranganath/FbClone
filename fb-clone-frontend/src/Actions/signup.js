import * as api from "../services/index";

export const createSignupUser = (user) => async (dispatch) => {
  console.log(user, "user");

  try {
    const { data } = await api.postSignupData(user);
    dispatch({ type: "CREATE_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
