var fe = 0;
var cs = 0;
var ss = 0;
var feAssigned = false;
var csAssigned = false;
var ssAssigned = false;
var feScrums = 0;
var csScrums = 0;
var ssScrums = 0;

$(document).ready(function () {
    //event.preventDefault();
    $('#generate').on('click', function () {
        feScrums = 0;
        csScrums = 0;
        ssScrums = 0;
        fe = 0;
        cs = 0;
        ss = 0;
        feAssigned = false;
        csAssigned = false;
        ssAssigned = false;

        $('main').children().remove();
        $('#assign').remove();
        $('#sprints').remove();
        $('main').append('<h1>' + randomCompanyName() + '</h1>');
        randomPts();
        $('main').append('<p class = "col-md-4">' + "Front End Points: " + fe + '</p>');
        $('main').append('<p class = "col-md-4">' + "Client Side Points: " + cs + '</p>');
        $('main').append('<p class = "col-md-4">' + "Server Side Points: " + ss + '</p>');
        $('.jumbotron').append('<button type="button" class="btn btn-lg btn-success" id="assign">Assign Staff</button>');
    });

    $(document).on('click', '#assign', function() {goFetch();});


    function goFetch() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'http://127.0.0.1:3000/createemployee'
        }).done(function (response) {
            var worker = response;
            $('main').append('<p>' + worker[0] + " " + worker[1] + " " + worker[2] + '</p>');
            if (worker[1] == "Front End") {
                feAssigned = true;
                feScrums += worker[2];
            } else if (worker[1] == "Client Side") {
                csAssigned = true;
                csScrums += worker[2];
            } else if (worker[1] == "Server Side") {
                ssAssigned = true;
                ssScrums += worker[2];
            };

            if (feAssigned == false || csAssigned  == false || ssAssigned  == false) {
                goFetch();
            };

            feSprints = Math.ceil((fe / feScrums));
            csSprints = Math.ceil((cs / csScrums));
            ssSprints = Math.ceil((ss / ssScrums));

            if (feSprints > csSprints && feSprints > ssSprints) {
                $('#sprints').remove();
                $('.jumbotron').append('<div id="sprints">Sprints Required: ' + feSprints + '</div>');
            };
            if (csSprints > feSprints && csSprints > ssSprints) {
                $('#sprints').remove();
                $('.jumbotron').append('<div id="sprints">Sprints Required: ' + csSprints + '</div>');
            };
            if (ssSprints > feSprints && ssSprints < csSprints) {
                $('#sprints').remove();
                $('.jumbotron').append('<div id="sprints">Sprints Required: ' + ssSprints + '</div>');
            };

        });


    };


});


var randomCompanyName = function () {
    var first = Math.floor(Math.random() * (12 - 1));
    var last = Math.floor(Math.random() * (12 - 1));
    var firsts = ["Scarlet", "Cornflower Blue", "Periwinkle", "Indigo", "Violet", "Chartreuse", "Oxblood", "Azure", "Magenta",
        "Teal", "Cyan", "Clementine"];
    var lasts = ["Zinc", "Mercury", "Argon", "Hydrogen", "Neon", "Titanium",
        "Aluminium", "Iron", "Tin", "Radon", "Uranium", "Oxygen"];
    var companyName = firsts[first] + " " + lasts[last];
    return companyName;
};

function randomPts() {
    fe = Math.floor(Math.random() * (60 - 10) + 10);
    cs = Math.floor(Math.random() * (60 - 10) + 10);
    ss = Math.floor(Math.random() * (60 - 10) + 10);
    return fe, cs, ss;

};

