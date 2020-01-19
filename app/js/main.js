var object = {
    prop: 'val1',
    method: function () {
        return this.prop;
    }
};

console.log(object.prop);
console.log(object['prop']);
console.log(object.method());