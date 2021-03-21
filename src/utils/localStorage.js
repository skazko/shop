export function getLSdata(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
}

export function setLSdata(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return null;
  }
}
