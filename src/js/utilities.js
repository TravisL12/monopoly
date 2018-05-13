export function random(max, min) {
    min = min || 0;
    return Math.ceil(Math.random() * max + min);
}

export function $(el) {
  return document.querySelector(el);
}
