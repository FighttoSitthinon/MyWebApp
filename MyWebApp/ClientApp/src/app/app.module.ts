import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skills/skill.component';
import { ContentService } from './content.service';
import { AboutComponent } from './about-web/about-web.component';

//เรียกใช้ Service
export function app_InitContent(appService: ContentService) {
  return () => appService.getContents();
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    WorkExpComponent,
    ProfileComponent,
    ContactComponent,
    SkillComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'work-exp', component: WorkExpComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'skill', component: SkillComponent },
      { path: 'about-web', component: AboutComponent }
    ])
  ],
  providers: [
    //Set ให้ Sevice ถูกเรียกก่อนที่จะเริ่มการทำงาน
    ContentService,
    { provide: APP_INITIALIZER, useFactory: app_InitContent, deps: [ContentService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
