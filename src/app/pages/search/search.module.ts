import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchBarModule } from '@app/shared/components/search-bar/search-bar.module';
import { CardModule } from '@app/shared/components/card/card.module';
import { AltCardModule } from '@app/shared/components/alt-card/alt-card.module';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchBarModule,
    CardModule,
    AltCardModule
  ]
})
export class SearchModule { }
