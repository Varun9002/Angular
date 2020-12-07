import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q1';
  input_index:number=0;
  ans=0;

  calcTerm(){
    console.log(this.input_index);

    if((this.input_index)%2==1){
      this.ans=(this.input_index**2)+1;
    }
    else{
      this.ans=(this.input_index**2)-1;
    }

  }
}
