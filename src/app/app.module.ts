import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlService } from './services/graphql.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  providers: [
    GraphqlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
