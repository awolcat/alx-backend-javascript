export default function updateUniqueItems(myMap) {
  try {
    const list = Array.from(myMap.keys());
    return (list.filter((element) => myMap.get(element) === 1)
      .map((element) => myMap.set(element, 100)));
  } catch (error) {
    throw new Error('Cannot Process');
  }
}
