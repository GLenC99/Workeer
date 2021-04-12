import scrapy
from bs4 import BeautifulSoup, SoupStrainer
from scrapy.http import response
from firebase import firebase
from urllib.request import urlopen

class vacanciesSpider(scrapy.Spider):
    name = 'vacanciesbot' 
    start_urls = [
        'https://empregacampinas.com.br/categoria/vaga/',
        ]
    desc = {}
    titl = {}
    def parse(self, response):
        descript = response.css('.descricao-vaga').getall()
        titles = response.css('h2').getall()
        links = []
        soup = BeautifulSoup(response.body_as_unicode())
        a = soup.find_all('a')
        for link in a:
            links.append(link.get('a::attr(href)'))
        next_page = response.css('a[rel="next"]::attr(href)').get()
        #print("O LINK DA PRÓXIMA PÁGINA É: " + next_page)
        if next_page is not None:
            next_page = response.urljoin(next_page)
            yield response.follow(next_page, callback=self.parse)
        
        yield {
            "url": response.url,
            "title": soup.h1.string
        }
        desc.append(descript)
        titl.append(titles) 
        #arranjar um jeito de igualar os dois descripts
        #print(descript)
        #print(titles)
        #print(next_page)   
        #print("TESTE DENTRO DO PARSE") # Aqui é repetido toda vez que passa por uma página
    #print("TESTE FORA DO PARSE") #Correção : (Roda isso aqui antes de rodar o def parse)
    #print(desc) #NameError: name 'desc' is not defined # Da o mesmo erro do teste Dentro x Teste Fora, a variavel não tem valor então não pode ser printada, ela é rodada antes dos appends.
    print(titl)

    #firebase = firebase.FirebaseApplication("https://workeer-system.firebaseio.com/", None)
    #info = None
    #if descript != "" and titles != "":
        #info = {
    #    'Link' : links[0],
            #'Description' : descript,
            #'Titles' : titles,
        #}
    #if info is not None:
        #envio = firebase.post('/workeer-system/Vagas',info)
        #print("Everything was posted")
    
    #print("Class end")
    #Não ta imprimindo aqui


# Roda isso antes da spider
#print("Descricao:")
    #print("PKLAFPJMASKFOASJKPFKJPVOAPSFASKFPAFPASOKFPAKFPAKPFASKFPOASFKASOFKPAOKFAOSKFOPKAFPOKSFPOSAKPSKFPOKF")
    #print("-------------------------------------------------------------------------------------------------------------------------")
#print(descript)
#print("Titulos:")
#print(titles)    
    
