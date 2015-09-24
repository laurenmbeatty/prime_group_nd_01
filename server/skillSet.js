var skillSet = function() {
    var skill = "";
    var skillNum = Math.floor(Math.random() * (3-1) + 1);
    if(skillNum ===1) {
        skill = "Front End";
    }else if(skillNum ===2){
        skill = "Client Side";
    }else{
        skill = "Server Side";
    }
    return skill;
};
module.exports= skillSet;
