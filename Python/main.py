from firebase import firebase
from urllib.request import urlopen
from bs4 import BeautifulSoup, SoupStrainer
import requests
import re
from selenium import webdriver
import pandas as pd

#url = 'https://empregacampinas.com.br/categoria/vaga/json'
#page = requests.get(url)
#parsed_data = BeautifulSoup(page.content, 'html5lib')#até agora é o que mais pegou do url
#print(parsed_data)

html = urlopen("https://empregacampinas.com.br/categoria/vaga/")
text = html.read()
plaintext = text.decode('utf8')
#links = re.findall("href=[\"\'](.*?)[\"\']", plaintext) #pega todos os links, mas, é preciso limpar os que não tem a ver com as vagas
#print(len(links))
#print(links[:len(links)])



#inks = re.findall("title=[\"\'](.*?)[\"\']", plaintext) #pega 29 titles, mas, só 16 são vagas de vdd
#print(inks[:len(inks)])
#print(len(inks))


#lin = re.findall("class=[\"\'](.*?)[\"\']", plaintext) 
#lin = re.findall('[\w\.\-]+vaga[\w\.\-]+',plaintext) #isso pega tudo do html que tem vaga no meio


from selenium import webdriver
from bs4 import BeautifulSoup
from urllib.request import urlopen
import pandas as pd
import requests

#Codigo para pegar os hrefs da primeira pagina
linkinicial = "https://empregacampinas.com.br/categoria/vaga/"
r = urlopen(linkinicial)
soup = BeautifulSoup(r, 'html.parser')
num = 1
links_with_text = []
links_to_show =[]
for a in soup.find_all('a', href=True): 
    if a.text: 
        links_with_text.append(a['href'])
        links_to_show.append(a['href'].split(","))
        html = urlopen(links_with_text[0])
        res = BeautifulSoup(html.read(),'html.parser')
        tags = res.findAll("p", {"class": "descricao-vaga"})

for tag in tags:
    print(tag.getText()) #for cria um objeto que passa pela lista recebendo 

#print(tags[0].getText())
#print("-----------------------------------------------------")
#print(tags[1].getText())
#print("-----------------------------------------------------")
#print(tags[2].getText())
#print("-----------------------------------------------------")
#print(tags[3].getText())
#print("-----------------------------------------------------")
#print(tags[4].getText())
#print("-----------------------------------------------------")
#print(tags[5].getText())
#print("-----------------------------------------------------")
#print(tags[6].getText())
#print("-----------------------------------------------------")
#print(tags[7].getText())
#print("-----------------------------------------------------")
#print(tags[8].getText())
#print("-----------------------------------------------------")
#print(tags[9].getText())
#print("-----------------------------------------------------")
#print(tags[10].getText())
#print("-----------------------------------------------------")
#print(tags[11].getText())
#print("-----------------------------------------------------")
#print(tags[12].getText())
#print("-----------------------------------------------------")
#print(tags[13].getText())
#print("-----------------------------------------------------")
#print(tags[14].getText())
#print("-----------------------------------------------------")
#print(tags[15].getText())
#print("-----------------------------------------------------")
#print(tags[16].getText())
#print("-----------------------------------------------------")


#firebase = firebase.FirebaseApplication("https://workeer-system.firebaseio.com/", None)
#info = {
#    'Link' : links[0],
#}
#envio = firebase.post('/workeer-system/Vagas',info)
