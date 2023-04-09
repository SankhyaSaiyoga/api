import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  onViewDetail(id: number): void {
    this.router.navigate(['/characters', id]);
  }


}
