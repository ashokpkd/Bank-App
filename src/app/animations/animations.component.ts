import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger(
      "openClose", [
      state('open',
        style({
          height: '500px',
          backgroundColor: 'blue'
        })
      ),
      state('close',
        style({
          height: '100px',
          backgroundColor: 'red'
        })
      ),
      transition('open=>close', [
        animate('2s')
      ]),
      transition('close=>open', [
        animate('1s')
      ])
    ])
  ]
})
export class AnimationsComponent implements OnInit {
isOpen=true
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
  this.isOpen=!this.isOpen
}
}
