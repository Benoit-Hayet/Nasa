import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
private apiKey = 'YvR6JNadGJrajcpErqP9dBOfrvSwCcJ0B9qoG7Yw';

constructor(private http:HttpClient) {}

getImageOfTheDay(): Observable<any> {
const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
return this.http.get<any>(url);
  }


}
