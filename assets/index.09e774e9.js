import{j as at,_ as W,U as wt,e as ye,I as oe,V as Me,W as At,X as Dt,Y as Tt,Z as Mt,$ as rt,a0 as Pe,a1 as Lt,a2 as Ht,z as fe,A as It,r as nt,J as De,a3 as Ot,a4 as Nt,K as ot,M as we,E as ne,a5 as Le,a6 as $t,G as ge,y as xt,a7 as Ct,f as te,a8 as Et,a9 as He,aa as ie,ab as Vt,ac as Ie,c as Ft,ad as Bt,ae as Gt,af as zt,a as R,ag as Rt,l as se,h as Xt,ah as jt,ai as Oe,aj as Wt,ak as Ut,o as Zt,x as it,al as ae,am as Kt,an as Ne,P as st,ao as $e,ap as xe,aq as Ce,N as Ee,ar as Ve,F as de,as as Fe,at as qt,au as Jt,B as Yt,av as Qt,aw as Be,ax as ea,ay as ta,u as lt,H as aa,az as ra}from"./index.4ef32864.js";import{d as na,a as oa}from"./defaultChartConfig.5a1a8dfa.js";import{g as ut,c as ia,a as sa,b as la,d as ua,e as ca,f as ma,i as pa}from"./install.69ae8a5f.js";import{e as fa,h as ha,_ as V,r as A,o as F,c as B,a as D,w as Q,d as X,p as ct,f as mt}from"./index.8e07b5ee.js";import{M as le}from"./mock.14bd0a2d.js";function va(a,t){if(!a)return!1;for(var e=at(a)?a:[a],r=0;r<e.length;r++)if(e[r]&&e[r][t])return!0;return!1}function ce(a){Mt(a,"label",["show"])}var me=rt(),pt=function(a){W(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=t.type,e.createdBySelf=!1,e}return t.prototype.init=function(e,r,n){this.mergeDefaultAndTheme(e,n),this._mergeOption(e,n,!1,!0)},t.prototype.isAnimationEnabled=function(){if(wt.node)return!1;var e=this.__hostSeries;return this.getShallow("animation")&&e&&e.isAnimationEnabled()},t.prototype.mergeOption=function(e,r){this._mergeOption(e,r,!1,!1)},t.prototype._mergeOption=function(e,r,n,i){var o=this.mainType;n||r.eachSeries(function(s){var l=s.get(this.mainType,!0),u=me(s)[o];if(!l||!l.data){me(s)[o]=null;return}u?u._mergeOption(l,r,!0):(i&&ce(l),ye(l.data,function(m){m instanceof Array?(ce(m[0]),ce(m[1])):ce(m)}),u=this.createMarkerModelFromSeries(l,this,r),oe(u,{mainType:this.mainType,seriesIndex:s.seriesIndex,name:s.name,createdBySelf:!0}),u.__hostSeries=s),me(s)[o]=u},this)},t.prototype.formatTooltip=function(e,r,n){var i=this.getData(),o=this.getRawValue(e),s=i.getName(e);return Me("section",{header:this.name,blocks:[Me("nameValue",{name:s,value:o,noName:!s,noValue:o==null})]})},t.prototype.getData=function(){return this._data},t.prototype.setData=function(e){this._data=e},t.getMarkerModelFromSeries=function(e,r){return me(e)[r]},t.type="marker",t.dependencies=["series","grid","polar","geo"],t}(At);Dt(pt,Tt.prototype);const he=pt;var ya=function(a){W(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=t.type,e}return t.prototype.createMarkerModelFromSeries=function(e,r,n){return new t(e,r,n)},t.type="markPoint",t.defaultOption={z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{show:!0,position:"inside"},itemStyle:{borderWidth:2},emphasis:{label:{show:!0}}},t}(he);const ga=ya;var da=function(a){W(t,a);function t(e,r,n,i){var o=a.call(this)||this;return o.updateData(e,r,n,i),o}return t.prototype._createSymbol=function(e,r,n,i,o){this.removeAll();var s=Pe(e,-1,-1,2,2,null,o);s.attr({z2:100,culling:!0,scaleX:i[0]/2,scaleY:i[1]/2}),s.drift=ba,this._symbolType=e,this.add(s)},t.prototype.stopSymbolAnimation=function(e){this.childAt(0).stopAnimation(null,e)},t.prototype.getSymbolType=function(){return this._symbolType},t.prototype.getSymbolPath=function(){return this.childAt(0)},t.prototype.highlight=function(){Lt(this.childAt(0))},t.prototype.downplay=function(){Ht(this.childAt(0))},t.prototype.setZ=function(e,r){var n=this.childAt(0);n.zlevel=e,n.z=r},t.prototype.setDraggable=function(e,r){var n=this.childAt(0);n.draggable=e,n.cursor=!r&&e?"move":n.cursor},t.prototype.updateData=function(e,r,n,i){this.silent=!1;var o=e.getItemVisual(r,"symbol")||"circle",s=e.hostModel,l=t.getSymbolSize(e,r),u=o!==this._symbolType,m=i&&i.disableAnimation;if(u){var c=e.getItemVisual(r,"symbolKeepAspect");this._createSymbol(o,e,r,l,c)}else{var f=this.childAt(0);f.silent=!1;var p={scaleX:l[0]/2,scaleY:l[1]/2};m?f.attr(p):fe(f,p,s,r),It(f)}if(this._updateCommon(e,r,l,n,i),u){var f=this.childAt(0);if(!m){var p={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:f.style.opacity}};f.scaleX=f.scaleY=0,f.style.opacity=0,nt(f,p,s,r)}}m&&this.childAt(0).stopAnimation("leave")},t.prototype._updateCommon=function(e,r,n,i,o){var s=this.childAt(0),l=e.hostModel,u,m,c,f,p,g,y,v,h;if(i&&(u=i.emphasisItemStyle,m=i.blurItemStyle,c=i.selectItemStyle,f=i.focus,p=i.blurScope,y=i.labelStatesModels,v=i.hoverScale,h=i.cursorStyle,g=i.emphasisDisabled),!i||e.hasItemOption){var d=i&&i.itemModel?i.itemModel:e.getItemModel(r),b=d.getModel("emphasis");u=b.getModel("itemStyle").getItemStyle(),c=d.getModel(["select","itemStyle"]).getItemStyle(),m=d.getModel(["blur","itemStyle"]).getItemStyle(),f=b.get("focus"),p=b.get("blurScope"),g=b.get("disabled"),y=De(d),v=b.getShallow("scale"),h=d.getShallow("cursor")}var S=e.getItemVisual(r,"symbolRotate");s.attr("rotation",(S||0)*Math.PI/180||0);var w=Ot(e.getItemVisual(r,"symbolOffset"),n);w&&(s.x=w[0],s.y=w[1]),h&&s.attr("cursor",h);var _=e.getItemVisual(r,"style"),k=_.fill;if(s instanceof Nt){var T=s.style;s.useStyle(oe({image:T.image,x:T.x,y:T.y,width:T.width,height:T.height},_))}else s.__isEmptyBrush?s.useStyle(oe({},_)):s.useStyle(_),s.style.decal=null,s.setColor(k,o&&o.symbolInnerColor),s.style.strokeNoScale=!0;var M=e.getItemVisual(r,"liftZ"),L=this._z2;M!=null?L==null&&(this._z2=s.z2,s.z2+=M):L!=null&&(s.z2=L,this._z2=null);var H=o&&o.useNameLabel;ot(s,y,{labelFetcher:l,labelDataIndex:r,defaultText:P,inheritColor:k,defaultOpacity:_.opacity});function P(C){return H?e.getName(C):ut(e,C)}this._sizeX=n[0]/2,this._sizeY=n[1]/2;var I=s.ensureState("emphasis");I.style=u,s.ensureState("select").style=c,s.ensureState("blur").style=m;var x=v==null||v===!0?Math.max(1.1,3/this._sizeY):isFinite(v)&&v>0?+v:1;I.scaleX=this._sizeX*x,I.scaleY=this._sizeY*x,this.setSymbolScale(1),we(this,f,p,g)},t.prototype.setSymbolScale=function(e){this.scaleX=this.scaleY=e},t.prototype.fadeOut=function(e,r,n){var i=this.childAt(0),o=ne(this).dataIndex,s=n&&n.animation;if(this.silent=i.silent=!0,n&&n.fadeLabel){var l=i.getTextContent();l&&Le(l,{style:{opacity:0}},r,{dataIndex:o,removeOpt:s,cb:function(){i.removeTextContent()}})}else i.removeTextContent();Le(i,{style:{opacity:0},scaleX:0,scaleY:0},r,{dataIndex:o,cb:e,removeOpt:s})},t.getSymbolSize=function(e,r){return $t(e.getItemVisual(r,"symbolSize"))},t}(ge);function ba(a,t){this.parent.drift(a,t)}const Te=da;function be(a,t,e,r){return t&&!isNaN(t[0])&&!isNaN(t[1])&&!(r.isIgnore&&r.isIgnore(e))&&!(r.clipShape&&!r.clipShape.contain(t[0],t[1]))&&a.getItemVisual(e,"symbol")!=="none"}function Ge(a){return a!=null&&!Ct(a)&&(a={isIgnore:a}),a||{}}function ze(a){var t=a.hostModel,e=t.getModel("emphasis");return{emphasisItemStyle:e.getModel("itemStyle").getItemStyle(),blurItemStyle:t.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:t.getModel(["select","itemStyle"]).getItemStyle(),focus:e.get("focus"),blurScope:e.get("blurScope"),emphasisDisabled:e.get("disabled"),hoverScale:e.get("scale"),labelStatesModels:De(t),cursorStyle:t.get("cursor")}}var _a=function(){function a(t){this.group=new ge,this._SymbolCtor=t||Te}return a.prototype.updateData=function(t,e){this._progressiveEls=null,e=Ge(e);var r=this.group,n=t.hostModel,i=this._data,o=this._SymbolCtor,s=e.disableAnimation,l=ze(t),u={disableAnimation:s},m=e.getSymbolPoint||function(c){return t.getItemLayout(c)};i||r.removeAll(),t.diff(i).add(function(c){var f=m(c);if(be(t,f,c,e)){var p=new o(t,c,l,u);p.setPosition(f),t.setItemGraphicEl(c,p),r.add(p)}}).update(function(c,f){var p=i.getItemGraphicEl(f),g=m(c);if(!be(t,g,c,e)){r.remove(p);return}var y=t.getItemVisual(c,"symbol")||"circle",v=p&&p.getSymbolType&&p.getSymbolType();if(!p||v&&v!==y)r.remove(p),p=new o(t,c,l,u),p.setPosition(g);else{p.updateData(t,c,l,u);var h={x:g[0],y:g[1]};s?p.attr(h):fe(p,h,n)}r.add(p),t.setItemGraphicEl(c,p)}).remove(function(c){var f=i.getItemGraphicEl(c);f&&f.fadeOut(function(){r.remove(f)},n)}).execute(),this._getSymbolPoint=m,this._data=t},a.prototype.updateLayout=function(){var t=this,e=this._data;e&&e.eachItemGraphicEl(function(r,n){var i=t._getSymbolPoint(n);r.setPosition(i),r.markRedraw()})},a.prototype.incrementalPrepareUpdate=function(t){this._seriesScope=ze(t),this._data=null,this.group.removeAll()},a.prototype.incrementalUpdate=function(t,e,r){this._progressiveEls=[],r=Ge(r);function n(l){l.isGroup||(l.incremental=!0,l.ensureState("emphasis").hoverLayer=!0)}for(var i=t.start;i<t.end;i++){var o=e.getItemLayout(i);if(be(e,o,i,r)){var s=new this._SymbolCtor(e,i,this._seriesScope);s.traverse(n),s.setPosition(o),this.group.add(s),e.setItemGraphicEl(i,s),this._progressiveEls.push(s)}}},a.prototype.eachRendered=function(t){xt(this._progressiveEls||this.group,t)},a.prototype.remove=function(t){var e=this.group,r=this._data;r&&t?r.eachItemGraphicEl(function(n){n.fadeOut(function(){e.remove(n)},r.hostModel)}):e.removeAll()},a}();const ft=_a;function Sa(a){return!(isNaN(parseFloat(a.x))&&isNaN(parseFloat(a.y)))}function ka(a){return!isNaN(parseFloat(a.x))&&!isNaN(parseFloat(a.y))}function pe(a,t,e,r,n,i){var o=[],s=ie(t,r),l=s?t.getCalculationInfo("stackResultDimension"):r,u=ht(t,l,a),m=t.indicesOfNearest(l,u)[0];o[n]=t.get(e,m),o[i]=t.get(l,m);var c=t.get(r,m),f=Vt(t.get(r,m));return f=Math.min(f,20),f>=0&&(o[i]=+o[i].toFixed(f)),[o,c]}var _e={min:te(pe,"min"),max:te(pe,"max"),average:te(pe,"average"),median:te(pe,"median")};function Pa(a,t){var e=a.getData(),r=a.coordinateSystem;if(t&&!ka(t)&&!at(t.coord)&&r){var n=r.dimensions,i=wa(t,e,r,a);if(t=Et(t),t.type&&_e[t.type]&&i.baseAxis&&i.valueAxis){var o=He(n,i.baseAxis.dim),s=He(n,i.valueAxis.dim),l=_e[t.type](e,i.baseDataDim,i.valueDataDim,o,s);t.coord=l[0],t.value=l[1]}else{for(var u=[t.xAxis!=null?t.xAxis:t.radiusAxis,t.yAxis!=null?t.yAxis:t.angleAxis],m=0;m<2;m++)_e[u[m]]&&(u[m]=ht(e,e.mapDimension(n[m]),u[m]));t.coord=u}}return t}function wa(a,t,e,r){var n={};return a.valueIndex!=null||a.valueDim!=null?(n.valueDataDim=a.valueIndex!=null?t.getDimension(a.valueIndex):a.valueDim,n.valueAxis=e.getAxis(Aa(r,n.valueDataDim)),n.baseAxis=e.getOtherAxis(n.valueAxis),n.baseDataDim=t.mapDimension(n.baseAxis.dim)):(n.baseAxis=r.getBaseAxis(),n.valueAxis=e.getOtherAxis(n.baseAxis),n.baseDataDim=t.mapDimension(n.baseAxis.dim),n.valueDataDim=t.mapDimension(n.valueAxis.dim)),n}function Aa(a,t){var e=a.getData().getDimensionInfo(t);return e&&e.coordDim}function Da(a,t){return a&&a.containData&&t.coord&&!Sa(t)?a.containData(t.coord):!0}function Ta(a,t){return a?function(e,r,n,i){var o=i<2?e.coord&&e.coord[i]:e.value;return Ie(o,t[i])}:function(e,r,n,i){return Ie(e.value,t[i])}}function ht(a,t,e){if(e==="average"){var r=0,n=0;return a.each(t,function(i,o){isNaN(i)||(r+=i,n++)}),r/n}else return e==="median"?a.getMedian(t):a.getDataExtent(t)[e==="max"?1:0]}var Se=rt(),Ma=function(a){W(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=t.type,e}return t.prototype.init=function(){this.markerGroupMap=Ft()},t.prototype.render=function(e,r,n){var i=this,o=this.markerGroupMap;o.each(function(s){Se(s).keep=!1}),r.eachSeries(function(s){var l=he.getMarkerModelFromSeries(s,i.type);l&&i.renderSeries(s,l,r,n)}),o.each(function(s){!Se(s).keep&&i.group.remove(s.group)})},t.prototype.markKeep=function(e){Se(e).keep=!0},t.prototype.toggleBlurSeries=function(e,r){var n=this;ye(e,function(i){var o=he.getMarkerModelFromSeries(i,n.type);if(o){var s=o.getData();s.eachItemGraphicEl(function(l){l&&(r?Bt(l):Gt(l))})}})},t.type="marker",t}(zt);const La=Ma;function Re(a,t,e){var r=t.coordinateSystem;a.each(function(n){var i=a.getItemModel(n),o,s=Oe(i.get("x"),e.getWidth()),l=Oe(i.get("y"),e.getHeight());if(!isNaN(s)&&!isNaN(l))o=[s,l];else if(t.getMarkerPosition)o=t.getMarkerPosition(a.getValues(a.dimensions,n));else if(r){var u=a.get(r.dimensions[0],n),m=a.get(r.dimensions[1],n);o=r.dataToPoint([u,m])}isNaN(s)||(o[0]=s),isNaN(l)||(o[1]=l),a.setItemLayout(n,o)})}var Ha=function(a){W(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=t.type,e}return t.prototype.updateTransform=function(e,r,n){r.eachSeries(function(i){var o=he.getMarkerModelFromSeries(i,"markPoint");o&&(Re(o.getData(),i,n),this.markerGroupMap.get(i.id).updateLayout())},this)},t.prototype.renderSeries=function(e,r,n,i){var o=e.coordinateSystem,s=e.id,l=e.getData(),u=this.markerGroupMap,m=u.get(s)||u.set(s,new ft),c=Ia(o,e,r);r.setData(c),Re(r.getData(),e,i),c.each(function(f){var p=c.getItemModel(f),g=p.getShallow("symbol"),y=p.getShallow("symbolSize"),v=p.getShallow("symbolRotate"),h=p.getShallow("symbolOffset"),d=p.getShallow("symbolKeepAspect");if(R(g)||R(y)||R(v)||R(h)){var b=r.getRawValue(f),S=r.getDataParams(f);R(g)&&(g=g(b,S)),R(y)&&(y=y(b,S)),R(v)&&(v=v(b,S)),R(h)&&(h=h(b,S))}var w=p.getModel("itemStyle").getItemStyle(),_=Rt(l,"color");w.fill||(w.fill=_),c.setItemVisual(f,{symbol:g,symbolSize:y,symbolRotate:v,symbolOffset:h,symbolKeepAspect:d,style:w})}),m.updateData(c),this.group.add(m.group),c.eachItemGraphicEl(function(f){f.traverse(function(p){ne(p).dataModel=r})}),this.markKeep(m),m.group.silent=r.get("silent")||e.get("silent")},t.type="markPoint",t}(La);function Ia(a,t,e){var r;a?r=se(a&&a.dimensions,function(s){var l=t.getData().getDimensionInfo(t.getData().mapDimension(s))||{};return oe(oe({},l),{name:s,ordinalMeta:null})}):r=[{name:"value",type:"float"}];var n=new Xt(r,e),i=se(e.get("data"),te(Pa,t));a&&(i=jt(i,te(Da,a)));var o=Ta(!!a,r);return n.initData(i,null,o),n}const Oa=Ha;function Na(a){a.registerComponentModel(ga),a.registerComponentView(Oa),a.registerPreprocessor(function(t){va(t.series,"markPoint")&&(t.markPoint=t.markPoint||{})})}const $a=(a,t)=>{const{rows:e=[]}=a,{labelShow:r=!1,fallLegendName:n="",fallBarColor:i=""}=t;if(!Array.isArray(e))return console.warn("rows must be an array"),[];const o=e[0]||{},s=[],l=[];let u=0;const m=[0];for(let f in o)l.push(o[f]),u+=o[f];let c=u;return l.forEach(f=>{c=c-f,m.push(c)}),s[0]={name:"",type:"bar",stack:"\u603B\u91CF",label:{show:!1},itemStyle:{borderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:m},s[1]={name:n,type:"bar",stack:"\u603B\u91CF",label:{show:r},itemStyle:{color:i},backgroundStyle:{color:""},data:[u,...l]},s},xa=(a,t)=>{const{fallTotalName:e=""}=t,r=[e||"\u603B\u8BA1"];return a.forEach(n=>{r.push(n.title)}),r};var Ca=Object.defineProperty,Ea=Object.defineProperties,Va=Object.getOwnPropertyDescriptors,Xe=Object.getOwnPropertySymbols,Fa=Object.prototype.hasOwnProperty,Ba=Object.prototype.propertyIsEnumerable,je=(a,t,e)=>t in a?Ca(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,We=(a,t)=>{for(var e in t||(t={}))Fa.call(t,e)&&je(a,e,t[e]);if(Xe)for(var e of Xe(t))Ba.call(t,e)&&je(a,e,t[e]);return a},Ga=(a,t)=>Ea(a,Va(t));const za=(a,t)=>{const{xAxisType:e="category",xVisible:r=!0,waterfall:n=!1}=t,{xAxis:i=[]}=a;return{type:e,data:n?xa(a.columns,t):i,show:r}},Ra=(a,t)=>{const{yVisible:e=!0,yFormatter:r=["{value}","{value}"],yAxisName:n=[]}=t,i={type:"value",axisTick:{show:!1},show:e},o=[];for(let s=0;s<2;s++)o[s]=Object.assign({},i,{position:s===1?"right":"left",axisLabel:{formatter:r[s]}}),o[s].name=n[s]||"";return o},Xa=(a,t)=>{const{tooltip:e=!0,waterfall:r=!1}=t;let n=na();return r&&(n=Object.assign({},{formatter:o=>{if(Array.isArray(o)&&o.length>=2){const s=o[1];return`${s.name}<br/>${s.marker||""}${s.seriesName} : <b style="font-weight: bold;color:#000">${s.value}</b>`}return""}},n)),Ut(e)?e?n:{}:e},ja=(a,t,e)=>{var r,n,i,o;const{rows:s=[]}=a,{area:l,smooth:u=!0,barGap:m="20%",stack:c=!1,labelShow:f=!1}=t,p={};if(!Array.isArray(s))return console.warn("rows must be an array"),[];s.forEach(y=>{for(let v in y){const h=e[v];!p[v]&&h&&(p[v]=[]),h&&p[v].push(y[v])}});const g=[];for(let y in p){const v=e[y],h=Ga(We({barGap:m},c?{stack:"stack"}:{}),{label:{show:f,color:"#314659"}}),d=We({smooth:u,symbolSize:10},l?{areaStyle:{opacity:.2}}:{}),b=v.type||"line",S=Object.assign({},{name:v.title+"",type:b,yAxisIndex:v.right?1:0,data:p[y],markPoint:{data:[]}},b==="line"?d:{},b==="bar"?h:{});v.markMax&&((n=(r=S.markPoint)==null?void 0:r.data)==null||n.push({name:"\u6700\u5927\u503C",type:"max"})),v.markMin&&((o=(i=S.markPoint)==null?void 0:i.data)==null||o.push({name:"\u6700\u5C0F\u503C",type:"min"})),g.push(S)}return g},Wa=(a,t)=>{const{LegendVisible:e=!0}=t;return oa(e)},Ue=(a,t,e=!1)=>{const r=Wt(a.columns),n=za(a,t),i=Ra(a,t),o=t.waterfall?$a(a,t):ja(a,t,r),s=Xa(a,t),l=Wa(a,t),{title:u={}}=t;return{aria:{decal:{show:e}},title:u,legend:l,xAxis:n,yAxis:i,series:o,tooltip:s}};var Ua=function(a){W(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return e.type=t.type,e.hasSymbolVisual=!0,e}return t.prototype.getInitialData=function(e){return ia(null,this,{useEncodeDefaulter:!0})},t.prototype.getLegendIcon=function(e){var r=new ge,n=Pe("line",0,e.itemHeight/2,e.itemWidth,0,e.lineStyle.stroke,!1);r.add(n),n.setStyle(e.lineStyle);var i=this.getData().getVisual("symbol"),o=this.getData().getVisual("symbolRotate"),s=i==="none"?"circle":i,l=e.itemHeight*.8,u=Pe(s,(e.itemWidth-l)/2,(e.itemHeight-l)/2,l,l,e.itemStyle.fill);r.add(u),u.setStyle(e.itemStyle);var m=e.iconRotate==="inherit"?o:e.iconRotate||0;return u.rotation=m*Math.PI/180,u.setOrigin([e.itemWidth/2,e.itemHeight/2]),s.indexOf("empty")>-1&&(u.style.stroke=u.style.fill,u.style.fill="#fff",u.style.lineWidth=2),r},t.type="series.line",t.dependencies=["grid","polar"],t.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},t}(Zt);const Za=Ua;function vt(a,t,e){var r=a.getBaseAxis(),n=a.getOtherAxis(r),i=Ka(n,e),o=r.dim,s=n.dim,l=t.mapDimension(s),u=t.mapDimension(o),m=s==="x"||s==="radius"?1:0,c=se(a.dimensions,function(g){return t.mapDimension(g)}),f=!1,p=t.getCalculationInfo("stackResultDimension");return ie(t,c[0])&&(f=!0,c[0]=p),ie(t,c[1])&&(f=!0,c[1]=p),{dataDimsForPoint:c,valueStart:i,valueAxisDim:s,baseAxisDim:o,stacked:!!f,valueDim:l,baseDim:u,baseDataOffset:m,stackedOverDimension:t.getCalculationInfo("stackedOverDimension")}}function Ka(a,t){var e=0,r=a.scale.getExtent();return t==="start"?e=r[0]:t==="end"?e=r[1]:it(t)&&!isNaN(t)?e=t:r[0]>0?e=r[0]:r[1]<0&&(e=r[1]),e}function yt(a,t,e,r){var n=NaN;a.stacked&&(n=e.get(e.getCalculationInfo("stackedOverDimension"),r)),isNaN(n)&&(n=a.valueStart);var i=a.baseDataOffset,o=[];return o[i]=e.get(a.baseDim,r),o[1-i]=n,t.dataToPoint(o)}function qa(a,t){var e=[];return t.diff(a).add(function(r){e.push({cmd:"+",idx:r})}).update(function(r,n){e.push({cmd:"=",idx:n,idx1:r})}).remove(function(r){e.push({cmd:"-",idx:r})}).execute(),e}function Ja(a,t,e,r,n,i,o,s){for(var l=qa(a,t),u=[],m=[],c=[],f=[],p=[],g=[],y=[],v=vt(n,t,o),h=a.getLayout("points")||[],d=t.getLayout("points")||[],b=0;b<l.length;b++){var S=l[b],w=!0,_=void 0,k=void 0;switch(S.cmd){case"=":_=S.idx*2,k=S.idx1*2;var T=h[_],M=h[_+1],L=d[k],H=d[k+1];(isNaN(T)||isNaN(M))&&(T=L,M=H),u.push(T,M),m.push(L,H),c.push(e[_],e[_+1]),f.push(r[k],r[k+1]),y.push(t.getRawIndex(S.idx1));break;case"+":var P=S.idx,I=v.dataDimsForPoint,x=n.dataToPoint([t.get(I[0],P),t.get(I[1],P)]);k=P*2,u.push(x[0],x[1]),m.push(d[k],d[k+1]);var C=yt(v,n,t,P);c.push(C[0],C[1]),f.push(r[k],r[k+1]),y.push(t.getRawIndex(P));break;case"-":w=!1}w&&(p.push(S),g.push(g.length))}g.sort(function(ue,$){return y[ue]-y[$]});for(var E=u.length,j=ae(E),N=ae(E),O=ae(E),Z=ae(E),K=[],b=0;b<g.length;b++){var re=g[b],G=b*2,z=re*2;j[G]=u[z],j[G+1]=u[z+1],N[G]=m[z],N[G+1]=m[z+1],O[G]=c[z],O[G+1]=c[z+1],Z[G]=f[z],Z[G+1]=f[z+1],K[b]=p[re]}return{current:j,next:N,stackedOnCurrent:O,stackedOnNext:Z,status:K}}var q=Math.min,J=Math.max;function ee(a,t){return isNaN(a)||isNaN(t)}function Ae(a,t,e,r,n,i,o,s,l){for(var u,m,c,f,p,g,y=e,v=0;v<r;v++){var h=t[y*2],d=t[y*2+1];if(y>=n||y<0)break;if(ee(h,d)){if(l){y+=i;continue}break}if(y===e)a[i>0?"moveTo":"lineTo"](h,d),c=h,f=d;else{var b=h-u,S=d-m;if(b*b+S*S<.5){y+=i;continue}if(o>0){for(var w=y+i,_=t[w*2],k=t[w*2+1];_===h&&k===d&&v<r;)v++,w+=i,y+=i,_=t[w*2],k=t[w*2+1],h=t[y*2],d=t[y*2+1],b=h-u,S=d-m;var T=v+1;if(l)for(;ee(_,k)&&T<r;)T++,w+=i,_=t[w*2],k=t[w*2+1];var M=.5,L=0,H=0,P=void 0,I=void 0;if(T>=r||ee(_,k))p=h,g=d;else{L=_-u,H=k-m;var x=h-u,C=_-h,E=d-m,j=k-d,N=void 0,O=void 0;if(s==="x"){N=Math.abs(x),O=Math.abs(C);var Z=L>0?1:-1;p=h-Z*N*o,g=d,P=h+Z*O*o,I=d}else if(s==="y"){N=Math.abs(E),O=Math.abs(j);var K=H>0?1:-1;p=h,g=d-K*N*o,P=h,I=d+K*O*o}else N=Math.sqrt(x*x+E*E),O=Math.sqrt(C*C+j*j),M=O/(O+N),p=h-L*o*(1-M),g=d-H*o*(1-M),P=h+L*o*M,I=d+H*o*M,P=q(P,J(_,h)),I=q(I,J(k,d)),P=J(P,q(_,h)),I=J(I,q(k,d)),L=P-h,H=I-d,p=h-L*N/O,g=d-H*N/O,p=q(p,J(u,h)),g=q(g,J(m,d)),p=J(p,q(u,h)),g=J(g,q(m,d)),L=h-p,H=d-g,P=h+L*O/N,I=d+H*O/N}a.bezierCurveTo(c,f,p,g,h,d),c=P,f=I}else a.lineTo(h,d)}u=h,m=d,y+=i}return v}var gt=function(){function a(){this.smooth=0,this.smoothConstraint=!0}return a}(),Ya=function(a){W(t,a);function t(e){var r=a.call(this,e)||this;return r.type="ec-polyline",r}return t.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},t.prototype.getDefaultShape=function(){return new gt},t.prototype.buildPath=function(e,r){var n=r.points,i=0,o=n.length/2;if(r.connectNulls){for(;o>0&&ee(n[o*2-2],n[o*2-1]);o--);for(;i<o&&ee(n[i*2],n[i*2+1]);i++);}for(;i<o;)i+=Ae(e,n,i,o,o,1,r.smooth,r.smoothMonotone,r.connectNulls)+1},t.prototype.getPointOn=function(e,r){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var n=this.path,i=n.data,o=Kt.CMD,s,l,u=r==="x",m=[],c=0;c<i.length;){var f=i[c++],p=void 0,g=void 0,y=void 0,v=void 0,h=void 0,d=void 0,b=void 0;switch(f){case o.M:s=i[c++],l=i[c++];break;case o.L:if(p=i[c++],g=i[c++],b=u?(e-s)/(p-s):(e-l)/(g-l),b<=1&&b>=0){var S=u?(g-l)*b+l:(p-s)*b+s;return u?[e,S]:[S,e]}s=p,l=g;break;case o.C:p=i[c++],g=i[c++],y=i[c++],v=i[c++],h=i[c++],d=i[c++];var w=u?Ne(s,p,y,h,e,m):Ne(l,g,v,d,e,m);if(w>0)for(var _=0;_<w;_++){var k=m[_];if(k<=1&&k>=0){var S=u?$e(l,g,v,d,k):$e(s,p,y,h,k);return u?[e,S]:[S,e]}}s=h,l=d;break}}},t}(st),Qa=function(a){W(t,a);function t(){return a!==null&&a.apply(this,arguments)||this}return t}(gt),er=function(a){W(t,a);function t(e){var r=a.call(this,e)||this;return r.type="ec-polygon",r}return t.prototype.getDefaultShape=function(){return new Qa},t.prototype.buildPath=function(e,r){var n=r.points,i=r.stackedOnPoints,o=0,s=n.length/2,l=r.smoothMonotone;if(r.connectNulls){for(;s>0&&ee(n[s*2-2],n[s*2-1]);s--);for(;o<s&&ee(n[o*2],n[o*2+1]);o++);}for(;o<s;){var u=Ae(e,n,o,s,s,1,r.smooth,l,r.connectNulls);Ae(e,i,o+u-1,u,s,-1,r.stackedOnSmooth,l,r.connectNulls),o+=u+1,e.closePath()}},t}(st);function Ze(a,t){if(a.length===t.length){for(var e=0;e<a.length;e++)if(a[e]!==t[e])return;return!0}}function Ke(a){for(var t=1/0,e=1/0,r=-1/0,n=-1/0,i=0;i<a.length;){var o=a[i++],s=a[i++];isNaN(o)||(t=Math.min(o,t),r=Math.max(o,r)),isNaN(s)||(e=Math.min(s,e),n=Math.max(s,n))}return[[t,e],[r,n]]}function qe(a,t){var e=Ke(a),r=e[0],n=e[1],i=Ke(t),o=i[0],s=i[1];return Math.max(Math.abs(r[0]-o[0]),Math.abs(r[1]-o[1]),Math.abs(n[0]-s[0]),Math.abs(n[1]-s[1]))}function Je(a){return it(a)?a:a?.5:0}function tr(a,t,e){if(!e.valueDim)return[];for(var r=t.count(),n=ae(r*2),i=0;i<r;i++){var o=yt(e,a,t,i);n[i*2]=o[0],n[i*2+1]=o[1]}return n}function Y(a,t,e,r){var n=t.getBaseAxis(),i=n.dim==="x"||n.dim==="radius"?0:1,o=[],s=0,l=[],u=[],m=[],c=[];if(r){for(s=0;s<a.length;s+=2)!isNaN(a[s])&&!isNaN(a[s+1])&&c.push(a[s],a[s+1]);a=c}for(s=0;s<a.length-2;s+=2)switch(m[0]=a[s+2],m[1]=a[s+3],u[0]=a[s],u[1]=a[s+1],o.push(u[0],u[1]),e){case"end":l[i]=m[i],l[1-i]=u[1-i],o.push(l[0],l[1]);break;case"middle":var f=(u[i]+m[i])/2,p=[];l[i]=p[i]=f,l[1-i]=u[1-i],p[1-i]=m[1-i],o.push(l[0],l[1]),o.push(p[0],p[1]);break;default:l[i]=u[i],l[1-i]=m[1-i],o.push(l[0],l[1])}return o.push(a[s++],a[s++]),o}function ar(a,t){var e=[],r=a.length,n,i;function o(m,c,f){var p=m.coord,g=(f-p)/(c.coord-p),y=ea(g,[m.color,c.color]);return{coord:f,color:y}}for(var s=0;s<r;s++){var l=a[s],u=l.coord;if(u<0)n=l;else if(u>t){i?e.push(o(i,l,t)):n&&e.push(o(n,l,0),o(n,l,t));break}else n&&(e.push(o(n,l,0)),n=null),e.push(l),i=l}return e}function rr(a,t,e){var r=a.getVisual("visualMeta");if(!(!r||!r.length||!a.count())&&t.type==="cartesian2d"){for(var n,i,o=r.length-1;o>=0;o--){var s=a.getDimensionInfo(r[o].dimension);if(n=s&&s.coordDim,n==="x"||n==="y"){i=r[o];break}}if(!!i){var l=t.getAxis(n),u=se(i.stops,function(b){return{coord:l.toGlobalCoord(l.dataToCoord(b.value)),color:b.color}}),m=u.length,c=i.outerColors.slice();m&&u[0].coord>u[m-1].coord&&(u.reverse(),c.reverse());var f=ar(u,n==="x"?e.getWidth():e.getHeight()),p=f.length;if(!p&&m)return u[0].coord<0?c[1]?c[1]:u[m-1].color:c[0]?c[0]:u[0].color;var g=10,y=f[0].coord-g,v=f[p-1].coord+g,h=v-y;if(h<.001)return"transparent";ye(f,function(b){b.offset=(b.coord-y)/h}),f.push({offset:p?f[p-1].offset:.5,color:c[1]||"transparent"}),f.unshift({offset:p?f[0].offset:.5,color:c[0]||"transparent"});var d=new Qt(0,0,0,0,f,!0);return d[n]=y,d[n+"2"]=v,d}}}function nr(a,t,e){var r=a.get("showAllSymbol"),n=r==="auto";if(!(r&&!n)){var i=e.getAxesByScale("ordinal")[0];if(!!i&&!(n&&or(i,t))){var o=t.mapDimension(i.dim),s={};return ye(i.getViewLabels(),function(l){var u=i.scale.getRawOrdinalNumber(l.tickValue);s[u]=1}),function(l){return!s.hasOwnProperty(t.get(o,l))}}}}function or(a,t){var e=a.getExtent(),r=Math.abs(e[1]-e[0])/a.scale.count();isNaN(r)&&(r=0);for(var n=t.count(),i=Math.max(1,Math.round(n/5)),o=0;o<n;o+=i)if(Te.getSymbolSize(t,o)[a.isHorizontal()?1:0]*1.5>r)return!1;return!0}function ir(a,t){return isNaN(a)||isNaN(t)}function sr(a){for(var t=a.length/2;t>0&&ir(a[t*2-2],a[t*2-1]);t--);return t-1}function Ye(a,t){return[a[t*2],a[t*2+1]]}function lr(a,t,e){for(var r=a.length/2,n=e==="x"?0:1,i,o,s=0,l=-1,u=0;u<r;u++)if(o=a[u*2+n],!(isNaN(o)||isNaN(a[u*2+1-n]))){if(u===0){i=o;continue}if(i<=t&&o>=t||i>=t&&o<=t){l=u;break}s=u,i=o}return{range:[s,l],t:(t-i)/(o-i)}}function dt(a){if(a.get(["endLabel","show"]))return!0;for(var t=0;t<Be.length;t++)if(a.get([Be[t],"endLabel","show"]))return!0;return!1}function ke(a,t,e,r){if(la(t,"cartesian2d")){var n=r.getModel("endLabel"),i=n.get("valueAnimation"),o=r.getData(),s={lastFrameIndex:0},l=dt(r)?function(p,g){a._endLabelOnDuring(p,g,o,s,i,n,t)}:null,u=t.getBaseAxis().isHorizontal(),m=ua(t,e,r,function(){var p=a._endLabel;p&&e&&s.originalX!=null&&p.attr({x:s.originalX,y:s.originalY})},l);if(!r.get("clip",!0)){var c=m.shape,f=Math.max(c.width,c.height);u?(c.y-=f,c.height+=f*2):(c.x-=f,c.width+=f*2)}return l&&l(1,m),m}else return ca(t,e,r)}function ur(a,t){var e=t.getBaseAxis(),r=e.isHorizontal(),n=e.inverse,i=r?n?"right":"left":"center",o=r?"middle":n?"top":"bottom";return{normal:{align:a.get("align")||i,verticalAlign:a.get("verticalAlign")||o}}}var cr=function(a){W(t,a);function t(){return a!==null&&a.apply(this,arguments)||this}return t.prototype.init=function(){var e=new ge,r=new ft;this.group.add(r.group),this._symbolDraw=r,this._lineGroup=e},t.prototype.render=function(e,r,n){var i=this,o=e.coordinateSystem,s=this.group,l=e.getData(),u=e.getModel("lineStyle"),m=e.getModel("areaStyle"),c=l.getLayout("points")||[],f=o.type==="polar",p=this._coordSys,g=this._symbolDraw,y=this._polyline,v=this._polygon,h=this._lineGroup,d=e.get("animation"),b=!m.isEmpty(),S=m.get("origin"),w=vt(o,l,S),_=b&&tr(o,l,w),k=e.get("showSymbol"),T=e.get("connectNulls"),M=k&&!f&&nr(e,l,o),L=this._data;L&&L.eachItemGraphicEl(function($,Pt){$.__temp&&(s.remove($),L.setItemGraphicEl(Pt,null))}),k||g.remove(),s.add(h);var H=f?!1:e.get("step"),P;o&&o.getArea&&e.get("clip",!0)&&(P=o.getArea(),P.width!=null?(P.x-=.1,P.y-=.1,P.width+=.2,P.height+=.2):P.r0&&(P.r0-=.5,P.r+=.5)),this._clipShapeForSymbol=P;var I=rr(l,o,n)||l.getVisual("style")[l.getVisual("drawType")];if(!(y&&p.type===o.type&&H===this._step))k&&g.updateData(l,{isIgnore:M,clipShape:P,disableAnimation:!0,getSymbolPoint:function($){return[c[$*2],c[$*2+1]]}}),d&&this._initSymbolLabelAnimation(l,o,P),H&&(c=Y(c,o,H,T),_&&(_=Y(_,o,H,T))),y=this._newPolyline(c),b?v=this._newPolygon(c,_):v&&(h.remove(v),v=this._polygon=null),f||this._initOrUpdateEndLabel(e,o,xe(I)),h.setClipPath(ke(this,o,!0,e));else{b&&!v?v=this._newPolygon(c,_):v&&!b&&(h.remove(v),v=this._polygon=null),f||this._initOrUpdateEndLabel(e,o,xe(I));var x=h.getClipPath();if(x){var C=ke(this,o,!1,e);nt(x,{shape:C.shape},e)}else h.setClipPath(ke(this,o,!0,e));k&&g.updateData(l,{isIgnore:M,clipShape:P,disableAnimation:!0,getSymbolPoint:function($){return[c[$*2],c[$*2+1]]}}),(!Ze(this._stackedOnPoints,_)||!Ze(this._points,c))&&(d?this._doUpdateAnimation(l,_,o,n,H,S,T):(H&&(c=Y(c,o,H,T),_&&(_=Y(_,o,H,T))),y.setShape({points:c}),v&&v.setShape({points:c,stackedOnPoints:_})))}var E=e.getModel("emphasis"),j=E.get("focus"),N=E.get("blurScope"),O=E.get("disabled");if(y.useStyle(Ce(u.getLineStyle(),{fill:"none",stroke:I,lineJoin:"bevel"})),Ee(y,e,"lineStyle"),y.style.lineWidth>0&&e.get(["emphasis","lineStyle","width"])==="bolder"){var Z=y.getState("emphasis").style;Z.lineWidth=+y.style.lineWidth+1}ne(y).seriesIndex=e.seriesIndex,we(y,j,N,O);var K=Je(e.get("smooth")),re=e.get("smoothMonotone");if(y.setShape({smooth:K,smoothMonotone:re,connectNulls:T}),v){var G=l.getCalculationInfo("stackedOnSeries"),z=0;v.useStyle(Ce(m.getAreaStyle(),{fill:I,opacity:.7,lineJoin:"bevel",decal:l.getVisual("style").decal})),G&&(z=Je(G.get("smooth"))),v.setShape({smooth:K,stackedOnSmooth:z,smoothMonotone:re,connectNulls:T}),Ee(v,e,"areaStyle"),ne(v).seriesIndex=e.seriesIndex,we(v,j,N,O)}var ue=function($){i._changePolyState($)};l.eachItemGraphicEl(function($){$&&($.onHoverStateChange=ue)}),this._polyline.onHoverStateChange=ue,this._data=l,this._coordSys=o,this._stackedOnPoints=_,this._points=c,this._step=H,this._valueOrigin=S,e.get("triggerLineEvent")&&(this.packEventData(e,y),v&&this.packEventData(e,v))},t.prototype.packEventData=function(e,r){ne(r).eventData={componentType:"series",componentSubType:"line",componentIndex:e.componentIndex,seriesIndex:e.seriesIndex,seriesName:e.name,seriesType:"line"}},t.prototype.highlight=function(e,r,n,i){var o=e.getData(),s=Ve(o,i);if(this._changePolyState("emphasis"),!(s instanceof Array)&&s!=null&&s>=0){var l=o.getLayout("points"),u=o.getItemGraphicEl(s);if(!u){var m=l[s*2],c=l[s*2+1];if(isNaN(m)||isNaN(c)||this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(m,c))return;var f=e.get("zlevel")||0,p=e.get("z")||0;u=new Te(o,s),u.x=m,u.y=c,u.setZ(f,p);var g=u.getSymbolPath().getTextContent();g&&(g.zlevel=f,g.z=p,g.z2=this._polyline.z2+1),u.__temp=!0,o.setItemGraphicEl(s,u),u.stopSymbolAnimation(!0),this.group.add(u)}u.highlight()}else de.prototype.highlight.call(this,e,r,n,i)},t.prototype.downplay=function(e,r,n,i){var o=e.getData(),s=Ve(o,i);if(this._changePolyState("normal"),s!=null&&s>=0){var l=o.getItemGraphicEl(s);l&&(l.__temp?(o.setItemGraphicEl(s,null),this.group.remove(l)):l.downplay())}else de.prototype.downplay.call(this,e,r,n,i)},t.prototype._changePolyState=function(e){var r=this._polygon;Fe(this._polyline,e),r&&Fe(r,e)},t.prototype._newPolyline=function(e){var r=this._polyline;return r&&this._lineGroup.remove(r),r=new Ya({shape:{points:e},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(r),this._polyline=r,r},t.prototype._newPolygon=function(e,r){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new er({shape:{points:e,stackedOnPoints:r},segmentIgnoreThreshold:2}),this._lineGroup.add(n),this._polygon=n,n},t.prototype._initSymbolLabelAnimation=function(e,r,n){var i,o,s=r.getBaseAxis(),l=s.inverse;r.type==="cartesian2d"?(i=s.isHorizontal(),o=!1):r.type==="polar"&&(i=s.dim==="angle",o=!0);var u=e.hostModel,m=u.get("animationDuration");R(m)&&(m=m(null));var c=u.get("animationDelay")||0,f=R(c)?c(null):c;e.eachItemGraphicEl(function(p,g){var y=p;if(y){var v=[p.x,p.y],h=void 0,d=void 0,b=void 0;if(n)if(o){var S=n,w=r.pointToCoord(v);i?(h=S.startAngle,d=S.endAngle,b=-w[1]/180*Math.PI):(h=S.r0,d=S.r,b=w[0])}else{var _=n;i?(h=_.x,d=_.x+_.width,b=p.x):(h=_.y+_.height,d=_.y,b=p.y)}var k=d===h?0:(b-h)/(d-h);l&&(k=1-k);var T=R(c)?c(g):m*k+f,M=y.getSymbolPath(),L=M.getTextContent();y.attr({scaleX:0,scaleY:0}),y.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:T}),L&&L.animateFrom({style:{opacity:0}},{duration:300,delay:T}),M.disableLabelAnimation=!0}})},t.prototype._initOrUpdateEndLabel=function(e,r,n){var i=e.getModel("endLabel");if(dt(e)){var o=e.getData(),s=this._polyline,l=o.getLayout("points");if(!l){s.removeTextContent(),this._endLabel=null;return}var u=this._endLabel;u||(u=this._endLabel=new qt({z2:200}),u.ignoreClip=!0,s.setTextContent(this._endLabel),s.disableLabelAnimation=!0);var m=sr(l);m>=0&&(ot(s,De(e,"endLabel"),{inheritColor:n,labelFetcher:e,labelDataIndex:m,defaultText:function(c,f,p){return p!=null?sa(o,p):ut(o,c)},enableTextSetter:!0},ur(i,r)),s.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},t.prototype._endLabelOnDuring=function(e,r,n,i,o,s,l){var u=this._endLabel,m=this._polyline;if(u){e<1&&i.originalX==null&&(i.originalX=u.x,i.originalY=u.y);var c=n.getLayout("points"),f=n.hostModel,p=f.get("connectNulls"),g=s.get("precision"),y=s.get("distance")||0,v=l.getBaseAxis(),h=v.isHorizontal(),d=v.inverse,b=r.shape,S=d?h?b.x:b.y+b.height:h?b.x+b.width:b.y,w=(h?y:0)*(d?-1:1),_=(h?0:-y)*(d?-1:1),k=h?"x":"y",T=lr(c,S,k),M=T.range,L=M[1]-M[0],H=void 0;if(L>=1){if(L>1&&!p){var P=Ye(c,M[0]);u.attr({x:P[0]+w,y:P[1]+_}),o&&(H=f.getRawValue(M[0]))}else{var P=m.getPointOn(S,k);P&&u.attr({x:P[0]+w,y:P[1]+_});var I=f.getRawValue(M[0]),x=f.getRawValue(M[1]);o&&(H=Jt(n,g,I,x,T.t))}i.lastFrameIndex=M[0]}else{var C=e===1||i.lastFrameIndex>0?M[0]:0,P=Ye(c,C);o&&(H=f.getRawValue(C)),u.attr({x:P[0]+w,y:P[1]+_})}o&&Yt(u).setLabelText(H)}},t.prototype._doUpdateAnimation=function(e,r,n,i,o,s,l){var u=this._polyline,m=this._polygon,c=e.hostModel,f=Ja(this._data,e,this._stackedOnPoints,r,this._coordSys,n,this._valueOrigin),p=f.current,g=f.stackedOnCurrent,y=f.next,v=f.stackedOnNext;if(o&&(p=Y(f.current,n,o,l),g=Y(f.stackedOnCurrent,n,o,l),y=Y(f.next,n,o,l),v=Y(f.stackedOnNext,n,o,l)),qe(p,y)>3e3||m&&qe(g,v)>3e3){u.stopAnimation(),u.setShape({points:y}),m&&(m.stopAnimation(),m.setShape({points:y,stackedOnPoints:v}));return}u.shape.__points=f.current,u.shape.points=p;var h={shape:{points:y}};f.current!==p&&(h.shape.__points=f.next),u.stopAnimation(),fe(u,h,c),m&&(m.setShape({points:p,stackedOnPoints:g}),m.stopAnimation(),fe(m,{shape:{stackedOnPoints:v}},c),u.shape.points!==m.shape.points&&(m.shape.points=u.shape.points));for(var d=[],b=f.status,S=0;S<b.length;S++){var w=b[S].cmd;if(w==="="){var _=e.getItemGraphicEl(b[S].idx1);_&&d.push({el:_,ptIdx:S})}}u.animators&&u.animators.length&&u.animators[0].during(function(){m&&m.dirtyShape();for(var k=u.shape.__points,T=0;T<d.length;T++){var M=d[T].el,L=d[T].ptIdx*2;M.x=k[L],M.y=k[L+1],M.markRedraw()}})},t.prototype.remove=function(e){var r=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(i,o){i.__temp&&(r.remove(i),n.setItemGraphicEl(o,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},t.type="line",t}(de);const mr=cr;function pr(a,t){return{seriesType:a,plan:ta(),reset:function(e){var r=e.getData(),n=e.coordinateSystem,i=e.pipelineContext,o=t||i.large;if(!!n){var s=se(n.dimensions,function(p){return r.mapDimension(p)}).slice(0,2),l=s.length,u=r.getCalculationInfo("stackResultDimension");ie(r,s[0])&&(s[0]=u),ie(r,s[1])&&(s[1]=u);var m=r.getStore(),c=r.getDimensionIndex(s[0]),f=r.getDimensionIndex(s[1]);return l&&{progress:function(p,g){for(var y=p.end-p.start,v=o&&ae(y*l),h=[],d=[],b=p.start,S=0;b<p.end;b++){var w=void 0;if(l===1){var _=m.get(c,b);w=n.dataToPoint(_,null,d)}else h[0]=m.get(c,b),h[1]=m.get(f,b),w=n.dataToPoint(h,null,d);o?(v[S++]=w[0],v[S++]=w[1]):g.setItemLayout(b,w.slice())}o&&g.setLayout("points",v)}}}}}}function fr(a){a.registerChartView(mr),a.registerSeriesModel(Za),a.registerLayout(pr("line",!0)),a.registerVisual({seriesType:"line",reset:function(t){var e=t.getData(),r=t.getModel("lineStyle").getLineStyle();r&&!r.stroke&&(r.stroke=e.getVisual("style").fill),e.setVisual("legendLineStyle",r)}}),a.registerProcessor(a.PRIORITY.PROCESSOR.STATISTIC,ma("line"))}var hr=Object.defineProperty,vr=Object.defineProperties,yr=Object.getOwnPropertyDescriptors,ve=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,Qe=(a,t,e)=>t in a?hr(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,et=(a,t)=>{for(var e in t||(t={}))bt.call(t,e)&&Qe(a,e,t[e]);if(ve)for(var e of ve(t))_t.call(t,e)&&Qe(a,e,t[e]);return a},tt=(a,t)=>vr(a,yr(t)),gr=(a,t)=>{var e={};for(var r in a)bt.call(a,r)&&t.indexOf(r)<0&&(e[r]=a[r]);if(a!=null&&ve)for(var r of ve(a))t.indexOf(r)<0&&_t.call(a,r)&&(e[r]=a[r]);return e};lt([pa,fr]);const U=fa({name:"HHistogram",data(){return{Options:{}}},props:tt(et({},ra),{dataSource:{type:Object,default:()=>({})},settings:{type:Object,default:()=>({})}}),render(){const a=this.$props,t=gr(a,["dataSource","settings"]),e=this.Options;return ha(aa,tt(et({},t),{options:e}))},mounted(){const{dataSource:a,settings:t,ariaShow:e}=this.$props;this.Options=Ue(a,t,e)},watch:{$props(){const{dataSource:a,settings:t,ariaShow:e}=this.$props;this.Options=Ue(a,t,e)}}}),St=()=>le.mock({columns:[{title:"\u603B\u8BA1",key:"sum",type:"bar"},{title:"\u7528\u6237",key:"user",type:"bar"},{title:"\u6570\u91CF",key:"num"}],"xAxis|6":['@date("yyyy-MM-dd")'],"rows|6":[{"sum|1000-3000":800,"user|1000-1500":1393,"num|1200-2000":1593}]}),kt=()=>le.mock({columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u4E0B\u57CE\u4EBA\u6570",key:"number3"}],"xAxis|6":['@date("yyyy-MM-dd")'],"rows|6":[{"number1|100-1000":800,"number2|1000-1500":1393,"number3|500-2000":500}]}),dr=()=>le.mock({columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u6BD4\u7387",key:"ratio",right:!0,type:"bar"}],"xAxis|6":['@date("yyyy-MM-dd")'],"rows|6":[{"number1|100-1000":800,"number2|1000-1500":1393,"ratio|0-100":50}]}),br=()=>{let a=[],t=Date.parse(new Date);for(let e=0;e<10;e++){let r=Math.floor(Math.random()*2201+800),n=Math.floor(Math.random()*(3e3-800+1)+100),i=Math.floor(Math.random()*(3e3-800+1)+400),o=t-e*30*60*1e3;a.unshift({number1:[o,r],number2:[o,n],number3:[o,i]})}return{columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u4E0B\u57CE\u4EBA\u6570",key:"number3"}],rows:a}},_r=()=>{let a=[];for(let t=0;t<10;t++){let e=Math.floor(Math.random()*2201+800),r=Math.floor(Math.random()*(3e3-800+1)+100),n=Math.floor(Math.random()*(3e3-800+1)+400),i=t;a.unshift({number1:[i,e],number2:[i,r],number3:[i,n]})}return{columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u4E0B\u57CE\u4EBA\u6570",key:"number3"}],rows:a}},Sr=`
<template>
  <HHistogram :dataSource="dataSource"></HHistogram>
</template>
<script>
import { HHistogram } from '@yyr1994/h-charts'
export default {
  components: {
    HHistogram
  },
  data () {
    return {
      dataSource: {
        columns: [
          { title: '\u603B\u8BA1', key: 'sum', type: 'bar' },
          { title: '\u7528\u6237', key: 'user', type: 'bar' },
          { title: '\u6570\u91CF', key: 'num' }
        ],
        xAxis: [
          '2020-11-01',
          '2020-11-02',
          '2020-11-03',
          '2020-11-04',
          '2020-11-05',
          '2020-11-06'
        ],
        rows: [
          { sum: 1111, user: 1393, num: 1593 },
          { sum: 2222, user: 1393, num: 1593 },
          { sum: 3333, user: 1393, num: 1593 },
          { sum: 4444, user: 1393, num: 1593 },
          { sum: 5555, user: 1393, num: 1593 },
          { sum: 6666, user: 1393, num: 1593 }
        ]
      }
    }
  }
}
<\/script>
`,kr={name:"BaseLine",components:{HHistogram:U},data(){return{dataSource:St(),codePre:Sr}},methods:{}},Pr={class:"chart-content"},wr=X("h3",{class:"h3"},"\u57FA\u7840\u793A\u4F8B",-1);function Ar(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism"),l=A("ShowMore");return F(),B("div",Pr,[wr,D(o,{dataSource:n.dataSource,ariaShow:""},null,8,["dataSource"]),D(l,null,{default:Q(()=>[D(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const Dr=V(kr,[["render",Ar]]),Tr=`
<template>
  <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>
</template>
<script>
import { HHistogram } from '@yyr1994/h-charts'
export default {
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        area: true
      },
      dataSource: {
        "columns": [
          {
            "title": "\u4F59\u676D\u4EBA\u6570",
            "key": "number1"
          },
          {
            "title": "\u897F\u6E56\u4EBA\u6570",
            "key": "number2"
          },
          {
            "title": "\u4E0B\u57CE\u4EBA\u6570",
            "key": "number3"
          }
        ],
        "xAxis": [
          "2002-04-12",
          "2014-08-06",
          "2017-01-24",
          "2015-11-17",
          "1998-06-19",
          "1980-04-18"
        ],
        "rows": [
          {
            "number1": 999,
            "number2": 1350,
            "number3": 1606
          },
          {
            "number1": 836,
            "number2": 1491,
            "number3": 1876
          },
          {
            "number1": 494,
            "number2": 1362,
            "number3": 1073
          },
          {
            "number1": 858,
            "number2": 1384,
            "number3": 1078
          },
          {
            "number1": 927,
            "number2": 1087,
            "number3": 1146
          },
          {
            "number1": 115,
            "number2": 1036,
            "number3": 1098
          }
        ]
      }
    }
  }
}
<\/script>
`,Mr={name:"BaseLine",components:{HHistogram:U},data(){return{settings:{area:!0,axisPointer:!0},dataSource:kt(),codePre:Tr}}},Lr={class:"chart-content"},Hr=X("h3",{class:"h3"},"Line \u5806\u53E0\u9762\u79EF\u56FE",-1);function Ir(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism"),l=A("ShowMore");return F(),B("div",Lr,[Hr,D(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),D(l,null,{default:Q(()=>[D(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const Or=V(Mr,[["render",Ir]]),Nr=`
<template>
  <HLine :dataSource="dataSource"></HLine>
</template>
<script>
import { HLine } from '@yyr1994/h-charts'
export default {
  components: {
    HLine
  },
  data () {
    return {
      settings: {
        yFormatter: [(val) =>  val + '\u4EBA', '{value}%'],
        yAxisName: ['\u4EBA\u6570', '\u6BD4\u7387']
      },
      dataSource: {
        columns: [
          { title: '\u4F59\u676D\u4EBA\u6570', key: 'number1'},
          { title: '\u897F\u6E56\u4EBA\u6570', key: 'number2' },
          { title: '\u6BD4\u7387', key: 'ratio', right: true, type: 'bar' }  // right\u8BBE\u7F6E\u4E3Atrue\uFF0C\u6BD4\u7387\u4F9D\u636E\u53F3\u4FA7\u5750\u6807\u663E\u793A
        ],
        xAxis: [
          '2020-11-01',
          '2020-11-02',
          '2020-11-03',
          '2020-11-04',
          '2020-11-05',
          '2020-11-06'
        ],
        rows: [
          { number1: 1111, number2: 1393, ratio: 10 },
          { number1: 2222, number2: 1393, ratio: 20 },
          { number1: 3333, number2: 1393, ratio: 30 },
          { number1: 4444, number2: 1393, ratio: 40 },
          { number1: 5555, number2: 1393, ratio: 50 },
          { number1: 6666, number2: 1393, ratio: 60 }
        ]
      }
    }
  }

}
<\/script>
`,$r={name:"BaseLine",components:{HHistogram:U},data(){const{xAxis:a,rows:t,columns:e}=dr();return{settings:{yFormatter:[r=>`${r} \u4EBA`,"{value}%"],yAxisName:["\u4EBA\u6570","\u6BD4\u7387"]},dataSource:{columns:e,xAxis:a,rows:t},codePre:Nr}}},xr={class:"chart-content"},Cr=X("h3",{class:"h3"},"\u8BBE\u7F6E\u53CCY\u8F74",-1);function Er(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism"),l=A("ShowMore");return F(),B("div",xr,[Cr,D(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),D(l,null,{default:Q(()=>[D(s,{languages:"html",code:n.codePre},null,8,["code"])]),_:1})])}const Vr=V($r,[["render",Er]]),Fr=`
// dataSource \u540C\u4E0A

settings: {
  smooth: false
},
`,Br={name:"BaseLine",components:{HHistogram:U},data(){return{settings:{smooth:!1},dataSource:kt(),codeStr:Fr}}},Gr={class:"chart-content"},zr=X("h3",{class:"h3"},"\u66F2\u7EBF\u4E0D\u5E73\u6ED1\u793A\u4F8B",-1);function Rr(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism");return F(),B("div",Gr,[zr,D(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),D(s,{languages:"javascript",isLineNumber:"",code:n.codeStr},null,8,["code"])])}const Xr=V(Br,[["render",Rr]]),jr=`
/*
 * \u6CE8\u610F\u4F7F\u7528\u6807\u6CE8\u9700\u8981\u6309\u9700\u624B\u52A8\u52A0\u8F7D markPoint \u7EC4\u4EF6
 */

<template>
  <HHistogram :dataSource="dataSource"></HHistogram>
</template>
<script>
import { HHistogram } from '@yyr1994/h-charts'
import 'echarts/lib/component/markPoint'

export default {
  components: {
    HHistogram
  },
  data () {
    return {
      dataSource: {
        columns: [
          {
            title: '\u603B\u8BA1',
            key: 'sum',
            markMin: true,
            markMax: true
          },
          {
            title: '\u7528\u6237',
            key: 'user',
            markMin: true
          },
          {
            title: '\u6570\u91CF',
            key: 'num',
            markMax: true
          }
        ],
        xAxis: [
          '2020-11-01',
          '2020-11-02',
          '2020-11-03',
          '2020-11-04',
          '2020-11-05',
          '2020-11-06'
        ],
        rows: [
          { sum: 1111, user: 1393, num: 1593 },
          { sum: 2222, user: 1393, num: 1593 },
          { sum: 3333, user: 1393, num: 1593 },
          { sum: 4444, user: 1393, num: 1593 },
          { sum: 5555, user: 1393, num: 1593 },
          { sum: 6666, user: 1393, num: 1593 }
        ]
      }
    }
  }

}
<\/script>
`;lt(Na);const Wr={name:"BaseLine",components:{HHistogram:U},data(){const{xAxis:a,rows:t}=St();return{dataSource:{columns:[{title:"\u603B\u8BA1",key:"sum",markMin:!0,markMax:!0},{title:"\u7528\u6237",key:"user",markMin:!0},{title:"\u6570\u91CF",key:"num",markMax:!0}],xAxis:a,rows:t},codePre:jr}}},Ur={class:"chart-content"},Zr=X("h3",{class:"h3"},"\u663E\u793A\u6700\u5927\u6700\u5C0F\u6807\u6CE8",-1);function Kr(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism"),l=A("ShowMore");return F(),B("div",Ur,[Zr,D(o,{dataSource:n.dataSource},null,8,["dataSource"]),D(l,null,{default:Q(()=>[D(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const qr=V(Wr,[["render",Kr]]),Jr=`
/*
 * \u6CE8\u610F:
 *  1. \u4F7F\u7528\u540C\u4E0A xAxisType: time
 *  2. \u4F7F\u7528 xAxisType:value dataSource.xAxis\u4E0D\u8D77\u4F5C\u7528
 *  3. dataSource.rows \u5C5E\u6027\u7684value\u662F\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4 [index, value]
 */
`,Yr={name:"XAxisType",components:{HHistogram:U},data(){return{settings:{xAxisType:"value"},dataSource:_r(),codePre:Jr}}},Qr={class:"chart-content"},en=X("h3",{class:"h3"},"x\u8F74 xAxisType: value \u7C7B\u578B",-1);function tn(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism"),l=A("ShowMore");return F(),B("div",Qr,[en,D(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),D(l,null,{default:Q(()=>[D(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const an=V(Yr,[["render",tn]]),rn=`
/*
 * \u6CE8\u610F:
 *  1. \u4F7F\u7528 xAxisType:time dataSource.xAxis\u4E0D\u8D77\u4F5C\u7528
 *  2. dataSource.rows \u5C5E\u6027\u7684value\u662F\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4 [\u65F6\u95F4\u6233, value]
 */

<template>
  <HHistogram :dataSource="dataSource"></HHistogram>
</template>
<script>
import { HHistogram } from '@yyr1994/h-charts'

export default {
  components: {
    HHistogram
  },
  data () {
    return {
      dataSource: {
        'columns': [
          { title: '\u4F59\u676D\u4EBA\u6570', key: 'number1'},
          { title: '\u897F\u6E56\u4EBA\u6570', key: 'number2' },
          { title: '\u4E0B\u57CE\u4EBA\u6570', key: 'number3' }
        ],
        rows: [{
          "number1": [
            1605581788000,
            1798
          ],
          "number2": [
            1605581788000,
            2200
          ],
          "number3": [
            1605581788000,
            2518
          ]
        }, {
          "number1": [
            1605583588000,
            1776
          ],
          "number2": [
            1605583588000,
            1182
          ],
          "number3": [
            1605583588000,
            869
          ]
        }, {
          "number1": [
            1605585388000,
            2480
          ],
          "number2": [
            1605585388000,
            719
          ],
          "number3": [
            1605585388000,
            1743
          ]
        }, {
          "number1": [
            1605587188000,
            2840
          ],
          "number2": [
            1605587188000,
            1733
          ],
          "number3": [
            1605587188000,
            1186
          ]
        }, {
          "number1": [
            1605588988000,
            2829
          ],
          "number2": [
            1605588988000,
            972
          ],
          "number3": [
            1605588988000,
            1535
          ]
        }, {
          "number1": [
            1605590788000,
            1735
          ],
          "number2": [
            1605590788000,
            940
          ],
          "number3": [
            1605590788000,
            1768
          ]
        }, {
          "number1": [
            1605592588000,
            2957
          ],
          "number2": [
            1605592588000,
            2010
          ],
          "number3": [
            1605592588000,
            1011
          ]
        }, {
          "number1": [
            1605594388000,
            1650
          ],
          "number2": [
            1605594388000,
            377
          ],
          "number3": [
            1605594388000,
            792
          ]
        }, {
          "number1": [
            1605596188000,
            2072
          ],
          "number2": [
            1605596188000,
            250
          ],
          "number3": [
            1605596188000,
            2048
          ]
        }, {
          "number1": [
            1605597988000,
            1401
          ],
          "number2": [
            1605597988000,
            2130
          ],
          "number3": [
            1605597988000,
            671
          ]
        }]
      }
    }
  }

}
<\/script>
`,nn={name:"XAxisType",components:{HHistogram:U},data(){return{settings:{xAxisType:"time"},dataSource:br(),codePreTime:rn}}},on={class:"chart-content"},sn=X("h3",{class:"h3"},"x\u8F74 xAxisType:time \u7C7B\u578B",-1);function ln(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism"),l=A("ShowMore");return F(),B("div",on,[sn,D(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),D(l,null,{default:Q(()=>[D(s,{languages:"html",isLineNumber:"",code:n.codePreTime},null,8,["code"])]),_:1})])}const un=V(nn,[["render",ln]]),cn=(a="bar")=>le.mock({columns:[{title:"\u84B8\u53D1\u91CF",key:"evaporation",type:"bar"},{title:"\u964D\u96E8\u91CF",key:"rainfall",type:"bar"}],xAxis:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],"rows|12":[{"evaporation|100-1000":800,"rainfall|500-2000":1393}]}),mn=()=>le.mock({columns:[{title:"\u623F\u79DF",key:"number1"},{title:"\u6C34\u7535\u8D39",key:"number2"},{title:"\u4EA4\u901A\u8D39",key:"number3"},{title:"\u4F19\u98DF\u8D39",key:"number4"},{title:"\u65E5\u7528\u54C1\u6570",key:"number5"}],rows:[{number1:3e3,number2:1e3,number3:2e3,number4:400,number5:600}]}),pn=`
<template>
  <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>
</template>
<script>
import { HHistogram } from '@yyr1994/h-charts'
export default {
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        stack: true // \u67F1\u72B6\u56FE\u5806\u53E0\u56FE
      },
      dataSource: {
        "columns": [
          {
            "title": "\u84B8\u53D1\u91CF",
            "key": "evaporation",
            "type": "bar"
          },
          {
            "title": "\u964D\u96E8\u91CF",
            "key": "rainfall",
            "type": "bar"
          }
        ],
        "xAxis": [
          "1\u6708",
          "2\u6708",
          "3\u6708",
          "4\u6708",
          "5\u6708",
          "6\u6708",
          "7\u6708",
          "8\u6708",
          "9\u6708",
          "10\u6708",
          "11\u6708",
          "12\u6708"
        ],
        "rows": [
          {
            "evaporation": 529,
            "rainfall": 1806
          },
          {
            "evaporation": 681,
            "rainfall": 1840
          },
          {
            "evaporation": 882,
            "rainfall": 1664
          },
          {
            "evaporation": 920,
            "rainfall": 1056
          },
          {
            "evaporation": 959,
            "rainfall": 1026
          },
          {
            "evaporation": 289,
            "rainfall": 1461
          },
          {
            "evaporation": 347,
            "rainfall": 1884
          },
          {
            "evaporation": 440,
            "rainfall": 528
          },
          {
            "evaporation": 852,
            "rainfall": 911
          },
          {
            "evaporation": 381,
            "rainfall": 574
          },
          {
            "evaporation": 267,
            "rainfall": 1970
          },
          {
            "evaporation": 945,
            "rainfall": 1410
          }
        ]
      }
    }
  }
}
<\/script>
`,fn={name:"BaseLine",components:{HHistogram:U},data(){return{settings:{stack:!0},dataSource:cn(),codePre:pn}}},hn={class:"chart-content"},vn=X("h3",{class:"h3"},"Bar \u5806\u53E0\u56FE",-1);function yn(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism"),l=A("ShowMore");return F(),B("div",hn,[vn,D(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),D(l,null,{default:Q(()=>[D(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const gn=V(fn,[["render",yn]]),dn=`
/*
 * \u6CE8\u610F:
 *  1. \u4F7F\u7528 waterfall: true dataSource.xAxis \u4E0D\u8D77\u4F5C\u7528
 *  2. rows \u662F\u957F\u5EA6\u4E3A1\u7684\u6570\u7EC4\u7ED3\u6784
 *  3. \u9ED8\u8BA4\u5B58\u5728\u603B\u8BA1\uFF0C\u4E5F\u5C31\u662F\u6240\u6709\u6570\u636E\u4E4B\u5982
 *  4. columns \u4E2D\u7684type: line \u4E0D\u8D77\u4F5C\u7528
 */

<template>
  <HHistogram :dataSource="dataSource" :settings="settings"></HHistogram>
</template>
<script>
import { HHistogram } from '@yyr1994/h-charts'

export default {
  components: {
    HHistogram
  },
  data () {
    return {
      settings: {
        waterfall: true,
        fallTotalName: '\u{1F602}',
        fallLegendName: '\u751F\u6D3B\u8D39',
        fallBarColor: '#27727b'
      },
      dataSource: {
        "columns": [
          {
            "title": "\u623F\u79DF",
            "key": "number1"
          },
          {
            "title": "\u6C34\u7535\u8D39",
            "key": "number2"
          },
          {
            "title": "\u4EA4\u901A\u8D39",
            "key": "number3"
          },
          {
            "title": "\u4F19\u98DF\u8D39",
            "key": "number4"
          },
          {
            "title": "\u65E5\u7528\u54C1\u6570",
            "key": "number5"
          }
        ],
        "rows": [
          {
            "number1": 3000,
            "number2": 1000,
            "number3": 2000,
            "number4": 400,
            "number5": 600
          }
        ]
      }
    }
  }

}
<\/script>
`,bn={name:"BaseLine",components:{HHistogram:U},data(){return{settings:{waterfall:!0,fallTotalName:"\u{1F602}",fallLegendName:"\u751F\u6D3B\u8D39",fallBarColor:"#27727b"},dataSource:mn(),codePre:dn}}},_n={class:"chart-content"},Sn=X("h3",{class:"h3"},"Bar \u7011\u5E03\u56FE",-1);function kn(a,t,e,r,n,i){const o=A("HHistogram"),s=A("Prism"),l=A("ShowMore");return F(),B("div",_n,[Sn,D(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),D(l,null,{default:Q(()=>[D(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const Pn=V(bn,[["render",kn]]);const wn={data(){return{columns:[{title:"\u914D\u7F6E\u5C5E\u6027",key:"attribute",align:"center"},{title:"\u7C7B\u578B",key:"type",align:"center"},{title:"\u63CF\u8FF0",key:"describe",align:"center"},{title:"\u9ED8\u8BA4\u503C",key:"default",align:"center"},{title:"\u4F7F\u7528\u6761\u4EF6",key:"seriesType",align:"center"}],tableData:[{attribute:"title",type:"EChartTitleOption",describe:"\u56FE\u8868\u6807\u9898",default:"{}",seriesType:"bar/line"},{attribute:"xAxisType",type:"EChartOption.BasicComponents.CartesianAxis.Type",describe:"x\u8F74\u7684\u7C7B\u578B",default:"category",seriesType:"bar/line"},{attribute:"xVisible",type:"boolean",describe:"x\u8F74\u662F\u5426\u663E\u793A",default:"true",seriesType:"bar/line"},{attribute:"tooltip",type:"EChartOption.Tooltip | boolean",describe:"tooltip\u5DE5\u5177",default:"true",seriesType:"bar/line"},{attribute:"yFormatter",type:"Tuple<string | ((val: any) => string), 2>",describe:"\u957F\u5EA6\u4E3A2\u7684\u5143\u7EC4\uFF0C\u7C7B\u578B\u662Fechart\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u6216\u8005\u51FD\u6570",default:"['{value}', '{value}']",seriesType:"bar/line"},{attribute:"yVisible",type:"boolean",describe:"\u662F\u5426\u663E\u793Ay\u8F74",default:"true",seriesType:"bar/line"},{attribute:"yAxisName",type:"Array<string>",describe:"y\u8F74\u540D\u5B57",default:"undefined",seriesType:"bar/line"},{attribute:"LegendVisible",type:"boolean",describe:"\u56FE\u4F8B\u662F\u5426\u663E\u793A",default:"true",seriesType:"bar/line"},{attribute:"area",type:"boolean",describe:"\u533A\u57DF\u56FE\u5F62\u663E\u793A",default:"undefined",seriesType:"line"},{attribute:"smooth",type:"boolean",describe:"\u662F\u5426\u662F\u5E73\u6ED1\u66F2\u7EBF",default:"true",seriesType:"line"},{attribute:"-",type:"-",describe:"-",default:"-"},{attribute:"barGap",type:"string",describe:"\u4E24\u4E2A\u67F1\u72B6\u4F53\u4E4B\u95F4\u7684\u95F4\u9694",default:"20%",seriesType:"bar"},{attribute:"stack",type:"boolean",describe:"\u67F1\u72B6\u56FE\u5806\u53E0",default:"false",seriesType:"bar"},{attribute:"labelShow",type:"boolean",describe:"\u67F1\u72B6\u56FE\u4E2D\u95F4\u6807\u7B7E\u77E5\u5426\u663E\u793A\uFF08\u6570\u503C\uFF09",default:"false",seriesType:"bar"},{attribute:"-",type:"-",describe:"-",default:"-"},{attribute:"waterfall",type:"boolean",describe:"\u662F\u5426\u7011\u5E03\u56FE",default:"false",seriesType:"bar"},{attribute:"fallTotalName",type:"string",describe:"\u7011\u5E03\u56FE\u603B\u8BA1\u7684\u540D\u79F0\uFF08\u53EA\u9002\u7528\u4E8E\u7011\u5E03\u56FE\uFF09",default:"\u603B\u8BA1",seriesType:"bar"},{attribute:"fallLegendName",type:"string",describe:"\u7011\u5E03\u56FELegend\u540D\u79F0\uFF08\u53EA\u9002\u7528\u4E8E\u7011\u5E03\u56FE\uFF09",default:"''",seriesType:"bar"},{attribute:"fallBarColor",type:"string",describe:"\u7011\u5E03\u56FE\u67F1\u4F53\u989C\u8272\uFF08\u53EA\u9002\u7528\u4E8E\u7011\u5E03\u56FE\uFF09",default:"''",seriesType:"bar"}]}}},An=a=>(ct("data-v-a956176c"),a=a(),mt(),a),Dn={class:"chart-content"},Tn=An(()=>X("h3",{class:"h3"},"settings \u914D\u7F6E\u9879",-1));function Mn(a,t,e,r,n,i){const o=A("Table");return F(),B("div",Dn,[Tn,D(o,{class:"table",columns:n.columns,data:n.tableData},null,8,["columns","data"])])}const Ln=V(wn,[["render",Mn],["__scopeId","data-v-a956176c"]]);const Hn={data(){return{columns:[{title:"\u914D\u7F6E\u5C5E\u6027",key:"attribute",align:"center"},{title:"\u7C7B\u578B",key:"type",align:"center"},{title:"\u63CF\u8FF0",key:"describe",align:"center"},{title:"\u9ED8\u8BA4\u503C",key:"default",align:"center"},{title:"\u4F7F\u7528\u6761\u4EF6",key:"seriesType",align:"center"}],tableData:[{attribute:"right",type:"boolean",describe:"\u662F\u5426\u5F00\u542F\u53F3\u4FA7Y\u8F74",default:"false",seriesType:"bar/line"},{attribute:"markMax",type:"boolean",describe:"\u6700\u5927\u503C\u6807\u6CE8",default:"false",seriesType:"bar/line"},{attribute:"markMin",type:"boolean",describe:"\u6700\u5C0F\u503C\u6807\u6CE8",default:"false",seriesType:"bar/line"},{attribute:"type",type:"line | bar",describe:"\u76F4\u65B9\u56FE\u7C7B\u578B\uFF08\u6298\u7EBF | \u67F1\u72B6\u56FE\uFF09",default:"line",seriesType:"bar/line"}]}}},In=a=>(ct("data-v-57fd61d6"),a=a(),mt(),a),On={class:"chart-content"},Nn=In(()=>X("h3",{class:"h3"},"\u76F4\u65B9\u56FE columns \u914D\u7F6E\u9879",-1));function $n(a,t,e,r,n,i){const o=A("Table");return F(),B("div",On,[Nn,D(o,{class:"table",columns:n.columns,data:n.tableData},null,8,["columns","data"])])}const xn=V(Hn,[["render",$n],["__scopeId","data-v-57fd61d6"]]),Cn={name:"Line",components:{BaseHistogram:Dr,AreaLine:Or,DoubleYLine:Vr,BaseLineSmooth:Xr,LineMaxMin:qr,XAxisType:an,XAxisTypeTime:un,BarStack:gn,WaterFall:Pn,DocsTable:Ln,DocsColumnsTable:xn},data(){return{}}},En={class:"home"};function Vn(a,t,e,r,n,i){const o=A("BaseHistogram"),s=A("AreaLine"),l=A("DoubleYLine"),u=A("BaseLineSmooth"),m=A("LineMaxMin"),c=A("XAxisTypeTime"),f=A("XAxisType"),p=A("BarStack"),g=A("WaterFall"),y=A("DocsColumnsTable"),v=A("DocsTable");return F(),B("div",En,[D(o),D(s),D(l),D(u),D(m),D(c),D(f),D(p),D(g),D(y),D(v)])}const Xn=V(Cn,[["render",Vn]]);export{Xn as default};
