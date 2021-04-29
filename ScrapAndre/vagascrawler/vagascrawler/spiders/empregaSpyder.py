# -*- coding: utf-8 -*-
import scrapy
class EmpregaspyderSpider(scrapy.Spider):
    name = 'empregaSpyder'
    allowed_domains = ['empregacampinas.com.br']
    # start_urls = ['http://empregacampinas.com.br/']
    start_urls = ['https://empregacampinas.com.br/categoria/vaga/']

    def parse(self, response):
        vagas = response.xpath('//a[@class="thumbnail"]')
        for vaga in vagas:
            print(vaga)
            yield{
                'vaga': vaga.xpath('.//h2/text()').get(),
                'descricao': vaga.xpath('.//p[@class="descricao-vaga"]/text()').get(),
                'link': vaga.xpath('.//@href').get()
            }

        # nextPage = response.xpath('//div[@class="wp-pagenavi"]/a[@class="nextpostslink"]/@href').get()
        # if nextPage:
        #     yield scrapy.Request(url=nextPage, callback=self.parse)
