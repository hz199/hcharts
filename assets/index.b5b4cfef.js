import{am as nt,aA as C,aB as Ce,aC as Ie,aD as Fe,aq as ot,aw as ke,aE as Ne,aF as Se,aG as it,aH as st,j as we,ai as B,e as se,x as Ye,aI as lt,l as ct,aJ as ut,_ as xe,at as dt,I as X,r as _e,z as $e,A as pt,N as vt,M as gt,K as ft,J as ht,aK as mt,t as Xe,D as bt,F as yt,aL as Re,f as Ue,aM as St,aN as _t,Z as Pt,o as wt,aO as xt,ak as qe,aP as At,u as Lt,H as Mt,az as Tt}from"./index.4ef32864.js";import{a as Dt,d as Ot}from"./defaultChartConfig.5a1a8dfa.js";import{L as Ct,c as It,d as kt}from"./LegendVisualProvider.f1176c64.js";import{e as Nt,h as $t,_ as U,r as M,o as q,c as Z,a as T,w as pe,d as te,p as Rt,f as Ht}from"./index.8e07b5ee.js";import{M as Bt}from"./mock.14bd0a2d.js";nt.CMD;function Ze(t,r,a,e,n,i,o,s){var c=n-t,p=i-r,l=a-t,v=e-r,g=Math.sqrt(l*l+v*v);l/=g,v/=g;var u=c*l+p*v,d=u/g;s&&(d=Math.min(Math.max(d,0),1)),d*=g;var f=o[0]=t+d*l,h=o[1]=r+d*v;return Math.sqrt((f-n)*(f-n)+(h-i)*(h-i))}var E=new C,w=new C,O=new C,G=new C,H=new C,ue=[],k=new C;function Et(t,r){if(r<=180&&r>0){r=r/180*Math.PI,E.fromArray(t[0]),w.fromArray(t[1]),O.fromArray(t[2]),C.sub(G,E,w),C.sub(H,O,w);var a=G.len(),e=H.len();if(!(a<.001||e<.001)){G.scale(1/a),H.scale(1/e);var n=G.dot(H),i=Math.cos(r);if(i<n){var o=Ze(w.x,w.y,O.x,O.y,E.x,E.y,ue,!1);k.fromArray(ue),k.scaleAndAdd(H,o/Math.tan(Math.PI-r));var s=O.x!==w.x?(k.x-w.x)/(O.x-w.x):(k.y-w.y)/(O.y-w.y);if(isNaN(s))return;s<0?C.copy(k,w):s>1&&C.copy(k,O),k.toArray(t[1])}}}}function Gt(t,r,a){if(a<=180&&a>0){a=a/180*Math.PI,E.fromArray(t[0]),w.fromArray(t[1]),O.fromArray(t[2]),C.sub(G,w,E),C.sub(H,O,w);var e=G.len(),n=H.len();if(!(e<.001||n<.001)){G.scale(1/e),H.scale(1/n);var i=G.dot(r),o=Math.cos(a);if(i<o){var s=Ze(w.x,w.y,O.x,O.y,E.x,E.y,ue,!1);k.fromArray(ue);var c=Math.PI/2,p=Math.acos(H.dot(r)),l=c+p-a;if(l>=c)C.copy(k,O);else{k.scaleAndAdd(H,s/Math.tan(Math.PI/2-l));var v=O.x!==w.x?(k.x-w.x)/(O.x-w.x):(k.y-w.y)/(O.y-w.y);if(isNaN(v))return;v<0?C.copy(k,w):v>1&&C.copy(k,O)}k.toArray(t[1])}}}}function He(t,r,a,e){var n=a==="normal",i=n?t:t.ensureState(a);i.ignore=r;var o=e.get("smooth");o&&o===!0&&(o=.3),i.shape=i.shape||{},o>0&&(i.shape.smooth=o);var s=e.getModel("lineStyle").getLineStyle();n?t.useStyle(s):i.style=s}function Vt(t,r){var a=r.smooth,e=r.points;if(!!e)if(t.moveTo(e[0][0],e[0][1]),a>0&&e.length>=3){var n=Ne(e[0],e[1]),i=Ne(e[1],e[2]);if(!n||!i){t.lineTo(e[1][0],e[1][1]),t.lineTo(e[2][0],e[2][1]);return}var o=Math.min(n,i)*a,s=Se([],e[1],e[0],o/n),c=Se([],e[1],e[2],o/i),p=Se([],s,c,.5);t.bezierCurveTo(s[0],s[1],s[0],s[1],p[0],p[1]),t.bezierCurveTo(c[0],c[1],c[0],c[1],e[2][0],e[2][1])}else for(var l=1;l<e.length;l++)t.lineTo(e[l][0],e[l][1])}function jt(t,r,a){var e=t.getTextGuideLine(),n=t.getTextContent();if(!n){e&&t.removeTextGuideLine();return}for(var i=r.normal,o=i.get("show"),s=n.ignore,c=0;c<Ce.length;c++){var p=Ce[c],l=r[p],v=p==="normal";if(l){var g=l.get("show"),u=v?s:Ie(n.states[p]&&n.states[p].ignore,s);if(u||!Ie(g,o)){var d=v?e:e&&e.states[p];d&&(d.ignore=!0);continue}e||(e=new Fe,t.setTextGuideLine(e),!v&&(s||!o)&&He(e,!0,"normal",r.normal),t.stateProxy&&(e.stateProxy=t.stateProxy)),He(e,!1,p,l)}}if(e){ot(e.style,a),e.style.fill=null;var f=i.get("showAbove"),h=t.textGuideLineConfig=t.textGuideLineConfig||{};h.showAbove=f||!1,e.buildPath=Vt}}function zt(t,r){r=r||"labelLine";for(var a={normal:t.getModel(r)},e=0;e<ke.length;e++){var n=ke[e];a[n]=t.getModel([n,r])}return a}var le=Math.PI*2,Be=Math.PI/180;function Je(t,r){return st(t.getBoxLayoutParams(),{width:r.getWidth(),height:r.getHeight()})}function Ke(t,r){var a=Je(t,r),e=t.get("center"),n=t.get("radius");we(n)||(n=[0,n]),we(e)||(e=[e,e]);var i=B(a.width,r.getWidth()),o=B(a.height,r.getHeight()),s=Math.min(i,o),c=B(n[0],s/2),p=B(n[1],s/2),l,v,g=t.coordinateSystem;if(g){var u=g.dataToPoint(e);l=u[0]||0,v=u[1]||0}else l=B(e[0],i)+a.x,v=B(e[1],o)+a.y;return{cx:l,cy:v,r0:c,r:p}}function Ft(t,r,a){r.eachSeriesByType(t,function(e){var n=e.getData(),i=n.mapDimension("value"),o=Je(e,a),s=Ke(e,a),c=s.cx,p=s.cy,l=s.r,v=s.r0,g=-e.get("startAngle")*Be,u=e.get("minAngle")*Be,d=0;n.each(i,function(D){!isNaN(D)&&d++});var f=n.getSum(i),h=Math.PI/(f||d)*2,m=e.get("clockwise"),y=e.get("roseType"),S=e.get("stillShowZeroSum"),I=n.getDataExtent(i);I[0]=0;var _=le,L=0,x=g,b=m?1:-1;if(n.setLayout({viewRect:o,r:l}),n.each(i,function(D,$){var A;if(isNaN(D)){n.setItemLayout($,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:m,cx:c,cy:p,r0:v,r:y?NaN:l});return}y!=="area"?A=f===0&&S?h:D*h:A=le/d,A<u?(A=u,_-=u):L+=D;var N=x+b*A;n.setItemLayout($,{angle:A,startAngle:x,endAngle:N,clockwise:m,cx:c,cy:p,r0:v,r:y?it(D,I,[v,l]):l}),x=N}),_<le&&d)if(_<=.001){var P=le/d;n.each(i,function(D,$){if(!isNaN(D)){var A=n.getItemLayout($);A.angle=P,A.startAngle=g+b*$*P,A.endAngle=g+b*($+1)*P}})}else h=_/L,x=g,n.each(i,function(D,$){if(!isNaN(D)){var A=n.getItemLayout($),N=A.angle===u?u:D*h;A.startAngle=x,A.endAngle=x+b*N,x+=b*N}})})}var Yt=Math.PI/180;function Ee(t,r,a,e,n,i,o,s,c,p){if(t.length<2)return;function l(f){for(var h=f.rB,m=h*h,y=0;y<f.list.length;y++){var S=f.list[y],I=Math.abs(S.label.y-a),_=e+S.len,L=_*_,x=Math.sqrt((1-Math.abs(I*I/m))*L),b=r+(x+S.len2)*n,P=b-S.label.x,D=S.targetTextWidth-P*n;Qe(S,D,!0),S.label.x=b}}function v(f){for(var h={list:[],maxY:0},m={list:[],maxY:0},y=0;y<f.length;y++)if(f[y].labelAlignTo==="none"){var S=f[y],I=S.label.y>a?m:h,_=Math.abs(S.label.y-a);if(_>=I.maxY){var L=S.label.x-r-S.len2*n,x=e+S.len,b=Math.abs(L)<x?Math.sqrt(_*_/(1-L*L/x/x)):x;I.rB=b,I.maxY=_}I.list.push(S)}l(h),l(m)}for(var g=t.length,u=0;u<g;u++)if(t[u].position==="outer"&&t[u].labelAlignTo==="labelLine"){var d=t[u].label.x-p;t[u].linePoints[1][0]+=d,t[u].label.x=p}lt(t,c,c+o)&&v(t)}function Xt(t,r,a,e,n,i,o,s){for(var c=[],p=[],l=Number.MAX_VALUE,v=-Number.MAX_VALUE,g=0;g<t.length;g++){var u=t[g].label;Pe(t[g])||(u.x<r?(l=Math.min(l,u.x),c.push(t[g])):(v=Math.max(v,u.x),p.push(t[g])))}for(var g=0;g<t.length;g++){var d=t[g];if(!Pe(d)&&d.linePoints){if(d.labelStyleWidth!=null)continue;var u=d.label,f=d.linePoints,h=void 0;d.labelAlignTo==="edge"?u.x<r?h=f[2][0]-d.labelDistance-o-d.edgeDistance:h=o+n-d.edgeDistance-f[2][0]-d.labelDistance:d.labelAlignTo==="labelLine"?u.x<r?h=l-o-d.bleedMargin:h=o+n-v-d.bleedMargin:u.x<r?h=u.x-o-d.bleedMargin:h=o+n-u.x-d.bleedMargin,d.targetTextWidth=h,Qe(d,h)}}Ee(p,r,a,e,1,n,i,o,s,v),Ee(c,r,a,e,-1,n,i,o,s,l);for(var g=0;g<t.length;g++){var d=t[g];if(!Pe(d)&&d.linePoints){var u=d.label,f=d.linePoints,m=d.labelAlignTo==="edge",y=u.style.padding,S=y?y[1]+y[3]:0,I=u.style.backgroundColor?0:S,_=d.rect.width+I,L=f[1][0]-f[2][0];m?u.x<r?f[2][0]=o+d.edgeDistance+_+d.labelDistance:f[2][0]=o+n-d.edgeDistance-_-d.labelDistance:(u.x<r?f[2][0]=u.x+d.labelDistance:f[2][0]=u.x-d.labelDistance,f[1][0]=f[2][0]+L),f[1][1]=f[2][1]=u.y}}}function Qe(t,r,a){if(a===void 0&&(a=!1),t.labelStyleWidth==null){var e=t.label,n=e.style,i=t.rect,o=n.backgroundColor,s=n.padding,c=s?s[1]+s[3]:0,p=n.overflow,l=i.width+(o?0:c);if(r<l||a){var v=i.height;if(p&&p.match("break")){e.setStyle("backgroundColor",null),e.setStyle("width",r-c);var g=e.getBoundingRect();e.setStyle("width",Math.ceil(g.width)),e.setStyle("backgroundColor",o)}else{var u=r-c,d=r<l?u:a?u>t.unconstrainedWidth?null:u:null;e.setStyle("width",d)}var f=e.getBoundingRect();i.width=f.width;var h=(e.style.margin||0)+2.1;i.height=f.height+h,i.y-=(i.height-v)/2}}}function Pe(t){return t.position==="center"}function Ut(t){var r=t.getData(),a=[],e,n,i=!1,o=(t.get("minShowLabelAngle")||0)*Yt,s=r.getLayout("viewRect"),c=r.getLayout("r"),p=s.width,l=s.x,v=s.y,g=s.height;function u(L){L.ignore=!0}function d(L){if(!L.ignore)return!0;for(var x in L.states)if(L.states[x].ignore===!1)return!0;return!1}r.each(function(L){var x=r.getItemGraphicEl(L),b=x.shape,P=x.getTextContent(),D=x.getTextGuideLine(),$=r.getItemModel(L),A=$.getModel("label"),N=A.get("position")||$.get(["emphasis","label","position"]),ge=A.get("distanceToLabelLine"),fe=A.get("alignTo"),he=B(A.get("edgeDistance"),p),tt=A.get("bleedMargin"),ae=$.getModel("labelLine"),J=ae.get("length");J=B(J,p);var re=ae.get("length2");if(re=B(re,p),Math.abs(b.endAngle-b.startAngle)<o){se(P.states,u),se(D.states,u),P.ignore=D.ignore=!0;return}if(!!d(P)){var ne=(b.startAngle+b.endAngle)/2,R=Math.cos(ne),V=Math.sin(ne),K,oe,Ae,ie;e=b.cx,n=b.cy;var z=N==="inside"||N==="inner";if(N==="center")K=b.cx,oe=b.cy,ie="center";else{var me=(z?(b.r+b.r0)/2*R:b.r*R)+e,be=(z?(b.r+b.r0)/2*V:b.r*V)+n;if(K=me+R*3,oe=be+V*3,!z){var Le=me+R*(J+c-b.r),Me=be+V*(J+c-b.r),Te=Le+(R<0?-1:1)*re,De=Me;fe==="edge"?K=R<0?l+he:l+p-he:K=Te+(R<0?-ge:ge),oe=De,Ae=[[me,be],[Le,Me],[Te,De]]}ie=z?"center":fe==="edge"?R>0?"right":"left":R>0?"left":"right"}var Q=Math.PI,F=0,W=A.get("rotate");if(Ye(W))F=W*(Q/180);else if(N==="center")F=0;else if(W==="radial"||W===!0){var at=R<0?-ne+Q:-ne;F=at}else if(W==="tangential"&&N!=="outside"&&N!=="outer"){var Y=Math.atan2(R,V);Y<0&&(Y=Q*2+Y);var rt=V>0;rt&&(Y=Q+Y),F=Y-Q}if(i=!!F,P.x=K,P.y=oe,P.rotation=F,P.setStyle({verticalAlign:"middle"}),z){P.setStyle({align:ie});var ye=P.states.select;ye&&(ye.x+=P.x,ye.y+=P.y)}else{var ee=P.getBoundingRect().clone();ee.applyTransform(P.getComputedTransform());var Oe=(P.style.margin||0)+2.1;ee.y-=Oe/2,ee.height+=Oe,a.push({label:P,labelLine:D,position:N,len:J,len2:re,minTurnAngle:ae.get("minTurnAngle"),maxSurfaceAngle:ae.get("maxSurfaceAngle"),surfaceNormal:new C(R,V),linePoints:Ae,textAlign:ie,labelDistance:ge,labelAlignTo:fe,edgeDistance:he,bleedMargin:tt,rect:ee,unconstrainedWidth:ee.width,labelStyleWidth:P.style.width})}x.setTextConfig({inside:z})}}),!i&&t.get("avoidLabelOverlap")&&Xt(a,e,n,c,p,g,l,v);for(var f=0;f<a.length;f++){var h=a[f],m=h.label,y=h.labelLine,S=isNaN(m.x)||isNaN(m.y);if(m){m.setStyle({align:h.textAlign}),S&&(se(m.states,u),m.ignore=!0);var I=m.states.select;I&&(I.x+=m.x,I.y+=m.y)}if(y){var _=h.linePoints;S||!_?(se(y.states,u),y.ignore=!0):(Et(_,h.minTurnAngle),Gt(_,h.surfaceNormal,h.maxSurfaceAngle),y.setShape({points:_}),m.__hostTarget.textGuideLineConfig={anchor:new C(_[0][0],_[0][1])})}}}function ce(t,r,a){var e=t.get("borderRadius");if(e==null)return a?{cornerRadius:0}:null;we(e)||(e=[e,e,e,e]);var n=Math.abs(r.r||0-r.r0||0);return{cornerRadius:ct(e,function(i){return ut(i,n)})}}var qt=function(t){xe(r,t);function r(a,e,n){var i=t.call(this)||this;i.z2=2;var o=new dt;return i.setTextContent(o),i.updateData(a,e,n,!0),i}return r.prototype.updateData=function(a,e,n,i){var o=this,s=a.hostModel,c=a.getItemModel(e),p=c.getModel("emphasis"),l=a.getItemLayout(e),v=X(ce(c.getModel("itemStyle"),l,!0),l);if(isNaN(v.startAngle)){o.setShape(v);return}if(i){o.setShape(v);var g=s.getShallow("animationType");s.ecModel.ssr?(_e(o,{scaleX:0,scaleY:0},s,{dataIndex:e,isFrom:!0}),o.originX=v.cx,o.originY=v.cy):g==="scale"?(o.shape.r=l.r0,_e(o,{shape:{r:l.r}},s,e)):n!=null?(o.setShape({startAngle:n,endAngle:n}),_e(o,{shape:{startAngle:l.startAngle,endAngle:l.endAngle}},s,e)):(o.shape.endAngle=l.startAngle,$e(o,{shape:{endAngle:l.endAngle}},s,e))}else pt(o),$e(o,{shape:v},s,e);o.useStyle(a.getItemVisual(e,"style")),vt(o,c);var u=(l.startAngle+l.endAngle)/2,d=s.get("selectedOffset"),f=Math.cos(u)*d,h=Math.sin(u)*d,m=c.getShallow("cursor");m&&o.attr("cursor",m),this._updateLabel(s,a,e),o.ensureState("emphasis").shape=X({r:l.r+(p.get("scale")&&p.get("scaleSize")||0)},ce(p.getModel("itemStyle"),l)),X(o.ensureState("select"),{x:f,y:h,shape:ce(c.getModel(["select","itemStyle"]),l)}),X(o.ensureState("blur"),{shape:ce(c.getModel(["blur","itemStyle"]),l)});var y=o.getTextGuideLine(),S=o.getTextContent();y&&X(y.ensureState("select"),{x:f,y:h}),X(S.ensureState("select"),{x:f,y:h}),gt(this,p.get("focus"),p.get("blurScope"),p.get("disabled"))},r.prototype._updateLabel=function(a,e,n){var i=this,o=e.getItemModel(n),s=o.getModel("labelLine"),c=e.getItemVisual(n,"style"),p=c&&c.fill,l=c&&c.opacity;ft(i,ht(o),{labelFetcher:e.hostModel,labelDataIndex:n,inheritColor:p,defaultOpacity:l,defaultText:a.getFormattedLabel(n,"normal")||e.getName(n)});var v=i.getTextContent();i.setTextConfig({position:null,rotation:null}),v.attr({z2:10});var g=a.get(["label","position"]);if(g!=="outside"&&g!=="outer")i.removeTextGuideLine();else{var u=this.getTextGuideLine();u||(u=new Fe,this.setTextGuideLine(u)),jt(this,zt(o),{stroke:p,opacity:mt(s.get(["lineStyle","opacity"]),l,1)})}},r}(Xe),Zt=function(t){xe(r,t);function r(){var a=t!==null&&t.apply(this,arguments)||this;return a.ignoreLabelLineUpdate=!0,a}return r.prototype.render=function(a,e,n,i){var o=a.getData(),s=this._data,c=this.group,p;if(!s&&o.count()>0){for(var l=o.getItemLayout(0),v=1;isNaN(l&&l.startAngle)&&v<o.count();++v)l=o.getItemLayout(v);l&&(p=l.startAngle)}if(this._emptyCircleSector&&c.remove(this._emptyCircleSector),o.count()===0&&a.get("showEmptyCircle")){var g=new Xe({shape:Ke(a,n)});g.useStyle(a.getModel("emptyCircleStyle").getItemStyle()),this._emptyCircleSector=g,c.add(g)}o.diff(s).add(function(u){var d=new qt(o,u,p);o.setItemGraphicEl(u,d),c.add(d)}).update(function(u,d){var f=s.getItemGraphicEl(d);f.updateData(o,u,p),f.off("click"),c.add(f),o.setItemGraphicEl(u,f)}).remove(function(u){var d=s.getItemGraphicEl(u);bt(d,a,u)}).execute(),Ut(a),a.get("animationTypeUpdate")!=="expansion"&&(this._data=o)},r.prototype.dispose=function(){},r.prototype.containPoint=function(a,e){var n=e.getData(),i=n.getItemLayout(0);if(i){var o=a[0]-i.cx,s=a[1]-i.cy,c=Math.sqrt(o*o+s*s);return c<=i.r&&c>=i.r0}},r.type="pie",r}(yt);const Jt=Zt;var Kt=function(t){xe(r,t);function r(){return t!==null&&t.apply(this,arguments)||this}return r.prototype.init=function(a){t.prototype.init.apply(this,arguments),this.legendVisualProvider=new Ct(Re(this.getData,this),Re(this.getRawData,this)),this._defaultLabelLine(a)},r.prototype.mergeOption=function(){t.prototype.mergeOption.apply(this,arguments)},r.prototype.getInitialData=function(){var a=It(this,{coordDimensions:["value"],encodeDefaulter:Ue(St,this)}),e=[];return a.each(a.mapDimension("value"),function(n){e.push(n)}),this.seats=_t(e,a.hostModel.get("percentPrecision")),a},r.prototype.getDataParams=function(a){var e=t.prototype.getDataParams.call(this,a);return e.percent=this.seats[a],e.$vars.push("percent"),e},r.prototype._defaultLabelLine=function(a){Pt(a,"labelLine",["show"]);var e=a.labelLine,n=a.emphasis.labelLine;e.show=e.show&&a.label.show,n.show=n.show&&a.emphasis.label.show},r.type="series.pie",r.defaultOption={z:2,legendHoverLink:!0,colorBy:"data",center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1,borderJoin:"round"},showEmptyCircle:!0,emptyCircleStyle:{color:"lightgray",opacity:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},r}(wt);const Qt=Kt;function Wt(t){return{seriesType:t,reset:function(r,a){var e=r.getData();e.filterSelf(function(n){var i=e.mapDimension("value"),o=e.get(i,n);return!(Ye(o)&&!isNaN(o)&&o<0)})}}}function ea(t){t.registerChartView(Jt),t.registerSeriesModel(Qt),xt("pie",t.registerAction),t.registerLayout(Ue(Ft,"pie")),t.registerProcessor(kt("pie")),t.registerProcessor(Wt("pie"))}const ta=(t,r)=>{const{tooltip:a=!0}=r;let e=Ot("item");return qe(a)?a?e:{}:a},aa=(t,r)=>{const{legend:a=!0}=r;return qe(a)?Dt():a},ra=(t,r)=>{const{rows:a,columns:e}=t,{eRadius:n="60%",wRadius:i="0%",xOffset:o="50%",yOffset:s="50%",seriesName:c="",hasBorder:p=!0,borderRadius:l=6,labelFontSize:v,roseType:g=void 0,labelShow:u=!0}=r;if(!At(a)){console.warn("rows must be a object");return}const d=[];return e.forEach(h=>{const m=a;d.push({value:m[h.key],name:h.title+""})}),[{name:c,type:"pie",radius:[i,n],center:[o,s],data:d.sort(function(h,m){return h.value-m.value}),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},label:{show:!0,fontWeight:"bold"}},label:{position:"outside",fontSize:v,show:u,distanceToLabelLine:5,formatter:"{b}\uFF1A{d}%"},itemStyle:p?{borderRadius:l,borderColor:"#f0f0f0",borderWidth:2}:{},roseType:g,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(){return Math.random()*120}}]},Ge=(t,r,a)=>{const e=ta(t,r),n=aa(t,r),i=ra(t,r),{title:o={}}=r;return{aria:{decal:{show:a}},title:o,tooltip:e,legend:n,series:i}};var na=Object.defineProperty,oa=Object.defineProperties,ia=Object.getOwnPropertyDescriptors,de=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,Ve=(t,r,a)=>r in t?na(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,je=(t,r)=>{for(var a in r||(r={}))We.call(r,a)&&Ve(t,a,r[a]);if(de)for(var a of de(r))et.call(r,a)&&Ve(t,a,r[a]);return t},ze=(t,r)=>oa(t,ia(r)),sa=(t,r)=>{var a={};for(var e in t)We.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&de)for(var e of de(t))r.indexOf(e)<0&&et.call(t,e)&&(a[e]=t[e]);return a};Lt([ea]);const j=Nt({name:"HPie",data(){return{Options:{}}},props:ze(je({},Tt),{dataSource:{type:Object,default:()=>({})},settings:{type:Object,default:()=>({})}}),render(){const t=this.$props,r=sa(t,["dataSource","settings"]),a=this.Options;return $t(Mt,ze(je({},r),{options:a}))},mounted(){const{dataSource:t,settings:r,ariaShow:a}=this.$props;this.Options=Ge(t,r,a)},watch:{$props(){const{dataSource:t,settings:r,ariaShow:a}=this.$props;this.Options=Ge(t,r,a)}}});j.install=t=>{t.component(j.name,j)};const ve=()=>Bt.mock({columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u4E0B\u57CE\u4EBA\u6570",key:"number3"},{title:"\u8427\u5C71\u4EBA\u6570",key:"number4"},{title:"\u7559\u4E0B\u4EBA\u6570",key:"number5"}],rows:{"number1|100-1000":800,"number2|1000-1500":1393,"number3|1000-2000":1200,"number4|500-2000":500,"number5|500-2000":1800}}),la=`
<template>
  <HPie :dataSource="dataSource"></HPie>
</template>
<script>
import { HPie } from '@yyr1994/h-charts'
export default {
  components: {
    HPie
  },
  data () {
    return {
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
          },
          {
            "title": "\u8427\u5C71\u4EBA\u6570",
            "key": "number4"
          }
        ],
        "rows": {
          "number1": 471,
          "number2": 1179,
          "number3": 931,
          "number4": 1310
        }
      }
    }
  }
}
<\/script>
`,ca={name:"BaseLine",components:{HPie:j},data(){return{dataSource:ve(),codePre:la}}},ua={class:"chart-content"},da=te("h3",{class:"h3"},"\u57FA\u7840\u997C\u72B6\u56FE",-1);function pa(t,r,a,e,n,i){const o=M("HPie"),s=M("Prism"),c=M("ShowMore");return q(),Z("div",ua,[da,T(o,{dataSource:n.dataSource},null,8,["dataSource"]),T(c,null,{default:pe(()=>[T(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const va=U(ca,[["render",pa]]),ga=`
<template>
  <HPie :dataSource="dataSource" :settings="settings"></HPie>
</template>
<script>
import { HPie } from '@yyr1994/h-charts'
export default {
  components: {
    HPie
  },
  data () {
    return {
      settings: {
        wRadius: '10%', // \u5185\u5706\u534A\u5F84\u5927\u5C0F\uFF0C\u9ED8\u8BA40%
        eRadius: '30%', // \u5916\u5706\u534A\u5F84\u5927\u5C0F \u9ED8\u8BA460%
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
          },
          {
            "title": "\u8427\u5C71\u4EBA\u6570",
            "key": "number4"
          }
        ],
        "rows": {
          "number1": 471,
          "number2": 1179,
          "number3": 931,
          "number4": 1310
        }
      }
    }
  }
}
<\/script>
`,fa={name:"BaseLine",components:{HPie:j},data(){return{settings:{wRadius:"10%",eRadius:"30%"},dataSource:ve(),codePre:ga}}},ha={class:"chart-content"},ma=te("h3",{class:"h3"},"\u534A\u5F84\u8C03\u6574",-1);function ba(t,r,a,e,n,i){const o=M("HPie"),s=M("Prism"),c=M("ShowMore");return q(),Z("div",ha,[ma,T(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),T(c,null,{default:pe(()=>[T(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const ya=U(fa,[["render",ba]]),Sa=`
<template>
  <HPie :dataSource="dataSource" :settings="settings"></HPie>
</template>
<script>
import { HPie } from '@yyr1994/h-charts'
export default {
  components: {
    HPie
  },
  data () {
    return {
      settings: {
        wRadius: '30%'
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
          },
          {
            "title": "\u8427\u5C71\u4EBA\u6570",
            "key": "number4"
          }
        ],
        "rows": {
          "number1": 471,
          "number2": 1179,
          "number3": 931,
          "number4": 1310
        }
      }
    }
  }
}
<\/script>
`,_a={name:"BaseLine",components:{HPie:j},data(){return{settings:{wRadius:"30%"},dataSource:ve(),codePre:Sa}}},Pa={class:"chart-content"},wa=te("h3",{class:"h3"},"\u5706\u73AF\u997C\u72B6\u56FE",-1);function xa(t,r,a,e,n,i){const o=M("HPie"),s=M("Prism"),c=M("ShowMore");return q(),Z("div",Pa,[wa,T(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),T(c,null,{default:pe(()=>[T(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const Aa=U(_a,[["render",xa]]),La=`
<template>
  <HPie :dataSource="dataSource" :settings="settings"></HPie>
</template>
<script>
import { HPie } from '@yyr1994/h-charts'
export default {
  components: {
    HPie
  },
  data () {
    return {
      settings: {
        wRadius: '10%',
        roseType: 'radius'
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
          },
          {
            "title": "\u8427\u5C71\u4EBA\u6570",
            "key": "number4"
          }
        ],
        "rows": {
          "number1": 471,
          "number2": 1179,
          "number3": 931,
          "number4": 1310
        }
      }
    }
  }
}
<\/script>
`,Ma={name:"BaseLine",components:{HPie:j},data(){return{settings:{wRadius:"10%",roseType:"radius"},dataSource:ve(),codePre:La}}},Ta={class:"chart-content"},Da=te("h3",{class:"h3"},"\u5357\u4E01\u683C\u5C14\u73AB\u7470",-1);function Oa(t,r,a,e,n,i){const o=M("HPie"),s=M("Prism"),c=M("ShowMore");return q(),Z("div",Ta,[Da,T(o,{dataSource:n.dataSource,settings:n.settings},null,8,["dataSource","settings"]),T(c,null,{default:pe(()=>[T(s,{languages:"html",isLineNumber:"",code:n.codePre},null,8,["code"])]),_:1})])}const Ca=U(Ma,[["render",Oa]]);const Ia={data(){return{columns:[{title:"\u914D\u7F6E\u5C5E\u6027",key:"attribute",align:"center"},{title:"\u7C7B\u578B",key:"type",align:"center"},{title:"\u63CF\u8FF0",key:"describe",align:"center"},{title:"\u9ED8\u8BA4\u503C",key:"default",align:"center"}],tableData:[{attribute:"title",type:"EChartTitleOption",describe:"\u56FE\u8868\u6807\u9898",default:"{}"},{attribute:"tooltip",type:"EChartOption.Tooltip | boolean",describe:"tooltip\u5DE5\u5177",default:"true"},{attribute:"legend",type:"EChartOption.Legend | boolean",describe:"legend\u5DE5\u5177",default:"true"},{attribute:"eRadius",type:"string",describe:"\u5916\u5706\u534A\u5F84\u5927\u5C0F",default:"60%"},{attribute:"wRadius",type:"string",describe:"\u5185\u5706\u534A\u5F84\u5927\u5C0F",default:"0%"},{attribute:"xOffset",type:"string",describe:"x\u8F74\u504F\u79FB\u91CF",default:"50%"},{attribute:"yOffset",type:"string",describe:"y\u8F74\u504F\u79FB\u91CF",default:"50%"},{attribute:"seriesName",type:"string",describe:"pie \u540D\u79F0",default:""},{attribute:"hasBorder",type:"boolean",describe:"\u662F\u5426\u5B58\u5728\u8FB9\u6846",default:"true"},{attribute:"borderRadius",type:"number",describe:"\u8FB9\u6846\u5F27\u5EA6",default:"6"},{attribute:"labelShow",type:"boolean",describe:"label\u662F\u5426\u663E\u793A",default:"true"},{attribute:"labelFontSize",type:"number",describe:"label\u5B57\u4F53\u5927\u5C0F",default:""},{attribute:"roseType",type:"radius | area",describe:"\u5357\u4E01\u683C\u73AB\u7470\u56FE",default:""}]}}},ka=t=>(Rt("data-v-55a15260"),t=t(),Ht(),t),Na={class:"chart-content"},$a=ka(()=>te("h3",{class:"h3"},"settings \u914D\u7F6E\u9879",-1));function Ra(t,r,a,e,n,i){const o=M("Table");return q(),Z("div",Na,[$a,T(o,{class:"table",columns:n.columns,data:n.tableData},null,8,["columns","data"])])}const Ha=U(Ia,[["render",Ra],["__scopeId","data-v-55a15260"]]),Ba={name:"Pie",components:{BasePie:va,BasePie1:ya,RadiusPie:Aa,RoseTypePie:Ca,DocsTable:Ha}},Ea={class:"home"};function Ga(t,r,a,e,n,i){const o=M("BasePie"),s=M("BasePie1"),c=M("RadiusPie"),p=M("RoseTypePie"),l=M("DocsTable");return q(),Z("div",Ea,[T(o),T(s),T(c),T(p),T(l)])}const Xa=U(Ba,[["render",Ga]]);export{Xa as default};
