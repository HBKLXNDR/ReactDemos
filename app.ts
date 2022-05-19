// 1) создать интерфейс на основе этого объекта:
//
// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu.be/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }


interface ICore {
    flight: number,
    core: {
        reuse_count: number,
        status: string
    }

}

interface IPayload {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

interface ISpaceX {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: string,
        video_link: string
    },
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: ICore[]
        },
        second_stage: {
            payloads: IPayload[]
        }
    }
}

// 2) протипизировать функции:
//
// interface IUser {
//     name: string,
//     age: number,
//     gender: string
// }
//
// const user: IUser = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
//
// const sum = (a: number, b: number): number => a + b
//
// const showSum = (a: number, b: number): void => {
//     console.log(a + b);
// };
//
// const incAge = (someUser: IUser, inc: number): IUser => {
//     someUser.age += inc
//     return someUser
// };
//
// console.log(sum(1, 2));
// showSum(2, 3)
// incAge(user, 2)




type Name = "Max" | "Kira" | "Karina" | "Olha"

interface IUser {
    id?: number;
    name: Name;
}

interface IUser2 extends IUser {
    age: number
}

const user: Required<IUser2> = {
    name: "Olha",
    id: null,
    age: 23
}

