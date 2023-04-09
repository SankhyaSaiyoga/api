import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private API_URL = 'https://api.sampleapis.com/avatar/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.API_URL);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/${id}`);
  }
}
