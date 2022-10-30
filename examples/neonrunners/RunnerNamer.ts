import INamer from '../../src/interfaces/INamer'
import random from 'random'

const titles: string[] = ["Overseer", "Agent", "Gunner", "Runner", "Soldier", "Trooper", "Oracle", "Imperator", "Medic", "Pharmacist", "Healer", "Gatherer", "Dancer", "Entertainer", "Strategist", "Inspector", "Commander", "Engineer", "Technician", "Defender", "Destroyer", "Pilot", "Doctor", "Influencer", "Officer", "Educator", "Stylist", "Leader", "Grunt", "Expendable", "Honorable", "Professor", "Mercenary", "Lieutenant", "Cadet", "Sharpshooter", "Scout", "Hunter", "Analyst", "Sleeper", "Deliverator", "Captain", "General", "Navigator", "Detective"]

const names: string[] = ["Deckard", "Rinzler", "Mako", "Dex", "Horizon", "Gizmo", "Flux", "Kim", "Nguyen", "Rodriguez", "Han", "Lin", "Quartz", "Curzon", "Dax", "O'Brien", "Nechayev", "Rozhenko", "Damar", "Yates", "Adami", "Cretak", "Troi", "Martok", "Laren", "Nerys", "Sulan", "Eddington", "Pulaski", "Gomez", "Crusher", "Barclay", "Yar", "La Forge", "Riker", "Vorik", "Celes", "Kes", "Pike", "Chekov", "Colt", "Sulu", "Grayson", "DeSalle", "Galloway", "Fontaine", "Jones", "Smith", "Faraday", "Paine", "Turner", "White", "Black", "Herald", "Dominguez", "Fredrick", "Himura", "Inoue", "Miyazaki", "Cao", "Cai", "Feng", "Guo", "Jiang", "Shao", "Song", "Liu", "Xiao", "Abel", "Marout", "Esato", "Artemis", "Silva", "Hansen", "Paris", "Wade", "Ikari", "Smasher"]

export default class RunnerNamer implements INamer {
    
    name(tokenId: number) {
        const name =   `${titles[random.int(0,titles.length-1)]} ${names[random.int(0,names.length-1)]}`

        return name
    }

    testBatch(size: number) {
        let names: string[] = []

        for(let i=0; i<size; i++) {
            names.push(this.name(i))
        }

        console.log(names)
    }
}