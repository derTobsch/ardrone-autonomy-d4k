define([], function () {
        return {
            runWith: function (mission) {
                var session = requirejs('workshops/' + process.argv[2]);
                if (!session) {
                    throw 'This workshop does not exist';
                }
                session(mission);
            }
        };
    }
);