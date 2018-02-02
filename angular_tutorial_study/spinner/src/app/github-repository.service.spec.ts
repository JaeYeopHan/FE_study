import { TestBed, inject } from '@angular/core/testing';

import { GithubRepositoryService } from './github-repository.service';

describe('GithubRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubRepositoryService]
    });
  });

  it('should be created', inject([GithubRepositoryService], (service: GithubRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
