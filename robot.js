// create the Robot constructor with name and task as properties
function Robot(name, task) {
  this.name = name;
  this.task = task;
}

// A prototype method that tell the user what the robot does
Robot.prototype.duty = function () {
  return `${this.name} is a nice robot. It will do all ${this.task} tasks for you`
}

// A prototype method that tells when the robot is started
Robot.prototype.start = function () {
  console.log(`${this.name} is started.`)
};

// create UtilityRobot constructor
function UtilityRobot(name, task, speed) {
  Robot.call(this, name, task)
  this.speed = speed;
};

// set UtilityRobot to inherits Robot prototype methods
UtilityRobot.prototype = Object.create(Robot.prototype);
UtilityRobot.prototype.constructor = UtilityRobot

UtilityRobot.prototype.getDocs = function () {
  console.log(`${this.name} is collecting documents from desks`)
};

Robot.prototype.start = function () {
  console.log(`${this.name} is started.`)
};


module.exports = {Robot, UtilityRobot}

