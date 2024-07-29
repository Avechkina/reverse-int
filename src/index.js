module.exports = function reverse (n) {
    let newNumb = Math.abs(n).toString();
    const tmp = newNumb.split('');
    tmp.reverse();
    newNumb=tmp.join('');
    return +newNumb;
  }
