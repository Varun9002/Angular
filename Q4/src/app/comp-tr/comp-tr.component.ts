import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-tr',
  templateUrl: './comp-tr.component.html',
  styleUrls: ['./comp-tr.component.css']
})
export class CompTrComponent implements OnInit {
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
