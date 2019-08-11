import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { SpellbookComponent } from '../app/spellbook/spellbook.component';
import { ContactComponent } from '../app/contact/contact.component';
import { TeamPageComponent } from '../app/team-page/team-page.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent },
  {path: 'spellbook', component: SpellbookComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'team', component: TeamPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
