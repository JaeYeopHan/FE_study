const babel = require("babel-core");

module.exports = function(source) {
    const result = babel.transform(source, {
        presets: ["env"]
    });

    return result.code;
}