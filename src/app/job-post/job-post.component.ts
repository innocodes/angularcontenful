import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ContentfulService} from "../services/contentful.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) {}

  jobPost$: Observable<any> | undefined;

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params['id'];

        this.jobPost$ = this.contentfulService.getEntryById(id);
      }
    )
  }
}
