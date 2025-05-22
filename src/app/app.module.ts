import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesViewComponent } from './favorites-view/favorites-view.component';
import { provideHttpClient } from '@angular/common/http';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FavoriteCardComponent
  ],providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
