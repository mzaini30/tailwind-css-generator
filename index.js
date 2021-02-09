export { default as generateAlign } from "./generators/align";
export { default as generateBase } from "./generators/base";
export { default as generateBg } from "./generators/bg";
export { default as generateBorder } from "./generators/border";
export { default as generateBox } from "./generators/box";
export { default as generateClear } from "./generators/clear";
export { default as generateContainer } from "./generators/container";
export { default as generateDisplay } from "./generators/display";
export { default as generateDivide } from "./generators/divide";
export { default as generateFlex } from "./generators/flex";
export { default as generateFloat } from "./generators/float";
export { default as generateForm } from "./generators/form";
export { default as generateGradient } from "./generators/gradient";
export { default as generateGrid } from "./generators/grid";
export { default as generateHeight } from "./generators/height";
export { default as generateInteractivity } from "./generators/interactivity";
export { default as generateJustify } from "./generators/justify";
export { default as generateLeading } from "./generators/leading";
export { default as generateList } from "./generators/list";
export { default as generateMargin } from "./generators/margin";
export { default as generateObject } from "./generators/object";
export { default as generateOpacity } from "./generators/opacity";
export { default as generateOverflow } from "./generators/overflow";
export { default as generateOverscroll } from "./generators/overscroll";
export { default as generatePadding } from "./generators/padding";
export { default as generatePlace } from "./generators/place";
export { default as generatePlaceholder } from "./generators/placeholder";
export { default as generatePosition } from "./generators/position";
export { default as generateShadow } from "./generators/shadow";
export { default as generateSpace } from "./generators/space";
export { default as generateSvg } from "./generators/svg";
export { default as generateTable } from "./generators/table";
export { default as generateText } from "./generators/text";
export { default as generateTracking } from "./generators/tracking";
export { default as generateTransform } from "./generators/transform";
export { default as generateVisibility } from "./generators/visibility";
export { default as generateWidth } from "./generators/width";
export { default as generateZIndex } from "./generators/zindex";

export default function generateAll(options) {
  let cssString = "";
  cssString += generateBase();
  cssString += generateForm(options);
  cssString += generateAlign(options);
  cssString += generateBg(options);
  cssString += generateBorder(options);
  cssString += generateBox(options);
  cssString += generateClear(options);
  cssString += generateContainer(options);
  cssString += generateDisplay(options);
  cssString += generateDivide(options);
  cssString += generateFlex(options);
  cssString += generateFloat(options);
  cssString += generateGradient(options);
  cssString += generateGrid(options);
  cssString += generateHeight(options);
  cssString += generateInteractivity(options);
  cssString += generateJustify(options);
  cssString += generateLeading(options);
  cssString += generateList(options);
  cssString += generateMargin(options);
  cssString += generateObject(options);
  cssString += generateOpacity(options);
  cssString += generateOverflow(options);
  cssString += generateOverscroll(options);
  cssString += generatePadding(options);
  cssString += generatePlace(options);
  cssString += generatePlaceholder(options);
  cssString += generatePosition(options);
  cssString += generateShadow(options);
  cssString += generateSpace(options);
  cssString += generateSvg(options);
  cssString += generateTable(options);
  cssString += generateText(options);
  cssString += generateTracking(options);
  cssString += generateTransform(options);
  cssString += generateVisibility(options);
  cssString += generateWidth(options);
  cssString += generateZIndex(options);

  return cssString;
}
