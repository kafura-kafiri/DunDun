/**
 * Created by pouriya on 6/7/2016.
 */


document.addEventListener("click", function(e){
    // setup
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
    var pm_url = 'https://127.0.0.1:8000/hamedun/addPath';
    $.ajax({
        crossDomain: true,
        url: pm_url,
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: 'callback',
        data: {
            name: name,
            path: path,
            url: window.location.href
        }
    });
});