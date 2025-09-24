import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  private actors: Actor[] = [
    { id: 1, name: "Bud Spencer" },
    { id: 2, name: "Terence Hill" }
  ];

  constructor() { }

  getActors() : Actor[] {
    return this.actors;
  }

  getActorsById(actorIds: number[]) : Actor[] {
    return this.actors.filter(actor => actorIds.includes(actor.id));
  }
}
