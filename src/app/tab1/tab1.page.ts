import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { query } from '@angular/core/src/render3';

class item {
  constructor(public title) { }
}



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html', 
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

        public books: AngularFireList<item[]>;
          items: Observable<any[]>;
          constructor(db: AngularFireDatabase) { 
            this.items = db.list('Events',ref => {
              return ref.orderByChild('Events ID 01')
            
                  }).valueChanges();
            }

    btnclick(){
      
        alert("Hello");
    }
}
export class AppComponent {
 
}