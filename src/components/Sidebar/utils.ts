export function getInfoCount(itemLabelInfo?: string) {
  const labelInfo = itemLabelInfo || '';
  const infoCount = parseInt(labelInfo.replace(',', '') || '0', 10);
  return infoCount;
}
