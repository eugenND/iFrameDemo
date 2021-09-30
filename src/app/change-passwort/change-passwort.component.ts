import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-passwort',
  templateUrl: './change-passwort.component.html',
  styleUrls: ['./change-passwort.component.scss']
})
export class ChangePasswortComponent implements OnInit {

  linkToPassword: string;

  constructor() { }

  ngOnInit(): void {
    this.linkToPassword = 'http://localhost:8088/auth/realms/localDemo/account/password';
    // this.linkToPassword = environment.kcServerUrl + "/realms/Master/account/password";
  }

}
