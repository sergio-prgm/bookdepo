import { Component } from '@angular/core'
import { LoaderService } from '@app/shared/services/loader.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading$ = this.loaderSvc.isLoading$
  constructor(private loaderSvc: LoaderService) {}
}
