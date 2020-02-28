module.exports = {
  // La propiedad `entry` le dice a webpack donde empieza la aplicación. Webpack va a empezar a construir este archivo y todos los subsiguientes que sean importados por este mismo.
entry: './react/index.js',
  // El `output` especifica dónde va a alojarse el resultado de webpack. En este caso, hemos determinado que deberá ponerlo en un archivo llamado `bundle.js` en el directorio `public`
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  // El `context` setea el contexto para paths relativos
  context: __dirname,
  // Genera un error stack en base a nuestros archivos y no al bundle (que sería inentendible)
  devtool: 'source-map',
  // Aquí le ordenamos que resuelva los archivos que tienen extensiones .js y .jsx sin necesidad de aclarar la extensión para que podamos hacer:
  // var Main = require('./Main') en archivos jsx también
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Aquí es donde especificamos qué tipo de sintaxis especial debe buscar Webpack.
  module: {
    // Las rules son módulos especiales que hemos instalado que saben cómo parsear cierta sintaxis.
    // Hay rules para todo tipo de sintaxis
    rules: [
      {
        // Aquí testeamos si algún archivo termina con la extensión .js o .jsx
        // Solo serán parseados por el loader los archivos que coincidan con este criterio.
        test: /jsx?$/,
        // Queremos que Webpack ignore cualquier cosa en el directorio node_modules o bower_components.
        // Esto es muy importante: los módulos deben construir sus propios archivos js.
        exclude: /(node_modules|bower_components)/,
        // Estamos usando el módulo babel-loader para leer los archivos.  Puede manejar tanto ES6 como JSX.
        loader: 'babel-loader',
        // Aquí le decimos a Webpack que busque por cualquier sintaxis de ES6 y JSX.
        //Si la encuentra, el babel-loader va a transpilarlo.
        query: {
          presets: [
            "@babel/preset-react",
            "@babel/env"
          ]
        }
      }
    ]
  }
};