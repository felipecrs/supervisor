(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[530],{22530:function(e,t,n){"use strict";n.r(t);n(30573);var r=n(55317),o=(n(32296),n(77956),n(99722)),i=n(47181);n(23221),n(52039);"".concat(location.protocol,"//").concat(location.host);var s=n(41682),a=n(77097),c=n(26765),l=n(11654);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){var e=E(["\n        paper-checkbox {\n          display: block;\n          margin: 4px;\n        }\n        mwc-button ha-svg-icon {\n          margin-right: 4px;\n        }\n        .button-row {\n          display: grid;\n          gap: 8px;\n          margin-right: 8px;\n        }\n        .details {\n          color: var(--secondary-text-color);\n        }\n        .warning,\n        .error {\n          color: var(--error-color);\n        }\n        .buttons li {\n          list-style-type: none;\n        }\n        .buttons .icon {\n          margin-right: 16px;\n        }\n        .no-margin-top {\n          margin-top: 0;\n        }\n        ha-header-bar {\n          --mdc-theme-on-primary: var(--primary-text-color);\n          --mdc-theme-primary: var(--mdc-theme-surface);\n          flex-shrink: 0;\n        }\n        /* overrule the ha-style-dialog max-height on small screens */\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          ha-header-bar {\n            --mdc-theme-primary: var(--app-header-background-color);\n            --mdc-theme-on-primary: var(--app-header-text-color, white);\n          }\n        }\n      "]);return d=function(){return e},e}function h(){var e=E(["<mwc-button @click=",">\n                <ha-svg-icon .path=",' class="icon"></ha-svg-icon>\n                Download Snapshot\n              </mwc-button>']);return h=function(){return e},e}function p(){var e=E(["\n                <mwc-button @click=",">\n                  <ha-svg-icon .path=",' class="icon"></ha-svg-icon>\n                  Restore Everything\n                </mwc-button>\n              ']);return p=function(){return e},e}function f(){var e=E(["\n                <mwc-button @click=",">\n                  <ha-svg-icon .path=",' class="icon warning">\n                  </ha-svg-icon>\n                  <span class="warning">Delete Snapshot</span>\n                </mwc-button>\n              ']);return f=function(){return e},e}function m(){var e=E([' <p class="error">Error: ',"</p> "]);return m=function(){return e},e}function v(){var e=E(['\n              <paper-input\n                autofocus=""\n                label="Password"\n                type="password"\n                @value-changed=',"\n                .value=","\n              ></paper-input>\n            "]);return v=function(){return e},e}function y(){var e=E(["\n                    <paper-checkbox\n                      .checked=",'\n                      @change="','"\n                    >\n                      ',"\n                    </paper-checkbox>\n                  "]);return y=function(){return e},e}function g(){var e=E(['\n              <div>Add-on:</div>\n              <paper-dialog-scrollable class="no-margin-top">\n                ',"\n              </paper-dialog-scrollable>\n            "]);return g=function(){return e},e}function k(){var e=E(["\n                    <paper-checkbox\n                      .checked=",'\n                      @change="','"\n                    >\n                      ',"\n                    </paper-checkbox>\n                  "]);return k=function(){return e},e}function b(){var e=E(['\n              <div>Folders:</div>\n              <paper-dialog-scrollable class="no-margin-top">\n                ',"\n              </paper-dialog-scrollable>\n            "]);return b=function(){return e},e}function w(){var e=E(["<div>Home Assistant:</div>\n              <paper-checkbox\n                .checked=",'\n                @change="','"\n              >\n                Home Assistant ',"\n              </paper-checkbox>"]);return w=function(){return e},e}function _(){var e=E(["\n      <ha-dialog open @closing="," .heading=",'>\n        <div slot="heading">\n          <ha-header-bar>\n            <span slot="title">\n              ','\n            </span>\n            <mwc-icon-button slot="actionItems" dialogAction="cancel">\n              <ha-svg-icon .path=','></ha-svg-icon>\n            </mwc-icon-button>\n          </ha-header-bar>\n        </div>\n        <div class="details">\n          ',"\n          (",")<br />\n          ","\n        </div>\n        ","\n        ","\n        ","\n        ","\n        ",'\n\n        <div class="button-row" slot="primaryAction">\n          <mwc-button @click=',">\n            <ha-svg-icon .path=",' class="icon"></ha-svg-icon>\n            Restore Selected\n          </mwc-button>\n          ','\n        </div>\n        <div class="button-row" slot="secondaryAction">\n          ',"\n          ","\n        </div>\n      </ha-dialog>\n    "]);return _=function(){return e},e}function x(){var e=E([""]);return x=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function P(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(r,o)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){P(i,r,o,s,a,"next",e)}function a(e){P(i,r,o,s,a,"throw",e)}s(void 0)}))}}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(){z=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var i="static"===o?e:n;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!H(e))return n.push(e);var t=this.decorateElement(e,o);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var i=this.decorateConstructor(n,t);return r.push.apply(r,i.finishers),i.finishers=r,i},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],o=e.decorators,i=o.length-1;i>=0;i--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[i])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==i.finisher&&n.push(i.finisher),void 0!==i.elements){e=i.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=N(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:n,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:B(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=B(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function j(e){var t,n=N(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function F(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function H(e){return e.decorators&&e.decorators.length}function I(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function B(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function N(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e,t,n,r){var o=z();if(r)for(var i=0;i<r.length;i++)o=r[i](o);var s=t((function(e){o.initializeInstanceElements(e,a.elements)}),n),a=o.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},r=0;r<e.length;r++){var o,i=e[r];if("method"===i.kind&&(o=t.find(n)))if(I(i.descriptor)||I(o.descriptor)){if(H(i)||H(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(H(i)){if(H(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}F(i,o)}else t.push(i)}return t}(s.d.map(j)),e);o.initializeClassElements(s.F,a.elements),o.runClassFinishers(s.F,a.finishers)}([(0,o.Mo)("dialog-hassio-snapshot")],(function(e,t){var n,u,E,P,O;return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(r,t);var n=C(r);function r(){var t;D(this,r);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=n.call.apply(n,[this].concat(i)),e(R(t)),t}return r}(t),d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_onboarding",value:function(){return!1}},{kind:"field",decorators:[(0,o.sz)()],key:"_snapshot",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_folders",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_addons",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_snapshotPassword",value:void 0},{kind:"field",decorators:[(0,o.sz)()],key:"_restoreHass",value:function(){return!0}},{kind:"method",key:"showDialog",value:(O=S(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.Ju)(this.hass,t.slug);case 2:this._snapshot=e.sent,this._folders=(s=null===(n=this._snapshot)||void 0===n?void 0:n.folders,c=void 0,c=[],s.includes("homeassistant")&&c.push({slug:"homeassistant",name:"Home Assistant configuration",checked:!0}),s.includes("ssl")&&c.push({slug:"ssl",name:"SSL",checked:!0}),s.includes("share")&&c.push({slug:"share",name:"Share",checked:!0}),s.includes("addons/local")&&c.push({slug:"addons/local",name:"Local add-ons",checked:!0}),c).sort((function(e,t){return e.name>t.name?1:-1})),this._addons=(i=null===(r=this._snapshot)||void 0===r?void 0:r.addons,i.map((function(e){return{slug:e.slug,name:e.name,version:e.version,checked:!0}}))).sort((function(e,t){return e.name>t.name?1:-1})),this._dialogParams=t,this._onboarding=null!==(o=t.onboarding)&&void 0!==o&&o,this.supervisor=t.supervisor,this._snapshot.homeassistant||(this._restoreHass=!1);case 9:case"end":return e.stop()}var i,s,c}),e,this)}))),function(e){return O.apply(this,arguments)})},{kind:"method",key:"render",value:function(){var e=this;return this._dialogParams&&this._snapshot?(0,o.dy)(_(),this._closeDialog,!0,this._computeName,r.r5M,"full"===this._snapshot.type?"Full snapshot":"Partial snapshot",this._computeSize,this._formatDatetime(this._snapshot.date),this._snapshot.homeassistant?(0,o.dy)(w(),this._restoreHass,(function(t){e._restoreHass=t.target.checked}),this._snapshot.homeassistant):"",this._folders.length?(0,o.dy)(b(),this._folders.map((function(t){return(0,o.dy)(k(),t.checked,(function(n){return e._updateFolders(t,n.target.checked)}),t.name)}))):"",this._addons.length?(0,o.dy)(g(),this._addons.map((function(t){return(0,o.dy)(y(),t.checked,(function(n){return e._updateAddons(t,n.target.checked)}),t.name)}))):"",this._snapshot.protected?(0,o.dy)(v(),this._passwordInput,this._snapshotPassword):"",this._error?(0,o.dy)(m(),this._error):"",this._partialRestoreClicked,r.BBX,this._onboarding?"":(0,o.dy)(f(),this._deleteClicked,r.x9U),"full"===this._snapshot.type?(0,o.dy)(p(),this._fullRestoreClicked,r.BBX):"",this._onboarding?"":(0,o.dy)(h(),this._downloadClicked,r.OGU)):(0,o.dy)(x())}},{kind:"get",static:!0,key:"styles",value:function(){return[l.Qx,l.yu,(0,o.iv)(d())]}},{kind:"method",key:"_updateFolders",value:function(e,t){this._folders=this._folders.map((function(n){return n.slug===e.slug&&(n.checked=t),n}))}},{kind:"method",key:"_updateAddons",value:function(e,t){this._addons=this._addons.map((function(n){return n.slug===e.slug&&(n.checked=t),n}))}},{kind:"method",key:"_passwordInput",value:function(e){this._snapshotPassword=e.detail.value}},{kind:"method",key:"_partialRestoreClicked",value:(P=S(regeneratorRuntime.mark((function e(){var t,n,r,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.supervisor||"running"===this.supervisor.info.state){e.next=4;break}return e.next=3,(0,c.Ys)(this,{title:"Could not restore snapshot",text:"Restoring a snapshot is not possible right now because the system is in ".concat(this.supervisor.info.state," state.")});case 3:return e.abrupt("return");case 4:return e.next=6,(0,c.g7)(this,{title:"Are you sure you want partially to restore this snapshot?",confirmText:"restore",dismissText:"cancel"});case 6:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:t=this._addons.filter((function(e){return e.checked})).map((function(e){return e.slug})),n=this._folders.filter((function(e){return e.checked})).map((function(e){return e.slug})),r={homeassistant:this._restoreHass,addons:t,folders:n},this._snapshot.protected&&(r.password=this._snapshotPassword),this._onboarding?((0,i.B)(this,"restoring"),fetch("/api/hassio/snapshots/".concat(this._snapshot.slug,"/restore/partial"),{method:"POST",body:JSON.stringify(r)}),this._closeDialog()):this.hass.callApi("POST","hassio/snapshots/".concat(this._snapshot.slug,"/restore/partial"),r).then((function(){alert("Snapshot restored!"),o._closeDialog()}),(function(e){o._error=e.body.message}));case 13:case"end":return e.stop()}}),e,this)}))),function(){return P.apply(this,arguments)})},{kind:"method",key:"_fullRestoreClicked",value:(E=S(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.supervisor||"running"===this.supervisor.info.state){e.next=4;break}return e.next=3,(0,c.Ys)(this,{title:"Could not restore snapshot",text:"Restoring a snapshot is not possible right now because the system is in ".concat(this.supervisor.info.state," state.")});case 3:return e.abrupt("return");case 4:return e.next=6,(0,c.g7)(this,{title:"Are you sure you want to wipe your system and restore this snapshot?",confirmText:"restore",dismissText:"cancel"});case 6:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:t=this._snapshot.protected?{password:this._snapshotPassword}:void 0,this._onboarding?((0,i.B)(this,"restoring"),fetch("/api/hassio/snapshots/".concat(this._snapshot.slug,"/restore/full"),{method:"POST",body:JSON.stringify(t)}),this._closeDialog()):this.hass.callApi("POST","hassio/snapshots/".concat(this._snapshot.slug,"/restore/full"),t).then((function(){alert("Snapshot restored!"),n._closeDialog()}),(function(e){n._error=e.body.message}));case 10:case"end":return e.stop()}}),e,this)}))),function(){return E.apply(this,arguments)})},{kind:"method",key:"_deleteClicked",value:(u=S(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.g7)(this,{title:"Are you sure you want to delete this snapshot?",confirmText:"delete",dismissText:"cancel"});case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.hass.callApi("POST","hassio/snapshots/".concat(this._snapshot.slug,"/remove")).then((function(){t._dialogParams.onDelete&&t._dialogParams.onDelete(),t._closeDialog()}),(function(e){t._error=e.body.message}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{kind:"method",key:"_downloadClicked",value:(n=S(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o=this.hass,i="/api/hassio/snapshots/".concat(this._snapshot.slug,"/download"),o.callWS({type:"auth/sign_path",path:i});case 3:t=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),alert("Error: ".concat((0,s.js)(e.t0))),e.abrupt("return");case 10:if(!window.location.href.includes("ui.nabu.casa")){e.next=16;break}return e.next=13,(0,c.g7)(this,{title:"Potential slow download",text:"Downloading snapshots over the Nabu Casa URL will take some time, it is recomended to use your local URL instead, do you want to continue?",confirmText:"continue",dismissText:"cancel"});case 13:if(e.sent){e.next=16;break}return e.abrupt("return");case 16:n=this._computeName.replace(/[^a-z0-9]+/gi,"_"),(r=document.createElement("a")).href=t.path,r.download="Hass_io_".concat(n,".tar"),this.shadowRoot.appendChild(r),r.click(),this.shadowRoot.removeChild(r);case 23:case"end":return e.stop()}var o,i}),e,this,[[0,6]])}))),function(){return n.apply(this,arguments)})},{kind:"get",key:"_computeName",value:function(){return this._snapshot?this._snapshot.name||this._snapshot.slug:"Unnamed snapshot"}},{kind:"get",key:"_computeSize",value:function(){return Math.ceil(10*this._snapshot.size)/10+" MB"}},{kind:"method",key:"_formatDatetime",value:function(e){return new Date(e).toLocaleDateString(navigator.language,{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}},{kind:"method",key:"_closeDialog",value:function(){this._dialogParams=void 0,this._snapshot=void 0,this._snapshotPassword="",this._folders=[],this._addons=[]}}]}}),o.oi)}}]);
//# sourceMappingURL=chunk.b729c536fbd35941bc86.js.map