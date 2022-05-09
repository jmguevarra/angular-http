import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/services/post.service';
 
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit, OnDestroy {
  loadPosts = [];
  isFetching = false;
  errorMessage = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
    this.errorSub = this.postService.errorMessage.subscribe(message => {
      this.errorMessage = message;
    });

    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post){
    this.postService.createPost(postData);
  }

  onFetchPosts(){
    this.fetchPosts();
  }

  onClearPosts(){
    this.postService.deletePosts().subscribe(()=>{
      this.loadPosts = [];
    });
  }

  private fetchPosts(){
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.loadPosts = posts;
      this.isFetching = false;
    }, error => {
      this.errorMessage = error.message;
    });
  }

}
