import { Component, OnInit } from '@angular/core';
import { Book } from '@app/shared/interfaces/data.interface';
import { ApiService } from '@app/shared/services/api.service';
import { filter, map, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  books$!: Observable<Book[]>

  constructor(private apiSvc: ApiService) {
    
   }

  ngOnInit(): void {
  }

  onSearch(term: string): void {
    this.books$ = this.apiSvc.searchData(term)
    // this.books$.pipe(
    //   tap(res => console.log(res))
    // ).subscribe()
  }

}
