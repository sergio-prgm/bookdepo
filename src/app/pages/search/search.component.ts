import { Component, OnInit } from '@angular/core';
import { Book } from '@app/shared/interfaces/data.interface';
import { ApiService } from '@app/shared/services/api.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  book$!: Observable<Book[]>

  constructor(private apiSvc: ApiService) {
    
   }

  ngOnInit(): void {
  }

  onSearch(term: string): void {
    this.book$ = this.apiSvc.search(term)
  }

}
