import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component'
@Component({
  selector: 'app-pages-error',
  templateUrl: './pages-error.component.html',
  styleUrls: ['./pages-error.component.css'],
})
export class PagesErrorComponent implements OnInit {
  constructor(public appComponent: AppComponent) {}

  ngOnInit(): void {
    this.appComponent.isExceptionPage = true;
  }
}


