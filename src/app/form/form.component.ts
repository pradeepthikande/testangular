import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Product } from '../../app/app.interface';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  title: string = "NEW PRODUCT";

  @Input() sending: Product;
  @Input() details: Product;
  // @Input() details: Product = {} as Product;
  constructor() {
        setTimeout(()=>{
    this.details=this.sending;


        },1000)


  }

  ngOnInit() {
    if(this.details===undefined){
    this.details= {
    name: '',
    description: '',
    md: new Date(),
    ed: new Date()
    }
  }
  }

  add() {
    // console.log(JSON.stringify(this.details));
    console.log(this.details);
  }
}

