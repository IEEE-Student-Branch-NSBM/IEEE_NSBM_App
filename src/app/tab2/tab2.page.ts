import { Component } from '@angular/core';
import { NewsViewPage } from '../news-view/news-view.page';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { query } from '@angular/core/src/render3';

class post {
  constructor(public title) { }
}



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page{

    public books: AngularFireList<post[]>;
    posts: Observable<any[]>;
    constructor(db: AngularFireDatabase) { 
      this.posts = db.list('Posts',ref => {
        return ref.orderByChild('01')
      
            }).valueChanges();
      }

      go(id){
        console.log(id);
      }
  
      
}

