import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';
import { FloorPlanModule } from '@arthrex/floor-plan';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    RouterModule.forRoot(routes),
    FloorPlanModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
