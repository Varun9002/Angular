import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-br',
  templateUrl: './comp-br.component.html',
  styleUrls: ['./comp-br.component.css']
})
export class CompBrComponent implements OnInit {
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
