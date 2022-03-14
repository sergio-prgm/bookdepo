import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';


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
        <button>Go!</button>
        <button>Clear</button>
      </div>
    </div>
  </section>
`,
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchInput = new FormControl('')
  @Output() submitted = new EventEmitter<string>()

  constructor() {
   }

  ngOnInit(): void {
    this.onChange()
  }

  onChange(): void {
    this.searchInput.valueChanges.
    pipe(
      map((search: string) => search.split(' ').join('+')),
      debounceTime(350),
      distinctUntilChanged(),
      filter((search: string) => search !== ''),
      tap((search: string) => this.submitted.emit(search))
    ).subscribe()
  }

}
