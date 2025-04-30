import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/product';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  ProdId!: string;
  ProdInfo!: Iproduct;
  constructor(
    private _activetroute: ActivatedRoute,
    private _productService: ProductService,
    private _route: Router,
    private _Matdailog: MatDialog,
    private _snackBar: SnackbarService
  ) {}

  ngOnInit(): void {
    this._activetroute.params.subscribe((param: Params) => {
      console.log(param['Id']);
      this.ProdId = param['Id'];
      this.ProdInfo = this._productService.getSingleProd(this.ProdId);
    });
  }

  onRemove() {
    let matdailogConfig = new MatDialogConfig();
    matdailogConfig.width = '400px';
    matdailogConfig.disableClose = true;
    matdailogConfig.data=`Are you sure !!${this.ProdInfo.pName} is Remove`
    let matdailogref = this._Matdailog.open(
      GetconfirmComponent,
      matdailogConfig
    );
    matdailogref.afterClosed().subscribe((res) => {
      console.log(res);
      if (res) {
        this._productService.removeprod(this.ProdInfo);
        this._snackBar.openSnackbar(
          `The Product ${this.ProdInfo.pName} Remove Successfully`
        );
        this._route.navigate([`product/${this._productService.productArr[0].PId}`],{
          queryParams:{
            canReturn:this._productService.productArr[0].canReturn
          }
        })
      }
    });
  }
}
