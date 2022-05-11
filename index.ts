import {
  Album,
  Category,
  YoutubeMoosick,
} from 'youtube-moosick';

export async function queryByBarcode(barcode: string): Promise<Album> {
  const ytms = await YoutubeMoosick.new();
  const response = await ytms.search(barcode, Category.ALBUM);

  return response[0];
}

export async function getReleaseLinkByBarcode(
  barcode: string
): Promise<string> {
  const response = await queryByBarcode(barcode);
  return response.url;
}

