import _ from 'underscore'
import { invoker, dispatch, always } from '../utils'

const str = dispatch(invoker('toString', Array.prototype.toString), invoker('toString', String.prototype.toString))
console.log(str(_.range(10)))
console.log(str('d'))

const stringReverse = str => {
	if (!_.isString(str)) return undefined
	return str.split('').reverse().join('')
}

const rev = dispatch(invoker('reverse', [].reverse), stringReverse)
console.log(rev('ransixi'))
console.log(rev([1, 2, 3]))

const sillyrev = dispatch(rev, always(45))
console.log(sillyrev(34))
