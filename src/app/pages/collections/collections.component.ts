import { Component } from '@angular/core'
import { ApiService } from '@app/shared/services/api.service'

@Component({
  selector: 'app-collections',
  template: `
    <section class="collection__container">
      <h1 class="collection__title">
        Bienvenido al punto de encuentro de todos tus libros
      </h1>
      <div class="colection__card-container">
        <app-card
          class="collection__card"
          *ngFor="let book of books$ | async"
          [book]="book"></app-card>
      </div>
    </section>
  `,
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent {
  books$ = this.apiSvc.books$

  constructor(private apiSvc: ApiService) {
    this.apiSvc.getData()
  }
}
