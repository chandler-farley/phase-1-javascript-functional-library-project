function normalizer(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection)
}
function myEach(collection, callback) {
    let normalColl = normalizer(collection)
    for (let i = 0; i < normalColl.length; i++) {
        callback(normalColl[i])
    }
    return collection
}

function myMap(collection, callback) {
    let normalColl = normalizer(collection)
    const newArr = []
    for (let i = 0; i < normalColl.length; i++) {
        newArr.push(callback(normalColl[i]))
    }
    return newArr
}

function myReduce(collection, callback, acc) {
    let normalColl = normalizer(collection)
    if (acc === undefined) {
        acc = normalColl[0]
        normalColl = normalColl.slice(1)
    }
    for (let i = 0; i < normalColl.length; i++) {
        acc = callback(acc, normalColl[i], normalColl)
    }
    return acc
}

function myFind(collection, predicate) {
    let normalColl = normalizer(collection)
    for (let i = 0; i < normalColl.length; i++) {
        if (predicate(normalColl[i])) return normalColl[i]
    }
    return undefined
}

function myFilter(collection, predicate) {
    let normalColl = normalizer(collection)
    let matchingElems = []
    for (let i = 0; i < normalColl.length; i++) {
        if (predicate(normalColl[i])) {
            matchingElems.push(normalColl[i])
        }
    }
    return matchingElems
}

function mySize(collection) {
    let normalColl = normalizer(collection)
    let trueSize = 0
    for (let i = 0; i < normalColl.length; i++) {
        trueSize++
    }
    return trueSize
}

function myFirst(array, n = 0) {
    return n === 0 ? array[n] : array.slice(0, n)
}

// function myLast(array, n = -1) {
//     return n === -1 ? array.at(n) : array.slice(-Math.abs(n), array.length)
// }

function myLast(array, n) {
    if (!n || n >= array.length) {
        return array[array.length - 1]
    }
    return array.slice(-n)
}

function myKeys(obj) {
    let keys = []
    for (let key in obj) {
        keys.push(key)
    }
    return keys
}

function myValues(obj) {
    let values = []
    for (let key in obj) {
        values.push(obj[key])
    }
    return values
}