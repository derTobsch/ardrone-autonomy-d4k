define(function () {

    var lastBatteryPercentage;

    return {
        listen: function (client) {
            client.on('navdata', function (navdata) {
                if (navdata.demo && navdata.demo.batteryPercentage) {
                    var batteryPercentage = parseInt(navdata.demo.batteryPercentage);

                    if (batteryPercentage != lastBatteryPercentage && batteryPercentage <= 30 && (batteryPercentage % 3 === 0)) {
                        console.log('Die Batterie ist schwach: ', batteryPercentage + '%');
                        lastBatteryPercentage = batteryPercentage;
                    }

                    if (batteryPercentage <= 20) {
                        console.log('Quadcopter startet nicht mehr');
                    }
                }
            });
        }
    };
});