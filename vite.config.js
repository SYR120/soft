import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'front',
  publicDir: 'public',
  base: './',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'front/index.html'),
        login: resolve(__dirname, 'front/login.html'),
        join:  resolve(__dirname, 'front/join.html'),
        profile: resolve(__dirname, 'front/profile.html'),
        findmyid: resolve(__dirname, 'front/findmyid.html'),
        findmypw: resolve(__dirname, 'front/findmypw.html'),
        projectboard: resolve(__dirname, 'front/projectboard.html'),
        projectmanage: resolve(__dirname, 'front/projectmanage.html'),
        projectlist: resolve(__dirname, 'front/projectlist.html'),
        worklist: resolve(__dirname, 'front/worklist.html'),
        writework: resolve(__dirname, 'front/writework.html'),
        approot: resolve(__dirname, 'front/approot.js'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: assetInfo => {
          const file = assetInfo.fileName ?? assetInfo.name ?? '';
          if (/\.(png|jpe?g|svg|gif)$/.test(file)) {
            return 'icon/[name][extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  },
  
  plugins: [
    {
      name: 'inject-approot-script',
      transformIndexHtml(html) {
        return html.replace(
          /<\/body>/,
          `  <script type="module" src="approot.js"></script>\n</body>`
        );
      }
    }
  ]

  // plugins: [
  //   viteStaticCopy({
  //     targets: [
  //       { src: 'front/public/css',  dest: '' },  
  //       { src: 'front/public/icon', dest: '' }
  //     ]
  //   })
  // ]
});