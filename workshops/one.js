var autonomy = require('../../ardrone-autonomy'),
    mission  = autonomy.createMission(),
    arDrone = require('ar-drone'),
    arDroneConstants = require('ar-drone/lib/constants');

function navdata_option_mask(c) {
  return 1 << c;
}

// Connect and configure the drone
mission.client().config('control:outdoor', 0);
mission.client().config('detect:detect_type', 12);
mission.client().config('control:altitude_max', 1000);
mission.client().config('control:altitude_min', 500);

mission.log("mission-one.txt");


/* The kids can start here */

mission.takeoff()
       .forward(2.5)
       .forward(0.5)
       .land();

/* -- */

mission.run(function (err, result) {
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("We are done!");
        process.exit(0);
    }
});
