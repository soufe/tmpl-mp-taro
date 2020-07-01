# tmpl-mp-taro

## 简介
> taro小程序项目模版

## 环境
> **taro** => v2.2.5

> **node** => v12.16.3

## 技术栈
> 小程序 => [taro](https://nervjs.github.io/taro/docs/1.3.34/README.html) + [hooks](https://react.docschina.org/docs/hooks-intro.html) + [redux](http://cn.redux.js.org) +  [ts](https://typescript.bootcss.com)

## 约定
- `js/ts` 文件以小写字母命名，多个单词以下划线连接，例如 util.js、util_helper.ts
- `js/ts` 文件以 .js 或者 .ts 作为文件后缀
- `组件` 文件命名遵循 Pascal 命名法，例如 ReservationCard.jsx
- `组件` 文件以 .jsx 或者 .tsx 作为文件后缀
- `组件` 文件用 class 或者 hooks 写法均可
- `js/jsx/组件书写` 遵循 [taro规范](https://nervjs.github.io/taro/docs/spec-for-taro) 与 [最佳实践](https://nervjs.github.io/taro/docs/best-practice)
- `less属性声明顺序` 遵循 [AlloyTeam](https://alloyteam.github.io/CodeGuide/#css-declaration-order) 相关规范
- `静态资源` 主包放在assets下指定目录、分包放在分包下指定目录
- `引用资源` 统一使用目录别名
``` json
  "paths": {
    "@/actions/*": ["./src/actions/*"],
    "@/assets/*": ["./src/assets/*"],
    "@/components/*": ["./src/components/*"],
    "@/constants/*": ["./src/constants/*"],
    "@/egg/*": ["./src/egg/*"],
    "@/pages/*": ["./src/pages/*"],
    "@/reducers/*": ["./src/reducers/*"],
    "@/services/*": ["./src/services/*"],
    "@/store/*": ["./src/store/*"],
    "@/typings/*": ["./src/typings/*"],
    "@/utils/*": ["./src/utils/*"],
    "@/package": ["./package.json"],
    "@/project": ["./project.config.json"]
  }
```
- `图片大小` 25kb以下放在本地指定目录、以上放在oss/web/mp/db文件夹下
``` javascript
  import { oss } from '@/utils/oss'
  <Image src={oss('aa.png')}></Image>
```
- `状态管理` 全局变量 global、本地缓存 storage、社区方案 react-redux 均可
- `注释模版` 
``` javascript
/**
 * @desc: tmpl-mp-taro
 * @param {type} 
 * @return: v1.0.0
 * @author: Frank
 */
```

## 代码分包

> 主包 `[pages]`
- 首页 => index => `Frank`
  
> 分包 `[egg]`
- 示例 => egg => `Frank`         
  
## 项目目录
```
├── README.md
├── config
│   ├── dev.js
│   ├── index.js
│   └── prod.js
├── global.d.ts
├── jsconfig.json
├── package.json
├── project.config.json
├── src
│   ├── actions
│   │   └── counter.ts
│   ├── app.less
│   ├── app.tsx
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── styles
│   │       └── index.module.less
│   ├── components
│   ├── constants
│   │   └── counter.ts
│   ├── egg
│   │   ├── images
│   │   └── pages
│   │       └── egg
│   │           ├── index.less
│   │           └── index.tsx
│   ├── index.html
│   ├── pages
│   │   ├── hooks
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   └── index
│   │       ├── index.less
│   │       └── index.tsx
│   ├── reducers
│   │   ├── counter.ts
│   │   └── index.ts
│   ├── services
│   │   ├── api
│   │   │   └── eg.ts
│   │   ├── http.ts
│   │   └── request.ts
│   ├── store
│   │   └── index.ts
│   ├── typings
│   └── utils
│       ├── global.ts
│       ├── oss.ts
│       ├── storage.ts
│       └── system.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```
## 微信小程序
```
# yarn
$ yarn dev:weapp
$ yarn build:weapp
# npm script
$ npm run dev:weapp
$ npm run build:weap
```

## 支付宝小程序
```
# yarn
$ yarn dev:alipay
$ yarn build:alipay
# npm script
$ npm run dev:alipay
$ npm run build:alipay
```

## License
```
The MIT License (MIT)

Copyright (c) 2019 SouFe

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```