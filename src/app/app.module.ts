import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './core/services/user.service';
import { SharedModule } from './common-components/shared.module'


@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
