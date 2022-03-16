import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CollectionsRoutingModule } from './collections-routing.module'
import { CollectionsComponent } from './collections.component'
import { CardModule } from '@app/shared/components/card/card.module'

@NgModule({
  declarations: [CollectionsComponent],
  imports: [CommonModule, CollectionsRoutingModule, CardModule],
})
export class CollectionsModule {}
