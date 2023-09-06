// this script disables the auto-lock, so the screen can be used without having to unlock the watch
{
  // turns the backlight on and resets the activity timer
  let handler = function() {
    Bangle.setLCDPower(true);
  };

  // handle any touch inputs
  Bangle.on('touch', handler);
  Bangle.on('swipe', handler);

  // handle button presses
  setWatch(handler, BTN1, { repeat:true, edge:'rising', debounce:0 });

  // disable (max out) lock timeout, and disable wakeOnBTN1.
  // wakeOnBTN1 is the important one to disable, otherwise the first press gets
  // consumed and doesn't do anything. at least one of the other wakeOns needs
  // to be enabled, otherwise BTN1 is forced back on.
  Bangle.setOptions({
    lockTimeout: 1000 * 60 * 60 * 24 * 365,
    wakeOnBTN1: false,
    wakeOnTouch: true,
  });
}