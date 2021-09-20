import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
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

    remove(id: number): void {
        const index = this.listCart.findIndex((x: any) => x.id === id)
        this.listCart.splice(index, 1)
        this.productlist.next(this.listCart)
    }
    constructor() {

    }
}