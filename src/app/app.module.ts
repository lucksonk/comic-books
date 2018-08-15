import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComicApiService } from './services/comic-api.service';
import { AppRoutingModule } from './app-routing.module';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ComicDetailsComponent,
    ComicListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ComicApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
