import { NgModule } from '@angular/core';
//import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { UserModule } from './user/user.module';


import { AngularFireAuthModule } from '@angular/fire/auth';
import { AboutComponent } from './about/about.component';
import { ClipComponent } from './clip/clip.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { VideoModule } from './video/video.module';

//import { AngularFireStorageModule } from '@angular/fire/storage';
/* for firebase db url  */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireStorageModule } from '@angular/fire/storage'; 

/*
not use it 
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

*/

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ClipComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    VideoModule,
    AngularFireStorageModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
