import CollectionBlueprint from "../../src/CollectionBlueprint"
import TokenFactory from "../../src/TokenFactory"

const blueprint = new CollectionBlueprint("corg corg", 100)

blueprint.description = "corg corg corg corg corg corg corg corg corg corg corg corg corg corg corg"
blueprint.externalUrl = "https://corgcorg.xyz"
blueprint.layerPath = "./examples/corg-corg/layers/"

blueprint.addTsvComponent("backgrowlnd", 0,
`Beige	10
Green	10
Bright Pink	10
Pinker	15
Grayish	8
Yellowish	10
Purplish	10
Reddish	10
Bluish	15
Cloudish	1
Rainbowish	1`)

blueprint.addTsvComponent("fur", 1,
`Red	5
Purple	5
Blue	5
Gray	5
Original Orange	50
Soft Orange	10
Muted Red	5
Yellow	15`)

blueprint.addTsvComponent("mouf", 2,
`Deddd	6
Heh	6
Huhhh	6
Mehhh	6
Oh	5
Gold Grill	1
Teefs	5
Nyan	5
Blep	5
Bleh	5
Goose	6
Kissy	5
Harumph	6
Ahhhh	5
Boned	1
Satisfied	5
Chill	6
Not Chill	5
Unsure	5
Belch	6`)

blueprint.addTsvComponent("lookies", 3,
`Squee	6
Happy	9
Weirdo	6
Sus	9
Susss	8
Chibi	8
Anya	6
Vee	8
Wide	7
Squig	8
Ded	6
Chirpy	8
Content	5
Aghast	6`)

blueprint.addTsvComponent("accessuwies", 4,
`Nippon	2
Shonk	2
Unicorn	2
Red Band	2
Blue Band	2
Slug Thing	2
Doc	2
Mystery Numbers	2
Pastel Bow	2
Blossoms	2
Purple Bow	2
Yellow Bow	2
Green Bow	2
Pink Bow	2
Blue Bow	2
Red Bow	4
Blue Collar	1
Red Collar	2
Chosen One	2
Stitched	2
Free Hugs	1
Smart	4
Dummy	4
Underwear	4
Panties	4
Dino	1
Glow	1
Antennae	4
King	4
Tentagreen	1
Tentapink	4
Third Eye	1
Eggy	1
Uzumaki	1
Golden Laurels	1
Laurels	4
Star	1
Heart	1
Skull	1
Bandaid	1
Ladybug	2
Sweat	1
Twirly	2
Snek	2
Crown	1
Trio	2
Sprout	1
Gray Kitten	1
Pink Kitten	1
Orange Kitten	1
Ball Pit	1`)

TokenFactory.fullBuild(blueprint)