import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGames, IGetGames, IGetJackpot } from '../games.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  baseURL: string = 'http://stage.whgstage.com/front-end-test/';

  constructor(private http: HttpClient) {}

  getGamesList() {
    console.log(this.baseURL);
    return this.http.get<IGames[]>(this.baseURL + 'games.php');
  }

  getJackpots() {
    const url = `${this.baseURL}`;
    return this.http.get<IGetJackpot>(this.baseURL + 'jackpots.php');
  }
}
