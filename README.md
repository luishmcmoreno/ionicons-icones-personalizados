# Configurando Ionicons Personalizados em um projeto Ionic

Segue abaixo as instruções utilizadas para customizar ícones no Ionic. 

[Veja a vídeoaula:](https://youtu.be/J0ATc8bG9Tk)

## Prérequisitos 

ruby, python, fontforge, ttfautohint, sass, svgo, woff-tools, brotli, woff2


## Iniciando o projeto

$ ionic start ionicons-example tabs
$ wget https://github.com/ionic-team/ionicons/archive/3.0.zip
$ unzip 3.0.zip
$ rm 3.0.zip
$ npm uninstall --save ionicons

## Incluíndo os ícones

Incluir os ícones na pasta ``./ionicons-3.0/src``. Lembrando que deverá ser incluso os ícones na versão android (material design), com prefixo ``md-`` e iOS, com prefixo ``ios-``. A versão iOS também pode ser incluído os ícones na versão outline, com o sufixo ``-outline``. Há também os ícones do tipo logo, que possuem o prefixo ``logo-``.

### Gerando os ícones

Após incluí-los na pasta indicada, basta executar, na pasta ``./ionicons-3.0`` o seguinte comando: ``python ./builder/generate.py``.

## Alterando as configurações 

Para usar os novos ícones gerados é preciso sobreescrever duas configurações do ``@ionic/app-scripts``. Um deles será no ``ionic_sass`` e o outro no ``ionic_copy``. Será preciso criar uma pasta na raiz do projeto ``config/`` com dois arquivos, ``./config/ionic_sass.js`` ``./config/ionic_copy.js``.

O arquivo de configuração ``ionic_sass`` precisa indicar para o sass onde importar o ionicons. Já o arquivo ``ionic_copy`` precisa indicar para o webpack copiar os arquivos de fontes para a pasta de destino quando o projeto for compilado.

Segue abaixo a configuração dos arquivos.

### ionic_copy
``` javascript
var copyDefaultConfig = require('@ionic/app-scripts/config/copy.config.js');

copyDefaultConfig.copyFonts.src = ['{{ROOT}}/node_modules/ionic-angular/fonts/**/*', '{{ROOT}}/ionicons-3.0/dist/fonts/**/*'];

module.exports = function () {
  return copyDefaultConfig;
};
```

### ionic_sass


``` javascript
var copyDefaultConfig = require('@ionic/app-scripts/config/sass.config.js');

copyDefaultConfig.includePaths.push('ionicons-3.0/dist/scss');

module.exports = function () {
  return copyDefaultConfig;
};
```

### Setando as configurações para os arquivos criado

Criado os arquivos é preciso dizer ao @ionic/app-scripts onde ele encontrará os novos arquivos de configuração. Para fazer isso basta adicionar as seguintes instruções no arquivo ``package.json`` em qualquer linha na raiz do objeto.

```json
  "config": {
    "ionic_copy": "./config/ionic_copy.js",
    "ionic_sass": "./config/ionic_sass.js"
  },
```

## Utilizando os ícones

Feito isso, basta incluir os novos ícones utilizando os padrões que já conhecemos

``` html
<ion-icon name="NOME_DO_NOVO_ÍCONE"></ion-icon>
```

