import { Component } from '@angular/core';
import { NewsViewPage } from '../news-view/news-view.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  go() {
    this.router.navigateByUrl('/news-view');
  }
}
