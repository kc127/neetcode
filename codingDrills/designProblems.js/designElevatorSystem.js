/*
LiftCo provides state-of-the-art elevator software to transport large volumes of people up and down floors more efficiently than escalators from their competitor, RaiseCo. Their clients often own large-capacity buildings and, therefore, require multiple elevators. However, each elevator is very expensive, and their clients are cost-sensitive, so LiftCo's software must be as efficient as possible and maximize each elevator's utility. Their elevators should move as many people in a little time as possible.

LiftCo's competitive advantage is that it creates elevator systems with floor buttons outside the elevators. Once riders select their floor, LiftCo's informs them which elevator to board on a display.

LiftCo does not have to be concerned with maximum carrying capacity, emergency overrides, or alarm buttons.

Design LiftCo's software as a set of classes with their attributes and APIs.

*/



// official solution
class Elevator {
  constructor() {
    this.elevatorId = 0;
    this.direction = "UP/IDLE/DOWN"
    this.currentFloor = 0;
  }

  open() {

  }
  close() {

  }
  moveTo() {

  }
}

class Direction {
  constructor() {
    this.UP = "UP";
    this.IDLE = "IDLE";
    this.DOWN = "DOWN";
  }
}

class Controller {
  constructor() {
    this.elevators = [];
    this.upComingStops = {Elevator: list of floors};
  }

  scheduleStopRequest(request) {

  }
  getNextStop(elevatorId) {

  }
}

class Request {
  constructor() {
    this.originFloor = 0;
    this.destinationFloor = 0;
    this.direction= Direction;
  }
}

