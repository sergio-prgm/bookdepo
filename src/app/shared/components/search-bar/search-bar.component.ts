import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { ApiService } from '@app/shared/services/api.service'
import { EventService } from '@app/shared/services/event.service'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Subject,
  takeUntil,
  tap,
} from 'rxjs'

@Component({
  selector: 'app-search-bar',
  template: `
    <section class="searchbar__container">
      <div class="searchbar__inputs">
        <input
          type="text"
          class="searchbar__input"
          placeholder="Search book"
          [formControl]="searchInput" />
        <button class="button" (click)="onClear()">Clear</button>
      </div>
    </section>
  `,
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnDestroy, OnInit {
  searchInput = new FormControl('')
  private destroy$ = new Subject<unknown>()

  @Output() submitted = new EventEmitter<string>()

  constructor(private apiSvc: ApiService, private eventSvc: EventService) {}

  ngOnInit(): void {
    this.onChange()
  }

  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete()
  }

  onClear(): void {
    this.searchInput.setValue('')
  }

  onChange(): void {
    this.searchInput.valueChanges
      .pipe(
        tap((res: string) => this.eventSvc.searchEvent(res)),
        map((search: string) => search.split(' ').join('+')),
        debounceTime(150),
        distinctUntilChanged(),
        filter((search: string) => search !== '' && search.length > 2),
        tap((search: string) => this.apiSvc.searchData(search)),
        takeUntil(this.destroy$)
      )
      .subscribe()
  }
}
