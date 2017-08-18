'use strict';

const recipeApi = {
  getRecipe(id){
    let url = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = recipeApi;