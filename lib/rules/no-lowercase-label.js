module.exports = {
  meta: {
    fixable: "code"
  },

  create(context) {
    function convert(str, reg) {
      let patt = new RegExp(`(<\/?\\s*)${reg}([^>]*>)`, "g");
      return str.replace(
        patt,
        `$1${reg.charAt(0).toUpperCase() + reg.slice(1)}$2`
      );
    }

    return {
      JSXElement(node) {
        const sourceCode = context.getSourceCode();
        const params = context.options[0] || []; // 获取参数

        const re = params.find(item => item === node.openingElement.name.name);

        if (re) {
          context.report({
            node,
            message: "该标签首字母须大写",
            fix: function(fixer) {
              return fixer.replaceText(
                node,
                convert(sourceCode.getText(node), re)
              );
            }
          });
          return;
        }
      }
    };
  }
};
