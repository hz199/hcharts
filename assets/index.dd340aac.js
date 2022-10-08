import{am as Qe,aA as k,aB as Ce,aC as ke,aD as Ge,aq as We,aw as Ie,aE as $e,aF as ye,aG as et,aH as tt,j as Pe,ai as B,e as se,x as Ve,aI as at,l as rt,aJ as nt,_ as we,at as ot,I as X,r as Se,z as Ne,A as it,N as st,M as lt,K as ct,J as ut,aK as dt,t as ze,D as gt,F as pt,aL as Oe,f as Fe,aM as vt,aN as ht,Z as ft,o as mt,aO as bt,ak as je,aP as yt,u as St,az as _t,H as Pt}from"./index.5524c212.js";import{a as wt,d as At}from"./defaultChartConfig.5a1a8dfa.js";import{L as Lt,c as xt,d as Mt}from"./LegendVisualProvider.3109dbf7.js";import{e as Tt,h as Dt,_ as U,r as M,o as q,c as Z,a as T,w as de,d as te,p as Ct,f as kt}from"./index.1af21936.js";import{M as It}from"./mock.76202bce.js";Qe.CMD;function Ye(t,n,a,e,r,i,o,s){var c=r-t,g=i-n,l=a-t,p=e-n,v=Math.sqrt(l*l+p*p);l/=v,p/=v;var u=c*l+g*p,d=u/v;s&&(d=Math.min(Math.max(d,0),1)),d*=v;var h=o[0]=t+d*l,f=o[1]=n+d*p;return Math.sqrt((h-r)*(h-r)+(f-i)*(f-i))}var E=new k,w=new k,C=new k,G=new k,H=new k,ue=[],$=new k;function $t(t,n){if(n<=180&&n>0){n=n/180*Math.PI,E.fromArray(t[0]),w.fromArray(t[1]),C.fromArray(t[2]),k.sub(G,E,w),k.sub(H,C,w);var a=G.len(),e=H.len();if(!(a<.001||e<.001)){G.scale(1/a),H.scale(1/e);var r=G.dot(H),i=Math.cos(n);if(i<r){var o=Ye(w.x,w.y,C.x,C.y,E.x,E.y,ue,!1);$.fromArray(ue),$.scaleAndAdd(H,o/Math.tan(Math.PI-n));var s=C.x!==w.x?($.x-w.x)/(C.x-w.x):($.y-w.y)/(C.y-w.y);if(isNaN(s))return;s<0?k.copy($,w):s>1&&k.copy($,C),$.toArray(t[1])}}}}function Nt(t,n,a){if(a<=180&&a>0){a=a/180*Math.PI,E.fromArray(t[0]),w.fromArray(t[1]),C.fromArray(t[2]),k.sub(G,w,E),k.sub(H,C,w);var e=G.len(),r=H.len();if(!(e<.001||r<.001)){G.scale(1/e),H.scale(1/r);var i=G.dot(n),o=Math.cos(a);if(i<o){var s=Ye(w.x,w.y,C.x,C.y,E.x,E.y,ue,!1);$.fromArray(ue);var c=Math.PI/2,g=Math.acos(H.dot(n)),l=c+g-a;if(l>=c)k.copy($,C);else{$.scaleAndAdd(H,s/Math.tan(Math.PI/2-l));var p=C.x!==w.x?($.x-w.x)/(C.x-w.x):($.y-w.y)/(C.y-w.y);if(isNaN(p))return;p<0?k.copy($,w):p>1&&k.copy($,C)}$.toArray(t[1])}}}}function Re(t,n,a,e){var r=a==="normal",i=r?t:t.ensureState(a);i.ignore=n;var o=e.get("smooth");o&&o===!0&&(o=.3),i.shape=i.shape||{},o>0&&(i.shape.smooth=o);var s=e.getModel("lineStyle").getLineStyle();r?t.useStyle(s):i.style=s}function Ot(t,n){var a=n.smooth,e=n.points;if(!!e)if(t.moveTo(e[0][0],e[0][1]),a>0&&e.length>=3){var r=$e(e[0],e[1]),i=$e(e[1],e[2]);if(!r||!i){t.lineTo(e[1][0],e[1][1]),t.lineTo(e[2][0],e[2][1]);return}var o=Math.min(r,i)*a,s=ye([],e[1],e[0],o/r),c=ye([],e[1],e[2],o/i),g=ye([],s,c,.5);t.bezierCurveTo(s[0],s[1],s[0],s[1],g[0],g[1]),t.bezierCurveTo(c[0],c[1],c[0],c[1],e[2][0],e[2][1])}else for(var l=1;l<e.length;l++)t.lineTo(e[l][0],e[l][1])}function Rt(t,n,a){var e=t.getTextGuideLine(),r=t.getTextContent();if(!r){e&&t.removeTextGuideLine();return}for(var i=n.normal,o=i.get("show"),s=r.ignore,c=0;c<Ce.length;c++){var g=Ce[c],l=n[g],p=g==="normal";if(l){var v=l.get("show"),u=p?s:ke(r.states[g]&&r.states[g].ignore,s);if(u||!ke(v,o)){var d=p?e:e&&e.states[g];d&&(d.ignore=!0);continue}e||(e=new Ge,t.setTextGuideLine(e),!p&&(s||!o)&&Re(e,!0,"normal",n.normal),t.stateProxy&&(e.stateProxy=t.stateProxy)),Re(e,!1,g,l)}}if(e){We(e.style,a),e.style.fill=null;var h=i.get("showAbove"),f=t.textGuideLineConfig=t.textGuideLineConfig||{};f.showAbove=h||!1,e.buildPath=Ot}}function Ht(t,n){n=n||"labelLine";for(var a={normal:t.getModel(n)},e=0;e<Ie.length;e++){var r=Ie[e];a[r]=t.getModel([r,n])}return a}var le=Math.PI*2,He=Math.PI/180;function Xe(t,n){return tt(t.getBoxLayoutParams(),{width:n.getWidth(),height:n.getHeight()})}function Ue(t,n){var a=Xe(t,n),e=t.get("center"),r=t.get("radius");Pe(r)||(r=[0,r]),Pe(e)||(e=[e,e]);var i=B(a.width,n.getWidth()),o=B(a.height,n.getHeight()),s=Math.min(i,o),c=B(r[0],s/2),g=B(r[1],s/2),l,p,v=t.coordinateSystem;if(v){var u=v.dataToPoint(e);l=u[0]||0,p=u[1]||0}else l=B(e[0],i)+a.x,p=B(e[1],o)+a.y;return{cx:l,cy:p,r0:c,r:g}}function Bt(t,n,a){n.eachSeriesByType(t,function(e){var r=e.getData(),i=r.mapDimension("value"),o=Xe(e,a),s=Ue(e,a),c=s.cx,g=s.cy,l=s.r,p=s.r0,v=-e.get("startAngle")*He,u=e.get("minAngle")*He,d=0;r.each(i,function(D){!isNaN(D)&&d++});var h=r.getSum(i),f=Math.PI/(h||d)*2,m=e.get("clockwise"),y=e.get("roseType"),S=e.get("stillShowZeroSum"),I=r.getDataExtent(i);I[0]=0;var _=le,x=0,A=v,b=m?1:-1;if(r.setLayout({viewRect:o,r:l}),r.each(i,function(D,O){var L;if(isNaN(D)){r.setItemLayout(O,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:m,cx:c,cy:g,r0:p,r:y?NaN:l});return}y!=="area"?L=h===0&&S?f:D*f:L=le/d,L<u?(L=u,_-=u):x+=D;var N=A+b*L;r.setItemLayout(O,{angle:L,startAngle:A,endAngle:N,clockwise:m,cx:c,cy:g,r0:p,r:y?et(D,I,[p,l]):l}),A=N}),_<le&&d)if(_<=.001){var P=le/d;r.each(i,function(D,O){if(!isNaN(D)){var L=r.getItemLayout(O);L.angle=P,L.startAngle=v+b*O*P,L.endAngle=v+b*(O+1)*P}})}else f=_/x,A=v,r.each(i,function(D,O){if(!isNaN(D)){var L=r.getItemLayout(O),N=L.angle===u?u:D*f;L.startAngle=A,L.endAngle=A+b*N,A+=b*N}})})}var Et=Math.PI/180;function Be(t,n,a,e,r,i,o,s,c,g){if(t.length<2)return;function l(h){for(var f=h.rB,m=f*f,y=0;y<h.list.length;y++){var S=h.list[y],I=Math.abs(S.label.y-a),_=e+S.len,x=_*_,A=Math.sqrt((1-Math.abs(I*I/m))*x),b=n+(A+S.len2)*r,P=b-S.label.x,D=S.targetTextWidth-P*r;qe(S,D,!0),S.label.x=b}}function p(h){for(var f={list:[],maxY:0},m={list:[],maxY:0},y=0;y<h.length;y++)if(h[y].labelAlignTo==="none"){var S=h[y],I=S.label.y>a?m:f,_=Math.abs(S.label.y-a);if(_>=I.maxY){var x=S.label.x-n-S.len2*r,A=e+S.len,b=Math.abs(x)<A?Math.sqrt(_*_/(1-x*x/A/A)):A;I.rB=b,I.maxY=_}I.list.push(S)}l(f),l(m)}for(var v=t.length,u=0;u<v;u++)if(t[u].position==="outer"&&t[u].labelAlignTo==="labelLine"){var d=t[u].label.x-g;t[u].linePoints[1][0]+=d,t[u].label.x=g}at(t,c,c+o)&&p(t)}function Gt(t,n,a,e,r,i,o,s){for(var c=[],g=[],l=Number.MAX_VALUE,p=-Number.MAX_VALUE,v=0;v<t.length;v++){var u=t[v].label;_e(t[v])||(u.x<n?(l=Math.min(l,u.x),c.push(t[v])):(p=Math.max(p,u.x),g.push(t[v])))}for(var v=0;v<t.length;v++){var d=t[v];if(!_e(d)&&d.linePoints){if(d.labelStyleWidth!=null)continue;var u=d.label,h=d.linePoints,f=void 0;d.labelAlignTo==="edge"?u.x<n?f=h[2][0]-d.labelDistance-o-d.edgeDistance:f=o+r-d.edgeDistance-h[2][0]-d.labelDistance:d.labelAlignTo==="labelLine"?u.x<n?f=l-o-d.bleedMargin:f=o+r-p-d.bleedMargin:u.x<n?f=u.x-o-d.bleedMargin:f=o+r-u.x-d.bleedMargin,d.targetTextWidth=f,qe(d,f)}}Be(g,n,a,e,1,r,i,o,s,p),Be(c,n,a,e,-1,r,i,o,s,l);for(var v=0;v<t.length;v++){var d=t[v];if(!_e(d)&&d.linePoints){var u=d.label,h=d.linePoints,m=d.labelAlignTo==="edge",y=u.style.padding,S=y?y[1]+y[3]:0,I=u.style.backgroundColor?0:S,_=d.rect.width+I,x=h[1][0]-h[2][0];m?u.x<n?h[2][0]=o+d.edgeDistance+_+d.labelDistance:h[2][0]=o+r-d.edgeDistance-_-d.labelDistance:(u.x<n?h[2][0]=u.x+d.labelDistance:h[2][0]=u.x-d.labelDistance,h[1][0]=h[2][0]+x),h[1][1]=h[2][1]=u.y}}}function qe(t,n,a){if(a===void 0&&(a=!1),t.labelStyleWidth==null){var e=t.label,r=e.style,i=t.rect,o=r.backgroundColor,s=r.padding,c=s?s[1]+s[3]:0,g=r.overflow,l=i.width+(o?0:c);if(n<l||a){var p=i.height;if(g&&g.match("break")){e.setStyle("backgroundColor",null),e.setStyle("width",n-c);var v=e.getBoundingRect();e.setStyle("width",Math.ceil(v.width)),e.setStyle("backgroundColor",o)}else{var u=n-c,d=n<l?u:a?u>t.unconstrainedWidth?null:u:null;e.setStyle("width",d)}var h=e.getBoundingRect();i.width=h.width;var f=(e.style.margin||0)+2.1;i.height=h.height+f,i.y-=(i.height-p)/2}}}function _e(t){return t.position==="center"}function Vt(t){var n=t.getData(),a=[],e,r,i=!1,o=(t.get("minShowLabelAngle")||0)*Et,s=n.getLayout("viewRect"),c=n.getLayout("r"),g=s.width,l=s.x,p=s.y,v=s.height;function u(x){x.ignore=!0}function d(x){if(!x.ignore)return!0;for(var A in x.states)if(x.states[A].ignore===!1)return!0;return!1}n.each(function(x){var A=n.getItemGraphicEl(x),b=A.shape,P=A.getTextContent(),D=A.getTextGuideLine(),O=n.getItemModel(x),L=O.getModel("label"),N=L.get("position")||O.get(["emphasis","label","position"]),pe=L.get("distanceToLabelLine"),ve=L.get("alignTo"),he=B(L.get("edgeDistance"),g),Ze=L.get("bleedMargin"),ae=O.getModel("labelLine"),J=ae.get("length");J=B(J,g);var re=ae.get("length2");if(re=B(re,g),Math.abs(b.endAngle-b.startAngle)<o){se(P.states,u),se(D.states,u),P.ignore=D.ignore=!0;return}if(!!d(P)){var ne=(b.startAngle+b.endAngle)/2,R=Math.cos(ne),V=Math.sin(ne),K,oe,Ae,ie;e=b.cx,r=b.cy;var F=N==="inside"||N==="inner";if(N==="center")K=b.cx,oe=b.cy,ie="center";else{var fe=(F?(b.r+b.r0)/2*R:b.r*R)+e,me=(F?(b.r+b.r0)/2*V:b.r*V)+r;if(K=fe+R*3,oe=me+V*3,!F){var Le=fe+R*(J+c-b.r),xe=me+V*(J+c-b.r),Me=Le+(R<0?-1:1)*re,Te=xe;ve==="edge"?K=R<0?l+he:l+g-he:K=Me+(R<0?-pe:pe),oe=Te,Ae=[[fe,me],[Le,xe],[Me,Te]]}ie=F?"center":ve==="edge"?R>0?"right":"left":R>0?"left":"right"}var Q=Math.PI,j=0,W=L.get("rotate");if(Ve(W))j=W*(Q/180);else if(N==="center")j=0;else if(W==="radial"||W===!0){var Je=R<0?-ne+Q:-ne;j=Je}else if(W==="tangential"&&N!=="outside"&&N!=="outer"){var Y=Math.atan2(R,V);Y<0&&(Y=Q*2+Y);var Ke=V>0;Ke&&(Y=Q+Y),j=Y-Q}if(i=!!j,P.x=K,P.y=oe,P.rotation=j,P.setStyle({verticalAlign:"middle"}),F){P.setStyle({align:ie});var be=P.states.select;be&&(be.x+=P.x,be.y+=P.y)}else{var ee=P.getBoundingRect().clone();ee.applyTransform(P.getComputedTransform());var De=(P.style.margin||0)+2.1;ee.y-=De/2,ee.height+=De,a.push({label:P,labelLine:D,position:N,len:J,len2:re,minTurnAngle:ae.get("minTurnAngle"),maxSurfaceAngle:ae.get("maxSurfaceAngle"),surfaceNormal:new k(R,V),linePoints:Ae,textAlign:ie,labelDistance:pe,labelAlignTo:ve,edgeDistance:he,bleedMargin:Ze,rect:ee,unconstrainedWidth:ee.width,labelStyleWidth:P.style.width})}A.setTextConfig({inside:F})}}),!i&&t.get("avoidLabelOverlap")&&Gt(a,e,r,c,g,v,l,p);for(var h=0;h<a.length;h++){var f=a[h],m=f.label,y=f.labelLine,S=isNaN(m.x)||isNaN(m.y);if(m){m.setStyle({align:f.textAlign}),S&&(se(m.states,u),m.ignore=!0);var I=m.states.select;I&&(I.x+=m.x,I.y+=m.y)}if(y){var _=f.linePoints;S||!_?(se(y.states,u),y.ignore=!0):($t(_,f.minTurnAngle),Nt(_,f.surfaceNormal,f.maxSurfaceAngle),y.setShape({points:_}),m.__hostTarget.textGuideLineConfig={anchor:new k(_[0][0],_[0][1])})}}}function ce(t,n,a){var e=t.get("borderRadius");if(e==null)return a?{cornerRadius:0}:null;Pe(e)||(e=[e,e,e,e]);var r=Math.abs(n.r||0-n.r0||0);return{cornerRadius:rt(e,function(i){return nt(i,r)})}}var zt=function(t){we(n,t);function n(a,e,r){var i=t.call(this)||this;i.z2=2;var o=new ot;return i.setTextContent(o),i.updateData(a,e,r,!0),i}return n.prototype.updateData=function(a,e,r,i){var o=this,s=a.hostModel,c=a.getItemModel(e),g=c.getModel("emphasis"),l=a.getItemLayout(e),p=X(ce(c.getModel("itemStyle"),l,!0),l);if(isNaN(p.startAngle)){o.setShape(p);return}if(i){o.setShape(p);var v=s.getShallow("animationType");s.ecModel.ssr?(Se(o,{scaleX:0,scaleY:0},s,{dataIndex:e,isFrom:!0}),o.originX=p.cx,o.originY=p.cy):v==="scale"?(o.shape.r=l.r0,Se(o,{shape:{r:l.r}},s,e)):r!=null?(o.setShape({startAngle:r,endAngle:r}),Se(o,{shape:{startAngle:l.startAngle,endAngle:l.endAngle}},s,e)):(o.shape.endAngle=l.startAngle,Ne(o,{shape:{endAngle:l.endAngle}},s,e))}else it(o),Ne(o,{shape:p},s,e);o.useStyle(a.getItemVisual(e,"style")),st(o,c);var u=(l.startAngle+l.endAngle)/2,d=s.get("selectedOffset"),h=Math.cos(u)*d,f=Math.sin(u)*d,m=c.getShallow("cursor");m&&o.attr("cursor",m),this._updateLabel(s,a,e),o.ensureState("emphasis").shape=X({r:l.r+(g.get("scale")&&g.get("scaleSize")||0)},ce(g.getModel("itemStyle"),l)),X(o.ensureState("select"),{x:h,y:f,shape:ce(c.getModel(["select","itemStyle"]),l)}),X(o.ensureState("blur"),{shape:ce(c.getModel(["blur","itemStyle"]),l)});var y=o.getTextGuideLine(),S=o.getTextContent();y&&X(y.ensureState("select"),{x:h,y:f}),X(S.ensureState("select"),{x:h,y:f}),lt(this,g.get("focus"),g.get("blurScope"),g.get("disabled"))},n.prototype._updateLabel=function(a,e,r){var i=this,o=e.getItemModel(r),s=o.getModel("labelLine"),c=e.getItemVisual(r,"style"),g=c&&c.fill,l=c&&c.opacity;ct(i,ut(o),{labelFetcher:e.hostModel,labelDataIndex:r,inheritColor:g,defaultOpacity:l,defaultText:a.getFormattedLabel(r,"normal")||e.getName(r)});var p=i.getTextContent();i.setTextConfig({position:null,rotation:null}),p.attr({z2:10});var v=a.get(["label","position"]);if(v!=="outside"&&v!=="outer")i.removeTextGuideLine();else{var u=this.getTextGuideLine();u||(u=new Ge,this.setTextGuideLine(u)),Rt(this,Ht(o),{stroke:g,opacity:dt(s.get(["lineStyle","opacity"]),l,1)})}},n}(ze),Ft=function(t){we(n,t);function n(){var a=t!==null&&t.apply(this,arguments)||this;return a.ignoreLabelLineUpdate=!0,a}return n.prototype.render=function(a,e,r,i){var o=a.getData(),s=this._data,c=this.group,g;if(!s&&o.count()>0){for(var l=o.getItemLayout(0),p=1;isNaN(l&&l.startAngle)&&p<o.count();++p)l=o.getItemLayout(p);l&&(g=l.startAngle)}if(this._emptyCircleSector&&c.remove(this._emptyCircleSector),o.count()===0&&a.get("showEmptyCircle")){var v=new ze({shape:Ue(a,r)});v.useStyle(a.getModel("emptyCircleStyle").getItemStyle()),this._emptyCircleSector=v,c.add(v)}o.diff(s).add(function(u){var d=new zt(o,u,g);o.setItemGraphicEl(u,d),c.add(d)}).update(function(u,d){var h=s.getItemGraphicEl(d);h.updateData(o,u,g),h.off("click"),c.add(h),o.setItemGraphicEl(u,h)}).remove(function(u){var d=s.getItemGraphicEl(u);gt(d,a,u)}).execute(),Vt(a),a.get("animationTypeUpdate")!=="expansion"&&(this._data=o)},n.prototype.dispose=function(){},n.prototype.containPoint=function(a,e){var r=e.getData(),i=r.getItemLayout(0);if(i){var o=a[0]-i.cx,s=a[1]-i.cy,c=Math.sqrt(o*o+s*s);return c<=i.r&&c>=i.r0}},n.type="pie",n}(pt);const jt=Ft;var Yt=function(t){we(n,t);function n(){return t!==null&&t.apply(this,arguments)||this}return n.prototype.init=function(a){t.prototype.init.apply(this,arguments),this.legendVisualProvider=new Lt(Oe(this.getData,this),Oe(this.getRawData,this)),this._defaultLabelLine(a)},n.prototype.mergeOption=function(){t.prototype.mergeOption.apply(this,arguments)},n.prototype.getInitialData=function(){var a=xt(this,{coordDimensions:["value"],encodeDefaulter:Fe(vt,this)}),e=[];return a.each(a.mapDimension("value"),function(r){e.push(r)}),this.seats=ht(e,a.hostModel.get("percentPrecision")),a},n.prototype.getDataParams=function(a){var e=t.prototype.getDataParams.call(this,a);return e.percent=this.seats[a],e.$vars.push("percent"),e},n.prototype._defaultLabelLine=function(a){ft(a,"labelLine",["show"]);var e=a.labelLine,r=a.emphasis.labelLine;e.show=e.show&&a.label.show,r.show=r.show&&a.emphasis.label.show},n.type="series.pie",n.defaultOption={z:2,legendHoverLink:!0,colorBy:"data",center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1,borderJoin:"round"},showEmptyCircle:!0,emptyCircleStyle:{color:"lightgray",opacity:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},n}(mt);const Xt=Yt;function Ut(t){return{seriesType:t,reset:function(n,a){var e=n.getData();e.filterSelf(function(r){var i=e.mapDimension("value"),o=e.get(i,r);return!(Ve(o)&&!isNaN(o)&&o<0)})}}}function qt(t){t.registerChartView(jt),t.registerSeriesModel(Xt),bt("pie",t.registerAction),t.registerLayout(Fe(Bt,"pie")),t.registerProcessor(Mt("pie")),t.registerProcessor(Ut("pie"))}const Zt=(t,n)=>{const{tooltip:a=!0}=n;let e=At("item");return je(a)?a?e:{}:a},Jt=(t,n)=>{const{legend:a=!0}=n;return je(a)?wt():a},Kt=(t,n)=>{const{rows:a,columns:e}=t,{eRadius:r="60%",wRadius:i="0%",xOffset:o="50%",yOffset:s="50%",seriesName:c="",hasBorder:g=!0,borderRadius:l=6,labelFontSize:p,roseType:v=void 0,labelShow:u=!0}=n;if(!yt(a)){console.warn("rows must be a object");return}const d=[];return e.forEach(f=>{const m=a;d.push({value:m[f.key],name:f.title+""})}),[{name:c,type:"pie",radius:[i,r],center:[o,s],data:d.sort(function(f,m){return f.value-m.value}),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},label:{show:!0,fontWeight:"bold"}},label:{position:"outside",fontSize:p,show:u,distanceToLabelLine:5,formatter:"{b}\uFF1A{d}%"},itemStyle:g?{borderRadius:l,borderColor:"#f0f0f0",borderWidth:2}:{},roseType:v,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(){return Math.random()*120}}]},Ee=(t,n,a)=>{const e=Zt(t,n),r=Jt(t,n),i=Kt(t,n),{title:o={}}=n;return{aria:{decal:{show:a}},title:o,tooltip:e,legend:r,series:i}};St([qt]);const z=Tt({name:"HPie",data(){return{Options:{}}},props:{..._t,dataSource:{type:Object,default:()=>({})},settings:{type:Object,default:()=>({})}},render(){const{dataSource:t,settings:n,...a}=this.$props,e=this.Options;return Dt(Pt,{...a,options:e})},mounted(){const{dataSource:t,settings:n,ariaShow:a}=this.$props;this.Options=Ee(t,n,a)},watch:{$props(){const{dataSource:t,settings:n,ariaShow:a}=this.$props;this.Options=Ee(t,n,a)}}});z.install=t=>{t.component(z.name,z)};const ge=()=>It.mock({columns:[{title:"\u4F59\u676D\u4EBA\u6570",key:"number1"},{title:"\u897F\u6E56\u4EBA\u6570",key:"number2"},{title:"\u4E0B\u57CE\u4EBA\u6570",key:"number3"},{title:"\u8427\u5C71\u4EBA\u6570",key:"number4"},{title:"\u7559\u4E0B\u4EBA\u6570",key:"number5"}],rows:{"number1|100-1000":800,"number2|1000-1500":1393,"number3|1000-2000":1200,"number4|500-2000":500,"number5|500-2000":1800}}),Qt=`
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
`,Wt={name:"BaseLine",components:{HPie:z},data(){return{dataSource:ge(),codePre:Qt}}},ea={class:"chart-content"},ta=te("h3",{class:"h3"},"\u57FA\u7840\u997C\u72B6\u56FE",-1);function aa(t,n,a,e,r,i){const o=M("HPie"),s=M("Prism"),c=M("ShowMore");return q(),Z("div",ea,[ta,T(o,{dataSource:r.dataSource},null,8,["dataSource"]),T(c,null,{default:de(()=>[T(s,{languages:"html",isLineNumber:"",code:r.codePre},null,8,["code"])]),_:1})])}const ra=U(Wt,[["render",aa]]),na=`
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
`,oa={name:"BaseLine",components:{HPie:z},data(){return{settings:{wRadius:"10%",eRadius:"30%"},dataSource:ge(),codePre:na}}},ia={class:"chart-content"},sa=te("h3",{class:"h3"},"\u534A\u5F84\u8C03\u6574",-1);function la(t,n,a,e,r,i){const o=M("HPie"),s=M("Prism"),c=M("ShowMore");return q(),Z("div",ia,[sa,T(o,{dataSource:r.dataSource,settings:r.settings},null,8,["dataSource","settings"]),T(c,null,{default:de(()=>[T(s,{languages:"html",isLineNumber:"",code:r.codePre},null,8,["code"])]),_:1})])}const ca=U(oa,[["render",la]]),ua=`
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
`,da={name:"BaseLine",components:{HPie:z},data(){return{settings:{wRadius:"30%"},dataSource:ge(),codePre:ua}}},ga={class:"chart-content"},pa=te("h3",{class:"h3"},"\u5706\u73AF\u997C\u72B6\u56FE",-1);function va(t,n,a,e,r,i){const o=M("HPie"),s=M("Prism"),c=M("ShowMore");return q(),Z("div",ga,[pa,T(o,{dataSource:r.dataSource,settings:r.settings},null,8,["dataSource","settings"]),T(c,null,{default:de(()=>[T(s,{languages:"html",isLineNumber:"",code:r.codePre},null,8,["code"])]),_:1})])}const ha=U(da,[["render",va]]),fa=`
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
`,ma={name:"BaseLine",components:{HPie:z},data(){return{settings:{wRadius:"10%",roseType:"radius"},dataSource:ge(),codePre:fa}}},ba={class:"chart-content"},ya=te("h3",{class:"h3"},"\u5357\u4E01\u683C\u5C14\u73AB\u7470",-1);function Sa(t,n,a,e,r,i){const o=M("HPie"),s=M("Prism"),c=M("ShowMore");return q(),Z("div",ba,[ya,T(o,{dataSource:r.dataSource,settings:r.settings},null,8,["dataSource","settings"]),T(c,null,{default:de(()=>[T(s,{languages:"html",isLineNumber:"",code:r.codePre},null,8,["code"])]),_:1})])}const _a=U(ma,[["render",Sa]]);const Pa={data(){return{columns:[{title:"\u914D\u7F6E\u5C5E\u6027",key:"attribute",align:"center"},{title:"\u7C7B\u578B",key:"type",align:"center"},{title:"\u63CF\u8FF0",key:"describe",align:"center"},{title:"\u9ED8\u8BA4\u503C",key:"default",align:"center"}],tableData:[{attribute:"title",type:"EChartTitleOption",describe:"\u56FE\u8868\u6807\u9898",default:"{}"},{attribute:"tooltip",type:"EChartOption.Tooltip | boolean",describe:"tooltip\u5DE5\u5177",default:"true"},{attribute:"legend",type:"EChartOption.Legend | boolean",describe:"legend\u5DE5\u5177",default:"true"},{attribute:"eRadius",type:"string",describe:"\u5916\u5706\u534A\u5F84\u5927\u5C0F",default:"60%"},{attribute:"wRadius",type:"string",describe:"\u5185\u5706\u534A\u5F84\u5927\u5C0F",default:"0%"},{attribute:"xOffset",type:"string",describe:"x\u8F74\u504F\u79FB\u91CF",default:"50%"},{attribute:"yOffset",type:"string",describe:"y\u8F74\u504F\u79FB\u91CF",default:"50%"},{attribute:"seriesName",type:"string",describe:"pie \u540D\u79F0",default:""},{attribute:"hasBorder",type:"boolean",describe:"\u662F\u5426\u5B58\u5728\u8FB9\u6846",default:"true"},{attribute:"borderRadius",type:"number",describe:"\u8FB9\u6846\u5F27\u5EA6",default:"6"},{attribute:"labelShow",type:"boolean",describe:"label\u662F\u5426\u663E\u793A",default:"true"},{attribute:"labelFontSize",type:"number",describe:"label\u5B57\u4F53\u5927\u5C0F",default:""},{attribute:"roseType",type:"radius | area",describe:"\u5357\u4E01\u683C\u73AB\u7470\u56FE",default:""}]}}},wa=t=>(Ct("data-v-55a15260"),t=t(),kt(),t),Aa={class:"chart-content"},La=wa(()=>te("h3",{class:"h3"},"settings \u914D\u7F6E\u9879",-1));function xa(t,n,a,e,r,i){const o=M("Table");return q(),Z("div",Aa,[La,T(o,{class:"table",columns:r.columns,data:r.tableData},null,8,["columns","data"])])}const Ma=U(Pa,[["render",xa],["__scopeId","data-v-55a15260"]]),Ta={name:"Pie",components:{BasePie:ra,BasePie1:ca,RadiusPie:ha,RoseTypePie:_a,DocsTable:Ma}},Da={class:"home"};function Ca(t,n,a,e,r,i){const o=M("BasePie"),s=M("BasePie1"),c=M("RadiusPie"),g=M("RoseTypePie"),l=M("DocsTable");return q(),Z("div",Da,[T(o),T(s),T(c),T(g),T(l)])}const Ra=U(Ta,[["render",Ca]]);export{Ra as default};
