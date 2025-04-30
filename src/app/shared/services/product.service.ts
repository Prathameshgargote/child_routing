import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productArr: Array<Iproduct> = [
    {
      pName: 'samsung M31',
      PId: '123',
      pStatus: 'inprogress',
      canReturn: 1,
    },
    {
      pName: 'Iphone',
      PId: '124',
      pStatus: 'delivered',
      canReturn: 0,
    },
    {
      pName: 'one plus',
      PId: '125',
      pStatus: 'dispatch',
      canReturn: 1,
    },
    {
      pName: 'vivo',
      PId: '126',
      pStatus: 'inprogress',
      canReturn: 0,
    },
  ];
  constructor() {}

  fetchAllproduct() {
    return this.productArr;
  }

  getSingleProd(id: string) {
    return this.productArr.find((p) => p.PId === id)!;
  }

  updateprod(update: Iproduct) {
    let getindex = this.productArr.findIndex((p) => p.PId === update.PId);
    return (this.productArr[getindex] = update);
  }

  Addproduct(newobj: Iproduct) {
    return this.productArr.push(newobj);
  }

  removeprod(remObj: Iproduct) {
    let getindex = this.productArr.findIndex((p) => p.PId === remObj.PId);
    return this.productArr.splice(getindex, 1);
  }
}
