function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
// Use Object.assign to assign key and value to a new object.

function updateObjectWithKeyAndValue(object, key, value) {
  var cloneObject = Object.assign({}, object, {[key]: value});
  return cloneObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
