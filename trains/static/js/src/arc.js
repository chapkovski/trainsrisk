import {SQUARE, PI, OPEN} from "./p5";
import *  as c from './constants';

let correction = -Math.PI / 2,
    start_angle = 0,
    width = 20;

export class Arc {
    constructor(p, angle1, radius, col) {
        this.p = p;
        this.centerX = c.centerX;
        this.centerY = c.centerY;
        this.start_angle = start_angle + correction;
        this.end_angle = angle1 + correction;
        this.col = this.p.color(col, col, 0);
        this.width = width;
        this.radius = radius;
    }


    display() {
        this.p.stroke(this.col);
        this.p.strokeWeight(this.width);
        this.p.strokeCap('butt');
        this.p.noFill();
        this.p.arc(this.centerX, this.centerY, this.radius * 2, this.radius * 2, this.start_angle, this.end_angle, OPEN);
    }

    is_clicked() {
        return (this._is_within_width() && this._is_within_angles());
    }

    _is_within_width() {
        let d = this.p.dist(this.p.mouseX, this.p.mouseY, this.centerX, this.centerY);
        let lb = this.radius - this.width / 2;
        let ub = this.radius + this.width / 2;
        return (d >= lb && d <= ub);
    }

    _is_within_angles() {
        let innerangle = this.p.atan2(this.p.mouseY - this.centerY, this.p.mouseX - this.centerX);
        if (innerangle < correction) {
            innerangle = 2 * Math.PI + innerangle;
        }
        return (innerangle >= this.start_angle && innerangle <= this.end_angle);
    }

    do_if_clicked() {
        console.log('ARC CLICKED', this.end_angle);
        $('#id_difficulty').val(this.end_angle);
        // $('#form').submit(); TODO
    }

    clicked() {
        if (this.is_clicked()) {
            this.do_if_clicked()
        }
    };
};
