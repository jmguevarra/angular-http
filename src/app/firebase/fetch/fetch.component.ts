import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from 'src/app/post.model';
 
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  loadPosts = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
    this.loadPosts;
  }

  onCreatePost(postData: Post){
    this.http
    .post('https://ngfirebase-enedb-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', postData)
    .subscribe((response)=>{ 
      console.log(response);
    });
  }

  onFetchPosts(){
    this.fetchPosts()
  }

  onClearPosts(){
    
  }

  private fetchPosts(){
    this.http.get<{[key: string]: Post}>('https://ngfirebase-enedb-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    .pipe(map(responseData => {
      const postArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
        postArray.push({id : key, ...responseData[key]});
        }
      }

      return postArray;
    }))
    .subscribe(posts => {
      //   ....
      console.log(posts);
    });
  }

}
