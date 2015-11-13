function getCanvas() {
        return document.getElementById("myCanvas");
}
function getGLContext() {
        var gl = null;
        var canvas = getCanvas();
        if (canvas != null) {
                var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                for (var i=0; i<names.length; i++) {
                        try {
                                gl = canvas.getContext(names[i]);
                        } catch (e) { console.log(e); }
                        if (gl) return gl;
                }
        }
}

var gl = getGLContext();

if (gl) {
        console.log(gl);
        var vertices = [-50.0, 50.0, 0.0,
                        -50.0, -50.0, 0.0,
                        50.0, -50.0, 0.0,
                        50.0, 50.0, 0.0];
        var myBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, myBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
} else {
        getCanvas().innerHTML = "your browser too old to support webGL.";
}
