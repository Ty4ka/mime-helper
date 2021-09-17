import path from 'path'

// https://developer.mozilla.org/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_typess
export const mimeTypes = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  csv: 'text/csv',
  xml: 'text/xml',
  // php: 'text/html',

  js: 'application/javascript',
  json: 'application/json',
  webmanifest: 'application/json',
  map: 'application/json',

  pdf: 'application/pdf',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

  gif: 'image/gif',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  webp: 'image/webp',
  bmp: 'image/bmp',
  avif: 'image/avif',

  webm: 'video/webm',
  mpeg: 'video/mpeg',
  mp4: 'video/mp4',
  avi: 'video/x-msvideo',

  mp3: 'audio/mpeg',
  weba: 'audio/webm',
  wav: 'audio/mpeg',

  zip: 'application/octet-stream',
  rar: 'application/vnd.rar',
  '7z': 'application/x-7z-compressed',

  woff: 'font/woff',
  woff2: 'font/woff2',
  eot: 'font/eot',
  ttf: 'font/ttf',
  otf: 'font/otf'
}

export const directTypes = [
  mimeTypes.mp3,
  mimeTypes.wav,

  mimeTypes.zip,
  mimeTypes['7z'],
  mimeTypes.rar,

  mimeTypes.avi,
  mimeTypes.mpeg,
  mimeTypes.webm,
  mimeTypes.mp4,

  mimeTypes.pdf,
  mimeTypes.svg
]

export const isBufferContentType = function (contentType: string) {
  return [
    mimeTypes.jpeg,
    mimeTypes.gif,
    mimeTypes.jpg,
    mimeTypes.png,
    mimeTypes.bmp,
    mimeTypes.avif,
    mimeTypes.webp
  ].some((t) => t === contentType)
}

export function url2filepath(filepath: string) {
  return filepath.split('?')[0].split('#')[0].split('__ask__')[0]
}
export const getExt = (url: string) => {
  return (url && path.extname(url2filepath(url)).slice(1)) || ''
}

export const getMimeInfo = function (originalUrl: string, accept?: string, reqContentType?: string) {
  const ext = getExt(originalUrl)
  const acceptMime = accept?.split(',')[0]
  const currentMime: any = (mimeTypes as any)[ext] || acceptMime
  const contentType = currentMime || reqContentType || acceptMime || 'text/html'

  return { ext, acceptMime, currentMime, contentType }
}
