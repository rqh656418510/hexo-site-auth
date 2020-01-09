'use strict';

var files = [];
var fs = require('fs');
var config = hexo.config;
var path = require('path');
var log = require('hexo-log')({name: 'hexo-site-auth', debug: false});

// WeiXin GongZhongHao
var weixin_path =  config.site_auth.weixin_path;
var weixin_content = config.site_auth.weixin_content;

// BaiDu ZhanZhang
var baidu_path = config.site_auth.baidu_path;
var baidu_content = config.site_auth.baidu_content;

// Google ZhanZhang
var google_path = config.site_auth.google_path;
var google_content = config.site_auth.google_content;

// Google Adsense
var google_adsense_path = config.site_auth.google_adsense_path;
var google_adsense_content = config.site_auth.google_adsense_content;

// SoGou ZhanZhang
var sogou_path = config.site_auth.sogou_path;
var sogou_content = config.site_auth.sogou_content;

if (config.site_auth) {

  if(weixin_path && weixin_content){
    files.push({
      path: weixin_path,
      data: weixin_content
    });
  }

  if (baidu_path && baidu_content) {
    files.push({
      path: baidu_path,
      data: baidu_content
    });
  }

  if (google_path && google_content) {
    files.push({
      path: google_path,
      data: google_content
    });
  }

  if (google_adsense_path && google_adsense_content) {
    files.push({
      path: google_adsense_path,
      data: google_adsense_content
    });
  }

  if(sogou_path && sogou_content){
    files.push({
      path: sogou_path,
      data: sogou_content
    });
  }

  if (files.length > 0) {
    log.info('generate site auth file');

    hexo.extend.generator.register('site-auth-generator', function(locals) {
      return files;
    });
  }

}
