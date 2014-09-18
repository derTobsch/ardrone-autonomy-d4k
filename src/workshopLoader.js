define(
    ['workshops/eins', 'workshops/zwei', 'workshops/drei', 'workshops/vier'],
    function (eins, zwei, drei, vier) {
        
        return {
            runWith: function (mission) {

                var session;

                switch (process.argv[2]) {
                    case 'eins':
                        session = eins;
                        break;
                    case 'zwei':
                        session = zwei;
                        break;
                    case 'drei':
                        session = drei;
                        break;
                    case 'vier':
                        session = vier;
                        break;
                    default:
                        throw 'Diesen workshop gibt es nicht.';
                }

                session(mission);
            }
        };
    }
);