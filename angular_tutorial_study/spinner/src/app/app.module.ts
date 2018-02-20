import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RepolistComponent } from './repolist/repolist.component';
import { GithubRepositoryService } from './github-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    RepolistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    GithubRepositoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
