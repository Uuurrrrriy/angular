import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  postList: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    // get from resolver
    try {
      this.postList = this.activatedRoute.snapshot.data.list;
    } catch (e) {
      console.log(e);
    }
    // this.postList = this.activatedRoute.snapshot.data.list;
    // console.log(this.activatedRoute.snapshot.data.list);

    // render post of user
    this.activatedRoute.params // search for :id/posts
      .subscribe(value => {
      if (!!value.id) {
        this.postService.getUsersPost(value.id).subscribe(posts => {
          console.log(posts);
          this.postList = posts;
        });
      }

      }
    );
  }

  ngOnInit(): void {
  }

}
