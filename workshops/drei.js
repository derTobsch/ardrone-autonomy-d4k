define(function () {
    return function (mission) {

        console.log('demo_haus.js (Haus vom Nikolaus)');

        mission.takeoff()
            .go({x:2, y:0})
            .go({x:3, y:1.5})
            .go({x:2, y:2})
            .go({x:0, y:2})
            .go({x:0, y:0})
            .go({x:2, y:2})
            .go({x:2, y:0})
            .go({x:0, y:2})
            .land();

    };
});