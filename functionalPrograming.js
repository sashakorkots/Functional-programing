
let array = [
    {
        'figure': 'rectengele',
        'heigth': 5,
        'width': 5,
        'color':'black'
    },
    {
        'figure': 'triangle',
        'heigth': 4,
        'width': 4,
        'color':'red'
    },
    {
        'figure': 'triangle',
        'heigth': 4,
        'width': 4,
        'color':'red'
    }
];

const sum = (a, b) => a + b;

const max = (a, b) => a > b ? a : b;    

const calcPerim = p => (p.heigth + p.width) * 2;

const calcArea = p => p.heigth * p.width;

const hasColor = c => r => r.color == c; 

const isFigure = f => c => c.figure == f; 

const filter = f => m => m.filter(f);

const map = f => m => m.map(f);

const reduce = (f, p) => m => m.reduce(f, p);

const and = par => flow(par);   

const or = par => flow(map(par),false);

/* const any = (...par) => par.reduce((result, fn) => result || fn, false);   

const all = (...par) => par.reduce((result, fn) => result && fn, true); */

const flow = (...par) => data => par.reduce((result, fn) => fn(result) , data);    

const combine = (...par) => data => par.reverse().reduce((result, fn) => fn(result), data); 


const maxRedPer = flow(
    filter(or(hasColor('black'), isFigure('rectengele')) )/* ,
    map(calcPerim),
    reduce(sum, 0) */
)
const maxBlackPer = flow(
    filter(isFigure('triangle')),
    map(calcPerim)
)

console.log(maxRedPer(array));