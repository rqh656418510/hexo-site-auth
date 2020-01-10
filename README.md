#### 用途说明

根据 _config.yml 里的配置信息，生成站点校验所需的文件，支持百度站长、微信公众号、谷歌站长、谷歌广告、搜狗站长的站点校验。

#### 配置方法

``` yml
site_auth:
  baidu_path: 'xxxx.html'
  baidu_content: 'xxxx'
  weixin_path: 'xxxx.txt'
  weixin_content: 'xxxx'
  google_path: 'xxxx.html'
  google_content: 'xxxx'
  google_adsense_path: 'xxxx.txt'
  google_adsense_content: 'xxxx'
  sogou_path: 'xxxx.txt'
  sogou_content: 'xxxx'
```

#### 参数说明

- **xxx_path**： 文件路径
- **xxx_content**： 文件内容
