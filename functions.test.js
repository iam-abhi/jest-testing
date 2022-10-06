const functions = require("./functions")
const functions1 = require("./functions1")
// import {functions} from './functions'

test('Add function', () => {
    expect(functions.add(2,3)).toBe(5)
})

test('Subtract function', () => {
    expect(functions.subtract(8,3)).toBe(5)
})

test('Add function1', () => {
    expect(functions1.add(2,3)).toBe(6)
})

test('Subtract function1', () => {
    expect(functions1.subtract(2,3)).toBe(-1)
})