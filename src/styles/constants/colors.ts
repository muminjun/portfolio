// colors.ts
type ColorRecord = Record<string, string>;

function getColorConstantRecord(...args: [string, string][]): ColorRecord {
  const record: ColorRecord = {};
  args.forEach(([label, value]) => {
    record[label] = value;
  });
  return record;
}

const colors = {
  INHERIT: 'inherit',
  CURRENT: 'currentColor',
  TRANSPARENT: 'transparent',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GRAY: getColorConstantRecord(
    ['10', '#F6F6F6'],
    ['20', '#EEEEEE'],
    ['30', '#E5E5E5'],
    ['40', '#D3D3D3'],
    ['50', '#AAAAAA'],
    ['60', '#888888'],
    ['70', '#666666'],
    ['80', '#333333'],
    ['90', '#191919']
  ),
  YELLOW: getColorConstantRecord(
    ['5', '#FFFDE5'],
    ['5-35', '#FFFDE559'], // opacity 35%
    ['10', '#FFF8BF'],
    ['20', '#FFF394'],
    ['30', '#FFEF67'],
    ['40', '#FEEA3F'],
    ['50', '#FFE329'],
    ['60', '#FFD500'],
    ['70', '#FEBC00'],
    ['80', '#FEA200'],
    ['90', '#FC7600']
  ),
  BLUE: getColorConstantRecord(
    ['5', '#EDF0FF'],
    ['10', '#DCE1FF'],
    ['20', '#A7B5FF'],
    ['30', '#8397FF'],
    ['40', '#4F6BFF'],
    ['50', '#3E58F0'],
    ['60', '#314CE7'],
    ['70', '#2841D5'],
    ['80', '#2038C1'],
    ['90', '#13258F']
  ),
  RED: getColorConstantRecord(
    ['5', '#FCE8E6'],
    ['10', '#FABAB3'],
    ['20', '#F5948A'],
    ['30', '#ED6D5E'],
    ['40', '#EB5847'],
    ['50', '#E64937'],
    ['60', '#D93826'],
    ['70', '#C93221'],
    ['80', '#BA2C1C'],
    ['90', '#AB2617'],
    ['100', '#942114']
  ),
  GREEN: getColorConstantRecord(
    ['5', '#E4F9F5'],
    ['10', '#CCF4EA'],
    ['20', '#99E9D5'],
    ['30', '#66DDC0'],
    ['40', '#00C797'],
    ['50', '#00B78B'],
    ['60', '#009E78'],
    ['70', '#007E60'],
    ['80', '#00634B'],
    ['90', '#004D3A']
  ),
} as const;

export default colors;
