export const getCompetitorId = (filename: string): string => {
  // Handle special cases first
  if (filename.includes('netsuite-vs-quickbooks')) {
    return 'netsuite';
  }
  
  // Extract competitor name from standard format
  const match = filename.match(/topnotchsolutions-vs-(.+)\.tsx$/);
  if (match) {
    return match[1].replace(/-/g, '_');
  }
  
  throw new Error(`Unable to extract competitor ID from filename: ${filename}`);
};
