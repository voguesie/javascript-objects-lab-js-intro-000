function updateObjectWithKeyAndValue(object, key, value) {
  var cloneObject = Object.assign({}, object, [key]:value)
  object[key] = value;
  return object
}
