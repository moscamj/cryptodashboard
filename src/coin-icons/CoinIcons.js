// modified

// creates an object of all images in the directory
// uses the response of require.context
function importAll(r) {
  // create container object
  let images = {};
  // for each object in the require response
  r.keys().forEach(function(item) {
    // make a key with the object without the slash, assign the path to it
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// imports all icons from the current directory
const coinicons = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

// export object of available icons
export default coinicons;
