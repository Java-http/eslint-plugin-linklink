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

### 效果

![https://note.youdao.com/yws/public/resource/565454abfd1721a33baa37b4d6379ee1/xmlnote/ADBA4CF268214651924D445CDDEA8408/14964](https://i.loli.net/2019/09/24/vBmbakslLKA9tSC.gif)