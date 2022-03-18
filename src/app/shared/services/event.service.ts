import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventSubject = new BehaviorSubject<boolean>(false)
  event$ = this.eventSubject.asObservable()

  searchEvent(data: string): void {
    this.eventSubject.next(!!data)
    console.log(`Event -> ${!!data} ${data}`)
  }

  constructor() {}
}
