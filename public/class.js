
//-----------------------------------------------------------Xot ---------------------------------------    

class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

        this.multiply = 0;
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.multiply >= 12) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 1;

            var norXot = new Grass(norx, nory);
            grassArr.push(norXot);
            this.multiply = 0;
        }


    }

}





//-----------------------------------------------------------Xotaker ---------------------------------------    





class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.kyanq = 5;
        this.mernelukyanq = 5;
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;

    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            this.mernelukyanq--;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.mernelukyanq <= 0) {
            this.mernel();
        }

    }
    utel() {
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            this.kyanq++;
            this.mernelukyanq = 10;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;

            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in grassArr) {
                var xotObj = grassArr[i];
                if (xotObj.x == this.x && xotObj.y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
        if (this.kyanq >= 10) {
            this.bazmanal();
        }

    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;

            var norXotaker = new Xotaker(norx, nory);
            xotakerArr.push(norXotaker);
            this.kyanq = 5;
            this.mernelukyanq = 5;
            for (var i in grassArr) {
                var xotObj = grassArr[i];
                if (xotObj.x == norx && xotObj.y == nory) {
                    grassArr.splice(i, 1);
                }
            }
        }


    }
    mernel() {

        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                xotakerArr.splice(i, 1);

            }
        }

    }

}
//-----------------------------------------------------------Gishatich ---------------------------------------         
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.kyanq = 5;
        this.mernelukyanq = 5;
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;

    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            this.mernelukyanq--;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.mernelukyanq <= 0) {
            this.mernel();
        }


    }
    utel() {
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            this.kyanq++;
            this.mernelukyanq = 20;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;

            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in xotakerArr) {
                var xotakerObj = xotakerArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
        if (this.kyanq >= 15) {
            this.bazmanal();
        }

    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;

            var norGishatich = new Gishatich(norx, nory);
            gishatichArr.push(norGishatich);
            this.kyanq = 5;
            this.mernelukyanq = 20;
            for (var i in xotakerArr) {
                var xotakerObj = xotakerArr[i];
                if (xotakerObj.x == norx && xotakerObj.y == nory) {
                    xotakerArr.splice(i, 1);
                }
            }
        }


    }
    mernel() {

        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                gishatichArr.splice(i, 1);

            }
        }

    }
}



//-----------------------------------------------------------XotaGishatich ---------------------------------------   


class XotaGishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.kyanq = 5;
        this.mernelukyanq = 5;
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;

    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            this.mernelukyanq--;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.mernelukyanq <= 0) {
            this.mernel();
        }
    }
    utel() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = random(datarkVandakner);
        var datarkVandaknererku = this.yntrelVandak(2);
        var norVandakerku = random(datarkVandaknererku);

        if (norVandak) {
            this.kyanq++;
            this.mernelukyanq = 10;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;

            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in gishatichArr) {
                var xotakerObj = gishatichArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
        else if (norVandakerku) {
            this.kyanq++;
            this.mernelukyanq = 10;
            matrix[this.y][this.x] = 0;
            matrix[norVandakerku[1]][norVandakerku[0]] = 4;

            this.x = norVandakerku[0];
            this.y = norVandakerku[1];

            for (var i in gishatichArr) {
                var xotakerObj = xotakerArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
        if (this.kyanq >= 1) {
            this.bazmanal();
        }


    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;

            var norXotaGishatich = new XotaGishatich(norx, nory);
            xotgishatichArr.push(norXotaGishatich);
            this.kyanq = 5;
            this.mernelukyanq = 10;
            for (var i in gishatichArr) {
                var xotagishatichObj = gishatichArr[i];
                if (xotagishatichObj.x == norx && xotagishatichObj.y == nory) {
                    gishatichArr.splice(i, 1);
                }
            }
        }


    }
    mernel() {

        matrix[this.y][this.x] = 0;
        for (var i in xotgishatichArr) {
            if (this.y == xotgishatichArr[i].y && this.x == xotgishatichArr[i].x) {
                xotgishatichArr.splice(i, 1);

            }
        }

    }

}



class tunavorandzrev {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.kyanq = 5;
        this.mernelukyanq = 5;
        this.directions = [];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }

            }
        }




        return found;

    }


    poxel() {
        this.stanalNorKordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 4) {
                    matrix[y][x] = 0;
                    for (var i in xotgishatichArr) {
                        if (y == xotgishatichArr[i].y && x == xotgishatichArr[i].x) {
                            xotgishatichArr.splice(i, 1);

                        }
                    }
                }
            }
        }
    }
}
