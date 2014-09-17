var sessionEins = function () {

    console.log('EINS');
    
    mission.takeoff()
        .zero()
        .log()
        .cw(30)
        .log()
        .forward(1.8)
        .log()
        .land();
    
    
};

