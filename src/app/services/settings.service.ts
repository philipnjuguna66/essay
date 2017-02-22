import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info o n providers and Angular 2 DI.
*/
@Injectable()

export class SettingService {
	http:any;
	baseUrl: String;

	constructor(http: Http) {
		this.http=http;
		this.baseUrl="https://dotheessay.com/essay/public/api";
		
	}
}
