import store from "../store";
import axios from "axios";

export function getUserData() {
  axios.get("https://api.github.com/users/altissiana").then(resp => {
    console.log(resp.data);
    store.dispatch({
      type: "GET_USER_DATA",
      userData: resp.data
    });
  });
}

export function getRepoData() {
  axios.get("https://api.github.com/users/altissiana/repos").then(resp => {
    console.log(resp.data);
    store.dispatch({
      type: "GET_REPO_DATA",
      repoData: resp.data
    });
  });
}
