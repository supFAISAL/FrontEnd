import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Table/Table.component';
import { FormComponent } from './Form/Form.component';
import { DataEditComponent } from './dataEdit/dataEdit.component';

@NgModule({
  declarations: [			
    AppComponent,
      TableComponent,
      FormComponent,
      DataEditComponent
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
