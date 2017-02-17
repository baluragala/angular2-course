import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {HighlightDirective} from './shared/highlight.directive';
import {HighlightWithEventDirective} from './shared/highlightwithevent.directive';
import {HighlightWithEventAndInputDirective} from './shared/highlightwitheventandinput.directive';
import {UnlessDirective} from "./shared/unless.directive";


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,
    HighlightDirective,
    HighlightWithEventDirective,
    HighlightWithEventAndInputDirective,
    UnlessDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}
