import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentModel} from '../../models/CommentModel';
import {tryCatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(this.activatedRoute.snapshot.data.list);
    // try {
    //   this.comments = this.activatedRoute.snapshot.data.list;
    // } catch (e) {
    //   console.log(e);
    // }

    this.activatedRoute.data.subscribe(value => {
      this.comments = value.comments;
    });

  }

  ngOnInit(): void {
  }

}
