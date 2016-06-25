/**
 * Created by pouriya on 6/7/2016.
 */

var LCA = {};

/*
 *
 * */
LCA.match = function(elem1, elem2) {
    if (elem1.tagName != elem2.tagName) return false;
    var ch1 = elem1.children, ch2 = elem2.children;
    if (ch1.length != ch2.length) return false;
    for (var i=0;i<ch1.length;i++) if (!LCA.match(ch1[i], ch2[i])) return false;
    return true;
};

LCA.dfs = function(element, match) {
    var children = element.children;
    var cnt = 1, lca = null, isMatch = false;
    for(var i=0;i<children.length;i++) {
        [ch_cnt, ch_match, ch_lca] = LCA.dfs(children[i], match);
        if(!lca && ch_match && isMatch) lca = element;
        if(ch_lca) lca = ch_lca;
        isMatch = isMatch || ch_match;
        cnt += ch_cnt;
    }
    if(!isMatch) isMatch = match(element, cnt);
    return [cnt, isMatch, lca];
};

LCA.findLca = function(element) {
    [cnt, _, _] = LCA.dfs(element, function(){return false});
    return LCA.dfs(document, function(node, n_cnt){
        if(n_cnt != cnt) return false;
        return LCA.match(node, element);
    })[2];
};
