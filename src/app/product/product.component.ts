import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../../app/factory.service';
import { Product } from '../../app/app.interface';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pro:Product [];
  constructor(private produce: FactoryService) { }

  ngOnInit() {
    this.loadProduct();
  }
  loadProduct(){
    this.produce. getProduct().subscribe(data=>{
      console.log(data);
      this.pro=data.product
    });
  }

}
