1 - Criar estrutura de diretórios

2 - Configurar o Babel

    2.1 - babel-core => Core do babel
    2.2 - babel-preset-env => Preset para ambientes, qual ambiente vai rodar o código.
    2.3 - babel-cli => Cli do babel
    2.4 - babel-preset-react => Preset para react, dessa forma vai entender JSX
    2.5 - babel-loader => Integração entre o babel e o webpack.

3 - Rodar o comando babel

    3.1 yarn babel src/index.tsx -o dist/bundle.js
    3.2 arquivo de configuração do babel => babel.config.js


4 - Webpack - junta todos os arquivos jsx e css em um único arquivo
    Para não precisar importar o react em todos os arquivos utiliza a configuração abaixo

    ```['@babel/preset-react',{
        runtime: 'automatic'
        }]``
5 - O plugin html-webpack-plugin serve para não precisar referenciar no html o nome do bundle.js, 
mesmo vai fazer essa injeção no html.

6 - webpack-dev-server -> Para não precisar o rodar o comando yarn webpack toda vez vamos utilizar esse plugin

    yarn webpack serve

7 - Source map

8 - Ambientes no webpack

    como definir uma variavel de ambiente no webpack (linux ou mac)
        NODE_ENV=production yarn webpack

9 - O cross-env serve para declarar variáveis de ambiente no webpack no linux, windows e mac.

10 - Para carregar arquivos css tem que importar esses dois pacotes

        style-loader css-loader 

11 - Para instalar o sass  loader

    yarn add sass-loader node-sass

12 - Propriedades - props

13 - Estados - hook - imutabilidade

14 - fash refresh react -> altera o código e não resetar os estados dos componentes

    https://github.com/pmmmwh/react-refresh-webpack-plugin

15 - useState -> hook para estados
16 - useEffect -> hook para eventos

    //sem nenhuma variavel para observar ele roda somente uma vez
    //cuidado com efeitos circulares
    useEffect(() => {
        
    }, [])

17 - Typescript -> compila o código para javascript


    yarn add typescript -D
    yarn tsc --init
    yarn add @babel/preset-typescript -D
    yarn @types/react-dom -D
    


    Tem que alterar o arquivos: 
        tsconfig.json
        babel.config.js
        webpack.config.js


