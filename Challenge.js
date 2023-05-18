const compact = (array) => {
    
return array.filter( num => (num !== false && num !== undefined && num !=='' && num !== 0 && num !== null))

}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]