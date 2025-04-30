import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProdDashComponent } from './shared/components/prod-dash/prod-dash.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProdFormComponent } from './shared/components/prod-form/prod-form.component';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { UserComponent } from './shared/components/user/user.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GetconfirmComponent } from './shared/components/getconfirm/getconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProdDashComponent,
    ProductComponent,
    ProdFormComponent,
    UserDashComponent,
    UserFormComponent,
    UserComponent,
    GetconfirmComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
