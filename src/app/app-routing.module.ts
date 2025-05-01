import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { UserComponent } from './shared/components/user/user.component';
import { ProdDashComponent } from './shared/components/prod-dash/prod-dash.component';
import { ProdFormComponent } from './shared/components/prod-form/prod-form.component';
import { ProductComponent } from './shared/components/product/product.component';
import { FairDashComponent } from './shared/components/fair-dash/fair-dash.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';

const routes: Routes = [
  {
    path: ' ',
    // component:HomeComponent
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserDashComponent,
    children: [
      {
        path: 'add',
        component: UserFormComponent,
      },
      {
        path: ':Id',
        component: UserComponent,
      },
      {
        path: ':Id/edit',
        component: UserFormComponent,
      },
    ],
  },
  {
    path: 'product',
    component: ProdDashComponent,
    children: [
      {
        path: 'add',
        component: ProdFormComponent,
      },
      {
        path: ':Id',
        component: ProductComponent,
      },
      {
        path: ':Id/edit',
        component: ProdFormComponent,
      },
    ],
  },
  {
    path: 'fairs',
    component: FairDashComponent,
    children: [
      {
        path: ':Id',
        component: FairsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
