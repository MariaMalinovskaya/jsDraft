/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
function pick  (obj, ...fields) {

    let objNew = {} ;

    for( let idx of fields){
        let  value = fields[idx] ; 
        for ( value in obj) {
        if ( obj.hasOwnProperty(value) ) objNew[value]=obj[value]
        }
    }

    return objNew ;

};
