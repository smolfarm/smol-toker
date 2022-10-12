# smol toker

MIT License library smol farm uses for assembling NFT collections that use layers of 2D art. Built by [Thorne](https://github.com/existentialenso).

## Get Up and Running

For this to run properly, [GraphicsMagick](http://www.graphicsmagick.org/) must be installed, along with Node. Assuming you also have yarn installed (if not, substitute `yarn` for `npm`), run:

```bash
yarn install
yarn run corg-corg
```

And bam! You'll have a new batch of corgcorg images & JSON!

## Included Examples

* [corgcorg](https://corgcorg.xyz/) - basic script, cc0-ed assets
* [Wandering Witches](http://wanderingwitches.xyz/) - utilizes advanced metadata features, **copyrighted assets**

## Features

* Reusable extensions that add standardized functionality.
* Custom name & description generation by implementing **INamer** and **IDescriber**.

## Included Extensions

* AstrologyExtension - add a sun, moon, & rising sign to the NFT's attributes.
* RPGAlignmentExtension - add an RPG alignment to the NFT's attributes. Weighted to favor good alignments.