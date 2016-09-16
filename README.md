## Browserify and PhoneGap/cordova Template

This template comes with browserify. Run `npm install` to download the dependencies.

Add your node code to src/app.js. You can build it manually by running `npm run bundle` or it will run automatically due to the `before_prepare` hook. I added the hook in the `scripts` directory. Either approach will bundle `src/app.js` into `www/js/bundle.js` which then gets copied into your platform specific directories on `prepare`. You can disable to hook in config.xml
