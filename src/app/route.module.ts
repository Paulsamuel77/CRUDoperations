import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import { FetchcomponentComponent } from './fetchcomponent/fetchcomponent.component';


@NgModule({
  imports: [
    RouterModule.forRoot([{path:'postingData',component:PostcomponentComponent},{path:'gettingData',component:FetchcomponentComponent}])
  ],
  exports:[RouterModule]
})
export class RouteModule { }
