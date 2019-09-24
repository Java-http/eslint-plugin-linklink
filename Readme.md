## 自定义eslint规则

### 安装

```
npm i eslint-plugin-linklink --save-dev
```

or

```
yarn add eslint-plugin-linklink --dev
```

### `.eslintrc` 配置

```
{
  "plugins": ["linklink"],
  "rules": {
    "linklink/no-lowercase-label": [2, ["view"]]
  }
}
```
#### linklink/no-lowercase-label 规则说明

`"linklink/no-lowercase-label": [2, [options]]`

禁止小写字母标签,`JSX`标签开头字母改为大写,第二个参数`options`为数组,里面输入自定义标签

### 效果

![https://note.youdao.com/yws/public/resource/565454abfd1721a33baa37b4d6379ee1/xmlnote/ADBA4CF268214651924D445CDDEA8408/14964](https://i.loli.net/2019/09/24/vBmbakslLKA9tSC.gif)