import { Component, OnInit } from '@angular/core';
import {ContentfulService} from "../services/contentful.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) {}

  jobLists$: Observable<any> | undefined;

  ngOnInit(): void {
    this.jobLists$ = this.contentfulService.getAllEntries();
  }

}
