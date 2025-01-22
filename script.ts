//ES 1 Quali sono i tipi primitivi principali in TypeScript?
console.log("Esercizio 1");
console.log(
  "I principali tipi primitivi in TS sono : string - number - boolean - undefined - null"
);

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
console.log("Esercizio 2");
let myName: string = "Federico";
let myAge: number = 28;
let studyingTS: boolean = true;

//3) Tipizza il parametro della seguente funzione: const greet = (name) => { return "Ciao " + name }
console.log("Esercizio 3");
const greet = (name: string) => {
  return "Ciao " + name;
};

//4) Specifica il tipo di ritorno della seguente funzione:
console.log("Esercizio 4");
const sum = (a: number, b: number): number => {
  return a + b;
};

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
console.log("Esercizio 5");

const calcIva = function (price: number, iva?: number): number {
  return price + (price / 100) * (iva || 22);
};
console.log(calcIva(100));

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
console.log("Esercizio 6");
const concatString = (str1: string, str2: string): number => {
  return str1.concat(str2).length;
};
console.log(concatString("uno", "2"));

//7) Cos'è un Type Union e come si scrive?
console.log("Esercizio 7");
console.log(
  "Una type union e' una assegnazione ad una variabile o dichiarazione di un tipo, contenente piu' types al suo interno e si scrive cosi: let TypeUnion: string|number = //valore OPPURE type NomeTypeUnion = string | number"
);

//8) Crea una variabile che possa contenere un numero, null o undefined.
console.log("Esercizio 8");
let union1: number | null | undefined = null;

type UnionType1 = number | null | undefined;
let union2: UnionType1 = 10;

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
console.log("Esercizio 9");
type date = string | number;

//10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
console.log("Esercizio 10");
const numbers1: number[] = [1, 2, 3];
const number2: Array<number> = [4, 5, 6];

//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
console.log("Esercizio 11");
const tuple1: [string, string, string, number, number] = ["a", "b", "c", 1, 2];

//12) Qual è la differenza tra type e interface?
console.log("Esercizio 12");
console.log(
  "La differenza tra type e interface e' che i type sono una dichiarazione di un nuovo Tipo che puo' contentere diversi types , mentre le interfacce sono una dichiarazione di un oggetto che al suo interno avra delle coppie chiave/valore che comprendono la proprieta' che avra quello specifico oggetto con il tipo di valore che assumera quella proprieta', inoltre le interfacce possono essere estese come le classi per far eredidare ad altre interfacce le proprie proprieta' "
);

//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
console.log("Esercizio 13");
interface Interfaccia1 {
    firstName: string,
    lastName: string,
    age: number
}

//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
console.log("Esercizio 14");
interface User {
    email: string,
    phone?: string|number
}

//15) Crea un array tipizzato di oggetti "Studente" con nome e voto
console.log("Esercizio 15");
interface Studente {
    nome: string,
    voto: number
}
let arrayStudenti :Studente[] = [{nome:'Mario', voto:8},{nome:'Luigi',voto:6}]

//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
console.log("Esercizio 16");
interface Veicolo {
    marca: string,
    modello: string,
    anno:number,
}

interface Auto extends Veicolo{
    carburante:string,
    potenza: string,
    cambioManuale:boolean
}

//17) Crea un oggetto che implementi l'interfaccia Auto.
console.log("Esercizio 17");

const newCar :Auto = {
   marca: 'Nissan',
   modello:'Gt-R',
   anno: 2025,
   carburante:'Benzina',
   potenza: '570CV',
   cambioManuale: false
}

//18) Cosa sono i Generics in TypeScript?
console.log("Esercizio 18");
console.log("I generics sono dei tipi ,che sono presenti solamente in TS e non in JS, con i quali possiamo passare come parametro vari types che andremo ad usare all'interno di un interfaccia , si dichiarano tramite parentesiAngolari e si usa una lettera Maiuscola <A> , questi generics in fase di creazione di un nuova interfaccia verranno usati come valore di una proprieta', mentre in fase dichiarazione di quell'oggetto verra passato come parametro sempre tramite parentesi angolari InterfaceName<string> ")

interface New<A> {
    nome: string,
    eta: A
}
const newPerson1 :New<number> = {
    nome:'Mario',
    eta: 30
}
const newPerson2 :New<string> = {
    nome:'Luigi',
    eta: '25'
}

//19) È possibile avere più tipi generici in un'interfaccia?
console.log("Esercizio 19");
console.log("E' possibile avere quanti tipi generici si vuole in un'interfaccia , basta poi dichiararli in seguendo l'ordine in cui sono passati come parametri")

interface New2<A,B> {
    nome: string,
    eta: A,
    skills: B
}
const newPerson3 :New2<number, string> = {
    nome:'Mario',
    eta: 30,
    skills:'Idraulico'
}
const newPerson4 :New2<string, string[]> = {
    nome:'Luigi',
    eta: '25',
    skills:['idraulico',"E' verde!"]
}

//20) Crea un'interfaccia generica per una risposta API.\
console.log("Esercizio 20")
interface UserApiGet<A>{
    user_id:string,
    name: string,
    surname?: string,
    email: string,
    birthDate: string|number,
    phoneNumber?: number,
    Address: {
        street:string,
        civicNum: number,
        zipCode: string,
        state:A 
    }
    subscribed: boolean
}
