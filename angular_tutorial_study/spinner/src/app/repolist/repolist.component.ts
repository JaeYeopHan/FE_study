import { Component, OnInit } from '@angular/core';
import { GithubRepositoryService } from '../github-repository.service';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css']
})
export class RepolistComponent implements OnInit {

  constructor(
    private githubRepositoryService: GithubRepositoryService
  ) { }

  ngOnInit() {
  }

}
