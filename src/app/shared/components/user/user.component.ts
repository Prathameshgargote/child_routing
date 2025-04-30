import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../model/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId!: string;
  userObj!: Iuser;
  constructor(
    private _activeroute: ActivatedRoute,
    private _usersevice: UserService,
    private _Matdailog: MatDialog,
    private _snackbaar: SnackbarService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getsingleuser();
  }

  getsingleuser() {
    this._activeroute.params.subscribe((params: Params) => {
      console.log(params['Id']);
      this.userId = params['Id'];
      this.userObj = this._usersevice.getSingleUser(this.userId);
    });
  }

  onRemove() {
    let matdailogConfig = new MatDialogConfig();
    matdailogConfig.width = '400px';
    matdailogConfig.disableClose = true;
    matdailogConfig.data = `Are you Sure ! ${this.userObj.userName} is Remove!`;
    let matdailogref = this._Matdailog.open(
      GetconfirmComponent,
      matdailogConfig
    );
    matdailogref.afterClosed().subscribe((res) => {
      console.log(res);
      if (res) {
        this._usersevice.Removeuser(this.userObj);
        this._snackbaar.openSnackbar(
          `the User ${this.userObj.userName} Is Remove Successfully`
        );
        this._router.navigate([`user/${this._usersevice.usersArr[0].userId}`], {
          queryParams: {
            userRole: this._usersevice.usersArr[0].userRole,
          },
        });
      }
    });
  }
}
