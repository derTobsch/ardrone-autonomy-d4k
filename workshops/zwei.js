define(function () {
    return function (mission) {
        mission.takeoff()
            .forward(0.2)
            .backward(0.2)
            .land();
    };
});