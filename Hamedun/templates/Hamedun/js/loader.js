/**
 * Created by pouriya on 6/25/16.
 */
function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript('https://127.0.0.1:8000/hamedun/static/js/jquery-3.0.0.js', function(){     
    loadScript('https://127.0.0.1:8000/hamedun/static/js/utils.js', function(){
        loadScript('https://127.0.0.1:8000/hamedun/static/js/match.js', function(){
            loadScript('https://127.0.0.1:8000/hamedun/static/js/listener.js', function(){
            });
        });
    });
});