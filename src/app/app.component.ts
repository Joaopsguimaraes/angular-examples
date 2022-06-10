import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'John Doe';
  companyJob = 'Kingspan Isoeste';
  userTech = {
    first: 'React',
    second: 'Angular',
    third: 'Node',
  }

  title = 'angular-example';
}
