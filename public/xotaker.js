class Xotaker extends glxavor {
    constructor(x,y){
        super(x,y);
        this.kyanq = 5;
        this.mernelukyanq = 5;
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
            this.sharjvel(2);
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