import ImageAssembler from "./ImageAssembler"
import fs from 'fs'

const files = fs.readdirSync("./output/stacks")
const fileStacks: string[] = []

for(let file of files) {
    const data = fs.readFileSync(`./output/stacks/${file}`).toString()

    const id = file.replace(".json", "")

    fileStacks[id] = JSON.parse(data)
}

const assembler = new ImageAssembler(fileStacks)
assembler.assemble()