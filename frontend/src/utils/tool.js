export const ls = {
  set: (key, value, raw) => localStorage.setItem(key, raw ? value : JSON.stringify(value)),
  get: (key, raw) => {
    const rawData = localStorage.getItem(key);
    return raw ? rawData : JSON.parse(rawData);
  },
};
