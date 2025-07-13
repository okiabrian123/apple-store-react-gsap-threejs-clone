// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backdropBlur: theme => theme('blur'),
      backdropBrightness: theme => theme('brightness'),
      backdropContrast: theme => theme('contrast'),
      backdropGrayscale: theme => theme('grayscale'),
      backdropHueRotate: theme => theme('hueRotate'),
      backdropInvert: theme => theme('invert'),
      backdropOpacity: theme => theme('opacity'),
      backdropSaturate: theme => theme('saturate'),
      backdropSepia: theme => theme('sepia'),
    },
  },
  plugins: [],
}