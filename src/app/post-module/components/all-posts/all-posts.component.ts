import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PostModel} from '../../../../models/PostModel';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    // this.activatedRoute.queryParams.subscribe(queryParams => {
    //   this.postService.getPostsByUserID(queryParams.idOfUser)
    //     .subscribe(value => console.log(value));
    // });
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute.params.subscribe(params => this.postService
        .getPostsByUserID(params.id)
        .subscribe(postsFromServer => this.posts = postsFromServer)
      );
    } else {
      this.activatedRoute.data.subscribe(value => {
        this.posts = value.allPosts;
      });
    }

    // this.postService
    //   .getPostsByUserID(this.router.getCurrentNavigation().extras.state.user.id)
    //   .subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
