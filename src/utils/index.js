/*Components*/
import {Dimensions} from "react-native";

/*get device windows height and width*/
export const {width, height} = Dimensions.get('window');
/*real width if device orientation changed*/
export const realWidth = height > width ? width : height;

/*font sizes*/
const fontBaseXXSmall = 10;
const fontBaseXSmall = 12;
const fontBaseSmall = 14;
const fontBaseNormal = 16;
const fontBaseLarge = 18;
const fontBaseXLarge = 20;
const fontBaseXXLarge = 22;
const fontBaseXXXLarge = 28;

/*get relative height,width and font-size for responsiveness*/
export const relativeWidth = num => Math.ceil((width * num) / 100);
export const relativeHeight = num => Math.ceil((height * num) / 100);
export const responsiveFontSize = (fontSize) => {
    return Math.round(fontSize * realWidth / 375);
};

const fontXXSmall = responsiveFontSize(fontBaseXXSmall);
const fontXSmall = responsiveFontSize(fontBaseXSmall);
const fontSmall = responsiveFontSize(fontBaseSmall);
const fontNormal = responsiveFontSize(fontBaseNormal);
const fontLarge = responsiveFontSize(fontBaseLarge);
const fontXLarge = responsiveFontSize(fontBaseXLarge);
const fontXXLarge = responsiveFontSize(fontBaseXXLarge);
const fontXXXLarge = responsiveFontSize(fontBaseXXXLarge);

export const FontSize = {
    fontNormal,
    fontXSmall,
    fontXXSmall,
    fontSmall,
    fontLarge,
    fontXLarge,
    fontXXLarge,
    fontXXXLarge
};