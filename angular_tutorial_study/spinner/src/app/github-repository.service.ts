// tslint:disable-next-line:import-blacklist
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Operator } from 'rxjs/Operator';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GithubRepositoryService {

  constructor(
    private http: HttpClient
  ) {
    this.fetch();
  }

  fetch(): any {
    return this.http
      .get('https://api.github.com/users/JaeYeopHan/repos')
      .subscribe(res => console.log(res));
  }
}
