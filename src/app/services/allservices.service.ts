import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
// import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  urlBase = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  post(path: string, dataToSend: any, onSuccess: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer" + JSON.parse(localStorage.getItem("onlineUser") ?? '{}').token
      })
    };
    this.http.post(this.urlBase + path, dataToSend, httpOptions).subscribe((reponse: any) => onSuccess(reponse));
  }

  get(path: string, onSuccess: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer" + JSON.parse(localStorage.getItem("onlineUser") ?? '{}').token
      })
    };
    this.http.get(this.urlBase + path, httpOptions).subscribe((reponse: any) => onSuccess(reponse));
  }


  message(title: any, icon: any, message: any) {
    Swal.fire({
      title: title,
      text: message,
      icon: icon
    });
  }

  whoIsOnline() {
    if (localStorage.getItem("onlineUser") != null || localStorage.getItem("onlineUser") != undefined) {
      let data = JSON.parse(localStorage.getItem("onlineUser") ?? '{}');
      return data.type;
    } else {
      return null;
    }
  }

  IsOnline() {
    if (localStorage.getItem("onlineUser") != null || localStorage.getItem("onlineUser") != undefined) {
      let data = JSON.parse(localStorage.getItem("onlineUser") ?? '{}');
      return data;
    } else {
      return null;
    }
  }
}
