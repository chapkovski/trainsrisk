//TODO: move bubbles and arcs into sep class and export using require, module.export
import p5 from "./p5";
import {Bubble} from './bubble';

let bubble;
const s = (p) => {

    let x = 100;
    let y = 100;

    p.setup = function () {
        let canv = p.createCanvas(300, 300);
        bubble = new Bubble(p, 100, 100);

    };

    p.draw = function () {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
        bubble.display();

    };
};

let myp5 = new p5(s, 'p5cont');