/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    const pairs={
        '(':')','[':']','{':'}'
    }

    for(let char of s){
        if(char in pairs){
            stack.push(char);
        }else if(char ===')' || char==='}' || char===']'){
            const top=stack.pop();
            if(!top || pairs[top]!==char){
                return false;
            }
        }
    }

    return stack.length===0;

    
};

module.exports = { isValid };


