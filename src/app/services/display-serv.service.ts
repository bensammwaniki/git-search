import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayServService {

  private username: string;
  private clientid = '65493075';
  private clientsecret = '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';
  constructor (private http: HttpClient) { 
    console.log('ready');
    this.username = 'bensammwaniki';
  }

}