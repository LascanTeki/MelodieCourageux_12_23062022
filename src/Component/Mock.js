const USER_MAIN_DATA = 
    {
        data:
        {
            id: 12,
            userInfos: {
                firstName: 'Melvin',
                lastName: 'Brave',
                age: 22,
            },
            todayScore: 1,
            keyData: {
                calorieCount: 1630,
                proteinCount: 155,
                carbohydrateCount: 290,
                lipidCount: 50
            }
        }

    }


const USER_ACTIVITY = 
    {
        data:
        {
            userId: 12,
            sessions: [
                {
                    day: '2020-07-01',
                    kilogram: 79,
                    calories: 20
                },
                {
                    day: '2020-07-02',
                    kilogram: 79,
                    calories: 10
                },
                {
                    day: '2020-07-03',
                    kilogram: 78,
                    calories: 10
                },
                {
                    day: '2020-07-04',
                    kilogram: 78,
                    calories: 0
                },
                {
                    day: '2020-07-05',
                    kilogram: 78,
                    calories: 0
                },
                {
                    day: '2020-07-06',
                    kilogram: 78,
                    calories: 10
                },
                {
                    day: '2020-07-07',
                    kilogram: 78,
                    calories: 10
                }
            ]
        }

    }



const USER_AVERAGE_SESSIONS = 
    {
        data:
        {
            userId: 12,
            sessions: [
                {
                    day: 1,
                    sessionLength: 10
                },
                {
                    day: 2,
                    sessionLength: 20
                },
                {
                    day: 3,
                    sessionLength: 0
                },
                {
                    day: 4,
                    sessionLength: 20
                },
                {
                    day: 5,
                    sessionLength: 10
                },
                {
                    day: 6,
                    sessionLength: 10
                },
                {
                    day: 7,
                    sessionLength: 5
                }
            ]
        }

    }



const USER_PERFORMANCE = 
    {
        data:
        {
            userId: 12,
            kind: {
                1: 'cardio',
                2: 'energy',
                3: 'endurance',
                4: 'strength',
                5: 'speed',
                6: 'intensity'
            },
            data: [
                {
                    value: 100,
                    kind: 1
                },
                {
                    value: 1,
                    kind: 2
                },
                {
                    value: 50,
                    kind: 3
                },
                {
                    value: 350,
                    kind: 4
                },
                {
                    value: 1,
                    kind: 5
                },
                {
                    value: 150,
                    kind: 6
                }
            ]
        }

    }


export default function mock() {


    return ([USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_ACTIVITY,  USER_PERFORMANCE])
}