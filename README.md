# weather-now
Projeto desenvolvido com as tecnologias Vue, Vuex, Jest e Sass.

## Setup
Instale as dependências:
```
yarn install
```

Adicione um arquivo .env.local com uma api key do [OWM](https://openweathermap.org/)
```
VUE_APP_WEATHER_URL="http://api.openweathermap.org/data/2.5/"
VUE_APP_WEATHER_KEY="{API_KEY}"
```

### Para rodar os testes do Jest
```
yarn test
```

## Definições
O app foi desenvolvido com Vue.js em sua versão 2.6 com o setup padrão do vue-cli 4.0.

## CSS

A aplicação não faz uso de nenhum framework css, apenas do padrão de escrita BEM e o pré processador SCSS.

### Scss

O [Sass](https://sass-lang.com/) foi escolhido como extensão do css em seu formato Scss.
Todos os estilos foram criados em seus respectivos componentes como "scoped".
O padrão de escrita escolhido foi o [BEM](http://getbem.com/introduction/).
Ex:

```html
<style lang="scss" scoped>
  .BaseLogo {
    &__img {
      width: 100%;
    }
  }
</style>
```

### Atomic Design

A aplicação segue o padrão de [design atómico](http://atomicdesign.bradfrost.com/) na criação dos componentes.

Átomos tem como prefixo 'Base', organismos 'The' (por serem únicos) e moléculas não possuem prefixos.

### Nomenclatura

Nomes de componentes foram criados com `PascalCase`. Ex: `BaseLogo.vue`.
Nomes de funções com `camelCase`. Ex: `getCitiesWeather()`.
Attributos com `kebab-case`. Ex: `:has-error="hasError"`.