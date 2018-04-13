class XotaGishatich extends glxavor {
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
