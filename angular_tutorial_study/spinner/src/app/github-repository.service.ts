import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';


@Injectable()
export class GithubRepositoryService {

  constructor(
    private http: HttpClient
  ) {
  }

  fetch(): any {
    return this.http
      .get('https://api.github.com/users/JaeYeopHan/repos');
  }
}
