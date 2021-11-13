const storage = window.localStorage;

const getItem = (keyword, defaultValue) => {
  try {
    const storedData = storage.getItem(keyword) || defaultValue;
    return JSON.parse(storedData);
  } catch (error) {
    alert(error);
  }
};

const setItem = (keyword, value) => {
  try {
    storage.setItem(keyword, JSON.stringify(value));
  } catch (error) {
    alert(error);
  }
};

export { getItem, setItem };
