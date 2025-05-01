import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
@Input() fairObj!:Ifairs
  constructor() { }

  ngOnInit(): void {
  }

}
