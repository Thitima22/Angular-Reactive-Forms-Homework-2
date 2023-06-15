import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/welcome']"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="['/movies']"
            >Movie List</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            [routerLink]="['/movies/0/edit']"
            >Add Movie</a
          >
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'Acme Movie Management';
}
