import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGames, IJackpot } from '../games.model';
import { IJackpotState } from '../store/jackpot.state';
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

  getJackpots(): Observable<IJackpotState> {
    console.log(this.baseURL);
    const url = `${this.baseURL}`;
    return this.http.get<IJackpotState>(this.baseURL + 'jackpots.php');
  }
}
