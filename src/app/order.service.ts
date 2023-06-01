import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Order } from './common/Order';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderURL = ' http://localhost:3000/orders';
  constructor(private http: HttpClient) {}

  //

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderURL).pipe(
      tap((receiveOrders: any) =>
        console.log(`receiveMovies:::: ${JSON.stringify(receiveOrders)}`)
      ), //success
      catchError((error) => of([])) //error
    );
  }
  getOrderFromId(id: Number): Observable<Order> {
    const url = `${this.orderURL}/${id}`;
    return this.http.get<Order>(url).pipe(
      tap((selectedOrder: Order) =>
        console.log(`selectedMovie:::: ${JSON.stringify(selectedOrder)}`)
      ) //success
      // catchError(error => of ({}))
    );
  }

  addOrder(newOrder: Order): Observable<Order | any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .post<Order>(`${this.orderURL}`, newOrder, httpOptions)
      .pipe(
        tap((order: Order) => console.log(`order`, order)),
        catchError((error) => of(undefined))
      );
  }


  deleteOrder(orderId: Number): Observable<Order | any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    const url = `${this.orderURL}/${orderId}`;
    return this.http.delete<Order>(url, httpOptions).pipe(
      tap((_) => console.log(`delete movie with id ::: ${orderId}`)),
      catchError((error) => of(null))
    );
  }

  updateOrder(order: Order | any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http
      .put(`${this.orderURL}/${order.id}`, order, httpOptions)
      .pipe(
        tap((updateOrder) => console.log(`updateOrder`, updateOrder))
        // catchError(error=> of(undefined))
      );
  }

}
