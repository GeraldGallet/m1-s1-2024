const fs = require('fs')

type Human = {
  id: number
  firstName: string
  lastName: string
}

type Cat = {
  id: number
  name: string
  ownerId?: number
}

/**
 * Retrieve the owner of a cat
 * @param cat Cat for which we want to find the owner
 * @param humans All available humans
 * @returns Found owner, or undefined if none
 */
function getCatOwner(cat: Cat, humans: Human[]): Human | undefined {
  if (cat.ownerId) {
    return humans.find(human => human.id === cat.ownerId)
  }
}

function getCatsWithoutOwner(cats: Cat[], humans: Human[]): Cat[] {
  return cats.filter(cat => !cat.ownerId)
}

function getCatsNumberByHuman(human: Human, cats: Cat[]): number {
  return cats.filter(cat => cat.ownerId === human.id).length
}

fs.readFile('./slide13/cat-data.json', 'utf-8', (_: any, data: any) => {
  const humans: Human[] = JSON.parse(data).humans
  const cats: Cat[] = JSON.parse(data).cats

  console.log("##### humans");
  console.log(humans);
  console.log("##### cats");
  console.log(cats);

  console.log('##### cat owners #####')
  cats.forEach(cat => {
    const owner = getCatOwner(cat, humans)
    console.log(`${cat.name} is owned by ${owner ? owner.firstName : 'no one'}`)
  })

  console.log('##### cats without owner #####')
  const catsWithoutOwner = getCatsWithoutOwner(cats, humans)
  console.log(`catsWithoutOwner:  ${catsWithoutOwner.map(({name}) => name).join(', ')}`)

  console.log('##### cats number by human #####')
  humans.forEach(human => {
    console.log(`${human.firstName} has ${getCatsNumberByHuman(human, cats)} cats`)
  })
})

