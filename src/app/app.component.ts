import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountservice: AccountService){}
  title = 'shop';
  isLoggedIn()
  {
return this.accountservice.isLoggedIn();
  }
  logOut()
{
  this.accountservice.logOut();
}
}
