//TODO: move bubbles and arcs into sep class and export using require, module.export
import p5 from "./p5";
import {Bubble} from './bubble';
import *  as c from './constants';
let bubble;

const s = (p) => {

    p.setup = function () {
        p.createCanvas(400, 400);
        bubble = new Bubble(p, 100, 100);

    };

    p.draw = function () {
        p.background(255);
        p.stroke(1);
        p.strokeWeight(1);
        p.noFill();
        p.ellipse(c.centerX, c.centerY, c.diameter);
        bubble.display();
    };
    p.mousePressed = function () {
        console.log('pizda');
    };
};

let myp5 = new p5(s, 'p5cont');