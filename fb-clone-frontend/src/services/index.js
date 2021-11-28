import axios from "axios";

const url = "http://localhost:5000/fb";

export const getUserData = () => axios.get(url);

export const postSignupData = (newSignup) => {
  console.log("new", newSignup);
  return axios.post(`${url}/signup`, newSignup);
};

export const login = (user) => {
  return axios.post(`${url}/login`, user);
};
