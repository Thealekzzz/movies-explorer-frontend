import { mainApiURL } from "../consts/urls";
import { checkResponse } from "./other";


export async function getMe() {
  const res = await fetch(`${mainApiURL}/users/me`, {
    headers: {
      token: localStorage.getItem('token') || '',
    }
  });

  return checkResponse(res);
}

export async function login(credentials) {
  const res = await fetch(`${mainApiURL}/signin`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  return checkResponse(res);
}