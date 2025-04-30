import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss'],
})
export class UserDashComponent implements OnInit {
  selectID!: string;
  UserArr!: Array<Iuser>;
  constructor(
    private _userservice: UserService,
    private _route: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getuser();
  }
  getuser() {
    this.UserArr = this._userservice.fetchAllUser();
    this.selectID = this.UserArr[0].userId;
    this._route.navigate([`user/${this.selectID}`], {
      queryParams: {
        userRole: this.UserArr[0].userRole,
      },
    });
  }
  onselect(user: Iuser) {
    this.selectID = user.userId;
  }
}
