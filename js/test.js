const canvas = document.getElementById("glCanvas");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const gl = canvas.getContext("webgl");

twgl.setDefaults({
  textureColor: [1, 1, 1, 1],
  attribPrefix: "a_",
});
