import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/product';
import { UuidService } from '../../services/uuid.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss'],
})
export class ProdFormComponent implements OnInit {
  IsEditMode: boolean = false;
  ProdForm!: FormGroup;
  proID!: string;
  prodObj!: Iproduct;
  disable:boolean=false
  // ID$:new Subject
  constructor(
    private _activetroute: ActivatedRoute,
    private _productService: ProductService,
    private _route: Router,
    private _uuid: UuidService,
    private _matSnack: SnackbarService
  ) {}

  ngOnInit(): void {
    this.creteForm();
    this.patchObj()
  }

  patchObj(){
    this._activetroute.params.subscribe((params: Params) => {
      this.proID = params['Id'];
      if (this.proID) {
        this.IsEditMode = true;
        this.prodObj = this._productService.getSingleProd(this.proID);
        let val = {
          ...this.prodObj,
          canReturn: this.prodObj.canReturn ? 'yes' : 'no',
        };
        this.ProdForm.patchValue(val);
      }
    //  let val= this._activetroute.snapshot.queryParams['canReturn']
     console.log(this._activetroute.snapshot.queryParams['canReturn']);
     let val=this._activetroute.snapshot.queryParams['canReturn']
     if(val==0){
      this.ProdForm.disable()
      this.disable=true
     }
    });
  }

  creteForm() {
    this.ProdForm = new FormGroup({
      pName: new FormControl(null, Validators.required),
      pStatus: new FormControl(null, Validators.required),
      canReturn: new FormControl(null, Validators.required),
    });
  }

  onsubmit() {
    if (this.ProdForm.valid) {
      let val = this.ProdForm.value;
      let newobj = {
        ...val,
        canReturn: val === 'yes' ? 1 : 0,
        PId: this._uuid.generateUuid(),
      };
      this._productService.Addproduct(newobj);
      this.ProdForm.reset();
      this._matSnack.openSnackbar(
        `The Product ${newobj.pName} is Added Successfully !!!`
      );

      this._route.navigate([`product`,this.prodObj.PId], {
        queryParams: {
          canReturn: newobj.canReturn,
        },
      });
    }
  }

  Onupdate() {
    if (this.ProdForm.valid) {
      let obj = this.ProdForm.value;
      let updobj = {
        ...obj,
        canReturn: obj.canReturn === 'yes' ? 1 : 0,
        PId: this.proID,
      };
      this._productService.updateprod(updobj);
      this.ProdForm.reset();
      this._matSnack.openSnackbar(
        `The Product ${updobj.pName} is Update Successfully !!!`
      );
      this._route.navigate([`product/${updobj.PId}`], {
        queryParams: {
          canReturn: updobj.canReturn,
        },
      });
    }
  }
}
