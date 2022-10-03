import ICollection from "../../src/interfaces/ICollection"

const familiars: string[] = [
    "Cat", "Cat", "Cat", "Cat", "Cat", "Cat", 
    "Cat", "Cat", "Cat", "Cat", "Cat", "Cat", 
    "Cat", "Cat", "Cat", "Cat", "Cat", "Cat", 
    "Cat", "Cat", "Cat", "Cat", "Cat", "Cat", 
    "Cat", "Cat", "Cat", "Cat", "Cat", "Cat", 

    "Owl", "Owl", "Owl", "Owl", "Owl", "Owl", 
    "Owl", "Owl", "Owl", "Owl", "Owl", "Owl", 
    "Owl", "Owl", "Owl", "Owl", "Owl", "Owl", 

    "Dog", "Dog", "Dog", "Dog", "Dog", "Dog", 
    "Corgi", "Corgi", "Corgi",

    "Capybara", "Capybara",

    "Raven", "Raven", "Raven", "Raven", "Raven", 
    "Raven", "Raven", "Raven", "Raven", "Raven", 

    "Parrot", "Parrot", "Parrot", "Parrot", 

    "Falcon", "Falcon",

    "Duck", "Duck", "Duck", 
    "Goose", "Goose", "Goose",
    "Quail", "Quail",

    "Meerkat", "Meerkat", "Meerkat",

    "Fox", "Fox", "Fox", "Fox", "Fox",

    "Gerbil", "Gerbil", "Gerbil", "Gerbil", 

    "Fruit Bat", "Fruit Bat", "Fruit Bat",
    "Fruit Bat", "Fruit Bat",

    "Rabbit", "Rabbit", "Rabbit",

    "Salamander", "Salamander", "Salamander",
    "Iguana", "Iguana", "Iguana",

    "Sloth",
    "Red Panda",
    "Armadillo",
    "Aardvark",

    "Coyote", "Coyote",
]

export default class FamiliarExtension {
    addComponents(collection: ICollection) {
        const rarity = .1111111112

        collection.components.push({
            name: "Familiar",
            isAttribute: true,

            options: familiars.map(a => {
                return {
                    name: a,
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })
    }
}