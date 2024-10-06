const drivers = ['Bob', 'Cherry', 'Max', 'bob', 'max']
function findMatching(drivers, name) {
    return drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase())
}
console.log(findMatching(drivers, 'Bob'))

function fuzzyMatch(drivers, letter) {
    return drivers.filter(drivers => drivers.toLowerCase().startsWith(letter.toLowerCase()))
}
console.log(fuzzyMatch(drivers, 'b'))

const driver = [
    {name: 'Bob', homeTown: 'Ruiru'},
    {name: 'Cherry', homeTown: 'Nairobi'},
    {name: 'Max', homeTown: 'Nairobi'},
    {name: 'bob', homeTown: 'Westlands'},
    {name: 'max', homeTown: 'Westlands'}
]
function matchName(driver, name) {
    return driver.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}
console.log(matchName(driver, 'bob'))