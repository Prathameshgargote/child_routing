import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss'],
})
export class GetconfirmComponent implements OnInit {
  constructor(private _Matref: MatDialogRef<GetconfirmComponent>,
    @Inject(MAT_DIALOG_DATA)  public data :{msg:string}
  ) {}

  ngOnInit(): void {}

  oncacle(flag: boolean) {
    this._Matref.close(flag);
  }
}
