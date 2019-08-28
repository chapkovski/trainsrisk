let width = 30,
    radius = 100,
    diameter = radius * 2,
    angle = 0,
    speed = 0.05,
    centerX = 200,
    centerY = 200,
    start_angle = 0,
    bubble_size = 30;

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
    constructor(angle0, angle1, col = color(100, 100, 100)) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.start_angle = angle0;
        this.end_angle = angle1;
        this.col = col;
        this.width = width
        this.radius = radius
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
        console.log('ARC CLICKED');
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
    myarc = new Arc(start_angle, end_angle);
    bubble = new Bubble(200, 200)
}

function draw() {
    background(255);
    myarc.display();
    stroke(1);
    strokeWeight(1);
    noFill();
    ellipse(centerX, centerY, diameter);
    bubble.display();
}

function mousePressed() {
    if (myarc.is_clicked() && bubble.is_clicked()) {
        let val;
        if (myarc.is_clicked() && bubble.is_clicked()) {
            val = 'True'
        } else {
            val = 'False'
        }
        $('#id_task').val(val);
        $('#form').submit();
    }
}