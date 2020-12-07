import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp-center',
  templateUrl: './comp-center.component.html',
  styleUrls: ['./comp-center.component.css']
})
export class CompCenterComponent implements OnInit {
  text;
  @Output() editText=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onTextEdited(){
    this.editText.emit(this.text);
  }
}
