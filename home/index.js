function appendData(image_url) {
  document.getElementById("image").innerHTML = null;
  let img = document.createElement("img");
  img.src = image_url;
  document.getElementById("image").append(img);
}

function dashboard() {
  appendData(
    "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad548421171b59d3dec8b7_dash.png"
  );
}
dashboard();
function performance() {
  appendData(
    "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad55d0b5fc492169126b7a_graphs.png"
  );
}

function listing() {
  appendData(
    "https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad55d0cf2e6bf5f160cdb6_rentals.png"
  );
}
