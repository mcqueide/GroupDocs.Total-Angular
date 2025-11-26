import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {ViewerAppComponent} from './viewer-app.component';
import {
  Api,
  CommonComponentsModule,
  ErrorInterceptorService,
  LoadingMaskInterceptorService,
  LoadingMaskService
} from '@groupdocs.examples.angular/common-components';
import {ViewerService} from "./viewer.service";
import {ConfigService} from "@groupdocs.examples.angular/common-components";
import {ViewerConfigService} from "./viewer-config.service";
import {ExcelDocumentComponent} from './excel-document/excel-document.component';
import {ExcelPageComponent} from './excel-page/excel-page.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RunPresentationComponent} from './run-presentation/run-presentation.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {ViewerTranslateLoader} from './translation/viewer-translate.loader';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


export function initializeApp(viewerConfigService: ViewerConfigService) {
  const result = () => viewerConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

// AoT requires an exported function for factories
export function translateLoaderFactory() {
  return new ViewerTranslateLoader();
}

@NgModule({ declarations: [
        ViewerAppComponent,
        RunPresentationComponent,
        ExcelDocumentComponent,
        ExcelPageComponent
    ],
    exports: [
        ViewerAppComponent,
        RunPresentationComponent,
        ExcelDocumentComponent,
        ExcelPageComponent,
        CommonComponentsModule
    ], imports: [BrowserModule,
        CommonComponentsModule,
        FontAwesomeModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translateLoaderFactory
            }
        })], providers: [
        ViewerService,
        ConfigService,
        ViewerConfigService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptorService,
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [ViewerConfigService], multi: true
        },
        LoadingMaskService,
        {
            provide: HTTP_INTERCEPTORS,
            useFactory: setupLoadingInterceptor,
            multi: true,
            deps: [LoadingMaskService]
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class ViewerModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
  
  static forRoot(viewerApiEndpoint : string): ModuleWithProviders<ViewerModule> {
    Api.VIEWER_DEFAULT_API_ENDPOINT = viewerApiEndpoint
    return {
      ngModule: ViewerModule
    };
  }
}
