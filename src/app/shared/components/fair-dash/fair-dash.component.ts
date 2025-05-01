import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs';
import { FairsService } from '../../services/fairs.service';

@Component({
  selector: 'app-fair-dash',
  templateUrl: './fair-dash.component.html',
  styleUrls: ['./fair-dash.component.scss']
})
export class FairDashComponent implements OnInit {


  FairArr!:Array<Ifairs>
  constructor(
    private Fairservice:FairsService
  ) { }

  ngOnInit(): void {
  this.getdata()
  }
  getdata(){
    this.FairArr=this.Fairservice.fetchAllFair()
  }
}
