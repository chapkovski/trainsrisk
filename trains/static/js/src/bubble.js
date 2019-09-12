import *  as c from './constants';

let angle = -Math.PI / 2;

export class Bubble {
    constructor(p) {
        this.p = p;
        this.speed = c.speed
        this.col = this.p.color(255, 100, 76);
        this.diameter = 25;
    }


    display() {
        this.p.stroke(0);
        this.p.strokeWeight(1);
        this.p.fill(this.col);
        this.x = c.centerX + c.radius * this.p.cos(angle);
        this.y = c.centerY + c.radius * this.p.sin(angle);
        this.p.ellipse(this.x, this.y, this.diameter, this.diameter);
        angle = angle + this.speed;
    }

    toggle() {
        this.speed = (this.speed === 0 ? c.speed : 0);
    }



    is_within_arc(arc) {
        this.p.translate(c.canv_size / 2, c.canv_size / 2);
        let a = this.p.atan2(this.y - c.canv_size / 2, this.x - c.canv_size / 2);
        return (arc.start_angle < a && a < arc.end_angle);

    }
};
