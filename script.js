var sandwich = document.getElementById("sandwich-div");
var ingredients = [];
var addMore = true;
main();

function createNew(){
    sandwich.innerHTML = "";
    ingredients = [];
    addMore = true;
    main();
}

function main() {
    var bread = Math.floor(Math.random() * (breadType.length));

    //addIng(breadType[bread]);
    var topBread = document.createElement("li");
    topBread.appendChild(document.createTextNode(breadType[bread]));
    sandwich.appendChild(topBread);

    var innerLi = document.createElement("li");
    var inner = document.createElement("ul");
    inner.id = "inner";
    innerLi.appendChild(inner);
    sandwich.appendChild(innerLi);
    inner = document.getElementById("inner");

    while (addMore == true) {
        var t = Math.floor(Math.random() * (types.length));
        var i = Math.floor(Math.random() * (types[t].length));
        ingredients.push(types[t][i]);

        var rnd = (Math.random() * (ingredients.length));
        console.log(rnd + "," + ingredients.length);
        if (rnd > 1) {
            addMore = false;
        }
    }
    ingredients.forEach(ing => addIng(ing));

    var bottomBread = document.createElement("li");
    bottomBread.appendChild(document.createTextNode(breadType[bread]));
    sandwich.appendChild(bottomBread);

    if (Math.random() < 0.15) {
        var i = Math.floor(Math.random() * (specialServe.length));

        var serve = document.createElement("li");
        serve.appendChild(document.createTextNode(`* [${specialServe[i]}]`));
        sandwich.appendChild(serve);
    }
}

function addIng(ing) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(ing));
    inner.appendChild(li);
}