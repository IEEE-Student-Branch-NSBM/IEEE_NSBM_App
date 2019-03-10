import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'tab2',loadChildren: './tabs/tab2.module#Tab2PageModule'},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'news-view/:id', loadChildren: './news-view/news-view.module#NewsViewPageModule' },

  //redirect
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
