import { Component} from '@angular/core';
import { ApiService } from '@app/shared/services/api.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent{
  books$ = this.apiSvc.books$

  constructor(private apiSvc: ApiService) {
    this.apiSvc.getData()
   }

}
