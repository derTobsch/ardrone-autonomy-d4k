define(function () {
    return function (mission) {

        console.log('Rectangle with turning the quadcopter');
        
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