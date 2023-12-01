import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  page: number = 1;
  characters: Character[] = [];

  constructor(private characterService: CharacterService){}

  incrementPage() {
    this.page = this.page + 1;
    this.getData(this.page)
  }

  ngOnInit():void{
    this.getData()
  }

  // Igual a 1 es para decirle que si no le mandan ese parametro, por derfecto va a ser 1
  getData(page:number= 1){
    this.characterService.getCharacters(page).subscribe((res)=> this.characters=res.results);
  }
}
