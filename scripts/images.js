/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const output = "../public/img/";
const input = "../images/";

!fs.existsSync(output) && fs.mkdirSync(output);

const webpQuality = { quality: 64, reductionEffort: 0 };
const avifQuality = { quality: 51, effort: 0, chromaSubsampling: "4:2:0" };
const sizes = [768, 384];

fs.readdir(input, (err, files) => {
  console.log(`✅ Found ${files.length} image. Converting now..`);
  files.forEach((file) => {
    const fileShort = path.parse(file).name;
    const convert = (format, quality, size) => {
      sharp(input + file)
        .toFormat(format, quality)
        .resize({ width: size })
        .toFile(`${output}${fileShort}-${size}.${format}`);
    };
    sizes.forEach((size) => {
      convert("webp", webpQuality, size);
      convert("avif", avifQuality, size);
    });
  });
});
