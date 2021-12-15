
## 线上访问地址：https://jack-zhang-coming.github.io/rap-to-ts/


## 源码安装与二次开发

源码github仓库：https://github.com/JACK-ZHANG-coming/rap-to-ts

把项目拉取到本地，然后运行以下命令

### `npm install`

安装项目依赖

### `npm start`

运行项目

---

## 使用说明

<img src="https://raw.githubusercontent.com/JACK-ZHANG-coming/map-depot/master/image-20211203161449467.png">

## 🤪 What is it?

> 本工具是为了解决咱们前端在联调rap接口管理平台文档时，需要完成`xxx.d.ts`这样的文件**ts接口**的代码抒写，要重复复制粘贴好多次接口文档里面的属性名的问题。 本工具追求的是一次性全复制，一键生成想要的代码。



## 🍳 How to use?

**以 情指勤督宣项目中 实时警情检测-警情处置接口文档为例：**

http://rap2.taobao.org/organization/repository/editor?id=288614&mod=477198&itf=2078459

### 1 点击导出json文件

![image-20211203170333052](https://raw.githubusercontent.com/JACK-ZHANG-coming/map-depot/master/image-20211203170333052.png)

### 2 打开这个文件，复制所有内容

> 我这里是直接把这个文件拖拽到浏览器上面，然后就自动显示了，之后我直接把文件里面的所有内容复制

#### 2.1 打开文件

![image-20211203171452271](https://raw.githubusercontent.com/JACK-ZHANG-coming/map-depot/master/image-20211203171452271.png)

#### 2.2 复制里面所有内容 

> ctrl+a , ctrl+c，复制所有内容

![image-20211203171507234](https://raw.githubusercontent.com/JACK-ZHANG-coming/map-depot/master/image-20211203171507234.png)



### 3 将复制的json内容放入 本工具 的 【转换前rap导出的json内容:】这一栏：

![image-20211203172403979](https://raw.githubusercontent.com/JACK-ZHANG-coming/map-depot/master/image-20211203172403979.png)

### 4 根据所需，导出对应的ts格式

![image-20211203172824281](https://raw.githubusercontent.com/JACK-ZHANG-coming/map-depot/master/image-20211203172824281.png)

### 5 直接将导出的内容全部复制到开发的代码中即可使用

![image-20211203173010651](https://raw.githubusercontent.com/JACK-ZHANG-coming/map-depot/master/image-20211203173010651.png)



## Other

本工具目前仅支持String、Number、Boolean基础类型的ts格式直接转换，如果是Array、Object类型转换的则为any类型，可根据自己所需进一步更改，欢迎Issuse与Pull requests 。
