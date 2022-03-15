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

  constructor(private readonly http: HttpClient) { }

  searchData(item: string): void {
    const params = {
      q: `inauthor:${item}`,
      key: environment.apiKey
    }

    this.http.get<ApiResponse>(environment.searchUrl, {params})
      .pipe(
      pluck('items'),
      tap(books => {
        this.addImg([...books])
        console.log(books)
      }),
    ).subscribe()
  }

  getData(): Observable<Book[]> {
    const params = {
      key: environment.apiKey
    }

    return this.http.get<ApiResponse>(environment.listUrl + environment.bolano, {params})
      .pipe(
      pluck('items'),
      // tap(books => {
      //   this.addImg(books)
      //   console.log(books)
      // }),
      // catchError(error => {
      //   console.warn(error.message)
      //   return of(error)
      // } )
    )
  }

  private addImg(books: Book[]): void {
    let bookImg = {
      volumeInfo: {
        imageLinks: {
          thumbnail: 'https://scrc.siu.edu/_common/images/new-images/rb3.jpg'
        }
      }
    }
    const newBook = books.filter(book => book.volumeInfo.authors
    )

    this.bookSubject.next(newBook)
  }

}
