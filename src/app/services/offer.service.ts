import {HttpClient} from '@angular/common/http';    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class  OfferService {
    constructor(private http: HttpClient) {
        
    }
    public getOfferdata(): Observable <any> {
        return this.http.get("./assets/json/offerLet.json");
    }
}

