exports.skyscraper = function(howManyFloors) {
  var drone = new Drone(self)
  var floorsWeMade = 0

  while (floorsWeMade < howManyFloors) {
    drone
      // Make the floor
      .up().box(blocks.gold, 14, 1, 14)
      // Make the windows
      .up().box0(blocks.glass, 14, 1, 14)
      .up().box0(blocks.glass, 14, 1, 14)
      .up().box0(blocks.glass, 14, 1, 14)

    floorsWeMade = floorsWeMade + 1
  }

  // Make the roof
  drone.up().box(blocks.gold, 14, 1, 14)
}