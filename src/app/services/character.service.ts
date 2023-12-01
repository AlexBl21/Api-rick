import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
url:string="https://rickandmortyapi.com/api/character"
  constructor() { }
  http=inject(HttpClient)

  public getCharacters(page:number){
   return this.http.get<any>(`${this.url}${page >1? `?page=${page}`:""}`)
  }

  public getCharacter(id:any){
    return this.http.get<any>(`${this.url}/${id}`)
   }
}
