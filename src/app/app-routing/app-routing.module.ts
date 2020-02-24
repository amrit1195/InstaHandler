import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstagramLoginComponent} from '../UI/instagram-login/instagram-login.component';
import {ImageViewerComponent} from '../UI/image-viewer/image-viewer.component';


export const appRoutes: Routes = [
  {path: '', component: ImageViewerComponent},
  {path: 'login', component: InstagramLoginComponent},
  {path: 'gallary', component: ImageViewerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
