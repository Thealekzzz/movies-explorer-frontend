import { CARDS_BY_WIDTH } from "../consts/other";

export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка ${response.status}`);
}

export function getCardsNumberByWidth(width) {
  const widths = Object.keys(CARDS_BY_WIDTH).sort((a, b) => a - b);
  const w = widths.find((w) => width < w);

  const key = w || Math.max(...widths);

  return CARDS_BY_WIDTH[key];
}

export function getTimeByDuration(duration) {
  return [Math.floor(duration / 60), duration % 60]
}

export function compareObjects(obj1, obj2) {
  // Проверяем, являются ли оба аргумента объектами
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return;
  }

  // Получаем ключи обоих объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Проверяем, равно ли количество ключей у обоих объектов
  if (keys1.length !== keys2.length) {
    return;
  }

  // Проходимся по каждому ключу и сравниваем значения
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];

    // Сравниваем значения по ключу
    if (obj1[key] !== obj2[key]) {
      return;
    }
  }

  return true;
}