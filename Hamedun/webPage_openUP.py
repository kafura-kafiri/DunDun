from selenium import webdriver
from pyvirtualdisplay import Display

# display = Display(visible=0, size=(800, 600))
# display.start()
driver = webdriver.Chrome()
driver.get("http://www.google.com")
js_ld = """
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
"""

script_jquery = """
    loadScript('https://127.0.0.1:8000/hamedun/static/js/utils.js', function(){
        loadScript('https://127.0.0.1:8000/hamedun/static/js/pushPop.js', function(){
            loadScript('https://127.0.0.1:8000/hamedun/static/js/match.js', function(){
                loadScript('https://127.0.0.1:8000/hamedun/static/js/listener.js', function(){
                    alert('d');
                });
            });
        });
    })
"""


driver.execute_script(js_ld + script_jquery)

# driver.quit()
# display.stop()
