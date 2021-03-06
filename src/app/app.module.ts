import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomeScreenComponent } from './views/home-component/home-screen.component';
import { BlizzardAPIService } from './services/blizzard.service';
import { IgniteUIModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BadgeComponent } from './badge/badge.component';
import { D3MediaPipe } from './services/media.pipes';
import { HeroCardComponent } from './hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeScreenComponent,
    BadgeComponent,
    HeroCardComponent,
    D3MediaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IgniteUIModule
  ],
  providers: [BlizzardAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
