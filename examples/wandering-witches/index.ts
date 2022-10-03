import CollectionBlueprint from "../../src/CollectionBlueprint"
import TokenFactory from "../../src/TokenFactory"

import WitchNamer from "./WitchNamer"
import WitchDescriber from './WitchDescriber'

import FamiliarExtension from './FamiliarExtension'

TokenFactory.namer = new WitchNamer()
TokenFactory.describer = new WitchDescriber()

const blueprint = new CollectionBlueprint("wandering witches", 6000)

blueprint.externalUrl = "https://wanderingwitches.xyz"
blueprint.layerPath = "./examples/wandering-witches/layers/"

blueprint.addTsvComponent("Background", 0,
`Flames	1
Night Sky	3
Cherry Blossom Storm	2
Grape	18
Seawater	18
Ocean	18
Forest	18
Dandelion	5
Orange	5
Cherry	12`)

blueprint.addTsvComponent("Setting", 1,
`The Library	17
The Boundary	18
The Fields	18
The Manor	18
The Prison	1
The Caves	1
The Seafloor	10
The Woods	17`)

blueprint.addTsvComponent("Hat", [2,16],
`Thrifty Beige	Thrifty Behind,Thrifty Beige	4
Thrifty Slate	Thrifty Behind,Thrifty Slate	5
Thrifty Magenta	Thrifty Behind,Thrifty Magenta	2
Thrifty Purple	Thrifty Behind,Thrifty Purple	5
Thrifty Green	Thrifty Behind,Thrifty Green	5
Thrifty Brown	Thrifty Behind,Thrifty Brown	5
Thrifty Burnt	Thrifty Behind,Thrifty Burnt	4
Thrifty Blue	Thrifty Behind,Thrifty Blue	4
Thrifty Bones	Thrifty Behind,Thrifty Bones	5
Thrifty Blossom	Thrifty Behind,Thrifty Blossom	5
Beaded Charcoal	Beaded Behind,Beaded Charcoal	5
Beaded Embers	Beaded Behind,Beaded Embers	5
Beaded Ocean	Beaded Behind,Beaded Ocean	4
Beaded Dust	Beaded Behind,Beaded Dust	4
Beaded Salmon	Beaded Behind,Beaded Salmon	4
Beaded Meadow	Beaded Behind,Beaded Meadow	4
Beaded Plume	Beaded Behind,Beaded Plume	4
Beaded Down	Beaded Behind,Beaded Down	3
Beaded Feather	Beaded Behind,Beaded Feather	2
Traditional Tassel	Traditional Tassel	1
Faded Gaze	Faded Gaze	1
Enlightened Gaze	Enlightened Gaze	1
Sullen Gaze	Sullen Gaze	1
Spectral Hat	Spectral Behind,Spectral Hat	0.2
Classic Teal Striped	Classic Teal Striped	2
Classic Brown Striped	Classic Brown Striped	2
Classic Slurpy	Classic Slurpy	2
Classic Drooly	Classic Drooly	2
Classic Chompy	Classic Chompy	0.8
Classic Seahag	Classic Seahag	2
Classic Patchwork	Classic Patchwork	2
Classic Brown	Classic Brown	2
Classic Purple	Classic Purple	2`, {
    defaultFileNames: ["Classic Behind"]
})

blueprint.addTsvComponent("Hair", [3,14],
`Sharp Green	Sharp Green	0.6
Sharp Orange	Sharp Orange	2
Sharp Brown	Sharp Brown	0.6
Sharp Purple	Sharp Purple	0.6
Sharp Charcoal	Sharp Charcoal	0.6
Sharp Navy	Sharp Navy	1
Sharp Violet	Sharp Violet	0.6
Sharp Snow	Sharp Snow	2
Long Brown	Long Brown	0.6
Long Snow	Long Snow	0.2
Long Blue	Long Blue	0.6
Wavy Purple	Wavy Purple	0.6
Wavy Forest	Wavy Purple	0.6
Wavy Navy	Wavy Navy	2
Wavy Red	Wavy Red	0.6
Wavy Snow	Wavy Snow	0.6
Wavy Dandelion	Wavy Dandelion	0.6
Wavy Brown	Wavy Brown	0.6
Wavy Caramel	Wavy Caramel	0.6
Wavy Charcoal	Wavy Charcoal	0.2
Wavy Skyblue	Wavy Skyblue	2
Dramatic Orange	Dramatic Orange	0.6
Dramatic Forest	Dramatic Forest	1
Dramatic Night	Dramatic Night	0.2
Dramatic Cherry	Dramatic Cherry	0.6
Dramatic Charcoal	Dramatic Charcoal	0.6
Dramatic Brown	Dramatic Brown	0.6
Dramatic Dandelion	Dramatic Dandelion	0.6
Dramatic Snow	Dramatic Snow	0.2
Dramatic Violet	Dramatic Violet	1
Purple Waterfall	Purple Waterfall	0.6
Forest Waterfall	Forest Waterfall	0.6
Nightsky Waterfall	Nightsky Waterfall	0.2
Charcoal Waterfall	Charcoal Waterfall	2
Dark Waterfall	Dark Waterfall	1
Treebark Waterfall	Treebark Waterfall	0.6
Dandelion Waterfall	Dandelion Waterfall	0.6
Snow Waterfall	Snow Waterfall	0.6
Orange Waterfall	Orange Waterfall	1
Cascading Crimson	Cascading Crimson	0.6
Cascading Purple	Cascading Purple	0.6
Cascading Nightsky	Cascading Nightsky	2
Cascading Forest	Cascading Forest	0.6
Cascading Snow	Cascading Snow	0.6
Cascading Dandelion	Cascading Dandelion	1
Cascading Charcoal	Cascading Charcoal	0.6
Cascading Treebark	Cascading Treebark	2
Cascading Sand	Cascading Sand	0.6
Cascading Seaweed	Cascading Seaweed	0.2
Trimmed Orange	Trimmed Orange	1
Trimmed Lilac	Trimmed Lilac	2
Trimmed Forest	Trimmed Forest	0.6
Trimmed Nightsky	Trimmed Nightsky	0.6
Trimmed Swamp	Trimmed Swamp	0.6
Trimmed Charcoal	Trimmed Charcoal	2
Trimmed Snow	Trimmed Snow	0.6
Trimmed Dandelion	Trimmed Dandelion	0.6
Trimmed Purple	Trimmed Purple	0.6
Trimmed Cherry	Trimmed Cherry	1
Trimmed Treebark	Trimmed Treebark	0.6
Swept Snow	Swept Snow	0.6
Swept Ash	Swept Ash	3
Swept Charcoal	Swept Charcoal	0.6
Swept Dandelion	Swept Dandelion	2
Swept Lilac	Swept Lilac	0.6
Swept Sunburst	Swept Sunburst	0.6
Swept Evergreen	Swept Evergreen	0.6
Swept Nightsky	Swept Nightsky	2
Bound Forest	Bound Forest	0.6
Bound Ocean	Bound Ocean	0.6
Bound Nightsky	Bound Nightsky	0.6
Bound Orange	Bound Orange	0.6
Bound Charcoal	Bound Charcoal	1
Bound Treebark	Bound Treebark	0.6
Bound Sandy	Bound Sandy	2
Bound Snow	Bound Snow	0.6
Bound Cherry	Bound Cherry	1
Laidback Cherry	Laidback Cherry	2
Laidback Lilac	Laidback Lilac	0.6
Laidback Dandelion	Laidback Dandelion	0.6
Laidback Charcoal	Laidback Charcoal	0.6
Laidback Earth	Laidback Earth	1
Laidback Snow	Laidback Snow	2
Laidback Meadow	Laidback Meadow	0.6
Laidback Midnight	Laidback Midnight	0.6
Familiar Midnight	Familiar Midnight	0.6
Familiar Meadow	Familiar Meadow	1
Familiar Rose	Familiar Rose	2
Jagged Mint	Jagged Mint	0.6
Jagged Dandelion	Jagged Dandelion	0.6
Jagged Clementine	Jagged Clementine	1
Jagged Spring	Jagged Spring	1
Jagged Eggplant	Jagged Eggplant	0.2
Longer Charcoal	Longer Charcoal Behind,Longer Charcoal	0.6
Longer Meadow	Longer Meadow Behind,Longer Meadow	0.6
Longer Salmon	Longer Salmon Behind,Longer Salmon	0.2
Longer Forest	Longer Forest Behind,Longer Forest	1
Flowing Dandelion	Flowing Dandelion	2
Flowing Cherry	Flowing Cherry	0.6
Flowing Meadow	Flowing Meadow	0.2
Medium Orchid	Medium Orchid	1
Medium Forest	Medium Forest	0.6
Medium Cherry	Medium Cherry	0.6
Timeless Dandelion	Timeless Dandelion	0.2
Timeless Ocean	Timeless Ocean	0.6
Timeless Violet	Timeless Violet	1
Timeless Earth	Timeless Earth	0.2
Spiky Obsidian	Spiky Obsidian	0.6
Silky Sand	Silky Sand Behind,Silky Sand	 
Silky Blossom	Silky Blossom Behind,Silky Blossom	0.6
Silky Forest	Silky Forest Behind,Silky Forest	2
Silky Redwood	Silky Redwood Behind,Silky Redwood	0.6
Silky Treebark	Silky Treebark Behind,Silky Treebark	0.6
Silky Ocean	Silky Ocean Behind,Silky Ocean	1
Silky Meadow	Silky Meadow Behind,Silky Meadow	0.6
Silky River	Silky River Behind,Silky River	0.6
Silky Autumn	Silky Autumn Behind,Silky Autumn	2`, {
    defaultFileNames: ["No Behind", null]
})

blueprint.addTsvComponent("Body", 4,
`Black	9
Tan	10
Beige With Freckles	14
Beige	19
Medium	19
Pale With Freckles	10
Pale	19`)

blueprint.addTsvComponent("Mouth", 5,
`Grin	5
Medicated	1
Cig	3
Smile	40
Neutral	46
Happy	5`)

blueprint.addTsvComponent("Wield Right", 6,
`Forest Orb	2
Sunlight Orb	6
Lilac Orb	6
Sunset Orb	6
Ocean Orb	6
Gardener's Delight	6
Mysterious Bottle	2
Nature Tincture	2
Plain Bottle	6
Crimson Potion	5
Small Friend	1
Calm Blaze	6
Meadow Blaze	6
Focused Blaze	6
Bright Blaze	6
Seaside Blaze	6
Ethereal Sky	6
Ethereal Forest	6
Ethereal Sunset	6
Forest Glass	2
Ocean Glass	2`)

blueprint.addTsvComponent("Tattoo", 7,
`No Tattoo	43.6
Feather	3
Watcher	3
Timeless	5
Guiding Light	5
Bone	3
Stripes	5
Petal Flow	5
Dragonfly	5
Watchful	3
Arrow	5
Bitten	5
Uzumaki	4.4
Tiger	5`)

blueprint.addTsvComponent("Outfit", 8,
`Peasant	1
Spectral Gown	0.2
Spectral Dress	0.2
Raspberry Dress	2
Orange Sweater	2
Lilac Sweater	2
Meadow Sweater	2
Swamp Dress	4
Simple Dress	2
Olive Dress	2
Yellow Leaves	2
Green Leaves	2
Blue Leaves	1
Orange Leaves	2
Brown Top	2
Green Top	3
Basic Gown	2
Stylish Forest	1
Stylish Ocean	1
Inked Stylish	0.5
Stylish Ash	4
Stylish Treebark	2
Elegant Treebark	4
Elegant Spectral	3
Elegant Dandelion	1
Elegant Ocean	2
Elegant Rose	2
Striped Elegant Sunflower	1
Striped Elegant Navy	4
Striped Elegant Violet	1
Woven Elegant Orange	2
Inked Woven	0.5
Woven Elegant Forest	2
Woven Elegant Grape	3
Woven Elegant Seafloor	1
Inked Explorer	0.6
Stormy Explorer	3
Seaweed Explorer	3
Traveled Explorer	4
Inked Ceremonial	2
Ceremonial Apple Gown	4
Ceremonial Ash Gown	2
Ashen Corset	2
Seafloor Corset	1
Reflective Corset	1
Meadow Corset	1
Enchanting Lightning	1
Enchanting Flames	2
Enchanting Pondscum	4
Enchanting Dandelion	1
Enchanting Aquascape	2`)

blueprint.addTsvComponent("Wield Left", 9,
`Focused Wand	10
Powerful Wand	10
Natural Staff	4
Energetic Staff	4
Woodsy Wand	10
Bright Wand	0.5
Lilac Wand	5
Dandelion Wand	5
Corndog	0.5
Handful Of Ferns	9
Handful Of Daisies	9
Ordinary Wand	9
Spectral Wand	0.5
Academic Wand	9
Shojo Wand	1.5
Small Sprig	5
Classic Wand	8`)

blueprint.addTsvComponent("Eyes", 10,
`Squint	7
Golden Seer	0.5
Seer	0.5
Snake Pink	1
Snake Lime	1
Snake Dandelion	1
Open Forest	9
Open Treebark	9
Open Ocean	4
Open Dandelion	9
Open Gray	9
Open Salmon	4
Open Obsidian	9
Closed Gray	9
Closed Salmon	9
Closed Ocean	9
Closed Autumn	4
Closed	5`)

blueprint.addTsvComponent("Eyebrows", 11,
`Eyebrows	100`)

blueprint.addTsvComponent("Neck", 12,
`Beaded Golden	1
Remarkable Sash	5
Woven Cord	5
Divine Pearls	0.5
Beaded Forest	7
Colorful Beaded	4
Golden String	5
Golden Cord	5
Pale Cord	5
Obsidian Cord	5
Discreet Collar	5
Beaded Cherry	5
Orange Bands	1
Sky Bands	1
Golden Bands	0.5
Meadow Sash	5
Corded Sash	5
Oceanic Combo	5
Cherry Combo	5
Obsidian Combo	5
Simple Bow	7
Collar	5
No Necklace	8`)

blueprint.addTsvComponent("Glasses", 13,
`Round Orange	2
Round Cornflower	2
Round Dandelion	2
Round Obsidian	2
Semi Obsidian	12
Semi Strawberry	6
Semi Grape	6
No Glasses	68`)

// hair front goes here, plugged in as a composite layer earlier

blueprint.addTsvComponent("Ear Accessory", 15,
`No Earring	37
Golden Link	1
Elegant Ruby	1
Lilac Double	4
Loop	4
Marks The Spot	4
Duo	4
Polaris	4
Tree	4
Poke	4
Simple Blue	4
Azuki Clip	4
Elven Inspiration	4
Steel Clip	4
Gray Trio	4
Red Trio	4
Large Golden Ring	4
Magenta Multitude	4
Intricate Golden	1`)

// hat front goes here, plugged in as a composite layer earlier

blueprint.addTsvComponent("Destiny", 17,
`Stardust	6
Blossom Petals	5
Butterflies	8
Haunting Mist	6
Falling Feathers	5
Songless Staff	6
End Of The Party	5
Stark Crescent	5
End Of The Show	8
Devoured	3
Prison Of Bubbles	5
Unwavering Eyes	5
Steady Rain	5
Starlight	8
Sudden Gust	5
Ghost Bloom	2
Radiant Autumn	8
Overstated Autumn	2
Servants Of The Deep	2
Dream Critters	1`)

blueprint.addTsvComponent("Over Everything", 18,
`Over Everything	100`)



// Use Astrology extension to automatically give each one star signs
import AstrologyExtension from '../../src/extensions/AstrologyExtension'
const ext = new AstrologyExtension()
ext.addComponents(blueprint)

import RPGAlignmentExtension from '../../src/extensions/RPGAlignmentExtension'
const ext2 = new RPGAlignmentExtension()
ext2.addComponents(blueprint)

const ext3 = new FamiliarExtension()
ext3.addComponents(blueprint)

TokenFactory.fullBuild(blueprint)