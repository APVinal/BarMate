'use strict';

const api = {
  getDrinks(liquor) {
    const alcohol = liquor.toLowerCase();
    let url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`;
    return fetch(url).then((res) => res.json());
  }
};


module.exports = api;
