var autonomy = require('../../ardrone-autonomy'),
    mission  = autonomy.createMission();

console.log('Battery Level: ', mission.client().battery());

process.exit(0);