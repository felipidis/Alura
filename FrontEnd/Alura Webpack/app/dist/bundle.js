/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/src/js/app.js":
/*!***************************!*\
  !*** ./app/src/js/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_negociacao_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/negociacao-controller.js */ \"./app/src/js/controllers/negociacao-controller.js\");\n\r\n\r\nconst controller = new _controllers_negociacao_controller_js__WEBPACK_IMPORTED_MODULE_0__.NegociacaoController();\r\nconst form = document.querySelector('.form');\r\nif (form) {\r\n    form.addEventListener('submit', event => {\r\n        event.preventDefault();\r\n        controller.adiciona();\r\n    });\r\n}\r\nelse {\r\n    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');\r\n}\r\n\r\nconst botaoImporta = document.querySelector('#botao-importa');\r\nif (botaoImporta) {\r\n    botaoImporta.addEventListener('click', () => {\r\n        controller.importaDados();\r\n    });\r\n} else {\r\n    throw Error('Botão importa não foi encontrado');\r\n}\n\n//# sourceURL=webpack://alurabank/./app/src/js/app.js?");

/***/ }),

/***/ "./app/src/js/controllers/negociacao-controller.js":
/*!*********************************************************!*\
  !*** ./app/src/js/controllers/negociacao-controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NegociacaoController\": () => (/* binding */ NegociacaoController)\n/* harmony export */ });\n/* harmony import */ var _decorators_dom_injector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/dom-injector.js */ \"./app/src/js/decorators/dom-injector.js\");\n/* harmony import */ var _decorators_inspect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/inspect.js */ \"./app/src/js/decorators/inspect.js\");\n/* harmony import */ var _decorators_logar_tempo_de_execucao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/logar-tempo-de-execucao.js */ \"./app/src/js/decorators/logar-tempo-de-execucao.js\");\n/* harmony import */ var _enums_dias_da_semana_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/dias-da-semana.js */ \"./app/src/js/enums/dias-da-semana.js\");\n/* harmony import */ var _models_negociacao_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/negociacao.js */ \"./app/src/js/models/negociacao.js\");\n/* harmony import */ var _models_negociacoes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/negociacoes.js */ \"./app/src/js/models/negociacoes.js\");\n/* harmony import */ var _services_negociacoes_service_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/negociacoes-service.js */ \"./app/src/js/services/negociacoes-service.js\");\n/* harmony import */ var _utils_imprimir_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/imprimir.js */ \"./app/src/js/utils/imprimir.js\");\n/* harmony import */ var _views_mensagem_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/mensagem-view.js */ \"./app/src/js/views/mensagem-view.js\");\n/* harmony import */ var _views_negociacoes_view_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/negociacoes-view.js */ \"./app/src/js/views/negociacoes-view.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass NegociacaoController {\r\n    constructor() {\r\n        this.negociacoes = new _models_negociacoes_js__WEBPACK_IMPORTED_MODULE_5__.Negociacoes();\r\n        this.negociacoesView = new _views_negociacoes_view_js__WEBPACK_IMPORTED_MODULE_9__.NegociacoesView('#negociacoesView');\r\n        this.mensagemView = new _views_mensagem_view_js__WEBPACK_IMPORTED_MODULE_8__.MensagemView('#mensagemView');\r\n        this.negociacoesService = new _services_negociacoes_service_js__WEBPACK_IMPORTED_MODULE_6__.NegociacoesService();\r\n        this.negociacoesView.update(this.negociacoes);\r\n    }\r\n    adiciona() {\r\n        const negociacao = _models_negociacao_js__WEBPACK_IMPORTED_MODULE_4__.Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);\r\n        if (!this.ehDiaUtil(negociacao.data)) {\r\n            this.mensagemView\r\n                .update('Apenas negociações em dias úteis são aceitas');\r\n            return;\r\n        }\r\n        this.negociacoes.adiciona(negociacao);\r\n        (0,_utils_imprimir_js__WEBPACK_IMPORTED_MODULE_7__.imprimir)(negociacao, this.negociacoes);\r\n        this.limparFormulario();\r\n        this.atualizaView();\r\n    }\r\n    importaDados() {\r\n        this.negociacoesService\r\n            .obterNegociacoesDoDia()\r\n            .then(negociacoesDeHoje => {\r\n            return negociacoesDeHoje.filter(negociacaoDeHoje => {\r\n                return !this.negociacoes\r\n                    .lista()\r\n                    .some(negociacao => negociacao\r\n                    .ehIgual(negociacaoDeHoje));\r\n            });\r\n        })\r\n            .then(negociacoesDeHoje => {\r\n            for (let negociacao of negociacoesDeHoje) {\r\n                this.negociacoes.adiciona(negociacao);\r\n            }\r\n            this.negociacoesView.update(this.negociacoes);\r\n        });\r\n    }\r\n    ehDiaUtil(data) {\r\n        return data.getDay() > _enums_dias_da_semana_js__WEBPACK_IMPORTED_MODULE_3__.DiasDaSemana.DOMINGO\r\n            && data.getDay() < _enums_dias_da_semana_js__WEBPACK_IMPORTED_MODULE_3__.DiasDaSemana.SABADO;\r\n    }\r\n    limparFormulario() {\r\n        this.inputData.value = '';\r\n        this.inputQuantidade.value = '';\r\n        this.inputValor.value = '';\r\n        this.inputData.focus();\r\n    }\r\n    atualizaView() {\r\n        this.negociacoesView.update(this.negociacoes);\r\n        this.mensagemView.update('Negociação adicionada com sucesso');\r\n    }\r\n}\r\n__decorate([\r\n    (0,_decorators_dom_injector_js__WEBPACK_IMPORTED_MODULE_0__.domInjector)('#data')\r\n], NegociacaoController.prototype, \"inputData\", void 0);\r\n__decorate([\r\n    (0,_decorators_dom_injector_js__WEBPACK_IMPORTED_MODULE_0__.domInjector)('#quantidade')\r\n], NegociacaoController.prototype, \"inputQuantidade\", void 0);\r\n__decorate([\r\n    (0,_decorators_dom_injector_js__WEBPACK_IMPORTED_MODULE_0__.domInjector)('#valor')\r\n], NegociacaoController.prototype, \"inputValor\", void 0);\r\n__decorate([\r\n    _decorators_inspect_js__WEBPACK_IMPORTED_MODULE_1__.inspect,\r\n    (0,_decorators_logar_tempo_de_execucao_js__WEBPACK_IMPORTED_MODULE_2__.logarTempoDeExecucao)()\r\n], NegociacaoController.prototype, \"adiciona\", null);\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/controllers/negociacao-controller.js?");

/***/ }),

/***/ "./app/src/js/decorators/dom-injector.js":
/*!***********************************************!*\
  !*** ./app/src/js/decorators/dom-injector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domInjector\": () => (/* binding */ domInjector)\n/* harmony export */ });\nfunction domInjector(seletor) {\r\n    return function (target, propertyKey) {\r\n        console.log(`Modificando protype ${target.constructor.name}\r\n             e adicionando getter para a propriedade ${propertyKey}`);\r\n        let elemento;\r\n        const getter = function () {\r\n            if (!elemento) {\r\n                elemento = document.querySelector(seletor);\r\n                console.log(`buscando elemento do DOM com o seletor \r\n                 ${seletor} para injetar em ${propertyKey}`);\r\n            }\r\n            return elemento;\r\n        };\r\n        Object.defineProperty(target, propertyKey, { get: getter });\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/decorators/dom-injector.js?");

/***/ }),

/***/ "./app/src/js/decorators/escapar.js":
/*!******************************************!*\
  !*** ./app/src/js/decorators/escapar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"escapar\": () => (/* binding */ escapar)\n/* harmony export */ });\nfunction escapar(target, propertyKey, descriptor) {\r\n    const metodoOriginal = descriptor.value;\r\n    descriptor.value = function (...args) {\r\n        let retorno = metodoOriginal.apply(this, args);\r\n        if (typeof retorno === 'string') {\r\n            retorno = retorno\r\n                .replace(/<script>[\\s\\S]*?<\\/script>/, '');\r\n        }\r\n        return retorno;\r\n    };\r\n    return descriptor;\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/decorators/escapar.js?");

/***/ }),

/***/ "./app/src/js/decorators/inspect.js":
/*!******************************************!*\
  !*** ./app/src/js/decorators/inspect.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inspect\": () => (/* binding */ inspect)\n/* harmony export */ });\nfunction inspect(target, propertyKey, descriptor) {\r\n    const metodoOriginal = descriptor.value;\r\n    descriptor.value = function (...args) {\r\n        console.log(`--- Método ${propertyKey}`);\r\n        console.log(`------ parâmetros: ${JSON.stringify(args)}`);\r\n        const retorno = metodoOriginal.apply(this, args);\r\n        console.log(`------ retorno: ${JSON.stringify(retorno)}`);\r\n        return retorno;\r\n    };\r\n    return descriptor;\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/decorators/inspect.js?");

/***/ }),

/***/ "./app/src/js/decorators/logar-tempo-de-execucao.js":
/*!**********************************************************!*\
  !*** ./app/src/js/decorators/logar-tempo-de-execucao.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logarTempoDeExecucao\": () => (/* binding */ logarTempoDeExecucao)\n/* harmony export */ });\nfunction logarTempoDeExecucao(emSegundos = false) {\r\n    return function (target, propertyKey, descriptor) {\r\n        const metodoOriginal = descriptor.value;\r\n        descriptor.value = function (...args) {\r\n            let divisor = 1;\r\n            let unidade = 'milisegundos';\r\n            if (emSegundos) {\r\n                divisor = 1000;\r\n                unidade = 'segundos';\r\n            }\r\n            const t1 = performance.now();\r\n            const retorno = metodoOriginal.apply(this, args);\r\n            const t2 = performance.now();\r\n            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);\r\n            retorno;\r\n        };\r\n        return descriptor;\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/decorators/logar-tempo-de-execucao.js?");

/***/ }),

/***/ "./app/src/js/enums/dias-da-semana.js":
/*!********************************************!*\
  !*** ./app/src/js/enums/dias-da-semana.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DiasDaSemana\": () => (/* binding */ DiasDaSemana)\n/* harmony export */ });\nvar DiasDaSemana;\r\n(function (DiasDaSemana) {\r\n    DiasDaSemana[DiasDaSemana[\"DOMINGO\"] = 0] = \"DOMINGO\";\r\n    DiasDaSemana[DiasDaSemana[\"SEGUNDA\"] = 1] = \"SEGUNDA\";\r\n    DiasDaSemana[DiasDaSemana[\"TERCA\"] = 2] = \"TERCA\";\r\n    DiasDaSemana[DiasDaSemana[\"QUARTA\"] = 3] = \"QUARTA\";\r\n    DiasDaSemana[DiasDaSemana[\"QUINTA\"] = 4] = \"QUINTA\";\r\n    DiasDaSemana[DiasDaSemana[\"SEXTA\"] = 5] = \"SEXTA\";\r\n    DiasDaSemana[DiasDaSemana[\"SABADO\"] = 6] = \"SABADO\";\r\n})(DiasDaSemana || (DiasDaSemana = {}));\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/enums/dias-da-semana.js?");

/***/ }),

/***/ "./app/src/js/models/negociacao.js":
/*!*****************************************!*\
  !*** ./app/src/js/models/negociacao.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Negociacao\": () => (/* binding */ Negociacao)\n/* harmony export */ });\nclass Negociacao {\r\n    constructor(_data, quantidade, valor) {\r\n        this._data = _data;\r\n        this.quantidade = quantidade;\r\n        this.valor = valor;\r\n    }\r\n    static criaDe(dataString, quantidadeString, valorString) {\r\n        const exp = /-/g;\r\n        const date = new Date(dataString.replace(exp, ','));\r\n        const quantidade = parseInt(quantidadeString);\r\n        const valor = parseFloat(valorString);\r\n        return new Negociacao(date, quantidade, valor);\r\n    }\r\n    get volume() {\r\n        return this.quantidade * this.valor;\r\n    }\r\n    get data() {\r\n        const data = new Date(this._data.getTime());\r\n        return data;\r\n    }\r\n    paraTexto() {\r\n        return `\r\n            Data: ${this.data},\r\n            Quantidade: ${this.quantidade},\r\n            Valor: ${this.valor}\r\n        `;\r\n    }\r\n    ehIgual(negociacao) {\r\n        return this.data.getDate() === negociacao.data.getDate()\r\n            && this.data.getMonth() === negociacao.data.getMonth()\r\n            && this.data.getFullYear() === negociacao.data.getFullYear();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/models/negociacao.js?");

/***/ }),

/***/ "./app/src/js/models/negociacoes.js":
/*!******************************************!*\
  !*** ./app/src/js/models/negociacoes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Negociacoes\": () => (/* binding */ Negociacoes)\n/* harmony export */ });\nclass Negociacoes {\r\n    constructor() {\r\n        this.negociacoes = [];\r\n    }\r\n    adiciona(negociacao) {\r\n        this.negociacoes.push(negociacao);\r\n    }\r\n    lista() {\r\n        return this.negociacoes;\r\n    }\r\n    paraTexto() {\r\n        return JSON.stringify(this.negociacoes, null, 2);\r\n    }\r\n    ehIgual(negociacoes) {\r\n        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/models/negociacoes.js?");

/***/ }),

/***/ "./app/src/js/services/negociacoes-service.js":
/*!****************************************************!*\
  !*** ./app/src/js/services/negociacoes-service.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NegociacoesService\": () => (/* binding */ NegociacoesService)\n/* harmony export */ });\n/* harmony import */ var _models_negociacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/negociacao.js */ \"./app/src/js/models/negociacao.js\");\n\r\nclass NegociacoesService {\r\n    obterNegociacoesDoDia() {\r\n        return fetch(`http://localhost:8080/dados`)\r\n            .then(res => res.json())\r\n            .then((dados) => {\r\n            return dados.map(dadoDeHoje => {\r\n                return new _models_negociacao_js__WEBPACK_IMPORTED_MODULE_0__.Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);\r\n            });\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/services/negociacoes-service.js?");

/***/ }),

/***/ "./app/src/js/utils/imprimir.js":
/*!**************************************!*\
  !*** ./app/src/js/utils/imprimir.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imprimir\": () => (/* binding */ imprimir)\n/* harmony export */ });\nfunction imprimir(...objetos) {\r\n    for (let objeto of objetos) {\r\n        console.log(objeto.paraTexto());\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/utils/imprimir.js?");

/***/ }),

/***/ "./app/src/js/views/mensagem-view.js":
/*!*******************************************!*\
  !*** ./app/src/js/views/mensagem-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MensagemView\": () => (/* binding */ MensagemView)\n/* harmony export */ });\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./app/src/js/views/view.js\");\n\r\nclass MensagemView extends _view_js__WEBPACK_IMPORTED_MODULE_0__.View {\r\n    template(model) {\r\n        return `\r\n            <p class=\"alert alert-info\">${model}</p>\r\n        `;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/views/mensagem-view.js?");

/***/ }),

/***/ "./app/src/js/views/negociacoes-view.js":
/*!**********************************************!*\
  !*** ./app/src/js/views/negociacoes-view.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NegociacoesView\": () => (/* binding */ NegociacoesView)\n/* harmony export */ });\n/* harmony import */ var _decorators_escapar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/escapar.js */ \"./app/src/js/decorators/escapar.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ \"./app/src/js/views/view.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\nclass NegociacoesView extends _view_js__WEBPACK_IMPORTED_MODULE_1__.View {\r\n    template(model) {\r\n        return `\r\n        <table class=\"table table-hover table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th>DATA</th>\r\n                    <th>QUANTIDADE</th>\r\n                    <th>VALOR</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                ${model.lista().map(negociacao => {\r\n            return `\r\n                        <tr>\r\n                            <td>${this.formatar(negociacao.data)}\r\n                            </td>\r\n                            <td>\r\n                                ${negociacao.quantidade}\r\n                            </td>\r\n                            <td>\r\n                                ${negociacao.valor}\r\n                            </td>\r\n                        </tr>\r\n                    `;\r\n        }).join('')}\r\n            </tbody>\r\n        </table>\r\n        `;\r\n    }\r\n    formatar(data) {\r\n        return new Intl.DateTimeFormat()\r\n            .format(data);\r\n    }\r\n}\r\n__decorate([\r\n    _decorators_escapar_js__WEBPACK_IMPORTED_MODULE_0__.escapar\r\n], NegociacoesView.prototype, \"template\", null);\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/views/negociacoes-view.js?");

/***/ }),

/***/ "./app/src/js/views/view.js":
/*!**********************************!*\
  !*** ./app/src/js/views/view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"View\": () => (/* binding */ View)\n/* harmony export */ });\nclass View {\r\n    constructor(seletor) {\r\n        const elemento = document.querySelector(seletor);\r\n        if (elemento) {\r\n            this.elemento = elemento;\r\n        }\r\n        else {\r\n            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);\r\n        }\r\n    }\r\n    update(model) {\r\n        let template = this.template(model);\r\n        this.elemento.innerHTML = template;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://alurabank/./app/src/js/views/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/src/js/app.js");
/******/ 	
/******/ })()
;