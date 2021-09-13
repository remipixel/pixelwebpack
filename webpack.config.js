const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const EasySeo = require('webpack-easy-seo');

const seoInst = new EasySeo({
    // Application Title, which is shown in the tab bar.
    title: "Pixel Digital | Votre agence web de proximité au Guilvinec",
    // Application Description, which is shown in search engines and OpenGraph.
    description: "L'agence Pixel Digital est une agence web située au Guilvinec. Nous travaillons avec des outils Open Source, pour un site web et un branding de qualité. Choisissez Pixel Digital pour votre projet web en Pays Bigouden. Nous créons des sites internet à Guilvinec, Pont-l'Abbé, Bénodet, Combrit, Loctudy, L'Ile Tudy, Penmarch, Plomeur, Treffiagat, Saint-Guénolé...",
    // Your public url, which is used to create the correct links to your images.
    publicUrl: "https://pixeldigital.fr",
    // Your thumbnail image, which is used in OpenGraph
    imagePath: "./src/pixeldigital.png",
    // Your webpack build folder
    buildPath: "./dist",
    // Path in your build folder to your image.
    outputPath: "/assets/images/apercu.png"
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',


    plugins: [
        new HtmlWebpackPlugin({
            template: "./dist/index.html",
            //Favicon
            favicon: "./src/favicon.png",
            // Title
            title: seoInst.getTitle(),
            // Meta Tags 
            meta: seoInst.getMetaTags(),
        }),
        // seoInst as webpack plugin to create the thumbnail file after compilation.
        seoInst,
    ],


    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
};