new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        input: "",
        output: "",
        options: ["Upper case", "Lower case", "Reverse", "ASCII value"],
        option: "Upper case",
    },
    methods: {
        manipulateString() {
            if (this.input == 0) {
                this.output = "No input"
            }
            else if (this.option == "Upper case") {
                this.output = this.input.toUpperCase()
            }
            else if (this.option == "Lower case") {
                this.output = this.input.toLowerCase()
            }
            else if (this.option == "Reverse") {
                this.output = this.input.split("").reverse().join("")
            }
            else if (this.option == "ASCII value") {
                let temp : String
                let ascii : number
                let i : number
                for (i = 0; i < this.input.length; i++) {
                    ascii = this.input.charCodeAt(i)
                    temp += ascii.toString() + " "
                }
                this.output = temp.slice(9)
            }
        },

        changeSetting(index: number) {
            this.option = this.options[index]
        }
    }
})