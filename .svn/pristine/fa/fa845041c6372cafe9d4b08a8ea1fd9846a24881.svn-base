class CipherJsTestDeviceAPI{}
var jsTestDeviceAPI = CipherJsTestDeviceAPI || {};

CipherJsTestDeviceAPI.doJsAllTestModule = function() 
{
    doJsFullScreenMove();
}

CipherJsTestDeviceAPI.doJsFullScreenMove = function() 
{
    JSFullScreenMode(false);

    var bFullScreen1 = JSFullScreenMode(null);
    QUnit.assert.ok(bFullScreen1 == false, "JSFullScreenMode(fasle), then return value passed[false]");

    js_sleep(300);
    JSFullScreenMode(true);
    var bFullScreen2 = JSFullScreenMode(null);
    QUnit.assert.ok(bFullScreen1 == true, "JSFullScreenMode(fasle), then return value passed[true]");
}