from firebase import firebase
import pandas as pd
import numpy as np

#leio o Json
data = pd.read_json('workeerSpider/WorkeerSpider/vagas.json', orient='columns')

#especifico as colunas que preciso e envio para variáveis
vagasquery = data['vaga']
descricaoquery = data['descricao']
linkquery = data['link']

#converto as informações para lista (Sim, eu preciso utilizar o head(), por algum motivo não funciona sem ele)
vaga_list = vagasquery.head(len(vagasquery)).tolist()
descricao_list = descricaoquery.head(len(vagasquery)).tolist()
link_list = linkquery.head(len(vagasquery)).tolist()

#crio listas para pegar as informações depois de filtradas e enviar para o firebase
funcao = []
local = []
numvagas = []
titulo = []
descricao = []
link = []

#Passando por todas as vagas pulando as que dão erro (mas sem poder descobri-las o que matém os links etc.)
for i in range (len(vaga_list)):
   try:
      local.append(vaga_list[i].split("/")[1])
      funcao.append(vaga_list[i].split("/")[0])
      numvagas.append(vaga_list[i].split("/")[-1])
      titulo.append(vaga_list[i])
      descricao.append(descricao_list[i])
      link.append(link_list[i])
   except:
      i = i+1

#confirmação se o for está funcionando
#print("local tem " + str(len(local)) + "linhas")
#print("funcao tem " + str(len(funcao)) + "linhas")
#print("numvagas tem " + str(len(numvagas)) + "linhas")
#print("titulo tem " + str(len(titulo)) + "linhas")
#print("descricao tem " + str(len(descricao)) + "linhas")
#print("link tem " + str(len(link)) + "linhas")

#envio para o firebase

firebase = firebase.FirebaseApplication("https://workeer-system.firebaseio.com/", None)
try:
   for i in range(len(titulo)):
      info = {
         'Titulo' : titulo[i],
         'Descricao' : descricao[i],
         'Link' : link[i],
         'Local' : local[i],
         'Funcao' : funcao[i],
         'Numero de Vagas' : numvagas[i],
      }
      envio = firebase.post('/workeer-system/Vagas',info)
   print("envio para o firebase concluido")
except:
   print("Erro no envio para o firebase")


#                                                    COMENTÁRIOS DO CÓDIGO

#Eu consegui enviar vários mas parei lá pra linha 11584 do json, mas, mostrou que tinha mais 12978 coisas(Eu forcei o fechamento pq esperei muito tempo e nada de aparecer vaga nova)


#para pegar o que eu preciso --> um if confirmando se a primeira coluna pega do json != de null
#confirmar se a propaganda é sempre igual e se for um if dentro desse de cima confirmando se a primeira coluna do json é != da da propaganda

#Vagas para evitar
#"https://www.wezen.com.br","http://www.barinidesantis.com.br/trabalhista.php","https://www.facebook.com/InterageAI"
#"https://pln.brtrk2.com/aff_c?offer_id=1840&aff_id=8795",https://empregaindaiatuba.com.br/


#Slicing EXEMPLO

#>>> s = "hello, world!"
#>>> print s.split(",")
#['hello', ' world!']
#>>> print s.split(",")[0] Com isso eu consigo separar pela / e acessar cada uma das informações separando elas e colocando em listas diferentes ou separo na hora de postarmesmo 
#'hello'
#>>> print s.replace("world", "dude")
#hello, dude!


#for i in range(2500):#432 vagas dá o problema (Exception has occurred: IndexError list index out of range) --> Corrigido, problema em um dos títulos das vagas "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-6/"
   #local.append(vaga_list[i].split("/")[1])

#PROBLEMA(JÁ RESOLVIDO), ALGUMAS VAGAS SÂO DIVIDIDAS EM 4 PARTES COM O NUMERO DE VAGAS NA 4º PARTE E EM ALGUMAS, DIVIDIDAS EM 3, ESTÁ NA 3ª O QUE ATRAPALHA NA HORA DE PEGAR AS INFORMAÇÔES

#pego as informações que eu quero e removo "vagas falsas"
#vagasquery = data.query('link != "https://pln.brtrk2.com/aff_c?offer_id=1840&aff_id=8795" & link != "https://empregaindaiatuba.com.br/" & link != "https://www.wezen.com.br" & link != "http://www.barinidesantis.com.br/trabalhista.php" & link != "https://www.facebook.com/InterageAI" & link != "https://empregacampinas.com.br/2021/04/consultor-imobilario-vitta-campinas-e-regiao-ribeirao-preto-e-regiao-sp/" & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-6/"' +
#' & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-8/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-7/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-6/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-5/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-4/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-3/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-2/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso/"' +
#' & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-6/" & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-5/" & link != "https://empregacampinas.com.br/2021/02/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-4/" & link != "https://empregacampinas.com.br/2020/10/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/10/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/09/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo/"' +
#' & link != "https://empregacampinas.com.br/2021/02/venha-vender-e-ganhar-dinheiro-com-a-mrv-3/" & link != "https://empregacampinas.com.br/2021/04/venha-vender-e-ganhar-dinheiro-com-a-mrv-4/" & link != "https://empregacampinas.com.br/2020/11/venha-vender-e-ganhar-dinheiro-com-a-mrv-2/" & link != "https://empregacampinas.com.br/2020/09/venha-vender-e-ganhar-dinheiro-com-a-mrv/" & link != "https://empregacampinas.com.br/2020/09/mrv-set2020-01/" & link != "https://empregacampinas.com.br/2020/07/venha-vender-e-ganhar-dinheiro-com-a-mrv-limeira-e-piracicaba-sp/"' +
#' & link != "https://empregacampinas.com.br/2021/03/centro-de-pesquisa-em-campinas-recruta-mulheres-que-nao-fazem-uso-de-metodo-contraceptivo-hormonal-2/" & link != "https://empregacampinas.com.br/2021/03/centro-de-pesquisa-em-campinas-recruta-mulheres-que-nao-fazem-uso-de-metodo-contraceptivo-hormonal/"' + 
#' & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-9/" & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-8/" & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-7/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-6/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-5/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-4/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/09/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo/"' +
#' & link != "https://empregacampinas.com.br/2021/02/buscamos-mulheres-para-participar-de-estudo/" & link != "https://empregacampinas.com.br/2021/02/quer-ganhar-ajuda-de-custo-com-pesquisa-homem-ou-mulher-saiba-como/" & link != "https://empregacampinas.com.br/2021/02/centro-em-campinas-recruta-homens-e-mulheres-para-estudos/"')['vaga']

#descricaoquery = data.query('link != "https://pln.brtrk2.com/aff_c?offer_id=1840&aff_id=8795" & link != "https://empregaindaiatuba.com.br/" & link != "https://www.wezen.com.br" & link != "http://www.barinidesantis.com.br/trabalhista.php" & link != "https://www.facebook.com/InterageAI" & link != "https://empregacampinas.com.br/2021/04/consultor-imobilario-vitta-campinas-e-regiao-ribeirao-preto-e-regiao-sp/" & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-6/"' +
#' & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-8/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-7/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-6/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-5/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-4/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-3/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-2/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso/"' +
#' & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-6/" & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-5/" & link != "https://empregacampinas.com.br/2021/02/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-4/" & link != "https://empregacampinas.com.br/2020/10/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/10/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/09/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo/"' +
#' & link != "https://empregacampinas.com.br/2021/02/venha-vender-e-ganhar-dinheiro-com-a-mrv-3/" & link != "https://empregacampinas.com.br/2021/04/venha-vender-e-ganhar-dinheiro-com-a-mrv-4/" & link != "https://empregacampinas.com.br/2020/11/venha-vender-e-ganhar-dinheiro-com-a-mrv-2/" & link != "https://empregacampinas.com.br/2020/09/venha-vender-e-ganhar-dinheiro-com-a-mrv/" & link != "https://empregacampinas.com.br/2020/09/mrv-set2020-01/" & link != "https://empregacampinas.com.br/2020/07/venha-vender-e-ganhar-dinheiro-com-a-mrv-limeira-e-piracicaba-sp/"' + 
#' & link != "https://empregacampinas.com.br/2021/03/centro-de-pesquisa-em-campinas-recruta-mulheres-que-nao-fazem-uso-de-metodo-contraceptivo-hormonal-2/" & link != "https://empregacampinas.com.br/2021/03/centro-de-pesquisa-em-campinas-recruta-mulheres-que-nao-fazem-uso-de-metodo-contraceptivo-hormonal/"' + 
#' & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-9/" & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-8/" & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-7/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-6/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-5/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-4/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/09/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo/"' + 
#' & link != "https://empregacampinas.com.br/2021/02/buscamos-mulheres-para-participar-de-estudo/" & link != "https://empregacampinas.com.br/2021/02/quer-ganhar-ajuda-de-custo-com-pesquisa-homem-ou-mulher-saiba-como/" & link != "https://empregacampinas.com.br/2021/02/centro-em-campinas-recruta-homens-e-mulheres-para-estudos/"')['descricao']

#linkquery = data.query('link != "https://pln.brtrk2.com/aff_c?offer_id=1840&aff_id=8795" & link != "https://empregaindaiatuba.com.br/" & link != "https://www.wezen.com.br" & link != "http://www.barinidesantis.com.br/trabalhista.php" & link != "https://www.facebook.com/InterageAI" & link != "https://empregacampinas.com.br/2021/04/consultor-imobilario-vitta-campinas-e-regiao-ribeirao-preto-e-regiao-sp/" & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-6/"' +
#' & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-8/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-7/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-6/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-5/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-4/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-3/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso-2/" & link != "https://empregacampinas.com.br/2021/04/mulher-voce-quer-ajudar-na-saude-do-brasil-e-receber-ajuda-de-custo-por-isso/"' +
#' & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-6/" & link != "https://empregacampinas.com.br/2021/04/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-5/" & link != "https://empregacampinas.com.br/2021/02/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-4/" & link != "https://empregacampinas.com.br/2020/10/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/10/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/09/sabia-que-homens-podem-participar-de-pesquisas-e-receber-ajuda-de-custo/"' +
#' & link != "https://empregacampinas.com.br/2021/02/venha-vender-e-ganhar-dinheiro-com-a-mrv-3/" & link != "https://empregacampinas.com.br/2021/04/venha-vender-e-ganhar-dinheiro-com-a-mrv-4/" & link != "https://empregacampinas.com.br/2020/11/venha-vender-e-ganhar-dinheiro-com-a-mrv-2/" & link != "https://empregacampinas.com.br/2020/09/venha-vender-e-ganhar-dinheiro-com-a-mrv/" & link != "https://empregacampinas.com.br/2020/09/mrv-set2020-01/" & link != "https://empregacampinas.com.br/2020/07/venha-vender-e-ganhar-dinheiro-com-a-mrv-limeira-e-piracicaba-sp/"' + 
#' & link != "https://empregacampinas.com.br/2021/03/centro-de-pesquisa-em-campinas-recruta-mulheres-que-nao-fazem-uso-de-metodo-contraceptivo-hormonal-2/" & link != "https://empregacampinas.com.br/2021/03/centro-de-pesquisa-em-campinas-recruta-mulheres-que-nao-fazem-uso-de-metodo-contraceptivo-hormonal/"' + 
#' & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-9/" & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-8/" & link != "https://empregacampinas.com.br/2021/03/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-7/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/11/homem-participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-6/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-5/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-4/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-3/" & link != "https://empregacampinas.com.br/2020/10/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo-2/" & link != "https://empregacampinas.com.br/2020/09/participe-de-pesquisas-no-caep-e-receba-ajuda-de-custo/"' +
#' & link != "https://empregacampinas.com.br/2021/02/buscamos-mulheres-para-participar-de-estudo/" & link != "https://empregacampinas.com.br/2021/02/quer-ganhar-ajuda-de-custo-com-pesquisa-homem-ou-mulher-saiba-como/" & link != "https://empregacampinas.com.br/2021/02/centro-em-campinas-recruta-homens-e-mulheres-para-estudos/"')['link']

#teste das variaveis

#print(vaga_list)
#print(descricao_list)
#print(link_list)

#divido o titulo pelas diferentes informações
erro = 0
#pegando a linha do erro 
#try:
#   for i in range(len(vaga_list)):
#      funcao.append(vaga_list[i].split("/")[0])
#      local.append(vaga_list[i].split("/")[1])
#      numvagas.append(vaga_list[i].split("/")[-1])
#except:
#   print(i)
#   erro = i

#descobrir que vaga é essa que tá bugando
if (erro != 0):
   print(vaga_list[erro])