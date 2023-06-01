import { Component } from '@angular/core';
import { select, onscroll } from './helpers';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'customize';

  backToTop() {
    let backtotop = select('.back-to-top');
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      };
      window.addEventListener('load', toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }
  }
  ngOnInit() {
    this.backToTop();
  }

  isExceptionPage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        this.isExceptionPage =
          event.url === '/users-login' ||
          event.url === '/users-register' ||
          event.url === '/error-page';
      });
  }
}
