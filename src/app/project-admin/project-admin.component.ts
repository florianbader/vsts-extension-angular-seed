import { ConfigurationService } from "./../shared/configuration.service";
import { Component, OnInit } from "@angular/core";
import { getClient } from "TFS/VersionControl/GitRestClient";

@Component({
  selector: "app-project-admin",
  templateUrl: "./project-admin.component.html",
  styleUrls: ["./project-admin.component.css"]
})
export class ProjectAdminComponent implements OnInit {
  private webContext: WebContext;

  public isBusy: boolean;

  constructor(private configurationService: ConfigurationService) {}

  public ngOnInit() {
    this.init();
  }

  private async init() {
    this.isBusy = true;
    this.webContext = VSS.getWebContext();

    try {
    } finally {
      this.isBusy = false;
    }
  }
}
