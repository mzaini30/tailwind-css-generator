import { generateCssString } from "../utils";
import defaultConfigOptions from "../config";

export default function generateShadow(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );

  const {
    prefix: globalPrefix,
    boxShadow,
    extendBoxShadow = {},
  } = configOptions;

  const prefix = `${globalPrefix}shadow`;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions, getCssFromColors }) => {
      let cssString = getCssByOptions(
        Object.assign(boxShadow, extendBoxShadow),
        (key, value) => {
          const k = key !== "default" ? `-${key}` : "";
          return `
          ${pseudoClass(`${prefix}${k}`)} {
            box-shadow: ${value};
          }
        `;
        }
      );
      cssString += getCssFromColors((colorName, htmlColor, rgbColor) => {
        let str = "";
        if (htmlColor !== "transparent") {
          str += `
            ${pseudoClass(`${prefix}-outline-${colorName}`)} {
              box-shadow: 0 0 0 3px rgba(${rgbColor}, 0.5) !important;
            }
          `;
        }
        return str;
      });
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
