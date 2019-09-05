export class Bubble {
    constructor(p, x, y) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.col = this.p.color(255, 100, 76);
        this.diameter = 30;
    }


    display() {
        this.p.stroke(0);
        this.p.strokeWeight(1);
        this.p.fill(this.col);
        // this.x = centerX + radius * cos(angle);
        // this.y = centerY + radius * sin(angle);
        this.p.ellipse(this.x, this.y, this.diameter, this.diameter);
        // angle = angle + speed;
    }

    // is_clicked() {
    //     var d = dist(mouseX, mouseY, this.x, this.y);
    //     return (d < this.diameter / 2);
    // }
    //
    // clicked() {
    //     if (this.is_clicked()) {
    //         console.log('circle clicked');
    //     }
    // };
};
