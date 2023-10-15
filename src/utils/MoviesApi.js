import { moviesApiURL } from "../consts/urls";
import { checkResponse } from "./other";

export async function getMovies() {
  const res = await fetch(moviesApiURL);

  return checkResponse(res);
}