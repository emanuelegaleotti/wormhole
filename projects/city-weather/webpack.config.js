const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const mf = require('@angular-architects/module-federation/webpack')
const path = require('path')
const share = mf.share

const sharedMappings = new mf.SharedMappings()
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */])

module.exports = {
  output: {
    uniqueName: 'cityWeather',
    publicPath: 'auto',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases()
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'var', name: 'cityWeather' },

      // For remotes (please adjust)
      name: 'cityWeather',
      filename: 'cityWeatherEntry.js',
      exposes: {
        './Component': './projects/city-weather/src/app/feature/city-weather/city-weather.component.ts'
      },

      // For hosts (please adjust)
      // remotes: {
      //     "wormhole": "http://localhost:4200/remoteEntry.js",
      //     "vehicles": "http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ]
}
