import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { createClient, Entry } from 'contentful';
import {from} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });

  getAllEntries() {
    const promise = this.client.getEntries()
    return from(promise);

  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
