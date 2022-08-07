import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamerComponent } from './streamer/streamer.component';
import { ChatComponent } from './chat/chat.component';
import { InfoComponent } from './info/info.component';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlService } from './services/graphql.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StreamerComponent,
    ChatComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GraphqlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
