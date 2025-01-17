# React Movie App

This project is a simple React-based movie app that showcases popular movies fetched from the TMDb API. Users can browse the homepage to view trending movies and add their favorite ones to a dedicated "Favorites" page for easy retrieval.

## Features

- **Home Page**: Displays a list of popular movies pulled from the TMDb API.

- **Favorites Page**: Allows users to save and view movies they have marked as favorites.

- **Interactive UI**: Designed with React to provide a smooth and responsive user experience.

## Screenshots

![Home Page](https://github.com/luneroka/movie-app/blob/main/frontend/public/MovieApp-HomePage.png?raw=true)

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-username/react-movie-app.git
    cd react-movie-app
    ```

2. Install dependencies:
    ```
    npm install
    ```
    or
    ```
    yarn install
    ```

3. Obtain an API key from [TMDb](https://www.themoviedb.org/):

    - Sign up for an account.
    - Navigate to your account settings and create a new API key.

4. Create a `.env` file in the project root and add your API key:

    ```
    REACT_APP_TMDB_API_KEY=your_api_key_here
    ```

### Running the Application

Start the development server:
```
npm start
```
or
```
yarn start
```

The app will be accessible at http://localhost:3000.

## Credits

This project was created by following along with the [tutorial](https://www.youtube.com/watch?v=G6D9cBaLViA) from [TechWithTim](https://www.youtube.com/@TechWithTim). The code and implementation are based on his instructional video as part of my learning journey with React.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [TMDb API](https://www.themoviedb.org/) for providing movie data.
- [TechWithTim](https://www.youtube.com/@TechWithTim) for the React tutorial.
