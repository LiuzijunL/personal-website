# my-blog
个人网站模板

# 项目采用技术

vue2 + axios + less + vue-router + vuex

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vscode eslint配置
{
    "workbench.iconTheme": "vscode-icons",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    "eslint.validate": [
        "javascript",
        "vue",
        "html"
    ],
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            // 格式化加分号
            "semi": true,
            // 格式化为单引号
            "singleQuote": true
        }
    },
    "vetur.format.options.tabSize": 4,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true
}