define(function () {
    return function (mission) {

        console.log('Basic geometry. Fly a rectangle and a triangle');

        // this is in horizontal, you can also do it on vertical
        mission.takeoff()
            .go({x:0, y:1})
            .go({x:1, y:1})
            .go({x:1, y:0})
            .go({x:0, y:0})
            .hover(2000)
            .go({x:1, y:1})
            .go({x:0, y:2})
            .go({x:0, y:0})
            .land();
        
    };
});