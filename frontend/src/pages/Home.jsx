import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import '../css/Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    { id: 1, title: 'John Wick', release_date: '2014' },
    { id: 2, title: 'Batman Begins', release_date: '2005' },
    { id: 3, title: 'Joker', release_date: '2019' },
    { id: 4, title: 'Pacific Rim', release_date: '2013' },
    { id: 5, title: 'The Wild Robot', release_date: '2024' },
  ];

  function handleSearch(e) {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery('');
  }

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search for movies...'
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      <div className='movies-grid'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
