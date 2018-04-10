class glxavor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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

    sharjvel(a) {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) {
            this.mernelukyanq--;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = a;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.mernelukyanq <= 0) {
            this.mernel();
        }


    }
}