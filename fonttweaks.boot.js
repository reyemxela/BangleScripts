// just naively forces 6x15 and 12x20 font calls to 6x8:2. I just find it way
// easier to read at a glance. this is a terrible way to do things, and will
// probably break some apps
{
  g._setFont = g.setFont;
  g.setFont = (name, size) => {
    let basename = name.split(':')[0];
    if (basename === "6x15" || basename === "12x20") {
      name = "6x8:" + (2* (size || 1)).toString();
      size = undefined;
    }
    return g._setFont(name, size);
  };
}