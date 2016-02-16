import { splat } from '../utils'

const addArrayElements = splat((x, y) => x + y)
console.log('3 add 4 is ' + addArrayElements(3, 4))
