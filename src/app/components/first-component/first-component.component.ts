import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  canShow: boolean = false;
  nameToShowLink: string = 'Joao Guimaraes';
  
  showContainer(): void {
    this.canShow = !this.canShow;
  }

  person = {
    name: 'Joao',
    lastName: 'Guimaraes',
    age: 25,
    job: 'Developer',
  };

  @Input() company: string = '';
  @Input() tech!: { first: string; second: string; third: string };
  userGitHub: string = 'joaopsguimaraes';
  constructor() {}

  ngOnInit(): void {}
}
