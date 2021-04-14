const _ = {}

_.from = arr =>{
    return Array.prototype.slice.call(arr)
}