import {HttpClient} from '@angular/common/http';    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class  HomeService {
    constructor(private http: HttpClient) {
        
    }
    public navgetData(): Observable <any> {
        return this.http.get("./assets/json/home/navdata.json");
    }
    public managergetData(): Observable <any> {
        return this.http.get("./assets/json/home/managerdetails.json");
    }
    public jobgetData(): Observable <any> {
        return this.http.get("./assets/json/home/jobdetails.json");
    }
    public empgetData(): Observable <any> {
        return this.http.get("./assets/json/home/empdetails.json");
    }
    public recjobgetData(): Observable <any> {
        return this.http.get("./assets/json/home/recommentedJobs.json");
    }
    public socialgetData(): Observable <any> {
        return this.http.get("./assets/json/home/socialvalues.json");
    } 
    public slidergetData(): Observable <any> {
        return this.http.get("./assets/json/home/slideritems.json");
    }
        
}
