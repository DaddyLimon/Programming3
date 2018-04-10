class Gishatich extends glxavor {

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
            this.sharjvel(3);
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