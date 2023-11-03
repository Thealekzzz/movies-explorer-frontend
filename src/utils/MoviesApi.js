import { MOVIES_API_URL } from "../consts/urls";
import { checkResponse } from "./other";

export async function getMovies() {
  const res = await fetch(MOVIES_API_URL);

  return checkResponse(res);
}