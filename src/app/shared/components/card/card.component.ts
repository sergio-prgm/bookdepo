import { Component, Input } from '@angular/core';
import { Book } from '@app/shared/interfaces/data.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() book!: Book

}
