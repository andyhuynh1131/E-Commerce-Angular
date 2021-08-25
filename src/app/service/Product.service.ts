import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private APIurl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {

    };
    getProducts(): Observable<any> {
        return this.http.get(this.APIurl)
    };

    createProduct(product: any): Observable<any> {
        return this.http.post(this.APIurl, product)
    };

    editProduct(product: any): Observable<any> {
        return this.http.put(`${this.APIurl}/${product.id}`, product)
    };

    removeProduct(id: number): Observable<any> {
        return this.http.delete(`${this.APIurl}/${id}`)
    }



}