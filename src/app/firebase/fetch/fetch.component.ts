import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: {title: string, content: string}){
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
    this.http.get('https://ngfirebase-enedb-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    .subscribe(posts => {
      console.log(posts);
    });
  }

}
