
class StyleObject {
    constructor(top, left, width, height) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }

    toStyle() {
        let ret = {
            position: 'absolute',
            top: this.top + 'px',
            left: this.left + 'px',
            width: this.width + 'px',
            height: this.height + 'px'
        };
        return ret;
    }
}
