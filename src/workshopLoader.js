define([], function () {

        return {
            runWith: function (mission) {
                var session = requirejs('workshops/' + process.argv[2]);
                if (!session) {
                    throw 'Diesen workshop gibt es nicht.';
                }
                session(mission);
            }
        };
    }
);