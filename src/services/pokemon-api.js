function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Doesn´t find pokemon with name ${name}`));
  });
}

const api = {
  fetchPokemon,
};

export default api;
