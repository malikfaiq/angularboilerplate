import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit{
  

  characters: Character[] = [];
  constructor(private characterService:CharactersService){}
  
  
  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe({next:(characters)=> {
      this.characters = characters.data
    }, error: (response)=> {
      console.log('response', response)
    }});
  }
}
