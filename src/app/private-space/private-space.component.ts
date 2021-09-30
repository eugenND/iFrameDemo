import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-private-space',
  templateUrl: './private-space.component.html',
  styleUrls: ['./private-space.component.scss']
})
export class PrivateSpaceComponent implements OnInit {

  userName: string;

  constructor(private kcService: KeycloakService) { }

  ngOnInit(): void {
    this.getUsername();
  }

  public getUsername(): void{
    this.userName = this.kcService.getUsername();
  }

  public logout(): void{
    this.kcService.logout('http://localhost:4222');
  }

}
