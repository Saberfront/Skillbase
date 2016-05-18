SFApp.factory("HapticService",function($rootScope){
$rootScope.vibrateInterval = null;
var HapticService = {

StartVibrate: function(duration) {
    window.navigator.vibrate(duration);
},

// Stops vibration
 StopVibrate: function() {
    // Clear interval and stop persistent vibrating
    if( $rootScope.vibrateInterval) $interval.cancel($rootScope.vibrateInterval);
    window.navigator.vibrate(0);
},

// Start persistent vibration at given duration and interval
// Assumes a number value is given
StartPeristentVibrate: function(duration, interval) {
    $rootScope.vibrateInterval = $interval(function() {
        HapticService.StartVibrate(duration);
    }, interval);
}
};
return HapticService
});
