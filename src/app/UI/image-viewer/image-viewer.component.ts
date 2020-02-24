import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName('column');
    if (c === 'all') { c = ''; }
    for (i = 0; i < x.length; i++) {
      this.RemoveClass(x[i], 'show');
      if (x[i].className.indexOf(c) > -1) { this.AddClass(x[i], 'show'); }
    }
  }

   AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {element.className += ' ' + arr2[i]; }
    }
  }

   RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(' ');
  }


// Add active class to the current button (highlight it)
  /*let btnContainer = document.getElementById('myBtnContainer');
  let btns = btnContainer.getElementsByClassName('btn');
  for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}*/

}
