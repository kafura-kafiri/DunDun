/**
 * Created by pouriya on 6/7/2016.
 */

pushHiddenElement = function(id){
    if(!document.getElementById(id)) {
        var element = document.createElement('ul');
        element.id = id;
        /*element.style = 'display: none;' +
         'visibility: hidden;';*/
        document.getElementsByTagName('body')[0].appendChild(element);
    }
    return document.getElementById(id).id;
};

document.addEventListener("click", function(e){
    // setup
    var info = pushHiddenElement("__info__");
    var path;
    if (!e) e = window.event;
    var contextNode = e.target;
    
    path = UTILS.cssPath(contextNode);
    // types
    if (e.shiftKey || e.ctrlKey) {
        var lca = LCA.findLca(contextNode);
        if(lca) {
            if(e.shiftKey) {
                while(contextNode.parentNode.nodeType === Node.ELEMENT_NODE
                && LCA.findLca(contextNode.parentNode)) {
                    contextNode = contextNode.parentNode;
                    lca = LCA.findLca(contextNode);
                }
            }
            path = UTILS.cssPath(contextNode);
            var lca_path = UTILS.cssPath(lca);
            var path_step = path.split(' > '), lca_step = lca_path.split(' > ');
            // with this thought that :<> are at the end
            var step = path_step[lca_step.length];
            step = step.split(":")[0] + ':nth-type(__n__)'
            path_step[lca_step.length] = step;
            // ^-------^
            path = path_step.join(' > ');
        }
    }
    
    // prompt for name
    var name = prompt("Please enter name", "search");
    
    var li = document.createElement('li');
    li.setAttribute("name", name);
    li.innerHTML = path;
    document.getElementById(info).appendChild(li);
});