import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Post } from "../post.model";

@Injectable({ providedIn: 'root'})
export class PostService{
    postsUrl = 'https://ngfirebase-enedb-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
    
    constructor(private http: HttpClient){

    }

    createPost(postData: Post){
        this.http
        .post(this.postsUrl, postData)
        .subscribe((response)=>{ 
          console.log(response);
        });
    }

    fetchPosts(){
        return this.http.get<{[key: string]: Post}>(this.postsUrl)
        .pipe(map(responseData => {
          const postArray: Post[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
            postArray.push({id : key, ...responseData[key]});
            }
          }
          return postArray;
        }));
    }

    deletePosts(){
        return this.http.delete(this.postsUrl);
    }
}