var _this = this;
var Animation = require('Animation');
Animation.TimeDriver.onCompletedPromise = function () {
    return new Promise(function (resolve) {
        _this.onCompleted().subscribe(function (event) {
            resolve(event);
        });
    });
};
