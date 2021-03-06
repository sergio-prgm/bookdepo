import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'book-details/:id',
    loadChildren: () =>
      import('./pages/book-details/book-details.module').then(
        m => m.BookDetailsModule
      ),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./pages/collections/collections.module').then(
        m => m.CollectionsModule
      ),
  },
  { path: 'welcome', redirectTo: '', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
