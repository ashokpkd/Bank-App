import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db: any = {
    1000: { "acno": 1000, "username": "ab", "password": 1000, "balance": 1000 },
    1001: { "acno": 1001, "username": "abc", "password": 1001, "balance": 1000 },
    1002: { "acno": 1002, "username": "abcs", "password": 1002, "balance": 1000 }
  }

  constructor() { }

  login(acno: any, pswd: any) {

    let db = this.db
    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        return true
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("invalid user")
      return false
    }

  }

  register(username: any, acno: any, password: any) {
    let db = this.db
    if (acno in db) {
      return false
    }
    else {
      db[acno] = {
        acno,
        username,
        password,
        "balance": 0
      }
      return true
    }
  }
  //deposit
  Deposit(acno: any, password: any, amt: any) {
    var amount = parseInt(amt)
    let db = this.db
    if (acno in db) {
      if (password == db[acno]["password"]) {
        db[acno]["balance"] += amount
        return db[acno]["balance"]
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user doesnot exist")
    }
  }

  //withdraw
  withdraw(acno: any, password: any, amt: any) {
    var amount = parseInt(amt)
    let db = this.db
    if (acno in db) {
      if (password == db[acno]["password"]) {

        if (db[acno]["balance"] > amount) {
          db[acno]["balance"] -= amount
          return db[acno]["balance"]

        }
        else {
          alert("insufficient balance")
        }
      }

      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user doesnot exist")
    }
  }
}
