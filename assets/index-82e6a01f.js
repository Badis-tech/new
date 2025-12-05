var lp=Object.defineProperty;var cp=(o,e,t)=>e in o?lp(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var or=(o,e,t)=>(cp(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="151",ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},up=0,Sc=1,hp=2,Uh=1,fp=2,Pr=3,Si=0,Xt=1,Jn=2,vi=0,Or=1,bc=2,wc=3,Tc=4,dp=5,Cr=100,pp=101,mp=102,Ec=103,Ac=104,gp=200,_p=201,vp=202,xp=203,Nh=204,Fh=205,yp=206,Mp=207,Sp=208,bp=209,wp=210,Tp=0,Ep=1,Ap=2,il=3,Cp=4,Pp=5,Lp=6,Rp=7,Go=0,Dp=1,Ip=2,$n=0,Op=1,Up=2,Np=3,zh=4,Fp=5,kh=300,Gr=301,Hr=302,Ro=303,rl=304,Ho=306,Es=1e3,nn=1001,sl=1002,Ct=1003,Cc=1004,oa=1005,pn=1006,zp=1007,As=1008,Zi=1009,kp=1010,Bp=1011,Bh=1012,Vp=1013,Vi=1014,fi=1015,Cs=1016,Gp=1017,Hp=1018,Ur=1020,Wp=1021,mn=1023,Xp=1024,qp=1025,Hi=1026,Wr=1027,jp=1028,Yp=1029,Zp=1030,Kp=1031,Jp=1033,aa=33776,la=33777,ca=33778,ua=33779,Pc=35840,Lc=35841,Rc=35842,Dc=35843,$p=36196,Ic=37492,Oc=37496,Uc=37808,Nc=37809,Fc=37810,zc=37811,kc=37812,Bc=37813,Vc=37814,Gc=37815,Hc=37816,Wc=37817,Xc=37818,qc=37819,jc=37820,Yc=37821,ha=36492,Qp=36283,Zc=36284,Kc=36285,Jc=36286,Do=2300,Io=2301,fa=2302,$c=2400,Qc=2401,eu=2402,em=2500,Ki=3e3,Je=3001,tm=3200,nm=3201,Wo=0,im=1,In="srgb",Ps="srgb-linear",Vh="display-p3",da=7680,rm=519,tu=35044,nu="300 es",ol=1035;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iu=1234567;const _s=Math.PI/180,Xr=180/Math.PI;function ii(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[o&255]+It[o>>8&255]+It[o>>16&255]+It[o>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Tt(o,e,t){return Math.max(e,Math.min(t,o))}function Dl(o,e){return(o%e+e)%e}function sm(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function om(o,e,t){return o!==e?(t-o)/(e-o):0}function vs(o,e,t){return(1-t)*o+t*e}function am(o,e,t,n){return vs(o,e,1-Math.exp(-t*n))}function lm(o,e=1){return e-Math.abs(Dl(o,e*2)-e)}function cm(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function um(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function hm(o,e){return o+Math.floor(Math.random()*(e-o+1))}function fm(o,e){return o+Math.random()*(e-o)}function dm(o){return o*(.5-Math.random())}function pm(o){o!==void 0&&(iu=o);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mm(o){return o*_s}function gm(o){return o*Xr}function al(o){return(o&o-1)===0&&o!==0}function Gh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Hh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function _m(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),_=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*h,l*f,a*c);break;case"YZY":o.set(l*f,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*f,a*u,a*c);break;case"XZX":o.set(a*u,l*_,l*d,a*c);break;case"YXY":o.set(l*d,a*u,l*_,a*c);break;case"ZYZ":o.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ds(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ht(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Cn={DEG2RAD:_s,RAD2DEG:Xr,generateUUID:ii,clamp:Tt,euclideanModulo:Dl,mapLinear:sm,inverseLerp:om,lerp:vs,damp:am,pingpong:lm,smoothstep:cm,smootherstep:um,randInt:hm,randFloat:fm,randFloatSpread:dm,seededRandom:pm,degToRad:mm,radToDeg:gm,isPowerOfTwo:al,ceilPowerOfTwo:Gh,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:_m,normalize:Ht,denormalize:ds};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],x=i[4],v=i[7],M=i[2],w=i[5],A=i[8];return r[0]=s*g+a*y+l*M,r[3]=s*m+a*x+l*w,r[6]=s*p+a*v+l*A,r[1]=c*g+u*y+h*M,r[4]=c*m+u*x+h*w,r[7]=c*p+u*v+h*A,r[2]=f*g+d*y+_*M,r[5]=f*m+d*x+_*w,r[8]=f*p+d*v+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,f=a*l-u*r,d=c*r-s*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*s)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pa.makeScale(e,t)),this}rotate(e){return this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new Xe;function Wh(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ls(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Nr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ma(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const vm=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),xm=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ym(o){return o.convertSRGBToLinear().applyMatrix3(xm)}function Mm(o){return o.applyMatrix3(vm).convertLinearToSRGB()}const Sm={[Ps]:o=>o,[In]:o=>o.convertSRGBToLinear(),[Vh]:ym},bm={[Ps]:o=>o,[In]:o=>o.convertLinearToSRGB(),[Vh]:Mm},$t={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Ps},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=Sm[e],i=bm[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let cr;class Xh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=Ls("canvas")),cr.width=e.width,cr.height=e.height;const n=cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Nr(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nr(t[n]/255)*255):t[n]=Nr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class qh{constructor(e=null){this.isSource=!0,this.uuid=ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(ga(i[s].image)):r.push(ga(i[s]))}else r=ga(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ga(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Xh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wm=0;class Pt extends Ti{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=nn,i=nn,r=pn,s=As,a=mn,l=Zi,c=Pt.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=ii(),this.name="",this.source=new qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=kh;Pt.DEFAULT_ANISOTROPY=1;class me{constructor(e=0,t=0,n=0,i=1){me.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(u+f)/4,A=(h+g)/4,E=(_+m)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=A/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=E/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=E/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ji extends Ti{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new me(0,0,e,t),this.scissorTest=!1,this.viewport=new me(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jh extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tm extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],d=r[s+1],_=r[s+2],g=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const M=Math.sqrt(x),w=Math.atan2(M,p*y);m=Math.sin(m*w)/M,a=Math.sin(a*w)/M}const v=a*y;if(l=l*m+f*v,c=c*m+d*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],d=r[s+2],_=r[s+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-a*i;return this.x=c*l+f*-r+u*-a-h*-s,this.y=u*l+f*-s+h*-r-c*-a,this.z=h*l+f*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new P,ru=new _n;class es{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,a=r.count;s<a;s++)Hn.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),$s.subVectors(this.max,os),hr.subVectors(e.a,os),fr.subVectors(e.b,os),dr.subVectors(e.c,os),si.subVectors(fr,hr),oi.subVectors(dr,fr),Ri.subVectors(hr,dr);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Ri.z,Ri.y,si.z,0,-si.x,oi.z,0,-oi.x,Ri.z,0,-Ri.x,-si.y,si.x,0,-oi.y,oi.x,0,-Ri.y,Ri.x,0];return!va(t,hr,fr,dr,$s)||(t=[1,0,0,0,1,0,0,0,1],!va(t,hr,fr,dr,$s))?!1:(Qs.crossVectors(si,oi),t=[Qs.x,Qs.y,Qs.z],va(t,hr,fr,dr,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new P,new P,new P,new P,new P,new P,new P,new P],Hn=new P,ur=new es,hr=new P,fr=new P,dr=new P,si=new P,oi=new P,Ri=new P,os=new P,$s=new P,Qs=new P,Di=new P;function va(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){Di.fromArray(o,r);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Em=new es,as=new P,xa=new P;class Ws{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Em.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(xa)),this.expandByPoint(as.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new P,ya=new P,eo=new P,ai=new P,Ma=new P,to=new P,Sa=new P;class Yh{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ya.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ya);const r=e.distanceTo(t)*.5,s=-this.direction.dot(eo),a=ai.dot(this.direction),l=-ai.dot(eo),c=ai.lengthSq(),u=Math.abs(1-s*s);let h,f,d,_;if(u>0)if(h=s*l-a,f=s*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+s*f+2*a)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-s*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ya).addScaledVector(eo,f),d}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,r){Ma.subVectors(t,e),to.subVectors(n,e),Sa.crossVectors(Ma,to);let s=this.direction.dot(Sa),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(to.crossVectors(ai,to));if(l<0)return null;const c=a*this.direction.dot(Ma.cross(ai));if(c<0||l+c>s)return null;const u=-a*ai.dot(Sa);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),s=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,d=s*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-s*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=s*u,t[9]=g-f*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=s*l,d=s*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=s*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Am,e,Cm)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),li.crossVectors(n,Qt),li.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),li.crossVectors(n,Qt)),li.normalize(),no.crossVectors(Qt,li),i[0]=li.x,i[4]=no.x,i[8]=Qt.x,i[1]=li.y,i[5]=no.y,i[9]=Qt.y,i[2]=li.z,i[6]=no.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],M=n[15],w=i[0],A=i[4],E=i[8],S=i[12],b=i[1],N=i[5],U=i[9],D=i[13],O=i[2],z=i[6],G=i[10],K=i[14],X=i[3],ie=i[7],Q=i[11],xe=i[15];return r[0]=s*w+a*b+l*O+c*X,r[4]=s*A+a*N+l*z+c*ie,r[8]=s*E+a*U+l*G+c*Q,r[12]=s*S+a*D+l*K+c*xe,r[1]=u*w+h*b+f*O+d*X,r[5]=u*A+h*N+f*z+d*ie,r[9]=u*E+h*U+f*G+d*Q,r[13]=u*S+h*D+f*K+d*xe,r[2]=_*w+g*b+m*O+p*X,r[6]=_*A+g*N+m*z+p*ie,r[10]=_*E+g*U+m*G+p*Q,r[14]=_*S+g*D+m*K+p*xe,r[3]=y*w+x*b+v*O+M*X,r[7]=y*A+x*N+v*z+M*ie,r[11]=y*E+x*U+v*G+M*Q,r[15]=y*S+x*D+v*K+M*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*s*f-i*s*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*s*h+n*s*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,x=_*f*c-u*m*c-_*l*d+s*m*d+u*l*p-s*f*p,v=u*g*c-_*h*c+_*a*d-s*g*d-u*a*p+s*h*p,M=_*h*l-u*g*l-_*a*f+s*g*f+u*a*m-s*h*m,w=t*y+n*x+i*v+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=x*A,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(_*l*r-s*m*r-_*i*c+t*m*c+s*i*p-t*l*p)*A,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*d+t*l*d)*A,e[8]=v*A,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*p-t*h*p)*A,e[10]=(s*g*r-_*a*r+_*n*c-t*g*c-s*n*p+t*a*p)*A,e[11]=(u*a*r-s*h*r-u*n*c+t*h*c+s*n*d-t*a*d)*A,e[12]=M*A,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*A,e[14]=(_*a*i-s*g*i-_*n*l+t*g*l+s*n*m-t*a*m)*A,e[15]=(s*h*i-u*a*i+u*n*l-t*h*l-s*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,h=a+a,f=r*c,d=r*u,_=r*h,g=s*u,m=s*h,p=a*h,y=l*c,x=l*u,v=l*h,M=n.x,w=n.y,A=n.z;return i[0]=(1-(g+p))*M,i[1]=(d+v)*M,i[2]=(_-x)*M,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(_+x)*A,i[9]=(m-y)*A,i[10]=(1-(f+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=pr.set(i[0],i[1],i[2]).length();const s=pr.set(i[4],i[5],i[6]).length(),a=pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const c=1/r,u=1/s,h=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),d=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,d=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pr=new P,bn=new Le,Am=new P(0,0,0),Cm=new P(1,1,1),li=new P,no=new P,Qt=new P,su=new Le,ou=new _n;class vn{constructor(e=0,t=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pm=0;const au=new P,mr=new _n,Xn=new Le,io=new P,ls=new P,Lm=new P,Rm=new _n,lu=new P(1,0,0),cu=new P(0,1,0),uu=new P(0,0,1),Dm={type:"added"},hu={type:"removed"};class ct extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new P,t=new vn,n=new _n,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Xe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(uu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(ls,io,this.up):Xn.lookAt(io,ls,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),mr.setFromRotationMatrix(Xn),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(hu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),_=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new P(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new P,qn=new P,ba=new P,jn=new P,gr=new P,_r=new P,fu=new P,wa=new P,Ta=new P,Ea=new P;let ro=!1;class An{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wn.subVectors(i,t),qn.subVectors(n,t),ba.subVectors(e,t);const s=wn.dot(wn),a=wn.dot(qn),l=wn.dot(ba),c=qn.dot(qn),u=qn.dot(ba),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,_=(s*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,n,i,r,s,a,l){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),this.getInterpolation(e,t,n,i,r,s,a,l)}static getInterpolation(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,jn),l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(s,jn.y),l.addScaledVector(a,jn.z),l}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),qn.subVectors(e,t),wn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;gr.subVectors(i,n),_r.subVectors(r,n),wa.subVectors(e,n);const l=gr.dot(wa),c=_r.dot(wa);if(l<=0&&c<=0)return t.copy(n);Ta.subVectors(e,i);const u=gr.dot(Ta),h=_r.dot(Ta);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(gr,s);Ea.subVectors(e,r);const d=gr.dot(Ea),_=_r.dot(Ea);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(_r,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return fu.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(fu,a);const p=1/(m+g+f);return s=g*p,a=f*p,t.copy(n).addScaledVector(gr,s).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Im=0;class Ei extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Or,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Nh,this.blendDst=Fh,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},so={h:0,s:0,l:0};function Aa(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$t.workingColorSpace){return this.r=e,this.g=t,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$t.workingColorSpace){if(e=Dl(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Aa(s,r,e+1/3),this.g=Aa(s,r,e),this.b=Aa(s,r,e-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(e,t=In){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,$t.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,$t.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=Kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return $t.fromWorkingColorSpace(Ot.copy(this),e),Tt(Ot.r*255,0,255)<<16^Tt(Ot.g*255,0,255)<<8^Tt(Ot.b*255,0,255)<<0}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=In){$t.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tn),Tn.h+=e,Tn.s+=t,Tn.l+=n,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(so);const n=vs(Tn.h,so.h,t),i=vs(Tn.s,so.s,t),r=vs(Tn.l,so.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new De;De.NAMES=Kh;class Jh extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new P,oo=new ae;class zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Il extends zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $h extends zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Om=0;const hn=new Le,Ca=new ct,vr=new P,en=new es,cs=new es,wt=new P;class Lt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?$h:Il)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(en.min,cs.min),en.expandByPoint(wt),wt.addVectors(en.max,cs.max),en.expandByPoint(wt)):(en.expandByPoint(cs.min),en.expandByPoint(cs.max))}en.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),wt.add(vr)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new P,u[b]=new P;const h=new P,f=new P,d=new P,_=new ae,g=new ae,m=new ae,p=new P,y=new P;function x(b,N,U){h.fromArray(i,b*3),f.fromArray(i,N*3),d.fromArray(i,U*3),_.fromArray(s,b*2),g.fromArray(s,N*2),m.fromArray(s,U*2),f.sub(h),d.sub(h),g.sub(_),m.sub(_);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(D),y.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(D),c[b].add(p),c[N].add(p),c[U].add(p),u[b].add(y),u[N].add(y),u[U].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let b=0,N=v.length;b<N;++b){const U=v[b],D=U.start,O=U.count;for(let z=D,G=D+O;z<G;z+=3)x(n[z+0],n[z+1],n[z+2])}const M=new P,w=new P,A=new P,E=new P;function S(b){A.fromArray(r,b*3),E.copy(A);const N=c[b];M.copy(N),M.sub(A.multiplyScalar(A.dot(N))).normalize(),w.crossVectors(E,N);const D=w.dot(u[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=D}for(let b=0,N=v.length;b<N;++b){const U=v[b],D=U.start,O=U.count;for(let z=D,G=D+O;z<G;z+=3)S(n[z+0]),S(n[z+1]),S(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,s=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new zn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const du=new Le,Dn=new Yh,ao=new Ws,pu=new P,xr=new P,yr=new P,Mr=new P,Pa=new P,lo=new P,co=new ae,uo=new ae,ho=new ae,mu=new P,gu=new P,_u=new P,fo=new P,po=new P;class lt extends ct{constructor(e=new Lt,t=new Jh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Pa.fromBufferAttribute(h,e),s?lo.addScaledVector(Pa,u):lo.addScaledVector(Pa.sub(t),u))}t.add(lo)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),ao.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(ao,pu)===null||Dn.origin.distanceToSquared(pu)>(e.far-e.near)**2))||(du.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(du),n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,f=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=i[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,M=x;v<M;v+=3){const w=a.getX(v),A=a.getX(v+1),E=a.getX(v+2);s=mo(this,p,e,Dn,c,u,h,w,A,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=mo(this,i,e,Dn,c,u,h,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=i[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,M=x;v<M;v+=3){const w=v,A=v+1,E=v+2;s=mo(this,p,e,Dn,c,u,h,w,A,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const y=m,x=m+1,v=m+2;s=mo(this,i,e,Dn,c,u,h,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Um(o,e,t,n,i,r,s,a){let l;if(e.side===Xt?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side===Si,a),l===null)return null;po.copy(a),po.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:o}}function mo(o,e,t,n,i,r,s,a,l,c){o.getVertexPosition(a,xr),o.getVertexPosition(l,yr),o.getVertexPosition(c,Mr);const u=Um(o,e,t,n,xr,yr,Mr,fo);if(u){i&&(co.fromBufferAttribute(i,a),uo.fromBufferAttribute(i,l),ho.fromBufferAttribute(i,c),u.uv=An.getInterpolation(fo,xr,yr,Mr,co,uo,ho,new ae)),r&&(co.fromBufferAttribute(r,a),uo.fromBufferAttribute(r,l),ho.fromBufferAttribute(r,c),u.uv2=An.getInterpolation(fo,xr,yr,Mr,co,uo,ho,new ae)),s&&(mu.fromBufferAttribute(s,a),gu.fromBufferAttribute(s,l),_u.fromBufferAttribute(s,c),u.normal=An.getInterpolation(fo,xr,yr,Mr,mu,gu,_u,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};An.getNormal(xr,yr,Mr,h.normal),u.face=h}return u}class nr extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,i,s,2),_("x","z","y",1,-1,e,n,-t,i,s,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(h,2));function _(g,m,p,y,x,v,M,w,A,E,S){const b=v/A,N=M/E,U=v/2,D=M/2,O=w/2,z=A+1,G=E+1;let K=0,X=0;const ie=new P;for(let Q=0;Q<G;Q++){const xe=Q*N-D;for(let ne=0;ne<z;ne++){const W=ne*b-U;ie[g]=W*y,ie[m]=xe*x,ie[p]=O,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[p]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(ne/A),h.push(1-Q/E),K+=1}}for(let Q=0;Q<E;Q++)for(let xe=0;xe<A;xe++){const ne=f+xe+z*Q,W=f+xe+z*(Q+1),j=f+(xe+1)+z*(Q+1),ce=f+(xe+1)+z*Q;l.push(ne,W,ce),l.push(W,j,ce),X+=6}a.addGroup(d,X,S),d+=X,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(o){const e={};for(let t=0;t<o.length;t++){const n=qr(o[t]);for(const i in n)e[i]=n[i]}return e}function Nm(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Qh(o){return o.getRenderTarget()===null&&o.outputEncoding===Je?In:Ps}const Fm={clone:qr,merge:kt};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=Nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ef extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends ef{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sr=-90,br=1;class Bm extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Bt(Sr,br,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Bt(Sr,br,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Bt(Sr,br,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Bt(Sr,br,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Bt(Sr,br,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Bt(Sr,br,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=$n,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class tf extends Pt{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vm extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nr(5,5,5),r=new $i({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:vi});r.uniforms.tEquirect.value=t;const s=new lt(i,r),a=t.minFilter;return t.minFilter===As&&(t.minFilter=pn),new Bm(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const La=new P,Gm=new P,Hm=new Xe;class Fi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=La.subVectors(n,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hm.getNormalMatrix(e),i=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Ws,go=new P;class Ol{constructor(e=new Fi,t=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],_=n[10],g=n[11],m=n[12],p=n[13],y=n[14],x=n[15];return t[0].setComponents(a-i,h-l,g-f,x-m).normalize(),t[1].setComponents(a+i,h+l,g+f,x+m).normalize(),t[2].setComponents(a+r,h+c,g+d,x+p).normalize(),t[3].setComponents(a-r,h-c,g-d,x-p).normalize(),t[4].setComponents(a-s,h-u,g-_,x-y).normalize(),t[5].setComponents(a+s,h+u,g+_,x+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(go.x=i.normal.x>0?e.max.x:e.min.x,go.y=i.normal.y>0?e.max.y:e.min.y,go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nf(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Wm(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=o.createBuffer();o.bindBuffer(u,d),o.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;o.bindBuffer(h,c),d.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):o.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:l}}class Xs extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*f-s;for(let x=0;x<c;x++){const v=x*h-r;_.push(v,-y,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,v=y+c*(p+1),M=y+1+c*(p+1),w=y+1+c*p;d.push(x,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm="vec3 transformed = vec3( position );",$m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Og=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,__=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,U_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,N_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,v0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:jm,alphatest_pars_fragment:Ym,aomap_fragment:Zm,aomap_pars_fragment:Km,begin_vertex:Jm,beginnormal_vertex:$m,bsdfs:Qm,iridescence_fragment:eg,bumpmap_pars_fragment:tg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:rg,clipping_planes_vertex:sg,color_fragment:og,color_pars_fragment:ag,color_pars_vertex:lg,color_vertex:cg,common:ug,cube_uv_reflection_fragment:hg,defaultnormal_vertex:fg,displacementmap_pars_vertex:dg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,encodings_fragment:_g,encodings_pars_fragment:vg,envmap_fragment:xg,envmap_common_pars_fragment:yg,envmap_pars_fragment:Mg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:Og,envmap_vertex:bg,fog_vertex:wg,fog_pars_vertex:Tg,fog_fragment:Eg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Cg,lightmap_fragment:Pg,lightmap_pars_fragment:Lg,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ig,lights_toon_fragment:Ug,lights_toon_pars_fragment:Ng,lights_phong_fragment:Fg,lights_phong_pars_fragment:zg,lights_physical_fragment:kg,lights_physical_pars_fragment:Bg,lights_fragment_begin:Vg,lights_fragment_maps:Gg,lights_fragment_end:Hg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:jg,map_fragment:Yg,map_pars_fragment:Zg,map_particle_fragment:Kg,map_particle_pars_fragment:Jg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:Qg,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:d_,output_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:__,dithering_fragment:v_,dithering_pars_fragment:x_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:b_,shadowmap_vertex:w_,shadowmask_pars_fragment:T_,skinbase_vertex:E_,skinning_pars_vertex:A_,skinning_vertex:C_,skinnormal_vertex:P_,specularmap_fragment:L_,specularmap_pars_fragment:R_,tonemapping_fragment:D_,tonemapping_pars_fragment:I_,transmission_fragment:O_,transmission_pars_fragment:U_,uv_pars_fragment:N_,uv_pars_vertex:F_,uv_vertex:z_,worldpos_vertex:k_,background_vert:B_,background_frag:V_,backgroundCube_vert:G_,backgroundCube_frag:H_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:j_,distanceRGBA_vert:Y_,distanceRGBA_frag:Z_,equirect_vert:K_,equirect_frag:J_,linedashed_vert:$_,linedashed_frag:Q_,meshbasic_vert:e0,meshbasic_frag:t0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:r0,meshmatcap_frag:s0,meshnormal_vert:o0,meshnormal_frag:a0,meshphong_vert:l0,meshphong_frag:c0,meshphysical_vert:u0,meshphysical_frag:h0,meshtoon_vert:f0,meshtoon_frag:d0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:_0,sprite_vert:v0,sprite_frag:x0},fe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaTest:{value:0}}},Un={basic:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:kt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:kt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:kt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:kt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:kt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:kt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:kt([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:kt([fe.lights,fe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Un.physical={uniforms:kt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const _o={r:0,b:0,g:0};function y0(o,e,t,n,i,r,s){const a=new De(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x));const v=o.xr,M=v.getSession&&v.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?g(a,l):x&&x.isColor&&(g(x,1),y=!0),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ho)?(u===void 0&&(u=new lt(new nr(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:qr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.encoding!==Je,(h!==x||f!==x.version||d!==o.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new Xs(2,2),new $i({name:"BackgroundMaterial",uniforms:qr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(_o,Qh(o)),n.buffers.color.setClear(_o.r,_o.g,_o.b,p,s)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function M0(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(O,z,G,K,X){let ie=!1;if(s){const Q=g(K,G,z);c!==Q&&(c=Q,d(c.object)),ie=p(O,K,G,X),ie&&y(O,K,G,X)}else{const Q=z.wireframe===!0;(c.geometry!==K.id||c.program!==G.id||c.wireframe!==Q)&&(c.geometry=K.id,c.program=G.id,c.wireframe=Q,ie=!0)}X!==null&&t.update(X,34963),(ie||u)&&(u=!1,E(O,z,G,K),X!==null&&o.bindBuffer(34963,t.get(X).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?o.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?o.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,z,G){const K=G.wireframe===!0;let X=a[O.id];X===void 0&&(X={},a[O.id]=X);let ie=X[z.id];ie===void 0&&(ie={},X[z.id]=ie);let Q=ie[K];return Q===void 0&&(Q=m(f()),ie[K]=Q),Q}function m(O){const z=[],G=[],K=[];for(let X=0;X<i;X++)z[X]=0,G[X]=0,K[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:K,object:O,attributes:{},index:null}}function p(O,z,G,K){const X=c.attributes,ie=z.attributes;let Q=0;const xe=G.getAttributes();for(const ne in xe)if(xe[ne].location>=0){const j=X[ne];let ce=ie[ne];if(ce===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;Q++}return c.attributesNum!==Q||c.index!==K}function y(O,z,G,K){const X={},ie=z.attributes;let Q=0;const xe=G.getAttributes();for(const ne in xe)if(xe[ne].location>=0){let j=ie[ne];j===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),X[ne]=ce,Q++}c.attributes=X,c.attributesNum=Q,c.index=K}function x(){const O=c.newAttributes;for(let z=0,G=O.length;z<G;z++)O[z]=0}function v(O){M(O,0)}function M(O,z){const G=c.newAttributes,K=c.enabledAttributes,X=c.attributeDivisors;G[O]=1,K[O]===0&&(o.enableVertexAttribArray(O),K[O]=1),X[O]!==z&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),X[O]=z)}function w(){const O=c.newAttributes,z=c.enabledAttributes;for(let G=0,K=z.length;G<K;G++)z[G]!==O[G]&&(o.disableVertexAttribArray(G),z[G]=0)}function A(O,z,G,K,X,ie){n.isWebGL2===!0&&(G===5124||G===5125)?o.vertexAttribIPointer(O,z,G,X,ie):o.vertexAttribPointer(O,z,G,K,X,ie)}function E(O,z,G,K){if(n.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=K.attributes,ie=G.getAttributes(),Q=z.defaultAttributeValues;for(const xe in ie){const ne=ie[xe];if(ne.location>=0){let W=X[xe];if(W===void 0&&(xe==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),xe==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),W!==void 0){const j=W.normalized,ce=W.itemSize,pe=t.get(W);if(pe===void 0)continue;const B=pe.buffer,Ee=pe.type,Re=pe.bytesPerElement;if(W.isInterleavedBufferAttribute){const le=W.data,Me=le.stride,te=W.offset;if(le.isInstancedInterleavedBuffer){for(let Z=0;Z<ne.locationSize;Z++)M(ne.location+Z,le.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Z=0;Z<ne.locationSize;Z++)v(ne.location+Z);o.bindBuffer(34962,B);for(let Z=0;Z<ne.locationSize;Z++)A(ne.location+Z,ce/ne.locationSize,Ee,j,Me*Re,(te+ce/ne.locationSize*Z)*Re)}else{if(W.isInstancedBufferAttribute){for(let le=0;le<ne.locationSize;le++)M(ne.location+le,W.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let le=0;le<ne.locationSize;le++)v(ne.location+le);o.bindBuffer(34962,B);for(let le=0;le<ne.locationSize;le++)A(ne.location+le,ce/ne.locationSize,Ee,j,ce*Re,ce/ne.locationSize*le*Re)}}else if(Q!==void 0){const j=Q[xe];if(j!==void 0)switch(j.length){case 2:o.vertexAttrib2fv(ne.location,j);break;case 3:o.vertexAttrib3fv(ne.location,j);break;case 4:o.vertexAttrib4fv(ne.location,j);break;default:o.vertexAttrib1fv(ne.location,j)}}}}w()}function S(){U();for(const O in a){const z=a[O];for(const G in z){const K=z[G];for(const X in K)_(K[X].object),delete K[X];delete z[G]}delete a[O]}}function b(O){if(a[O.id]===void 0)return;const z=a[O.id];for(const G in z){const K=z[G];for(const X in K)_(K[X].object),delete K[X];delete z[G]}delete a[O.id]}function N(O){for(const z in a){const G=a[z];if(G[O.id]===void 0)continue;const K=G[O.id];for(const X in K)_(K[X].object),delete K[X];delete G[O.id]}}function U(){D(),u=!0,c!==l&&(c=l,d(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function S0(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=o,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=l}function b0(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),d=o.getParameter(3379),_=o.getParameter(34076),g=o.getParameter(34921),m=o.getParameter(36347),p=o.getParameter(36348),y=o.getParameter(36349),x=f>0,v=s||e.has("OES_texture_float"),M=x&&v,w=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:w}}function w0(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Fi,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=o.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=u(_,f,x,d);for(let M=0;M!==x;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==g;++x,v+=4)s.copy(h[x]).applyMatrix4(y,a),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function T0(o){let e=new WeakMap;function t(s,a){return a===Ro?s.mapping=Gr:a===rl&&(s.mapping=Hr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ro||a===rl)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Vm(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ul extends ef{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Lr=4,vu=[.125,.215,.35,.446,.526,.582],Bi=20,Ra=new Ul,xu=new De;let Da=null;const zi=(1+Math.sqrt(5))/2,wr=1/zi,yu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,zi,wr),new P(0,zi,-wr),new P(wr,0,zi),new P(-wr,0,zi),new P(zi,wr,0),new P(-zi,wr,0)];class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Da=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Cs,format:mn,encoding:Ki,depthBuffer:!1},i=Su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(r)),this._blurMaterial=A0(r,e,t)}return i}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,i){const a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xu),u.toneMapping=$n,u.autoClear=!1;const d=new Jh({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new lt(new nr,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(xu),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;vo(i,y*x,p>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gr||e.mapping===Hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=yu[(i-1)%yu.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Bi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let y=0;for(let A=0;A<Bi;++A){const E=A/g,S=Math.exp(-E*E/2);p.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const v=this._sizeLods[i],M=3*v*(i>x-Lr?i-x+Lr:0),w=4*(this._cubeSize-v);vo(t,M,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Ra)}}function E0(o){const e=[],t=[],n=[];let i=o;const r=o-Lr+1+vu.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-Lr?l=vu[s-o+Lr-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),x=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,E=w>2?0:-1,S=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];y.set(S,g*_*w),x.set(f,m*_*w);const b=[w,w,w,w,w,w];v.set(b,p*_*w)}const M=new Lt;M.setAttribute("position",new zn(y,g)),M.setAttribute("uv",new zn(x,m)),M.setAttribute("faceIndex",new zn(v,p)),e.push(M),i>Lr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Su(o,e,t){const n=new Ji(o,e,t);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function A0(o,e,t){const n=new Float32Array(Bi),i=new P(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function bu(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function wu(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C0(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ro||l===rl,u=l===Gr||l===Hr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Mu(o)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Mu(o));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function P0(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function L0(o,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],34962)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let x=0,v=y.length;x<v;x+=3){const M=y[x+0],w=y[x+1],A=y[x+2];f.push(M,w,w,A,A,M)}}else{const y=_.array;g=_.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const M=x+0,w=x+1,A=x+2;f.push(M,w,w,A,A,M)}}const m=new(Wh(f)?$h:Il)(f,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function R0(o,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){o.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,_){if(_===0)return;let g,m;if(i)g=o,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,a,f*l,_),t.update(d,r,_)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function D0(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function I0(o,e){return o[0]-e[0]}function O0(o,e){return Math.abs(e[1])-Math.abs(o[1])}function U0(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new me,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let z=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var d=z;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),M===!0&&(S=3);let b=u.attributes.position.count*S,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const U=new Float32Array(b*N*4*g),D=new jh(U,b,N,g);D.type=fi,D.needsUpdate=!0;const O=S*4;for(let G=0;G<g;G++){const K=w[G],X=A[G],ie=E[G],Q=b*N*4*G;for(let xe=0;xe<K.count;xe++){const ne=xe*O;x===!0&&(s.fromBufferAttribute(K,xe),U[Q+ne+0]=s.x,U[Q+ne+1]=s.y,U[Q+ne+2]=s.z,U[Q+ne+3]=0),v===!0&&(s.fromBufferAttribute(X,xe),U[Q+ne+4]=s.x,U[Q+ne+5]=s.y,U[Q+ne+6]=s.z,U[Q+ne+7]=0),M===!0&&(s.fromBufferAttribute(ie,xe),U[Q+ne+8]=s.x,U[Q+ne+9]=s.y,U[Q+ne+10]=s.z,U[Q+ne+11]=ie.itemSize===4?s.w:1)}}m={count:g,texture:D,size:new ae(b,N)},r.set(u,m),u.addEventListener("dispose",z)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(o,"morphTargetBaseInfluence",y),h.getUniforms().setValue(o,"morphTargetInfluences",f),h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<_;v++){const M=g[v];M[0]=v,M[1]=f[v]}g.sort(O0);for(let v=0;v<8;v++)v<_&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(I0);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const M=a[v],w=M[0],A=M[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+v)!==m[w]&&u.setAttribute("morphTarget"+v,m[w]),p&&u.getAttribute("morphNormal"+v)!==p[w]&&u.setAttribute("morphNormal"+v,p[w]),i[v]=A,y+=A):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(o,"morphTargetBaseInfluence",x),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function N0(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const rf=new Pt,sf=new jh,of=new Tm,af=new tf,Tu=[],Eu=[],Au=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function ts(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=Tu[i];if(r===void 0&&(r=new Float32Array(i),Tu[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Mt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function St(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Xo(o,e){let t=Eu[e];t===void 0&&(t=new Int32Array(e),Eu[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function F0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function z0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2fv(this.addr,e),St(t,e)}}function k0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;o.uniform3fv(this.addr,e),St(t,e)}}function B0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4fv(this.addr,e),St(t,e)}}function V0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Pu.set(n),o.uniformMatrix2fv(this.addr,!1,Pu),St(t,n)}}function G0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Cu.set(n),o.uniformMatrix3fv(this.addr,!1,Cu),St(t,n)}}function H0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Au.set(n),o.uniformMatrix4fv(this.addr,!1,Au),St(t,n)}}function W0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function X0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2iv(this.addr,e),St(t,e)}}function q0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;o.uniform3iv(this.addr,e),St(t,e)}}function j0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4iv(this.addr,e),St(t,e)}}function Y0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Z0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;o.uniform2uiv(this.addr,e),St(t,e)}}function K0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;o.uniform3uiv(this.addr,e),St(t,e)}}function J0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;o.uniform4uiv(this.addr,e),St(t,e)}}function $0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||rf,i)}function Q0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||of,i)}function ev(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||af,i)}function tv(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sf,i)}function nv(o){switch(o){case 5126:return F0;case 35664:return z0;case 35665:return k0;case 35666:return B0;case 35674:return V0;case 35675:return G0;case 35676:return H0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return j0;case 5125:return Y0;case 36294:return Z0;case 36295:return K0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function iv(o,e){o.uniform1fv(this.addr,e)}function rv(o,e){const t=ts(e,this.size,2);o.uniform2fv(this.addr,t)}function sv(o,e){const t=ts(e,this.size,3);o.uniform3fv(this.addr,t)}function ov(o,e){const t=ts(e,this.size,4);o.uniform4fv(this.addr,t)}function av(o,e){const t=ts(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function lv(o,e){const t=ts(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function cv(o,e){const t=ts(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function uv(o,e){o.uniform1iv(this.addr,e)}function hv(o,e){o.uniform2iv(this.addr,e)}function fv(o,e){o.uniform3iv(this.addr,e)}function dv(o,e){o.uniform4iv(this.addr,e)}function pv(o,e){o.uniform1uiv(this.addr,e)}function mv(o,e){o.uniform2uiv(this.addr,e)}function gv(o,e){o.uniform3uiv(this.addr,e)}function _v(o,e){o.uniform4uiv(this.addr,e)}function vv(o,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Mt(n,r)||(o.uniform1iv(this.addr,r),St(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||rf,r[s])}function xv(o,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Mt(n,r)||(o.uniform1iv(this.addr,r),St(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||of,r[s])}function yv(o,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Mt(n,r)||(o.uniform1iv(this.addr,r),St(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||af,r[s])}function Mv(o,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Mt(n,r)||(o.uniform1iv(this.addr,r),St(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||sf,r[s])}function Sv(o){switch(o){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return ov;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return hv;case 35668:case 35672:return fv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=nv(t.type)}}class wv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Sv(t.type)}}class Tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Lu(o,e){o.seq.push(e),o.map[e.id]=e}function Ev(o,e,t){const n=o.name,i=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),s=Ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){Lu(t,c===void 0?new bv(a,o,e):new wv(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new Tv(a),Lu(t,h)),t=h}}}class Eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Ev(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Ru(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Av=0;function Cv(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function Pv(o){switch(o){case Ki:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Du(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Cv(o.getShaderSource(e),s)}else return i}function Lv(o,e){const t=Pv(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Rv(o,e){let t;switch(e){case Op:t="Linear";break;case Up:t="Reinhard";break;case Np:t="OptimizedCineon";break;case zh:t="ACESFilmic";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dv(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function Iv(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ov(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function ps(o){return o!==""}function Iu(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(o){return o.replace(Uv,Nv)}function Nv(o,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ll(t)}const Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(o){return o.replace(Fv,zv)}function zv(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nu(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kv(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function Bv(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Gr:case Hr:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vv(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Gv(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Go:e="ENVMAP_BLENDING_MULTIPLY";break;case Dp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function Hv(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wv(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=kv(t),c=Bv(t),u=Vv(t),h=Gv(t),f=Hv(t),d=t.isWebGL2?"":Dv(t),_=Iv(r),g=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(ps).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Nu(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[d,Nu(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?ke.tonemapping_pars_fragment:"",t.toneMapping!==$n?Rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,Lv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),s=ll(s),s=Iu(s,t),s=Ou(s,t),a=ll(a),a=Iu(a,t),a=Ou(a,t),s=Uu(s),a=Uu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+s,v=y+p+a,M=Ru(i,35633,x),w=Ru(i,35632,v);if(i.attachShader(g,M),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){const S=i.getProgramInfoLog(g).trim(),b=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(w).trim();let U=!0,D=!0;if(i.getProgramParameter(g,35714)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,M,w);else{const O=Du(i,M,"vertex"),z=Du(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+S+`
`+O+`
`+z)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(b===""||N==="")&&(D=!1);D&&(this.diagnostics={runnable:U,programLog:S,vertexShader:{log:b,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(M),i.deleteShader(w);let A;this.getUniforms=function(){return A===void 0&&(A=new Eo(i,g)),A};let E;return this.getAttributes=function(){return E===void 0&&(E=Ov(i,g)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Av++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}let Xv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jv(e),t.set(e,n)),n}}class jv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function Yv(o,e,t,n,i,r,s){const a=new Zh,l=new qv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===1?"uv2":"uv"}function m(S,b,N,U,D){const O=U.fog,z=D.geometry,G=S.isMeshStandardMaterial?U.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),X=K&&K.mapping===Ho?K.image.height:null,ie=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xe=Q!==void 0?Q.length:0;let ne=0;z.morphAttributes.position!==void 0&&(ne=1),z.morphAttributes.normal!==void 0&&(ne=2),z.morphAttributes.color!==void 0&&(ne=3);let W,j,ce,pe;if(ie){const _e=Un[ie];W=_e.vertexShader,j=_e.fragmentShader}else W=S.vertexShader,j=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const B=o.getRenderTarget(),Ee=D.isInstancedMesh===!0,Re=!!S.map,le=!!S.matcap,Me=!!K,te=!!S.aoMap,Z=!!S.lightMap,ee=!!S.bumpMap,ve=!!S.normalMap,ue=!!S.displacementMap,Ce=!!S.emissiveMap,Pe=!!S.metalnessMap,we=!!S.roughnessMap,Fe=S.clearcoat>0,je=S.iridescence>0,L=S.sheen>0,T=S.transmission>0,H=Fe&&!!S.clearcoatMap,re=Fe&&!!S.clearcoatNormalMap,se=Fe&&!!S.clearcoatRoughnessMap,he=je&&!!S.iridescenceMap,R=je&&!!S.iridescenceThicknessMap,$=L&&!!S.sheenColorMap,V=L&&!!S.sheenRoughnessMap,de=!!S.specularMap,ye=!!S.specularColorMap,be=!!S.specularIntensityMap,ge=T&&!!S.transmissionMap,Se=T&&!!S.thicknessMap,Oe=!!S.gradientMap,Be=!!S.alphaMap,ft=S.alphaTest>0,I=!!S.extensions,Y=!!z.attributes.uv2;return{isWebGL2:u,shaderID:ie,shaderName:S.type,vertexShader:W,fragmentShader:j,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?o.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Ki,map:Re,matcap:le,envMap:Me,envMapMode:Me&&K.mapping,envMapCubeUVHeight:X,aoMap:te,lightMap:Z,bumpMap:ee,normalMap:ve,displacementMap:f&&ue,emissiveMap:Ce,normalMapObjectSpace:ve&&S.normalMapType===im,normalMapTangentSpace:ve&&S.normalMapType===Wo,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&S.map.encoding===Je,metalnessMap:Pe,roughnessMap:we,clearcoat:Fe,clearcoatMap:H,clearcoatNormalMap:re,clearcoatRoughnessMap:se,iridescence:je,iridescenceMap:he,iridescenceThicknessMap:R,sheen:L,sheenColorMap:$,sheenRoughnessMap:V,specularMap:de,specularColorMap:ye,specularIntensityMap:be,transmission:T,transmissionMap:ge,thicknessMap:Se,gradientMap:Oe,opaque:S.transparent===!1&&S.blending===Or,alphaMap:Be,alphaTest:ft,combine:S.combine,mapUv:Re&&g(S.map.channel),aoMapUv:te&&g(S.aoMap.channel),lightMapUv:Z&&g(S.lightMap.channel),bumpMapUv:ee&&g(S.bumpMap.channel),normalMapUv:ve&&g(S.normalMap.channel),displacementMapUv:ue&&g(S.displacementMap.channel),emissiveMapUv:Ce&&g(S.emissiveMap.channel),metalnessMapUv:Pe&&g(S.metalnessMap.channel),roughnessMapUv:we&&g(S.roughnessMap.channel),clearcoatMapUv:H&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:R&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:$&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(S.sheenRoughnessMap.channel),specularMapUv:de&&g(S.specularMap.channel),specularColorMapUv:ye&&g(S.specularColorMap.channel),specularIntensityMapUv:be&&g(S.specularIntensityMap.channel),transmissionMapUv:ge&&g(S.transmissionMap.channel),thicknessMapUv:Se&&g(S.thicknessMap.channel),alphaMapUv:Be&&g(S.alphaMap.channel),vertexTangents:ve&&!!z.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs2:Y,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Re||Be),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&N.length>0,shadowMapType:o.shadowMap.type,toneMapping:S.toneMapped?o.toneMapping:$n,useLegacyLights:o.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Jn,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:I&&S.extensions.derivatives===!0,extensionFragDepth:I&&S.extensions.fragDepth===!0,extensionDrawBuffers:I&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)b.push(N),b.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(y(b,S),x(b,S),b.push(o.outputEncoding)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputEncoding),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUvs2&&a.enable(13),b.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.decodeVideoTexture&&a.enable(17),b.opaque&&a.enable(18),b.pointsUvs&&a.enable(19),S.push(a.mask)}function v(S){const b=_[S.type];let N;if(b){const U=Un[b];N=Fm.clone(U.uniforms)}else N=S.uniforms;return N}function M(S,b){let N;for(let U=0,D=c.length;U<D;U++){const O=c[U];if(O.cacheKey===b){N=O,++N.usedTimes;break}}return N===void 0&&(N=new Wv(o,b,S,r),c.push(N)),N}function w(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:E}}function Zv(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Kv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Fu(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function zu(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,d,_,g,m){let p=o[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},o[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=s(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=s(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Kv),n.length>1&&n.sort(f||Fu),i.length>1&&i.sort(f||Fu)}function u(){for(let h=e,f=o.length;h<f;h++){const d=o[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Jv(){let o=new WeakMap;function e(n,i){const r=o.get(n);let s;return r===void 0?(s=new zu,o.set(n,[s])):i>=r.length?(s=new zu,r.push(s)):s=r[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function $v(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return o[e.id]=t,t}}}function Qv(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let ex=0;function tx(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function nx(o,e){const t=new $v,n=Qv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,s=new Le,a=new Le;function l(u,h){let f=0,d=0,_=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let g=0,m=0,p=0,y=0,x=0,v=0,M=0,w=0,A=0,E=0;u.sort(tx);const S=h===!0?Math.PI:1;for(let N=0,U=u.length;N<U;N++){const D=u[N],O=D.color,z=D.intensity,G=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=O.r*z*S,d+=O.g*z*S,_+=O.b*z*S;else if(D.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const ie=D.shadow,Q=n.get(D);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=X,g++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(z*S),X.distance=G,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[p]=X;const ie=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,ie.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[p]=ie.matrix,D.castShadow){const Q=n.get(D);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,i.spotShadow[p]=Q,i.spotShadowMap[p]=K,w++}p++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=X,y++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*S),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ie=D.shadow,Q=n.get(D);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,Q.shadowCameraNear=ie.camera.near,Q.shadowCameraFar=ie.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=X,m++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(z*S),X.groundColor.copy(D.groundColor).multiplyScalar(z*S),i.hemi[x]=X,x++}}y>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=_;const b=i.hash;(b.directionalLength!==g||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==v||b.numPointShadows!==M||b.numSpotShadows!==w||b.numSpotMaps!==A)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,b.directionalLength=g,b.pointLength=m,b.spotLength=p,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=v,b.numPointShadows=M,b.numSpotShadows=w,b.numSpotMaps=A,i.version=ex++)}function c(u,h){let f=0,d=0,_=0,g=0,m=0;const p=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const v=u[y];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),_++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function ku(o,e){const t=new nx(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function ix(o,e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new ku(o,e),t.set(r,[l])):s>=a.length?(l=new ku(o,e),a.push(l)):l=a[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class rx extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sx extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lx(o,e,t){let n=new Ol;const i=new ae,r=new ae,s=new me,a=new rx({depthPacking:nm}),l=new sx,c={},u=t.maxTextureSize,h={[Si]:Xt,[Xt]:Si,[Jn]:Jn},f=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:ox,fragmentShader:ax}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Lt;_.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new lt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh,this.render=function(v,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const A=o.getRenderTarget(),E=o.getActiveCubeFace(),S=o.getActiveMipmapLevel(),b=o.state;b.setBlending(vi),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let N=0,U=v.length;N<U;N++){const D=v[N],O=D.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const z=O.getFrameExtents();if(i.multiply(z),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,O.mapSize.y=r.y)),O.map===null){const K=this.type!==Pr?{minFilter:Ct,magFilter:Ct}:{};O.map=new Ji(i.x,i.y,K),O.map.texture.name=D.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const G=O.getViewportCount();for(let K=0;K<G;K++){const X=O.getViewport(K);s.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),b.viewport(s),O.updateMatrices(D,K),n=O.getFrustum(),x(M,w,O.camera,D,this.type)}O.isPointLightShadow!==!0&&this.type===Pr&&p(O,w),O.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(A,E,S)};function p(v,M){const w=e.update(g);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ji(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(M,null,w,f,g,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(M,null,w,d,g,null)}function y(v,M,w,A){let E=null;const S=w.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(S!==void 0)E=S;else if(E=w.isPointLight===!0?l:a,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const b=E.uuid,N=M.uuid;let U=c[b];U===void 0&&(U={},c[b]=U);let D=U[N];D===void 0&&(D=E.clone(),U[N]=D),E=D}if(E.visible=M.visible,E.wireframe=M.wireframe,A===Pr?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:h[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const b=o.properties.get(E);b.light=w}return E}function x(v,M,w,A,E){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===Pr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,v.matrixWorld);const N=e.update(v),U=v.material;if(Array.isArray(U)){const D=N.groups;for(let O=0,z=D.length;O<z;O++){const G=D[O],K=U[G.materialIndex];if(K&&K.visible){const X=y(v,K,A,E);o.renderBufferDirect(w,null,N,X,v,G)}}}else if(U.visible){const D=y(v,U,A,E);o.renderBufferDirect(w,null,N,D,v,null)}}const b=v.children;for(let N=0,U=b.length;N<U;N++)x(b[N],M,w,A,E)}}function cx(o,e,t){const n=t.isWebGL2;function i(){let I=!1;const Y=new me;let oe=null;const _e=new me(0,0,0,0);return{setMask:function(Te){oe!==Te&&!I&&(o.colorMask(Te,Te,Te,Te),oe=Te)},setLocked:function(Te){I=Te},setClear:function(Te,tt,rt,Dt,ri){ri===!0&&(Te*=Dt,tt*=Dt,rt*=Dt),Y.set(Te,tt,rt,Dt),_e.equals(Y)===!1&&(o.clearColor(Te,tt,rt,Dt),_e.copy(Y))},reset:function(){I=!1,oe=null,_e.set(-1,0,0,0)}}}function r(){let I=!1,Y=null,oe=null,_e=null;return{setTest:function(Te){Te?B(2929):Ee(2929)},setMask:function(Te){Y!==Te&&!I&&(o.depthMask(Te),Y=Te)},setFunc:function(Te){if(oe!==Te){switch(Te){case Tp:o.depthFunc(512);break;case Ep:o.depthFunc(519);break;case Ap:o.depthFunc(513);break;case il:o.depthFunc(515);break;case Cp:o.depthFunc(514);break;case Pp:o.depthFunc(518);break;case Lp:o.depthFunc(516);break;case Rp:o.depthFunc(517);break;default:o.depthFunc(515)}oe=Te}},setLocked:function(Te){I=Te},setClear:function(Te){_e!==Te&&(o.clearDepth(Te),_e=Te)},reset:function(){I=!1,Y=null,oe=null,_e=null}}}function s(){let I=!1,Y=null,oe=null,_e=null,Te=null,tt=null,rt=null,Dt=null,ri=null;return{setTest:function(dt){I||(dt?B(2960):Ee(2960))},setMask:function(dt){Y!==dt&&!I&&(o.stencilMask(dt),Y=dt)},setFunc:function(dt,un,Rn){(oe!==dt||_e!==un||Te!==Rn)&&(o.stencilFunc(dt,un,Rn),oe=dt,_e=un,Te=Rn)},setOp:function(dt,un,Rn){(tt!==dt||rt!==un||Dt!==Rn)&&(o.stencilOp(dt,un,Rn),tt=dt,rt=un,Dt=Rn)},setLocked:function(dt){I=dt},setClear:function(dt){ri!==dt&&(o.clearStencil(dt),ri=dt)},reset:function(){I=!1,Y=null,oe=null,_e=null,Te=null,tt=null,rt=null,Dt=null,ri=null}}}const a=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,x=null,v=null,M=null,w=null,A=null,E=null,S=!1,b=null,N=null,U=null,D=null,O=null;const z=o.getParameter(35661);let G=!1,K=0;const X=o.getParameter(7938);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=K>=2);let ie=null,Q={};const xe=o.getParameter(3088),ne=o.getParameter(2978),W=new me().fromArray(xe),j=new me().fromArray(ne);function ce(I,Y,oe){const _e=new Uint8Array(4),Te=o.createTexture();o.bindTexture(I,Te),o.texParameteri(I,10241,9728),o.texParameteri(I,10240,9728);for(let tt=0;tt<oe;tt++)o.texImage2D(Y+tt,0,6408,1,1,0,6408,5121,_e);return Te}const pe={};pe[3553]=ce(3553,3553,1),pe[34067]=ce(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc(il),ue(!1),Ce(Sc),B(2884),ee(vi);function B(I){f[I]!==!0&&(o.enable(I),f[I]=!0)}function Ee(I){f[I]!==!1&&(o.disable(I),f[I]=!1)}function Re(I,Y){return d[I]!==Y?(o.bindFramebuffer(I,Y),d[I]=Y,n&&(I===36009&&(d[36160]=Y),I===36160&&(d[36009]=Y)),!0):!1}function le(I,Y){let oe=g,_e=!1;if(I)if(oe=_.get(Y),oe===void 0&&(oe=[],_.set(Y,oe)),I.isWebGLMultipleRenderTargets){const Te=I.texture;if(oe.length!==Te.length||oe[0]!==36064){for(let tt=0,rt=Te.length;tt<rt;tt++)oe[tt]=36064+tt;oe.length=Te.length,_e=!0}}else oe[0]!==36064&&(oe[0]=36064,_e=!0);else oe[0]!==1029&&(oe[0]=1029,_e=!0);_e&&(t.isWebGL2?o.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Me(I){return m!==I?(o.useProgram(I),m=I,!0):!1}const te={[Cr]:32774,[pp]:32778,[mp]:32779};if(n)te[Ec]=32775,te[Ac]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(te[Ec]=I.MIN_EXT,te[Ac]=I.MAX_EXT)}const Z={[gp]:0,[_p]:1,[vp]:768,[Nh]:770,[wp]:776,[Sp]:774,[yp]:772,[xp]:769,[Fh]:771,[bp]:775,[Mp]:773};function ee(I,Y,oe,_e,Te,tt,rt,Dt){if(I===vi){p===!0&&(Ee(3042),p=!1);return}if(p===!1&&(B(3042),p=!0),I!==dp){if(I!==y||Dt!==S){if((x!==Cr||w!==Cr)&&(o.blendEquation(32774),x=Cr,w=Cr),Dt)switch(I){case Or:o.blendFuncSeparate(1,771,1,771);break;case bc:o.blendFunc(1,1);break;case wc:o.blendFuncSeparate(0,769,0,1);break;case Tc:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Or:o.blendFuncSeparate(770,771,1,771);break;case bc:o.blendFunc(770,1);break;case wc:o.blendFuncSeparate(0,769,0,1);break;case Tc:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,M=null,A=null,E=null,y=I,S=Dt}return}Te=Te||Y,tt=tt||oe,rt=rt||_e,(Y!==x||Te!==w)&&(o.blendEquationSeparate(te[Y],te[Te]),x=Y,w=Te),(oe!==v||_e!==M||tt!==A||rt!==E)&&(o.blendFuncSeparate(Z[oe],Z[_e],Z[tt],Z[rt]),v=oe,M=_e,A=tt,E=rt),y=I,S=!1}function ve(I,Y){I.side===Jn?Ee(2884):B(2884);let oe=I.side===Xt;Y&&(oe=!oe),ue(oe),I.blending===Or&&I.transparent===!1?ee(vi):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const _e=I.stencilWrite;c.setTest(_e),_e&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),we(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?B(32926):Ee(32926)}function ue(I){b!==I&&(I?o.frontFace(2304):o.frontFace(2305),b=I)}function Ce(I){I!==up?(B(2884),I!==N&&(I===Sc?o.cullFace(1029):I===hp?o.cullFace(1028):o.cullFace(1032))):Ee(2884),N=I}function Pe(I){I!==U&&(G&&o.lineWidth(I),U=I)}function we(I,Y,oe){I?(B(32823),(D!==Y||O!==oe)&&(o.polygonOffset(Y,oe),D=Y,O=oe)):Ee(32823)}function Fe(I){I?B(3089):Ee(3089)}function je(I){I===void 0&&(I=33984+z-1),ie!==I&&(o.activeTexture(I),ie=I)}function L(I,Y,oe){oe===void 0&&(ie===null?oe=33984+z-1:oe=ie);let _e=Q[oe];_e===void 0&&(_e={type:void 0,texture:void 0},Q[oe]=_e),(_e.type!==I||_e.texture!==Y)&&(ie!==oe&&(o.activeTexture(oe),ie=oe),o.bindTexture(I,Y||pe[I]),_e.type=I,_e.texture=Y)}function T(){const I=Q[ie];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{o.compressedTexImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{o.texSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{o.texSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function R(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{o.texStorage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{o.texStorage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{o.texImage2D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{o.texImage3D.apply(o,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){W.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),W.copy(I))}function Se(I){j.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Oe(I,Y){let oe=h.get(Y);oe===void 0&&(oe=new WeakMap,h.set(Y,oe));let _e=oe.get(I);_e===void 0&&(_e=o.getUniformBlockIndex(Y,I.name),oe.set(I,_e))}function Be(I,Y){const _e=h.get(Y).get(I);u.get(Y)!==_e&&(o.uniformBlockBinding(Y,_e,I.__bindingPointIndex),u.set(Y,_e))}function ft(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},ie=null,Q={},d={},_=new WeakMap,g=[],m=null,p=!1,y=null,x=null,v=null,M=null,w=null,A=null,E=null,S=!1,b=null,N=null,U=null,D=null,O=null,W.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:B,disable:Ee,bindFramebuffer:Re,drawBuffers:le,useProgram:Me,setBlending:ee,setMaterial:ve,setFlipSided:ue,setCullFace:Ce,setLineWidth:Pe,setPolygonOffset:we,setScissorTest:Fe,activeTexture:je,bindTexture:L,unbindTexture:T,compressedTexImage2D:H,compressedTexImage3D:re,texImage2D:ye,texImage3D:be,updateUBOMapping:Oe,uniformBlockBinding:Be,texStorage2D:V,texStorage3D:de,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:R,compressedTexSubImage3D:$,scissor:ge,viewport:Se,reset:ft}}function ux(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,T){return p?new OffscreenCanvas(L,T):Ls("canvas")}function x(L,T,H,re){let se=1;if((L.width>re||L.height>re)&&(se=re/Math.max(L.width,L.height)),se<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const he=T?Hh:Math.floor,R=he(se*L.width),$=he(se*L.height);g===void 0&&(g=y(R,$));const V=H?y(R,$):g;return V.width=R,V.height=$,V.getContext("2d").drawImage(L,0,0,R,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+R+"x"+$+")."),V}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return al(L.width)&&al(L.height)}function M(L){return a?!1:L.wrapS!==nn||L.wrapT!==nn||L.minFilter!==Ct&&L.minFilter!==pn}function w(L,T){return L.generateMipmaps&&T&&L.minFilter!==Ct&&L.minFilter!==pn}function A(L){o.generateMipmap(L)}function E(L,T,H,re,se=!1){if(a===!1)return T;if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=T;return T===6403&&(H===5126&&(he=33326),H===5131&&(he=33325),H===5121&&(he=33321)),T===33319&&(H===5126&&(he=33328),H===5131&&(he=33327),H===5121&&(he=33323)),T===6408&&(H===5126&&(he=34836),H===5131&&(he=34842),H===5121&&(he=re===Je&&se===!1?35907:32856),H===32819&&(he=32854),H===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function S(L,T,H){return w(L,H)===!0||L.isFramebufferTexture&&L.minFilter!==Ct&&L.minFilter!==pn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function b(L){return L===Ct||L===Cc||L===oa?9728:9729}function N(L){const T=L.target;T.removeEventListener("dispose",N),D(T),T.isVideoTexture&&_.delete(T)}function U(L){const T=L.target;T.removeEventListener("dispose",U),z(T)}function D(L){const T=n.get(L);if(T.__webglInit===void 0)return;const H=L.source,re=m.get(H);if(re){const se=re[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(L),Object.keys(re).length===0&&m.delete(H)}n.remove(L)}function O(L){const T=n.get(L);o.deleteTexture(T.__webglTexture);const H=L.source,re=m.get(H);delete re[T.__cacheKey],s.memory.textures--}function z(L){const T=L.texture,H=n.get(L),re=n.get(T);if(re.__webglTexture!==void 0&&(o.deleteTexture(re.__webglTexture),s.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)o.deleteFramebuffer(H.__webglFramebuffer[se]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[se]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let se=0;se<H.__webglColorRenderbuffer.length;se++)H.__webglColorRenderbuffer[se]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[se]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let se=0,he=T.length;se<he;se++){const R=n.get(T[se]);R.__webglTexture&&(o.deleteTexture(R.__webglTexture),s.memory.textures--),n.remove(T[se])}n.remove(T),n.remove(L)}let G=0;function K(){G=0}function X(){const L=G;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),G+=1,L}function ie(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.encoding),T.join()}function Q(L,T){const H=n.get(L);if(L.isVideoTexture&&Fe(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const re=L.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(H,L,T);return}}t.bindTexture(3553,H.__webglTexture,33984+T)}function xe(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Ee(H,L,T);return}t.bindTexture(35866,H.__webglTexture,33984+T)}function ne(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Ee(H,L,T);return}t.bindTexture(32879,H.__webglTexture,33984+T)}function W(L,T){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Re(H,L,T);return}t.bindTexture(34067,H.__webglTexture,33984+T)}const j={[Es]:10497,[nn]:33071,[sl]:33648},ce={[Ct]:9728,[Cc]:9984,[oa]:9986,[pn]:9729,[zp]:9985,[As]:9987};function pe(L,T,H){if(H?(o.texParameteri(L,10242,j[T.wrapS]),o.texParameteri(L,10243,j[T.wrapT]),(L===32879||L===35866)&&o.texParameteri(L,32882,j[T.wrapR]),o.texParameteri(L,10240,ce[T.magFilter]),o.texParameteri(L,10241,ce[T.minFilter])):(o.texParameteri(L,10242,33071),o.texParameteri(L,10243,33071),(L===32879||L===35866)&&o.texParameteri(L,32882,33071),(T.wrapS!==nn||T.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(L,10240,b(T.magFilter)),o.texParameteri(L,10241,b(T.minFilter)),T.minFilter!==Ct&&T.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ct||T.minFilter!==oa&&T.minFilter!==As||T.type===fi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Cs&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(o.texParameterf(L,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function B(L,T){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",N));const re=T.source;let se=m.get(re);se===void 0&&(se={},m.set(re,se));const he=ie(T);if(he!==L.__cacheKey){se[he]===void 0&&(se[he]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,H=!0),se[he].usedTimes++;const R=se[L.__cacheKey];R!==void 0&&(se[L.__cacheKey].usedTimes--,R.usedTimes===0&&O(T)),L.__cacheKey=he,L.__webglTexture=se[he].texture}return H}function Ee(L,T,H){let re=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=35866),T.isData3DTexture&&(re=32879);const se=B(L,T),he=T.source;t.bindTexture(re,L.__webglTexture,33984+H);const R=n.get(he);if(he.version!==R.__version||se===!0){t.activeTexture(33984+H),o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const $=M(T)&&v(T.image)===!1;let V=x(T.image,$,!1,u);V=je(T,V);const de=v(V)||a,ye=r.convert(T.format,T.encoding);let be=r.convert(T.type),ge=E(T.internalFormat,ye,be,T.encoding,T.isVideoTexture);pe(re,T,de);let Se;const Oe=T.mipmaps,Be=a&&T.isVideoTexture!==!0,ft=R.__version===void 0||se===!0,I=S(T,V,de);if(T.isDepthTexture)ge=6402,a?T.type===fi?ge=36012:T.type===Vi?ge=33190:T.type===Ur?ge=35056:ge=33189:T.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Hi&&ge===6402&&T.type!==Bh&&T.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Vi,be=r.convert(T.type)),T.format===Wr&&ge===6402&&(ge=34041,T.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ur,be=r.convert(T.type))),ft&&(Be?t.texStorage2D(3553,1,ge,V.width,V.height):t.texImage2D(3553,0,ge,V.width,V.height,0,ye,be,null));else if(T.isDataTexture)if(Oe.length>0&&de){Be&&ft&&t.texStorage2D(3553,I,ge,Oe[0].width,Oe[0].height);for(let Y=0,oe=Oe.length;Y<oe;Y++)Se=Oe[Y],Be?t.texSubImage2D(3553,Y,0,0,Se.width,Se.height,ye,be,Se.data):t.texImage2D(3553,Y,ge,Se.width,Se.height,0,ye,be,Se.data);T.generateMipmaps=!1}else Be?(ft&&t.texStorage2D(3553,I,ge,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,ye,be,V.data)):t.texImage2D(3553,0,ge,V.width,V.height,0,ye,be,V.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Be&&ft&&t.texStorage3D(35866,I,ge,Oe[0].width,Oe[0].height,V.depth);for(let Y=0,oe=Oe.length;Y<oe;Y++)Se=Oe[Y],T.format!==mn?ye!==null?Be?t.compressedTexSubImage3D(35866,Y,0,0,0,Se.width,Se.height,V.depth,ye,Se.data,0,0):t.compressedTexImage3D(35866,Y,ge,Se.width,Se.height,V.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,Y,0,0,0,Se.width,Se.height,V.depth,ye,be,Se.data):t.texImage3D(35866,Y,ge,Se.width,Se.height,V.depth,0,ye,be,Se.data)}else{Be&&ft&&t.texStorage2D(3553,I,ge,Oe[0].width,Oe[0].height);for(let Y=0,oe=Oe.length;Y<oe;Y++)Se=Oe[Y],T.format!==mn?ye!==null?Be?t.compressedTexSubImage2D(3553,Y,0,0,Se.width,Se.height,ye,Se.data):t.compressedTexImage2D(3553,Y,ge,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,Y,0,0,Se.width,Se.height,ye,be,Se.data):t.texImage2D(3553,Y,ge,Se.width,Se.height,0,ye,be,Se.data)}else if(T.isDataArrayTexture)Be?(ft&&t.texStorage3D(35866,I,ge,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,ye,be,V.data)):t.texImage3D(35866,0,ge,V.width,V.height,V.depth,0,ye,be,V.data);else if(T.isData3DTexture)Be?(ft&&t.texStorage3D(32879,I,ge,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,ye,be,V.data)):t.texImage3D(32879,0,ge,V.width,V.height,V.depth,0,ye,be,V.data);else if(T.isFramebufferTexture){if(ft)if(Be)t.texStorage2D(3553,I,ge,V.width,V.height);else{let Y=V.width,oe=V.height;for(let _e=0;_e<I;_e++)t.texImage2D(3553,_e,ge,Y,oe,0,ye,be,null),Y>>=1,oe>>=1}}else if(Oe.length>0&&de){Be&&ft&&t.texStorage2D(3553,I,ge,Oe[0].width,Oe[0].height);for(let Y=0,oe=Oe.length;Y<oe;Y++)Se=Oe[Y],Be?t.texSubImage2D(3553,Y,0,0,ye,be,Se):t.texImage2D(3553,Y,ge,ye,be,Se);T.generateMipmaps=!1}else Be?(ft&&t.texStorage2D(3553,I,ge,V.width,V.height),t.texSubImage2D(3553,0,0,0,ye,be,V)):t.texImage2D(3553,0,ge,ye,be,V);w(T,de)&&A(re),R.__version=he.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Re(L,T,H){if(T.image.length!==6)return;const re=B(L,T),se=T.source;t.bindTexture(34067,L.__webglTexture,33984+H);const he=n.get(se);if(se.version!==he.__version||re===!0){t.activeTexture(33984+H),o.pixelStorei(37440,T.flipY),o.pixelStorei(37441,T.premultiplyAlpha),o.pixelStorei(3317,T.unpackAlignment),o.pixelStorei(37443,0);const R=T.isCompressedTexture||T.image[0].isCompressedTexture,$=T.image[0]&&T.image[0].isDataTexture,V=[];for(let Y=0;Y<6;Y++)!R&&!$?V[Y]=x(T.image[Y],!1,!0,c):V[Y]=$?T.image[Y].image:T.image[Y],V[Y]=je(T,V[Y]);const de=V[0],ye=v(de)||a,be=r.convert(T.format,T.encoding),ge=r.convert(T.type),Se=E(T.internalFormat,be,ge,T.encoding),Oe=a&&T.isVideoTexture!==!0,Be=he.__version===void 0||re===!0;let ft=S(T,de,ye);pe(34067,T,ye);let I;if(R){Oe&&Be&&t.texStorage2D(34067,ft,Se,de.width,de.height);for(let Y=0;Y<6;Y++){I=V[Y].mipmaps;for(let oe=0;oe<I.length;oe++){const _e=I[oe];T.format!==mn?be!==null?Oe?t.compressedTexSubImage2D(34069+Y,oe,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(34069+Y,oe,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+Y,oe,0,0,_e.width,_e.height,be,ge,_e.data):t.texImage2D(34069+Y,oe,Se,_e.width,_e.height,0,be,ge,_e.data)}}}else{I=T.mipmaps,Oe&&Be&&(I.length>0&&ft++,t.texStorage2D(34067,ft,Se,V[0].width,V[0].height));for(let Y=0;Y<6;Y++)if($){Oe?t.texSubImage2D(34069+Y,0,0,0,V[Y].width,V[Y].height,be,ge,V[Y].data):t.texImage2D(34069+Y,0,Se,V[Y].width,V[Y].height,0,be,ge,V[Y].data);for(let oe=0;oe<I.length;oe++){const Te=I[oe].image[Y].image;Oe?t.texSubImage2D(34069+Y,oe+1,0,0,Te.width,Te.height,be,ge,Te.data):t.texImage2D(34069+Y,oe+1,Se,Te.width,Te.height,0,be,ge,Te.data)}}else{Oe?t.texSubImage2D(34069+Y,0,0,0,be,ge,V[Y]):t.texImage2D(34069+Y,0,Se,be,ge,V[Y]);for(let oe=0;oe<I.length;oe++){const _e=I[oe];Oe?t.texSubImage2D(34069+Y,oe+1,0,0,be,ge,_e.image[Y]):t.texImage2D(34069+Y,oe+1,Se,be,ge,_e.image[Y])}}}w(T,ye)&&A(34067),he.__version=se.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function le(L,T,H,re,se){const he=r.convert(H.format,H.encoding),R=r.convert(H.type),$=E(H.internalFormat,he,R,H.encoding);n.get(T).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,$,T.width,T.height,T.depth,0,he,R,null):t.texImage2D(se,0,$,T.width,T.height,0,he,R,null)),t.bindFramebuffer(36160,L),we(T)?f.framebufferTexture2DMultisampleEXT(36160,re,se,n.get(H).__webglTexture,0,Pe(T)):(se===3553||se>=34069&&se<=34074)&&o.framebufferTexture2D(36160,re,se,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(L,T,H){if(o.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let re=33189;if(H||we(T)){const se=T.depthTexture;se&&se.isDepthTexture&&(se.type===fi?re=36012:se.type===Vi&&(re=33190));const he=Pe(T);we(T)?f.renderbufferStorageMultisampleEXT(36161,he,re,T.width,T.height):o.renderbufferStorageMultisample(36161,he,re,T.width,T.height)}else o.renderbufferStorage(36161,re,T.width,T.height);o.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const re=Pe(T);H&&we(T)===!1?o.renderbufferStorageMultisample(36161,re,35056,T.width,T.height):we(T)?f.renderbufferStorageMultisampleEXT(36161,re,35056,T.width,T.height):o.renderbufferStorage(36161,34041,T.width,T.height),o.framebufferRenderbuffer(36160,33306,36161,L)}else{const re=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let se=0;se<re.length;se++){const he=re[se],R=r.convert(he.format,he.encoding),$=r.convert(he.type),V=E(he.internalFormat,R,$,he.encoding),de=Pe(T);H&&we(T)===!1?o.renderbufferStorageMultisample(36161,de,V,T.width,T.height):we(T)?f.renderbufferStorageMultisampleEXT(36161,de,V,T.width,T.height):o.renderbufferStorage(36161,V,T.width,T.height)}}o.bindRenderbuffer(36161,null)}function te(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const re=n.get(T.depthTexture).__webglTexture,se=Pe(T);if(T.depthTexture.format===Hi)we(T)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,se):o.framebufferTexture2D(36160,36096,3553,re,0);else if(T.depthTexture.format===Wr)we(T)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,se):o.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Z(L){const T=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");te(T.__webglFramebuffer,L)}else if(H){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(36160,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]=o.createRenderbuffer(),Me(T.__webglDepthbuffer[re],L,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Me(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function ee(L,T,H){const re=n.get(L);T!==void 0&&le(re.__webglFramebuffer,L,L.texture,36064,3553),H!==void 0&&Z(L)}function ve(L){const T=L.texture,H=n.get(L),re=n.get(T);L.addEventListener("dispose",U),L.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture()),re.__version=T.version,s.memory.textures++);const se=L.isWebGLCubeRenderTarget===!0,he=L.isWebGLMultipleRenderTargets===!0,R=v(L)||a;if(se){H.__webglFramebuffer=[];for(let $=0;$<6;$++)H.__webglFramebuffer[$]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),he)if(i.drawBuffers){const $=L.texture;for(let V=0,de=$.length;V<de;V++){const ye=n.get($[V]);ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&we(L)===!1){const $=he?T:[T];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let V=0;V<$.length;V++){const de=$[V];H.__webglColorRenderbuffer[V]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[V]);const ye=r.convert(de.format,de.encoding),be=r.convert(de.type),ge=E(de.internalFormat,ye,be,de.encoding,L.isXRRenderTarget===!0),Se=Pe(L);o.renderbufferStorageMultisample(36161,Se,ge,L.width,L.height),o.framebufferRenderbuffer(36160,36064+V,36161,H.__webglColorRenderbuffer[V])}o.bindRenderbuffer(36161,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,re.__webglTexture),pe(34067,T,R);for(let $=0;$<6;$++)le(H.__webglFramebuffer[$],L,T,36064,34069+$);w(T,R)&&A(34067),t.unbindTexture()}else if(he){const $=L.texture;for(let V=0,de=$.length;V<de;V++){const ye=$[V],be=n.get(ye);t.bindTexture(3553,be.__webglTexture),pe(3553,ye,R),le(H.__webglFramebuffer,L,ye,36064+V,3553),w(ye,R)&&A(3553)}t.unbindTexture()}else{let $=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?$=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,re.__webglTexture),pe($,T,R),le(H.__webglFramebuffer,L,T,36064,$),w(T,R)&&A($),t.unbindTexture()}L.depthBuffer&&Z(L)}function ue(L){const T=v(L)||a,H=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let re=0,se=H.length;re<se;re++){const he=H[re];if(w(he,T)){const R=L.isWebGLCubeRenderTarget?34067:3553,$=n.get(he).__webglTexture;t.bindTexture(R,$),A(R),t.unbindTexture()}}}function Ce(L){if(a&&L.samples>0&&we(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],H=L.width,re=L.height;let se=16384;const he=[],R=L.stencilBuffer?33306:36096,$=n.get(L),V=L.isWebGLMultipleRenderTargets===!0;if(V)for(let de=0;de<T.length;de++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let de=0;de<T.length;de++){he.push(36064+de),L.depthBuffer&&he.push(R);const ye=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(ye===!1&&(L.depthBuffer&&(se|=256),L.stencilBuffer&&(se|=1024)),V&&o.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[de]),ye===!0&&(o.invalidateFramebuffer(36008,[R]),o.invalidateFramebuffer(36009,[R])),V){const be=n.get(T[de]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,be,0)}o.blitFramebuffer(0,0,H,re,0,0,H,re,se,9728),d&&o.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let de=0;de<T.length;de++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+de,36161,$.__webglColorRenderbuffer[de]);const ye=n.get(T[de]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),o.framebufferTexture2D(36009,36064+de,3553,ye,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function Pe(L){return Math.min(h,L.samples)}function we(L){const T=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Fe(L){const T=s.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function je(L,T){const H=L.encoding,re=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ol||H!==Ki&&(H===Je?a===!1?e.has("EXT_sRGB")===!0&&re===mn?(L.format=ol,L.minFilter=pn,L.generateMipmaps=!1):T=Xh.sRGBToLinear(T):(re!==mn||se!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),T}this.allocateTextureUnit=X,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=xe,this.setTexture3D=ne,this.setTextureCube=W,this.rebindTextures=ee,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=le,this.useMultisampledRTT=we}function hx(o,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===Zi)return 5121;if(r===Gp)return 32819;if(r===Hp)return 32820;if(r===kp)return 5120;if(r===Bp)return 5122;if(r===Bh)return 5123;if(r===Vp)return 5124;if(r===Vi)return 5125;if(r===fi)return 5126;if(r===Cs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Wp)return 6406;if(r===mn)return 6408;if(r===Xp)return 6409;if(r===qp)return 6410;if(r===Hi)return 6402;if(r===Wr)return 34041;if(r===ol)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===jp)return 6403;if(r===Yp)return 36244;if(r===Zp)return 33319;if(r===Kp)return 33320;if(r===Jp)return 36249;if(r===aa||r===la||r===ca||r===ua)if(s===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===la)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pc||r===Lc||r===Rc||r===Dc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Pc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$p)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ic||r===Oc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ic)return s===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Oc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uc||r===Nc||r===Fc||r===zc||r===kc||r===Bc||r===Vc||r===Gc||r===Hc||r===Wc||r===Xc||r===qc||r===jc||r===Yc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Uc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yc)return s===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ha)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ha)return s===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Qp||r===Zc||r===Kc||r===Jc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ha)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Zc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ur?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class fx extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class di extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dx={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class px extends Pt{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:Hi,u!==Hi&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hi&&(n=Vi),n===void 0&&u===Wr&&(n=Ur),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1}}class mx extends Ti{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const y=[],x=[],v=new Set,M=new Map,w=new Bt;w.layers.enable(1),w.viewport=new me;const A=new Bt;A.layers.enable(2),A.viewport=new me;const E=[w,A],S=new fx;S.layers.enable(1),S.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=y[W];return j===void 0&&(j=new Oa,y[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=y[W];return j===void 0&&(j=new Oa,y[W]=j),j.getGripSpace()},this.getHand=function(W){let j=y[W];return j===void 0&&(j=new Oa,y[W]=j),j.getHandSpace()};function U(W){const j=x.indexOf(W.inputSource);if(j===-1)return;const ce=y[j];ce!==void 0&&ce.dispatchEvent({type:W.type,data:W.inputSource})}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",O);for(let W=0;W<y.length;W++){const j=x[W];j!==null&&(x[W]=null,y[W].disconnect(j))}b=null,N=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:d}),p=new Ji(d.framebufferWidth,d.framebufferHeight,{format:mn,type:Zi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let j=null,ce=null,pe=null;g.depth&&(pe=g.stencil?35056:33190,j=g.stencil?Wr:Hi,ce=g.stencil?Ur:Vi);const B={colorFormat:32856,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(B),i.updateRenderState({layers:[f]}),p=new Ji(f.textureWidth,f.textureHeight,{format:mn,type:Zi,depthTexture:new px(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Ee=e.properties.get(p);Ee.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(W){for(let j=0;j<W.removed.length;j++){const ce=W.removed[j],pe=x.indexOf(ce);pe>=0&&(x[pe]=null,y[pe].disconnect(ce))}for(let j=0;j<W.added.length;j++){const ce=W.added[j];let pe=x.indexOf(ce);if(pe===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=x.length){x.push(ce),pe=Ee;break}else if(x[Ee]===null){x[Ee]=ce,pe=Ee;break}if(pe===-1)break}const B=y[pe];B&&B.connect(ce)}}const z=new P,G=new P;function K(W,j,ce){z.setFromMatrixPosition(j.matrixWorld),G.setFromMatrixPosition(ce.matrixWorld);const pe=z.distanceTo(G),B=j.projectionMatrix.elements,Ee=ce.projectionMatrix.elements,Re=B[14]/(B[10]-1),le=B[14]/(B[10]+1),Me=(B[9]+1)/B[5],te=(B[9]-1)/B[5],Z=(B[8]-1)/B[0],ee=(Ee[8]+1)/Ee[0],ve=Re*Z,ue=Re*ee,Ce=pe/(-Z+ee),Pe=Ce*-Z;j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pe),W.translateZ(Ce),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const we=Re+Ce,Fe=le+Ce,je=ve-Pe,L=ue+(pe-Pe),T=Me*le/Fe*we,H=te*le/Fe*we;W.projectionMatrix.makePerspective(je,L,T,H,we,Fe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;S.near=A.near=w.near=W.near,S.far=A.far=w.far=W.far,(b!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,N=S.far);const j=W.parent,ce=S.cameras;X(S,j);for(let pe=0;pe<ce.length;pe++)X(ce[pe],j);ce.length===2?K(S,w,A):S.projectionMatrix.copy(w.projectionMatrix),ie(W,S,j)};function ie(W,j,ce){ce===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const pe=W.children;for(let B=0,Ee=pe.length;B<Ee;B++)pe[B].updateMatrixWorld(!0);W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.getPlanes=function(){return v};let Q=null;function xe(W,j){if(u=j.getViewerPose(c||s),_=j,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let pe=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let B=0;B<ce.length;B++){const Ee=ce[B];let Re=null;if(d!==null)Re=d.getViewport(Ee);else{const Me=h.getViewSubImage(f,Ee);Re=Me.viewport,B===0&&(e.setRenderTargetTextures(p,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(p))}let le=E[B];le===void 0&&(le=new Bt,le.layers.enable(B),le.viewport=new me,E[B]=le),le.matrix.fromArray(Ee.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ee.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Re.x,Re.y,Re.width,Re.height),B===0&&(S.matrix.copy(le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(le)}}for(let ce=0;ce<y.length;ce++){const pe=x[ce],B=y[ce];pe!==null&&B!==void 0&&B.update(pe,j,c||s)}if(Q&&Q(W,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let ce=null;for(const pe of v)j.detectedPlanes.has(pe)||(ce===null&&(ce=[]),ce.push(pe));if(ce!==null)for(const pe of ce)v.delete(pe),M.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of j.detectedPlanes)if(!v.has(pe))v.add(pe),M.set(pe,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const B=M.get(pe);pe.lastChangedTime>B&&(M.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}_=null}const ne=new nf;ne.setAnimationLoop(xe),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}function gx(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _x(o,e,t,n){let i={},r={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(_(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(y,M);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const v=o.createBuffer(),M=y.__size,w=y.usage;return o.bindBuffer(35345,v),o.bufferData(35345,M,w),o.bindBuffer(35345,null),o.bindBufferBase(35345,x,v),v}function h(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,M=y.__cache;o.bindBuffer(35345,x);for(let w=0,A=v.length;w<A;w++){const E=v[w];if(d(E,w,M)===!0){const S=E.__offset,b=Array.isArray(E.value)?E.value:[E.value];let N=0;for(let U=0;U<b.length;U++){const D=b[U],O=g(D);typeof D=="number"?(E.__data[0]=D,o.bufferSubData(35345,S+N,E.__data)):D.isMatrix3?(E.__data[0]=D.elements[0],E.__data[1]=D.elements[1],E.__data[2]=D.elements[2],E.__data[3]=D.elements[0],E.__data[4]=D.elements[3],E.__data[5]=D.elements[4],E.__data[6]=D.elements[5],E.__data[7]=D.elements[0],E.__data[8]=D.elements[6],E.__data[9]=D.elements[7],E.__data[10]=D.elements[8],E.__data[11]=D.elements[0]):(D.toArray(E.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,S,E.__data)}}o.bindBuffer(35345,null)}function d(y,x,v){const M=y.value;if(v[x]===void 0){if(typeof M=="number")v[x]=M;else{const w=Array.isArray(M)?M:[M],A=[];for(let E=0;E<w.length;E++)A.push(w[E].clone());v[x]=A}return!0}else if(typeof M=="number"){if(v[x]!==M)return v[x]=M,!0}else{const w=Array.isArray(v[x])?v[x]:[v[x]],A=Array.isArray(M)?M:[M];for(let E=0;E<w.length;E++){const S=w[E];if(S.equals(A[E])===!1)return S.copy(A[E]),!0}}return!1}function _(y){const x=y.uniforms;let v=0;const M=16;let w=0;for(let A=0,E=x.length;A<E;A++){const S=x[A],b={boundary:0,storage:0},N=Array.isArray(S.value)?S.value:[S.value];for(let U=0,D=N.length;U<D;U++){const O=N[U],z=g(O);b.boundary+=z.boundary,b.storage+=z.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,A>0){w=v%M;const U=M-w;w!==0&&U-b.boundary<0&&(v+=M-w,S.__offset=v)}v+=b.storage}return w=v%M,w>0&&(v+=M-w),y.__size=v,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)o.deleteBuffer(i[y]);s=[],i={},r={}}return{bind:l,update:c,dispose:p}}function vx(){const o=Ls("canvas");return o.style.display="block",o}class lf{constructor(e={}){const{canvas:t=vx(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=s;let d=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ki,this.useLegacyLights=!0,this.toneMapping=$n,this.toneMappingExposure=1;const p=this;let y=!1,x=0,v=0,M=null,w=-1,A=null;const E=new me,S=new me;let b=null,N=t.width,U=t.height,D=1,O=null,z=null;const G=new me(0,0,N,U),K=new me(0,0,N,U);let X=!1;const ie=new Ol;let Q=!1,xe=!1,ne=null;const W=new Le,j=new P,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return M===null?D:1}let B=n;function Ee(C,k){for(let q=0;q<C.length;q++){const F=C[q],J=t.getContext(F,k);if(J!==null)return J}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Be,!1),B===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),B=Ee(k,C),B===null)throw Ee(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Re,le,Me,te,Z,ee,ve,ue,Ce,Pe,we,Fe,je,L,T,H,re,se,he,R,$,V,de,ye;function be(){Re=new P0(B),le=new b0(B,Re,e),Re.init(le),V=new hx(B,Re,le),Me=new cx(B,Re,le),te=new D0,Z=new Zv,ee=new ux(B,Re,Me,Z,le,V,te),ve=new T0(p),ue=new C0(p),Ce=new Wm(B,le),de=new M0(B,Re,Ce,le),Pe=new L0(B,Ce,te,de),we=new N0(B,Pe,Ce,te),he=new U0(B,le,ee),H=new w0(Z),Fe=new Yv(p,ve,ue,Re,le,de,H),je=new gx(p,Z),L=new Jv,T=new ix(Re,le),se=new y0(p,ve,ue,Me,we,f,l),re=new lx(p,we,le),ye=new _x(B,te,le,Me),R=new S0(B,Re,te,le),$=new R0(B,Re,te,le),te.programs=Fe.programs,p.capabilities=le,p.extensions=Re,p.properties=Z,p.renderLists=L,p.shadowMap=re,p.state=Me,p.info=te}be();const ge=new mx(p,B);this.xr=ge,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(C){C!==void 0&&(D=C,this.setSize(N,U,!1))},this.getSize=function(C){return C.set(N,U)},this.setSize=function(C,k,q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,U=k,t.width=Math.floor(C*D),t.height=Math.floor(k*D),q===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(N*D,U*D).floor()},this.setDrawingBufferSize=function(C,k,q){N=C,U=k,D=q,t.width=Math.floor(C*q),t.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,k,q,F){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,k,q,F),Me.viewport(E.copy(G).multiplyScalar(D).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,k,q,F){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,k,q,F),Me.scissor(S.copy(K).multiplyScalar(D).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(C){Me.setScissorTest(X=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(C=!0,k=!0,q=!0){let F=0;C&&(F|=16384),k&&(F|=256),q&&(F|=1024),B.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),L.dispose(),T.dispose(),Z.dispose(),ve.dispose(),ue.dispose(),we.dispose(),de.dispose(),ye.dispose(),Fe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Te),ge.removeEventListener("sessionend",tt),ne&&(ne.dispose(),ne=null),rt.stop()};function Se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=te.autoReset,k=re.enabled,q=re.autoUpdate,F=re.needsUpdate,J=re.type;be(),te.autoReset=C,re.enabled=k,re.autoUpdate=q,re.needsUpdate=F,re.type=J}function Be(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){const k=C.target;k.removeEventListener("dispose",ft),I(k)}function I(C){Y(C),Z.remove(C)}function Y(C){const k=Z.get(C).programs;k!==void 0&&(k.forEach(function(q){Fe.releaseProgram(q)}),C.isShaderMaterial&&Fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,F,J,Ae){k===null&&(k=ce);const Ie=J.isMesh&&J.matrixWorld.determinant()<0,Ue=rp(C,k,q,F,J);Me.setMaterial(F,Ie);let ze=q.index,Ve=1;F.wireframe===!0&&(ze=Pe.getWireframeAttribute(q),Ve=2);const Ge=q.drawRange,We=q.attributes.position;let $e=Ge.start*Ve,Ft=(Ge.start+Ge.count)*Ve;Ae!==null&&($e=Math.max($e,Ae.start*Ve),Ft=Math.min(Ft,(Ae.start+Ae.count)*Ve)),ze!==null?($e=Math.max($e,0),Ft=Math.min(Ft,ze.count)):We!=null&&($e=Math.max($e,0),Ft=Math.min(Ft,We.count));const Sn=Ft-$e;if(Sn<0||Sn===1/0)return;de.setup(J,F,Ue,q,ze);let Ci,gt=R;if(ze!==null&&(Ci=Ce.get(ze),gt=$,gt.setIndex(Ci)),J.isMesh)F.wireframe===!0?(Me.setLineWidth(F.wireframeLinewidth*pe()),gt.setMode(1)):gt.setMode(4);else if(J.isLine){let Ye=F.linewidth;Ye===void 0&&(Ye=1),Me.setLineWidth(Ye*pe()),J.isLineSegments?gt.setMode(1):J.isLineLoop?gt.setMode(2):gt.setMode(3)}else J.isPoints?gt.setMode(0):J.isSprite&&gt.setMode(4);if(J.isInstancedMesh)gt.renderInstances($e,Sn,J.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,na=Math.min(q.instanceCount,Ye);gt.renderInstances($e,Sn,na)}else gt.render($e,Sn)},this.compile=function(C,k){function q(F,J,Ae){F.transparent===!0&&F.side===Jn&&F.forceSinglePass===!1?(F.side=Xt,F.needsUpdate=!0,Js(F,J,Ae),F.side=Si,F.needsUpdate=!0,Js(F,J,Ae),F.side=Jn):Js(F,J,Ae)}_=T.get(C),_.init(),m.push(_),C.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights(p.useLegacyLights),C.traverse(function(F){const J=F.material;if(J)if(Array.isArray(J))for(let Ae=0;Ae<J.length;Ae++){const Ie=J[Ae];q(Ie,C,F)}else q(J,C,F)}),m.pop(),_=null};let oe=null;function _e(C){oe&&oe(C)}function Te(){rt.stop()}function tt(){rt.start()}const rt=new nf;rt.setAnimationLoop(_e),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(C){oe=C,ge.setAnimationLoop(C),C===null?rt.stop():rt.start()},ge.addEventListener("sessionstart",Te),ge.addEventListener("sessionend",tt),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(k),k=ge.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,k,M),_=T.get(C,m.length),_.init(),m.push(_),W.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ie.setFromProjectionMatrix(W),xe=this.localClippingEnabled,Q=H.init(this.clippingPlanes,xe),d=L.get(C,g.length),d.init(),g.push(d),Dt(C,k,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(O,z),Q===!0&&H.beginShadows();const q=_.state.shadowsArray;if(re.render(q,C,k),Q===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(d,C),_.setupLights(p.useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let J=0,Ae=F.length;J<Ae;J++){const Ie=F[J];ri(d,C,Ie,Ie.viewport)}}else ri(d,C,k);M!==null&&(ee.updateMultisampleRenderTarget(M),ee.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(p,C,k),de.resetDefaultState(),w=-1,A=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Dt(C,k,q,F){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){F&&j.setFromMatrixPosition(C.matrixWorld).applyMatrix4(W);const Ie=we.update(C),Ue=C.material;Ue.visible&&d.push(C,Ie,Ue,q,j.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==te.render.frame&&(C.skeleton.update(),C.skeleton.frame=te.render.frame),!C.frustumCulled||ie.intersectsObject(C))){F&&j.setFromMatrixPosition(C.matrixWorld).applyMatrix4(W);const Ie=we.update(C),Ue=C.material;if(Array.isArray(Ue)){const ze=Ie.groups;for(let Ve=0,Ge=ze.length;Ve<Ge;Ve++){const We=ze[Ve],$e=Ue[We.materialIndex];$e&&$e.visible&&d.push(C,Ie,$e,q,j.z,We)}}else Ue.visible&&d.push(C,Ie,Ue,q,j.z,null)}}const Ae=C.children;for(let Ie=0,Ue=Ae.length;Ie<Ue;Ie++)Dt(Ae[Ie],k,q,F)}function ri(C,k,q,F){const J=C.opaque,Ae=C.transmissive,Ie=C.transparent;_.setupLightsView(q),Q===!0&&H.setGlobalState(p.clippingPlanes,q),Ae.length>0&&dt(J,Ae,k,q),F&&Me.viewport(E.copy(F)),J.length>0&&un(J,k,q),Ae.length>0&&un(Ae,k,q),Ie.length>0&&un(Ie,k,q),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function dt(C,k,q,F){if(ne===null){const Ue=le.isWebGL2;ne=new Ji(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Cs:Zi,minFilter:As,samples:Ue&&a===!0?4:0})}const J=p.getRenderTarget();p.setRenderTarget(ne),p.clear();const Ae=p.toneMapping;p.toneMapping=$n,un(C,q,F),ee.updateMultisampleRenderTarget(ne),ee.updateRenderTargetMipmap(ne);let Ie=!1;for(let Ue=0,ze=k.length;Ue<ze;Ue++){const Ve=k[Ue],Ge=Ve.object,We=Ve.geometry,$e=Ve.material,Ft=Ve.group;if($e.side===Jn&&Ge.layers.test(F.layers)){const Sn=$e.side;$e.side=Xt,$e.needsUpdate=!0,Rn(Ge,q,F,We,$e,Ft),$e.side=Sn,$e.needsUpdate=!0,Ie=!0}}Ie===!0&&(ee.updateMultisampleRenderTarget(ne),ee.updateRenderTargetMipmap(ne)),p.setRenderTarget(J),p.toneMapping=Ae}function un(C,k,q){const F=k.isScene===!0?k.overrideMaterial:null;for(let J=0,Ae=C.length;J<Ae;J++){const Ie=C[J],Ue=Ie.object,ze=Ie.geometry,Ve=F===null?Ie.material:F,Ge=Ie.group;Ue.layers.test(q.layers)&&Rn(Ue,k,q,ze,Ve,Ge)}}function Rn(C,k,q,F,J,Ae){C.onBeforeRender(p,k,q,F,J,Ae),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(p,k,q,F,C,Ae),J.transparent===!0&&J.side===Jn&&J.forceSinglePass===!1?(J.side=Xt,J.needsUpdate=!0,p.renderBufferDirect(q,k,F,J,C,Ae),J.side=Si,J.needsUpdate=!0,p.renderBufferDirect(q,k,F,J,C,Ae),J.side=Jn):p.renderBufferDirect(q,k,F,J,C,Ae),C.onAfterRender(p,k,q,F,J,Ae)}function Js(C,k,q){k.isScene!==!0&&(k=ce);const F=Z.get(C),J=_.state.lights,Ae=_.state.shadowsArray,Ie=J.state.version,Ue=Fe.getParameters(C,J.state,Ae,k,q),ze=Fe.getProgramCacheKey(Ue);let Ve=F.programs;F.environment=C.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(C.isMeshStandardMaterial?ue:ve).get(C.envMap||F.environment),Ve===void 0&&(C.addEventListener("dispose",ft),Ve=new Map,F.programs=Ve);let Ge=Ve.get(ze);if(Ge!==void 0){if(F.currentProgram===Ge&&F.lightsStateVersion===Ie)return xc(C,Ue),Ge}else Ue.uniforms=Fe.getUniforms(C),C.onBuild(q,Ue,p),C.onBeforeCompile(Ue,p),Ge=Fe.acquireProgram(Ue,ze),Ve.set(ze,Ge),F.uniforms=Ue.uniforms;const We=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=H.uniform),xc(C,Ue),F.needsLights=op(C),F.lightsStateVersion=Ie,F.needsLights&&(We.ambientLightColor.value=J.state.ambient,We.lightProbe.value=J.state.probe,We.directionalLights.value=J.state.directional,We.directionalLightShadows.value=J.state.directionalShadow,We.spotLights.value=J.state.spot,We.spotLightShadows.value=J.state.spotShadow,We.rectAreaLights.value=J.state.rectArea,We.ltc_1.value=J.state.rectAreaLTC1,We.ltc_2.value=J.state.rectAreaLTC2,We.pointLights.value=J.state.point,We.pointLightShadows.value=J.state.pointShadow,We.hemisphereLights.value=J.state.hemi,We.directionalShadowMap.value=J.state.directionalShadowMap,We.directionalShadowMatrix.value=J.state.directionalShadowMatrix,We.spotShadowMap.value=J.state.spotShadowMap,We.spotLightMatrix.value=J.state.spotLightMatrix,We.spotLightMap.value=J.state.spotLightMap,We.pointShadowMap.value=J.state.pointShadowMap,We.pointShadowMatrix.value=J.state.pointShadowMatrix);const $e=Ge.getUniforms(),Ft=Eo.seqWithValue($e.seq,We);return F.currentProgram=Ge,F.uniformsList=Ft,Ge}function xc(C,k){const q=Z.get(C);q.outputEncoding=k.outputEncoding,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function rp(C,k,q,F,J){k.isScene!==!0&&(k=ce),ee.resetTextureUnits();const Ae=k.fog,Ie=F.isMeshStandardMaterial?k.environment:null,Ue=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Ki,ze=(F.isMeshStandardMaterial?ue:ve).get(F.envMap||Ie),Ve=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!F.normalMap&&!!q.attributes.tangent,We=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,Ft=!!q.morphAttributes.color,Sn=F.toneMapped?p.toneMapping:$n,Ci=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=Ci!==void 0?Ci.length:0,Ye=Z.get(F),na=_.state.lights;if(Q===!0&&(xe===!0||C!==A)){const Jt=C===A&&F.id===w;H.setState(F,C,Jt)}let bt=!1;F.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==na.state.version||Ye.outputEncoding!==Ue||J.isInstancedMesh&&Ye.instancing===!1||!J.isInstancedMesh&&Ye.instancing===!0||J.isSkinnedMesh&&Ye.skinning===!1||!J.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==ze||F.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==H.numPlanes||Ye.numIntersection!==H.numIntersection)||Ye.vertexAlphas!==Ve||Ye.vertexTangents!==Ge||Ye.morphTargets!==We||Ye.morphNormals!==$e||Ye.morphColors!==Ft||Ye.toneMapping!==Sn||le.isWebGL2===!0&&Ye.morphTargetsCount!==gt)&&(bt=!0):(bt=!0,Ye.__version=F.version);let Pi=Ye.currentProgram;bt===!0&&(Pi=Js(F,k,J));let yc=!1,ss=!1,ia=!1;const zt=Pi.getUniforms(),Li=Ye.uniforms;if(Me.useProgram(Pi.program)&&(yc=!0,ss=!0,ia=!0),F.id!==w&&(w=F.id,ss=!0),yc||A!==C){if(zt.setValue(B,"projectionMatrix",C.projectionMatrix),le.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),A!==C&&(A=C,ss=!0,ia=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Jt=zt.map.cameraPosition;Jt!==void 0&&Jt.setValue(B,j.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&zt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||J.isSkinnedMesh)&&zt.setValue(B,"viewMatrix",C.matrixWorldInverse)}if(J.isSkinnedMesh){zt.setOptional(B,J,"bindMatrix"),zt.setOptional(B,J,"bindMatrixInverse");const Jt=J.skeleton;Jt&&(le.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),zt.setValue(B,"boneTexture",Jt.boneTexture,ee),zt.setValue(B,"boneTextureSize",Jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ra=q.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&le.isWebGL2===!0)&&he.update(J,q,Pi),(ss||Ye.receiveShadow!==J.receiveShadow)&&(Ye.receiveShadow=J.receiveShadow,zt.setValue(B,"receiveShadow",J.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Li.envMap.value=ze,Li.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ss&&(zt.setValue(B,"toneMappingExposure",p.toneMappingExposure),Ye.needsLights&&sp(Li,ia),Ae&&F.fog===!0&&je.refreshFogUniforms(Li,Ae),je.refreshMaterialUniforms(Li,F,D,U,ne),Eo.upload(B,Ye.uniformsList,Li,ee)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Eo.upload(B,Ye.uniformsList,Li,ee),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&zt.setValue(B,"center",J.center),zt.setValue(B,"modelViewMatrix",J.modelViewMatrix),zt.setValue(B,"normalMatrix",J.normalMatrix),zt.setValue(B,"modelMatrix",J.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Jt=F.uniformsGroups;for(let sa=0,ap=Jt.length;sa<ap;sa++)if(le.isWebGL2){const Mc=Jt[sa];ye.update(Mc,Pi),ye.bind(Mc,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function sp(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function op(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,q){Z.get(C.texture).__webglTexture=k,Z.get(C.depthTexture).__webglTexture=q;const F=Z.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const q=Z.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,q=0){M=C,x=k,v=q;let F=!0,J=null,Ae=!1,Ie=!1;if(C){const ze=Z.get(C);ze.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(36160,null),F=!1):ze.__webglFramebuffer===void 0?ee.setupRenderTarget(C):ze.__hasExternalTextures&&ee.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ie=!0);const Ge=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(J=Ge[k],Ae=!0):le.isWebGL2&&C.samples>0&&ee.useMultisampledRTT(C)===!1?J=Z.get(C).__webglMultisampledFramebuffer:J=Ge,E.copy(C.viewport),S.copy(C.scissor),b=C.scissorTest}else E.copy(G).multiplyScalar(D).floor(),S.copy(K).multiplyScalar(D).floor(),b=X;if(Me.bindFramebuffer(36160,J)&&le.drawBuffers&&F&&Me.drawBuffers(C,J),Me.viewport(E),Me.scissor(S),Me.setScissorTest(b),Ae){const ze=Z.get(C.texture);B.framebufferTexture2D(36160,36064,34069+k,ze.__webglTexture,q)}else if(Ie){const ze=Z.get(C.texture),Ve=k||0;B.framebufferTextureLayer(36160,36064,ze.__webglTexture,q||0,Ve)}w=-1},this.readRenderTargetPixels=function(C,k,q,F,J,Ae,Ie){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){Me.bindFramebuffer(36160,Ue);try{const ze=C.texture,Ve=ze.format,Ge=ze.type;if(Ve!==mn&&V.convert(Ve)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===Cs&&(Re.has("EXT_color_buffer_half_float")||le.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ge!==Zi&&V.convert(Ge)!==B.getParameter(35738)&&!(Ge===fi&&(le.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-F&&q>=0&&q<=C.height-J&&B.readPixels(k,q,F,J,V.convert(Ve),V.convert(Ge),Ae)}finally{const ze=M!==null?Z.get(M).__webglFramebuffer:null;Me.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(C,k,q=0){const F=Math.pow(2,-q),J=Math.floor(k.image.width*F),Ae=Math.floor(k.image.height*F);ee.setTexture2D(k,0),B.copyTexSubImage2D(3553,q,0,0,C.x,C.y,J,Ae),Me.unbindTexture()},this.copyTextureToTexture=function(C,k,q,F=0){const J=k.image.width,Ae=k.image.height,Ie=V.convert(q.format),Ue=V.convert(q.type);ee.setTexture2D(q,0),B.pixelStorei(37440,q.flipY),B.pixelStorei(37441,q.premultiplyAlpha),B.pixelStorei(3317,q.unpackAlignment),k.isDataTexture?B.texSubImage2D(3553,F,C.x,C.y,J,Ae,Ie,Ue,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(3553,F,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Ie,k.mipmaps[0].data):B.texSubImage2D(3553,F,C.x,C.y,Ie,Ue,k.image),F===0&&q.generateMipmaps&&B.generateMipmap(3553),Me.unbindTexture()},this.copyTextureToTexture3D=function(C,k,q,F,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=C.max.x-C.min.x+1,Ie=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,ze=V.convert(F.format),Ve=V.convert(F.type);let Ge;if(F.isData3DTexture)ee.setTexture3D(F,0),Ge=32879;else if(F.isDataArrayTexture)ee.setTexture2DArray(F,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,F.flipY),B.pixelStorei(37441,F.premultiplyAlpha),B.pixelStorei(3317,F.unpackAlignment);const We=B.getParameter(3314),$e=B.getParameter(32878),Ft=B.getParameter(3316),Sn=B.getParameter(3315),Ci=B.getParameter(32877),gt=q.isCompressedTexture?q.mipmaps[0]:q.image;B.pixelStorei(3314,gt.width),B.pixelStorei(32878,gt.height),B.pixelStorei(3316,C.min.x),B.pixelStorei(3315,C.min.y),B.pixelStorei(32877,C.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(Ge,J,k.x,k.y,k.z,Ae,Ie,Ue,ze,Ve,gt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ge,J,k.x,k.y,k.z,Ae,Ie,Ue,ze,gt.data)):B.texSubImage3D(Ge,J,k.x,k.y,k.z,Ae,Ie,Ue,ze,Ve,gt),B.pixelStorei(3314,We),B.pixelStorei(32878,$e),B.pixelStorei(3316,Ft),B.pixelStorei(3315,Sn),B.pixelStorei(32877,Ci),J===0&&F.generateMipmaps&&B.generateMipmap(Ge),Me.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ee.setTextureCube(C,0):C.isData3DTexture?ee.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ee.setTexture2DArray(C,0):ee.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){x=0,v=0,M=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class xx extends lf{}xx.prototype.isWebGL1Renderer=!0;class Fl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new Fl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class yx extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Bu=new P,Vu=new me,Gu=new me,Mx=new P,Hu=new Le,Tr=new P;class Sx extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new es),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Tr.fromBufferAttribute(t,n),this.applyBoneTransform(n,Tr),this.boundingBox.expandByPoint(Tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ws),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Tr.fromBufferAttribute(t,n),this.applyBoneTransform(n,Tr),this.boundingSphere.expandByPoint(Tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new me,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Vu.fromBufferAttribute(i.attributes.skinIndex,e),Gu.fromBufferAttribute(i.attributes.skinWeight,e),Bu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Gu.getComponent(r);if(s!==0){const a=Vu.getComponent(r);Hu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Mx.copy(Bu).applyMatrix4(Hu),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class cl extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bx extends Pt{constructor(e=null,t=1,n=1,i,r,s,a,l,c=Ct,u=Ct,h,f){super(null,s,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wu=new Le,wx=new Le;class zl{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:wx;Wu.multiplyMatrices(a,t[r]),Wu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Gh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bx(t,e,e,mn,fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new cl),this.bones.push(s),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class qo extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xu=new P,qu=new P,ju=new Le,Ua=new Yh,xo=new Ws;class cf extends ct{constructor(e=new Lt,t=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xu.fromBufferAttribute(t,i-1),qu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xu.distanceTo(qu);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;ju.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(ju);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,h=new P,f=new P,d=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,s.start),y=Math.min(_.count,s.start+s.count);for(let x=p,v=y-1;x<v;x+=d){const M=_.getX(x),w=_.getX(x+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,w),Ua.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),y=Math.min(m.count,s.start+s.count);for(let x=p,v=y-1;x<v;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ua.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Yu=new P,Zu=new P;class uf extends cf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yu.fromBufferAttribute(t,i),Zu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yu.distanceTo(Zu);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-s,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(s-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),l=t||(s.isVector2?new ae:new P);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],s=[],a=new P,l=new Le;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new P)}r[0]=new P,s[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Tt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}s[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Tt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],d*_)),s[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kl extends Pn{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ae,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tx extends kl{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let o=0,e=0,t=0,n=0;function i(r,s,a,l){o=r,e=a,t=-3*r+3*s-2*a-l,n=2*r-2*s+a+l}return{initCatmullRom:function(r,s,a,l,c){i(s,a,c*(a-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,a,l,c,u,h){let f=(s-r)/c-(a-r)/(c+u)+(a-s)/u,d=(a-s)/u-(l-s)/(u+h)+(l-a)/h;f*=u,d*=u,i(s,a,f,d)},calc:function(r){const s=r*r,a=s*r;return o+e*r+t*s+n*a}}}const yo=new P,Na=new Bl,Fa=new Bl,za=new Bl;class Ex extends Pn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(yo.subVectors(i[0],i[1]).add(i[0]),c=yo);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(yo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Na.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,g,m),Fa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,g,m),za.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Fa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),za.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Na.calc(l),Fa.calc(l),za.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ku(o,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*a+r*o+t}function Ax(o,e){const t=1-o;return t*t*e}function Cx(o,e){return 2*(1-o)*o*e}function Px(o,e){return o*o*e}function xs(o,e,t,n){return Ax(o,e)+Cx(o,t)+Px(o,n)}function Lx(o,e){const t=1-o;return t*t*t*e}function Rx(o,e){const t=1-o;return 3*t*t*o*e}function Dx(o,e){return 3*(1-o)*o*o*e}function Ix(o,e){return o*o*o*e}function ys(o,e,t,n,i){return Lx(o,e)+Rx(o,t)+Dx(o,n)+Ix(o,i)}class hf extends Pn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(ys(e,i.x,r.x,s.x,a.x),ys(e,i.y,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ox extends Pn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(ys(e,i.x,r.x,s.x,a.x),ys(e,i.y,r.y,s.y,a.y),ys(e,i.z,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vl extends Pn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ux extends Pn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ff extends Pn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(xs(e,i.x,r.x,s.x),xs(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nx extends Pn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(xs(e,i.x,r.x,s.x),xs(e,i.y,r.y,s.y),xs(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class df extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),a=r-s,l=i[s===0?s:s-1],c=i[s],u=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(Ku(a,l.x,c.x,u.x,h.x),Ku(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var pf=Object.freeze({__proto__:null,ArcCurve:Tx,CatmullRomCurve3:Ex,CubicBezierCurve:hf,CubicBezierCurve3:Ox,EllipseCurve:kl,LineCurve:Vl,LineCurve3:Ux,QuadraticBezierCurve:ff,QuadraticBezierCurve3:Nx,SplineCurve:df});class Fx extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Vl(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-s/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new pf[i.type]().fromJSON(i))}return this}}class ul extends Fx{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vl(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ff(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const a=new hf(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new df(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,s,a,l),this}absellipse(e,t,n,i,r,s,a,l){const c=new kl(e,t,n,i,r,s,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gl extends Lt{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const g=[],m=n/2;let p=0;y(),s===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ke(h,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function y(){const v=new P,M=new P;let w=0;const A=(t-e)/n;for(let E=0;E<=r;E++){const S=[],b=E/r,N=b*(t-e)+e;for(let U=0;U<=i;U++){const D=U/i,O=D*l+a,z=Math.sin(O),G=Math.cos(O);M.x=N*z,M.y=-b*n+m,M.z=N*G,h.push(M.x,M.y,M.z),v.set(z,A,G).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-b),S.push(_++)}g.push(S)}for(let E=0;E<i;E++)for(let S=0;S<r;S++){const b=g[S][E],N=g[S+1][E],U=g[S+1][E+1],D=g[S][E+1];u.push(b,N,D),u.push(N,U,D),w+=6}c.addGroup(p,w,0),p+=w}function x(v){const M=_,w=new ae,A=new P;let E=0;const S=v===!0?e:t,b=v===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),_++;const N=_;for(let U=0;U<=i;U++){const O=U/i*l+a,z=Math.cos(O),G=Math.sin(O);A.x=S*G,A.y=m*b,A.z=S*z,h.push(A.x,A.y,A.z),f.push(0,b,0),w.x=z*.5+.5,w.y=G*.5*b+.5,d.push(w.x,w.y),_++}for(let U=0;U<i;U++){const D=M+U,O=N+U;v===!0?u.push(O,O+1,D):u.push(O+1,O,D),E+=3}c.addGroup(p,E,v===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hl extends Gl{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,a=Math.PI*2){super(0,e,t,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(e){return new Hl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wl extends Lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],s=[];a(i),c(n),u(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new P,v=new P,M=new P;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],v),d(t[w+2],M),l(x,v,M,y)}function l(y,x,v,M){const w=M+1,A=[];for(let E=0;E<=w;E++){A[E]=[];const S=y.clone().lerp(v,E/w),b=x.clone().lerp(v,E/w),N=w-E;for(let U=0;U<=N;U++)U===0&&E===w?A[E][U]=S:A[E][U]=S.clone().lerp(b,U/N)}for(let E=0;E<w;E++)for(let S=0;S<2*(w-E)-1;S++){const b=Math.floor(S/2);S%2===0?(f(A[E][b+1]),f(A[E+1][b]),f(A[E][b])):(f(A[E][b+1]),f(A[E+1][b+1]),f(A[E+1][b]))}}function c(y){const x=new P;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const y=new P;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=m(y)/2/Math.PI+.5,M=p(y)/Math.PI+.5;s.push(v,1-M)}_(),h()}function h(){for(let y=0;y<s.length;y+=6){const x=s[y+0],v=s[y+2],M=s[y+4],w=Math.max(x,v,M),A=Math.min(x,v,M);w>.9&&A<.1&&(x<.2&&(s[y+0]+=1),v<.2&&(s[y+2]+=1),M<.2&&(s[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function _(){const y=new P,x=new P,v=new P,M=new P,w=new ae,A=new ae,E=new ae;for(let S=0,b=0;S<r.length;S+=9,b+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(s[b+0],s[b+1]),A.set(s[b+2],s[b+3]),E.set(s[b+4],s[b+5]),M.copy(y).add(x).add(v).divideScalar(3);const N=m(M);g(w,b+0,y,N),g(A,b+2,x,N),g(E,b+4,v,N)}}function g(y,x,v,M){M<0&&y.x===1&&(s[x]=y.x-1),v.x===0&&v.z===0&&(s[x]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.vertices,e.indices,e.radius,e.details)}}class Ao extends ul{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ul().fromJSON(i))}return this}}const zx={triangulate:function(o,e,t=2){const n=e&&e.length,i=n?e[0]*t:o.length;let r=mf(o,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let a,l,c,u,h,f,d;if(n&&(r=Hx(o,e,r,t)),o.length>80*t){a=c=o[0],l=u=o[1];for(let _=t;_<i;_+=t)h=o[_],f=o[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Rs(r,s,t,a,l,d,0),s}};function mf(o,e,t,n,i){let r,s;if(i===ey(o,e,t,n)>0)for(r=e;r<t;r+=n)s=Ju(r,o[r],o[r+1],s);else for(r=t-n;r>=e;r-=n)s=Ju(r,o[r],o[r+1],s);return s&&jo(s,s.next)&&(Is(s),s=s.next),s}function Qi(o,e){if(!o)return o;e||(e=o);let t=o,n;do if(n=!1,!t.steiner&&(jo(t,t.next)||ot(t.prev,t,t.next)===0)){if(Is(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rs(o,e,t,n,i,r,s){if(!o)return;!s&&r&&Yx(o,n,i,r);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,r?Bx(o,n,i,r):kx(o)){e.push(l.i/t|0),e.push(o.i/t|0),e.push(c.i/t|0),Is(o),o=c.next,a=c.next;continue}if(o=c,o===a){s?s===1?(o=Vx(Qi(o),e,t),Rs(o,e,t,n,i,r,2)):s===2&&Gx(o,e,t,n,i,r):Rs(Qi(o),e,t,n,i,r,1);break}}}function kx(o){const e=o.prev,t=o,n=o.next;if(ot(e,t,n)>=0)return!1;const i=e.x,r=t.x,s=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<s?i:s:r<s?r:s,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>s?i:s:r>s?r:s,d=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Rr(i,a,r,l,s,c,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Bx(o,e,t,n){const i=o.prev,r=o,s=o.next;if(ot(i,r,s)>=0)return!1;const a=i.x,l=r.x,c=s.x,u=i.y,h=r.y,f=s.y,d=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=hl(d,_,e,t,n),y=hl(g,m,e,t,n);let x=o.prevZ,v=o.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==s&&Rr(a,u,l,h,c,f,x.x,x.y)&&ot(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==s&&Rr(a,u,l,h,c,f,v.x,v.y)&&ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=g&&x.y>=_&&x.y<=m&&x!==i&&x!==s&&Rr(a,u,l,h,c,f,x.x,x.y)&&ot(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==s&&Rr(a,u,l,h,c,f,v.x,v.y)&&ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Vx(o,e,t){let n=o;do{const i=n.prev,r=n.next.next;!jo(i,r)&&gf(i,n,n.next,r)&&Ds(i,r)&&Ds(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Is(n),Is(n.next),n=o=r),n=n.next}while(n!==o);return Qi(n)}function Gx(o,e,t,n,i,r){let s=o;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Jx(s,a)){let l=_f(s,a);s=Qi(s,s.next),l=Qi(l,l.next),Rs(s,e,t,n,i,r,0),Rs(l,e,t,n,i,r,0);return}a=a.next}s=s.next}while(s!==o)}function Hx(o,e,t,n){const i=[];let r,s,a,l,c;for(r=0,s=e.length;r<s;r++)a=e[r]*n,l=r<s-1?e[r+1]*n:o.length,c=mf(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Kx(c));for(i.sort(Wx),r=0;r<i.length;r++)t=Xx(i[r],t);return t}function Wx(o,e){return o.x-e.x}function Xx(o,e){const t=qx(o,e);if(!t)return e;const n=_f(t,o);return Qi(n,n.next),Qi(t,t.next)}function qx(o,e){let t=e,n=-1/0,i;const r=o.x,s=o.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Rr(s<c?r:n,s,l,c,s<c?n:r,s,t.x,t.y)&&(h=Math.abs(s-t.y)/(r-t.x),Ds(t,o)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&jx(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function jx(o,e){return ot(o.prev,o,e.prev)<0&&ot(e.next,o,o.next)<0}function Yx(o,e,t,n){let i=o;do i.z===0&&(i.z=hl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,Zx(i)}function Zx(o){let e,t,n,i,r,s,a,l,c=1;do{for(t=o,o=null,r=null,s=0;t;){for(s++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:o=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(s>1);return o}function hl(o,e,t,n,i){return o=(o-t)*i|0,e=(e-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function Kx(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function Rr(o,e,t,n,i,r,s,a){return(i-s)*(e-a)>=(o-s)*(r-a)&&(o-s)*(n-a)>=(t-s)*(e-a)&&(t-s)*(r-a)>=(i-s)*(n-a)}function Jx(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!$x(o,e)&&(Ds(o,e)&&Ds(e,o)&&Qx(o,e)&&(ot(o.prev,o,e.prev)||ot(o,e.prev,e))||jo(o,e)&&ot(o.prev,o,o.next)>0&&ot(e.prev,e,e.next)>0)}function ot(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function jo(o,e){return o.x===e.x&&o.y===e.y}function gf(o,e,t,n){const i=So(ot(o,e,t)),r=So(ot(o,e,n)),s=So(ot(t,n,o)),a=So(ot(t,n,e));return!!(i!==r&&s!==a||i===0&&Mo(o,t,e)||r===0&&Mo(o,n,e)||s===0&&Mo(t,o,n)||a===0&&Mo(t,e,n))}function Mo(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function So(o){return o>0?1:o<0?-1:0}function $x(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&gf(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function Ds(o,e){return ot(o.prev,o,o.next)<0?ot(o,e,o.next)>=0&&ot(o,o.prev,e)>=0:ot(o,e,o.prev)<0||ot(o,o.next,e)<0}function Qx(o,e){let t=o,n=!1;const i=(o.x+e.x)/2,r=(o.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==o);return n}function _f(o,e){const t=new fl(o.i,o.x,o.y),n=new fl(e.i,e.x,e.y),i=o.next,r=e.prev;return o.next=e,e.prev=o,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ju(o,e,t,n){const i=new fl(o,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Is(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function fl(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ey(o,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(o[s]-o[r])*(o[r+1]+o[s+1]),s=r;return i}class Fr{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Fr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];$u(e),Qu(n,e);let s=e.length;t.forEach($u);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,Qu(n,t[l]);const a=zx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function $u(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function Qu(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Xl extends Lt{constructor(e=new Ao([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s(c)}this.setAttribute("position",new Ke(i,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function s(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:ty;let x,v=!1,M,w,A,E;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,M=p.computeFrenetFrames(u,!1),w=new P,A=new P,E=new P),f||(m=0,d=0,_=0,g=0);const S=a.extractPoints(c);let b=S.shape;const N=S.holes;if(!Fr.isClockWise(b)){b=b.reverse();for(let te=0,Z=N.length;te<Z;te++){const ee=N[te];Fr.isClockWise(ee)&&(N[te]=ee.reverse())}}const D=Fr.triangulateShape(b,N),O=b;for(let te=0,Z=N.length;te<Z;te++){const ee=N[te];b=b.concat(ee)}function z(te,Z,ee){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(Z,ee)}const G=b.length,K=D.length;function X(te,Z,ee){let ve,ue,Ce;const Pe=te.x-Z.x,we=te.y-Z.y,Fe=ee.x-te.x,je=ee.y-te.y,L=Pe*Pe+we*we,T=Pe*je-we*Fe;if(Math.abs(T)>Number.EPSILON){const H=Math.sqrt(L),re=Math.sqrt(Fe*Fe+je*je),se=Z.x-we/H,he=Z.y+Pe/H,R=ee.x-je/re,$=ee.y+Fe/re,V=((R-se)*je-($-he)*Fe)/(Pe*je-we*Fe);ve=se+Pe*V-te.x,ue=he+we*V-te.y;const de=ve*ve+ue*ue;if(de<=2)return new ae(ve,ue);Ce=Math.sqrt(de/2)}else{let H=!1;Pe>Number.EPSILON?Fe>Number.EPSILON&&(H=!0):Pe<-Number.EPSILON?Fe<-Number.EPSILON&&(H=!0):Math.sign(we)===Math.sign(je)&&(H=!0),H?(ve=-we,ue=Pe,Ce=Math.sqrt(L)):(ve=Pe,ue=we,Ce=Math.sqrt(L/2))}return new ae(ve/Ce,ue/Ce)}const ie=[];for(let te=0,Z=O.length,ee=Z-1,ve=te+1;te<Z;te++,ee++,ve++)ee===Z&&(ee=0),ve===Z&&(ve=0),ie[te]=X(O[te],O[ee],O[ve]);const Q=[];let xe,ne=ie.concat();for(let te=0,Z=N.length;te<Z;te++){const ee=N[te];xe=[];for(let ve=0,ue=ee.length,Ce=ue-1,Pe=ve+1;ve<ue;ve++,Ce++,Pe++)Ce===ue&&(Ce=0),Pe===ue&&(Pe=0),xe[ve]=X(ee[ve],ee[Ce],ee[Pe]);Q.push(xe),ne=ne.concat(xe)}for(let te=0;te<m;te++){const Z=te/m,ee=d*Math.cos(Z*Math.PI/2),ve=_*Math.sin(Z*Math.PI/2)+g;for(let ue=0,Ce=O.length;ue<Ce;ue++){const Pe=z(O[ue],ie[ue],ve);B(Pe.x,Pe.y,-ee)}for(let ue=0,Ce=N.length;ue<Ce;ue++){const Pe=N[ue];xe=Q[ue];for(let we=0,Fe=Pe.length;we<Fe;we++){const je=z(Pe[we],xe[we],ve);B(je.x,je.y,-ee)}}}const W=_+g;for(let te=0;te<G;te++){const Z=f?z(b[te],ne[te],W):b[te];v?(A.copy(M.normals[0]).multiplyScalar(Z.x),w.copy(M.binormals[0]).multiplyScalar(Z.y),E.copy(x[0]).add(A).add(w),B(E.x,E.y,E.z)):B(Z.x,Z.y,0)}for(let te=1;te<=u;te++)for(let Z=0;Z<G;Z++){const ee=f?z(b[Z],ne[Z],W):b[Z];v?(A.copy(M.normals[te]).multiplyScalar(ee.x),w.copy(M.binormals[te]).multiplyScalar(ee.y),E.copy(x[te]).add(A).add(w),B(E.x,E.y,E.z)):B(ee.x,ee.y,h/u*te)}for(let te=m-1;te>=0;te--){const Z=te/m,ee=d*Math.cos(Z*Math.PI/2),ve=_*Math.sin(Z*Math.PI/2)+g;for(let ue=0,Ce=O.length;ue<Ce;ue++){const Pe=z(O[ue],ie[ue],ve);B(Pe.x,Pe.y,h+ee)}for(let ue=0,Ce=N.length;ue<Ce;ue++){const Pe=N[ue];xe=Q[ue];for(let we=0,Fe=Pe.length;we<Fe;we++){const je=z(Pe[we],xe[we],ve);v?B(je.x,je.y+x[u-1].y,x[u-1].x+ee):B(je.x,je.y,h+ee)}}}j(),ce();function j(){const te=i.length/3;if(f){let Z=0,ee=G*Z;for(let ve=0;ve<K;ve++){const ue=D[ve];Ee(ue[2]+ee,ue[1]+ee,ue[0]+ee)}Z=u+m*2,ee=G*Z;for(let ve=0;ve<K;ve++){const ue=D[ve];Ee(ue[0]+ee,ue[1]+ee,ue[2]+ee)}}else{for(let Z=0;Z<K;Z++){const ee=D[Z];Ee(ee[2],ee[1],ee[0])}for(let Z=0;Z<K;Z++){const ee=D[Z];Ee(ee[0]+G*u,ee[1]+G*u,ee[2]+G*u)}}n.addGroup(te,i.length/3-te,0)}function ce(){const te=i.length/3;let Z=0;pe(O,Z),Z+=O.length;for(let ee=0,ve=N.length;ee<ve;ee++){const ue=N[ee];pe(ue,Z),Z+=ue.length}n.addGroup(te,i.length/3-te,1)}function pe(te,Z){let ee=te.length;for(;--ee>=0;){const ve=ee;let ue=ee-1;ue<0&&(ue=te.length-1);for(let Ce=0,Pe=u+m*2;Ce<Pe;Ce++){const we=G*Ce,Fe=G*(Ce+1),je=Z+ve+we,L=Z+ue+we,T=Z+ue+Fe,H=Z+ve+Fe;Re(je,L,T,H)}}}function B(te,Z,ee){l.push(te),l.push(Z),l.push(ee)}function Ee(te,Z,ee){le(te),le(Z),le(ee);const ve=i.length/3,ue=y.generateTopUV(n,i,ve-3,ve-2,ve-1);Me(ue[0]),Me(ue[1]),Me(ue[2])}function Re(te,Z,ee,ve){le(te),le(Z),le(ve),le(Z),le(ee),le(ve);const ue=i.length/3,Ce=y.generateSideWallUV(n,i,ue-6,ue-3,ue-2,ue-1);Me(Ce[0]),Me(Ce[1]),Me(Ce[3]),Me(Ce[1]),Me(Ce[2]),Me(Ce[3])}function le(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}function Me(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ny(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new pf[i.type]().fromJSON(i)),new Xl(n,e.options)}}const ty={generateTopUV:function(o,e,t,n,i){const r=e[t*3],s=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ae(r,s),new ae(a,l),new ae(c,u)]},generateSideWallUV:function(o,e,t,n,i,r){const s=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],_=e[i*3+2],g=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(s-c)?[new ae(s,1-l),new ae(c,1-h),new ae(f,1-_),new ae(g,1-p)]:[new ae(a,1-l),new ae(u,1-h),new ae(d,1-_),new ae(m,1-p)]}};function ny(o,e,t){if(t.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const r=o[n];t.shapes.push(r.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yo extends Wl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yo(e.radius,e.detail)}}class Os extends Lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const u=[],h=new P,f=new P,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&s===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){const w=M/t;h.x=-e*Math.cos(i+w*r)*Math.sin(s+x*a),h.y=e*Math.cos(s+x*a),h.z=e*Math.sin(i+w*r)*Math.sin(s+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(w+v,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=u[p][y+1],v=u[p][y],M=u[p+1][y],w=u[p+1][y+1];(p!==0||s>0)&&d.push(x,v,w),(p!==n-1||l<Math.PI)&&d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class on extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ka extends Ei{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iy extends Ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ci(o,e,t){return vf(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function bo(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function vf(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function ry(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function eh(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i}function xf(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)}class Zo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sy extends Zo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Qc:r=e,a=2*t-n;break;case eu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qc:s=e,l=2*n-t;break;case eu:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,y=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-d)*m+(1.5+d)*g+.5*_,v=d*m-d*g;for(let M=0;M!==a;++M)r[M]=p*s[u+M]+y*s[c+M]+x*s[l+M]+v*s[h+M];return r}}class oy extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class ay extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ay(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=ci(n,r,s),this.values=ci(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&vf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ci(this.times),t=ci(this.values),n=this.getValueSize(),i=this.getInterpolation()===fa,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const h=a*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=ci(e,0,s),this.values=ci(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=ci(this.times,0),t=ci(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Io;class ns extends Vn{}ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Do;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class yf extends Vn{}yf.prototype.ValueTypeName="color";class Us extends Vn{}Us.prototype.ValueTypeName="number";class ly extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)_n.slerpFlat(r,0,s,c-a,s,c,l);return r}}class is extends Vn{InterpolantFactoryMethodLinear(e){return new ly(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.DefaultInterpolation=Io;is.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends Vn{}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Do;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Vn{}Ns.prototype.ValueTypeName="vector";class cy{constructor(e,t=-1,n,i=em){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(hy(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ry(l);l=eh(l,1,u),c=eh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Us(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];xf(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let y=0;y!==f[_].morphTargets.length;++y){const x=f[_];m.push(x.time),p.push(x.morphTarget===g?1:0)}i.push(new Us(".morphTargetInfluence["+g+"]",m,p))}l=d.length*s}else{const d=".bones["+t[h].name+"]";n(Ns,d+".position",f,"pos",i),n(is,d+".quaternion",f,"rot",i),n(Ns,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function uy(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return yf;case"quaternion":return is;case"bool":case"boolean":return ns;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function hy(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=uy(o.type);if(o.times===void 0){const t=[],n=[];xf(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Oo={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Mf{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const fy=new Mf;class qs{constructor(e){this.manager=e!==void 0?e:fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Yn={};class dy extends Error{constructor(e,t){super(e),this.response=t}}class Sf extends qs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Oo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{g+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,A=u.length;w<A;w++){const E=u[w];E.onProgress&&E.onProgress(M)}p.enqueue(v),y()}})}}});return new Response(m)}else throw new dy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Oo.add(e,c);const u=Yn[e];delete Yn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Yn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class py extends qs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Oo.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=Ls("img");function l(){u(),Oo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ql extends qs{constructor(e){super(e)}load(e,t,n,i){const r=new Pt,s=new py(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ko extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ba=new Le,th=new P,nh=new P;class jl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class my extends jl{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Xr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gy extends Ko{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new my}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ih=new Le,us=new P,Va=new P;class _y extends jl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),i.makeTranslation(-us.x,-us.y,-us.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class rh extends Ko{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vy extends jl{constructor(){super(new Ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bf extends Ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new vy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wf extends Ko{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xy{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Yl="\\[\\]\\.:\\/",yy=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",My="[^"+Yl.replace("\\.","")+"]",Sy=/((?:WC+[\/:])*)/.source.replace("WC",Zl),by=/(WCOD+)?/.source.replace("WCOD",My),wy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Ey=new RegExp("^"+Sy+by+wy+Ty+"$"),Ay=["material","materials","bones","map"];class Cy{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yy,"")}static parseTrackName(e){const t=Ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ay.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=Cy;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Py extends uf{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const r=t/2,s=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,_=-a;f<=t;f++,_+=s){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const g=f===r?n:i;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const u=new Lt;u.setAttribute("position",new Ke(l,3)),u.setAttribute("color",new Ke(c,3));const h=new qo({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ly extends uf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Lt;i.setAttribute("position",new Ke(t,3)),i.setAttribute("color",new Ke(n,3));const r=new qo({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new De,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ry{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ul,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let x=0,v=p.length;x<v;x++){const M=p[x],w=new Ao;w.curves=M.curves,y.push(w)}return y}function n(p,y){const x=y.length;let v=!1;for(let M=x-1,w=0;w<x;M=w++){let A=y[M],E=y[w],S=E.x-A.x,b=E.y-A.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(A=y[w],S=-S,E=y[M],b=-b),p.y<A.y||p.y>E.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const N=b*(p.x-A.x)-S*(p.y-A.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(p.y!==A.y)continue;if(E.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=E.x)return!0}}return v}const i=Fr.isClockWise,r=this.subPaths;if(r.length===0)return[];let s,a,l;const c=[];if(r.length===1)return a=r[0],l=new Ao,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],_=0,g;f[_]=void 0,d[_]=[];for(let p=0,y=r.length;p<y;p++)a=r[p],g=a.getPoints(),s=i(g),s=e?!s:s,s?(!u&&f[_]&&_++,f[_]={s:new Ao,p:g},f[_].s.curves=a.curves,u&&_++,d[_]=[]):d[_].push({h:a,p:g[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,y=0;for(let x=0,v=f.length;x<v;x++)h[x]=[];for(let x=0,v=f.length;x<v;x++){const M=d[x];for(let w=0;w<M.length;w++){const A=M[w];let E=!0;for(let S=0;S<f.length;S++)n(A.p,f[S].p)&&(x!==S&&y++,E?(E=!1,h[S].push(A)):p=!0);E&&h[x].push(A)}}y>0&&p===!1&&(d=h)}let m;for(let p=0,y=f.length;p<y;p++){l=f[p].s,c.push(l),m=d[p];for(let x=0,v=m.length;x<v;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);const oh={type:"change"},Ga={type:"start"},ah={type:"end"};class Dy extends Ti{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Fe),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Fe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oh),n.update(),r=i.NONE},this.update=function(){const R=new P,$=new _n().setFromUnitVectors(e.up,new P(0,1,0)),V=$.clone().invert(),de=new P,ye=new _n,be=2*Math.PI;return function(){const Se=n.object.position;R.copy(Se).sub(n.target),R.applyQuaternion($),a.setFromVector3(R),n.autoRotate&&r===i.NONE&&S(A()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Oe=n.minAzimuthAngle,Be=n.maxAzimuthAngle;return isFinite(Oe)&&isFinite(Be)&&(Oe<-Math.PI?Oe+=be:Oe>Math.PI&&(Oe-=be),Be<-Math.PI?Be+=be:Be>Math.PI&&(Be-=be),Oe<=Be?a.theta=Math.max(Oe,Math.min(Be,a.theta)):a.theta=a.theta>(Oe+Be)/2?Math.max(Oe,a.theta):Math.min(Be,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(V),Se.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||de.distanceToSquared(n.object.position)>s||8*(1-ye.dot(n.object.quaternion))>s?(n.dispatchEvent(oh),de.copy(n.object.position),ye.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",T),n.domElement.removeEventListener("pointerdown",ee),n.domElement.removeEventListener("pointercancel",ue),n.domElement.removeEventListener("wheel",we),n.domElement.removeEventListener("pointermove",ve),n.domElement.removeEventListener("pointerup",ue),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Fe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new sh,l=new sh;let c=1;const u=new P;let h=!1;const f=new ae,d=new ae,_=new ae,g=new ae,m=new ae,p=new ae,y=new ae,x=new ae,v=new ae,M=[],w={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function S(R){l.theta-=R}function b(R){l.phi-=R}const N=function(){const R=new P;return function(V,de){R.setFromMatrixColumn(de,0),R.multiplyScalar(-V),u.add(R)}}(),U=function(){const R=new P;return function(V,de){n.screenSpacePanning===!0?R.setFromMatrixColumn(de,1):(R.setFromMatrixColumn(de,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(V),u.add(R)}}(),D=function(){const R=new P;return function(V,de){const ye=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;R.copy(be).sub(n.target);let ge=R.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),N(2*V*ge/ye.clientHeight,n.object.matrix),U(2*de*ge/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(V*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),U(de*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(R){f.set(R.clientX,R.clientY)}function K(R){y.set(R.clientX,R.clientY)}function X(R){g.set(R.clientX,R.clientY)}function ie(R){d.set(R.clientX,R.clientY),_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;S(2*Math.PI*_.x/$.clientHeight),b(2*Math.PI*_.y/$.clientHeight),f.copy(d),n.update()}function Q(R){x.set(R.clientX,R.clientY),v.subVectors(x,y),v.y>0?O(E()):v.y<0&&z(E()),y.copy(x),n.update()}function xe(R){m.set(R.clientX,R.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),D(p.x,p.y),g.copy(m),n.update()}function ne(R){R.deltaY<0?z(E()):R.deltaY>0&&O(E()),n.update()}function W(R){let $=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),$=!0;break}$&&(R.preventDefault(),n.update())}function j(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);f.set(R,$)}}function ce(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const R=.5*(M[0].pageX+M[1].pageX),$=.5*(M[0].pageY+M[1].pageY);g.set(R,$)}}function pe(){const R=M[0].pageX-M[1].pageX,$=M[0].pageY-M[1].pageY,V=Math.sqrt(R*R+$*$);y.set(0,V)}function B(){n.enableZoom&&pe(),n.enablePan&&ce()}function Ee(){n.enableZoom&&pe(),n.enableRotate&&j()}function Re(R){if(M.length==1)d.set(R.pageX,R.pageY);else{const V=he(R),de=.5*(R.pageX+V.x),ye=.5*(R.pageY+V.y);d.set(de,ye)}_.subVectors(d,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;S(2*Math.PI*_.x/$.clientHeight),b(2*Math.PI*_.y/$.clientHeight),f.copy(d)}function le(R){if(M.length===1)m.set(R.pageX,R.pageY);else{const $=he(R),V=.5*(R.pageX+$.x),de=.5*(R.pageY+$.y);m.set(V,de)}p.subVectors(m,g).multiplyScalar(n.panSpeed),D(p.x,p.y),g.copy(m)}function Me(R){const $=he(R),V=R.pageX-$.x,de=R.pageY-$.y,ye=Math.sqrt(V*V+de*de);x.set(0,ye),v.set(0,Math.pow(x.y/y.y,n.zoomSpeed)),O(v.y),y.copy(x)}function te(R){n.enableZoom&&Me(R),n.enablePan&&le(R)}function Z(R){n.enableZoom&&Me(R),n.enableRotate&&Re(R)}function ee(R){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",ve),n.domElement.addEventListener("pointerup",ue)),H(R),R.pointerType==="touch"?je(R):Ce(R))}function ve(R){n.enabled!==!1&&(R.pointerType==="touch"?L(R):Pe(R))}function ue(R){re(R),M.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",ve),n.domElement.removeEventListener("pointerup",ue)),n.dispatchEvent(ah),r=i.NONE}function Ce(R){let $;switch(R.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case ar.DOLLY:if(n.enableZoom===!1)return;K(R),r=i.DOLLY;break;case ar.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;X(R),r=i.PAN}else{if(n.enableRotate===!1)return;G(R),r=i.ROTATE}break;case ar.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;G(R),r=i.ROTATE}else{if(n.enablePan===!1)return;X(R),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ga)}function Pe(R){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ie(R);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(R);break;case i.PAN:if(n.enablePan===!1)return;xe(R);break}}function we(R){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(R.preventDefault(),n.dispatchEvent(Ga),ne(R),n.dispatchEvent(ah))}function Fe(R){n.enabled===!1||n.enablePan===!1||W(R)}function je(R){switch(se(R),M.length){case 1:switch(n.touches.ONE){case lr.ROTATE:if(n.enableRotate===!1)return;j(),r=i.TOUCH_ROTATE;break;case lr.PAN:if(n.enablePan===!1)return;ce(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case lr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),r=i.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ga)}function L(R){switch(se(R),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(R),n.update();break;default:r=i.NONE}}function T(R){n.enabled!==!1&&R.preventDefault()}function H(R){M.push(R)}function re(R){delete w[R.pointerId];for(let $=0;$<M.length;$++)if(M[$].pointerId==R.pointerId){M.splice($,1);return}}function se(R){let $=w[R.pointerId];$===void 0&&($=new ae,w[R.pointerId]=$),$.set(R.pageX,R.pageY)}function he(R){const $=R.pointerId===M[0].pointerId?M[1]:M[0];return w[$.pointerId]}n.domElement.addEventListener("contextmenu",T),n.domElement.addEventListener("pointerdown",ee),n.domElement.addEventListener("pointercancel",ue),n.domElement.addEventListener("wheel",we,{passive:!1}),this.update()}}class Iy{constructor(e){this.head=e,this.end=e}addNode(e){this.end.linkTo(e),this.end=e}}const hs=new P;function fn(o,e,t,n,i,r){const s=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;hs.copy(e),hs[n]=0,hs.normalize();const c=.5*s/(s+a),u=1-hs.angleTo(o)/l;return Math.sign(hs[t])===1?u*c:a/(s+a)+c+c*(1-u)}class Tf extends nr{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;const a=new P,l=new P,c=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,_=new P,g=.5/i;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:_.set(1,0,0),f[p+0]=fn(_,l,"z","y",r,n),f[p+1]=1-fn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[p+0]=1-fn(_,l,"z","y",r,n),f[p+1]=1-fn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[p+0]=1-fn(_,l,"x","z",r,e),f[p+1]=fn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[p+0]=1-fn(_,l,"x","z",r,e),f[p+1]=1-fn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[p+0]=1-fn(_,l,"x","y",r,e),f[p+1]=1-fn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[p+0]=fn(_,l,"x","y",r,e),f[p+1]=1-fn(_,l,"y","x",r,t);break}}}class lh{constructor(e){or(this,"next",null);or(this,"prev",null);this.data=e}linkTo(e){this.next=e,e.prev=this}}function Zn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Ef(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jr={duration:.5,overwrite:!1,delay:0},Kl,Rt,it,xn=1e8,et=1/xn,dl=Math.PI*2,Oy=dl/4,Uy=0,Af=Math.sqrt,Ny=Math.cos,Fy=Math.sin,Et=function(e){return typeof e=="string"},ut=function(e){return typeof e=="function"},Qn=function(e){return typeof e=="number"},Jl=function(e){return typeof e>"u"},Bn=function(e){return typeof e=="object"},qt=function(e){return e!==!1},$l=function(){return typeof window<"u"},wo=function(e){return ut(e)||Et(e)},Cf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,pl=/(?:-?\.?\d|\.)+/gi,Pf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Dr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ha=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lf=/[+-]=-?[.\d]+/,Rf=/[^,'"\[\]\s]+/gi,zy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,st,On,ml,Ql,ln={},Uo={},Df,If=function(e){return(Uo=Yr(e,ln))&&Kt},ec=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fs=function(e,t){return!t&&console.warn(e)},Of=function(e,t){return e&&(ln[e]=t)&&Uo&&(Uo[e]=t)||ln},zs=function(){return 0},ky={suppressEvents:!0,isStart:!0,kill:!1},Co={suppressEvents:!0,kill:!1},By={suppressEvents:!0},tc={},xi=[],gl={},Uf,tn={},Wa={},ch=30,Po=[],nc="",ic=function(e){var t=e[0],n,i;if(Bn(t)||ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Po.length;i--&&!Po[i].targetTest(t););n=Po[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new sd(e[i],n)))||e.splice(i,1);return e},Wi=function(e){return e._gsap||ic(yn(e))[0]._gsap},Nf=function(e,t,n){return(n=e[t])&&ut(n)?e[t]():Jl(n)&&e.getAttribute&&e.getAttribute(t)||n},jt=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},xt=function(e){return Math.round(e*1e7)/1e7||0},zr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Vy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},No=function(){var e=xi.length,t=xi.slice(0),n,i;for(gl={},xi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rc=function(e){return!!(e._initted||e._startAt||e.add)},Ff=function(e,t,n,i){xi.length&&!Rt&&No(),e.render(t,n,i||!!(Rt&&t<0&&rc(e))),xi.length&&!Rt&&No()},zf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rf).length<2?t:Et(e)?e.trim():e},kf=function(e){return e},cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Yr=function(e,t){for(var n in t)e[n]=t[n];return e},uh=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Bn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Fo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ms=function(e){var t=e.parent||st,n=e.keyframes?Gy(Nt(e.keyframes)):cn;if(qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Hy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Bf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],a;if(r)for(a=t[r];s&&s[r]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Jo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Wy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_l=function(e,t,n,i){return e._startAt&&(Rt?e._startAt.revert(Co):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Xy=function o(e){return!e||e._ts&&o(e.parent)},hh=function(e){return e._repeat?Zr(e._tTime,e=e.duration()+e._rDelay)*e:0},Zr=function(e,t){var n=Math.floor(e=xt(e/t));return e&&n===e?n-1:n},zo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$o=function(e){return e._end=xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||et)||0))},Qo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$o(e),n._dirty||Xi(n,e)),e},Vf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=zo(e.rawTime(),t),(!t._dur||js(0,t.totalDuration(),n)-t._tTime>et)&&t.render(n,!0)),Xi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-et}},Nn=function(e,t,n,i){return t.parent&&bi(t),t._start=xt((Qn(n)?n:n||e!==st?dn(e,n,t):e._time)+t._delay),t._end=xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bf(e,t,"_first","_last",e._sort?"_start":0),vl(t)||(e._recent=t),i||Vf(e,t),e._ts<0&&Qo(e,e._tTime),e},Gf=function(e,t){return(ln.ScrollTrigger||ec("scrollTrigger",t))&&ln.ScrollTrigger.create(t,e)},Hf=function(e,t,n,i,r){if(oc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Rt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Uf!==rn.frame)return xi.push(e),e._lazy=[r,i],1},qy=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},vl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jy=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&qy(e)&&!(!e._initted&&vl(e))||(e._ts<0||e._dp._ts<0)&&!vl(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=js(0,e._tDur,t),u=Zr(l,a),e._yoyo&&u&1&&(s=1-s),u!==Zr(e._tTime,a)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Rt||i||e._zTime===et||!t&&e._zTime){if(!e._initted&&Hf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?et:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&_l(e,t,n,!0),e._onUpdate&&!n&&sn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&bi(e,1),!n&&!Rt&&(sn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Yy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Kr=function(e,t,n,i){var r=e._repeat,s=xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:xt(s*(r+1)+e._rDelay*r):s,a>0&&!i&&Qo(e,e._tTime=e._tDur*a),e.parent&&$o(e),n||Xi(e.parent,e),e},fh=function(e){return e instanceof Vt?Xi(e):Kr(e,e._dur)},Zy={_start:0,endTime:zs,totalDuration:zs},dn=function o(e,t,n){var i=e.labels,r=e._recent||Zy,s=e.duration()>=xn?r.endTime(!1):e._dur,a,l,c;return Et(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Nt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},Ss=function(e,t,n){var i=Qn(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],a,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qt(l.vars.inherit)&&l.parent;s.immediateRender=qt(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new vt(t[0],s,t[r+1])},Ai=function(e,t){return e||e===0?t(e):t},js=function(e,t,n){return n<e?e:n>t?t:n},Ut=function(e,t){return!Et(e)||!(t=zy.exec(e))?"":t[1]},Ky=function(e,t,n){return Ai(n,function(i){return js(e,t,i)})},xl=[].slice,Wf=function(e,t){return e&&Bn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Bn(e[0]))&&!e.nodeType&&e!==On},Jy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Et(i)&&!t||Wf(i,1)?(r=n).push.apply(r,yn(i)):n.push(i)})||n},yn=function(e,t,n){return it&&!t&&it.selector?it.selector(e):Et(e)&&!n&&(ml||!Jr())?xl.call((t||Ql).querySelectorAll(e),0):Nt(e)?Jy(e,n):Wf(e)?xl.call(e,0):e?[e]:[]},yl=function(e){return e=yn(e)[0]||Fs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yn(t,n.querySelectorAll?n:n===e?Fs("Invalid scope")||Ql.createElement("div"):e)}},Xf=function(e){return e.sort(function(){return .5-Math.random()})},qf=function(e){if(ut(e))return e;var t=Bn(e)?e:{each:e},n=qi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Et(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=s[g],p,y,x,v,M,w,A,E,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,xn])[1],!S){for(A=-xn;A<(A=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=s[g]=[],p=l?Math.min(S,g)*u-.5:i%S,y=S===xn?0:l?g*h/S-.5:i/S|0,A=0,E=xn,w=0;w<g;w++)x=w%S-p,v=y-(w/S|0),m[w]=M=c?Math.abs(c==="y"?v:x):Af(x*x+v*v),M>A&&(A=M),M<E&&(E=M);i==="random"&&Xf(m),m.max=A-E,m.min=E,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ut(t.amount||t.each)||0,n=n&&g<0?nd(n):n}return g=(m[f]-m.min)/m.max||0,xt(m.b+(n?n(g):g)*m.v)+m.u}},Ml=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Qn(n)?0:Ut(n))}},jf=function(e,t){var n=Nt(e),i,r;return!n&&Bn(e)&&(i=n=e.radius||xn,e.values?(e=yn(e.values),(r=!Qn(e[0]))&&(i*=i)):e=Ml(e.increment)),Ai(t,n?ut(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=xn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||Qn(s)?u:u+Ut(s)}:Ml(e))},Yf=function(e,t,n,i){return Ai(Nt(e)?!t:n===!0?!!(n=0):!i,function(){return Nt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},$y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},Qy=function(e,t){return function(n){return e(parseFloat(n))+(t||Ut(n))}},eM=function(e,t,n){return Kf(e,t,0,1,n)},Zf=function(e,t,n){return Ai(n,function(i){return e[~~t(i)]})},tM=function o(e,t,n){var i=t-e;return Nt(e)?Zf(e,o(0,e.length),t):Ai(n,function(r){return(i+(r-e)%i)%i+e})},nM=function o(e,t,n){var i=t-e,r=i*2;return Nt(e)?Zf(e,o(0,e.length-1),t):Ai(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},ks=function(e){for(var t=0,n="",i,r,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(a?Rf:pl),n+=e.substr(t,i-t)+Yf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Kf=function(e,t,n,i,r){var s=t-e,a=i-n;return Ai(r,function(l){return n+((l-e)/s*a||0)})},iM=function o(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=Et(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Nt(e)&&!Nt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Yr(Nt(e)?[]:{},e));if(!u){for(l in t)sc.call(a,e,l,"get",t[l]);r=function(_){return cc(_,a)||(s?e.p:e)}}}return Ai(n,r)},dh=function(e,t,n){var i=e.labels,r=xn,s,a,l;for(s in i)a=i[s]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},sn=function(e,t,n){var i=e.vars,r=i[t],s=it,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&xi.length&&No(),a&&(it=a),u=l?r.apply(c,l):r.call(c),it=s,u},ms=function(e){return bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rt),e.progress()<1&&sn(e,"onInterrupt"),e},Ir,Jf=[],$f=function(e){if(e)if(e=!e.name&&e.default||e,$l()||e.headless){var t=e.name,n=ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:zs,render:cc,add:sc,kill:xM,modifier:vM,rawVars:0},s={targetTest:0,get:0,getSetter:lc,aliases:{},register:0};if(Jr(),e!==i){if(tn[t])return;cn(i,cn(Fo(e,r),s)),Yr(i.prototype,Yr(r,Fo(e,s))),tn[i.prop=t]=i,e.targetTest&&(Po.push(i),tc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Of(t,i),e.register&&e.register(Kt,i,Yt)}else Jf.push(e)},Qe=255,gs={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Xa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},Qf=function(e,t,n){var i=e?Qn(e)?[e>>16,e>>8&Qe,e&Qe]:0:gs.black,r,s,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gs[e])i=gs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+r+r+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(pl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=Xa(l+1/3,r,s),i[1]=Xa(l,r,s),i[2]=Xa(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(Pf),n&&i.length<4&&(i[3]=1),i}else i=e.match(pl)||gs.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Qe,s=i[1]/Qe,a=i[2]/Qe,h=Math.max(r,s,a),f=Math.min(r,s,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(s-a)/d+(s<a?6:0):h===s?(a-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ed=function(e){var t=[],n=[],i=-1;return e.split(yi).forEach(function(r){var s=r.match(Dr)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},ph=function(e,t,n){var i="",r=(e+i).match(yi),s=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Qf(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ed(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(yi,"1").split(Dr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(yi),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},yi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gs)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),rM=/hsl[a]?\(/,td=function(e){var t=e.join(" "),n;if(yi.lastIndex=0,yi.test(t))return n=rM.test(t),e[1]=ph(e[1],n),e[0]=ph(e[0],n,ed(e[1])),!0},Bs,rn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,u,h,f,d,_=function g(m){var p=o()-i,y=m===!0,x,v,M,w;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,x=M-s,(x>0||y)&&(w=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,s+=x+(x>=r?4:r-x),v=1),y||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](M,f,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Df&&(!ml&&$l()&&(On=ml=window,Ql=On.document||{},ln.gsap=Kt,(On.gsapVersions||(On.gsapVersions=[])).push(Kt.version),If(Uo||On.GreenSockGlobals||!On.gsap&&On||{}),Jf.forEach($f)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Bs=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Bs=0,c=zs},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,p,y){var x=p?function(v,M,w,A){m(v,M,w,A),h.remove(x)}:m;return h.remove(m),a[y?"unshift":"push"](x),Jr(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Jr=function(){return!Bs&&rn.wake()},qe={},sM=/^[\d.\-M][\d.\-,\s]/,oM=/["']/g,aM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(oM,"").trim():+c,i=l.substr(a+1).trim();return t},lM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cM=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[aM(t[1])]:lM(e).split(",").map(zf)):qe._CE&&sM.test(e)?qe._CE("",e):n},nd=function(e){return function(t){return 1-e(1-t)}},id=function o(e,t){for(var n=e._first,i;n;)n instanceof Vt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},qi=function(e,t){return e&&(ut(e)?e:qe[e]||cM(e))||t},ir=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return jt(e,function(a){qe[a]=ln[a]=r,qe[s=a.toLowerCase()]=n;for(var l in r)qe[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=r[l]}),r},rd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qa=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/dl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Fy((u-s)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:rd(a);return r=dl/r,l.config=function(c,u){return o(e,c,u)},l},ja=function o(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:rd(n);return i.config=function(r){return o(e,r)},i};jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;ir(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;ir("Elastic",qa("in"),qa("out"),qa());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};ir("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);ir("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});ir("Circ",function(o){return-(Af(1-o*o)-1)});ir("Sine",function(o){return o===1?1:-Ny(o*Oy)+1});ir("Back",ja("in"),ja("out"),ja());qe.SteppedEase=qe.steps=ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-et;return function(a){return((i*js(0,s,a)|0)+r)*n}}};jr.ease=qe["quad.out"];jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return nc+=o+","+o+"Params,"});var sd=function(e,t){this.id=Uy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Nf,this.set=t?t.getSetter:lc},Vs=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kr(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),Bs||rn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Jr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Qo(this,n),!r._dp||r.parent||Vf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===et||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ff(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Zr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?zo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-et?0:this._rts,this.totalTime(js(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),$o(this),Wy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Nn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=By);var i=Rt;return Rt=n,rc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Rt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(dn(this,n),qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qt(i)),this._dur||(this._zTime=-et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-et)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=ut(n)?n:kf,a=function(){var c=i.then;i.then=null,ut(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ms(this)},o}();cn(Vs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var Vt=function(o){Ef(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=qt(n.sortChildren),st&&Nn(n.parent||st,Zn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Gf(Zn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return Ss(0,arguments,this),this},t.from=function(i,r,s){return Ss(1,arguments,this),this},t.fromTo=function(i,r,s,a){return Ss(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,Ms(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new vt(i,r,dn(this,s),1),this},t.call=function(i,r,s){return Nn(this,vt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,a,l,c,u){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new vt(i,s,dn(this,l)),this},t.staggerFrom=function(i,r,s,a,l,c,u){return s.runBackwards=1,Ms(s).immediateRender=qt(s.immediateRender),this.staggerTo(i,r,s,a,l,c,u)},t.staggerFromTo=function(i,r,s,a,l,c,u,h){return a.startAt=s,Ms(a).immediateRender=qt(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:xt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,y,x,v,M,w,A;if(this!==st&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=xt(u%m),u===l?(g=this._repeat,f=c):(M=xt(u/m),g=~~M,g&&g===M&&(f=c,g--),f>c&&(f=c)),M=Zr(this._tTime,m),!a&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),w&&g&1&&(f=c-f,A=1),g!==M&&!this._lock){var E=w&&M&1,S=E===(w&&g&1);if(g<M&&(E=!E),a=E?0:u%c?c:u,this._lock=1,this.render(a||(A?0:xt(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;id(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Yy(this,xt(a),xt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!r&&!M&&(sn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-et);break}}d=_}else{d=this._last;for(var b=i<0?i:f;d;){if(_=d._prev,(d._act||b<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,r,s||Rt&&rc(d)),f!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=b?-et:et);break}}d=_}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-et)._zTime=f>=a?1:-1,this._ts))return this._start=v,$o(this),this.render(i,r,s);this._onUpdate&&!r&&sn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&bi(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(sn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Qn(r)||(r=dn(this,r,i)),!(i instanceof Vs)){if(Nt(i))return i.forEach(function(a){return s.add(a,r)}),this;if(Et(i))return this.addLabel(i,r);if(ut(i))i=vt.delayedCall(0,i);else return this}return this!==i?Nn(this,i,r):this},t.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-xn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof vt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Et(i)?this.removeLabel(i):ut(i)?this.killTweensOf(i):(i.parent===this&&Jo(this,i),i===this._recent&&(this._recent=this._last),Xi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xt(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=dn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var a=vt.delayedCall(0,r||zs,s);return a.data="isPause",this._hasPause=1,Nn(this,a,dn(this,i))},t.removePause=function(i){var r=this._first;for(i=dn(this,i);r;)r._start===i&&r.data==="isPause"&&bi(r),r=r._next},t.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)pi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],a=yn(i),l=this._first,c=Qn(r),u;l;)l instanceof vt?Vy(l._targets,a)&&(c?(!pi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(a,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,a=dn(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=vt.to(s,cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||et,onStart:function(){if(s.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==m&&Kr(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,cn({startAt:{time:dn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),dh(this,dn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),dh(this,dn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+et)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Xi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xi(this)},t.totalDuration=function(i){var r=0,s=this,a=s._last,l=xn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,Nn(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Kr(s,s===st&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(st._ts&&(Ff(st,zo(i,st)),Uf=rn.frame),rn.frame>=ch){ch+=an.autoSleep||120;var r=st._first;if((!r||!r._ts)&&an.autoSleep&&rn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||rn.sleep()}}},e}(Vs);cn(Vt.prototype,{_lock:0,_hasPause:0,_forcing:0});var uM=function(e,t,n,i,r,s,a){var l=new Yt(this._pt,e,t,0,1,hd,null,r),c=0,u=0,h,f,d,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ks(i)),s&&(y=[n,i],s(y,e,t),n=y[0],i=y[1]),f=n.match(Ha)||[];h=Ha.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?zr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Ha.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Lf.test(i)||p)&&(l.e=0),this._pt=l,l},sc=function(e,t,n,i,r,s,a,l,c,u){ut(i)&&(i=i(r||0,e,s));var h=e[t],f=n!=="get"?n:ut(h)?c?e[t.indexOf("set")||!ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=ut(h)?c?mM:cd:ac,_;if(Et(i)&&(~i.indexOf("random(")&&(i=ks(i)),i.charAt(1)==="="&&(_=zr(f,i)+(Ut(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Sl)return!isNaN(f*i)&&i!==""?(_=new Yt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?_M:ud,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&ec(t,i),uM.call(this,e,t,f,i,d,l||an.stringFilter,c))},hM=function(e,t,n,i,r){if(ut(e)&&(e=bs(e,r,t,n,i)),!Bn(e)||e.style&&e.nodeType||Nt(e)||Cf(e))return Et(e)?bs(e,r,t,n,i):e;var s={},a;for(a in e)s[a]=bs(e[a],r,t,n,i);return s},od=function(e,t,n,i,r,s){var a,l,c,u;if(tn[e]&&(a=new tn[e]).init(r,a.rawVars?t[e]:hM(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Yt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Ir))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},pi,Sl,oc=function o(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Kl,v=e.timeline,M,w,A,E,S,b,N,U,D,O,z,G,K;if(v&&(!f||!r)&&(r="none"),e._ease=qi(r,jr.ease),e._yEase=h?nd(qi(h===!0?r:h,jr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(U=m[0]?Wi(m[0]).harness:0,G=U&&i[U.prop],M=Fo(i,tc),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Co:ky),g._lazy=0),s){if(bi(e._startAt=vt.set(m,cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qt(l),startAt:null,delay:0,onUpdate:c&&function(){return sn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rt||!a&&!d)&&e._startAt.revert(Co),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),A=cn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&qt(l),immediateRender:a,stagger:0,parent:p},M),G&&(A[U.prop]=G),bi(e._startAt=vt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rt?e._startAt.revert(Co):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,et,et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&qt(l)||l&&!_,w=0;w<m.length;w++){if(S=m[w],N=S._gsap||ic(m)[w]._gsap,e._ptLookup[w]=O={},gl[N.id]&&xi.length&&No(),z=y===m?w:y.indexOf(S),U&&(D=new U).init(S,G||M,e,z,y)!==!1&&(e._pt=E=new Yt(e._pt,S,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(X){O[X]=E}),D.priority&&(b=1)),!U||G)for(A in M)tn[A]&&(D=od(A,M,e,z,S,y))?D.priority&&(b=1):O[A]=E=sc.call(e,S,A,"get",M[A],z,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(pi=e,st.killTweensOf(S,O,e.globalTime(t)),K=!e.parent,pi=0),e._pt&&l&&(gl[N.id]=1)}b&&fd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&v.render(xn,!0,!0)},fM=function(e,t,n,i,r,s,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Sl=1,e.vars[t]="+=0",oc(e,a),Sl=0,l?Fs(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+s*u.c,u.c=n-u.s,h.e&&(h.e=mt(n)+Ut(h.e)),h.b&&(h.b=u.s+Ut(h.b))},dM=function(e,t){var n=e[0]?Wi(e[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return t;r=Yr({},t);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},pM=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,a;if(Nt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:r})},bs=function(e,t,n,i,r){return ut(e)?e.call(t,n,i,r):Et(e)&&~e.indexOf("random(")?ks(e):e},ad=nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ld={};jt(ad+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return ld[o]=1});var vt=function(o){Ef(e,o);function e(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:Ms(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||st,x=(Nt(n)||Cf(n)?Qn(n[0]):"length"in i)?[n]:yn(n),v,M,w,A,E,S,b,N;if(a._targets=x.length?ic(x):Fs("GSAP target "+n+" not found. https://gsap.com",!an.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||wo(c)||wo(u)){if(i=a.vars,v=a.timeline=new Vt({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Zn(a),v._start=0,f||wo(c)||wo(u)){if(A=x.length,b=f&&qf(f),Bn(f))for(E in f)~ad.indexOf(E)&&(N||(N={}),N[E]=f[E]);for(M=0;M<A;M++)w=Fo(i,ld),w.stagger=0,p&&(w.yoyoEase=p),N&&Yr(w,N),S=x[M],w.duration=+bs(c,Zn(a),M,S,x),w.delay=(+bs(u,Zn(a),M,S,x)||0)-a._delay,!f&&A===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(S,w,b?b(M,S,x):0),v._ease=qe.none;v.duration()?c=u=0:a.timeline=0}else if(_){Ms(cn(v.vars.defaults,{ease:"none"})),v._ease=qi(_.ease||i.ease||"none");var U=0,D,O,z;if(Nt(_))_.forEach(function(G){return v.to(x,G,">")}),v.duration();else{w={};for(E in _)E==="ease"||E==="easeEach"||pM(E,_[E],w,_.easeEach);for(E in w)for(D=w[E].sort(function(G,K){return G.t-K.t}),U=0,M=0;M<D.length;M++)O=D[M],z={ease:O.e,duration:(O.t-(M?D[M-1].t:0))/100*c},z[E]=O.v,v.to(x,z,U),U+=z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Kl&&(pi=Zn(a),st.killTweensOf(x),pi=0),Nn(y,Zn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===xt(y._time)&&qt(h)&&Xy(Zn(a))&&y.data!=="nested")&&(a._tTime=-et,a.render(Math.max(0,-u)||0)),m&&Gf(Zn(a),m),a}var t=e.prototype;return t.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-et&&!u?l:i<et?0:i,f,d,_,g,m,p,y,x,v;if(!c)jy(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,s);if(f=xt(h%g),h===l?(_=this._repeat,f=c):(m=xt(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,f=c-f),m=Zr(this._tTime,g),f===a&&!s&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(x&&this._yEase&&id(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(xt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Hf(this,u?i:f,s,r,h))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&h&&!r&&!m&&(sn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&_l(this,i,r,s),sn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&_l(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&bi(this,1),!r&&!(u&&!a)&&(h||a||p)&&(sn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,a,l){Bs||rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||oc(this,c),u=this._ease(c/this._dur),fM(this,i,r,s,a,u,c,l)?this.resetTo(i,r,s,a,1):(Qo(this,0),this.parent||Bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ms(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,pi&&pi.vars.overwrite!==!0)._first||ms(this),this.parent&&s!==this.timeline.totalDuration()&&Kr(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?yn(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!r||r==="all")&&Hy(a,l))return r==="all"&&(this._pt=0),ms(this);for(h=this._op=this._op||[],r!=="all"&&(Et(r)&&(g={},jt(r,function(y){return g[y]=1}),r=g),r=dM(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(h[p]=r,_=f,d={}):(d=h[p]=h[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Jo(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ms(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ss(1,arguments)},e.delayedCall=function(i,r,s,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,r,s){return Ss(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return st.killTweensOf(i,r,s)},e}(Vs);cn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jt("staggerTo,staggerFrom,staggerFromTo",function(o){vt[o]=function(){var e=new Vt,t=xl.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var ac=function(e,t,n){return e[t]=n},cd=function(e,t,n){return e[t](n)},mM=function(e,t,n,i){return e[t](i.fp,n)},gM=function(e,t,n){return e.setAttribute(t,n)},lc=function(e,t){return ut(e[t])?cd:Jl(e[t])&&e.setAttribute?gM:ac},ud=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_M=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},cc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vM=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},xM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Jo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},yM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},fd=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},Yt=function(){function o(t,n,i,r,s,a,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||ud,this.d=l||this,this.set=c||ac,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=yM,this.m=n,this.mt=r,this.tween=i},o}();jt(nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return tc[o]=1});ln.TweenMax=ln.TweenLite=vt;ln.TimelineLite=ln.TimelineMax=Vt;st=new Vt({sortChildren:!1,defaults:jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=td;var ji=[],Lo={},MM=[],mh=0,SM=0,Ya=function(e){return(Lo[e]||MM).map(function(t){return t()})},bl=function(){var e=Date.now(),t=[];e-mh>2&&(Ya("matchMediaInit"),ji.forEach(function(n){var i=n.queries,r=n.conditions,s,a,l,c;for(a in i)s=On.matchMedia(i[a]).matches,s&&(l=1),s!==r[a]&&(r[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Ya("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mh=e,Ya("matchMedia"))},dd=function(){function o(t,n){this.selector=n&&yl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=SM++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){ut(n)&&(r=i,i=n,n=ut);var s=this,a=function(){var c=it,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=yl(r)),it=s,h=i.apply(s,arguments),ut(h)&&s._r.push(h),it=c,s.selector=u,s.isReverted=!1,h};return s.last=a,n===ut?a(s,function(l){return s.add(null,l)}):n?s[n]=a:a},e.ignore=function(n){var i=it;it=null,n(this),it=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Vt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof vt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var s=ji.length;s--;)ji[s].id===this.id&&ji.splice(s,1)},e.revert=function(n){this.kill(n||{})},o}(),bM=function(){function o(t){this.contexts=[],this.scope=t,it&&it.data.push(this)}var e=o.prototype;return e.add=function(n,i,r){Bn(n)||(n={matches:n});var s=new dd(0,r||this.scope),a=s.conditions={},l,c,u;it&&!s.selector&&(s.selector=it.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=On.matchMedia(n[c]),l&&(ji.indexOf(s)<0&&ji.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(bl):l.addEventListener("change",bl)));return u&&i(s,function(h){return s.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return $f(i)})},timeline:function(e){return new Vt(e)},getTweensOf:function(e,t){return st.getTweensOf(e,t)},getProperty:function(e,t,n,i){Et(e)&&(e=yn(e)[0]);var r=Wi(e||{}).get,s=n?kf:zf;return n==="native"&&(n=""),e&&(t?s((tn[t]&&tn[t].get||r)(e,t,n,i)):function(a,l,c){return s((tn[a]&&tn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=yn(e),e.length>1){var i=e.map(function(u){return Kt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=tn[t],a=Wi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;Ir._pt=0,h.init(e,n?u+n:u,Ir,0,[e]),h.render(1,h),Ir._pt&&cc(1,Ir)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Kt.to(e,cn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return st.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qi(e.ease,jr.ease)),uh(jr,e||{})},config:function(e){return uh(an,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!tn[a]&&!ln[a]&&Fs(t+" effect requires "+a+" plugin.")}),Wa[t]=function(a,l,c){return n(yn(a),cn(l||{},r),c)},s&&(Vt.prototype[t]=function(a,l,c){return this.add(Wa[t](a,Bn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=qi(t)},parseEase:function(e,t){return arguments.length?qi(e,t):qe},getById:function(e){return st.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vt(e),i,r;for(n.smoothChildTiming=qt(e.smoothChildTiming),st.remove(n),n._dp=0,n._time=n._tTime=st._time,i=st._first;i;)r=i._next,(t||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&Nn(n,i,i._start-i._delay),i=r;return Nn(st,n,0),n},context:function(e,t){return e?new dd(e,t):it},matchMedia:function(e){return new bM(e)},matchMediaRefresh:function(){return ji.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bl()},addEventListener:function(e,t){var n=Lo[e]||(Lo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Lo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:tM,wrapYoyo:nM,distribute:qf,random:Yf,snap:jf,normalize:eM,getUnit:Ut,clamp:Ky,splitColor:Qf,toArray:yn,selector:yl,mapRange:Kf,pipe:$y,unitize:Qy,interpolate:iM,shuffle:Xf},install:If,effects:Wa,ticker:rn,updateRoot:Vt.updateRoot,plugins:tn,globalTimeline:st,core:{PropTween:Yt,globals:Of,Tween:vt,Timeline:Vt,Animation:Vs,getCache:Wi,_removeLinkedListItem:Jo,reverting:function(){return Rt},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return Kl=e}}};jt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ko[o]=vt[o]});rn.add(Vt.updateRoot);Ir=ko.to({},{duration:0});var wM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},TM=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=wM(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Za=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(Et(r)&&(l={},jt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}TM(a,r)}}}},Kt=ko.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Rt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Za("roundProps",Ml),Za("modifiers"),Za("snap",jf))||ko;vt.version=Vt.version=Kt.version="3.13.0";Df=1;$l()&&Jr();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gh,mi,kr,uc,Gi,_h,hc,EM=function(){return typeof window<"u"},ei={},ki=180/Math.PI,Br=Math.PI/180,Er=Math.atan2,vh=1e8,fc=/([A-Z])/g,AM=/(left|right|width|margin|padding|x)/i,CM=/[\s,\(]\S/,Fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},PM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},RM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},md=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},DM=function(e,t,n){return e.style[t]=n},IM=function(e,t,n){return e.style.setProperty(t,n)},OM=function(e,t,n){return e._gsap[t]=n},UM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},NM=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},FM=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},at="transform",Zt=at+"Origin",zM=function o(e,t){var n=this,i=this.target,r=i.style,s=i._gsap;if(e in ei&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Fn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Kn(i,a)}):this.tfm[e]=s.x?s[e]:Kn(i,e),e===Zt&&(this.tfm.zOrigin=s.zOrigin);else return Fn.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(at)>=0)return;s.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Zt,t,"")),e=at}(r||t)&&this.props.push(e,t,r[e])},gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(fc,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=hc(),(!r||!r.isStart)&&!n[at]&&(gd(n),i.zOrigin&&n[Zt]&&(n[Zt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_d=function(e,t){var n={target:e,props:[],revert:kM,save:zM};return e._gsap||Kt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},vd,Tl=function(e,t){var n=mi.createElementNS?mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mi.createElement(e);return n&&n.style?n:mi.createElement(e)},Mn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(fc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,$r(t)||t,1)||""},xh="O,Moz,ms,Ms,Webkit".split(","),$r=function(e,t,n){var i=t||Gi,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(xh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?xh[s]:"")+e},El=function(){EM()&&window.document&&(gh=window,mi=gh.document,kr=mi.documentElement,Gi=Tl("div")||{style:{}},Tl("div"),at=$r(at),Zt=at+"Origin",Gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vd=!!$r("perspective"),hc=Kt.core.reverting,uc=1)},yh=function(e){var t=e.ownerSVGElement,n=Tl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),kr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),kr.removeChild(n),r},Mh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},xd=function(e){var t,n;try{t=e.getBBox()}catch{t=yh(e),n=1}return t&&(t.width||t.height)||n||(t=yh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mh(e,["x","cx","x1"])||0,y:+Mh(e,["y","cy","y1"])||0,width:0,height:0}:t},yd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xd(e))},er=function(e,t){if(t){var n=e.style,i;t in ei&&t!==Zt&&(t=at),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(fc,"-$1").toLowerCase())):n.removeAttribute(t)}},gi=function(e,t,n,i,r,s){var a=new Yt(e._pt,t,n,0,1,s?md:pd);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Sh={deg:1,rad:1,turn:1},BM={grid:1,flex:1},wi=function o(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=Gi.style,l=AM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===s||!r||Sh[i]||Sh[s])return r;if(s!=="px"&&!f&&(r=o(e,t,n,"px")),p=e.getCTM&&yd(e),(d||s==="%")&&(ei[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],mt(d?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(f?s:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===mi||!g.appendChild)&&(g=mi.body),m=g._gsap,m&&d&&m.width&&l&&m.time===rn.time&&!m.uncache)return mt(r/m.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+i,_=e[u],y?e.style[t]=y:er(e,t)}else(d||s==="%")&&!BM[Mn(g,"display")]&&(a.position=Mn(e,"position")),g===e&&(a.position="static"),g.appendChild(Gi),_=Gi[u],g.removeChild(Gi),a.position="absolute";return l&&d&&(m=Wi(g),m.time=rn.time,m.width=g[u]),mt(f?_*r/h:_&&r?h/_*r:0)},Kn=function(e,t,n,i){var r;return uc||El(),t in Fn&&t!=="transform"&&(t=Fn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ei[t]&&t!=="transform"?(r=Hs(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Vo(Mn(e,Zt))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Bo[t]&&Bo[t](e,t,n)||Mn(e,t)||Nf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?wi(e,t,r,n)+n:r},VM=function(e,t,n,i){if(!n||n==="none"){var r=$r(t,e,1),s=r&&Mn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Mn(e,"borderTopColor"))}var a=new Yt(this._pt,e.style,t,0,1,hd),l=0,c=0,u,h,f,d,_,g,m,p,y,x,v,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Mn(e,t)||i,g?e.style[t]=g:er(e,t)),u=[n,i],td(u),n=u[0],i=u[1],f=n.match(Dr)||[],M=i.match(Dr)||[],M.length){for(;h=Dr.exec(i);)m=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=zr(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=Dr.lastIndex-x.length,x||(x=x||an.units[t]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=wi(e,t,g,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?md:pd;return Lf.test(i)&&(a.e=0),this._pt=a,a},bh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},GM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=bh[n]||n,t[1]=bh[i]||i,t.join(" ")},HM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ei[a]&&(l=1,a=a==="transformOrigin"?Zt:at),er(n,a);l&&(er(n,at),s&&(s.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Hs(n,1),s.uncache=1,gd(i)))}},Bo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new Yt(e._pt,t,n,0,0,HM);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Gs=[1,0,0,1,0,0],Md={},Sd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wh=function(e){var t=Mn(e,at);return Sd(t)?Gs:t.substr(7).match(Pf).map(mt)},dc=function(e,t){var n=e._gsap||Wi(e),i=e.style,r=wh(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Gs:r):(r===Gs&&!e.offsetParent&&e!==kr&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,kr.appendChild(e)),r=wh(e),l?i.display=l:er(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):kr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Al=function(e,t,n,i,r,s){var a=e._gsap,l=r||dc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,w,A,E,S;n?l!==Gs&&(A=d*m-_*g)&&(E=v*(m/A)+M*(-g/A)+(g*y-m*p)/A,S=v*(-_/A)+M*(d/A)-(d*y-_*p)/A,v=E,M=S):(w=xd(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),M=w.y+(~(x[1]||x[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&a.smooth?(p=v-c,y=M-u,a.xOffset=h+(p*d+y*g)-p,a.yOffset=f+(p*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Zt]="0px 0px",s&&(gi(s,a,"xOrigin",c,v),gi(s,a,"yOrigin",u,M),gi(s,a,"xOffset",h,a.xOffset),gi(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},Hs=function(e,t){var n=e._gsap||new sd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=Mn(e,Zt)||"0",u,h,f,d,_,g,m,p,y,x,v,M,w,A,E,S,b,N,U,D,O,z,G,K,X,ie,Q,xe,ne,W,j,ce;return u=h=f=g=m=p=y=x=v=0,d=_=1,n.svg=!!(e.getCTM&&yd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[at]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[at]!=="none"?l[at]:"")),i.scale=i.rotate=i.translate="none"),A=dc(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Al(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,w=n.yOrigin||0,A!==Gs&&(N=A[0],U=A[1],D=A[2],O=A[3],u=z=A[4],h=G=A[5],A.length===6?(d=Math.sqrt(N*N+U*U),_=Math.sqrt(O*O+D*D),g=N||U?Er(U,N)*ki:0,y=D||O?Er(D,O)*ki+g:0,y&&(_*=Math.abs(Math.cos(y*Br))),n.svg&&(u-=M-(M*N+w*D),h-=w-(M*U+w*O))):(ce=A[6],W=A[7],Q=A[8],xe=A[9],ne=A[10],j=A[11],u=A[12],h=A[13],f=A[14],E=Er(ce,ne),m=E*ki,E&&(S=Math.cos(-E),b=Math.sin(-E),K=z*S+Q*b,X=G*S+xe*b,ie=ce*S+ne*b,Q=z*-b+Q*S,xe=G*-b+xe*S,ne=ce*-b+ne*S,j=W*-b+j*S,z=K,G=X,ce=ie),E=Er(-D,ne),p=E*ki,E&&(S=Math.cos(-E),b=Math.sin(-E),K=N*S-Q*b,X=U*S-xe*b,ie=D*S-ne*b,j=O*b+j*S,N=K,U=X,D=ie),E=Er(U,N),g=E*ki,E&&(S=Math.cos(E),b=Math.sin(E),K=N*S+U*b,X=z*S+G*b,U=U*S-N*b,G=G*S-z*b,N=K,z=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=mt(Math.sqrt(N*N+U*U+D*D)),_=mt(Math.sqrt(G*G+ce*ce)),E=Er(z,G),y=Math.abs(E)>2e-4?E*ki:0,v=j?1/(j<0?-j:j):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sd(Mn(e,at)),K&&e.setAttribute("transform",K))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=mt(d),n.scaleY=mt(_),n.rotation=mt(g)+a,n.rotationX=mt(m)+a,n.rotationY=mt(p)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=v+s,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Zt]=Vo(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?XM:vd?bd:WM,n.uncache=0,n},Vo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ka=function(e,t,n){var i=Ut(t);return mt(parseFloat(t)+parseFloat(wi(e,"x",n+"px",i)))+i},WM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,bd(e,t)},Oi="0deg",fs="0px",Ui=") ",bd=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",M=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Oi||u!==Oi)){var w=parseFloat(u)*Br,A=Math.sin(w),E=Math.cos(w),S;w=parseFloat(h)*Br,S=Math.cos(w),s=Ka(y,s,A*S*-x),a=Ka(y,a,-Math.sin(w)*-x),l=Ka(y,l,E*S*-x+x)}m!==fs&&(v+="perspective("+m+Ui),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(M||s!==fs||a!==fs||l!==fs)&&(v+=l!==fs||M?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Ui),c!==Oi&&(v+="rotate("+c+Ui),u!==Oi&&(v+="rotateY("+u+Ui),h!==Oi&&(v+="rotateX("+h+Ui),(f!==Oi||d!==Oi)&&(v+="skew("+f+", "+d+Ui),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ui),y.style[at]=v||"translate(0, 0)"},XM=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(s),v=parseFloat(a),M,w,A,E,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Br,c*=Br,M=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,E=Math.cos(l-c)*f,c&&(u*=Br,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,E*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),M*=S,w*=S)),M=mt(M),w=mt(w),A=mt(A),E=mt(E)):(M=h,E=f,w=A=0),(x&&!~(s+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=wi(d,"x",s,"px"),v=wi(d,"y",a,"px")),(_||g||m||p)&&(x=mt(x+_-(_*M+g*A)+m),v=mt(v+g-(_*w+g*E)+p)),(i||r)&&(S=d.getBBox(),x=mt(x+i/100*S.width),v=mt(v+r/100*S.height)),S="matrix("+M+","+w+","+A+","+E+","+x+","+v+")",d.setAttribute("transform",S),y&&(d.style[at]=S)},qM=function(e,t,n,i,r){var s=360,a=Et(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ki:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*vh)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*vh)%s-~~(c/s)*s)),e._pt=f=new Yt(e._pt,t,n,i,c,PM),f.e=u,f.u="deg",e._props.push(n),f},Th=function(e,t){for(var n in t)e[n]=t[n];return e},jM=function(e,t,n){var i=Th({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[at]=t,a=Hs(n,1),er(n,at),n.setAttribute("transform",c)):(c=getComputedStyle(n)[at],s[at]=t,a=Hs(n,1),s[at]=c);for(l in ei)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=Ut(c),_=Ut(u),h=d!==_?wi(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Yt(e._pt,a,l,h,f-h,wl),e._pt.u=_||0,e._props.push(l));Th(a,i)};jt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?o+a:"border"+a+o});Bo[e>1?"border"+o:o]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(_){return Kn(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var wd={name:"css",register:El,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,y,x,v,M,w,A,E;uc||El(),this.styles=this.styles||_d(e),E=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(tn[g]&&od(g,t,n,i,e,r)))){if(d=typeof u,_=Bo[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ks(u)),_)_(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",yi.lastIndex=0,yi.test(c)||(m=Ut(c),p=Ut(u)),p?m!==p&&(c=wi(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,g),s.push(g),E.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Et(c)&&~c.indexOf("random(")&&(c=ks(c)),Ut(c+"")||c==="auto"||(c+=an.units[g]||Ut(Kn(e,g))||""),(c+"").charAt(1)==="="&&(c=Kn(e,g))):c=Kn(e,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in Fn&&(g==="autoAlpha"&&(f===1&&Kn(e,"visibility")==="hidden"&&h&&(f=0),E.push("visibility",0,a.visibility),gi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Fn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ei,x){if(this.styles.save(g),d==="string"&&u.substring(0,6)==="var(--"&&(u=Mn(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(M=e._gsap,M.renderTransform&&!t.parseTransform||Hs(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new Yt(this._pt,a,at,0,1,M.renderTransform,M,0,-1),v.dep=1),g==="scale")this._pt=new Yt(this._pt,M,"scaleY",M.scaleY,(y?zr(M.scaleY,y+h):h)-M.scaleY||0,wl),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){E.push(Zt,0,a[Zt]),u=GM(u),M.svg?Al(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&gi(this,M,"zOrigin",M.zOrigin,p),gi(this,a,g,Vo(c),Vo(u)));continue}else if(g==="svgOrigin"){Al(e,u,1,w,0,this);continue}else if(g in Md){qM(this,M,g,f,y?zr(f,y+u):u);continue}else if(g==="smoothOrigin"){gi(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){jM(this,u,e);continue}}else g in a||(g=$r(g)||g);if(x||(h||h===0)&&(f||f===0)&&!CM.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=Ut(u)||(g in an.units?an.units[g]:m),m!==p&&(f=wi(e,g,c,p)),this._pt=new Yt(this._pt,x?M:a,g,f,(y?zr(f,y+h):h)-f,!x&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?RM:wl),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=LM);else if(g in a)VM.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,i,r);else if(g!=="parseTransform"){ec(g,u);continue}x||(g in a?E.push(g,0,a[g]):typeof e[g]=="function"?E.push(g,2,e[g]()):E.push(g,1,c||e[g])),s.push(g)}}A&&fd(this)},render:function(e,t){if(t.tween._time||!hc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Kn,aliases:Fn,getSetter:function(e,t,n){var i=Fn[t];return i&&i.indexOf(",")<0&&(t=i),t in ei&&t!==Zt&&(e._gsap.x||Kn(e,"x"))?n&&_h===n?t==="scale"?UM:OM:(_h=n||{})&&(t==="scale"?NM:FM):e.style&&!Jl(e.style[t])?DM:~t.indexOf("-")?IM:lc(e,t)},core:{_removeProperty:er,_getMatrix:dc}};Kt.utils.checkPrefix=$r;Kt.core.getStyleSaver=_d;(function(o,e,t,n){var i=jt(o+","+e+","+t,function(r){ei[r]=1});jt(e,function(r){an.units[r]="deg",Md[r]=1}),Fn[i[13]]=o+","+e,jt(n,function(r){var s=r.split(":");Fn[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){an.units[o]="px"});Kt.registerPlugin(wd);var Gt=Kt.registerPlugin(wd)||Kt;Gt.core.Tween;class rr{constructor(e,t,n={size:1.5,number:.5}){this.mesh=e,e.castShadow=!0,e.receiveShadow=!0,this.resolution=t,this.option=n}get position(){return this.mesh.position}getIndexByCoord(){const{x:e,y:t}=this.resolution;return this.position.z*e+this.position.x}in(){Gt.from(this.mesh.scale,{duration:1,x:0,y:0,z:0,ease:`elastic.out(${this.option.size}, ${this.option.number})`})}out(){}}const YM=new Tf(.9,.9,.9,5,.1),Td=new on({color:16729866}),ZM=new P(0,0,-1),KM=new P(0,0,1),JM=new P(-1,0,0),Ja=new P(1,0,0);class $M extends Ti{constructor({scene:t,resolution:n=new ae(10,10),color:i,mouthColor:r}){super();or(this,"direction",Ja);or(this,"indexes",[]);or(this,"speedInterval",240);this.scene=t,this.resolution=n,this.mouthColor=r,i&&Td.color.set(i),this.init()}get head(){return this.body.head}get end(){return this.body.end}createHeadMesh(){const t=this.body.head.data.mesh,n=new lt(new Os(.2,10,10),new on({color:16777215}));n.scale.x=.1,n.position.x=.5,n.position.y=.12,n.position.z=-.1;let i=new lt(new Os(.22,10,10),new on({color:3355443}));i.scale.set(1,.6,.6),i.position.x+=.05,n.add(i);const r=n.clone();r.position.x=-.5,r.rotation.y=Math.PI;const s=new lt(new Tf(1.05,.1,.6,5,.1),new on({color:this.mouthColor}));s.rotation.x=-Math.PI*.07,s.position.z=.23,s.position.y=-.19,this.mouth=s,t.add(r,n,s),t.lookAt(t.position.clone().add(this.direction))}init(){this.direction=Ja,this.iMoving=null;const t=new lh(new Eh(this.resolution));t.data.mesh.position.x=this.resolution.x/2,t.data.mesh.position.z=this.resolution.y/2,this.body=new Iy(t),this.createHeadMesh(),this.indexes.push(this.head.data.getIndexByCoord());for(let n=0;n<3;n++){const i=this.end.data.mesh.position.clone();i.sub(this.direction),this.addTailNode(),this.end.data.mesh.position.copy(i),this.indexes.push(this.end.data.getIndexByCoord())}t.data.in(),this.scene.add(t.data.mesh)}setDirection(t){let n;switch(t){case"ArrowUp":case"KeyW":n=ZM;break;case"ArrowDown":case"KeyS":n=KM;break;case"ArrowLeft":case"KeyA":n=JM;break;case"ArrowRight":case"KeyD":n=Ja;break;default:return}this.direction.dot(n)===0&&(this.newDirection=n)}update(){this.newDirection&&(this.direction=this.newDirection,this.newDirection=null);let t=this.end;for(this.end.data.candy&&(this.end.data.candy=null,this.end.data.mesh.scale.setScalar(1),this.addTailNode());t.prev;){const r=t.prev.data.candy;r&&(t.data.candy=r,t.data.mesh.scale.setScalar(1.15),t.prev.data.candy=null,t.prev.data.mesh.scale.setScalar(1));const s=t.prev.data.mesh.position;t.data.mesh.position.copy(s),t=t.prev}const n=t.data.mesh.position;n.add(this.direction);const i=this.body.head.data.mesh;i.lookAt(i.position.clone().add(this.direction)),n.z<0?n.z=this.resolution.y-1:n.z>this.resolution.y-1&&(n.z=0),n.x<0?n.x=this.resolution.x-1:n.x>this.resolution.x-1&&(n.x=0),this.updateIndexes(),this.dispatchEvent({type:"updated"})}die(){let t=this.body.head;do this.scene.remove(t.data.mesh),t=t.next;while(t);this.init(),this.addEventListener({type:"die"})}checkSelfCollision(){const t=this.indexes.pop(),n=this.indexes.includes(t);return this.indexes.push(t),n}checkEntitiesCollision(t){const n=this.indexes.at(-1);return!!t.find(r=>r.getIndexByCoord()===n)}updateIndexes(){this.indexes=[];let t=this.body.end;for(;t;)this.indexes.push(t.data.getIndexByCoord()),t=t.prev}addTailNode(t){const n=new lh(new Eh(this.resolution));t?n.data.mesh.position.copy(t):n.data.mesh.position.copy(this.end.data.mesh.position),this.body.addNode(n),n.data.in(),this.scene.add(n.data.mesh)}}class Eh extends rr{constructor(e){const t=new lt(YM,Td);super(t,e)}}const QM=new Os(.3,20,20),Ah=new on({color:6376413});class eS extends rr{constructor(e,t){const n=new lt(QM,Ah);super(n,e),t&&Ah.color.set(t),this.points=Math.floor(Math.random()*3)+1,this.mesh.scale.setScalar(.5+this.points*.5/3)}}const tS=new Yo(.5),Ch=new on({color:11316396,flatShading:!0});class ea extends rr{constructor(e,t){const n=new lt(tS,Ch);n.scale.set(Math.random()*.5+.5,.5+Math.random()**2*1.9,1),n.rotation.y=Math.random()*Math.PI*2,n.rotation.x=Math.random()*Math.PI*.1,n.rotation.order="YXZ",n.position.y=-.5,t&&Ch.color.set(t),super(n,e)}}const pc=new Yo(.3);pc.rotateX(Math.random()*Math.PI*2);pc.scale(1,6,1);const Ph=new on({flatShading:!0,color:10670345});class mc extends rr{constructor(e,t){const n=new lt(pc,Ph);n.scale.setScalar(.6+Math.random()*.6),n.rotation.y=Math.random()*Math.PI*2,t&&Ph.color.set(t),super(n,e)}}const Ne=new ae(20,20),nS=new wf(16777215,.6),Ln=new bf(16777215,.7);Ln.position.set(20,20,18);Ln.target.position.set(Ne.x/2,0,Ne.y/2);Ln.shadow.mapSize.set(1024,1024);Ln.shadow.radius=7;Ln.shadow.blurSamples=20;Ln.shadow.camera.top=30;Ln.shadow.camera.bottom=-30;Ln.shadow.camera.left=-30;Ln.shadow.camera.right=30;Ln.castShadow=!0;const iS=[Ln,nS],rS=new nr(1,1,1),sS=new Hl(.7,1,4),Lh=new on({flatShading:!0,color:9127187}),oS=new on({flatShading:!0,color:4071195});class Ed extends rr{constructor(e,t){const n=new lt(rS,Lh);n.scale.set(2,2,2);const i=new lt(sS,oS);i.position.y=2,i.scale.set(2,2,2),i.rotation.y=Math.random()*Math.PI*2,t&&Lh.color.set(t);const r=new di;r.add(n),r.add(i),super(r,e)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Rh=function(o){return URL.createObjectURL(new Blob([o],{type:"text/javascript"}))};try{URL.revokeObjectURL(Rh(""))}catch{Rh=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var gn=Uint8Array,_i=Uint16Array,Cl=Uint32Array,Ad=new gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cd=new gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),aS=new gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pd=function(o,e){for(var t=new _i(31),n=0;n<31;++n)t[n]=e+=1<<o[n-1];for(var i=new Cl(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Ld=Pd(Ad,2),Rd=Ld[0],lS=Ld[1];Rd[28]=258,lS[258]=28;var cS=Pd(Cd,0),uS=cS[0],Pl=new _i(32768);for(var nt=0;nt<32768;++nt){var ui=(nt&43690)>>>1|(nt&21845)<<1;ui=(ui&52428)>>>2|(ui&13107)<<2,ui=(ui&61680)>>>4|(ui&3855)<<4,Pl[nt]=((ui&65280)>>>8|(ui&255)<<8)>>>1}var ws=function(o,e,t){for(var n=o.length,i=0,r=new _i(e);i<n;++i)++r[o[i]-1];var s=new _i(e);for(i=0;i<e;++i)s[i]=s[i-1]+r[i-1]<<1;var a;if(t){a=new _i(1<<e);var l=15-e;for(i=0;i<n;++i)if(o[i])for(var c=i<<4|o[i],u=e-o[i],h=s[o[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Pl[h]>>>l]=c}else for(a=new _i(n),i=0;i<n;++i)o[i]&&(a[i]=Pl[s[o[i]-1]++]>>>15-o[i]);return a},Ys=new gn(288);for(var nt=0;nt<144;++nt)Ys[nt]=8;for(var nt=144;nt<256;++nt)Ys[nt]=9;for(var nt=256;nt<280;++nt)Ys[nt]=7;for(var nt=280;nt<288;++nt)Ys[nt]=8;var Dd=new gn(32);for(var nt=0;nt<32;++nt)Dd[nt]=5;var hS=ws(Ys,9,1),fS=ws(Dd,5,1),$a=function(o){for(var e=o[0],t=1;t<o.length;++t)o[t]>e&&(e=o[t]);return e},En=function(o,e,t){var n=e/8|0;return(o[n]|o[n+1]<<8)>>(e&7)&t},Qa=function(o,e){var t=e/8|0;return(o[t]|o[t+1]<<8|o[t+2]<<16)>>(e&7)},dS=function(o){return(o/8|0)+(o&7&&1)},pS=function(o,e,t){(e==null||e<0)&&(e=0),(t==null||t>o.length)&&(t=o.length);var n=new(o instanceof _i?_i:o instanceof Cl?Cl:gn)(t-e);return n.set(o.subarray(e,t)),n},mS=function(o,e,t){var n=o.length;if(!n||t&&!t.l&&n<5)return e||new gn(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new gn(n*3));var s=function(pe){var B=e.length;if(pe>B){var Ee=new gn(Math.max(B*2,pe));Ee.set(e),e=Ee}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,d=t.n,_=n*8;do{if(!u){t.f=a=En(o,l,1);var g=En(o,l+1,3);if(l+=3,g)if(g==1)u=hS,h=fS,f=9,d=5;else if(g==2){var x=En(o,l,31)+257,v=En(o,l+10,15)+4,M=x+En(o,l+5,31)+1;l+=14;for(var w=new gn(M),A=new gn(19),E=0;E<v;++E)A[aS[E]]=En(o,l+E*3,7);l+=v*3;for(var S=$a(A),b=(1<<S)-1,N=ws(A,S,1),E=0;E<M;){var U=N[En(o,l,b)];l+=U&15;var m=U>>>4;if(m<16)w[E++]=m;else{var D=0,O=0;for(m==16?(O=3+En(o,l,3),l+=2,D=w[E-1]):m==17?(O=3+En(o,l,7),l+=3):m==18&&(O=11+En(o,l,127),l+=7);O--;)w[E++]=D}}var z=w.subarray(0,x),G=w.subarray(x);f=$a(z),d=$a(G),u=ws(z,f,1),h=ws(G,d,1)}else throw"invalid block type";else{var m=dS(l)+4,p=o[m-4]|o[m-3]<<8,y=m+p;if(y>n){if(r)throw"unexpected EOF";break}i&&s(c+p),e.set(o.subarray(m,y),c),t.b=c+=p,t.p=l=y*8;continue}if(l>_){if(r)throw"unexpected EOF";break}}i&&s(c+131072);for(var K=(1<<f)-1,X=(1<<d)-1,ie=l;;ie=l){var D=u[Qa(o,l)&K],Q=D>>>4;if(l+=D&15,l>_){if(r)throw"unexpected EOF";break}if(!D)throw"invalid length/literal";if(Q<256)e[c++]=Q;else if(Q==256){ie=l,u=null;break}else{var xe=Q-254;if(Q>264){var E=Q-257,ne=Ad[E];xe=En(o,l,(1<<ne)-1)+Rd[E],l+=ne}var W=h[Qa(o,l)&X],j=W>>>4;if(!W)throw"invalid distance";l+=W&15;var G=uS[j];if(j>3){var ne=Cd[j];G+=Qa(o,l)&(1<<ne)-1,l+=ne}if(l>_){if(r)throw"unexpected EOF";break}i&&s(c+131072);for(var ce=c+xe;c<ce;c+=4)e[c]=e[c-G],e[c+1]=e[c+1-G],e[c+2]=e[c+2-G],e[c+3]=e[c+3-G];c=ce}}t.l=u,t.p=ie,t.b=c,u&&(a=1,t.m=f,t.d=h,t.n=d)}while(!a);return c==e.length?e:pS(e,0,c)},gS=new gn(0),_S=function(o){if((o[0]&15)!=8||o[0]>>>4>7||(o[0]<<8|o[1])%31)throw"invalid zlib data";if(o[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function vS(o,e){return mS((_S(o),o.subarray(2,-4)),e)}var xS=typeof TextDecoder<"u"&&new TextDecoder,yS=0;try{xS.decode(gS,{stream:!0}),yS=1}catch{}function Id(o,e,t){const n=t.length-o-1;if(e>=t[n])return n-1;if(e<=t[o])return o;let i=o,r=n,s=Math.floor((i+r)/2);for(;e<t[s]||e>=t[s+1];)e<t[s]?r=s:i=s,s=Math.floor((i+r)/2);return s}function MS(o,e,t,n){const i=[],r=[],s=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[o+1-a],s[a]=n[o+a]-e;let l=0;for(let c=0;c<a;++c){const u=s[c+1],h=r[a-c],f=i[c]/(u+h);i[c]=l+u*f,l=h*f}i[a]=l}return i}function SS(o,e,t,n){const i=Id(o,n,e),r=MS(i,n,o,e),s=new me(0,0,0,0);for(let a=0;a<=o;++a){const l=t[i-o+a],c=r[a],u=l.w*c;s.x+=l.x*u,s.y+=l.y*u,s.z+=l.z*u,s.w+=l.w*c}return s}function bS(o,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const s=[];for(let h=0;h<=n;++h)s[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[o+1-h],c[h]=i[o+h]-e;let f=0;for(let d=0;d<h;++d){const _=c[d+1],g=l[h-d];a[h][d]=_+g;const m=a[d][h-1]/a[h][d];a[d][h]=f+_*m,f=g*m}a[h][h]=f}for(let h=0;h<=t;++h)s[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const _=[];for(let g=0;g<=t;++g)_[g]=r.slice(0);_[0][0]=1;for(let g=1;g<=n;++g){let m=0;const p=h-g,y=t-g;h>=g&&(_[d][0]=_[f][0]/a[y+1][p],m=_[d][0]*a[p][y]);const x=p>=-1?1:-p,v=h-1<=y?g-1:t-h;for(let w=x;w<=v;++w)_[d][w]=(_[f][w]-_[f][w-1])/a[y+1][p+w],m+=_[d][w]*a[p+w][y];h<=y&&(_[d][g]=-_[f][g-1]/a[y+1][h],m+=_[d][g]*a[h][y]),s[g][h]=m;const M=f;f=d,d=M}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)s[h][f]*=u;u*=t-h}return s}function wS(o,e,t,n,i){const r=i<o?i:o,s=[],a=Id(o,n,e),l=bS(a,n,o,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=r;++u){const h=c[a-o].clone().multiplyScalar(l[u][0]);for(let f=1;f<=o;++f)h.add(c[a-o+f].clone().multiplyScalar(l[u][f]));s[u]=h}for(let u=r+1;u<=i+1;++u)s[u]=new me(0,0,0);return s}function TS(o,e){let t=1;for(let i=2;i<=o;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=o-e;++i)n*=i;return t/n}function ES(o){const e=o.length,t=[],n=[];for(let r=0;r<e;++r){const s=o[r];t[r]=new P(s.x,s.y,s.z),n[r]=s.w}const i=[];for(let r=0;r<e;++r){const s=t[r].clone();for(let a=1;a<=r;++a)s.sub(i[r-a].clone().multiplyScalar(TS(r,a)*n[a]));i[r]=s.divideScalar(n[0])}return i}function AS(o,e,t,n,i){const r=wS(o,e,t,n,i);return ES(r)}class CS extends Pn{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let s=0;s<n.length;++s){const a=n[s];this.controlPoints[s]=new me(a.x,a.y,a.z,a.w)}}getPoint(e,t=new P){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=SS(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new P){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=AS(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let He,pt,Wt;class PS extends qs{constructor(e){super(e)}load(e,t,n,i){const r=this,s=r.path===""?xy.extractUrlBase(e):r.path,a=new Sf(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,s))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(US(e))He=new OS().parse(e);else{const i=Fd(e);if(!NS(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Ih(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Ih(i));He=new IS().parse(i)}const n=new ql(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new LS(n,this.manager).parse(He)}}class LS{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){pt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new RS().parse(i);return this.parseScene(i,r,n),Wt}parseConnections(){const e=new Map;return"Connections"in He&&He.Connections.connections.forEach(function(n){const i=n[0],r=n[1],s=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:s};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:s};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in He.Objects){const n=He.Objects.Video;for(const i in n){const r=n[i],s=parseInt(i);if(e[s]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const s=new Uint8Array(t);return window.URL.createObjectURL(new Blob([s],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in He.Objects){const n=He.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,s=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=s===0?Es:nn,n.wrapT=a===0?Es:nn,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=pt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let s;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),s=new Pt):(l.setPath(this.textureLoader.path),s=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),s=new Pt):s=this.textureLoader.load(n);return this.textureLoader.setPath(i),s}parseMaterials(e){const t=new Map;if("Material"in He.Objects){const n=He.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!pt.has(n))return null;const s=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new ka;break;case"lambert":a=new iy;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new ka;break}return a.setValues(s),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new De().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new De().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new De().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new De().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new De().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new De().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return pt.get(n).children.forEach(function(s){const a=s.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,s.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,s.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,s.ID),i.map!==void 0&&(i.map.encoding=Je);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,s.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,s.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=Je);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,s.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,s.ID),i.envMap!==void 0&&(i.envMap.mapping=Ro,i.envMap.encoding=Je);break;case"SpecularColor":i.specularMap=r.getTexture(t,s.ID),i.specularMap!==void 0&&(i.specularMap.encoding=Je);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,s.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in He.Objects&&t in He.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=pt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in He.Objects){const n=He.Objects.Deformer;for(const i in n){const r=n[i],s=pt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(s,n);a.ID=i,s.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=s.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(s,n),a.id=i,s.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const s={ID:i.ID,indices:[],weights:[],transformLink:new Le().fromArray(r.TransformLink.a)};"Indexes"in r&&(s.indices=r.Indexes.a,s.weights=r.Weights.a),n.push(s)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],s=t[r.ID],a={name:s.attrName,initialWeight:s.DeformPercent,id:s.id,fullWeights:s.FullWeights.a};if(s.attrType!=="BlendShapeChannel")return;a.geoID=pt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Wt=new di;const i=this.parseModels(e.skeletons,t,n),r=He.Objects.Model,s=this;i.forEach(function(l){const c=r[l.ID];s.setLookAtProperties(l,c),pt.get(l.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&Wt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Wt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Ud(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new DS().parse();Wt.children.length===1&&Wt.children[0].isGroup&&(Wt.children[0].animations=a,Wt=Wt.children[0]),Wt.animations=a}parseModels(e,t,n){const i=new Map,r=He.Objects.Model;for(const s in r){const a=parseInt(s),l=r[s],c=pt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new cl;break;case"Null":default:u=new di;break}u.name=l.attrName?Ze.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(s){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===s.ID){const h=r;r=new cl,r.matrixWorld.copy(c.transformLink),r.name=i?Ze.sanitizeNodeName(i):"",r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=He.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new ct;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let s=1e3;n.FarPlane!==void 0&&(s=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Bt(u,c,r,s),h!==null&&t.setFocalLength(h);break;case 1:t=new Ul(-a/2,a/2,l/2,-l/2,r,s);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new ct;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=He.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new ct;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new De().fromArray(n.Color.value).convertSRGBToLinear());let s=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(s=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new rh(r,s,a,l);break;case 1:t=new bf(r,s);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Cn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Cn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new gy(r,s,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new rh(r,s);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,s=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?s=a:a.length>0?s=a[0]:(s=new ka({color:13421772}),a.push(s)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new Sx(r,s),i.normalizeSkinWeights()):i=new lt(r,s),i}createCurve(e,t){const n=e.children.reduce(function(r,s){return t.has(s.ID)&&(r=t.get(s.ID)),r},null),i=new qo({color:3342591,linewidth:1});return new cf(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Nd(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&pt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=He.Objects.Model[i.ID];if("Lcl_Translation"in r){const s=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(s),Wt.add(e.target)):e.lookAt(new P().fromArray(s))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const s=e[r];pt.get(parseInt(s.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;pt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new zl(s.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in He.Objects){const t=He.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Le().fromArray(r.Matrix.a)}):e[i.Node]=new Le().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in He&&"AmbientColor"in He.GlobalSettings){const e=He.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new De(t,n,i).convertSRGBToLinear();Wt.add(new wf(r,1))}}}}class RS{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in He.Objects){const n=He.Objects.Geometry;for(const i in n){const r=pt.get(parseInt(i)),s=this.parseGeometry(r,n[i],e);t.set(parseInt(i),s)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],s=e.parents.map(function(h){return He.Objects.Model[h.ID]});if(s.length===0)return;const a=e.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=s[0],c={};"RotationOrder"in l&&(c.eulerOrder=Nd(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Ud(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new Lt;e.attrName&&(r.name=e.attrName);const s=this.parseGeoNode(e,t),a=this.genBuffers(s),l=new Ke(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new Ke(a.colors,3)),t&&(r.setAttribute("skinIndex",new Il(a.weightsIndices,4)),r.setAttribute("skinWeight",new Ke(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new Xe().getNormalMatrix(i),u=new Ke(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),r.setAttribute(h,new Ke(a.uvs[u],2))}),s.material&&s.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(r.addGroup(u,f-u,c),c=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(s,a){n.weightTable[s]===void 0&&(n.weightTable[s]=[]),n.weightTable[s].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,s=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,_){let g,m=!1;d<0&&(d=d^-1,m=!0);let p=[],y=[];if(s.push(d*3,d*3+1,d*3+2),e.color){const x=To(_,n,d,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(x){y.push(x.weight),p.push(x.id)}),y.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const x=[0,0,0,0],v=[0,0,0,0];y.forEach(function(M,w){let A=M,E=p[w];v.forEach(function(S,b,N){if(A>S){N[b]=A,A=S;const U=x[b];x[b]=E,E=U}})}),p=x,y=v}for(;y.length<4;)y.push(0),p.push(0);for(let x=0;x<4;++x)u.push(y[x]),h.push(p[x])}if(e.normal){const x=To(_,n,d,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(g=To(_,n,d,e.material)[0],g<0&&(f.negativeMaterialIndices=!0,g=0)),e.uv&&e.uv.forEach(function(x,v){const M=To(_,n,d,x);c[v]===void 0&&(c[v]=[]),c[v].push(M[0]),c[v].push(M[1])}),i++,m&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,s,g,a,l,c,u,h,i),n++,i=0,s=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,i,r,s,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(s[0]),e.colors.push(s[1]),e.colors.push(s[2]),e.colors.push(s[(h-1)*3]),e.colors.push(s[(h-1)*3+1]),e.colors.push(s[(h-1)*3+2]),e.colors.push(s[h*3]),e.colors.push(s[h*3+1]),e.colors.push(s[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(h-1)*3]),e.normal.push(r[(h-1)*3+1]),e.normal.push(r[(h-1)*3+2]),e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(h-1)*2]),e.uvs[d].push(a[d][(h-1)*2+1]),e.uvs[d].push(a[d][h*2]),e.uvs[d].push(a[d][h*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(s){s.rawTargets.forEach(function(a){const l=He.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const s=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let _=0;_<l.length;_++){const g=l[_]*3;u[g]=a[_*3],u[g+1]=a[_*3+1],u[g+2]=a[_*3+2]}const h={vertexIndices:s,vertexPositions:u},f=this.genBuffers(h),d=new Ke(f.vertex,3);d.name=r||n.attrName,d.applyMatrix4(i),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let s=0,a=new De;s<i.length;s+=4)a.fromArray(i,s).convertSRGBToLinear().toArray(i,s);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let s=0;s<i.length;++s)r.push(s);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Lt;const n=t-1,i=e.KnotVector.a,r=[],s=e.Points.a;for(let h=0,f=s.length;h<f;h+=4)r.push(new me().fromArray(s,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new CS(n,i,r,a,l).getPoints(r.length*12);return new Lt().setFromPoints(u)}}class DS{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(He.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=He.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=He.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(FS),values:t[n].KeyValueFloat.a},r=pt.get(i.id);if(r!==void 0){const s=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(s).curves.x=i:a.match(/Y/)?e.get(s).curves.y=i:a.match(/Z/)?e.get(s).curves.z=i:a.match(/DeformPercent/)&&e.has(s)&&(e.get(s).curves.morph=i)}}}parseAnimationLayers(e){const t=He.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],s=pt.get(parseInt(i));s!==void 0&&(s.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=pt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=He.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?Ze.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Wt.traverse(function(_){_.ID===f.id&&(d.transform=_.matrix,_.userData.transformData&&(d.eulerOrder=_.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Le),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=pt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=pt.get(h).parents[0].ID,d=pt.get(f).parents[0].ID,_=pt.get(d).parents[0].ID,g=He.Objects.Model[_],m={modelName:g.attrName?Ze.sanitizeNodeName(g.attrName):"",morphName:He.Objects.Deformer[h].attrName};r[c]=m}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=He.Objects.AnimationStack,n={};for(const i in t){const r=pt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const s=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:s}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new cy(e.name,-1,t)}generateTracks(e){const t=[];let n=new P,i=new _n,r=new P;if(e.transform&&e.transform.decompose(n,i,r),n=n.toArray(),i=new vn().setFromQuaternion(i,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),s=this.getKeyframeTrackValues(r,t,n);return new Ns(e+"."+i,r,s)}generateRotationTrack(e,t,n,i,r,s){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Cn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Cn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Cn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);i!==void 0&&(i=i.map(Cn.degToRad),i.push(s),i=new vn().fromArray(i),i=new _n().setFromEuler(i)),r!==void 0&&(r=r.map(Cn.degToRad),r.push(s),r=new vn().fromArray(r),r=new _n().setFromEuler(r).invert());const c=new _n,u=new vn,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],s),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),c.toArray(h,f/3*4);return new is(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Wt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Us(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const s=t[r];s!==i&&(t[n]=s,i=s,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let s=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(s=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),s!==-1){const u=t.x.values[s];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,r=Math.abs(i);if(r>=180){const s=r/180,a=i/s;let l=n+a;const c=e.times[t-1],h=(e.times[t]-c)/s;let f=c+h;const d=[],_=[];for(;f<e.times[t];)d.push(f),f+=h,_.push(l),l+=a;e.times=Oh(e.times,t,d),e.values=Oh(e.values,t,_)}}}}class IS{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Od,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const s=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(s||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},s=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),s.id!==""&&(a[n][s.id]=r)):typeof s.id=="number"?(a[n]={},a[n][s.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof s.id=="number"&&(r.id=s.id),s.name!==""&&(r.attrName=s.name),s.type!==""&&(r.attrType=s.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const s=this.getCurrentNode();if(s.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[c,u],kS(r,h),s[i]===void 0&&(s[i]=[])}i==="Node"&&(s.id=r),i in s&&Array.isArray(s[i])?s[i].push(r):i!=="a"?s[i]=r:s.a=r,this.setCurrentProp(s,i),i==="a"&&r.slice(-1)!==","&&(s.a=tl(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=tl(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],s=i[1],a=i[2],l=i[3];let c=i[4];switch(s){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=tl(c);break}this.getPrevNode()[r]={type:s,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class OS{parse(e){const t=new Dh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Od;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const s=e.getUint8(),a=e.getString(s);if(i===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,s){s!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const s=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:s,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),s=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=vS(new Uint8Array(e.getArrayBuffer(s))),l=new Dh(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Dh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class Od{add(e,t){this[e]=t}}function US(o){const e="Kaydara FBX Binary  \0";return o.byteLength>=e.length&&e===Fd(o,0,e.length)}function NS(o){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=o[i-1];return o=o.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Ih(o){const e=/FBXVersion: (\d+)/,t=o.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function FS(o){return o/46186158e3}const zS=[];function To(o,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=o;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,s=r+n.dataSize;return BS(zS,n.buffer,r,s)}const el=new vn,Ar=new P;function Ud(o){const e=new Le,t=new Le,n=new Le,i=new Le,r=new Le,s=new Le,a=new Le,l=new Le,c=new Le,u=new Le,h=new Le,f=new Le,d=o.inheritType?o.inheritType:0;if(o.translation&&e.setPosition(Ar.fromArray(o.translation)),o.preRotation){const b=o.preRotation.map(Cn.degToRad);b.push(o.eulerOrder||vn.DEFAULT_ORDER),t.makeRotationFromEuler(el.fromArray(b))}if(o.rotation){const b=o.rotation.map(Cn.degToRad);b.push(o.eulerOrder||vn.DEFAULT_ORDER),n.makeRotationFromEuler(el.fromArray(b))}if(o.postRotation){const b=o.postRotation.map(Cn.degToRad);b.push(o.eulerOrder||vn.DEFAULT_ORDER),i.makeRotationFromEuler(el.fromArray(b)),i.invert()}o.scale&&r.scale(Ar.fromArray(o.scale)),o.scalingOffset&&a.setPosition(Ar.fromArray(o.scalingOffset)),o.scalingPivot&&s.setPosition(Ar.fromArray(o.scalingPivot)),o.rotationOffset&&l.setPosition(Ar.fromArray(o.rotationOffset)),o.rotationPivot&&c.setPosition(Ar.fromArray(o.rotationPivot)),o.parentMatrixWorld&&(h.copy(o.parentMatrix),u.copy(o.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),g=new Le;g.extractRotation(u);const m=new Le;m.copyPosition(u);const p=m.clone().invert().multiply(u),y=g.clone().invert().multiply(p),x=r,v=new Le;if(d===0)v.copy(g).multiply(_).multiply(y).multiply(x);else if(d===1)v.copy(g).multiply(y).multiply(_).multiply(x);else{const N=new Le().scale(new P().setFromMatrixScale(h)).clone().invert(),U=y.clone().multiply(N);v.copy(g).multiply(_).multiply(U).multiply(x)}const M=c.clone().invert(),w=s.clone().invert();let A=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(M).multiply(a).multiply(s).multiply(r).multiply(w);const E=new Le().copyPosition(A),S=u.clone().multiply(E);return f.copyPosition(S),A=f.clone().multiply(v),A.premultiply(u.invert()),A}function Nd(o){o=o||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return o===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[o]}function tl(o){return o.split(",").map(function(t){return parseFloat(t)})}function Fd(o,e,t){return e===void 0&&(e=0),t===void 0&&(t=o.byteLength),new TextDecoder().decode(new Uint8Array(o,e,t))}function kS(o,e){for(let t=0,n=o.length,i=e.length;t<i;t++,n++)o[n]=e[t]}function BS(o,e,t,n){for(let i=t,r=0;i<n;i++,r++)o[r]=e[i];return o}function Oh(o,e,t){return o.slice(0,e).concat(t).concat(o.slice(e))}class VS extends rr{constructor(e,t,n){const i=new di;super(i,e);const r=new ql,s="/new/",a=r.load(s+"obelix-model/textures/Obelix_Base_color.jpeg"),l=r.load(s+"obelix-model/textures/Obelix_Metallic.jpeg"),c=r.load(s+"obelix-model/textures/Obelix_Normal_OpenGL.jpeg"),u=r.load(s+"obelix-model/textures/Obelix_Roughness.jpeg");new PS().load(s+"obelix-model/source/OBELIX.fbx",f=>{f.scale.setScalar(.01),f.position.set(0,0,0),f.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,d.material=new on({map:a,metalnessMap:l,normalMap:c,roughnessMap:u,metalness:.5,roughness:1}),t&&d.material.color.set(t))}),i.add(f),n&&n(f)},f=>{console.log("Obelix model: "+f.loaded/f.total*100+"% loaded")},f=>{console.error("Error loading Obelix model:",f)})}}class GS extends qs{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new Sf(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new HS(e)}}class HS{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=WS(e,t,this.data);for(let r=0,s=i.length;r<s;r++)n.push(...i[r].toShapes());return n}}function WS(o,e,t){const n=Array.from(o),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,s=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=XS(u,i,a,l,t);a+=h.offsetX,s.push(h.path)}}return s}function XS(o,e,t,n,i){const r=i.glyphs[o]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+o+'" does not exists in font family '+i.familyName+".");return}const s=new Ry;let a,l,c,u,h,f,d,_;if(r.o){const g=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=g.length;m<p;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+n,s.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+n,s.lineTo(a,l);break;case"q":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,f=g[m++]*e+n,s.quadraticCurveTo(h,f,c,u);break;case"b":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,f=g[m++]*e+n,d=g[m++]*e+t,_=g[m++]*e+n,s.bezierCurveTo(h,f,d,_,c,u);break}}return{offsetX:r.ha*e,path:s}}const qS="/new/assets/helvetiker_bold.typeface-bd68159e.json";class jS extends Xl{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}const ti=window.innerWidth<=768,YS=new GS;let Ll;YS.load(qS,function(o){Ll=o,Hd()});const zd={green:{groundColor:5699668,fogColor:3784863,rockColor:15461355,treeColor:6526273,houseColor:9127187,candyColor:1923142,snakeColor:1923142,mouthColor:3784863},orange:{groundColor:14060108,fogColor:16755768,rockColor:11316396,treeColor:10670345,houseColor:13789470,candyColor:6376413,snakeColor:16729866,mouthColor:6376413},lilac:{groundColor:13736447,fogColor:11554022,rockColor:15461355,treeColor:5492929,houseColor:16738740,candyColor:10027263,snakeColor:16723666,mouthColor:6376413}};let kd=localStorage.getItem("paletteName")||"green",tr=zd[kd];const gc={...tr};function Bd(o){var u,h,f;const e=zd[o];if(localStorage.setItem("paletteName",o),tr=e,!e)return;const{groundColor:t,fogColor:n,rockColor:i,treeColor:r,houseColor:s,candyColor:a,snakeColor:l,mouthColor:c}=e;Gd.color.set(t),ht.fog.color.set(n),ht.background.set(n),(u=kn.find(d=>d instanceof ea))==null||u.mesh.material.color.set(i),(h=kn.find(d=>d instanceof mc))==null||h.mesh.material.color.set(r),(f=kn.find(d=>d instanceof Ed))==null||f.mesh.children[0].material.color.set(s),Mi[0].mesh.material.color.set(a),yt.body.head.data.mesh.material.color.set(l),yt.body.head.data.mesh.material.color.set(l),yt.mouthColor=c,yt.mouth.material.color.set(c),a1.src=`/new/btn-play-bg-${o}.png`}let Ts=0;const ta=new Py(Ne.x,Ne.y,16777215,16777215);ta.position.set(Ne.x/2-.5,-.49,Ne.y/2-.5);ta.material.transparent=!0;ta.material.opacity=ti?.75:.3;const ht=new yx;ht.background=new De(gc.fogColor);ht.fog=new Fl(gc.fogColor,5,40);ht.add(ta);const hi={width:window.innerWidth,height:window.innerHeight},ZS=60,Qr=new Bt(ZS,hi.width/hi.height,.1),KS=ti?new P(Ne.x/2-.5,Ne.x+15,Ne.y):new P(-8+Ne.x/2,Ne.x/2+4,Ne.y+6),JS=new P(Ne.x/2+5,4,Ne.y/2+4);Qr.position.copy(JS);new Ly(3);const ni=new lf({antialias:window.devicePixelRatio<2,logarithmicDepthBuffer:!0});document.body.appendChild(ni.domElement);ip();ni.toneMapping=zh;ni.toneMappingExposure=1.2;ni.shadowMap.enabled=!0;ni.shadowMap.type=Pr;const sr=new Dy(Qr,ni.domElement);sr.enableDamping=!0;sr.enableZoom=!1;sr.enablePan=!1;sr.enableRotate=!1;sr.target.set(Ne.x/2-2,0,Ne.y/2+(ti?0:2));const Vd=new Xs(Ne.x*50,Ne.y*50);Vd.rotateX(-Math.PI*.5);const Gd=new on({color:gc.groundColor}),Zs=new lt(Vd,Gd);Zs.position.x=Ne.x/2-.5;Zs.position.z=Ne.y/2-.5;Zs.position.y=-.5;ht.add(Zs);Zs.receiveShadow=!0;const yt=new $M({scene:ht,resolution:Ne,color:tr.snakeColor,mouthColor:tr.mouthColor});yt.addEventListener("updated",function(){(yt.checkSelfCollision()||yt.checkEntitiesCollision(kn))&&(yt.die(),QS());const o=yt.indexes.at(-1),e=Mi.findIndex(t=>t.getIndexByCoord()===o);if(e>=0){const t=Mi[e];ht.remove(t.mesh),Mi.splice(e,1),yt.body.head.data.candy=t,_c(),Ts+=t.points,Hd()}});let Ni;function Hd(){if(!Ll)return;Ts||(Ts=0),Ni&&(ht.remove(Ni.mesh),Ni.mesh.geometry.dispose(),Ni.mesh.material.dispose());const o=new jS(`${Ts}`,{font:Ll,size:3,height:1,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelOffset:0,bevelSegments:5});o.center(),ti&&o.rotateX(-Math.PI*.5);const e=new lt(o,yt.body.head.data.mesh.material);e.position.x=Ne.x/2-.5,e.position.z=-4,e.position.y=1.8,e.castShadow=!0,Ni=new rr(e,Ne,{size:.8,number:.3}),Ni.in(),ht.add(Ni.mesh)}document.getElementById("mobile-arrows");function $S(){if(ti){const o=new ae;let e=1.55,t=1;window.addEventListener("touchstart",n=>{const i=n.targetTouches[0];e=Cn.clamp(e,1.45,1.65);let r,s;r=2*i.clientX/window.innerWidth-1,s=2*i.clientY/window.innerHeight-e,Vr||nl(),r*t>s?r*t<-s?(yt.setDirection("ArrowUp"),t=3):(yt.setDirection("ArrowRight"),e+=s,t=.33):-r*t>s?(yt.setDirection("ArrowLeft"),e+=s,t=.33):(yt.setDirection("ArrowDown"),t=3),o.x=r,o.y=s})}else window.addEventListener("keydown",function(o){const e=o.code;yt.setDirection(e),e==="Space"?Vr?Wd():nl():Vr||nl()})}let Vr;function nl(){yt.isMoving||(Vr=setInterval(()=>{yt.update()},240))}function Wd(){clearInterval(Vr),Vr=null}function QS(){Wd(),Ts=0;let o=Mi.pop();for(;o;)ht.remove(o.mesh),o=Mi.pop();let e=kn.pop();for(;e;)ht.remove(e.mesh),e=kn.pop();_c(),qd()}const Mi=[],kn=[];function _c(){const o=new eS(Ne,tr.candyColor);let e=Xd();o.mesh.position.x=e%Ne.x,o.mesh.position.z=Math.floor(e/Ne.x),Mi.push(o),o.in(),ht.add(o.mesh)}_c();function Xd(){let o,e=Mi.map(n=>n.getIndexByCoord()),t=kn.map(n=>n.getIndexByCoord());do o=Math.floor(Math.random()*Ne.x*Ne.y);while(yt.indexes.includes(o)||e.includes(o)||t.includes(o));return o}function e1(){const o=Math.random()>.5?new ea(Ne,tr.rockColor):new mc(Ne,tr.treeColor);let e=Xd();o.mesh.position.x=e%Ne.x,o.mesh.position.z=Math.floor(e/Ne.x),kn.push(o),ht.add(o.mesh)}function qd(){for(let o=0;o<20;o++)e1();kn.sort((o,e)=>{const t=new P(Ne.x/2-.5,0,Ne.y/2-.5),n=o.position.clone().sub(t).length(),i=e.position.clone().sub(t).length();return n-i}),Gt.from(kn.map(o=>o.mesh.scale),{x:0,y:0,z:0,duration:1,ease:"elastic.out(1.5, 0.5)",stagger:{grid:[20,20],amount:.7}})}qd();ht.add(...iS);const t1=[new me(-5,0,10,1),new me(-6,0,15,1.2),new me(-5,0,16,.8),new me(-10,0,4,1.3),new me(-5,0,-3,2),new me(-4,0,-4,1.5),new me(-2,0,-15,1),new me(5,0,-20,1.2),new me(24,0,-12,1.2),new me(2,0,-6,1.2),new me(3,0,-7,1.8),new me(1,0,-9,1),new me(15,0,-8,1.8),new me(17,0,-9,1.1),new me(18,0,-7,1.3),new me(24,0,-1,1.3),new me(26,0,0,1.8),new me(32,0,0,1),new me(28,0,6,1.7),new me(24,0,15,1.1),new me(16,0,23,1.1),new me(12,0,24,.9),new me(-13,0,-13,.7),new me(35,0,10,.7)],n1=new mc(Ne);t1.forEach(({x:o,y:e,z:t,w:n})=>{let i=n1.mesh.clone();i.position.set(o,e,t),i.scale.setScalar(n),ht.add(i)});new ea(Ne);const At=Ne.x;Ne.y;const i1=[[new P(-7,-.5,2),new me(2,8,3,2.8)],[new P(-3,-.5,-10),new me(3,2,2.5,1.5)],[new P(-5,-.5,3),new me(1,1.5,2,.8)],[new P(At+5,-.5,3),new me(4,1,3,1)],[new P(At+4,-.5,2),new me(2,2,1,1)],[new P(At+8,-.5,16),new me(6,2,4,4)],[new P(At+6,-.5,13),new me(3,2,2.5,3.2)],[new P(At+5,-.5,-8),new me(1,1,1,0)],[new P(At+6,-.5,-7),new me(2,4,1.5,.5)],[new P(-5,-.5,14),new me(1,3,2,0)],[new P(-4,-.5,15),new me(.8,.6,.7,0)],[new P(At/2+5,-.5,25),new me(2.5,.8,4,2)],[new P(At/2+9,-.5,22),new me(1.2,2,1.2,1)],[new P(At/2+8,-.5,21.5),new me(.8,1,.8,2)]];i1.forEach(([o,{x:e,y:t,z:n,w:i}])=>{let r=new ea(Ne).mesh;r.position.copy(o),r.scale.set(e,t,n),r.rotation.y=i,ht.add(r)});const r1=[new P(-8,0,2),new P(-9,0,20),new P(At+6,0,3),new P(At+9,0,21),new P(2,0,-8),new P(At-3,0,-7),new P(3,0,At+6),new P(10,0,At+8),new P(At-5,0,At+7)],s1=new Ed(Ne);r1.forEach(o=>{let e=s1.mesh.clone(!0);e.position.copy(o),e.scale.setScalar(1.5+Math.random()*1),e.rotation.y=Math.random()*Math.PI*2,e.castShadow=!0,ht.add(e)});const o1=[new P(At+4,0,12)];o1.forEach(o=>{const e=new VS(Ne,null,t=>{e.mesh.position.copy(o),e.mesh.scale.setScalar(2+Math.random()*.5),e.mesh.rotation.y=Math.random()*Math.PI*2});ht.add(e.mesh)});const Ks=document.getElementById("audio"),Yi=document.getElementById("btn-volume"),jd=document.getElementById("btn-play"),a1=document.getElementById("btn-play-img");Gt.fromTo(jd,{autoAlpha:0,scale:0,yPercent:-50,xPercent:-50},{duration:.8,autoAlpha:1,scale:1,yPercent:-50,xPercent:-50,delay:.3,ease:"elastic.out(1.2, 0.7)"});jd.addEventListener("click",function(){Ks.play(),Gt.to(Qr.position,{...KS,duration:2}),ti&&Gt.to(sr.target,{x:Ne.x/2-.5,y:0,z:Ne.y/2-.5}),Gt.to(ht.fog,{duration:2,near:ti?30:20,far:55}),Gt.to(this,{duration:1,scale:0,ease:"elastic.in(1.2, 0.7)",onComplete:()=>{this.style.visibility="hidden"}}),$S()});const l1=localStorage.getItem("volume");l1==="off"&&Yd();const c1=Ks.volume;Yi.addEventListener("click",function(){Ks.volume===0?u1():Yd()});function Yd(){localStorage.setItem("volume","off"),Gt.to(Ks,{volume:0,duration:1}),Yi.classList.remove("after:hidden"),Yi.querySelector(":first-child").classList.remove("animate-ping"),Yi.classList.add("after:block")}function u1(){localStorage.setItem("volume","on"),Yi.classList.add("after:hidden"),Yi.querySelector(":first-child").classList.add("animate-ping"),Yi.classList.remove("after:block"),Gt.to(Ks,{volume:c1,duration:1})}const Zd=document.querySelector(".top-bar"),Kd=document.querySelectorAll(".top-bar__item");Gt.set(Kd,{y:-200,autoAlpha:0});Gt.to(Zd,{opacity:1,delay:.3,onComplete:()=>{Gt.to(Kd,{duration:1,y:0,autoAlpha:1,ease:"elastic.out(1.2, 0.9)",stagger:{amount:.3}})}});const Jd=document.querySelectorAll("[data-color]");Gt.to(Zd,{opacity:1,delay:.5,onComplete:()=>{Gt.to(Jd,{duration:1,x:0,autoAlpha:1,ease:"elastic.out(1.2, 0.9)",stagger:{amount:.2}})}});Jd.forEach(o=>o.addEventListener("click",function(){const e=this.dataset.color;Bd(e)}));const $d=new Mf,Qd=new ql($d),h1=Qd.load("/wasd.png"),f1=Qd.load("/arrows.png"),vc=new Xs(3.5,2);vc.rotateX(-Math.PI*.5);const ep=new lt(vc,new on({transparent:!0,map:h1,opacity:ti?0:.5})),tp=new lt(vc,new on({transparent:!0,map:f1,opacity:ti?0:.5}));tp.position.set(8.7,0,21);ep.position.set(13,0,21);ht.add(tp,ep);$d.onLoad=()=>{};Bd(kd);function np(){sr.update(),ni.render(ht,Qr),requestAnimationFrame(np)}requestAnimationFrame(np);window.addEventListener("resize",ip);function ip(){hi.width=window.innerWidth,hi.height=window.innerHeight,Qr.aspect=hi.width/hi.height,Qr.updateProjectionMatrix(),ni.setSize(hi.width,hi.height);const o=Math.min(window.devicePixelRatio,2);ni.setPixelRatio(o)}
