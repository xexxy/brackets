module.exports = function check(str, bracketsConfig) {
    const stack = [],
        brackets = '(){}[][|';

    for (let bracket of str) {
        let bracketIndex = brackets.indexOf(bracket),
        haveBracket = false;

        if (bracketIndex == -1) {
            return false;
        } else if (bracketIndex == 7 && bracketIndex != stack[stack.length - 1]) {
            stack.push(bracketIndex);
            haveBracket = true;
        } else if (bracketIndex % 2 == 0) {
            stack.push(bracketIndex + 1);
            haveBracket = true;
        } else {
            haveBracket = true;
            if (stack.pop() != bracketIndex) {
                return false;
            }
        }
    }

    return stack.length == 0;

}
