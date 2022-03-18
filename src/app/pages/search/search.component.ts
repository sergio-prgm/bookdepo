import { Component } from '@angular/core'
import { ApiService } from '@app/shared/services/api.service'
import { EventService } from '@app/shared/services/event.service'

@Component({
  selector: 'app-search',
  template: `
    <ng-container *ngIf="event$ | async">
      <section class="modal flex">
        <div class="modal__body flex">
          <div class="card__container grid" *ngIf="searchs$ | async as searchs">
            <app-alt-card
              *ngFor="let search of searchs"
              [search]="search"></app-alt-card>
          </div>
        </div>
      </section>
    </ng-container>

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
  condition: boolean = false
  event$ = this.eventSvc.event$

  constructor(private apiSvc: ApiService, private eventSvc: EventService) {}

  onSearch(term: string): void {
    if (term) this.condition = true
    else this.condition = false
  }
}
