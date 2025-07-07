function groupObjectsBy(jsonObjects, key) {
  return jsonObjects.reduce((acc, curr) => {
    const groupKey = curr[key];
    if (acc[groupKey]) {
      acc[groupKey] = acc[groupKey].concat(curr);
    } else {
      acc[groupKey] = [curr];
    }
    return acc;
  }, {});
}

const data = [ 
  { channel: "A", name: "shoe" },
  { channel: "A", name: "electronics" },
  { channel: "B", name: "apparel" },
  { channel: "C", name: "electronics" }
];


const grouped = groupObjectsBy(data, "channel");
console.log(grouped);

