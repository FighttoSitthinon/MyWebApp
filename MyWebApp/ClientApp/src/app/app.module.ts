import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContentService } from './service/content.service';
import { AboutComponent } from './about-web/about-web.component';

////เรียกใช้ Service
//export function app_InitContent(appService: ContentService) {
//  return () => appService.getContents();
//}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    WorkExpComponent,
    ProfileComponent,
    ContactComponent,
    PortfolioComponent,
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
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'about-web', component: AboutComponent }
    ])
  ],
  providers: [
    ContentService // Dependency Injection แบบปกติ

    ////ถ้าจะ Set ให้ Sevice ถูกเรียกก่อนที่จะเริ่มการทำงาน
    //ContentService,
    //{ provide: APP_INITIALIZER, useFactory: app_InitContent, deps: [ContentService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// วิธีในการเพิ่ม Component / Service ใน CLI
// component  => ng g c __Name__
// service    => ng g s __Name__
