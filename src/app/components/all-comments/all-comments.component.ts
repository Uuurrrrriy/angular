import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentModel} from '../../models/CommentModel';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data.list);
    this.comments = this.activatedRoute.snapshot.data.list;
  }

  ngOnInit(): void {
  }

}
