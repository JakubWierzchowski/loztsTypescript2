export function staticBlurDataUrl() {
  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'> 
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='4'></feGaussianBlur>
      </filter>
      <rect x='0' y='0' height='100%' width='100%' filter='url(#b)' fill='#426874' />
    </svg>
    `;
  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}
