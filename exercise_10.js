function deepEqual(obj1, obj2) {
    if(typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null){
        let a = Object.keys(obj1);
        let b = Object.keys(obj2);
        let boolean = true;
        let arr = [];

        (function comparisonOfArrays(a, b) {
            if(a.length !== b.length){
                boolean = false;
            }else{
                for(let i = 0; i < a.length;i++){
                    if(a.includes(b[i])){
                        boolean = boolean && true;
                        arr.push(b[i]);
                    }
                    else {
                        boolean = false;
                    }
                }
            }
        }(a,b))

        for(let i = 0; i < a.length;i++) {
            if(typeof obj1[arr[i]] === 'object' && typeof obj2[arr[i]] === 'object' && obj1[arr[i]] !== null && obj2[arr[i]] !== null){
                return deepEqual(obj1[arr[i]],obj2[arr[i]]);
            }
            if(obj1[arr[i]] !== obj2[arr[i]]) return false;
        }
        return true;
    } else return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true