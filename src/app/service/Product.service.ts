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
    getProducts() {
        return this.http.get(this.APIurl)
    };


    getProductbyId(id: number): Observable<any> {
        return this.http.get(`${this.APIurl}/${id}`)
    }

    createProduct(product: any): Observable<any> {
        product.image = product.image.split(',')
        product.colors = product.colors.split(',')
        product.size = product.size.split(',')
        return this.http.post(this.APIurl, product)
    };

    editProduct(product: any): Observable<any> {
        if (typeof product.image === 'string') {
            product.image = product.image.split(',')
        }
        if (typeof product.colors === 'string') {
            product.colors = product.colors.split(',')
        }
        if (typeof product.size === 'string') {
            product.size = product.size.split(',')
        }
        return this.http.put(`${this.APIurl}/${product.id}`, product)
    };

    removeProduct(id: number): Observable<any> {
        return this.http.delete(`${this.APIurl}/${id}`)
    }



}