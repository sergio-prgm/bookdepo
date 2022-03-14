import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { BehaviorSubject, map, Observable, pluck } from 'rxjs';
import { ApiResponse, Book } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private bookSubject = new BehaviorSubject<Book[]>([])
  // books$ = this.bookSubject.asObservable()

  constructor(private readonly http: HttpClient) { }

  searchData(item: string): Observable<Book[]> {
    const params = {
      q: `inauthor:${item}`,
      key: environment.apiKey
    }

    return this.http.get<ApiResponse>(environment.searchUrl, {params})
      .pipe(
      pluck('items')

    )
  }

  getData(): Observable<Book[]> {
    const params = {
      key: environment.apiKey
    }

    return this.http.get<ApiResponse>(environment.listUrl + environment.bolano, {params})
      .pipe(
      pluck('items')
    )

  }

  // private parseBookData(books: Book[]): void {
  //   const hasImg = books.filter((book: Book) => !book.volumeInfo.imageLinks)
  //   const fallbackImg: string = '../../../assets/img/404.jpeg'

  //   const newData = books.map((book) => {
  //    if (!book.volumeInfo.imageLinks)
  //    return { ...book, volumeInfo.imageLinks.thumbnail: fallbackImg }
  //   })
  //   this.
  // }

}
