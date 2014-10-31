define(function () {
    return function (mission) {

        console.log('Basic instructions. Try all commands of the quadcopter.');

        mission.takeoff()
            .forward(2)
            .backward(2)
            .right(2)
            .left(2)
            .up(2)
            .down(2)
            .cw(180)
            .ccw(180)
            .land();
        
    };
});