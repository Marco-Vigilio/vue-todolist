/***
 * 
 * Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, 
visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
 * 
 */

let { createApp } = Vue;

createApp({
    data(){
        return {
            array: [
                {
                    text: 'Cucinare',
                    done: false,
                }, {
                    text: 'Fare i compiti',
                    done: false,
                }, {
                    text: 'Leggere',
                    done: true,
                }, {
                    text: 'Fare sport',
                    done: true,
                }, 
            ],
            array1: [],
            message: "Non ci sono elementi",
            element: "",
        }
    },
    methods:{
        deleteElement(indexArray){
            this.array.splice(indexArray, 1);
        },

        addElement(newElement){
            let object = {
                text: newElement,
                done: false,
            }
            let verify;
            this.array.forEach(element => {
                if(element.text === object.text){
                    console.log("Elemento gia inserito");
                    verify = false;
                }
                else{
                    console.log("Nuovo elemento");
                    verify = true;
                }
            });
            if(verify === true){
                this.array.push(object);
                    console.log(this.array);
                    this.element = "";
            }
        },

        consoleLogElement(){
            console.log(this.message)
        },
    }
}).mount("#app");

console.log(this.array1);