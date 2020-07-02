import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowDetailComponent } from './containers/show-detail/show-detail.component';
import { OriginTemplateComponent } from './containers/origin-template/origin-template.component';
import { ShowListComponent } from './containers/show-list/show-list.component';
import { SelectorComponent } from './containers/selecter/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ShowDetailComponent,
    OriginTemplateComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
