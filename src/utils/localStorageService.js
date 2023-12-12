// localStorageService.js

export const localStorageService = {
  getItem: (key) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error getting data from localStorage:', error);
      return undefined;
    }
  },

  setItem: (key, data) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  },

  deleteItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error deleting data from localStorage:', error);
    }
  },
};
