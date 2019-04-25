var Constructor = require('./robot');

var Robot = Constructor.Robot;
var UtilityRobot = Constructor.UtilityRobot;

var cleaningRobot = new Robot('Robo', 'cleaning');
var utilRobot = new UtilityRobot('errandBoT','errands');

test("specific-robot instances should use defined constructor function", function () {
    expect(cleaningRobot.constructor).toBeDefined();
})
test("Robot constructor should have prototype method 'start'", function () {
    expect(Robot.prototype.start).toBeDefined()
})
test("Expect errandRobot to be an instance of robo", function() {
expect(utilRobot).toBeInstanceOf(Robot)
})