import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private APIurl = 'http://localhost:3000/products';
    listProducts: any = []
    productsPromotion: any = [
        {
            "id": 111,
            "qty": 1,
            "name": "Áo thun Dinosaur 01",
            "price": 189000,
            "image": [
                "../../../assets/images/product-01 (1).jpg",
                "../../../assets/images/product-01 (2).jpg"
            ],
            "colors": [
                "red",
                "blue",
                "orange"
            ],
            "size": [
                "S",
                "M",
                "L",
                "XL"
            ]
        },
        {
            "id": 112,
            "name": "Áo thun Dinosaur 02",
            "qty": 1,
            "price": 199000,
            "image": [
                "../../../assets/images/product-02 (1).jpg",
                "../../../assets/images/product-02 (2).jpg"
            ],
            "colors": [
                "red",
                "blue",
                "orange"
            ],
            "size": [
                "S",
                "M",
                "L",
                "XL"
            ]
        },
        {
            "id": 113,
            "qty": 1,
            "name": "Áo thun Dinosaur 03",
            "price": 289000,
            "image": [
                "../../../assets/images/product-04 (1).jpg",
                "../../../assets/images/product-04 (2).jpg"
            ],
            "colors": [
                "red",
                "blue",
                "orange"
            ],
            "size": [
                "S",
                "M",
                "L",
                "XL"
            ]
        }
    ]
    constructor(private http: HttpClient) {
    };
    getProducts() {
        this.http.get(this.APIurl).subscribe((data: any) => this.listProducts = data)
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

    getProductByPrice(startPrice: number, endPrice: number): Observable<any> {
        return this.http.get(this.APIurl).pipe(
            map((products: any) => {
                return products.filter((product: any) => product.price < endPrice && product.price > startPrice)
            })
        )
    }
    getProductsPromotion(): Observable<any> {
        const productsPromotion = of(this.productsPromotion)
        return productsPromotion
    }
}