# Pokemon Tournament

## Description

This project allows creating Pokemon Tournaments in 3 phases:

1. Pick 8 different pokemons.
2. Simulate a tournament based on random stone-paper-scissors choices.
3. Show the list of winners (position and total points).

This project uses the [Pokeapi](https://pokeapi.co/) to retrieve all the Pokemon data.

## Technical information

This is a ReactJS + TypeScript project, create with ViteJS, just for fun and for learning concepts.

It uses the following dependencies:

- *wouter*: a light router dependency, simpler than react-router.
- *tailwindcss*: a CSS library focused on utilities. Simple to use, and ideal for quick projects.
- *vitest*: a testing library used with ViteJS.
- *eslint*: a library for analyzing code statically and show errors.

### Tasks

- [x] Create a Pokemon selector which shows his/her number, name and sprite.
- [x] Show the Pokemon selected as a card where user will be able to check his/her type/s, some moves, experience...
- [x] Store the Pokemons selected by using the Context API.
- [ ] Create a tournament with the Pokemons selected (should be 8 of them).
- [ ] Show the Pokemon Tournament as a competition organigram.
- [ ] Run the fights based on stone, paper, scissors rules.
- [ ] Show the list winners

## Installation

After downloading the project, execute this command to install all the dependencies locally:

```
pnpm install
```

Go to the folder `pokedex` and type the following command to up the project:

```
pnpm run dev
```

In a browser, access to [http://localhost:3000](http://localhost:3000).