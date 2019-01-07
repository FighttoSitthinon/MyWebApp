import { Component } from '@angular/core';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent {

  constructor(private _contentService: ContentService) { }

  title = "";
  profileContent = {};
  content = [];
 
  ngOnInit() {
    this.title = "Sitthinon Chanaritthichai";

    this._contentService.getProfileContent().subscribe(response => {
      this.profileContent = response.filter(item => item.key == 'Profile')[0];
      this.content = response.filter(item => item.key != 'Profile');
      console.log(this.profileContent);
    }, error => { console.log(error); });

  }
}
