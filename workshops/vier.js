define(function () {
    return function (mission) {

        console.log('demo_4eck_mit_drehen.js (nochmal das 4 Eck, aber diesmal mit drehen in 90° Schritten)');
        
        mission.takeoff()
            .forward(1)
            .cw(90)
            .forward(1)
            .cw(90)
            .forward(1)
            .cw(90)
            .forward(1)
            .cw(90)
            .land();
    };
});