import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  addCharacterRequest: Character = {
    id: 0,
    name: "",
    hitpoints: 0,
    strength: 0,
    intelligence: 0
  }

  basrApiUrl: string = environment.baseApiUrl
  constructor(private characterService:CharactersService, private router: Router){
    
  }

  addCharacter(){
    this.characterService.addCharacter(this.addCharacterRequest).subscribe({next:(characters)=> {
      this.router.navigate(["characters"])
    }, error: (response)=> {
      console.log('response', response)
    }});
  }

}
