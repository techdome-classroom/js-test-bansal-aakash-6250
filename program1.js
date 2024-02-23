/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ans=true;
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            if(s.charAt(i)===s.charAt(j)){
                continue
            }

            
        }
        
    }
};

module.exports = { isValid };


