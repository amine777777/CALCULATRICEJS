class Calculator {
    constructor() {
        this.input = document.getElementById("input");
        this.result = document.getElementById("result");
        this.history = [];
    }
    ajouter(charClicked) {
        this.input.value += charClicked;
    }
    effacer(){
            this.input.value = ""; 
    }

    calc() {
        try {
            var result = eval(this.input.value);
            this.result.value = this.input.value + " = " + result;
            this.history.push({ operation: this.input.value, result: result });
        } catch {
            this.result.value = 'Error';
        }
        this.effacer();
    }

retour() {
    if (this.input.value.length > 0) {
        this.input.value = this.input.value.slice(0, -1);
    } else if (this.history.length > 0) {
        const lastEntry = this.history.pop();
        this.input.value = lastEntry.operation;
    }
}

}

let calculator = new Calculator();

