export function daysPassed() {
  var current = new Date();
  var previous = new Date(2012, 6, 15);
  return Math.round((current - previous + 1) / (86400000*365));
}