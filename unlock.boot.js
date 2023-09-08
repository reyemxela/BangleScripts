// this script disables the auto-lock, so the screen can be used without having to unlock the watch
// I keep going back and forth on whether or not I actually like this setup
{
  // turns the backlight on and resets the activity timer
  let handler = function() {
    Bangle.setLCDPower(true);
  };

  // handle any touch inputs
  Bangle.on('touch', handler);
  Bangle.on('swipe', handler);

  // handle button presses
  setWatch(handler, BTN1, { repeat:true, edge:'rising' });

  // disable (max out) lock timeout, and disable some wakeOns.
  // wakeOnBTN1 is important to disable, otherwise the first press gets
  // consumed and doesn't do anything. also wakeOnTouch seems to spazz
  // out the backlight if it's left on.
  Bangle.setOptions({
    lockTimeout: 1000 * 60 * 60 * 24 * 365,
    wakeOnBTN1: false,
    wakeOnTouch: false,
    wakeOnFaceUp: false,
    //wakeOnTwist: false, // leaving this one un-forced in case I want it on
  });
}