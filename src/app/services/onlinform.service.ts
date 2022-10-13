import {HttpClient} from '@angular/common/http';    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class OnlinformService {
    constructor(private http: HttpClient) {
        
    }
    public getformdata(): Observable <any> {
        return this.http.get("./assets/json/formslider.json");
    }
}

