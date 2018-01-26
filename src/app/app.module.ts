import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyDw-r_DseThdCpTLF63TzzLGgEh9jccS7o",
    authDomain: "barf-b6ffd.firebaseapp.com",
    databaseURL: "https://barf-b6ffd.firebaseio.com",
    projectId: "barf-b6ffd",
    storageBucket: "barf-b6ffd.appspot.com",
    messagingSenderId: "239334292238"
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
