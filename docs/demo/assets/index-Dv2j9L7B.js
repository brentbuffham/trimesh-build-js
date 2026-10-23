(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const pc="183",wr={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dd=0,qc=1,pd=2,xa=1,md=2,hs=3,li=0,Qe=1,ni=2,ai=0,Rr=1,jc=2,Jc=3,$c=4,gd=5,Hi=100,_d=101,vd=102,xd=103,Md=104,yd=200,Sd=201,Ed=202,bd=203,al=204,ol=205,Td=206,Ad=207,wd=208,Rd=209,Cd=210,Id=211,Pd=212,Dd=213,Ld=214,ll=0,cl=1,hl=2,Ur=3,ul=4,fl=5,dl=6,pl=7,Cu=0,Ud=1,Nd=2,Gn=0,Iu=1,Pu=2,Du=3,Lu=4,Uu=5,Nu=6,Fu=7,Ou=300,$i=301,Nr=302,no=303,io=304,Wa=306,ml=1e3,ri=1001,gl=1002,Ve=1003,Fd=1004,zs=1005,Xe=1006,ro=1007,Xi=1008,cn=1009,Bu=1010,zu=1011,Ss=1012,mc=1013,Hn=1014,Bn=1015,ci=1016,gc=1017,_c=1018,Es=1020,Gu=35902,Vu=35899,ku=1021,Hu=1022,Tn=1023,hi=1026,Yi=1027,Wu=1028,vc=1029,Fr=1030,xc=1031,Mc=1033,Ma=33776,ya=33777,Sa=33778,Ea=33779,_l=35840,vl=35841,xl=35842,Ml=35843,yl=36196,Sl=37492,El=37496,bl=37488,Tl=37489,Al=37490,wl=37491,Rl=37808,Cl=37809,Il=37810,Pl=37811,Dl=37812,Ll=37813,Ul=37814,Nl=37815,Fl=37816,Ol=37817,Bl=37818,zl=37819,Gl=37820,Vl=37821,kl=36492,Hl=36494,Wl=36495,Xl=36283,Yl=36284,Zl=36285,Kl=36286,Od=3200,Xu=0,Bd=1,wi="",dn="srgb",Or="srgb-linear",Pa="linear",pe="srgb",rr=7680,Qc=519,zd=512,Gd=513,Vd=514,yc=515,kd=516,Hd=517,Sc=518,Wd=519,th=35044,eh="300 es",zn=2e3,bs=2001;function Xd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yd(){const n=Da("canvas");return n.style.display="block",n}const nh={};function ih(...n){const t="THREE."+n.shift();console.log(t,...n)}function Yu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xt(...n){n=Yu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function le(...n){n=Yu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function La(...n){const t=n.join(" ");t in nh||(nh[t]=!0,Xt(...n))}function Zd(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Kd={[ll]:cl,[hl]:dl,[ul]:pl,[Ur]:fl,[cl]:ll,[dl]:hl,[pl]:ul,[fl]:Ur};class tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,ql=180/Math.PI;function Rs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function qd(n,t){return(n%t+t)%t}function so(n,t,e){return(1-e)*n+e*t}function Kr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jd={DEG2RAD:ba};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ii{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(u!==_||c!==f||l!==d||h!==p){let g=c*f+l*d+h*p+u*_;g<0&&(f=-f,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),b=Math.sin(v);m=Math.sin(m*v)/b,o=Math.sin(o*v)/b,c=c*m+f*o,l=l*m+d*o,h=h*m+p*o,u=u*m+_*o}else{c=c*m+f*o,l=l*m+d*o,h=h*m+p*o,u=u*m+_*o;const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],p=s[a+3];return t[e]=o*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-o*d,t[e+2]=l*p+h*d+o*f-c*u,t[e+3]=h*p-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),f=c(i/2),d=c(r/2),p=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,i=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new K,rh=new Ii;class jt{constructor(t,e,i,r,s,a,o,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],_=r[0],g=r[3],m=r[6],v=r[1],b=r[4],S=r[7],C=r[2],E=r[5],w=r[8];return s[0]=a*_+o*v+c*C,s[3]=a*g+o*b+c*E,s[6]=a*m+o*S+c*w,s[1]=l*_+h*v+u*C,s[4]=l*g+h*b+u*E,s[7]=l*m+h*S+u*w,s[2]=f*_+d*v+p*C,s[5]=f*g+d*b+p*E,s[8]=f*m+d*S+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,p=e*u+i*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(r*l-h*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new jt,sh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){const n={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pe&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(r.r=Cr(r.r),r.g=Cr(r.g),r.b=Cr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Pa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return La("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return La("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Or]:{primaries:t,whitePoint:i,transfer:Pa,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}const se=Jd();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sr;class $d{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{sr===void 0&&(sr=Da("canvas")),sr.width=t.width,sr.height=t.height;const r=sr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=sr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Da("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(oi(e[i]/255)*255):e[i]=oi(e[i]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qd=0;class Ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lo(r[a].image)):s.push(lo(r[a]))}else s=lo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$d.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let tp=0;const co=new K;class tn extends tr{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=ri,r=ri,s=Xe,a=Xi,o=Tn,c=cn,l=tn.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Rs(),this.name="",this.source=new Ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ml:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ml:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ou;tn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,S=(d+1)/2,C=(m+1)/2,E=(h+f)/4,w=(u+_)/4,x=(p+g)/4;return b>S&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=E/i,s=w/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=x/s),this.set(i,r,s,e),this}let v=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ep extends tr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new tn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ec(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends ep{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Zu extends tn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class np extends tn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class be{constructor(t,e,i,r,s,a,o,c,l,h,u,f,d,p,_,g){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,u,f,d,p,_,g)}set(t,e,i,r,s,a,o,c,l,h,u,f,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/ar.setFromMatrixColumn(t,0).length(),s=1/ar.setFromMatrixColumn(t,1).length(),a=1/ar.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,p=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=p+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f+_*o,e[4]=p*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,p=o*h,_=o*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,d=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,rp)}lookAt(t,e,i){const r=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),pi.crossVectors(i,on),pi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),pi.crossVectors(i,on)),pi.normalize(),Gs.crossVectors(on,pi),r[0]=pi.x,r[4]=Gs.x,r[8]=on.x,r[1]=pi.y,r[5]=Gs.y,r[9]=on.y,r[2]=pi.z,r[6]=Gs.z,r[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],_=i[6],g=i[10],m=i[14],v=i[3],b=i[7],S=i[11],C=i[15],E=r[0],w=r[4],x=r[8],M=r[12],L=r[1],P=r[5],F=r[9],U=r[13],y=r[2],A=r[6],R=r[10],D=r[14],O=r[3],G=r[7],B=r[11],X=r[15];return s[0]=a*E+o*L+c*y+l*O,s[4]=a*w+o*P+c*A+l*G,s[8]=a*x+o*F+c*R+l*B,s[12]=a*M+o*U+c*D+l*X,s[1]=h*E+u*L+f*y+d*O,s[5]=h*w+u*P+f*A+d*G,s[9]=h*x+u*F+f*R+d*B,s[13]=h*M+u*U+f*D+d*X,s[2]=p*E+_*L+g*y+m*O,s[6]=p*w+_*P+g*A+m*G,s[10]=p*x+_*F+g*R+m*B,s[14]=p*M+_*U+g*D+m*X,s[3]=v*E+b*L+S*y+C*O,s[7]=v*w+b*P+S*A+C*G,s[11]=v*x+b*F+S*R+C*B,s[15]=v*M+b*U+S*D+C*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],v=c*d-l*f,b=o*d-l*u,S=o*f-c*u,C=a*d-l*h,E=a*f-c*h,w=a*u-o*h;return e*(_*v-g*b+m*S)-i*(p*v-g*C+m*E)+r*(p*b-_*C+m*w)-s*(p*S-_*E+g*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=e*o-i*a,b=e*c-r*a,S=e*l-s*a,C=i*c-r*o,E=i*l-s*o,w=r*l-s*c,x=h*_-u*p,M=h*g-f*p,L=h*m-d*p,P=u*g-f*_,F=u*m-d*_,U=f*m-d*g,y=v*U-b*F+S*P+C*L-E*M+w*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/y;return t[0]=(o*U-c*F+l*P)*A,t[1]=(r*F-i*U-s*P)*A,t[2]=(_*w-g*E+m*C)*A,t[3]=(f*E-u*w-d*C)*A,t[4]=(c*L-a*U-l*M)*A,t[5]=(e*U-r*L+s*M)*A,t[6]=(g*S-p*w-m*b)*A,t[7]=(h*w-f*S+d*b)*A,t[8]=(a*F-o*L+l*x)*A,t[9]=(i*L-e*F-s*x)*A,t[10]=(p*E-_*S+m*v)*A,t[11]=(u*S-h*E-d*v)*A,t[12]=(o*M-a*P-c*x)*A,t[13]=(e*P-i*M+r*x)*A,t[14]=(_*b-p*C-g*v)*A,t[15]=(h*C-u*b+f*v)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,p=s*u,_=a*h,g=a*u,m=o*u,v=c*l,b=c*h,S=c*u,C=i.x,E=i.y,w=i.z;return r[0]=(1-(_+m))*C,r[1]=(d+S)*C,r[2]=(p-b)*C,r[3]=0,r[4]=(d-S)*E,r[5]=(1-(f+m))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(p+b)*w,r[9]=(g-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=ar.set(r[0],r[1],r[2]).length();const o=ar.set(r[4],r[5],r[6]).length(),c=ar.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Mn.copy(this);const l=1/a,h=1/o,u=1/c;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,r,s,a,o=zn,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let p,_;if(c)p=s/(a-s),_=a*s/(a-s);else if(o===zn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===bs)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=zn,c=!1){const l=this.elements,h=2/(e-t),u=2/(i-r),f=-(e+t)/(e-t),d=-(i+r)/(i-r);let p,_;if(c)p=1/(a-s),_=a/(a-s);else if(o===zn)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===bs)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ar=new K,Mn=new be,ip=new K(0,0,0),rp=new K(1,1,1),pi=new K,Gs=new K,on=new K,oh=new be,lh=new Ii;class Wn{constructor(t=0,e=0,i=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lh.setFromEuler(this),this.setFromQuaternion(lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Ku{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sp=0;const ch=new K,or=new Ii,jn=new be,Vs=new K,qr=new K,ap=new K,op=new Ii,hh=new K(1,0,0),uh=new K(0,1,0),fh=new K(0,0,1),dh={type:"added"},lp={type:"removed"},lr={type:"childadded",child:null},ho={type:"childremoved",child:null};class Oe extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new K,e=new Wn,i=new Ii,r=new K(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return ch.copy(t).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vs.copy(t):Vs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(qr,Vs,this.up):jn.lookAt(Vs,qr,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(jn),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),lr.child=t,this.dispatchEvent(lr),lr.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Oe.DEFAULT_UP=new K(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zi extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cp={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ks={h:0,s:0,l:0};function fo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class re{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=se.workingColorSpace){if(t=qd(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=fo(a,s,t+1/3),this.g=fo(a,s,t),this.b=fo(a,s,t-1/3)}return se.colorSpaceToWorking(this,r),this}setStyle(t,e=dn){function i(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const i=qu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return se.workingToColorSpace(We.copy(this),t),Math.round(ee(We.r*255,0,255))*65536+Math.round(ee(We.g*255,0,255))*256+Math.round(ee(We.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(We.copy(this),e);const i=We.r,r=We.g,s=We.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=dn){se.workingToColorSpace(We.copy(this),t);const e=We.r,i=We.g,r=We.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(ks);const i=so(mi.h,ks.h,e),r=so(mi.s,ks.s,e),s=so(mi.l,ks.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new re;re.NAMES=qu;class hp extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yn=new K,Jn=new K,po=new K,$n=new K,cr=new K,hr=new K,ph=new K,mo=new K,go=new K,_o=new K,vo=new Ae,xo=new Ae,Mo=new Ae;class bn{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),yn.subVectors(t,e),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){yn.subVectors(r,e),Jn.subVectors(i,e),po.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Jn),c=yn.dot(po),l=Jn.dot(Jn),h=Jn.dot(po),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,p=(a*h-o*c)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return vo.setScalar(0),xo.setScalar(0),Mo.setScalar(0),vo.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,i),Mo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(vo,s.x),a.addScaledVector(xo,s.y),a.addScaledVector(Mo,s.z),a}static isFrontFacing(t,e,i,r){return yn.subVectors(i,e),Jn.subVectors(t,e),yn.cross(Jn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),yn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return bn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;cr.subVectors(r,i),hr.subVectors(s,i),mo.subVectors(t,i);const c=cr.dot(mo),l=hr.dot(mo);if(c<=0&&l<=0)return e.copy(i);go.subVectors(t,r);const h=cr.dot(go),u=hr.dot(go);if(h>=0&&u<=h)return e.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(cr,a);_o.subVectors(t,s);const d=cr.dot(_o),p=hr.dot(_o);if(p>=0&&d<=p)return e.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(hr,o);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return ph.subVectors(s,r),o=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(ph,o);const m=1/(g+_+f);return a=_*m,o=f*m,e.copy(i).addScaledVector(cr,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Cs{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),Ws.subVectors(this.max,jr),ur.subVectors(t.a,jr),fr.subVectors(t.b,jr),dr.subVectors(t.c,jr),gi.subVectors(fr,ur),_i.subVectors(dr,fr),Li.subVectors(ur,dr);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Li.z,Li.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Li.z,0,-Li.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Li.y,Li.x,0];return!yo(e,ur,fr,dr,Ws)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,ur,fr,dr,Ws))?!1:(Xs.crossVectors(gi,_i),e=[Xs.x,Xs.y,Xs.z],yo(e,ur,fr,dr,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new K,new K,new K,new K,new K,new K,new K,new K],Sn=new K,Hs=new Cs,ur=new K,fr=new K,dr=new K,gi=new K,_i=new K,Li=new K,jr=new K,Ws=new K,Xs=new K,Ui=new K;function yo(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ui.fromArray(n,s);const o=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),c=t.dot(Ui),l=e.dot(Ui),h=i.dot(Ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Re=new K,Ys=new qt;let up=0;class kn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:up++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}}class ju extends kn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ju extends kn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ye extends kn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const fp=new Cs,Jr=new K,So=new K;class Is{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jr.subVectors(t,this.center);const e=Jr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jr.copy(t.center).add(So)),this.expandByPoint(Jr.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let dp=0;const un=new be,Eo=new Oe,pr=new K,ln=new Cs,$r=new Cs,Ne=new K;class Ke extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xd(t)?Ju:ju)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,i){return un.makeTranslation(t,e,i),this.applyMatrix4(un),this}scale(t,e,i){return un.makeScale(t,e,i),this.applyMatrix4(un),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(ln.min,$r.min),ln.expandByPoint(Ne),Ne.addVectors(ln.max,$r.max),ln.expandByPoint(Ne)):(ln.expandByPoint($r.min),ln.expandByPoint($r.max))}ln.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ne.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ne));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(pr.fromBufferAttribute(t,l),Ne.add(pr)),r=Math.max(r,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new K,c[x]=new K;const l=new K,h=new K,u=new K,f=new qt,d=new qt,p=new qt,_=new K,g=new K;function m(x,M,L){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,L),f.fromBufferAttribute(s,x),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,L),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),o[x].add(_),o[M].add(_),o[L].add(_),c[x].add(g),c[M].add(g),c[L].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,M=v.length;x<M;++x){const L=v[x],P=L.start,F=L.count;for(let U=P,y=P+F;U<y;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new K,S=new K,C=new K,E=new K;function w(x){C.fromBufferAttribute(r,x),E.copy(C);const M=o[x];b.copy(M),b.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(E,M);const P=S.dot(c[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,P)}for(let x=0,M=v.length;x<M;++x){const L=v[x],P=L.start,F=L.count;for(let U=P,y=P+F;U<y;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new K,s=new K,a=new K,o=new K,c=new K,l=new K,h=new K,u=new K;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new kn(f,h,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let pp=0;class er extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=Rr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ti=new K,bo=new K,Zs=new K,vi=new K,To=new K,Ks=new K,Ao=new K;class Xa{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){bo.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(bo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=vi.dot(this.direction),c=-vi.dot(Zs),l=vi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*c-o,f=a*o-c,p=s*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(bo).addScaledVector(Zs,f),d}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,r,s){To.subVectors(e,t),Ks.subVectors(i,t),Ao.crossVectors(To,Ks);let a=this.direction.dot(Ao),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,t);const c=o*this.direction.dot(Ks.crossVectors(vi,Ks));if(c<0)return null;const l=o*this.direction.dot(To.cross(vi));if(l<0||c+l>a)return null;const h=-o*vi.dot(Ao);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $u extends er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mh=new be,Ni=new Xa,qs=new Is,gh=new K,js=new K,Js=new K,$s=new K,wo=new K,Qs=new K,_h=new K,ta=new K;class An extends Oe{constructor(t=new Ke,e=new $u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Qs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(wo.fromBufferAttribute(u,t),a?Qs.addScaledVector(wo,h):Qs.addScaledVector(wo.sub(e),h))}e.add(Qs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(s),Ni.copy(t.ray).recast(t.near),!(qs.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(qs,gh)===null||Ni.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(mh),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=v,C=b;S<C;S+=3){const E=o.getX(S),w=o.getX(S+1),x=o.getX(S+2);r=ea(this,m,t,i,l,h,u,E,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),b=o.getX(g+1),S=o.getX(g+2);r=ea(this,a,t,i,l,h,u,v,b,S),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let S=v,C=b;S<C;S+=3){const E=S,w=S+1,x=S+2;r=ea(this,m,t,i,l,h,u,E,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=g,b=g+1,S=g+2;r=ea(this,a,t,i,l,h,u,v,b,S),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function mp(n,t,e,i,r,s,a,o){let c;if(t.side===Qe?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===li,o),c===null)return null;ta.copy(o),ta.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ta);return l<e.near||l>e.far?null:{distance:l,point:ta.clone(),object:n}}function ea(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,js),n.getVertexPosition(c,Js),n.getVertexPosition(l,$s);const h=mp(n,t,e,i,js,Js,$s,_h);if(h){const u=new K;bn.getBarycoord(_h,js,Js,$s,u),r&&(h.uv=bn.getInterpolatedAttribute(r,o,c,l,u,new qt)),s&&(h.uv1=bn.getInterpolatedAttribute(s,o,c,l,u,new qt)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,c,l,u,new K),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new K,materialIndex:0};bn.getNormal(js,Js,$s,f.normal),h.face=f,h.barycoord=u}return h}class gp extends tn{constructor(t=null,e=1,i=1,r,s,a,o,c,l=Ve,h=Ve,u,f){super(null,a,o,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ro=new K,_p=new K,vp=new jt;class Ti{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ro.subVectors(i,e).cross(_p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||vp.getNormalMatrix(t),r=this.coplanarPoint(Ro).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Is,xp=new qt(.5,.5),na=new K;class bc{constructor(t=new Ti,e=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],v=s[12],b=s[13],S=s[14],C=s[15];if(r[0].setComponents(l-a,d-h,m-p,C-v).normalize(),r[1].setComponents(l+a,d+h,m+p,C+v).normalize(),r[2].setComponents(l+o,d+u,m+_,C+b).normalize(),r[3].setComponents(l-o,d-u,m-_,C-b).normalize(),i)r[4].setComponents(c,f,g,S).normalize(),r[5].setComponents(l-c,d-f,m-g,C-S).normalize();else if(r[4].setComponents(l-c,d-f,m-g,C-S).normalize(),e===zn)r[5].setComponents(l+c,d+f,m+g,C+S).normalize();else if(e===bs)r[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);const e=xp.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(na.x=r.normal.x>0?t.max.x:t.min.x,na.y=r.normal.y>0?t.max.y:t.min.y,na.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ua extends er{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Na=new K,Fa=new K,vh=new be,Qr=new Xa,ia=new Is,Co=new K,xh=new K;class Mp extends Oe{constructor(t=new Ke,e=new Ua){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Na.fromBufferAttribute(e,r-1),Fa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Na.distanceTo(Fa);t.setAttribute("lineDistance",new Ye(i,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(r),ia.radius+=s,t.ray.intersectsSphere(ia)===!1)return;vh.copy(r).invert(),Qr.copy(t.ray).applyMatrix4(vh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=l){const m=h.getX(_),v=h.getX(_+1),b=ra(this,t,Qr,c,m,v,_);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(d),m=ra(this,t,Qr,c,_,g,p-1);m&&e.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=l){const m=ra(this,t,Qr,c,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=ra(this,t,Qr,c,p-1,d,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ra(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Na.fromBufferAttribute(o,r),Fa.fromBufferAttribute(o,s),e.distanceSqToSegment(Na,Fa,Co,xh)>i)return;Co.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Co);if(!(l<t.near||l>t.far))return{distance:l,point:xh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Mh=new K,yh=new K;class jl extends Mp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Mh.fromBufferAttribute(e,r),yh.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mh.distanceTo(yh);t.setAttribute("lineDistance",new Ye(i,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qu extends er{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sh=new be,Jl=new Xa,sa=new Is,aa=new K;class yp extends Oe{constructor(t=new Ke,e=new Qu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),sa.radius+=s,t.ray.intersectsSphere(sa)===!1)return;Sh.copy(r).invert(),Jl.copy(t.ray).applyMatrix4(Sh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,_=d;p<_;p++){const g=l.getX(p);aa.fromBufferAttribute(u,g),Eh(aa,g,c,r,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,_=d;p<_;p++)aa.fromBufferAttribute(u,p),Eh(aa,p,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Eh(n,t,e,i,r,s,a){const o=Jl.distanceSqToPoint(n);if(o<e){const c=new K;Jl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class tf extends tn{constructor(t=[],e=$i,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ts extends tn{constructor(t,e,i=Hn,r,s,a,o=Ve,c=Ve,l,h=hi,u=1){if(h!==hi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ec(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Sp extends Ts{constructor(t,e=Hn,i=$i,r,s,a=Ve,o=Ve,c,l=hi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ef extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ps extends Ke{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,r,a,2),p("x","z","y",1,-1,t,i,-e,r,a,3),p("x","y","z",1,-1,t,e,i,r,s,4),p("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function p(_,g,m,v,b,S,C,E,w,x,M){const L=S/w,P=C/x,F=S/2,U=C/2,y=E/2,A=w+1,R=x+1;let D=0,O=0;const G=new K;for(let B=0;B<R;B++){const X=B*P-U;for(let H=0;H<A;H++){const q=H*L-F;G[_]=q*v,G[g]=X*b,G[m]=y,l.push(G.x,G.y,G.z),G[_]=0,G[g]=0,G[m]=E>0?1:-1,h.push(G.x,G.y,G.z),u.push(H/w),u.push(1-B/x),D+=1}}for(let B=0;B<x;B++)for(let X=0;X<w;X++){const H=f+X+A*B,q=f+X+A*(B+1),tt=f+(X+1)+A*(B+1),nt=f+(X+1)+A*B;c.push(H,q,nt),c.push(q,tt,nt),O+=6}o.addGroup(d,O,M),d+=O,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ya extends Ke{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=t/o,f=e/c,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*f-a;for(let b=0;b<l;b++){const S=b*u-s;p.push(S,-v,0),_.push(0,0,1),g.push(b/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){const b=v+l*m,S=v+l*(m+1),C=v+1+l*(m+1),E=v+1+l*m;d.push(b,S,E),d.push(S,C,E)}this.setIndex(d),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ep extends Ke{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,r=new K,s=new K;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],f=u.start,d=u.count;for(let p=f,_=f+d;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),v=o.getX(p+(g+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,v),bh(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),bh(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ye(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function bh(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}function Br(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Br(n[e]);for(const r in i)t[r]=i[r]}return t}function bp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Tp={clone:Br,merge:$e};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Rp extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Th extends er{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xu,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cp extends er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ip extends er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rf extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Io=new be,Ah=new K,wh=new K;class Pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===bs||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new K,la=new Ii,Cn=new K;class sf extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,la,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(oa,la,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new K,Rh=new qt,Ch=new qt;class pn extends sf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ql*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ch),e.subVectors(Ch,Rh)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ba*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Tc extends sf{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Dp extends Pp{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class af extends rf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Dp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Lp extends rf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const mr=-90,gr=1;class Up extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(mr,gr,t,e);r.layers=this.layers,this.add(r);const s=new pn(mr,gr,t,e);s.layers=this.layers,this.add(s);const a=new pn(mr,gr,t,e);a.layers=this.layers,this.add(a);const o=new pn(mr,gr,t,e);o.layers=this.layers,this.add(o);const c=new pn(mr,gr,t,e);c.layers=this.layers,this.add(c);const l=new pn(mr,gr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Np extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ih{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fp extends tr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Xt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ph(n,t,e,i){const r=Op(i);switch(e){case ku:return n*t;case Wu:return n*t/r.components*r.byteLength;case vc:return n*t/r.components*r.byteLength;case Fr:return n*t*2/r.components*r.byteLength;case xc:return n*t*2/r.components*r.byteLength;case Hu:return n*t*3/r.components*r.byteLength;case Tn:return n*t*4/r.components*r.byteLength;case Mc:return n*t*4/r.components*r.byteLength;case Ma:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vl:case Ml:return Math.max(n,16)*Math.max(t,8)/4;case _l:case xl:return Math.max(n,8)*Math.max(t,8)/2;case yl:case Sl:case bl:case Tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case El:case Al:case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case kl:case Hl:case Wl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Xl:case Yl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Zl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Op(n){switch(n){case cn:case Bu:return{byteLength:1,components:1};case Ss:case zu:case ci:return{byteLength:2,components:1};case gc:case _c:return{byteLength:2,components:4};case Hn:case mc:case Bn:return{byteLength:4,components:1};case Gu:case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);function of(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Bp(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$p=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Om=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	vec3 f0 = material.specularColorBlended;
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Km=`#if defined( USE_POINTS_UV )
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
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lg=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Qg=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,i0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,o0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,u0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:zp,alphahash_pars_fragment:Gp,alphamap_fragment:Vp,alphamap_pars_fragment:kp,alphatest_fragment:Hp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:Yp,batching_pars_vertex:Zp,batching_vertex:Kp,begin_vertex:qp,beginnormal_vertex:jp,bsdfs:Jp,iridescence_fragment:$p,bumpmap_pars_fragment:Qp,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:rm,color_pars_fragment:sm,color_pars_vertex:am,color_vertex:om,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:fm,emissivemap_fragment:dm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:_m,envmap_common_pars_fragment:vm,envmap_pars_fragment:xm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Pm,envmap_vertex:ym,fog_vertex:Sm,fog_pars_vertex:Em,fog_fragment:bm,fog_pars_fragment:Tm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:wm,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Cm,lights_pars_begin:Im,lights_toon_fragment:Dm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:Gm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:Ym,map_particle_fragment:Zm,map_particle_pars_fragment:Km,metalnessmap_fragment:qm,metalnessmap_pars_fragment:jm,morphinstance_vertex:Jm,morphcolor_vertex:$m,morphnormal_vertex:Qm,morphtarget_pars_vertex:tg,morphtarget_vertex:eg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:rg,normal_pars_vertex:sg,normal_vertex:ag,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:cg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:ug,opaque_fragment:fg,packing:dg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:_g,roughnessmap_fragment:vg,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:yg,shadowmap_vertex:Sg,shadowmask_pars_fragment:Eg,skinbase_vertex:bg,skinning_pars_vertex:Tg,skinning_vertex:Ag,skinnormal_vertex:wg,specularmap_fragment:Rg,specularmap_pars_fragment:Cg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Pg,transmission_fragment:Dg,transmission_pars_fragment:Lg,uv_pars_fragment:Ug,uv_pars_vertex:Ng,uv_vertex:Fg,worldpos_vertex:Og,background_vert:Bg,background_frag:zg,backgroundCube_vert:Gg,backgroundCube_frag:Vg,cube_vert:kg,cube_frag:Hg,depth_vert:Wg,depth_frag:Xg,distance_vert:Yg,distance_frag:Zg,equirect_vert:Kg,equirect_frag:qg,linedashed_vert:jg,linedashed_frag:Jg,meshbasic_vert:$g,meshbasic_frag:Qg,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:r0,meshnormal_frag:s0,meshphong_vert:a0,meshphong_frag:o0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:f0,points_frag:d0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:_0},bt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Fn={basic:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:$e([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:$e([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:$e([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new re(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:$e([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:$e([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:$e([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:$e([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:$e([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:$e([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:$e([bt.common,bt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:$e([bt.lights,bt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Fn.physical={uniforms:$e([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const ca={r:0,b:0,g:0},Oi=new Wn,v0=new be;function x0(n,t,e,i,r,s){const a=new re(0);let o=r===!0?0:1,c,l,h=null,u=0,f=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const S=v.backgroundBlurriness>0;b=t.get(b,S)}return b}function p(v){let b=!1;const S=d(v);S===null?g(a,o):S&&S.isColor&&(g(S,1),b=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,b){const S=d(b);S&&(S.isCubeTexture||S.mapping===Wa)?(l===void 0&&(l=new An(new Ps(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Br(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Oi.copy(b.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(Oi)),l.material.toneMapped=se.getTransfer(S.colorSpace)!==pe,(h!==S||u!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new An(new Ya(2,2),new Xn({name:"BackgroundMaterial",uniforms:Br(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=se.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,b){v.getRGB(ca,nf(n)),e.buffers.color.setClear(ca.r,ca.g,ca.b,b,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:_,dispose:m}}function M0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(P,F,U,y,A){let R=!1;const D=u(P,y,U,F);s!==D&&(s=D,l(s.object)),R=d(P,y,U,A),R&&p(P,y,U,A),A!==null&&t.update(A,n.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,S(P,F,U,y),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(A).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,F,U,y){const A=y.wireframe===!0;let R=i[F.id];R===void 0&&(R={},i[F.id]=R);const D=P.isInstancedMesh===!0?P.id:0;let O=R[D];O===void 0&&(O={},R[D]=O);let G=O[U.id];G===void 0&&(G={},O[U.id]=G);let B=G[A];return B===void 0&&(B=f(c()),G[A]=B),B}function f(P){const F=[],U=[],y=[];for(let A=0;A<e;A++)F[A]=0,U[A]=0,y[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:y,object:P,attributes:{},index:null}}function d(P,F,U,y){const A=s.attributes,R=F.attributes;let D=0;const O=U.getAttributes();for(const G in O)if(O[G].location>=0){const X=A[G];let H=R[G];if(H===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),X===void 0||X.attribute!==H||H&&X.data!==H.data)return!0;D++}return s.attributesNum!==D||s.index!==y}function p(P,F,U,y){const A={},R=F.attributes;let D=0;const O=U.getAttributes();for(const G in O)if(O[G].location>=0){let X=R[G];X===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const H={};H.attribute=X,X&&X.data&&(H.data=X.data),A[G]=H,D++}s.attributes=A,s.attributesNum=D,s.index=y}function _(){const P=s.newAttributes;for(let F=0,U=P.length;F<U;F++)P[F]=0}function g(P){m(P,0)}function m(P,F){const U=s.newAttributes,y=s.enabledAttributes,A=s.attributeDivisors;U[P]=1,y[P]===0&&(n.enableVertexAttribArray(P),y[P]=1),A[P]!==F&&(n.vertexAttribDivisor(P,F),A[P]=F)}function v(){const P=s.newAttributes,F=s.enabledAttributes;for(let U=0,y=F.length;U<y;U++)F[U]!==P[U]&&(n.disableVertexAttribArray(U),F[U]=0)}function b(P,F,U,y,A,R,D){D===!0?n.vertexAttribIPointer(P,F,U,A,R):n.vertexAttribPointer(P,F,U,y,A,R)}function S(P,F,U,y){_();const A=y.attributes,R=U.getAttributes(),D=F.defaultAttributeValues;for(const O in R){const G=R[O];if(G.location>=0){let B=A[O];if(B===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),B!==void 0){const X=B.normalized,H=B.itemSize,q=t.get(B);if(q===void 0)continue;const tt=q.buffer,nt=q.type,V=q.bytesPerElement,k=nt===n.INT||nt===n.UNSIGNED_INT||B.gpuType===mc;if(B.isInterleavedBufferAttribute){const et=B.data,ot=et.stride,st=B.offset;if(et.isInstancedInterleavedBuffer){for(let j=0;j<G.locationSize;j++)m(G.location+j,et.meshPerAttribute);P.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let j=0;j<G.locationSize;j++)g(G.location+j);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let j=0;j<G.locationSize;j++)b(G.location+j,H/G.locationSize,nt,X,ot*V,(st+H/G.locationSize*j)*V,k)}else{if(B.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)m(G.location+et,B.meshPerAttribute);P.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let et=0;et<G.locationSize;et++)g(G.location+et);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let et=0;et<G.locationSize;et++)b(G.location+et,H/G.locationSize,nt,X,H*V,H/G.locationSize*et*V,k)}}else if(D!==void 0){const X=D[O];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(G.location,X);break;case 3:n.vertexAttrib3fv(G.location,X);break;case 4:n.vertexAttrib4fv(G.location,X);break;default:n.vertexAttrib1fv(G.location,X)}}}}v()}function C(){M();for(const P in i){const F=i[P];for(const U in F){const y=F[U];for(const A in y){const R=y[A];for(const D in R)h(R[D].object),delete R[D];delete y[A]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const U in F){const y=F[U];for(const A in y){const R=y[A];for(const D in R)h(R[D].object),delete R[D];delete y[A]}}delete i[P.id]}function w(P){for(const F in i){const U=i[F];for(const y in U){const A=U[y];if(A[P.id]===void 0)continue;const R=A[P.id];for(const D in R)h(R[D].object),delete R[D];delete A[P.id]}}}function x(P){for(const F in i){const U=i[F],y=P.isInstancedMesh===!0?P.id:0,A=U[y];if(A!==void 0){for(const R in A){const D=A[R];for(const O in D)h(D[O].object),delete D[O];delete A[R]}delete U[y],Object.keys(U).length===0&&delete i[F]}}}function M(){L(),a=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function y0(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)a(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];e.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function S0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Tn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==cn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Bn&&!x)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Xt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:S,maxSamples:C,samples:E}}function E0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Ti,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!r||p===null||p.length===0||s&&!g)s?h(null):l();else{const v=s?0:i,b=v*4;let S=m.clippingState||null;c.value=S,S=h(p,f,b,d);for(let C=0;C!==b;++C)S[C]=e[C];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,S=d;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const Ci=4,Dh=[.125,.215,.35,.446,.526,.582],Wi=20,b0=256,ts=new Tc,Lh=new re;let Po=null,Do=0,Lo=0,Uo=!1;const T0=new K;class Uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=T0}=s;Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Po,Do,Lo),this._renderer.xr.enabled=Uo,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:ci,format:Tn,colorSpace:Or,depthBuffer:!1},r=Nh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A0(s)),this._blurMaterial=R0(s,t,e),this._ggxMaterial=w0(s,t,e)}return r}_compileMaterial(t){const e=new An(new Ke,t);this._renderer.compile(e,ts)}_sceneToCubeUV(t,e,i,r,s){const c=new pn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Lh),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new Ps,new $u({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Lh),m=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const C=this._cubeSize;_r(r,S*C,b>2?C:0,C,C),u.setRenderTarget(r),m&&u.render(_,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===$i||t.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;_r(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ts)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,d=u*f,{_lodMax:p}=this,_=this._sizeLods[i],g=3*_*(i>p-Ci?i-p+Ci:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,_r(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,ts),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,_r(t,g,m,3*_,2*_),r.setRenderTarget(t),r.render(o,ts)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&le("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=l;const f=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wi-1),_=s/p,g=isFinite(s)?1+Math.floor(h*_):Wi;g>Wi&&Xt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wi}`);const m=[];let v=0;for(let w=0;w<Wi;++w){const x=w/_,M=Math.exp(-x*x/2);m.push(M),w===0?v+=M:w<g&&(v+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=p,f.mipInt.value=b-i;const S=this._sizeLods[r],C=3*S*(r>b-Ci?r-b+Ci:0),E=4*(this._cubeSize-S);_r(e,C,E,3*S,2*S),c.setRenderTarget(e),c.render(u,ts)}}function A0(n){const t=[],e=[],i=[];let r=n;const s=n-Ci+1+Dh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Ci?c=Dh[a-n+Ci-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*d),b=new Float32Array(g*p*d),S=new Float32Array(m*p*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,x=E>2?0:-1,M=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];v.set(M,_*p*E),b.set(f,g*p*E);const L=[E,E,E,E,E,E];S.set(L,m*p*E)}const C=new Ke;C.setAttribute("position",new kn(v,_)),C.setAttribute("uv",new kn(b,g)),C.setAttribute("faceIndex",new kn(S,m)),i.push(new An(C,null)),r>Ci&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Nh(n,t,e){const i=new Vn(n,t,e);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function w0(n,t,e){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function R0(n,t,e){const i=new Float32Array(Wi),r=new K(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Za(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Fh(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Oh(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}class lf extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new tf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:ai});s.uniforms.tEquirect.value=e;const a=new An(r,s),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Xe),new Up(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function C0(n){let t=new WeakMap,e=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===no||d===io)if(t.has(f)){const p=t.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new lf(p.height);return _.fromEquirectangularTexture(n,f),t.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===no||d===io,_=d===$i||d===Nr;if(p||_){let g=e.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Uh(n)),g=p?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return p&&v&&v.height>0||_&&v&&c(v)?(i===null&&(i=new Uh(n)),g=p?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===no?f.mapping=$i:d===io&&(f.mapping=Nr),f}function c(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function I0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&La("WebGLRenderer: "+i+" extension not supported."),r}}}function P0(n,t,e,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let b=0,S=v.length;b<S;b+=3){const C=v[b+0],E=v[b+1],w=v[b+2];f.push(C,E,E,w,w,C)}}else{const v=p.array;_=p.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const C=b+0,E=b+1,w=b+2;f.push(C,E,E,w,w,C)}}const g=new(p.count>=65535?Ju:ju)(f,1);g.version=_;const m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function D0(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),e.update(d,i,1)}function l(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,f*a,p),e.update(d,i,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,i,1)}function u(f,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v]*_[v];e.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function U0(n,t,e){const i=new WeakMap,r=new Ae;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let M=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let b=0;d===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let S=o.attributes.position.count*b,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*C*4*u),w=new Zu(E,S,C,u);w.type=Bn,w.needsUpdate=!0;const x=b*4;for(let L=0;L<u;L++){const P=g[L],F=m[L],U=v[L],y=S*C*4*L;for(let A=0;A<P.count;A++){const R=A*x;d===!0&&(r.fromBufferAttribute(P,A),E[y+R+0]=r.x,E[y+R+1]=r.y,E[y+R+2]=r.z,E[y+R+3]=0),p===!0&&(r.fromBufferAttribute(F,A),E[y+R+4]=r.x,E[y+R+5]=r.y,E[y+R+6]=r.z,E[y+R+7]=0),_===!0&&(r.fromBufferAttribute(U,A),E[y+R+8]=r.x,E[y+R+9]=r.y,E[y+R+10]=r.z,E[y+R+11]=U.itemSize===4?r.w:1)}}f={count:u,texture:w,size:new qt(S,C)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const p=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function N0(n,t,e,i,r){let s=new WeakMap;function a(l){const h=r.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const F0={[Iu]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Du]:"CINEON_TONE_MAPPING",[Lu]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Fu]:"NEUTRAL_TONE_MAPPING",[Uu]:"CUSTOM_TONE_MAPPING"};function O0(n,t,e,i,r){const s=new Vn(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Vn(t,e,{type:ci,depthBuffer:!1,stencilBuffer:!1}),o=new Ke;o.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ye([0,2,0,0,2,0],2));const c=new Rp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new An(o,c),h=new Tc(-1,1,1,-1,0,1);let u=null,f=null,d=!1,p,_=null,g=[],m=!1;this.setSize=function(v,b){s.setSize(v,b),a.setSize(v,b);for(let S=0;S<g.length;S++){const C=g[S];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){g=v,m=g.length>0&&g[0].isRenderPass===!0;const b=s.width,S=s.height;for(let C=0;C<g.length;C++){const E=g[C];E.setSize&&E.setSize(b,S)}},this.begin=function(v,b){if(d||v.toneMapping===Gn&&g.length===0)return!1;if(_=b,b!==null){const S=b.width,C=b.height;(s.width!==S||s.height!==C)&&this.setSize(S,C)}return m===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=Gn,!0},this.hasRenderPass=function(){return m},this.end=function(v,b){v.toneMapping=p,d=!0;let S=s,C=a;for(let E=0;E<g.length;E++){const w=g[E];if(w.enabled!==!1&&(w.render(v,C,S,b),w.needsSwap!==!1)){const x=S;S=C,C=x}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,c.defines={},se.getTransfer(u)===pe&&(c.defines.SRGB_TRANSFER="");const E=F0[f];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(l,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const cf=new tn,$l=new Ts(1,1),hf=new Zu,uf=new np,ff=new tf,Bh=[],zh=[],Gh=new Float32Array(16),Vh=new Float32Array(9),kh=new Float32Array(4);function kr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Bh[r];if(s===void 0&&(s=new Float32Array(r),Bh[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ka(n,t){let e=zh[t];e===void 0&&(e=new Int32Array(t),zh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function B0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function G0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function k0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;kh.set(i),n.uniformMatrix2fv(this.addr,!1,kh),Le(e,i)}}function H0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Vh.set(i),n.uniformMatrix3fv(this.addr,!1,Vh),Le(e,i)}}function W0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Gh.set(i),n.uniformMatrix4fv(this.addr,!1,Gh),Le(e,i)}}function X0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function Z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function q0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function j0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function J0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function $0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function Q0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($l.compareFunction=e.isReversedDepthBuffer()?Sc:yc,s=$l):s=cf,e.setTexture2D(t||s,r)}function t_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||uf,r)}function e_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ff,r)}function n_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||hf,r)}function i_(n){switch(n){case 5126:return B0;case 35664:return z0;case 35665:return G0;case 35666:return V0;case 35674:return k0;case 35675:return H0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return K0;case 5125:return q0;case 36294:return j0;case 36295:return J0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}function r_(n,t){n.uniform1fv(this.addr,t)}function s_(n,t){const e=kr(t,this.size,2);n.uniform2fv(this.addr,e)}function a_(n,t){const e=kr(t,this.size,3);n.uniform3fv(this.addr,e)}function o_(n,t){const e=kr(t,this.size,4);n.uniform4fv(this.addr,e)}function l_(n,t){const e=kr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function c_(n,t){const e=kr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function h_(n,t){const e=kr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function u_(n,t){n.uniform1iv(this.addr,t)}function f_(n,t){n.uniform2iv(this.addr,t)}function d_(n,t){n.uniform3iv(this.addr,t)}function p_(n,t){n.uniform4iv(this.addr,t)}function m_(n,t){n.uniform1uiv(this.addr,t)}function g_(n,t){n.uniform2uiv(this.addr,t)}function __(n,t){n.uniform3uiv(this.addr,t)}function v_(n,t){n.uniform4uiv(this.addr,t)}function x_(n,t,e){const i=this.cache,r=t.length,s=Ka(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=$l:a=cf;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function M_(n,t,e){const i=this.cache,r=t.length,s=Ka(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||uf,s[a])}function y_(n,t,e){const i=this.cache,r=t.length,s=Ka(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ff,s[a])}function S_(n,t,e){const i=this.cache,r=t.length,s=Ka(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||hf,s[a])}function E_(n){switch(n){case 5126:return r_;case 35664:return s_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return S_}}class b_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=i_(e.type)}}class T_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E_(e.type)}}class A_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const No=/(\w+)(\])?(\[|\.)?/g;function Hh(n,t){n.seq.push(t),n.map[t.id]=t}function w_(n,t,e){const i=n.name,r=i.length;for(No.lastIndex=0;;){const s=No.exec(i),a=No.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Hh(e,l===void 0?new b_(o,n,t):new T_(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new A_(o),Hh(e,u)),e=u}}}class Ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);w_(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Wh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const R_=37297;let C_=0;function I_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Xh=new jt;function P_(n){se._getMatrix(Xh,se.workingColorSpace,n);const t=`mat3( ${Xh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case Pa:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+I_(n.getShaderSource(t),o)}else return s}function D_(n,t){const e=P_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const L_={[Iu]:"Linear",[Pu]:"Reinhard",[Du]:"Cineon",[Lu]:"ACESFilmic",[Nu]:"AgX",[Fu]:"Neutral",[Uu]:"Custom"};function U_(n,t){const e=L_[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ha=new K;function N_(){se.getLuminanceCoefficients(ha);const n=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function O_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function B_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function us(n){return n!==""}function Zh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(n){return n.replace(z_,V_)}const G_=new Map;function V_(n,t){let e=Jt[t];if(e===void 0){const i=G_.get(t);if(i!==void 0)e=Jt[i],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ql(e)}const k_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(n){return n.replace(k_,H_)}function H_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const W_={[xa]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function X_(n){return W_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y_={[$i]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function Z_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Y_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const K_={[Nr]:"ENVMAP_MODE_REFRACTION"};function q_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":K_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j_={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Nd]:"ENVMAP_BLENDING_ADD"};function J_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":j_[n.combine]||"ENVMAP_BLENDING_NONE"}function $_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Q_(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=X_(e),l=Z_(e),h=q_(e),u=J_(e),f=$_(e),d=F_(e),p=O_(s),_=r.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(us).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(us).join(`
`),m.length>0&&(m+=`
`)):(g=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),m=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?U_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,D_("linearToOutputTexel",e.outputColorSpace),N_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),a=Ql(a),a=Zh(a,e),a=Kh(a,e),o=Ql(o),o=Zh(o,e),o=Kh(o,e),a=qh(a),o=qh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=v+g+a,S=v+m+o,C=Wh(r,r.VERTEX_SHADER,b),E=Wh(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",U=r.getShaderInfoLog(C)||"",y=r.getShaderInfoLog(E)||"",A=F.trim(),R=U.trim(),D=y.trim();let O=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,E);else{const B=Yh(r,C,"vertex"),X=Yh(r,E,"fragment");le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+A+`
`+B+`
`+X)}else A!==""?Xt("WebGLProgram: Program Info Log:",A):(R===""||D==="")&&(G=!1);G&&(P.diagnostics={runnable:O,programLog:A,vertexShader:{log:R,prefix:g},fragmentShader:{log:D,prefix:m}})}r.deleteShader(C),r.deleteShader(E),x=new Ta(r,_),M=B_(r,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(_,R_)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let tv=0;class ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new nv(t),e.set(t,i)),i}}class nv{constructor(t){this.id=tv++,this.code=t,this.usedTimes=0}}function iv(n,t,e,i,r,s){const a=new Ku,o=new ev,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,M,L,P,F){const U=P.fog,y=F.geometry,A=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,R=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=t.get(x.envMap||A,R),O=D&&D.mapping===Wa?D.image.height:null,G=d[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const B=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,X=B!==void 0?B.length:0;let H=0;y.morphAttributes.position!==void 0&&(H=1),y.morphAttributes.normal!==void 0&&(H=2),y.morphAttributes.color!==void 0&&(H=3);let q,tt,nt,V;if(G){const de=Fn[G];q=de.vertexShader,tt=de.fragmentShader}else q=x.vertexShader,tt=x.fragmentShader,o.update(x),nt=o.getVertexShaderID(x),V=o.getFragmentShaderID(x);const k=n.getRenderTarget(),et=n.state.buffers.depth.getReversed(),ot=F.isInstancedMesh===!0,st=F.isBatchedMesh===!0,j=!!x.map,ht=!!x.matcap,ct=!!D,xt=!!x.aoMap,gt=!!x.lightMap,dt=!!x.bumpMap,Rt=!!x.normalMap,z=!!x.displacementMap,te=!!x.emissiveMap,Yt=!!x.metalnessMap,ne=!!x.roughnessMap,Dt=x.anisotropy>0,N=x.clearcoat>0,T=x.dispersion>0,Y=x.iridescence>0,at=x.sheen>0,lt=x.transmission>0,rt=Dt&&!!x.anisotropyMap,Ut=N&&!!x.clearcoatMap,Mt=N&&!!x.clearcoatNormalMap,kt=N&&!!x.clearcoatRoughnessMap,Wt=Y&&!!x.iridescenceMap,pt=Y&&!!x.iridescenceThicknessMap,_t=at&&!!x.sheenColorMap,Nt=at&&!!x.sheenRoughnessMap,Ot=!!x.specularMap,Ct=!!x.specularColorMap,$t=!!x.specularIntensityMap,W=lt&&!!x.transmissionMap,yt=lt&&!!x.thicknessMap,vt=!!x.gradientMap,Lt=!!x.alphaMap,mt=x.alphaTest>0,it=!!x.alphaHash,Ft=!!x.extensions;let Zt=Gn;x.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const Me={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:tt,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:st,batchingColor:st&&F._colorsTexture!==null,instancing:ot,instancingColor:ot&&F.instanceColor!==null,instancingMorph:ot&&F.morphTexture!==null,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Or,alphaToCoverage:!!x.alphaToCoverage,map:j,matcap:ht,envMap:ct,envMapMode:ct&&D.mapping,envMapCubeUVHeight:O,aoMap:xt,lightMap:gt,bumpMap:dt,normalMap:Rt,displacementMap:z,emissiveMap:te,normalMapObjectSpace:Rt&&x.normalMapType===Bd,normalMapTangentSpace:Rt&&x.normalMapType===Xu,metalnessMap:Yt,roughnessMap:ne,anisotropy:Dt,anisotropyMap:rt,clearcoat:N,clearcoatMap:Ut,clearcoatNormalMap:Mt,clearcoatRoughnessMap:kt,dispersion:T,iridescence:Y,iridescenceMap:Wt,iridescenceThicknessMap:pt,sheen:at,sheenColorMap:_t,sheenRoughnessMap:Nt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:$t,transmission:lt,transmissionMap:W,thicknessMap:yt,gradientMap:vt,opaque:x.transparent===!1&&x.blending===Rr&&x.alphaToCoverage===!1,alphaMap:Lt,alphaTest:mt,alphaHash:it,combine:x.combine,mapUv:j&&p(x.map.channel),aoMapUv:xt&&p(x.aoMap.channel),lightMapUv:gt&&p(x.lightMap.channel),bumpMapUv:dt&&p(x.bumpMap.channel),normalMapUv:Rt&&p(x.normalMap.channel),displacementMapUv:z&&p(x.displacementMap.channel),emissiveMapUv:te&&p(x.emissiveMap.channel),metalnessMapUv:Yt&&p(x.metalnessMap.channel),roughnessMapUv:ne&&p(x.roughnessMap.channel),anisotropyMapUv:rt&&p(x.anisotropyMap.channel),clearcoatMapUv:Ut&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ot&&p(x.specularMap.channel),specularColorMapUv:Ct&&p(x.specularColorMap.channel),specularIntensityMapUv:$t&&p(x.specularIntensityMap.channel),transmissionMapUv:W&&p(x.transmissionMap.channel),thicknessMapUv:yt&&p(x.thicknessMap.channel),alphaMapUv:Lt&&p(x.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(Rt||Dt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!y.attributes.uv&&(j||Lt),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||y.attributes.normal===void 0&&Rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:et,skinning:F.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:H,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:j&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===pe,decodeVideoTextureEmissive:te&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===Qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ft&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&x.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)M.push(L),M.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(M,x),v(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function v(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const M=d[x.type];let L;if(M){const P=Fn[M];L=Tp.clone(P.uniforms)}else L=x.uniforms;return L}function S(x,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new Q_(n,M,x,r),l.push(L),h.set(M,L)),L}function C(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:S,releaseProgram:C,releaseShaderCache:E,programs:l,dispose:w}}function rv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function sv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Jh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $h(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,_,g,m){let v=n[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=m),t++,v}function c(f,d,p,_,g,m){const v=o(f,d,p,_,g,m);p.transmission>0?i.push(v):p.transparent===!0?r.push(v):e.push(v)}function l(f,d,p,_,g,m){const v=o(f,d,p,_,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?r.unshift(v):e.unshift(v)}function h(f,d){e.length>1&&e.sort(f||sv),i.length>1&&i.sort(d||Jh),r.length>1&&r.sort(d||Jh)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:u,sort:h}}function av(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new $h,n.set(i,[a])):r>=s.length?(a=new $h,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ov(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new re};break;case"SpotLight":e={position:new K,direction:new K,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function lv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let cv=0;function hv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function uv(n){const t=new ov,e=lv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new K);const r=new K,s=new be,a=new be;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,v=0,b=0,S=0,C=0,E=0,w=0;l.sort(hv);for(let M=0,L=l.length;M<L;M++){const P=l[M],F=P.color,U=P.intensity,y=P.distance;let A=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fr?A=P.shadow.map.texture:A=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*U,u+=F.g*U,f+=F.b*U;else if(P.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(P.sh.coefficients[R],U);w++}else if(P.isDirectionalLight){const R=t.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const D=P.shadow,O=e.get(P);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=A,i.directionalShadowMatrix[d]=P.shadow.matrix,v++}i.directional[d]=R,d++}else if(P.isSpotLight){const R=t.get(P);R.position.setFromMatrixPosition(P.matrixWorld),R.color.copy(F).multiplyScalar(U),R.distance=y,R.coneCos=Math.cos(P.angle),R.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),R.decay=P.decay,i.spot[_]=R;const D=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,D.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[_]=D.matrix,P.castShadow){const O=e.get(P);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=A,S++}_++}else if(P.isRectAreaLight){const R=t.get(P);R.color.copy(F).multiplyScalar(U),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=R,g++}else if(P.isPointLight){const R=t.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity),R.distance=P.distance,R.decay=P.decay,P.castShadow){const D=P.shadow,O=e.get(P);O.shadowIntensity=D.intensity,O.shadowBias=D.bias,O.shadowNormalBias=D.normalBias,O.shadowRadius=D.radius,O.shadowMapSize=D.mapSize,O.shadowCameraNear=D.camera.near,O.shadowCameraFar=D.camera.far,i.pointShadow[p]=O,i.pointShadowMap[p]=A,i.pointShadowMatrix[p]=P.shadow.matrix,b++}i.point[p]=R,p++}else if(P.isHemisphereLight){const R=t.get(P);R.skyColor.copy(P.color).multiplyScalar(U),R.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[m]=R,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==S||x.numSpotMaps!==C||x.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=S,x.numSpotMaps=C,x.numLightProbes=w,i.version=cv++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const b=l[m];if(b.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),u++}else if(b.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(b.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:i}}function Qh(n){const t=new uv(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function fv(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Qh(n),t.set(r,[o])):s>=a.length?(o=new Qh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mv=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],gv=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],tu=new be,es=new K,Fo=new K;function _v(n,t,e){let i=new bc;const r=new qt,s=new qt,a=new Ae,o=new Cp,c=new Ip,l={},h=e.maxTextureSize,u={[li]:Qe,[Qe]:li,[ni]:ni},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:dv,fragmentShader:pv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ke;p.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xa;let m=this.type;this.render=function(E,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===md&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xa);const M=n.getRenderTarget(),L=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=m!==this.type;U&&w.traverse(function(y){y.material&&(Array.isArray(y.material)?y.material.forEach(A=>A.needsUpdate=!0):y.material.needsUpdate=!0)});for(let y=0,A=E.length;y<A;y++){const R=E[y],D=R.shadow;if(D===void 0){Xt("WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();r.multiply(O),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,D.mapSize.y=s.y));const G=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=G,D.map===null||U===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===hs){if(R.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Vn(r.x,r.y,{format:Fr,type:ci,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),D.map.texture.name=R.name+".shadowMap",D.map.depthTexture=new Ts(r.x,r.y,Bn),D.map.depthTexture.name=R.name+".shadowMapDepth",D.map.depthTexture.format=hi,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ve,D.map.depthTexture.magFilter=Ve}else R.isPointLight?(D.map=new lf(r.x),D.map.depthTexture=new Sp(r.x,Hn)):(D.map=new Vn(r.x,r.y),D.map.depthTexture=new Ts(r.x,r.y,Hn)),D.map.depthTexture.name=R.name+".shadowMap",D.map.depthTexture.format=hi,this.type===xa?(D.map.depthTexture.compareFunction=G?Sc:yc,D.map.depthTexture.minFilter=Xe,D.map.depthTexture.magFilter=Xe):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ve,D.map.depthTexture.magFilter=Ve);D.camera.updateProjectionMatrix()}const B=D.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<B;X++){if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,X),n.clear();else{X===0&&(n.setRenderTarget(D.map),n.clear());const H=D.getViewport(X);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),F.viewport(a)}if(R.isPointLight){const H=D.camera,q=D.matrix,tt=R.distance||H.far;tt!==H.far&&(H.far=tt,H.updateProjectionMatrix()),es.setFromMatrixPosition(R.matrixWorld),H.position.copy(es),Fo.copy(H.position),Fo.add(mv[X]),H.up.copy(gv[X]),H.lookAt(Fo),H.updateMatrixWorld(),q.makeTranslation(-es.x,-es.y,-es.z),tu.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),D._frustum.setFromProjectionMatrix(tu,H.coordinateSystem,H.reversedDepth)}else D.updateMatrices(R);i=D.getFrustum(),S(w,x,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===hs&&v(D,x),D.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,L,P)};function v(E,w){const x=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vn(r.x,r.y,{format:Fr,type:ci})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,x,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,x,d,_,null)}function b(E,w,x,M){let L=null;const P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)L=P;else if(L=x.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=L.uuid,U=w.uuid;let y=l[F];y===void 0&&(y={},l[F]=y);let A=y[U];A===void 0&&(A=L.clone(),y[U]=A,w.addEventListener("dispose",C)),L=A}if(L.visible=w.visible,L.wireframe=w.wireframe,M===hs?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:u[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=n.properties.get(L);F.light=x}return L}function S(E,w,x,M,L){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===hs)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const U=t.update(E),y=E.material;if(Array.isArray(y)){const A=U.groups;for(let R=0,D=A.length;R<D;R++){const O=A[R],G=y[O.materialIndex];if(G&&G.visible){const B=b(E,G,M,L);E.onBeforeShadow(n,E,w,x,U,B,O),n.renderBufferDirect(x,null,U,B,E,O),E.onAfterShadow(n,E,w,x,U,B,O)}}}else if(y.visible){const A=b(E,y,M,L);E.onBeforeShadow(n,E,w,x,U,A,null),n.renderBufferDirect(x,null,U,A,E,null),E.onAfterShadow(n,E,w,x,U,A,null)}}const F=E.children;for(let U=0,y=F.length;U<y;U++)S(F[U],w,x,M,L)}function C(E){E.target.removeEventListener("dispose",C);for(const x in l){const M=l[x],L=E.target.uuid;L in M&&(M[L].dispose(),delete M[L])}}}function vv(n,t){function e(){let W=!1;const yt=new Ae;let vt=null;const Lt=new Ae(0,0,0,0);return{setMask:function(mt){vt!==mt&&!W&&(n.colorMask(mt,mt,mt,mt),vt=mt)},setLocked:function(mt){W=mt},setClear:function(mt,it,Ft,Zt,Me){Me===!0&&(mt*=Zt,it*=Zt,Ft*=Zt),yt.set(mt,it,Ft,Zt),Lt.equals(yt)===!1&&(n.clearColor(mt,it,Ft,Zt),Lt.copy(yt))},reset:function(){W=!1,vt=null,Lt.set(-1,0,0,0)}}}function i(){let W=!1,yt=!1,vt=null,Lt=null,mt=null;return{setReversed:function(it){if(yt!==it){const Ft=t.get("EXT_clip_control");it?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),yt=it;const Zt=mt;mt=null,this.setClear(Zt)}},getReversed:function(){return yt},setTest:function(it){it?k(n.DEPTH_TEST):et(n.DEPTH_TEST)},setMask:function(it){vt!==it&&!W&&(n.depthMask(it),vt=it)},setFunc:function(it){if(yt&&(it=Kd[it]),Lt!==it){switch(it){case ll:n.depthFunc(n.NEVER);break;case cl:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case Ur:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case fl:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Lt=it}},setLocked:function(it){W=it},setClear:function(it){mt!==it&&(mt=it,yt&&(it=1-it),n.clearDepth(it))},reset:function(){W=!1,vt=null,Lt=null,mt=null,yt=!1}}}function r(){let W=!1,yt=null,vt=null,Lt=null,mt=null,it=null,Ft=null,Zt=null,Me=null;return{setTest:function(de){W||(de?k(n.STENCIL_TEST):et(n.STENCIL_TEST))},setMask:function(de){yt!==de&&!W&&(n.stencilMask(de),yt=de)},setFunc:function(de,Kn,qn){(vt!==de||Lt!==Kn||mt!==qn)&&(n.stencilFunc(de,Kn,qn),vt=de,Lt=Kn,mt=qn)},setOp:function(de,Kn,qn){(it!==de||Ft!==Kn||Zt!==qn)&&(n.stencilOp(de,Kn,qn),it=de,Ft=Kn,Zt=qn)},setLocked:function(de){W=de},setClear:function(de){Me!==de&&(n.clearStencil(de),Me=de)},reset:function(){W=!1,yt=null,vt=null,Lt=null,mt=null,it=null,Ft=null,Zt=null,Me=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,v=null,b=null,S=null,C=null,E=null,w=new re(0,0,0),x=0,M=!1,L=null,P=null,F=null,U=null,y=null;const A=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,D=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(O)[1]),R=D>=1):O.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),R=D>=2);let G=null,B={};const X=n.getParameter(n.SCISSOR_BOX),H=n.getParameter(n.VIEWPORT),q=new Ae().fromArray(X),tt=new Ae().fromArray(H);function nt(W,yt,vt,Lt){const mt=new Uint8Array(4),it=n.createTexture();n.bindTexture(W,it),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<vt;Ft++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,Lt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(yt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return it}const V={};V[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(n.DEPTH_TEST),a.setFunc(Ur),dt(!1),Rt(qc),k(n.CULL_FACE),xt(ai);function k(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function et(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function ot(W,yt){return u[W]!==yt?(n.bindFramebuffer(W,yt),u[W]=yt,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function st(W,yt){let vt=d,Lt=!1;if(W){vt=f.get(yt),vt===void 0&&(vt=[],f.set(yt,vt));const mt=W.textures;if(vt.length!==mt.length||vt[0]!==n.COLOR_ATTACHMENT0){for(let it=0,Ft=mt.length;it<Ft;it++)vt[it]=n.COLOR_ATTACHMENT0+it;vt.length=mt.length,Lt=!0}}else vt[0]!==n.BACK&&(vt[0]=n.BACK,Lt=!0);Lt&&n.drawBuffers(vt)}function j(W){return p!==W?(n.useProgram(W),p=W,!0):!1}const ht={[Hi]:n.FUNC_ADD,[_d]:n.FUNC_SUBTRACT,[vd]:n.FUNC_REVERSE_SUBTRACT};ht[xd]=n.MIN,ht[Md]=n.MAX;const ct={[yd]:n.ZERO,[Sd]:n.ONE,[Ed]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[Cd]:n.SRC_ALPHA_SATURATE,[wd]:n.DST_COLOR,[Td]:n.DST_ALPHA,[bd]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[Rd]:n.ONE_MINUS_DST_COLOR,[Ad]:n.ONE_MINUS_DST_ALPHA,[Id]:n.CONSTANT_COLOR,[Pd]:n.ONE_MINUS_CONSTANT_COLOR,[Dd]:n.CONSTANT_ALPHA,[Ld]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(W,yt,vt,Lt,mt,it,Ft,Zt,Me,de){if(W===ai){_===!0&&(et(n.BLEND),_=!1);return}if(_===!1&&(k(n.BLEND),_=!0),W!==gd){if(W!==g||de!==M){if((m!==Hi||S!==Hi)&&(n.blendEquation(n.FUNC_ADD),m=Hi,S=Hi),de)switch(W){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $c:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:le("WebGLState: Invalid blending: ",W);break}else switch(W){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jc:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",W);break}v=null,b=null,C=null,E=null,w.set(0,0,0),x=0,g=W,M=de}return}mt=mt||yt,it=it||vt,Ft=Ft||Lt,(yt!==m||mt!==S)&&(n.blendEquationSeparate(ht[yt],ht[mt]),m=yt,S=mt),(vt!==v||Lt!==b||it!==C||Ft!==E)&&(n.blendFuncSeparate(ct[vt],ct[Lt],ct[it],ct[Ft]),v=vt,b=Lt,C=it,E=Ft),(Zt.equals(w)===!1||Me!==x)&&(n.blendColor(Zt.r,Zt.g,Zt.b,Me),w.copy(Zt),x=Me),g=W,M=!1}function gt(W,yt){W.side===ni?et(n.CULL_FACE):k(n.CULL_FACE);let vt=W.side===Qe;yt&&(vt=!vt),dt(vt),W.blending===Rr&&W.transparent===!1?xt(ai):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);const Lt=W.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),te(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):et(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(W){L!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),L=W)}function Rt(W){W!==dd?(k(n.CULL_FACE),W!==P&&(W===qc?n.cullFace(n.BACK):W===pd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):et(n.CULL_FACE),P=W}function z(W){W!==F&&(R&&n.lineWidth(W),F=W)}function te(W,yt,vt){W?(k(n.POLYGON_OFFSET_FILL),(U!==yt||y!==vt)&&(U=yt,y=vt,a.getReversed()&&(yt=-yt),n.polygonOffset(yt,vt))):et(n.POLYGON_OFFSET_FILL)}function Yt(W){W?k(n.SCISSOR_TEST):et(n.SCISSOR_TEST)}function ne(W){W===void 0&&(W=n.TEXTURE0+A-1),G!==W&&(n.activeTexture(W),G=W)}function Dt(W,yt,vt){vt===void 0&&(G===null?vt=n.TEXTURE0+A-1:vt=G);let Lt=B[vt];Lt===void 0&&(Lt={type:void 0,texture:void 0},B[vt]=Lt),(Lt.type!==W||Lt.texture!==yt)&&(G!==vt&&(n.activeTexture(vt),G=vt),n.bindTexture(W,yt||V[W]),Lt.type=W,Lt.texture=yt)}function N(){const W=B[G];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(W){le("WebGLState:",W)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(W){le("WebGLState:",W)}}function at(){try{n.texSubImage2D(...arguments)}catch(W){le("WebGLState:",W)}}function lt(){try{n.texSubImage3D(...arguments)}catch(W){le("WebGLState:",W)}}function rt(){try{n.compressedTexSubImage2D(...arguments)}catch(W){le("WebGLState:",W)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(W){le("WebGLState:",W)}}function Mt(){try{n.texStorage2D(...arguments)}catch(W){le("WebGLState:",W)}}function kt(){try{n.texStorage3D(...arguments)}catch(W){le("WebGLState:",W)}}function Wt(){try{n.texImage2D(...arguments)}catch(W){le("WebGLState:",W)}}function pt(){try{n.texImage3D(...arguments)}catch(W){le("WebGLState:",W)}}function _t(W){q.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),q.copy(W))}function Nt(W){tt.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),tt.copy(W))}function Ot(W,yt){let vt=l.get(yt);vt===void 0&&(vt=new WeakMap,l.set(yt,vt));let Lt=vt.get(W);Lt===void 0&&(Lt=n.getUniformBlockIndex(yt,W.name),vt.set(W,Lt))}function Ct(W,yt){const Lt=l.get(yt).get(W);c.get(yt)!==Lt&&(n.uniformBlockBinding(yt,Lt,W.__bindingPointIndex),c.set(yt,Lt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},G=null,B={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,v=null,b=null,S=null,C=null,E=null,w=new re(0,0,0),x=0,M=!1,L=null,P=null,F=null,U=null,y=null,q.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:k,disable:et,bindFramebuffer:ot,drawBuffers:st,useProgram:j,setBlending:xt,setMaterial:gt,setFlipSided:dt,setCullFace:Rt,setLineWidth:z,setPolygonOffset:te,setScissorTest:Yt,activeTexture:ne,bindTexture:Dt,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:Wt,texImage3D:pt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Mt,texStorage3D:kt,texSubImage2D:at,texSubImage3D:lt,compressedTexSubImage2D:rt,compressedTexSubImage3D:Ut,scissor:_t,viewport:Nt,reset:$t}}function xv(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(N,T){return d?new OffscreenCanvas(N,T):Da("canvas")}function _(N,T,Y){let at=1;const lt=Dt(N);if((lt.width>Y||lt.height>Y)&&(at=Y/Math.max(lt.width,lt.height)),at<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const rt=Math.floor(at*lt.width),Ut=Math.floor(at*lt.height);u===void 0&&(u=p(rt,Ut));const Mt=T?p(rt,Ut):u;return Mt.width=rt,Mt.height=Ut,Mt.getContext("2d").drawImage(N,0,0,rt,Ut),Xt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+rt+"x"+Ut+")."),Mt}else return"data"in N&&Xt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),N;return N}function g(N){return N.generateMipmaps}function m(N){n.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(N,T,Y,at,lt=!1){if(N!==null){if(n[N]!==void 0)return n[N];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let rt=T;if(T===n.RED&&(Y===n.FLOAT&&(rt=n.R32F),Y===n.HALF_FLOAT&&(rt=n.R16F),Y===n.UNSIGNED_BYTE&&(rt=n.R8)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(rt=n.R8UI),Y===n.UNSIGNED_SHORT&&(rt=n.R16UI),Y===n.UNSIGNED_INT&&(rt=n.R32UI),Y===n.BYTE&&(rt=n.R8I),Y===n.SHORT&&(rt=n.R16I),Y===n.INT&&(rt=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(rt=n.RG32F),Y===n.HALF_FLOAT&&(rt=n.RG16F),Y===n.UNSIGNED_BYTE&&(rt=n.RG8)),T===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(rt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(rt=n.RG16UI),Y===n.UNSIGNED_INT&&(rt=n.RG32UI),Y===n.BYTE&&(rt=n.RG8I),Y===n.SHORT&&(rt=n.RG16I),Y===n.INT&&(rt=n.RG32I)),T===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),Y===n.UNSIGNED_INT&&(rt=n.RGB32UI),Y===n.BYTE&&(rt=n.RGB8I),Y===n.SHORT&&(rt=n.RGB16I),Y===n.INT&&(rt=n.RGB32I)),T===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(rt=n.RGBA32UI),Y===n.BYTE&&(rt=n.RGBA8I),Y===n.SHORT&&(rt=n.RGBA16I),Y===n.INT&&(rt=n.RGBA32I)),T===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(rt=n.R11F_G11F_B10F)),T===n.RGBA){const Ut=lt?Pa:se.getTransfer(at);Y===n.FLOAT&&(rt=n.RGBA32F),Y===n.HALF_FLOAT&&(rt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(rt=Ut===pe?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function S(N,T){let Y;return N?T===null||T===Hn||T===Es?Y=n.DEPTH24_STENCIL8:T===Bn?Y=n.DEPTH32F_STENCIL8:T===Ss&&(Y=n.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hn||T===Es?Y=n.DEPTH_COMPONENT24:T===Bn?Y=n.DEPTH_COMPONENT32F:T===Ss&&(Y=n.DEPTH_COMPONENT16),Y}function C(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ve&&N.minFilter!==Xe?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function E(N){const T=N.target;T.removeEventListener("dispose",E),x(T),T.isVideoTexture&&h.delete(T)}function w(N){const T=N.target;T.removeEventListener("dispose",w),L(T)}function x(N){const T=i.get(N);if(T.__webglInit===void 0)return;const Y=N.source,at=f.get(Y);if(at){const lt=at[T.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&M(N),Object.keys(at).length===0&&f.delete(Y)}i.remove(N)}function M(N){const T=i.get(N);n.deleteTexture(T.__webglTexture);const Y=N.source,at=f.get(Y);delete at[T.__cacheKey],a.memory.textures--}function L(N){const T=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let lt=0;lt<T.__webglFramebuffer[at].length;lt++)n.deleteFramebuffer(T.__webglFramebuffer[at][lt]);else n.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)n.deleteFramebuffer(T.__webglFramebuffer[at]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=N.textures;for(let at=0,lt=Y.length;at<lt;at++){const rt=i.get(Y[at]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(Y[at])}i.remove(N)}let P=0;function F(){P=0}function U(){const N=P;return N>=r.maxTextures&&Xt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),P+=1,N}function y(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function A(N,T){const Y=i.get(N);if(N.isVideoTexture&&Yt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const at=N.image;if(at===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(Y,N,T);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function R(N,T){const Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){V(Y,N,T);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function D(N,T){const Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){V(Y,N,T);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function O(N,T){const Y=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){k(Y,N,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}const G={[ml]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},B={[Ve]:n.NEAREST,[Fd]:n.NEAREST_MIPMAP_NEAREST,[zs]:n.NEAREST_MIPMAP_LINEAR,[Xe]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},X={[zd]:n.NEVER,[Wd]:n.ALWAYS,[Gd]:n.LESS,[yc]:n.LEQUAL,[Vd]:n.EQUAL,[Sc]:n.GEQUAL,[kd]:n.GREATER,[Hd]:n.NOTEQUAL};function H(N,T){if(T.type===Bn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Xe||T.magFilter===ro||T.magFilter===zs||T.magFilter===Xi||T.minFilter===Xe||T.minFilter===ro||T.minFilter===zs||T.minFilter===Xi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,G[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,G[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,G[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,B[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,B[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,X[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ve||T.minFilter!==zs&&T.minFilter!==Xi||T.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function q(N,T){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",E));const at=T.source;let lt=f.get(at);lt===void 0&&(lt={},f.set(at,lt));const rt=y(T);if(rt!==N.__cacheKey){lt[rt]===void 0&&(lt[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),lt[rt].usedTimes++;const Ut=lt[N.__cacheKey];Ut!==void 0&&(lt[N.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(T)),N.__cacheKey=rt,N.__webglTexture=lt[rt].texture}return Y}function tt(N,T,Y){return Math.floor(Math.floor(N/Y)/T)}function nt(N,T,Y,at){const rt=N.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Y,at,T.data);else{rt.sort((pt,_t)=>pt.start-_t.start);let Ut=0;for(let pt=1;pt<rt.length;pt++){const _t=rt[Ut],Nt=rt[pt],Ot=_t.start+_t.count,Ct=tt(Nt.start,T.width,4),$t=tt(_t.start,T.width,4);Nt.start<=Ot+1&&Ct===$t&&tt(Nt.start+Nt.count-1,T.width,4)===Ct?_t.count=Math.max(_t.count,Nt.start+Nt.count-_t.start):(++Ut,rt[Ut]=Nt)}rt.length=Ut+1;const Mt=n.getParameter(n.UNPACK_ROW_LENGTH),kt=n.getParameter(n.UNPACK_SKIP_PIXELS),Wt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let pt=0,_t=rt.length;pt<_t;pt++){const Nt=rt[pt],Ot=Math.floor(Nt.start/4),Ct=Math.ceil(Nt.count/4),$t=Ot%T.width,W=Math.floor(Ot/T.width),yt=Ct,vt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),e.texSubImage2D(n.TEXTURE_2D,0,$t,W,yt,vt,Y,at,T.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Mt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,kt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Wt)}}function V(N,T,Y){let at=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(at=n.TEXTURE_3D);const lt=q(N,T),rt=T.source;e.bindTexture(at,N.__webglTexture,n.TEXTURE0+Y);const Ut=i.get(rt);if(rt.version!==Ut.__version||lt===!0){e.activeTexture(n.TEXTURE0+Y);const Mt=se.getPrimaries(se.workingColorSpace),kt=T.colorSpace===wi?null:se.getPrimaries(T.colorSpace),Wt=T.colorSpace===wi||Mt===kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let pt=_(T.image,!1,r.maxTextureSize);pt=ne(T,pt);const _t=s.convert(T.format,T.colorSpace),Nt=s.convert(T.type);let Ot=b(T.internalFormat,_t,Nt,T.colorSpace,T.isVideoTexture);H(at,T);let Ct;const $t=T.mipmaps,W=T.isVideoTexture!==!0,yt=Ut.__version===void 0||lt===!0,vt=rt.dataReady,Lt=C(T,pt);if(T.isDepthTexture)Ot=S(T.format===Yi,T.type),yt&&(W?e.texStorage2D(n.TEXTURE_2D,1,Ot,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,pt.width,pt.height,0,_t,Nt,null));else if(T.isDataTexture)if($t.length>0){W&&yt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ot,$t[0].width,$t[0].height);for(let mt=0,it=$t.length;mt<it;mt++)Ct=$t[mt],W?vt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,_t,Nt,Ct.data):e.texImage2D(n.TEXTURE_2D,mt,Ot,Ct.width,Ct.height,0,_t,Nt,Ct.data);T.generateMipmaps=!1}else W?(yt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ot,pt.width,pt.height),vt&&nt(T,pt,_t,Nt)):e.texImage2D(n.TEXTURE_2D,0,Ot,pt.width,pt.height,0,_t,Nt,pt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,Ot,$t[0].width,$t[0].height,pt.depth);for(let mt=0,it=$t.length;mt<it;mt++)if(Ct=$t[mt],T.format!==Tn)if(_t!==null)if(W){if(vt)if(T.layerUpdates.size>0){const Ft=Ph(Ct.width,Ct.height,T.format,T.type);for(const Zt of T.layerUpdates){const Me=Ct.data.subarray(Zt*Ft/Ct.data.BYTES_PER_ELEMENT,(Zt+1)*Ft/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,Zt,Ct.width,Ct.height,1,_t,Me)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,pt.depth,_t,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,Ot,Ct.width,Ct.height,pt.depth,0,Ct.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?vt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,pt.depth,_t,Nt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,Ot,Ct.width,Ct.height,pt.depth,0,_t,Nt,Ct.data)}else{W&&yt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ot,$t[0].width,$t[0].height);for(let mt=0,it=$t.length;mt<it;mt++)Ct=$t[mt],T.format!==Tn?_t!==null?W?vt&&e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,_t,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,Ot,Ct.width,Ct.height,0,Ct.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?vt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,_t,Nt,Ct.data):e.texImage2D(n.TEXTURE_2D,mt,Ot,Ct.width,Ct.height,0,_t,Nt,Ct.data)}else if(T.isDataArrayTexture)if(W){if(yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,Ot,pt.width,pt.height,pt.depth),vt)if(T.layerUpdates.size>0){const mt=Ph(pt.width,pt.height,T.format,T.type);for(const it of T.layerUpdates){const Ft=pt.data.subarray(it*mt/pt.data.BYTES_PER_ELEMENT,(it+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,pt.width,pt.height,1,_t,Nt,Ft)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,_t,Nt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,_t,Nt,pt.data);else if(T.isData3DTexture)W?(yt&&e.texStorage3D(n.TEXTURE_3D,Lt,Ot,pt.width,pt.height,pt.depth),vt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,_t,Nt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,_t,Nt,pt.data);else if(T.isFramebufferTexture){if(yt)if(W)e.texStorage2D(n.TEXTURE_2D,Lt,Ot,pt.width,pt.height);else{let mt=pt.width,it=pt.height;for(let Ft=0;Ft<Lt;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Ot,mt,it,0,_t,Nt,null),mt>>=1,it>>=1}}else if($t.length>0){if(W&&yt){const mt=Dt($t[0]);e.texStorage2D(n.TEXTURE_2D,Lt,Ot,mt.width,mt.height)}for(let mt=0,it=$t.length;mt<it;mt++)Ct=$t[mt],W?vt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,_t,Nt,Ct):e.texImage2D(n.TEXTURE_2D,mt,Ot,_t,Nt,Ct);T.generateMipmaps=!1}else if(W){if(yt){const mt=Dt(pt);e.texStorage2D(n.TEXTURE_2D,Lt,Ot,mt.width,mt.height)}vt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Nt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,_t,Nt,pt);g(T)&&m(at),Ut.__version=rt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function k(N,T,Y){if(T.image.length!==6)return;const at=q(N,T),lt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Y);const rt=i.get(lt);if(lt.version!==rt.__version||at===!0){e.activeTexture(n.TEXTURE0+Y);const Ut=se.getPrimaries(se.workingColorSpace),Mt=T.colorSpace===wi?null:se.getPrimaries(T.colorSpace),kt=T.colorSpace===wi||Ut===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Wt=T.isCompressedTexture||T.image[0].isCompressedTexture,pt=T.image[0]&&T.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!Wt&&!pt?_t[it]=_(T.image[it],!0,r.maxCubemapSize):_t[it]=pt?T.image[it].image:T.image[it],_t[it]=ne(T,_t[it]);const Nt=_t[0],Ot=s.convert(T.format,T.colorSpace),Ct=s.convert(T.type),$t=b(T.internalFormat,Ot,Ct,T.colorSpace),W=T.isVideoTexture!==!0,yt=rt.__version===void 0||at===!0,vt=lt.dataReady;let Lt=C(T,Nt);H(n.TEXTURE_CUBE_MAP,T);let mt;if(Wt){W&&yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,$t,Nt.width,Nt.height);for(let it=0;it<6;it++){mt=_t[it].mipmaps;for(let Ft=0;Ft<mt.length;Ft++){const Zt=mt[Ft];T.format!==Tn?Ot!==null?W?vt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,0,0,Zt.width,Zt.height,Ot,Zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,$t,Zt.width,Zt.height,0,Zt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,0,0,Zt.width,Zt.height,Ot,Ct,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,$t,Zt.width,Zt.height,0,Ot,Ct,Zt.data)}}}else{if(mt=T.mipmaps,W&&yt){mt.length>0&&Lt++;const it=Dt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,$t,it.width,it.height)}for(let it=0;it<6;it++)if(pt){W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Ot,Ct,_t[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,_t[it].width,_t[it].height,0,Ot,Ct,_t[it].data);for(let Ft=0;Ft<mt.length;Ft++){const Me=mt[Ft].image[it].image;W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,0,0,Me.width,Me.height,Ot,Ct,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,$t,Me.width,Me.height,0,Ot,Ct,Me.data)}}else{W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,Ct,_t[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,Ot,Ct,_t[it]);for(let Ft=0;Ft<mt.length;Ft++){const Zt=mt[Ft];W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,0,0,Ot,Ct,Zt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,$t,Ot,Ct,Zt.image[it])}}}g(T)&&m(n.TEXTURE_CUBE_MAP),rt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function et(N,T,Y,at,lt,rt){const Ut=s.convert(Y.format,Y.colorSpace),Mt=s.convert(Y.type),kt=b(Y.internalFormat,Ut,Mt,Y.colorSpace),Wt=i.get(T),pt=i.get(Y);if(pt.__renderTarget=T,!Wt.__hasExternalTextures){const _t=Math.max(1,T.width>>rt),Nt=Math.max(1,T.height>>rt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,rt,kt,_t,Nt,T.depth,0,Ut,Mt,null):e.texImage2D(lt,rt,kt,_t,Nt,0,Ut,Mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),te(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,lt,pt.__webglTexture,0,z(T)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,lt,pt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(N,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){const at=T.depthTexture,lt=at&&at.isDepthTexture?at.type:null,rt=S(T.stencilBuffer,lt),Ut=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;te(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(T),rt,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(T),rt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,rt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,N)}else{const at=T.textures;for(let lt=0;lt<at.length;lt++){const rt=at[lt],Ut=s.convert(rt.format,rt.colorSpace),Mt=s.convert(rt.type),kt=b(rt.internalFormat,Ut,Mt,rt.colorSpace);te(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(T),kt,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(T),kt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,kt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(N,T,Y){const at=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=i.get(T.depthTexture);if(lt.__renderTarget=T,(!lt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),at){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),lt.__webglTexture===void 0){lt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),H(n.TEXTURE_CUBE_MAP,T.depthTexture);const Wt=s.convert(T.depthTexture.format),pt=s.convert(T.depthTexture.type);let _t;T.depthTexture.format===hi?_t=n.DEPTH_COMPONENT24:T.depthTexture.format===Yi&&(_t=n.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,_t,T.width,T.height,0,Wt,pt,null)}}else A(T.depthTexture,0);const rt=lt.__webglTexture,Ut=z(T),Mt=at?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,kt=T.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===hi)te(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,kt,Mt,rt,0,Ut):n.framebufferTexture2D(n.FRAMEBUFFER,kt,Mt,rt,0);else if(T.depthTexture.format===Yi)te(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,kt,Mt,rt,0,Ut):n.framebufferTexture2D(n.FRAMEBUFFER,kt,Mt,rt,0);else throw new Error("Unknown depthTexture format")}function j(N){const T=i.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const at=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),at){const lt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,at.removeEventListener("dispose",lt)};at.addEventListener("dispose",lt),T.__depthDisposeCallback=lt}T.__boundDepthTexture=at}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let at=0;at<6;at++)st(T.__webglFramebuffer[at],N,at);else{const at=N.texture.mipmaps;at&&at.length>0?st(T.__webglFramebuffer[0],N,0):st(T.__webglFramebuffer,N,0)}else if(Y){T.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[at]),T.__webglDepthbuffer[at]===void 0)T.__webglDepthbuffer[at]=n.createRenderbuffer(),ot(T.__webglDepthbuffer[at],N,!1);else{const lt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer[at];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,rt)}}else{const at=N.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ot(T.__webglDepthbuffer,N,!1);else{const lt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(N,T,Y){const at=i.get(N);T!==void 0&&et(at.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&j(N)}function ct(N){const T=N.texture,Y=i.get(N),at=i.get(T);N.addEventListener("dispose",w);const lt=N.textures,rt=N.isWebGLCubeRenderTarget===!0,Ut=lt.length>1;if(Ut||(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=T.version,a.memory.textures++),rt){Y.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Mt]=[];for(let kt=0;kt<T.mipmaps.length;kt++)Y.__webglFramebuffer[Mt][kt]=n.createFramebuffer()}else Y.__webglFramebuffer[Mt]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)Y.__webglFramebuffer[Mt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let Mt=0,kt=lt.length;Mt<kt;Mt++){const Wt=i.get(lt[Mt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&te(N)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Mt=0;Mt<lt.length;Mt++){const kt=lt[Mt];Y.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt]);const Wt=s.convert(kt.format,kt.colorSpace),pt=s.convert(kt.type),_t=b(kt.internalFormat,Wt,pt,kt.colorSpace,N.isXRRenderTarget===!0),Nt=z(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,_t,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),H(n.TEXTURE_CUBE_MAP,T);for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)et(Y.__webglFramebuffer[Mt][kt],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt);else et(Y.__webglFramebuffer[Mt],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);g(T)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,kt=lt.length;Mt<kt;Mt++){const Wt=lt[Mt],pt=i.get(Wt);let _t=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_t=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,pt.__webglTexture),H(_t,Wt),et(Y.__webglFramebuffer,N,Wt,n.COLOR_ATTACHMENT0+Mt,_t,0),g(Wt)&&m(_t)}e.unbindTexture()}else{let Mt=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Mt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,at.__webglTexture),H(Mt,T),T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)et(Y.__webglFramebuffer[kt],N,T,n.COLOR_ATTACHMENT0,Mt,kt);else et(Y.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,Mt,0);g(T)&&m(Mt),e.unbindTexture()}N.depthBuffer&&j(N)}function xt(N){const T=N.textures;for(let Y=0,at=T.length;Y<at;Y++){const lt=T[Y];if(g(lt)){const rt=v(N),Ut=i.get(lt).__webglTexture;e.bindTexture(rt,Ut),m(rt),e.unbindTexture()}}}const gt=[],dt=[];function Rt(N){if(N.samples>0){if(te(N)===!1){const T=N.textures,Y=N.width,at=N.height;let lt=n.COLOR_BUFFER_BIT;const rt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(N),Mt=T.length>1;if(Mt)for(let Wt=0;Wt<T.length;Wt++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const kt=N.texture.mipmaps;kt&&kt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Wt=0;Wt<T.length;Wt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),Mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Wt]);const pt=i.get(T[Wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,Y,at,0,0,Y,at,lt,n.NEAREST),c===!0&&(gt.length=0,dt.length=0,gt.push(n.COLOR_ATTACHMENT0+Wt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(gt.push(rt),dt.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let Wt=0;Wt<T.length;Wt++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Wt]);const pt=i.get(T[Wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function z(N){return Math.min(r.maxSamples,N.samples)}function te(N){const T=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(N){const T=a.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function ne(N,T){const Y=N.colorSpace,at=N.format,lt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Or&&Y!==wi&&(se.getTransfer(Y)===pe?(at!==Tn||lt!==cn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",Y)),T}function Dt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=A,this.setTexture2DArray=R,this.setTexture3D=D,this.setTextureCube=O,this.rebindTextures=ht,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=et,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Mv(n,t){function e(i,r=wi){let s;const a=se.getTransfer(r);if(i===cn)return n.UNSIGNED_BYTE;if(i===gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bu)return n.BYTE;if(i===zu)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===mc)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===ku)return n.ALPHA;if(i===Hu)return n.RGB;if(i===Tn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Wu)return n.RED;if(i===vc)return n.RED_INTEGER;if(i===Fr)return n.RG;if(i===xc)return n.RG_INTEGER;if(i===Mc)return n.RGBA_INTEGER;if(i===Ma||i===ya||i===Sa||i===Ea)if(a===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===vl||i===xl||i===Ml)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_l)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yl||i===Sl||i===El||i===bl||i===Tl||i===Al||i===wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yl||i===Sl)return a===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===El)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bl)return s.COMPRESSED_R11_EAC;if(i===Tl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Al)return s.COMPRESSED_RG11_EAC;if(i===wl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rl||i===Cl||i===Il||i===Pl||i===Dl||i===Ll||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Gl||i===Vl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===Hl||i===Wl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===kl)return a===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xl||i===Yl||i===Zl||i===Kl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ef(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xn({vertexShader:yv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new Ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bv extends tr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new Ev,m={},v=e.getContextAttributes();let b=null,S=null;const C=[],E=[],w=new qt;let x=null;const M=new pn;M.viewport=new Ae;const L=new pn;L.viewport=new Ae;const P=[M,L],F=new Np;let U=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let k=C[V];return k===void 0&&(k=new uo,C[V]=k),k.getTargetRaySpace()},this.getControllerGrip=function(V){let k=C[V];return k===void 0&&(k=new uo,C[V]=k),k.getGripSpace()},this.getHand=function(V){let k=C[V];return k===void 0&&(k=new uo,C[V]=k),k.getHandSpace()};function A(V){const k=E.indexOf(V.inputSource);if(k===-1)return;const et=C[k];et!==void 0&&(et.update(V.inputSource,V.frame,l||a),et.dispatchEvent({type:V.type,data:V.inputSource}))}function R(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",D);for(let V=0;V<C.length;V++){const k=E[V];k!==null&&(E[V]=null,C[V].disconnect(k))}U=null,y=null,g.reset();for(const V in m)delete m[V];t.setRenderTarget(b),d=null,f=null,u=null,r=null,S=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(b=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",R),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,ot=null,st=null;v.depth&&(st=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=v.stencil?Yi:hi,ot=v.stencil?Es:Hn);const j={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(j),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Vn(f.textureWidth,f.textureHeight,{format:Tn,type:cn,depthTexture:new Ts(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const et={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Vn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(V){for(let k=0;k<V.removed.length;k++){const et=V.removed[k],ot=E.indexOf(et);ot>=0&&(E[ot]=null,C[ot].disconnect(et))}for(let k=0;k<V.added.length;k++){const et=V.added[k];let ot=E.indexOf(et);if(ot===-1){for(let j=0;j<C.length;j++)if(j>=E.length){E.push(et),ot=j;break}else if(E[j]===null){E[j]=et,ot=j;break}if(ot===-1)break}const st=C[ot];st&&st.connect(et)}}const O=new K,G=new K;function B(V,k,et){O.setFromMatrixPosition(k.matrixWorld),G.setFromMatrixPosition(et.matrixWorld);const ot=O.distanceTo(G),st=k.projectionMatrix.elements,j=et.projectionMatrix.elements,ht=st[14]/(st[10]-1),ct=st[14]/(st[10]+1),xt=(st[9]+1)/st[5],gt=(st[9]-1)/st[5],dt=(st[8]-1)/st[0],Rt=(j[8]+1)/j[0],z=ht*dt,te=ht*Rt,Yt=ot/(-dt+Rt),ne=Yt*-dt;if(k.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ne),V.translateZ(Yt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),st[10]===-1)V.projectionMatrix.copy(k.projectionMatrix),V.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const Dt=ht+Yt,N=ct+Yt,T=z-ne,Y=te+(ot-ne),at=xt*ct/N*Dt,lt=gt*ct/N*Dt;V.projectionMatrix.makePerspective(T,Y,at,lt,Dt,N),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function X(V,k){k===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(k.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let k=V.near,et=V.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(et=g.depthFar)),F.near=L.near=M.near=k,F.far=L.far=M.far=et,(U!==F.near||y!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,y=F.far),F.layers.mask=V.layers.mask|6,M.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const ot=V.parent,st=F.cameras;X(F,ot);for(let j=0;j<st.length;j++)X(st[j],ot);st.length===2?B(F,M,L):F.projectionMatrix.copy(M.projectionMatrix),H(V,F,ot)};function H(V,k,et){et===null?V.matrix.copy(k.matrixWorld):(V.matrix.copy(et.matrixWorld),V.matrix.invert(),V.matrix.multiply(k.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(k.projectionMatrix),V.projectionMatrixInverse.copy(k.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ql*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(V){return m[V]};let q=null;function tt(V,k){if(h=k.getViewerPose(l||a),p=k,h!==null){const et=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ot=!1;et.length!==F.cameras.length&&(F.cameras.length=0,ot=!0);for(let ct=0;ct<et.length;ct++){const xt=et[ct];let gt=null;if(d!==null)gt=d.getViewport(xt);else{const Rt=u.getViewSubImage(f,xt);gt=Rt.viewport,ct===0&&(t.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),t.setRenderTarget(S))}let dt=P[ct];dt===void 0&&(dt=new pn,dt.layers.enable(ct),dt.viewport=new Ae,P[ct]=dt),dt.matrix.fromArray(xt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(xt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(gt.x,gt.y,gt.width,gt.height),ct===0&&(F.matrix.copy(dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ot===!0&&F.cameras.push(dt)}const st=r.enabledFeatures;if(st&&st.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const ct=u.getDepthInformation(et[0]);ct&&ct.isValid&&ct.texture&&g.init(ct,r.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let ct=0;ct<et.length;ct++){const xt=et[ct].camera;if(xt){let gt=m[xt];gt||(gt=new ef,m[xt]=gt);const dt=u.getCameraImage(xt);gt.sourceTexture=dt}}}}for(let et=0;et<C.length;et++){const ot=E[et],st=C[et];ot!==null&&st!==void 0&&st.update(ot,k,l||a)}q&&q(V,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),p=null}const nt=new of;nt.setAnimationLoop(tt),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}}const Bi=new Wn,Tv=new be;function Av(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,nf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,b,S){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,S)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,v,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),b=v.envMap,S=v.envMapRotation;b&&(g.envMap.value=b,Bi.copy(S),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),g.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Bi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wv(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const S=b.program;i.uniformBlockBinding(v,S)}function l(v,b){let S=r[v.id];S===void 0&&(p(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",g));const C=b.program;i.updateUBOMapping(v,C);const E=t.render.frame;s[v.id]!==E&&(f(v),s[v.id]=E)}function h(v){const b=u();v.__bindingPointIndex=b;const S=n.createBuffer(),C=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,w=S.length;E<w;E++){const x=Array.isArray(S[E])?S[E]:[S[E]];for(let M=0,L=x.length;M<L;M++){const P=x[M];if(d(P,E,M,C)===!0){const F=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let y=0;for(let A=0;A<U.length;A++){const R=U[A],D=_(R);typeof R=="number"||typeof R=="boolean"?(P.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,F+y,P.__data)):R.isMatrix3?(P.__data[0]=R.elements[0],P.__data[1]=R.elements[1],P.__data[2]=R.elements[2],P.__data[3]=0,P.__data[4]=R.elements[3],P.__data[5]=R.elements[4],P.__data[6]=R.elements[5],P.__data[7]=0,P.__data[8]=R.elements[6],P.__data[9]=R.elements[7],P.__data[10]=R.elements[8],P.__data[11]=0):(R.toArray(P.__data,y),y+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,b,S,C){const E=v.value,w=b+"_"+S;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{const x=C[w];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return C[w]=E,!0}else if(x.equals(E)===!1)return x.copy(E),!0}return!1}function p(v){const b=v.uniforms;let S=0;const C=16;for(let w=0,x=b.length;w<x;w++){const M=Array.isArray(b[w])?b[w]:[b[w]];for(let L=0,P=M.length;L<P;L++){const F=M[L],U=Array.isArray(F.value)?F.value:[F.value];for(let y=0,A=U.length;y<A;y++){const R=U[y],D=_(R),O=S%C,G=O%D.boundary,B=O+G;S+=G,B!==0&&C-B<D.storage&&(S+=C-B),F.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=D.storage}}}const E=S%C;return E>0&&(S+=C-E),v.__size=S,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xt("WebGLRenderer: Unsupported uniform value type.",v),b}function g(v){const b=v.target;b.removeEventListener("dispose",g);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}const Rv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function Cv(){return In===null&&(In=new gp(Rv,16,16,Fr,ci),In.name="DFG_LUT",In.minFilter=Xe,In.magFilter=Xe,In.wrapS=ri,In.wrapT=ri,In.generateMipmaps=!1,In.needsUpdate=!0),In}class Iv{constructor(t={}){const{canvas:e=Yd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=cn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=d,g=new Set([Mc,xc,vc]),m=new Set([cn,Hn,Ss,Es,gc,_c]),v=new Uint32Array(4),b=new Int32Array(4);let S=null,C=null;const E=[],w=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let L=!1;this._outputColorSpace=dn;let P=0,F=0,U=null,y=-1,A=null;const R=new Ae,D=new Ae;let O=null;const G=new re(0);let B=0,X=e.width,H=e.height,q=1,tt=null,nt=null;const V=new Ae(0,0,X,H),k=new Ae(0,0,X,H);let et=!1;const ot=new bc;let st=!1,j=!1;const ht=new be,ct=new K,xt=new Ae,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Rt(){return U===null?q:1}let z=i;function te(I,Z){return e.getContext(I,Z)}try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",Me,!1),z===null){const Z="webgl2";if(z=te(Z,I),z===null)throw te(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw le("WebGLRenderer: "+I.message),I}let Yt,ne,Dt,N,T,Y,at,lt,rt,Ut,Mt,kt,Wt,pt,_t,Nt,Ot,Ct,$t,W,yt,vt,Lt;function mt(){Yt=new I0(z),Yt.init(),yt=new Mv(z,Yt),ne=new S0(z,Yt,t,yt),Dt=new vv(z,Yt),ne.reversedDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),N=new L0(z),T=new rv,Y=new xv(z,Yt,Dt,T,ne,yt,N),at=new C0(M),lt=new Bp(z),vt=new M0(z,lt),rt=new P0(z,lt,N,vt),Ut=new N0(z,rt,lt,vt,N),Ct=new U0(z,ne,Y),_t=new E0(T),Mt=new iv(M,at,Yt,ne,vt,_t),kt=new Av(M,T),Wt=new av,pt=new fv(Yt),Ot=new x0(M,at,Dt,Ut,p,c),Nt=new _v(M,Ut,ne),Lt=new wv(z,N,ne,Dt),$t=new y0(z,Yt,N),W=new D0(z,Yt,N),N.programs=Mt.programs,M.capabilities=ne,M.extensions=Yt,M.properties=T,M.renderLists=Wt,M.shadowMap=Nt,M.state=Dt,M.info=N}mt(),_!==cn&&(x=new O0(_,e.width,e.height,r,s));const it=new bv(M,z);this.xr=it,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=Yt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Yt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(I){I!==void 0&&(q=I,this.setSize(X,H,!1))},this.getSize=function(I){return I.set(X,H)},this.setSize=function(I,Z,Q=!0){if(it.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}X=I,H=Z,e.width=Math.floor(I*q),e.height=Math.floor(Z*q),Q===!0&&(e.style.width=I+"px",e.style.height=Z+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(X*q,H*q).floor()},this.setDrawingBufferSize=function(I,Z,Q){X=I,H=Z,q=Q,e.width=Math.floor(I*Q),e.height=Math.floor(Z*Q),this.setViewport(0,0,I,Z)},this.setEffects=function(I){if(_===cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let Z=0;Z<I.length;Z++)if(I[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(V)},this.setViewport=function(I,Z,Q,$){I.isVector4?V.set(I.x,I.y,I.z,I.w):V.set(I,Z,Q,$),Dt.viewport(R.copy(V).multiplyScalar(q).round())},this.getScissor=function(I){return I.copy(k)},this.setScissor=function(I,Z,Q,$){I.isVector4?k.set(I.x,I.y,I.z,I.w):k.set(I,Z,Q,$),Dt.scissor(D.copy(k).multiplyScalar(q).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(I){Dt.setScissorTest(et=I)},this.setOpaqueSort=function(I){tt=I},this.setTransparentSort=function(I){nt=I},this.getClearColor=function(I){return I.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(I=!0,Z=!0,Q=!0){let $=0;if(I){let J=!1;if(U!==null){const Tt=U.texture.format;J=g.has(Tt)}if(J){const Tt=U.texture.type,It=m.has(Tt),At=Ot.getClearColor(),Bt=Ot.getClearAlpha(),Gt=At.r,Kt=At.g,Qt=At.b;It?(v[0]=Gt,v[1]=Kt,v[2]=Qt,v[3]=Bt,z.clearBufferuiv(z.COLOR,0,v)):(b[0]=Gt,b[1]=Kt,b[2]=Qt,b[3]=Bt,z.clearBufferiv(z.COLOR,0,b))}else $|=z.COLOR_BUFFER_BIT}Z&&($|=z.DEPTH_BUFFER_BIT),Q&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Me,!1),Ot.dispose(),Wt.dispose(),pt.dispose(),T.dispose(),at.dispose(),Ut.dispose(),vt.dispose(),Lt.dispose(),Mt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Vc),it.removeEventListener("sessionend",kc),Pi.stop()};function Ft(I){I.preventDefault(),ih("WebGLRenderer: Context Lost."),L=!0}function Zt(){ih("WebGLRenderer: Context Restored."),L=!1;const I=N.autoReset,Z=Nt.enabled,Q=Nt.autoUpdate,$=Nt.needsUpdate,J=Nt.type;mt(),N.autoReset=I,Nt.enabled=Z,Nt.autoUpdate=Q,Nt.needsUpdate=$,Nt.type=J}function Me(I){le("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function de(I){const Z=I.target;Z.removeEventListener("dispose",de),Kn(Z)}function Kn(I){qn(I),T.remove(I)}function qn(I){const Z=T.get(I).programs;Z!==void 0&&(Z.forEach(function(Q){Mt.releaseProgram(Q)}),I.isShaderMaterial&&Mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,Q,$,J,Tt){Z===null&&(Z=gt);const It=J.isMesh&&J.matrixWorld.determinant()<0,At=od(I,Z,Q,$,J);Dt.setMaterial($,It);let Bt=Q.index,Gt=1;if($.wireframe===!0){if(Bt=rt.getWireframeAttribute(Q),Bt===void 0)return;Gt=2}const Kt=Q.drawRange,Qt=Q.attributes.position;let Vt=Kt.start*Gt,me=(Kt.start+Kt.count)*Gt;Tt!==null&&(Vt=Math.max(Vt,Tt.start*Gt),me=Math.min(me,(Tt.start+Tt.count)*Gt)),Bt!==null?(Vt=Math.max(Vt,0),me=Math.min(me,Bt.count)):Qt!=null&&(Vt=Math.max(Vt,0),me=Math.min(me,Qt.count));const we=me-Vt;if(we<0||we===1/0)return;vt.setup(J,$,At,Q,Bt);let Te,ge=$t;if(Bt!==null&&(Te=lt.get(Bt),ge=W,ge.setIndex(Te)),J.isMesh)$.wireframe===!0?(Dt.setLineWidth($.wireframeLinewidth*Rt()),ge.setMode(z.LINES)):ge.setMode(z.TRIANGLES);else if(J.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),Dt.setLineWidth(ke*Rt()),J.isLineSegments?ge.setMode(z.LINES):J.isLineLoop?ge.setMode(z.LINE_LOOP):ge.setMode(z.LINE_STRIP)}else J.isPoints?ge.setMode(z.POINTS):J.isSprite&&ge.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)La("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ge.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ke=J._multiDrawStarts,zt=J._multiDrawCounts,an=J._multiDrawCount,oe=Bt?lt.get(Bt).bytesPerElement:1,xn=T.get($).currentProgram.getUniforms();for(let Rn=0;Rn<an;Rn++)xn.setValue(z,"_gl_DrawID",Rn),ge.render(ke[Rn]/oe,zt[Rn])}else if(J.isInstancedMesh)ge.renderInstances(Vt,we,J.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,zt=Math.min(Q.instanceCount,ke);ge.renderInstances(Vt,we,zt)}else ge.render(Vt,we)};function Gc(I,Z,Q){I.transparent===!0&&I.side===ni&&I.forceSinglePass===!1?(I.side=Qe,I.needsUpdate=!0,Bs(I,Z,Q),I.side=li,I.needsUpdate=!0,Bs(I,Z,Q),I.side=ni):Bs(I,Z,Q)}this.compile=function(I,Z,Q=null){Q===null&&(Q=I),C=pt.get(Q),C.init(Z),w.push(C),Q.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),I!==Q&&I.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),C.setupLights();const $=new Set;return I.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let It=0;It<Tt.length;It++){const At=Tt[It];Gc(At,Q,J),$.add(At)}else Gc(Tt,Q,J),$.add(Tt)}),C=w.pop(),$},this.compileAsync=function(I,Z,Q=null){const $=this.compile(I,Z,Q);return new Promise(J=>{function Tt(){if($.forEach(function(It){T.get(It).currentProgram.isReady()&&$.delete(It)}),$.size===0){J(I);return}setTimeout(Tt,10)}Yt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let to=null;function ad(I){to&&to(I)}function Vc(){Pi.stop()}function kc(){Pi.start()}const Pi=new of;Pi.setAnimationLoop(ad),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(I){to=I,it.setAnimationLoop(I),I===null?Pi.stop():Pi.start()},it.addEventListener("sessionstart",Vc),it.addEventListener("sessionend",kc),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const Q=it.enabled===!0&&it.isPresenting===!0,$=x!==null&&(U===null||Q)&&x.begin(M,U);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(Z),Z=it.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,Z,U),C=pt.get(I,w.length),C.init(Z),w.push(C),ht.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ot.setFromProjectionMatrix(ht,zn,Z.reversedDepth),j=this.localClippingEnabled,st=_t.init(this.clippingPlanes,j),S=Wt.get(I,E.length),S.init(),E.push(S),it.enabled===!0&&it.isPresenting===!0){const It=M.xr.getDepthSensingMesh();It!==null&&eo(It,Z,-1/0,M.sortObjects)}eo(I,Z,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(tt,nt),dt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,dt&&Ot.addToRenderList(S,I),this.info.render.frame++,st===!0&&_t.beginShadows();const J=C.state.shadowsArray;if(Nt.render(J,I,Z),st===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&x.hasRenderPass())===!1){const It=S.opaque,At=S.transmissive;if(C.setupLights(),Z.isArrayCamera){const Bt=Z.cameras;if(At.length>0)for(let Gt=0,Kt=Bt.length;Gt<Kt;Gt++){const Qt=Bt[Gt];Wc(It,At,I,Qt)}dt&&Ot.render(I);for(let Gt=0,Kt=Bt.length;Gt<Kt;Gt++){const Qt=Bt[Gt];Hc(S,I,Qt,Qt.viewport)}}else At.length>0&&Wc(It,At,I,Z),dt&&Ot.render(I),Hc(S,I,Z)}U!==null&&F===0&&(Y.updateMultisampleRenderTarget(U),Y.updateRenderTargetMipmap(U)),$&&x.end(M),I.isScene===!0&&I.onAfterRender(M,I,Z),vt.resetDefaultState(),y=-1,A=null,w.pop(),w.length>0?(C=w[w.length-1],st===!0&&_t.setGlobalState(M.clippingPlanes,C.state.camera)):C=null,E.pop(),E.length>0?S=E[E.length-1]:S=null};function eo(I,Z,Q,$){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)Q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)C.pushLight(I),I.castShadow&&C.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ot.intersectsSprite(I)){$&&xt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ht);const It=Ut.update(I),At=I.material;At.visible&&S.push(I,It,At,Q,xt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ot.intersectsObject(I))){const It=Ut.update(I),At=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),xt.copy(I.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),xt.copy(It.boundingSphere.center)),xt.applyMatrix4(I.matrixWorld).applyMatrix4(ht)),Array.isArray(At)){const Bt=It.groups;for(let Gt=0,Kt=Bt.length;Gt<Kt;Gt++){const Qt=Bt[Gt],Vt=At[Qt.materialIndex];Vt&&Vt.visible&&S.push(I,It,Vt,Q,xt.z,Qt)}}else At.visible&&S.push(I,It,At,Q,xt.z,null)}}const Tt=I.children;for(let It=0,At=Tt.length;It<At;It++)eo(Tt[It],Z,Q,$)}function Hc(I,Z,Q,$){const{opaque:J,transmissive:Tt,transparent:It}=I;C.setupLightsView(Q),st===!0&&_t.setGlobalState(M.clippingPlanes,Q),$&&Dt.viewport(R.copy($)),J.length>0&&Os(J,Z,Q),Tt.length>0&&Os(Tt,Z,Q),It.length>0&&Os(It,Z,Q),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Wc(I,Z,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){const Vt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Vn(1,1,{generateMipmaps:!0,type:Vt?ci:cn,minFilter:Xi,samples:Math.max(4,ne.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace})}const Tt=C.state.transmissionRenderTarget[$.id],It=$.viewport||R;Tt.setSize(It.z*M.transmissionResolutionScale,It.w*M.transmissionResolutionScale);const At=M.getRenderTarget(),Bt=M.getActiveCubeFace(),Gt=M.getActiveMipmapLevel();M.setRenderTarget(Tt),M.getClearColor(G),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),dt&&Ot.render(Q);const Kt=M.toneMapping;M.toneMapping=Gn;const Qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),st===!0&&_t.setGlobalState(M.clippingPlanes,$),Os(I,Q,$),Y.updateMultisampleRenderTarget(Tt),Y.updateRenderTargetMipmap(Tt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let me=0,we=Z.length;me<we;me++){const Te=Z[me],{object:ge,geometry:ke,material:zt,group:an}=Te;if(zt.side===ni&&ge.layers.test($.layers)){const oe=zt.side;zt.side=Qe,zt.needsUpdate=!0,Xc(ge,Q,$,ke,zt,an),zt.side=oe,zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(Y.updateMultisampleRenderTarget(Tt),Y.updateRenderTargetMipmap(Tt))}M.setRenderTarget(At,Bt,Gt),M.setClearColor(G,B),Qt!==void 0&&($.viewport=Qt),M.toneMapping=Kt}function Os(I,Z,Q){const $=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Tt=I.length;J<Tt;J++){const It=I[J],{object:At,geometry:Bt,group:Gt}=It;let Kt=It.material;Kt.allowOverride===!0&&$!==null&&(Kt=$),At.layers.test(Q.layers)&&Xc(At,Z,Q,Bt,Kt,Gt)}}function Xc(I,Z,Q,$,J,Tt){I.onBeforeRender(M,Z,Q,$,J,Tt),I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),J.onBeforeRender(M,Z,Q,$,I,Tt),J.transparent===!0&&J.side===ni&&J.forceSinglePass===!1?(J.side=Qe,J.needsUpdate=!0,M.renderBufferDirect(Q,Z,$,J,I,Tt),J.side=li,J.needsUpdate=!0,M.renderBufferDirect(Q,Z,$,J,I,Tt),J.side=ni):M.renderBufferDirect(Q,Z,$,J,I,Tt),I.onAfterRender(M,Z,Q,$,J,Tt)}function Bs(I,Z,Q){Z.isScene!==!0&&(Z=gt);const $=T.get(I),J=C.state.lights,Tt=C.state.shadowsArray,It=J.state.version,At=Mt.getParameters(I,J.state,Tt,Z,Q),Bt=Mt.getProgramCacheKey(At);let Gt=$.programs;$.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?Z.environment:null,$.fog=Z.fog;const Kt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;$.envMap=at.get(I.envMap||$.environment,Kt),$.envMapRotation=$.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,Gt===void 0&&(I.addEventListener("dispose",de),Gt=new Map,$.programs=Gt);let Qt=Gt.get(Bt);if(Qt!==void 0){if($.currentProgram===Qt&&$.lightsStateVersion===It)return Zc(I,At),Qt}else At.uniforms=Mt.getUniforms(I),I.onBeforeCompile(At,M),Qt=Mt.acquireProgram(At,Bt),Gt.set(Bt,Qt),$.uniforms=At.uniforms;const Vt=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Vt.clippingPlanes=_t.uniform),Zc(I,At),$.needsLights=cd(I),$.lightsStateVersion=It,$.needsLights&&(Vt.ambientLightColor.value=J.state.ambient,Vt.lightProbe.value=J.state.probe,Vt.directionalLights.value=J.state.directional,Vt.directionalLightShadows.value=J.state.directionalShadow,Vt.spotLights.value=J.state.spot,Vt.spotLightShadows.value=J.state.spotShadow,Vt.rectAreaLights.value=J.state.rectArea,Vt.ltc_1.value=J.state.rectAreaLTC1,Vt.ltc_2.value=J.state.rectAreaLTC2,Vt.pointLights.value=J.state.point,Vt.pointLightShadows.value=J.state.pointShadow,Vt.hemisphereLights.value=J.state.hemi,Vt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Vt.spotLightMatrix.value=J.state.spotLightMatrix,Vt.spotLightMap.value=J.state.spotLightMap,Vt.pointShadowMatrix.value=J.state.pointShadowMatrix),$.currentProgram=Qt,$.uniformsList=null,Qt}function Yc(I){if(I.uniformsList===null){const Z=I.currentProgram.getUniforms();I.uniformsList=Ta.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function Zc(I,Z){const Q=T.get(I);Q.outputColorSpace=Z.outputColorSpace,Q.batching=Z.batching,Q.batchingColor=Z.batchingColor,Q.instancing=Z.instancing,Q.instancingColor=Z.instancingColor,Q.instancingMorph=Z.instancingMorph,Q.skinning=Z.skinning,Q.morphTargets=Z.morphTargets,Q.morphNormals=Z.morphNormals,Q.morphColors=Z.morphColors,Q.morphTargetsCount=Z.morphTargetsCount,Q.numClippingPlanes=Z.numClippingPlanes,Q.numIntersection=Z.numClipIntersection,Q.vertexAlphas=Z.vertexAlphas,Q.vertexTangents=Z.vertexTangents,Q.toneMapping=Z.toneMapping}function od(I,Z,Q,$,J){Z.isScene!==!0&&(Z=gt),Y.resetTextureUnits();const Tt=Z.fog,It=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?Z.environment:null,At=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Or,Bt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Gt=at.get($.envMap||It,Bt),Kt=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qt=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Vt=!!Q.morphAttributes.position,me=!!Q.morphAttributes.normal,we=!!Q.morphAttributes.color;let Te=Gn;$.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Te=M.toneMapping);const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ke=ge!==void 0?ge.length:0,zt=T.get($),an=C.state.lights;if(st===!0&&(j===!0||I!==A)){const Ue=I===A&&$.id===y;_t.setState($,I,Ue)}let oe=!1;$.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==an.state.version||zt.outputColorSpace!==At||J.isBatchedMesh&&zt.batching===!1||!J.isBatchedMesh&&zt.batching===!0||J.isBatchedMesh&&zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&zt.instancing===!1||!J.isInstancedMesh&&zt.instancing===!0||J.isSkinnedMesh&&zt.skinning===!1||!J.isSkinnedMesh&&zt.skinning===!0||J.isInstancedMesh&&zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&zt.instancingMorph===!1&&J.morphTexture!==null||zt.envMap!==Gt||$.fog===!0&&zt.fog!==Tt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==_t.numPlanes||zt.numIntersection!==_t.numIntersection)||zt.vertexAlphas!==Kt||zt.vertexTangents!==Qt||zt.morphTargets!==Vt||zt.morphNormals!==me||zt.morphColors!==we||zt.toneMapping!==Te||zt.morphTargetsCount!==ke)&&(oe=!0):(oe=!0,zt.__version=$.version);let xn=zt.currentProgram;oe===!0&&(xn=Bs($,Z,J));let Rn=!1,Di=!1,nr=!1;const ve=xn.getUniforms(),Be=zt.uniforms;if(Dt.useProgram(xn.program)&&(Rn=!0,Di=!0,nr=!0),$.id!==y&&(y=$.id,Di=!0),Rn||A!==I){Dt.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",I.projectionMatrix),ve.setValue(z,"viewMatrix",I.matrixWorldInverse);const di=ve.map.cameraPosition;di!==void 0&&di.setValue(z,ct.setFromMatrixPosition(I.matrixWorld)),ne.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ve.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),A!==I&&(A=I,Di=!0,nr=!0)}if(zt.needsLights&&(an.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",an.state.directionalShadowMap,Y),an.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",an.state.spotShadowMap,Y),an.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",an.state.pointShadowMap,Y)),J.isSkinnedMesh){ve.setOptional(z,J,"bindMatrix"),ve.setOptional(z,J,"bindMatrixInverse");const Ue=J.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ve.setValue(z,"boneTexture",Ue.boneTexture,Y))}J.isBatchedMesh&&(ve.setOptional(z,J,"batchingTexture"),ve.setValue(z,"batchingTexture",J._matricesTexture,Y),ve.setOptional(z,J,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",J._indirectTexture,Y),ve.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",J._colorsTexture,Y));const fi=Q.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Ct.update(J,Q,xn),(Di||zt.receiveShadow!==J.receiveShadow)&&(zt.receiveShadow=J.receiveShadow,ve.setValue(z,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&Z.environment!==null&&(Be.envMapIntensity.value=Z.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Cv()),Di&&(ve.setValue(z,"toneMappingExposure",M.toneMappingExposure),zt.needsLights&&ld(Be,nr),Tt&&$.fog===!0&&kt.refreshFogUniforms(Be,Tt),kt.refreshMaterialUniforms(Be,$,q,H,C.state.transmissionRenderTarget[I.id]),Ta.upload(z,Yc(zt),Be,Y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ta.upload(z,Yc(zt),Be,Y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ve.setValue(z,"center",J.center),ve.setValue(z,"modelViewMatrix",J.modelViewMatrix),ve.setValue(z,"normalMatrix",J.normalMatrix),ve.setValue(z,"modelMatrix",J.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ue=$.uniformsGroups;for(let di=0,ir=Ue.length;di<ir;di++){const Kc=Ue[di];Lt.update(Kc,xn),Lt.bind(Kc,xn)}}return xn}function ld(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function cd(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(I,Z,Q){const $=T.get(I);$.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),T.get(I.texture).__webglTexture=Z,T.get(I.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Z){const Q=T.get(I);Q.__webglFramebuffer=Z,Q.__useDefaultFramebuffer=Z===void 0};const hd=z.createFramebuffer();this.setRenderTarget=function(I,Z=0,Q=0){U=I,P=Z,F=Q;let $=null,J=!1,Tt=!1;if(I){const At=T.get(I);if(At.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(z.FRAMEBUFFER,At.__webglFramebuffer),R.copy(I.viewport),D.copy(I.scissor),O=I.scissorTest,Dt.viewport(R),Dt.scissor(D),Dt.setScissorTest(O),y=-1;return}else if(At.__webglFramebuffer===void 0)Y.setupRenderTarget(I);else if(At.__hasExternalTextures)Y.rebindTextures(I,T.get(I.texture).__webglTexture,T.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Kt=I.depthTexture;if(At.__boundDepthTexture!==Kt){if(Kt!==null&&T.has(Kt)&&(I.width!==Kt.image.width||I.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(I)}}const Bt=I.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Tt=!0);const Gt=T.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Gt[Z])?$=Gt[Z][Q]:$=Gt[Z],J=!0):I.samples>0&&Y.useMultisampledRTT(I)===!1?$=T.get(I).__webglMultisampledFramebuffer:Array.isArray(Gt)?$=Gt[Q]:$=Gt,R.copy(I.viewport),D.copy(I.scissor),O=I.scissorTest}else R.copy(V).multiplyScalar(q).floor(),D.copy(k).multiplyScalar(q).floor(),O=et;if(Q!==0&&($=hd),Dt.bindFramebuffer(z.FRAMEBUFFER,$)&&Dt.drawBuffers(I,$),Dt.viewport(R),Dt.scissor(D),Dt.setScissorTest(O),J){const At=T.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At.__webglTexture,Q)}else if(Tt){const At=Z;for(let Bt=0;Bt<I.textures.length;Bt++){const Gt=T.get(I.textures[Bt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Bt,Gt.__webglTexture,Q,At)}}else if(I!==null&&Q!==0){const At=T.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,At.__webglTexture,Q)}y=-1},this.readRenderTargetPixels=function(I,Z,Q,$,J,Tt,It,At=0){if(!(I&&I.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){Dt.bindFramebuffer(z.FRAMEBUFFER,Bt);try{const Gt=I.textures[At],Kt=Gt.format,Qt=Gt.type;if(I.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+At),!ne.textureFormatReadable(Kt)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Qt)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-$&&Q>=0&&Q<=I.height-J&&z.readPixels(Z,Q,$,J,yt.convert(Kt),yt.convert(Qt),Tt)}finally{const Gt=U!==null?T.get(U).__webglFramebuffer:null;Dt.bindFramebuffer(z.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(I,Z,Q,$,J,Tt,It,At=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt)if(Z>=0&&Z<=I.width-$&&Q>=0&&Q<=I.height-J){Dt.bindFramebuffer(z.FRAMEBUFFER,Bt);const Gt=I.textures[At],Kt=Gt.format,Qt=Gt.type;if(I.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+At),!ne.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),z.readPixels(Z,Q,$,J,yt.convert(Kt),yt.convert(Qt),0);const me=U!==null?T.get(U).__webglFramebuffer:null;Dt.bindFramebuffer(z.FRAMEBUFFER,me);const we=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Zd(z,we,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(Vt),z.deleteSync(we),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Z=null,Q=0){const $=Math.pow(2,-Q),J=Math.floor(I.image.width*$),Tt=Math.floor(I.image.height*$),It=Z!==null?Z.x:0,At=Z!==null?Z.y:0;Y.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,It,At,J,Tt),Dt.unbindTexture()};const ud=z.createFramebuffer(),fd=z.createFramebuffer();this.copyTextureToTexture=function(I,Z,Q=null,$=null,J=0,Tt=0){let It,At,Bt,Gt,Kt,Qt,Vt,me,we;const Te=I.isCompressedTexture?I.mipmaps[Tt]:I.image;if(Q!==null)It=Q.max.x-Q.min.x,At=Q.max.y-Q.min.y,Bt=Q.isBox3?Q.max.z-Q.min.z:1,Gt=Q.min.x,Kt=Q.min.y,Qt=Q.isBox3?Q.min.z:0;else{const Be=Math.pow(2,-J);It=Math.floor(Te.width*Be),At=Math.floor(Te.height*Be),I.isDataArrayTexture?Bt=Te.depth:I.isData3DTexture?Bt=Math.floor(Te.depth*Be):Bt=1,Gt=0,Kt=0,Qt=0}$!==null?(Vt=$.x,me=$.y,we=$.z):(Vt=0,me=0,we=0);const ge=yt.convert(Z.format),ke=yt.convert(Z.type);let zt;Z.isData3DTexture?(Y.setTexture3D(Z,0),zt=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Y.setTexture2DArray(Z,0),zt=z.TEXTURE_2D_ARRAY):(Y.setTexture2D(Z,0),zt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const an=z.getParameter(z.UNPACK_ROW_LENGTH),oe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),xn=z.getParameter(z.UNPACK_SKIP_PIXELS),Rn=z.getParameter(z.UNPACK_SKIP_ROWS),Di=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Te.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Te.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Gt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Kt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qt);const nr=I.isDataArrayTexture||I.isData3DTexture,ve=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isDepthTexture){const Be=T.get(I),fi=T.get(Z),Ue=T.get(Be.__renderTarget),di=T.get(fi.__renderTarget);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let ir=0;ir<Bt;ir++)nr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,T.get(I).__webglTexture,J,Qt+ir),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,T.get(Z).__webglTexture,Tt,we+ir)),z.blitFramebuffer(Gt,Kt,It,At,Vt,me,It,At,z.DEPTH_BUFFER_BIT,z.NEAREST);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||I.isRenderTargetTexture||T.has(I)){const Be=T.get(I),fi=T.get(Z);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,ud),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,fd);for(let Ue=0;Ue<Bt;Ue++)nr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,J,Qt+Ue):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,J),ve?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fi.__webglTexture,Tt,we+Ue):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fi.__webglTexture,Tt),J!==0?z.blitFramebuffer(Gt,Kt,It,At,Vt,me,It,At,z.COLOR_BUFFER_BIT,z.NEAREST):ve?z.copyTexSubImage3D(zt,Tt,Vt,me,we+Ue,Gt,Kt,It,At):z.copyTexSubImage2D(zt,Tt,Vt,me,Gt,Kt,It,At);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ve?I.isDataTexture||I.isData3DTexture?z.texSubImage3D(zt,Tt,Vt,me,we,It,At,Bt,ge,ke,Te.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,Tt,Vt,me,we,It,At,Bt,ge,Te.data):z.texSubImage3D(zt,Tt,Vt,me,we,It,At,Bt,ge,ke,Te):I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,Vt,me,It,At,ge,ke,Te.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,Vt,me,Te.width,Te.height,ge,Te.data):z.texSubImage2D(z.TEXTURE_2D,Tt,Vt,me,It,At,ge,ke,Te);z.pixelStorei(z.UNPACK_ROW_LENGTH,an),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,xn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Di),Tt===0&&Z.generateMipmaps&&z.generateMipmap(zt),Dt.unbindTexture()},this.initRenderTarget=function(I){T.get(I).__webglFramebuffer===void 0&&Y.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Y.setTextureCube(I,0):I.isData3DTexture?Y.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Y.setTexture2DArray(I,0):Y.setTexture2D(I,0),Dt.unbindTexture()},this.resetState=function(){P=0,F=0,U=null,Dt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const eu={type:"change"},Ac={type:"start"},df={type:"end"},ua=new Xa,nu=new Ti,Pv=Math.cos(70*jd.DEG2RAD),Pe=new K,nn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oo=1e-6;class Dv extends Fp{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Ii,this._lastTargetPosition=new K,this._quat=new Ii().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ih,this._sphericalDelta=new Ih,this._scale=1,this._panOffset=new K,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new K,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Uv.bind(this),this._onPointerDown=Lv.bind(this),this._onPointerUp=Nv.bind(this),this._onContextMenu=kv.bind(this),this._onMouseWheel=Bv.bind(this),this._onKeyDown=zv.bind(this),this._onTouchStart=Gv.bind(this),this._onTouchMove=Vv.bind(this),this._onMouseDown=Fv.bind(this),this._onMouseMove=Ov.bind(this),this._interceptControlDown=Hv.bind(this),this._interceptControlUp=Wv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eu),this.update(),this.state=_e.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),r<-Math.PI?r+=nn:r>Math.PI&&(r-=nn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new K(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ua.origin.copy(this.object.position),ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ua.direction))<Pv?this.object.lookAt(this.target):(nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ua.intersectPlane(nu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Oo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oo||this._lastTargetPosition.distanceToSquared(this.target)>Oo?(this.dispatchEvent(eu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Pe.copy(r).sub(this.target);let s=Pe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new qt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Lv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Uv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Nv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(df),this.state=_e.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Fv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_e.DOLLY;break;case wr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}break;case wr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ac)}function Ov(n){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Bv(n){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(n.preventDefault(),this.dispatchEvent(Ac),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(df))}function zv(n){this.enabled!==!1&&this._handleKeyDown(n)}function Gv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_e.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_e.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ac)}function Vv(n){switch(this._trackPointer(n),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_e.NONE}}function kv(n){this.enabled!==!1&&n.preventDefault()}function Hv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Et=Object.freeze({NOT_LAS:"NOT_LAS",UNSUPPORTED_VERSION:"UNSUPPORTED_VERSION",UNSUPPORTED:"UNSUPPORTED",COMPRESSED_LAZ:"COMPRESSED_LAZ",TRUNCATED:"TRUNCATED",BAD_HEADER:"BAD_HEADER",BAD_VLR:"BAD_VLR",INVALID_ARGUMENT:"INVALID_ARGUMENT",ABORTED:"ABORTED",TOO_MANY_POINTS:"TOO_MANY_POINTS"});class St extends Error{constructor(t,e,i){var r=typeof i=="number"?e+" (at 0x"+i.toString(16)+")":e;super(r),this.name="LasError",this.code=t,this.offset=i}}function pf(n){if(!n||typeof n.slice!="function"||typeof n.size!="number")throw new St(Et.INVALID_ARGUMENT,"BlobSource needs a File or Blob");this._blob=n,this.size=n.size}pf.prototype.read=async function(n,t){if(n<0||t<n)throw new St(Et.INVALID_ARGUMENT,"bad read range "+n+".."+t);if(t>this.size)throw new St(Et.TRUNCATED,"read past end of "+this.size+"-byte file",t);var e=await this._blob.slice(n,t).arrayBuffer();return new Uint8Array(e)};function wn(n){if(!(n instanceof Uint8Array))throw new St(Et.INVALID_ARGUMENT,"MemorySource needs a Uint8Array");this._bytes=n,this._view=new DataView(n.buffer,n.byteOffset,n.byteLength)}function Hr(n,t,e){if(t<0||t+e>n._bytes.length)throw new St(Et.TRUNCATED,"read of "+e+" bytes past end of "+n._bytes.length+"-byte source",t)}wn.prototype.length=function(){return this._bytes.length};wn.prototype.slice=function(n,t){if(n<0||t<n)throw new St(Et.INVALID_ARGUMENT,"bad slice range "+n+".."+t);if(t>this._bytes.length)throw new St(Et.TRUNCATED,"slice past end of "+this._bytes.length+"-byte source",t);return this._bytes.subarray(n,t)};wn.prototype.getUint8=function(n){return Hr(this,n,1),this._bytes[n]};wn.prototype.getUint16=function(n,t){return Hr(this,n,2),this._view.getUint16(n,t)};wn.prototype.getUint32=function(n,t){return Hr(this,n,4),this._view.getUint32(n,t)};wn.prototype.getInt16=function(n,t){return Hr(this,n,2),this._view.getInt16(n,t)};wn.prototype.getInt32=function(n,t){return Hr(this,n,4),this._view.getInt32(n,t)};wn.prototype.getFloat64=function(n,t){return Hr(this,n,8),this._view.getFloat64(n,t)};function zr(n,t){this._handle=n,this.size=t}var Xv=["node","fs/promises"].join(":");zr.open=async function(n){if(typeof n!="string"||!n)throw new St(Et.INVALID_ARGUMENT,"NodeFileSource needs a file path");var t=await import(Xv),e=await t.open(n,"r"),i=await e.stat();return new zr(e,i.size)};zr.prototype.read=async function(n,t){if(n<0||t<n)throw new St(Et.INVALID_ARGUMENT,"bad read range "+n+".."+t);if(t>this.size)throw new St(Et.TRUNCATED,"read past end of "+this.size+"-byte file",t);return this.readInto(n,t,new Uint8Array(t-n))};zr.prototype.readInto=async function(n,t,e){if(n<0||t<n)throw new St(Et.INVALID_ARGUMENT,"bad read range "+n+".."+t);if(t>this.size)throw new St(Et.TRUNCATED,"read past end of "+this.size+"-byte file",t);for(var i=e.subarray(0,t-n),r=0;r<i.length;){var s=await this._handle.read(i,r,i.length-r,n+r);if(s.bytesRead===0)throw new St(Et.TRUNCATED,"file ended early",n+r);r+=s.bytesRead}return i};zr.prototype.close=async function(){this._handle&&(await this._handle.close(),this._handle=null)};var Yv=4294967296,Zv=2097151;function fs(n,t,e){var i=n.getUint32(t+4,e),r=n.getUint32(t,e);return i>Zv?null:i*Yv+r}function ji(n,t,e){for(var i=Math.min(t+e,n.length()),r="",s=t;s<i;s++){var a=n.getUint8(s);if(a===0)break;r+=a>126?"?":String.fromCharCode(a)}return r}function ae(n,t){return{offset:n,type:t}}function vr(){return{x:ae(0,"i32"),y:ae(4,"i32"),z:ae(8,"i32"),intensity:ae(12,"u16"),returnByte:ae(14,"u8"),classByte:ae(15,"u8"),scanAngleRank:ae(16,"i8"),userData:ae(17,"u8"),pointSourceId:ae(18,"u16")}}function ns(){return{x:ae(0,"i32"),y:ae(4,"i32"),z:ae(8,"i32"),intensity:ae(12,"u16"),returnByte:ae(14,"u8"),flagsByte:ae(15,"u8"),classification:ae(16,"u8"),userData:ae(17,"u8"),scanAngle:ae(18,"i16"),pointSourceId:ae(20,"u16"),gpsTime:ae(22,"f64")}}function xr(n,t){return n.red=ae(t,"u16"),n.green=ae(t+2,"u16"),n.blue=ae(t+4,"u16"),n}function Kv(){var n=[],t=vr();n[0]={id:0,size:20,extended:!1,fields:t};var e=vr();e.gpsTime=ae(20,"f64"),n[1]={id:1,size:28,extended:!1,fields:e},n[2]={id:2,size:26,extended:!1,fields:xr(vr(),20)};var i=vr();i.gpsTime=ae(20,"f64"),xr(i,28),n[3]={id:3,size:34,extended:!1,fields:i};var r=vr();r.gpsTime=ae(20,"f64"),r.wavePacket=ae(28,"wave"),n[4]={id:4,size:57,extended:!1,fields:r};var s=vr();s.gpsTime=ae(20,"f64"),xr(s,28),s.wavePacket=ae(34,"wave"),n[5]={id:5,size:63,extended:!1,fields:s},n[6]={id:6,size:30,extended:!0,fields:ns()},n[7]={id:7,size:36,extended:!0,fields:xr(ns(),30)};var a=xr(ns(),30);a.nir=ae(36,"u16"),n[8]={id:8,size:38,extended:!0,fields:a};var o=ns();o.wavePacket=ae(30,"wave"),n[9]={id:9,size:59,extended:!0,fields:o};var c=xr(ns(),30);return c.nir=ae(36,"u16"),c.wavePacket=ae(38,"wave"),n[10]={id:10,size:67,extended:!0,fields:c},n}var Ir=Object.freeze(Kv()),xe=!0;function qv(n){if(n.length()<227)throw new St(Et.TRUNCATED,"file is shorter than a LAS header",0);if(ji(n,0,4)!=="LASF")throw new St(Et.NOT_LAS,"no LASF signature: not a LAS file",0);var t=n.getUint8(24),e=n.getUint8(25);if(t!==1||e>4)throw new St(Et.UNSUPPORTED_VERSION,"LAS version "+t+"."+e+" is not supported (1.0-1.4)",24);var i=n.getUint16(94,xe);if(i<227)throw new St(Et.BAD_HEADER,"header size "+i+" is below the 227 bytes every version needs",94);var r=n.getUint8(104),s=r&63,a=r>=128||(r&64)!==0;if(s>10)throw new St(Et.BAD_HEADER,"point format "+s+" does not exist (0-10)",104);var o=n.getUint16(105,xe);if(o<Ir[s].size)throw new St(Et.BAD_HEADER,"record length "+o+" is shorter than format "+s+" needs ("+Ir[s].size+")",105);var c=e>=4&&i>=375&&n.length()>=375,l=n.getUint32(107,xe),h=[],u;if(c){if(l=fs(n,247,xe),l===null)throw new St(Et.TOO_MANY_POINTS,"more points than JavaScript can count exactly (2^53)",247);for(u=0;u<15;u++)h.push(fs(n,255+u*8,xe)||0)}else{for(u=0;u<5;u++)h.push(n.getUint32(111+u*4,xe));for(u=5;u<15;u++)h.push(0)}var f={fileSourceId:n.getUint16(4,xe),globalEncoding:n.getUint16(6,xe),versionMajor:t,versionMinor:e,systemId:ji(n,26,32),software:ji(n,58,32),creationDay:n.getUint16(90,xe),creationYear:n.getUint16(92,xe),headerSize:i,offsetToPointData:n.getUint32(96,xe),numberOfVlrs:n.getUint32(100,xe),pointFormat:s,compressed:a,recordLength:o,extraBytes:o-Ir[s].size,pointCount:l,pointsByReturn:h,scale:{x:n.getFloat64(131,xe),y:n.getFloat64(139,xe),z:n.getFloat64(147,xe)},offset:{x:n.getFloat64(155,xe),y:n.getFloat64(163,xe),z:n.getFloat64(171,xe)},bounds:{minX:n.getFloat64(187,xe),maxX:n.getFloat64(179,xe),minY:n.getFloat64(203,xe),maxY:n.getFloat64(195,xe),minZ:n.getFloat64(219,xe),maxZ:n.getFloat64(211,xe)},waveformStart:0,evlrStart:0,numberOfEvlrs:0};if(e>=3&&i>=235&&n.length()>=235&&(f.waveformStart=fs(n,227,xe)||0),c&&(f.evlrStart=fs(n,235,xe)||0,f.numberOfEvlrs=n.getUint32(243,xe)),f.offsetToPointData<i)throw new St(Et.BAD_HEADER,"point data starts inside the header",96);return f}var Oa=!0;function jv(n,t,e,i){for(var r=typeof i=="number"?i:n.length(),s=[],a=t,o=0;o<e;o++){if(a+54>r)throw new St(Et.BAD_VLR,"VLR "+(o+1)+" of "+e+" starts past the end of the VLR area",a);var c=n.getUint16(a+20,Oa);if(a+54+c>r)throw new St(Et.BAD_VLR,"VLR "+(o+1)+" ("+c+" bytes) runs past the end of the VLR area",a);s.push({userId:ji(n,a+2,16),recordId:n.getUint16(a+18,Oa),description:ji(n,a+22,32),start:a+54,length:c,bytes:new Uint8Array(n.slice(a+54,a+54+c))}),a+=54+c}return s}function Jv(n,t,e,i){for(var r=[],s=t,a=0;a<e;a++){if(s+60>n.length())throw new St(Et.BAD_VLR,"EVLR "+(a+1)+" starts past the end of the file",s);var o=fs(n,s+20,Oa);if(o===null)throw new St(Et.BAD_VLR,"EVLR "+(a+1)+" runs past the end of the file",s);r.push({userId:ji(n,s+2,16),recordId:n.getUint16(s+18,Oa),description:ji(n,s+28,32),start:s+60,length:o,bytes:null}),s+=60+o}return r}var $v=34735,Qv=2112,tx=3072,ex=2048,nx=32767;function is(n,t){return n[t]+n[t+1]*256}function ix(n){if(n.length<8)return[];for(var t=is(n,6),e=[],i=0;i<t&&8+i*8+8<=n.length;i++){var r=8+i*8;e.push({keyId:is(n,r),location:is(n,r+2),count:is(n,r+4),value:is(n,r+6)})}return e}function rx(n){var t=function(i){for(var r=0;r<n.length;r++){var s=n[r];if(s.keyId===i&&s.location===0&&s.value>0&&s.value<nx)return s.value}return null},e=t(tx);return e!==null?e:t(ex)}function sx(n){for(var t="",e=0;e<n.length&&n[e]!==0;e++)t+=String.fromCharCode(n[e]);return t}function ax(n){var t=null,e=null;(n||[]).forEach(function(s){s.userId==="LASF_Projection"&&(s.recordId===$v&&t===null&&(t=ix(s.bytes)),s.recordId===Qv&&e===null&&(e=sx(s.bytes)))});var i=t?rx(t):null;if(e!==null){var r={kind:"wkt",epsg:i,wkt:e};return t&&(r.keys=t),r}return t?{kind:"geokeys",epsg:i,keys:t}:{kind:null,epsg:null}}var ox="LASF_Spec",lx=0,iu=16,cx=15;function hx(n){var t={},e=n.find(function(c){return c.userId===ox&&c.recordId===lx});if(!e||!e.bytes)return t;var i=e.bytes;if(i.length%iu!==0)throw new St(Et.BAD_VLR,"the classification lookup VLR is "+i.length+" bytes, not a multiple of 16");for(var r=0;r<i.length;r+=iu){for(var s="",a=!0,o=1;o<=cx&&i[r+o]!==0;o++)(i[r+o]<32||i[r+o]>126)&&(a=!1),s+=String.fromCharCode(i[r+o]);a&&s.trim()&&!(i[r]in t)&&(t[i[r]]=s)}return t}function tc(n){return new St(Et.INVALID_ARGUMENT,n)}function ux(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function mf(n){if(n===null||typeof n!="object")throw tc("columns must be an object { count, <name>: TypedArray }");var t=n.count;if(typeof t!="number"||!Number.isInteger(t)||t<0)throw tc("count "+String(t)+" is not a whole number ≥ 0");return t}function wc(n){var t=mf(n),e=[];return Object.keys(n).forEach(function(i){var r=n[i];if(ux(r)){if(t===0){r.length===0&&e.push({name:i,k:1});return}var s=r.length/t;Number.isInteger(s)&&s>=1&&e.push({name:i,k:s})}}),e}function ds(n,t){var e=globalThis[Object.prototype.toString.call(n).slice(8,-1)];return new e(t)}function fx(n,t,e,i){var r=i.length;if(e===1){for(var s=0;s<r;s++)t[s]=n[i[s]];return}for(var a=0;a<r;a++)for(var o=i[a]*e,c=a*e,l=0;l<e;l++)t[c+l]=n[o+l]}function dx(n,t){for(var e=0;e<t.length;e++){var i=n[t[e].name];if(i.byteLength!==0)for(var r=e+1;r<t.length;r++){var s=n[t[r].name];if(!(s.byteLength===0||i.buffer!==s.buffer)&&i.byteOffset<s.byteOffset+s.byteLength&&s.byteOffset<i.byteOffset+i.byteLength)throw tc('inPlace: columns "'+t[e].name+'" and "'+t[r].name+'" share memory')}}}function Ki(n){return new St(Et.INVALID_ARGUMENT,n)}function px(n){if(!Array.isArray(n)&&!(ArrayBuffer.isView(n)&&!(n instanceof DataView)))throw Ki("polygon must be an Array or typed array [x0, y0, x1, y1, ...]");var t=n.length;if(t%2!==0)throw Ki("polygon has an odd length "+t+": it holds x, y pairs");if(t<6)throw Ki("polygon needs at least 3 vertices (6 values), got "+t);for(var e=new Float64Array(t),i=0;i<t;i++){var r=n[i];if(typeof r!="number"||!Number.isFinite(r))throw Ki("polygon["+i+"] = "+String(r)+" is not a finite number");e[i]=r}return e}function mx(n,t){if(t==null&&(t={}),typeof t!="object")throw Ki("options must be an object { boundary, tolerance }");var e=px(n),i=t.boundary===void 0?"touching":t.boundary;if(i!=="touching"&&i!=="inside")throw Ki('boundary must be "touching" or "inside", got '+String(i));var r=t.tolerance===void 0?0:t.tolerance;if(typeof r!="number"||!Number.isFinite(r)||r<0)throw Ki("tolerance must be a finite number ≥ 0, got "+String(r));for(var s=i==="touching",a=r*r,o=e.length/2,c=1/0,l=-1/0,h=1/0,u=-1/0,f=0;f<o;f++)e[2*f]<c&&(c=e[2*f]),e[2*f]>l&&(l=e[2*f]),e[2*f+1]<h&&(h=e[2*f+1]),e[2*f+1]>u&&(u=e[2*f+1]);c-=r,l+=r,h-=r,u+=r;function d(_,g,m,v,b,S){var C=b-m,E=S-v,w=_-m,x=g-v,M=C*C+E*E;if(M===0)return w*w+x*x;if(C*x-E*w===0&&_>=Math.min(m,b)&&_<=Math.max(m,b)&&g>=Math.min(v,S)&&g<=Math.max(v,S))return 0;var L=(w*C+x*E)/M;L<0?L=0:L>1&&(L=1);var P=_-(m+L*C),F=g-(v+L*E);return P*P+F*F}function p(_,g){if(!(_>=c&&_<=l&&g>=h&&g<=u))return!1;for(var m=!1,v=0,b=o-1;v<o;b=v++){var S=e[2*b],C=e[2*b+1],E=e[2*v],w=e[2*v+1];if(d(_,g,S,C,E,w)<=a)return s;w>g!=C>g&&_<(S-E)*(g-w)/(C-w)+E&&(m=!m)}return m}return{test:p,minX:c,maxX:l,minY:h,maxY:u}}function ru(n){return new St(Et.INVALID_ARGUMENT,n)}function su(n){return typeof n=="number"&&Number.isInteger(n)&&n>=0}function gf(n){return n.acc+=n.target,n.acc<n.total?!1:(n.acc-=n.total,!0)}function gx(n,t){if(!su(n))throw ru("count "+String(n)+" is not a whole number ≥ 0");if(!su(t))throw ru("target "+String(t)+" is not a whole number ≥ 0");var e,i;if(t>=n){for(e=new Uint32Array(n),i=0;i<n;i++)e[i]=i;return e}e=new Uint32Array(t);var r={total:n,target:t,acc:0},s=0;for(i=0;i<n&&s<t;i++)gf(r)&&(e[s++]=i);return e}function Bo(n){return new St(Et.INVALID_ARGUMENT,n)}function _x(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function au(n,t){if(!Array.isArray(n)&&!(_x(n)&&!(n instanceof BigInt64Array)&&!(n instanceof BigUint64Array))||n.length!==t)return!1;for(var e=0;e<t;e++)if(typeof n[e]!="number"||!isFinite(n[e]))return!1;return!0}function _f(n,t){if(n===null||typeof n!="object")throw Bo(t+" must be an object { m, t }");if(!au(n.m,9))throw Bo(t+".m must be 9 finite numbers (a row-major 3×3)");if(!au(n.t,3))throw Bo(t+".t must be 3 finite numbers");return n}var vx=Object.freeze(["x","y","z","intensity","returnNumber","numberOfReturns","classification"]),vf=Object.freeze({x:Float64Array,y:Float64Array,z:Float64Array,intensity:Uint16Array,returnNumber:Uint8Array,numberOfReturns:Uint8Array,scanDirection:Uint8Array,edgeOfFlightLine:Uint8Array,classification:Uint8Array,classificationFlags:Uint8Array,scannerChannel:Uint8Array,scanAngle:Float32Array,userData:Uint8Array,pointSourceId:Uint16Array,gpsTime:Float64Array,red:Uint16Array,green:Uint16Array,blue:Uint16Array,nir:Uint16Array,index:Uint32Array}),rn=!0;function xx(n){var t=n.fields,e={x:1,y:1,z:1,intensity:1,returnNumber:1,numberOfReturns:1,scanDirection:1,edgeOfFlightLine:1,classification:1,classificationFlags:1,scanAngle:1,userData:1,pointSourceId:1,index:1};return n.extended&&(e.scannerChannel=1),t.gpsTime&&(e.gpsTime=1),t.red&&(e.red=1,e.green=1,e.blue=1),t.nir&&(e.nir=1),e}function qa(n,t){var e=Ir[n.pointFormat],i=xx(e),r=t?t.slice():vx.concat(e.fields.red?["red","green","blue"]:[]);return r.forEach(function(s){if(!vf[s])throw new St(Et.INVALID_ARGUMENT,'unknown field "'+s+'"')}),r.filter(function(s){return i[s]})}function Mx(n,t,e){e=e||{};var i=Ir[t.pointFormat],r=qa(t,e.fields),s=t.recordLength,a=Math.floor(n.length/s),o=new DataView(n.buffer,n.byteOffset,n.byteLength),c=e.thin&&e.thin.target<e.thin.total?e.thin:null,l=typeof e.keep=="function"?e.keep:null,h=e.localOrigin||null,u=h&&isFinite(h.x)?h.x:0,f=h&&isFinite(h.y)?h.y:0,d=h&&isFinite(h.z)?h.z:0;e.float32;var p=e.firstIndex>0?e.firstIndex:0,_=e.transform?_f(e.transform,"transform"):null,g=0,m=0,v=0,b=0,S=0,C=0,E=0,w=0,x=0,M=0,L=0,P=0;_&&(g=_.m[0],m=_.m[1],v=_.m[2],b=_.m[3],S=_.m[4],C=_.m[5],E=_.m[6],w=_.m[7],x=_.m[8],M=_.t[0],L=_.t[1],P=_.t[2]);var F=e.into||null,U=F?F.cols:{};F||r.forEach(function(dt){U[dt]=new(xf(dt,e,t))(a)});var y=i.fields,A=t.scale.x,R=t.scale.y,D=t.scale.z,O=t.offset.x-u,G=t.offset.y-f,B=t.offset.z-d,X=i.extended,H={};r.forEach(function(dt){H[dt]=!0});for(var q=!!(_&&(H.x||H.y||H.z)),tt=t.offset.x,nt=t.offset.y,V=t.offset.z,k=F?F.at:0,et=0;et<a;et++){var ot=et*s;if(!(l&&!l(o,ot))&&!(c&&!gf(c))){if(H.index&&(U.index[k]=p+et),q){var st=o.getInt32(ot,rn)*A+tt,j=o.getInt32(ot+4,rn)*R+nt,ht=o.getInt32(ot+8,rn)*D+V;H.x&&(U.x[k]=g*st+m*j+v*ht+M-u),H.y&&(U.y[k]=b*st+S*j+C*ht+L-f),H.z&&(U.z[k]=E*st+w*j+x*ht+P-d)}else H.x&&(U.x[k]=o.getInt32(ot,rn)*A+O),H.y&&(U.y[k]=o.getInt32(ot+4,rn)*R+G),H.z&&(U.z[k]=o.getInt32(ot+8,rn)*D+B);H.intensity&&(U.intensity[k]=o.getUint16(ot+12,rn));var ct=o.getUint8(ot+14);if(X){var xt=o.getUint8(ot+15);H.returnNumber&&(U.returnNumber[k]=ct&15),H.numberOfReturns&&(U.numberOfReturns[k]=ct>>4&15),H.classificationFlags&&(U.classificationFlags[k]=xt&15),H.scannerChannel&&(U.scannerChannel[k]=xt>>4&3),H.scanDirection&&(U.scanDirection[k]=xt>>6&1),H.edgeOfFlightLine&&(U.edgeOfFlightLine[k]=xt>>7&1),H.classification&&(U.classification[k]=o.getUint8(ot+16)),H.scanAngle&&(U.scanAngle[k]=o.getInt16(ot+18,rn)*.006)}else{var gt=o.getUint8(ot+15);H.returnNumber&&(U.returnNumber[k]=ct&7),H.numberOfReturns&&(U.numberOfReturns[k]=ct>>3&7),H.scanDirection&&(U.scanDirection[k]=ct>>6&1),H.edgeOfFlightLine&&(U.edgeOfFlightLine[k]=ct>>7&1),H.classification&&(U.classification[k]=gt&31),H.classificationFlags&&(U.classificationFlags[k]=gt>>5&7),H.scanAngle&&(U.scanAngle[k]=o.getInt8(ot+16))}H.userData&&(U.userData[k]=o.getUint8(ot+17)),H.pointSourceId&&(U.pointSourceId[k]=o.getUint16(ot+y.pointSourceId.offset,rn)),H.gpsTime&&(U.gpsTime[k]=o.getFloat64(ot+y.gpsTime.offset,rn)),H.red&&(U.red[k]=o.getUint16(ot+y.red.offset,rn)),H.green&&(U.green[k]=o.getUint16(ot+y.green.offset,rn)),H.blue&&(U.blue[k]=o.getUint16(ot+y.blue.offset,rn)),H.nir&&(U.nir[k]=o.getUint16(ot+y.nir.offset,rn)),k++}}return F?{count:k-F.at}:(k<a&&r.forEach(function(dt){U[dt]=U[dt].slice(0,k)}),U.count=k,U)}function xf(n,t,e){if(n==="index")return e&&e.pointCount>4294967295?Float64Array:Uint32Array;var i=!!(t&&t.float32&&t.localOrigin);return i&&(n==="x"||n==="y"||n==="z")?Float32Array:vf[n]}function yx(n,t){for(var e=n.recordLength,i=Math.max(1,Math.floor(t/e)),r=[],s=0;s<n.pointCount;s+=i){var a=Math.min(i,n.pointCount-s),o=n.offsetToPointData+s*e;r.push({start:o,end:o+a*e,firstRecord:s,count:a})}return r}function Sx(n,t,e){var i=[],r=null;return n.forEach(function(s){r&&(r.count+s.count)*t>e&&(i.push(r),r=null),r||(r={start:s.start,end:s.end,firstRecord:s.firstRecord,count:0,chunks:[]}),r.end=s.end,r.count+=s.count,r.chunks.push(s)}),r&&i.push(r),i}var Aa=Object.freeze({NONE:0,POINTWISE:1,POINTWISE_CHUNKED:2,LAYERED_CHUNKED:3}),ce=Object.freeze({BYTE:0,POINT10:6,GPSTIME11:7,RGB12:8,WAVEPACKET13:9,POINT14:10,RGB14:11,RGBNIR14:12,WAVEPACKET14:13,BYTE14:14}),Ex="laszip encoded",bx=22204,ou=4294967295;function Tx(n){if(!n||n.length<34)throw new St(Et.BAD_VLR,"the LASzip VLR is "+(n?n.length:0)+" bytes (needs 34 or more)");var t=new DataView(n.buffer,n.byteOffset,n.byteLength),e=t.getUint16(32,!0);if(n.length<34+e*6)throw new St(Et.BAD_VLR,"the LASzip VLR lists "+e+" items but holds only "+n.length+" bytes");for(var i=t.getUint32(12,!0),r=[],s=0;s<e;s++)r.push({type:t.getUint16(34+s*6,!0),size:t.getUint16(36+s*6,!0),version:t.getUint16(38+s*6,!0)});return{compressor:t.getUint16(0,!0),coder:t.getUint16(2,!0),version:{major:t.getUint8(4),minor:t.getUint8(5),revision:t.getUint16(6,!0)},options:t.getUint32(8,!0),chunkSize:i===0?ou:i,variableChunks:i===0||i===ou,items:r}}function Mf(n){for(var t=0;t<n.length;t++)if(n[t].recordId===bx&&n[t].userId===Ex)return Tx(n[t].bytes);return null}ce.POINT10,ce.POINT10,ce.GPSTIME11,ce.POINT10,ce.RGB12,ce.POINT10,ce.GPSTIME11,ce.RGB12,ce.POINT14,ce.POINT14,ce.RGB14,ce.POINT14,ce.RGBNIR14;var yf=4294967295,Ds=16777216;function vn(n,t,e,i){this.bytes=n,this.base=i||0,this.p=t||0,this.end=e===void 0?n.length:e,this.value=0,this.range=yf}vn.prototype._next=function(){if(this.p>=this.end)throw new St(Et.TRUNCATED,"compressed LAZ data ended early",this.base+this.p);return this.bytes[this.p++]};vn.prototype.readInitBytes=function(){this.value=this._next()*16777216+this._next()*65536+this._next()*256+this._next(),this.range=yf};vn.prototype._renorm=function(){do this.value=(this.value<<8|this._next())>>>0,this.range=this.range<<8>>>0;while(this.range<Ds)};vn.prototype.decodeBit=function(n){var t=n.bit0Prob*(this.range>>>13),e;return this.value<t?(e=0,this.range=t,n.bit0Count++):(e=1,this.value-=t,this.range-=t),this.range<Ds&&this._renorm(),--n.bitsUntilUpdate===0&&n.update(),e};vn.prototype.decodeSymbol=function(n){var t=n.distribution,e,i,r,s,a=this.range;if(n.decoderTable){if(this.range=this.range>>>15,this.range===0)throw new St(Et.TRUNCATED,"corrupt LAZ stream (zero interval)",this.base+this.p);var o=this.value/this.range>>>0,c=o>>>n.tableShift;for(e=n.decoderTable[c],i=n.decoderTable[c+1]+1;i>e+1;)s=e+i>>>1,t[s]>o?i=s:e=s;r=t[e]*this.range,e!==n.lastSymbol&&(a=t[e+1]*this.range)}else{r=0,e=0,this.range=this.range>>>15,i=n.symbols,s=i>>>1;do{var l=this.range*t[s];l>this.value?(i=s,a=l):(e=s,r=l),s=e+i>>>1}while(s!==e)}return this.value-=r,this.range=a-r,this.range<Ds&&this._renorm(),n.symbolCount[e]++,--n.symbolsUntilUpdate===0&&n.update(),e};vn.prototype.readBits=function(n){if(n>19){var t=this.readShort();return this.readBits(n-16)*65536+t}this.range=this.range>>>n;var e=this.value/this.range>>>0;return this.value-=this.range*e,this.range<Ds&&this._renorm(),e};vn.prototype.readShort=function(){this.range=this.range>>>16;var n=this.value/this.range>>>0;return this.value-=this.range*n,this.range<Ds&&this._renorm(),n};vn.prototype.readInt=function(){var n=this.readShort();return this.readShort()*65536+n};var Ax=15,wx=32768,Rx=8192;function ye(n,t){if(!(n>=2&&n<=2048))throw new St(Et.UNSUPPORTED,"LAZ model with "+n+" symbols (2-2048)");if(this.symbols=n,this.lastSymbol=n-1,this.tableSize=0,this.tableShift=0,this.decoderTable=null,n>16){for(var e=3;n>Math.pow(2,e+2);)e++;this.tableSize=Math.pow(2,e),this.tableShift=Ax-e,this.decoderTable=new Uint32Array(this.tableSize+2)}this.distribution=new Uint32Array(n),this.symbolCount=new Uint32Array(n);for(var i=0;i<n;i++)this.symbolCount[i]=t?t[i]:1;this.totalCount=0,this.updateCycle=n,this.symbolsUntilUpdate=0,this.update(),this.symbolsUntilUpdate=this.updateCycle=n+6>>>1}ye.prototype.update=function(){var n=this.symbolCount,t=this.distribution,e=this.symbols,i;if(this.totalCount+=this.updateCycle,this.totalCount>wx)for(this.totalCount=0,i=0;i<e;i++)n[i]=n[i]+1>>>1,this.totalCount+=n[i];var r=0,s=Math.floor(2147483648/this.totalCount);if(this.decoderTable){var a=this.decoderTable,o=this.tableShift,c=0;for(i=0;i<e;i++){t[i]=s*r>>>16,r+=n[i];for(var l=t[i]>>>o;c<l;)c++,a[c]=i-1}for(a[0]=0;c<=this.tableSize;)c++,a[c]=e-1}else for(i=0;i<e;i++)t[i]=s*r>>>16,r+=n[i];this.updateCycle=5*this.updateCycle>>>2;var h=(e+6)*8;this.updateCycle>h&&(this.updateCycle=h),this.symbolsUntilUpdate=this.updateCycle};function Sf(){this.bit0Count=1,this.bitCount=2,this.bit0Prob=4096,this.bitsUntilUpdate=4,this.updateCycle=4}Sf.prototype.update=function(){this.bitCount+=this.updateCycle,this.bitCount>Rx&&(this.bitCount=this.bitCount+1>>>1,this.bit0Count=this.bit0Count+1>>>1,this.bit0Count===this.bitCount&&this.bitCount++);var n=Math.floor(2147483648/this.bitCount);this.bit0Prob=this.bit0Count*n>>>18,this.updateCycle=5*this.updateCycle>>>2,this.updateCycle>64&&(this.updateCycle=64),this.bitsUntilUpdate=this.updateCycle};var wa=new Float64Array(33);for(var fa=0;fa<=32;fa++)wa[fa]=Math.pow(2,fa);function Wr(n,t,e){n=n===void 0?16:n,this.contexts=t===void 0?1:t,this.bitsHigh=e===void 0?8:e,n&&n<32?(this.corrBits=n,this.corrRange=Math.pow(2,n),this.corrMin=-Math.floor(this.corrRange/2)):(this.corrBits=32,this.corrRange=0,this.corrMin=-2147483648),this.corrRangeI32=this.corrRange>2147483647?this.corrRange-4294967296:this.corrRange,this.k=0,this.mBits=[];for(var i=0;i<this.contexts;i++)this.mBits.push(new ye(this.corrBits+1));this.mCorrector0=new Sf,this.mCorrector=[];for(var r=1;r<=this.corrBits;r++)this.mCorrector.push(new ye(Math.pow(2,r<=this.bitsHigh?r:this.bitsHigh)))}Wr.prototype.decompress=function(n,t,e){var i=n.decodeSymbol(this.mBits[e]),r;if(this.k=i,i!==0)if(i<32){if(i<=this.bitsHigh)r=n.decodeSymbol(this.mCorrector[i-1]);else{var s=i-this.bitsHigh;r=n.decodeSymbol(this.mCorrector[i-1])*wa[s]+n.readBits(s)}r>=wa[i-1]?r+=1:r-=wa[i]-1}else r=this.corrMin;else r=n.decodeBit(this.mCorrector0);var a=t+r|0;return a<0?a=a+this.corrRangeI32|0:a>=this.corrRangeI32&&(a=a-this.corrRangeI32|0),a};function lu(n,t){var e=new DataView(n.buffer,n.byteOffset,n.byteLength),i=e.getUint32(t,!0),r=e.getInt32(t+4,!0);if(r>2097151||r<-2097152)throw new St(Et.BAD_HEADER,"LAZ chunk table offset is out of range",t);return r*4294967296+i}function Cx(n,t,e){if(n.length<8)throw new St(Et.TRUNCATED,"the LAZ chunk table is cut short");var i=new DataView(n.buffer,n.byteOffset,n.byteLength),r=i.getUint32(4,!0),s=[];if(!r)return s;var a=new vn(n,8,n.length,e);a.readInitBytes();for(var o=new Wr(32,2),c=0,l=0,h=0;h<r;h++){var u=t?o.decompress(a,c,0):0,f=o.decompress(a,l,1);c=u,l=f,s.push({pointCount:u<0?u+4294967296:u,byteCount:f<0?f+4294967296:f})}return s}async function Ix(n,t,e){var i=t.offsetToPointData,r=t.pointCount;if(e.compressor===Aa.POINTWISE){var s=t.evlrStart>i&&t.evlrStart<=n.size?t.evlrStart:n.size;return r?[{firstRecord:0,count:r,start:i,end:s}]:[]}if(e.compressor!==Aa.POINTWISE_CHUNKED&&e.compressor!==Aa.LAYERED_CHUNKED)throw new St(Et.UNSUPPORTED,"LAZ compressor "+e.compressor+" is not one LASzip defines (1-3)");if(i+8>n.size)throw new St(Et.TRUNCATED,"the LAZ point data is cut short",n.size);var a=lu(await n.read(i,i+8),0);if(a<=i){if(a=lu(await n.read(n.size-8,n.size),0),a<=i||a>=n.size)throw new St(Et.UNSUPPORTED,"this LAZ file has no chunk table (an unfinished write?); it cannot be read in windows")}else if(a>=n.size)throw new St(Et.TRUNCATED,"the LAZ chunk table should be at byte "+a+" but the file is "+n.size+" bytes (cut short?)",n.size);for(var o=await n.read(a,Math.min(n.size,a+8)),c=o.length===8?new DataView(o.buffer,o.byteOffset,8).getUint32(4,!0):0,l=Cx(await n.read(a,Math.min(n.size,a+8+c*24+16)),e.variableChunks,a),h=[],u=i+8,f=0,d=0;d<l.length&&f<r;d++){var p=e.variableChunks?l[d].pointCount:Math.min(e.chunkSize,r-f),_=u+l[d].byteCount;if(_>a)throw new St(Et.BAD_HEADER,"LAZ chunk "+d+" runs into the chunk table",u);h.push({firstRecord:f,count:p,start:u,end:_}),f+=p,u=_}if(e.variableChunks){var g=l.reduce(function(m,v){return m+v.pointCount},0);if(g!==r)throw new St(Et.BAD_HEADER,"the LAZ chunk table lists "+g+" points but the header says "+r,a)}if(f<r)throw new St(Et.TRUNCATED,"the LAZ chunk table covers "+f+" of "+r+" points",a);return h}var ii=!0,cu=[[15,14,13,12,11,10,9,8],[14,0,1,3,6,10,10,9],[13,1,2,4,7,11,11,10],[12,3,4,5,8,12,12,11],[11,6,7,8,9,13,13,12],[10,10,11,12,13,14,14,13],[9,10,11,12,13,14,15,14],[8,9,10,11,12,13,14,15]],hu=[[0,1,2,3,4,5,6,7],[1,0,1,2,3,4,5,6],[2,1,0,1,2,3,4,5],[3,2,1,0,1,2,3,4],[4,3,2,1,0,1,2,3],[5,4,3,2,1,0,1,2],[6,5,4,3,2,1,0,1],[7,6,5,4,3,2,1,0]];function ja(){this.v=new Int32Array(5),this.high=!0}ja.prototype.get=function(){return this.v[2]};ja.prototype.add=function(n){var t=this.v;this.high?n<t[2]?(t[4]=t[3],t[3]=t[2],n<t[0]?(t[2]=t[1],t[1]=t[0],t[0]=n):n<t[1]?(t[2]=t[1],t[1]=n):t[2]=n):(n<t[3]?(t[4]=t[3],t[3]=n):t[4]=n,this.high=!1):t[2]<n?(t[0]=t[1],t[1]=t[2],t[4]<n?(t[2]=t[3],t[3]=t[4],t[4]=n):t[3]<n?(t[2]=t[3],t[3]=n):t[2]=n):(t[1]<n?(t[0]=t[1],t[1]=n):t[0]=n,this.high=!0)};function Px(n,t){for(var e=[],i=0;i<n;i++)e.push(new ye(t));return e}function zo(n,t){return n[t]||(n[t]=new ye(256))}function uu(){for(var n=[],t=0;t<16;t++)n.push(new ja);return n}function Ef(n,t){var e=t.k;return n+(e<20?e&4294967294:20)}function bf(n,t,e){var i=Math.floor((t.k+e.k)/2);return n+(i<18?i&4294967294:18)}function Dx(n,t){n.size=20,n.lastIntensity=new Uint16Array(16),n.xMedian=uu(),n.yMedian=uu(),n.lastHeight=new Int32Array(8),n.changedValues=new ye(64),n.scanAngleRank=Px(2,256),n.bitByte=new Array(256),n.classification=new Array(256),n.userData=new Array(256),n.icIntensity=new t(16,4),n.icPointSourceId=new t(16,1),n.icDx=new t(32,2),n.icDy=new t(32,22),n.icZ=new t(32,20)}function Rc(){Dx(this,Wr)}Rc.prototype.first=function(n,t,e,i){for(var r=0;r<20;r++)e.setUint8(i+r,n[t+r]);this.x=e.getInt32(i,ii),this.y=e.getInt32(i+4,ii),this.z=e.getInt32(i+8,ii),this.intensity=0,this.bits=e.getUint8(i+14),this.cls=e.getUint8(i+15),this.angle=e.getInt8(i+16),this.user=e.getUint8(i+17),this.psid=e.getUint16(i+18,ii)};Rc.prototype.next=function(n,t,e){var i=n.decodeSymbol(this.changedValues),r,s,a,o;if(i!==0){if(i&32&&(this.bits=n.decodeSymbol(zo(this.bitByte,this.bits))),r=this.bits&7,s=this.bits>>>3&7,a=cu[s][r],o=hu[s][r],i&16?(this.intensity=this.icIntensity.decompress(n,this.lastIntensity[a],a<3?a:3),this.lastIntensity[a]=this.intensity):this.intensity=this.lastIntensity[a],i&8&&(this.cls=n.decodeSymbol(zo(this.classification,this.cls))),i&4){var c=n.decodeSymbol(this.scanAngleRank[this.bits>>>6&1]);this.angle=this.angle+c<<24>>24}i&2&&(this.user=n.decodeSymbol(zo(this.userData,this.user))),i&1&&(this.psid=this.icPointSourceId.decompress(n,this.psid,0))}else r=this.bits&7,s=this.bits>>>3&7,a=cu[s][r],o=hu[s][r];var l=s===1?1:0,h=this.icDx.decompress(n,this.xMedian[a].get(),l);this.x=this.x+h|0,this.xMedian[a].add(h),h=this.icDy.decompress(n,this.yMedian[a].get(),Ef(l,this.icDx)),this.y=this.y+h|0,this.yMedian[a].add(h),this.z=this.icZ.decompress(n,this.lastHeight[o],bf(l,this.icDx,this.icDy)),this.lastHeight[o]=this.z,t.setInt32(e,this.x,ii),t.setInt32(e+4,this.y,ii),t.setInt32(e+8,this.z,ii),t.setUint16(e+12,this.intensity,ii),t.setUint8(e+14,this.bits),t.setUint8(e+15,this.cls),t.setInt8(e+16,this.angle),t.setUint8(e+17,this.user),t.setUint16(e+18,this.psid,ii)};var Ba=!0,qi=500,As=-10,Lx=qi-As+1,Go=qi-As+2,Ux=qi-As+6;function Nx(n,t){n.size=8,n.multiModel=new ye(Ux),n.zeroDiffModel=new ye(6),n.ic=new t(32,9),n.last=0,n.nextSeq=0,n.hi=new Int32Array(4),n.lo=new Float64Array(4),n.diffs=new Int32Array(4),n.extremes=new Int32Array(4)}function Fx(n,t,e){n.nextSeq=n.nextSeq+1&3,n.hi[n.nextSeq]=t,n.lo[n.nextSeq]=e,n.last=n.nextSeq,n.diffs[n.last]=0,n.extremes[n.last]=0}function Vo(n,t){++n.extremes[n.last]>3&&(n.diffs[n.last]=t,n.extremes[n.last]=0)}function Ls(){Nx(this,Wr)}Ls.prototype._add=function(n,t){var e=this.lo[n]+t;e>=4294967296?(e-=4294967296,this.hi[n]=this.hi[n]+1|0):e<0&&(e+=4294967296,this.hi[n]=this.hi[n]-1|0),this.lo[n]=e};Ls.prototype._full=function(n){var t=this.ic.decompress(n,this.hi[this.last],8);Fx(this,t,n.readInt())};Ls.prototype.first=function(n,t,e,i){for(var r=0;r<8;r++)e.setUint8(i+r,n[t+r]);this.lo[0]=e.getUint32(i,Ba),this.hi[0]=e.getInt32(i+4,Ba)};Ls.prototype.next=function(n,t,e){for(;;){var i=this.last,r,s;if(this.diffs[i]===0){if(r=n.decodeSymbol(this.zeroDiffModel),r===1)this.diffs[i]=this.ic.decompress(n,0,0),this._add(i,this.diffs[i]),this.extremes[i]=0;else if(r===2)this._full(n);else if(r>2){this.last=i+r-2&3;continue}}else if(r=n.decodeSymbol(this.multiModel),r===1)this._add(i,this.ic.decompress(n,this.diffs[i],1)),this.extremes[i]=0;else if(r<Lx)r===0?(s=this.ic.decompress(n,0,7),Vo(this,s)):r<qi?s=this.ic.decompress(n,Math.imul(r,this.diffs[i]),r<10?2:3):r===qi?(s=this.ic.decompress(n,Math.imul(qi,this.diffs[i]),4),Vo(this,s)):(r=qi-r,r>As?s=this.ic.decompress(n,Math.imul(r,this.diffs[i]),5):(s=this.ic.decompress(n,Math.imul(As,this.diffs[i]),6),Vo(this,s))),this._add(i,s);else if(r===Go)this._full(n);else if(r>Go){this.last=i+r-Go&3;continue}break}t.setUint32(e,this.lo[this.last],Ba),t.setInt32(e+4,this.hi[this.last],Ba)};function Ox(n,t){var e=Math.fround(Math.fround(n)/Math.fround(t)),i=e>=0?Math.floor(e+.5):-Math.floor(.5-e);return i>2147483647?-2147483648:i}function Tf(n,t,e,i){var r=t-i,s=n-e;return r<0&&(r+=4294967296,s-=1),s=s|0,s===0&&r<2147483648?r:s===-1&&r>=2147483648?r-4294967296:null}var Pr=!0;function da(n){return n<0?0:n>255?255:n}function ps(){this.byteUsed=new ye(128),this.lowRed=new ye(256),this.highRed=new ye(256),this.lowGreen=new ye(256),this.highGreen=new ye(256),this.lowBlue=new ye(256),this.highBlue=new ye(256)}function Af(n,t,e){var i=n.decodeSymbol(t.byteUsed),r=e[0],s=e[1],a=e[2],o,c,l,h;o=i&1?n.decodeSymbol(t.lowRed)+(r&255)&255:r&255,o+=i&2?(n.decodeSymbol(t.highRed)+(r>>>8)&255)*256:r&65280,i&64?(h=(o&255)-(r&255),c=i&4?n.decodeSymbol(t.lowGreen)+da(h+(s&255))&255:s&255,i&16?(h=Math.trunc((h+(c&255)-(s&255))/2),l=n.decodeSymbol(t.lowBlue)+da(h+(a&255))&255):l=a&255,h=(o>>>8)-(r>>>8),c+=i&8?(n.decodeSymbol(t.highGreen)+da(h+(s>>>8))&255)*256:s&65280,i&32?(h=Math.trunc((h+(c>>>8)-(s>>>8))/2),l+=(n.decodeSymbol(t.highBlue)+da(h+(a>>>8))&255)*256):l+=a&65280):(c=o,l=o),e[0]=o,e[1]=c,e[2]=l}function Bx(n){n.size=6,n.models=new ps,n.last=new Uint16Array(3)}function Cc(){Bx(this)}Cc.prototype.first=function(n,t,e,i){for(var r=0;r<6;r++)e.setUint8(i+r,n[t+r]);this.last[0]=e.getUint16(i,Pr),this.last[1]=e.getUint16(i+2,Pr),this.last[2]=e.getUint16(i+4,Pr)};Cc.prototype.next=function(n,t,e){Af(n,this.models,this.last),t.setUint16(e,this.last[0],Pr),t.setUint16(e+2,this.last[1],Pr),t.setUint16(e+4,this.last[2],Pr)};function zx(n,t,e){n[0]=t[e]+t[e+1]*256,n[1]=t[e+2]+t[e+3]*256,n[2]=t[e+4]+t[e+5]*256}function Gx(n,t){n.size=t,n.last=new Uint8Array(t),n.models=[];for(var e=0;e<t;e++)n.models.push(new ye(256))}function Ic(n){Gx(this,n)}Ic.prototype.first=function(n,t,e,i){for(var r=0;r<this.size;r++)this.last[r]=n[t+r],e.setUint8(i+r,n[t+r])};Ic.prototype.next=function(n,t,e){for(var i=0;i<this.size;i++)this.last[i]=this.last[i]+n.decodeSymbol(this.models[i])&255,t.setUint8(e+i,this.last[i])};var ze=!0,mn=500,Ji=-10,_s=mn-Ji+1,Vx=mn-Ji+5,kx=[[0,1,2,3,4,5,3,4,4,5,5,5,5,5,5,5],[1,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3],[2,1,2,4,4,4,4,4,4,4,4,3,3,3,3,3],[3,3,4,5,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,4,4,5,4,4,4,4,4,4,4,4,4,4,4],[5,3,4,4,4,5,4,4,4,4,4,4,4,4,4,4],[3,3,4,4,4,4,5,4,4,4,4,4,4,4,4,4],[4,3,4,4,4,4,4,5,4,4,4,4,4,4,4,4],[4,3,4,4,4,4,4,4,5,4,4,4,4,4,4,4],[5,3,4,4,4,4,4,4,4,5,4,4,4,4,4,4],[5,3,4,4,4,4,4,4,4,4,5,4,4,4,4,4],[5,3,3,4,4,4,4,4,4,4,4,5,5,4,4,4],[5,3,3,4,4,4,4,4,4,4,4,5,5,5,4,4],[5,3,3,4,4,4,4,4,4,4,4,4,5,5,5,4],[5,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5],[5,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5]],ec=[];for(var pa=0;pa<16;pa++){ec.push([]);for(var ko=0;ko<16;ko++)ec[pa].push(Math.min(7,Math.abs(pa-ko)))}function fu(n){for(var t=[],e=0;e<n;e++)t.push(new ja);return t}function Hx(n,t,e){return e=e||{},e.x=n.getInt32(t,ze),e.y=n.getInt32(t+4,ze),e.z=n.getInt32(t+8,ze),e.intensity=n.getUint16(t+12,ze),e.bits=n.getUint8(t+14),e.flags=n.getUint8(t+15),e.cls=n.getUint8(t+16),e.user=n.getUint8(t+17),e.angle=n.getInt16(t+18,ze),e.psid=n.getUint16(t+20,ze),e.gpsLo=n.getUint32(t+22,ze),e.gpsHi=n.getInt32(t+26,ze),e}function Yn(n,t){this.unused=!1,this.p={x:n.x,y:n.y,z:n.z,intensity:n.intensity,bits:n.bits,flags:n.flags,cls:n.cls,angle:n.angle,user:n.user,psid:n.psid,gpsHi:n.gpsHi,gpsLo:n.gpsLo,gpsChange:!1},this.lastIntensity=new Uint16Array(8).fill(n.intensity),this.xMedian=fu(12),this.yMedian=fu(12),this.lastZ=new Int32Array(8).fill(n.z),this.changed=[];for(var e=0;e<8;e++)this.changed.push(new ye(128));this.channel=new ye(3),this.nret=new Array(16),this.rnum=new Array(16),this.rnumGpsSame=new ye(13),this.clsM=new Array(64),this.flagsM=new Array(64),this.userM=new Array(64),this.gpsMulti=new ye(Vx),this.gpsNoDiff=new ye(5),this.icDx=new t(32,2),this.icDy=new t(32,22),this.icZ=new t(32,20),this.icIntensity=new t(16,4),this.icAngle=new t(16,2),this.icPsid=new t(16,1),this.icGps=new t(32,9),this.gLast=0,this.gNext=0,this.gHi=new Int32Array(4),this.gLo=new Float64Array(4),this.gHi[0]=n.gpsHi,this.gLo[0]=n.gpsLo,this.gDiff=new Int32Array(4),this.gExtreme=new Int32Array(4)}function rs(n,t,e){return n[t]||(n[t]=new ye(e))}function Wx(n){var t=n.bits&15,e=n.bits>>>4;return(t===1?1:0)+(t>=e?2:0)+(n.gpsChange?4:0)}function Xx(n){return(n>>>7&1)*32+(n>>>6&1)*16+(n&15)}Yn.prototype.addGps=function(n,t){var e=this.gLo[n]+t;e>=4294967296?(e-=4294967296,this.gHi[n]=this.gHi[n]+1|0):e<0&&(e+=4294967296,this.gHi[n]=this.gHi[n]-1|0),this.gLo[n]=e};Yn.prototype.startGps=function(n,t){this.gNext=this.gNext+1&3,this.gHi[this.gNext]=n,this.gLo[this.gNext]=t,this.gLast=this.gNext,this.gDiff[this.gLast]=0,this.gExtreme[this.gLast]=0};Yn.prototype.fullGps=function(n){var t=this.icGps.decompress(n,this.gHi[this.gLast],8);this.startGps(t,n.readInt())};Yn.prototype.extremeGps=function(n){++this.gExtreme[this.gLast]>3&&(this.gDiff[this.gLast]=n,this.gExtreme[this.gLast]=0)};Yn.prototype.readGps=function(n){for(;;){var t=this.gLast,e,i;if(this.gDiff[t]===0)if(e=n.decodeSymbol(this.gpsNoDiff),e===0)this.gDiff[t]=this.icGps.decompress(n,0,0),this.addGps(t,this.gDiff[t]),this.gExtreme[t]=0;else if(e===1)this.fullGps(n);else{this.gLast=t+e-1&3;continue}else if(e=n.decodeSymbol(this.gpsMulti),e===1)this.addGps(t,this.icGps.decompress(n,this.gDiff[t],1)),this.gExtreme[t]=0;else if(e<_s)e===0?(i=this.icGps.decompress(n,0,7),this.extremeGps(i)):e<mn?i=this.icGps.decompress(n,Math.imul(e,this.gDiff[t]),e<10?2:3):e===mn?(i=this.icGps.decompress(n,Math.imul(mn,this.gDiff[t]),4),this.extremeGps(i)):(e=mn-e,e>Ji?i=this.icGps.decompress(n,Math.imul(e,this.gDiff[t]),5):(i=this.icGps.decompress(n,Math.imul(Ji,this.gDiff[t]),6),this.extremeGps(i))),this.addGps(t,i);else if(e===_s)this.fullGps(n);else{this.gLast=t+e-_s&3;continue}return}};Yn.prototype.otherGps=function(n,t){for(var e=1;e<4;e++){var i=this.gLast+e&3;if(Tf(n,t,this.gHi[i],this.gLo[i])!==null)return e}return 0};Yn.prototype.writeFullGps=function(n,t,e){this.icGps.compress(n,this.gHi[this.gLast],t,8),n.writeInt(e),this.startGps(t,e)};Yn.prototype.writeGps=function(n,t,e){for(;;){var i=this.gLast,r=Tf(t,e,this.gHi[i],this.gLo[i]),s,a;if(this.gDiff[i]===0)if(r!==null)n.encodeSymbol(this.gpsNoDiff,0),this.icGps.compress(n,0,r,0),this.gDiff[i]=r,this.gExtreme[i]=0;else if(s=this.otherGps(t,e)){n.encodeSymbol(this.gpsNoDiff,s+1),this.gLast=i+s&3;continue}else n.encodeSymbol(this.gpsNoDiff,1),this.writeFullGps(n,t,e);else if(r!==null)a=Ox(r,this.gDiff[i]),a>0&&a<mn?(n.encodeSymbol(this.gpsMulti,a),this.icGps.compress(n,Math.imul(a,this.gDiff[i]),r,a===1?1:a<10?2:3),a===1&&(this.gExtreme[i]=0)):a>=mn?(n.encodeSymbol(this.gpsMulti,mn),this.icGps.compress(n,Math.imul(mn,this.gDiff[i]),r,4),this.extremeGps(r)):a<0&&a>Ji?(n.encodeSymbol(this.gpsMulti,mn-a),this.icGps.compress(n,Math.imul(a,this.gDiff[i]),r,5)):a<0?(n.encodeSymbol(this.gpsMulti,mn-Ji),this.icGps.compress(n,Math.imul(Ji,this.gDiff[i]),r,6),this.extremeGps(r)):(n.encodeSymbol(this.gpsMulti,0),this.icGps.compress(n,0,r,7),this.extremeGps(r));else if(s=this.otherGps(t,e)){n.encodeSymbol(this.gpsMulti,_s+s),this.gLast=i+s&3;continue}else n.encodeSymbol(this.gpsMulti,_s),this.writeFullGps(n,t,e);this.gHi[this.gLast]=t,this.gLo[this.gLast]=e;return}};var vs=9;function Us(n){this.size=30,this.version=n,this.contexts=[null,null,null,null],this.current=0,this.sizes=new Array(vs),this.dec=new Array(vs),this.on=new Array(vs)}Us.prototype.first=function(n,t,e,i,r){for(var s=0;s<30;s++)e.setUint8(i+s,n[t+s]);var a=Hx(e,i);this.current=a.flags>>>4&3,this.contexts=[null,null,null,null],this.contexts[this.current]=new Yn(a,Wr),r.v=this.current};Us.prototype.readLayerSizes=function(n,t){for(var e=0;e<vs;e++)this.sizes[e]=n.getUint32(t,ze),t+=4;return t};Us.prototype.readLayers=function(n,t,e,i,r){this.sizes[0]===0&&i(t);for(var s=0;s<vs;s++){var a=this.sizes[s];t+a>e&&i(t),this.on[s]=a>0,a>0&&(this.dec[s]=new vn(n,t,t+a,r),this.dec[s].readInitBytes()),t+=a}return t};Us.prototype.next=function(n,t,e){var i=this.contexts[this.current],r=i.p,s=this.dec[0],a=s.decodeSymbol(i.changed[Wx(r)]);if(a&64){var o=(this.current+s.decodeSymbol(i.channel)+1)%4;this.contexts[o]||(this.contexts[o]=new Yn(r,Wr)),this.current=o,this.version===3&&(e.v=o),i=this.contexts[o],r=i.p,r.flags=r.flags&207|o<<4}this.version!==3&&(e.v=this.current);var c=a&32,l=a&16?1:0,h=a&8,u=r.bits>>>4,f=r.bits&15,d,p;d=a&4?s.decodeSymbol(rs(i.nret,u,16)):u;var _=a&3;_===0?p=f:_===1?p=(f+1)%16:_===2?p=(f+15)%16:l?p=s.decodeSymbol(rs(i.rnum,f,16)):p=(f+s.decodeSymbol(i.rnumGpsSame)+2)%16,r.bits=p+d*16;var g=kx[d][p],m=ec[d][p],v=(p===1?2:0)+(p>=d?1:0),b=d===1?1:0,S=g*2+l,C=i.icDx.decompress(s,i.xMedian[S].get(),b);if(r.x=r.x+C|0,i.xMedian[S].add(C),C=i.icDy.decompress(s,i.yMedian[S].get(),Ef(b,i.icDx)),r.y=r.y+C|0,i.yMedian[S].add(C),this.on[1]&&(r.z=i.icZ.decompress(this.dec[1],i.lastZ[m],bf(b,i.icDx,i.icDy)),i.lastZ[m]=r.z),this.on[2]&&(r.cls=this.dec[2].decodeSymbol(rs(i.clsM,(r.cls&31)*2+(v===3?1:0),256))),this.on[3]){var E=this.dec[3].decodeSymbol(rs(i.flagsM,Xx(r.flags),64));r.flags=(E>>>5&1)*128+(E>>>4&1)*64+(r.flags&48)+(E&15)}if(this.on[4]){var w=v*2+l;r.intensity=i.icIntensity.decompress(this.dec[4],i.lastIntensity[w],v)&65535,i.lastIntensity[w]=r.intensity}this.on[5]&&h&&(r.angle=i.icAngle.decompress(this.dec[5],r.angle,l)<<16>>16),this.on[6]&&(r.user=this.dec[6].decodeSymbol(rs(i.userM,Math.floor(r.user/4),256))),this.on[7]&&c&&(r.psid=i.icPsid.decompress(this.dec[7],r.psid,0)&65535),r.gpsChange=!!l,this.on[8]&&l&&(i.readGps(this.dec[8]),r.gpsHi=i.gHi[i.gLast],r.gpsLo=i.gLo[i.gLast]),n.setInt32(t,r.x,ze),n.setInt32(t+4,r.y,ze),n.setInt32(t+8,r.z,ze),n.setUint16(t+12,r.intensity,ze),n.setUint8(t+14,r.bits),n.setUint8(t+15,r.flags),n.setUint8(t+16,r.cls),n.setUint8(t+17,r.user),n.setInt16(t+18,r.angle,ze),n.setUint16(t+20,r.psid,ze),n.setUint32(t+22,r.gpsLo,ze),n.setInt32(t+26,r.gpsHi,ze)};var Dr=!0;function Pc(n,t){var e=n.lastContext;return n.lastContext!==t&&(n.lastContext=t,n.unused[t]&&(n.seed(e,t),n.unused[t]=!1,n.version===3&&(e=t)),n.version===4&&(e=t)),e}function Dc(n,t){n.unused=[!0,!0,!0,!0],n.unused[t]=!1,n.lastContext=t}function wf(n,t,e,i,r,s,a){if(e+i>s&&r(e),i===0)return null;var o=new vn(t,e,e+i,a);return o.readInitBytes(),o}function Yx(n,t){n.size=6,n.version=t,n.models=[new ps,new ps,new ps,new ps],n.last=[new Uint16Array(3),new Uint16Array(3),new Uint16Array(3),new Uint16Array(3)],n.unused=[!0,!0,!0,!0],n.lastContext=0}function Zx(n,t){this.last[t].set(this.last[n])}function ui(n){Yx(this,n),this.dec=null}ui.prototype.first=function(n,t,e,i,r){for(var s=0;s<6;s++)e.setUint8(i+s,n[t+s]);zx(this.last[r.v],n,t),Dc(this,r.v)};ui.prototype.readLayerSizes=function(n,t){return this.layerSize=n.getUint32(t,Dr),t+4};ui.prototype.readLayers=function(n,t,e,i,r){return this.dec=wf(this,n,t,this.layerSize,i,e,r),t+this.layerSize};ui.prototype.seed=Zx;ui.prototype.next=function(n,t,e){var i=Pc(this,e.v),r=this.last[i];this.dec&&Af(this.dec,this.models[this.lastContext],r),n.setUint16(t,r[0],Dr),n.setUint16(t+2,r[1],Dr),n.setUint16(t+4,r[2],Dr)};function Kx(n,t){n.size=2,n.version=t,n.usedModel=[],n.low=[],n.high=[];for(var e=0;e<4;e++)n.usedModel.push(new ye(4)),n.low.push(new ye(256)),n.high.push(new ye(256));n.last=new Uint16Array(4),n.unused=[!0,!0,!0,!0],n.lastContext=0}function qx(n,t){this.last[t]=this.last[n]}function Xr(n){Kx(this,n),this.dec=null}Xr.prototype.first=function(n,t,e,i,r){e.setUint8(i,n[t]),e.setUint8(i+1,n[t+1]),this.last[r.v]=n[t]+n[t+1]*256,Dc(this,r.v)};Xr.prototype.readLayerSizes=ui.prototype.readLayerSizes;Xr.prototype.readLayers=ui.prototype.readLayers;Xr.prototype.seed=qx;Xr.prototype.next=function(n,t,e){var i=Pc(this,e.v);if(this.dec){var r=this.lastContext,s=this.last[i],a=this.dec.decodeSymbol(this.usedModel[r]),o=a&1?this.dec.decodeSymbol(this.low[r])+(s&255)&255:s&255;o+=a&2?(this.dec.decodeSymbol(this.high[r])+(s>>>8)&255)*256:s&65280,this.last[i]=o}n.setUint16(t,this.last[i],Dr)};function jx(n,t,e){n.size=t,n.version=e,n.models=[null,null,null,null],n.last=[new Uint8Array(t),new Uint8Array(t),new Uint8Array(t),new Uint8Array(t)],n.unused=[!0,!0,!0,!0],n.lastContext=0}function Rf(n){for(var t=[],e=0;e<n;e++)t.push(new ye(256));return t}function Jx(n,t,e,i){n.last[i.v].set(t.subarray(e,e+n.size)),Dc(n,i.v),n.models[i.v]=Rf(n.size)}function $x(n,t){this.models[t]=Rf(this.size),this.last[t].set(this.last[n])}function Yr(n,t){jx(this,n,t),this.sizes=new Array(n),this.dec=new Array(n)}Yr.prototype.first=function(n,t,e,i,r){for(var s=0;s<this.size;s++)e.setUint8(i+s,n[t+s]);Jx(this,n,t,r)};Yr.prototype.readLayerSizes=function(n,t){for(var e=0;e<this.size;e++)this.sizes[e]=n.getUint32(t,Dr),t+=4;return t};Yr.prototype.readLayers=function(n,t,e,i,r){for(var s=0;s<this.size;s++)this.dec[s]=wf(this,n,t,this.sizes[s],i,e,r),t+=this.sizes[s];return t};Yr.prototype.seed=$x;Yr.prototype.next=function(n,t,e){for(var i=Pc(this,e.v),r=this.last[i],s=this.models[e.v],a=0;a<this.size;a++)this.dec[a]&&(r[a]=r[a]+this.dec[a].decodeSymbol(s[a])&255),n.setUint8(t+a,r[a])};var za={0:"Byte",6:"Point10",7:"GpsTime11",8:"RGB12",9:"WavePacket13",10:"Point14",11:"RGB14",12:"RGBNIR14",13:"WavePacket14",14:"Byte14"};function Qx(n){if(n.version!==2&&!(n.type===ce.BYTE&&n.version===1))throw new St(Et.UNSUPPORTED,"LAZ item "+(za[n.type]||n.type)+" version "+n.version+" is not supported (version 2 is; version 1 is from LASzip before 2011)");if(n.type!==ce.POINT10&&n.type!==ce.GPSTIME11&&n.type!==ce.RGB12&&n.type!==ce.BYTE)throw new St(Et.UNSUPPORTED,"LAZ item "+(za[n.type]||n.type)+" is not supported (wave packets are not read)")}function tM(n){switch(Qx(n),n.type){case ce.POINT10:return function(){return new Rc};case ce.GPSTIME11:return function(){return new Ls};case ce.RGB12:return function(){return new Cc};default:return function(){return new Ic(n.size)}}}function eM(n){if(n.version!==3&&n.version!==4)throw new St(Et.UNSUPPORTED,"LAZ item "+(za[n.type]||n.type)+" version "+n.version+" is not supported in a layered file (versions 3 and 4 are)");if(n.type!==ce.POINT14&&n.type!==ce.RGB14&&n.type!==ce.RGBNIR14&&n.type!==ce.BYTE14)throw new St(Et.UNSUPPORTED,"LAZ item "+(za[n.type]||n.type)+" is not supported (wave packets are not read)")}function nM(n){eM(n);var t=n.version;switch(n.type){case ce.POINT14:return function(){return[new Us(t)]};case ce.RGB14:return function(){return[new ui(t)]};case ce.RGBNIR14:return function(){return[new ui(t),new Xr(t)]};default:return function(){return[new Yr(n.size,t)]}}}function iM(n){return function(t){throw new St(Et.TRUNCATED,"a LAZ chunk is cut short",n+t)}}function rM(n,t,e){return function(r,s,a,o,c,l,h){if(o){h=h||0;var u=iM(h),f=[];n.forEach(function(v){f.push.apply(f,v())});var d={v:0},p=s,_;for(p+t>a&&u(p),_=0;_<f.length;_++)f[_].first(r,p,c,l,d),p+=f[_].size,l+=f[_].size;if(o!==1){p+4+e*4>a&&u(p);var g=new DataView(r.buffer,r.byteOffset,r.byteLength);for(p+=4,_=0;_<f.length;_++)p=f[_].readLayerSizes(g,p);for(_=0;_<f.length;_++)p=f[_].readLayers(r,p,a,u,h);for(var m=1;m<o;m++)for(d.v=0,_=0;_<f.length;_++)f[_].next(c,l,d),l+=f[_].size}}}}function sM(n,t){var e=n.items.reduce(function(i,r){return i+r.size},0);if(e!==t)throw new St(Et.BAD_VLR,"the LASzip items make "+e+"-byte records but the header says "+t);if(n.coder!==0)throw new St(Et.UNSUPPORTED,"LAZ coder "+n.coder+" (only the arithmetic coder, 0, exists)")}function aM(n,t){if(sM(n,t),n.compressor===Aa.LAYERED_CHUNKED){var e=n.items.reduce(function(r,s){return r+(s.type===ce.POINT14?9:s.type===ce.RGBNIR14?2:s.type===ce.BYTE14?s.size:1)},0);return rM(n.items.map(nM),t,e)}var i=n.items.map(tM);return function(s,a,o,c,l,h,u){if(c){u=u||0;var f=i.map(function(m){return m()}),d,p=a;if(p+t>o)throw new St(Et.TRUNCATED,"a LAZ chunk is shorter than one record",u+p);for(d=0;d<f.length;d++)f[d].first(s,p,l,h),p+=f[d].size,h+=f[d].size;if(c!==1){var _=new vn(s,p,o,u);_.readInitBytes();for(var g=1;g<c;g++)for(d=0;d<f.length;d++)f[d].next(_,l,h),h+=f[d].size}}}}var oM=["node","worker_threads"].join(":"),lM=["node","os"].join(":"),cM=16;async function hM(){var n=1;if(typeof navigator<"u"&&navigator.hardwareConcurrency)n=navigator.hardwareConcurrency;else try{var t=await import(lM);n=typeof t.availableParallelism=="function"?t.availableParallelism():t.cpus().length}catch{n=1}return Math.max(1,Math.min(cM,n-1))}function uM(n){var t=function(e,i){return/^--input-type(=|$)/.test(e)||n[i-1]==="--input-type"};if(n.some(t))return{execArgv:n.filter(function(e,i){return!t(e,i)})}}async function fM(n,t,e){var i=!1,r,s,a=new Promise(function(d,p){r=d,s=p});function o(d){d&&d.ready?(i=!0,r()):n(d)}function c(d){i?t(d):s(d)}var l;if(typeof Worker=="function"){var h=new Worker(new URL("/trimesh-build-js/assets/chunkWorker-D5oI3EiU.js",import.meta.url),{type:"module"});h.onmessage=function(d){o(d.data)},h.onerror=function(d){d&&d.preventDefault&&d.preventDefault(),c(new Error(d&&d.message?d.message:"LAZ worker failed"))},l={post:function(d,p){h.postMessage(d,p)},close:function(){h.terminate()}}}else{var u=await import(oM),f=new u.Worker(new URL("data:text/javascript;base64,Ly8gc3JjL2xhei9jaHVua1dvcmtlci5qcwovLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy8gV29ya2VyIGVudHJ5IGZvciBwYXJhbGxlbCBMQVogd29yayAoc3JjL2xhei9wb29sLmpzKTogZGVjb2RlcyB3aG9sZQovLyBjaHVua3MgaW50byByYXcgTEFTIHJlY29yZHMsIG9yIGNvbXByZXNzZXMgcmF3IHJlY29yZHMgaW50byB3aG9sZQovLyBjaHVua3MsIGFuZCBzZW5kcyB0aGVtIGJhY2sgKHRyYW5zZmVycmVkKS4gUnVucyBhcyBhIGJyb3dzZXIgbW9kdWxlCi8vIFdvcmtlciBvciBhIE5vZGUgd29ya2VyX3RocmVhZHMgV29ya2VyLgovLyBJbiAoZGVjb2RlLCBubyBvcCk6ICB7IGlkLCB2bHIsIHJlY29yZExlbmd0aCwgcGFja2VkOiBBcnJheUJ1ZmZlciwgY2h1bmtzOiBbeyBzLCBlLCBjb3VudCB9XSwgYmFzZSB9Ci8vICAgICAgKHMgLyBlIGluZGV4IGludG8gcGFja2VkOyBiYXNlIGlzIHBhY2tlZCdzIGZpbGUgb2Zmc2V0KQovLyBJbiAoY29tcHJlc3MpOiB7IGlkLCBvcDogImNvbXByZXNzIiwgdmxyLCByZWNvcmRMZW5ndGgsIHJlY29yZHM6IEFycmF5QnVmZmVyLCBjb3VudHM6IG51bWJlcltdIH0KLy8gICAgICAoY291bnRzOiBlYWNoIGNodW5rJ3MgcG9pbnRzLCBiYWNrIHRvIGJhY2sgZnJvbSB0aGUgc3RhcnQgb2YgcmVjb3JkcykKLy8gT3V0OiB7IHJlYWR5OiB0cnVlIH0gb25jZSBsaXN0ZW5pbmcsIHRoZW4gcGVyIHRhc2sKLy8gICAgICBkZWNvZGUgeyBpZCwgcmVjb3JkczogQXJyYXlCdWZmZXIgfSwgY29tcHJlc3MgeyBpZCwgY2h1bmtzOiBBcnJheUJ1ZmZlciwgc2l6ZXM6IG51bWJlcltdIH0KLy8gICAgICAodGhlIGNodW5rcyBiYWNrIHRvIGJhY2ssIGFuZCBlYWNoIG9uZSdzIGxlbmd0aCksIG9yIHsgaWQsIGVycm9yOiB7IGNvZGUsIG1lc3NhZ2UsIG9mZnNldCB9IH0KLy8KLy8gVXNlcyB0aGUgY2h1bmsgZGVjb2RlciB0cmFuc2xhdGVkIGZyb20gbGF6LXJzIChodHRwczovL2dpdGh1Yi5jb20vbGF6LXJzL2xhei1ycyksCi8vIGl0c2VsZiBhIHBvcnQgb2YgTEFTemlwIGJ5IHJhcGlkbGFzc28uIChjKSAyMDA3LTIwMTUgbWFydGluIGlzZW5idXJnLAovLyByYXBpZGxhc3NvOyAoYykgMjAxOS0yMDIzIFRob21hcyBNb250YWlndS4KLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAoc2VlIExJQ0VOU0UtQVBBQ0hFIGFuZAovLyBOT1RJQ0UpLiBDaGFuZ2VzOiB3cml0dGVuIGluIEphdmFTY3JpcHQgYXMgYSB3b3JrZXIgZW50cnksIEJyZW50IEJ1ZmZoYW0gMjAyNi4KLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgppbXBvcnQgeyBjcmVhdGVDaHVua0RlY29kZXIgfSBmcm9tICIuL2RlY29tcHJlc3NDaHVuay5qcyI7CmltcG9ydCB7IGNyZWF0ZUNodW5rQ29tcHJlc3NvciB9IGZyb20gIi4vY29tcHJlc3NDaHVuay5qcyI7CgovLyBub2RlOndvcmtlcl90aHJlYWRzIGlzIG5hbWVkIGF0IHJ1biB0aW1lIHNvIGJyb3dzZXIgYnVuZGxlcnMgbGVhdmUgaXQgYWxvbmUKdmFyIE5PREVfV09SS0VSX1RIUkVBRFMgPSBbIm5vZGUiLCAid29ya2VyX3RocmVhZHMiXS5qb2luKCI6Iik7Cgp2YXIgcG9ydCA9IG51bGw7CmlmICh0eXBlb2Ygc2VsZiAhPT0gInVuZGVmaW5lZCIgJiYgdHlwZW9mIHNlbGYucG9zdE1lc3NhZ2UgPT09ICJmdW5jdGlvbiIpIHsKCXBvcnQgPSB7IHBvc3Q6IGZ1bmN0aW9uIChtLCB0KSB7IHNlbGYucG9zdE1lc3NhZ2UobSwgdCk7IH0gfTsKCXNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsgaGFuZGxlKGUuZGF0YSk7IH07Cn0gZWxzZSB7Cgl2YXIgd3QgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyAvKiBAdml0ZS1pZ25vcmUgKi8gTk9ERV9XT1JLRVJfVEhSRUFEUyk7Cglwb3J0ID0geyBwb3N0OiBmdW5jdGlvbiAobSwgdCkgeyB3dC5wYXJlbnRQb3J0LnBvc3RNZXNzYWdlKG0sIHQpOyB9IH07Cgl3dC5wYXJlbnRQb3J0Lm9uKCJtZXNzYWdlIiwgaGFuZGxlKTsKfQpwb3J0LnBvc3QoeyByZWFkeTogdHJ1ZSB9KTsgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBwb29sIHdhaXRzIGZvciB0aGlzIGJlZm9yZSBzZW5kaW5nIHdvcmsKCi8vIFRoZSBkZWNvZGVyIGFuZCB0aGUgY29tcHJlc3NvciwgZWFjaCBtYWRlIG9uY2UgcGVyIFZMUiArIHJlY29yZCBsZW5ndGgKZnVuY3Rpb24gY2FjaGUobWFrZSkgewoJdmFyIGtleSA9IG51bGwsIG1hZGUgPSBudWxsOwoJcmV0dXJuIGZ1bmN0aW9uIChtKSB7CgkJdmFyIGsgPSBKU09OLnN0cmluZ2lmeShtLnZscikgKyAiLyIgKyBtLnJlY29yZExlbmd0aDsKCQlpZiAoa2V5ICE9PSBrKSB7IG1hZGUgPSBtYWtlKG0udmxyLCBtLnJlY29yZExlbmd0aCk7IGtleSA9IGs7IH0KCQlyZXR1cm4gbWFkZTsKCX07Cn0KdmFyIGRlY29kZXIgPSBjYWNoZShjcmVhdGVDaHVua0RlY29kZXIpLCBjb21wcmVzc29yID0gY2FjaGUoY3JlYXRlQ2h1bmtDb21wcmVzc29yKTsKCmZ1bmN0aW9uIGhhbmRsZShtKSB7Cgl0cnkgewoJCWlmIChtLm9wID09PSAiY29tcHJlc3MiKSBjb21wcmVzcyhtKTsKCQllbHNlIGRlY29kZShtKTsKCX0gY2F0Y2ggKGVycikgewoJCXBvcnQucG9zdCh7IGlkOiBtLmlkLCBlcnJvcjogeyBjb2RlOiBlcnIgJiYgZXJyLmNvZGUsIG1lc3NhZ2U6IGVyciAmJiBlcnIubWVzc2FnZSA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVyciksIG9mZnNldDogZXJyICYmIGVyci5vZmZzZXQgfSB9KTsKCX0KfQoKZnVuY3Rpb24gY29tcHJlc3MobSkgewoJdmFyIG9uZSA9IGNvbXByZXNzb3IobSksIHJlY29yZHMgPSBuZXcgVWludDhBcnJheShtLnJlY29yZHMpOwoJdmFyIGNodW5rcyA9IFtdLCBwID0gMCwgdG90YWwgPSAwOwoJZm9yICh2YXIgaSA9IDA7IGkgPCBtLmNvdW50cy5sZW5ndGg7IGkrKykgewoJCWNodW5rcy5wdXNoKG9uZShyZWNvcmRzLCBwLCBtLmNvdW50c1tpXSkpOwoJCXAgKz0gbS5jb3VudHNbaV0gKiBtLnJlY29yZExlbmd0aDsKCQl0b3RhbCArPSBjaHVua3NbaV0ubGVuZ3RoOwoJfQoJdmFyIG91dCA9IG5ldyBVaW50OEFycmF5KHRvdGFsKSwgbyA9IDA7CgljaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoYykgeyBvdXQuc2V0KGMsIG8pOyBvICs9IGMubGVuZ3RoOyB9KTsKCXBvcnQucG9zdCh7IGlkOiBtLmlkLCBjaHVua3M6IG91dC5idWZmZXIsIHNpemVzOiBjaHVua3MubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxlbmd0aDsgfSkgfSwgW291dC5idWZmZXJdKTsKfQoKZnVuY3Rpb24gZGVjb2RlKG0pIHsKCXZhciBkZWMgPSBkZWNvZGVyKG0pOwoJdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobS5wYWNrZWQpOwoJdmFyIHRvdGFsID0gbS5jaHVua3MucmVkdWNlKGZ1bmN0aW9uIChzLCBjKSB7IHJldHVybiBzICsgYy5jb3VudDsgfSwgMCk7Cgl2YXIgb3V0ID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsICogbS5yZWNvcmRMZW5ndGgpOwoJdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcob3V0KSwgbyA9IDA7Cglmb3IgKHZhciBpID0gMDsgaSA8IG0uY2h1bmtzLmxlbmd0aDsgaSsrKSB7CgkJdmFyIGMgPSBtLmNodW5rc1tpXTsKCQlkZWMoYnl0ZXMsIGMucywgYy5lLCBjLmNvdW50LCB2aWV3LCBvLCBtLmJhc2UpOwoJCW8gKz0gYy5jb3VudCAqIG0ucmVjb3JkTGVuZ3RoOwoJfQoJcG9ydC5wb3N0KHsgaWQ6IG0uaWQsIHJlY29yZHM6IG91dCB9LCBbb3V0XSk7Cn0K",import.meta.url),uM(process.execArgv));f.on("message",o),f.on("error",c),f.on("exit",function(d){i||s(new Error("LAZ worker exited ("+d+") before it started"))}),l={post:function(d,p){f.postMessage(d,p)},close:function(){return f.terminate()},hold:function(){f.ref()},release:function(){f.unref()}}}try{await a}catch(d){throw l.close(),d}return l.release&&l.release(),l}async function dM(n,t){var e=[],i=[],r=[],s=new Map,a=1,o=!1;function c(_){var g=_ instanceof St?_:new St(Et.UNSUPPORTED,"a LAZ worker failed: "+(_&&_.message?_.message:String(_)));s.forEach(function(m){m.reject(g)}),s.clear(),r.forEach(function(m){m.reject(g)}),r=[]}function l(){for(;i.length&&r.length;){var _=i.pop(),g=r.shift();g.worker=_,s.set(g.msg.id,g),_.hold&&_.hold(),_.post(g.msg,g.transfer)}}function h(_){var g=s.get(_.id);g&&(s.delete(_.id),g.worker.release&&g.worker.release(),i.push(g.worker),_.error?g.reject(new St(_.error.code||Et.UNSUPPORTED,_.error.message,_.error.offset)):g.resolve(g.result(_)),l())}for(var u=[],f=0;f<n;f++)u.push(fM(h,c));var d=await Promise.allSettled(u);if(e=d.filter(function(_){return _.status==="fulfilled"}).map(function(_){return _.value}),e.length<n)return e.forEach(function(_){_.close()}),null;i=e.slice();function p(_,g,m){return o?Promise.reject(new St(Et.ABORTED,"the LAZ pool is closed")):new Promise(function(v,b){r.push({msg:Object.assign({id:a++},_),transfer:g,result:m,resolve:v,reject:b}),l()})}return{size:n,decode:function(_){return p(_,[_.packed],function(g){return new Uint8Array(g.records)})},compress:function(_){return p(Object.assign({op:"compress"},_),[_.records],function(g){return{bytes:new Uint8Array(g.chunks),sizes:g.sizes}})},close:function(){o||(o=!0,c(new St(Et.ABORTED,"the LAZ pool was closed")),e.forEach(function(_){_.close()}))}}}var ss=!0;function Mr(n,t){return n??t}function Cf(n,t){n=n||{};var e=[],i=Ir[t.pointFormat].extended;if(Array.isArray(n.classes)&&n.classes.length){var r=new Uint8Array(256);n.classes.forEach(function(C){r[C]=1}),e.push(i?function(C,E){return r[C.getUint8(E+16)]===1}:function(C,E){return r[C.getUint8(E+15)&31]===1})}if(Array.isArray(n.returns)&&n.returns.length){var s=new Uint8Array(16);n.returns.forEach(function(C){s[C]=1}),e.push(i?function(C,E){return s[C.getUint8(E+14)&15]===1}:function(C,E){return s[C.getUint8(E+14)&7]===1})}var a=t.scale,o=t.offset;if(n.bounds){var c=n.bounds,l=Mr(c.minX,-1/0),h=Mr(c.maxX,1/0),u=Mr(c.minY,-1/0),f=Mr(c.maxY,1/0),d=Mr(c.minZ,-1/0),p=Mr(c.maxZ,1/0);e.push(function(C,E){var w=C.getInt32(E,ss)*a.x+o.x;if(w<l||w>h)return!1;var x=C.getInt32(E+4,ss)*a.y+o.y;if(x<u||x>f)return!1;var M=C.getInt32(E+8,ss)*a.z+o.z;return M>=d&&M<=p})}if(n.polygon!==void 0&&n.polygon!==null){var _=mx(n.polygon,{boundary:n.boundary,tolerance:n.tolerance}),g=_.test,m=_.minX,v=_.maxX,b=_.minY,S=_.maxY;e.push(function(C,E){var w=C.getInt32(E,ss)*a.x+o.x;if(w<m||w>v)return!1;var x=C.getInt32(E+4,ss)*a.y+o.y;return x<b||x>S?!1:g(w,x)})}return e.length?e.length===1?e[0]:function(C,E){for(var w=0;w<e.length;w++)if(!e[w](C,E))return!1;return!0}:null}function pM(n,t,e){for(var i=new DataView(n.buffer,n.byteOffset,n.byteLength),r=Math.floor(n.length/t),s=0,a=0;a<r;a++)e(i,a*t)&&s++;return s}var mM=4294967295,gM=9007199254740992,bi=-1;function xs(n){return new St(Et.INVALID_ARGUMENT,n)}function Ms(n,t){var e=mf(n),i=Object.create(null);if(wc(n).forEach(function(s){i[s.name]=s.k}),i.x===1&&i.y===1&&i.z===1)return{x:n.x,y:n.y,z:n.z,stride:1};if(i.positions===3||e===0&&i.positions===1){var r=n.positions;return{x:r,y:r.subarray(1),z:r.subarray(2),stride:3}}throw xs(t+" needs x, y, z columns or a k = 3 positions column")}function If(n){if(n>mM)throw new St(Et.TOO_MANY_POINTS,"the neighbour index takes at most 4,294,967,295 points, not "+n)}function du(n){return n^=n>>>16,n=Math.imul(n,2246822507),n^=n>>>13,n=Math.imul(n,3266489909),(n^n>>>16)>>>0}function nc(n){var t=n%4294967296,e=(n-t)/4294967296;return du(t^du(e))}function ms(n,t){return nc(n)&t}function _M(n){for(var t=16;t<n;)t*=2;return t}function vM(n,t,e,i){if(e!==void 0&&!(typeof e=="number"&&e>0&&isFinite(e)))throw xs("cellSize must be a positive finite number, not "+String(e));for(var r=n.x,s=n.y,a=n.z,o=n.stride,c=[1/0,1/0,1/0],l=[-1/0,-1/0,-1/0],h=0,u=0;h<t;h++,u+=o){var f=r[u],d=s[u],p=a[u];if(f-f!==0||d-d!==0||p-p!==0)throw xs("point "+h+" has a non-finite "+(f-f!==0?"x":d-d!==0?"y":"z")+" coordinate");f<c[0]&&(c[0]=f),f>l[0]&&(l[0]=f),d<c[1]&&(c[1]=d),d>l[1]&&(l[1]=d),p<c[2]&&(c[2]=p),p>l[2]&&(l[2]=p)}t===0&&(c=[0,0,0],l=[0,0,0]);var _=[l[0]-c[0],l[1]-c[1],l[2]-c[2]];if(e===void 0){var g=1,m=0;_.forEach(function(tt){tt>0&&(g*=tt,m++)}),e=m===0?1:Math.pow(16*g/t,1/m)}var v=Math.floor(_[0]/e)+1,b=Math.floor(_[1]/e)+1,S=Math.floor(_[2]/e)+1;if(v*b*S>gM)throw xs("cellSize too small for this extent: "+v+" × "+b+" × "+S+" cells is more than 2^53");var C=1/e,E=c[0],w=c[1],x=c[2];function M(tt){var nt=Math.floor((r[tt]-E)*C);nt>=v&&(nt=v-1);var V=Math.floor((s[tt]-w)*C);V>=b&&(V=b-1);var k=0;return k=Math.floor((a[tt]-x)*C),k>=S&&(k=S-1),(nt*b+V)*S+k}var L=_M(2*Math.min(v*b*S,Math.ceil(t/16))),P=L-1,F=0,U=new Float64Array(L).fill(bi),y=new Uint32Array(L);function A(){var tt=U,nt=y;L*=2,P=L-1,U=new Float64Array(L).fill(bi),y=new Uint32Array(L);for(var V=0;V<tt.length;V++)if(tt[V]!==bi){for(var k=ms(tt[V],P);U[k]!==bi;)k=k+1&P;U[k]=tt[V],y[k]=nt[V]}}for(h=0,u=0;h<t;h++,u+=o){for(var R=M(u),D=ms(R,P);U[D]!==bi&&U[D]!==R;)D=D+1&P;if(U[D]===bi){if(2*(F+1)>L)for(A(),D=ms(R,P);U[D]!==bi;)D=D+1&P;U[D]=R,F++}y[D]++}for(var O=new Uint32Array(L),G=0,B=0;B<L;B++)O[B]=G,G+=y[B];var X=new Uint32Array(t);for(h=0,u=0;h<t;h++,u+=o){for(var H=M(u),q=ms(H,P);U[q]!==H;)q=q+1&P;X[O[q]++]=h}for(B=0;B<L;B++)O[B]-=y[B];return{count:t,cellSize:e,min:[E,w,x],nx:v,ny:b,nz:S,order:X,keys:U,start:O,length:y,mask:P,coords:n}}function ic(n,t){var e=Ms(n,"buildIndex");return If(n.count),vM(e,n.count,void 0)}function Pf(n,t,e,i){if(t<0||e<0||i<0||t>=n.nx||e>=n.ny||i>=n.nz)return-1;for(var r=(t*n.ny+e)*n.nz+i,s=n.keys,a=n.mask,o=ms(r,a);s[o]!==bi;){if(s[o]===r)return o;o=o+1&a}return-1}function Df(n,t){var e=n!==null&&typeof n=="object"&&n.order instanceof Uint32Array&&n.order.length===n.count&&n.coords;if(e&&n.count>0){var i=(n.count-1)*n.coords.stride+1;e=n.coords.x.length>=i&&n.coords.y.length>=i&&n.coords.z.length>=i}if(!e)throw xs(t+": index is not self-consistent (rebuild it with buildIndex)")}function rc(n,t,e){if(!(t>0))throw new St(Et.INVALID_ARGUMENT,"dedupe tolerance must be > 0");for(var i=!!(e&&e.z&&n.z),r=t*t,s=n.count,a=n.x,o=n.y,c=n.z,l=i?1:0,h=[1/0,1/0,1/0],u=[-1/0,-1/0,-1/0],f=0;f<s;f++){var d=Math.floor(a[f]/t),p=Math.floor(o[f]/t),_=i?Math.floor(c[f]/t):0;d<h[0]&&(h[0]=d),d>u[0]&&(u[0]=d),p<h[1]&&(h[1]=p),p>u[1]&&(u[1]=p),_<h[2]&&(h[2]=_),_>u[2]&&(u[2]=_)}var g=u[1]-h[1]+3,m=u[2]-h[2]+3,v=(u[0]-h[0]+3)*g*m<=9007199254740992;function b(gt,dt,Rt){return v?(gt*g+dt)*m+Rt:(gt*73856093+dt*19349663+Rt*83492791)%9007199254740881}function S(gt){return b(Math.floor(a[gt]/t)-h[0]+1,Math.floor(o[gt]/t)-h[1]+1,i?Math.floor(c[gt]/t)-h[2]+1:1)}for(var C=(u[0]-h[0]+1)*(u[1]-h[1]+1)*(u[2]-h[2]+1),E=16;E<Math.min(s,C);)E*=2;var w=E-1,x=0,M=new Int32Array(E).fill(-1),L=new Uint8Array(E),P=0;function F(gt){var dt=nc(gt),Rt=dt&w;for(P=Math.imul(dt,2654435761)>>>24;M[Rt]>=0&&(L[Rt]!==P||S(M[Rt])!==gt);)Rt=Rt+1&w;return Rt}function U(){var gt=M,dt=L;E*=2,w=E-1,M=new Int32Array(E).fill(-1),L=new Uint8Array(E);for(var Rt=0;Rt<gt.length;Rt++)if(!(gt[Rt]<0)){for(var z=nc(S(gt[Rt]))&w;M[z]>=0;)z=z+1&w;M[z]=gt[Rt],L[z]=dt[Rt]}}for(var y=new Int32Array(s),A=new Uint32Array(s),R=new Uint32Array(s),D=0,O=0;O<s;O++){for(var G=Math.floor(a[O]/t)-h[0]+1,B=Math.floor(o[O]/t)-h[1]+1,X=i?Math.floor(c[O]/t)-h[2]+1:1,H=!1,q=-1;q<=1&&!H;q++)for(var tt=-1;tt<=1&&!H;tt++)for(var nt=-l;nt<=l&&!H;nt++)for(var V=M[F(b(G+q,B+tt,X+nt))];V>=0;){var k=a[V]-a[O],et=o[V]-o[O],ot=i?c[V]-c[O]:0;if(k*k+et*et+ot*ot<=r){H=!0;break}V=y[V]}if(!H){var st=b(G,B,X),j=F(st);M[j]<0&&(2*(x+1)>E&&(U(),j=F(st)),x++,L[j]=P),y[O]=M[j],M[j]=O,R[O]=D,A[D++]=O}}for(O=0,f=0;O<s;O++){if(f<D&&A[f]===O){f++;continue}for(var G=Math.floor(a[O]/t)-h[0]+1,B=Math.floor(o[O]/t)-h[1]+1,X=i?Math.floor(c[O]/t)-h[2]+1:1,ht=-1,ct=1/0,q=-1;q<=1;q++)for(var tt=-1;tt<=1;tt++)for(var nt=-l;nt<=l;nt++)for(var V=M[F(b(G+q,B+tt,X+nt))];V>=0;){var k=a[V]-a[O],et=o[V]-o[O],ot=i?c[V]-c[O]:0,xt=k*k+et*et+ot*ot;xt<=r&&(xt<ct||xt===ct&&V<ht)&&(ct=xt,ht=V),V=y[V]}R[O]=R[ht]}return{keep:A.slice(0,D),map:R}}function Lf(n,t,e){var i=rc(n,t,e).keep,r=i.length,s=Object.create(null);wc(n).forEach(function(o){s[o.name]=o.k});var a={count:r};return Object.keys(n).forEach(function(o){if(o!=="count"){var c=n[o],l=c;Object.prototype.hasOwnProperty.call(s,o)&&(l=ds(c,r*s[o]),fx(c,l,s[o],i)),Object.defineProperty(a,o,{value:l,enumerable:!0,writable:!0,configurable:!0})}}),a}var xM="las-scratch";async function MM(n){var t=n&&n.root||await navigator.storage.getDirectory();return t.getDirectoryHandle(n&&n.dir||xM,{create:!0})}async function yM(n,t){var e=await MM(t),i=await e.getFileHandle(n,{create:!0}),r=await i.createSyncAccessHandle();r.truncate(0);var s=0,a=0;return{write:function(o){r.write(o,{at:s}),s+=o.length,a=Math.max(a,s)},writeAt:function(o,c){r.write(o,{at:c}),a=Math.max(a,c+o.length)},truncate:function(o){r.truncate(o),s=Math.min(s,o),a=Math.min(a,o)},bytesWritten:function(){return a},close:function(){r.flush(),r.close()}}}var SM=64*1024*1024,EM=4;function pu(n){return{size:n.length,read:async function(t,e){if(e>n.length)throw new St(Et.TRUNCATED,"read past end of "+n.length+"-byte buffer",e);return n.subarray(t,e)}}}function bM(n){function t(i,r,s){if(i instanceof ArrayBuffer&&(i=new Uint8Array(i)),!(i instanceof Uint8Array))throw new St(Et.INVALID_ARGUMENT,"source.read("+r+", "+s+") must return a Uint8Array or ArrayBuffer");if(i.length!==s-r)throw new St(Et.TRUNCATED,"source.read("+r+", "+s+") returned "+i.length+" bytes, not "+(s-r),r+Math.min(i.length,s-r));return i}var e={size:n.size,read:async function(i,r){return t(await n.read(i,r),i,r)}};return typeof n.readInto=="function"&&(e.readInto=async function(i,r,s){return t(await n.readInto(i,r,s),i,r)}),typeof n.close=="function"&&(e.close=function(){return n.close()}),e}async function TM(n){if(n instanceof Uint8Array)return pu(n);if(n instanceof ArrayBuffer)return pu(new Uint8Array(n));if(typeof n=="string")return zr.open(n);if(n&&typeof n.slice=="function"&&typeof n.size=="number"&&typeof n.read!="function")return new pf(n);if(n&&typeof n.size=="number"&&typeof n.read=="function")return bM(n);throw new St(Et.INVALID_ARGUMENT,"openLas needs a File / Blob, ArrayBuffer, Uint8Array, file path or { size, read } source")}async function AM(n,t){var e=await TM(n),i=await e.read(0,Math.min(e.size,375)),r=qv(new wn(i)),s=[];if(r.numberOfVlrs>0){var a=Math.min(r.offsetToPointData,e.size),o=await e.read(0,a);s=jv(new wn(o),r.headerSize,r.numberOfVlrs,a)}var c=[];r.numberOfEvlrs>0&&r.evlrStart>0&&r.evlrStart<e.size&&(c=await RM(e,r.evlrStart,r.numberOfEvlrs));var l=new Zn(e,r,s,c,SM);return l._threads=0,l}var wM=65536;async function RM(n,t,e){for(var i=[],r=t,s=0;s<e;s++){if(r+60>n.size)throw new St(Et.BAD_VLR,"EVLR "+(s+1)+" starts past the end of the file",r);var a=Jv(new wn(await n.read(r,r+60)),0,1)[0];if(r+60+a.length>n.size)throw new St(Et.BAD_VLR,"EVLR "+(s+1)+" runs past the end of the file",r);a.start=r+60,a.bytes=a.length<=wM||a.userId==="LASF_Projection"?new Uint8Array(await n.read(a.start,a.start+a.length)):null,i.push(a),r+=60+a.length}return i}function Zn(n,t,e,i,r){this._src=n,this._windowSize=r,this.header=t,this.vlrs=e,this.evlrs=i,this.crs=ax(e.concat(i)),this.classNames={};try{this.classNames=hx(e.concat(i))}catch{this.classNames={}}if(this.compressed=t.compressed,this.laz=null,t.compressed)try{this.laz=Mf(e)}catch{this.laz=null}}Zn.prototype._plan=async function(){if(this._planned)return this._planned;var n=this.header,t=this._src,e=n.recordLength,i;if(n.compressed){var a=Mf(this.vlrs);if(!a)throw new St(Et.BAD_VLR,'this LAZ file has no LASzip VLR (user "laszip encoded", record 22204), so its points cannot be decompressed');var o=aM(a,e),c=Sx(await Ix(t,n,a),e,this._windowSize);i={list:c,bufferSize:c.reduce(function(l,h){return Math.max(l,h.count*e)},0),records:async function(l,h){var u=await t.read(l.start,l.end),f=new DataView(h.buffer,h.byteOffset,h.byteLength);return l.chunks.forEach(function(d){o(u,d.start-l.start,d.end-l.start,d.count,f,(d.firstRecord-l.firstRecord)*e,l.start)}),h.subarray(0,l.count*e)},parallel:async function(l,h){var u=await t.read(l.start,l.end),f=new Uint8Array(l.count*e);return await Promise.all(l.chunks.map(function(d){var p=u.slice(d.start-l.start,d.end-l.start);return h.decode({vlr:a,recordLength:e,packed:p.buffer,chunks:[{s:0,e:p.length,count:d.count}],base:d.start}).then(function(_){f.set(_,(d.firstRecord-l.firstRecord)*e)})})),f},chunkCount:c.reduce(function(l,h){return l+h.chunks.length},0)}}else{var r=n.offsetToPointData+n.pointCount*e;if(r>t.size)throw new St(Et.TRUNCATED,"the header promises "+n.pointCount+" points ending at byte "+r+" but the file is "+t.size+" bytes",t.size);var s=yx(n,this._windowSize);i={list:s,bufferSize:typeof t.readInto=="function"&&s.length?s[0].end-s[0].start:0,records:function(l,h){return h?t.readInto(l.start,l.end,h):t.read(l.start,l.end)}}}return this._planned=i,i};Zn.prototype.chunks=async function*(n){if(n=n||{},n.dedupe)throw new St(Et.INVALID_ARGUMENT,"dedupe needs every point at once: use readPoints, not chunks");yield*this._scan(n,null)};Zn.prototype._scan=async function*(n,t){var e=this.header;n.transform&&_f(n.transform,"transform");var i=await this._plan(),r=Cf(n,e),s=qa(e,n.fields),a=i.list,o=await this._pool(i);try{var c=!o&&i.bufferSize?new Uint8Array(i.bufferSize):null,l=null;if(n.maxPoints>0){var h=r?await this._countPassing(i,o,c,r,n.signal):e.pointCount;h>n.maxPoints&&(l={total:h,target:n.maxPoints,acc:0})}var u=0,f=0;for await(var d of Uf(i,o,c,n.signal)){var p=a[f],_=Mx(d,e,{fields:s,keep:r,thin:l,localOrigin:n.localOrigin,float32:n.float32,transform:n.transform,firstIndex:p.firstRecord,into:t?t(p):null});u+=_.count,f++,typeof n.onProgress=="function"&&n.onProgress(f/a.length,"read "+u+" points"),yield _}if(n.signal&&n.signal.aborted)throw new St(Et.ABORTED,"read aborted")}finally{o&&o.close()}};async function*Uf(n,t,e,i){var r=n.list;function s(l){var h=n.parallel(r[l],t);return h.catch(function(){}),h}for(var a=t&&r.length?s(0):null,o=0;o<r.length;o++){if(i&&i.aborted)throw new St(Et.ABORTED,"read aborted");if(!t){yield await n.records(r[o],e);continue}var c=a;a=o+1<r.length?s(o+1):null,yield await c}}Zn.prototype._pool=async function(n){if(!n.parallel||this._threads===1||!this._threads&&n.chunkCount<EM)return null;var t=Math.min(this._threads||await hM(),n.chunkCount);return t>=2?dM(t):null};Zn.prototype._countPassing=async function(n,t,e,i,r){var s=0;for await(var a of Uf(n,t,e,r))s+=pM(a,this.header.recordLength,i);return s};Zn.prototype.readPoints=async function(n){n=n||{};var t=this.header,e=Object.assign({},n);delete e.dedupe;var i=qa(t,n.fields),r=!!Cf(n,t),s=r?n.maxPoints>0?Math.min(n.maxPoints,t.pointCount):0:n.maxPoints>0?Math.min(n.maxPoints,t.pointCount):t.pointCount,a={},o=0;i.forEach(function(u){a[u]=new(xf(u,n,t))(s||1024)});function c(u){if(!s&&o+u.count>a[i[0]].length){var f=Math.max(o+u.count,a[i[0]].length*2);i.forEach(function(d){var p=new a[d].constructor(f);p.set(a[d].subarray(0,o)),a[d]=p})}return{cols:a,at:o}}for await(var l of this._scan(e,c))o+=l.count;var h={count:o};return i.forEach(function(u){h[u]=a[u].length===o?a[u]:a[u].slice(0,o)}),n.dedupe&&(h=Lf(h,n.dedupe,{z:!!n.dedupeZ})),h.bounds=CM(h,n.localOrigin),h.stats=IM(h),h};function Nf(){return{minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0,minZ:1/0,maxZ:-1/0}}function Ff(n,t){for(var e=0;e<t.count;e++){var i=t.x[e],r=t.y?t.y[e]:0,s=t.z?t.z[e]:0;i<n.minX&&(n.minX=i),i>n.maxX&&(n.maxX=i),r<n.minY&&(n.minY=r),r>n.maxY&&(n.maxY=r),s<n.minZ&&(n.minZ=s),s>n.maxZ&&(n.maxZ=s)}return n}function Of(n,t){if(!(n.minX<=n.maxX))return null;var e=t&&isFinite(t.x)?t.x:0,i=t&&isFinite(t.y)?t.y:0,r=t&&isFinite(t.z)?t.z:0,s=function(a){return Math.round(a*1e6)/1e6};return{minX:s(n.minX+e),maxX:s(n.maxX+e),minY:s(n.minY+i),maxY:s(n.maxY+i),minZ:s(n.minZ+r),maxZ:s(n.maxZ+r)}}function CM(n,t){return!n.x||!n.count?null:Of(Ff(Nf(),n),t)}function IM(n){var t={count:n.count};if(n.classification){for(var e={},i=0;i<n.count;i++){var r=n.classification[i];e[r]=(e[r]||0)+1}t.classCounts=e}return t}Zn.prototype.readPointsToScratch=async function(n){n=n||{};for(var t=qa(this.header,n.fields),e=n.prefix||"las-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8),i={root:n.root,dir:n.dir},r={},s={},a={},o=0;o<t.length;o++)s[t[o]]=e+"-"+t[o],r[t[o]]=await yM(s[t[o]],i);var c=0,l=Nf();try{for await(var h of this.chunks(n))t.forEach(function(u){var f=h[u];a[u]=f.constructor.name,r[u].write(new Uint8Array(f.buffer,f.byteOffset,f.byteLength))}),h.x&&Ff(l,h),c+=h.count}finally{t.forEach(function(u){r[u].close()})}return{count:c,fields:s,types:a,bounds:Of(l,n.localOrigin)}};Zn.prototype.readEvlrBytes=async function(n){var t=this.evlrs[n];if(!t)throw new St(Et.INVALID_ARGUMENT,"no EVLR "+n+" (the file has "+this.evlrs.length+")");return t.bytes?t.bytes:new Uint8Array(await this._src.read(t.start,t.start+t.length))};Zn.prototype.close=async function(){this._src&&typeof this._src.close=="function"&&await this._src.close()};var sc=1e-6;function Bf(n){return new St(Et.INVALID_ARGUMENT,n)}function Ra(n){return typeof n=="number"&&isFinite(n)}function zf(n,t,e){var i=Array.isArray(n)&&(n.length===3||t)&&Ra(n[0])&&Ra(n[1])&&Ra(n[2]);if(!i)throw Bf(e+" must be [x, y, z] of finite numbers");return[n[0],n[1],n[2]]}function Lc(n,t,e){if(!(e&&n===void 0)&&!(Ra(n)&&n>0))throw Bf(t+" must be a positive finite number, not "+String(n))}function PM(n){return[n.nx,n.ny,n.nz]}function Ho(n,t,e,i){var r=PM(n)[t],s=1/n.cellSize,a=n.min[t],o=Math.floor((e-a)*s-sc),c=Math.floor((i-a)*s+sc);return[Math.max(0,o),Math.min(r-1,c)]}function ac(n,t,e,i,r,s){for(var a=n.cellSize,o=a*sc,c=n.min,l=[t,e,i],h=0,u=0;u<3;u++){var f=c[u]+l[u]*a-o,d=c[u]+(l[u]+1)*a+o,p=f-r[u]>0?f-r[u]:r[u]-d>0?r[u]-d:0;h+=p*p}return h}function Gf(n,t){var e=t%n.nz,i=(t-e)/n.nz,r=i%n.ny;return[(i-r)/n.ny,r,e]}function DM(n,t,e,i){if(!(t[0]>e[0]||t[1]>e[1]||t[2]>e[2])){var r=(e[0]-t[0]+1)*(e[1]-t[1]+1)*(e[2]-t[2]+1),s=n.keys;if(r>s.length){for(var a=0;a<s.length;a++)if(!(s[a]<0)){var o=Gf(n,s[a]);o[0]>=t[0]&&o[0]<=e[0]&&o[1]>=t[1]&&o[1]<=e[1]&&o[2]>=t[2]&&o[2]<=e[2]&&i(a,o[0],o[1],o[2])}return}for(var c=t[0];c<=e[0];c++)for(var l=t[1];l<=e[1];l++)for(var h=t[2];h<=e[2];h++){var u=Pf(n,c,l,h);u>=0&&i(u,c,l,h)}}}function Uc(n,t,e,i){Df(n,"pointsInRadius");var r=!1,s=zf(t,r,"point");if(Lc(e,"radius"),n.count===0)return new Uint32Array(0);var a=Ho(n,0,s[0]-e,s[0]+e),o=Ho(n,1,s[1]-e,s[1]+e),c=Ho(n,2,s[2]-e,s[2]+e),l=e*e,h=n.coords,u=h.x,f=h.y,d=h.z,p=h.stride,_=n.order,g=[];return DM(n,[a[0],o[0],c[0]],[a[1],o[1],c[1]],function(m,v,b,S){if(!(ac(n,v,b,S,s)>l))for(var C=n.start[m],E=C+n.length[m];C<E;C++){var w=_[C],x=w*p,M=u[x]-s[0],L=f[x]-s[1],P=d[x]-s[2];M*M+L*L+P*P<=l&&g.push(w)}}),Uint32Array.from(g).sort()}var mu=1e-6;function Nc(n){return new St(Et.INVALID_ARGUMENT,n)}function Fc(n,t){if(!(Number.isInteger(n)&&n>=1))throw Nc(t+" must be a whole number >= 1, not "+String(n))}function Vf(n){if(n===void 0)throw Nc("maxDistance is required: a positive distance in the columns' units (e.g. 0.3 m for a handheld scan)");Lc(n,"maxDistance")}function kf(n,t){if(n===void 0)return function(){};if(typeof n!="function")throw Nc("onProgress must be a function");var e=Math.max(1,Math.floor(t/100)),i=0;return function(r){(r===t||r-i>=e)&&(i=r,n(r,t))}}function LM(n,t,e,i,r,s,a,o,c,l){var h=0;if(n.count===0)return 0;var u=[t,e,i],f=[n.nx,n.ny,n.nz],d=n.cellSize,p=1/d,_=n.min,g=3,m=[0,0,0],v;for(v=0;v<g;v++)m[v]=Math.min(f[v]-1,Math.max(0,Math.floor((u[v]-_[v])*p)));var b=n.coords,S=b.x,C=b.y,E=b.z,w=b.stride,x=n.order,M=o,L=c,P=0,F=n.keys.length,U=[0,0,0];for(v=0;v<g;v++){var y=_[v],A=_[v]+f[v]*d;U[v]=Math.max(0,(u[v]<y?y-u[v]:u[v]>A?u[v]-A:0)-d*mu)}function R(j,ht){return L[j]>L[ht]||L[j]===L[ht]&&M[j]>M[ht]}function D(j,ht){var ct=M[j];M[j]=M[ht],M[ht]=ct;var xt=L[j];L[j]=L[ht],L[ht]=xt}function O(j,ht){for(;;){var ct=2*j+1,xt=ct+1,gt=j;if(ct<ht&&R(ct,gt)&&(gt=ct),xt<ht&&R(xt,gt)&&(gt=xt),gt===j)return;D(j,gt),j=gt}}function G(j,ht){if(h<r){M[h]=j,L[h]=ht;for(var ct=h++;ct>0;){var xt=Math.floor((ct-1)/2);if(!R(ct,xt))break;D(ct,xt),ct=xt}}else(ht<L[0]||ht===L[0]&&j<M[0])&&(M[0]=j,L[0]=ht,O(0,h))}function B(){return h===r?Math.min(L[0],s):s}function X(j){for(var ht=n.start[j],ct=ht+n.length[j];ht<ct;ht++){var xt=x[ht];if(xt!==a){var gt=xt*w,dt=S[gt]-u[0],Rt=C[gt]-u[1],z=E[gt]-u[2],te=dt*dt+Rt*Rt+z*z;te<=s&&G(xt,te)}}}function H(j,ht,ct){P++;var xt=Pf(n,j,ht,ct);xt<0||ac(n,j,ht,ct,u)>B()||X(xt)}function q(j){var ht=Math.max(0,m[0]-j),ct=Math.min(f[0]-1,m[0]+j),xt=Math.max(0,m[1]-j),gt=Math.min(f[1]-1,m[1]+j),dt=Math.max(0,m[2]-j),Rt=Math.min(f[2]-1,m[2]+j);function z(ne,Dt){for(var N=dt;N<=Rt;N++)H(ne,Dt,N)}for(var te=ht;te<=ct;te++){if(te===m[0]-j||te===m[0]+j){for(var Yt=xt;Yt<=gt;Yt++)z(te,Yt);continue}for(m[1]-j>=0&&z(te,m[1]-j),m[1]+j<f[1]&&z(te,m[1]+j),Yt=Math.max(xt,m[1]-j+1);Yt<=Math.min(gt,m[1]+j-1);Yt++)m[2]-j>=0&&H(te,Yt,m[2]-j),m[2]+j<f[2]&&H(te,Yt,m[2]+j)}}function tt(j){return j=Math.max(0,j-d*mu),j*j}function nt(){h=0;for(var j=n.keys,ht=[],ct=0;ct<j.length;ct++)if(!(j[ct]<0)){var xt=Gf(n,j[ct]),gt=ac(n,xt[0],xt[1],xt[2],u);gt<=s&&ht.push([gt,ct])}ht.sort(function(Rt,z){return Rt[0]-z[0]});for(var dt=0;dt<ht.length&&!(ht[dt][0]>B());dt++)X(ht[dt][1])}for(var V=0;;V++){if(q(V),P>F){nt();break}var k=1/0;for(v=0;v<g;v++){for(var et=0,ot=0;ot<g;ot++)ot!==v&&(et+=U[ot]*U[ot]);m[v]-V>0&&(k=Math.min(k,tt(u[v]-(_[v]+(m[v]-V)*d))+et)),m[v]+V<f[v]-1&&(k=Math.min(k,tt(_[v]+(m[v]+V+1)*d-u[v])+et))}if(k===1/0||h===r&&L[0]<k||k>s)break}for(var st=h-1;st>0;st--)D(0,st),O(0,st);return h}function oc(n,t,e,i){Df(n,"nearestPoints");var r=!1,s=zf(t,r,"point");Fc(e,"k");var a=void 0;Lc(a,"maxDistance",!0);for(var o=Math.min(e,n.count),c=new Uint32Array(o),l=new Float64Array(o),h=o===0?0:LM(n,s[0],s[1],s[2],o,1/0,-1,c,l),u=0;u<h;u++)l[u]=Math.sqrt(l[u]);return{points:h===o?c:c.slice(0,h),d:h===o?l:l.slice(0,h)}}var Ca=16,Hf=3;function UM(n){return new St(Et.INVALID_ARGUMENT,n)}function Oc(n,t){var e=Ms(n,t),i=n.count;If(i);var r=[e.x,e.y,e.z],s=e.stride,a,o;for(a=0,o=0;a<i;a++,o+=s){var c=r[0][o],l=r[1][o],h=r[2][o];if(c-c!==0||l-l!==0||h-h!==0)throw UM("point "+a+" has a non-finite "+(c-c!==0?"x":l-l!==0?"y":"z")+" coordinate")}var u=new Uint32Array(i);for(a=0;a<i;a++)u[a]=a;for(var f=0;Math.ceil(i/Math.pow(2,f))>Ca;)f++;var d=Math.max(1,Math.pow(2,f)-1),p=new Uint8Array(d),_=new Float64Array(d);function g(y,A,R,D){for(var O=y,G=A-1;G>O;){var B=Math.floor((O+G)/2),X=D[u[O]*s],H=D[u[B]*s],q=D[u[G]*s],tt=X<H?H<q?H:X<q?q:X:X<q?X:H<q?q:H,nt=O,V=G;do{for(;D[u[nt]*s]<tt;)nt++;for(;D[u[V]*s]>tt;)V--;if(nt<=V){var k=u[nt];u[nt]=u[V],u[V]=k,nt++,V--}}while(nt<=V);if(R<=V)G=V;else if(R>=nt)O=nt;else return}}for(var m=[0,0,i];m.length;){var v=m.pop(),b=m.pop(),S=m.pop();if(!(v-b<=Ca)){for(var C=0,E=-1,w=0;w<3;w++){for(var x=r[w],M=1/0,L=-1/0,P=b;P<v;P++){var F=x[u[P]*s];F<M&&(M=F),F>L&&(L=F)}L-M>E&&(E=L-M,C=w)}if(E===0){u.subarray(b,v).sort(),p[S]=Hf;continue}p[S]=C;var U=Math.floor((b+v)/2);g(b,v,U,r[C]),_[S]=r[C][u[U]*s],m.push(2*S+1,b,U,2*S+2,U,v)}}return{count:i,perm:u,axis:p,split:_,leafSize:Ca,coords:e}}var ys,Ga,Va,ka,lc,Nn=[0,0,0],Ja,ws,cc,gn,Fe,On;function hc(n,t){return Fe[n]>Fe[t]||Fe[n]===Fe[t]&&gn[n]>gn[t]}function Bc(n,t){var e=gn[n];gn[n]=gn[t],gn[t]=e;var i=Fe[n];Fe[n]=Fe[t],Fe[t]=i}function Wf(n,t){for(;;){var e=2*n+1,i=e+1,r=n;if(e<t&&hc(e,r)&&(r=e),i<t&&hc(i,r)&&(r=i),r===n)return;Bc(n,r),n=r}}function gu(n,t){if(On<Ja){gn[On]=n,Fe[On]=t;for(var e=On++;e>0;){var i=Math.floor((e-1)/2);if(!hc(e,i))break;Bc(e,i),e=i}}else(t<Fe[0]||t===Fe[0]&&n<gn[0])&&(gn[0]=n,Fe[0]=t,Wf(0,On))}function _u(){return On===Ja&&Fe[0]<ws?Fe[0]:ws}function gs(n,t,e){var i=ys.perm;if(e-t<=Ca){for(var r=t;r<e;r++){var s=i[r];if(s!==cc){var a=s*lc,o=Ga[a]-Nn[0],c=Va[a]-Nn[1],l=ka[a]-Nn[2],h=o*o+c*c+l*l;h<=ws&&gu(s,h)}}return}var u=ys.axis[n];if(u===Hf){var f=i[t]*lc,d=Ga[f]-Nn[0],p=Va[f]-Nn[1],_=ka[f]-Nn[2],g=d*d+p*p+_*_;if(g>ws)return;for(var m=t;m<e;m++){var v=i[m];if(v!==cc){if(On===Ja&&(g>Fe[0]||g===Fe[0]&&v>gn[0]))return;gu(v,g)}}return}var b=Math.floor((t+e)/2),S=Nn[u]-ys.split[n];S<0?(gs(2*n+1,t,b),S*S<=_u()&&gs(2*n+2,b,e)):(gs(2*n+2,b,e),S*S<=_u()&&gs(2*n+1,t,b))}function Xf(n,t,e,i,r,s,a,o,c){if(n.count===0)return 0;ys=n,Ga=n.coords.x,Va=n.coords.y,ka=n.coords.z,lc=n.coords.stride,Nn[0]=t,Nn[1]=e,Nn[2]=i,Ja=r,ws=s,cc=a,gn=o,Fe=c,On=0,gs(0,0,n.count);for(var l=On-1;l>0;l--)Bc(0,l),Wf(0,l);var h=On;return ys=Ga=Va=ka=gn=Fe=null,h}var NM=1e5;function FM(n){(n[2]<0||n[2]===0&&(n[0]<0||n[0]===0&&n[1]<0))&&(n[0]=-n[0],n[1]=-n[1],n[2]=-n[2]),n[0]+=0,n[1]+=0,n[2]+=0}function OM(n,t){if(!(n[0]+n[3]+n[5]>0))return t[0]=0,t[1]=0,t[2]=0,t[3]=NaN,!1;for(var e=[[n[0],n[1],n[2]],[n[1],n[3],n[4]],[n[2],n[4],n[5]]],i=[[1,0,0],[0,1,0],[0,0,1]],r=[[0,1],[0,2],[1,2]],s=0;s<50;s++){var a=e[0][1]*e[0][1]+e[0][2]*e[0][2]+e[1][2]*e[1][2],o=e[0][0]*e[0][0]+e[1][1]*e[1][1]+e[2][2]*e[2][2];if(a<=1e-30*o)break;for(var c=0;c<3;c++){var l=r[c][0],h=r[c][1],u=e[l][h];if(u!==0){for(var f=(e[h][h]-e[l][l])/(2*u),d=Math.abs(f)>1e150?1/(2*f):(f>=0?1:-1)/(Math.abs(f)+Math.sqrt(f*f+1)),p=1/Math.sqrt(d*d+1),_=d*p,g=0;g<3;g++){var m=e[g][l],v=e[g][h];e[g][l]=p*m-_*v,e[g][h]=_*m+p*v}for(g=0;g<3;g++){var b=e[l][g],S=e[h][g];e[l][g]=p*b-_*S,e[h][g]=_*b+p*S}for(e[l][h]=0,e[h][l]=0,g=0;g<3;g++){var C=i[g][l],E=i[g][h];i[g][l]=p*C-_*E,i[g][h]=_*C+p*E}}}}var w=0;e[1][1]<e[w][w]&&(w=1),e[2][2]<e[w][w]&&(w=2),t[0]=i[0][w],t[1]=i[1][w],t[2]=i[2][w];var x=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return t[0]/=x,t[1]/=x,t[2]/=x,FM(t),t[3]=e[w][w],t.length>4&&(t[4]=e[(w+1)%3][(w+1)%3]<e[(w+2)%3][(w+2)%3]?e[(w+1)%3][(w+1)%3]:e[(w+2)%3][(w+2)%3]),!0}var Pn=new Float64Array(6),yr=new Float64Array(5);function Ia(n,t,e,i,r,s,a,o,c){for(var l=r*i,h=n[l],u=t[l],f=e[l],d=1,p=0,_=0,g=0,m=0,v=0,b=0,S=0,C=0,E=0,w=0;w<a;w++){var x=s[w]*i,M=o?o[w]:1,L=n[x]-h,P=t[x]-u,F=e[x]-f;d+=M,p+=M*L,_+=M*P,g+=M*F,m+=M*L*L,v+=M*L*P,b+=M*L*F,S+=M*P*P,C+=M*P*F,E+=M*F*F}var U=p/d,y=_/d,A=g/d;return Pn[0]=m-p*U,Pn[1]=v-p*y,Pn[2]=b-p*A,Pn[3]=S-_*y,Pn[4]=C-_*A,Pn[5]=E-g*A,c[4]=U,c[5]=y,c[6]=A,!OM(Pn,yr)||yr[4]<=1e-12*(Pn[0]+Pn[3]+Pn[5])?(c[0]=0,c[1]=0,c[2]=0,c[3]=NaN,!1):(c[0]=yr[0],c[1]=yr[1],c[2]=yr[2],c[3]=Math.sqrt(Math.max(0,yr[3])/d),!0)}function Yf(n,t){n=n||{};var e=n.k===void 0?16:n.k;return Fc(e,"k"),Vf(n.maxDistance),{k:e,maxD2:n.maxDistance*n.maxDistance,maxDistance:n.maxDistance,onProgress:n.onProgress,fn:t}}function Zf(n,t,e,i,r,s){var a=n.coords,o=a.x,c=a.y,l=a.z,h=a.stride,u=t*h,f=Xf(n,o[u],c[u],l[u],e.k,e.maxD2,t,i,r);return f<3?(s[0]=0,s[1]=0,s[2]=0,s[3]=NaN,!1):Ia(o,c,l,h,t,i,f,null,s)}function BM(n,t){for(var e=Yf(t,"pointNormals"),i=kf(e.onProgress,n.count),r=Oc(n,"pointNormals"),s=r.count,a=new Float32Array(3*s),o=new Float32Array(s),c=new Uint32Array(e.k),l=new Float64Array(e.k),h=new Float64Array(7),u=0;u<s;u++)Zf(r,u,e,c,l,h),a[3*u]=h[0],a[3*u+1]=h[1],a[3*u+2]=h[2],o[u]=h[3],i(u+1);return{normal:a,residual:o}}function zM(n,t){for(var e=Yf(t,"estimateNoise"),i=Oc(n,"estimateNoise"),r=gx(i.count,NM),s=new Float64Array(r.length),a=0,o=new Uint32Array(e.k),c=new Float64Array(e.k),l=new Float64Array(7),h=0;h<r.length;h++)Zf(i,r[h],e,o,c,l)&&(s[a++]=Math.fround(l[3]));if(a===0)return NaN;var u=s.subarray(0,a).sort();return u[Math.floor((a-1)/2)]}var GM=5;function Wo(n){return new St(Et.INVALID_ARGUMENT,n)}function VM(n,t){t=t||{};var e=t.method===void 0?"bilateral":t.method;if(e!=="bilateral"&&e!=="mls")throw Wo('method must be "bilateral" or "mls", not '+String(e));var i=t.k===void 0?16:t.k;Fc(i,"k"),Vf(t.maxDistance);var r=t.iterations===void 0?1:t.iterations;if(!(Number.isInteger(r)&&r>=1))throw Wo("iterations must be a whole number >= 1, not "+String(r));if(t.sigma!==void 0&&!(typeof t.sigma=="number"&&isFinite(t.sigma)&&t.sigma>0))throw Wo("sigma must be a positive finite number, not "+String(t.sigma));var s=t.maxDistance,a=s*s,o=Ms(n,"denoisePoints"),c=n.count,l=o.stride===3,h=kf(t.onProgress,c*r);t.inPlace&&!l&&dx(n,[{name:"x"},{name:"y"},{name:"z"}]);var u=t.sigma!==void 0?t.sigma:zM(n,{k:i,maxDistance:s}),f=u>0;function d(){return l?{count:c,positions:ds(n.positions,3*c)}:{count:c,x:ds(n.x,c),y:ds(n.y,c),z:ds(n.z,c)}}for(var p=l?{count:c,positions:n.positions}:{count:c,x:n.x,y:n.y,z:n.z},_=d(),g=t.normals?new Float32Array(3*c):null,m=new Uint32Array(i),v=new Float64Array(i),b=new Float64Array(i),S=new Float64Array(7),C=1/(2*(2*u)*(2*u)),E=0;E<r;E++){for(var w=E===r-1,x=f||w&&g?Oc(p,"denoisePoints"):null,M=x?x.coords:Ms(p,"denoisePoints"),L=M.x,P=M.y,F=M.z,U=M.stride,y=Ms(_,"denoisePoints"),A=y.x,R=y.y,D=y.z,O=0,G=0;O<c;O++,G+=U){var B=L[G],X=P[G],H=F[G],q=0,tt=0,nt=0,V=0,k=x?Xf(x,B,X,H,i,a,O,m,v):0;if(k>=3&&Ia(L,P,F,U,O,m,k,null,S)&&(q=S[0],tt=S[1],nt=S[2],f&&k>=GM&&v[k-1]>0)){var et=.5*Math.sqrt(v[k-1]),ot=1/(2*et*et),st,j,ht;if(e==="bilateral"){for(st=0;st<k;st++)j=m[st]*U,ht=q*(L[j]-B)+tt*(P[j]-X)+nt*(F[j]-H),b[st]=Math.exp(-v[st]*ot-ht*ht*C);Ia(L,P,F,U,O,m,k,b,S)&&(q=S[0],tt=S[1],nt=S[2]);var ct=0,xt=0;for(st=0;st<k;st++){j=m[st]*U,ht=q*(L[j]-B)+tt*(P[j]-X)+nt*(F[j]-H);var gt=Math.exp(-v[st]*ot-ht*ht*C);ct+=gt*ht,xt+=gt}xt>0&&(V=ct/xt)}else{for(st=0;st<k;st++)b[st]=Math.exp(-v[st]*ot);Ia(L,P,F,U,O,m,k,b,S)&&(q=S[0],tt=S[1],nt=S[2],V=q*S[4]+tt*S[5]+nt*S[6])}}var dt=O*y.stride;V!==0?(A[dt]=B+q*V,R[dt]=X+tt*V,D[dt]=H+nt*V):(A[dt]=B,R[dt]=X,D[dt]=H),g&&w&&(g[3*O]=q,g[3*O+1]=tt,g[3*O+2]=nt),h(E*c+O+1)}if(!w){var Rt=p;p=_,_=E===0?d():Rt}}var z=_;t.inPlace&&(l?n.positions.set(_.positions):(n.x.set(_.x),n.y.set(_.y),n.z.set(_.z)),z=n);var te=l?["positions"]:["x","y","z"],Yt={count:c};return wc(n).forEach(function(ne){var Dt=te.indexOf(ne.name)>=0?z[ne.name]:n[ne.name];Object.defineProperty(Yt,ne.name,{value:Dt,enumerable:!0,writable:!0,configurable:!0})}),g&&Object.defineProperty(Yt,"normal",{value:g,enumerable:!0,writable:!0,configurable:!0}),Yt}var Ge=Object.freeze({INVALID_INPUT:"INVALID_INPUT",NEEDS_ORIGIN:"NEEDS_ORIGIN",TOO_FEW_POINTS:"TOO_FEW_POINTS",CROSSING_BREAKLINES:"CROSSING_BREAKLINES"});class Qi extends Error{constructor(t,e){super(e),this.name="TrimeshBuildError",this.code=t}}var kM=1e4,HM=8,Kf=1e-9,WM=.001;function En(n,t){return new Qi(n,t)}function XM(n){if(n===null||typeof n!="object")throw En(Ge.INVALID_INPUT,"cols must be a las-laz-js columns object { count, positions } or { count, x, y, z }");var t=n.count;if(typeof t!="number"||!Number.isInteger(t)||t<0)throw En(Ge.INVALID_INPUT,"cols.count must be a whole number, not "+String(t));if(n.positions&&n.positions.length===3*t){var e=n.positions;return{isFloat32:e instanceof Float32Array,get:function(r,s){return e[3*r+s]}}}if(n.x&&n.y&&n.z&&n.x.length===t&&n.y.length===t&&n.z.length===t){var i=[n.x,n.y,n.z];return{isFloat32:n.x instanceof Float32Array,get:function(r,s){return i[s][r]}}}throw En(Ge.INVALID_INPUT,"cols needs a positions column of length 3 x count, or x, y, z columns of length count")}function YM(n){if(n.length===0)return NaN;var t=Float64Array.from(n).sort();return t[t.length-1>>1]}function vu(n,t,e){for(var i=Math.max(1,Math.floor(e/kM)),r=[],s=0;s<e;s+=i)for(var a=oc(n,[t[3*s],t[3*s+1],t[3*s+2]],HM),o=1;o<a.d.length;o++)if(a.d[o]>Kf){r.push(a.d[o]);break}return YM(r)}function xu(n,t){for(var e=new Float64Array(t),i=new Float64Array(t),r=new Float64Array(t),s=0;s<t;s++)e[s]=n[3*s],i[s]=n[3*s+1],r[s]=n[3*s+2];return{count:t,x:e,y:i,z:r}}function Mu(n,t,e){if(e.length===n.length/3)return{coords:n,normals:t,count:e.length};for(var i=new Float64Array(3*e.length),r=t?new Float32Array(3*e.length):null,s=0;s<e.length;s++)for(var a=e[s],o=0;o<3;o++)i[3*s+o]=n[3*a+o],r&&(r[3*s+o]=t[3*a+o]);return{coords:i,normals:r,count:e.length}}function ZM(n,t){if(!n||!isFinite(n.x)||!isFinite(n.y)||!isFinite(n.z))throw En(Ge.INVALID_INPUT,t+" must be { x, y, z } with finite numbers");return{x:n.x,y:n.y,z:n.z}}function Xo(n,t){var e=t||{},i=XM(n),r=n.count;if(r<3)throw En(Ge.TOO_FEW_POINTS,"need at least 3 points, got "+r);if(i.isFloat32&&!e.origin)throw En(Ge.NEEDS_ORIGIN,"a Float32 cloud cannot hold mine coordinates; pass options.origin (the shift it was written with)");if(e.tolerance!==void 0&&!(e.tolerance>0&&isFinite(e.tolerance)))throw En(Ge.INVALID_INPUT,"tolerance must be a finite distance > 0");if(e.normals&&e.normals.length!==3*r)throw En(Ge.INVALID_INPUT,"options.normals must have 3 x count values");for(var s=0;s<r;s++)for(var a=0;a<3;a++)if(!isFinite(i.get(s,a)))throw En(Ge.INVALID_INPUT,"point "+s+" has a non-finite coordinate");var o;if(e.origin)o=ZM(e.origin,"origin");else{for(var c=i.get(0,0),l=i.get(0,1),h=i.get(0,2),u=0,f=0,d=0,p=0;p<r;p++)u+=i.get(p,0)-c,f+=i.get(p,1)-l,d+=i.get(p,2)-h;o={x:c+u/r,y:l+f/r,z:h+d/r}}for(var _=i.isFloat32?[0,0,0]:[o.x,o.y,o.z],g=new Float64Array(3*r),m=0;m<r;m++)for(var v=0;v<3;v++)g[3*m+v]=i.get(m,v)-_[v];var b=e.normals,S=r,C=Mu(g,b,rc(xu(g,r),Kf,{z:!0}).keep);g=C.coords,b=C.normals,r=C.count;var E=vu(ic({count:r,positions:g}),g,r);if(r<3||!(E>0))throw En(Ge.TOO_FEW_POINTS,"only "+r+" distinct points");var w=e.tolerance!==void 0?e.tolerance:Math.max(WM,.25*E),x=Mu(g,b,rc(xu(g,r),w,{z:!0}).keep),M=x.count!==r;g=x.coords,b=x.normals,r=x.count;var L=S-r;if(r<3)throw En(Ge.TOO_FEW_POINTS,"only "+r+" points are further apart than the weld tolerance");for(var P=[1/0,1/0,1/0],F=[-1/0,-1/0,-1/0],U=0;U<r;U++)for(var y=0;y<3;y++){var A=g[3*U+y];A<P[y]&&(P[y]=A),A>F[y]&&(F[y]=A)}var R={count:r,positions:g},D=ic(R);if(M&&(E=vu(D,g,r)),!b){var O=e.k||20,G=e.maxRadiusMultiplier||3;b=BM(R,{k:O,maxDistance:G*E*4}).normal}return{coords:g,count:r,origin:o,bounds:{min:P,max:F},index:D,normals:b,medianSpacing:E,tolerance:w,mergedAtTolerance:L}}const Ze=11102230246251565e-32,wt=134217729,qf=(3+8*Ze)*Ze;function Ce(n,t,e,i,r){let s,a,o,c,l=t[0],h=i[0],u=0,f=0;h>l==h>-l?(s=l,l=t[++u]):(s=h,h=i[++f]);let d=0;if(u<n&&f<e)for(h>l==h>-l?(a=l+s,o=s-(a-l),l=t[++u]):(a=h+s,o=s-(a-h),h=i[++f]),s=a,o!==0&&(r[d++]=o);u<n&&f<e;)h>l==h>-l?(a=s+l,c=a-s,o=s-(a-c)+(l-c),l=t[++u]):(a=s+h,c=a-s,o=s-(a-c)+(h-c),h=i[++f]),s=a,o!==0&&(r[d++]=o);for(;u<n;)a=s+l,c=a-s,o=s-(a-c)+(l-c),l=t[++u],s=a,o!==0&&(r[d++]=o);for(;f<e;)a=s+h,c=a-s,o=s-(a-c)+(h-c),h=i[++f],s=a,o!==0&&(r[d++]=o);return(s!==0||d===0)&&(r[d++]=s),d}function fn(n,t,e,i,r,s,a,o){return Ce(Ce(n,t,e,i,a),a,r,s,o)}function ut(n,t,e,i){let r,s,a,o,c,l,h,u,f,d,p;h=wt*e,d=h-(h-e),p=e-d;let _=t[0];r=_*e,h=wt*_,u=h-(h-_),f=_-u,a=f*p-(r-u*d-f*d-u*p);let g=0;a!==0&&(i[g++]=a);for(let m=1;m<n;m++)_=t[m],o=_*e,h=wt*_,u=h-(h-_),f=_-u,c=f*p-(o-u*d-f*d-u*p),s=r+c,l=s-r,a=r-(s-l)+(c-l),a!==0&&(i[g++]=a),r=o+s,a=s-(r-o),a!==0&&(i[g++]=a);return(r!==0||g===0)&&(i[g++]=r),g}function jf(n,t){let e=t[0];for(let i=1;i<n;i++)e+=t[i];return e}function ft(n){return new Float64Array(n)}const KM=(3+16*Ze)*Ze,qM=(2+12*Ze)*Ze,jM=(9+64*Ze)*Ze*Ze,Sr=ft(4),yu=ft(8),Su=ft(12),Eu=ft(16),qe=ft(4);function JM(n,t,e,i,r,s,a){let o,c,l,h,u,f,d,p,_,g,m,v,b,S,C,E,w,x;const M=n-r,L=e-r,P=t-s,F=i-s;S=M*F,f=wt*M,d=f-(f-M),p=M-d,f=wt*F,_=f-(f-F),g=F-_,C=p*g-(S-d*_-p*_-d*g),E=P*L,f=wt*P,d=f-(f-P),p=P-d,f=wt*L,_=f-(f-L),g=L-_,w=p*g-(E-d*_-p*_-d*g),m=C-w,u=C-m,Sr[0]=C-(m+u)+(u-w),v=S+m,u=v-S,b=S-(v-u)+(m-u),m=b-E,u=b-m,Sr[1]=b-(m+u)+(u-E),x=v+m,u=x-v,Sr[2]=v-(x-u)+(m-u),Sr[3]=x;let U=jf(4,Sr),y=qM*a;if(U>=y||-U>=y||(u=n-M,o=n-(M+u)+(u-r),u=e-L,l=e-(L+u)+(u-r),u=t-P,c=t-(P+u)+(u-s),u=i-F,h=i-(F+u)+(u-s),o===0&&c===0&&l===0&&h===0)||(y=jM*a+qf*Math.abs(U),U+=M*h+F*o-(P*l+L*c),U>=y||-U>=y))return U;S=o*F,f=wt*o,d=f-(f-o),p=o-d,f=wt*F,_=f-(f-F),g=F-_,C=p*g-(S-d*_-p*_-d*g),E=c*L,f=wt*c,d=f-(f-c),p=c-d,f=wt*L,_=f-(f-L),g=L-_,w=p*g-(E-d*_-p*_-d*g),m=C-w,u=C-m,qe[0]=C-(m+u)+(u-w),v=S+m,u=v-S,b=S-(v-u)+(m-u),m=b-E,u=b-m,qe[1]=b-(m+u)+(u-E),x=v+m,u=x-v,qe[2]=v-(x-u)+(m-u),qe[3]=x;const A=Ce(4,Sr,4,qe,yu);S=M*h,f=wt*M,d=f-(f-M),p=M-d,f=wt*h,_=f-(f-h),g=h-_,C=p*g-(S-d*_-p*_-d*g),E=P*l,f=wt*P,d=f-(f-P),p=P-d,f=wt*l,_=f-(f-l),g=l-_,w=p*g-(E-d*_-p*_-d*g),m=C-w,u=C-m,qe[0]=C-(m+u)+(u-w),v=S+m,u=v-S,b=S-(v-u)+(m-u),m=b-E,u=b-m,qe[1]=b-(m+u)+(u-E),x=v+m,u=x-v,qe[2]=v-(x-u)+(m-u),qe[3]=x;const R=Ce(A,yu,4,qe,Su);S=o*h,f=wt*o,d=f-(f-o),p=o-d,f=wt*h,_=f-(f-h),g=h-_,C=p*g-(S-d*_-p*_-d*g),E=c*l,f=wt*c,d=f-(f-c),p=c-d,f=wt*l,_=f-(f-l),g=l-_,w=p*g-(E-d*_-p*_-d*g),m=C-w,u=C-m,qe[0]=C-(m+u)+(u-w),v=S+m,u=v-S,b=S-(v-u)+(m-u),m=b-E,u=b-m,qe[1]=b-(m+u)+(u-E),x=v+m,u=x-v,qe[2]=v-(x-u)+(m-u),qe[3]=x;const D=Ce(R,Su,4,qe,Eu);return Eu[D-1]}function si(n,t,e,i,r,s){const a=(t-s)*(e-r),o=(n-r)*(i-s),c=a-o,l=Math.abs(a+o);return Math.abs(c)>=KM*l?c:-JM(n,t,e,i,r,s,l)}ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(8);ft(8);ft(8);ft(4);ft(8);ft(8);ft(16);ft(12);ft(192);ft(192);const $M=(10+96*Ze)*Ze,QM=(4+48*Ze)*Ze,ty=(44+576*Ze)*Ze*Ze,Mi=ft(4),yi=ft(4),Si=ft(4),Dn=ft(4),Ln=ft(4),Un=ft(4),je=ft(4),Je=ft(4),Yo=ft(8),Zo=ft(8),Ko=ft(8),qo=ft(8),jo=ft(8),Jo=ft(8),ma=ft(8),ga=ft(8),_a=ft(8),zi=ft(4),Gi=ft(4),Vi=ft(4),Pt=ft(8),Ht=ft(16),he=ft(16),ue=ft(16),ie=ft(32),Ei=ft(32),Se=ft(48),sn=ft(64);let Lr=ft(1152),$o=ft(1152);function Ee(n,t,e){n=Ce(n,Lr,t,e,$o);const i=Lr;return Lr=$o,$o=i,n}function ey(n,t,e,i,r,s,a,o,c){let l,h,u,f,d,p,_,g,m,v,b,S,C,E,w,x,M,L,P,F,U,y,A,R,D,O,G,B,X,H,q,tt,nt,V,k;const et=n-a,ot=e-a,st=r-a,j=t-o,ht=i-o,ct=s-o;q=ot*ct,A=wt*ot,R=A-(A-ot),D=ot-R,A=wt*ct,O=A-(A-ct),G=ct-O,tt=D*G-(q-R*O-D*O-R*G),nt=st*ht,A=wt*st,R=A-(A-st),D=st-R,A=wt*ht,O=A-(A-ht),G=ht-O,V=D*G-(nt-R*O-D*O-R*G),B=tt-V,y=tt-B,Mi[0]=tt-(B+y)+(y-V),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H-nt,y=H-B,Mi[1]=H-(B+y)+(y-nt),k=X+B,y=k-X,Mi[2]=X-(k-y)+(B-y),Mi[3]=k,q=st*j,A=wt*st,R=A-(A-st),D=st-R,A=wt*j,O=A-(A-j),G=j-O,tt=D*G-(q-R*O-D*O-R*G),nt=et*ct,A=wt*et,R=A-(A-et),D=et-R,A=wt*ct,O=A-(A-ct),G=ct-O,V=D*G-(nt-R*O-D*O-R*G),B=tt-V,y=tt-B,yi[0]=tt-(B+y)+(y-V),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H-nt,y=H-B,yi[1]=H-(B+y)+(y-nt),k=X+B,y=k-X,yi[2]=X-(k-y)+(B-y),yi[3]=k,q=et*ht,A=wt*et,R=A-(A-et),D=et-R,A=wt*ht,O=A-(A-ht),G=ht-O,tt=D*G-(q-R*O-D*O-R*G),nt=ot*j,A=wt*ot,R=A-(A-ot),D=ot-R,A=wt*j,O=A-(A-j),G=j-O,V=D*G-(nt-R*O-D*O-R*G),B=tt-V,y=tt-B,Si[0]=tt-(B+y)+(y-V),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H-nt,y=H-B,Si[1]=H-(B+y)+(y-nt),k=X+B,y=k-X,Si[2]=X-(k-y)+(B-y),Si[3]=k,l=Ce(Ce(Ce(ut(ut(4,Mi,et,Pt),Pt,et,Ht),Ht,ut(ut(4,Mi,j,Pt),Pt,j,he),he,ie),ie,Ce(ut(ut(4,yi,ot,Pt),Pt,ot,Ht),Ht,ut(ut(4,yi,ht,Pt),Pt,ht,he),he,Ei),Ei,sn),sn,Ce(ut(ut(4,Si,st,Pt),Pt,st,Ht),Ht,ut(ut(4,Si,ct,Pt),Pt,ct,he),he,ie),ie,Lr);let xt=jf(l,Lr),gt=QM*c;if(xt>=gt||-xt>=gt||(y=n-et,h=n-(et+y)+(y-a),y=t-j,d=t-(j+y)+(y-o),y=e-ot,u=e-(ot+y)+(y-a),y=i-ht,p=i-(ht+y)+(y-o),y=r-st,f=r-(st+y)+(y-a),y=s-ct,_=s-(ct+y)+(y-o),h===0&&u===0&&f===0&&d===0&&p===0&&_===0)||(gt=ty*c+qf*Math.abs(xt),xt+=(et*et+j*j)*(ot*_+ct*u-(ht*f+st*p))+2*(et*h+j*d)*(ot*ct-ht*st)+((ot*ot+ht*ht)*(st*d+j*f-(ct*h+et*_))+2*(ot*u+ht*p)*(st*j-ct*et))+((st*st+ct*ct)*(et*p+ht*h-(j*u+ot*d))+2*(st*f+ct*_)*(et*ht-j*ot)),xt>=gt||-xt>=gt))return xt;if((u!==0||p!==0||f!==0||_!==0)&&(q=et*et,A=wt*et,R=A-(A-et),D=et-R,tt=D*D-(q-R*R-(R+R)*D),nt=j*j,A=wt*j,R=A-(A-j),D=j-R,V=D*D-(nt-R*R-(R+R)*D),B=tt+V,y=B-tt,Dn[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,Dn[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,Dn[2]=X-(k-y)+(B-y),Dn[3]=k),(f!==0||_!==0||h!==0||d!==0)&&(q=ot*ot,A=wt*ot,R=A-(A-ot),D=ot-R,tt=D*D-(q-R*R-(R+R)*D),nt=ht*ht,A=wt*ht,R=A-(A-ht),D=ht-R,V=D*D-(nt-R*R-(R+R)*D),B=tt+V,y=B-tt,Ln[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,Ln[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,Ln[2]=X-(k-y)+(B-y),Ln[3]=k),(h!==0||d!==0||u!==0||p!==0)&&(q=st*st,A=wt*st,R=A-(A-st),D=st-R,tt=D*D-(q-R*R-(R+R)*D),nt=ct*ct,A=wt*ct,R=A-(A-ct),D=ct-R,V=D*D-(nt-R*R-(R+R)*D),B=tt+V,y=B-tt,Un[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,Un[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,Un[2]=X-(k-y)+(B-y),Un[3]=k),h!==0&&(g=ut(4,Mi,h,Yo),l=Ee(l,fn(ut(g,Yo,2*et,Ht),Ht,ut(ut(4,Un,h,Pt),Pt,ht,he),he,ut(ut(4,Ln,h,Pt),Pt,-ct,ue),ue,ie,Se),Se)),d!==0&&(m=ut(4,Mi,d,Zo),l=Ee(l,fn(ut(m,Zo,2*j,Ht),Ht,ut(ut(4,Ln,d,Pt),Pt,st,he),he,ut(ut(4,Un,d,Pt),Pt,-ot,ue),ue,ie,Se),Se)),u!==0&&(v=ut(4,yi,u,Ko),l=Ee(l,fn(ut(v,Ko,2*ot,Ht),Ht,ut(ut(4,Dn,u,Pt),Pt,ct,he),he,ut(ut(4,Un,u,Pt),Pt,-j,ue),ue,ie,Se),Se)),p!==0&&(b=ut(4,yi,p,qo),l=Ee(l,fn(ut(b,qo,2*ht,Ht),Ht,ut(ut(4,Un,p,Pt),Pt,et,he),he,ut(ut(4,Dn,p,Pt),Pt,-st,ue),ue,ie,Se),Se)),f!==0&&(S=ut(4,Si,f,jo),l=Ee(l,fn(ut(S,jo,2*st,Ht),Ht,ut(ut(4,Ln,f,Pt),Pt,j,he),he,ut(ut(4,Dn,f,Pt),Pt,-ht,ue),ue,ie,Se),Se)),_!==0&&(C=ut(4,Si,_,Jo),l=Ee(l,fn(ut(C,Jo,2*ct,Ht),Ht,ut(ut(4,Dn,_,Pt),Pt,ot,he),he,ut(ut(4,Ln,_,Pt),Pt,-et,ue),ue,ie,Se),Se)),h!==0||d!==0){if(u!==0||p!==0||f!==0||_!==0?(q=u*ct,A=wt*u,R=A-(A-u),D=u-R,A=wt*ct,O=A-(A-ct),G=ct-O,tt=D*G-(q-R*O-D*O-R*G),nt=ot*_,A=wt*ot,R=A-(A-ot),D=ot-R,A=wt*_,O=A-(A-_),G=_-O,V=D*G-(nt-R*O-D*O-R*G),B=tt+V,y=B-tt,je[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,je[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,je[2]=X-(k-y)+(B-y),je[3]=k,q=f*-ht,A=wt*f,R=A-(A-f),D=f-R,A=wt*-ht,O=A-(A- -ht),G=-ht-O,tt=D*G-(q-R*O-D*O-R*G),nt=st*-p,A=wt*st,R=A-(A-st),D=st-R,A=wt*-p,O=A-(A- -p),G=-p-O,V=D*G-(nt-R*O-D*O-R*G),B=tt+V,y=B-tt,Je[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,Je[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,Je[2]=X-(k-y)+(B-y),Je[3]=k,w=Ce(4,je,4,Je,ga),q=u*_,A=wt*u,R=A-(A-u),D=u-R,A=wt*_,O=A-(A-_),G=_-O,tt=D*G-(q-R*O-D*O-R*G),nt=f*p,A=wt*f,R=A-(A-f),D=f-R,A=wt*p,O=A-(A-p),G=p-O,V=D*G-(nt-R*O-D*O-R*G),B=tt-V,y=tt-B,Gi[0]=tt-(B+y)+(y-V),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H-nt,y=H-B,Gi[1]=H-(B+y)+(y-nt),k=X+B,y=k-X,Gi[2]=X-(k-y)+(B-y),Gi[3]=k,L=4):(ga[0]=0,w=1,Gi[0]=0,L=1),h!==0){const dt=ut(w,ga,h,ue);l=Ee(l,Ce(ut(g,Yo,h,Ht),Ht,ut(dt,ue,2*et,ie),ie,Se),Se);const Rt=ut(L,Gi,h,Pt);l=Ee(l,fn(ut(Rt,Pt,2*et,Ht),Ht,ut(Rt,Pt,h,he),he,ut(dt,ue,h,ie),ie,Ei,sn),sn),p!==0&&(l=Ee(l,ut(ut(4,Un,h,Pt),Pt,p,Ht),Ht)),_!==0&&(l=Ee(l,ut(ut(4,Ln,-h,Pt),Pt,_,Ht),Ht))}if(d!==0){const dt=ut(w,ga,d,ue);l=Ee(l,Ce(ut(m,Zo,d,Ht),Ht,ut(dt,ue,2*j,ie),ie,Se),Se);const Rt=ut(L,Gi,d,Pt);l=Ee(l,fn(ut(Rt,Pt,2*j,Ht),Ht,ut(Rt,Pt,d,he),he,ut(dt,ue,d,ie),ie,Ei,sn),sn)}}if(u!==0||p!==0){if(f!==0||_!==0||h!==0||d!==0?(q=f*j,A=wt*f,R=A-(A-f),D=f-R,A=wt*j,O=A-(A-j),G=j-O,tt=D*G-(q-R*O-D*O-R*G),nt=st*d,A=wt*st,R=A-(A-st),D=st-R,A=wt*d,O=A-(A-d),G=d-O,V=D*G-(nt-R*O-D*O-R*G),B=tt+V,y=B-tt,je[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,je[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,je[2]=X-(k-y)+(B-y),je[3]=k,F=-ct,U=-_,q=h*F,A=wt*h,R=A-(A-h),D=h-R,A=wt*F,O=A-(A-F),G=F-O,tt=D*G-(q-R*O-D*O-R*G),nt=et*U,A=wt*et,R=A-(A-et),D=et-R,A=wt*U,O=A-(A-U),G=U-O,V=D*G-(nt-R*O-D*O-R*G),B=tt+V,y=B-tt,Je[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,Je[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,Je[2]=X-(k-y)+(B-y),Je[3]=k,x=Ce(4,je,4,Je,_a),q=f*d,A=wt*f,R=A-(A-f),D=f-R,A=wt*d,O=A-(A-d),G=d-O,tt=D*G-(q-R*O-D*O-R*G),nt=h*_,A=wt*h,R=A-(A-h),D=h-R,A=wt*_,O=A-(A-_),G=_-O,V=D*G-(nt-R*O-D*O-R*G),B=tt-V,y=tt-B,Vi[0]=tt-(B+y)+(y-V),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H-nt,y=H-B,Vi[1]=H-(B+y)+(y-nt),k=X+B,y=k-X,Vi[2]=X-(k-y)+(B-y),Vi[3]=k,P=4):(_a[0]=0,x=1,Vi[0]=0,P=1),u!==0){const dt=ut(x,_a,u,ue);l=Ee(l,Ce(ut(v,Ko,u,Ht),Ht,ut(dt,ue,2*ot,ie),ie,Se),Se);const Rt=ut(P,Vi,u,Pt);l=Ee(l,fn(ut(Rt,Pt,2*ot,Ht),Ht,ut(Rt,Pt,u,he),he,ut(dt,ue,u,ie),ie,Ei,sn),sn),_!==0&&(l=Ee(l,ut(ut(4,Dn,u,Pt),Pt,_,Ht),Ht)),d!==0&&(l=Ee(l,ut(ut(4,Un,-u,Pt),Pt,d,Ht),Ht))}if(p!==0){const dt=ut(x,_a,p,ue);l=Ee(l,Ce(ut(b,qo,p,Ht),Ht,ut(dt,ue,2*ht,ie),ie,Se),Se);const Rt=ut(P,Vi,p,Pt);l=Ee(l,fn(ut(Rt,Pt,2*ht,Ht),Ht,ut(Rt,Pt,p,he),he,ut(dt,ue,p,ie),ie,Ei,sn),sn)}}if(f!==0||_!==0){if(h!==0||d!==0||u!==0||p!==0?(q=h*ht,A=wt*h,R=A-(A-h),D=h-R,A=wt*ht,O=A-(A-ht),G=ht-O,tt=D*G-(q-R*O-D*O-R*G),nt=et*p,A=wt*et,R=A-(A-et),D=et-R,A=wt*p,O=A-(A-p),G=p-O,V=D*G-(nt-R*O-D*O-R*G),B=tt+V,y=B-tt,je[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,je[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,je[2]=X-(k-y)+(B-y),je[3]=k,F=-j,U=-d,q=u*F,A=wt*u,R=A-(A-u),D=u-R,A=wt*F,O=A-(A-F),G=F-O,tt=D*G-(q-R*O-D*O-R*G),nt=ot*U,A=wt*ot,R=A-(A-ot),D=ot-R,A=wt*U,O=A-(A-U),G=U-O,V=D*G-(nt-R*O-D*O-R*G),B=tt+V,y=B-tt,Je[0]=tt-(B-y)+(V-y),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H+nt,y=B-H,Je[1]=H-(B-y)+(nt-y),k=X+B,y=k-X,Je[2]=X-(k-y)+(B-y),Je[3]=k,E=Ce(4,je,4,Je,ma),q=h*p,A=wt*h,R=A-(A-h),D=h-R,A=wt*p,O=A-(A-p),G=p-O,tt=D*G-(q-R*O-D*O-R*G),nt=u*d,A=wt*u,R=A-(A-u),D=u-R,A=wt*d,O=A-(A-d),G=d-O,V=D*G-(nt-R*O-D*O-R*G),B=tt-V,y=tt-B,zi[0]=tt-(B+y)+(y-V),X=q+B,y=X-q,H=q-(X-y)+(B-y),B=H-nt,y=H-B,zi[1]=H-(B+y)+(y-nt),k=X+B,y=k-X,zi[2]=X-(k-y)+(B-y),zi[3]=k,M=4):(ma[0]=0,E=1,zi[0]=0,M=1),f!==0){const dt=ut(E,ma,f,ue);l=Ee(l,Ce(ut(S,jo,f,Ht),Ht,ut(dt,ue,2*st,ie),ie,Se),Se);const Rt=ut(M,zi,f,Pt);l=Ee(l,fn(ut(Rt,Pt,2*st,Ht),Ht,ut(Rt,Pt,f,he),he,ut(dt,ue,f,ie),ie,Ei,sn),sn),d!==0&&(l=Ee(l,ut(ut(4,Ln,f,Pt),Pt,d,Ht),Ht)),p!==0&&(l=Ee(l,ut(ut(4,Dn,-f,Pt),Pt,p,Ht),Ht))}if(_!==0){const dt=ut(E,ma,_,ue);l=Ee(l,Ce(ut(C,Jo,_,Ht),Ht,ut(dt,ue,2*ct,ie),ie,Se),Se);const Rt=ut(M,zi,_,Pt);l=Ee(l,fn(ut(Rt,Pt,2*ct,Ht),Ht,ut(Rt,Pt,_,he),he,ut(dt,ue,_,ie),ie,Ei,sn),sn)}}return Lr[l-1]}function ny(n,t,e,i,r,s,a,o){const c=n-a,l=e-a,h=r-a,u=t-o,f=i-o,d=s-o,p=l*d,_=h*f,g=c*c+u*u,m=h*u,v=c*d,b=l*l+f*f,S=c*f,C=l*u,E=h*h+d*d,w=g*(p-_)+b*(m-v)+E*(S-C),x=(Math.abs(p)+Math.abs(_))*g+(Math.abs(m)+Math.abs(v))*b+(Math.abs(S)+Math.abs(C))*E,M=$M*x;return w>M||-w>M?w:ey(n,t,e,i,r,s,a,o,x)}ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(1152);ft(1152);ft(1152);ft(1152);ft(1152);ft(2304);ft(2304);ft(3456);ft(5760);ft(8);ft(8);ft(8);ft(16);ft(24);ft(48);ft(48);ft(96);ft(192);ft(384);ft(384);ft(384);ft(768);ft(96);ft(96);ft(96);ft(1152);function bu(n,t){var e=n.x-t.x,i=n.y-t.y,r=n.z-t.z;return Math.sqrt(e*e+i*i+r*r)}function Jf(n,t){return n<t?n+"|"+t:t+"|"+n}const Tu=Math.pow(2,-52),va=new Uint32Array(512);class Gr{static from(t,e=oy,i=ly){const r=t.length,s=new Float64Array(r*2);for(let a=0;a<r;a++){const o=t[a];s[2*a]=e(o),s[2*a+1]=i(o)}return new Gr(s)}constructor(t){const e=t.length>>1;if(e>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const i=Math.max(2*e-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(e)),this._hullPrev=new Uint32Array(e),this._hullNext=new Uint32Array(e),this._hullTri=new Uint32Array(e),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(e),this._dists=new Float64Array(e),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:t,_hullPrev:e,_hullNext:i,_hullTri:r,_hullHash:s}=this,a=t.length>>1;let o=1/0,c=1/0,l=-1/0,h=-1/0;for(let M=0;M<a;M++){const L=t[2*M],P=t[2*M+1];L<o&&(o=L),P<c&&(c=P),L>l&&(l=L),P>h&&(h=P),this._ids[M]=M}const u=(o+l)/2,f=(c+h)/2;let d=0,p=0,_=0;for(let M=0,L=1/0;M<a;M++){const P=Qo(u,f,t[2*M],t[2*M+1]);P<L&&(d=M,L=P)}const g=t[2*d],m=t[2*d+1];for(let M=0,L=1/0;M<a;M++){if(M===d)continue;const P=Qo(g,m,t[2*M],t[2*M+1]);P<L&&P>0&&(p=M,L=P)}let v=t[2*p],b=t[2*p+1],S=1/0;for(let M=0;M<a;M++){if(M===d||M===p)continue;const L=sy(g,m,v,b,t[2*M],t[2*M+1]);L<S&&(_=M,S=L)}let C=t[2*_],E=t[2*_+1];if(S===1/0){for(let P=0;P<a;P++)this._dists[P]=t[2*P]-t[0]||t[2*P+1]-t[1];Ar(this._ids,this._dists,0,a-1);const M=new Uint32Array(a);let L=0;for(let P=0,F=-1/0;P<a;P++){const U=this._ids[P],y=this._dists[U];y>F&&(M[L++]=U,F=y)}this.hull=M.subarray(0,L),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(si(g,m,v,b,C,E)<0){const M=p,L=v,P=b;p=_,v=C,b=E,_=M,C=L,E=P}const w=ay(g,m,v,b,C,E);this._cx=w.x,this._cy=w.y;for(let M=0;M<a;M++)this._dists[M]=Qo(t[2*M],t[2*M+1],w.x,w.y);Ar(this._ids,this._dists,0,a-1),this._hullStart=d;let x=3;i[d]=e[_]=p,i[p]=e[d]=_,i[_]=e[p]=d,r[d]=0,r[p]=1,r[_]=2,s.fill(-1),s[this._hashKey(g,m)]=d,s[this._hashKey(v,b)]=p,s[this._hashKey(C,E)]=_,this.trianglesLen=0,this._addTriangle(d,p,_,-1,-1,-1);for(let M=0,L=0,P=0;M<this._ids.length;M++){const F=this._ids[M],U=t[2*F],y=t[2*F+1];if(M>0&&Math.abs(U-L)<=Tu&&Math.abs(y-P)<=Tu||(L=U,P=y,F===d||F===p||F===_))continue;let A=0;for(let B=0,X=this._hashKey(U,y);B<this._hashSize&&(A=s[(X+B)%this._hashSize],!(A!==-1&&A!==i[A]));B++);A=e[A];let R=A,D;for(;D=i[R],si(U,y,t[2*R],t[2*R+1],t[2*D],t[2*D+1])>=0;)if(R=D,R===A){R=-1;break}if(R===-1)continue;let O=this._addTriangle(R,F,i[R],-1,-1,r[R]);r[F]=this._legalize(O+2),r[R]=O,x++;let G=i[R];for(;D=i[G],si(U,y,t[2*G],t[2*G+1],t[2*D],t[2*D+1])<0;)O=this._addTriangle(G,F,D,r[F],-1,r[G]),r[F]=this._legalize(O+2),i[G]=G,x--,G=D;if(R===A)for(;D=e[R],si(U,y,t[2*D],t[2*D+1],t[2*R],t[2*R+1])<0;)O=this._addTriangle(D,F,R,-1,r[R],r[D]),this._legalize(O+2),r[D]=O,i[R]=R,x--,R=D;this._hullStart=e[F]=R,i[R]=e[G]=F,i[F]=G,s[this._hashKey(U,y)]=F,s[this._hashKey(t[2*R],t[2*R+1])]=R}this.hull=new Uint32Array(x);for(let M=0,L=this._hullStart;M<x;M++)this.hull[M]=L,L=i[L];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,e){return Math.floor(iy(t-this._cx,e-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:e,_halfedges:i,coords:r}=this;let s=0,a=0;for(;;){const o=i[t],c=t-t%3;if(a=c+(t+2)%3,o===-1){if(s===0)break;t=va[--s];continue}const l=o-o%3,h=c+(t+1)%3,u=l+(o+2)%3,f=e[a],d=e[t],p=e[h],_=e[u];if(ry(r[2*f],r[2*f+1],r[2*d],r[2*d+1],r[2*p],r[2*p+1],r[2*_],r[2*_+1])){e[t]=_,e[o]=f;const m=i[u];if(m===-1){let b=this._hullStart;do{if(this._hullTri[b]===u){this._hullTri[b]=t;break}b=this._hullPrev[b]}while(b!==this._hullStart)}this._link(t,m),this._link(o,i[a]),this._link(a,u);const v=l+(o+1)%3;s<va.length&&(va[s++]=v)}else{if(s===0)break;t=va[--s]}}return a}_link(t,e){this._halfedges[t]=e,e!==-1&&(this._halfedges[e]=t)}_addTriangle(t,e,i,r,s,a){const o=this.trianglesLen;return this._triangles[o]=t,this._triangles[o+1]=e,this._triangles[o+2]=i,this._link(o,r),this._link(o+1,s),this._link(o+2,a),this.trianglesLen+=3,o}}function iy(n,t){const e=n/(Math.abs(n)+Math.abs(t));return(t>0?3-e:1+e)/4}function Qo(n,t,e,i){const r=n-e,s=t-i;return r*r+s*s}function ry(n,t,e,i,r,s,a,o){const c=n-a,l=t-o,h=e-a,u=i-o,f=r-a,d=s-o,p=c*c+l*l,_=h*h+u*u,g=f*f+d*d;return c*(u*g-_*d)-l*(h*g-_*f)+p*(h*d-u*f)<0}function sy(n,t,e,i,r,s){const a=e-n,o=i-t,c=r-n,l=s-t,h=a*a+o*o,u=c*c+l*l,f=.5/(a*l-o*c),d=(l*h-o*u)*f,p=(a*u-c*h)*f;return d*d+p*p}function ay(n,t,e,i,r,s){const a=e-n,o=i-t,c=r-n,l=s-t,h=a*a+o*o,u=c*c+l*l,f=.5/(a*l-o*c),d=n+(l*h-o*u)*f,p=t+(a*u-c*h)*f;return{x:d,y:p}}function Ar(n,t,e,i){if(i-e<=20)for(let r=e+1;r<=i;r++){const s=n[r],a=t[s];let o=r-1;for(;o>=e&&t[n[o]]>a;)n[o+1]=n[o--];n[o+1]=s}else{const r=e+i>>1;let s=e+1,a=i;as(n,r,s),t[n[e]]>t[n[i]]&&as(n,e,i),t[n[s]]>t[n[i]]&&as(n,s,i),t[n[e]]>t[n[s]]&&as(n,e,s);const o=n[s],c=t[o];for(;;){do s++;while(t[n[s]]<c);do a--;while(t[n[a]]>c);if(a<s)break;as(n,s,a)}n[e+1]=n[a],n[a]=o,i-s+1>=a-e?(Ar(n,t,s,i),Ar(n,t,e,a-1)):(Ar(n,t,e,a-1),Ar(n,t,s,i))}}function as(n,t,e){const i=n[t];n[t]=n[e],n[e]=i}function oy(n){return n[0]}function ly(n){return n[1]}class cy{constructor(t,e){this.W=t,this.bs=e}add(t){const e=this.W,i=t/e|0,r=t%e;return this.bs[i]|=1<<r,this}delete(t){const e=this.W,i=t/e|0,r=t%e;return this.bs[i]&=~(1<<r),this}set(t,e){const i=this.W,r=t/i|0,a=1<<t%i;return this.bs[r]^=(-e^this.bs[r])&a,e}has(t){const e=this.W,i=t/e|0,r=t%e;return!!(this.bs[i]&1<<r)}forEach(t){const e=this.W,i=this.bs,r=i.length;for(let s=0;s<r;s++){let a=0;for(;i[s]&&a<e;)i[s]&1<<a&&t(s*e+a),a++}return this}}class Au extends cy{constructor(t){const i=new Uint8Array(Math.ceil(t/8)).fill(0);super(8,i)}}function ki(n){return n%3===2?n-2:n+1}function ei(n){return n%3===0?n+2:n-1}const os=2**32-1;class zc{constructor(t,e){if(!t||typeof t!="object"||!t.triangles||!t.halfedges||!t.coords)throw new Error("Expected an object with Delaunator output");if(t.triangles.length%3||t.halfedges.length!==t.triangles.length||t.coords.length%2)throw new Error("Delaunator output appears inconsistent");if(t.triangles.length<3)throw new Error("No edges in triangulation");this.del=t;const i=t.coords.length>>1,r=t.triangles.length;this.vertMap=new Uint32Array(i).fill(os),this.flips=new Au(r),this.consd=new Au(r);const s=t.triangles,a=this.vertMap;for(let o=0;o<r;o++){const c=s[o];a[c]===os&&this.updateVert(o)}e&&this.constrainAll(e)}constrainOne(t,e){const{triangles:i,halfedges:r}=this.del,s=this.vertMap,a=this.consd,o=s[t];if(o===os||s[e]===os)throw new Error("Cannot constrain between points that are not triangulated");let c=o;do{const d=i[c],p=ki(c);if(d===e)return this.protect(c);const _=ei(c),g=i[_];if(g===e)return this.protect(p),p;if(this.intersectSegments(t,e,g,d)){c=_;break}c=r[p]}while(c!==-1&&c!==o);let l=c,h=-1;for(;c!==-1;){const d=r[c],p=ei(c),_=ei(d),g=ki(d);if(d===-1)throw new Error("Constraining edge exited the hull");if(a.has(c))throw new Error("Edge intersects already constrained edge");if(this.isCollinear(t,e,i[c])||this.isCollinear(t,e,i[d]))throw new Error("Constraining edge intersects point");if(!this.intersectSegments(i[c],i[d],i[p],i[_])){if(h===-1&&(h=c),i[_]===e){if(c===h)throw new Error("Infinite loop: non-convex quadrilateral");c=h,h=-1;continue}if(this.intersectSegments(t,e,i[_],i[d]))c=_;else if(this.intersectSegments(t,e,i[g],i[_]))c=g;else if(h===c)throw new Error("Infinite loop: no further intersect after non-convex");continue}if(this.flipDiagonal(c),this.intersectSegments(t,e,i[p],i[_])&&(h===-1&&(h=p),h===p))throw new Error("Infinite loop: flipped diagonal still intersects");i[_]===e?(l=_,c=h,h=-1):this.intersectSegments(t,e,i[g],i[_])&&(c=g)}const u=this.flips;this.protect(l);do{var f=0;u.forEach(d=>{u.delete(d);const p=r[d];p!==-1&&(u.delete(p),this.isDelaunay(d)||(this.flipDiagonal(d),f++))})}while(f>0);return this.findEdge(t,e)}delaunify(t=!1){const e=this.del.halfedges,i=this.flips,r=this.consd,s=e.length;do{var a=0;for(let o=0;o<s;o++){if(r.has(o))continue;i.delete(o);const c=e[o];c!==-1&&(i.delete(c),this.isDelaunay(o)||(this.flipDiagonal(o),a++))}}while(t&&a>0);return this}constrainAll(t){const e=t.length;for(let i=0;i<e;i++){const r=t[i];this.constrainOne(r[0],r[1])}return this}isConstrained(t){return this.consd.has(t)}findEdge(t,e){const i=this.vertMap[e],r=this.del.triangles,s=this.del.halfedges;let a=i,o=-1;do{if(r[a]===t)return a;o=ki(a),a=s[o]}while(a!==-1&&a!==i);return r[ki(o)]===t?-o:1/0}untriangulatedPoints(){const t=[],e=this.vertMap,i=e.length;for(let r=0;r<i;r++)e[r]===os&&t.push(r);return t}protect(t){const e=this.del.halfedges[t],i=this.flips,r=this.consd;return i.delete(t),r.add(t),e!==-1?(i.delete(e),r.add(e),e):-t}markFlip(t){const e=this.del.halfedges,i=this.flips;if(this.consd.has(t))return!1;const s=e[t];return s!==-1&&(i.add(t),i.add(s)),!0}flipDiagonal(t){const e=this.del.triangles,i=this.del.halfedges,r=this.flips,s=this.consd,a=i[t],o=ei(t),c=ki(t),l=ei(a),h=ki(a),u=i[o],f=i[l];if(s.has(t))throw new Error("Trying to flip a constrained edge");return e[t]=e[l],i[t]=f,r.set(t,r.has(l))||s.set(t,s.has(l)),f!==-1&&(i[f]=t),i[o]=l,e[a]=e[o],i[a]=u,r.set(a,r.has(o))||s.set(a,s.has(o)),u!==-1&&(i[u]=a),i[l]=o,this.markFlip(t),this.markFlip(c),this.markFlip(a),this.markFlip(h),r.add(o),s.delete(o),r.add(l),s.delete(l),this.updateVert(t),this.updateVert(c),this.updateVert(a),this.updateVert(h),o}isDelaunay(t){const e=this.del.triangles,r=this.del.halfedges[t];if(r===-1)return!0;const s=e[ei(t)],a=e[t],o=e[ki(t)],c=e[ei(r)];return!this.inCircle(s,a,o,c)}updateVert(t){const e=this.del.triangles,i=this.del.halfedges,r=this.vertMap,s=e[t];let a=ei(t),o=i[a];for(;o!==-1&&o!==t;)a=ei(o),o=i[a];return r[s]=a,a}intersectSegments(t,e,i,r){const s=this.del.coords;return t===i||t===r||e===i||e===r?!1:$f(s[t*2],s[t*2+1],s[e*2],s[e*2+1],s[i*2],s[i*2+1],s[r*2],s[r*2+1])}inCircle(t,e,i,r){const s=this.del.coords;return ny(s[t*2],s[t*2+1],s[e*2],s[e*2+1],s[i*2],s[i*2+1],s[r*2],s[r*2+1])<0}isCollinear(t,e,i){const r=this.del.coords;return si(r[t*2],r[t*2+1],r[e*2],r[e*2+1],r[i*2],r[i*2+1])===0}}zc.intersectSegments=$f;function $f(n,t,e,i,r,s,a,o){const c=si(n,t,r,s,a,o),l=si(e,i,r,s,a,o);if(c>0&&l>0||c<0&&l<0)return!1;const h=si(r,s,n,t,e,i),u=si(a,o,n,t,e,i);return h>0&&u>0||h<0&&u<0?!1:c===0&&l===0&&h===0&&u===0?!(Math.max(r,a)<Math.min(n,e)||Math.max(n,e)<Math.min(r,a)||Math.max(s,o)<Math.min(t,i)||Math.max(t,i)<Math.min(s,o)):!0}function hy(n,t,e,i){for(var r=!1,s=0,a=i-1;s<i;a=s++){var o=e[s*2],c=e[s*2+1],l=e[a*2],h=e[a*2+1];c>t!=h>t&&n<(l-o)*(t-c)/(h-c)+o&&(r=!r)}return r}function uy(n){if(n.length<3)return[];if(n.length===3)return[{v0:n[0],v1:n[1],v2:n[2]}];if(n.length===4){var t=bu(n[0],n[2]),e=bu(n[1],n[3]);return t<=e?[{v0:n[0],v1:n[1],v2:n[2]},{v0:n[0],v1:n[2],v2:n[3]}]:[{v0:n[0],v1:n[1],v2:n[3]},{v0:n[1],v1:n[2],v2:n[3]}]}for(var i=0,r=0,s=0,a=0;a<n.length;a++){var o=n[a],c=n[(a+1)%n.length];i+=(o.y-c.y)*(o.z+c.z),r+=(o.z-c.z)*(o.x+c.x),s+=(o.x-c.x)*(o.y+c.y)}for(var l=0,h=0,u=0,f=0;f<n.length;f++){var d=n[f],p=n[(f+1)%n.length];l+=d.x*p.y-p.x*d.y,h+=d.x*p.z-p.x*d.z,u+=d.y*p.z-p.y*d.z}l=Math.abs(l),h=Math.abs(h),u=Math.abs(u);var _,g;l>=h&&l>=u?(_=function(lt){return lt.x},g=function(lt){return lt.y}):h>=u?(_=function(lt){return lt.x},g=function(lt){return lt.z}):(_=function(lt){return lt.y},g=function(lt){return lt.z});for(var m=n.length,v=new Float64Array(m*2),b=0;b<m;b++)v[b*2]=_(n[b]),v[b*2+1]=g(n[b]);for(var S=1/0,C=1/0,E=-1/0,w=-1/0,x=0;x<m;x++){var M=v[x*2],L=v[x*2+1];M<S&&(S=M),M>E&&(E=M),L<C&&(C=L),L>w&&(w=L)}for(var P=(E-S)*(E-S)+(w-C)*(w-C),F=Math.max(P*1e-14,1e-18),U=!1,y=0;y<m&&!U;y++)for(var A=y+1;A<m;A++){var R=v[y*2]-v[A*2],D=v[y*2+1]-v[A*2+1];if(R*R+D*D<=F){U=!0;break}}var O,G;try{if(O=new Gr(v),!U&&O.triangles.length>0){G=new zc(O);for(var B=0;B<m;B++){var X=(B+1)%m;try{G.constrainOne(B,X)}catch{}}}}catch{try{O=new Gr(v)}catch{return[]}}for(var H=[],q=O.triangles,tt=0;tt<q.length;tt+=3){var nt=q[tt],V=q[tt+1],k=q[tt+2],et=(v[nt*2]+v[V*2]+v[k*2])/3,ot=(v[nt*2+1]+v[V*2+1]+v[k*2+1])/3;hy(et,ot,v,m)&&H.push({v0:n[nt],v1:n[V],v2:n[k]})}var st=Math.sqrt(i*i+r*r+s*s);if(st>1e-12)for(var j=i/st,ht=r/st,ct=s/st,xt=0;xt<H.length;xt++){var gt=H[xt],dt=gt.v1.x-gt.v0.x,Rt=gt.v1.y-gt.v0.y,z=gt.v1.z-gt.v0.z,te=gt.v2.x-gt.v0.x,Yt=gt.v2.y-gt.v0.y,ne=gt.v2.z-gt.v0.z,Dt=Rt*ne-z*Yt,N=z*te-dt*ne,T=dt*Yt-Rt*te,Y=Dt*j+N*ht+T*ct;if(Y<0){var at=gt.v1;gt.v1=gt.v2,gt.v2=at}}return H}function Qf(n){if(n.length===0)return 0;for(var t=0,e=0,i=0,r=n.length,s=0;s<r;s++)t+=n[s].v0.x+n[s].v1.x+n[s].v2.x,e+=n[s].v0.y+n[s].v1.y+n[s].v2.y,i+=n[s].v0.z+n[s].v1.z+n[s].v2.z;var a=1/(r*3);t*=a,e*=a,i*=a;for(var o=0,c=0;c<r;c++){var l=n[c].v0.x-t,h=n[c].v0.y-e,u=n[c].v0.z-i,f=n[c].v1.x-t,d=n[c].v1.y-e,p=n[c].v1.z-i,_=n[c].v2.x-t,g=n[c].v2.y-e,m=n[c].v2.z-i;o+=(l*(d*m-g*p)-f*(h*m-g*u)+_*(h*p-d*u))/6}return o}function fy(n){var t=n*2;t<1e-12&&(t=1e-6);var e={},i=[],r=0,s=n*n;function a(u,f,d){var p=Math.floor(u/t),_=Math.floor(f/t),g=Math.floor(d/t);return p+","+_+","+g}function o(u,f,d){for(var p=Math.floor(u/t),_=Math.floor(f/t),g=Math.floor(d/t),m=s,v=null,b=-1;b<=1;b++)for(var S=-1;S<=1;S++)for(var C=-1;C<=1;C++){var E=p+b+","+(_+S)+","+(g+C),w=e[E];if(w)for(var x=0;x<w.length;x++){var M=w[x],L=M.x-u,P=M.y-f,F=M.z-d,U=L*L+P*P+F*F;U<m&&(m=U,v=M)}}return v}function c(u,f,d,p){var _=o(u,f,d);if(_){if(p){for(var g=!1,m=0;m<_.triRefs.length;m++){var v=_.triRefs[m];if(v.mesh===p.mesh&&v.triIdx===p.triIdx){g=!0;break}}g||_.triRefs.push(p)}return _}var b={x:u,y:f,z:d,id:r++,triRefs:p?[p]:[]},S=a(u,f,d);return e[S]||(e[S]=[]),e[S].push(b),i.push(b),b}function l(){return i}function h(){return i.length}return{getOrCreate:c,getAll:l,size:h}}function td(n){return{firstId:n.count,count:0,coords:new Float64Array(0),segments:new Uint32Array(0),segmentsByVertex:new Map,edgeKeys:new Set,index:null,dropped:null,snapReport:{dropped:0,nearTolerance:0}}}function dy(n,t,e,i){var r=[t[0]-n[0],t[1]-n[1],t[2]-n[2]],s=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],a=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],o=ls(r,r),c=ls(s,s),l=ls(s,a),h,u;if(o<=1e-30&&c<=1e-30)h=0,u=0;else if(o<=1e-30)h=0,u=br(l/c);else{var f=ls(r,a);if(c<=1e-30)u=0,h=br(-f/o);else{var d=ls(r,s),p=o*c-d*d;h=p>1e-30?br((d*l-f*c)/p):0,u=(d*h+l)/c,u<0?(u=0,h=br(-f/o)):u>1&&(u=1,h=br((d-f)/o))}}var _=n[0]+r[0]*h-(e[0]+s[0]*u),g=n[1]+r[1]*h-(e[1]+s[1]*u),m=n[2]+r[2]*h-(e[2]+s[2]*u);return{d:Math.sqrt(_*_+g*g+m*m),s:h,t:u}}function ls(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function br(n){return n<0?0:n>1?1:n}function py(n,t,e,i,r){var s=r[0]-i[0],a=r[1]-i[1],o=r[2]-i[2],c=s*s+a*a+o*o,l=c>0?br(((n-i[0])*s+(t-i[1])*a+(e-i[2])*o)/c):0,h=i[0]+s*l-n,u=i[1]+a*l-t,f=i[2]+o*l-e;return Math.sqrt(h*h+u*u+f*f)}function my(n,t,e,i){var r=[n.origin.x,n.origin.y,n.origin.z],s=new Map,a=e;function o(v,b,S){return v+","+b+","+S}function c(v){for(var b=Math.floor(v[0]/a),S=Math.floor(v[1]/a),C=Math.floor(v[2]/a),E=-1,w=e,x=-1;x<=1;x++)for(var M=-1;M<=1;M++)for(var L=-1;L<=1;L++){var P=s.get(o(b+x,S+M,C+L));if(P)for(var F=0;F<P.length;F++){var U=i[P[F]],y=Math.hypot(U[0]-v[0],U[1]-v[1],U[2]-v[2]);y<w&&(w=y,E=P[F])}}if(E>=0)return E;i.push(v);var A=o(b,S,C);return s.has(A)||s.set(A,[]),s.get(A).push(i.length-1),i.length-1}for(var l=[],h=0;h<t.length;h++){var u=t[h];if(!u||!Array.isArray(u.vertices))throw new Qi(Ge.INVALID_INPUT,"breakline "+h+" needs a vertices array");for(var f=[],d=[],p=0;p<u.vertices.length;p++){var _=u.vertices[p];if(!_||!isFinite(_[0])||!isFinite(_[1])||!isFinite(_[2]))throw new Qi(Ge.INVALID_INPUT,"breakline "+h+" vertex "+p+" is not a finite [x, y, z]");var g=c([_[0]-r[0],_[1]-r[1],_[2]-r[2]]);f.length&&f[f.length-1]===g||(f.push(g),d.push(p))}var m=!!u.closedLoop;m&&f.length>2&&f[f.length-1]===f[0]&&(f.pop(),d.pop()),f.length>=2&&l.push({line:h,closed:m&&f.length>2,ids:f,orig:d})}return l}function gy(n,t){var e=[];return n.forEach(function(i){for(var r=i.ids.length,s=i.closed?r:r-1,a=0;a<s;a++){var o=i.ids[a],c=i.ids[(a+1)%r],l=t[o],h=t[c];e.push({line:i.line,seg:i.orig[a],a:l,b:h,ia:o,ib:c,lo:[Math.min(l[0],h[0]),Math.min(l[1],h[1]),Math.min(l[2],h[2])],hi:[Math.max(l[0],h[0]),Math.max(l[1],h[1]),Math.max(l[2],h[2])]})}}),e}function _y(n,t){for(var e=0;e<n.length;e++)for(var i=n[e],r=e+1;r<n.length;r++){var s=n[r];if(!(i.ia===s.ia||i.ia===s.ib||i.ib===s.ia||i.ib===s.ib)&&!(i.lo[0]>s.hi[0]+t||s.lo[0]>i.hi[0]+t||i.lo[1]>s.hi[1]+t||s.lo[1]>i.hi[1]+t||i.lo[2]>s.hi[2]+t||s.lo[2]>i.hi[2]+t)){var a=dy(i.a,i.b,s.a,s.b);if(!(a.d>=t))throw new Qi(Ge.CROSSING_BREAKLINES,"breakline "+i.line+" segment "+i.seg+" meets breakline "+s.line+" segment "+s.seg+" away from a shared vertex ("+a.d.toExponential(2)+" apart); split or move one of them")}}}function vy(n,t,e){if(!t||t.length===0)return td(n);var i=e||{},r=i.tolerance!==void 0?i.tolerance:n.tolerance||Math.max(.001,.25*n.medianSpacing),s=i.breaklineSnap!==void 0?i.breaklineSnap:.001,a=n.medianSpacing,o=[],c=my(n,t,r,o),l=gy(c,o);_y(l,r);for(var h=n.count,u=[],f=0;f<o.length;f++)u.push(o[f][0],o[f][1],o[f][2]);for(var d=[],p=0;p<l.length;p++)for(var _=l[p],g=Math.hypot(_.b[0]-_.a[0],_.b[1]-_.a[1],_.b[2]-_.a[2]),m=Math.max(1,Math.ceil(g/a-1e-9)),v=h+_.ia,b=1;b<=m;b++){var S;if(b===m)S=h+_.ib;else{var C=b/m;u.push(_.a[0]+(_.b[0]-_.a[0])*C,_.a[1]+(_.b[1]-_.a[1])*C,_.a[2]+(_.b[2]-_.a[2])*C),S=h+u.length/3-1}d.push(v,S),v=S}for(var E=u.length/3,w=Float64Array.from(u),x=Uint32Array.from(d),M=new Map,L=new Set,P=0;P<x.length;P+=2){var F=x[P],U=x[P+1];M.has(F)||M.set(F,[]),M.has(U)||M.set(U,[]),M.get(F).push(U),M.get(U).push(F),L.add(Jf(String(F),String(U)))}for(var y=new Uint8Array(n.count),A=0,R=0,D=n.coords,O=0;O<l.length;O++)for(var G=l[O],B=[(G.a[0]+G.b[0])/2,(G.a[1]+G.b[1])/2,(G.a[2]+G.b[2])/2],X=Math.hypot(G.b[0]-G.a[0],G.b[1]-G.a[1],G.b[2]-G.a[2])/2,H=Uc(n.index,B,X+Math.max(r,s)),q=0;q<H.length;q++){var tt=H[q];if(y[tt]!==1){var nt=py(D[3*tt],D[3*tt+1],D[3*tt+2],G.a,G.b);nt<s?(y[tt]=1,A++):nt<r&&y[tt]!==2&&(y[tt]=2,R++)}}for(var V=0;V<y.length;V++)y[V]===2&&(y[V]=0);return{firstId:h,count:E,coords:w,segments:x,segmentsByVertex:M,edgeKeys:L,index:ic({count:E,positions:w}),dropped:y,snapReport:{dropped:A,nearTolerance:R}}}var wu=1e-9;function Ru(n){var t=Float64Array.from(n).sort();return t[t.length-1>>1]}function xy(n,t,e){for(var i=n.coords,r=[i[3*t],i[3*t+1],i[3*t+2]],s=oc(n.index,r,e.k+1),a=[],o=[],c=0;c<s.points.length;c++){var l=s.points[c];l===t||s.d[c]<wu||(a.push(l),o.push(s.d[c]))}if(a.length===0)return{ids:a,valid:!1};for(var h=Ru(o),u=a[0],f=oc(n.index,[i[3*u],i[3*u+1],i[3*u+2]],e.k+1),d=[],p=0;p<f.points.length;p++)f.points[p]!==u&&f.d[p]>=wu&&d.push(f.d[p]);if(d.length&&h>e.maxRadiusMultiplier*Ru(d))return{ids:a,valid:!1};for(var _=e.maxRadiusMultiplier*h,g=[],m=0;m<a.length;m++)o[m]<=_&&g.push(a[m]);var v=e.extra;if(v&&v.index)for(var b=Uc(v.index,r,_),S=0;S<b.length;S++)g.push(v.firstId+b[S]);return{ids:g,valid:g.length>=e.minNeighbours}}function My(n){var t=Float64Array.from(n).sort();return t[t.length-1>>1]}function yy(n,t,e,i){for(var r=i,s=r[3*t],a=r[3*t+1],o=r[3*t+2],c=n.normals[3*t],l=n.normals[3*t+1],h=n.normals[3*t+2],u=Math.sqrt(c*c+l*l+h*h),f=u>0?[c/u,l/u,h/u]:[0,0,0],d=[],p=0;p<e.length;p++){var _=e[p],g=r[3*_]-s,m=r[3*_+1]-a,v=r[3*_+2]-o;d.push(Math.sqrt(g*g+m*m+v*v))}return{point:[s,a,o],normal:f,scale:d.length?My(d):0}}function Sy(n,t,e,i,r,s){for(var a=r,o=i.normal,c=i.point,l=s.maxPlaneOffset*i.scale,h=n.normals,u=[],f=0;f<e.length;f++){var d=e[f],p=(a[3*d]-c[0])*o[0]+(a[3*d+1]-c[1])*o[1]+(a[3*d+2]-c[2])*o[2];if(!(Math.abs(p)>l)){if(d<n.count){var _=h[3*d],g=h[3*d+1],m=h[3*d+2],v=Math.sqrt(_*_+g*g+m*m);if(!(v>0)||Math.abs((_*o[0]+g*o[1]+m*o[2])/v)<s.normalAgreement)continue}u.push(d)}}return u}var Ey=1e-7;function Er(n,t){var e=Math.imul(n+1^2654435769,2246822507)^Math.imul(t+1,3266489909);return e^=e>>>16,e=Math.imul(e,2146121005),e^=e>>>15,e=Math.imul(e,2221713035),e^=e>>>16,(e>>>0)/4294967296-.5}function by(n,t,e,i){var r=n.normal,s=n.point,a=e,o,c,l;Math.abs(r[1])>.9?(o=0,c=r[2],l=-r[1]):(o=-r[2],c=0,l=r[0]);var h=Math.sqrt(o*o+c*c+l*l);o/=h,c/=h,l/=h;var u=r[1]*l-r[2]*c,f=r[2]*o-r[0]*l,d=r[0]*c-r[1]*o,p=new Float64Array(2*(t.length+1)),_=null,g=i===void 0?0:Ey*(n.scale||0),m=0,v=0,b=0;g&&(m=g*Er(i,0),v=g*Er(i,1),b=g*Er(i,2));for(var S=0;S<t.length;S++){var C=t[S],E=a[3*C]-s[0],w=a[3*C+1]-s[1],x=a[3*C+2]-s[2];g&&(_||(_=new Float64Array(p.length)),_[2*(S+1)]=E*o+w*c+x*l,_[2*(S+1)+1]=E*u+w*f+x*d,E+=g*Er(C,0)-m,w+=g*Er(C,1)-v,x+=g*Er(C,2)-b),p[2*(S+1)]=E*o+w*c+x*l,p[2*(S+1)+1]=E*u+w*f+x*d}return _&&(p.exact=_),p}var Ty=1e-12;function Ay(n,t,e,i,r){var s=new Gr(n),a=!1;if(r&&r.length)try{for(var o=new zc(s),c=0;c<r.length;c++)o.constrainOne(r[c][0],r[c][1])}catch{a=!0,s=new Gr(n)}for(var l=s.triangles,h=n.exact||n,u=2*Ty*i*i,f=[],d=0;d<l.length;d+=3){var p=l[d],_=l[d+1],g=l[d+2];if(!(p!==0&&_!==0&&g!==0)){var m=h[2*p],v=h[2*p+1],b=(h[2*_]-m)*(h[2*g+1]-v)-(h[2*_+1]-v)*(h[2*g]-m);Math.abs(b)<u||f.push(p===0?e:t[p-1],_===0?e:t[_-1],g===0?e:t[g-1])}}return{triangles:f,constraintFailure:a}}function wy(n,t,e){var i;return n>t&&(i=n,n=t,t=i),t>e&&(i=t,t=e,e=i),n>t&&(i=n,n=t,t=i),n+","+t+","+e}function tl(n,t){return n<t?n+"|"+t:t+"|"+n}function Ry(){var n=new Map;function t(i,r,s){var a=wy(i,r,s),o=n.get(a);o?o.votes++:n.set(a,{v:[i,r,s],votes:1})}function e(i,r,s){var a=Array.from(n.keys()).sort(),o=new Map,c=new Map,l=[];function h(E,w){return o.get(tl(E,w))||0}function u(E,w,x){if(!s)return!0;var M=c.get(tl(E,w));if(M===void 0)return!0;var L=s,P=L[3*w]-L[3*E],F=L[3*w+1]-L[3*E+1],U=L[3*w+2]-L[3*E+2],y=L[3*M]-L[3*E],A=L[3*M+1]-L[3*E+1],R=L[3*M+2]-L[3*E+2],D=L[3*x]-L[3*E],O=L[3*x+1]-L[3*E+1],G=L[3*x+2]-L[3*E+2],B=F*R-U*A,X=U*y-P*R,H=P*A-F*y,q=X*U-H*F,tt=H*P-B*U,nt=B*F-X*P;return D*q+O*tt+G*nt<0}function f(E){for(var w=0;w<3;w++){var x=E[w],M=E[(w+1)%3],L=E[(w+2)%3],P=h(x,M);if(P>=2||P===1&&!u(x,M,L))return!1}return!0}function d(E){for(var w=0;w<3;w++){var x=tl(E[w],E[(w+1)%3]);o.has(x)||c.set(x,E[(w+2)%3]),o.set(x,(o.get(x)||0)+1)}l.push(E[0],E[1],E[2])}function p(E){var w=(E[0]>=r?1:0)+(E[1]>=r?1:0)+(E[2]>=r?1:0);return w>=2?1:i}var _=a.map(function(E){return n.get(E)}).filter(function(E){return E.votes>=p(E.v)});_.sort(function(E,w){return w.votes-E.votes});for(var g=new Set,m=0;m<_.length;m++)f(_[m].v)&&(d(_[m].v),g.add(_[m]));for(var v=0;v<a.length;v++){var b=n.get(a[v]);if(!(b.votes!==1||g.has(b))){var S=b.v;if(f(S)){var C=(h(S[0],S[1])===1?1:0)+(h(S[1],S[2])===1?1:0)+(h(S[2],S[0])===1?1:0);C>=2&&(d(S),g.add(b))}}}return Uint32Array.from(l)}return{add:t,accepted:e,get proposed(){return n.size}}}function Cy(n,t){var e=t.segmentsByVertex;if(!e||e.size===0)return[];for(var i=new Map,r=0;r<n.length;r++)i.set(n[r],r+1);for(var s=[],a=0;a<n.length;a++){var o=n[a],c=e.get(o);if(c)for(var l=0;l<c.length;l++){var h=c[l];if(!(h<=o)){var u=i.get(h);u!==void 0&&s.push([a+1,u])}}}return s}function ed(n,t){if(!t||t.count===0)return n.coords;var e=new Float64Array(n.coords.length+t.coords.length);return e.set(n.coords,0),e.set(t.coords,n.coords.length),e}function Iy(n,t,e){for(var i=ed(n,t),r=t.dropped,s=Ry(),a={k:e.k,maxRadiusMultiplier:e.maxRadiusMultiplier,minNeighbours:e.minNeighbours,extra:t.count>0?t:null},o=n.normals,c=0,l=0,h=0,u=0;u<n.count;u++)if(!(r&&r[u])){if(o[3*u]===0&&o[3*u+1]===0&&o[3*u+2]===0){l++;continue}var f=xy(n,u,a);if(!f.valid){l++;continue}var d=f.ids;r&&(d=d.filter(function(S){return S>=n.count||!r[S]}));var p=yy(n,u,d,i);if(d=Sy(n,u,d,p,i,e),d.length<e.minNeighbours){l++;continue}var _=by(p,d,i,u),g=Cy(d,t),m=Ay(_,d,u,p.scale,g);m.constraintFailure&&h++;for(var v=0;v<m.triangles.length;v+=3)s.add(m.triangles[v],m.triangles[v+1],m.triangles[v+2]);c++}var b=s.accepted(e.minVotes,n.count,i);return{triangles:b,report:{pointsUsed:c,pointsSkipped:l,trianglesProposed:s.proposed,trianglesAccepted:b.length/3,constraintFailures:h}}}var Py=Object.freeze({localDelaunay:Iy});function Dy(n,t,e,i){var r=fy(e),s=[],a=n;function o(u){var f=s[u];return f||(f=r.getOrCreate(a[3*u],a[3*u+1],a[3*u+2]),s[u]=f),f}if(i!==void 0)for(var c=0;c<t.length;c++)t[c]>=i&&o(t[c]);for(var l=[],h=0;h<t.length;h+=3)l.push({v0:o(t[h]),v1:o(t[h+1]),v2:o(t[h+2]),mesh:"A",origIdx:h/3});return{pool:r,soup:l,idToPool:s}}function hn(n,t){return Jf(String(n),String(t))}function Ns(n){for(var t=new Map,e=0;e<n.length;e++)for(var i=n[e],r=[i.v0.id,i.v1.id,i.v2.id],s=0;s<3;s++){var a=hn(r[s],r[(s+1)%3]),o=t.get(a);o?o.push(e):t.set(a,[e])}return t}function Ly(n,t){for(var e=new Set,i=0,r=0;r<n.idToPool.length;r++){var s=n.idToPool[r];s&&(e.has(s)?i++:e.add(s))}for(var a=[],o=0,c=0,l=new Set,h=0;h<n.soup.length;h++){var u=n.soup[h],f=u.v0.id,d=u.v1.id,p=u.v2.id;if(f===d||d===p||f===p){o++;continue}var _=[f,d,p].sort(function(F,U){return F-U}).join(",");if(l.has(_)){c++;continue}l.add(_),u.origIdx=a.length,a.push(u)}n.soup.length=0;for(var g=0;g<a.length;g++)n.soup.push(a[g]);var m=Ns(n.soup),v=0,b=0;m.forEach(function(F){F.length===1?v++:F.length>2&&b++});for(var S=t.segments||new Uint32Array(0),C=new Set,E=[],w=0,x=0;x<S.length;x+=2){var M=n.idToPool[S[x]],L=n.idToPool[S[x+1]];if(!(!M||!L)){if(M===L){w++;continue}var P=hn(M.id,L.id);C.has(P)||(C.add(P),E.push({a:M.id,b:L.id}))}}return n.constraintPoolEdges=C,n.constrainedPairs=E,{merged:i,degenerate:o,duplicates:c,boundaryEdges:v,nonManifoldEdges:b,collapsedConstraints:w}}function el(n){var t=n.v1;n.v1=n.v2,n.v2=t}function nl(n,t,e){var i=n.v0.id,r=n.v1.id,s=n.v2.id;return i===t&&r===e||r===t&&s===e||s===t&&i===e}function Uy(n){var t=n.v1.x-n.v0.x,e=n.v1.y-n.v0.y,i=n.v1.z-n.v0.z,r=n.v2.x-n.v0.x,s=n.v2.y-n.v0.y,a=n.v2.z-n.v0.z;return[e*a-i*s,i*r-t*a,t*s-e*r]}function Ny(n,t,e){for(var i=0,r=0;r<t.length;r++){for(var s=n[t[r]],a=(s.v0.x+s.v1.x+s.v2.x)/3,o=(s.v0.y+s.v1.y+s.v2.y)/3,c=(s.v0.z+s.v1.z+s.v2.z)/3,l=null,h=1/0,u=0;u<e.length;u++){var f=e[u],d=(f[0]-a)*(f[0]-a)+(f[1]-o)*(f[1]-o)+(f[2]-c)*(f[2]-c);d<h&&(h=d,l=f)}var p=Uy(s);i+=p[0]*(l[0]-a)+p[1]*(l[1]-o)+p[2]*(l[2]-c)}return i}function il(n,t){for(var e=n.soup,i=Ns(e),r=new Int32Array(e.length).fill(-1),s=[],a=Array.isArray(t)&&t.length>0,o=0;o<e.length;o++)if(r[o]===-1){var c=s.length,l=[o],h=!0,u=!0;r[o]=c;for(var f=0;f<l.length;f++)for(var d=l[f],p=e[d],_=[p.v0.id,p.v1.id,p.v2.id],g=0;g<3;g++){var m=_[g],v=_[(g+1)%3],b=i.get(hn(m,v));if(b.length!==2){u=!1;continue}var S=b[0]===d?b[1]:b[0],C=e[S],E=nl(p,m,v),w=E?nl(C,m,v):nl(C,v,m);r[S]===-1?(w&&el(C),r[S]=c,l.push(S)):w&&(h=!1)}var x;if(a)Ny(e,l,t)<0&&l.forEach(function(F){el(e[F])}),x="viewpoint";else if(u){var M=l.map(function(F){return e[F]});Qf(M)>0&&l.forEach(function(F){el(e[F])}),x="closed"}else x="unresolved";s.push({triangles:l.length,method:x,consistent:h})}var L=new Set(s.map(function(F){return F.method})),P=L.size===1?s[0].method:L.size===0?"unresolved":"mixed";return{perComponent:s,orientation:P}}function Fy(n,t){var e=new Map;function i(p,_,g,m){e.has(p)||e.set(p,[]),e.get(p).push({to:_,key:g,forward:m})}t.forEach(function(p,_){if(p.length===1)for(var g=n[p[0]],m=[g.v0.id,g.v1.id,g.v2.id],v=0;v<3;v++){var b=m[v],S=m[(v+1)%3];if(hn(b,S)===_){i(b,S,_,!0),i(S,b,_,!1);break}}});var r=new Set;function s(p){for(var _=e.get(p),g=null,m=0;m<_.length;m++)if(!r.has(_[m].key)){if(_[m].forward)return _[m];g||(g=_[m])}return g}for(var a=[],o=Array.from(e.keys()).sort(function(p,_){return p-_}),c=0;c<o.length;c++)for(var l=o[c],h;h=s(l);){var u=[l],f=h.forward;r.add(h.key);for(var d=h.to;d!==l&&(u.push(d),h=s(d),!!h);)r.add(h.key),d=h.to;f||(u=[u[0]].concat(u.slice(1).reverse())),a.push(u)}return a}function Oy(n,t){var e=0;return t.forEach(function(i,r){if(i.length===2){var s=i.map(function(a){for(var o=n[a],c=[o.v0.id,o.v1.id,o.v2.id],l=0;l<3;l++)if(hn(c[l],c[(l+1)%3])===r)return c[l];return-1});s[0]===s[1]&&e++}}),e}function rl(n,t){var e=n.soup,i=Ns(e),r=n.constraintPoolEdges||new Set,s=0,a=0,o=0;i.forEach(function(h,u){h.length===1?(s++,r.has(u)||a++):h.length>2&&o++});var c=e.length>0&&s===0&&o===0,l=(n.constrainedPairs||[]).filter(function(h){return i.has(hn(h.a,h.b))});return{closed:c,boundaryLoops:s?Fy(e,i):[],boundaryEdgeCount:a,nonManifoldEdgeCount:o,enclosedVolume:c?Math.abs(Qf(e)):null,constrainedEdges:l,orientation:t,orientationConflicts:Oy(e,i)}}function By(n,t,e){var i=e&&e.maxLoopEdges!==void 0?e.maxLoopEdges:200,r=n.constraintPoolEdges||new Set,s=Ns(n.soup),a=n.pool.getAll(),o=0,c=[];function l(F,U){var y=s.get(hn(F,U));return y?y.length:0}function h(F,U,y){var A={v0:F,v1:U,v2:y,mesh:"A",origIdx:n.soup.length};n.soup.push(A);for(var R=[F.id,U.id,y.id],D=0;D<3;D++){var O=hn(R[D],R[(D+1)%3]);s.has(O)||s.set(O,[]),s.get(O).push(A.origIdx)}o++}for(var u=t.boundaryLoops||[],f=0;f<u.length;f++){for(var d=u[f],p=d.length,_=p>=3&&p<=i&&new Set(d).size===p,g=0;_&&g<p;g++){var m=d[g],v=d[(g+1)%p];(l(m,v)!==1||r.has(hn(m,v)))&&(_=!1)}if(!_){c.push(d);continue}if(p===3){h(a[d[2]],a[d[1]],a[d[0]]);continue}for(var b=0,S=0,C=0,E=0;E<p;E++){var w=a[d[E]];b+=w.x,S+=w.y,C+=w.z}for(var x=n.pool.getOrCreate(b/p,S/p,C/p),M=d.indexOf(x.id)<0,L=0;M&&L<p;L++)l(d[L],x.id)>0&&(M=!1);if(!M){c.push(d);continue}for(var P=0;P<p;P++)h(a[d[(P+1)%p]],a[d[P]],x)}return{added:o,unfilledLoops:c}}function zy(n,t,e){if(!(e>=3))return{filled:0,triangles:0};var i=n.constraintPoolEdges||new Set,r=Ns(n.soup),s=n.pool.getAll(),a=0,o=0;function c(F,U){var y=r.get(hn(F,U));return y?y.length:0}for(var l=t.boundaryLoops||[],h=0;h<l.length;h++){var u=l[h],f=u.length;if(!(f<3||f>e||new Set(u).size!==f)){for(var d=new Set,p=!0,_=0;_<f&&p;_++){var g=hn(u[_],u[(_+1)%f]);d.add(g),(c(u[_],u[(_+1)%f])!==1||i.has(g))&&(p=!1)}if(p){var m=uy(u.map(function(F){return s[F]}));if(m.length===f-2){for(var v=0;v<m.length&&p;v++){var b=[m[v].v0.id,m[v].v1.id,m[v].v2.id];(b[0]===b[1]||b[1]===b[2]||b[0]===b[2])&&(p=!1);for(var S=0;S<3&&p;S++){var C=b[S],E=b[(S+1)%3];!d.has(hn(C,E))&&c(C,E)>0&&(p=!1)}}if(p){for(var w=0;w<m.length;w++){var x={v0:m[w].v0,v1:m[w].v1,v2:m[w].v2,mesh:"A",origIdx:n.soup.length};n.soup.push(x);for(var M=[x.v0.id,x.v1.id,x.v2.id],L=0;L<3;L++){var P=hn(M[L],M[(L+1)%3]);r.has(P)||r.set(P,[]),r.get(P).push(x.origIdx)}o++}a++}}}}}return{filled:a,triangles:o}}function Gy(n,t,e){t.dropped||(t.dropped=new Uint8Array(n.count));for(var i=t.dropped,r=t.coords,s=0,a=0;a<t.count;a++)for(var o=Uc(n.index,[r[3*a],r[3*a+1],r[3*a+2]],e),c=0;c<o.length;c++)i[o[c]]||(i[o[c]]=1,s++);return s}var Vy=Object.freeze({algorithm:"localDelaunay",k:20,maxRadiusMultiplier:3,minNeighbours:6,normalAgreement:.5,maxPlaneOffset:.5,minVotes:2,breaklineSnap:.001,maxGapEdges:6,closeHoles:!1});function ky(n){if(n.x&&n.y&&n.z)return{count:n.count,x:n.x,y:n.y,z:n.z};for(var t=n.count,e=n.positions,i=e instanceof Float32Array?Float32Array:Float64Array,r=new i(t),s=new i(t),a=new i(t),o=0;o<t;o++)r[o]=e[3*o],s[o]=e[3*o+1],a[o]=e[3*o+2];return{count:t,x:r,y:s,z:a}}function Hy(n,t){if(!n||!isFinite(n[0])||!isFinite(n[1])||!isFinite(n[2]))throw new Qi(Ge.INVALID_INPUT,"each viewpoint must be a finite [x, y, z]");return[n[0]-t.x,n[1]-t.y,n[2]-t.z]}function Wy(n,t){var e=Object.assign({},Vy,t||{}),i=Py[e.algorithm];if(!i)throw new Qi(Ge.INVALID_INPUT,"unknown algorithm "+String(e.algorithm));var r=n&&n.count,s=n;if(e.thin){if(!(e.thin>0))throw new Qi(Ge.INVALID_INPUT,"thin must be a distance > 0");s=Lf(ky(n),e.thin,{z:!0})}var a;if(e.denoise){var o=Xo(s,Object.assign({},e,{normals:new Float32Array(3*s.count)})),c=e.denoise===!0?{}:e.denoise,l=VM({count:o.count,positions:o.coords},{method:c.method||"bilateral",k:c.k||16,iterations:c.iterations||1,maxDistance:c.maxDistance||5*o.medianSpacing});a=Xo({count:o.count,positions:l.positions},Object.assign({},e,{origin:{x:0,y:0,z:0}})),a.origin=o.origin}else a=Xo(s,e);var h=a.tolerance,u=e.breaklines&&e.breaklines.length?vy(a,e.breaklines,{tolerance:h,breaklineSnap:e.breaklineSnap}):td(a),f=Gy(a,u,h),d=i(a,u,e),p=Dy(ed(a,u),d.triangles,h,u.firstId);p.origin=a.origin;var _=Ly(p,u),g=e.viewpoints?e.viewpoints.map(function(M){return Hy(M,a.origin)}):null,m=il(p,g),v=rl(p,m.orientation),b=zy(p,v,e.maxGapEdges);b.filled>0&&(m=il(p,g),v=rl(p,m.orientation));var S=[],C=0;if(e.closeHoles){var E=By(p,v,e.closeHoles===!0?{}:e.closeHoles);S=E.unfilledLoops,C=E.added,m=il(p,g),v=rl(p,m.orientation)}for(var w=0,x=0;x<a.count;x++)a.normals[3*x]===0&&a.normals[3*x+1]===0&&a.normals[3*x+2]===0&&w++;return{pool:p.pool,soup:p.soup,origin:a.origin,mesh:v,unfilledLoops:S,report:{pointsInput:r,pointsAfterThin:s.count,pointsMergedAtTolerance:a.mergedAtTolerance,denoised:!!e.denoise,medianSpacing:a.medianSpacing,tolerance:h,zeroNormals:w,pointsUsed:d.report.pointsUsed,pointsSkipped:d.report.pointsSkipped,pointsDropped:u.snapReport.dropped,weldDuplicatesDropped:f,snappedBreaklinePoints:u.snapReport.nearTolerance,breaklineSegments:u.segments.length/2,trianglesProposed:d.report.trianglesProposed,trianglesAccepted:d.report.trianglesAccepted,constraintFailures:d.report.constraintFailures,weld:{merged:_.merged,degenerate:_.degenerate,duplicates:_.duplicates,collapsedConstraints:_.collapsedConstraints},orientation:{perComponent:m.perComponent},gapsFilled:b.filled,holesFilledTriangles:C}}}function Xy(n,t){for(var e=n.origin||{x:0,y:0,z:0},i=n.soup,r=new Map,s=[],a=new Uint32Array(3*i.length),o=0;o<i.length;o++)for(var c=[i[o].v0,i[o].v1,i[o].v2],l=0;l<3;l++){var h=c[l],u=r.get(h.id);u===void 0&&(u=s.length/3,r.set(h.id,u),s.push(h.x+e.x,h.y+e.y,h.z+e.z)),a[3*o+l]=u}return{positions:Float64Array.from(s),index:a}}function $a(n){var t=n>>>0;return function(){t=t+1831565813>>>0;var e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Fs(n){var t=n.length/3;return{count:t,positions:Float64Array.from(n)}}function uc(n,t,e){for(var i=[0,0,0],r=[],s=Math.PI*(3-Math.sqrt(5)),a=0;a<n;a++){var o=1-2*(a+.5)/n,c=Math.sqrt(1-o*o),l=s*a;r.push(i[0]+t*c*Math.cos(l),i[1]+t*o,i[2]+t*c*Math.sin(l))}return Fs(r)}function Yy(n,t,e){for(var i=uc(n,t),r=[],s=i.positions,a=0;a<i.count;a++){var o=s[3*a+1]/t;Math.acos(Math.max(-1,Math.min(1,o)))<e||r.push(s[3*a],s[3*a+1],s[3*a+2])}return Fs(r)}function Zy(n,t,e,i){for(var r=$a(i),s=Math.max(8,Math.round(2*Math.PI*n/e)),a=Math.max(2,Math.round(t/e)+1),o=t/(a-1),c=[],l=0;l<a;l++)for(var h=0;h<s;h++){var u=(r()-.5)*.2,f=(h+l%2*.5+u)/s*2*Math.PI,d=l*o+(l>0&&l<a-1?(r()-.5)*.2*o:0);c.push(d,n*Math.cos(f),n*Math.sin(f))}return Fs(c)}function Ky(n,t,e,i){for(var r=$a(i),s=Math.max(4,Math.round(Math.PI*n/e)),a=Math.max(2,Math.round(t/e)+1),o=t/(a-1),c=[],l=0;l<a;l++)for(var h=0;h<=s;h++){var u=l%2*.5,f=(h+u)/s;if(!(f>1)){h>0&&h<s&&(f+=(r()-.5)*.2/s);var d=f*Math.PI,p=l*o+(l>0&&l<a-1?(r()-.5)*.2*o:0);c.push(p,n*Math.cos(d),n*Math.sin(d))}}return Fs(c)}function qy(n,t,e,i){for(var r=$a(i),s=Math.round(t/e)+1,a=[],o=0;o<2;o++)for(var c=0;c<s;c++)for(var l=0;l<s;l++)a.push(c*e+(r()-.5)*.2*e,l*e+(r()-.5)*.2*e,o*n);return Fs(a)}function jy(n){switch(n){case"sphere":return{cols:uc(3e3,5),breaklines:[],viewpoints:[[0,0,0]]};case"noisySphere":{for(var t=uc(3e3,5),e=$a(5),i=t.positions,r=0;r<t.count;r++){var s=1+(e()-.5)*.06;i[3*r]*=s,i[3*r+1]*=s,i[3*r+2]*=s}return{cols:t,breaklines:[],viewpoints:[[0,0,0]]}}case"capped":return{cols:Yy(3e3,5,.4),breaklines:[],viewpoints:[[0,0,0]]};case"tunnel":{for(var a=[],o=0;o<=20;o+=2)a.push([o,0,0]);return{cols:Zy(2.5,20,.25,1),breaklines:[],viewpoints:a}}case"halfpipe":{for(var c=[],l=0;l<=10;l+=2)c.push([l,0,1]);return{cols:Ky(2.5,10,.25,2),breaklines:[{vertices:[[0,0,2.5],[10,0,2.5]],closedLoop:!1}],viewpoints:c}}case"walls":return{cols:qy(.5,10,.25,1),breaklines:[],viewpoints:[[5,5,.25]]}}throw new Error("unknown source "+n)}async function Jy(n){for(var t=await AM(n),e=await t.readPoints({fields:["x","y","z"]}),i=e.count,r=0,s=0,a=0,o=e.x[0],c=e.y[0],l=e.z[0],h=0;h<i;h++)r+=e.x[h]-o,s+=e.y[h]-c,a+=e.z[h]-l;return{cols:{count:i,x:e.x,y:e.y,z:e.z},breaklines:[],viewpoints:[[o+r/i,c+s/i,l+a/i]]}}var fe=function(n){return document.getElementById(n)},fc=fe("viewport"),Vr=new Iv({antialias:!0});Vr.setPixelRatio(window.devicePixelRatio);fc.appendChild(Vr.domElement);var Zr=new hp;Zr.background=new re(1710618);var _n=new pn(50,1,.01,5e3);_n.up.set(0,0,1);_n.position.set(15,-20,12);var nd=new Dv(_n,Vr.domElement);Zr.add(new Lp(16777215,.45));var id=new af(16777215,1.6);id.position.set(1,-2,3);Zr.add(id);var $y=new af(16777215,.8);_n.add($y);Zr.add(_n);var Ri=new Zi;Zr.add(Ri);var Ie={mesh:null,wire:null,points:null,loops:null,normals:null},dc=null;function rd(){var n=fc.clientWidth,t=fc.clientHeight;Vr.setSize(n,t),_n.aspect=n/Math.max(1,t),_n.updateProjectionMatrix()}window.addEventListener("resize",rd);rd();Vr.setAnimationLoop(function(){nd.update(),Vr.render(Zr,_n)});function Qy(){for(;Ri.children.length;){var n=Ri.children.pop();n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}Object.keys(Ie).forEach(function(t){Ie[t]=null})}function tS(n){for(var t=n.soup,e=new Map,i=[],r=[],s=0;s<t.length;s++)[t[s].v0,t[s].v1,t[s].v2].forEach(function(o){var c=e.get(o.id);c===void 0&&(c=i.length/3,e.set(o.id,c),i.push(o.x,o.y,o.z)),r.push(c)});var a=new Ke;return a.setAttribute("position",new Ye(i,3)),a.setIndex(r),a.computeVertexNormals(),a}function sl(n,t,e){var i=[];n.forEach(function(s){var a=t[s[0]],o=t[s[1]];i.push(a.x,a.y,a.z,o.x,o.y,o.z)});var r=new Ke;return r.setAttribute("position",new Ye(i,3)),new jl(r,new Ua({color:e,depthTest:!1,transparent:!0}))}function eS(n){var t=new Map;return n.forEach(function(e){for(var i=[e.v0.id,e.v1.id,e.v2.id],r=0;r<3;r++){var s=i[r],a=i[(r+1)%3],o=s<a?s+"|"+a:a+"|"+s,c=t.get(o);c?c.n++:t.set(o,{n:1,a:s,b:a})}}),t}function nS(n,t){Qy();var e=n.pool.getAll(),i=tS(n),r=new An(i,new Th({color:9414856,side:li,flatShading:!0,roughness:.8})),s=new An(i,new Th({color:13664304,side:Qe,flatShading:!0,roughness:.8})),a=new Zi;a.add(r,s),Ie.mesh=a,Ri.add(a),Ie.wire=new jl(new Ep(i),new Ua({color:2236962,transparent:!0,opacity:.5})),Ri.add(Ie.wire);var o=new Zi,c=[];n.mesh.boundaryLoops.forEach(function(E){for(var w=0;w<E.length;w++)c.push([E[w],E[(w+1)%E.length]])}),o.add(sl(c,e,16724787)),o.add(sl(n.mesh.constrainedEdges.map(function(E){return[E.a,E.b]}),e,16768256));var l=[];eS(n.soup).forEach(function(E){E.n>2&&l.push([E.a,E.b])}),o.add(sl(l,e,16724991)),o.renderOrder=2,Ie.loops=o,Ri.add(o);var h=[],u=n.report.medianSpacing*.8;n.soup.forEach(function(E,w){if(!(n.soup.length>6e4&&w%4)){var x=E.v1.x-E.v0.x,M=E.v1.y-E.v0.y,L=E.v1.z-E.v0.z,P=E.v2.x-E.v0.x,F=E.v2.y-E.v0.y,U=E.v2.z-E.v0.z,y=M*U-L*F,A=L*P-x*U,R=x*F-M*P,D=Math.hypot(y,A,R)||1,O=(E.v0.x+E.v1.x+E.v2.x)/3,G=(E.v0.y+E.v1.y+E.v2.y)/3,B=(E.v0.z+E.v1.z+E.v2.z)/3;h.push(O,G,B,O+y/D*u,G+A/D*u,B+R/D*u)}});var f=new Ke;f.setAttribute("position",new Ye(h,3)),Ie.normals=new jl(f,new Ua({color:4508774})),Ri.add(Ie.normals);for(var d=n.origin,p=t.count,_=Math.max(1,Math.ceil(p/3e5)),g=[],m=0;m<p;m+=_){var v=t.positions?t.positions[3*m]:t.x[m],b=t.positions?t.positions[3*m+1]:t.y[m],S=t.positions?t.positions[3*m+2]:t.z[m];g.push(v-d.x,b-d.y,S-d.z)}var C=new Ke;C.setAttribute("position",new Ye(g,3)),Ie.points=new yp(C,new Qu({color:13421772,size:2,sizeAttenuation:!1})),Ri.add(Ie.points),sd(),iS(i)}function iS(n){n.computeBoundingSphere();var t=n.boundingSphere;if(t){nd.target.copy(t.center);var e=t.radius*2.6;_n.position.set(t.center.x+e*.6,t.center.y-e*.8,t.center.z+e*.5),_n.near=t.radius/500,_n.far=t.radius*50,_n.updateProjectionMatrix()}}function sd(){Ie.mesh&&(Ie.mesh.visible=fe("showMesh").checked),Ie.wire&&(Ie.wire.visible=fe("showWire").checked),Ie.points&&(Ie.points.visible=fe("showPoints").checked),Ie.loops&&(Ie.loops.visible=fe("showLoops").checked),Ie.normals&&(Ie.normals.visible=fe("showNormals").checked)}["showMesh","showWire","showPoints","showLoops","showNormals"].forEach(function(n){fe(n).addEventListener("change",sd)});function cs(n){return typeof n=="number"?n.toLocaleString(void 0,{maximumFractionDigits:4}):String(n)}function rS(n,t){var e=n.mesh,i=n.report,r=e.boundaryLoops.map(function(s){return s.length}).sort(function(s,a){return a-s});fe("result").innerHTML="closed: <span class='"+(e.closed?"good":"bad")+"'>"+e.closed+"</span><br>volume: <b>"+(e.enclosedVolume===null?"— (open)":cs(e.enclosedVolume)+" m³")+"</b><br>triangles: <b>"+cs(n.soup.length)+"</b><br>boundary loops: <b>"+r.length+"</b>"+(r.length?" (largest "+r.slice(0,5).join(", ")+")":"")+"<br>boundary edges: <b>"+cs(e.boundaryEdgeCount)+"</b><br>non-manifold edges: <span class='"+(e.nonManifoldEdgeCount?"bad":"good")+"'>"+e.nonManifoldEdgeCount+"</span><br>break line edges: <b>"+e.constrainedEdges.length+"</b> / "+i.breaklineSegments+"<br>orientation: <b>"+e.orientation+"</b>"+(e.orientationConflicts?" (<span class='bad'>"+e.orientationConflicts+" fold edges</span>)":"")+"<br>components: <b>"+i.orientation.perComponent.length+"</b><br>time: <b>"+cs(t)+" ms</b>",fe("report").innerHTML=[["points in",i.pointsInput],["after thin",i.pointsAfterThin],["denoised",i.denoised],["median spacing",i.medianSpacing],["weld tolerance",i.tolerance],["zero normals",i.zeroNormals],["points used",i.pointsUsed],["points skipped",i.pointsSkipped],["points dropped (break lines)",i.pointsDropped],["points dropped (weld duplicates)",i.weldDuplicatesDropped],["triangles proposed",i.trianglesProposed],["triangles accepted",i.trianglesAccepted],["gaps filled",i.gapsFilled],["hole-fill triangles",i.holesFilledTriangles],["welded ids",i.weld.merged],["degenerate removed",i.weld.degenerate],["duplicates removed",i.weld.duplicates],["constraint failures",i.constraintFailures],["collapsed break line edges",i.weld.collapsedConstraints]].map(function(s){return s[0]+": <b>"+cs(s[1])+"</b>"}).join("<br>")}function sS(n){var t=function(i){return Number(fe(i).value)},e={k:t("k"),minVotes:t("minVotes"),normalAgreement:t("normalAgreement"),maxPlaneOffset:t("maxPlaneOffset"),maxGapEdges:t("maxGapEdges"),breaklines:n.breaklines};return t("thin")>0&&(e.thin=t("thin")),t("denoise")>0&&(e.denoise={iterations:t("denoise")}),fe("viewpoint").checked&&(e.viewpoints=n.viewpoints),fe("closeHoles").checked&&(e.closeHoles={}),e}var Ha=null,Ai=null;async function aS(){var n=fe("source").value;return n==="file"?Ha?Jy(Ha):(fe("file").click(),null):jy(n)}async function Qa(){fe("error").textContent="",fe("processing-overlay").classList.add("active"),await new Promise(function(i){setTimeout(i,30)});try{if(Ai=Ai||await aS(),!Ai)return;var n=performance.now(),t=Wy(Ai.cols,sS(Ai)),e=Math.round(performance.now()-n);dc=t,nS(t,Ai.cols),rS(t,e)}catch(i){console.error(i),fe("error").textContent=(i.code?i.code+": ":"")+i.message}finally{fe("processing-overlay").classList.remove("active")}}fe("build").addEventListener("click",Qa);fe("source").addEventListener("change",function(){Ai=null;var n=fe("source").value==="file";fe("thin").value=n?"0.05":"0",fe("denoise").value=n?"3":"0",fe("viewpoint").checked=!n&&fe("source").value!=="walls",n?fe("file").click():Qa()});fe("file").addEventListener("change",function(){Ha=fe("file").files[0]||null,Ai=null,Ha&&Qa()});fe("exportObj").addEventListener("click",function(){if(dc){for(var n=Xy(dc),t=["# trimesh-build-js export"],e=0;e<n.positions.length;e+=3)t.push("v "+n.positions[e].toFixed(4)+" "+n.positions[e+1].toFixed(4)+" "+n.positions[e+2].toFixed(4));for(var i=0;i<n.index.length;i+=3)t.push("f "+(n.index[i]+1)+" "+(n.index[i+1]+1)+" "+(n.index[i+2]+1));var r=new Blob([t.join(`
`)],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(r),s.download="trimesh-build-js.obj",s.click(),URL.revokeObjectURL(s.href)}});fe("viewpoint").checked=!0;Qa();
