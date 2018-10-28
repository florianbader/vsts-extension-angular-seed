import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ProjectAdminComponent } from "./project-admin.component";
import { ConfigurationService } from "../shared/configuration.service";

import "VSS/Controls";
import "VSS/Controls/TreeView";
import "VSS/Controls/Splitter";

@NgModule({
  declarations: [
    ProjectAdminComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ConfigurationService],
  bootstrap: [ProjectAdminComponent]
})
export class ProjectAdminModule {}
