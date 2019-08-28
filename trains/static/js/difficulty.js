//TODO: move bubbles and arcs into sep class and export using require, module.export
let width = 20,
    radius = 100,
    diameter = radius * 2,
    angle = 0,
    speed = 0.05,
    centerX = 200,
    centerY = 200,
    start_angle = 0,
    end_angle,
    bubble_size = 30,
    arcs,
    angles = [{'angle': 4, 'radius': 125, color: 100},
        {'angle': 3, 'radius': 145, color: 150},
        {'angle': 2, 'radius': 165, color: 0},
        {'angle': 1, 'radius': 185, color: 100}];

class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.col = color(255, 100, 76);
        this.diameter = bubble_size;
    }


    display() {
        stroke(0);
        strokeWeight(1);
        fill(this.col);
        this.x = centerX + radius * cos(angle);
        this.y = centerY + radius * sin(angle);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        angle = angle + speed;
    }

    is_clicked() {
        var d = dist(mouseX, mouseY, this.x, this.y);
        return (d < this.diameter / 2);
    }

    clicked() {
        if (this.is_clicked()) {
            console.log('circle clicked');
        }
    };
};

class Arc {
    constructor(angle1, radius, col) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.start_angle = start_angle;
        this.end_angle = angle1;
        this.col = color(col, col, 0);
        this.width = width;
        this.radius = radius;
    }


    display() {
        stroke(this.col);
        strokeWeight(this.width);
        strokeCap(SQUARE);
        noFill();
        arc(this.centerX, this.centerY, this.radius * 2, this.radius * 2, this.start_angle, this.end_angle, OPEN);
    }

    is_clicked() {
        return (this._is_within_width() && this._is_within_angles());
    }

    _is_within_width() {
        let d = dist(mouseX, mouseY, this.centerX, this.centerY);
        let lb = this.radius - this.width / 2;
        let ub = this.radius + this.width / 2;
        return (d >= lb && d <= ub);
    }

    _is_within_angles() {
        var innerangle = atan2(mouseY - this.centerY, mouseX - this.centerX);
        if (innerangle < 0) {
            innerangle = 2 * PI - abs(innerangle);
        }
        return (innerangle >= this.start_angle && innerangle <= this.end_angle);
    }

    do_if_clicked() {
        console.log('ARC CLICKED', this.end_angle);
        $('#id_difficulty').val(this.end_angle);
        $('#form').submit();
    }

    clicked() {
        if (this.is_clicked()) {
            this.do_if_clicked()
        }
    };


};

function setup() {
    let canv = createCanvas(400, 400);
    canv.parent('p5cont');
    arcs = [];
    // TODO: foreach
    for (var i = 0; i < angles.length; i++) {
        a = angles[i]
        arcs.push(new Arc(a.angle, a.radius, a.color));
    }
    ;
    myarc = new Arc(0, PI * 1.5);
    bubble = new Bubble(200, 200)
}

function draw() {
    background(255);
    stroke(1);
    strokeWeight(1);
    noFill();
    ellipse(centerX, centerY, diameter);
    bubble.display();
    for (var i = 0; i < arcs.length; i++) {
        arcs[i].display();
    }
    ;
}

function mousePressed() {
    for (var i = 0; i < arcs.length; i++) {
        arcs[i].clicked();
    }
    ;
}