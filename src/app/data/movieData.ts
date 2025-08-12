import { movieDataType } from "../utils/types";

export const moviedata:movieDataType[] = [
   {
    icon: 'movieicon.png',
    movieName: 'The Conjuring',
    releaseYear: 2013,
    genre: 'Horror',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'The Hangover',
    releaseYear: 2009,
    genre: 'Comedy',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'La La Land',
    releaseYear: 2016,
    genre: 'Romantic',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'A Quiet Place',
    releaseYear: 2018,
    genre: 'Horror',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'Superbad',
    releaseYear: 2007,
    genre: 'Comedy',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'Mad Max: Fury Road',
    releaseYear: 2015,
    genre: 'Action',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'John Wick',
    releaseYear: 2014,
    genre: 'Action',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'It',
    releaseYear: 2017,
    genre: 'Horror',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'The Notebook',
    releaseYear: 2004,
    genre: 'Romantic',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'Get Out',
    releaseYear: 2017,
    genre: 'Horror',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'Titanic',
    releaseYear: 1997,
    genre: 'Romantic',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'Pride & Prejudice',
    releaseYear: 2005,
    genre: 'Romantic',
   
  },
  {
    icon: 'movieicon.png',
    movieName: '21 Jump Street',
    releaseYear: 2012,
    genre: 'Comedy',
   
  },
   {
    icon: 'movieicon.png',
    movieName: 'Gladiator',
    releaseYear: 2000,
    genre: 'Action',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'Crazy Rich Asians',
    releaseYear: 2018,
    genre: 'Comedy',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'The Dark Knight',
    releaseYear: 2008,
    genre: 'Action',
   
  },
 
  {
    icon: 'movieicon.png',
    movieName: 'Us',
    releaseYear: 2019,
    genre: 'Horror',
   
  },
  {
    icon: 'movieicon.png',
    movieName: 'Me Before You',
    releaseYear: 2016,
    genre: 'Romantic',
   
  }
]

export const filteredGenres = [...new Set(moviedata.map(movie => movie.genre))]
console.log(filteredGenres)

export const FilterByGenre = (selectedGenre:string):movieDataType[] => {
  return moviedata.filter((movie)=>movie.genre === selectedGenre )
}

console.log(FilterByGenre("Romantic"))