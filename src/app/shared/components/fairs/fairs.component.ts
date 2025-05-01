import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs';
import { FairsService } from '../../services/fairs.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss'],
})
export class FairsComponent implements OnInit {
  fairId!: string;
  Friobj!: Ifairs;
  constructor(
    private _fairservive: FairsService,
    private _activeroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getfairdata();
  }
  getfairdata() {
    this._activeroute.params.subscribe((res: Params) => {
      console.log(res['Id']);
      this.fairId = res['Id'];
      this.Friobj = this._fairservive.getsinglefair(this.fairId);
    });
  }
}
