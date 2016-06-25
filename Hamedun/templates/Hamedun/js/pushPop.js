/**
 * Created by pouriya on 6/22/16.
 */

Manipulator = {};
Manipulator.pushHiddenElement = function(id){
    if(!document.getElementById(id)) {
        var element = document.createElement('ul');
        element.id = id;
        /*element.style = 'display: none;' +
         'visibility: hidden;';*/
        document.getElementsByTagName('body')[0].appendChild(element);
    }
    return document.getElementById(id).id;
};

Manipulator.popHiddenElement = function(id){
    if(document.getElementById(id)){
        var contextNode = document.getElementById(id)
        contextNode.parentNode.removeChild(contextNode);
    }
};