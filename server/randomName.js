var randomName = function () {
    var first = Math.floor(Math.random() * (11 - 1));
    var last = Math.floor(Math.random() * (11 - 1));
    var firsts = ["Joe", "Jon", "Bill", "Amy", "Liz", "Hal", "Ari", "Ivy", "Han", "Kermit", "Fozzie"];
    var lasts = ["Smith", "Jones", "Davis", "Johnson", "James", "McAwesomesauce",
        "Animal", "La Chat", "Le Chien", "Bear", "The Frog"];
    var fullName = firsts[first] + " " + lasts[last];
    return fullName;
};
module.exports = randomName;
