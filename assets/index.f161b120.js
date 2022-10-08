import{j as Ke,_ as j,U as vt,e as ve,I as oe,V as Te,W as gt,X as yt,Y as dt,Z as bt,$ as qe,a0 as ke,a1 as _t,a2 as St,z as he,A as kt,r as Je,J as we,a3 as At,a4 as Dt,K as Ye,M as Ae,E as ne,a5 as Me,a6 as wt,G as ge,y as Pt,a7 as Tt,f as te,a8 as Mt,a9 as Le,aa as ie,ab as Lt,ac as He,c as Ht,ad as It,ae as Nt,af as $t,a as R,ag as xt,l as se,h as Ct,ah as Ot,ai as Ie,aj as Et,ak as Vt,o as Ft,x as Qe,al as ae,am as Bt,an as Ne,P as et,ao as $e,ap as xe,aq as Ce,N as Oe,ar as Ee,F as ye,as as Ve,at as Gt,au as zt,B as Rt,av as Xt,aw as Fe,ax as Wt,ay as jt,u as tt,az as Ut,H as Zt}from"./index.5524c212.js";import{d as Kt,a as qt}from"./defaultChartConfig.5a1a8dfa.js";import{g as at,c as Jt,a as Yt,b as Qt,d as ea,e as ta,f as aa,i as ra}from"./install.9be71b46.js";import{e as na,h as oa,_ as V,r as w,o as F,c as B,a as P,w as Q,d as X,p as rt,f as nt}from"./index.1af21936.js";import{M as le}from"./mock.76202bce.js";function ia(r,t){if(!r)return!1;for(var e=Ke(r)?r:[r],a=0;a<e.length;a++)if(e[a]&&e[a][t])return!0;return!1}function ce(r){bt(r,"label",["show"])}var me=qe(),ot=function(r){j(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.type=t.type,e.createdBySelf=!1,e}return t.prototype.init=function(e,a,n){this.mergeDefaultAndTheme(e,n),this._mergeOption(e,n,!1,!0)},t.prototype.isAnimationEnabled=function(){if(vt.node)return!1;var e=this.__hostSeries;return this.getShallow("animation")&&e&&e.isAnimationEnabled()},t.prototype.mergeOption=function(e,a){this._mergeOption(e,a,!1,!1)},t.prototype._mergeOption=function(e,a,n,i){var o=this.mainType;n||a.eachSeries(function(s){var l=s.get(this.mainType,!0),u=me(s)[o];if(!l||!l.data){me(s)[o]=null;return}u?u._mergeOption(l,a,!0):(i&&ce(l),ve(l.data,function(m){m instanceof Array?(ce(m[0]),ce(m[1])):ce(m)}),u=this.createMarkerModelFromSeries(l,this,a),oe(u,{mainType:this.mainType,seriesIndex:s.seriesIndex,name:s.name,createdBySelf:!0}),u.__hostSeries=s),me(s)[o]=u},this)},t.prototype.formatTooltip=function(e,a,n){var i=this.getData(),o=this.getRawValue(e),s=i.getName(e);return Te("section",{header:this.name,blocks:[Te("nameValue",{name:s,value:o,noName:!s,noValue:o==null})]})},t.prototype.getData=function(){return this._data},t.prototype.setData=function(e){this._data=e},t.getMarkerModelFromSeries=function(e,a){return me(e)[a]},t.type="marker",t.dependencies=["series","grid","polar","geo"],t}(gt);yt(ot,dt.prototype);const fe=ot;var sa=function(r){j(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.type=t.type,e}return t.prototype.createMarkerModelFromSeries=function(e,a,n){return new t(e,a,n)},t.type="markPoint",t.defaultOption={z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{show:!0,position:"inside"},itemStyle:{borderWidth:2},emphasis:{label:{show:!0}}},t}(fe);const la=sa;var ua=function(r){j(t,r);function t(e,a,n,i){var o=r.call(this)||this;return o.updateData(e,a,n,i),o}return t.prototype._createSymbol=function(e,a,n,i,o){this.removeAll();var s=ke(e,-1,-1,2,2,null,o);s.attr({z2:100,culling:!0,scaleX:i[0]/2,scaleY:i[1]/2}),s.drift=ca,this._symbolType=e,this.add(s)},t.prototype.stopSymbolAnimation=function(e){this.childAt(0).stopAnimation(null,e)},t.prototype.getSymbolType=function(){return this._symbolType},t.prototype.getSymbolPath=function(){return this.childAt(0)},t.prototype.highlight=function(){_t(this.childAt(0))},t.prototype.downplay=function(){St(this.childAt(0))},t.prototype.setZ=function(e,a){var n=this.childAt(0);n.zlevel=e,n.z=a},t.prototype.setDraggable=function(e,a){var n=this.childAt(0);n.draggable=e,n.cursor=!a&&e?"move":n.cursor},t.prototype.updateData=function(e,a,n,i){this.silent=!1;var o=e.getItemVisual(a,"symbol")||"circle",s=e.hostModel,l=t.getSymbolSize(e,a),u=o!==this._symbolType,m=i&&i.disableAnimation;if(u){var c=e.getItemVisual(a,"symbolKeepAspect");this._createSymbol(o,e,a,l,c)}else{var h=this.childAt(0);h.silent=!1;var p={scaleX:l[0]/2,scaleY:l[1]/2};m?h.attr(p):he(h,p,s,a),kt(h)}if(this._updateCommon(e,a,l,n,i),u){var h=this.childAt(0);if(!m){var p={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:h.style.opacity}};h.scaleX=h.scaleY=0,h.style.opacity=0,Je(h,p,s,a)}}m&&this.childAt(0).stopAnimation("leave")},t.prototype._updateCommon=function(e,a,n,i,o){var s=this.childAt(0),l=e.hostModel,u,m,c,h,p,y,g,v,f;if(i&&(u=i.emphasisItemStyle,m=i.blurItemStyle,c=i.selectItemStyle,h=i.focus,p=i.blurScope,g=i.labelStatesModels,v=i.hoverScale,f=i.cursorStyle,y=i.emphasisDisabled),!i||e.hasItemOption){var d=i&&i.itemModel?i.itemModel:e.getItemModel(a),b=d.getModel("emphasis");u=b.getModel("itemStyle").getItemStyle(),c=d.getModel(["select","itemStyle"]).getItemStyle(),m=d.getModel(["blur","itemStyle"]).getItemStyle(),h=b.get("focus"),p=b.get("blurScope"),y=b.get("disabled"),g=we(d),v=b.getShallow("scale"),f=d.getShallow("cursor")}var S=e.getItemVisual(a,"symbolRotate");s.attr("rotation",(S||0)*Math.PI/180||0);var D=At(e.getItemVisual(a,"symbolOffset"),n);D&&(s.x=D[0],s.y=D[1]),f&&s.attr("cursor",f);var _=e.getItemVisual(a,"style"),k=_.fill;if(s instanceof Dt){var T=s.style;s.useStyle(oe({image:T.image,x:T.x,y:T.y,width:T.width,height:T.height},_))}else s.__isEmptyBrush?s.useStyle(oe({},_)):s.useStyle(_),s.style.decal=null,s.setColor(k,o&&o.symbolInnerColor),s.style.strokeNoScale=!0;var M=e.getItemVisual(a,"liftZ"),L=this._z2;M!=null?L==null&&(this._z2=s.z2,s.z2+=M):L!=null&&(s.z2=L,this._z2=null);var H=o&&o.useNameLabel;Ye(s,g,{labelFetcher:l,labelDataIndex:a,defaultText:A,inheritColor:k,defaultOpacity:_.opacity});function A(O){return H?e.getName(O):at(e,O)}this._sizeX=n[0]/2,this._sizeY=n[1]/2;var I=s.ensureState("emphasis");I.style=u,s.ensureState("select").style=c,s.ensureState("blur").style=m;var C=v==null||v===!0?Math.max(1.1,3/this._sizeY):isFinite(v)&&v>0?+v:1;I.scaleX=this._sizeX*C,I.scaleY=this._sizeY*C,this.setSymbolScale(1),Ae(this,h,p,y)},t.prototype.setSymbolScale=function(e){this.scaleX=this.scaleY=e},t.prototype.fadeOut=function(e,a,n){var i=this.childAt(0),o=ne(this).dataIndex,s=n&&n.animation;if(this.silent=i.silent=!0,n&&n.fadeLabel){var l=i.getTextContent();l&&Me(l,{style:{opacity:0}},a,{dataIndex:o,removeOpt:s,cb:function(){i.removeTextContent()}})}else i.removeTextContent();Me(i,{style:{opacity:0},scaleX:0,scaleY:0},a,{dataIndex:o,cb:e,removeOpt:s})},t.getSymbolSize=function(e,a){return wt(e.getItemVisual(a,"symbolSize"))},t}(ge);function ca(r,t){this.parent.drift(r,t)}const Pe=ua;function de(r,t,e,a){return t&&!isNaN(t[0])&&!isNaN(t[1])&&!(a.isIgnore&&a.isIgnore(e))&&!(a.clipShape&&!a.clipShape.contain(t[0],t[1]))&&r.getItemVisual(e,"symbol")!=="none"}function Be(r){return r!=null&&!Tt(r)&&(r={isIgnore:r}),r||{}}function Ge(r){var t=r.hostModel,e=t.getModel("emphasis");return{emphasisItemStyle:e.getModel("itemStyle").getItemStyle(),blurItemStyle:t.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:t.getModel(["select","itemStyle"]).getItemStyle(),focus:e.get("focus"),blurScope:e.get("blurScope"),emphasisDisabled:e.get("disabled"),hoverScale:e.get("scale"),labelStatesModels:we(t),cursorStyle:t.get("cursor")}}var ma=function(){function r(t){this.group=new ge,this._SymbolCtor=t||Pe}return r.prototype.updateData=function(t,e){this._progressiveEls=null,e=Be(e);var a=this.group,n=t.hostModel,i=this._data,o=this._SymbolCtor,s=e.disableAnimation,l=Ge(t),u={disableAnimation:s},m=e.getSymbolPoint||function(c){return t.getItemLayout(c)};i||a.removeAll(),t.diff(i).add(function(c){var h=m(c);if(de(t,h,c,e)){var p=new o(t,c,l,u);p.setPosition(h),t.setItemGraphicEl(c,p),a.add(p)}}).update(function(c,h){var p=i.getItemGraphicEl(h),y=m(c);if(!de(t,y,c,e)){a.remove(p);return}var g=t.getItemVisual(c,"symbol")||"circle",v=p&&p.getSymbolType&&p.getSymbolType();if(!p||v&&v!==g)a.remove(p),p=new o(t,c,l,u),p.setPosition(y);else{p.updateData(t,c,l,u);var f={x:y[0],y:y[1]};s?p.attr(f):he(p,f,n)}a.add(p),t.setItemGraphicEl(c,p)}).remove(function(c){var h=i.getItemGraphicEl(c);h&&h.fadeOut(function(){a.remove(h)},n)}).execute(),this._getSymbolPoint=m,this._data=t},r.prototype.updateLayout=function(){var t=this,e=this._data;e&&e.eachItemGraphicEl(function(a,n){var i=t._getSymbolPoint(n);a.setPosition(i),a.markRedraw()})},r.prototype.incrementalPrepareUpdate=function(t){this._seriesScope=Ge(t),this._data=null,this.group.removeAll()},r.prototype.incrementalUpdate=function(t,e,a){this._progressiveEls=[],a=Be(a);function n(l){l.isGroup||(l.incremental=!0,l.ensureState("emphasis").hoverLayer=!0)}for(var i=t.start;i<t.end;i++){var o=e.getItemLayout(i);if(de(e,o,i,a)){var s=new this._SymbolCtor(e,i,this._seriesScope);s.traverse(n),s.setPosition(o),this.group.add(s),e.setItemGraphicEl(i,s),this._progressiveEls.push(s)}}},r.prototype.eachRendered=function(t){Pt(this._progressiveEls||this.group,t)},r.prototype.remove=function(t){var e=this.group,a=this._data;a&&t?a.eachItemGraphicEl(function(n){n.fadeOut(function(){e.remove(n)},a.hostModel)}):e.removeAll()},r}();const it=ma;function pa(r){return!(isNaN(parseFloat(r.x))&&isNaN(parseFloat(r.y)))}function ha(r){return!isNaN(parseFloat(r.x))&&!isNaN(parseFloat(r.y))}function pe(r,t,e,a,n,i){var o=[],s=ie(t,a),l=s?t.getCalculationInfo("stackResultDimension"):a,u=st(t,l,r),m=t.indicesOfNearest(l,u)[0];o[n]=t.get(e,m),o[i]=t.get(l,m);var c=t.get(a,m),h=Lt(t.get(a,m));return h=Math.min(h,20),h>=0&&(o[i]=+o[i].toFixed(h)),[o,c]}var be={min:te(pe,"min"),max:te(pe,"max"),average:te(pe,"average"),median:te(pe,"median")};function fa(r,t){var e=r.getData(),a=r.coordinateSystem;if(t&&!ha(t)&&!Ke(t.coord)&&a){var n=a.dimensions,i=va(t,e,a,r);if(t=Mt(t),t.type&&be[t.type]&&i.baseAxis&&i.valueAxis){var o=Le(n,i.baseAxis.dim),s=Le(n,i.valueAxis.dim),l=be[t.type](e,i.baseDataDim,i.valueDataDim,o,s);t.coord=l[0],t.value=l[1]}else{for(var u=[t.xAxis!=null?t.xAxis:t.radiusAxis,t.yAxis!=null?t.yAxis:t.angleAxis],m=0;m<2;m++)be[u[m]]&&(u[m]=st(e,e.mapDimension(n[m]),u[m]));t.coord=u}}return t}function va(r,t,e,a){var n={};return r.valueIndex!=null||r.valueDim!=null?(n.valueDataDim=r.valueIndex!=null?t.getDimension(r.valueIndex):r.valueDim,n.valueAxis=e.getAxis(ga(a,n.valueDataDim)),n.baseAxis=e.getOtherAxis(n.valueAxis),n.baseDataDim=t.mapDimension(n.baseAxis.dim)):(n.baseAxis=a.getBaseAxis(),n.valueAxis=e.getOtherAxis(n.baseAxis),n.baseDataDim=t.mapDimension(n.baseAxis.dim),n.valueDataDim=t.mapDimension(n.valueAxis.dim)),n}function ga(r,t){var e=r.getData().getDimensionInfo(t);return e&&e.coordDim}function ya(r,t){return r&&r.containData&&t.coord&&!pa(t)?r.containData(t.coord):!0}function da(r,t){return r?function(e,a,n,i){var o=i<2?e.coord&&e.coord[i]:e.value;return He(o,t[i])}:function(e,a,n,i){return He(e.value,t[i])}}function st(r,t,e){if(e==="average"){var a=0,n=0;return r.each(t,function(i,o){isNaN(i)||(a+=i,n++)}),a/n}else return e==="median"?r.getMedian(t):r.getDataExtent(t)[e==="max"?1:0]}var _e=qe(),ba=function(r){j(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.type=t.type,e}return t.prototype.init=function(){this.markerGroupMap=Ht()},t.prototype.render=function(e,a,n){var i=this,o=this.markerGroupMap;o.each(function(s){_e(s).keep=!1}),a.eachSeries(function(s){var l=fe.getMarkerModelFromSeries(s,i.type);l&&i.renderSeries(s,l,a,n)}),o.each(function(s){!_e(s).keep&&i.group.remove(s.group)})},t.prototype.markKeep=function(e){_e(e).keep=!0},t.prototype.toggleBlurSeries=function(e,a){var n=this;ve(e,function(i){var o=fe.getMarkerModelFromSeries(i,n.type);if(o){var s=o.getData();s.eachItemGraphicEl(function(l){l&&(a?It(l):Nt(l))})}})},t.type="marker",t}($t);const _a=ba;function ze(r,t,e){var a=t.coordinateSystem;r.each(function(n){var i=r.getItemModel(n),o,s=Ie(i.get("x"),e.getWidth()),l=Ie(i.get("y"),e.getHeight());if(!isNaN(s)&&!isNaN(l))o=[s,l];else if(t.getMarkerPosition)o=t.getMarkerPosition(r.getValues(r.dimensions,n));else if(a){var u=r.get(a.dimensions[0],n),m=r.get(a.dimensions[1],n);o=a.dataToPoint([u,m])}isNaN(s)||(o[0]=s),isNaN(l)||(o[1]=l),r.setItemLayout(n,o)})}var Sa=function(r){j(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.type=t.type,e}return t.prototype.updateTransform=function(e,a,n){a.eachSeries(function(i){var o=fe.getMarkerModelFromSeries(i,"markPoint");o&&(ze(o.getData(),i,n),this.markerGroupMap.get(i.id).updateLayout())},this)},t.prototype.renderSeries=function(e,a,n,i){var o=e.coordinateSystem,s=e.id,l=e.getData(),u=this.markerGroupMap,m=u.get(s)||u.set(s,new it),c=ka(o,e,a);a.setData(c),ze(a.getData(),e,i),c.each(function(h){var p=c.getItemModel(h),y=p.getShallow("symbol"),g=p.getShallow("symbolSize"),v=p.getShallow("symbolRotate"),f=p.getShallow("symbolOffset"),d=p.getShallow("symbolKeepAspect");if(R(y)||R(g)||R(v)||R(f)){var b=a.getRawValue(h),S=a.getDataParams(h);R(y)&&(y=y(b,S)),R(g)&&(g=g(b,S)),R(v)&&(v=v(b,S)),R(f)&&(f=f(b,S))}var D=p.getModel("itemStyle").getItemStyle(),_=xt(l,"color");D.fill||(D.fill=_),c.setItemVisual(h,{symbol:y,symbolSize:g,symbolRotate:v,symbolOffset:f,symbolKeepAspect:d,style:D})}),m.updateData(c),this.group.add(m.group),c.eachItemGraphicEl(function(h){h.traverse(function(p){ne(p).dataModel=a})}),this.markKeep(m),m.group.silent=a.get("silent")||e.get("silent")},t.type="markPoint",t}(_a);function ka(r,t,e){var a;r?a=se(r&&r.dimensions,function(s){var l=t.getData().getDimensionInfo(t.getData().mapDimension(s))||{};return oe(oe({},l),{name:s,ordinalMeta:null})}):a=[{name:"value",type:"float"}];var n=new Ct(a,e),i=se(e.get("data"),te(fa,t));r&&(i=Ot(i,te(ya,r)));var o=da(!!r,a);return n.initData(i,null,o),n}const Aa=Sa;function Da(r){r.registerComponentModel(la),r.registerComponentView(Aa),r.registerPreprocessor(function(t){ia(t.series,"markPoint")&&(t.markPoint=t.markPoint||{})})}const wa=(r,t)=>{const{rows:e=[]}=r,{labelShow:a=!1,fallLegendName:n="",fallBarColor:i=""}=t;if(!Array.isArray(e))return console.warn("rows must be an array"),[];const o=e[0]||{},s=[],l=[];let u=0;const m=[0];for(let h in o)l.push(o[h]),u+=o[h];let c=u;return l.forEach(h=>{c=c-h,m.push(c)}),s[0]={name:"",type:"bar",stack:"\u603B\u91CF",label:{show:!1},itemStyle:{borderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:m},s[1]={name:n,type:"bar",stack:"\u603B\u91CF",label:{show:a},itemStyle:{color:i},backgroundStyle:{color:""},data:[u,...l]},s},Pa=(r,t)=>{const{fallTotalName:e=""}=t,a=[e||"\u603B\u8BA1"];return r.forEach(n=>{a.push(n.title)}),a},Ta=(r,t)=>{const{xAxisType:e="category",xVisible:a=!0,waterfall:n=!1}=t,{xAxis:i=[]}=r;return{type:e,data:n?Pa(r.columns,t):i,show:a}},Ma=(r,t)=>{const{yVisible:e=!0,yFormatter:a=["{value}","{value}"],yAxisName:n=[]}=t,i={type:"value",axisTick:{show:!1},show:e},o=[];for(let s=0;s<2;s++)o[s]=Object.assign({},i,{position:s===1?"right":"left",axisLabel:{formatter:a[s]}}),o[s].name=n[s]||"";return o},La=(r,t)=>{const{tooltip:e=!0,waterfall:a=!1}=t;let n=Kt();return a&&(n=Object.assign({},{formatter:o=>{if(Array.isArray(o)&&o.length>=2){const s=o[1];return`${s.name}<br/>${s.marker||""}${s.seriesName} : <b style="font-weight: bold;color:#000">${s.value}</b>`}return""}},n)),Vt(e)?e?n:{}:e},Ha=(r,t,e)=>{var c,h,p,y;const{rows:a=[]}=r,{area:n,smooth:i=!0,barGap:o="20%",stack:s=!1,labelShow:l=!1}=t,u={};if(!Array.isArray(a))return console.warn("rows must be an array"),[];a.forEach(g=>{for(let v in g){const f=e[v];!u[v]&&f&&(u[v]=[]),f&&u[v].push(g[v])}});const m=[];for(let g in u){const v=e[g],f={barGap:o,...s?{stack:"stack"}:{},label:{show:l,color:"#314659"}},d={smooth:i,symbolSize:10,...n?{areaStyle:{opacity:.2}}:{}},b=v.type||"line",S=Object.assign({},{name:v.title+"",type:b,yAxisIndex:v.right?1:0,data:u[g],markPoint:{data:[]}},b==="line"?d:{},b==="bar"?f:{});v.markMax&&((h=(c=S.markPoint)==null?void 0:c.data)==null||h.push({name:"\u6700\u5927\u503C",type:"max"})),v.markMin&&((y=(p=S.markPoint)==null?void 0:p.data)==null||y.push({name:"\u6700\u5C0F\u503C",type:"min"})),m.push(S)}return m},Ia=(r,t)=>{const{LegendVisible:e=!0}=t;return qt(e)},Re=(r,t,e=!1)=>{const a=Et(r.columns),n=Ta(r,t),i=Ma(r,t),o=t.waterfall?wa(r,t):Ha(r,t,a),s=La(r,t),l=Ia(r,t),{title:u={}}=t;return{aria:{decal:{show:e}},title:u,legend:l,xAxis:n,yAxis:i,series:o,tooltip:s}};var Na=function(r){j(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e.type=t.type,e.hasSymbolVisual=!0,e}return t.prototype.getInitialData=function(e){return Jt(null,this,{useEncodeDefaulter:!0})},t.prototype.getLegendIcon=function(e){var a=new ge,n=ke("line",0,e.itemHeight/2,e.itemWidth,0,e.lineStyle.stroke,!1);a.add(n),n.setStyle(e.lineStyle);var i=this.getData().getVisual("symbol"),o=this.getData().getVisual("symbolRotate"),s=i==="none"?"circle":i,l=e.itemHeight*.8,u=ke(s,(e.itemWidth-l)/2,(e.itemHeight-l)/2,l,l,e.itemStyle.fill);a.add(u),u.setStyle(e.itemStyle);var m=e.iconRotate==="inherit"?o:e.iconRotate||0;return u.rotation=m*Math.PI/180,u.setOrigin([e.itemWidth/2,e.itemHeight/2]),s.indexOf("empty")>-1&&(u.style.stroke=u.style.fill,u.style.fill="#fff",u.style.lineWidth=2),a},t.type="series.line",t.dependencies=["grid","polar"],t.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},t}(Ft);const $a=Na;function lt(r,t,e){var a=r.getBaseAxis(),n=r.getOtherAxis(a),i=xa(n,e),o=a.dim,s=n.dim,l=t.mapDimension(s),u=t.mapDimension(o),m=s==="x"||s==="radius"?1:0,c=se(r.dimensions,function(y){return t.mapDimension(y)}),h=!1,p=t.getCalculationInfo("stackResultDimension");return ie(t,c[0])&&(h=!0,c[0]=p),ie(t,c[1])&&(h=!0,c[1]=p),{dataDimsForPoint:c,valueStart:i,valueAxisDim:s,baseAxisDim:o,stacked:!!h,valueDim:l,baseDim:u,baseDataOffset:m,stackedOverDimension:t.getCalculationInfo("stackedOverDimension")}}function xa(r,t){var e=0,a=r.scale.getExtent();return t==="start"?e=a[0]:t==="end"?e=a[1]:Qe(t)&&!isNaN(t)?e=t:a[0]>0?e=a[0]:a[1]<0&&(e=a[1]),e}function ut(r,t,e,a){var n=NaN;r.stacked&&(n=e.get(e.getCalculationInfo("stackedOverDimension"),a)),isNaN(n)&&(n=r.valueStart);var i=r.baseDataOffset,o=[];return o[i]=e.get(r.baseDim,a),o[1-i]=n,t.dataToPoint(o)}function Ca(r,t){var e=[];return t.diff(r).add(function(a){e.push({cmd:"+",idx:a})}).update(function(a,n){e.push({cmd:"=",idx:n,idx1:a})}).remove(function(a){e.push({cmd:"-",idx:a})}).execute(),e}function Oa(r,t,e,a,n,i,o,s){for(var l=Ca(r,t),u=[],m=[],c=[],h=[],p=[],y=[],g=[],v=lt(n,t,o),f=r.getLayout("points")||[],d=t.getLayout("points")||[],b=0;b<l.length;b++){var S=l[b],D=!0,_=void 0,k=void 0;switch(S.cmd){case"=":_=S.idx*2,k=S.idx1*2;var T=f[_],M=f[_+1],L=d[k],H=d[k+1];(isNaN(T)||isNaN(M))&&(T=L,M=H),u.push(T,M),m.push(L,H),c.push(e[_],e[_+1]),h.push(a[k],a[k+1]),g.push(t.getRawIndex(S.idx1));break;case"+":var A=S.idx,I=v.dataDimsForPoint,C=n.dataToPoint([t.get(I[0],A),t.get(I[1],A)]);k=A*2,u.push(C[0],C[1]),m.push(d[k],d[k+1]);var O=ut(v,n,t,A);c.push(O[0],O[1]),h.push(a[k],a[k+1]),g.push(t.getRawIndex(A));break;case"-":D=!1}D&&(p.push(S),y.push(y.length))}y.sort(function(ue,x){return g[ue]-g[x]});for(var E=u.length,W=ae(E),$=ae(E),N=ae(E),Z=ae(E),K=[],b=0;b<y.length;b++){var re=y[b],G=b*2,z=re*2;W[G]=u[z],W[G+1]=u[z+1],$[G]=m[z],$[G+1]=m[z+1],N[G]=c[z],N[G+1]=c[z+1],Z[G]=h[z],Z[G+1]=h[z+1],K[b]=p[re]}return{current:W,next:$,stackedOnCurrent:N,stackedOnNext:Z,status:K}}var q=Math.min,J=Math.max;function ee(r,t){return isNaN(r)||isNaN(t)}function De(r,t,e,a,n,i,o,s,l){for(var u,m,c,h,p,y,g=e,v=0;v<a;v++){var f=t[g*2],d=t[g*2+1];if(g>=n||g<0)break;if(ee(f,d)){if(l){g+=i;continue}break}if(g===e)r[i>0?"moveTo":"lineTo"](f,d),c=f,h=d;else{var b=f-u,S=d-m;if(b*b+S*S<.5){g+=i;continue}if(o>0){for(var D=g+i,_=t[D*2],k=t[D*2+1];_===f&&k===d&&v<a;)v++,D+=i,g+=i,_=t[D*2],k=t[D*2+1],f=t[g*2],d=t[g*2+1],b=f-u,S=d-m;var T=v+1;if(l)for(;ee(_,k)&&T<a;)T++,D+=i,_=t[D*2],k=t[D*2+1];var M=.5,L=0,H=0,A=void 0,I=void 0;if(T>=a||ee(_,k))p=f,y=d;else{L=_-u,H=k-m;var C=f-u,O=_-f,E=d-m,W=k-d,$=void 0,N=void 0;if(s==="x"){$=Math.abs(C),N=Math.abs(O);var Z=L>0?1:-1;p=f-Z*$*o,y=d,A=f+Z*N*o,I=d}else if(s==="y"){$=Math.abs(E),N=Math.abs(W);var K=H>0?1:-1;p=f,y=d-K*$*o,A=f,I=d+K*N*o}else $=Math.sqrt(C*C+E*E),N=Math.sqrt(O*O+W*W),M=N/(N+$),p=f-L*o*(1-M),y=d-H*o*(1-M),A=f+L*o*M,I=d+H*o*M,A=q(A,J(_,f)),I=q(I,J(k,d)),A=J(A,q(_,f)),I=J(I,q(k,d)),L=A-f,H=I-d,p=f-L*$/N,y=d-H*$/N,p=q(p,J(u,f)),y=q(y,J(m,d)),p=J(p,q(u,f)),y=J(y,q(m,d)),L=f-p,H=d-y,A=f+L*N/$,I=d+H*N/$}r.bezierCurveTo(c,h,p,y,f,d),c=A,h=I}else r.lineTo(f,d)}u=f,m=d,g+=i}return v}var ct=function(){function r(){this.smooth=0,this.smoothConstraint=!0}return r}(),Ea=function(r){j(t,r);function t(e){var a=r.call(this,e)||this;return a.type="ec-polyline",a}return t.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},t.prototype.getDefaultShape=function(){return new ct},t.prototype.buildPath=function(e,a){var n=a.points,i=0,o=n.length/2;if(a.connectNulls){for(;o>0&&ee(n[o*2-2],n[o*2-1]);o--);for(;i<o&&ee(n[i*2],n[i*2+1]);i++);}for(;i<o;)i+=De(e,n,i,o,o,1,a.smooth,a.smoothMonotone,a.connectNulls)+1},t.prototype.getPointOn=function(e,a){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var n=this.path,i=n.data,o=Bt.CMD,s,l,u=a==="x",m=[],c=0;c<i.length;){var h=i[c++],p=void 0,y=void 0,g=void 0,v=void 0,f=void 0,d=void 0,b=void 0;switch(h){case o.M:s=i[c++],l=i[c++];break;case o.L:if(p=i[c++],y=i[c++],b=u?(e-s)/(p-s):(e-l)/(y-l),b<=1&&b>=0){var S=u?(y-l)*b+l:(p-s)*b+s;return u?[e,S]:[S,e]}s=p,l=y;break;case o.C:p=i[c++],y=i[c++],g=i[c++],v=i[c++],f=i[c++],d=i[c++];var D=u?Ne(s,p,g,f,e,m):Ne(l,y,v,d,e,m);if(D>0)for(var _=0;_<D;_++){var k=m[_];if(k<=1&&k>=0){var S=u?$e(l,y,v,d,k):$e(s,p,g,f,k);return u?[e,S]:[S,e]}}s=f,l=d;break}}},t}(et),Va=function(r){j(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t}(ct),Fa=function(r){j(t,r);function t(e){var a=r.call(this,e)||this;return a.type="ec-polygon",a}return t.prototype.getDefaultShape=function(){return new Va},t.prototype.buildPath=function(e,a){var n=a.points,i=a.stackedOnPoints,o=0,s=n.length/2,l=a.smoothMonotone;if(a.connectNulls){for(;s>0&&ee(n[s*2-2],n[s*2-1]);s--);for(;o<s&&ee(n[o*2],n[o*2+1]);o++);}for(;o<s;){var u=De(e,n,o,s,s,1,a.smooth,l,a.connectNulls);De(e,i,o+u-1,u,s,-1,a.stackedOnSmooth,l,a.connectNulls),o+=u+1,e.closePath()}},t}(et);function Xe(r,t){if(r.length===t.length){for(var e=0;e<r.length;e++)if(r[e]!==t[e])return;return!0}}function We(r){for(var t=1/0,e=1/0,a=-1/0,n=-1/0,i=0;i<r.length;){var o=r[i++],s=r[i++];isNaN(o)||(t=Math.min(o,t),a=Math.max(o,a)),isNaN(s)||(e=Math.min(s,e),n=Math.max(s,n))}return[[t,e],[a,n]]}function je(r,t){var e=We(r),a=e[0],n=e[1],i=We(t),o=i[0],s=i[1];return Math.max(Math.abs(a[0]-o[0]),Math.abs(a[1]-o[1]),Math.abs(n[0]-s[0]),Math.abs(n[1]-s[1]))}function Ue(r){return Qe(r)?r:r?.5:0}function Ba(r,t,e){if(!e.valueDim)return[];for(var a=t.count(),n=ae(a*2),i=0;i<a;i++){var o=ut(e,r,t,i);n[i*2]=o[0],n[i*2+1]=o[1]}return n}function Y(r,t,e,a){var n=t.getBaseAxis(),i=n.dim==="x"||n.dim==="radius"?0:1,o=[],s=0,l=[],u=[],m=[],c=[];if(a){for(s=0;s<r.length;s+=2)!isNaN(r[s])&&!isNaN(r[s+1])&&c.push(r[s],r[s+1]);r=c}for(s=0;s<r.length-2;s+=2)switch(m[0]=r[s+2],m[1]=r[s+3],u[0]=r[s],u[1]=r[s+1],o.push(u[0],u[1]),e){case"end":l[i]=m[i],l[1-i]=u[1-i],o.push(l[0],l[1]);break;case"middle":var h=(u[i]+m[i])/2,p=[];l[i]=p[i]=h,l[1-i]=u[1-i],p[1-i]=m[1-i],o.push(l[0],l[1]),o.push(p[0],p[1]);break;default:l[i]=u[i],l[1-i]=m[1-i],o.push(l[0],l[1])}return o.push(r[s++],r[s++]),o}function Ga(r,t){var e=[],a=r.length,n,i;function o(m,c,h){var p=m.coord,y=(h-p)/(c.coord-p),g=Wt(y,[m.color,c.color]);return{coord:h,color:g}}for(var s=0;s<a;s++){var l=r[s],u=l.coord;if(u<0)n=l;else if(u>t){i?e.push(o(i,l,t)):n&&e.push(o(n,l,0),o(n,l,t));break}else n&&(e.push(o(n,l,0)),n=null),e.push(l),i=l}return e}function za(r,t,e){var a=r.getVisual("visualMeta");if(!(!a||!a.length||!r.count())&&t.type==="cartesian2d"){for(var n,i,o=a.length-1;o>=0;o--){var s=r.getDimensionInfo(a[o].dimension);if(n=s&&s.coordDim,n==="x"||n==="y"){i=a[o];break}}if(!!i){var l=t.getAxis(n),u=se(i.stops,function(b){return{coord:l.toGlobalCoord(l.dataToCoord(b.value)),color:b.color}}),m=u.length,c=i.outerColors.slice();m&&u[0].coord>u[m-1].coord&&(u.reverse(),c.reverse());var h=Ga(u,n==="x"?e.getWidth():e.getHeight()),p=h.length;if(!p&&m)return u[0].coord<0?c[1]?c[1]:u[m-1].color:c[0]?c[0]:u[0].color;var y=10,g=h[0].coord-y,v=h[p-1].coord+y,f=v-g;if(f<.001)return"transparent";ve(h,function(b){b.offset=(b.coord-g)/f}),h.push({offset:p?h[p-1].offset:.5,color:c[1]||"transparent"}),h.unshift({offset:p?h[0].offset:.5,color:c[0]||"transparent"});var d=new Xt(0,0,0,0,h,!0);return d[n]=g,d[n+"2"]=v,d}}}function Ra(r,t,e){var a=r.get("showAllSymbol"),n=a==="auto";if(!(a&&!n)){var i=e.getAxesByScale("ordinal")[0];if(!!i&&!(n&&Xa(i,t))){var o=t.mapDimension(i.dim),s={};return ve(i.getViewLabels(),function(l){var u=i.scale.getRawOrdinalNumber(l.tickValue);s[u]=1}),function(l){return!s.hasOwnProperty(t.get(o,l))}}}}function Xa(r,t){var e=r.getExtent(),a=Math.abs(e[1]-e[0])/r.scale.count();isNaN(a)&&(a=0);for(var n=t.count(),i=Math.max(1,Math.round(n/5)),o=0;o<n;o+=i)if(Pe.getSymbolSize(t,o)[r.isHorizontal()?1:0]*1.5>a)return!1;return!0}function Wa(r,t){return isNaN(r)||isNaN(t)}function ja(r){for(var t=r.length/2;t>0&&Wa(r[t*2-2],r[t*2-1]);t--);return t-1}function Ze(r,t){return[r[t*2],r[t*2+1]]}function Ua(r,t,e){for(var a=r.length/2,n=e==="x"?0:1,i,o,s=0,l=-1,u=0;u<a;u++)if(o=r[u*2+n],!(isNaN(o)||isNaN(r[u*2+1-n]))){if(u===0){i=o;continue}if(i<=t&&o>=t||i>=t&&o<=t){l=u;break}s=u,i=o}return{range:[s,l],t:(t-i)/(o-i)}}function mt(r){if(r.get(["endLabel","show"]))return!0;for(var t=0;t<Fe.length;t++)if(r.get([Fe[t],"endLabel","show"]))return!0;return!1}function Se(r,t,e,a){if(Qt(t,"cartesian2d")){var n=a.getModel("endLabel"),i=n.get("valueAnimation"),o=a.getData(),s={lastFrameIndex:0},l=mt(a)?function(p,y){r._endLabelOnDuring(p,y,o,s,i,n,t)}:null,u=t.getBaseAxis().isHorizontal(),m=ea(t,e,a,function(){var p=r._endLabel;p&&e&&s.originalX!=null&&p.attr({x:s.originalX,y:s.originalY})},l);if(!a.get("clip",!0)){var c=m.shape,h=Math.max(c.width,c.height);u?(c.y-=h,c.height+=h*2):(c.x-=h,c.width+=h*2)}return l&&l(1,m),m}else return ta(t,e,a)}function Za(r,t){var e=t.getBaseAxis(),a=e.isHorizontal(),n=e.inverse,i=a?n?"right":"left":"center",o=a?"middle":n?"top":"bottom";return{normal:{align:r.get("align")||i,verticalAlign:r.get("verticalAlign")||o}}}var Ka=function(r){j(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.init=function(){var e=new ge,a=new it;this.group.add(a.group),this._symbolDraw=a,this._lineGroup=e},t.prototype.render=function(e,a,n){var i=this,o=e.coordinateSystem,s=this.group,l=e.getData(),u=e.getModel("lineStyle"),m=e.getModel("areaStyle"),c=l.getLayout("points")||[],h=o.type==="polar",p=this._coordSys,y=this._symbolDraw,g=this._polyline,v=this._polygon,f=this._lineGroup,d=e.get("animation"),b=!m.isEmpty(),S=m.get("origin"),D=lt(o,l,S),_=b&&Ba(o,l,D),k=e.get("showSymbol"),T=e.get("connectNulls"),M=k&&!h&&Ra(e,l,o),L=this._data;L&&L.eachItemGraphicEl(function(x,ft){x.__temp&&(s.remove(x),L.setItemGraphicEl(ft,null))}),k||y.remove(),s.add(f);var H=h?!1:e.get("step"),A;o&&o.getArea&&e.get("clip",!0)&&(A=o.getArea(),A.width!=null?(A.x-=.1,A.y-=.1,A.width+=.2,A.height+=.2):A.r0&&(A.r0-=.5,A.r+=.5)),this._clipShapeForSymbol=A;var I=za(l,o,n)||l.getVisual("style")[l.getVisual("drawType")];if(!(g&&p.type===o.type&&H===this._step))k&&y.updateData(l,{isIgnore:M,clipShape:A,disableAnimation:!0,getSymbolPoint:function(x){return[c[x*2],c[x*2+1]]}}),d&&this._initSymbolLabelAnimation(l,o,A),H&&(c=Y(c,o,H,T),_&&(_=Y(_,o,H,T))),g=this._newPolyline(c),b?v=this._newPolygon(c,_):v&&(f.remove(v),v=this._polygon=null),h||this._initOrUpdateEndLabel(e,o,xe(I)),f.setClipPath(Se(this,o,!0,e));else{b&&!v?v=this._newPolygon(c,_):v&&!b&&(f.remove(v),v=this._polygon=null),h||this._initOrUpdateEndLabel(e,o,xe(I));var C=f.getClipPath();if(C){var O=Se(this,o,!1,e);Je(C,{shape:O.shape},e)}else f.setClipPath(Se(this,o,!0,e));k&&y.updateData(l,{isIgnore:M,clipShape:A,disableAnimation:!0,getSymbolPoint:function(x){return[c[x*2],c[x*2+1]]}}),(!Xe(this._stackedOnPoints,_)||!Xe(this._points,c))&&(d?this._doUpdateAnimation(l,_,o,n,H,S,T):(H&&(c=Y(c,o,H,T),_&&(_=Y(_,o,H,T))),g.setShape({points:c}),v&&v.setShape({points:c,stackedOnPoints:_})))}var E=e.getModel("emphasis"),W=E.get("focus"),$=E.get("blurScope"),N=E.get("disabled");if(g.useStyle(Ce(u.getLineStyle(),{fill:"none",stroke:I,lineJoin:"bevel"})),Oe(g,e,"lineStyle"),g.style.lineWidth>0&&e.get(["emphasis","lineStyle","width"])==="bolder"){var Z=g.getState("emphasis").style;Z.lineWidth=+g.style.lineWidth+1}ne(g).seriesIndex=e.seriesIndex,Ae(g,W,$,N);var K=Ue(e.get("smooth")),re=e.get("smoothMonotone");if(g.setShape({smooth:K,smoothMonotone:re,connectNulls:T}),v){var G=l.getCalculationInfo("stackedOnSeries"),z=0;v.useStyle(Ce(m.getAreaStyle(),{fill:I,opacity:.7,lineJoin:"bevel",decal:l.getVisual("style").decal})),G&&(z=Ue(G.get("smooth"))),v.setShape({smooth:K,stackedOnSmooth:z,smoothMonotone:re,connectNulls:T}),Oe(v,e,"areaStyle"),ne(v).seriesIndex=e.seriesIndex,Ae(v,W,$,N)}var ue=function(x){i._changePolyState(x)};l.eachItemGraphicEl(function(x){x&&(x.onHoverStateChange=ue)}),this._polyline.onHoverStateChange=ue,this._data=l,this._coordSys=o,this._stackedOnPoints=_,this._points=c,this._step=H,this._valueOrigin=S,e.get("triggerLineEvent")&&(this.packEventData(e,g),v&&this.packEventData(e,v))},t.prototype.packEventData=function(e,a){ne(a).eventData={componentType:"series",componentSubType:"line",componentIndex:e.componentIndex,seriesIndex:e.seriesIndex,seriesName:e.name,seriesType:"line"}},t.prototype.highlight=function(e,a,n,i){var o=e.getData(),s=Ee(o,i);if(this._changePolyState("emphasis"),!(s instanceof Array)&&s!=null&&s>=0){var l=o.getLayout("points"),u=o.getItemGraphicEl(s);if(!u){var m=l[s*2],c=l[s*2+1];if(isNaN(m)||isNaN(c)||this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(m,c))return;var h=e.get("zlevel")||0,p=e.get("z")||0;u=new Pe(o,s),u.x=m,u.y=c,u.setZ(h,p);var y=u.getSymbolPath().getTextContent();y&&(y.zlevel=h,y.z=p,y.z2=this._polyline.z2+1),u.__temp=!0,o.setItemGraphicEl(s,u),u.stopSymbolAnimation(!0),this.group.add(u)}u.highlight()}else ye.prototype.highlight.call(this,e,a,n,i)},t.prototype.downplay=function(e,a,n,i){var o=e.getData(),s=Ee(o,i);if(this._changePolyState("normal"),s!=null&&s>=0){var l=o.getItemGraphicEl(s);l&&(l.__temp?(o.setItemGraphicEl(s,null),this.group.remove(l)):l.downplay())}else ye.prototype.downplay.call(this,e,a,n,i)},t.prototype._changePolyState=function(e){var a=this._polygon;Ve(this._polyline,e),a&&Ve(a,e)},t.prototype._newPolyline=function(e){var a=this._polyline;return a&&this._lineGroup.remove(a),a=new Ea({shape:{points:e},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(a),this._polyline=a,a},t.prototype._newPolygon=function(e,a){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new Fa({shape:{points:e,stackedOnPoints:a},segmentIgnoreThreshold:2}),this._lineGroup.add(n),this._polygon=n,n},t.prototype._initSymbolLabelAnimation=function(e,a,n){var i,o,s=a.getBaseAxis(),l=s.inverse;a.type==="cartesian2d"?(i=s.isHorizontal(),o=!1):a.type==="polar"&&(i=s.dim==="angle",o=!0);var u=e.hostModel,m=u.get("animationDuration");R(m)&&(m=m(null));var c=u.get("animationDelay")||0,h=R(c)?c(null):c;e.eachItemGraphicEl(function(p,y){var g=p;if(g){var v=[p.x,p.y],f=void 0,d=void 0,b=void 0;if(n)if(o){var S=n,D=a.pointToCoord(v);i?(f=S.startAngle,d=S.endAngle,b=-D[1]/180*Math.PI):(f=S.r0,d=S.r,b=D[0])}else{var _=n;i?(f=_.x,d=_.x+_.width,b=p.x):(f=_.y+_.height,d=_.y,b=p.y)}var k=d===f?0:(b-f)/(d-f);l&&(k=1-k);var T=R(c)?c(y):m*k+h,M=g.getSymbolPath(),L=M.getTextContent();g.attr({scaleX:0,scaleY:0}),g.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:T}),L&&L.animateFrom({style:{opacity:0}},{duration:300,delay:T}),M.disableLabelAnimation=!0}})},t.prototype._initOrUpdateEndLabel=function(e,a,n){var i=e.getModel("endLabel");if(mt(e)){var o=e.getData(),s=this._polyline,l=o.getLayout("points");if(!l){s.removeTextContent(),this._endLabel=null;return}var u=this._endLabel;u||(u=this._endLabel=new Gt({z2:200}),u.ignoreClip=!0,s.setTextContent(this._endLabel),s.disableLabelAnimation=!0);var m=ja(l);m>=0&&(Ye(s,we(e,"endLabel"),{inheritColor:n,labelFetcher:e,labelDataIndex:m,defaultText:function(c,h,p){return p!=null?Yt(o,p):at(o,c)},enableTextSetter:!0},Za(i,a)),s.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},t.prototype._endLabelOnDuring=function(e,a,n,i,o,s,l){var u=this._endLabel,m=this._polyline;if(u){e<1&&i.originalX==null&&(i.originalX=u.x,i.originalY=u.y);var c=n.getLayout("points"),h=n.hostModel,p=h.get("connectNulls"),y=s.get("precision"),g=s.get("distance")||0,v=l.getBaseAxis(),f=v.isHorizontal(),d=v.inverse,b=a.shape,S=d?f?b.x:b.y+b.height:f?b.x+b.width:b.y,D=(f?g:0)*(d?-1:1),_=(f?0:-g)*(d?-1:1),k=f?"x":"y",T=Ua(c,S,k),M=T.range,L=M[1]-M[0],H=void 0;if(L>=1){if(L>1&&!p){var A=Ze(c,M[0]);u.attr({x:A[0]+D,y:A[1]+_}),o&&(H=h.getRawValue(M[0]))}else{var A=m.getPointOn(S,k);A&&u.attr({x:A[0]+D,y:A[1]+_});var I=h.getRawValue(M[0]),C=h.getRawValue(M[1]);o&&(H=zt(n,y,I,C,T.t))}i.lastFrameIndex=M[0]}else{var O=e===1||i.lastFrameIndex>0?M[0]:0,A=Ze(c,O);o&&(H=h.getRawValue(O)),u.attr({x:A[0]+D,y:A[1]+_})}o&&Rt(u).setLabelText(H)}},t.prototype._doUpdateAnimation=function(e,a,n,i,o,s,l){var u=this._polyline,m=this._polygon,c=e.hostModel,h=Oa(this._data,e,this._stackedOnPoints,a,this._coordSys,n,this._valueOrigin),p=h.current,y=h.stackedOnCurrent,g=h.next,v=h.stackedOnNext;if(o&&(p=Y(h.current,n,o,l),y=Y(h.stackedOnCurrent,n,o,l),g=Y(h.next,n,o,l),v=Y(h.stackedOnNext,n,o,l)),je(p,g)>3e3||m&&je(y,v)>3e3){u.stopAnimation(),u.setShape({points:g}),m&&(m.stopAnimation(),m.setShape({points:g,stackedOnPoints:v}));return}u.shape.__points=h.current,u.shape.points=p;var f={shape:{points:g}};h.current!==p&&(f.shape.__points=h.next),u.stopAnimation(),he(u,f,c),m&&(m.setShape({points:p,stackedOnPoints:y}),m.stopAnimation(),he(m,{shape:{stackedOnPoints:v}},c),u.shape.points!==m.shape.points&&(m.shape.points=u.shape.points));for(var d=[],b=h.status,S=0;S<b.length;S++){var D=b[S].cmd;if(D==="="){var _=e.getItemGraphicEl(b[S].idx1);_&&d.push({el:_,ptIdx:S})}}u.animators&&u.animators.length&&u.animators[0].during(function(){m&&m.dirtyShape();for(var k=u.shape.__points,T=0;T<d.length;T++){var M=d[T].el,L=d[T].ptIdx*2;M.x=k[L],M.y=k[L+1],M.markRedraw()}})},t.prototype.remove=function(e){var a=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(i,o){i.__temp&&(a.remove(i),n.setItemGraphicEl(o,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},t.type="line",t}(ye);const qa=Ka;function Ja(r,t){return{seriesType:r,plan:jt(),reset:function(e){var a=e.getData(),n=e.coordinateSystem,i=e.pipelineContext,o=t||i.large;if(!!n){var s=se(n.dimensions,function(p){return a.mapDimension(p)}).slice(0,2),l=s.length,u=a.getCalculationInfo("stackResultDimension");ie(a,s[0])&&(s[0]=u),ie(a,s[1])&&(s[1]=u);var m=a.getStore(),c=a.getDimensionIndex(s[0]),h=a.getDimensionIndex(s[1]);return l&&{progress:function(p,y){for(var g=p.end-p.start,v=o&&ae(g*l),f=[],d=[],b=p.start,S=0;b<p.end;b++){var D=void 0;if(l===1){var _=m.get(c,b);D=n.dataToPoint(_,null,d)}else f[0]=m.get(c,b),f[1]=m.get(h,b),D=n.dataToPoint(f,null,d);o?(v[S++]=D[0],v[S++]=D[1]):y.setItemLayout(b,D.slice())}o&&y.setLayout("points",v)}}}}}}function Ya(r){r.registerChartView(qa),r.registerSeriesModel($a),r.registerLayout(Ja("line",!0)),r.registerVisual({seriesType:"line",reset:function(t){var e=t.getData(),a=t.getModel("lineStyle").getLineStyle();a&&!a.stroke&&(a.stroke=e.getVisual("style").fill),e.setVisual("legendLineStyle",a)}}),r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC,aa("line"))}tt([ra,Ya]);const U=na({name:"HHistogram",data(){return{Options:{}}},props:{...Ut,dataSource:{type:Object,default:()=>({})},settings:{type:Object,default:()=>({})}},render(){const{dataSource:r,settings:t,...e}=this.$props,a=this.Options;return oa(Zt,{...e,options:a})},mounted(){const{dataSource:r,settings:t,ariaShow:e}=this.$props;this.Options=Re(r,t,e)},watch:{$props(){const{dataSource:r,settings:t,ariaShow:e}=this.$props;this.Options=Re(r,t,e)}}}),pt=()=>le.mock({columns:[{title:"\u603B\u8BA1",key:"sum",type:"bar"},{title:"\u7528\u6237",key:"user",type:"bar"},{title:"\u6570\u91CF",key:"num"}],"xAxis|6":['@date("yyyy-MM-dd")'],"rows|6":[{"sum|1000-3000":800,"user|1000-1500":1393,"num|1200-2000":1593}]}),ht=()=>le.mock({columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u4E0B\u57CE\u4EBA\u6570",key:"number3"}],"xAxis|6":['@date("yyyy-MM-dd")'],"rows|6":[{"number1|100-1000":800,"number2|1000-1500":1393,"number3|500-2000":500}]}),Qa=()=>le.mock({columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u6BD4\u7387",key:"ratio",right:!0,type:"bar"}],"xAxis|6":['@date("yyyy-MM-dd")'],"rows|6":[{"number1|100-1000":800,"number2|1000-1500":1393,"ratio|0-100":50}]}),er=()=>{let r=[],t=Date.parse(new Date);for(let e=0;e<10;e++){let a=Math.floor(Math.random()*2201+800),n=Math.floor(Math.random()*(3e3-800+1)+100),i=Math.floor(Math.random()*(3e3-800+1)+400),o=t-e*30*60*1e3;r.unshift({number1:[o,a],number2:[o,n],number3:[o,i]})}return{columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u4E0B\u57CE\u4EBA\u6570",key:"number3"}],rows:r}},tr=()=>{let r=[];for(let t=0;t<10;t++){let e=Math.floor(Math.random()*2201+800),a=Math.floor(Math.random()*(3e3-800+1)+100),n=Math.floor(Math.random()*(3e3-800+1)+400),i=t;r.unshift({number1:[i,e],number2:[i,a],number3:[i,n]})}return{columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u4E0B\u57CE\u4EBA\u6570",key:"number3"}],rows:r}},ar=`
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
`,rr={name:"BaseLine",components:{HHistogram:U},data(){return{dataSource:pt(),codePre:ar}},methods:{}},nr={class:"chart-content"},or=X("h3",{class:"h3"},"\u57FA\u7840\u793A\u4F8B",-1);function ir(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism"),l=w("ShowMore");return F(),B("div",nr,[or,P(o,{dataSource:n.dataSource,ariaShow:""},null,8,["dataSource"]),P(l,null,{default:Q(()=>[P(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const sr=V(rr,[["render",ir]]),lr=`
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
`,ur={name:"BaseLine",components:{HHistogram:U},data(){return{settings:{area:!0,axisPointer:!0},dataSource:ht(),codePre:lr}}},cr={class:"chart-content"},mr=X("h3",{class:"h3"},"Line \u5806\u53E0\u9762\u79EF\u56FE",-1);function pr(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism"),l=w("ShowMore");return F(),B("div",cr,[mr,P(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),P(l,null,{default:Q(()=>[P(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const hr=V(ur,[["render",pr]]),fr=`
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
`,vr={name:"BaseLine",components:{HHistogram:U},data(){const{xAxis:r,rows:t,columns:e}=Qa();return{settings:{yFormatter:[a=>`${a} \u4EBA`,"{value}%"],yAxisName:["\u4EBA\u6570","\u6BD4\u7387"]},dataSource:{columns:e,xAxis:r,rows:t},codePre:fr}}},gr={class:"chart-content"},yr=X("h3",{class:"h3"},"\u8BBE\u7F6E\u53CCY\u8F74",-1);function dr(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism"),l=w("ShowMore");return F(),B("div",gr,[yr,P(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),P(l,null,{default:Q(()=>[P(s,{languages:"html",code:n.codePre},null,8,["code"])]),_:1})])}const br=V(vr,[["render",dr]]),_r=`
// dataSource \u540C\u4E0A

settings: {
  smooth: false
},
`,Sr={name:"BaseLine",components:{HHistogram:U},data(){return{settings:{smooth:!1},dataSource:ht(),codeStr:_r}}},kr={class:"chart-content"},Ar=X("h3",{class:"h3"},"\u66F2\u7EBF\u4E0D\u5E73\u6ED1\u793A\u4F8B",-1);function Dr(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism");return F(),B("div",kr,[Ar,P(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),P(s,{languages:"javascript",isLineNumber:"",code:n.codeStr},null,8,["code"])])}const wr=V(Sr,[["render",Dr]]),Pr=`
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
`;tt(Da);const Tr={name:"BaseLine",components:{HHistogram:U},data(){const{xAxis:r,rows:t}=pt();return{dataSource:{columns:[{title:"\u603B\u8BA1",key:"sum",markMin:!0,markMax:!0},{title:"\u7528\u6237",key:"user",markMin:!0},{title:"\u6570\u91CF",key:"num",markMax:!0}],xAxis:r,rows:t},codePre:Pr}}},Mr={class:"chart-content"},Lr=X("h3",{class:"h3"},"\u663E\u793A\u6700\u5927\u6700\u5C0F\u6807\u6CE8",-1);function Hr(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism"),l=w("ShowMore");return F(),B("div",Mr,[Lr,P(o,{dataSource:n.dataSource},null,8,["dataSource"]),P(l,null,{default:Q(()=>[P(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const Ir=V(Tr,[["render",Hr]]),Nr=`
/*
 * \u6CE8\u610F:
 *  1. \u4F7F\u7528\u540C\u4E0A xAxisType: time
 *  2. \u4F7F\u7528 xAxisType:value dataSource.xAxis\u4E0D\u8D77\u4F5C\u7528
 *  3. dataSource.rows \u5C5E\u6027\u7684value\u662F\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4 [index, value]
 */
`,$r={name:"XAxisType",components:{HHistogram:U},data(){return{settings:{xAxisType:"value"},dataSource:tr(),codePre:Nr}}},xr={class:"chart-content"},Cr=X("h3",{class:"h3"},"x\u8F74 xAxisType: value \u7C7B\u578B",-1);function Or(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism"),l=w("ShowMore");return F(),B("div",xr,[Cr,P(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),P(l,null,{default:Q(()=>[P(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const Er=V($r,[["render",Or]]),Vr=`
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
`,Fr={name:"XAxisType",components:{HHistogram:U},data(){return{settings:{xAxisType:"time"},dataSource:er(),codePreTime:Vr}}},Br={class:"chart-content"},Gr=X("h3",{class:"h3"},"x\u8F74 xAxisType:time \u7C7B\u578B",-1);function zr(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism"),l=w("ShowMore");return F(),B("div",Br,[Gr,P(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),P(l,null,{default:Q(()=>[P(s,{languages:"html",isLineNumber:"",code:n.codePreTime},null,8,["code"])]),_:1})])}const Rr=V(Fr,[["render",zr]]),Xr=(r="bar")=>le.mock({columns:[{title:"\u84B8\u53D1\u91CF",key:"evaporation",type:"bar"},{title:"\u964D\u96E8\u91CF",key:"rainfall",type:"bar"}],xAxis:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],"rows|12":[{"evaporation|100-1000":800,"rainfall|500-2000":1393}]}),Wr=()=>le.mock({columns:[{title:"\u623F\u79DF",key:"number1"},{title:"\u6C34\u7535\u8D39",key:"number2"},{title:"\u4EA4\u901A\u8D39",key:"number3"},{title:"\u4F19\u98DF\u8D39",key:"number4"},{title:"\u65E5\u7528\u54C1\u6570",key:"number5"}],rows:[{number1:3e3,number2:1e3,number3:2e3,number4:400,number5:600}]}),jr=`
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
`,Ur={name:"BaseLine",components:{HHistogram:U},data(){return{settings:{stack:!0},dataSource:Xr(),codePre:jr}}},Zr={class:"chart-content"},Kr=X("h3",{class:"h3"},"Bar \u5806\u53E0\u56FE",-1);function qr(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism"),l=w("ShowMore");return F(),B("div",Zr,[Kr,P(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),P(l,null,{default:Q(()=>[P(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const Jr=V(Ur,[["render",qr]]),Yr=`
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
`,Qr={name:"BaseLine",components:{HHistogram:U},data(){return{settings:{waterfall:!0,fallTotalName:"\u{1F602}",fallLegendName:"\u751F\u6D3B\u8D39",fallBarColor:"#27727b"},dataSource:Wr(),codePre:Yr}}},en={class:"chart-content"},tn=X("h3",{class:"h3"},"Bar \u7011\u5E03\u56FE",-1);function an(r,t,e,a,n,i){const o=w("HHistogram"),s=w("Prism"),l=w("ShowMore");return F(),B("div",en,[tn,P(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),P(l,null,{default:Q(()=>[P(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const rn=V(Qr,[["render",an]]);const nn={data(){return{columns:[{title:"\u914D\u7F6E\u5C5E\u6027",key:"attribute",align:"center"},{title:"\u7C7B\u578B",key:"type",align:"center"},{title:"\u63CF\u8FF0",key:"describe",align:"center"},{title:"\u9ED8\u8BA4\u503C",key:"default",align:"center"},{title:"\u4F7F\u7528\u6761\u4EF6",key:"seriesType",align:"center"}],tableData:[{attribute:"title",type:"EChartTitleOption",describe:"\u56FE\u8868\u6807\u9898",default:"{}",seriesType:"bar/line"},{attribute:"xAxisType",type:"EChartOption.BasicComponents.CartesianAxis.Type",describe:"x\u8F74\u7684\u7C7B\u578B",default:"category",seriesType:"bar/line"},{attribute:"xVisible",type:"boolean",describe:"x\u8F74\u662F\u5426\u663E\u793A",default:"true",seriesType:"bar/line"},{attribute:"tooltip",type:"EChartOption.Tooltip | boolean",describe:"tooltip\u5DE5\u5177",default:"true",seriesType:"bar/line"},{attribute:"yFormatter",type:"Tuple<string | ((val: any) => string), 2>",describe:"\u957F\u5EA6\u4E3A2\u7684\u5143\u7EC4\uFF0C\u7C7B\u578B\u662Fechart\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u6216\u8005\u51FD\u6570",default:"['{value}', '{value}']",seriesType:"bar/line"},{attribute:"yVisible",type:"boolean",describe:"\u662F\u5426\u663E\u793Ay\u8F74",default:"true",seriesType:"bar/line"},{attribute:"yAxisName",type:"Array<string>",describe:"y\u8F74\u540D\u5B57",default:"undefined",seriesType:"bar/line"},{attribute:"LegendVisible",type:"boolean",describe:"\u56FE\u4F8B\u662F\u5426\u663E\u793A",default:"true",seriesType:"bar/line"},{attribute:"area",type:"boolean",describe:"\u533A\u57DF\u56FE\u5F62\u663E\u793A",default:"undefined",seriesType:"line"},{attribute:"smooth",type:"boolean",describe:"\u662F\u5426\u662F\u5E73\u6ED1\u66F2\u7EBF",default:"true",seriesType:"line"},{attribute:"-",type:"-",describe:"-",default:"-"},{attribute:"barGap",type:"string",describe:"\u4E24\u4E2A\u67F1\u72B6\u4F53\u4E4B\u95F4\u7684\u95F4\u9694",default:"20%",seriesType:"bar"},{attribute:"stack",type:"boolean",describe:"\u67F1\u72B6\u56FE\u5806\u53E0",default:"false",seriesType:"bar"},{attribute:"labelShow",type:"boolean",describe:"\u67F1\u72B6\u56FE\u4E2D\u95F4\u6807\u7B7E\u77E5\u5426\u663E\u793A\uFF08\u6570\u503C\uFF09",default:"false",seriesType:"bar"},{attribute:"-",type:"-",describe:"-",default:"-"},{attribute:"waterfall",type:"boolean",describe:"\u662F\u5426\u7011\u5E03\u56FE",default:"false",seriesType:"bar"},{attribute:"fallTotalName",type:"string",describe:"\u7011\u5E03\u56FE\u603B\u8BA1\u7684\u540D\u79F0\uFF08\u53EA\u9002\u7528\u4E8E\u7011\u5E03\u56FE\uFF09",default:"\u603B\u8BA1",seriesType:"bar"},{attribute:"fallLegendName",type:"string",describe:"\u7011\u5E03\u56FELegend\u540D\u79F0\uFF08\u53EA\u9002\u7528\u4E8E\u7011\u5E03\u56FE\uFF09",default:"''",seriesType:"bar"},{attribute:"fallBarColor",type:"string",describe:"\u7011\u5E03\u56FE\u67F1\u4F53\u989C\u8272\uFF08\u53EA\u9002\u7528\u4E8E\u7011\u5E03\u56FE\uFF09",default:"''",seriesType:"bar"}]}}},on=r=>(rt("data-v-a956176c"),r=r(),nt(),r),sn={class:"chart-content"},ln=on(()=>X("h3",{class:"h3"},"settings \u914D\u7F6E\u9879",-1));function un(r,t,e,a,n,i){const o=w("Table");return F(),B("div",sn,[ln,P(o,{class:"table",columns:n.columns,data:n.tableData},null,8,["columns","data"])])}const cn=V(nn,[["render",un],["__scopeId","data-v-a956176c"]]);const mn={data(){return{columns:[{title:"\u914D\u7F6E\u5C5E\u6027",key:"attribute",align:"center"},{title:"\u7C7B\u578B",key:"type",align:"center"},{title:"\u63CF\u8FF0",key:"describe",align:"center"},{title:"\u9ED8\u8BA4\u503C",key:"default",align:"center"},{title:"\u4F7F\u7528\u6761\u4EF6",key:"seriesType",align:"center"}],tableData:[{attribute:"right",type:"boolean",describe:"\u662F\u5426\u5F00\u542F\u53F3\u4FA7Y\u8F74",default:"false",seriesType:"bar/line"},{attribute:"markMax",type:"boolean",describe:"\u6700\u5927\u503C\u6807\u6CE8",default:"false",seriesType:"bar/line"},{attribute:"markMin",type:"boolean",describe:"\u6700\u5C0F\u503C\u6807\u6CE8",default:"false",seriesType:"bar/line"},{attribute:"type",type:"line | bar",describe:"\u76F4\u65B9\u56FE\u7C7B\u578B\uFF08\u6298\u7EBF | \u67F1\u72B6\u56FE\uFF09",default:"line",seriesType:"bar/line"}]}}},pn=r=>(rt("data-v-57fd61d6"),r=r(),nt(),r),hn={class:"chart-content"},fn=pn(()=>X("h3",{class:"h3"},"\u76F4\u65B9\u56FE columns \u914D\u7F6E\u9879",-1));function vn(r,t,e,a,n,i){const o=w("Table");return F(),B("div",hn,[fn,P(o,{class:"table",columns:n.columns,data:n.tableData},null,8,["columns","data"])])}const gn=V(mn,[["render",vn],["__scopeId","data-v-57fd61d6"]]),yn={name:"Line",components:{BaseHistogram:sr,AreaLine:hr,DoubleYLine:br,BaseLineSmooth:wr,LineMaxMin:Ir,XAxisType:Er,XAxisTypeTime:Rr,BarStack:Jr,WaterFall:rn,DocsTable:cn,DocsColumnsTable:gn},data(){return{}}},dn={class:"home"};function bn(r,t,e,a,n,i){const o=w("BaseHistogram"),s=w("AreaLine"),l=w("DoubleYLine"),u=w("BaseLineSmooth"),m=w("LineMaxMin"),c=w("XAxisTypeTime"),h=w("XAxisType"),p=w("BarStack"),y=w("WaterFall"),g=w("DocsColumnsTable"),v=w("DocsTable");return F(),B("div",dn,[P(o),P(s),P(l),P(u),P(m),P(c),P(h),P(p),P(y),P(g),P(v)])}const wn=V(yn,[["render",bn]]);export{wn as default};
