import MovieCard from '../components/MovieCard';

function Home() {
  const movies = [
    { id: 1, title: 'John Wick', release_date: '2014' },
    { id: 2, title: 'Batman Begins', release_date: '2005' },
    { id: 3, title: 'Joker', release_date: '2019' },
    { id: 4, title: 'Pacific Rim', release_date: '2013' },
    { id: 5, title: 'The Wild Robot', release_date: '2024' },
  ];

  return (
    <div className='home'>
      <div className='movies-grid'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;