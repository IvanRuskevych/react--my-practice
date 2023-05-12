import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import pokemonApi from '../services/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    // loading: false,//var 01
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.pokemonName);
    console.log(this.props.pokemonName);
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      // this.setState({ loading: true, pokemon: null });//var 01
      this.setState({ status: 'pending' });

      pokemonApi
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(() => this.setState({ loading: false }));// var 01;
      // setTimeout(() => {

      // }, 2000);
    }
  }

  render() {
    // var 01
    // const { loading, pokemon, error, status } = this.state;
    // const { pokemonName } = this.props;

    // return (
    //   <div>
    //     {error && <p>{error.message}</p>}
    //     {loading && <p>Loading ...</p>}
    //     {!pokemonName && <p>Enter pokemon´s name</p>}

    //     {pokemon && (
    //       <div>
    //         <p>{pokemon.name}</p>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt=""
    //           width="300"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );

    // var 02 Паттерн state machine
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <p>Enter pokemon´s name</p>;
    }

    if (status === 'pending') {
      // return <p>Loading ...</p>;
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'resolved') {
      // return (
      //   <div>
      //     <p>{pokemon.name}</p>
      //     <img
      //       src={pokemon.sprites.other['official-artwork'].front_default}
      //       alt=""
      //       width="300"
      //     />
      //   </div>
      // );

      return <PokemonDataView pokemon={pokemon} />;
    }

    if (status === 'rejected') {
      // return <p>{error.message}</p>;
      return <PokemonErrorView message={error.message} />;
    }
  }
}
// pokemon.sprites.other["official-artwork"].front_default
