var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require
});

requirejs(['src/batteryListener', 'src/workshopLoader'], function (batteryListener, workshop) {

        var autonomy = require('../ardrone-autonomy'),
            mission = autonomy.createMission(),
            arDroneConstants = require('ar-drone/lib/constants');

        batteryListener.listen(mission._client);

        mission.client().config('general:navdata_demo', 'TRUE');
        
        // Connect and configure the drone
        mission.client().config('control:outdoor', 0);
        mission.client().config('control:altitude_max', 3000);
        mission.client().config('control:altitude_min', 0);
        mission.client().config('detect:detect_type', 12);

        try {
            workshop.runWith(mission);
        }
        catch (e) {
            console.log(e.message);
        }

        mission.run(function (err, result) {
            if (err) {

                console.log("Oops, something bad happened: %s", err.message);
                console.log('SecurityBox ', err.securityBox);
                console.log('Goal ', err.goal);

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
    }
);