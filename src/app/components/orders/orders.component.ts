import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import { Order} from '../../common/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private serviceOrder: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders()
  }

  orders: Order[] = []

  getOrders(): void {
    this.serviceOrder.getOrders().subscribe(
      (orders) => (this.orders = orders)
    );
  }

  add(nameOrder:String, codeOrder :String) {
    const newOrder: Order | any = {};
    newOrder.name = nameOrder;
    newOrder.orderCode = Number(codeOrder);
    this.serviceOrder.addOrder(newOrder).subscribe((newOrder) => {
      this.orders.push(newOrder);
    });
  }
  delete(id: Number) {
    this.serviceOrder.deleteOrder(id).subscribe((_) => {
        this.getOrders()
    })
  }

}
