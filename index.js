'use strict';

var fs = require('fs');
var path = require('path');
var log = require('hexo-log')({name: 'hexo-site-auth', debug: false});

var files = [];
var config = hexo.config;
var site_auth = config.site_auth;

if (!site_auth) {
  return;
}

// WeiXin GongZhongHao
var weixin_path =  site_auth.weixin_path;
var weixin_content = site_auth.weixin_content;

// BaiDu ZhanZhang
var baidu_path = site_auth.baidu_path;
var baidu_content = site_auth.baidu_content;

// Google ZhanZhang
var google_path = site_auth.google_path;
var google_content = site_auth.google_content;

// Google Adsense
var google_adsense_path = site_auth.google_adsense_path;
var google_adsense_content = site_auth.google_adsense_content;

// SoGou ZhanZhang
var sogou_path = site_auth.sogou_path;
var sogou_content = site_auth.sogou_content;

// Bing ZhanZhang
var bing_path = site_auth.bing_path;
var bing_content = site_auth.bing_content;

// Bing Adsense
var bing_adsense_path = site_auth.bing_adsense_path;
var bing_adsense_content = site_auth.bing_adsense_content;

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

if (bing_path && bing_content) {
  files.push({
    path: bing_path,
    data: bing_content
  });
}

if (bing_adsense_path && bing_adsense_content) {
  files.push({
    path: bing_adsense_path,
    data: bing_adsense_content
  });
}

if (files.length > 0) {
  log.info('generate site auth file');

  hexo.extend.generator.register('site-auth-generator', function(locals) {
    return files;
  });
}
