import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onCreatePost(postData: {title: string, content: string}){
    this.http.post('https://ngfirebase-enedb-default-rtdb.asia-southeast1.firebasedatabase.app/', postData);

    console.log()
  }

  onFetchPosts(){

  }

  onClearPosts(){
    
  }

}
