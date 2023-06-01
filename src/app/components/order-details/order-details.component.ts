import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../order.service';
import { Order } from '../../common/Order';
import { Location } from '@angular/common';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceOrder: OrderService, private location: Location) {}

  ngOnInit(): void {
    this.getOrderFromRoute()
  }
  order : Order | any= ''
  getOrderFromRoute(): void {
    const id = +this.route.snapshot.params['id'];
    this.serviceOrder.getOrderFromId(id).subscribe(
      (order) => (this.order = order)
    );
    
  }

  save(): void {
    this.serviceOrder.updateOrder(this.order).subscribe(
      () => this.goBack()
    )
  }
  goBack(): void {
    this.location.back();
  }

}
