from selenium import webdriver
from pyvirtualdisplay import Display

# display = Display(visible=0, size=(800, 600))
# display.start()
driver = webdriver.Chrome()
driver.get("http://www.google.com")

with open('/home/pouriya/PycharmProjects/DunDun/Hamedun/templates/Hamedun/js/loader.js', encoding='utf-8') as f:
    driver.execute_script(f.read())

# driver.quit()
# display.stop()
