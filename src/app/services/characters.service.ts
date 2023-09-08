import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, CharacterResponse } from '../models/character.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseApiUrl:string= environment.baseApiUrl
  constructor(private httpClient:HttpClient) { }

  getAllCharacters(): Observable<CharacterResponse>{
    return this.httpClient.get<CharacterResponse>(this.baseApiUrl+"/api/Character/GetAll")
  }
  addCharacter(addCharacterRequest: Character): Observable<CharacterResponse>{
    return this.httpClient.post<CharacterResponse>(this.baseApiUrl+"/api/Character/",
     addCharacterRequest)
  }
}
