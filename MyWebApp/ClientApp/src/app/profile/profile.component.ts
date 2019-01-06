import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent {

  constructor(private _contentService: ContentService) { }

  title = "";
  profileContent = [];
 
  ngOnInit() {
    this.title = "Sitthinon Chanaritthichai";

    this._contentService.getProfileContent().subscribe(response => {
      this.profileContent = response;
    }, error => { console.log(error); });
  }
}
