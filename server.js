const request=require('request')
const cheerio = require('cheerio');
const iconv=require('iconv-lite');
let url = 'http://www.xbiquge.la/xiaoshuodaquan/';
/*
  乱码处理：
  https://www.cnblogs.com/imwtr/p/4613967.html
*/
request({
    url: url,
    method: 'get',
    gzip:true
  }, (err, res, body) => {
      // 这样就可以直接获取请求回来html了
      let html=body.toString()
      let $=cheerio.load(html)
      $('.novellist ul li a').each(function(i){
        console.log('书名',$(this).text()+",地址"+$(this).attr('href'));
      })
    }
  );
  