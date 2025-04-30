import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from '../../model/user';
import { UserService } from '../../services/user.service';
import { UuidService } from '../../services/uuid.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  IsEditMode: boolean = false;
  USerId!: string;
  UserInfo!: Iuser;
  disableval: boolean = false;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _userservice: UserService,
    private _uuid: UuidService,
    private _Route: Router,
    private _snabar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getuser();
  }

  getuser() {
    this._activeRoute.params.subscribe((param: Params) => {
      console.log(param['Id']);
      this.USerId = param['Id'];
      if (this.USerId) {
        this.IsEditMode = true;
        this.UserInfo = this._userservice.getSingleUser(this.USerId);
        this.userForm.patchValue(this.UserInfo);
      }
      let val = this._activeRoute.snapshot.queryParams['userRole'];
      if (val === 'Candidate') {
        this.userForm.disable();
        this.disableval = true;
      }
    });
  }
  createForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
    });
  }

  onsubmit() {
    if (this.userForm.valid) {
      let newobj = {
        ...this.userForm.value,
        userId: this._uuid.generateUuid(),
      };
      this._userservice.Adduser(newobj);
      this.userForm.reset();
      this._snabar.openSnackbar(
        `the User ${newobj.userName} is Added Successfully !!`
      );
      this._Route.navigate([`user/${newobj.userId}`], {
        queryParams: {
          userRole: newobj.userRole,
        },
      });
    }
  }

  Onupdate() {
    if (this.userForm.valid) {
      let updateobj = { ...this.userForm.value, userId: this.USerId };
      console.log(updateobj);
      this._userservice.updateuser(updateobj);
      this.userForm.reset();
      this._snabar.openSnackbar(
        `the User ${updateobj.userName} is Update Successfully !!`
      );
      this._Route.navigate([`user/${updateobj.userId}`], {
        queryParams: {
          userRole: updateobj.userRole,
        },
      });
    }
  }
}
