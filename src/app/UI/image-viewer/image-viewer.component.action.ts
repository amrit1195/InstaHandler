import {DataManagerService} from '../../services/data-manager.service';

export abstract class ImageViewerComponentAction {

  protected dataManager: DataManagerService;
  protected _getImageUrl;


  protected getImage(url) {
    this.dataManager.getRequest(this._getImageUrl)
      .subscribe(
        res => {
          this.passGetImageRes(res);
        },
        err => this.passGetImageErr(err)
      );
  }

  protected abstract passGetImageRes(res);

  protected abstract passGetImageErr(res);


}
