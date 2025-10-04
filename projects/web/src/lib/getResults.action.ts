"use server"

import "server-only"
import getSwimmerWithResultsAction from "./getSwimmersWithResults.action";
import getTeamWithResultsAction from "./getTeamsWithResult.action";
import { getSwimmersCollection } from "./mongo/collections";

export default async function getResultsAction() {
    const swimmersByDistance = (await getSwimmerWithResultsAction())
        .filter(swimmer => swimmer.isRegistered)
        .sort((a, b) => a.total > b.total ? -1 : 1);

    const swimmersMale = swimmersByDistance.filter(swimmer => swimmer.gender === "M");
    const swimmersFemale = swimmersByDistance.filter(swimmer => swimmer.gender === "W");

    const swimmeryByNight = swimmersByDistance.filter(a => true).sort((a, b) => a.night > b.night ? -1 : 1)

    const swimmersMaleNight = swimmeryByNight.filter(swimmer => swimmer.gender === "M");
    const swimmersFemaleNight = swimmeryByNight.filter(swimmer => swimmer.gender === "W");

    const swimmersByAgeAsc = swimmersByDistance.filter(swimmer => swimmer.birthday).sort((a, b) => (a.birthday || "") > (b.birthday || "") ? -1 : 1)
    const swimmersByAgeDesc = swimmersByDistance.filter(swimmer => swimmer.birthday).sort((a, b) => (a.birthday || "") < (b.birthday || "") ? -1 : 1)

    const teams = (await getTeamWithResultsAction())
        .filter(team => team.total)
        .sort((a, b) => a.total > b.total ? -1 : 1);

    const teamsAvg = teams.filter(() => true).sort((a, b) => a.average > b.average ? -1 : 1);

    const swimmerCol = await getSwimmersCollection();

    return {
        swimmers: swimmersByDistance,

        swimmersMale,
        swimmersFemale,

        swimmersMaleNight,
        swimmersFemaleNight,

        swimmerOldestMale: swimmersByAgeDesc.find(swimmer => swimmer.gender === "M"),
        swimmerOldestFemale: swimmersByAgeDesc.find(swimmer => swimmer.gender === "W"),

        swimmerYoungestMale: swimmersByAgeAsc.find(swimmer => swimmer.gender === "M"),
        swimmerYoungestFemale: swimmersByAgeAsc.find(swimmer => swimmer.gender === "W"),

        swimmersMale15: swimmersMale.filter((swimmer) => swimmer.age >= 15 && swimmer.age <= 17).slice(0, 3),
        swimmersMale18: swimmersMale.filter((swimmer) => swimmer.age >= 18 && swimmer.age <= 25).slice(0, 3),
        swimmersMale26: swimmersMale.filter((swimmer) => swimmer.age >= 26 && swimmer.age <= 35).slice(0, 3),
        swimmersMale36: swimmersMale.filter((swimmer) => swimmer.age >= 36 && swimmer.age <= 45).slice(0, 3),
        swimmersMale46: swimmersMale.filter((swimmer) => swimmer.age >= 46 && swimmer.age <= 55).slice(0, 3),
        swimmersMale56: swimmersMale.filter((swimmer) => swimmer.age >= 56 && swimmer.age <= 65).slice(0, 3),
        swimmersMale66: swimmersMale.filter((swimmer) => swimmer.age >= 66 && swimmer.age <= 75).slice(0, 3),
        swimmersMale76: swimmersMale.filter((swimmer) => swimmer.age >= 76 && swimmer.age <= 99).slice(0, 3),

        swimmersFemale15: swimmersFemale.filter((swimmer) => swimmer.age >= 15 && swimmer.age <= 17).slice(0, 3),
        swimmersFemale18: swimmersFemale.filter((swimmer) => swimmer.age >= 18 && swimmer.age <= 25).slice(0, 3),
        swimmersFemale26: swimmersFemale.filter((swimmer) => swimmer.age >= 26 && swimmer.age <= 35).slice(0, 3),
        swimmersFemale36: swimmersFemale.filter((swimmer) => swimmer.age >= 36 && swimmer.age <= 45).slice(0, 3),
        swimmersFemale46: swimmersFemale.filter((swimmer) => swimmer.age >= 46 && swimmer.age <= 55).slice(0, 3),
        swimmersFemale56: swimmersFemale.filter((swimmer) => swimmer.age >= 56 && swimmer.age <= 65).slice(0, 3),
        swimmersFemale66: swimmersFemale.filter((swimmer) => swimmer.age >= 66 && swimmer.age <= 75).slice(0, 3),
        swimmersFemale76: swimmersFemale.filter((swimmer) => swimmer.age >= 76 && swimmer.age <= 99).slice(0, 3),

        teams: teams,
        teamsAvg: teamsAvg,

        youngestMale: (await swimmerCol.find({gender: "M", isRegistered: true, distanceRating: true}).sort({birthday: -1}).toArray()).filter(s => s.birthday !== null)[0],
        youngestFemale: (await swimmerCol.find({gender: "W", isRegistered: true, distanceRating: true}).sort({birthday: -1}).toArray()).filter(s => s.birthday !== null)[0],

        oldestMale: (await swimmerCol.find({gender: "M", isRegistered: true, distanceRating: true}).sort({birthday: 1}).toArray()).filter(s => s.birthday !== null)[0],
        oldestFemale: (await swimmerCol.find({gender: "W", isRegistered: true, distanceRating: true}).sort({birthday: 1}).toArray()).filter(s => s.birthday !== null)[0]
    }
}