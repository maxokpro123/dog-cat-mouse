function Pig(name) {
    this.name = name;
    this.die = false;
    this.stomach = [];
    Pig.prototype.shit = function(cat) {
        this.stomach.push(cat);
    }
}
file.export = pig;