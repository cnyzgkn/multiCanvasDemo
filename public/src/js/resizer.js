function resizer(resizerID, mousemove, cursor) {
    console.log("resizer(" + resizerID + ")");
    var resizer = document.getElementById(resizerID);
    resizer.style.cursor = cursor;
    resizer.mousemove = mousemove;

    resizer.onmousedown = function (e) {
        try{
            console.log("resizer.onmousedown(e)");
            document.documentElement.addEventListener('mousemove', resizer.doDrag, false);
            document.documentElement.addEventListener('mouseup', resizer.stopDrag, false);
        } catch (e) {
            ErrorMessage("resizer.onmousedown(...) failed! Your browser does not support this feature. " + e.message);
        }
    }

    resizer.doDrag = function (e) {
        console.log("doDrag(e)");
        if (e.which != 1){
            console.log("mouseup");
            resizer.stopDrag(e);
            return;
        }
        resizer.mousemove(e);
    }

    resizer.stopDrag = function (e) {
        console.log("stopDrag(e)");
        document.documentElement.removeEventListener('mousemove', resizer.doDrag, false);
        document.documentElement.removeEventListener('mouseup', resizer.stopDrag, false);
    }
}

function resizerX(resizerID, mousemove) {
    resizer(resizerID, mousemove, "e-resize");
}

function resizerY(resizerID, mousemove) {
    resizer(resizerID, mousemove, "n-resize");
}

function resizerXY(resizerID, mousemove) {
    resizer(resizerID, mousemove, "ne-resize");
}
