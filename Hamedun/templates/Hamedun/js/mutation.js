/**
 * Created by pouriya on 6/22/16.
 */



MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    Manipulator.pushHiddenElement("__success__");
});

observer.observe(document, {
    subtree: true,
    attributes: true,
    childList: true,
    characterData: true 
});