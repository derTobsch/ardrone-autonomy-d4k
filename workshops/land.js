define(function () {
    return function (mission) {

        mission.land();

        setTimeout(function () {
            process.exit(0);
        }, 1000);
        
    };
});