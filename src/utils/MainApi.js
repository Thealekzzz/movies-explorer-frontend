import { checkResponse } from "./other";

export async function getMe() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
    headers: {
      token: localStorage.getItem('token') || '',
    }
  });

  return checkResponse(res);
}

export async function patchMe(userData) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
    method: 'PATCH',
    body: JSON.stringify(userData),
    headers: {
      'content-type': 'application/json',
      token: localStorage.getItem('token') || '',
    }
  });

  return checkResponse(res);
}

export async function login(credentials) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  return checkResponse(res);
}

export async function register(credentials) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  return checkResponse(res);
}

export async function logout() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/signout`, {
    method: 'POST',
  });

  return checkResponse(res);
}

export async function getSavedMovies() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/movies`, {
    headers: {
      token: localStorage.getItem('token') || '',
    }
  });

  return checkResponse(res);
}

export async function likeMovie(movie) {
  const payload = {
    "country": movie.country,
    "director": movie.director,
    "duration": movie.duration,
    "year": String(movie.duration),
    "description": movie.description,
    "image": 'https://api.nomoreparties.co' + movie.image.url,
    "trailer": movie.trailerLink,
    "nameRU": movie.nameRU,
    "nameEN": movie.nameEN,
    "thumbnail": 'https://api.nomoreparties.co' + movie.image.url,
    "movieId": movie.id,
  }

  const res = await fetch(`${process.env.REACT_APP_API_URL}/movies`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json',
      token: localStorage.getItem('token') || '',
    }
  });

  return checkResponse(res);
}

export async function unlikeMovie(movieId) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      token: localStorage.getItem('token') || '',
    }
  });

  return checkResponse(res);
}