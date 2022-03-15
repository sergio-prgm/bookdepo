import { Component, OnInit, Output, EventEmitter, OnDestroy  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '@app/shared/services/api.service';
import { debounceTime, distinctUntilChanged, filter, map, Subject, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-search-bar',
  template: `
  <section class="searchbar__container">
    <div class="searchbar__book">
      <label for="searchBook">Search</label>
      <div class="searchbar__inputs">
        <input 
        type="text" 
        class="searchbar__input"
        placeholder="Search book"
        [formControl]="searchInput">
        <button>Clear</button>
      </div>
    </div>
  </section>
`,
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnDestroy {
  searchInput = new FormControl('')
  private destroy$ = new Subject<unknown>()

  // @Output() submitted = new EventEmitter<string>()

  constructor(private apiSvc: ApiService) {
    this.onChange()
  }

  ngOnDestroy(): void {
    this.destroy$.next({})
    this.destroy$.complete()
  }

  onClear(): void {
    this.searchInput.reset()
  }

  onChange(): void {
    this.searchInput.valueChanges
    .pipe(
      map((search: string) => search.split(' ').join('+')),
      debounceTime(350),
      distinctUntilChanged(),
      filter((search: string) => search !== ''),
      tap((search: string) => this.apiSvc.searchData(search)),
      // takeUntil(this.destroy$)
    ).subscribe()
  }

}
