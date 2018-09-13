var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return updateObjectWithKeyAndValue({}, object, {[key]: value})
}
