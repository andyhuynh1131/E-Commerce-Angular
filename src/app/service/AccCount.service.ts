import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccCountService {
  private APIurl = 'http://localhost:3000/acccounts';
  accountCurrent: any = []
  AccountBeha = new BehaviorSubject<any>([{ username: 'hihi', password: 'haha' }]);
  constructor(private http: HttpClient) {


  }

  getAcs(): Observable<any> {
    return this.http.get(this.APIurl)
  };

  isLogin(): Observable<any> {
    return this.AccountBeha.asObservable()
  }

  login(user: string, pass: string) {
    const userLogin = { username: user, password: pass }
    this.accountCurrent.push(userLogin)
    this.AccountBeha.next(this.accountCurrent)
  }

  logOut() {
    this.accountCurrent.pop()
    this.AccountBeha.next(this.accountCurrent)
  }




}
