import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';

const routes: Routes = [
  {
    path: 'draft',
    component: DraftComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DraftComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
