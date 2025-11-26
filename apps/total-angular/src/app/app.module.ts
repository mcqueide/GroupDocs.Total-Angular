import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TotalNavComponent} from './total-nav/total-nav.component';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {TotalViewComponent} from './total-view/total-view.component';
import {ViewerModule, ViewerAppComponent} from '@groupdocs.examples.angular/viewer';
import {AnnotationModule, AnnotationAppComponent} from "@groupdocs.examples.angular/annotation";

// Call forRoot outside the @NgModule so the imports array contains only module references
const viewerModuleWithProviders = ViewerModule.forRoot("http://localhost:8080");
const annotationModuleWithProviders = AnnotationModule.forRoot("http://localhost:8081");

@NgModule({
  declarations: [AppComponent, TotalNavComponent, TotalViewComponent],
  imports: [
    BrowserModule,
    ViewerModule,
    AnnotationModule,
    RouterModule.forRoot([
      {path: '', component: TotalViewComponent},
      {path: 'viewer', component: ViewerAppComponent},
      {path: 'annotation', component: AnnotationAppComponent},
    ], { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' })
  ],
  providers: [
    // spread the providers returned by forRoot
    ...(viewerModuleWithProviders && (viewerModuleWithProviders as any).providers || []),
    ...(annotationModuleWithProviders && (annotationModuleWithProviders as any).providers || [])
  ],
  exports: [
    TotalViewComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
