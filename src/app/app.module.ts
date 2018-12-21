import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouteModule } from './route.module';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import{HttpClientModule} from '@angular/common/http';

import { FetchcomponentComponent } from './fetchcomponent/fetchcomponent.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    PostcomponentComponent,
    
    FetchcomponentComponent,
    
    LoginComponent,
    
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
