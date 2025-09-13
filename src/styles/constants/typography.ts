import FONT_SIZES from './fontSizes';
import FONT_WEIGHTS from './fontWeights';
import LETTER_SPACINGS from './letterSpacings';
import LINE_HEIGHTS from './lineHeights';

export interface TextStyle {
  fontSize?: string;
  fontWeight?: number;
  letterSpacing?: string;
  lineHeight?: string;
}

const TEXT_STYLES: Record<string, TextStyle> = {
  headingLarge: {
    fontSize: FONT_SIZES.XXX_LARGE,
    fontWeight: FONT_WEIGHTS.HEAVY,
    letterSpacing: LETTER_SPACINGS.NORMAL,
    lineHeight: LINE_HEIGHTS.XXX_LARGE,
  },
  headingMedium: {
    fontSize: FONT_SIZES.XX_LARGE,
    fontWeight: FONT_WEIGHTS.BOLD,
    letterSpacing: LETTER_SPACINGS.TIGHT,
    lineHeight: LINE_HEIGHTS.XX_LARGE,
  },
  headingSmall: {
    fontSize: FONT_SIZES.X_LARGE,
    fontWeight: FONT_WEIGHTS.SEMI_BOLD,
    letterSpacing: LETTER_SPACINGS.TIGHT,
    lineHeight: LINE_HEIGHTS.X_LARGE,
  },
  bodyLarge: {
    fontSize: FONT_SIZES.MEDIUM_LARGE,
    fontWeight: FONT_WEIGHTS.REGULAR,
    letterSpacing: LETTER_SPACINGS.NORMAL,
    lineHeight: LINE_HEIGHTS.MEDIUM_LARGE,
  },
  bodyMedium: {
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: FONT_WEIGHTS.REGULAR,
    letterSpacing: LETTER_SPACINGS.NORMAL,
    lineHeight: LINE_HEIGHTS.MEDIUM,
  },
  bodySmall: {
    fontSize: FONT_SIZES.SMALL,
    fontWeight: FONT_WEIGHTS.LIGHT,
    letterSpacing: LETTER_SPACINGS.TIGHTER,
    lineHeight: LINE_HEIGHTS.SMALL,
  },
  detailLarge: {
    fontSize: FONT_SIZES.MINI,
    fontWeight: FONT_WEIGHTS.LIGHT,
    letterSpacing: LETTER_SPACINGS.TIGHTER,
    lineHeight: LINE_HEIGHTS.MINI,
  },
  detailSmall: {
    fontSize: FONT_SIZES.X_MINI,
    fontWeight: FONT_WEIGHTS.MEDIUM,
    letterSpacing: LETTER_SPACINGS.TIGHTER,
    lineHeight: LINE_HEIGHTS.X_MINI,
  },
  label: {
    fontSize: FONT_SIZES.XX_MINI,
    fontWeight: FONT_WEIGHTS.REGULAR,
    letterSpacing: LETTER_SPACINGS.TIGHTER,
    lineHeight: LINE_HEIGHTS.XX_MINI,
  },
};

export default TEXT_STYLES;
