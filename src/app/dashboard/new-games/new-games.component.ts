import { Component, Input } from '@angular/core';
import { IGames, ECategory, IJackpot } from '../games.model';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss'],
})
export class NewGamesComponent {
  @Input() gamesList: IGames;
  @Input() jackpotList: IJackpot;
  readonly eCategory = ECategory;
}
