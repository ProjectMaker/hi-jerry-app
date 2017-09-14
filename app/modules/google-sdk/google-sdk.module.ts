import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular";
import { ReactiveFormsModule } from '@angular/forms';

import { placePipes } from '../../shared/pipes/place.pipes';
import { MapComponent } from "./components/map/map.component";
import { ListViewSearchComponent } from "./components/list-view-search-place/list-view-search-place.component";
import { SearchPlaceComponent } from "./components/search-place/search-place.component";

@NgModule({
  declarations: [
    ...placePipes,
    MapComponent,
    ListViewSearchComponent,
    SearchPlaceComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    ReactiveFormsModule,
  ],
  providers: [

  ],
  exports: [
    MapComponent,
    ListViewSearchComponent,
    SearchPlaceComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class GoogleSdkModule {}