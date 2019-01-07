import { Component } from '@angular/core';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-workExp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent {
  constructor(private _contentService: ContentService) { }

  content = [];

  ngOnInit() {

    this._contentService.getWorkExp().subscribe(response => {
      this.content = response.sort((one, two) => (one.no > two.no ? -1 : 1)); //order by DESC
      console.log(response);
    }, error => { console.log(error); });

  }

}
