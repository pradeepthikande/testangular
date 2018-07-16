import { Component, OnInit,ViewEncapsulation ,Input} from '@angular/core';
import { Product } from '../../app/app.interface';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  title:string="NEW PRODUCT";
  @Input() details: Product;
  constructor() { }

  ngOnInit() {
    if(this.details===undefined){
      this.details= {
    productName: '',
    description: '',
    md: new Date,
    ed: new Date
    }
  }

}
add(){
  console.log(JSON.stringify(this.details));
}
}
