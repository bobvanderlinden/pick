define(["exports","./my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$counterDefault=_exports.decrement=_exports.increment=_exports.DECREMENT=_exports.INCREMENT=_exports.$counter$1=_exports.$counter=void 0;function _templateObject2_2014a6a0bd1411e8853ccbbcdb8b4490(){var data=babelHelpers.taggedTemplateLiteral(["\n      ","\n      <section>\n        <a href=\"/\">&laquo; Back to list</a>\n        <h2>"," - ","</h2>\n        <pre>","</pre>\n      </section>\n    "]);_templateObject2_2014a6a0bd1411e8853ccbbcdb8b4490=function(){return data};return data}function _templateObject_2014a6a0bd1411e8853ccbbcdb8b4490(){var data=babelHelpers.taggedTemplateLiteral(["\n      ","\n      <style>\n        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}\n      </style>\n      <div>\n        <p>\n          Clicked: <span>","</span> times.\n          Value is <span>","</span>.\n          <button @click=\"","\" title=\"Add 1\">","</button>\n          <button @click=\"","\" title=\"Minus 1\">","</button>\n        </p>\n      </div>\n    "]);_templateObject_2014a6a0bd1411e8853ccbbcdb8b4490=function(){return data};return data}var INCREMENT="INCREMENT";_exports.INCREMENT=INCREMENT;var DECREMENT="DECREMENT";_exports.DECREMENT=DECREMENT;var increment=function(){return{type:INCREMENT}};_exports.increment=increment;var decrement=function(){return{type:DECREMENT}};_exports.decrement=decrement;_exports.$counter={INCREMENT:INCREMENT,DECREMENT:DECREMENT,increment:increment,decrement:decrement};var CounterElement=function(_LitElement){babelHelpers.inherits(CounterElement,_LitElement);babelHelpers.createClass(CounterElement,[{key:"render",value:function render(){var _this2=this;return(0,_myApp.html)(_templateObject_2014a6a0bd1411e8853ccbbcdb8b4490(),_myApp.ButtonSharedStyles,this.clicks,this.value,function(){return _this2._onIncrement()},_myApp.plusIcon,function(){return _this2._onDecrement()},_myApp.minusIcon)}}],[{key:"properties",get:function get(){return{clicks:{type:Number},value:{type:Number}}}}]);function CounterElement(){var _this;babelHelpers.classCallCheck(this,CounterElement);_this=babelHelpers.possibleConstructorReturn(this,(CounterElement.__proto__||Object.getPrototypeOf(CounterElement)).call(this));_this.clicks=0;_this.value=0;return _this}babelHelpers.createClass(CounterElement,[{key:"_onIncrement",value:function _onIncrement(){this.value++;this.clicks++;this.dispatchEvent(new CustomEvent("counter-incremented"))}},{key:"_onDecrement",value:function _onDecrement(){this.value--;this.clicks++;this.dispatchEvent(new CustomEvent("counter-decremented"))}}]);return CounterElement}(_myApp.LitElement);window.customElements.define("counter-element",CounterElement);var counter$1=function(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{clicks:0,value:0},action=1<arguments.length?arguments[1]:void 0;switch(action.type){case INCREMENT:return{clicks:state.clicks+1,value:state.value+1};case DECREMENT:return{clicks:state.clicks+1,value:state.value-1};default:return state;}};_exports.$counterDefault=counter$1;_exports.$counter$1={default:counter$1};_myApp.store.addReducers({counter:counter$1});var MyView2=function(_connect){babelHelpers.inherits(MyView2,_connect);function MyView2(){babelHelpers.classCallCheck(this,MyView2);return babelHelpers.possibleConstructorReturn(this,(MyView2.__proto__||Object.getPrototypeOf(MyView2)).apply(this,arguments))}babelHelpers.createClass(MyView2,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject2_2014a6a0bd1411e8853ccbbcdb8b4490(),_myApp.SharedStyles,this.song.song_name,this.song.artist_name,this.song.lyrics)}},{key:"_stateChanged",value:function _stateChanged(state){this.song=state.app.song}}],[{key:"properties",get:function get(){return{_song_id:{type:Number}}}}]);return MyView2}((0,_myApp.connect)(_myApp.store)(_myApp.PageViewElement));window.customElements.define("my-view2",MyView2)});