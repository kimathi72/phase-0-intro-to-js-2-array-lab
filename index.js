// Write your solution here!
const cats=[
    "Milo", 
    "Otis", 
    "Garfield",
];
function beforeEach() {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    return cats;
  };

function destructivelyAppendCat (name) {
    beforeEach();

    cats.push(name);
    return cats;
};

function destructivelyPrependCat (name){
    beforeEach();

    cats.unshift(name);
    return cats;
};

function destructivelyRemoveLastCat (name){
    beforeEach();

    cats.pop(name);
    return cats;
};
function destructivelyRemoveFirstCat (name){
    beforeEach();

    cats.shift(name);
    return cats;
};

function appendCat(name){
    const altCats = [...cats, `${name}`];
    return altCats;
}

function prependCat(name){
    const preCats = [`${name}`,...cats ];
    return preCats;
}
function removeLastCat(name){
    const rvmLstCat = cats.slice(0,-1);
    return rvmLstCat;
}
function removeFirstCat(name){
    const rvmFstCat = cats.slice(1);
    return rvmFstCat;
}