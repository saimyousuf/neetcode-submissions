class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        let i=0;
        let j=0;
        while(i<s.length){
            if(s[i]==='(' || s[i]==='[' || s[i]==='{'){
                arr.push(s[i]);
            }
            else{
                if(s[i]===')'){
                    if(arr.length>0 && arr[arr.length-1]==='('){
                        arr.pop();
                    }
                    else{
                        return false;
                    }
                }
                else if(s[i]==='}'){
                    if(arr.length>0 && arr[arr.length-1]==='{'){
                        arr.pop();
                    }
                    else{
                        return false;
                    }
                }
                else if(s[i]===']'){
                    if(arr.length>0 && arr[arr.length-1]==='['){
                        arr.pop();
                    }else{
                        return false;
                    }
                }
            }
        i++;
        }
        return arr.length === 0 ? true : false;
    }
}
