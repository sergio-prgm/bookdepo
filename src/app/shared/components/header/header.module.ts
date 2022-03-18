import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header.component'
import { RouterModule } from '@angular/router'
import { SearchBarModule } from '../search-bar/search-bar.module'

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, SearchBarModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
