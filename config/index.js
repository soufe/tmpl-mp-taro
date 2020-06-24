import { resolve } from 'path'

const config = {
  projectName: 'mp-multi-db',
  date: '2020-5-25',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      ['env', {
        modules: false
      }]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        'helpers': false,
        'polyfill': false,
        'regenerator': true,
        'moduleName': 'babel-runtime'
      }]
    ]
  },
  plugins: [],
  defineConstants: {
  },
  alias: {
    '@/actions': resolve(__dirname, '..', 'src/actions'),
    '@/assets': resolve(__dirname, '..', 'src/assets'),
    '@/components': resolve(__dirname, '..', 'src/components'),
    '@/constants': resolve(__dirname, '..', 'src/constants'),
    "@/egg": resolve(__dirname, '..', 'src/egg'),
    "@/pages": resolve(__dirname, '..', 'src/pages'),
    '@/reducers': resolve(__dirname, '..', 'src/reducers'),
    '@/services': resolve(__dirname, '..', 'src/services'),
    '@/store': resolve(__dirname, '..', 'src/store'),
    "@/typings": resolve(__dirname, '..', 'src/typings'),
    '@/utils': resolve(__dirname, '..', 'src/utils'),
    '@/package': resolve(__dirname, '..', 'package.json'),
    '@/project': resolve(__dirname, '..', '/project.config.json')
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
