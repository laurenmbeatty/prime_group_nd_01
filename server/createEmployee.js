var randomName = require('./randomName');
var skillSet = require('./skillSet');
var scrumPts = require('./scrumPts');

var createEmployee = function() {
    var newEmployee = [];
    newEmployee[0] = randomName();
    newEmployee[1] = skillSet();
    newEmployee[2] = scrumPts();
    return newEmployee;
};

module.exports= createEmployee;
