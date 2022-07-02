// gulpプラグインを読み込みます
const { src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass")(require("sass"));

const compileSass = () =>
  src("src/css/style.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(dest("src/css"));

const watchSassFiles = () => watch("src/css/style.scss", compileSass);

exports.default = watchSassFiles;
