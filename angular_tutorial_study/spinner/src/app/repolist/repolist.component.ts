import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { GithubRepositoryService } from '../github-repository.service';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css']
})
export class RepolistComponent implements OnInit, OnChanges {
  @Input() count: number;
  repolist: any[];

  constructor(
    private githubRepositoryService: GithubRepositoryService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.count);
    if (this.repolist) {
      this.repolist = this.repolist.slice(0, this.count);
    }
  }

  ngOnInit() {
    this.githubRepositoryService.fetch()
      .subscribe((data) => {
        this.repolist = data;
      });
  }

}
