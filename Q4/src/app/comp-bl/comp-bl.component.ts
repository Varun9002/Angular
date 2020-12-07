import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-bl',
  templateUrl: './comp-bl.component.html',
  styleUrls: ['./comp-bl.component.css']
})
export class CompBlComponent implements OnInit {
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
