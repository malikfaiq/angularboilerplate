import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters/characters-list/characters-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent
    
  },
  {
    path: 'characters',
    component: CharactersListComponent
    
  },
  {
    path: 'characters/add',
    component: AddCharacterComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
