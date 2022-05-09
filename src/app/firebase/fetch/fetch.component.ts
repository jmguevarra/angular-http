import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/services/post.service';
 
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  loadPosts = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
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
    });
  }

}
