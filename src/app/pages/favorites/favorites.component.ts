import { Component } from '@angular/core'
import { ApiService } from '@app/shared/services/api.service'

@Component({
  selector: 'app-favorites',
  template: `
    <section class="book__collection">
      <h2>Bienvenido al punto de encuentro de todos tus libros</h2>
      <div class="card-container">
        <app-card *ngFor="let book of books$ | async" [book]="book"></app-card>
      </div>
    </section>
  `,
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  books$ = this.apiSvc.books$

  constructor(private apiSvc: ApiService) {
    this.apiSvc.getData()
  }
}
