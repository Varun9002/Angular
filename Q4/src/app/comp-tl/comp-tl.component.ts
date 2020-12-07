import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-tl',
  templateUrl: './comp-tl.component.html',
  styleUrls: ['./comp-tl.component.css']
})
export class CompTlComponent implements OnInit {
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
