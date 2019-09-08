import *  as c from './constants';
let angle = 0;
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
        this.x = c.centerX + c.radius * this.p.cos(angle);
        this.y = c.centerY + c.radius * this.p.sin(angle);
        this.p.ellipse(this.x, this.y, this.diameter, this.diameter);
        angle = angle + c.speed;
    }

    is_clicked() {
        var d = dist(this.p.mouseX, this.p.mouseY, this.x, this.y);
        return (d < this.diameter / 2);
    }

    clicked() {
        if (this.is_clicked()) {
            console.log('circle clicked');
        }
    };
};
