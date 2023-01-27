import chalk from "chalk";

class Color {
    constructor(public r = 0, public g = 0, public b = 0) { }
}

const black = new Color(63, 68, 81);
const white = new Color(215, 218, 224);
class Termination {
    public frame = new Frame();
    constructor() {
        this.frame.height = 8;
        this.frame.width = 8;
        this.frame.data = [
            new Block("♜", black, white),
            new Block("♞", white, black),
            new Block("♗", black, white),
            new Block("♕", white, black),
            new Block("♔", black, white),
            new Block("♗", white, black),
            new Block("♞", black, white),
            new Block("♜", white, black),
        ]
    }
    render(): void {
        let result = "";
        //for (let h = 0; h < this.frame.height; h++) {
            for (let w = 0; w < this.frame.width; w++) {
                result += this.frame.data[w]!.data;
            }
        //}
        process.stdout.write(result + "\n");
    }
    clear(): void {
        process.stdout.cursorTo(0);
        process.stdout.cursorTo(0);
    }
}


class Block {
    public data!: string;
    constructor(public text: string, public color: Color, public background: Color) {
        this.data = this.update();
    }
    editText(newText: string): string {
        this.text = newText;
        return this.update();
    }
    editColor(newColor: Color): string {
        this.color = newColor;
        return this.update();
    }
    editBackground(newBackground: Color): string {
        this.background = newBackground;
        return this.update();
    }
    update(): string {
        return this.data = chalk.bgRgb(this.background.r, this.background.g, this.background.b)(chalk.rgb(this.color.r, this.color.g, this.color.b)(this.text) + " ");
    }
}

class Frame {
    public height = 0;
    public width = 0;
    public data: Block[] = [];
}

class Background {
}

const game = new Termination();
game.render();
game.frame.data[0]?.editText("♕");
game.clear();
game.render();
class Pixel {
    public text!: "";
    public textColor!: Color;
    public background!: Color;
}