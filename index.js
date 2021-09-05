$(document).ready(function () {
  
    $('ul.navbar-nav > li')
            .click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
});

var span= document.getElementsByTagName('span');
var div= document.getElementsByClassName('div');
var l=0;
span[1].onClick = () => {
    l++;
    for(var i of div)
    {
        if(l==0) {i.getElementsByClassName.left="0px";}
        if(l==1) {i.getElementsByClassName.left="-740px";}
        if(l>1) {l=1;}
        
        
    }
}