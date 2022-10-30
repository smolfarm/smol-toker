import CollectionBlueprint from "../../src/CollectionBlueprint"
import TokenFactory from "../../src/TokenFactory"

const blueprint = new CollectionBlueprint("neon runners", 345)

import RunnerNamer from "./RunnerNamer"
import RunnerDescriber from './RunnerDescriber'

TokenFactory.namer = new RunnerNamer()
TokenFactory.describer = new RunnerDescriber()

blueprint.layerPath = "./examples/neonrunners/layers/"

blueprint.addTsvComponent("Background", 0,
`RedBG	35
GreenBG	11
OrangeBG	11
YellowBG	20
BlueBG	12
PurpleBG	11`)

blueprint.addTsvComponent("Skin", 1,
`Pale	35
Tan	30
Brown	15
Black	13
Bluish	5
Snow	2`)

blueprint.addTsvComponent("Nose", 2,
`Septum	5
Normal	95`)

blueprint.addTsvComponent("Eyes", 3,
`Icey	11
Piercing	11
Beads	7
MonoHypno	2
Hypno	2
Purpleish	11
Brownish	11
Also Brown	11
Reddish	7
Tealish	8
Also Teal	8
Bright	8
X	2
BSoD	1`)

blueprint.addTsvComponent("Mouth", 4,
`Stifling	10
Smug Grin	15
Done	7
Smirk	15
Fang	7
Smudge	14
Grunt	8
Meh	12
Estrogen Is The Bestrogen	1
Yelling	11`)

blueprint.addTsvComponent("Face", 5,
`Circled	5
Pinpoint	5
No Face Accessory	50
Bisect	6
Bumpy Bisect	6
Small Implants	6
Dual Panels	6
Outline	8
Classic	8`)

blueprint.addTsvComponent("Outfit", 6,
`Undressed Green	4
Undressed Magentaish	4
Undressed Blue	4
Undressed Orangered	4
Blue Robe	4
Simple Choker	3
Green Robe	4
Magenta Robe	4
Special Yellow	1
Plain Sleeves	4
Plain Vest	4
Other Plain Vest	4
Other Plain Sleeves	4
Sleeveless Red	4
Red Outfit	4
Green Outfit	3
Teal Outfit	3
Teal Vest	3
Purple Vest	3
Binary Space Jacket	1
Complementary Space Jacket	1
Strappy Blue	2
Strappy Red	2
Strappy Green	2
Redshirt	2
Orange Cadet	2
Yellow Cadet	2
Pink Cadet	2
Naked	1
Spikey Purple	1
Spikey Green	1
Glowing Blue	1
Iridescent Pearl	1
Green Pearl	1
Orange Pearl	1
Red Shoulder	3
Gray Shoulder	3
Purple Spacey	1
Blue Spacey	1
Pink Spacey	1`)

blueprint.addTsvComponent("Hair", 7,
`Purple Buns	1
Exposed	4
Exploded	1
Blue Buns	2
Close Shave	2
Blue Pop	3
Red Pop	3
Magenta Pop	3
Blue Ombre Pop	3
Green Ombre Pop	2
Vibrant Pop	1
Navy Pop	2
Edgy Watermelon	1
Edgy Pink	2
Edgy Sunflower	1
Edgy Pastel	3
Edgy Orange	2
Black Regular	5
Brown Regular	5
Normal Buns	4
Exposed Panel	2
Exposed Side Panel	2
Spacey Green	1
Spacey Creamsicle	2
Spacey Blue	2
Swoopy Black	3
Swoopy Mix	2
Swoopy Purple	3
Swoopy Indigo	3
Swoopy Pink	3
Short Black	4
Short Brown	4
Short Light	4
Red Edges	2
Cyan Edges	2
Pink Edges	2
Watermelon Ears	2
Blueberry Lemonade Ears	1
Purple Ears	1
Seafoam Ears	1
Red Ears	1
Blue Sidecut	1
White Sidecut	1
No Hair	1`)

TokenFactory.fullBuild(blueprint)