import { Injectable } from "@angular/core";

@Injectable()
export class ConfigurationService {
  private configurationDocumentId = 1;
  private webContext: WebContext;

  constructor() {
    this.webContext = VSS.getWebContext();
  }

  public async updateExtensionConfiguration<T>(doc: T) {
    const service = await this.getExtensionService();
    return await service.setDocument(this.webContext.collection.name, doc);
  }

  public async getExtensionConfiguration<T>() {
    const service = await this.getExtensionService();
    return await service.getDocument(this.webContext.collection.name, this.configurationDocumentId.toString()) as T;
  }

  private async getExtensionService(): Promise<IExtensionDataService> {
    return await VSS.getService(VSS.ServiceIds.ExtensionData) as IExtensionDataService;
  }
}
