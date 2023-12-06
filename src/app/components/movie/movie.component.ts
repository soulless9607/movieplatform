import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any[] = []; // Array to hold movie data

  constructor() { }

  ngOnInit() {
    // Fetch movies from a service or API and populate the movies array
    // This can be done using HttpClient to get movie data from an API
    // For demonstration, a sample movies array is used
    this.movies = [
      { title: 'Avengers', releaseDate: '2023-01-01', thumbnail: '../../../assets/resources/Avengers.png' },
      { title: 'Guardians of the Galaxy', releaseDate: '2023-01-01', thumbnail: '../../../assets/resources/Guardians of The Galaxy.png' },
      { title: 'Knives Out', releaseDate: '2023-01-01', thumbnail: '../../../assets/resources/Knives Out.png' },
      { title: 'Spider Man', releaseDate: '2023-01-01', thumbnail: '../../../assets/resources/Spider Man.png' },
      { title: 'Tenet', releaseDate: '2023-01-01', thumbnail: '../../../assets/resources/Tenet.png' },
      { title: 'Black Panther', releaseDate: '2023-01-01', thumbnail: '../../../assets/resources/BlackPanter.jpg' },

    ];
  }

  sortByTitle() {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortByReleaseDate() {
    this.movies.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
  }

  addToWatchlist(movie: any) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist') as string) || [];
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

}
