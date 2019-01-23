module.exports = {
    devServer: {
      proxy:{
          '/api':{
              target:'https://news-at.zhihu.com/api/',
              ws:true,
              changeOrigin:true,
              pathRewrite:{
                '/api':''
              }
          },
          '/image':{
            target:' https://zhimg.com/',
            ws:true,
            changeOrigin:true,
            pathRewrite:{
              '/image':''
            }
        }
      }
    }
  }