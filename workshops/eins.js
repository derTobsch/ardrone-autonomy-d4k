define(function () {
    return function (mission) {

        console.log('demo_basics.js (Hoch/Runter,Rechts/Links,Vor/Zurück,Drehen)');

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