import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompTlComponent } from './comp-tl/comp-tl.component';
import { CompTrComponent } from './comp-tr/comp-tr.component';
import { CompBrComponent } from './comp-br/comp-br.component';
import { CompBlComponent } from './comp-bl/comp-bl.component';
import { CompCenterComponent } from './comp-center/comp-center.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompTlComponent,
    CompTrComponent,
    CompBrComponent,
    CompBlComponent,
    CompCenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
