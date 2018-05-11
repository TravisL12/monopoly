export function random(max, min) {
    min = min || 0;
    return Math.ceil(Math.random() * max + min);
}
