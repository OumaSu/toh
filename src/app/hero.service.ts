import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes')
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(i => i.id === id) as Hero;
    this.log(`fetched hero with id ${id}`)
    return of(hero);
  }
}
