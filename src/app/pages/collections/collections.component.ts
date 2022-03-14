import { Component, OnInit } from '@angular/core';
import { Book } from '@app/shared/interfaces/data.interface';
import { ApiService } from '@app/shared/services/api.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  books$: Observable<Book[]> = this.apiSvc.getData()

  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {


  }

}
