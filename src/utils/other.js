import { cardsByWidth } from "../consts/other";

export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка ${response.status}`);
}

export function getCardsNumberByWidth(width) {
  const widths = Object.keys(cardsByWidth).sort((a, b) => a - b);
  const w = widths.find((w) => width < w);

  const key = w || Math.max(...widths);

  return cardsByWidth[key];
}

export function getTimeByDuration(duration) {
  return [Math.floor(duration / 60), duration % 60]
}