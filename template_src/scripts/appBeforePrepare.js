var fs = require('fs');

module.exports = function(context) {
    //grab Q from cordova modules
    var Q = context.requireCordovaModule('q');
    console.log(context);
    var deferral = new Q.defer();
	var outFile = fs.createWriteStream('www/js/bundle.js');
    browserify("src/app.js")
    .bundle()
    .pipe(outFile);

	outFile.on('finish', function() {
	    //bundle.js has been written
        deferral.resolve();
    })

    return deferral.promise;
}
