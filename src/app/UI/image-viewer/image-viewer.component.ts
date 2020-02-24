import {Component, OnInit} from '@angular/core';
import {DataManagerService} from '../../services/data-manager.service';
import {ImageViewerComponentAction} from './image-viewer.component.action';
import {AppConstant} from '../../constant/app-constant';
import {ImageModel} from '../../Models/image.model';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent extends ImageViewerComponentAction implements OnInit {
  ImageList: ImageModel[];
  btn;

  constructor(dataManager: DataManagerService) {
    super();
    this.dataManager = dataManager;
    this._getImageUrl = AppConstant.BaseUrl + AppConstant.PhotoList;
    this.getImage(this._getImageUrl);
    this.btn = 'all';
  }

  ngOnInit() {
  }

  filterSelection(c) {
    this.btn = c;
    if (c === 'all') {
      this._getImageUrl = AppConstant.BaseUrl + AppConstant.PhotoList;

    } else {
      this._getImageUrl = AppConstant.BaseUrl + AppConstant.Search + AppConstant.PhotoList + '?page=1&query=' + this.btn;
    }
    this.getImage(this._getImageUrl);
  }


  protected passGetImageRes(res) {
    if (this.btn === 'all') {
      this.ImageList = res;
    } else {
      this.ImageList = res.results;
    }
    console.log(this.ImageList, 'image');
  }

  protected passGetImageErr(err) {
  }


}
