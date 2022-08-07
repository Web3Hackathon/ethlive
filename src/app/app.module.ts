import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlService } from './services/graphql.service';
import { StreamerMenuComponent } from './streamer-menu/streamer-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamerMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GraphqlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
