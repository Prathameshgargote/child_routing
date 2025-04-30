import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-prod-dash',
  templateUrl: './prod-dash.component.html',
  styleUrls: ['./prod-dash.component.scss'],
})
export class ProdDashComponent implements OnInit {
  selectId!: string;
  ProdArr!: Array<Iproduct>;
  constructor(
    private _activeroute: ActivatedRoute,
    private _producService: ProductService,
    private _ropute:Router
  ) {}

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct() {
    this.ProdArr = this._producService.fetchAllproduct();
    this.selectId=this.ProdArr[0].PId
    this._ropute.navigate([`product/${this.selectId}`],{
      queryParams:{
        canReturn:this.ProdArr[0].canReturn
      }
    })
  }

  OnSelct(prod: Iproduct) {
    this.selectId = prod.PId;
  }
}
