import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { SpellbookComponent } from '../app/spellbook/spellbook.component';
import { ContactComponent } from '../app/contact/contact.component';
import { TeamPageComponent } from '../app/team-page/team-page.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'spellbook', component: SpellbookComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'team', component: TeamPageComponent},
  {path: 'accessibility', component: AccessibilityComponent},
  {path: 'library', component: LibraryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
