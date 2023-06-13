import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'adminPage', component: AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
