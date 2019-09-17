//TODO: move bubbles and arcs into sep class and export using require, module.export
import p5 from "./p5";
import {Bubble} from './bubble';
import {Arc} from './arc';
import *  as c from './constants';

let bubble,
    arc,
    game;

const s = (p) => {
    let arc2, arc3;
    p.setup = function () {
        p.createCanvas(c.canv_size, c.canv_size);
        bubble = new Bubble(p);
        arc = new Arc(p, 0, Math.PI*.75, 100, 150);
        arc2 = new Arc(p, Math.PI*.75, Math.PI+.5, 100, 250);
        arc3 = new Arc(p, Math.PI+.55, Math.PI+0.75, 100, 75);

    };

    p.draw = function () {
        p.background('green');
        p.stroke(1);
        p.strokeWeight(1);
        p.noFill();
        p.ellipse(c.centerX, c.centerY, c.diameter);
        bubble.display();
        arc.display();
        arc2.display();
        arc3.display();
    };
    let event_happened = () => {

        let in_canvas = (p.mouseX > 0 && p.mouseX < c.canv_size && p.mouseY > 0 && p.mouseY < c.canv_size);
        if (in_canvas) {
            let win = bubble.is_within_arc(arc);
            if (win) {
                game = 1;
                alert('YOU WON!!!');
                deliver_game();
            } else {
                game = 0;
                alert('YOU LOST!!!');
                deliver_game();
            }
        }
    }
    p.mousePressed = () => {
        event_happened();
    };
    p.touchEnded = () => {
        event_happened();
    }
};
let deliver_game = () => {
    $('#id_task').val(game);
    // $('#form').submit();
}
let myp5 = new p5(s, 'p5cont');