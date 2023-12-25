import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoader(isDev);

    /* const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }; */

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxBabelLoader,
        /*         typescriptLoader, */
        cssLoader,
    ];
}
