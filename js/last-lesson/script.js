class Developer {
    constructor(name) {
        this.name = name;
    }

    startWork() {
        console.log(`${this.name} start work`);
    }

    stopWork() {
        console.log(`${this.name} stop work`);
    }
}

class Frontend extends Developer{

    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    }

    buildWebsite() {
        console.log(`${this.name} start build website ${this.websiteName}`);
    }
}

class Backend extends Developer {
    buildServer() {
        console.log(`${this.name} build server`);
    }
}

const john = new Frontend("John", "Amazon");
const doe = new Backend("Doe");

john.startWork();
john.buildWebsite();
john.stopWork();
doe.startWork();
doe.buildServer();
doe.stopWork();