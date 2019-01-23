import { Component, OnInit} from '@angular/core';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private _contentService: ContentService) { }

  content = {};

  ngOnInit() {

    this._contentService.getIntro().subscribe(response => {
      this.content = response;
    }, error => { console.log(error); });

  }
}

