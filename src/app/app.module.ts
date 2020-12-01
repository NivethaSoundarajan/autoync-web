import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastModule } from 'ng-uikit-pro-standard';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
// import {MatProgressSpinnerModule} from '@angular/material'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    FooterComponent,
    AlertDialogComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AdminLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ToastModule.forRoot(),
    OAuthModule.forRoot(),
    NgxMaterialTimepickerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
