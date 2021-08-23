import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class CartService {
    listCart: any = []
    productlist = new BehaviorSubject<any>([]);



    getProducts(): Observable<any> {
        return this.productlist.asObservable()
    };

    addToCart(product: any): void {
        const result = this.listCart.find((x: any) => x.id === product.id)
        if (result) {
            result.qty += 1
        } else {
            this.listCart.push(product)
            this.productlist.next(this.listCart)
        }
    };




    constructor() {

    }
}