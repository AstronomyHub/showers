# 流星雨轨道3D可视化项目

这个项目呈现太阳系中的流星体碎片云。当地球穿过碎片云层时，我们会经历一场流星雨！

# 关于

项目英文线上版本：https://www.meteorshowers.org/.  

项目中文线上版本：https://ms.darkmap.cn/

数据来源： [NASA CAMS](http://cams.seti.org/), 项目负责人：Peter Jenniskens.

基于 [Asterank](http://github.com/typpo/asterank)修改的3D代码, 其余代码由Ian Webster完成，天文通针对中国进行了本地化改版。

![](http://i.imgur.com/muPvVzt.jpg)

# 初始化 & 使用

`npm install` 或 `yarn install` 安装依赖

执行 `node showers.js` 启动应用于端口 8988 (http://localhost:8988/)

A very rudimentary JS bundle is used to prepare the app for production.  

执行`./build.sh` 将生成一个新的 bundle 文件。  

Add this file to git and update the bundle in index.html.

# 版权

Copyright 2017 Ian Webster - MIT License

# 天文通服务器更新方式

cd /opt/webapps/

cd showers/

git pull

forever restartall
