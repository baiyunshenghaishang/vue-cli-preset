### vue-cli 的 preset 配置

### preset

```json
{
  "useConfigFiles": true,
  "useTaobaoRegistry": true,
  "router": true,
  "routerHistoryMode": false,
  "vuex": true,
  "cssPreprocessor": "sass",
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-eslint": {
      "config": "prettier",
      "lintOn": ["save", "commit"]
    }
  }
}
```

### prettier

增加了格式化文件

### browserlistsrc

修改了 browserlistsrc，主要是增加安卓和 ios,但是好像无法覆盖

### vue.config.js

配置自动打开浏览器
