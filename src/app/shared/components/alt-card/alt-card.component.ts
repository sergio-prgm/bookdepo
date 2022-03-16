import { Component, Input, OnInit } from '@angular/core';
import { Book } from '@app/shared/interfaces/data.interface';

@Component({
  selector: 'app-alt-card',
  templateUrl: './alt-card.component.html',
  styleUrls: ['./alt-card.component.scss']
})
export class AltCardComponent {
  @Input() search!: Book
  constructor() { }

}
