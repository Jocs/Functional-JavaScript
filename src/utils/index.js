import _ from 'underscore'
// splat 接受一个函数作为参数，返回一个函数，该函数的作用是用前面的参数函数执行现有的参数。
export const splat = fun => (...args) => fun(...args)

const fail = msg => _.identity(msg)
const isIndexed = data => _.isArray(data) || _.isString(data)

export const nth = (a, index) => {
	if (!_.isNumber(index)) return fail('Expected a number as the index!')
	if (!isIndexed(a)) return fail('Not support on non-indexed type!')
	if (index < 0 || index > a.length - 1) return fail('Index value out of bounds!')
	return a[index]
}

export const second = array => nth(array, 1)

export const existy = x => x != null
// note: truthy(0) === true
export const truthy = x => x !== false && existy(x)

export const lessOrEqual = (x, y) => x <= y
export const comparator = pred => {
	return (x, y) => {
		if (truthy(pred(x, y))) return -1
		else if (truthy(pred(y, x))) return 1
		else return 0
	}
}
