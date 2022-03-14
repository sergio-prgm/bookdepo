import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/shared/services/api.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private apiSvc: ApiService) {
    
   }

  ngOnInit(): void {
  }

  onSearch(term: string): void {
    
    this.apiSvc.search(term)
    .pipe(
      tap(res => console.log(res))
    )
    .subscribe()
  }

}
