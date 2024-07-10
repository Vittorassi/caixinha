const LS = {
  getItem: (key) => {
    const exists = localStorage.getItem(key);

    return exists;
  },

  setItem: (key, value) => {
    const exists = localStorage.getItem(key);

    if (exists) {
      console.log(
        "couldn't set value because it already exists, update it instead using the 'updateItem()' method"
      );
      return;
    }

    localStorage.setItem(key, value);
  },

  updateItem: (key, value) => {
    const exists = localStorage.getItem(key);

    if (exists === null) {
      console.log(
        "couldn't update value because it doesn't exists, create it instead using the 'setItem()' method"
      );
      return;
    }

    localStorage.setItem(key, value);
  },

  deleteItem: (key) => {
    const exists = localStorage.getItem(key);

    if (exists === null) {
      console.log("couldn't delete value because it doesn't exists");
      return;
    }

    localStorage.removeItem(key);
  },
};

export { LS };
