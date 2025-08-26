import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { SafeArea } from  '@capacitor-community/safe-area';

SafeArea.enable({
    config: {
        /* same as what was in capacitor.config.ts */
        //@ts-ignore
        //Object literal may only specify known properties, and 'enabled' does not exist in type 'Config'.ts(2353)
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: '#000000',
      statusBarContent: 'light',
      navigationBarColor: '#000000',
      navigationBarContent: 'light',
      offset: 0,
    }
});
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));