import { Component, OnInit} from '@angular/core';
import { FactoryService } from '../../app/factory.service';
import { Product } from '../../app/app.interface';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  visible = false;

  p1: Product;

 show(i){
  this.visible = true;
   this.p1=this.pro[i];
   console.log(this.p1);
 }
  pro:Product[];
  constructor(private produce: FactoryService) { }

  ngOnInit() {
    this.loadProduct();
    // this.show(this.get,this.i);
  }
  loadProduct(){
    
    this.produce.getProduct().subscribe(data=>{
      console.log(data);
      this.pro=data.product;
      console.log(this.pro);
    });
  }

}
