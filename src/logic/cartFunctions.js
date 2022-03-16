export function removeItem(array, item) {
  return array.filter( element => {
    return element !== item;
  })
}
