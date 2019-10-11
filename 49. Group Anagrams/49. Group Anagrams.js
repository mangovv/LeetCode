/**
 * @param {string[]} strs
 * @return {string[][]}
 * Map Key:
 * Each natural number greater than 1 is either a prime number itself or can be written as a product of more than 2 prime numbers. 
 * Once these quality factors are arranged by size, there is only one way to write them.
 */
var groupAnagrams = function(strs) {
    const map = {};
    const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103 ]
    
    for(str of strs){
        let charArr = str.split('');
        let key = 1;
        for(let i = 0; i < charArr.length; i++){
            key *= prime[charArr[i].charCodeAt() - 'a'.charCodeAt()];
        }
        if(key in map){
            map[key].push(str);
        }else{
            map[key] =[str];
        }    
    }
    return Object.values(map);
};