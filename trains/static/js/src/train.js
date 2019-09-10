//TODO: move bubbles and arcs into sep class and export using require, module.export
import p5 from "./p5";
import {Bubble} from './bubble';
import {Arc} from './arc';
import *  as c from './constants';

let bubble,
    arc,
    game;

const s = (p) => {

    p.setup = function () {
        p.createCanvas(c.canv_size, c.canv_size);
        bubble = new Bubble(p);
        arc = new Arc(p, Math.PI, 100, 150);

    };

    p.draw = function () {
        p.background(255);
        p.stroke(1);
        p.strokeWeight(1);
        p.noFill();
        p.ellipse(c.centerX, c.centerY, c.diameter);
        bubble.display();

        arc.display();
        p.fill(100);
        p.stroke(100);
        let x = c.centerX + c.radius * p.cos(.75 * Math.PI );
        let y = c.centerY + c.radius * p.sin(.75 * Math.PI );

        let target = p.createVector(x - c.centerX, y - c.centerY);
        let cur_pos = p.createVector(bubble.x - c.centerX, bubble.y - c.centerY);
        let angle = target.angleBetween(cur_pos);

        if (angle < 0.005 && game === undefined) {
            game = 0;
            alert('YOU LOST!');
            deliver_game();

        }


    };
    p.mousePressed = function () {
        let win = bubble.clicked() && arc.clicked();
        if (win) {
            game = 1;
            alert('YOU WON!!!');
            deliver_game();
        }
    };
};
let deliver_game = () => {
    $('#id_task').val(game);
    $('#form').submit();
}
let myp5 = new p5(s, 'p5cont');