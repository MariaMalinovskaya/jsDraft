/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

 
export function sortStrings(arr, param = 'asc') {
 
    let arrSort = [...arr];
    const sortOrder = (param == 'asc') ? 1 :
                      (param == 'desc') ? -1 : '' ; 

    if (sortOrder === undefined) return ;
   
    arrSort.sort( (a , b) => sortOrder * a.localeCompare(b , 
            ["ru" , "en"],
            { caseFirst: "upper" }
            ) ) ;

    return arrSort
}
