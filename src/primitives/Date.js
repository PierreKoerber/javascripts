Date.prototype.addDays = function (num) {
    var value = this.valueOf();
    value += 86400000 * num;
    return new Date(value);
} ;