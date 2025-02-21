import { Injectable, inject } from "@angular/core"
import { environment } from "../../../environments/environment"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { APITypes } from "./apiTypes"
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // cliente http para hacer peticiones
  private apiUrl = "https://ds.deepcompany.com/marketplace/product-demo"
  private http = inject(HttpClient)

  // metodo para obtener productos
  getProducts(page: number | string): Observable<APITypes> {
    const headers = new HttpHeaders({
      'Accept': 'application/json, text/plain, */*',
      'x-apikey-marketplace': environment.API_KEY
    })

    return this.http.get<APITypes>(`${this.apiUrl}?page=${page}`, {headers})
  }

}


