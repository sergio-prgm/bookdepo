import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable, pluck } from 'rxjs';
import { ApiResponse, Book } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  search(item: string): Observable<Book[]> {
    const params = {
      q: `inauthor:${item}`,
      key: environment.apiKey
    }

    return this.http.get<ApiResponse>(environment.url, {params})
    .pipe(
      pluck('items')
    )
    
  }

}
