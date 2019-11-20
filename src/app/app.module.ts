import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SpellbookComponent } from './spellbook/spellbook.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { ContactComponent } from './contact/contact.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { LibraryComponent } from './library/library.component';
import { SkipLinksComponent } from './accessibility/skip-links/skip-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SpellbookComponent,
    TeamPageComponent,
    ContactComponent,
    AccessibilityComponent,
    LibraryComponent,
    SkipLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
