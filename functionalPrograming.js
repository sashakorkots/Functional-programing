
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
    },
    {
        'figure': 'rectengele',
        'heigth': 6,
        'width': 6,
        'color':'black'
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

const and = (r, l) => r && l;

const or = (r, l) => r || l;

const all = par => flow(par);   

const any = (...par) => data => par.reduce((result, fn) => fn(data) || result , false);    

const flow = (...par) => data => par.reduce((result, fn) => fn(result) , data);    

const combine = (...par) => data => par.reverse().reduce((result, fn) => fn(result), data); 


const maxBlackRectengleArea = flow(
    filter(all(hasColor('black'), isFigure('rectangle')) ),
    map(calcArea),
    reduce(max, 0)
)
const sumRedTrianglePer = flow(
    filter(all(isFigure('triangle'), hasColor('red'))),
    map(calcPerim),
    reduce(sum, 0)
)

console.log(maxBlackRectengleArea(array));
console.log(sumRedTrianglePer(array));