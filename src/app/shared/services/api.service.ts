import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { BehaviorSubject, catchError, filter, map, Observable, of, pluck, tap } from 'rxjs';
import { ApiResponse, Book } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private bookSubject = new BehaviorSubject<Book[]>([])
  books$ = this.bookSubject.asObservable()
  
  private searchSubject = new BehaviorSubject<Book[]>([])
  searchs$ = this.searchSubject.asObservable()

  constructor(private readonly http: HttpClient) { }

  searchData(item: string): void {
    const params = {
      q: `${item}`,
      key: environment.apiKey
    }

    this.http.get<ApiResponse>(environment.searchUrl, {params})
      .pipe(
      pluck('items'),
      tap(books => {
        this.filterAuthor([...books])
        console.log(books)
      })
    ).subscribe()
  }

  getData(): void {
    const params = {
      key: environment.apiKey
    }

     this.http.get<ApiResponse>(environment.listUrl + environment.bolano, {params})
     .pipe(
      pluck('items'),
      tap(books => {
        this.addImg([...books])
        console.log(books)
      })
     ).subscribe()
  }

  private addImg(books: Book[]): void {
    const newBook = books.filter(book => book.volumeInfo.authors
    )
    this.bookSubject.next(newBook)
  }

  private filterAuthor(books: Book[]): void {
    const newBook = books.filter(book => book.volumeInfo.authors
    )
    this.searchSubject.next(newBook)
  }

}
