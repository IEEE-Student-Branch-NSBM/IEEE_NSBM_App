import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList ,} from 'angularfire2/database';

import { Observable } from 'rxjs'
import { query } from '@angular/core/src/render3';
import { Key } from 'protractor';


class postview {
  constructor(public title) { }
}


@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.page.html',
  styleUrls: ['./news-view.page.scss'],
})
export class NewsViewPage implements OnInit {
  
  id: string;
  public books: AngularFireList<postview[]>;
  itemlol: Observable<any>;
  
  posts: Observable<any[]>;

    constructor(private route: ActivatedRoute  , db: AngularFireDatabase) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.posts = db.list('Posts' ,ref => {
        return ref.orderByChild('Post_Id').equalTo(this.id)       
            }).valueChanges();

           // this.itemlol= db.object('Posts').valueChanges();
      }
     

  ngOnInit() {
    //this.id = this.route.snapshot.paramMap.get('id');
   // var idp :string = this.id;
    console.log(this.id);

    console.log(this.posts);
  //  return idp;

  }

  

}
