import { Component } from '@angular/core'
import { ApiService } from '@app/shared/services/api.service'

@Component({
  selector: 'app-search',
  template: `
    <section class="search__container">
      <app-search-bar (submitted)="onSearch($event)"></app-search-bar>
      <ng-container *ngIf="conditional">
        <div class="card__container grid" *ngIf="searchs$ | async as searchs">
          <app-alt-card
            *ngFor="let search of searchs"
            [search]="search"></app-alt-card>
        </div>
      </ng-container>
    </section>

    <!-- <ng-template #showEmpty>
      <div class="noResults">
        <h2 class="title">No results</h2>
        <img src="../../../assets/img/404.jpeg" alt="404" />
      </div>
    </ng-template> -->
  `,
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchs$ = this.apiSvc.searchs$
  conditional: boolean = false

  constructor(private apiSvc: ApiService) {}

  onSearch(term: string): void {
    if (term) this.conditional = true
    else this.conditional = false
  }
}
