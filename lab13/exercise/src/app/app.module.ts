import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { ErrorComponent } from './error/error.component';

// import { DataService } from './service/data.service';  //not required due to providedIn: 'root' inside @Injectable for this service
// same for user-detail guard. Also remove UsersModule from imports inside @NgModule below

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //,UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
