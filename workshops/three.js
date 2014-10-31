define(function () {
    return function (mission) {

        console.log('Let your quadcopter fly the "Haus vom Nikolaus"');

        // Haus vom Nikolaus in horizontal, but it is also possible in vertical
        // http://de.wikipedia.org/wiki/Haus_vom_Nikolaus#mediaviewer/File:Blender3D_HouseOfStNiclas.gif
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