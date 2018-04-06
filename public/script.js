var matrix = [];
var qanak = 50;
for (var y = 0; y < qanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < qanak; x++) {
        if (Math.random() < 0.1) {
            matrix[y][x] = 1;

        }
        else if (Math.random() < 0.03) {
            matrix[y][x] = 2;
        }
        else if (Math.random() < 0.001) {
            matrix[y][x] = 3;
        }
        else if (Math.random() < 0.005) {
            matrix[y][x] = 4;
        }
        else if (Math.random() < 0.002) {
            matrix[y][x] = 5;
        }
        else {
            matrix[y][x] = 0;
        }
    }
}
var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var xotgishatichArr = [];
var andzrevArr = [];
var andzrevGa = false;

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(5);
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr = new Xotaker(x, y);
                xotakerArr.push(gr);
            }
            else if (matrix[y][x] == 3) {
                var gr = new Gishatich(x, y);
                gishatichArr.push(gr);
            }
            else if (matrix[y][x] == 4) {
                var gr = new XotaGishatich(x, y);
                xotgishatichArr.push(gr);
            }
            else if (matrix[y][x] == 5) {
                var gr = new tunavorandzrev(x, y);
                andzrevArr.push(gr);
            }

        }
    }
}
function draw() {
    if (frameCount % 40 == 0 && andzrevGa == false) {

        andzrevArr.length = 0;

        for (var y = 0; y < qanak; y++) {
            for (var x = 0; x < qanak; x++) {
                if (matrix[y][x] == 5) {
                    matrix[y][x] = 0;
                }
            }
        }
        andzrevGa = true;
        setTimeout(function () {

            var emptyCells = [];

            for (var y = 0; y < qanak; y++) {
                for (var x = 0; x < qanak; x++) {
                    if (matrix[y][x] == 0) {
                        emptyCells.push([y,x]);
                    }
                }
            }

            var count = 5;
            for(var i in emptyCells)
            {
                if(count)
                {
                    var norVandak = emptyCells.splice(random(0, emptyCells.length-1) , 1)

                    var x = norVandak[0][1];
                    var y = norVandak[0][0];

                    matrix[y][x] = 5;

                    var gr = new tunavorandzrev(x, y);
                    andzrevArr.push(gr);

                    count--;
                }
            }

            andzrevGa = false;
        }, 2000);
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
    }
    for (var i in xotgishatichArr) {
        xotgishatichArr[i].utel();
    }
    for (var i in andzrevArr) {
        andzrevArr[i].poxel();
    }





}