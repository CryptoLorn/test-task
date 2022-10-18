let str = 'abcd';

function addsPoints(str) {
    let arrStr = [];

    if (str.length <= 1) {
        return [str];
    }

    for (let el of addsPoints(str.slice(1))) {
        arrStr.push(str[0] + el);
        arrStr.push(str[0] + "." + el);
    }

    return arrStr;
}

console.log(addsPoints(str));