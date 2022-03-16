import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { finalize, Observable } from 'rxjs'
import { LoaderService } from '../services/loader.service'

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private loaderSvc: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderSvc.show()
    return next.handle(req).pipe(finalize(() => this.loaderSvc.hide()))
  }
}
