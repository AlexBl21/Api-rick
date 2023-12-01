import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
 
  id:any=""
  constructor 
  (
    private characterService: CharacterService,
    private route:ActivatedRoute,
    
    ){
      this.id=route.snapshot.paramMap.get("id")

  }

  character: Character = {
    name:"",
    image:"",
    gender:"",
    species:"",
    status:"",
    created:"",
  };

  ngOnInit():void{
    this.characterService.getCharacter(this.id).subscribe((res)=> {
      this.character=res
    })
  }
}
