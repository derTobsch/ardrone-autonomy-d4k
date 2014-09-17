var WorkshopExecuter = function(strategy) {
    this.strategy = strategy;
};
WorkshopExecuter.prototype.execute = function() {
    return this.strategy();
};

var sessionToStart;
process.argv.forEach(function (val, index, array) {
    sessionToStart = val;
});

var session;
switch(sessionToStart) {
    case 'eins':
        session = sessionEins;
        break;
    case 'zwei':
        session = sessionZwei;
        break;
    case 'drei':
        session = sessionDrei;
        break;
    case 'vier':
        session = sessionVier;
        break;
    default:
        throw 'Diese Session gibt es nicht.'
}


var autonomy = require('../../ardrone-autonomy'),
    mission  = autonomy.createMission(),
    arDroneConstants = require('ar-drone/lib/constants');

function navdata_option_mask(c) {
    return 1 << c;
}

// From the SDK.
var navdata_options = (
    navdata_option_mask(arDroneConstants.options.DEMO)
    | navdata_option_mask(arDroneConstants.options.VISION_DETECT)
    | navdata_option_mask(arDroneConstants.options.MAGNETO)
    | navdata_option_mask(arDroneConstants.options.WIFI)
    );

mission.client().config('general:navdata_demo', true);
mission.client().config('general:navdata_options', navdata_options);

// Connect and configure the drone
mission.client().config('control:outdoor', 0);
mission.client().config('detect:detect_type', 12);
mission.client().config('control:altitude_max', 3000);
mission.client().config('control:altitude_min', 0);



new WorkshopExecuter(session).execute();


mission.run(function (err, result) {
    if (err) {

        console.log("Oops, something bad happened: %s", err.message);
        console.log('SecurityBox ',err.securityBox);
        console.log('Goal ',err.goal);

        mission.client().stop();
        mission.client().land();

        setTimeout(function () {
            process.exit(0);
        }, 1000);
    } else {
        console.log("We are done!");
        process.exit(0);
    }
});