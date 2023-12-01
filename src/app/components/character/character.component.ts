import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  // @Input() character: Character = {
  //   id: '',
  //   name: '',
  //   image: '',
  //   species: '',
  //   created: '',
  //   gender: '',
  //   status: '',
  // };

  @Input() character!: Character;
}
