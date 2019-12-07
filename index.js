// Use Object.assign to assign key and value to a new object.

function updateObjectWithKeyAndValue(object, key, value) {
  cloneObject = Object.assign({}, object, {key, value});
  return cloneObject
}
