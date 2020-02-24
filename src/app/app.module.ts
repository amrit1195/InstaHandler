import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {InstagramLoginComponent} from './UI/instagram-login/instagram-login.component';
import {DataManagerService} from './services/data-manager.service';
import { ImageViewerComponent } from './UI/image-viewer/image-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    InstagramLoginComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
