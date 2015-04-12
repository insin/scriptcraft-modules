var Drone = require('drone')
var blocks = require('blocks')

var hasOwn = Object.prototype.hasOwnProperty

function assign(dest) {
  for (var i = 1, l = arguments.length; i < l ; i++) {
    var src = arguments[i]
    if (!src) {
      continue
    }
    for (var prop in src) {
      if (hasOwn.call(src, prop)) {
        dest[prop] = src[prop]
      }
    }
  }
  return dest
}

exports.skyscraper = function(numFloors, options) {
  numFloors = numFloors || 5
  options = assign({
    floor: blocks.stone,
    glass: blocks.glass_pane,
    width: 14,
    length: 14
  }, options)

  var drone = new Drone(self)
  var made = 0

  while (made < numFloors) {
    drone
      // Make the floor
      .box(options.floor, options.width, 1, options.length)
      // Make the windows
      .up().box0(options.glass, options.width, 1, options.length)
      .up().box0(options.glass, options.width, 1, options.length)
      .up().box0(options.glass, options.width, 1, options.length)
      .up()

    made = made + 1
  }

  // Make the roof
  drone.box(options.floor, options.width, 1, options.length)
}

exports.lamp = function(height) {
  var drone = new Drone(self)

  drone
    .up()
    .box(blocks.fence.birch, 1, height, 1)
    .up(height - 1)
    .back()
    .box(blocks.fence.birch)
    .down()
    .box(blocks.glowstone)
}