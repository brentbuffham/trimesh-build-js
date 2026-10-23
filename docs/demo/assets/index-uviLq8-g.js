(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const uc="183",Tr={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,Xc=1,hd=2,va=1,ud=2,cs=3,oi=0,$e=1,ei=2,si=0,Ar=1,Yc=2,Zc=3,Kc=4,fd=5,ki=100,dd=101,pd=102,md=103,gd=104,_d=200,vd=201,xd=202,Md=203,sl=204,al=205,yd=206,Sd=207,Ed=208,bd=209,Td=210,Ad=211,wd=212,Rd=213,Cd=214,ol=0,ll=1,cl=2,Dr=3,hl=4,ul=5,fl=6,dl=7,Tu=0,Id=1,Pd=2,zn=0,Au=1,wu=2,Ru=3,Cu=4,Iu=5,Pu=6,Du=7,Lu=300,$i=301,Lr=302,no=303,io=304,Wa=306,pl=1e3,ii=1001,ml=1002,Ge=1003,Dd=1004,Bs=1005,We=1006,ro=1007,Wi=1008,ln=1009,Uu=1010,Nu=1011,ys=1012,fc=1013,kn=1014,On=1015,li=1016,dc=1017,pc=1018,Ss=1020,Fu=35902,Ou=35899,Bu=1021,zu=1022,bn=1023,ci=1026,Xi=1027,Gu=1028,mc=1029,Ur=1030,gc=1031,_c=1033,xa=33776,Ma=33777,ya=33778,Sa=33779,gl=35840,_l=35841,vl=35842,xl=35843,Ml=36196,yl=37492,Sl=37496,El=37488,bl=37489,Tl=37490,Al=37491,wl=37808,Rl=37809,Cl=37810,Il=37811,Pl=37812,Dl=37813,Ll=37814,Ul=37815,Nl=37816,Fl=37817,Ol=37818,Bl=37819,zl=37820,Gl=37821,Vl=36492,kl=36494,Hl=36495,Wl=36283,Xl=36284,Yl=36285,Zl=36286,Ld=3200,Vu=0,Ud=1,Ai="",fn="srgb",Nr="srgb-linear",Ia="linear",pe="srgb",ir=7680,qc=519,Nd=512,Fd=513,Od=514,vc=515,Bd=516,zd=517,xc=518,Gd=519,jc=35044,Jc="300 es",Bn=2e3,Es=2001;function Vd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kd(){const n=Pa("canvas");return n.style.display="block",n}const $c={};function Qc(...n){const t="THREE."+n.shift();console.log(t,...n)}function ku(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xt(...n){n=ku(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function le(...n){n=ku(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Da(...n){const t=n.join(" ");t in $c||($c[t]=!0,Xt(...n))}function Hd(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Wd={[ol]:ll,[cl]:fl,[hl]:dl,[Dr]:ul,[ll]:ol,[fl]:cl,[dl]:hl,[ul]:Dr};class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ea=Math.PI/180,Kl=180/Math.PI;function ws(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function Xd(n,t){return(n%t+t)%t}function so(n,t,e){return(1-e)*n+e*t}function Zr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yd={DEG2RAD:Ea};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ci{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(u!==_||c!==f||l!==d||h!==p){let g=c*f+l*d+h*p+u*_;g<0&&(f=-f,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);m=Math.sin(m*v)/y,o=Math.sin(o*v)/y,c=c*m+f*o,l=l*m+d*o,h=h*m+p*o,u=u*m+_*o}else{c=c*m+f*o,l=l*m+d*o,h=h*m+p*o,u=u*m+_*o;const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],p=s[a+3];return t[e]=o*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-o*d,t[e+2]=l*p+h*d+o*f-c*u,t[e+3]=h*p-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),f=c(i/2),d=c(r/2),p=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new q,th=new Ci;class jt{constructor(t,e,i,r,s,a,o,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],_=r[0],g=r[3],m=r[6],v=r[1],y=r[4],S=r[7],C=r[2],T=r[5],I=r[8];return s[0]=a*_+o*v+c*C,s[3]=a*g+o*y+c*T,s[6]=a*m+o*S+c*I,s[1]=l*_+h*v+u*C,s[4]=l*g+h*y+u*T,s[7]=l*m+h*S+u*I,s[2]=f*_+d*v+p*C,s[5]=f*g+d*y+p*T,s[8]=f*m+d*S+p*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,p=e*u+i*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(r*l-h*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=d*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new jt,eh=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zd(){const n={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pe&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ai?Ia:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nr]:{primaries:t,whitePoint:i,transfer:Ia,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const se=Zd();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class Kd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rr===void 0&&(rr=Pa("canvas")),rr.width=t.width,rr.height=t.height;const r=rr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=rr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ai(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ai(e[i]/255)*255):e[i]=ai(e[i]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qd=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lo(r[a].image)):s.push(lo(r[a]))}else s=lo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let jd=0;const co=new q;class Qe extends Qi{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=ii,r=ii,s=We,a=Wi,o=bn,c=ln,l=Qe.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ws(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pl:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pl:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Lu;Qe.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,S=(d+1)/2,C=(m+1)/2,T=(h+f)/4,I=(u+_)/4,x=(p+g)/4;return y>S&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=I/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=I/s,r=x/s),this.set(i,r,s,e),this}let v=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends Qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Qe(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Mc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Jd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Hu extends Qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class be{constructor(t,e,i,r,s,a,o,c,l,h,u,f,d,p,_,g){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,u,f,d,p,_,g)}set(t,e,i,r,s,a,o,c,l,h,u,f,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/sr.setFromMatrixColumn(t,0).length(),s=1/sr.setFromMatrixColumn(t,1).length(),a=1/sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,p=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=p+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f+_*o,e[4]=p*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,p=o*h,_=o*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,d=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qd,t,tp)}lookAt(t,e,i){const r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),di.crossVectors(i,an),di.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),di.crossVectors(i,an)),di.normalize(),zs.crossVectors(an,di),r[0]=di.x,r[4]=zs.x,r[8]=an.x,r[1]=di.y,r[5]=zs.y,r[9]=an.y,r[2]=di.z,r[6]=zs.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],_=i[6],g=i[10],m=i[14],v=i[3],y=i[7],S=i[11],C=i[15],T=r[0],I=r[4],x=r[8],M=r[12],N=r[1],P=r[5],B=r[9],F=r[13],E=r[2],A=r[6],w=r[10],D=r[14],U=r[3],k=r[7],O=r[11],X=r[15];return s[0]=a*T+o*N+c*E+l*U,s[4]=a*I+o*P+c*A+l*k,s[8]=a*x+o*B+c*w+l*O,s[12]=a*M+o*F+c*D+l*X,s[1]=h*T+u*N+f*E+d*U,s[5]=h*I+u*P+f*A+d*k,s[9]=h*x+u*B+f*w+d*O,s[13]=h*M+u*F+f*D+d*X,s[2]=p*T+_*N+g*E+m*U,s[6]=p*I+_*P+g*A+m*k,s[10]=p*x+_*B+g*w+m*O,s[14]=p*M+_*F+g*D+m*X,s[3]=v*T+y*N+S*E+C*U,s[7]=v*I+y*P+S*A+C*k,s[11]=v*x+y*B+S*w+C*O,s[15]=v*M+y*F+S*D+C*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],v=c*d-l*f,y=o*d-l*u,S=o*f-c*u,C=a*d-l*h,T=a*f-c*h,I=a*u-o*h;return e*(_*v-g*y+m*S)-i*(p*v-g*C+m*T)+r*(p*y-_*C+m*I)-s*(p*S-_*T+g*I)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=e*o-i*a,y=e*c-r*a,S=e*l-s*a,C=i*c-r*o,T=i*l-s*o,I=r*l-s*c,x=h*_-u*p,M=h*g-f*p,N=h*m-d*p,P=u*g-f*_,B=u*m-d*_,F=f*m-d*g,E=v*F-y*B+S*P+C*N-T*M+I*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=(o*F-c*B+l*P)*A,t[1]=(r*B-i*F-s*P)*A,t[2]=(_*I-g*T+m*C)*A,t[3]=(f*T-u*I-d*C)*A,t[4]=(c*N-a*F-l*M)*A,t[5]=(e*F-r*N+s*M)*A,t[6]=(g*S-p*I-m*y)*A,t[7]=(h*I-f*S+d*y)*A,t[8]=(a*B-o*N+l*x)*A,t[9]=(i*N-e*B-s*x)*A,t[10]=(p*T-_*S+m*v)*A,t[11]=(u*S-h*T-d*v)*A,t[12]=(o*M-a*P-c*x)*A,t[13]=(e*P-i*M+r*x)*A,t[14]=(_*y-p*C-g*v)*A,t[15]=(h*C-u*y+f*v)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,p=s*u,_=a*h,g=a*u,m=o*u,v=c*l,y=c*h,S=c*u,C=i.x,T=i.y,I=i.z;return r[0]=(1-(_+m))*C,r[1]=(d+S)*C,r[2]=(p-y)*C,r[3]=0,r[4]=(d-S)*T,r[5]=(1-(f+m))*T,r[6]=(g+v)*T,r[7]=0,r[8]=(p+y)*I,r[9]=(g-v)*I,r[10]=(1-(f+_))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),e.identity(),this;let a=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),c=sr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Mn.copy(this);const l=1/a,h=1/o,u=1/c;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,r,s,a,o=Bn,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let p,_;if(c)p=s/(a-s),_=a*s/(a-s);else if(o===Bn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Es)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Bn,c=!1){const l=this.elements,h=2/(e-t),u=2/(i-r),f=-(e+t)/(e-t),d=-(i+r)/(i-r);let p,_;if(c)p=1/(a-s),_=a/(a-s);else if(o===Bn)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===Es)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const sr=new q,Mn=new be,Qd=new q(0,0,0),tp=new q(1,1,1),di=new q,zs=new q,an=new q,ih=new be,rh=new Ci;class Hn{constructor(t=0,e=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ep=0;const sh=new q,ar=new Ci,qn=new be,Gs=new q,Kr=new q,np=new q,ip=new Ci,ah=new q(1,0,0),oh=new q(0,1,0),lh=new q(0,0,1),ch={type:"added"},rp={type:"removed"},or={type:"childadded",child:null},ho={type:"childremoved",child:null};class Oe extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new q,e=new Hn,i=new Ci,r=new q(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gs.copy(t):Gs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Kr,Gs,this.up):qn.lookAt(Gs,Kr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(qn),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),or.child=t,this.dispatchEvent(or),or.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Oe.DEFAULT_UP=new q(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yi extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sp={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function fo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class re{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=se.workingColorSpace){if(t=Xd(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=fo(a,s,t+1/3),this.g=fo(a,s,t),this.b=fo(a,s,t-1/3)}return se.colorSpaceToWorking(this,r),this}setStyle(t,e=fn){function i(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const i=Xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return se.workingToColorSpace(He.copy(this),t),Math.round(ee(He.r*255,0,255))*65536+Math.round(ee(He.g*255,0,255))*256+Math.round(ee(He.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(He.copy(this),e);const i=He.r,r=He.g,s=He.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=fn){se.workingToColorSpace(He.copy(this),t);const e=He.r,i=He.g,r=He.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Vs);const i=so(pi.h,Vs.h,e),r=so(pi.s,Vs.s,e),s=so(pi.l,Vs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new re;re.NAMES=Xu;class ap extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yn=new q,jn=new q,po=new q,Jn=new q,lr=new q,cr=new q,hh=new q,mo=new q,go=new q,_o=new q,vo=new Ae,xo=new Ae,Mo=new Ae;class En{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),yn.subVectors(t,e),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){yn.subVectors(r,e),jn.subVectors(i,e),po.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(jn),c=yn.dot(po),l=jn.dot(jn),h=jn.dot(po),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,p=(a*h-o*c)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return vo.setScalar(0),xo.setScalar(0),Mo.setScalar(0),vo.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,i),Mo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(vo,s.x),a.addScaledVector(xo,s.y),a.addScaledVector(Mo,s.z),a}static isFrontFacing(t,e,i,r){return yn.subVectors(i,e),jn.subVectors(t,e),yn.cross(jn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),yn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return En.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;lr.subVectors(r,i),cr.subVectors(s,i),mo.subVectors(t,i);const c=lr.dot(mo),l=cr.dot(mo);if(c<=0&&l<=0)return e.copy(i);go.subVectors(t,r);const h=lr.dot(go),u=cr.dot(go);if(h>=0&&u<=h)return e.copy(r);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(lr,a);_o.subVectors(t,s);const d=lr.dot(_o),p=cr.dot(_o);if(p>=0&&d<=p)return e.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(cr,o);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return hh.subVectors(s,r),o=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(hh,o);const m=1/(g+_+f);return a=_*m,o=f*m,e.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Rs{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Hs.subVectors(this.max,qr),hr.subVectors(t.a,qr),ur.subVectors(t.b,qr),fr.subVectors(t.c,qr),mi.subVectors(ur,hr),gi.subVectors(fr,ur),Di.subVectors(hr,fr);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Di.z,Di.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Di.z,0,-Di.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Di.y,Di.x,0];return!yo(e,hr,ur,fr,Hs)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,hr,ur,fr,Hs))?!1:(Ws.crossVectors(mi,gi),e=[Ws.x,Ws.y,Ws.z],yo(e,hr,ur,fr,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new q,new q,new q,new q,new q,new q,new q,new q],Sn=new q,ks=new Rs,hr=new q,ur=new q,fr=new q,mi=new q,gi=new q,Di=new q,qr=new q,Hs=new q,Ws=new q,Li=new q;function yo(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Li.fromArray(n,s);const o=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Re=new q,Xs=new qt;let op=0;class Vn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=jc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}}class Yu extends Vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zu extends Vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Xe extends Vn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const lp=new Rs,jr=new q,So=new q;class Cs{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):lp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jr.subVectors(t,this.center);const e=jr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(jr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jr.copy(t.center).add(So)),this.expandByPoint(jr.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cp=0;const hn=new be,Eo=new Oe,dr=new q,on=new Rs,Jr=new Rs,Ne=new q;class Ze extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vd(t)?Zu:Yu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(on.min,Jr.min),on.expandByPoint(Ne),Ne.addVectors(on.max,Jr.max),on.expandByPoint(Ne)):(on.expandByPoint(Jr.min),on.expandByPoint(Jr.max))}on.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ne.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ne));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(dr.fromBufferAttribute(t,l),Ne.add(dr)),r=Math.max(r,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new q,c[x]=new q;const l=new q,h=new q,u=new q,f=new qt,d=new qt,p=new qt,_=new q,g=new q;function m(x,M,N){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,N),f.fromBufferAttribute(s,x),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,N),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),o[x].add(_),o[M].add(_),o[N].add(_),c[x].add(g),c[M].add(g),c[N].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,M=v.length;x<M;++x){const N=v[x],P=N.start,B=N.count;for(let F=P,E=P+B;F<E;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new q,S=new q,C=new q,T=new q;function I(x){C.fromBufferAttribute(r,x),T.copy(C);const M=o[x];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(T,M);const P=S.dot(c[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,P)}for(let x=0,M=v.length;x<M;++x){const N=v[x],P=N.start,B=N.count;for(let F=P,E=P+B;F<E;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,a=new q,o=new q,c=new q,l=new q,h=new q,u=new q;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new Vn(f,h,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let hp=0;class tr extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Ar,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=al,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==al&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qn=new q,bo=new q,Ys=new q,_i=new q,To=new q,Zs=new q,Ao=new q;class Xa{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){bo.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(bo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ys),o=_i.dot(this.direction),c=-_i.dot(Ys),l=_i.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*c-o,f=a*o-c,p=s*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(bo).addScaledVector(Ys,f),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,r,s){To.subVectors(e,t),Zs.subVectors(i,t),Ao.crossVectors(To,Zs);let a=this.direction.dot(Ao),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const c=o*this.direction.dot(Zs.crossVectors(_i,Zs));if(c<0)return null;const l=o*this.direction.dot(To.cross(_i));if(l<0||c+l>a)return null;const h=-o*_i.dot(Ao);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ku extends tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const uh=new be,Ui=new Xa,Ks=new Cs,fh=new q,qs=new q,js=new q,Js=new q,wo=new q,$s=new q,dh=new q,Qs=new q;class Tn extends Oe{constructor(t=new Ze,e=new Ku){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){$s.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(wo.fromBufferAttribute(u,t),a?$s.addScaledVector(wo,h):$s.addScaledVector(wo.sub(e),h))}e.add($s)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(s),Ui.copy(t.ray).recast(t.near),!(Ks.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Ks,fh)===null||Ui.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(s).invert(),Ui.copy(t.ray).applyMatrix4(uh),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=v,C=y;S<C;S+=3){const T=o.getX(S),I=o.getX(S+1),x=o.getX(S+2);r=ta(this,m,t,i,l,h,u,T,I,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);r=ta(this,a,t,i,l,h,u,v,y,S),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let S=v,C=y;S<C;S+=3){const T=S,I=S+1,x=S+2;r=ta(this,m,t,i,l,h,u,T,I,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=g,y=g+1,S=g+2;r=ta(this,a,t,i,l,h,u,v,y,S),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function up(n,t,e,i,r,s,a,o){let c;if(t.side===$e?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===oi,o),c===null)return null;Qs.copy(o),Qs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:n}}function ta(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,qs),n.getVertexPosition(c,js),n.getVertexPosition(l,Js);const h=up(n,t,e,i,qs,js,Js,dh);if(h){const u=new q;En.getBarycoord(dh,qs,js,Js,u),r&&(h.uv=En.getInterpolatedAttribute(r,o,c,l,u,new qt)),s&&(h.uv1=En.getInterpolatedAttribute(s,o,c,l,u,new qt)),a&&(h.normal=En.getInterpolatedAttribute(a,o,c,l,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new q,materialIndex:0};En.getNormal(qs,js,Js,f.normal),h.face=f,h.barycoord=u}return h}class fp extends Qe{constructor(t=null,e=1,i=1,r,s,a,o,c,l=Ge,h=Ge,u,f){super(null,a,o,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ro=new q,dp=new q,pp=new jt;class bi{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ro.subVectors(i,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pp.getNormalMatrix(t),r=this.coplanarPoint(Ro).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Cs,mp=new qt(.5,.5),ea=new q;class yc{constructor(t=new bi,e=new bi,i=new bi,r=new bi,s=new bi,a=new bi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],v=s[12],y=s[13],S=s[14],C=s[15];if(r[0].setComponents(l-a,d-h,m-p,C-v).normalize(),r[1].setComponents(l+a,d+h,m+p,C+v).normalize(),r[2].setComponents(l+o,d+u,m+_,C+y).normalize(),r[3].setComponents(l-o,d-u,m-_,C-y).normalize(),i)r[4].setComponents(c,f,g,S).normalize(),r[5].setComponents(l-c,d-f,m-g,C-S).normalize();else if(r[4].setComponents(l-c,d-f,m-g,C-S).normalize(),e===Bn)r[5].setComponents(l+c,d+f,m+g,C+S).normalize();else if(e===Es)r[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);const e=mp.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ea.x=r.normal.x>0?t.max.x:t.min.x,ea.y=r.normal.y>0?t.max.y:t.min.y,ea.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class La extends tr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ua=new q,Na=new q,ph=new be,$r=new Xa,na=new Cs,Co=new q,mh=new q;class gp extends Oe{constructor(t=new Ze,e=new La){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ua.fromBufferAttribute(e,r-1),Na.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ua.distanceTo(Na);t.setAttribute("lineDistance",new Xe(i,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(r),na.radius+=s,t.ray.intersectsSphere(na)===!1)return;ph.copy(r).invert(),$r.copy(t.ray).applyMatrix4(ph);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=l){const m=h.getX(_),v=h.getX(_+1),y=ia(this,t,$r,c,m,v,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(d),m=ia(this,t,$r,c,_,g,p-1);m&&e.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=l){const m=ia(this,t,$r,c,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=ia(this,t,$r,c,p-1,d,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ia(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Ua.fromBufferAttribute(o,r),Na.fromBufferAttribute(o,s),e.distanceSqToSegment(Ua,Na,Co,mh)>i)return;Co.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Co);if(!(l<t.near||l>t.far))return{distance:l,point:mh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const gh=new q,_h=new q;class ql extends gp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)gh.fromBufferAttribute(e,r),_h.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gh.distanceTo(_h);t.setAttribute("lineDistance",new Xe(i,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qu extends tr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vh=new be,jl=new Xa,ra=new Cs,sa=new q;class _p extends Oe{constructor(t=new Ze,e=new qu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),ra.radius+=s,t.ray.intersectsSphere(ra)===!1)return;vh.copy(r).invert(),jl.copy(t.ray).applyMatrix4(vh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,_=d;p<_;p++){const g=l.getX(p);sa.fromBufferAttribute(u,g),xh(sa,g,c,r,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,_=d;p<_;p++)sa.fromBufferAttribute(u,p),xh(sa,p,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xh(n,t,e,i,r,s,a){const o=jl.distanceSqToPoint(n);if(o<e){const c=new q;jl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ju extends Qe{constructor(t=[],e=$i,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bs extends Qe{constructor(t,e,i=kn,r,s,a,o=Ge,c=Ge,l,h=ci,u=1){if(h!==ci&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vp extends bs{constructor(t,e=kn,i=$i,r,s,a=Ge,o=Ge,c,l=ci){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ju extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Is extends Ze{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,i,e,t,a,s,0),p("z","y","x",1,-1,i,e,-t,a,s,1),p("x","z","y",1,1,t,i,e,r,a,2),p("x","z","y",1,-1,t,i,-e,r,a,3),p("x","y","z",1,-1,t,e,i,r,s,4),p("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function p(_,g,m,v,y,S,C,T,I,x,M){const N=S/I,P=C/x,B=S/2,F=C/2,E=T/2,A=I+1,w=x+1;let D=0,U=0;const k=new q;for(let O=0;O<w;O++){const X=O*P-F;for(let H=0;H<A;H++){const K=H*N-B;k[_]=K*v,k[g]=X*y,k[m]=E,l.push(k.x,k.y,k.z),k[_]=0,k[g]=0,k[m]=T>0?1:-1,h.push(k.x,k.y,k.z),u.push(H/I),u.push(1-O/x),D+=1}}for(let O=0;O<x;O++)for(let X=0;X<I;X++){const H=f+X+A*O,K=f+X+A*(O+1),et=f+(X+1)+A*(O+1),nt=f+(X+1)+A*O;c.push(H,K,nt),c.push(K,et,nt),U+=6}o.addGroup(d,U,M),d+=U,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ya extends Ze{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=t/o,f=e/c,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*f-a;for(let y=0;y<l;y++){const S=y*u-s;p.push(S,-v,0),_.push(0,0,1),g.push(y/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){const y=v+l*m,S=v+l*(m+1),C=v+1+l*(m+1),T=v+1+l*m;d.push(y,S,T),d.push(S,C,T)}this.setIndex(d),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.width,t.height,t.widthSegments,t.heightSegments)}}class xp extends Ze{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,r=new q,s=new q;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],f=u.start,d=u.count;for(let p=f,_=f+d;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),v=o.getX(p+(g+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,v),Mh(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Mh(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Mh(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}function Fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=Fr(n[e]);for(const r in i)t[r]=i[r]}return t}function Mp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $u(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const yp={clone:Fr,merge:Je};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class bp extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yh extends tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tp extends tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ap extends tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qu extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Io=new be,Sh=new q,Eh=new q;class wp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Es||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const aa=new q,oa=new Ci,Rn=new q;class tf extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,oa,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(aa,oa,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vi=new q,bh=new qt,Th=new qt;class dn extends tf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Th),e.subVectors(Th,bh)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Sc extends tf{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rp extends wp{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ef extends Qu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Rp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Cp extends Qu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const pr=-90,mr=1;class Ip extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(pr,mr,t,e);r.layers=this.layers,this.add(r);const s=new dn(pr,mr,t,e);s.layers=this.layers,this.add(s);const a=new dn(pr,mr,t,e);a.layers=this.layers,this.add(a);const o=new dn(pr,mr,t,e);o.layers=this.layers,this.add(o);const c=new dn(pr,mr,t,e);c.layers=this.layers,this.add(c);const l=new dn(pr,mr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Pp extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ah{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Dp extends Qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Xt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wh(n,t,e,i){const r=Lp(i);switch(e){case Bu:return n*t;case Gu:return n*t/r.components*r.byteLength;case mc:return n*t/r.components*r.byteLength;case Ur:return n*t*2/r.components*r.byteLength;case gc:return n*t*2/r.components*r.byteLength;case zu:return n*t*3/r.components*r.byteLength;case bn:return n*t*4/r.components*r.byteLength;case _c:return n*t*4/r.components*r.byteLength;case xa:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ya:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:case xl:return Math.max(n,16)*Math.max(t,8)/4;case gl:case vl:return Math.max(n,8)*Math.max(t,8)/2;case Ml:case yl:case El:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sl:case Tl:case Al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Vl:case kl:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Yl:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lp(n){switch(n){case ln:case Uu:return{byteLength:1,components:1};case ys:case Nu:case li:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case kn:case fc:case On:return{byteLength:4,components:1};case Fu:case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);function nf(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Up(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,qp=`#ifdef USE_BUMPMAP
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rm=`#define PI 3.141592653589793
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
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,am=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
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
#endif`,Lm=`uniform sampler2D dfgLUT;
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
}`,Um=`
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
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
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ig=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
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
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ng=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`#include <common>
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
}`,Vg=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,Jg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,Qg=`#define MATCAP
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
}`,t0=`#define NORMAL
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
}`,e0=`#define NORMAL
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
}`,n0=`#define PHONG
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
}`,i0=`#define PHONG
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
}`,r0=`#define STANDARD
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
}`,s0=`#define STANDARD
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
}`,a0=`#define TOON
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
}`,o0=`#define TOON
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
}`,l0=`uniform float size;
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,u0=`uniform vec3 color;
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
}`,f0=`uniform float rotation;
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
}`,d0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Np,alphahash_pars_fragment:Fp,alphamap_fragment:Op,alphamap_pars_fragment:Bp,alphatest_fragment:zp,alphatest_pars_fragment:Gp,aomap_fragment:Vp,aomap_pars_fragment:kp,batching_pars_vertex:Hp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:Yp,bsdfs:Zp,iridescence_fragment:Kp,bumpmap_pars_fragment:qp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Qp,color_fragment:tm,color_pars_fragment:em,color_pars_vertex:nm,color_vertex:im,common:rm,cube_uv_reflection_fragment:sm,defaultnormal_vertex:am,displacementmap_pars_vertex:om,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:hm,colorspace_fragment:um,colorspace_pars_fragment:fm,envmap_fragment:dm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:wm,envmap_vertex:_m,fog_vertex:vm,fog_pars_vertex:xm,fog_fragment:Mm,fog_pars_fragment:ym,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:Em,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Tm,lights_pars_begin:Am,lights_toon_fragment:Rm,lights_toon_pars_fragment:Cm,lights_phong_fragment:Im,lights_phong_pars_fragment:Pm,lights_physical_fragment:Dm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Gm,map_fragment:Vm,map_pars_fragment:km,map_particle_fragment:Hm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:Ym,morphinstance_vertex:Zm,morphcolor_vertex:Km,morphnormal_vertex:qm,morphtarget_pars_vertex:jm,morphtarget_vertex:Jm,normal_fragment_begin:$m,normal_fragment_maps:Qm,normal_pars_fragment:tg,normal_pars_vertex:eg,normal_vertex:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:ag,iridescence_pars_fragment:og,opaque_fragment:lg,packing:cg,premultiplied_alpha_fragment:hg,project_vertex:ug,dithering_fragment:fg,dithering_pars_fragment:dg,roughnessmap_fragment:pg,roughnessmap_pars_fragment:mg,shadowmap_pars_fragment:gg,shadowmap_pars_vertex:_g,shadowmap_vertex:vg,shadowmask_pars_fragment:xg,skinbase_vertex:Mg,skinning_pars_vertex:yg,skinning_vertex:Sg,skinnormal_vertex:Eg,specularmap_fragment:bg,specularmap_pars_fragment:Tg,tonemapping_fragment:Ag,tonemapping_pars_fragment:wg,transmission_fragment:Rg,transmission_pars_fragment:Cg,uv_pars_fragment:Ig,uv_pars_vertex:Pg,uv_vertex:Dg,worldpos_vertex:Lg,background_vert:Ug,background_frag:Ng,backgroundCube_vert:Fg,backgroundCube_frag:Og,cube_vert:Bg,cube_frag:zg,depth_vert:Gg,depth_frag:Vg,distance_vert:kg,distance_frag:Hg,equirect_vert:Wg,equirect_frag:Xg,linedashed_vert:Yg,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:qg,meshlambert_vert:jg,meshlambert_frag:Jg,meshmatcap_vert:$g,meshmatcap_frag:Qg,meshnormal_vert:t0,meshnormal_frag:e0,meshphong_vert:n0,meshphong_frag:i0,meshphysical_vert:r0,meshphysical_frag:s0,meshtoon_vert:a0,meshtoon_frag:o0,points_vert:l0,points_frag:c0,shadow_vert:h0,shadow_frag:u0,sprite_vert:f0,sprite_frag:d0},bt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Nn={basic:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new re(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Je([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Je([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Je([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Je([bt.common,bt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Je([bt.lights,bt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Nn.physical={uniforms:Je([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const la={r:0,b:0,g:0},Fi=new Hn,p0=new be;function m0(n,t,e,i,r,s){const a=new re(0);let o=r===!0?0:1,c,l,h=null,u=0,f=null;function d(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const S=v.backgroundBlurriness>0;y=t.get(y,S)}return y}function p(v){let y=!1;const S=d(v);S===null?g(a,o):S&&S.isColor&&(g(S,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,y){const S=d(y);S&&(S.isCubeTexture||S.mapping===Wa)?(l===void 0&&(l=new Tn(new Is(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Fr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(p0.makeRotationFromEuler(Fi)),l.material.toneMapped=se.getTransfer(S.colorSpace)!==pe,(h!==S||u!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Tn(new Ya(2,2),new Wn({name:"BackgroundMaterial",uniforms:Fr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=se.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,y){v.getRGB(la,$u(n)),e.buffers.color.setClear(la.r,la.g,la.b,y,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:_,dispose:m}}function g0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(P,B,F,E,A){let w=!1;const D=u(P,E,F,B);s!==D&&(s=D,l(s.object)),w=d(P,E,F,A),w&&p(P,E,F,A),A!==null&&t.update(A,n.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,S(P,B,F,E),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(A).buffer))}function c(){return n.createVertexArray()}function l(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,B,F,E){const A=E.wireframe===!0;let w=i[B.id];w===void 0&&(w={},i[B.id]=w);const D=P.isInstancedMesh===!0?P.id:0;let U=w[D];U===void 0&&(U={},w[D]=U);let k=U[F.id];k===void 0&&(k={},U[F.id]=k);let O=k[A];return O===void 0&&(O=f(c()),k[A]=O),O}function f(P){const B=[],F=[],E=[];for(let A=0;A<e;A++)B[A]=0,F[A]=0,E[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:E,object:P,attributes:{},index:null}}function d(P,B,F,E){const A=s.attributes,w=B.attributes;let D=0;const U=F.getAttributes();for(const k in U)if(U[k].location>=0){const X=A[k];let H=w[k];if(H===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),X===void 0||X.attribute!==H||H&&X.data!==H.data)return!0;D++}return s.attributesNum!==D||s.index!==E}function p(P,B,F,E){const A={},w=B.attributes;let D=0;const U=F.getAttributes();for(const k in U)if(U[k].location>=0){let X=w[k];X===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const H={};H.attribute=X,X&&X.data&&(H.data=X.data),A[k]=H,D++}s.attributes=A,s.attributesNum=D,s.index=E}function _(){const P=s.newAttributes;for(let B=0,F=P.length;B<F;B++)P[B]=0}function g(P){m(P,0)}function m(P,B){const F=s.newAttributes,E=s.enabledAttributes,A=s.attributeDivisors;F[P]=1,E[P]===0&&(n.enableVertexAttribArray(P),E[P]=1),A[P]!==B&&(n.vertexAttribDivisor(P,B),A[P]=B)}function v(){const P=s.newAttributes,B=s.enabledAttributes;for(let F=0,E=B.length;F<E;F++)B[F]!==P[F]&&(n.disableVertexAttribArray(F),B[F]=0)}function y(P,B,F,E,A,w,D){D===!0?n.vertexAttribIPointer(P,B,F,A,w):n.vertexAttribPointer(P,B,F,E,A,w)}function S(P,B,F,E){_();const A=E.attributes,w=F.getAttributes(),D=B.defaultAttributeValues;for(const U in w){const k=w[U];if(k.location>=0){let O=A[U];if(O===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){const X=O.normalized,H=O.itemSize,K=t.get(O);if(K===void 0)continue;const et=K.buffer,nt=K.type,V=K.bytesPerElement,G=nt===n.INT||nt===n.UNSIGNED_INT||O.gpuType===fc;if(O.isInterleavedBufferAttribute){const Q=O.data,at=Q.stride,rt=O.offset;if(Q.isInstancedInterleavedBuffer){for(let j=0;j<k.locationSize;j++)m(k.location+j,Q.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<k.locationSize;j++)g(k.location+j);n.bindBuffer(n.ARRAY_BUFFER,et);for(let j=0;j<k.locationSize;j++)y(k.location+j,H/k.locationSize,nt,X,at*V,(rt+H/k.locationSize*j)*V,G)}else{if(O.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q,O.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Q=0;Q<k.locationSize;Q++)g(k.location+Q);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Q=0;Q<k.locationSize;Q++)y(k.location+Q,H/k.locationSize,nt,X,H*V,H/k.locationSize*Q*V,G)}}else if(D!==void 0){const X=D[U];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(k.location,X);break;case 3:n.vertexAttrib3fv(k.location,X);break;case 4:n.vertexAttrib4fv(k.location,X);break;default:n.vertexAttrib1fv(k.location,X)}}}}v()}function C(){M();for(const P in i){const B=i[P];for(const F in B){const E=B[F];for(const A in E){const w=E[A];for(const D in w)h(w[D].object),delete w[D];delete E[A]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const B=i[P.id];for(const F in B){const E=B[F];for(const A in E){const w=E[A];for(const D in w)h(w[D].object),delete w[D];delete E[A]}}delete i[P.id]}function I(P){for(const B in i){const F=i[B];for(const E in F){const A=F[E];if(A[P.id]===void 0)continue;const w=A[P.id];for(const D in w)h(w[D].object),delete w[D];delete A[P.id]}}}function x(P){for(const B in i){const F=i[B],E=P.isInstancedMesh===!0?P.id:0,A=F[E];if(A!==void 0){for(const w in A){const D=A[w];for(const U in D)h(D[U].object),delete D[U];delete A[w]}delete F[E],Object.keys(F).length===0&&delete i[B]}}}function M(){N(),a=!0,s!==r&&(s=r,l(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function _0(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)a(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];e.update(p,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function v0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==bn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ln&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==On&&!x)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Xt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:C,samples:T}}function x0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new bi,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!r||p===null||p.length===0||s&&!g)s?h(null):l();else{const v=s?0:i,y=v*4;let S=m.clippingState||null;c.value=S,S=h(p,f,y,d);for(let C=0;C!==y;++C)S[C]=e[C];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,S=d;y!==_;++y,S+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const Ri=4,Rh=[.125,.215,.35,.446,.526,.582],Hi=20,M0=256,Qr=new Sc,Ch=new re;let Po=null,Do=0,Lo=0,Uo=!1;const y0=new q;class Ih{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=y0}=s;Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Po,Do,Lo),this._renderer.xr.enabled=Uo,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Po=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:li,format:bn,colorSpace:Nr,depthBuffer:!1},r=Ph(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=S0(s)),this._blurMaterial=b0(s,t,e),this._ggxMaterial=E0(s,t,e)}return r}_compileMaterial(t){const e=new Tn(new Ze,t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,i,r,s){const c=new dn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ch),u.toneMapping=zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new Is,new Ku({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Ch),m=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):S===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const C=this._cubeSize;gr(r,S*C,y>2?C:0,C,C),u.setRenderTarget(r),m&&u.render(_,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===$i||t.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;gr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Qr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,d=u*f,{_lodMax:p}=this,_=this._sizeLods[i],g=3*_*(i>p-Ri?i-p+Ri:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,gr(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,Qr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-i,gr(t,g,m,3*_,2*_),r.setRenderTarget(t),r.render(o,Qr)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&le("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=l;const f=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),_=s/p,g=isFinite(s)?1+Math.floor(h*_):Hi;g>Hi&&Xt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);const m=[];let v=0;for(let I=0;I<Hi;++I){const x=I/_,M=Math.exp(-x*x/2);m.push(M),I===0?v+=M:I<g&&(v+=2*M)}for(let I=0;I<m.length;I++)m[I]=m[I]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-i;const S=this._sizeLods[r],C=3*S*(r>y-Ri?r-y+Ri:0),T=4*(this._cubeSize-S);gr(e,C,T,3*S,2*S),c.setRenderTarget(e),c.render(u,Qr)}}function S0(n){const t=[],e=[],i=[];let r=n;const s=n-Ri+1+Rh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-Ri?c=Rh[a-n+Ri-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*d),y=new Float32Array(g*p*d),S=new Float32Array(m*p*d);for(let T=0;T<d;T++){const I=T%3*2/3-1,x=T>2?0:-1,M=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];v.set(M,_*p*T),y.set(f,g*p*T);const N=[T,T,T,T,T,T];S.set(N,m*p*T)}const C=new Ze;C.setAttribute("position",new Vn(v,_)),C.setAttribute("uv",new Vn(y,g)),C.setAttribute("faceIndex",new Vn(S,m)),i.push(new Tn(C,null)),r>Ri&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Ph(n,t,e){const i=new Gn(n,t,e);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function E0(n,t,e){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function b0(n,t,e){const i=new Float32Array(Hi),r=new q(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Za(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Dh(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Lh(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}class rf extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new ju(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Is(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:si});s.uniforms.tEquirect.value=e;const a=new Tn(r,s),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=We),new Ip(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function T0(n){let t=new WeakMap,e=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===no||d===io)if(t.has(f)){const p=t.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new rf(p.height);return _.fromEquirectangularTexture(n,f),t.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===no||d===io,_=d===$i||d===Lr;if(p||_){let g=e.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Ih(n)),g=p?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return p&&v&&v.height>0||_&&v&&c(v)?(i===null&&(i=new Ih(n)),g=p?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===no?f.mapping=$i:d===io&&(f.mapping=Lr),f}function c(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function A0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Da("WebGLRenderer: "+i+" extension not supported."),r}}}function w0(n,t,e,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let y=0,S=v.length;y<S;y+=3){const C=v[y+0],T=v[y+1],I=v[y+2];f.push(C,T,T,I,I,C)}}else{const v=p.array;_=p.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const C=y+0,T=y+1,I=y+2;f.push(C,T,T,I,I,C)}}const g=new(p.count>=65535?Zu:Yu)(f,1);g.version=_;const m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function R0(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*a),e.update(d,i,1)}function l(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,f*a,p),e.update(d,i,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,i,1)}function u(f,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v]*_[v];e.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function C0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function I0(n,t,e){const i=new WeakMap,r=new Ae;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let M=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let S=o.attributes.position.count*y,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*C*4*u),I=new Hu(T,S,C,u);I.type=On,I.needsUpdate=!0;const x=y*4;for(let N=0;N<u;N++){const P=g[N],B=m[N],F=v[N],E=S*C*4*N;for(let A=0;A<P.count;A++){const w=A*x;d===!0&&(r.fromBufferAttribute(P,A),T[E+w+0]=r.x,T[E+w+1]=r.y,T[E+w+2]=r.z,T[E+w+3]=0),p===!0&&(r.fromBufferAttribute(B,A),T[E+w+4]=r.x,T[E+w+5]=r.y,T[E+w+6]=r.z,T[E+w+7]=0),_===!0&&(r.fromBufferAttribute(F,A),T[E+w+8]=r.x,T[E+w+9]=r.y,T[E+w+10]=r.z,T[E+w+11]=F.itemSize===4?r.w:1)}}f={count:u,texture:I,size:new qt(S,C)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const p=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function P0(n,t,e,i,r){let s=new WeakMap;function a(l){const h=r.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const D0={[Au]:"LINEAR_TONE_MAPPING",[wu]:"REINHARD_TONE_MAPPING",[Ru]:"CINEON_TONE_MAPPING",[Cu]:"ACES_FILMIC_TONE_MAPPING",[Pu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Iu]:"CUSTOM_TONE_MAPPING"};function L0(n,t,e,i,r){const s=new Gn(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Gn(t,e,{type:li,depthBuffer:!1,stencilBuffer:!1}),o=new Ze;o.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xe([0,2,0,0,2,0],2));const c=new bp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Tn(o,c),h=new Sc(-1,1,1,-1,0,1);let u=null,f=null,d=!1,p,_=null,g=[],m=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let S=0;S<g.length;S++){const C=g[S];C.setSize&&C.setSize(v,y)}},this.setEffects=function(v){g=v,m=g.length>0&&g[0].isRenderPass===!0;const y=s.width,S=s.height;for(let C=0;C<g.length;C++){const T=g[C];T.setSize&&T.setSize(y,S)}},this.begin=function(v,y){if(d||v.toneMapping===zn&&g.length===0)return!1;if(_=y,y!==null){const S=y.width,C=y.height;(s.width!==S||s.height!==C)&&this.setSize(S,C)}return m===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=zn,!0},this.hasRenderPass=function(){return m},this.end=function(v,y){v.toneMapping=p,d=!0;let S=s,C=a;for(let T=0;T<g.length;T++){const I=g[T];if(I.enabled!==!1&&(I.render(v,C,S,y),I.needsSwap!==!1)){const x=S;S=C,C=x}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,c.defines={},se.getTransfer(u)===pe&&(c.defines.SRGB_TRANSFER="");const T=D0[f];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(l,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const sf=new Qe,Jl=new bs(1,1),af=new Hu,of=new $d,lf=new ju,Uh=[],Nh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),Bh=new Float32Array(4);function Vr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Uh[r];if(s===void 0&&(s=new Float32Array(r),Uh[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ka(n,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function U0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function N0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function F0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function O0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function B0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Bh.set(i),n.uniformMatrix2fv(this.addr,!1,Bh),Le(e,i)}}function z0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Oh.set(i),n.uniformMatrix3fv(this.addr,!1,Oh),Le(e,i)}}function G0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Fh.set(i),n.uniformMatrix4fv(this.addr,!1,Fh),Le(e,i)}}function V0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function k0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function H0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function X0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function Z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function q0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Jl.compareFunction=e.isReversedDepthBuffer()?xc:vc,s=Jl):s=sf,e.setTexture2D(t||s,r)}function j0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||of,r)}function J0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||lf,r)}function $0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||af,r)}function Q0(n){switch(n){case 5126:return U0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return G0;case 5124:case 35670:return V0;case 35667:case 35671:return k0;case 35668:case 35672:return H0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return Y0;case 36295:return Z0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return $0}}function t_(n,t){n.uniform1fv(this.addr,t)}function e_(n,t){const e=Vr(t,this.size,2);n.uniform2fv(this.addr,e)}function n_(n,t){const e=Vr(t,this.size,3);n.uniform3fv(this.addr,e)}function i_(n,t){const e=Vr(t,this.size,4);n.uniform4fv(this.addr,e)}function r_(n,t){const e=Vr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function s_(n,t){const e=Vr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function a_(n,t){const e=Vr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function o_(n,t){n.uniform1iv(this.addr,t)}function l_(n,t){n.uniform2iv(this.addr,t)}function c_(n,t){n.uniform3iv(this.addr,t)}function h_(n,t){n.uniform4iv(this.addr,t)}function u_(n,t){n.uniform1uiv(this.addr,t)}function f_(n,t){n.uniform2uiv(this.addr,t)}function d_(n,t){n.uniform3uiv(this.addr,t)}function p_(n,t){n.uniform4uiv(this.addr,t)}function m_(n,t,e){const i=this.cache,r=t.length,s=Ka(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Jl:a=sf;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function g_(n,t,e){const i=this.cache,r=t.length,s=Ka(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||of,s[a])}function __(n,t,e){const i=this.cache,r=t.length,s=Ka(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||lf,s[a])}function v_(n,t,e){const i=this.cache,r=t.length,s=Ka(e,r);De(i,s)||(n.uniform1iv(this.addr,s),Le(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||af,s[a])}function x_(n){switch(n){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return r_;case 35675:return s_;case 35676:return a_;case 5124:case 35670:return o_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return v_}}class M_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Q0(e.type)}}class y_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x_(e.type)}}class S_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const No=/(\w+)(\])?(\[|\.)?/g;function zh(n,t){n.seq.push(t),n.map[t.id]=t}function E_(n,t,e){const i=n.name,r=i.length;for(No.lastIndex=0;;){const s=No.exec(i),a=No.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){zh(e,l===void 0?new M_(o,n,t):new y_(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new S_(o),zh(e,u)),e=u}}}class ba{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);E_(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Gh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const b_=37297;let T_=0;function A_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Vh=new jt;function w_(n){se._getMatrix(Vh,se.workingColorSpace,n);const t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case Ia:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+A_(n.getShaderSource(t),o)}else return s}function R_(n,t){const e=w_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const C_={[Au]:"Linear",[wu]:"Reinhard",[Ru]:"Cineon",[Cu]:"ACESFilmic",[Pu]:"AgX",[Du]:"Neutral",[Iu]:"Custom"};function I_(n,t){const e=C_[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new q;function P_(){se.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function L_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function U_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function hs(n){return n!==""}function Hh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(N_,O_)}const F_=new Map;function O_(n,t){let e=Jt[t];if(e===void 0){const i=F_.get(t);if(i!==void 0)e=Jt[i],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}const B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace(B_,z_)}function z_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const G_={[va]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function V_(n){return G_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k_={[$i]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};function H_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":k_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const W_={[Lr]:"ENVMAP_MODE_REFRACTION"};function X_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":W_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Y_={[Tu]:"ENVMAP_BLENDING_MULTIPLY",[Id]:"ENVMAP_BLENDING_MIX",[Pd]:"ENVMAP_BLENDING_ADD"};function Z_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Y_[n.combine]||"ENVMAP_BLENDING_NONE"}function K_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function q_(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=V_(e),l=H_(e),h=X_(e),u=Z_(e),f=K_(e),d=D_(e),p=L_(s),_=r.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(hs).join(`
`),m.length>0&&(m+=`
`)):(g=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),m=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==zn?I_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,R_("linearToOutputTexel",e.outputColorSpace),P_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=$l(a),a=Hh(a,e),a=Wh(a,e),o=$l(o),o=Hh(o,e),o=Wh(o,e),a=Xh(a),o=Xh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+g+a,S=v+m+o,C=Gh(r,r.VERTEX_SHADER,y),T=Gh(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function I(P){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(C)||"",E=r.getShaderInfoLog(T)||"",A=B.trim(),w=F.trim(),D=E.trim();let U=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,T);else{const O=kh(r,C,"vertex"),X=kh(r,T,"fragment");le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+A+`
`+O+`
`+X)}else A!==""?Xt("WebGLProgram: Program Info Log:",A):(w===""||D==="")&&(k=!1);k&&(P.diagnostics={runnable:U,programLog:A,vertexShader:{log:w,prefix:g},fragmentShader:{log:D,prefix:m}})}r.deleteShader(C),r.deleteShader(T),x=new ba(r,_),M=U_(r,_)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,b_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let j_=0;class J_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $_(t),e.set(t,i)),i}}class $_{constructor(t){this.id=j_++,this.code=t,this.usedTimes=0}}function Q_(n,t,e,i,r,s){const a=new Wu,o=new J_,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,M,N,P,B){const F=P.fog,E=B.geometry,A=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,w=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=t.get(x.envMap||A,w),U=D&&D.mapping===Wa?D.image.height:null,k=d[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const O=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,X=O!==void 0?O.length:0;let H=0;E.morphAttributes.position!==void 0&&(H=1),E.morphAttributes.normal!==void 0&&(H=2),E.morphAttributes.color!==void 0&&(H=3);let K,et,nt,V;if(k){const de=Nn[k];K=de.vertexShader,et=de.fragmentShader}else K=x.vertexShader,et=x.fragmentShader,o.update(x),nt=o.getVertexShaderID(x),V=o.getFragmentShaderID(x);const G=n.getRenderTarget(),Q=n.state.buffers.depth.getReversed(),at=B.isInstancedMesh===!0,rt=B.isBatchedMesh===!0,j=!!x.map,ht=!!x.matcap,ct=!!D,xt=!!x.aoMap,gt=!!x.lightMap,dt=!!x.bumpMap,Rt=!!x.normalMap,z=!!x.displacementMap,te=!!x.emissiveMap,Yt=!!x.metalnessMap,ne=!!x.roughnessMap,Dt=x.anisotropy>0,L=x.clearcoat>0,b=x.dispersion>0,Y=x.iridescence>0,ot=x.sheen>0,lt=x.transmission>0,st=Dt&&!!x.anisotropyMap,Ut=L&&!!x.clearcoatMap,Mt=L&&!!x.clearcoatNormalMap,kt=L&&!!x.clearcoatRoughnessMap,Wt=Y&&!!x.iridescenceMap,pt=Y&&!!x.iridescenceThicknessMap,_t=ot&&!!x.sheenColorMap,Nt=ot&&!!x.sheenRoughnessMap,Ot=!!x.specularMap,Ct=!!x.specularColorMap,$t=!!x.specularIntensityMap,W=lt&&!!x.transmissionMap,yt=lt&&!!x.thicknessMap,vt=!!x.gradientMap,Lt=!!x.alphaMap,mt=x.alphaTest>0,it=!!x.alphaHash,Ft=!!x.extensions;let Zt=zn;x.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Zt=n.toneMapping);const Me={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:K,fragmentShader:et,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:rt,batchingColor:rt&&B._colorsTexture!==null,instancing:at,instancingColor:at&&B.instanceColor!==null,instancingMorph:at&&B.morphTexture!==null,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Nr,alphaToCoverage:!!x.alphaToCoverage,map:j,matcap:ht,envMap:ct,envMapMode:ct&&D.mapping,envMapCubeUVHeight:U,aoMap:xt,lightMap:gt,bumpMap:dt,normalMap:Rt,displacementMap:z,emissiveMap:te,normalMapObjectSpace:Rt&&x.normalMapType===Ud,normalMapTangentSpace:Rt&&x.normalMapType===Vu,metalnessMap:Yt,roughnessMap:ne,anisotropy:Dt,anisotropyMap:st,clearcoat:L,clearcoatMap:Ut,clearcoatNormalMap:Mt,clearcoatRoughnessMap:kt,dispersion:b,iridescence:Y,iridescenceMap:Wt,iridescenceThicknessMap:pt,sheen:ot,sheenColorMap:_t,sheenRoughnessMap:Nt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:$t,transmission:lt,transmissionMap:W,thicknessMap:yt,gradientMap:vt,opaque:x.transparent===!1&&x.blending===Ar&&x.alphaToCoverage===!1,alphaMap:Lt,alphaTest:mt,alphaHash:it,combine:x.combine,mapUv:j&&p(x.map.channel),aoMapUv:xt&&p(x.aoMap.channel),lightMapUv:gt&&p(x.lightMap.channel),bumpMapUv:dt&&p(x.bumpMap.channel),normalMapUv:Rt&&p(x.normalMap.channel),displacementMapUv:z&&p(x.displacementMap.channel),emissiveMapUv:te&&p(x.emissiveMap.channel),metalnessMapUv:Yt&&p(x.metalnessMap.channel),roughnessMapUv:ne&&p(x.roughnessMap.channel),anisotropyMapUv:st&&p(x.anisotropyMap.channel),clearcoatMapUv:Ut&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ot&&p(x.specularMap.channel),specularColorMapUv:Ct&&p(x.specularColorMap.channel),specularIntensityMapUv:$t&&p(x.specularIntensityMap.channel),transmissionMapUv:W&&p(x.transmissionMap.channel),thicknessMapUv:yt&&p(x.thicknessMap.channel),alphaMapUv:Lt&&p(x.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Rt||Dt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!E.attributes.uv&&(j||Lt),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||E.attributes.normal===void 0&&Rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:B.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:H,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:j&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===pe,decodeVideoTextureEmissive:te&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ei,flipSided:x.side===$e,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ft&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&x.extensions.multiDraw===!0||rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)M.push(N),M.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(M,x),v(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function v(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){const M=d[x.type];let N;if(M){const P=Nn[M];N=yp.clone(P.uniforms)}else N=x.uniforms;return N}function S(x,M){let N=h.get(M);return N!==void 0?++N.usedTimes:(N=new q_(n,M,x,r),l.push(N),h.set(M,N)),N}function C(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function I(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:C,releaseShaderCache:T,programs:l,dispose:I}}function tv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function ev(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Zh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Kh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,_,g,m){let v=n[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=m),t++,v}function c(f,d,p,_,g,m){const v=o(f,d,p,_,g,m);p.transmission>0?i.push(v):p.transparent===!0?r.push(v):e.push(v)}function l(f,d,p,_,g,m){const v=o(f,d,p,_,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?r.unshift(v):e.unshift(v)}function h(f,d){e.length>1&&e.sort(f||ev),i.length>1&&i.sort(d||Zh),r.length>1&&r.sort(d||Zh)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:u,sort:h}}function nv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Kh,n.set(i,[a])):r>=s.length?(a=new Kh,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function iv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new re};break;case"SpotLight":e={position:new q,direction:new q,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function rv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let sv=0;function av(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ov(n){const t=new iv,e=rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new q);const r=new q,s=new be,a=new be;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,v=0,y=0,S=0,C=0,T=0,I=0;l.sort(av);for(let M=0,N=l.length;M<N;M++){const P=l[M],B=P.color,F=P.intensity,E=P.distance;let A=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ur?A=P.shadow.map.texture:A=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*F,u+=B.g*F,f+=B.b*F;else if(P.isLightProbe){for(let w=0;w<9;w++)i.probe[w].addScaledVector(P.sh.coefficients[w],F);I++}else if(P.isDirectionalLight){const w=t.get(P);if(w.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const D=P.shadow,U=e.get(P);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=A,i.directionalShadowMatrix[d]=P.shadow.matrix,v++}i.directional[d]=w,d++}else if(P.isSpotLight){const w=t.get(P);w.position.setFromMatrixPosition(P.matrixWorld),w.color.copy(B).multiplyScalar(F),w.distance=E,w.coneCos=Math.cos(P.angle),w.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),w.decay=P.decay,i.spot[_]=w;const D=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,D.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=D.matrix,P.castShadow){const U=e.get(P);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=A,S++}_++}else if(P.isRectAreaLight){const w=t.get(P);w.color.copy(B).multiplyScalar(F),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=w,g++}else if(P.isPointLight){const w=t.get(P);if(w.color.copy(P.color).multiplyScalar(P.intensity),w.distance=P.distance,w.decay=P.decay,P.castShadow){const D=P.shadow,U=e.get(P);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,U.shadowCameraNear=D.camera.near,U.shadowCameraFar=D.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=A,i.pointShadowMatrix[p]=P.shadow.matrix,y++}i.point[p]=w,p++}else if(P.isHemisphereLight){const w=t.get(P);w.skyColor.copy(P.color).multiplyScalar(F),w.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[m]=w,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==S||x.numSpotMaps!==C||x.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=S,x.numSpotMaps=C,x.numLightProbes=I,i.version=sv++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const y=l[m];if(y.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),u++}else if(y.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:i}}function qh(n){const t=new ov(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function lv(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new qh(n),t.set(r,[o])):s>=a.length?(o=new qh(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`,uv=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],fv=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],jh=new be,ts=new q,Fo=new q;function dv(n,t,e){let i=new yc;const r=new qt,s=new qt,a=new Ae,o=new Tp,c=new Ap,l={},h=e.maxTextureSize,u={[oi]:$e,[$e]:oi,[ei]:ei},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ze;p.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tn(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=va;let m=this.type;this.render=function(T,I,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===ud&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=va);const M=n.getRenderTarget(),N=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),B=n.state;B.setBlending(si),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=m!==this.type;F&&I.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(A=>A.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,A=T.length;E<A;E++){const w=T[E],D=w.shadow;if(D===void 0){Xt("WebGLShadowMap:",w,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const U=D.getFrameExtents();r.multiply(U),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,D.mapSize.y=s.y));const k=n.state.buffers.depth.getReversed();if(D.camera._reversedDepth=k,D.map===null||F===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===cs){if(w.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new Gn(r.x,r.y,{format:Ur,type:li,minFilter:We,magFilter:We,generateMipmaps:!1}),D.map.texture.name=w.name+".shadowMap",D.map.depthTexture=new bs(r.x,r.y,On),D.map.depthTexture.name=w.name+".shadowMapDepth",D.map.depthTexture.format=ci,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ge,D.map.depthTexture.magFilter=Ge}else w.isPointLight?(D.map=new rf(r.x),D.map.depthTexture=new vp(r.x,kn)):(D.map=new Gn(r.x,r.y),D.map.depthTexture=new bs(r.x,r.y,kn)),D.map.depthTexture.name=w.name+".shadowMap",D.map.depthTexture.format=ci,this.type===va?(D.map.depthTexture.compareFunction=k?xc:vc,D.map.depthTexture.minFilter=We,D.map.depthTexture.magFilter=We):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Ge,D.map.depthTexture.magFilter=Ge);D.camera.updateProjectionMatrix()}const O=D.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<O;X++){if(D.map.isWebGLCubeRenderTarget)n.setRenderTarget(D.map,X),n.clear();else{X===0&&(n.setRenderTarget(D.map),n.clear());const H=D.getViewport(X);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),B.viewport(a)}if(w.isPointLight){const H=D.camera,K=D.matrix,et=w.distance||H.far;et!==H.far&&(H.far=et,H.updateProjectionMatrix()),ts.setFromMatrixPosition(w.matrixWorld),H.position.copy(ts),Fo.copy(H.position),Fo.add(uv[X]),H.up.copy(fv[X]),H.lookAt(Fo),H.updateMatrixWorld(),K.makeTranslation(-ts.x,-ts.y,-ts.z),jh.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),D._frustum.setFromProjectionMatrix(jh,H.coordinateSystem,H.reversedDepth)}else D.updateMatrices(w);i=D.getFrustum(),S(I,x,D.camera,w,this.type)}D.isPointLightShadow!==!0&&this.type===cs&&v(D,x),D.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,N,P)};function v(T,I){const x=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gn(r.x,r.y,{format:Ur,type:li})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,x,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,x,d,_,null)}function y(T,I,x,M){let N=null;const P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)N=P;else if(N=x.isPointLight===!0?c:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=N.uuid,F=I.uuid;let E=l[B];E===void 0&&(E={},l[B]=E);let A=E[F];A===void 0&&(A=N.clone(),E[F]=A,I.addEventListener("dispose",C)),N=A}if(N.visible=I.visible,N.wireframe=I.wireframe,M===cs?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:u[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=n.properties.get(N);B.light=x}return N}function S(T,I,x,M,N){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===cs)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const F=t.update(T),E=T.material;if(Array.isArray(E)){const A=F.groups;for(let w=0,D=A.length;w<D;w++){const U=A[w],k=E[U.materialIndex];if(k&&k.visible){const O=y(T,k,M,N);T.onBeforeShadow(n,T,I,x,F,O,U),n.renderBufferDirect(x,null,F,O,T,U),T.onAfterShadow(n,T,I,x,F,O,U)}}}else if(E.visible){const A=y(T,E,M,N);T.onBeforeShadow(n,T,I,x,F,A,null),n.renderBufferDirect(x,null,F,A,T,null),T.onAfterShadow(n,T,I,x,F,A,null)}}const B=T.children;for(let F=0,E=B.length;F<E;F++)S(B[F],I,x,M,N)}function C(T){T.target.removeEventListener("dispose",C);for(const x in l){const M=l[x],N=T.target.uuid;N in M&&(M[N].dispose(),delete M[N])}}}function pv(n,t){function e(){let W=!1;const yt=new Ae;let vt=null;const Lt=new Ae(0,0,0,0);return{setMask:function(mt){vt!==mt&&!W&&(n.colorMask(mt,mt,mt,mt),vt=mt)},setLocked:function(mt){W=mt},setClear:function(mt,it,Ft,Zt,Me){Me===!0&&(mt*=Zt,it*=Zt,Ft*=Zt),yt.set(mt,it,Ft,Zt),Lt.equals(yt)===!1&&(n.clearColor(mt,it,Ft,Zt),Lt.copy(yt))},reset:function(){W=!1,vt=null,Lt.set(-1,0,0,0)}}}function i(){let W=!1,yt=!1,vt=null,Lt=null,mt=null;return{setReversed:function(it){if(yt!==it){const Ft=t.get("EXT_clip_control");it?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),yt=it;const Zt=mt;mt=null,this.setClear(Zt)}},getReversed:function(){return yt},setTest:function(it){it?G(n.DEPTH_TEST):Q(n.DEPTH_TEST)},setMask:function(it){vt!==it&&!W&&(n.depthMask(it),vt=it)},setFunc:function(it){if(yt&&(it=Wd[it]),Lt!==it){switch(it){case ol:n.depthFunc(n.NEVER);break;case ll:n.depthFunc(n.ALWAYS);break;case cl:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case hl:n.depthFunc(n.EQUAL);break;case ul:n.depthFunc(n.GEQUAL);break;case fl:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Lt=it}},setLocked:function(it){W=it},setClear:function(it){mt!==it&&(mt=it,yt&&(it=1-it),n.clearDepth(it))},reset:function(){W=!1,vt=null,Lt=null,mt=null,yt=!1}}}function r(){let W=!1,yt=null,vt=null,Lt=null,mt=null,it=null,Ft=null,Zt=null,Me=null;return{setTest:function(de){W||(de?G(n.STENCIL_TEST):Q(n.STENCIL_TEST))},setMask:function(de){yt!==de&&!W&&(n.stencilMask(de),yt=de)},setFunc:function(de,Zn,Kn){(vt!==de||Lt!==Zn||mt!==Kn)&&(n.stencilFunc(de,Zn,Kn),vt=de,Lt=Zn,mt=Kn)},setOp:function(de,Zn,Kn){(it!==de||Ft!==Zn||Zt!==Kn)&&(n.stencilOp(de,Zn,Kn),it=de,Ft=Zn,Zt=Kn)},setLocked:function(de){W=de},setClear:function(de){Me!==de&&(n.clearStencil(de),Me=de)},reset:function(){W=!1,yt=null,vt=null,Lt=null,mt=null,it=null,Ft=null,Zt=null,Me=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,v=null,y=null,S=null,C=null,T=null,I=new re(0,0,0),x=0,M=!1,N=null,P=null,B=null,F=null,E=null;const A=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,D=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(U)[1]),w=D>=1):U.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),w=D>=2);let k=null,O={};const X=n.getParameter(n.SCISSOR_BOX),H=n.getParameter(n.VIEWPORT),K=new Ae().fromArray(X),et=new Ae().fromArray(H);function nt(W,yt,vt,Lt){const mt=new Uint8Array(4),it=n.createTexture();n.bindTexture(W,it),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<vt;Ft++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,Lt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(yt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return it}const V={};V[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(n.DEPTH_TEST),a.setFunc(Dr),dt(!1),Rt(Xc),G(n.CULL_FACE),xt(si);function G(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function Q(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function at(W,yt){return u[W]!==yt?(n.bindFramebuffer(W,yt),u[W]=yt,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function rt(W,yt){let vt=d,Lt=!1;if(W){vt=f.get(yt),vt===void 0&&(vt=[],f.set(yt,vt));const mt=W.textures;if(vt.length!==mt.length||vt[0]!==n.COLOR_ATTACHMENT0){for(let it=0,Ft=mt.length;it<Ft;it++)vt[it]=n.COLOR_ATTACHMENT0+it;vt.length=mt.length,Lt=!0}}else vt[0]!==n.BACK&&(vt[0]=n.BACK,Lt=!0);Lt&&n.drawBuffers(vt)}function j(W){return p!==W?(n.useProgram(W),p=W,!0):!1}const ht={[ki]:n.FUNC_ADD,[dd]:n.FUNC_SUBTRACT,[pd]:n.FUNC_REVERSE_SUBTRACT};ht[md]=n.MIN,ht[gd]=n.MAX;const ct={[_d]:n.ZERO,[vd]:n.ONE,[xd]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[Td]:n.SRC_ALPHA_SATURATE,[Ed]:n.DST_COLOR,[yd]:n.DST_ALPHA,[Md]:n.ONE_MINUS_SRC_COLOR,[al]:n.ONE_MINUS_SRC_ALPHA,[bd]:n.ONE_MINUS_DST_COLOR,[Sd]:n.ONE_MINUS_DST_ALPHA,[Ad]:n.CONSTANT_COLOR,[wd]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Cd]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(W,yt,vt,Lt,mt,it,Ft,Zt,Me,de){if(W===si){_===!0&&(Q(n.BLEND),_=!1);return}if(_===!1&&(G(n.BLEND),_=!0),W!==fd){if(W!==g||de!==M){if((m!==ki||S!==ki)&&(n.blendEquation(n.FUNC_ADD),m=ki,S=ki),de)switch(W){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yc:n.blendFunc(n.ONE,n.ONE);break;case Zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:le("WebGLState: Invalid blending: ",W);break}else switch(W){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zc:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",W);break}v=null,y=null,C=null,T=null,I.set(0,0,0),x=0,g=W,M=de}return}mt=mt||yt,it=it||vt,Ft=Ft||Lt,(yt!==m||mt!==S)&&(n.blendEquationSeparate(ht[yt],ht[mt]),m=yt,S=mt),(vt!==v||Lt!==y||it!==C||Ft!==T)&&(n.blendFuncSeparate(ct[vt],ct[Lt],ct[it],ct[Ft]),v=vt,y=Lt,C=it,T=Ft),(Zt.equals(I)===!1||Me!==x)&&(n.blendColor(Zt.r,Zt.g,Zt.b,Me),I.copy(Zt),x=Me),g=W,M=!1}function gt(W,yt){W.side===ei?Q(n.CULL_FACE):G(n.CULL_FACE);let vt=W.side===$e;yt&&(vt=!vt),dt(vt),W.blending===Ar&&W.transparent===!1?xt(si):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);const Lt=W.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),te(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):Q(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(W){N!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),N=W)}function Rt(W){W!==cd?(G(n.CULL_FACE),W!==P&&(W===Xc?n.cullFace(n.BACK):W===hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Q(n.CULL_FACE),P=W}function z(W){W!==B&&(w&&n.lineWidth(W),B=W)}function te(W,yt,vt){W?(G(n.POLYGON_OFFSET_FILL),(F!==yt||E!==vt)&&(F=yt,E=vt,a.getReversed()&&(yt=-yt),n.polygonOffset(yt,vt))):Q(n.POLYGON_OFFSET_FILL)}function Yt(W){W?G(n.SCISSOR_TEST):Q(n.SCISSOR_TEST)}function ne(W){W===void 0&&(W=n.TEXTURE0+A-1),k!==W&&(n.activeTexture(W),k=W)}function Dt(W,yt,vt){vt===void 0&&(k===null?vt=n.TEXTURE0+A-1:vt=k);let Lt=O[vt];Lt===void 0&&(Lt={type:void 0,texture:void 0},O[vt]=Lt),(Lt.type!==W||Lt.texture!==yt)&&(k!==vt&&(n.activeTexture(vt),k=vt),n.bindTexture(W,yt||V[W]),Lt.type=W,Lt.texture=yt)}function L(){const W=O[k];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(W){le("WebGLState:",W)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(W){le("WebGLState:",W)}}function ot(){try{n.texSubImage2D(...arguments)}catch(W){le("WebGLState:",W)}}function lt(){try{n.texSubImage3D(...arguments)}catch(W){le("WebGLState:",W)}}function st(){try{n.compressedTexSubImage2D(...arguments)}catch(W){le("WebGLState:",W)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(W){le("WebGLState:",W)}}function Mt(){try{n.texStorage2D(...arguments)}catch(W){le("WebGLState:",W)}}function kt(){try{n.texStorage3D(...arguments)}catch(W){le("WebGLState:",W)}}function Wt(){try{n.texImage2D(...arguments)}catch(W){le("WebGLState:",W)}}function pt(){try{n.texImage3D(...arguments)}catch(W){le("WebGLState:",W)}}function _t(W){K.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),K.copy(W))}function Nt(W){et.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),et.copy(W))}function Ot(W,yt){let vt=l.get(yt);vt===void 0&&(vt=new WeakMap,l.set(yt,vt));let Lt=vt.get(W);Lt===void 0&&(Lt=n.getUniformBlockIndex(yt,W.name),vt.set(W,Lt))}function Ct(W,yt){const Lt=l.get(yt).get(W);c.get(yt)!==Lt&&(n.uniformBlockBinding(yt,Lt,W.__bindingPointIndex),c.set(yt,Lt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},k=null,O={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,v=null,y=null,S=null,C=null,T=null,I=new re(0,0,0),x=0,M=!1,N=null,P=null,B=null,F=null,E=null,K.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:G,disable:Q,bindFramebuffer:at,drawBuffers:rt,useProgram:j,setBlending:xt,setMaterial:gt,setFlipSided:dt,setCullFace:Rt,setLineWidth:z,setPolygonOffset:te,setScissorTest:Yt,activeTexture:ne,bindTexture:Dt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:Y,texImage2D:Wt,texImage3D:pt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Mt,texStorage3D:kt,texSubImage2D:ot,texSubImage3D:lt,compressedTexSubImage2D:st,compressedTexSubImage3D:Ut,scissor:_t,viewport:Nt,reset:$t}}function mv(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,b){return d?new OffscreenCanvas(L,b):Pa("canvas")}function _(L,b,Y){let ot=1;const lt=Dt(L);if((lt.width>Y||lt.height>Y)&&(ot=Y/Math.max(lt.width,lt.height)),ot<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const st=Math.floor(ot*lt.width),Ut=Math.floor(ot*lt.height);u===void 0&&(u=p(st,Ut));const Mt=b?p(st,Ut):u;return Mt.width=st,Mt.height=Ut,Mt.getContext("2d").drawImage(L,0,0,st,Ut),Xt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+st+"x"+Ut+")."),Mt}else return"data"in L&&Xt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(L,b,Y,ot,lt=!1){if(L!==null){if(n[L]!==void 0)return n[L];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let st=b;if(b===n.RED&&(Y===n.FLOAT&&(st=n.R32F),Y===n.HALF_FLOAT&&(st=n.R16F),Y===n.UNSIGNED_BYTE&&(st=n.R8)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(st=n.R8UI),Y===n.UNSIGNED_SHORT&&(st=n.R16UI),Y===n.UNSIGNED_INT&&(st=n.R32UI),Y===n.BYTE&&(st=n.R8I),Y===n.SHORT&&(st=n.R16I),Y===n.INT&&(st=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(st=n.RG32F),Y===n.HALF_FLOAT&&(st=n.RG16F),Y===n.UNSIGNED_BYTE&&(st=n.RG8)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(st=n.RG8UI),Y===n.UNSIGNED_SHORT&&(st=n.RG16UI),Y===n.UNSIGNED_INT&&(st=n.RG32UI),Y===n.BYTE&&(st=n.RG8I),Y===n.SHORT&&(st=n.RG16I),Y===n.INT&&(st=n.RG32I)),b===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(st=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(st=n.RGB16UI),Y===n.UNSIGNED_INT&&(st=n.RGB32UI),Y===n.BYTE&&(st=n.RGB8I),Y===n.SHORT&&(st=n.RGB16I),Y===n.INT&&(st=n.RGB32I)),b===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(st=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(st=n.RGBA16UI),Y===n.UNSIGNED_INT&&(st=n.RGBA32UI),Y===n.BYTE&&(st=n.RGBA8I),Y===n.SHORT&&(st=n.RGBA16I),Y===n.INT&&(st=n.RGBA32I)),b===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(st=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(st=n.R11F_G11F_B10F)),b===n.RGBA){const Ut=lt?Ia:se.getTransfer(ot);Y===n.FLOAT&&(st=n.RGBA32F),Y===n.HALF_FLOAT&&(st=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(st=Ut===pe?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)}return(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function S(L,b){let Y;return L?b===null||b===kn||b===Ss?Y=n.DEPTH24_STENCIL8:b===On?Y=n.DEPTH32F_STENCIL8:b===ys&&(Y=n.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===kn||b===Ss?Y=n.DEPTH_COMPONENT24:b===On?Y=n.DEPTH_COMPONENT32F:b===ys&&(Y=n.DEPTH_COMPONENT16),Y}function C(L,b){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ge&&L.minFilter!==We?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function T(L){const b=L.target;b.removeEventListener("dispose",T),x(b),b.isVideoTexture&&h.delete(b)}function I(L){const b=L.target;b.removeEventListener("dispose",I),N(b)}function x(L){const b=i.get(L);if(b.__webglInit===void 0)return;const Y=L.source,ot=f.get(Y);if(ot){const lt=ot[b.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&M(L),Object.keys(ot).length===0&&f.delete(Y)}i.remove(L)}function M(L){const b=i.get(L);n.deleteTexture(b.__webglTexture);const Y=L.source,ot=f.get(Y);delete ot[b.__cacheKey],a.memory.textures--}function N(L){const b=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(b.__webglFramebuffer[ot]))for(let lt=0;lt<b.__webglFramebuffer[ot].length;lt++)n.deleteFramebuffer(b.__webglFramebuffer[ot][lt]);else n.deleteFramebuffer(b.__webglFramebuffer[ot]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ot])}else{if(Array.isArray(b.__webglFramebuffer))for(let ot=0;ot<b.__webglFramebuffer.length;ot++)n.deleteFramebuffer(b.__webglFramebuffer[ot]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ot=0;ot<b.__webglColorRenderbuffer.length;ot++)b.__webglColorRenderbuffer[ot]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ot]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=L.textures;for(let ot=0,lt=Y.length;ot<lt;ot++){const st=i.get(Y[ot]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),a.memory.textures--),i.remove(Y[ot])}i.remove(L)}let P=0;function B(){P=0}function F(){const L=P;return L>=r.maxTextures&&Xt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),P+=1,L}function E(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function A(L,b){const Y=i.get(L);if(L.isVideoTexture&&Yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const ot=L.image;if(ot===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(Y,L,b);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function w(L,b){const Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){V(Y,L,b);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function D(L,b){const Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){V(Y,L,b);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function U(L,b){const Y=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Y.__version!==L.version){G(Y,L,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}const k={[pl]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[ml]:n.MIRRORED_REPEAT},O={[Ge]:n.NEAREST,[Dd]:n.NEAREST_MIPMAP_NEAREST,[Bs]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},X={[Nd]:n.NEVER,[Gd]:n.ALWAYS,[Fd]:n.LESS,[vc]:n.LEQUAL,[Od]:n.EQUAL,[xc]:n.GEQUAL,[Bd]:n.GREATER,[zd]:n.NOTEQUAL};function H(L,b){if(b.type===On&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===We||b.magFilter===ro||b.magFilter===Bs||b.magFilter===Wi||b.minFilter===We||b.minFilter===ro||b.minFilter===Bs||b.minFilter===Wi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,k[b.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,k[b.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,k[b.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,O[b.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,O[b.minFilter]),b.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ge||b.minFilter!==Bs&&b.minFilter!==Wi||b.type===On&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function K(L,b){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",T));const ot=b.source;let lt=f.get(ot);lt===void 0&&(lt={},f.set(ot,lt));const st=E(b);if(st!==L.__cacheKey){lt[st]===void 0&&(lt[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),lt[st].usedTimes++;const Ut=lt[L.__cacheKey];Ut!==void 0&&(lt[L.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(b)),L.__cacheKey=st,L.__webglTexture=lt[st].texture}return Y}function et(L,b,Y){return Math.floor(Math.floor(L/Y)/b)}function nt(L,b,Y,ot){const st=L.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Y,ot,b.data);else{st.sort((pt,_t)=>pt.start-_t.start);let Ut=0;for(let pt=1;pt<st.length;pt++){const _t=st[Ut],Nt=st[pt],Ot=_t.start+_t.count,Ct=et(Nt.start,b.width,4),$t=et(_t.start,b.width,4);Nt.start<=Ot+1&&Ct===$t&&et(Nt.start+Nt.count-1,b.width,4)===Ct?_t.count=Math.max(_t.count,Nt.start+Nt.count-_t.start):(++Ut,st[Ut]=Nt)}st.length=Ut+1;const Mt=n.getParameter(n.UNPACK_ROW_LENGTH),kt=n.getParameter(n.UNPACK_SKIP_PIXELS),Wt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let pt=0,_t=st.length;pt<_t;pt++){const Nt=st[pt],Ot=Math.floor(Nt.start/4),Ct=Math.ceil(Nt.count/4),$t=Ot%b.width,W=Math.floor(Ot/b.width),yt=Ct,vt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),e.texSubImage2D(n.TEXTURE_2D,0,$t,W,yt,vt,Y,ot,b.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Mt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,kt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Wt)}}function V(L,b,Y){let ot=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ot=n.TEXTURE_3D);const lt=K(L,b),st=b.source;e.bindTexture(ot,L.__webglTexture,n.TEXTURE0+Y);const Ut=i.get(st);if(st.version!==Ut.__version||lt===!0){e.activeTexture(n.TEXTURE0+Y);const Mt=se.getPrimaries(se.workingColorSpace),kt=b.colorSpace===Ai?null:se.getPrimaries(b.colorSpace),Wt=b.colorSpace===Ai||Mt===kt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let pt=_(b.image,!1,r.maxTextureSize);pt=ne(b,pt);const _t=s.convert(b.format,b.colorSpace),Nt=s.convert(b.type);let Ot=y(b.internalFormat,_t,Nt,b.colorSpace,b.isVideoTexture);H(ot,b);let Ct;const $t=b.mipmaps,W=b.isVideoTexture!==!0,yt=Ut.__version===void 0||lt===!0,vt=st.dataReady,Lt=C(b,pt);if(b.isDepthTexture)Ot=S(b.format===Xi,b.type),yt&&(W?e.texStorage2D(n.TEXTURE_2D,1,Ot,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,pt.width,pt.height,0,_t,Nt,null));else if(b.isDataTexture)if($t.length>0){W&&yt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ot,$t[0].width,$t[0].height);for(let mt=0,it=$t.length;mt<it;mt++)Ct=$t[mt],W?vt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,_t,Nt,Ct.data):e.texImage2D(n.TEXTURE_2D,mt,Ot,Ct.width,Ct.height,0,_t,Nt,Ct.data);b.generateMipmaps=!1}else W?(yt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ot,pt.width,pt.height),vt&&nt(b,pt,_t,Nt)):e.texImage2D(n.TEXTURE_2D,0,Ot,pt.width,pt.height,0,_t,Nt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,Ot,$t[0].width,$t[0].height,pt.depth);for(let mt=0,it=$t.length;mt<it;mt++)if(Ct=$t[mt],b.format!==bn)if(_t!==null)if(W){if(vt)if(b.layerUpdates.size>0){const Ft=wh(Ct.width,Ct.height,b.format,b.type);for(const Zt of b.layerUpdates){const Me=Ct.data.subarray(Zt*Ft/Ct.data.BYTES_PER_ELEMENT,(Zt+1)*Ft/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,Zt,Ct.width,Ct.height,1,_t,Me)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,pt.depth,_t,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,Ot,Ct.width,Ct.height,pt.depth,0,Ct.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?vt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,pt.depth,_t,Nt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,Ot,Ct.width,Ct.height,pt.depth,0,_t,Nt,Ct.data)}else{W&&yt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ot,$t[0].width,$t[0].height);for(let mt=0,it=$t.length;mt<it;mt++)Ct=$t[mt],b.format!==bn?_t!==null?W?vt&&e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,_t,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,Ot,Ct.width,Ct.height,0,Ct.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?vt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,_t,Nt,Ct.data):e.texImage2D(n.TEXTURE_2D,mt,Ot,Ct.width,Ct.height,0,_t,Nt,Ct.data)}else if(b.isDataArrayTexture)if(W){if(yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,Ot,pt.width,pt.height,pt.depth),vt)if(b.layerUpdates.size>0){const mt=wh(pt.width,pt.height,b.format,b.type);for(const it of b.layerUpdates){const Ft=pt.data.subarray(it*mt/pt.data.BYTES_PER_ELEMENT,(it+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,pt.width,pt.height,1,_t,Nt,Ft)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,_t,Nt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,_t,Nt,pt.data);else if(b.isData3DTexture)W?(yt&&e.texStorage3D(n.TEXTURE_3D,Lt,Ot,pt.width,pt.height,pt.depth),vt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,_t,Nt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,_t,Nt,pt.data);else if(b.isFramebufferTexture){if(yt)if(W)e.texStorage2D(n.TEXTURE_2D,Lt,Ot,pt.width,pt.height);else{let mt=pt.width,it=pt.height;for(let Ft=0;Ft<Lt;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Ot,mt,it,0,_t,Nt,null),mt>>=1,it>>=1}}else if($t.length>0){if(W&&yt){const mt=Dt($t[0]);e.texStorage2D(n.TEXTURE_2D,Lt,Ot,mt.width,mt.height)}for(let mt=0,it=$t.length;mt<it;mt++)Ct=$t[mt],W?vt&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,_t,Nt,Ct):e.texImage2D(n.TEXTURE_2D,mt,Ot,_t,Nt,Ct);b.generateMipmaps=!1}else if(W){if(yt){const mt=Dt(pt);e.texStorage2D(n.TEXTURE_2D,Lt,Ot,mt.width,mt.height)}vt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Nt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,_t,Nt,pt);g(b)&&m(ot),Ut.__version=st.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function G(L,b,Y){if(b.image.length!==6)return;const ot=K(L,b),lt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Y);const st=i.get(lt);if(lt.version!==st.__version||ot===!0){e.activeTexture(n.TEXTURE0+Y);const Ut=se.getPrimaries(se.workingColorSpace),Mt=b.colorSpace===Ai?null:se.getPrimaries(b.colorSpace),kt=b.colorSpace===Ai||Ut===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Wt=b.isCompressedTexture||b.image[0].isCompressedTexture,pt=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!Wt&&!pt?_t[it]=_(b.image[it],!0,r.maxCubemapSize):_t[it]=pt?b.image[it].image:b.image[it],_t[it]=ne(b,_t[it]);const Nt=_t[0],Ot=s.convert(b.format,b.colorSpace),Ct=s.convert(b.type),$t=y(b.internalFormat,Ot,Ct,b.colorSpace),W=b.isVideoTexture!==!0,yt=st.__version===void 0||ot===!0,vt=lt.dataReady;let Lt=C(b,Nt);H(n.TEXTURE_CUBE_MAP,b);let mt;if(Wt){W&&yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,$t,Nt.width,Nt.height);for(let it=0;it<6;it++){mt=_t[it].mipmaps;for(let Ft=0;Ft<mt.length;Ft++){const Zt=mt[Ft];b.format!==bn?Ot!==null?W?vt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,0,0,Zt.width,Zt.height,Ot,Zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,$t,Zt.width,Zt.height,0,Zt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,0,0,Zt.width,Zt.height,Ot,Ct,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,$t,Zt.width,Zt.height,0,Ot,Ct,Zt.data)}}}else{if(mt=b.mipmaps,W&&yt){mt.length>0&&Lt++;const it=Dt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,$t,it.width,it.height)}for(let it=0;it<6;it++)if(pt){W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Ot,Ct,_t[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,_t[it].width,_t[it].height,0,Ot,Ct,_t[it].data);for(let Ft=0;Ft<mt.length;Ft++){const Me=mt[Ft].image[it].image;W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,0,0,Me.width,Me.height,Ot,Ct,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,$t,Me.width,Me.height,0,Ot,Ct,Me.data)}}else{W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,Ct,_t[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,$t,Ot,Ct,_t[it]);for(let Ft=0;Ft<mt.length;Ft++){const Zt=mt[Ft];W?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,0,0,Ot,Ct,Zt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,$t,Ot,Ct,Zt.image[it])}}}g(b)&&m(n.TEXTURE_CUBE_MAP),st.__version=lt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Q(L,b,Y,ot,lt,st){const Ut=s.convert(Y.format,Y.colorSpace),Mt=s.convert(Y.type),kt=y(Y.internalFormat,Ut,Mt,Y.colorSpace),Wt=i.get(b),pt=i.get(Y);if(pt.__renderTarget=b,!Wt.__hasExternalTextures){const _t=Math.max(1,b.width>>st),Nt=Math.max(1,b.height>>st);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,st,kt,_t,Nt,b.depth,0,Ut,Mt,null):e.texImage2D(lt,st,kt,_t,Nt,0,Ut,Mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),te(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,lt,pt.__webglTexture,0,z(b)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,lt,pt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(L,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,L),b.depthBuffer){const ot=b.depthTexture,lt=ot&&ot.isDepthTexture?ot.type:null,st=S(b.stencilBuffer,lt),Ut=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;te(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(b),st,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(b),st,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,st,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,L)}else{const ot=b.textures;for(let lt=0;lt<ot.length;lt++){const st=ot[lt],Ut=s.convert(st.format,st.colorSpace),Mt=s.convert(st.type),kt=y(st.internalFormat,Ut,Mt,st.colorSpace);te(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(b),kt,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(b),kt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,kt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(L,b,Y){const ot=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=i.get(b.depthTexture);if(lt.__renderTarget=b,(!lt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ot){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),lt.__webglTexture===void 0){lt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),H(n.TEXTURE_CUBE_MAP,b.depthTexture);const Wt=s.convert(b.depthTexture.format),pt=s.convert(b.depthTexture.type);let _t;b.depthTexture.format===ci?_t=n.DEPTH_COMPONENT24:b.depthTexture.format===Xi&&(_t=n.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,_t,b.width,b.height,0,Wt,pt,null)}}else A(b.depthTexture,0);const st=lt.__webglTexture,Ut=z(b),Mt=ot?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,kt=b.depthTexture.format===Xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ci)te(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,kt,Mt,st,0,Ut):n.framebufferTexture2D(n.FRAMEBUFFER,kt,Mt,st,0);else if(b.depthTexture.format===Xi)te(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,kt,Mt,st,0,Ut):n.framebufferTexture2D(n.FRAMEBUFFER,kt,Mt,st,0);else throw new Error("Unknown depthTexture format")}function j(L){const b=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ot=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ot){const lt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ot.removeEventListener("dispose",lt)};ot.addEventListener("dispose",lt),b.__depthDisposeCallback=lt}b.__boundDepthTexture=ot}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let ot=0;ot<6;ot++)rt(b.__webglFramebuffer[ot],L,ot);else{const ot=L.texture.mipmaps;ot&&ot.length>0?rt(b.__webglFramebuffer[0],L,0):rt(b.__webglFramebuffer,L,0)}else if(Y){b.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ot]),b.__webglDepthbuffer[ot]===void 0)b.__webglDepthbuffer[ot]=n.createRenderbuffer(),at(b.__webglDepthbuffer[ot],L,!1);else{const lt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer[ot];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,st)}}else{const ot=L.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),at(b.__webglDepthbuffer,L,!1);else{const lt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(L,b,Y){const ot=i.get(L);b!==void 0&&Q(ot.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&j(L)}function ct(L){const b=L.texture,Y=i.get(L),ot=i.get(b);L.addEventListener("dispose",I);const lt=L.textures,st=L.isWebGLCubeRenderTarget===!0,Ut=lt.length>1;if(Ut||(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=b.version,a.memory.textures++),st){Y.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[Mt]=[];for(let kt=0;kt<b.mipmaps.length;kt++)Y.__webglFramebuffer[Mt][kt]=n.createFramebuffer()}else Y.__webglFramebuffer[Mt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)Y.__webglFramebuffer[Mt]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let Mt=0,kt=lt.length;Mt<kt;Mt++){const Wt=i.get(lt[Mt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&te(L)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Mt=0;Mt<lt.length;Mt++){const kt=lt[Mt];Y.__webglColorRenderbuffer[Mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt]);const Wt=s.convert(kt.format,kt.colorSpace),pt=s.convert(kt.type),_t=y(kt.internalFormat,Wt,pt,kt.colorSpace,L.isXRRenderTarget===!0),Nt=z(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,_t,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),at(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),H(n.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let kt=0;kt<b.mipmaps.length;kt++)Q(Y.__webglFramebuffer[Mt][kt],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,kt);else Q(Y.__webglFramebuffer[Mt],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);g(b)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,kt=lt.length;Mt<kt;Mt++){const Wt=lt[Mt],pt=i.get(Wt);let _t=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,pt.__webglTexture),H(_t,Wt),Q(Y.__webglFramebuffer,L,Wt,n.COLOR_ATTACHMENT0+Mt,_t,0),g(Wt)&&m(_t)}e.unbindTexture()}else{let Mt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ot.__webglTexture),H(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let kt=0;kt<b.mipmaps.length;kt++)Q(Y.__webglFramebuffer[kt],L,b,n.COLOR_ATTACHMENT0,Mt,kt);else Q(Y.__webglFramebuffer,L,b,n.COLOR_ATTACHMENT0,Mt,0);g(b)&&m(Mt),e.unbindTexture()}L.depthBuffer&&j(L)}function xt(L){const b=L.textures;for(let Y=0,ot=b.length;Y<ot;Y++){const lt=b[Y];if(g(lt)){const st=v(L),Ut=i.get(lt).__webglTexture;e.bindTexture(st,Ut),m(st),e.unbindTexture()}}}const gt=[],dt=[];function Rt(L){if(L.samples>0){if(te(L)===!1){const b=L.textures,Y=L.width,ot=L.height;let lt=n.COLOR_BUFFER_BIT;const st=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(L),Mt=b.length>1;if(Mt)for(let Wt=0;Wt<b.length;Wt++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Wt=0;Wt<b.length;Wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),Mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Wt]);const pt=i.get(b[Wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,Y,ot,0,0,Y,ot,lt,n.NEAREST),c===!0&&(gt.length=0,dt.length=0,gt.push(n.COLOR_ATTACHMENT0+Wt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(gt.push(st),dt.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Mt)for(let Wt=0;Wt<b.length;Wt++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Wt]);const pt=i.get(b[Wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Wt,n.TEXTURE_2D,pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const b=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function z(L){return Math.min(r.maxSamples,L.samples)}function te(L){const b=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Yt(L){const b=a.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function ne(L,b){const Y=L.colorSpace,ot=L.format,lt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Nr&&Y!==Ai&&(se.getTransfer(Y)===pe?(ot!==bn||lt!==ln)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",Y)),b}function Dt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=A,this.setTexture2DArray=w,this.setTexture3D=D,this.setTextureCube=U,this.rebindTextures=ht,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gv(n,t){function e(i,r=Ai){let s;const a=se.getTransfer(r);if(i===ln)return n.UNSIGNED_BYTE;if(i===dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ou)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uu)return n.BYTE;if(i===Nu)return n.SHORT;if(i===ys)return n.UNSIGNED_SHORT;if(i===fc)return n.INT;if(i===kn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===zu)return n.RGB;if(i===bn)return n.RGBA;if(i===ci)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===Gu)return n.RED;if(i===mc)return n.RED_INTEGER;if(i===Ur)return n.RG;if(i===gc)return n.RG_INTEGER;if(i===_c)return n.RGBA_INTEGER;if(i===xa||i===Ma||i===ya||i===Sa)if(a===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===_l||i===vl||i===xl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ml||i===yl||i===Sl||i===El||i===bl||i===Tl||i===Al)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ml||i===yl)return a===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===El)return s.COMPRESSED_R11_EAC;if(i===bl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Tl)return s.COMPRESSED_RG11_EAC;if(i===Al)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wl||i===Rl||i===Cl||i===Il||i===Pl||i===Dl||i===Ll||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===Gl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ul)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===kl||i===Hl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Vl)return a===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wl||i===Xl||i===Yl||i===Zl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const _v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
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

}`;class xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ju(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wn({vertexShader:_v,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tn(new Ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mv extends Qi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new xv,m={},v=e.getContextAttributes();let y=null,S=null;const C=[],T=[],I=new qt;let x=null;const M=new dn;M.viewport=new Ae;const N=new dn;N.viewport=new Ae;const P=[M,N],B=new Pp;let F=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let G=C[V];return G===void 0&&(G=new uo,C[V]=G),G.getTargetRaySpace()},this.getControllerGrip=function(V){let G=C[V];return G===void 0&&(G=new uo,C[V]=G),G.getGripSpace()},this.getHand=function(V){let G=C[V];return G===void 0&&(G=new uo,C[V]=G),G.getHandSpace()};function A(V){const G=T.indexOf(V.inputSource);if(G===-1)return;const Q=C[G];Q!==void 0&&(Q.update(V.inputSource,V.frame,l||a),Q.dispatchEvent({type:V.type,data:V.inputSource}))}function w(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",w),r.removeEventListener("inputsourceschange",D);for(let V=0;V<C.length;V++){const G=T[V];G!==null&&(T[V]=null,C[V].disconnect(G))}F=null,E=null,g.reset();for(const V in m)delete m[V];t.setRenderTarget(y),d=null,f=null,u=null,r=null,S=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",w),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,at=null,rt=null;v.depth&&(rt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=v.stencil?Xi:ci,at=v.stencil?Ss:kn);const j={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(j),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Gn(f.textureWidth,f.textureHeight,{format:bn,type:ln,depthTexture:new bs(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Gn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(V){for(let G=0;G<V.removed.length;G++){const Q=V.removed[G],at=T.indexOf(Q);at>=0&&(T[at]=null,C[at].disconnect(Q))}for(let G=0;G<V.added.length;G++){const Q=V.added[G];let at=T.indexOf(Q);if(at===-1){for(let j=0;j<C.length;j++)if(j>=T.length){T.push(Q),at=j;break}else if(T[j]===null){T[j]=Q,at=j;break}if(at===-1)break}const rt=C[at];rt&&rt.connect(Q)}}const U=new q,k=new q;function O(V,G,Q){U.setFromMatrixPosition(G.matrixWorld),k.setFromMatrixPosition(Q.matrixWorld);const at=U.distanceTo(k),rt=G.projectionMatrix.elements,j=Q.projectionMatrix.elements,ht=rt[14]/(rt[10]-1),ct=rt[14]/(rt[10]+1),xt=(rt[9]+1)/rt[5],gt=(rt[9]-1)/rt[5],dt=(rt[8]-1)/rt[0],Rt=(j[8]+1)/j[0],z=ht*dt,te=ht*Rt,Yt=at/(-dt+Rt),ne=Yt*-dt;if(G.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ne),V.translateZ(Yt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),rt[10]===-1)V.projectionMatrix.copy(G.projectionMatrix),V.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Dt=ht+Yt,L=ct+Yt,b=z-ne,Y=te+(at-ne),ot=xt*ct/L*Dt,lt=gt*ct/L*Dt;V.projectionMatrix.makePerspective(b,Y,ot,lt,Dt,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function X(V,G){G===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(G.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let G=V.near,Q=V.far;g.texture!==null&&(g.depthNear>0&&(G=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),B.near=N.near=M.near=G,B.far=N.far=M.far=Q,(F!==B.near||E!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,E=B.far),B.layers.mask=V.layers.mask|6,M.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;const at=V.parent,rt=B.cameras;X(B,at);for(let j=0;j<rt.length;j++)X(rt[j],at);rt.length===2?O(B,M,N):B.projectionMatrix.copy(M.projectionMatrix),H(V,B,at)};function H(V,G,Q){Q===null?V.matrix.copy(G.matrixWorld):(V.matrix.copy(Q.matrixWorld),V.matrix.invert(),V.matrix.multiply(G.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(G.projectionMatrix),V.projectionMatrixInverse.copy(G.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Kl*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(V){return m[V]};let K=null;function et(V,G){if(h=G.getViewerPose(l||a),p=G,h!==null){const Q=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let at=!1;Q.length!==B.cameras.length&&(B.cameras.length=0,at=!0);for(let ct=0;ct<Q.length;ct++){const xt=Q[ct];let gt=null;if(d!==null)gt=d.getViewport(xt);else{const Rt=u.getViewSubImage(f,xt);gt=Rt.viewport,ct===0&&(t.setRenderTargetTextures(S,Rt.colorTexture,Rt.depthStencilTexture),t.setRenderTarget(S))}let dt=P[ct];dt===void 0&&(dt=new dn,dt.layers.enable(ct),dt.viewport=new Ae,P[ct]=dt),dt.matrix.fromArray(xt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(xt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(gt.x,gt.y,gt.width,gt.height),ct===0&&(B.matrix.copy(dt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),at===!0&&B.cameras.push(dt)}const rt=r.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const ct=u.getDepthInformation(Q[0]);ct&&ct.isValid&&ct.texture&&g.init(ct,r.renderState)}if(rt&&rt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let ct=0;ct<Q.length;ct++){const xt=Q[ct].camera;if(xt){let gt=m[xt];gt||(gt=new Ju,m[xt]=gt);const dt=u.getCameraImage(xt);gt.sourceTexture=dt}}}}for(let Q=0;Q<C.length;Q++){const at=T[Q],rt=C[Q];at!==null&&rt!==void 0&&rt.update(at,G,l||a)}K&&K(V,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),p=null}const nt=new nf;nt.setAnimationLoop(et),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}const Oi=new Hn,yv=new be;function Sv(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,$u(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,y,S){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,S)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,v,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$e&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$e&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),y=v.envMap,S=v.envMapRotation;y&&(g.envMap.value=y,Oi.copy(S),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),g.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(Oi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ev(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function l(v,y){let S=r[v.id];S===void 0&&(p(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",g));const C=y.program;i.updateUBOMapping(v,C);const T=t.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function h(v){const y=u();v.__bindingPointIndex=y;const S=n.createBuffer(),C=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,I=S.length;T<I;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,N=x.length;M<N;M++){const P=x[M];if(d(P,T,M,C)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let E=0;for(let A=0;A<F.length;A++){const w=F[A],D=_(w);typeof w=="number"||typeof w=="boolean"?(P.__data[0]=w,n.bufferSubData(n.UNIFORM_BUFFER,B+E,P.__data)):w.isMatrix3?(P.__data[0]=w.elements[0],P.__data[1]=w.elements[1],P.__data[2]=w.elements[2],P.__data[3]=0,P.__data[4]=w.elements[3],P.__data[5]=w.elements[4],P.__data[6]=w.elements[5],P.__data[7]=0,P.__data[8]=w.elements[6],P.__data[9]=w.elements[7],P.__data[10]=w.elements[8],P.__data[11]=0):(w.toArray(P.__data,E),E+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,y,S,C){const T=v.value,I=y+"_"+S;if(C[I]===void 0)return typeof T=="number"||typeof T=="boolean"?C[I]=T:C[I]=T.clone(),!0;{const x=C[I];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return C[I]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function p(v){const y=v.uniforms;let S=0;const C=16;for(let I=0,x=y.length;I<x;I++){const M=Array.isArray(y[I])?y[I]:[y[I]];for(let N=0,P=M.length;N<P;N++){const B=M[N],F=Array.isArray(B.value)?B.value:[B.value];for(let E=0,A=F.length;E<A;E++){const w=F[E],D=_(w),U=S%C,k=U%D.boundary,O=U+k;S+=k,O!==0&&C-O<D.storage&&(S+=C-O),B.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=D.storage}}}const T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xt("WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}const bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function Tv(){return Cn===null&&(Cn=new fp(bv,16,16,Ur,li),Cn.name="DFG_LUT",Cn.minFilter=We,Cn.magFilter=We,Cn.wrapS=ii,Cn.wrapT=ii,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class Av{constructor(t={}){const{canvas:e=kd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ln}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=d,g=new Set([_c,gc,mc]),m=new Set([ln,kn,ys,Ss,dc,pc]),v=new Uint32Array(4),y=new Int32Array(4);let S=null,C=null;const T=[],I=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=fn;let P=0,B=0,F=null,E=-1,A=null;const w=new Ae,D=new Ae;let U=null;const k=new re(0);let O=0,X=e.width,H=e.height,K=1,et=null,nt=null;const V=new Ae(0,0,X,H),G=new Ae(0,0,X,H);let Q=!1;const at=new yc;let rt=!1,j=!1;const ht=new be,ct=new q,xt=new Ae,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Rt(){return F===null?K:1}let z=i;function te(R,Z){return e.getContext(R,Z)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uc}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",Me,!1),z===null){const Z="webgl2";if(z=te(Z,R),z===null)throw te(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw le("WebGLRenderer: "+R.message),R}let Yt,ne,Dt,L,b,Y,ot,lt,st,Ut,Mt,kt,Wt,pt,_t,Nt,Ot,Ct,$t,W,yt,vt,Lt;function mt(){Yt=new A0(z),Yt.init(),yt=new gv(z,Yt),ne=new v0(z,Yt,t,yt),Dt=new pv(z,Yt),ne.reversedDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),L=new C0(z),b=new tv,Y=new mv(z,Yt,Dt,b,ne,yt,L),ot=new T0(M),lt=new Up(z),vt=new g0(z,lt),st=new w0(z,lt,L,vt),Ut=new P0(z,st,lt,vt,L),Ct=new I0(z,ne,Y),_t=new x0(b),Mt=new Q_(M,ot,Yt,ne,vt,_t),kt=new Sv(M,b),Wt=new nv,pt=new lv(Yt),Ot=new m0(M,ot,Dt,Ut,p,c),Nt=new dv(M,Ut,ne),Lt=new Ev(z,L,ne,Dt),$t=new _0(z,Yt,L),W=new R0(z,Yt,L),L.programs=Mt.programs,M.capabilities=ne,M.extensions=Yt,M.properties=b,M.renderLists=Wt,M.shadowMap=Nt,M.state=Dt,M.info=L}mt(),_!==ln&&(x=new L0(_,e.width,e.height,r,s));const it=new Mv(M,z);this.xr=it,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=Yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(X,H,!1))},this.getSize=function(R){return R.set(X,H)},this.setSize=function(R,Z,tt=!0){if(it.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,H=Z,e.width=Math.floor(R*K),e.height=Math.floor(Z*K),tt===!0&&(e.style.width=R+"px",e.style.height=Z+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(X*K,H*K).floor()},this.setDrawingBufferSize=function(R,Z,tt){X=R,H=Z,K=tt,e.width=Math.floor(R*tt),e.height=Math.floor(Z*tt),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(_===ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(V)},this.setViewport=function(R,Z,tt,$){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,Z,tt,$),Dt.viewport(w.copy(V).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(G)},this.setScissor=function(R,Z,tt,$){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,Z,tt,$),Dt.scissor(D.copy(G).multiplyScalar(K).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){Dt.setScissorTest(Q=R)},this.setOpaqueSort=function(R){et=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,tt=!0){let $=0;if(R){let J=!1;if(F!==null){const Tt=F.texture.format;J=g.has(Tt)}if(J){const Tt=F.texture.type,It=m.has(Tt),At=Ot.getClearColor(),Bt=Ot.getClearAlpha(),Gt=At.r,Kt=At.g,Qt=At.b;It?(v[0]=Gt,v[1]=Kt,v[2]=Qt,v[3]=Bt,z.clearBufferuiv(z.COLOR,0,v)):(y[0]=Gt,y[1]=Kt,y[2]=Qt,y[3]=Bt,z.clearBufferiv(z.COLOR,0,y))}else $|=z.COLOR_BUFFER_BIT}Z&&($|=z.DEPTH_BUFFER_BIT),tt&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Me,!1),Ot.dispose(),Wt.dispose(),pt.dispose(),b.dispose(),ot.dispose(),Ut.dispose(),vt.dispose(),Lt.dispose(),Mt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Oc),it.removeEventListener("sessionend",Bc),Ii.stop()};function Ft(R){R.preventDefault(),Qc("WebGLRenderer: Context Lost."),N=!0}function Zt(){Qc("WebGLRenderer: Context Restored."),N=!1;const R=L.autoReset,Z=Nt.enabled,tt=Nt.autoUpdate,$=Nt.needsUpdate,J=Nt.type;mt(),L.autoReset=R,Nt.enabled=Z,Nt.autoUpdate=tt,Nt.needsUpdate=$,Nt.type=J}function Me(R){le("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function de(R){const Z=R.target;Z.removeEventListener("dispose",de),Zn(Z)}function Zn(R){Kn(R),b.remove(R)}function Kn(R){const Z=b.get(R).programs;Z!==void 0&&(Z.forEach(function(tt){Mt.releaseProgram(tt)}),R.isShaderMaterial&&Mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,tt,$,J,Tt){Z===null&&(Z=gt);const It=J.isMesh&&J.matrixWorld.determinant()<0,At=id(R,Z,tt,$,J);Dt.setMaterial($,It);let Bt=tt.index,Gt=1;if($.wireframe===!0){if(Bt=st.getWireframeAttribute(tt),Bt===void 0)return;Gt=2}const Kt=tt.drawRange,Qt=tt.attributes.position;let Vt=Kt.start*Gt,me=(Kt.start+Kt.count)*Gt;Tt!==null&&(Vt=Math.max(Vt,Tt.start*Gt),me=Math.min(me,(Tt.start+Tt.count)*Gt)),Bt!==null?(Vt=Math.max(Vt,0),me=Math.min(me,Bt.count)):Qt!=null&&(Vt=Math.max(Vt,0),me=Math.min(me,Qt.count));const we=me-Vt;if(we<0||we===1/0)return;vt.setup(J,$,At,tt,Bt);let Te,ge=$t;if(Bt!==null&&(Te=lt.get(Bt),ge=W,ge.setIndex(Te)),J.isMesh)$.wireframe===!0?(Dt.setLineWidth($.wireframeLinewidth*Rt()),ge.setMode(z.LINES)):ge.setMode(z.TRIANGLES);else if(J.isLine){let Ve=$.linewidth;Ve===void 0&&(Ve=1),Dt.setLineWidth(Ve*Rt()),J.isLineSegments?ge.setMode(z.LINES):J.isLineLoop?ge.setMode(z.LINE_LOOP):ge.setMode(z.LINE_STRIP)}else J.isPoints?ge.setMode(z.POINTS):J.isSprite&&ge.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Da("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ge.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ve=J._multiDrawStarts,zt=J._multiDrawCounts,sn=J._multiDrawCount,oe=Bt?lt.get(Bt).bytesPerElement:1,xn=b.get($).currentProgram.getUniforms();for(let wn=0;wn<sn;wn++)xn.setValue(z,"_gl_DrawID",wn),ge.render(Ve[wn]/oe,zt[wn])}else if(J.isInstancedMesh)ge.renderInstances(Vt,we,J.count);else if(tt.isInstancedBufferGeometry){const Ve=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,zt=Math.min(tt.instanceCount,Ve);ge.renderInstances(Vt,we,zt)}else ge.render(Vt,we)};function Fc(R,Z,tt){R.transparent===!0&&R.side===ei&&R.forceSinglePass===!1?(R.side=$e,R.needsUpdate=!0,Os(R,Z,tt),R.side=oi,R.needsUpdate=!0,Os(R,Z,tt),R.side=ei):Os(R,Z,tt)}this.compile=function(R,Z,tt=null){tt===null&&(tt=R),C=pt.get(tt),C.init(Z),I.push(C),tt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),R!==tt&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),C.setupLights();const $=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let It=0;It<Tt.length;It++){const At=Tt[It];Fc(At,tt,J),$.add(At)}else Fc(Tt,tt,J),$.add(Tt)}),C=I.pop(),$},this.compileAsync=function(R,Z,tt=null){const $=this.compile(R,Z,tt);return new Promise(J=>{function Tt(){if($.forEach(function(It){b.get(It).currentProgram.isReady()&&$.delete(It)}),$.size===0){J(R);return}setTimeout(Tt,10)}Yt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let to=null;function nd(R){to&&to(R)}function Oc(){Ii.stop()}function Bc(){Ii.start()}const Ii=new nf;Ii.setAnimationLoop(nd),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(R){to=R,it.setAnimationLoop(R),R===null?Ii.stop():Ii.start()},it.addEventListener("sessionstart",Oc),it.addEventListener("sessionend",Bc),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const tt=it.enabled===!0&&it.isPresenting===!0,$=x!==null&&(F===null||tt)&&x.begin(M,F);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(Z),Z=it.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,Z,F),C=pt.get(R,I.length),C.init(Z),I.push(C),ht.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),at.setFromProjectionMatrix(ht,Bn,Z.reversedDepth),j=this.localClippingEnabled,rt=_t.init(this.clippingPlanes,j),S=Wt.get(R,T.length),S.init(),T.push(S),it.enabled===!0&&it.isPresenting===!0){const It=M.xr.getDepthSensingMesh();It!==null&&eo(It,Z,-1/0,M.sortObjects)}eo(R,Z,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(et,nt),dt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,dt&&Ot.addToRenderList(S,R),this.info.render.frame++,rt===!0&&_t.beginShadows();const J=C.state.shadowsArray;if(Nt.render(J,R,Z),rt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&x.hasRenderPass())===!1){const It=S.opaque,At=S.transmissive;if(C.setupLights(),Z.isArrayCamera){const Bt=Z.cameras;if(At.length>0)for(let Gt=0,Kt=Bt.length;Gt<Kt;Gt++){const Qt=Bt[Gt];Gc(It,At,R,Qt)}dt&&Ot.render(R);for(let Gt=0,Kt=Bt.length;Gt<Kt;Gt++){const Qt=Bt[Gt];zc(S,R,Qt,Qt.viewport)}}else At.length>0&&Gc(It,At,R,Z),dt&&Ot.render(R),zc(S,R,Z)}F!==null&&B===0&&(Y.updateMultisampleRenderTarget(F),Y.updateRenderTargetMipmap(F)),$&&x.end(M),R.isScene===!0&&R.onAfterRender(M,R,Z),vt.resetDefaultState(),E=-1,A=null,I.pop(),I.length>0?(C=I[I.length-1],rt===!0&&_t.setGlobalState(M.clippingPlanes,C.state.camera)):C=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function eo(R,Z,tt,$){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)C.pushLight(R),R.castShadow&&C.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||at.intersectsSprite(R)){$&&xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);const It=Ut.update(R),At=R.material;At.visible&&S.push(R,It,At,tt,xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||at.intersectsObject(R))){const It=Ut.update(R),At=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xt.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),xt.copy(It.boundingSphere.center)),xt.applyMatrix4(R.matrixWorld).applyMatrix4(ht)),Array.isArray(At)){const Bt=It.groups;for(let Gt=0,Kt=Bt.length;Gt<Kt;Gt++){const Qt=Bt[Gt],Vt=At[Qt.materialIndex];Vt&&Vt.visible&&S.push(R,It,Vt,tt,xt.z,Qt)}}else At.visible&&S.push(R,It,At,tt,xt.z,null)}}const Tt=R.children;for(let It=0,At=Tt.length;It<At;It++)eo(Tt[It],Z,tt,$)}function zc(R,Z,tt,$){const{opaque:J,transmissive:Tt,transparent:It}=R;C.setupLightsView(tt),rt===!0&&_t.setGlobalState(M.clippingPlanes,tt),$&&Dt.viewport(w.copy($)),J.length>0&&Fs(J,Z,tt),Tt.length>0&&Fs(Tt,Z,tt),It.length>0&&Fs(It,Z,tt),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Gc(R,Z,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){const Vt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Gn(1,1,{generateMipmaps:!0,type:Vt?li:ln,minFilter:Wi,samples:Math.max(4,ne.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace})}const Tt=C.state.transmissionRenderTarget[$.id],It=$.viewport||w;Tt.setSize(It.z*M.transmissionResolutionScale,It.w*M.transmissionResolutionScale);const At=M.getRenderTarget(),Bt=M.getActiveCubeFace(),Gt=M.getActiveMipmapLevel();M.setRenderTarget(Tt),M.getClearColor(k),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),dt&&Ot.render(tt);const Kt=M.toneMapping;M.toneMapping=zn;const Qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),rt===!0&&_t.setGlobalState(M.clippingPlanes,$),Fs(R,tt,$),Y.updateMultisampleRenderTarget(Tt),Y.updateRenderTargetMipmap(Tt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let me=0,we=Z.length;me<we;me++){const Te=Z[me],{object:ge,geometry:Ve,material:zt,group:sn}=Te;if(zt.side===ei&&ge.layers.test($.layers)){const oe=zt.side;zt.side=$e,zt.needsUpdate=!0,Vc(ge,tt,$,Ve,zt,sn),zt.side=oe,zt.needsUpdate=!0,Vt=!0}}Vt===!0&&(Y.updateMultisampleRenderTarget(Tt),Y.updateRenderTargetMipmap(Tt))}M.setRenderTarget(At,Bt,Gt),M.setClearColor(k,O),Qt!==void 0&&($.viewport=Qt),M.toneMapping=Kt}function Fs(R,Z,tt){const $=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Tt=R.length;J<Tt;J++){const It=R[J],{object:At,geometry:Bt,group:Gt}=It;let Kt=It.material;Kt.allowOverride===!0&&$!==null&&(Kt=$),At.layers.test(tt.layers)&&Vc(At,Z,tt,Bt,Kt,Gt)}}function Vc(R,Z,tt,$,J,Tt){R.onBeforeRender(M,Z,tt,$,J,Tt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(M,Z,tt,$,R,Tt),J.transparent===!0&&J.side===ei&&J.forceSinglePass===!1?(J.side=$e,J.needsUpdate=!0,M.renderBufferDirect(tt,Z,$,J,R,Tt),J.side=oi,J.needsUpdate=!0,M.renderBufferDirect(tt,Z,$,J,R,Tt),J.side=ei):M.renderBufferDirect(tt,Z,$,J,R,Tt),R.onAfterRender(M,Z,tt,$,J,Tt)}function Os(R,Z,tt){Z.isScene!==!0&&(Z=gt);const $=b.get(R),J=C.state.lights,Tt=C.state.shadowsArray,It=J.state.version,At=Mt.getParameters(R,J.state,Tt,Z,tt),Bt=Mt.getProgramCacheKey(At);let Gt=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,$.fog=Z.fog;const Kt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=ot.get(R.envMap||$.environment,Kt),$.envMapRotation=$.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Gt===void 0&&(R.addEventListener("dispose",de),Gt=new Map,$.programs=Gt);let Qt=Gt.get(Bt);if(Qt!==void 0){if($.currentProgram===Qt&&$.lightsStateVersion===It)return Hc(R,At),Qt}else At.uniforms=Mt.getUniforms(R),R.onBeforeCompile(At,M),Qt=Mt.acquireProgram(At,Bt),Gt.set(Bt,Qt),$.uniforms=At.uniforms;const Vt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Vt.clippingPlanes=_t.uniform),Hc(R,At),$.needsLights=sd(R),$.lightsStateVersion=It,$.needsLights&&(Vt.ambientLightColor.value=J.state.ambient,Vt.lightProbe.value=J.state.probe,Vt.directionalLights.value=J.state.directional,Vt.directionalLightShadows.value=J.state.directionalShadow,Vt.spotLights.value=J.state.spot,Vt.spotLightShadows.value=J.state.spotShadow,Vt.rectAreaLights.value=J.state.rectArea,Vt.ltc_1.value=J.state.rectAreaLTC1,Vt.ltc_2.value=J.state.rectAreaLTC2,Vt.pointLights.value=J.state.point,Vt.pointLightShadows.value=J.state.pointShadow,Vt.hemisphereLights.value=J.state.hemi,Vt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Vt.spotLightMatrix.value=J.state.spotLightMatrix,Vt.spotLightMap.value=J.state.spotLightMap,Vt.pointShadowMatrix.value=J.state.pointShadowMatrix),$.currentProgram=Qt,$.uniformsList=null,Qt}function kc(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=ba.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Hc(R,Z){const tt=b.get(R);tt.outputColorSpace=Z.outputColorSpace,tt.batching=Z.batching,tt.batchingColor=Z.batchingColor,tt.instancing=Z.instancing,tt.instancingColor=Z.instancingColor,tt.instancingMorph=Z.instancingMorph,tt.skinning=Z.skinning,tt.morphTargets=Z.morphTargets,tt.morphNormals=Z.morphNormals,tt.morphColors=Z.morphColors,tt.morphTargetsCount=Z.morphTargetsCount,tt.numClippingPlanes=Z.numClippingPlanes,tt.numIntersection=Z.numClipIntersection,tt.vertexAlphas=Z.vertexAlphas,tt.vertexTangents=Z.vertexTangents,tt.toneMapping=Z.toneMapping}function id(R,Z,tt,$,J){Z.isScene!==!0&&(Z=gt),Y.resetTextureUnits();const Tt=Z.fog,It=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?Z.environment:null,At=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Nr,Bt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Gt=ot.get($.envMap||It,Bt),Kt=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Qt=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Vt=!!tt.morphAttributes.position,me=!!tt.morphAttributes.normal,we=!!tt.morphAttributes.color;let Te=zn;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Te=M.toneMapping);const ge=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Ve=ge!==void 0?ge.length:0,zt=b.get($),sn=C.state.lights;if(rt===!0&&(j===!0||R!==A)){const Ue=R===A&&$.id===E;_t.setState($,R,Ue)}let oe=!1;$.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==sn.state.version||zt.outputColorSpace!==At||J.isBatchedMesh&&zt.batching===!1||!J.isBatchedMesh&&zt.batching===!0||J.isBatchedMesh&&zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&zt.instancing===!1||!J.isInstancedMesh&&zt.instancing===!0||J.isSkinnedMesh&&zt.skinning===!1||!J.isSkinnedMesh&&zt.skinning===!0||J.isInstancedMesh&&zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&zt.instancingMorph===!1&&J.morphTexture!==null||zt.envMap!==Gt||$.fog===!0&&zt.fog!==Tt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==_t.numPlanes||zt.numIntersection!==_t.numIntersection)||zt.vertexAlphas!==Kt||zt.vertexTangents!==Qt||zt.morphTargets!==Vt||zt.morphNormals!==me||zt.morphColors!==we||zt.toneMapping!==Te||zt.morphTargetsCount!==Ve)&&(oe=!0):(oe=!0,zt.__version=$.version);let xn=zt.currentProgram;oe===!0&&(xn=Os($,Z,J));let wn=!1,Pi=!1,er=!1;const ve=xn.getUniforms(),Be=zt.uniforms;if(Dt.useProgram(xn.program)&&(wn=!0,Pi=!0,er=!0),$.id!==E&&(E=$.id,Pi=!0),wn||A!==R){Dt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",R.projectionMatrix),ve.setValue(z,"viewMatrix",R.matrixWorldInverse);const fi=ve.map.cameraPosition;fi!==void 0&&fi.setValue(z,ct.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ve.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Pi=!0,er=!0)}if(zt.needsLights&&(sn.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",sn.state.directionalShadowMap,Y),sn.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",sn.state.spotShadowMap,Y),sn.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",sn.state.pointShadowMap,Y)),J.isSkinnedMesh){ve.setOptional(z,J,"bindMatrix"),ve.setOptional(z,J,"bindMatrixInverse");const Ue=J.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ve.setValue(z,"boneTexture",Ue.boneTexture,Y))}J.isBatchedMesh&&(ve.setOptional(z,J,"batchingTexture"),ve.setValue(z,"batchingTexture",J._matricesTexture,Y),ve.setOptional(z,J,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",J._indirectTexture,Y),ve.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",J._colorsTexture,Y));const ui=tt.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Ct.update(J,tt,xn),(Pi||zt.receiveShadow!==J.receiveShadow)&&(zt.receiveShadow=J.receiveShadow,ve.setValue(z,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&Z.environment!==null&&(Be.envMapIntensity.value=Z.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Tv()),Pi&&(ve.setValue(z,"toneMappingExposure",M.toneMappingExposure),zt.needsLights&&rd(Be,er),Tt&&$.fog===!0&&kt.refreshFogUniforms(Be,Tt),kt.refreshMaterialUniforms(Be,$,K,H,C.state.transmissionRenderTarget[R.id]),ba.upload(z,kc(zt),Be,Y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ba.upload(z,kc(zt),Be,Y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ve.setValue(z,"center",J.center),ve.setValue(z,"modelViewMatrix",J.modelViewMatrix),ve.setValue(z,"normalMatrix",J.normalMatrix),ve.setValue(z,"modelMatrix",J.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ue=$.uniformsGroups;for(let fi=0,nr=Ue.length;fi<nr;fi++){const Wc=Ue[fi];Lt.update(Wc,xn),Lt.bind(Wc,xn)}}return xn}function rd(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function sd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,Z,tt){const $=b.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=Z,b.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const tt=b.get(R);tt.__webglFramebuffer=Z,tt.__useDefaultFramebuffer=Z===void 0};const ad=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,tt=0){F=R,P=Z,B=tt;let $=null,J=!1,Tt=!1;if(R){const At=b.get(R);if(At.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(z.FRAMEBUFFER,At.__webglFramebuffer),w.copy(R.viewport),D.copy(R.scissor),U=R.scissorTest,Dt.viewport(w),Dt.scissor(D),Dt.setScissorTest(U),E=-1;return}else if(At.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(At.__hasExternalTextures)Y.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Kt=R.depthTexture;if(At.__boundDepthTexture!==Kt){if(Kt!==null&&b.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const Bt=R.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Tt=!0);const Gt=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Gt[Z])?$=Gt[Z][tt]:$=Gt[Z],J=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?$=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Gt)?$=Gt[tt]:$=Gt,w.copy(R.viewport),D.copy(R.scissor),U=R.scissorTest}else w.copy(V).multiplyScalar(K).floor(),D.copy(G).multiplyScalar(K).floor(),U=Q;if(tt!==0&&($=ad),Dt.bindFramebuffer(z.FRAMEBUFFER,$)&&Dt.drawBuffers(R,$),Dt.viewport(w),Dt.scissor(D),Dt.setScissorTest(U),J){const At=b.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At.__webglTexture,tt)}else if(Tt){const At=Z;for(let Bt=0;Bt<R.textures.length;Bt++){const Gt=b.get(R.textures[Bt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Bt,Gt.__webglTexture,tt,At)}}else if(R!==null&&tt!==0){const At=b.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,At.__webglTexture,tt)}E=-1},this.readRenderTargetPixels=function(R,Z,tt,$,J,Tt,It,At=0){if(!(R&&R.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){Dt.bindFramebuffer(z.FRAMEBUFFER,Bt);try{const Gt=R.textures[At],Kt=Gt.format,Qt=Gt.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+At),!ne.textureFormatReadable(Kt)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Qt)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-$&&tt>=0&&tt<=R.height-J&&z.readPixels(Z,tt,$,J,yt.convert(Kt),yt.convert(Qt),Tt)}finally{const Gt=F!==null?b.get(F).__webglFramebuffer:null;Dt.bindFramebuffer(z.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,tt,$,J,Tt,It,At=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt)if(Z>=0&&Z<=R.width-$&&tt>=0&&tt<=R.height-J){Dt.bindFramebuffer(z.FRAMEBUFFER,Bt);const Gt=R.textures[At],Kt=Gt.format,Qt=Gt.type;if(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+At),!ne.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),z.readPixels(Z,tt,$,J,yt.convert(Kt),yt.convert(Qt),0);const me=F!==null?b.get(F).__webglFramebuffer:null;Dt.bindFramebuffer(z.FRAMEBUFFER,me);const we=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Hd(z,we,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(Vt),z.deleteSync(we),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,tt=0){const $=Math.pow(2,-tt),J=Math.floor(R.image.width*$),Tt=Math.floor(R.image.height*$),It=Z!==null?Z.x:0,At=Z!==null?Z.y:0;Y.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,It,At,J,Tt),Dt.unbindTexture()};const od=z.createFramebuffer(),ld=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,tt=null,$=null,J=0,Tt=0){let It,At,Bt,Gt,Kt,Qt,Vt,me,we;const Te=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(tt!==null)It=tt.max.x-tt.min.x,At=tt.max.y-tt.min.y,Bt=tt.isBox3?tt.max.z-tt.min.z:1,Gt=tt.min.x,Kt=tt.min.y,Qt=tt.isBox3?tt.min.z:0;else{const Be=Math.pow(2,-J);It=Math.floor(Te.width*Be),At=Math.floor(Te.height*Be),R.isDataArrayTexture?Bt=Te.depth:R.isData3DTexture?Bt=Math.floor(Te.depth*Be):Bt=1,Gt=0,Kt=0,Qt=0}$!==null?(Vt=$.x,me=$.y,we=$.z):(Vt=0,me=0,we=0);const ge=yt.convert(Z.format),Ve=yt.convert(Z.type);let zt;Z.isData3DTexture?(Y.setTexture3D(Z,0),zt=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Y.setTexture2DArray(Z,0),zt=z.TEXTURE_2D_ARRAY):(Y.setTexture2D(Z,0),zt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const sn=z.getParameter(z.UNPACK_ROW_LENGTH),oe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),xn=z.getParameter(z.UNPACK_SKIP_PIXELS),wn=z.getParameter(z.UNPACK_SKIP_ROWS),Pi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Te.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Te.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Gt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Kt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qt);const er=R.isDataArrayTexture||R.isData3DTexture,ve=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Be=b.get(R),ui=b.get(Z),Ue=b.get(Be.__renderTarget),fi=b.get(ui.__renderTarget);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let nr=0;nr<Bt;nr++)er&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,b.get(R).__webglTexture,J,Qt+nr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,b.get(Z).__webglTexture,Tt,we+nr)),z.blitFramebuffer(Gt,Kt,It,At,Vt,me,It,At,z.DEPTH_BUFFER_BIT,z.NEAREST);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||b.has(R)){const Be=b.get(R),ui=b.get(Z);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,od),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ld);for(let Ue=0;Ue<Bt;Ue++)er?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,J,Qt+Ue):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,J),ve?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ui.__webglTexture,Tt,we+Ue):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ui.__webglTexture,Tt),J!==0?z.blitFramebuffer(Gt,Kt,It,At,Vt,me,It,At,z.COLOR_BUFFER_BIT,z.NEAREST):ve?z.copyTexSubImage3D(zt,Tt,Vt,me,we+Ue,Gt,Kt,It,At):z.copyTexSubImage2D(zt,Tt,Vt,me,Gt,Kt,It,At);Dt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ve?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(zt,Tt,Vt,me,we,It,At,Bt,ge,Ve,Te.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,Tt,Vt,me,we,It,At,Bt,ge,Te.data):z.texSubImage3D(zt,Tt,Vt,me,we,It,At,Bt,ge,Ve,Te):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,Vt,me,It,At,ge,Ve,Te.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,Vt,me,Te.width,Te.height,ge,Te.data):z.texSubImage2D(z.TEXTURE_2D,Tt,Vt,me,It,At,ge,Ve,Te);z.pixelStorei(z.UNPACK_ROW_LENGTH,sn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,xn),z.pixelStorei(z.UNPACK_SKIP_ROWS,wn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pi),Tt===0&&Z.generateMipmaps&&z.generateMipmap(zt),Dt.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Dt.unbindTexture()},this.resetState=function(){P=0,B=0,F=null,Dt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const Jh={type:"change"},Ec={type:"start"},cf={type:"end"},ha=new Xa,$h=new bi,wv=Math.cos(70*Yd.DEG2RAD),Pe=new q,en=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oo=1e-6;class Rv extends Dp{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Ci,this._lastTargetPosition=new q,this._quat=new Ci().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ah,this._sphericalDelta=new Ah,this._scale=1,this._panOffset=new q,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new q,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Iv.bind(this),this._onPointerDown=Cv.bind(this),this._onPointerUp=Pv.bind(this),this._onContextMenu=Bv.bind(this),this._onMouseWheel=Uv.bind(this),this._onKeyDown=Nv.bind(this),this._onTouchStart=Fv.bind(this),this._onTouchMove=Ov.bind(this),this._onMouseDown=Dv.bind(this),this._onMouseMove=Lv.bind(this),this._interceptControlDown=zv.bind(this),this._interceptControlUp=Gv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=_e.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new q(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<wv?this.object.lookAt(this.target):($h.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane($h,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Oo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oo||this._lastTargetPosition.distanceToSquared(this.target)>Oo?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Pe.copy(r).sub(this.target);let s=Pe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new qt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Cv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Iv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Pv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cf),this.state=_e.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Dv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_e.DOLLY;break;case Tr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}break;case Tr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ec)}function Lv(n){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Uv(n){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(n.preventDefault(),this.dispatchEvent(Ec),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(cf))}function Nv(n){this.enabled!==!1&&this._handleKeyDown(n)}function Fv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_e.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_e.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ec)}function Ov(n){switch(this._trackPointer(n),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_e.NONE}}function Bv(n){this.enabled!==!1&&n.preventDefault()}function zv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Et=Object.freeze({NOT_LAS:"NOT_LAS",UNSUPPORTED_VERSION:"UNSUPPORTED_VERSION",UNSUPPORTED:"UNSUPPORTED",COMPRESSED_LAZ:"COMPRESSED_LAZ",TRUNCATED:"TRUNCATED",BAD_HEADER:"BAD_HEADER",BAD_VLR:"BAD_VLR",INVALID_ARGUMENT:"INVALID_ARGUMENT",ABORTED:"ABORTED",TOO_MANY_POINTS:"TOO_MANY_POINTS"});class St extends Error{constructor(t,e,i){var r=typeof i=="number"?e+" (at 0x"+i.toString(16)+")":e;super(r),this.name="LasError",this.code=t,this.offset=i}}function hf(n){if(!n||typeof n.slice!="function"||typeof n.size!="number")throw new St(Et.INVALID_ARGUMENT,"BlobSource needs a File or Blob");this._blob=n,this.size=n.size}hf.prototype.read=async function(n,t){if(n<0||t<n)throw new St(Et.INVALID_ARGUMENT,"bad read range "+n+".."+t);if(t>this.size)throw new St(Et.TRUNCATED,"read past end of "+this.size+"-byte file",t);var e=await this._blob.slice(n,t).arrayBuffer();return new Uint8Array(e)};function An(n){if(!(n instanceof Uint8Array))throw new St(Et.INVALID_ARGUMENT,"MemorySource needs a Uint8Array");this._bytes=n,this._view=new DataView(n.buffer,n.byteOffset,n.byteLength)}function kr(n,t,e){if(t<0||t+e>n._bytes.length)throw new St(Et.TRUNCATED,"read of "+e+" bytes past end of "+n._bytes.length+"-byte source",t)}An.prototype.length=function(){return this._bytes.length};An.prototype.slice=function(n,t){if(n<0||t<n)throw new St(Et.INVALID_ARGUMENT,"bad slice range "+n+".."+t);if(t>this._bytes.length)throw new St(Et.TRUNCATED,"slice past end of "+this._bytes.length+"-byte source",t);return this._bytes.subarray(n,t)};An.prototype.getUint8=function(n){return kr(this,n,1),this._bytes[n]};An.prototype.getUint16=function(n,t){return kr(this,n,2),this._view.getUint16(n,t)};An.prototype.getUint32=function(n,t){return kr(this,n,4),this._view.getUint32(n,t)};An.prototype.getInt16=function(n,t){return kr(this,n,2),this._view.getInt16(n,t)};An.prototype.getInt32=function(n,t){return kr(this,n,4),this._view.getInt32(n,t)};An.prototype.getFloat64=function(n,t){return kr(this,n,8),this._view.getFloat64(n,t)};function Or(n,t){this._handle=n,this.size=t}var Vv=["node","fs/promises"].join(":");Or.open=async function(n){if(typeof n!="string"||!n)throw new St(Et.INVALID_ARGUMENT,"NodeFileSource needs a file path");var t=await import(Vv),e=await t.open(n,"r"),i=await e.stat();return new Or(e,i.size)};Or.prototype.read=async function(n,t){if(n<0||t<n)throw new St(Et.INVALID_ARGUMENT,"bad read range "+n+".."+t);if(t>this.size)throw new St(Et.TRUNCATED,"read past end of "+this.size+"-byte file",t);return this.readInto(n,t,new Uint8Array(t-n))};Or.prototype.readInto=async function(n,t,e){if(n<0||t<n)throw new St(Et.INVALID_ARGUMENT,"bad read range "+n+".."+t);if(t>this.size)throw new St(Et.TRUNCATED,"read past end of "+this.size+"-byte file",t);for(var i=e.subarray(0,t-n),r=0;r<i.length;){var s=await this._handle.read(i,r,i.length-r,n+r);if(s.bytesRead===0)throw new St(Et.TRUNCATED,"file ended early",n+r);r+=s.bytesRead}return i};Or.prototype.close=async function(){this._handle&&(await this._handle.close(),this._handle=null)};var kv=4294967296,Hv=2097151;function us(n,t,e){var i=n.getUint32(t+4,e),r=n.getUint32(t,e);return i>Hv?null:i*kv+r}function ji(n,t,e){for(var i=Math.min(t+e,n.length()),r="",s=t;s<i;s++){var a=n.getUint8(s);if(a===0)break;r+=a>126?"?":String.fromCharCode(a)}return r}function ae(n,t){return{offset:n,type:t}}function _r(){return{x:ae(0,"i32"),y:ae(4,"i32"),z:ae(8,"i32"),intensity:ae(12,"u16"),returnByte:ae(14,"u8"),classByte:ae(15,"u8"),scanAngleRank:ae(16,"i8"),userData:ae(17,"u8"),pointSourceId:ae(18,"u16")}}function es(){return{x:ae(0,"i32"),y:ae(4,"i32"),z:ae(8,"i32"),intensity:ae(12,"u16"),returnByte:ae(14,"u8"),flagsByte:ae(15,"u8"),classification:ae(16,"u8"),userData:ae(17,"u8"),scanAngle:ae(18,"i16"),pointSourceId:ae(20,"u16"),gpsTime:ae(22,"f64")}}function vr(n,t){return n.red=ae(t,"u16"),n.green=ae(t+2,"u16"),n.blue=ae(t+4,"u16"),n}function Wv(){var n=[],t=_r();n[0]={id:0,size:20,extended:!1,fields:t};var e=_r();e.gpsTime=ae(20,"f64"),n[1]={id:1,size:28,extended:!1,fields:e},n[2]={id:2,size:26,extended:!1,fields:vr(_r(),20)};var i=_r();i.gpsTime=ae(20,"f64"),vr(i,28),n[3]={id:3,size:34,extended:!1,fields:i};var r=_r();r.gpsTime=ae(20,"f64"),r.wavePacket=ae(28,"wave"),n[4]={id:4,size:57,extended:!1,fields:r};var s=_r();s.gpsTime=ae(20,"f64"),vr(s,28),s.wavePacket=ae(34,"wave"),n[5]={id:5,size:63,extended:!1,fields:s},n[6]={id:6,size:30,extended:!0,fields:es()},n[7]={id:7,size:36,extended:!0,fields:vr(es(),30)};var a=vr(es(),30);a.nir=ae(36,"u16"),n[8]={id:8,size:38,extended:!0,fields:a};var o=es();o.wavePacket=ae(30,"wave"),n[9]={id:9,size:59,extended:!0,fields:o};var c=vr(es(),30);return c.nir=ae(36,"u16"),c.wavePacket=ae(38,"wave"),n[10]={id:10,size:67,extended:!0,fields:c},n}var Rr=Object.freeze(Wv()),xe=!0;function Xv(n){if(n.length()<227)throw new St(Et.TRUNCATED,"file is shorter than a LAS header",0);if(ji(n,0,4)!=="LASF")throw new St(Et.NOT_LAS,"no LASF signature: not a LAS file",0);var t=n.getUint8(24),e=n.getUint8(25);if(t!==1||e>4)throw new St(Et.UNSUPPORTED_VERSION,"LAS version "+t+"."+e+" is not supported (1.0-1.4)",24);var i=n.getUint16(94,xe);if(i<227)throw new St(Et.BAD_HEADER,"header size "+i+" is below the 227 bytes every version needs",94);var r=n.getUint8(104),s=r&63,a=r>=128||(r&64)!==0;if(s>10)throw new St(Et.BAD_HEADER,"point format "+s+" does not exist (0-10)",104);var o=n.getUint16(105,xe);if(o<Rr[s].size)throw new St(Et.BAD_HEADER,"record length "+o+" is shorter than format "+s+" needs ("+Rr[s].size+")",105);var c=e>=4&&i>=375&&n.length()>=375,l=n.getUint32(107,xe),h=[],u;if(c){if(l=us(n,247,xe),l===null)throw new St(Et.TOO_MANY_POINTS,"more points than JavaScript can count exactly (2^53)",247);for(u=0;u<15;u++)h.push(us(n,255+u*8,xe)||0)}else{for(u=0;u<5;u++)h.push(n.getUint32(111+u*4,xe));for(u=5;u<15;u++)h.push(0)}var f={fileSourceId:n.getUint16(4,xe),globalEncoding:n.getUint16(6,xe),versionMajor:t,versionMinor:e,systemId:ji(n,26,32),software:ji(n,58,32),creationDay:n.getUint16(90,xe),creationYear:n.getUint16(92,xe),headerSize:i,offsetToPointData:n.getUint32(96,xe),numberOfVlrs:n.getUint32(100,xe),pointFormat:s,compressed:a,recordLength:o,extraBytes:o-Rr[s].size,pointCount:l,pointsByReturn:h,scale:{x:n.getFloat64(131,xe),y:n.getFloat64(139,xe),z:n.getFloat64(147,xe)},offset:{x:n.getFloat64(155,xe),y:n.getFloat64(163,xe),z:n.getFloat64(171,xe)},bounds:{minX:n.getFloat64(187,xe),maxX:n.getFloat64(179,xe),minY:n.getFloat64(203,xe),maxY:n.getFloat64(195,xe),minZ:n.getFloat64(219,xe),maxZ:n.getFloat64(211,xe)},waveformStart:0,evlrStart:0,numberOfEvlrs:0};if(e>=3&&i>=235&&n.length()>=235&&(f.waveformStart=us(n,227,xe)||0),c&&(f.evlrStart=us(n,235,xe)||0,f.numberOfEvlrs=n.getUint32(243,xe)),f.offsetToPointData<i)throw new St(Et.BAD_HEADER,"point data starts inside the header",96);return f}var Fa=!0;function Yv(n,t,e,i){for(var r=typeof i=="number"?i:n.length(),s=[],a=t,o=0;o<e;o++){if(a+54>r)throw new St(Et.BAD_VLR,"VLR "+(o+1)+" of "+e+" starts past the end of the VLR area",a);var c=n.getUint16(a+20,Fa);if(a+54+c>r)throw new St(Et.BAD_VLR,"VLR "+(o+1)+" ("+c+" bytes) runs past the end of the VLR area",a);s.push({userId:ji(n,a+2,16),recordId:n.getUint16(a+18,Fa),description:ji(n,a+22,32),start:a+54,length:c,bytes:new Uint8Array(n.slice(a+54,a+54+c))}),a+=54+c}return s}function Zv(n,t,e,i){for(var r=[],s=t,a=0;a<e;a++){if(s+60>n.length())throw new St(Et.BAD_VLR,"EVLR "+(a+1)+" starts past the end of the file",s);var o=us(n,s+20,Fa);if(o===null)throw new St(Et.BAD_VLR,"EVLR "+(a+1)+" runs past the end of the file",s);r.push({userId:ji(n,s+2,16),recordId:n.getUint16(s+18,Fa),description:ji(n,s+28,32),start:s+60,length:o,bytes:null}),s+=60+o}return r}var Kv=34735,qv=2112,jv=3072,Jv=2048,$v=32767;function ns(n,t){return n[t]+n[t+1]*256}function Qv(n){if(n.length<8)return[];for(var t=ns(n,6),e=[],i=0;i<t&&8+i*8+8<=n.length;i++){var r=8+i*8;e.push({keyId:ns(n,r),location:ns(n,r+2),count:ns(n,r+4),value:ns(n,r+6)})}return e}function tx(n){var t=function(i){for(var r=0;r<n.length;r++){var s=n[r];if(s.keyId===i&&s.location===0&&s.value>0&&s.value<$v)return s.value}return null},e=t(jv);return e!==null?e:t(Jv)}function ex(n){for(var t="",e=0;e<n.length&&n[e]!==0;e++)t+=String.fromCharCode(n[e]);return t}function nx(n){var t=null,e=null;(n||[]).forEach(function(s){s.userId==="LASF_Projection"&&(s.recordId===Kv&&t===null&&(t=Qv(s.bytes)),s.recordId===qv&&e===null&&(e=ex(s.bytes)))});var i=t?tx(t):null;if(e!==null){var r={kind:"wkt",epsg:i,wkt:e};return t&&(r.keys=t),r}return t?{kind:"geokeys",epsg:i,keys:t}:{kind:null,epsg:null}}var ix="LASF_Spec",rx=0,Qh=16,sx=15;function ax(n){var t={},e=n.find(function(c){return c.userId===ix&&c.recordId===rx});if(!e||!e.bytes)return t;var i=e.bytes;if(i.length%Qh!==0)throw new St(Et.BAD_VLR,"the classification lookup VLR is "+i.length+" bytes, not a multiple of 16");for(var r=0;r<i.length;r+=Qh){for(var s="",a=!0,o=1;o<=sx&&i[r+o]!==0;o++)(i[r+o]<32||i[r+o]>126)&&(a=!1),s+=String.fromCharCode(i[r+o]);a&&s.trim()&&!(i[r]in t)&&(t[i[r]]=s)}return t}function Ql(n){return new St(Et.INVALID_ARGUMENT,n)}function ox(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function uf(n){if(n===null||typeof n!="object")throw Ql("columns must be an object { count, <name>: TypedArray }");var t=n.count;if(typeof t!="number"||!Number.isInteger(t)||t<0)throw Ql("count "+String(t)+" is not a whole number ≥ 0");return t}function bc(n){var t=uf(n),e=[];return Object.keys(n).forEach(function(i){var r=n[i];if(ox(r)){if(t===0){r.length===0&&e.push({name:i,k:1});return}var s=r.length/t;Number.isInteger(s)&&s>=1&&e.push({name:i,k:s})}}),e}function fs(n,t){var e=globalThis[Object.prototype.toString.call(n).slice(8,-1)];return new e(t)}function lx(n,t,e,i){var r=i.length;if(e===1){for(var s=0;s<r;s++)t[s]=n[i[s]];return}for(var a=0;a<r;a++)for(var o=i[a]*e,c=a*e,l=0;l<e;l++)t[c+l]=n[o+l]}function cx(n,t){for(var e=0;e<t.length;e++){var i=n[t[e].name];if(i.byteLength!==0)for(var r=e+1;r<t.length;r++){var s=n[t[r].name];if(!(s.byteLength===0||i.buffer!==s.buffer)&&i.byteOffset<s.byteOffset+s.byteLength&&s.byteOffset<i.byteOffset+i.byteLength)throw Ql('inPlace: columns "'+t[e].name+'" and "'+t[r].name+'" share memory')}}}function Zi(n){return new St(Et.INVALID_ARGUMENT,n)}function hx(n){if(!Array.isArray(n)&&!(ArrayBuffer.isView(n)&&!(n instanceof DataView)))throw Zi("polygon must be an Array or typed array [x0, y0, x1, y1, ...]");var t=n.length;if(t%2!==0)throw Zi("polygon has an odd length "+t+": it holds x, y pairs");if(t<6)throw Zi("polygon needs at least 3 vertices (6 values), got "+t);for(var e=new Float64Array(t),i=0;i<t;i++){var r=n[i];if(typeof r!="number"||!Number.isFinite(r))throw Zi("polygon["+i+"] = "+String(r)+" is not a finite number");e[i]=r}return e}function ux(n,t){if(t==null&&(t={}),typeof t!="object")throw Zi("options must be an object { boundary, tolerance }");var e=hx(n),i=t.boundary===void 0?"touching":t.boundary;if(i!=="touching"&&i!=="inside")throw Zi('boundary must be "touching" or "inside", got '+String(i));var r=t.tolerance===void 0?0:t.tolerance;if(typeof r!="number"||!Number.isFinite(r)||r<0)throw Zi("tolerance must be a finite number ≥ 0, got "+String(r));for(var s=i==="touching",a=r*r,o=e.length/2,c=1/0,l=-1/0,h=1/0,u=-1/0,f=0;f<o;f++)e[2*f]<c&&(c=e[2*f]),e[2*f]>l&&(l=e[2*f]),e[2*f+1]<h&&(h=e[2*f+1]),e[2*f+1]>u&&(u=e[2*f+1]);c-=r,l+=r,h-=r,u+=r;function d(_,g,m,v,y,S){var C=y-m,T=S-v,I=_-m,x=g-v,M=C*C+T*T;if(M===0)return I*I+x*x;if(C*x-T*I===0&&_>=Math.min(m,y)&&_<=Math.max(m,y)&&g>=Math.min(v,S)&&g<=Math.max(v,S))return 0;var N=(I*C+x*T)/M;N<0?N=0:N>1&&(N=1);var P=_-(m+N*C),B=g-(v+N*T);return P*P+B*B}function p(_,g){if(!(_>=c&&_<=l&&g>=h&&g<=u))return!1;for(var m=!1,v=0,y=o-1;v<o;y=v++){var S=e[2*y],C=e[2*y+1],T=e[2*v],I=e[2*v+1];if(d(_,g,S,C,T,I)<=a)return s;I>g!=C>g&&_<(S-T)*(g-I)/(C-I)+T&&(m=!m)}return m}return{test:p,minX:c,maxX:l,minY:h,maxY:u}}function tu(n){return new St(Et.INVALID_ARGUMENT,n)}function eu(n){return typeof n=="number"&&Number.isInteger(n)&&n>=0}function ff(n){return n.acc+=n.target,n.acc<n.total?!1:(n.acc-=n.total,!0)}function fx(n,t){if(!eu(n))throw tu("count "+String(n)+" is not a whole number ≥ 0");if(!eu(t))throw tu("target "+String(t)+" is not a whole number ≥ 0");var e,i;if(t>=n){for(e=new Uint32Array(n),i=0;i<n;i++)e[i]=i;return e}e=new Uint32Array(t);var r={total:n,target:t,acc:0},s=0;for(i=0;i<n&&s<t;i++)ff(r)&&(e[s++]=i);return e}function Bo(n){return new St(Et.INVALID_ARGUMENT,n)}function dx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function nu(n,t){if(!Array.isArray(n)&&!(dx(n)&&!(n instanceof BigInt64Array)&&!(n instanceof BigUint64Array))||n.length!==t)return!1;for(var e=0;e<t;e++)if(typeof n[e]!="number"||!isFinite(n[e]))return!1;return!0}function df(n,t){if(n===null||typeof n!="object")throw Bo(t+" must be an object { m, t }");if(!nu(n.m,9))throw Bo(t+".m must be 9 finite numbers (a row-major 3×3)");if(!nu(n.t,3))throw Bo(t+".t must be 3 finite numbers");return n}var px=Object.freeze(["x","y","z","intensity","returnNumber","numberOfReturns","classification"]),pf=Object.freeze({x:Float64Array,y:Float64Array,z:Float64Array,intensity:Uint16Array,returnNumber:Uint8Array,numberOfReturns:Uint8Array,scanDirection:Uint8Array,edgeOfFlightLine:Uint8Array,classification:Uint8Array,classificationFlags:Uint8Array,scannerChannel:Uint8Array,scanAngle:Float32Array,userData:Uint8Array,pointSourceId:Uint16Array,gpsTime:Float64Array,red:Uint16Array,green:Uint16Array,blue:Uint16Array,nir:Uint16Array,index:Uint32Array}),nn=!0;function mx(n){var t=n.fields,e={x:1,y:1,z:1,intensity:1,returnNumber:1,numberOfReturns:1,scanDirection:1,edgeOfFlightLine:1,classification:1,classificationFlags:1,scanAngle:1,userData:1,pointSourceId:1,index:1};return n.extended&&(e.scannerChannel=1),t.gpsTime&&(e.gpsTime=1),t.red&&(e.red=1,e.green=1,e.blue=1),t.nir&&(e.nir=1),e}function qa(n,t){var e=Rr[n.pointFormat],i=mx(e),r=t?t.slice():px.concat(e.fields.red?["red","green","blue"]:[]);return r.forEach(function(s){if(!pf[s])throw new St(Et.INVALID_ARGUMENT,'unknown field "'+s+'"')}),r.filter(function(s){return i[s]})}function gx(n,t,e){e=e||{};var i=Rr[t.pointFormat],r=qa(t,e.fields),s=t.recordLength,a=Math.floor(n.length/s),o=new DataView(n.buffer,n.byteOffset,n.byteLength),c=e.thin&&e.thin.target<e.thin.total?e.thin:null,l=typeof e.keep=="function"?e.keep:null,h=e.localOrigin||null,u=h&&isFinite(h.x)?h.x:0,f=h&&isFinite(h.y)?h.y:0,d=h&&isFinite(h.z)?h.z:0;e.float32;var p=e.firstIndex>0?e.firstIndex:0,_=e.transform?df(e.transform,"transform"):null,g=0,m=0,v=0,y=0,S=0,C=0,T=0,I=0,x=0,M=0,N=0,P=0;_&&(g=_.m[0],m=_.m[1],v=_.m[2],y=_.m[3],S=_.m[4],C=_.m[5],T=_.m[6],I=_.m[7],x=_.m[8],M=_.t[0],N=_.t[1],P=_.t[2]);var B=e.into||null,F=B?B.cols:{};B||r.forEach(function(dt){F[dt]=new(mf(dt,e,t))(a)});var E=i.fields,A=t.scale.x,w=t.scale.y,D=t.scale.z,U=t.offset.x-u,k=t.offset.y-f,O=t.offset.z-d,X=i.extended,H={};r.forEach(function(dt){H[dt]=!0});for(var K=!!(_&&(H.x||H.y||H.z)),et=t.offset.x,nt=t.offset.y,V=t.offset.z,G=B?B.at:0,Q=0;Q<a;Q++){var at=Q*s;if(!(l&&!l(o,at))&&!(c&&!ff(c))){if(H.index&&(F.index[G]=p+Q),K){var rt=o.getInt32(at,nn)*A+et,j=o.getInt32(at+4,nn)*w+nt,ht=o.getInt32(at+8,nn)*D+V;H.x&&(F.x[G]=g*rt+m*j+v*ht+M-u),H.y&&(F.y[G]=y*rt+S*j+C*ht+N-f),H.z&&(F.z[G]=T*rt+I*j+x*ht+P-d)}else H.x&&(F.x[G]=o.getInt32(at,nn)*A+U),H.y&&(F.y[G]=o.getInt32(at+4,nn)*w+k),H.z&&(F.z[G]=o.getInt32(at+8,nn)*D+O);H.intensity&&(F.intensity[G]=o.getUint16(at+12,nn));var ct=o.getUint8(at+14);if(X){var xt=o.getUint8(at+15);H.returnNumber&&(F.returnNumber[G]=ct&15),H.numberOfReturns&&(F.numberOfReturns[G]=ct>>4&15),H.classificationFlags&&(F.classificationFlags[G]=xt&15),H.scannerChannel&&(F.scannerChannel[G]=xt>>4&3),H.scanDirection&&(F.scanDirection[G]=xt>>6&1),H.edgeOfFlightLine&&(F.edgeOfFlightLine[G]=xt>>7&1),H.classification&&(F.classification[G]=o.getUint8(at+16)),H.scanAngle&&(F.scanAngle[G]=o.getInt16(at+18,nn)*.006)}else{var gt=o.getUint8(at+15);H.returnNumber&&(F.returnNumber[G]=ct&7),H.numberOfReturns&&(F.numberOfReturns[G]=ct>>3&7),H.scanDirection&&(F.scanDirection[G]=ct>>6&1),H.edgeOfFlightLine&&(F.edgeOfFlightLine[G]=ct>>7&1),H.classification&&(F.classification[G]=gt&31),H.classificationFlags&&(F.classificationFlags[G]=gt>>5&7),H.scanAngle&&(F.scanAngle[G]=o.getInt8(at+16))}H.userData&&(F.userData[G]=o.getUint8(at+17)),H.pointSourceId&&(F.pointSourceId[G]=o.getUint16(at+E.pointSourceId.offset,nn)),H.gpsTime&&(F.gpsTime[G]=o.getFloat64(at+E.gpsTime.offset,nn)),H.red&&(F.red[G]=o.getUint16(at+E.red.offset,nn)),H.green&&(F.green[G]=o.getUint16(at+E.green.offset,nn)),H.blue&&(F.blue[G]=o.getUint16(at+E.blue.offset,nn)),H.nir&&(F.nir[G]=o.getUint16(at+E.nir.offset,nn)),G++}}return B?{count:G-B.at}:(G<a&&r.forEach(function(dt){F[dt]=F[dt].slice(0,G)}),F.count=G,F)}function mf(n,t,e){if(n==="index")return e&&e.pointCount>4294967295?Float64Array:Uint32Array;var i=!!(t&&t.float32&&t.localOrigin);return i&&(n==="x"||n==="y"||n==="z")?Float32Array:pf[n]}function _x(n,t){for(var e=n.recordLength,i=Math.max(1,Math.floor(t/e)),r=[],s=0;s<n.pointCount;s+=i){var a=Math.min(i,n.pointCount-s),o=n.offsetToPointData+s*e;r.push({start:o,end:o+a*e,firstRecord:s,count:a})}return r}function vx(n,t,e){var i=[],r=null;return n.forEach(function(s){r&&(r.count+s.count)*t>e&&(i.push(r),r=null),r||(r={start:s.start,end:s.end,firstRecord:s.firstRecord,count:0,chunks:[]}),r.end=s.end,r.count+=s.count,r.chunks.push(s)}),r&&i.push(r),i}var Ta=Object.freeze({NONE:0,POINTWISE:1,POINTWISE_CHUNKED:2,LAYERED_CHUNKED:3}),ce=Object.freeze({BYTE:0,POINT10:6,GPSTIME11:7,RGB12:8,WAVEPACKET13:9,POINT14:10,RGB14:11,RGBNIR14:12,WAVEPACKET14:13,BYTE14:14}),xx="laszip encoded",Mx=22204,iu=4294967295;function yx(n){if(!n||n.length<34)throw new St(Et.BAD_VLR,"the LASzip VLR is "+(n?n.length:0)+" bytes (needs 34 or more)");var t=new DataView(n.buffer,n.byteOffset,n.byteLength),e=t.getUint16(32,!0);if(n.length<34+e*6)throw new St(Et.BAD_VLR,"the LASzip VLR lists "+e+" items but holds only "+n.length+" bytes");for(var i=t.getUint32(12,!0),r=[],s=0;s<e;s++)r.push({type:t.getUint16(34+s*6,!0),size:t.getUint16(36+s*6,!0),version:t.getUint16(38+s*6,!0)});return{compressor:t.getUint16(0,!0),coder:t.getUint16(2,!0),version:{major:t.getUint8(4),minor:t.getUint8(5),revision:t.getUint16(6,!0)},options:t.getUint32(8,!0),chunkSize:i===0?iu:i,variableChunks:i===0||i===iu,items:r}}function gf(n){for(var t=0;t<n.length;t++)if(n[t].recordId===Mx&&n[t].userId===xx)return yx(n[t].bytes);return null}ce.POINT10,ce.POINT10,ce.GPSTIME11,ce.POINT10,ce.RGB12,ce.POINT10,ce.GPSTIME11,ce.RGB12,ce.POINT14,ce.POINT14,ce.RGB14,ce.POINT14,ce.RGBNIR14;var _f=4294967295,Ps=16777216;function vn(n,t,e,i){this.bytes=n,this.base=i||0,this.p=t||0,this.end=e===void 0?n.length:e,this.value=0,this.range=_f}vn.prototype._next=function(){if(this.p>=this.end)throw new St(Et.TRUNCATED,"compressed LAZ data ended early",this.base+this.p);return this.bytes[this.p++]};vn.prototype.readInitBytes=function(){this.value=this._next()*16777216+this._next()*65536+this._next()*256+this._next(),this.range=_f};vn.prototype._renorm=function(){do this.value=(this.value<<8|this._next())>>>0,this.range=this.range<<8>>>0;while(this.range<Ps)};vn.prototype.decodeBit=function(n){var t=n.bit0Prob*(this.range>>>13),e;return this.value<t?(e=0,this.range=t,n.bit0Count++):(e=1,this.value-=t,this.range-=t),this.range<Ps&&this._renorm(),--n.bitsUntilUpdate===0&&n.update(),e};vn.prototype.decodeSymbol=function(n){var t=n.distribution,e,i,r,s,a=this.range;if(n.decoderTable){if(this.range=this.range>>>15,this.range===0)throw new St(Et.TRUNCATED,"corrupt LAZ stream (zero interval)",this.base+this.p);var o=this.value/this.range>>>0,c=o>>>n.tableShift;for(e=n.decoderTable[c],i=n.decoderTable[c+1]+1;i>e+1;)s=e+i>>>1,t[s]>o?i=s:e=s;r=t[e]*this.range,e!==n.lastSymbol&&(a=t[e+1]*this.range)}else{r=0,e=0,this.range=this.range>>>15,i=n.symbols,s=i>>>1;do{var l=this.range*t[s];l>this.value?(i=s,a=l):(e=s,r=l),s=e+i>>>1}while(s!==e)}return this.value-=r,this.range=a-r,this.range<Ps&&this._renorm(),n.symbolCount[e]++,--n.symbolsUntilUpdate===0&&n.update(),e};vn.prototype.readBits=function(n){if(n>19){var t=this.readShort();return this.readBits(n-16)*65536+t}this.range=this.range>>>n;var e=this.value/this.range>>>0;return this.value-=this.range*e,this.range<Ps&&this._renorm(),e};vn.prototype.readShort=function(){this.range=this.range>>>16;var n=this.value/this.range>>>0;return this.value-=this.range*n,this.range<Ps&&this._renorm(),n};vn.prototype.readInt=function(){var n=this.readShort();return this.readShort()*65536+n};var Sx=15,Ex=32768,bx=8192;function ye(n,t){if(!(n>=2&&n<=2048))throw new St(Et.UNSUPPORTED,"LAZ model with "+n+" symbols (2-2048)");if(this.symbols=n,this.lastSymbol=n-1,this.tableSize=0,this.tableShift=0,this.decoderTable=null,n>16){for(var e=3;n>Math.pow(2,e+2);)e++;this.tableSize=Math.pow(2,e),this.tableShift=Sx-e,this.decoderTable=new Uint32Array(this.tableSize+2)}this.distribution=new Uint32Array(n),this.symbolCount=new Uint32Array(n);for(var i=0;i<n;i++)this.symbolCount[i]=t?t[i]:1;this.totalCount=0,this.updateCycle=n,this.symbolsUntilUpdate=0,this.update(),this.symbolsUntilUpdate=this.updateCycle=n+6>>>1}ye.prototype.update=function(){var n=this.symbolCount,t=this.distribution,e=this.symbols,i;if(this.totalCount+=this.updateCycle,this.totalCount>Ex)for(this.totalCount=0,i=0;i<e;i++)n[i]=n[i]+1>>>1,this.totalCount+=n[i];var r=0,s=Math.floor(2147483648/this.totalCount);if(this.decoderTable){var a=this.decoderTable,o=this.tableShift,c=0;for(i=0;i<e;i++){t[i]=s*r>>>16,r+=n[i];for(var l=t[i]>>>o;c<l;)c++,a[c]=i-1}for(a[0]=0;c<=this.tableSize;)c++,a[c]=e-1}else for(i=0;i<e;i++)t[i]=s*r>>>16,r+=n[i];this.updateCycle=5*this.updateCycle>>>2;var h=(e+6)*8;this.updateCycle>h&&(this.updateCycle=h),this.symbolsUntilUpdate=this.updateCycle};function vf(){this.bit0Count=1,this.bitCount=2,this.bit0Prob=4096,this.bitsUntilUpdate=4,this.updateCycle=4}vf.prototype.update=function(){this.bitCount+=this.updateCycle,this.bitCount>bx&&(this.bitCount=this.bitCount+1>>>1,this.bit0Count=this.bit0Count+1>>>1,this.bit0Count===this.bitCount&&this.bitCount++);var n=Math.floor(2147483648/this.bitCount);this.bit0Prob=this.bit0Count*n>>>18,this.updateCycle=5*this.updateCycle>>>2,this.updateCycle>64&&(this.updateCycle=64),this.bitsUntilUpdate=this.updateCycle};var Aa=new Float64Array(33);for(var ua=0;ua<=32;ua++)Aa[ua]=Math.pow(2,ua);function Hr(n,t,e){n=n===void 0?16:n,this.contexts=t===void 0?1:t,this.bitsHigh=e===void 0?8:e,n&&n<32?(this.corrBits=n,this.corrRange=Math.pow(2,n),this.corrMin=-Math.floor(this.corrRange/2)):(this.corrBits=32,this.corrRange=0,this.corrMin=-2147483648),this.corrRangeI32=this.corrRange>2147483647?this.corrRange-4294967296:this.corrRange,this.k=0,this.mBits=[];for(var i=0;i<this.contexts;i++)this.mBits.push(new ye(this.corrBits+1));this.mCorrector0=new vf,this.mCorrector=[];for(var r=1;r<=this.corrBits;r++)this.mCorrector.push(new ye(Math.pow(2,r<=this.bitsHigh?r:this.bitsHigh)))}Hr.prototype.decompress=function(n,t,e){var i=n.decodeSymbol(this.mBits[e]),r;if(this.k=i,i!==0)if(i<32){if(i<=this.bitsHigh)r=n.decodeSymbol(this.mCorrector[i-1]);else{var s=i-this.bitsHigh;r=n.decodeSymbol(this.mCorrector[i-1])*Aa[s]+n.readBits(s)}r>=Aa[i-1]?r+=1:r-=Aa[i]-1}else r=this.corrMin;else r=n.decodeBit(this.mCorrector0);var a=t+r|0;return a<0?a=a+this.corrRangeI32|0:a>=this.corrRangeI32&&(a=a-this.corrRangeI32|0),a};function ru(n,t){var e=new DataView(n.buffer,n.byteOffset,n.byteLength),i=e.getUint32(t,!0),r=e.getInt32(t+4,!0);if(r>2097151||r<-2097152)throw new St(Et.BAD_HEADER,"LAZ chunk table offset is out of range",t);return r*4294967296+i}function Tx(n,t,e){if(n.length<8)throw new St(Et.TRUNCATED,"the LAZ chunk table is cut short");var i=new DataView(n.buffer,n.byteOffset,n.byteLength),r=i.getUint32(4,!0),s=[];if(!r)return s;var a=new vn(n,8,n.length,e);a.readInitBytes();for(var o=new Hr(32,2),c=0,l=0,h=0;h<r;h++){var u=t?o.decompress(a,c,0):0,f=o.decompress(a,l,1);c=u,l=f,s.push({pointCount:u<0?u+4294967296:u,byteCount:f<0?f+4294967296:f})}return s}async function Ax(n,t,e){var i=t.offsetToPointData,r=t.pointCount;if(e.compressor===Ta.POINTWISE){var s=t.evlrStart>i&&t.evlrStart<=n.size?t.evlrStart:n.size;return r?[{firstRecord:0,count:r,start:i,end:s}]:[]}if(e.compressor!==Ta.POINTWISE_CHUNKED&&e.compressor!==Ta.LAYERED_CHUNKED)throw new St(Et.UNSUPPORTED,"LAZ compressor "+e.compressor+" is not one LASzip defines (1-3)");if(i+8>n.size)throw new St(Et.TRUNCATED,"the LAZ point data is cut short",n.size);var a=ru(await n.read(i,i+8),0);if(a<=i){if(a=ru(await n.read(n.size-8,n.size),0),a<=i||a>=n.size)throw new St(Et.UNSUPPORTED,"this LAZ file has no chunk table (an unfinished write?); it cannot be read in windows")}else if(a>=n.size)throw new St(Et.TRUNCATED,"the LAZ chunk table should be at byte "+a+" but the file is "+n.size+" bytes (cut short?)",n.size);for(var o=await n.read(a,Math.min(n.size,a+8)),c=o.length===8?new DataView(o.buffer,o.byteOffset,8).getUint32(4,!0):0,l=Tx(await n.read(a,Math.min(n.size,a+8+c*24+16)),e.variableChunks,a),h=[],u=i+8,f=0,d=0;d<l.length&&f<r;d++){var p=e.variableChunks?l[d].pointCount:Math.min(e.chunkSize,r-f),_=u+l[d].byteCount;if(_>a)throw new St(Et.BAD_HEADER,"LAZ chunk "+d+" runs into the chunk table",u);h.push({firstRecord:f,count:p,start:u,end:_}),f+=p,u=_}if(e.variableChunks){var g=l.reduce(function(m,v){return m+v.pointCount},0);if(g!==r)throw new St(Et.BAD_HEADER,"the LAZ chunk table lists "+g+" points but the header says "+r,a)}if(f<r)throw new St(Et.TRUNCATED,"the LAZ chunk table covers "+f+" of "+r+" points",a);return h}var ni=!0,su=[[15,14,13,12,11,10,9,8],[14,0,1,3,6,10,10,9],[13,1,2,4,7,11,11,10],[12,3,4,5,8,12,12,11],[11,6,7,8,9,13,13,12],[10,10,11,12,13,14,14,13],[9,10,11,12,13,14,15,14],[8,9,10,11,12,13,14,15]],au=[[0,1,2,3,4,5,6,7],[1,0,1,2,3,4,5,6],[2,1,0,1,2,3,4,5],[3,2,1,0,1,2,3,4],[4,3,2,1,0,1,2,3],[5,4,3,2,1,0,1,2],[6,5,4,3,2,1,0,1],[7,6,5,4,3,2,1,0]];function ja(){this.v=new Int32Array(5),this.high=!0}ja.prototype.get=function(){return this.v[2]};ja.prototype.add=function(n){var t=this.v;this.high?n<t[2]?(t[4]=t[3],t[3]=t[2],n<t[0]?(t[2]=t[1],t[1]=t[0],t[0]=n):n<t[1]?(t[2]=t[1],t[1]=n):t[2]=n):(n<t[3]?(t[4]=t[3],t[3]=n):t[4]=n,this.high=!1):t[2]<n?(t[0]=t[1],t[1]=t[2],t[4]<n?(t[2]=t[3],t[3]=t[4],t[4]=n):t[3]<n?(t[2]=t[3],t[3]=n):t[2]=n):(t[1]<n?(t[0]=t[1],t[1]=n):t[0]=n,this.high=!0)};function wx(n,t){for(var e=[],i=0;i<n;i++)e.push(new ye(t));return e}function zo(n,t){return n[t]||(n[t]=new ye(256))}function ou(){for(var n=[],t=0;t<16;t++)n.push(new ja);return n}function xf(n,t){var e=t.k;return n+(e<20?e&4294967294:20)}function Mf(n,t,e){var i=Math.floor((t.k+e.k)/2);return n+(i<18?i&4294967294:18)}function Rx(n,t){n.size=20,n.lastIntensity=new Uint16Array(16),n.xMedian=ou(),n.yMedian=ou(),n.lastHeight=new Int32Array(8),n.changedValues=new ye(64),n.scanAngleRank=wx(2,256),n.bitByte=new Array(256),n.classification=new Array(256),n.userData=new Array(256),n.icIntensity=new t(16,4),n.icPointSourceId=new t(16,1),n.icDx=new t(32,2),n.icDy=new t(32,22),n.icZ=new t(32,20)}function Tc(){Rx(this,Hr)}Tc.prototype.first=function(n,t,e,i){for(var r=0;r<20;r++)e.setUint8(i+r,n[t+r]);this.x=e.getInt32(i,ni),this.y=e.getInt32(i+4,ni),this.z=e.getInt32(i+8,ni),this.intensity=0,this.bits=e.getUint8(i+14),this.cls=e.getUint8(i+15),this.angle=e.getInt8(i+16),this.user=e.getUint8(i+17),this.psid=e.getUint16(i+18,ni)};Tc.prototype.next=function(n,t,e){var i=n.decodeSymbol(this.changedValues),r,s,a,o;if(i!==0){if(i&32&&(this.bits=n.decodeSymbol(zo(this.bitByte,this.bits))),r=this.bits&7,s=this.bits>>>3&7,a=su[s][r],o=au[s][r],i&16?(this.intensity=this.icIntensity.decompress(n,this.lastIntensity[a],a<3?a:3),this.lastIntensity[a]=this.intensity):this.intensity=this.lastIntensity[a],i&8&&(this.cls=n.decodeSymbol(zo(this.classification,this.cls))),i&4){var c=n.decodeSymbol(this.scanAngleRank[this.bits>>>6&1]);this.angle=this.angle+c<<24>>24}i&2&&(this.user=n.decodeSymbol(zo(this.userData,this.user))),i&1&&(this.psid=this.icPointSourceId.decompress(n,this.psid,0))}else r=this.bits&7,s=this.bits>>>3&7,a=su[s][r],o=au[s][r];var l=s===1?1:0,h=this.icDx.decompress(n,this.xMedian[a].get(),l);this.x=this.x+h|0,this.xMedian[a].add(h),h=this.icDy.decompress(n,this.yMedian[a].get(),xf(l,this.icDx)),this.y=this.y+h|0,this.yMedian[a].add(h),this.z=this.icZ.decompress(n,this.lastHeight[o],Mf(l,this.icDx,this.icDy)),this.lastHeight[o]=this.z,t.setInt32(e,this.x,ni),t.setInt32(e+4,this.y,ni),t.setInt32(e+8,this.z,ni),t.setUint16(e+12,this.intensity,ni),t.setUint8(e+14,this.bits),t.setUint8(e+15,this.cls),t.setInt8(e+16,this.angle),t.setUint8(e+17,this.user),t.setUint16(e+18,this.psid,ni)};var Oa=!0,Ki=500,Ts=-10,Cx=Ki-Ts+1,Go=Ki-Ts+2,Ix=Ki-Ts+6;function Px(n,t){n.size=8,n.multiModel=new ye(Ix),n.zeroDiffModel=new ye(6),n.ic=new t(32,9),n.last=0,n.nextSeq=0,n.hi=new Int32Array(4),n.lo=new Float64Array(4),n.diffs=new Int32Array(4),n.extremes=new Int32Array(4)}function Dx(n,t,e){n.nextSeq=n.nextSeq+1&3,n.hi[n.nextSeq]=t,n.lo[n.nextSeq]=e,n.last=n.nextSeq,n.diffs[n.last]=0,n.extremes[n.last]=0}function Vo(n,t){++n.extremes[n.last]>3&&(n.diffs[n.last]=t,n.extremes[n.last]=0)}function Ds(){Px(this,Hr)}Ds.prototype._add=function(n,t){var e=this.lo[n]+t;e>=4294967296?(e-=4294967296,this.hi[n]=this.hi[n]+1|0):e<0&&(e+=4294967296,this.hi[n]=this.hi[n]-1|0),this.lo[n]=e};Ds.prototype._full=function(n){var t=this.ic.decompress(n,this.hi[this.last],8);Dx(this,t,n.readInt())};Ds.prototype.first=function(n,t,e,i){for(var r=0;r<8;r++)e.setUint8(i+r,n[t+r]);this.lo[0]=e.getUint32(i,Oa),this.hi[0]=e.getInt32(i+4,Oa)};Ds.prototype.next=function(n,t,e){for(;;){var i=this.last,r,s;if(this.diffs[i]===0){if(r=n.decodeSymbol(this.zeroDiffModel),r===1)this.diffs[i]=this.ic.decompress(n,0,0),this._add(i,this.diffs[i]),this.extremes[i]=0;else if(r===2)this._full(n);else if(r>2){this.last=i+r-2&3;continue}}else if(r=n.decodeSymbol(this.multiModel),r===1)this._add(i,this.ic.decompress(n,this.diffs[i],1)),this.extremes[i]=0;else if(r<Cx)r===0?(s=this.ic.decompress(n,0,7),Vo(this,s)):r<Ki?s=this.ic.decompress(n,Math.imul(r,this.diffs[i]),r<10?2:3):r===Ki?(s=this.ic.decompress(n,Math.imul(Ki,this.diffs[i]),4),Vo(this,s)):(r=Ki-r,r>Ts?s=this.ic.decompress(n,Math.imul(r,this.diffs[i]),5):(s=this.ic.decompress(n,Math.imul(Ts,this.diffs[i]),6),Vo(this,s))),this._add(i,s);else if(r===Go)this._full(n);else if(r>Go){this.last=i+r-Go&3;continue}break}t.setUint32(e,this.lo[this.last],Oa),t.setInt32(e+4,this.hi[this.last],Oa)};function Lx(n,t){var e=Math.fround(Math.fround(n)/Math.fround(t)),i=e>=0?Math.floor(e+.5):-Math.floor(.5-e);return i>2147483647?-2147483648:i}function yf(n,t,e,i){var r=t-i,s=n-e;return r<0&&(r+=4294967296,s-=1),s=s|0,s===0&&r<2147483648?r:s===-1&&r>=2147483648?r-4294967296:null}var Cr=!0;function fa(n){return n<0?0:n>255?255:n}function ds(){this.byteUsed=new ye(128),this.lowRed=new ye(256),this.highRed=new ye(256),this.lowGreen=new ye(256),this.highGreen=new ye(256),this.lowBlue=new ye(256),this.highBlue=new ye(256)}function Sf(n,t,e){var i=n.decodeSymbol(t.byteUsed),r=e[0],s=e[1],a=e[2],o,c,l,h;o=i&1?n.decodeSymbol(t.lowRed)+(r&255)&255:r&255,o+=i&2?(n.decodeSymbol(t.highRed)+(r>>>8)&255)*256:r&65280,i&64?(h=(o&255)-(r&255),c=i&4?n.decodeSymbol(t.lowGreen)+fa(h+(s&255))&255:s&255,i&16?(h=Math.trunc((h+(c&255)-(s&255))/2),l=n.decodeSymbol(t.lowBlue)+fa(h+(a&255))&255):l=a&255,h=(o>>>8)-(r>>>8),c+=i&8?(n.decodeSymbol(t.highGreen)+fa(h+(s>>>8))&255)*256:s&65280,i&32?(h=Math.trunc((h+(c>>>8)-(s>>>8))/2),l+=(n.decodeSymbol(t.highBlue)+fa(h+(a>>>8))&255)*256):l+=a&65280):(c=o,l=o),e[0]=o,e[1]=c,e[2]=l}function Ux(n){n.size=6,n.models=new ds,n.last=new Uint16Array(3)}function Ac(){Ux(this)}Ac.prototype.first=function(n,t,e,i){for(var r=0;r<6;r++)e.setUint8(i+r,n[t+r]);this.last[0]=e.getUint16(i,Cr),this.last[1]=e.getUint16(i+2,Cr),this.last[2]=e.getUint16(i+4,Cr)};Ac.prototype.next=function(n,t,e){Sf(n,this.models,this.last),t.setUint16(e,this.last[0],Cr),t.setUint16(e+2,this.last[1],Cr),t.setUint16(e+4,this.last[2],Cr)};function Nx(n,t,e){n[0]=t[e]+t[e+1]*256,n[1]=t[e+2]+t[e+3]*256,n[2]=t[e+4]+t[e+5]*256}function Fx(n,t){n.size=t,n.last=new Uint8Array(t),n.models=[];for(var e=0;e<t;e++)n.models.push(new ye(256))}function wc(n){Fx(this,n)}wc.prototype.first=function(n,t,e,i){for(var r=0;r<this.size;r++)this.last[r]=n[t+r],e.setUint8(i+r,n[t+r])};wc.prototype.next=function(n,t,e){for(var i=0;i<this.size;i++)this.last[i]=this.last[i]+n.decodeSymbol(this.models[i])&255,t.setUint8(e+i,this.last[i])};var ze=!0,pn=500,Ji=-10,gs=pn-Ji+1,Ox=pn-Ji+5,Bx=[[0,1,2,3,4,5,3,4,4,5,5,5,5,5,5,5],[1,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3],[2,1,2,4,4,4,4,4,4,4,4,3,3,3,3,3],[3,3,4,5,4,4,4,4,4,4,4,4,4,4,4,4],[4,3,4,4,5,4,4,4,4,4,4,4,4,4,4,4],[5,3,4,4,4,5,4,4,4,4,4,4,4,4,4,4],[3,3,4,4,4,4,5,4,4,4,4,4,4,4,4,4],[4,3,4,4,4,4,4,5,4,4,4,4,4,4,4,4],[4,3,4,4,4,4,4,4,5,4,4,4,4,4,4,4],[5,3,4,4,4,4,4,4,4,5,4,4,4,4,4,4],[5,3,4,4,4,4,4,4,4,4,5,4,4,4,4,4],[5,3,3,4,4,4,4,4,4,4,4,5,5,4,4,4],[5,3,3,4,4,4,4,4,4,4,4,5,5,5,4,4],[5,3,3,4,4,4,4,4,4,4,4,4,5,5,5,4],[5,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5],[5,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5]],tc=[];for(var da=0;da<16;da++){tc.push([]);for(var ko=0;ko<16;ko++)tc[da].push(Math.min(7,Math.abs(da-ko)))}function lu(n){for(var t=[],e=0;e<n;e++)t.push(new ja);return t}function zx(n,t,e){return e=e||{},e.x=n.getInt32(t,ze),e.y=n.getInt32(t+4,ze),e.z=n.getInt32(t+8,ze),e.intensity=n.getUint16(t+12,ze),e.bits=n.getUint8(t+14),e.flags=n.getUint8(t+15),e.cls=n.getUint8(t+16),e.user=n.getUint8(t+17),e.angle=n.getInt16(t+18,ze),e.psid=n.getUint16(t+20,ze),e.gpsLo=n.getUint32(t+22,ze),e.gpsHi=n.getInt32(t+26,ze),e}function Xn(n,t){this.unused=!1,this.p={x:n.x,y:n.y,z:n.z,intensity:n.intensity,bits:n.bits,flags:n.flags,cls:n.cls,angle:n.angle,user:n.user,psid:n.psid,gpsHi:n.gpsHi,gpsLo:n.gpsLo,gpsChange:!1},this.lastIntensity=new Uint16Array(8).fill(n.intensity),this.xMedian=lu(12),this.yMedian=lu(12),this.lastZ=new Int32Array(8).fill(n.z),this.changed=[];for(var e=0;e<8;e++)this.changed.push(new ye(128));this.channel=new ye(3),this.nret=new Array(16),this.rnum=new Array(16),this.rnumGpsSame=new ye(13),this.clsM=new Array(64),this.flagsM=new Array(64),this.userM=new Array(64),this.gpsMulti=new ye(Ox),this.gpsNoDiff=new ye(5),this.icDx=new t(32,2),this.icDy=new t(32,22),this.icZ=new t(32,20),this.icIntensity=new t(16,4),this.icAngle=new t(16,2),this.icPsid=new t(16,1),this.icGps=new t(32,9),this.gLast=0,this.gNext=0,this.gHi=new Int32Array(4),this.gLo=new Float64Array(4),this.gHi[0]=n.gpsHi,this.gLo[0]=n.gpsLo,this.gDiff=new Int32Array(4),this.gExtreme=new Int32Array(4)}function is(n,t,e){return n[t]||(n[t]=new ye(e))}function Gx(n){var t=n.bits&15,e=n.bits>>>4;return(t===1?1:0)+(t>=e?2:0)+(n.gpsChange?4:0)}function Vx(n){return(n>>>7&1)*32+(n>>>6&1)*16+(n&15)}Xn.prototype.addGps=function(n,t){var e=this.gLo[n]+t;e>=4294967296?(e-=4294967296,this.gHi[n]=this.gHi[n]+1|0):e<0&&(e+=4294967296,this.gHi[n]=this.gHi[n]-1|0),this.gLo[n]=e};Xn.prototype.startGps=function(n,t){this.gNext=this.gNext+1&3,this.gHi[this.gNext]=n,this.gLo[this.gNext]=t,this.gLast=this.gNext,this.gDiff[this.gLast]=0,this.gExtreme[this.gLast]=0};Xn.prototype.fullGps=function(n){var t=this.icGps.decompress(n,this.gHi[this.gLast],8);this.startGps(t,n.readInt())};Xn.prototype.extremeGps=function(n){++this.gExtreme[this.gLast]>3&&(this.gDiff[this.gLast]=n,this.gExtreme[this.gLast]=0)};Xn.prototype.readGps=function(n){for(;;){var t=this.gLast,e,i;if(this.gDiff[t]===0)if(e=n.decodeSymbol(this.gpsNoDiff),e===0)this.gDiff[t]=this.icGps.decompress(n,0,0),this.addGps(t,this.gDiff[t]),this.gExtreme[t]=0;else if(e===1)this.fullGps(n);else{this.gLast=t+e-1&3;continue}else if(e=n.decodeSymbol(this.gpsMulti),e===1)this.addGps(t,this.icGps.decompress(n,this.gDiff[t],1)),this.gExtreme[t]=0;else if(e<gs)e===0?(i=this.icGps.decompress(n,0,7),this.extremeGps(i)):e<pn?i=this.icGps.decompress(n,Math.imul(e,this.gDiff[t]),e<10?2:3):e===pn?(i=this.icGps.decompress(n,Math.imul(pn,this.gDiff[t]),4),this.extremeGps(i)):(e=pn-e,e>Ji?i=this.icGps.decompress(n,Math.imul(e,this.gDiff[t]),5):(i=this.icGps.decompress(n,Math.imul(Ji,this.gDiff[t]),6),this.extremeGps(i))),this.addGps(t,i);else if(e===gs)this.fullGps(n);else{this.gLast=t+e-gs&3;continue}return}};Xn.prototype.otherGps=function(n,t){for(var e=1;e<4;e++){var i=this.gLast+e&3;if(yf(n,t,this.gHi[i],this.gLo[i])!==null)return e}return 0};Xn.prototype.writeFullGps=function(n,t,e){this.icGps.compress(n,this.gHi[this.gLast],t,8),n.writeInt(e),this.startGps(t,e)};Xn.prototype.writeGps=function(n,t,e){for(;;){var i=this.gLast,r=yf(t,e,this.gHi[i],this.gLo[i]),s,a;if(this.gDiff[i]===0)if(r!==null)n.encodeSymbol(this.gpsNoDiff,0),this.icGps.compress(n,0,r,0),this.gDiff[i]=r,this.gExtreme[i]=0;else if(s=this.otherGps(t,e)){n.encodeSymbol(this.gpsNoDiff,s+1),this.gLast=i+s&3;continue}else n.encodeSymbol(this.gpsNoDiff,1),this.writeFullGps(n,t,e);else if(r!==null)a=Lx(r,this.gDiff[i]),a>0&&a<pn?(n.encodeSymbol(this.gpsMulti,a),this.icGps.compress(n,Math.imul(a,this.gDiff[i]),r,a===1?1:a<10?2:3),a===1&&(this.gExtreme[i]=0)):a>=pn?(n.encodeSymbol(this.gpsMulti,pn),this.icGps.compress(n,Math.imul(pn,this.gDiff[i]),r,4),this.extremeGps(r)):a<0&&a>Ji?(n.encodeSymbol(this.gpsMulti,pn-a),this.icGps.compress(n,Math.imul(a,this.gDiff[i]),r,5)):a<0?(n.encodeSymbol(this.gpsMulti,pn-Ji),this.icGps.compress(n,Math.imul(Ji,this.gDiff[i]),r,6),this.extremeGps(r)):(n.encodeSymbol(this.gpsMulti,0),this.icGps.compress(n,0,r,7),this.extremeGps(r));else if(s=this.otherGps(t,e)){n.encodeSymbol(this.gpsMulti,gs+s),this.gLast=i+s&3;continue}else n.encodeSymbol(this.gpsMulti,gs),this.writeFullGps(n,t,e);this.gHi[this.gLast]=t,this.gLo[this.gLast]=e;return}};var _s=9;function Ls(n){this.size=30,this.version=n,this.contexts=[null,null,null,null],this.current=0,this.sizes=new Array(_s),this.dec=new Array(_s),this.on=new Array(_s)}Ls.prototype.first=function(n,t,e,i,r){for(var s=0;s<30;s++)e.setUint8(i+s,n[t+s]);var a=zx(e,i);this.current=a.flags>>>4&3,this.contexts=[null,null,null,null],this.contexts[this.current]=new Xn(a,Hr),r.v=this.current};Ls.prototype.readLayerSizes=function(n,t){for(var e=0;e<_s;e++)this.sizes[e]=n.getUint32(t,ze),t+=4;return t};Ls.prototype.readLayers=function(n,t,e,i,r){this.sizes[0]===0&&i(t);for(var s=0;s<_s;s++){var a=this.sizes[s];t+a>e&&i(t),this.on[s]=a>0,a>0&&(this.dec[s]=new vn(n,t,t+a,r),this.dec[s].readInitBytes()),t+=a}return t};Ls.prototype.next=function(n,t,e){var i=this.contexts[this.current],r=i.p,s=this.dec[0],a=s.decodeSymbol(i.changed[Gx(r)]);if(a&64){var o=(this.current+s.decodeSymbol(i.channel)+1)%4;this.contexts[o]||(this.contexts[o]=new Xn(r,Hr)),this.current=o,this.version===3&&(e.v=o),i=this.contexts[o],r=i.p,r.flags=r.flags&207|o<<4}this.version!==3&&(e.v=this.current);var c=a&32,l=a&16?1:0,h=a&8,u=r.bits>>>4,f=r.bits&15,d,p;d=a&4?s.decodeSymbol(is(i.nret,u,16)):u;var _=a&3;_===0?p=f:_===1?p=(f+1)%16:_===2?p=(f+15)%16:l?p=s.decodeSymbol(is(i.rnum,f,16)):p=(f+s.decodeSymbol(i.rnumGpsSame)+2)%16,r.bits=p+d*16;var g=Bx[d][p],m=tc[d][p],v=(p===1?2:0)+(p>=d?1:0),y=d===1?1:0,S=g*2+l,C=i.icDx.decompress(s,i.xMedian[S].get(),y);if(r.x=r.x+C|0,i.xMedian[S].add(C),C=i.icDy.decompress(s,i.yMedian[S].get(),xf(y,i.icDx)),r.y=r.y+C|0,i.yMedian[S].add(C),this.on[1]&&(r.z=i.icZ.decompress(this.dec[1],i.lastZ[m],Mf(y,i.icDx,i.icDy)),i.lastZ[m]=r.z),this.on[2]&&(r.cls=this.dec[2].decodeSymbol(is(i.clsM,(r.cls&31)*2+(v===3?1:0),256))),this.on[3]){var T=this.dec[3].decodeSymbol(is(i.flagsM,Vx(r.flags),64));r.flags=(T>>>5&1)*128+(T>>>4&1)*64+(r.flags&48)+(T&15)}if(this.on[4]){var I=v*2+l;r.intensity=i.icIntensity.decompress(this.dec[4],i.lastIntensity[I],v)&65535,i.lastIntensity[I]=r.intensity}this.on[5]&&h&&(r.angle=i.icAngle.decompress(this.dec[5],r.angle,l)<<16>>16),this.on[6]&&(r.user=this.dec[6].decodeSymbol(is(i.userM,Math.floor(r.user/4),256))),this.on[7]&&c&&(r.psid=i.icPsid.decompress(this.dec[7],r.psid,0)&65535),r.gpsChange=!!l,this.on[8]&&l&&(i.readGps(this.dec[8]),r.gpsHi=i.gHi[i.gLast],r.gpsLo=i.gLo[i.gLast]),n.setInt32(t,r.x,ze),n.setInt32(t+4,r.y,ze),n.setInt32(t+8,r.z,ze),n.setUint16(t+12,r.intensity,ze),n.setUint8(t+14,r.bits),n.setUint8(t+15,r.flags),n.setUint8(t+16,r.cls),n.setUint8(t+17,r.user),n.setInt16(t+18,r.angle,ze),n.setUint16(t+20,r.psid,ze),n.setUint32(t+22,r.gpsLo,ze),n.setInt32(t+26,r.gpsHi,ze)};var Ir=!0;function Rc(n,t){var e=n.lastContext;return n.lastContext!==t&&(n.lastContext=t,n.unused[t]&&(n.seed(e,t),n.unused[t]=!1,n.version===3&&(e=t)),n.version===4&&(e=t)),e}function Cc(n,t){n.unused=[!0,!0,!0,!0],n.unused[t]=!1,n.lastContext=t}function Ef(n,t,e,i,r,s,a){if(e+i>s&&r(e),i===0)return null;var o=new vn(t,e,e+i,a);return o.readInitBytes(),o}function kx(n,t){n.size=6,n.version=t,n.models=[new ds,new ds,new ds,new ds],n.last=[new Uint16Array(3),new Uint16Array(3),new Uint16Array(3),new Uint16Array(3)],n.unused=[!0,!0,!0,!0],n.lastContext=0}function Hx(n,t){this.last[t].set(this.last[n])}function hi(n){kx(this,n),this.dec=null}hi.prototype.first=function(n,t,e,i,r){for(var s=0;s<6;s++)e.setUint8(i+s,n[t+s]);Nx(this.last[r.v],n,t),Cc(this,r.v)};hi.prototype.readLayerSizes=function(n,t){return this.layerSize=n.getUint32(t,Ir),t+4};hi.prototype.readLayers=function(n,t,e,i,r){return this.dec=Ef(this,n,t,this.layerSize,i,e,r),t+this.layerSize};hi.prototype.seed=Hx;hi.prototype.next=function(n,t,e){var i=Rc(this,e.v),r=this.last[i];this.dec&&Sf(this.dec,this.models[this.lastContext],r),n.setUint16(t,r[0],Ir),n.setUint16(t+2,r[1],Ir),n.setUint16(t+4,r[2],Ir)};function Wx(n,t){n.size=2,n.version=t,n.usedModel=[],n.low=[],n.high=[];for(var e=0;e<4;e++)n.usedModel.push(new ye(4)),n.low.push(new ye(256)),n.high.push(new ye(256));n.last=new Uint16Array(4),n.unused=[!0,!0,!0,!0],n.lastContext=0}function Xx(n,t){this.last[t]=this.last[n]}function Wr(n){Wx(this,n),this.dec=null}Wr.prototype.first=function(n,t,e,i,r){e.setUint8(i,n[t]),e.setUint8(i+1,n[t+1]),this.last[r.v]=n[t]+n[t+1]*256,Cc(this,r.v)};Wr.prototype.readLayerSizes=hi.prototype.readLayerSizes;Wr.prototype.readLayers=hi.prototype.readLayers;Wr.prototype.seed=Xx;Wr.prototype.next=function(n,t,e){var i=Rc(this,e.v);if(this.dec){var r=this.lastContext,s=this.last[i],a=this.dec.decodeSymbol(this.usedModel[r]),o=a&1?this.dec.decodeSymbol(this.low[r])+(s&255)&255:s&255;o+=a&2?(this.dec.decodeSymbol(this.high[r])+(s>>>8)&255)*256:s&65280,this.last[i]=o}n.setUint16(t,this.last[i],Ir)};function Yx(n,t,e){n.size=t,n.version=e,n.models=[null,null,null,null],n.last=[new Uint8Array(t),new Uint8Array(t),new Uint8Array(t),new Uint8Array(t)],n.unused=[!0,!0,!0,!0],n.lastContext=0}function bf(n){for(var t=[],e=0;e<n;e++)t.push(new ye(256));return t}function Zx(n,t,e,i){n.last[i.v].set(t.subarray(e,e+n.size)),Cc(n,i.v),n.models[i.v]=bf(n.size)}function Kx(n,t){this.models[t]=bf(this.size),this.last[t].set(this.last[n])}function Xr(n,t){Yx(this,n,t),this.sizes=new Array(n),this.dec=new Array(n)}Xr.prototype.first=function(n,t,e,i,r){for(var s=0;s<this.size;s++)e.setUint8(i+s,n[t+s]);Zx(this,n,t,r)};Xr.prototype.readLayerSizes=function(n,t){for(var e=0;e<this.size;e++)this.sizes[e]=n.getUint32(t,Ir),t+=4;return t};Xr.prototype.readLayers=function(n,t,e,i,r){for(var s=0;s<this.size;s++)this.dec[s]=Ef(this,n,t,this.sizes[s],i,e,r),t+=this.sizes[s];return t};Xr.prototype.seed=Kx;Xr.prototype.next=function(n,t,e){for(var i=Rc(this,e.v),r=this.last[i],s=this.models[e.v],a=0;a<this.size;a++)this.dec[a]&&(r[a]=r[a]+this.dec[a].decodeSymbol(s[a])&255),n.setUint8(t+a,r[a])};var Ba={0:"Byte",6:"Point10",7:"GpsTime11",8:"RGB12",9:"WavePacket13",10:"Point14",11:"RGB14",12:"RGBNIR14",13:"WavePacket14",14:"Byte14"};function qx(n){if(n.version!==2&&!(n.type===ce.BYTE&&n.version===1))throw new St(Et.UNSUPPORTED,"LAZ item "+(Ba[n.type]||n.type)+" version "+n.version+" is not supported (version 2 is; version 1 is from LASzip before 2011)");if(n.type!==ce.POINT10&&n.type!==ce.GPSTIME11&&n.type!==ce.RGB12&&n.type!==ce.BYTE)throw new St(Et.UNSUPPORTED,"LAZ item "+(Ba[n.type]||n.type)+" is not supported (wave packets are not read)")}function jx(n){switch(qx(n),n.type){case ce.POINT10:return function(){return new Tc};case ce.GPSTIME11:return function(){return new Ds};case ce.RGB12:return function(){return new Ac};default:return function(){return new wc(n.size)}}}function Jx(n){if(n.version!==3&&n.version!==4)throw new St(Et.UNSUPPORTED,"LAZ item "+(Ba[n.type]||n.type)+" version "+n.version+" is not supported in a layered file (versions 3 and 4 are)");if(n.type!==ce.POINT14&&n.type!==ce.RGB14&&n.type!==ce.RGBNIR14&&n.type!==ce.BYTE14)throw new St(Et.UNSUPPORTED,"LAZ item "+(Ba[n.type]||n.type)+" is not supported (wave packets are not read)")}function $x(n){Jx(n);var t=n.version;switch(n.type){case ce.POINT14:return function(){return[new Ls(t)]};case ce.RGB14:return function(){return[new hi(t)]};case ce.RGBNIR14:return function(){return[new hi(t),new Wr(t)]};default:return function(){return[new Xr(n.size,t)]}}}function Qx(n){return function(t){throw new St(Et.TRUNCATED,"a LAZ chunk is cut short",n+t)}}function tM(n,t,e){return function(r,s,a,o,c,l,h){if(o){h=h||0;var u=Qx(h),f=[];n.forEach(function(v){f.push.apply(f,v())});var d={v:0},p=s,_;for(p+t>a&&u(p),_=0;_<f.length;_++)f[_].first(r,p,c,l,d),p+=f[_].size,l+=f[_].size;if(o!==1){p+4+e*4>a&&u(p);var g=new DataView(r.buffer,r.byteOffset,r.byteLength);for(p+=4,_=0;_<f.length;_++)p=f[_].readLayerSizes(g,p);for(_=0;_<f.length;_++)p=f[_].readLayers(r,p,a,u,h);for(var m=1;m<o;m++)for(d.v=0,_=0;_<f.length;_++)f[_].next(c,l,d),l+=f[_].size}}}}function eM(n,t){var e=n.items.reduce(function(i,r){return i+r.size},0);if(e!==t)throw new St(Et.BAD_VLR,"the LASzip items make "+e+"-byte records but the header says "+t);if(n.coder!==0)throw new St(Et.UNSUPPORTED,"LAZ coder "+n.coder+" (only the arithmetic coder, 0, exists)")}function nM(n,t){if(eM(n,t),n.compressor===Ta.LAYERED_CHUNKED){var e=n.items.reduce(function(r,s){return r+(s.type===ce.POINT14?9:s.type===ce.RGBNIR14?2:s.type===ce.BYTE14?s.size:1)},0);return tM(n.items.map($x),t,e)}var i=n.items.map(jx);return function(s,a,o,c,l,h,u){if(c){u=u||0;var f=i.map(function(m){return m()}),d,p=a;if(p+t>o)throw new St(Et.TRUNCATED,"a LAZ chunk is shorter than one record",u+p);for(d=0;d<f.length;d++)f[d].first(s,p,l,h),p+=f[d].size,h+=f[d].size;if(c!==1){var _=new vn(s,p,o,u);_.readInitBytes();for(var g=1;g<c;g++)for(d=0;d<f.length;d++)f[d].next(_,l,h),h+=f[d].size}}}}var iM=["node","worker_threads"].join(":"),rM=["node","os"].join(":"),sM=16;async function aM(){var n=1;if(typeof navigator<"u"&&navigator.hardwareConcurrency)n=navigator.hardwareConcurrency;else try{var t=await import(rM);n=typeof t.availableParallelism=="function"?t.availableParallelism():t.cpus().length}catch{n=1}return Math.max(1,Math.min(sM,n-1))}function oM(n){var t=function(e,i){return/^--input-type(=|$)/.test(e)||n[i-1]==="--input-type"};if(n.some(t))return{execArgv:n.filter(function(e,i){return!t(e,i)})}}async function lM(n,t,e){var i=!1,r,s,a=new Promise(function(d,p){r=d,s=p});function o(d){d&&d.ready?(i=!0,r()):n(d)}function c(d){i?t(d):s(d)}var l;if(typeof Worker=="function"){var h=new Worker(new URL("/trimesh-build-js/assets/chunkWorker-D5oI3EiU.js",import.meta.url),{type:"module"});h.onmessage=function(d){o(d.data)},h.onerror=function(d){d&&d.preventDefault&&d.preventDefault(),c(new Error(d&&d.message?d.message:"LAZ worker failed"))},l={post:function(d,p){h.postMessage(d,p)},close:function(){h.terminate()}}}else{var u=await import(iM),f=new u.Worker(new URL("data:text/javascript;base64,Ly8gc3JjL2xhei9jaHVua1dvcmtlci5qcwovLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy8gV29ya2VyIGVudHJ5IGZvciBwYXJhbGxlbCBMQVogd29yayAoc3JjL2xhei9wb29sLmpzKTogZGVjb2RlcyB3aG9sZQovLyBjaHVua3MgaW50byByYXcgTEFTIHJlY29yZHMsIG9yIGNvbXByZXNzZXMgcmF3IHJlY29yZHMgaW50byB3aG9sZQovLyBjaHVua3MsIGFuZCBzZW5kcyB0aGVtIGJhY2sgKHRyYW5zZmVycmVkKS4gUnVucyBhcyBhIGJyb3dzZXIgbW9kdWxlCi8vIFdvcmtlciBvciBhIE5vZGUgd29ya2VyX3RocmVhZHMgV29ya2VyLgovLyBJbiAoZGVjb2RlLCBubyBvcCk6ICB7IGlkLCB2bHIsIHJlY29yZExlbmd0aCwgcGFja2VkOiBBcnJheUJ1ZmZlciwgY2h1bmtzOiBbeyBzLCBlLCBjb3VudCB9XSwgYmFzZSB9Ci8vICAgICAgKHMgLyBlIGluZGV4IGludG8gcGFja2VkOyBiYXNlIGlzIHBhY2tlZCdzIGZpbGUgb2Zmc2V0KQovLyBJbiAoY29tcHJlc3MpOiB7IGlkLCBvcDogImNvbXByZXNzIiwgdmxyLCByZWNvcmRMZW5ndGgsIHJlY29yZHM6IEFycmF5QnVmZmVyLCBjb3VudHM6IG51bWJlcltdIH0KLy8gICAgICAoY291bnRzOiBlYWNoIGNodW5rJ3MgcG9pbnRzLCBiYWNrIHRvIGJhY2sgZnJvbSB0aGUgc3RhcnQgb2YgcmVjb3JkcykKLy8gT3V0OiB7IHJlYWR5OiB0cnVlIH0gb25jZSBsaXN0ZW5pbmcsIHRoZW4gcGVyIHRhc2sKLy8gICAgICBkZWNvZGUgeyBpZCwgcmVjb3JkczogQXJyYXlCdWZmZXIgfSwgY29tcHJlc3MgeyBpZCwgY2h1bmtzOiBBcnJheUJ1ZmZlciwgc2l6ZXM6IG51bWJlcltdIH0KLy8gICAgICAodGhlIGNodW5rcyBiYWNrIHRvIGJhY2ssIGFuZCBlYWNoIG9uZSdzIGxlbmd0aCksIG9yIHsgaWQsIGVycm9yOiB7IGNvZGUsIG1lc3NhZ2UsIG9mZnNldCB9IH0KLy8KLy8gVXNlcyB0aGUgY2h1bmsgZGVjb2RlciB0cmFuc2xhdGVkIGZyb20gbGF6LXJzIChodHRwczovL2dpdGh1Yi5jb20vbGF6LXJzL2xhei1ycyksCi8vIGl0c2VsZiBhIHBvcnQgb2YgTEFTemlwIGJ5IHJhcGlkbGFzc28uIChjKSAyMDA3LTIwMTUgbWFydGluIGlzZW5idXJnLAovLyByYXBpZGxhc3NvOyAoYykgMjAxOS0yMDIzIFRob21hcyBNb250YWlndS4KLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAoc2VlIExJQ0VOU0UtQVBBQ0hFIGFuZAovLyBOT1RJQ0UpLiBDaGFuZ2VzOiB3cml0dGVuIGluIEphdmFTY3JpcHQgYXMgYSB3b3JrZXIgZW50cnksIEJyZW50IEJ1ZmZoYW0gMjAyNi4KLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CgppbXBvcnQgeyBjcmVhdGVDaHVua0RlY29kZXIgfSBmcm9tICIuL2RlY29tcHJlc3NDaHVuay5qcyI7CmltcG9ydCB7IGNyZWF0ZUNodW5rQ29tcHJlc3NvciB9IGZyb20gIi4vY29tcHJlc3NDaHVuay5qcyI7CgovLyBub2RlOndvcmtlcl90aHJlYWRzIGlzIG5hbWVkIGF0IHJ1biB0aW1lIHNvIGJyb3dzZXIgYnVuZGxlcnMgbGVhdmUgaXQgYWxvbmUKdmFyIE5PREVfV09SS0VSX1RIUkVBRFMgPSBbIm5vZGUiLCAid29ya2VyX3RocmVhZHMiXS5qb2luKCI6Iik7Cgp2YXIgcG9ydCA9IG51bGw7CmlmICh0eXBlb2Ygc2VsZiAhPT0gInVuZGVmaW5lZCIgJiYgdHlwZW9mIHNlbGYucG9zdE1lc3NhZ2UgPT09ICJmdW5jdGlvbiIpIHsKCXBvcnQgPSB7IHBvc3Q6IGZ1bmN0aW9uIChtLCB0KSB7IHNlbGYucG9zdE1lc3NhZ2UobSwgdCk7IH0gfTsKCXNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsgaGFuZGxlKGUuZGF0YSk7IH07Cn0gZWxzZSB7Cgl2YXIgd3QgPSBhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyAvKiBAdml0ZS1pZ25vcmUgKi8gTk9ERV9XT1JLRVJfVEhSRUFEUyk7Cglwb3J0ID0geyBwb3N0OiBmdW5jdGlvbiAobSwgdCkgeyB3dC5wYXJlbnRQb3J0LnBvc3RNZXNzYWdlKG0sIHQpOyB9IH07Cgl3dC5wYXJlbnRQb3J0Lm9uKCJtZXNzYWdlIiwgaGFuZGxlKTsKfQpwb3J0LnBvc3QoeyByZWFkeTogdHJ1ZSB9KTsgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBwb29sIHdhaXRzIGZvciB0aGlzIGJlZm9yZSBzZW5kaW5nIHdvcmsKCi8vIFRoZSBkZWNvZGVyIGFuZCB0aGUgY29tcHJlc3NvciwgZWFjaCBtYWRlIG9uY2UgcGVyIFZMUiArIHJlY29yZCBsZW5ndGgKZnVuY3Rpb24gY2FjaGUobWFrZSkgewoJdmFyIGtleSA9IG51bGwsIG1hZGUgPSBudWxsOwoJcmV0dXJuIGZ1bmN0aW9uIChtKSB7CgkJdmFyIGsgPSBKU09OLnN0cmluZ2lmeShtLnZscikgKyAiLyIgKyBtLnJlY29yZExlbmd0aDsKCQlpZiAoa2V5ICE9PSBrKSB7IG1hZGUgPSBtYWtlKG0udmxyLCBtLnJlY29yZExlbmd0aCk7IGtleSA9IGs7IH0KCQlyZXR1cm4gbWFkZTsKCX07Cn0KdmFyIGRlY29kZXIgPSBjYWNoZShjcmVhdGVDaHVua0RlY29kZXIpLCBjb21wcmVzc29yID0gY2FjaGUoY3JlYXRlQ2h1bmtDb21wcmVzc29yKTsKCmZ1bmN0aW9uIGhhbmRsZShtKSB7Cgl0cnkgewoJCWlmIChtLm9wID09PSAiY29tcHJlc3MiKSBjb21wcmVzcyhtKTsKCQllbHNlIGRlY29kZShtKTsKCX0gY2F0Y2ggKGVycikgewoJCXBvcnQucG9zdCh7IGlkOiBtLmlkLCBlcnJvcjogeyBjb2RlOiBlcnIgJiYgZXJyLmNvZGUsIG1lc3NhZ2U6IGVyciAmJiBlcnIubWVzc2FnZSA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVyciksIG9mZnNldDogZXJyICYmIGVyci5vZmZzZXQgfSB9KTsKCX0KfQoKZnVuY3Rpb24gY29tcHJlc3MobSkgewoJdmFyIG9uZSA9IGNvbXByZXNzb3IobSksIHJlY29yZHMgPSBuZXcgVWludDhBcnJheShtLnJlY29yZHMpOwoJdmFyIGNodW5rcyA9IFtdLCBwID0gMCwgdG90YWwgPSAwOwoJZm9yICh2YXIgaSA9IDA7IGkgPCBtLmNvdW50cy5sZW5ndGg7IGkrKykgewoJCWNodW5rcy5wdXNoKG9uZShyZWNvcmRzLCBwLCBtLmNvdW50c1tpXSkpOwoJCXAgKz0gbS5jb3VudHNbaV0gKiBtLnJlY29yZExlbmd0aDsKCQl0b3RhbCArPSBjaHVua3NbaV0ubGVuZ3RoOwoJfQoJdmFyIG91dCA9IG5ldyBVaW50OEFycmF5KHRvdGFsKSwgbyA9IDA7CgljaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoYykgeyBvdXQuc2V0KGMsIG8pOyBvICs9IGMubGVuZ3RoOyB9KTsKCXBvcnQucG9zdCh7IGlkOiBtLmlkLCBjaHVua3M6IG91dC5idWZmZXIsIHNpemVzOiBjaHVua3MubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxlbmd0aDsgfSkgfSwgW291dC5idWZmZXJdKTsKfQoKZnVuY3Rpb24gZGVjb2RlKG0pIHsKCXZhciBkZWMgPSBkZWNvZGVyKG0pOwoJdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobS5wYWNrZWQpOwoJdmFyIHRvdGFsID0gbS5jaHVua3MucmVkdWNlKGZ1bmN0aW9uIChzLCBjKSB7IHJldHVybiBzICsgYy5jb3VudDsgfSwgMCk7Cgl2YXIgb3V0ID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsICogbS5yZWNvcmRMZW5ndGgpOwoJdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcob3V0KSwgbyA9IDA7Cglmb3IgKHZhciBpID0gMDsgaSA8IG0uY2h1bmtzLmxlbmd0aDsgaSsrKSB7CgkJdmFyIGMgPSBtLmNodW5rc1tpXTsKCQlkZWMoYnl0ZXMsIGMucywgYy5lLCBjLmNvdW50LCB2aWV3LCBvLCBtLmJhc2UpOwoJCW8gKz0gYy5jb3VudCAqIG0ucmVjb3JkTGVuZ3RoOwoJfQoJcG9ydC5wb3N0KHsgaWQ6IG0uaWQsIHJlY29yZHM6IG91dCB9LCBbb3V0XSk7Cn0K",import.meta.url),oM(process.execArgv));f.on("message",o),f.on("error",c),f.on("exit",function(d){i||s(new Error("LAZ worker exited ("+d+") before it started"))}),l={post:function(d,p){f.postMessage(d,p)},close:function(){return f.terminate()},hold:function(){f.ref()},release:function(){f.unref()}}}try{await a}catch(d){throw l.close(),d}return l.release&&l.release(),l}async function cM(n,t){var e=[],i=[],r=[],s=new Map,a=1,o=!1;function c(_){var g=_ instanceof St?_:new St(Et.UNSUPPORTED,"a LAZ worker failed: "+(_&&_.message?_.message:String(_)));s.forEach(function(m){m.reject(g)}),s.clear(),r.forEach(function(m){m.reject(g)}),r=[]}function l(){for(;i.length&&r.length;){var _=i.pop(),g=r.shift();g.worker=_,s.set(g.msg.id,g),_.hold&&_.hold(),_.post(g.msg,g.transfer)}}function h(_){var g=s.get(_.id);g&&(s.delete(_.id),g.worker.release&&g.worker.release(),i.push(g.worker),_.error?g.reject(new St(_.error.code||Et.UNSUPPORTED,_.error.message,_.error.offset)):g.resolve(g.result(_)),l())}for(var u=[],f=0;f<n;f++)u.push(lM(h,c));var d=await Promise.allSettled(u);if(e=d.filter(function(_){return _.status==="fulfilled"}).map(function(_){return _.value}),e.length<n)return e.forEach(function(_){_.close()}),null;i=e.slice();function p(_,g,m){return o?Promise.reject(new St(Et.ABORTED,"the LAZ pool is closed")):new Promise(function(v,y){r.push({msg:Object.assign({id:a++},_),transfer:g,result:m,resolve:v,reject:y}),l()})}return{size:n,decode:function(_){return p(_,[_.packed],function(g){return new Uint8Array(g.records)})},compress:function(_){return p(Object.assign({op:"compress"},_),[_.records],function(g){return{bytes:new Uint8Array(g.chunks),sizes:g.sizes}})},close:function(){o||(o=!0,c(new St(Et.ABORTED,"the LAZ pool was closed")),e.forEach(function(_){_.close()}))}}}var rs=!0;function xr(n,t){return n??t}function Tf(n,t){n=n||{};var e=[],i=Rr[t.pointFormat].extended;if(Array.isArray(n.classes)&&n.classes.length){var r=new Uint8Array(256);n.classes.forEach(function(C){r[C]=1}),e.push(i?function(C,T){return r[C.getUint8(T+16)]===1}:function(C,T){return r[C.getUint8(T+15)&31]===1})}if(Array.isArray(n.returns)&&n.returns.length){var s=new Uint8Array(16);n.returns.forEach(function(C){s[C]=1}),e.push(i?function(C,T){return s[C.getUint8(T+14)&15]===1}:function(C,T){return s[C.getUint8(T+14)&7]===1})}var a=t.scale,o=t.offset;if(n.bounds){var c=n.bounds,l=xr(c.minX,-1/0),h=xr(c.maxX,1/0),u=xr(c.minY,-1/0),f=xr(c.maxY,1/0),d=xr(c.minZ,-1/0),p=xr(c.maxZ,1/0);e.push(function(C,T){var I=C.getInt32(T,rs)*a.x+o.x;if(I<l||I>h)return!1;var x=C.getInt32(T+4,rs)*a.y+o.y;if(x<u||x>f)return!1;var M=C.getInt32(T+8,rs)*a.z+o.z;return M>=d&&M<=p})}if(n.polygon!==void 0&&n.polygon!==null){var _=ux(n.polygon,{boundary:n.boundary,tolerance:n.tolerance}),g=_.test,m=_.minX,v=_.maxX,y=_.minY,S=_.maxY;e.push(function(C,T){var I=C.getInt32(T,rs)*a.x+o.x;if(I<m||I>v)return!1;var x=C.getInt32(T+4,rs)*a.y+o.y;return x<y||x>S?!1:g(I,x)})}return e.length?e.length===1?e[0]:function(C,T){for(var I=0;I<e.length;I++)if(!e[I](C,T))return!1;return!0}:null}function hM(n,t,e){for(var i=new DataView(n.buffer,n.byteOffset,n.byteLength),r=Math.floor(n.length/t),s=0,a=0;a<r;a++)e(i,a*t)&&s++;return s}var uM=4294967295,fM=9007199254740992,Ei=-1;function vs(n){return new St(Et.INVALID_ARGUMENT,n)}function xs(n,t){var e=uf(n),i=Object.create(null);if(bc(n).forEach(function(s){i[s.name]=s.k}),i.x===1&&i.y===1&&i.z===1)return{x:n.x,y:n.y,z:n.z,stride:1};if(i.positions===3||e===0&&i.positions===1){var r=n.positions;return{x:r,y:r.subarray(1),z:r.subarray(2),stride:3}}throw vs(t+" needs x, y, z columns or a k = 3 positions column")}function Af(n){if(n>uM)throw new St(Et.TOO_MANY_POINTS,"the neighbour index takes at most 4,294,967,295 points, not "+n)}function cu(n){return n^=n>>>16,n=Math.imul(n,2246822507),n^=n>>>13,n=Math.imul(n,3266489909),(n^n>>>16)>>>0}function ec(n){var t=n%4294967296,e=(n-t)/4294967296;return cu(t^cu(e))}function ps(n,t){return ec(n)&t}function dM(n){for(var t=16;t<n;)t*=2;return t}function pM(n,t,e,i){if(e!==void 0&&!(typeof e=="number"&&e>0&&isFinite(e)))throw vs("cellSize must be a positive finite number, not "+String(e));for(var r=n.x,s=n.y,a=n.z,o=n.stride,c=[1/0,1/0,1/0],l=[-1/0,-1/0,-1/0],h=0,u=0;h<t;h++,u+=o){var f=r[u],d=s[u],p=a[u];if(f-f!==0||d-d!==0||p-p!==0)throw vs("point "+h+" has a non-finite "+(f-f!==0?"x":d-d!==0?"y":"z")+" coordinate");f<c[0]&&(c[0]=f),f>l[0]&&(l[0]=f),d<c[1]&&(c[1]=d),d>l[1]&&(l[1]=d),p<c[2]&&(c[2]=p),p>l[2]&&(l[2]=p)}t===0&&(c=[0,0,0],l=[0,0,0]);var _=[l[0]-c[0],l[1]-c[1],l[2]-c[2]];if(e===void 0){var g=1,m=0;_.forEach(function(et){et>0&&(g*=et,m++)}),e=m===0?1:Math.pow(16*g/t,1/m)}var v=Math.floor(_[0]/e)+1,y=Math.floor(_[1]/e)+1,S=Math.floor(_[2]/e)+1;if(v*y*S>fM)throw vs("cellSize too small for this extent: "+v+" × "+y+" × "+S+" cells is more than 2^53");var C=1/e,T=c[0],I=c[1],x=c[2];function M(et){var nt=Math.floor((r[et]-T)*C);nt>=v&&(nt=v-1);var V=Math.floor((s[et]-I)*C);V>=y&&(V=y-1);var G=0;return G=Math.floor((a[et]-x)*C),G>=S&&(G=S-1),(nt*y+V)*S+G}var N=dM(2*Math.min(v*y*S,Math.ceil(t/16))),P=N-1,B=0,F=new Float64Array(N).fill(Ei),E=new Uint32Array(N);function A(){var et=F,nt=E;N*=2,P=N-1,F=new Float64Array(N).fill(Ei),E=new Uint32Array(N);for(var V=0;V<et.length;V++)if(et[V]!==Ei){for(var G=ps(et[V],P);F[G]!==Ei;)G=G+1&P;F[G]=et[V],E[G]=nt[V]}}for(h=0,u=0;h<t;h++,u+=o){for(var w=M(u),D=ps(w,P);F[D]!==Ei&&F[D]!==w;)D=D+1&P;if(F[D]===Ei){if(2*(B+1)>N)for(A(),D=ps(w,P);F[D]!==Ei;)D=D+1&P;F[D]=w,B++}E[D]++}for(var U=new Uint32Array(N),k=0,O=0;O<N;O++)U[O]=k,k+=E[O];var X=new Uint32Array(t);for(h=0,u=0;h<t;h++,u+=o){for(var H=M(u),K=ps(H,P);F[K]!==H;)K=K+1&P;X[U[K]++]=h}for(O=0;O<N;O++)U[O]-=E[O];return{count:t,cellSize:e,min:[T,I,x],nx:v,ny:y,nz:S,order:X,keys:F,start:U,length:E,mask:P,coords:n}}function wf(n,t){var e=xs(n,"buildIndex");return Af(n.count),pM(e,n.count,void 0)}function Rf(n,t,e,i){if(t<0||e<0||i<0||t>=n.nx||e>=n.ny||i>=n.nz)return-1;for(var r=(t*n.ny+e)*n.nz+i,s=n.keys,a=n.mask,o=ps(r,a);s[o]!==Ei;){if(s[o]===r)return o;o=o+1&a}return-1}function Cf(n,t){var e=n!==null&&typeof n=="object"&&n.order instanceof Uint32Array&&n.order.length===n.count&&n.coords;if(e&&n.count>0){var i=(n.count-1)*n.coords.stride+1;e=n.coords.x.length>=i&&n.coords.y.length>=i&&n.coords.z.length>=i}if(!e)throw vs(t+": index is not self-consistent (rebuild it with buildIndex)")}function mM(n,t,e){if(!(t>0))throw new St(Et.INVALID_ARGUMENT,"dedupe tolerance must be > 0");for(var i=!!(e&&e.z&&n.z),r=t*t,s=n.count,a=n.x,o=n.y,c=n.z,l=i?1:0,h=[1/0,1/0,1/0],u=[-1/0,-1/0,-1/0],f=0;f<s;f++){var d=Math.floor(a[f]/t),p=Math.floor(o[f]/t),_=i?Math.floor(c[f]/t):0;d<h[0]&&(h[0]=d),d>u[0]&&(u[0]=d),p<h[1]&&(h[1]=p),p>u[1]&&(u[1]=p),_<h[2]&&(h[2]=_),_>u[2]&&(u[2]=_)}var g=u[1]-h[1]+3,m=u[2]-h[2]+3,v=(u[0]-h[0]+3)*g*m<=9007199254740992;function y(gt,dt,Rt){return v?(gt*g+dt)*m+Rt:(gt*73856093+dt*19349663+Rt*83492791)%9007199254740881}function S(gt){return y(Math.floor(a[gt]/t)-h[0]+1,Math.floor(o[gt]/t)-h[1]+1,i?Math.floor(c[gt]/t)-h[2]+1:1)}for(var C=(u[0]-h[0]+1)*(u[1]-h[1]+1)*(u[2]-h[2]+1),T=16;T<Math.min(s,C);)T*=2;var I=T-1,x=0,M=new Int32Array(T).fill(-1),N=new Uint8Array(T),P=0;function B(gt){var dt=ec(gt),Rt=dt&I;for(P=Math.imul(dt,2654435761)>>>24;M[Rt]>=0&&(N[Rt]!==P||S(M[Rt])!==gt);)Rt=Rt+1&I;return Rt}function F(){var gt=M,dt=N;T*=2,I=T-1,M=new Int32Array(T).fill(-1),N=new Uint8Array(T);for(var Rt=0;Rt<gt.length;Rt++)if(!(gt[Rt]<0)){for(var z=ec(S(gt[Rt]))&I;M[z]>=0;)z=z+1&I;M[z]=gt[Rt],N[z]=dt[Rt]}}for(var E=new Int32Array(s),A=new Uint32Array(s),w=new Uint32Array(s),D=0,U=0;U<s;U++){for(var k=Math.floor(a[U]/t)-h[0]+1,O=Math.floor(o[U]/t)-h[1]+1,X=i?Math.floor(c[U]/t)-h[2]+1:1,H=!1,K=-1;K<=1&&!H;K++)for(var et=-1;et<=1&&!H;et++)for(var nt=-l;nt<=l&&!H;nt++)for(var V=M[B(y(k+K,O+et,X+nt))];V>=0;){var G=a[V]-a[U],Q=o[V]-o[U],at=i?c[V]-c[U]:0;if(G*G+Q*Q+at*at<=r){H=!0;break}V=E[V]}if(!H){var rt=y(k,O,X),j=B(rt);M[j]<0&&(2*(x+1)>T&&(F(),j=B(rt)),x++,N[j]=P),E[U]=M[j],M[j]=U,w[U]=D,A[D++]=U}}for(U=0,f=0;U<s;U++){if(f<D&&A[f]===U){f++;continue}for(var k=Math.floor(a[U]/t)-h[0]+1,O=Math.floor(o[U]/t)-h[1]+1,X=i?Math.floor(c[U]/t)-h[2]+1:1,ht=-1,ct=1/0,K=-1;K<=1;K++)for(var et=-1;et<=1;et++)for(var nt=-l;nt<=l;nt++)for(var V=M[B(y(k+K,O+et,X+nt))];V>=0;){var G=a[V]-a[U],Q=o[V]-o[U],at=i?c[V]-c[U]:0,xt=G*G+Q*Q+at*at;xt<=r&&(xt<ct||xt===ct&&V<ht)&&(ct=xt,ht=V),V=E[V]}w[U]=w[ht]}return{keep:A.slice(0,D),map:w}}function If(n,t,e){var i=mM(n,t,e).keep,r=i.length,s=Object.create(null);bc(n).forEach(function(o){s[o.name]=o.k});var a={count:r};return Object.keys(n).forEach(function(o){if(o!=="count"){var c=n[o],l=c;Object.prototype.hasOwnProperty.call(s,o)&&(l=fs(c,r*s[o]),lx(c,l,s[o],i)),Object.defineProperty(a,o,{value:l,enumerable:!0,writable:!0,configurable:!0})}}),a}var gM="las-scratch";async function _M(n){var t=n&&n.root||await navigator.storage.getDirectory();return t.getDirectoryHandle(n&&n.dir||gM,{create:!0})}async function vM(n,t){var e=await _M(t),i=await e.getFileHandle(n,{create:!0}),r=await i.createSyncAccessHandle();r.truncate(0);var s=0,a=0;return{write:function(o){r.write(o,{at:s}),s+=o.length,a=Math.max(a,s)},writeAt:function(o,c){r.write(o,{at:c}),a=Math.max(a,c+o.length)},truncate:function(o){r.truncate(o),s=Math.min(s,o),a=Math.min(a,o)},bytesWritten:function(){return a},close:function(){r.flush(),r.close()}}}var xM=64*1024*1024,MM=4;function hu(n){return{size:n.length,read:async function(t,e){if(e>n.length)throw new St(Et.TRUNCATED,"read past end of "+n.length+"-byte buffer",e);return n.subarray(t,e)}}}function yM(n){function t(i,r,s){if(i instanceof ArrayBuffer&&(i=new Uint8Array(i)),!(i instanceof Uint8Array))throw new St(Et.INVALID_ARGUMENT,"source.read("+r+", "+s+") must return a Uint8Array or ArrayBuffer");if(i.length!==s-r)throw new St(Et.TRUNCATED,"source.read("+r+", "+s+") returned "+i.length+" bytes, not "+(s-r),r+Math.min(i.length,s-r));return i}var e={size:n.size,read:async function(i,r){return t(await n.read(i,r),i,r)}};return typeof n.readInto=="function"&&(e.readInto=async function(i,r,s){return t(await n.readInto(i,r,s),i,r)}),typeof n.close=="function"&&(e.close=function(){return n.close()}),e}async function SM(n){if(n instanceof Uint8Array)return hu(n);if(n instanceof ArrayBuffer)return hu(new Uint8Array(n));if(typeof n=="string")return Or.open(n);if(n&&typeof n.slice=="function"&&typeof n.size=="number"&&typeof n.read!="function")return new hf(n);if(n&&typeof n.size=="number"&&typeof n.read=="function")return yM(n);throw new St(Et.INVALID_ARGUMENT,"openLas needs a File / Blob, ArrayBuffer, Uint8Array, file path or { size, read } source")}async function EM(n,t){var e=await SM(n),i=await e.read(0,Math.min(e.size,375)),r=Xv(new An(i)),s=[];if(r.numberOfVlrs>0){var a=Math.min(r.offsetToPointData,e.size),o=await e.read(0,a);s=Yv(new An(o),r.headerSize,r.numberOfVlrs,a)}var c=[];r.numberOfEvlrs>0&&r.evlrStart>0&&r.evlrStart<e.size&&(c=await TM(e,r.evlrStart,r.numberOfEvlrs));var l=new Yn(e,r,s,c,xM);return l._threads=0,l}var bM=65536;async function TM(n,t,e){for(var i=[],r=t,s=0;s<e;s++){if(r+60>n.size)throw new St(Et.BAD_VLR,"EVLR "+(s+1)+" starts past the end of the file",r);var a=Zv(new An(await n.read(r,r+60)),0,1)[0];if(r+60+a.length>n.size)throw new St(Et.BAD_VLR,"EVLR "+(s+1)+" runs past the end of the file",r);a.start=r+60,a.bytes=a.length<=bM||a.userId==="LASF_Projection"?new Uint8Array(await n.read(a.start,a.start+a.length)):null,i.push(a),r+=60+a.length}return i}function Yn(n,t,e,i,r){this._src=n,this._windowSize=r,this.header=t,this.vlrs=e,this.evlrs=i,this.crs=nx(e.concat(i)),this.classNames={};try{this.classNames=ax(e.concat(i))}catch{this.classNames={}}if(this.compressed=t.compressed,this.laz=null,t.compressed)try{this.laz=gf(e)}catch{this.laz=null}}Yn.prototype._plan=async function(){if(this._planned)return this._planned;var n=this.header,t=this._src,e=n.recordLength,i;if(n.compressed){var a=gf(this.vlrs);if(!a)throw new St(Et.BAD_VLR,'this LAZ file has no LASzip VLR (user "laszip encoded", record 22204), so its points cannot be decompressed');var o=nM(a,e),c=vx(await Ax(t,n,a),e,this._windowSize);i={list:c,bufferSize:c.reduce(function(l,h){return Math.max(l,h.count*e)},0),records:async function(l,h){var u=await t.read(l.start,l.end),f=new DataView(h.buffer,h.byteOffset,h.byteLength);return l.chunks.forEach(function(d){o(u,d.start-l.start,d.end-l.start,d.count,f,(d.firstRecord-l.firstRecord)*e,l.start)}),h.subarray(0,l.count*e)},parallel:async function(l,h){var u=await t.read(l.start,l.end),f=new Uint8Array(l.count*e);return await Promise.all(l.chunks.map(function(d){var p=u.slice(d.start-l.start,d.end-l.start);return h.decode({vlr:a,recordLength:e,packed:p.buffer,chunks:[{s:0,e:p.length,count:d.count}],base:d.start}).then(function(_){f.set(_,(d.firstRecord-l.firstRecord)*e)})})),f},chunkCount:c.reduce(function(l,h){return l+h.chunks.length},0)}}else{var r=n.offsetToPointData+n.pointCount*e;if(r>t.size)throw new St(Et.TRUNCATED,"the header promises "+n.pointCount+" points ending at byte "+r+" but the file is "+t.size+" bytes",t.size);var s=_x(n,this._windowSize);i={list:s,bufferSize:typeof t.readInto=="function"&&s.length?s[0].end-s[0].start:0,records:function(l,h){return h?t.readInto(l.start,l.end,h):t.read(l.start,l.end)}}}return this._planned=i,i};Yn.prototype.chunks=async function*(n){if(n=n||{},n.dedupe)throw new St(Et.INVALID_ARGUMENT,"dedupe needs every point at once: use readPoints, not chunks");yield*this._scan(n,null)};Yn.prototype._scan=async function*(n,t){var e=this.header;n.transform&&df(n.transform,"transform");var i=await this._plan(),r=Tf(n,e),s=qa(e,n.fields),a=i.list,o=await this._pool(i);try{var c=!o&&i.bufferSize?new Uint8Array(i.bufferSize):null,l=null;if(n.maxPoints>0){var h=r?await this._countPassing(i,o,c,r,n.signal):e.pointCount;h>n.maxPoints&&(l={total:h,target:n.maxPoints,acc:0})}var u=0,f=0;for await(var d of Pf(i,o,c,n.signal)){var p=a[f],_=gx(d,e,{fields:s,keep:r,thin:l,localOrigin:n.localOrigin,float32:n.float32,transform:n.transform,firstIndex:p.firstRecord,into:t?t(p):null});u+=_.count,f++,typeof n.onProgress=="function"&&n.onProgress(f/a.length,"read "+u+" points"),yield _}if(n.signal&&n.signal.aborted)throw new St(Et.ABORTED,"read aborted")}finally{o&&o.close()}};async function*Pf(n,t,e,i){var r=n.list;function s(l){var h=n.parallel(r[l],t);return h.catch(function(){}),h}for(var a=t&&r.length?s(0):null,o=0;o<r.length;o++){if(i&&i.aborted)throw new St(Et.ABORTED,"read aborted");if(!t){yield await n.records(r[o],e);continue}var c=a;a=o+1<r.length?s(o+1):null,yield await c}}Yn.prototype._pool=async function(n){if(!n.parallel||this._threads===1||!this._threads&&n.chunkCount<MM)return null;var t=Math.min(this._threads||await aM(),n.chunkCount);return t>=2?cM(t):null};Yn.prototype._countPassing=async function(n,t,e,i,r){var s=0;for await(var a of Pf(n,t,e,r))s+=hM(a,this.header.recordLength,i);return s};Yn.prototype.readPoints=async function(n){n=n||{};var t=this.header,e=Object.assign({},n);delete e.dedupe;var i=qa(t,n.fields),r=!!Tf(n,t),s=r?n.maxPoints>0?Math.min(n.maxPoints,t.pointCount):0:n.maxPoints>0?Math.min(n.maxPoints,t.pointCount):t.pointCount,a={},o=0;i.forEach(function(u){a[u]=new(mf(u,n,t))(s||1024)});function c(u){if(!s&&o+u.count>a[i[0]].length){var f=Math.max(o+u.count,a[i[0]].length*2);i.forEach(function(d){var p=new a[d].constructor(f);p.set(a[d].subarray(0,o)),a[d]=p})}return{cols:a,at:o}}for await(var l of this._scan(e,c))o+=l.count;var h={count:o};return i.forEach(function(u){h[u]=a[u].length===o?a[u]:a[u].slice(0,o)}),n.dedupe&&(h=If(h,n.dedupe,{z:!!n.dedupeZ})),h.bounds=AM(h,n.localOrigin),h.stats=wM(h),h};function Df(){return{minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0,minZ:1/0,maxZ:-1/0}}function Lf(n,t){for(var e=0;e<t.count;e++){var i=t.x[e],r=t.y?t.y[e]:0,s=t.z?t.z[e]:0;i<n.minX&&(n.minX=i),i>n.maxX&&(n.maxX=i),r<n.minY&&(n.minY=r),r>n.maxY&&(n.maxY=r),s<n.minZ&&(n.minZ=s),s>n.maxZ&&(n.maxZ=s)}return n}function Uf(n,t){if(!(n.minX<=n.maxX))return null;var e=t&&isFinite(t.x)?t.x:0,i=t&&isFinite(t.y)?t.y:0,r=t&&isFinite(t.z)?t.z:0,s=function(a){return Math.round(a*1e6)/1e6};return{minX:s(n.minX+e),maxX:s(n.maxX+e),minY:s(n.minY+i),maxY:s(n.maxY+i),minZ:s(n.minZ+r),maxZ:s(n.maxZ+r)}}function AM(n,t){return!n.x||!n.count?null:Uf(Lf(Df(),n),t)}function wM(n){var t={count:n.count};if(n.classification){for(var e={},i=0;i<n.count;i++){var r=n.classification[i];e[r]=(e[r]||0)+1}t.classCounts=e}return t}Yn.prototype.readPointsToScratch=async function(n){n=n||{};for(var t=qa(this.header,n.fields),e=n.prefix||"las-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,8),i={root:n.root,dir:n.dir},r={},s={},a={},o=0;o<t.length;o++)s[t[o]]=e+"-"+t[o],r[t[o]]=await vM(s[t[o]],i);var c=0,l=Df();try{for await(var h of this.chunks(n))t.forEach(function(u){var f=h[u];a[u]=f.constructor.name,r[u].write(new Uint8Array(f.buffer,f.byteOffset,f.byteLength))}),h.x&&Lf(l,h),c+=h.count}finally{t.forEach(function(u){r[u].close()})}return{count:c,fields:s,types:a,bounds:Uf(l,n.localOrigin)}};Yn.prototype.readEvlrBytes=async function(n){var t=this.evlrs[n];if(!t)throw new St(Et.INVALID_ARGUMENT,"no EVLR "+n+" (the file has "+this.evlrs.length+")");return t.bytes?t.bytes:new Uint8Array(await this._src.read(t.start,t.start+t.length))};Yn.prototype.close=async function(){this._src&&typeof this._src.close=="function"&&await this._src.close()};var nc=1e-6;function Nf(n){return new St(Et.INVALID_ARGUMENT,n)}function wa(n){return typeof n=="number"&&isFinite(n)}function Ff(n,t,e){var i=Array.isArray(n)&&(n.length===3||t)&&wa(n[0])&&wa(n[1])&&wa(n[2]);if(!i)throw Nf(e+" must be [x, y, z] of finite numbers");return[n[0],n[1],n[2]]}function Ic(n,t,e){if(!(e&&n===void 0)&&!(wa(n)&&n>0))throw Nf(t+" must be a positive finite number, not "+String(n))}function RM(n){return[n.nx,n.ny,n.nz]}function Ho(n,t,e,i){var r=RM(n)[t],s=1/n.cellSize,a=n.min[t],o=Math.floor((e-a)*s-nc),c=Math.floor((i-a)*s+nc);return[Math.max(0,o),Math.min(r-1,c)]}function ic(n,t,e,i,r,s){for(var a=n.cellSize,o=a*nc,c=n.min,l=[t,e,i],h=0,u=0;u<3;u++){var f=c[u]+l[u]*a-o,d=c[u]+(l[u]+1)*a+o,p=f-r[u]>0?f-r[u]:r[u]-d>0?r[u]-d:0;h+=p*p}return h}function Of(n,t){var e=t%n.nz,i=(t-e)/n.nz,r=i%n.ny;return[(i-r)/n.ny,r,e]}function CM(n,t,e,i){if(!(t[0]>e[0]||t[1]>e[1]||t[2]>e[2])){var r=(e[0]-t[0]+1)*(e[1]-t[1]+1)*(e[2]-t[2]+1),s=n.keys;if(r>s.length){for(var a=0;a<s.length;a++)if(!(s[a]<0)){var o=Of(n,s[a]);o[0]>=t[0]&&o[0]<=e[0]&&o[1]>=t[1]&&o[1]<=e[1]&&o[2]>=t[2]&&o[2]<=e[2]&&i(a,o[0],o[1],o[2])}return}for(var c=t[0];c<=e[0];c++)for(var l=t[1];l<=e[1];l++)for(var h=t[2];h<=e[2];h++){var u=Rf(n,c,l,h);u>=0&&i(u,c,l,h)}}}function za(n,t,e,i){Cf(n,"pointsInRadius");var r=!1,s=Ff(t,r,"point");if(Ic(e,"radius"),n.count===0)return new Uint32Array(0);var a=Ho(n,0,s[0]-e,s[0]+e),o=Ho(n,1,s[1]-e,s[1]+e),c=Ho(n,2,s[2]-e,s[2]+e),l=e*e,h=n.coords,u=h.x,f=h.y,d=h.z,p=h.stride,_=n.order,g=[];return CM(n,[a[0],o[0],c[0]],[a[1],o[1],c[1]],function(m,v,y,S){if(!(ic(n,v,y,S,s)>l))for(var C=n.start[m],T=C+n.length[m];C<T;C++){var I=_[C],x=I*p,M=u[x]-s[0],N=f[x]-s[1],P=d[x]-s[2];M*M+N*N+P*P<=l&&g.push(I)}}),Uint32Array.from(g).sort()}var uu=1e-6;function Pc(n){return new St(Et.INVALID_ARGUMENT,n)}function Dc(n,t){if(!(Number.isInteger(n)&&n>=1))throw Pc(t+" must be a whole number >= 1, not "+String(n))}function Bf(n){if(n===void 0)throw Pc("maxDistance is required: a positive distance in the columns' units (e.g. 0.3 m for a handheld scan)");Ic(n,"maxDistance")}function zf(n,t){if(n===void 0)return function(){};if(typeof n!="function")throw Pc("onProgress must be a function");var e=Math.max(1,Math.floor(t/100)),i=0;return function(r){(r===t||r-i>=e)&&(i=r,n(r,t))}}function IM(n,t,e,i,r,s,a,o,c,l){var h=0;if(n.count===0)return 0;var u=[t,e,i],f=[n.nx,n.ny,n.nz],d=n.cellSize,p=1/d,_=n.min,g=3,m=[0,0,0],v;for(v=0;v<g;v++)m[v]=Math.min(f[v]-1,Math.max(0,Math.floor((u[v]-_[v])*p)));var y=n.coords,S=y.x,C=y.y,T=y.z,I=y.stride,x=n.order,M=o,N=c,P=0,B=n.keys.length,F=[0,0,0];for(v=0;v<g;v++){var E=_[v],A=_[v]+f[v]*d;F[v]=Math.max(0,(u[v]<E?E-u[v]:u[v]>A?u[v]-A:0)-d*uu)}function w(j,ht){return N[j]>N[ht]||N[j]===N[ht]&&M[j]>M[ht]}function D(j,ht){var ct=M[j];M[j]=M[ht],M[ht]=ct;var xt=N[j];N[j]=N[ht],N[ht]=xt}function U(j,ht){for(;;){var ct=2*j+1,xt=ct+1,gt=j;if(ct<ht&&w(ct,gt)&&(gt=ct),xt<ht&&w(xt,gt)&&(gt=xt),gt===j)return;D(j,gt),j=gt}}function k(j,ht){if(h<r){M[h]=j,N[h]=ht;for(var ct=h++;ct>0;){var xt=Math.floor((ct-1)/2);if(!w(ct,xt))break;D(ct,xt),ct=xt}}else(ht<N[0]||ht===N[0]&&j<M[0])&&(M[0]=j,N[0]=ht,U(0,h))}function O(){return h===r?Math.min(N[0],s):s}function X(j){for(var ht=n.start[j],ct=ht+n.length[j];ht<ct;ht++){var xt=x[ht];if(xt!==a){var gt=xt*I,dt=S[gt]-u[0],Rt=C[gt]-u[1],z=T[gt]-u[2],te=dt*dt+Rt*Rt+z*z;te<=s&&k(xt,te)}}}function H(j,ht,ct){P++;var xt=Rf(n,j,ht,ct);xt<0||ic(n,j,ht,ct,u)>O()||X(xt)}function K(j){var ht=Math.max(0,m[0]-j),ct=Math.min(f[0]-1,m[0]+j),xt=Math.max(0,m[1]-j),gt=Math.min(f[1]-1,m[1]+j),dt=Math.max(0,m[2]-j),Rt=Math.min(f[2]-1,m[2]+j);function z(ne,Dt){for(var L=dt;L<=Rt;L++)H(ne,Dt,L)}for(var te=ht;te<=ct;te++){if(te===m[0]-j||te===m[0]+j){for(var Yt=xt;Yt<=gt;Yt++)z(te,Yt);continue}for(m[1]-j>=0&&z(te,m[1]-j),m[1]+j<f[1]&&z(te,m[1]+j),Yt=Math.max(xt,m[1]-j+1);Yt<=Math.min(gt,m[1]+j-1);Yt++)m[2]-j>=0&&H(te,Yt,m[2]-j),m[2]+j<f[2]&&H(te,Yt,m[2]+j)}}function et(j){return j=Math.max(0,j-d*uu),j*j}function nt(){h=0;for(var j=n.keys,ht=[],ct=0;ct<j.length;ct++)if(!(j[ct]<0)){var xt=Of(n,j[ct]),gt=ic(n,xt[0],xt[1],xt[2],u);gt<=s&&ht.push([gt,ct])}ht.sort(function(Rt,z){return Rt[0]-z[0]});for(var dt=0;dt<ht.length&&!(ht[dt][0]>O());dt++)X(ht[dt][1])}for(var V=0;;V++){if(K(V),P>B){nt();break}var G=1/0;for(v=0;v<g;v++){for(var Q=0,at=0;at<g;at++)at!==v&&(Q+=F[at]*F[at]);m[v]-V>0&&(G=Math.min(G,et(u[v]-(_[v]+(m[v]-V)*d))+Q)),m[v]+V<f[v]-1&&(G=Math.min(G,et(_[v]+(m[v]+V+1)*d-u[v])+Q))}if(G===1/0||h===r&&N[0]<G||G>s)break}for(var rt=h-1;rt>0;rt--)D(0,rt),U(0,rt);return h}function rc(n,t,e,i){Cf(n,"nearestPoints");var r=!1,s=Ff(t,r,"point");Dc(e,"k");var a=void 0;Ic(a,"maxDistance",!0);for(var o=Math.min(e,n.count),c=new Uint32Array(o),l=new Float64Array(o),h=o===0?0:IM(n,s[0],s[1],s[2],o,1/0,-1,c,l),u=0;u<h;u++)l[u]=Math.sqrt(l[u]);return{points:h===o?c:c.slice(0,h),d:h===o?l:l.slice(0,h)}}var Ra=16,Gf=3;function PM(n){return new St(Et.INVALID_ARGUMENT,n)}function Lc(n,t){var e=xs(n,t),i=n.count;Af(i);var r=[e.x,e.y,e.z],s=e.stride,a,o;for(a=0,o=0;a<i;a++,o+=s){var c=r[0][o],l=r[1][o],h=r[2][o];if(c-c!==0||l-l!==0||h-h!==0)throw PM("point "+a+" has a non-finite "+(c-c!==0?"x":l-l!==0?"y":"z")+" coordinate")}var u=new Uint32Array(i);for(a=0;a<i;a++)u[a]=a;for(var f=0;Math.ceil(i/Math.pow(2,f))>Ra;)f++;var d=Math.max(1,Math.pow(2,f)-1),p=new Uint8Array(d),_=new Float64Array(d);function g(E,A,w,D){for(var U=E,k=A-1;k>U;){var O=Math.floor((U+k)/2),X=D[u[U]*s],H=D[u[O]*s],K=D[u[k]*s],et=X<H?H<K?H:X<K?K:X:X<K?X:H<K?K:H,nt=U,V=k;do{for(;D[u[nt]*s]<et;)nt++;for(;D[u[V]*s]>et;)V--;if(nt<=V){var G=u[nt];u[nt]=u[V],u[V]=G,nt++,V--}}while(nt<=V);if(w<=V)k=V;else if(w>=nt)U=nt;else return}}for(var m=[0,0,i];m.length;){var v=m.pop(),y=m.pop(),S=m.pop();if(!(v-y<=Ra)){for(var C=0,T=-1,I=0;I<3;I++){for(var x=r[I],M=1/0,N=-1/0,P=y;P<v;P++){var B=x[u[P]*s];B<M&&(M=B),B>N&&(N=B)}N-M>T&&(T=N-M,C=I)}if(T===0){u.subarray(y,v).sort(),p[S]=Gf;continue}p[S]=C;var F=Math.floor((y+v)/2);g(y,v,F,r[C]),_[S]=r[C][u[F]*s],m.push(2*S+1,y,F,2*S+2,F,v)}}return{count:i,perm:u,axis:p,split:_,leafSize:Ra,coords:e}}var Ms,Ga,Va,ka,sc,Un=[0,0,0],Ja,As,ac,mn,Fe,Fn;function oc(n,t){return Fe[n]>Fe[t]||Fe[n]===Fe[t]&&mn[n]>mn[t]}function Uc(n,t){var e=mn[n];mn[n]=mn[t],mn[t]=e;var i=Fe[n];Fe[n]=Fe[t],Fe[t]=i}function Vf(n,t){for(;;){var e=2*n+1,i=e+1,r=n;if(e<t&&oc(e,r)&&(r=e),i<t&&oc(i,r)&&(r=i),r===n)return;Uc(n,r),n=r}}function fu(n,t){if(Fn<Ja){mn[Fn]=n,Fe[Fn]=t;for(var e=Fn++;e>0;){var i=Math.floor((e-1)/2);if(!oc(e,i))break;Uc(e,i),e=i}}else(t<Fe[0]||t===Fe[0]&&n<mn[0])&&(mn[0]=n,Fe[0]=t,Vf(0,Fn))}function du(){return Fn===Ja&&Fe[0]<As?Fe[0]:As}function ms(n,t,e){var i=Ms.perm;if(e-t<=Ra){for(var r=t;r<e;r++){var s=i[r];if(s!==ac){var a=s*sc,o=Ga[a]-Un[0],c=Va[a]-Un[1],l=ka[a]-Un[2],h=o*o+c*c+l*l;h<=As&&fu(s,h)}}return}var u=Ms.axis[n];if(u===Gf){var f=i[t]*sc,d=Ga[f]-Un[0],p=Va[f]-Un[1],_=ka[f]-Un[2],g=d*d+p*p+_*_;if(g>As)return;for(var m=t;m<e;m++){var v=i[m];if(v!==ac){if(Fn===Ja&&(g>Fe[0]||g===Fe[0]&&v>mn[0]))return;fu(v,g)}}return}var y=Math.floor((t+e)/2),S=Un[u]-Ms.split[n];S<0?(ms(2*n+1,t,y),S*S<=du()&&ms(2*n+2,y,e)):(ms(2*n+2,y,e),S*S<=du()&&ms(2*n+1,t,y))}function kf(n,t,e,i,r,s,a,o,c){if(n.count===0)return 0;Ms=n,Ga=n.coords.x,Va=n.coords.y,ka=n.coords.z,sc=n.coords.stride,Un[0]=t,Un[1]=e,Un[2]=i,Ja=r,As=s,ac=a,mn=o,Fe=c,Fn=0,ms(0,0,n.count);for(var l=Fn-1;l>0;l--)Uc(0,l),Vf(0,l);var h=Fn;return Ms=Ga=Va=ka=mn=Fe=null,h}var DM=1e5;function LM(n){(n[2]<0||n[2]===0&&(n[0]<0||n[0]===0&&n[1]<0))&&(n[0]=-n[0],n[1]=-n[1],n[2]=-n[2]),n[0]+=0,n[1]+=0,n[2]+=0}function UM(n,t){if(!(n[0]+n[3]+n[5]>0))return t[0]=0,t[1]=0,t[2]=0,t[3]=NaN,!1;for(var e=[[n[0],n[1],n[2]],[n[1],n[3],n[4]],[n[2],n[4],n[5]]],i=[[1,0,0],[0,1,0],[0,0,1]],r=[[0,1],[0,2],[1,2]],s=0;s<50;s++){var a=e[0][1]*e[0][1]+e[0][2]*e[0][2]+e[1][2]*e[1][2],o=e[0][0]*e[0][0]+e[1][1]*e[1][1]+e[2][2]*e[2][2];if(a<=1e-30*o)break;for(var c=0;c<3;c++){var l=r[c][0],h=r[c][1],u=e[l][h];if(u!==0){for(var f=(e[h][h]-e[l][l])/(2*u),d=Math.abs(f)>1e150?1/(2*f):(f>=0?1:-1)/(Math.abs(f)+Math.sqrt(f*f+1)),p=1/Math.sqrt(d*d+1),_=d*p,g=0;g<3;g++){var m=e[g][l],v=e[g][h];e[g][l]=p*m-_*v,e[g][h]=_*m+p*v}for(g=0;g<3;g++){var y=e[l][g],S=e[h][g];e[l][g]=p*y-_*S,e[h][g]=_*y+p*S}for(e[l][h]=0,e[h][l]=0,g=0;g<3;g++){var C=i[g][l],T=i[g][h];i[g][l]=p*C-_*T,i[g][h]=_*C+p*T}}}}var I=0;e[1][1]<e[I][I]&&(I=1),e[2][2]<e[I][I]&&(I=2),t[0]=i[0][I],t[1]=i[1][I],t[2]=i[2][I];var x=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return t[0]/=x,t[1]/=x,t[2]/=x,LM(t),t[3]=e[I][I],t.length>4&&(t[4]=e[(I+1)%3][(I+1)%3]<e[(I+2)%3][(I+2)%3]?e[(I+1)%3][(I+1)%3]:e[(I+2)%3][(I+2)%3]),!0}var In=new Float64Array(6),Mr=new Float64Array(5);function Ca(n,t,e,i,r,s,a,o,c){for(var l=r*i,h=n[l],u=t[l],f=e[l],d=1,p=0,_=0,g=0,m=0,v=0,y=0,S=0,C=0,T=0,I=0;I<a;I++){var x=s[I]*i,M=o?o[I]:1,N=n[x]-h,P=t[x]-u,B=e[x]-f;d+=M,p+=M*N,_+=M*P,g+=M*B,m+=M*N*N,v+=M*N*P,y+=M*N*B,S+=M*P*P,C+=M*P*B,T+=M*B*B}var F=p/d,E=_/d,A=g/d;return In[0]=m-p*F,In[1]=v-p*E,In[2]=y-p*A,In[3]=S-_*E,In[4]=C-_*A,In[5]=T-g*A,c[4]=F,c[5]=E,c[6]=A,!UM(In,Mr)||Mr[4]<=1e-12*(In[0]+In[3]+In[5])?(c[0]=0,c[1]=0,c[2]=0,c[3]=NaN,!1):(c[0]=Mr[0],c[1]=Mr[1],c[2]=Mr[2],c[3]=Math.sqrt(Math.max(0,Mr[3])/d),!0)}function Hf(n,t){n=n||{};var e=n.k===void 0?16:n.k;return Dc(e,"k"),Bf(n.maxDistance),{k:e,maxD2:n.maxDistance*n.maxDistance,maxDistance:n.maxDistance,onProgress:n.onProgress,fn:t}}function Wf(n,t,e,i,r,s){var a=n.coords,o=a.x,c=a.y,l=a.z,h=a.stride,u=t*h,f=kf(n,o[u],c[u],l[u],e.k,e.maxD2,t,i,r);return f<3?(s[0]=0,s[1]=0,s[2]=0,s[3]=NaN,!1):Ca(o,c,l,h,t,i,f,null,s)}function NM(n,t){for(var e=Hf(t,"pointNormals"),i=zf(e.onProgress,n.count),r=Lc(n,"pointNormals"),s=r.count,a=new Float32Array(3*s),o=new Float32Array(s),c=new Uint32Array(e.k),l=new Float64Array(e.k),h=new Float64Array(7),u=0;u<s;u++)Wf(r,u,e,c,l,h),a[3*u]=h[0],a[3*u+1]=h[1],a[3*u+2]=h[2],o[u]=h[3],i(u+1);return{normal:a,residual:o}}function FM(n,t){for(var e=Hf(t,"estimateNoise"),i=Lc(n,"estimateNoise"),r=fx(i.count,DM),s=new Float64Array(r.length),a=0,o=new Uint32Array(e.k),c=new Float64Array(e.k),l=new Float64Array(7),h=0;h<r.length;h++)Wf(i,r[h],e,o,c,l)&&(s[a++]=Math.fround(l[3]));if(a===0)return NaN;var u=s.subarray(0,a).sort();return u[Math.floor((a-1)/2)]}var OM=5;function Wo(n){return new St(Et.INVALID_ARGUMENT,n)}function BM(n,t){t=t||{};var e=t.method===void 0?"bilateral":t.method;if(e!=="bilateral"&&e!=="mls")throw Wo('method must be "bilateral" or "mls", not '+String(e));var i=t.k===void 0?16:t.k;Dc(i,"k"),Bf(t.maxDistance);var r=t.iterations===void 0?1:t.iterations;if(!(Number.isInteger(r)&&r>=1))throw Wo("iterations must be a whole number >= 1, not "+String(r));if(t.sigma!==void 0&&!(typeof t.sigma=="number"&&isFinite(t.sigma)&&t.sigma>0))throw Wo("sigma must be a positive finite number, not "+String(t.sigma));var s=t.maxDistance,a=s*s,o=xs(n,"denoisePoints"),c=n.count,l=o.stride===3,h=zf(t.onProgress,c*r);t.inPlace&&!l&&cx(n,[{name:"x"},{name:"y"},{name:"z"}]);var u=t.sigma!==void 0?t.sigma:FM(n,{k:i,maxDistance:s}),f=u>0;function d(){return l?{count:c,positions:fs(n.positions,3*c)}:{count:c,x:fs(n.x,c),y:fs(n.y,c),z:fs(n.z,c)}}for(var p=l?{count:c,positions:n.positions}:{count:c,x:n.x,y:n.y,z:n.z},_=d(),g=t.normals?new Float32Array(3*c):null,m=new Uint32Array(i),v=new Float64Array(i),y=new Float64Array(i),S=new Float64Array(7),C=1/(2*(2*u)*(2*u)),T=0;T<r;T++){for(var I=T===r-1,x=f||I&&g?Lc(p,"denoisePoints"):null,M=x?x.coords:xs(p,"denoisePoints"),N=M.x,P=M.y,B=M.z,F=M.stride,E=xs(_,"denoisePoints"),A=E.x,w=E.y,D=E.z,U=0,k=0;U<c;U++,k+=F){var O=N[k],X=P[k],H=B[k],K=0,et=0,nt=0,V=0,G=x?kf(x,O,X,H,i,a,U,m,v):0;if(G>=3&&Ca(N,P,B,F,U,m,G,null,S)&&(K=S[0],et=S[1],nt=S[2],f&&G>=OM&&v[G-1]>0)){var Q=.5*Math.sqrt(v[G-1]),at=1/(2*Q*Q),rt,j,ht;if(e==="bilateral"){for(rt=0;rt<G;rt++)j=m[rt]*F,ht=K*(N[j]-O)+et*(P[j]-X)+nt*(B[j]-H),y[rt]=Math.exp(-v[rt]*at-ht*ht*C);Ca(N,P,B,F,U,m,G,y,S)&&(K=S[0],et=S[1],nt=S[2]);var ct=0,xt=0;for(rt=0;rt<G;rt++){j=m[rt]*F,ht=K*(N[j]-O)+et*(P[j]-X)+nt*(B[j]-H);var gt=Math.exp(-v[rt]*at-ht*ht*C);ct+=gt*ht,xt+=gt}xt>0&&(V=ct/xt)}else{for(rt=0;rt<G;rt++)y[rt]=Math.exp(-v[rt]*at);Ca(N,P,B,F,U,m,G,y,S)&&(K=S[0],et=S[1],nt=S[2],V=K*S[4]+et*S[5]+nt*S[6])}}var dt=U*E.stride;V!==0?(A[dt]=O+K*V,w[dt]=X+et*V,D[dt]=H+nt*V):(A[dt]=O,w[dt]=X,D[dt]=H),g&&I&&(g[3*U]=K,g[3*U+1]=et,g[3*U+2]=nt),h(T*c+U+1)}if(!I){var Rt=p;p=_,_=T===0?d():Rt}}var z=_;t.inPlace&&(l?n.positions.set(_.positions):(n.x.set(_.x),n.y.set(_.y),n.z.set(_.z)),z=n);var te=l?["positions"]:["x","y","z"],Yt={count:c};return bc(n).forEach(function(ne){var Dt=te.indexOf(ne.name)>=0?z[ne.name]:n[ne.name];Object.defineProperty(Yt,ne.name,{value:Dt,enumerable:!0,writable:!0,configurable:!0})}),g&&Object.defineProperty(Yt,"normal",{value:g,enumerable:!0,writable:!0,configurable:!0}),Yt}var gn=Object.freeze({INVALID_INPUT:"INVALID_INPUT",NEEDS_ORIGIN:"NEEDS_ORIGIN",TOO_FEW_POINTS:"TOO_FEW_POINTS",CROSSING_BREAKLINES:"CROSSING_BREAKLINES"});class Br extends Error{constructor(t,e){super(e),this.name="TrimeshBuildError",this.code=t}}var zM=1e4;function qi(n,t){return new Br(n,t)}function GM(n){if(n===null||typeof n!="object")throw qi(gn.INVALID_INPUT,"cols must be a las-laz-js columns object { count, positions } or { count, x, y, z }");var t=n.count;if(typeof t!="number"||!Number.isInteger(t)||t<0)throw qi(gn.INVALID_INPUT,"cols.count must be a whole number, not "+String(t));if(n.positions&&n.positions.length===3*t){var e=n.positions;return{isFloat32:e instanceof Float32Array,get:function(r,s){return e[3*r+s]}}}if(n.x&&n.y&&n.z&&n.x.length===t&&n.y.length===t&&n.z.length===t){var i=[n.x,n.y,n.z];return{isFloat32:n.x instanceof Float32Array,get:function(r,s){return i[s][r]}}}throw qi(gn.INVALID_INPUT,"cols needs a positions column of length 3 x count, or x, y, z columns of length count")}function VM(n){if(n.length===0)return NaN;var t=Float64Array.from(n).sort();return t[t.length-1>>1]}function kM(n,t,e){for(var i=Math.max(1,Math.floor(e/zM)),r=[],s=0;s<e;s+=i){var a=rc(n,[t[3*s],t[3*s+1],t[3*s+2]],2);a.d.length===2&&a.d[1]>0&&r.push(a.d[1])}return VM(r)}function Xo(n,t){var e=t||{},i=GM(n),r=n.count;if(r<3)throw qi(gn.TOO_FEW_POINTS,"need at least 3 points, got "+r);if(i.isFloat32&&!e.origin)throw qi(gn.NEEDS_ORIGIN,"a Float32 cloud cannot hold mine coordinates; pass options.origin (the shift it was written with)");for(var s=0;s<r;s++)for(var a=0;a<3;a++)if(!isFinite(i.get(s,a)))throw qi(gn.INVALID_INPUT,"point "+s+" has a non-finite coordinate");var o;if(e.origin)o={x:e.origin.x,y:e.origin.y,z:e.origin.z};else{for(var c=i.get(0,0),l=i.get(0,1),h=i.get(0,2),u=0,f=0,d=0,p=0;p<r;p++)u+=i.get(p,0)-c,f+=i.get(p,1)-l,d+=i.get(p,2)-h;o={x:c+u/r,y:l+f/r,z:h+d/r}}for(var _=new Float64Array(3*r),g=[1/0,1/0,1/0],m=[-1/0,-1/0,-1/0],v=[o.x,o.y,o.z],y=0;y<r;y++)for(var S=0;S<3;S++){var C=i.get(y,S)-v[S];_[3*y+S]=C,C<g[S]&&(g[S]=C),C>m[S]&&(m[S]=C)}var T={count:r,positions:_},I=wf(T),x=kM(I,_,r),M=e.normals;if(M){if(M.length!==3*r)throw qi(gn.INVALID_INPUT,"options.normals must have 3 x count values")}else{var N=e.k||20,P=e.maxRadiusMultiplier||3;M=NM(T,{k:N,maxDistance:P*x*4}).normal}return{coords:_,count:r,origin:o,bounds:{min:g,max:m},index:I,normals:M,medianSpacing:x}}const Ye=11102230246251565e-32,wt=134217729,Xf=(3+8*Ye)*Ye;function Ce(n,t,e,i,r){let s,a,o,c,l=t[0],h=i[0],u=0,f=0;h>l==h>-l?(s=l,l=t[++u]):(s=h,h=i[++f]);let d=0;if(u<n&&f<e)for(h>l==h>-l?(a=l+s,o=s-(a-l),l=t[++u]):(a=h+s,o=s-(a-h),h=i[++f]),s=a,o!==0&&(r[d++]=o);u<n&&f<e;)h>l==h>-l?(a=s+l,c=a-s,o=s-(a-c)+(l-c),l=t[++u]):(a=s+h,c=a-s,o=s-(a-c)+(h-c),h=i[++f]),s=a,o!==0&&(r[d++]=o);for(;u<n;)a=s+l,c=a-s,o=s-(a-c)+(l-c),l=t[++u],s=a,o!==0&&(r[d++]=o);for(;f<e;)a=s+h,c=a-s,o=s-(a-c)+(h-c),h=i[++f],s=a,o!==0&&(r[d++]=o);return(s!==0||d===0)&&(r[d++]=s),d}function un(n,t,e,i,r,s,a,o){return Ce(Ce(n,t,e,i,a),a,r,s,o)}function ut(n,t,e,i){let r,s,a,o,c,l,h,u,f,d,p;h=wt*e,d=h-(h-e),p=e-d;let _=t[0];r=_*e,h=wt*_,u=h-(h-_),f=_-u,a=f*p-(r-u*d-f*d-u*p);let g=0;a!==0&&(i[g++]=a);for(let m=1;m<n;m++)_=t[m],o=_*e,h=wt*_,u=h-(h-_),f=_-u,c=f*p-(o-u*d-f*d-u*p),s=r+c,l=s-r,a=r-(s-l)+(c-l),a!==0&&(i[g++]=a),r=o+s,a=s-(r-o),a!==0&&(i[g++]=a);return(r!==0||g===0)&&(i[g++]=r),g}function Yf(n,t){let e=t[0];for(let i=1;i<n;i++)e+=t[i];return e}function ft(n){return new Float64Array(n)}const HM=(3+16*Ye)*Ye,WM=(2+12*Ye)*Ye,XM=(9+64*Ye)*Ye*Ye,yr=ft(4),pu=ft(8),mu=ft(12),gu=ft(16),Ke=ft(4);function YM(n,t,e,i,r,s,a){let o,c,l,h,u,f,d,p,_,g,m,v,y,S,C,T,I,x;const M=n-r,N=e-r,P=t-s,B=i-s;S=M*B,f=wt*M,d=f-(f-M),p=M-d,f=wt*B,_=f-(f-B),g=B-_,C=p*g-(S-d*_-p*_-d*g),T=P*N,f=wt*P,d=f-(f-P),p=P-d,f=wt*N,_=f-(f-N),g=N-_,I=p*g-(T-d*_-p*_-d*g),m=C-I,u=C-m,yr[0]=C-(m+u)+(u-I),v=S+m,u=v-S,y=S-(v-u)+(m-u),m=y-T,u=y-m,yr[1]=y-(m+u)+(u-T),x=v+m,u=x-v,yr[2]=v-(x-u)+(m-u),yr[3]=x;let F=Yf(4,yr),E=WM*a;if(F>=E||-F>=E||(u=n-M,o=n-(M+u)+(u-r),u=e-N,l=e-(N+u)+(u-r),u=t-P,c=t-(P+u)+(u-s),u=i-B,h=i-(B+u)+(u-s),o===0&&c===0&&l===0&&h===0)||(E=XM*a+Xf*Math.abs(F),F+=M*h+B*o-(P*l+N*c),F>=E||-F>=E))return F;S=o*B,f=wt*o,d=f-(f-o),p=o-d,f=wt*B,_=f-(f-B),g=B-_,C=p*g-(S-d*_-p*_-d*g),T=c*N,f=wt*c,d=f-(f-c),p=c-d,f=wt*N,_=f-(f-N),g=N-_,I=p*g-(T-d*_-p*_-d*g),m=C-I,u=C-m,Ke[0]=C-(m+u)+(u-I),v=S+m,u=v-S,y=S-(v-u)+(m-u),m=y-T,u=y-m,Ke[1]=y-(m+u)+(u-T),x=v+m,u=x-v,Ke[2]=v-(x-u)+(m-u),Ke[3]=x;const A=Ce(4,yr,4,Ke,pu);S=M*h,f=wt*M,d=f-(f-M),p=M-d,f=wt*h,_=f-(f-h),g=h-_,C=p*g-(S-d*_-p*_-d*g),T=P*l,f=wt*P,d=f-(f-P),p=P-d,f=wt*l,_=f-(f-l),g=l-_,I=p*g-(T-d*_-p*_-d*g),m=C-I,u=C-m,Ke[0]=C-(m+u)+(u-I),v=S+m,u=v-S,y=S-(v-u)+(m-u),m=y-T,u=y-m,Ke[1]=y-(m+u)+(u-T),x=v+m,u=x-v,Ke[2]=v-(x-u)+(m-u),Ke[3]=x;const w=Ce(A,pu,4,Ke,mu);S=o*h,f=wt*o,d=f-(f-o),p=o-d,f=wt*h,_=f-(f-h),g=h-_,C=p*g-(S-d*_-p*_-d*g),T=c*l,f=wt*c,d=f-(f-c),p=c-d,f=wt*l,_=f-(f-l),g=l-_,I=p*g-(T-d*_-p*_-d*g),m=C-I,u=C-m,Ke[0]=C-(m+u)+(u-I),v=S+m,u=v-S,y=S-(v-u)+(m-u),m=y-T,u=y-m,Ke[1]=y-(m+u)+(u-T),x=v+m,u=x-v,Ke[2]=v-(x-u)+(m-u),Ke[3]=x;const D=Ce(w,mu,4,Ke,gu);return gu[D-1]}function ri(n,t,e,i,r,s){const a=(t-s)*(e-r),o=(n-r)*(i-s),c=a-o,l=Math.abs(a+o);return Math.abs(c)>=HM*l?c:-YM(n,t,e,i,r,s,l)}ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(8);ft(8);ft(8);ft(4);ft(8);ft(8);ft(16);ft(12);ft(192);ft(192);const ZM=(10+96*Ye)*Ye,KM=(4+48*Ye)*Ye,qM=(44+576*Ye)*Ye*Ye,xi=ft(4),Mi=ft(4),yi=ft(4),Pn=ft(4),Dn=ft(4),Ln=ft(4),qe=ft(4),je=ft(4),Yo=ft(8),Zo=ft(8),Ko=ft(8),qo=ft(8),jo=ft(8),Jo=ft(8),pa=ft(8),ma=ft(8),ga=ft(8),Bi=ft(4),zi=ft(4),Gi=ft(4),Pt=ft(8),Ht=ft(16),he=ft(16),ue=ft(16),ie=ft(32),Si=ft(32),Se=ft(48),rn=ft(64);let Pr=ft(1152),$o=ft(1152);function Ee(n,t,e){n=Ce(n,Pr,t,e,$o);const i=Pr;return Pr=$o,$o=i,n}function jM(n,t,e,i,r,s,a,o,c){let l,h,u,f,d,p,_,g,m,v,y,S,C,T,I,x,M,N,P,B,F,E,A,w,D,U,k,O,X,H,K,et,nt,V,G;const Q=n-a,at=e-a,rt=r-a,j=t-o,ht=i-o,ct=s-o;K=at*ct,A=wt*at,w=A-(A-at),D=at-w,A=wt*ct,U=A-(A-ct),k=ct-U,et=D*k-(K-w*U-D*U-w*k),nt=rt*ht,A=wt*rt,w=A-(A-rt),D=rt-w,A=wt*ht,U=A-(A-ht),k=ht-U,V=D*k-(nt-w*U-D*U-w*k),O=et-V,E=et-O,xi[0]=et-(O+E)+(E-V),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H-nt,E=H-O,xi[1]=H-(O+E)+(E-nt),G=X+O,E=G-X,xi[2]=X-(G-E)+(O-E),xi[3]=G,K=rt*j,A=wt*rt,w=A-(A-rt),D=rt-w,A=wt*j,U=A-(A-j),k=j-U,et=D*k-(K-w*U-D*U-w*k),nt=Q*ct,A=wt*Q,w=A-(A-Q),D=Q-w,A=wt*ct,U=A-(A-ct),k=ct-U,V=D*k-(nt-w*U-D*U-w*k),O=et-V,E=et-O,Mi[0]=et-(O+E)+(E-V),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H-nt,E=H-O,Mi[1]=H-(O+E)+(E-nt),G=X+O,E=G-X,Mi[2]=X-(G-E)+(O-E),Mi[3]=G,K=Q*ht,A=wt*Q,w=A-(A-Q),D=Q-w,A=wt*ht,U=A-(A-ht),k=ht-U,et=D*k-(K-w*U-D*U-w*k),nt=at*j,A=wt*at,w=A-(A-at),D=at-w,A=wt*j,U=A-(A-j),k=j-U,V=D*k-(nt-w*U-D*U-w*k),O=et-V,E=et-O,yi[0]=et-(O+E)+(E-V),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H-nt,E=H-O,yi[1]=H-(O+E)+(E-nt),G=X+O,E=G-X,yi[2]=X-(G-E)+(O-E),yi[3]=G,l=Ce(Ce(Ce(ut(ut(4,xi,Q,Pt),Pt,Q,Ht),Ht,ut(ut(4,xi,j,Pt),Pt,j,he),he,ie),ie,Ce(ut(ut(4,Mi,at,Pt),Pt,at,Ht),Ht,ut(ut(4,Mi,ht,Pt),Pt,ht,he),he,Si),Si,rn),rn,Ce(ut(ut(4,yi,rt,Pt),Pt,rt,Ht),Ht,ut(ut(4,yi,ct,Pt),Pt,ct,he),he,ie),ie,Pr);let xt=Yf(l,Pr),gt=KM*c;if(xt>=gt||-xt>=gt||(E=n-Q,h=n-(Q+E)+(E-a),E=t-j,d=t-(j+E)+(E-o),E=e-at,u=e-(at+E)+(E-a),E=i-ht,p=i-(ht+E)+(E-o),E=r-rt,f=r-(rt+E)+(E-a),E=s-ct,_=s-(ct+E)+(E-o),h===0&&u===0&&f===0&&d===0&&p===0&&_===0)||(gt=qM*c+Xf*Math.abs(xt),xt+=(Q*Q+j*j)*(at*_+ct*u-(ht*f+rt*p))+2*(Q*h+j*d)*(at*ct-ht*rt)+((at*at+ht*ht)*(rt*d+j*f-(ct*h+Q*_))+2*(at*u+ht*p)*(rt*j-ct*Q))+((rt*rt+ct*ct)*(Q*p+ht*h-(j*u+at*d))+2*(rt*f+ct*_)*(Q*ht-j*at)),xt>=gt||-xt>=gt))return xt;if((u!==0||p!==0||f!==0||_!==0)&&(K=Q*Q,A=wt*Q,w=A-(A-Q),D=Q-w,et=D*D-(K-w*w-(w+w)*D),nt=j*j,A=wt*j,w=A-(A-j),D=j-w,V=D*D-(nt-w*w-(w+w)*D),O=et+V,E=O-et,Pn[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,Pn[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,Pn[2]=X-(G-E)+(O-E),Pn[3]=G),(f!==0||_!==0||h!==0||d!==0)&&(K=at*at,A=wt*at,w=A-(A-at),D=at-w,et=D*D-(K-w*w-(w+w)*D),nt=ht*ht,A=wt*ht,w=A-(A-ht),D=ht-w,V=D*D-(nt-w*w-(w+w)*D),O=et+V,E=O-et,Dn[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,Dn[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,Dn[2]=X-(G-E)+(O-E),Dn[3]=G),(h!==0||d!==0||u!==0||p!==0)&&(K=rt*rt,A=wt*rt,w=A-(A-rt),D=rt-w,et=D*D-(K-w*w-(w+w)*D),nt=ct*ct,A=wt*ct,w=A-(A-ct),D=ct-w,V=D*D-(nt-w*w-(w+w)*D),O=et+V,E=O-et,Ln[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,Ln[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,Ln[2]=X-(G-E)+(O-E),Ln[3]=G),h!==0&&(g=ut(4,xi,h,Yo),l=Ee(l,un(ut(g,Yo,2*Q,Ht),Ht,ut(ut(4,Ln,h,Pt),Pt,ht,he),he,ut(ut(4,Dn,h,Pt),Pt,-ct,ue),ue,ie,Se),Se)),d!==0&&(m=ut(4,xi,d,Zo),l=Ee(l,un(ut(m,Zo,2*j,Ht),Ht,ut(ut(4,Dn,d,Pt),Pt,rt,he),he,ut(ut(4,Ln,d,Pt),Pt,-at,ue),ue,ie,Se),Se)),u!==0&&(v=ut(4,Mi,u,Ko),l=Ee(l,un(ut(v,Ko,2*at,Ht),Ht,ut(ut(4,Pn,u,Pt),Pt,ct,he),he,ut(ut(4,Ln,u,Pt),Pt,-j,ue),ue,ie,Se),Se)),p!==0&&(y=ut(4,Mi,p,qo),l=Ee(l,un(ut(y,qo,2*ht,Ht),Ht,ut(ut(4,Ln,p,Pt),Pt,Q,he),he,ut(ut(4,Pn,p,Pt),Pt,-rt,ue),ue,ie,Se),Se)),f!==0&&(S=ut(4,yi,f,jo),l=Ee(l,un(ut(S,jo,2*rt,Ht),Ht,ut(ut(4,Dn,f,Pt),Pt,j,he),he,ut(ut(4,Pn,f,Pt),Pt,-ht,ue),ue,ie,Se),Se)),_!==0&&(C=ut(4,yi,_,Jo),l=Ee(l,un(ut(C,Jo,2*ct,Ht),Ht,ut(ut(4,Pn,_,Pt),Pt,at,he),he,ut(ut(4,Dn,_,Pt),Pt,-Q,ue),ue,ie,Se),Se)),h!==0||d!==0){if(u!==0||p!==0||f!==0||_!==0?(K=u*ct,A=wt*u,w=A-(A-u),D=u-w,A=wt*ct,U=A-(A-ct),k=ct-U,et=D*k-(K-w*U-D*U-w*k),nt=at*_,A=wt*at,w=A-(A-at),D=at-w,A=wt*_,U=A-(A-_),k=_-U,V=D*k-(nt-w*U-D*U-w*k),O=et+V,E=O-et,qe[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,qe[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,qe[2]=X-(G-E)+(O-E),qe[3]=G,K=f*-ht,A=wt*f,w=A-(A-f),D=f-w,A=wt*-ht,U=A-(A- -ht),k=-ht-U,et=D*k-(K-w*U-D*U-w*k),nt=rt*-p,A=wt*rt,w=A-(A-rt),D=rt-w,A=wt*-p,U=A-(A- -p),k=-p-U,V=D*k-(nt-w*U-D*U-w*k),O=et+V,E=O-et,je[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,je[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,je[2]=X-(G-E)+(O-E),je[3]=G,I=Ce(4,qe,4,je,ma),K=u*_,A=wt*u,w=A-(A-u),D=u-w,A=wt*_,U=A-(A-_),k=_-U,et=D*k-(K-w*U-D*U-w*k),nt=f*p,A=wt*f,w=A-(A-f),D=f-w,A=wt*p,U=A-(A-p),k=p-U,V=D*k-(nt-w*U-D*U-w*k),O=et-V,E=et-O,zi[0]=et-(O+E)+(E-V),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H-nt,E=H-O,zi[1]=H-(O+E)+(E-nt),G=X+O,E=G-X,zi[2]=X-(G-E)+(O-E),zi[3]=G,N=4):(ma[0]=0,I=1,zi[0]=0,N=1),h!==0){const dt=ut(I,ma,h,ue);l=Ee(l,Ce(ut(g,Yo,h,Ht),Ht,ut(dt,ue,2*Q,ie),ie,Se),Se);const Rt=ut(N,zi,h,Pt);l=Ee(l,un(ut(Rt,Pt,2*Q,Ht),Ht,ut(Rt,Pt,h,he),he,ut(dt,ue,h,ie),ie,Si,rn),rn),p!==0&&(l=Ee(l,ut(ut(4,Ln,h,Pt),Pt,p,Ht),Ht)),_!==0&&(l=Ee(l,ut(ut(4,Dn,-h,Pt),Pt,_,Ht),Ht))}if(d!==0){const dt=ut(I,ma,d,ue);l=Ee(l,Ce(ut(m,Zo,d,Ht),Ht,ut(dt,ue,2*j,ie),ie,Se),Se);const Rt=ut(N,zi,d,Pt);l=Ee(l,un(ut(Rt,Pt,2*j,Ht),Ht,ut(Rt,Pt,d,he),he,ut(dt,ue,d,ie),ie,Si,rn),rn)}}if(u!==0||p!==0){if(f!==0||_!==0||h!==0||d!==0?(K=f*j,A=wt*f,w=A-(A-f),D=f-w,A=wt*j,U=A-(A-j),k=j-U,et=D*k-(K-w*U-D*U-w*k),nt=rt*d,A=wt*rt,w=A-(A-rt),D=rt-w,A=wt*d,U=A-(A-d),k=d-U,V=D*k-(nt-w*U-D*U-w*k),O=et+V,E=O-et,qe[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,qe[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,qe[2]=X-(G-E)+(O-E),qe[3]=G,B=-ct,F=-_,K=h*B,A=wt*h,w=A-(A-h),D=h-w,A=wt*B,U=A-(A-B),k=B-U,et=D*k-(K-w*U-D*U-w*k),nt=Q*F,A=wt*Q,w=A-(A-Q),D=Q-w,A=wt*F,U=A-(A-F),k=F-U,V=D*k-(nt-w*U-D*U-w*k),O=et+V,E=O-et,je[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,je[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,je[2]=X-(G-E)+(O-E),je[3]=G,x=Ce(4,qe,4,je,ga),K=f*d,A=wt*f,w=A-(A-f),D=f-w,A=wt*d,U=A-(A-d),k=d-U,et=D*k-(K-w*U-D*U-w*k),nt=h*_,A=wt*h,w=A-(A-h),D=h-w,A=wt*_,U=A-(A-_),k=_-U,V=D*k-(nt-w*U-D*U-w*k),O=et-V,E=et-O,Gi[0]=et-(O+E)+(E-V),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H-nt,E=H-O,Gi[1]=H-(O+E)+(E-nt),G=X+O,E=G-X,Gi[2]=X-(G-E)+(O-E),Gi[3]=G,P=4):(ga[0]=0,x=1,Gi[0]=0,P=1),u!==0){const dt=ut(x,ga,u,ue);l=Ee(l,Ce(ut(v,Ko,u,Ht),Ht,ut(dt,ue,2*at,ie),ie,Se),Se);const Rt=ut(P,Gi,u,Pt);l=Ee(l,un(ut(Rt,Pt,2*at,Ht),Ht,ut(Rt,Pt,u,he),he,ut(dt,ue,u,ie),ie,Si,rn),rn),_!==0&&(l=Ee(l,ut(ut(4,Pn,u,Pt),Pt,_,Ht),Ht)),d!==0&&(l=Ee(l,ut(ut(4,Ln,-u,Pt),Pt,d,Ht),Ht))}if(p!==0){const dt=ut(x,ga,p,ue);l=Ee(l,Ce(ut(y,qo,p,Ht),Ht,ut(dt,ue,2*ht,ie),ie,Se),Se);const Rt=ut(P,Gi,p,Pt);l=Ee(l,un(ut(Rt,Pt,2*ht,Ht),Ht,ut(Rt,Pt,p,he),he,ut(dt,ue,p,ie),ie,Si,rn),rn)}}if(f!==0||_!==0){if(h!==0||d!==0||u!==0||p!==0?(K=h*ht,A=wt*h,w=A-(A-h),D=h-w,A=wt*ht,U=A-(A-ht),k=ht-U,et=D*k-(K-w*U-D*U-w*k),nt=Q*p,A=wt*Q,w=A-(A-Q),D=Q-w,A=wt*p,U=A-(A-p),k=p-U,V=D*k-(nt-w*U-D*U-w*k),O=et+V,E=O-et,qe[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,qe[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,qe[2]=X-(G-E)+(O-E),qe[3]=G,B=-j,F=-d,K=u*B,A=wt*u,w=A-(A-u),D=u-w,A=wt*B,U=A-(A-B),k=B-U,et=D*k-(K-w*U-D*U-w*k),nt=at*F,A=wt*at,w=A-(A-at),D=at-w,A=wt*F,U=A-(A-F),k=F-U,V=D*k-(nt-w*U-D*U-w*k),O=et+V,E=O-et,je[0]=et-(O-E)+(V-E),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H+nt,E=O-H,je[1]=H-(O-E)+(nt-E),G=X+O,E=G-X,je[2]=X-(G-E)+(O-E),je[3]=G,T=Ce(4,qe,4,je,pa),K=h*p,A=wt*h,w=A-(A-h),D=h-w,A=wt*p,U=A-(A-p),k=p-U,et=D*k-(K-w*U-D*U-w*k),nt=u*d,A=wt*u,w=A-(A-u),D=u-w,A=wt*d,U=A-(A-d),k=d-U,V=D*k-(nt-w*U-D*U-w*k),O=et-V,E=et-O,Bi[0]=et-(O+E)+(E-V),X=K+O,E=X-K,H=K-(X-E)+(O-E),O=H-nt,E=H-O,Bi[1]=H-(O+E)+(E-nt),G=X+O,E=G-X,Bi[2]=X-(G-E)+(O-E),Bi[3]=G,M=4):(pa[0]=0,T=1,Bi[0]=0,M=1),f!==0){const dt=ut(T,pa,f,ue);l=Ee(l,Ce(ut(S,jo,f,Ht),Ht,ut(dt,ue,2*rt,ie),ie,Se),Se);const Rt=ut(M,Bi,f,Pt);l=Ee(l,un(ut(Rt,Pt,2*rt,Ht),Ht,ut(Rt,Pt,f,he),he,ut(dt,ue,f,ie),ie,Si,rn),rn),d!==0&&(l=Ee(l,ut(ut(4,Dn,f,Pt),Pt,d,Ht),Ht)),p!==0&&(l=Ee(l,ut(ut(4,Pn,-f,Pt),Pt,p,Ht),Ht))}if(_!==0){const dt=ut(T,pa,_,ue);l=Ee(l,Ce(ut(C,Jo,_,Ht),Ht,ut(dt,ue,2*ct,ie),ie,Se),Se);const Rt=ut(M,Bi,_,Pt);l=Ee(l,un(ut(Rt,Pt,2*ct,Ht),Ht,ut(Rt,Pt,_,he),he,ut(dt,ue,_,ie),ie,Si,rn),rn)}}return Pr[l-1]}function JM(n,t,e,i,r,s,a,o){const c=n-a,l=e-a,h=r-a,u=t-o,f=i-o,d=s-o,p=l*d,_=h*f,g=c*c+u*u,m=h*u,v=c*d,y=l*l+f*f,S=c*f,C=l*u,T=h*h+d*d,I=g*(p-_)+y*(m-v)+T*(S-C),x=(Math.abs(p)+Math.abs(_))*g+(Math.abs(m)+Math.abs(v))*y+(Math.abs(S)+Math.abs(C))*T,M=ZM*x;return I>M||-I>M?I:jM(n,t,e,i,r,s,a,o,x)}ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(4);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(24);ft(1152);ft(1152);ft(1152);ft(1152);ft(1152);ft(2304);ft(2304);ft(3456);ft(5760);ft(8);ft(8);ft(8);ft(16);ft(24);ft(48);ft(48);ft(96);ft(192);ft(384);ft(384);ft(384);ft(768);ft(96);ft(96);ft(96);ft(1152);function _u(n,t){var e=n.x-t.x,i=n.y-t.y,r=n.z-t.z;return Math.sqrt(e*e+i*i+r*r)}function Zf(n,t){return n<t?n+"|"+t:t+"|"+n}const vu=Math.pow(2,-52),_a=new Uint32Array(512);class zr{static from(t,e=ny,i=iy){const r=t.length,s=new Float64Array(r*2);for(let a=0;a<r;a++){const o=t[a];s[2*a]=e(o),s[2*a+1]=i(o)}return new zr(s)}constructor(t){const e=t.length>>1;if(e>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const i=Math.max(2*e-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(e)),this._hullPrev=new Uint32Array(e),this._hullNext=new Uint32Array(e),this._hullTri=new Uint32Array(e),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(e),this._dists=new Float64Array(e),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:t,_hullPrev:e,_hullNext:i,_hullTri:r,_hullHash:s}=this,a=t.length>>1;let o=1/0,c=1/0,l=-1/0,h=-1/0;for(let M=0;M<a;M++){const N=t[2*M],P=t[2*M+1];N<o&&(o=N),P<c&&(c=P),N>l&&(l=N),P>h&&(h=P),this._ids[M]=M}const u=(o+l)/2,f=(c+h)/2;let d=0,p=0,_=0;for(let M=0,N=1/0;M<a;M++){const P=Qo(u,f,t[2*M],t[2*M+1]);P<N&&(d=M,N=P)}const g=t[2*d],m=t[2*d+1];for(let M=0,N=1/0;M<a;M++){if(M===d)continue;const P=Qo(g,m,t[2*M],t[2*M+1]);P<N&&P>0&&(p=M,N=P)}let v=t[2*p],y=t[2*p+1],S=1/0;for(let M=0;M<a;M++){if(M===d||M===p)continue;const N=ty(g,m,v,y,t[2*M],t[2*M+1]);N<S&&(_=M,S=N)}let C=t[2*_],T=t[2*_+1];if(S===1/0){for(let P=0;P<a;P++)this._dists[P]=t[2*P]-t[0]||t[2*P+1]-t[1];br(this._ids,this._dists,0,a-1);const M=new Uint32Array(a);let N=0;for(let P=0,B=-1/0;P<a;P++){const F=this._ids[P],E=this._dists[F];E>B&&(M[N++]=F,B=E)}this.hull=M.subarray(0,N),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(ri(g,m,v,y,C,T)<0){const M=p,N=v,P=y;p=_,v=C,y=T,_=M,C=N,T=P}const I=ey(g,m,v,y,C,T);this._cx=I.x,this._cy=I.y;for(let M=0;M<a;M++)this._dists[M]=Qo(t[2*M],t[2*M+1],I.x,I.y);br(this._ids,this._dists,0,a-1),this._hullStart=d;let x=3;i[d]=e[_]=p,i[p]=e[d]=_,i[_]=e[p]=d,r[d]=0,r[p]=1,r[_]=2,s.fill(-1),s[this._hashKey(g,m)]=d,s[this._hashKey(v,y)]=p,s[this._hashKey(C,T)]=_,this.trianglesLen=0,this._addTriangle(d,p,_,-1,-1,-1);for(let M=0,N=0,P=0;M<this._ids.length;M++){const B=this._ids[M],F=t[2*B],E=t[2*B+1];if(M>0&&Math.abs(F-N)<=vu&&Math.abs(E-P)<=vu||(N=F,P=E,B===d||B===p||B===_))continue;let A=0;for(let O=0,X=this._hashKey(F,E);O<this._hashSize&&(A=s[(X+O)%this._hashSize],!(A!==-1&&A!==i[A]));O++);A=e[A];let w=A,D;for(;D=i[w],ri(F,E,t[2*w],t[2*w+1],t[2*D],t[2*D+1])>=0;)if(w=D,w===A){w=-1;break}if(w===-1)continue;let U=this._addTriangle(w,B,i[w],-1,-1,r[w]);r[B]=this._legalize(U+2),r[w]=U,x++;let k=i[w];for(;D=i[k],ri(F,E,t[2*k],t[2*k+1],t[2*D],t[2*D+1])<0;)U=this._addTriangle(k,B,D,r[B],-1,r[k]),r[B]=this._legalize(U+2),i[k]=k,x--,k=D;if(w===A)for(;D=e[w],ri(F,E,t[2*D],t[2*D+1],t[2*w],t[2*w+1])<0;)U=this._addTriangle(D,B,w,-1,r[w],r[D]),this._legalize(U+2),r[D]=U,i[w]=w,x--,w=D;this._hullStart=e[B]=w,i[w]=e[k]=B,i[B]=k,s[this._hashKey(F,E)]=B,s[this._hashKey(t[2*w],t[2*w+1])]=w}this.hull=new Uint32Array(x);for(let M=0,N=this._hullStart;M<x;M++)this.hull[M]=N,N=i[N];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,e){return Math.floor($M(t-this._cx,e-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:e,_halfedges:i,coords:r}=this;let s=0,a=0;for(;;){const o=i[t],c=t-t%3;if(a=c+(t+2)%3,o===-1){if(s===0)break;t=_a[--s];continue}const l=o-o%3,h=c+(t+1)%3,u=l+(o+2)%3,f=e[a],d=e[t],p=e[h],_=e[u];if(QM(r[2*f],r[2*f+1],r[2*d],r[2*d+1],r[2*p],r[2*p+1],r[2*_],r[2*_+1])){e[t]=_,e[o]=f;const m=i[u];if(m===-1){let y=this._hullStart;do{if(this._hullTri[y]===u){this._hullTri[y]=t;break}y=this._hullPrev[y]}while(y!==this._hullStart)}this._link(t,m),this._link(o,i[a]),this._link(a,u);const v=l+(o+1)%3;s<_a.length&&(_a[s++]=v)}else{if(s===0)break;t=_a[--s]}}return a}_link(t,e){this._halfedges[t]=e,e!==-1&&(this._halfedges[e]=t)}_addTriangle(t,e,i,r,s,a){const o=this.trianglesLen;return this._triangles[o]=t,this._triangles[o+1]=e,this._triangles[o+2]=i,this._link(o,r),this._link(o+1,s),this._link(o+2,a),this.trianglesLen+=3,o}}function $M(n,t){const e=n/(Math.abs(n)+Math.abs(t));return(t>0?3-e:1+e)/4}function Qo(n,t,e,i){const r=n-e,s=t-i;return r*r+s*s}function QM(n,t,e,i,r,s,a,o){const c=n-a,l=t-o,h=e-a,u=i-o,f=r-a,d=s-o,p=c*c+l*l,_=h*h+u*u,g=f*f+d*d;return c*(u*g-_*d)-l*(h*g-_*f)+p*(h*d-u*f)<0}function ty(n,t,e,i,r,s){const a=e-n,o=i-t,c=r-n,l=s-t,h=a*a+o*o,u=c*c+l*l,f=.5/(a*l-o*c),d=(l*h-o*u)*f,p=(a*u-c*h)*f;return d*d+p*p}function ey(n,t,e,i,r,s){const a=e-n,o=i-t,c=r-n,l=s-t,h=a*a+o*o,u=c*c+l*l,f=.5/(a*l-o*c),d=n+(l*h-o*u)*f,p=t+(a*u-c*h)*f;return{x:d,y:p}}function br(n,t,e,i){if(i-e<=20)for(let r=e+1;r<=i;r++){const s=n[r],a=t[s];let o=r-1;for(;o>=e&&t[n[o]]>a;)n[o+1]=n[o--];n[o+1]=s}else{const r=e+i>>1;let s=e+1,a=i;ss(n,r,s),t[n[e]]>t[n[i]]&&ss(n,e,i),t[n[s]]>t[n[i]]&&ss(n,s,i),t[n[e]]>t[n[s]]&&ss(n,e,s);const o=n[s],c=t[o];for(;;){do s++;while(t[n[s]]<c);do a--;while(t[n[a]]>c);if(a<s)break;ss(n,s,a)}n[e+1]=n[a],n[a]=o,i-s+1>=a-e?(br(n,t,s,i),br(n,t,e,a-1)):(br(n,t,e,a-1),br(n,t,s,i))}}function ss(n,t,e){const i=n[t];n[t]=n[e],n[e]=i}function ny(n){return n[0]}function iy(n){return n[1]}class ry{constructor(t,e){this.W=t,this.bs=e}add(t){const e=this.W,i=t/e|0,r=t%e;return this.bs[i]|=1<<r,this}delete(t){const e=this.W,i=t/e|0,r=t%e;return this.bs[i]&=~(1<<r),this}set(t,e){const i=this.W,r=t/i|0,a=1<<t%i;return this.bs[r]^=(-e^this.bs[r])&a,e}has(t){const e=this.W,i=t/e|0,r=t%e;return!!(this.bs[i]&1<<r)}forEach(t){const e=this.W,i=this.bs,r=i.length;for(let s=0;s<r;s++){let a=0;for(;i[s]&&a<e;)i[s]&1<<a&&t(s*e+a),a++}return this}}class xu extends ry{constructor(t){const i=new Uint8Array(Math.ceil(t/8)).fill(0);super(8,i)}}function Vi(n){return n%3===2?n-2:n+1}function ti(n){return n%3===0?n+2:n-1}const as=2**32-1;class Nc{constructor(t,e){if(!t||typeof t!="object"||!t.triangles||!t.halfedges||!t.coords)throw new Error("Expected an object with Delaunator output");if(t.triangles.length%3||t.halfedges.length!==t.triangles.length||t.coords.length%2)throw new Error("Delaunator output appears inconsistent");if(t.triangles.length<3)throw new Error("No edges in triangulation");this.del=t;const i=t.coords.length>>1,r=t.triangles.length;this.vertMap=new Uint32Array(i).fill(as),this.flips=new xu(r),this.consd=new xu(r);const s=t.triangles,a=this.vertMap;for(let o=0;o<r;o++){const c=s[o];a[c]===as&&this.updateVert(o)}e&&this.constrainAll(e)}constrainOne(t,e){const{triangles:i,halfedges:r}=this.del,s=this.vertMap,a=this.consd,o=s[t];if(o===as||s[e]===as)throw new Error("Cannot constrain between points that are not triangulated");let c=o;do{const d=i[c],p=Vi(c);if(d===e)return this.protect(c);const _=ti(c),g=i[_];if(g===e)return this.protect(p),p;if(this.intersectSegments(t,e,g,d)){c=_;break}c=r[p]}while(c!==-1&&c!==o);let l=c,h=-1;for(;c!==-1;){const d=r[c],p=ti(c),_=ti(d),g=Vi(d);if(d===-1)throw new Error("Constraining edge exited the hull");if(a.has(c))throw new Error("Edge intersects already constrained edge");if(this.isCollinear(t,e,i[c])||this.isCollinear(t,e,i[d]))throw new Error("Constraining edge intersects point");if(!this.intersectSegments(i[c],i[d],i[p],i[_])){if(h===-1&&(h=c),i[_]===e){if(c===h)throw new Error("Infinite loop: non-convex quadrilateral");c=h,h=-1;continue}if(this.intersectSegments(t,e,i[_],i[d]))c=_;else if(this.intersectSegments(t,e,i[g],i[_]))c=g;else if(h===c)throw new Error("Infinite loop: no further intersect after non-convex");continue}if(this.flipDiagonal(c),this.intersectSegments(t,e,i[p],i[_])&&(h===-1&&(h=p),h===p))throw new Error("Infinite loop: flipped diagonal still intersects");i[_]===e?(l=_,c=h,h=-1):this.intersectSegments(t,e,i[g],i[_])&&(c=g)}const u=this.flips;this.protect(l);do{var f=0;u.forEach(d=>{u.delete(d);const p=r[d];p!==-1&&(u.delete(p),this.isDelaunay(d)||(this.flipDiagonal(d),f++))})}while(f>0);return this.findEdge(t,e)}delaunify(t=!1){const e=this.del.halfedges,i=this.flips,r=this.consd,s=e.length;do{var a=0;for(let o=0;o<s;o++){if(r.has(o))continue;i.delete(o);const c=e[o];c!==-1&&(i.delete(c),this.isDelaunay(o)||(this.flipDiagonal(o),a++))}}while(t&&a>0);return this}constrainAll(t){const e=t.length;for(let i=0;i<e;i++){const r=t[i];this.constrainOne(r[0],r[1])}return this}isConstrained(t){return this.consd.has(t)}findEdge(t,e){const i=this.vertMap[e],r=this.del.triangles,s=this.del.halfedges;let a=i,o=-1;do{if(r[a]===t)return a;o=Vi(a),a=s[o]}while(a!==-1&&a!==i);return r[Vi(o)]===t?-o:1/0}untriangulatedPoints(){const t=[],e=this.vertMap,i=e.length;for(let r=0;r<i;r++)e[r]===as&&t.push(r);return t}protect(t){const e=this.del.halfedges[t],i=this.flips,r=this.consd;return i.delete(t),r.add(t),e!==-1?(i.delete(e),r.add(e),e):-t}markFlip(t){const e=this.del.halfedges,i=this.flips;if(this.consd.has(t))return!1;const s=e[t];return s!==-1&&(i.add(t),i.add(s)),!0}flipDiagonal(t){const e=this.del.triangles,i=this.del.halfedges,r=this.flips,s=this.consd,a=i[t],o=ti(t),c=Vi(t),l=ti(a),h=Vi(a),u=i[o],f=i[l];if(s.has(t))throw new Error("Trying to flip a constrained edge");return e[t]=e[l],i[t]=f,r.set(t,r.has(l))||s.set(t,s.has(l)),f!==-1&&(i[f]=t),i[o]=l,e[a]=e[o],i[a]=u,r.set(a,r.has(o))||s.set(a,s.has(o)),u!==-1&&(i[u]=a),i[l]=o,this.markFlip(t),this.markFlip(c),this.markFlip(a),this.markFlip(h),r.add(o),s.delete(o),r.add(l),s.delete(l),this.updateVert(t),this.updateVert(c),this.updateVert(a),this.updateVert(h),o}isDelaunay(t){const e=this.del.triangles,r=this.del.halfedges[t];if(r===-1)return!0;const s=e[ti(t)],a=e[t],o=e[Vi(t)],c=e[ti(r)];return!this.inCircle(s,a,o,c)}updateVert(t){const e=this.del.triangles,i=this.del.halfedges,r=this.vertMap,s=e[t];let a=ti(t),o=i[a];for(;o!==-1&&o!==t;)a=ti(o),o=i[a];return r[s]=a,a}intersectSegments(t,e,i,r){const s=this.del.coords;return t===i||t===r||e===i||e===r?!1:Kf(s[t*2],s[t*2+1],s[e*2],s[e*2+1],s[i*2],s[i*2+1],s[r*2],s[r*2+1])}inCircle(t,e,i,r){const s=this.del.coords;return JM(s[t*2],s[t*2+1],s[e*2],s[e*2+1],s[i*2],s[i*2+1],s[r*2],s[r*2+1])<0}isCollinear(t,e,i){const r=this.del.coords;return ri(r[t*2],r[t*2+1],r[e*2],r[e*2+1],r[i*2],r[i*2+1])===0}}Nc.intersectSegments=Kf;function Kf(n,t,e,i,r,s,a,o){const c=ri(n,t,r,s,a,o),l=ri(e,i,r,s,a,o);if(c>0&&l>0||c<0&&l<0)return!1;const h=ri(r,s,n,t,e,i),u=ri(a,o,n,t,e,i);return h>0&&u>0||h<0&&u<0?!1:c===0&&l===0&&h===0&&u===0?!(Math.max(r,a)<Math.min(n,e)||Math.max(n,e)<Math.min(r,a)||Math.max(s,o)<Math.min(t,i)||Math.max(t,i)<Math.min(s,o)):!0}function sy(n,t,e,i){for(var r=!1,s=0,a=i-1;s<i;a=s++){var o=e[s*2],c=e[s*2+1],l=e[a*2],h=e[a*2+1];c>t!=h>t&&n<(l-o)*(t-c)/(h-c)+o&&(r=!r)}return r}function ay(n){if(n.length<3)return[];if(n.length===3)return[{v0:n[0],v1:n[1],v2:n[2]}];if(n.length===4){var t=_u(n[0],n[2]),e=_u(n[1],n[3]);return t<=e?[{v0:n[0],v1:n[1],v2:n[2]},{v0:n[0],v1:n[2],v2:n[3]}]:[{v0:n[0],v1:n[1],v2:n[3]},{v0:n[1],v1:n[2],v2:n[3]}]}for(var i=0,r=0,s=0,a=0;a<n.length;a++){var o=n[a],c=n[(a+1)%n.length];i+=(o.y-c.y)*(o.z+c.z),r+=(o.z-c.z)*(o.x+c.x),s+=(o.x-c.x)*(o.y+c.y)}for(var l=0,h=0,u=0,f=0;f<n.length;f++){var d=n[f],p=n[(f+1)%n.length];l+=d.x*p.y-p.x*d.y,h+=d.x*p.z-p.x*d.z,u+=d.y*p.z-p.y*d.z}l=Math.abs(l),h=Math.abs(h),u=Math.abs(u);var _,g;l>=h&&l>=u?(_=function(lt){return lt.x},g=function(lt){return lt.y}):h>=u?(_=function(lt){return lt.x},g=function(lt){return lt.z}):(_=function(lt){return lt.y},g=function(lt){return lt.z});for(var m=n.length,v=new Float64Array(m*2),y=0;y<m;y++)v[y*2]=_(n[y]),v[y*2+1]=g(n[y]);for(var S=1/0,C=1/0,T=-1/0,I=-1/0,x=0;x<m;x++){var M=v[x*2],N=v[x*2+1];M<S&&(S=M),M>T&&(T=M),N<C&&(C=N),N>I&&(I=N)}for(var P=(T-S)*(T-S)+(I-C)*(I-C),B=Math.max(P*1e-14,1e-18),F=!1,E=0;E<m&&!F;E++)for(var A=E+1;A<m;A++){var w=v[E*2]-v[A*2],D=v[E*2+1]-v[A*2+1];if(w*w+D*D<=B){F=!0;break}}var U,k;try{if(U=new zr(v),!F&&U.triangles.length>0){k=new Nc(U);for(var O=0;O<m;O++){var X=(O+1)%m;try{k.constrainOne(O,X)}catch{}}}}catch{try{U=new zr(v)}catch{return[]}}for(var H=[],K=U.triangles,et=0;et<K.length;et+=3){var nt=K[et],V=K[et+1],G=K[et+2],Q=(v[nt*2]+v[V*2]+v[G*2])/3,at=(v[nt*2+1]+v[V*2+1]+v[G*2+1])/3;sy(Q,at,v,m)&&H.push({v0:n[nt],v1:n[V],v2:n[G]})}var rt=Math.sqrt(i*i+r*r+s*s);if(rt>1e-12)for(var j=i/rt,ht=r/rt,ct=s/rt,xt=0;xt<H.length;xt++){var gt=H[xt],dt=gt.v1.x-gt.v0.x,Rt=gt.v1.y-gt.v0.y,z=gt.v1.z-gt.v0.z,te=gt.v2.x-gt.v0.x,Yt=gt.v2.y-gt.v0.y,ne=gt.v2.z-gt.v0.z,Dt=Rt*ne-z*Yt,L=z*te-dt*ne,b=dt*Yt-Rt*te,Y=Dt*j+L*ht+b*ct;if(Y<0){var ot=gt.v1;gt.v1=gt.v2,gt.v2=ot}}return H}function qf(n){if(n.length===0)return 0;for(var t=0,e=0,i=0,r=n.length,s=0;s<r;s++)t+=n[s].v0.x+n[s].v1.x+n[s].v2.x,e+=n[s].v0.y+n[s].v1.y+n[s].v2.y,i+=n[s].v0.z+n[s].v1.z+n[s].v2.z;var a=1/(r*3);t*=a,e*=a,i*=a;for(var o=0,c=0;c<r;c++){var l=n[c].v0.x-t,h=n[c].v0.y-e,u=n[c].v0.z-i,f=n[c].v1.x-t,d=n[c].v1.y-e,p=n[c].v1.z-i,_=n[c].v2.x-t,g=n[c].v2.y-e,m=n[c].v2.z-i;o+=(l*(d*m-g*p)-f*(h*m-g*u)+_*(h*p-d*u))/6}return o}function oy(n){var t=n*2;t<1e-12&&(t=1e-6);var e={},i=[],r=0,s=n*n;function a(u,f,d){var p=Math.floor(u/t),_=Math.floor(f/t),g=Math.floor(d/t);return p+","+_+","+g}function o(u,f,d){for(var p=Math.floor(u/t),_=Math.floor(f/t),g=Math.floor(d/t),m=s,v=null,y=-1;y<=1;y++)for(var S=-1;S<=1;S++)for(var C=-1;C<=1;C++){var T=p+y+","+(_+S)+","+(g+C),I=e[T];if(I)for(var x=0;x<I.length;x++){var M=I[x],N=M.x-u,P=M.y-f,B=M.z-d,F=N*N+P*P+B*B;F<m&&(m=F,v=M)}}return v}function c(u,f,d,p){var _=o(u,f,d);if(_){if(p){for(var g=!1,m=0;m<_.triRefs.length;m++){var v=_.triRefs[m];if(v.mesh===p.mesh&&v.triIdx===p.triIdx){g=!0;break}}g||_.triRefs.push(p)}return _}var y={x:u,y:f,z:d,id:r++,triRefs:p?[p]:[]},S=a(u,f,d);return e[S]||(e[S]=[]),e[S].push(y),i.push(y),y}function l(){return i}function h(){return i.length}return{getOrCreate:c,getAll:l,size:h}}var Mu=1e-9;function jf(n){return{firstId:n.count,count:0,coords:new Float64Array(0),segments:new Uint32Array(0),segmentsByVertex:new Map,edgeKeys:new Set,index:null,dropped:null,snapReport:{dropped:0,nearTolerance:0}}}function ly(n,t,e,i){var r=[t[0]-n[0],t[1]-n[1],t[2]-n[2]],s=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],a=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],o=os(r,r),c=os(s,s),l=os(s,a),h,u;if(o<=1e-30&&c<=1e-30)h=0,u=0;else if(o<=1e-30)h=0,u=Sr(l/c);else{var f=os(r,a);if(c<=1e-30)u=0,h=Sr(-f/o);else{var d=os(r,s),p=o*c-d*d;h=p>1e-30?Sr((d*l-f*c)/p):0,u=(d*h+l)/c,u<0?(u=0,h=Sr(-f/o)):u>1&&(u=1,h=Sr((d-f)/o))}}var _=n[0]+r[0]*h-(e[0]+s[0]*u),g=n[1]+r[1]*h-(e[1]+s[1]*u),m=n[2]+r[2]*h-(e[2]+s[2]*u);return{d:Math.sqrt(_*_+g*g+m*m),s:h,t:u}}function os(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Sr(n){return n<0?0:n>1?1:n}function yu(n){return n<Mu||n>1-Mu}function cy(n,t,e,i,r){var s=r[0]-i[0],a=r[1]-i[1],o=r[2]-i[2],c=s*s+a*a+o*o,l=c>0?Sr(((n-i[0])*s+(t-i[1])*a+(e-i[2])*o)/c):0,h=i[0]+s*l-n,u=i[1]+a*l-t,f=i[2]+o*l-e;return Math.sqrt(h*h+u*u+f*f)}function hy(n,t){for(var e=[n.origin.x,n.origin.y,n.origin.z],i=[],r=0;r<t.length;r++){var s=t[r];if(!s||!Array.isArray(s.vertices))throw new Br(gn.INVALID_INPUT,"breakline "+r+" needs a vertices array");for(var a=s.vertices.map(function(f,d){if(!f||!isFinite(f[0])||!isFinite(f[1])||!isFinite(f[2]))throw new Br(gn.INVALID_INPUT,"breakline "+r+" vertex "+d+" is not a finite [x, y, z]");return[f[0]-e[0],f[1]-e[1],f[2]-e[2]]}),o=a.length,c=s.closedLoop?o:o-1,l=0;l<c;l++){var h=a[l],u=a[(l+1)%o];h[0]===u[0]&&h[1]===u[1]&&h[2]===u[2]||i.push({line:r,seg:l,a:h,b:u,closed:!!s.closedLoop,segCount:c,lo:[Math.min(h[0],u[0]),Math.min(h[1],u[1]),Math.min(h[2],u[2])],hi:[Math.max(h[0],u[0]),Math.max(h[1],u[1]),Math.max(h[2],u[2])]})}}return i}function uy(n,t){if(n.line!==t.line)return!1;var e=Math.abs(n.seg-t.seg);return e===1||n.closed&&e===n.segCount-1}function fy(n,t){for(var e=0;e<n.length;e++)for(var i=n[e],r=e+1;r<n.length;r++){var s=n[r];if(!uy(i,s)&&!(i.lo[0]>s.hi[0]+t||s.lo[0]>i.hi[0]+t||i.lo[1]>s.hi[1]+t||s.lo[1]>i.hi[1]+t||i.lo[2]>s.hi[2]+t||s.lo[2]>i.hi[2]+t)){var a=ly(i.a,i.b,s.a,s.b);if(!(a.d>=t)&&!(yu(a.s)&&yu(a.t)))throw new Br(gn.CROSSING_BREAKLINES,"breakline "+i.line+" segment "+i.seg+" meets breakline "+s.line+" segment "+s.seg+" away from an endpoint ("+a.d.toExponential(2)+" apart); split or move one of them")}}}function dy(n,t,e){if(!t||t.length===0)return jf(n);var i=e||{},r=i.tolerance!==void 0?i.tolerance:Math.max(.001,.25*n.medianSpacing),s=i.breaklineSnap!==void 0?i.breaklineSnap:.001,a=n.medianSpacing,o=hy(n,t);fy(o,r);var c=[],l=[],h=n.count;function u(U){return c.push(U[0],U[1],U[2]),h+c.length/3-1}var f=new Map;o.forEach(function(U){f.has(U.line)||f.set(U.line,[]),f.get(U.line).push(U)}),f.forEach(function(U){for(var k=-1,O=null,X=-1,H=0;H<U.length;H++){var K=U[H],et=O===K.a?X:u(K.a);k<0&&(k=et);for(var nt=K.closed&&H===U.length-1&&K.b===U[0].a,V=Math.hypot(K.b[0]-K.a[0],K.b[1]-K.a[1],K.b[2]-K.a[2]),G=Math.max(1,Math.ceil(V/a-1e-9)),Q=et,at=1;at<=G;at++){var rt=at/G,j=at===G&&nt?k:u([K.a[0]+(K.b[0]-K.a[0])*rt,K.a[1]+(K.b[1]-K.a[1])*rt,K.a[2]+(K.b[2]-K.a[2])*rt]);l.push(Q,j),Q=j}O=K.b,X=Q}});for(var d=c.length/3,p=Float64Array.from(c),_=Uint32Array.from(l),g=new Map,m=new Set,v=0;v<_.length;v+=2){var y=_[v],S=_[v+1];g.has(y)||g.set(y,[]),g.has(S)||g.set(S,[]),g.get(y).push(S),g.get(S).push(y),m.add(Zf(String(y),String(S)))}for(var C=new Uint8Array(n.count),T=0,I=0,x=n.coords,M=0;M<o.length;M++)for(var N=o[M],P=[(N.a[0]+N.b[0])/2,(N.a[1]+N.b[1])/2,(N.a[2]+N.b[2])/2],B=Math.hypot(N.b[0]-N.a[0],N.b[1]-N.a[1],N.b[2]-N.a[2])/2,F=za(n.index,P,B+Math.max(r,s)),E=0;E<F.length;E++){var A=F[E];if(C[A]!==1){var w=cy(x[3*A],x[3*A+1],x[3*A+2],N.a,N.b);w<s?(C[A]=1,T++):w<r&&C[A]!==2&&(C[A]=2,I++)}}for(var D=0;D<C.length;D++)C[D]===2&&(C[D]=0);return{firstId:h,count:d,coords:p,segments:_,segmentsByVertex:g,edgeKeys:m,index:wf({count:d,positions:p}),dropped:C,snapReport:{dropped:T,nearTolerance:I}}}var Su=1e-9;function Eu(n){var t=Float64Array.from(n).sort();return t[t.length-1>>1]}function py(n,t,e){for(var i=n.coords,r=[i[3*t],i[3*t+1],i[3*t+2]],s=rc(n.index,r,e.k+1),a=[],o=[],c=0;c<s.points.length;c++){var l=s.points[c];l===t||s.d[c]<Su||(a.push(l),o.push(s.d[c]))}if(a.length===0)return{ids:a,valid:!1};for(var h=Eu(o),u=a[0],f=rc(n.index,[i[3*u],i[3*u+1],i[3*u+2]],e.k+1),d=[],p=0;p<f.points.length;p++)f.points[p]!==u&&f.d[p]>=Su&&d.push(f.d[p]);if(d.length&&h>e.maxRadiusMultiplier*Eu(d))return{ids:a,valid:!1};for(var _=e.maxRadiusMultiplier*h,g=[],m=0;m<a.length;m++)o[m]<=_&&g.push(a[m]);var v=e.extra;if(v&&v.index)for(var y=za(v.index,r,_),S=0;S<y.length;S++)g.push(v.firstId+y[S]);return{ids:g,valid:g.length>=e.minNeighbours}}function my(n){var t=Float64Array.from(n).sort();return t[t.length-1>>1]}function gy(n,t,e,i){for(var r=i,s=r[3*t],a=r[3*t+1],o=r[3*t+2],c=n.normals[3*t],l=n.normals[3*t+1],h=n.normals[3*t+2],u=Math.sqrt(c*c+l*l+h*h),f=u>0?[c/u,l/u,h/u]:[0,0,0],d=[],p=0;p<e.length;p++){var _=e[p],g=r[3*_]-s,m=r[3*_+1]-a,v=r[3*_+2]-o;d.push(Math.sqrt(g*g+m*m+v*v))}return{point:[s,a,o],normal:f,scale:d.length?my(d):0}}function _y(n,t,e,i,r,s){for(var a=r,o=i.normal,c=i.point,l=s.maxPlaneOffset*i.scale,h=n.normals,u=[],f=0;f<e.length;f++){var d=e[f],p=(a[3*d]-c[0])*o[0]+(a[3*d+1]-c[1])*o[1]+(a[3*d+2]-c[2])*o[2];if(!(Math.abs(p)>l)){if(d<n.count){var _=h[3*d],g=h[3*d+1],m=h[3*d+2],v=Math.sqrt(_*_+g*g+m*m);if(!(v>0)||Math.abs((_*o[0]+g*o[1]+m*o[2])/v)<s.normalAgreement)continue}u.push(d)}}return u}function vy(n,t,e){var i=n.normal,r=n.point,s=e,a,o,c;Math.abs(i[1])>.9?(a=0,o=i[2],c=-i[1]):(a=-i[2],o=0,c=i[0]);var l=Math.sqrt(a*a+o*o+c*c);a/=l,o/=l,c/=l;for(var h=i[1]*c-i[2]*o,u=i[2]*a-i[0]*c,f=i[0]*o-i[1]*a,d=new Float64Array(2*(t.length+1)),p=0;p<t.length;p++){var _=t[p],g=s[3*_]-r[0],m=s[3*_+1]-r[1],v=s[3*_+2]-r[2];d[2*(p+1)]=g*a+m*o+v*c,d[2*(p+1)+1]=g*h+m*u+v*f}return d}var xy=1e-12;function My(n,t,e,i,r){var s=new zr(n),a=!1;if(r&&r.length)try{for(var o=new Nc(s),c=0;c<r.length;c++)o.constrainOne(r[c][0],r[c][1])}catch{a=!0,s=new zr(n)}for(var l=s.triangles,h=2*xy*i*i,u=[],f=0;f<l.length;f+=3){var d=l[f],p=l[f+1],_=l[f+2];if(!(d!==0&&p!==0&&_!==0)){var g=n[2*d],m=n[2*d+1],v=(n[2*p]-g)*(n[2*_+1]-m)-(n[2*p+1]-m)*(n[2*_]-g);Math.abs(v)<h||u.push(d===0?e:t[d-1],p===0?e:t[p-1],_===0?e:t[_-1])}}return{triangles:u,constraintFailure:a}}function yy(n,t,e){var i;return n>t&&(i=n,n=t,t=i),t>e&&(i=t,t=e,e=i),n>t&&(i=n,n=t,t=i),n+","+t+","+e}function bu(n,t){return n<t?n+"|"+t:t+"|"+n}function Sy(){var n=new Map;function t(i,r,s){var a=yy(i,r,s),o=n.get(a);o?o.votes++:n.set(a,{v:[i,r,s],votes:1})}function e(i,r){var s=Array.from(n.keys()).sort(),a=new Map,o=[];function c(y,S){return a.get(bu(y,S))||0}function l(y){return c(y[0],y[1])<2&&c(y[1],y[2])<2&&c(y[2],y[0])<2}function h(y){for(var S=0;S<3;S++){var C=bu(y[S],y[(S+1)%3]);a.set(C,(a.get(C)||0)+1)}o.push(y[0],y[1],y[2])}function u(y){var S=(y[0]>=r?1:0)+(y[1]>=r?1:0)+(y[2]>=r?1:0);return S>=2?1:i}var f=s.map(function(y){return n.get(y)}).filter(function(y){return y.votes>=u(y.v)});f.sort(function(y,S){return S.votes-y.votes});for(var d=new Set,p=0;p<f.length;p++)l(f[p].v)&&(h(f[p].v),d.add(f[p]));for(var _=0;_<s.length;_++){var g=n.get(s[_]);if(!(g.votes!==1||d.has(g))){var m=g.v;if(l(m)){var v=(c(m[0],m[1])===1?1:0)+(c(m[1],m[2])===1?1:0)+(c(m[2],m[0])===1?1:0);v>=2&&(h(m),d.add(g))}}}return Uint32Array.from(o)}return{add:t,accepted:e,get proposed(){return n.size}}}function Ey(n,t){var e=t.segmentsByVertex;if(!e||e.size===0)return[];for(var i=new Map,r=0;r<n.length;r++)i.set(n[r],r+1);for(var s=[],a=0;a<n.length;a++){var o=n[a],c=e.get(o);if(c)for(var l=0;l<c.length;l++){var h=c[l];if(!(h<=o)){var u=i.get(h);u!==void 0&&s.push([a+1,u])}}}return s}function Jf(n,t){if(!t||t.count===0)return n.coords;var e=new Float64Array(n.coords.length+t.coords.length);return e.set(n.coords,0),e.set(t.coords,n.coords.length),e}function by(n,t,e){for(var i=Jf(n,t),r=t.dropped,s=Sy(),a={k:e.k,maxRadiusMultiplier:e.maxRadiusMultiplier,minNeighbours:e.minNeighbours,extra:t.count>0?t:null},o=n.normals,c=0,l=0,h=0,u=0;u<n.count;u++)if(!(r&&r[u])){if(o[3*u]===0&&o[3*u+1]===0&&o[3*u+2]===0){l++;continue}var f=py(n,u,a);if(!f.valid){l++;continue}var d=f.ids;r&&(d=d.filter(function(S){return S>=n.count||!r[S]}));var p=gy(n,u,d,i);if(d=_y(n,u,d,p,i,e),d.length<e.minNeighbours){l++;continue}var _=vy(p,d,i),g=Ey(d,t),m=My(_,d,u,p.scale,g);m.constraintFailure&&h++;for(var v=0;v<m.triangles.length;v+=3)s.add(m.triangles[v],m.triangles[v+1],m.triangles[v+2]);c++}var y=s.accepted(e.minVotes,n.count);return{triangles:y,report:{pointsUsed:c,pointsSkipped:l,trianglesProposed:s.proposed,trianglesAccepted:y.length/3,constraintFailures:h}}}var Ty=Object.freeze({localDelaunay:by});function Ay(n,t,e,i){var r=oy(e),s=[],a=n;function o(u){var f=s[u];return f||(f=r.getOrCreate(a[3*u],a[3*u+1],a[3*u+2]),s[u]=f),f}if(i!==void 0)for(var c=0;c<t.length;c++)t[c]>=i&&o(t[c]);for(var l=[],h=0;h<t.length;h+=3)l.push({v0:o(t[h]),v1:o(t[h+1]),v2:o(t[h+2]),mesh:"A",origIdx:h/3});return{pool:r,soup:l,idToPool:s}}function cn(n,t){return Zf(String(n),String(t))}function Us(n){for(var t=new Map,e=0;e<n.length;e++)for(var i=n[e],r=[i.v0.id,i.v1.id,i.v2.id],s=0;s<3;s++){var a=cn(r[s],r[(s+1)%3]),o=t.get(a);o?o.push(e):t.set(a,[e])}return t}function wy(n,t){for(var e=new Set,i=0,r=0;r<n.idToPool.length;r++){var s=n.idToPool[r];s&&(e.has(s)?i++:e.add(s))}for(var a=[],o=0,c=0,l=new Set,h=0;h<n.soup.length;h++){var u=n.soup[h],f=u.v0.id,d=u.v1.id,p=u.v2.id;if(f===d||d===p||f===p){o++;continue}var _=[f,d,p].sort(function(B,F){return B-F}).join(",");if(l.has(_)){c++;continue}l.add(_),u.origIdx=a.length,a.push(u)}n.soup.length=0;for(var g=0;g<a.length;g++)n.soup.push(a[g]);var m=Us(n.soup),v=0,y=0;m.forEach(function(B){B.length===1?v++:B.length>2&&y++});for(var S=t.segments||new Uint32Array(0),C=new Set,T=[],I=0,x=0;x<S.length;x+=2){var M=n.idToPool[S[x]],N=n.idToPool[S[x+1]];if(!(!M||!N)){if(M===N){I++;continue}var P=cn(M.id,N.id);C.has(P)||(C.add(P),T.push({a:M.id,b:N.id}))}}return n.constraintPoolEdges=C,n.constrainedPairs=T,{merged:i,degenerate:o,duplicates:c,boundaryEdges:v,nonManifoldEdges:y,collapsedConstraints:I}}function tl(n){var t=n.v1;n.v1=n.v2,n.v2=t}function el(n,t,e){var i=n.v0.id,r=n.v1.id,s=n.v2.id;return i===t&&r===e||r===t&&s===e||s===t&&i===e}function Ry(n){var t=n.v1.x-n.v0.x,e=n.v1.y-n.v0.y,i=n.v1.z-n.v0.z,r=n.v2.x-n.v0.x,s=n.v2.y-n.v0.y,a=n.v2.z-n.v0.z;return[e*a-i*s,i*r-t*a,t*s-e*r]}function Cy(n,t,e){for(var i=0,r=0;r<t.length;r++){for(var s=n[t[r]],a=(s.v0.x+s.v1.x+s.v2.x)/3,o=(s.v0.y+s.v1.y+s.v2.y)/3,c=(s.v0.z+s.v1.z+s.v2.z)/3,l=null,h=1/0,u=0;u<e.length;u++){var f=e[u],d=(f[0]-a)*(f[0]-a)+(f[1]-o)*(f[1]-o)+(f[2]-c)*(f[2]-c);d<h&&(h=d,l=f)}var p=Ry(s);i+=p[0]*(l[0]-a)+p[1]*(l[1]-o)+p[2]*(l[2]-c)}return i}function nl(n,t){for(var e=n.soup,i=Us(e),r=new Int32Array(e.length).fill(-1),s=[],a=Array.isArray(t)&&t.length>0,o=0;o<e.length;o++)if(r[o]===-1){var c=s.length,l=[o],h=!0,u=!0;r[o]=c;for(var f=0;f<l.length;f++)for(var d=l[f],p=e[d],_=[p.v0.id,p.v1.id,p.v2.id],g=0;g<3;g++){var m=_[g],v=_[(g+1)%3],y=i.get(cn(m,v));if(y.length!==2){u=!1;continue}var S=y[0]===d?y[1]:y[0],C=e[S],T=el(p,m,v),I=T?el(C,m,v):el(C,v,m);r[S]===-1?(I&&tl(C),r[S]=c,l.push(S)):I&&(h=!1)}var x;if(a)Cy(e,l,t)<0&&l.forEach(function(B){tl(e[B])}),x="viewpoint";else if(u){var M=l.map(function(B){return e[B]});qf(M)>0&&l.forEach(function(B){tl(e[B])}),x="closed"}else x="unresolved";s.push({triangles:l.length,method:x,consistent:h})}var N=new Set(s.map(function(B){return B.method})),P=N.size===1?s[0].method:N.size===0?"unresolved":"mixed";return{perComponent:s,orientation:P}}function Iy(n,t){var e=new Map;function i(p,_,g,m){e.has(p)||e.set(p,[]),e.get(p).push({to:_,key:g,forward:m})}t.forEach(function(p,_){if(p.length===1)for(var g=n[p[0]],m=[g.v0.id,g.v1.id,g.v2.id],v=0;v<3;v++){var y=m[v],S=m[(v+1)%3];if(cn(y,S)===_){i(y,S,_,!0),i(S,y,_,!1);break}}});var r=new Set;function s(p){for(var _=e.get(p),g=null,m=0;m<_.length;m++)if(!r.has(_[m].key)){if(_[m].forward)return _[m];g||(g=_[m])}return g}for(var a=[],o=Array.from(e.keys()).sort(function(p,_){return p-_}),c=0;c<o.length;c++)for(var l=o[c],h;h=s(l);){var u=[l],f=h.forward;r.add(h.key);for(var d=h.to;d!==l&&(u.push(d),h=s(d),!!h);)r.add(h.key),d=h.to;f||(u=[u[0]].concat(u.slice(1).reverse())),a.push(u)}return a}function Py(n,t){var e=0;return t.forEach(function(i,r){if(i.length===2){var s=i.map(function(a){for(var o=n[a],c=[o.v0.id,o.v1.id,o.v2.id],l=0;l<3;l++)if(cn(c[l],c[(l+1)%3])===r)return c[l];return-1});s[0]===s[1]&&e++}}),e}function il(n,t){var e=n.soup,i=Us(e),r=n.constraintPoolEdges||new Set,s=0,a=0,o=0;i.forEach(function(h,u){h.length===1?(s++,r.has(u)||a++):h.length>2&&o++});var c=e.length>0&&s===0&&o===0,l=(n.constrainedPairs||[]).filter(function(h){return i.has(cn(h.a,h.b))});return{closed:c,boundaryLoops:s?Iy(e,i):[],boundaryEdgeCount:a,nonManifoldEdgeCount:o,enclosedVolume:c?Math.abs(qf(e)):null,constrainedEdges:l,orientation:t,orientationConflicts:Py(e,i)}}function Dy(n,t,e){var i=e&&e.maxLoopEdges!==void 0?e.maxLoopEdges:200,r=n.constraintPoolEdges||new Set,s=Us(n.soup),a=n.pool.getAll(),o=0,c=[];function l(B,F){var E=s.get(cn(B,F));return E?E.length:0}function h(B,F,E){var A={v0:B,v1:F,v2:E,mesh:"A",origIdx:n.soup.length};n.soup.push(A);for(var w=[B.id,F.id,E.id],D=0;D<3;D++){var U=cn(w[D],w[(D+1)%3]);s.has(U)||s.set(U,[]),s.get(U).push(A.origIdx)}o++}for(var u=t.boundaryLoops||[],f=0;f<u.length;f++){for(var d=u[f],p=d.length,_=p>=3&&p<=i&&new Set(d).size===p,g=0;_&&g<p;g++){var m=d[g],v=d[(g+1)%p];(l(m,v)!==1||r.has(cn(m,v)))&&(_=!1)}if(!_){c.push(d);continue}if(p===3){h(a[d[2]],a[d[1]],a[d[0]]);continue}for(var y=0,S=0,C=0,T=0;T<p;T++){var I=a[d[T]];y+=I.x,S+=I.y,C+=I.z}for(var x=n.pool.getOrCreate(y/p,S/p,C/p),M=d.indexOf(x.id)<0,N=0;M&&N<p;N++)l(d[N],x.id)>0&&(M=!1);if(!M){c.push(d);continue}for(var P=0;P<p;P++)h(a[d[(P+1)%p]],a[d[P]],x)}return{added:o,unfilledLoops:c}}function Ly(n,t,e){if(!(e>=3))return{filled:0,triangles:0};var i=n.constraintPoolEdges||new Set,r=Us(n.soup),s=n.pool.getAll(),a=0,o=0;function c(B,F){var E=r.get(cn(B,F));return E?E.length:0}for(var l=t.boundaryLoops||[],h=0;h<l.length;h++){var u=l[h],f=u.length;if(!(f<3||f>e||new Set(u).size!==f)){for(var d=new Set,p=!0,_=0;_<f&&p;_++){var g=cn(u[_],u[(_+1)%f]);d.add(g),(c(u[_],u[(_+1)%f])!==1||i.has(g))&&(p=!1)}if(p){var m=ay(u.map(function(B){return s[B]}));if(m.length===f-2){for(var v=0;v<m.length&&p;v++){var y=[m[v].v0.id,m[v].v1.id,m[v].v2.id];(y[0]===y[1]||y[1]===y[2]||y[0]===y[2])&&(p=!1);for(var S=0;S<3&&p;S++){var C=y[S],T=y[(S+1)%3];!d.has(cn(C,T))&&c(C,T)>0&&(p=!1)}}if(p){for(var I=0;I<m.length;I++){var x={v0:m[I].v0,v1:m[I].v1,v2:m[I].v2,mesh:"A",origIdx:n.soup.length};n.soup.push(x);for(var M=[x.v0.id,x.v1.id,x.v2.id],N=0;N<3;N++){var P=cn(M[N],M[(N+1)%3]);r.has(P)||r.set(P,[]),r.get(P).push(x.origIdx)}o++}a++}}}}}return{filled:a,triangles:o}}function Uy(n,t,e){t.dropped||(t.dropped=new Uint8Array(n.count));for(var i=t.dropped,r=n.coords,s=t.coords,a=0,o=0;o<t.count;o++)for(var c=za(n.index,[s[3*o],s[3*o+1],s[3*o+2]],e),l=0;l<c.length;l++)i[c[l]]||(i[c[l]]=1,a++);for(var h=0;h<n.count;h++)if(!i[h])for(var u=za(n.index,[r[3*h],r[3*h+1],r[3*h+2]],e),f=0;f<u.length;f++){var d=u[f];d>h&&!i[d]&&(i[d]=1,a++)}return a}var Ny=Object.freeze({algorithm:"localDelaunay",k:20,maxRadiusMultiplier:3,minNeighbours:6,normalAgreement:.5,maxPlaneOffset:.5,minVotes:2,breaklineSnap:.001,maxGapEdges:6,closeHoles:!1});function Fy(n){if(n.x&&n.y&&n.z)return{count:n.count,x:n.x,y:n.y,z:n.z};for(var t=n.count,e=n.positions,i=e instanceof Float32Array?Float32Array:Float64Array,r=new i(t),s=new i(t),a=new i(t),o=0;o<t;o++)r[o]=e[3*o],s[o]=e[3*o+1],a[o]=e[3*o+2];return{count:t,x:r,y:s,z:a}}function Oy(n,t){return[n[0]-t.x,n[1]-t.y,n[2]-t.z]}function By(n,t){var e=Object.assign({},Ny,t||{}),i=Ty[e.algorithm];if(!i)throw new Br(gn.INVALID_INPUT,"unknown algorithm "+String(e.algorithm));var r=n&&n.count,s=n;if(e.thin){if(!(e.thin>0))throw new Br(gn.INVALID_INPUT,"thin must be a distance > 0");s=If(Fy(n),e.thin)}var a;if(e.denoise){var o=Xo(s,Object.assign({},e,{normals:new Float32Array(3*s.count)})),c=e.denoise===!0?{}:e.denoise,l=BM({count:o.count,positions:o.coords},{method:c.method||"bilateral",k:c.k||16,iterations:c.iterations||1,maxDistance:c.maxDistance||5*o.medianSpacing});a=Xo({count:o.count,positions:l.positions},Object.assign({},e,{origin:{x:0,y:0,z:0}})),a.origin=o.origin}else a=Xo(s,e);var h=e.tolerance!==void 0?e.tolerance:Math.max(.001,.25*a.medianSpacing),u=e.breaklines&&e.breaklines.length?dy(a,e.breaklines,{tolerance:h,breaklineSnap:e.breaklineSnap}):jf(a),f=Uy(a,u,h),d=i(a,u,e),p=Ay(Jf(a,u),d.triangles,h,u.firstId);p.origin=a.origin;var _=wy(p,u),g=e.viewpoints?e.viewpoints.map(function(M){return Oy(M,a.origin)}):null,m=nl(p,g),v=il(p,m.orientation),y=Ly(p,v,e.maxGapEdges);y.filled>0&&(m=nl(p,g),v=il(p,m.orientation));var S=[],C=0;if(e.closeHoles){var T=Dy(p,v,e.closeHoles===!0?{}:e.closeHoles);S=T.unfilledLoops,C=T.added,m=nl(p,g),v=il(p,m.orientation)}for(var I=0,x=0;x<a.count;x++)a.normals[3*x]===0&&a.normals[3*x+1]===0&&a.normals[3*x+2]===0&&I++;return{pool:p.pool,soup:p.soup,origin:a.origin,mesh:v,unfilledLoops:S,report:{pointsInput:r,pointsAfterThin:a.count,denoised:!!e.denoise,medianSpacing:a.medianSpacing,tolerance:h,zeroNormals:I,pointsUsed:d.report.pointsUsed,pointsSkipped:d.report.pointsSkipped,pointsDropped:u.snapReport.dropped,weldDuplicatesDropped:f,snappedBreaklinePoints:u.snapReport.nearTolerance,breaklineSegments:u.segments.length/2,trianglesProposed:d.report.trianglesProposed,trianglesAccepted:d.report.trianglesAccepted,constraintFailures:d.report.constraintFailures,weld:{merged:_.merged,degenerate:_.degenerate,duplicates:_.duplicates,collapsedConstraints:_.collapsedConstraints},orientation:{perComponent:m.perComponent},gapsFilled:y.filled,holesFilledTriangles:C}}}function zy(n,t){for(var e=n.origin||{x:0,y:0,z:0},i=n.soup,r=new Map,s=[],a=new Uint32Array(3*i.length),o=0;o<i.length;o++)for(var c=[i[o].v0,i[o].v1,i[o].v2],l=0;l<3;l++){var h=c[l],u=r.get(h.id);u===void 0&&(u=s.length/3,r.set(h.id,u),s.push(h.x+e.x,h.y+e.y,h.z+e.z)),a[3*o+l]=u}return{positions:Float64Array.from(s),index:a}}function $a(n){var t=n>>>0;return function(){t=t+1831565813>>>0;var e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ns(n){var t=n.length/3;return{count:t,positions:Float64Array.from(n)}}function lc(n,t,e){for(var i=[0,0,0],r=[],s=Math.PI*(3-Math.sqrt(5)),a=0;a<n;a++){var o=1-2*(a+.5)/n,c=Math.sqrt(1-o*o),l=s*a;r.push(i[0]+t*c*Math.cos(l),i[1]+t*o,i[2]+t*c*Math.sin(l))}return Ns(r)}function Gy(n,t,e){for(var i=lc(n,t),r=[],s=i.positions,a=0;a<i.count;a++){var o=s[3*a+1]/t;Math.acos(Math.max(-1,Math.min(1,o)))<e||r.push(s[3*a],s[3*a+1],s[3*a+2])}return Ns(r)}function Vy(n,t,e,i){for(var r=$a(i),s=Math.max(8,Math.round(2*Math.PI*n/e)),a=Math.max(2,Math.round(t/e)+1),o=t/(a-1),c=[],l=0;l<a;l++)for(var h=0;h<s;h++){var u=(r()-.5)*.2,f=(h+l%2*.5+u)/s*2*Math.PI,d=l*o+(l>0&&l<a-1?(r()-.5)*.2*o:0);c.push(d,n*Math.cos(f),n*Math.sin(f))}return Ns(c)}function ky(n,t,e,i){for(var r=$a(i),s=Math.max(4,Math.round(Math.PI*n/e)),a=Math.max(2,Math.round(t/e)+1),o=t/(a-1),c=[],l=0;l<a;l++)for(var h=0;h<=s;h++){var u=l%2*.5,f=(h+u)/s;if(!(f>1)){h>0&&h<s&&(f+=(r()-.5)*.2/s);var d=f*Math.PI,p=l*o+(l>0&&l<a-1?(r()-.5)*.2*o:0);c.push(p,n*Math.cos(d),n*Math.sin(d))}}return Ns(c)}function Hy(n,t,e,i){for(var r=$a(i),s=Math.round(t/e)+1,a=[],o=0;o<2;o++)for(var c=0;c<s;c++)for(var l=0;l<s;l++)a.push(c*e+(r()-.5)*.2*e,l*e+(r()-.5)*.2*e,o*n);return Ns(a)}function Wy(n){switch(n){case"sphere":return{cols:lc(3e3,5),breaklines:[],viewpoints:[[0,0,0]]};case"noisySphere":{for(var t=lc(3e3,5),e=$a(5),i=t.positions,r=0;r<t.count;r++){var s=1+(e()-.5)*.06;i[3*r]*=s,i[3*r+1]*=s,i[3*r+2]*=s}return{cols:t,breaklines:[],viewpoints:[[0,0,0]]}}case"capped":return{cols:Gy(3e3,5,.4),breaklines:[],viewpoints:[[0,0,0]]};case"tunnel":{for(var a=[],o=0;o<=20;o+=2)a.push([o,0,0]);return{cols:Vy(2.5,20,.25,1),breaklines:[],viewpoints:a}}case"halfpipe":{for(var c=[],l=0;l<=10;l+=2)c.push([l,0,1]);return{cols:ky(2.5,10,.25,2),breaklines:[{vertices:[[0,0,2.5],[10,0,2.5]],closedLoop:!1}],viewpoints:c}}case"walls":return{cols:Hy(.5,10,.25,1),breaklines:[],viewpoints:[[5,5,.25]]}}throw new Error("unknown source "+n)}async function Xy(n){for(var t=await EM(n),e=await t.readPoints({fields:["x","y","z"]}),i=e.count,r=0,s=0,a=0,o=e.x[0],c=e.y[0],l=e.z[0],h=0;h<i;h++)r+=e.x[h]-o,s+=e.y[h]-c,a+=e.z[h]-l;return{cols:{count:i,x:e.x,y:e.y,z:e.z},breaklines:[],viewpoints:[[o+r/i,c+s/i,l+a/i]]}}var fe=function(n){return document.getElementById(n)},cc=fe("viewport"),Gr=new Av({antialias:!0});Gr.setPixelRatio(window.devicePixelRatio);cc.appendChild(Gr.domElement);var Yr=new ap;Yr.background=new re(1710618);var _n=new dn(50,1,.01,5e3);_n.up.set(0,0,1);_n.position.set(15,-20,12);var $f=new Rv(_n,Gr.domElement);Yr.add(new Cp(16777215,.45));var Qf=new ef(16777215,1.6);Qf.position.set(1,-2,3);Yr.add(Qf);var Yy=new ef(16777215,.8);_n.add(Yy);Yr.add(_n);var wi=new Yi;Yr.add(wi);var Ie={mesh:null,wire:null,points:null,loops:null,normals:null},hc=null;function td(){var n=cc.clientWidth,t=cc.clientHeight;Gr.setSize(n,t),_n.aspect=n/Math.max(1,t),_n.updateProjectionMatrix()}window.addEventListener("resize",td);td();Gr.setAnimationLoop(function(){$f.update(),Gr.render(Yr,_n)});function Zy(){for(;wi.children.length;){var n=wi.children.pop();n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}Object.keys(Ie).forEach(function(t){Ie[t]=null})}function Ky(n){for(var t=n.soup,e=new Map,i=[],r=[],s=0;s<t.length;s++)[t[s].v0,t[s].v1,t[s].v2].forEach(function(o){var c=e.get(o.id);c===void 0&&(c=i.length/3,e.set(o.id,c),i.push(o.x,o.y,o.z)),r.push(c)});var a=new Ze;return a.setAttribute("position",new Xe(i,3)),a.setIndex(r),a.computeVertexNormals(),a}function rl(n,t,e){var i=[];n.forEach(function(s){var a=t[s[0]],o=t[s[1]];i.push(a.x,a.y,a.z,o.x,o.y,o.z)});var r=new Ze;return r.setAttribute("position",new Xe(i,3)),new ql(r,new La({color:e,depthTest:!1,transparent:!0}))}function qy(n){var t=new Map;return n.forEach(function(e){for(var i=[e.v0.id,e.v1.id,e.v2.id],r=0;r<3;r++){var s=i[r],a=i[(r+1)%3],o=s<a?s+"|"+a:a+"|"+s,c=t.get(o);c?c.n++:t.set(o,{n:1,a:s,b:a})}}),t}function jy(n,t){Zy();var e=n.pool.getAll(),i=Ky(n),r=new Tn(i,new yh({color:9414856,side:oi,flatShading:!0,roughness:.8})),s=new Tn(i,new yh({color:13664304,side:$e,flatShading:!0,roughness:.8})),a=new Yi;a.add(r,s),Ie.mesh=a,wi.add(a),Ie.wire=new ql(new xp(i),new La({color:2236962,transparent:!0,opacity:.5})),wi.add(Ie.wire);var o=new Yi,c=[];n.mesh.boundaryLoops.forEach(function(T){for(var I=0;I<T.length;I++)c.push([T[I],T[(I+1)%T.length]])}),o.add(rl(c,e,16724787)),o.add(rl(n.mesh.constrainedEdges.map(function(T){return[T.a,T.b]}),e,16768256));var l=[];qy(n.soup).forEach(function(T){T.n>2&&l.push([T.a,T.b])}),o.add(rl(l,e,16724991)),o.renderOrder=2,Ie.loops=o,wi.add(o);var h=[],u=n.report.medianSpacing*.8;n.soup.forEach(function(T,I){if(!(n.soup.length>6e4&&I%4)){var x=T.v1.x-T.v0.x,M=T.v1.y-T.v0.y,N=T.v1.z-T.v0.z,P=T.v2.x-T.v0.x,B=T.v2.y-T.v0.y,F=T.v2.z-T.v0.z,E=M*F-N*B,A=N*P-x*F,w=x*B-M*P,D=Math.hypot(E,A,w)||1,U=(T.v0.x+T.v1.x+T.v2.x)/3,k=(T.v0.y+T.v1.y+T.v2.y)/3,O=(T.v0.z+T.v1.z+T.v2.z)/3;h.push(U,k,O,U+E/D*u,k+A/D*u,O+w/D*u)}});var f=new Ze;f.setAttribute("position",new Xe(h,3)),Ie.normals=new ql(f,new La({color:4508774})),wi.add(Ie.normals);for(var d=n.origin,p=t.count,_=Math.max(1,Math.ceil(p/3e5)),g=[],m=0;m<p;m+=_){var v=t.positions?t.positions[3*m]:t.x[m],y=t.positions?t.positions[3*m+1]:t.y[m],S=t.positions?t.positions[3*m+2]:t.z[m];g.push(v-d.x,y-d.y,S-d.z)}var C=new Ze;C.setAttribute("position",new Xe(g,3)),Ie.points=new _p(C,new qu({color:13421772,size:2,sizeAttenuation:!1})),wi.add(Ie.points),ed(),Jy(i)}function Jy(n){n.computeBoundingSphere();var t=n.boundingSphere;if(t){$f.target.copy(t.center);var e=t.radius*2.6;_n.position.set(t.center.x+e*.6,t.center.y-e*.8,t.center.z+e*.5),_n.near=t.radius/500,_n.far=t.radius*50,_n.updateProjectionMatrix()}}function ed(){Ie.mesh&&(Ie.mesh.visible=fe("showMesh").checked),Ie.wire&&(Ie.wire.visible=fe("showWire").checked),Ie.points&&(Ie.points.visible=fe("showPoints").checked),Ie.loops&&(Ie.loops.visible=fe("showLoops").checked),Ie.normals&&(Ie.normals.visible=fe("showNormals").checked)}["showMesh","showWire","showPoints","showLoops","showNormals"].forEach(function(n){fe(n).addEventListener("change",ed)});function ls(n){return typeof n=="number"?n.toLocaleString(void 0,{maximumFractionDigits:4}):String(n)}function $y(n,t){var e=n.mesh,i=n.report,r=e.boundaryLoops.map(function(s){return s.length}).sort(function(s,a){return a-s});fe("result").innerHTML="closed: <span class='"+(e.closed?"good":"bad")+"'>"+e.closed+"</span><br>volume: <b>"+(e.enclosedVolume===null?"— (open)":ls(e.enclosedVolume)+" m³")+"</b><br>triangles: <b>"+ls(n.soup.length)+"</b><br>boundary loops: <b>"+r.length+"</b>"+(r.length?" (largest "+r.slice(0,5).join(", ")+")":"")+"<br>boundary edges: <b>"+ls(e.boundaryEdgeCount)+"</b><br>non-manifold edges: <span class='"+(e.nonManifoldEdgeCount?"bad":"good")+"'>"+e.nonManifoldEdgeCount+"</span><br>break line edges: <b>"+e.constrainedEdges.length+"</b> / "+i.breaklineSegments+"<br>orientation: <b>"+e.orientation+"</b>"+(e.orientationConflicts?" (<span class='bad'>"+e.orientationConflicts+" fold edges</span>)":"")+"<br>components: <b>"+i.orientation.perComponent.length+"</b><br>time: <b>"+ls(t)+" ms</b>",fe("report").innerHTML=[["points in",i.pointsInput],["after thin",i.pointsAfterThin],["denoised",i.denoised],["median spacing",i.medianSpacing],["weld tolerance",i.tolerance],["zero normals",i.zeroNormals],["points used",i.pointsUsed],["points skipped",i.pointsSkipped],["points dropped (break lines)",i.pointsDropped],["points dropped (weld duplicates)",i.weldDuplicatesDropped],["triangles proposed",i.trianglesProposed],["triangles accepted",i.trianglesAccepted],["gaps filled",i.gapsFilled],["hole-fill triangles",i.holesFilledTriangles],["welded ids",i.weld.merged],["degenerate removed",i.weld.degenerate],["duplicates removed",i.weld.duplicates],["constraint failures",i.constraintFailures],["collapsed break line edges",i.weld.collapsedConstraints]].map(function(s){return s[0]+": <b>"+ls(s[1])+"</b>"}).join("<br>")}function Qy(n){var t=function(i){return Number(fe(i).value)},e={k:t("k"),minVotes:t("minVotes"),normalAgreement:t("normalAgreement"),maxPlaneOffset:t("maxPlaneOffset"),maxGapEdges:t("maxGapEdges"),breaklines:n.breaklines};return t("thin")>0&&(e.thin=t("thin")),t("denoise")>0&&(e.denoise={iterations:t("denoise")}),fe("viewpoint").checked&&(e.viewpoints=n.viewpoints),fe("closeHoles").checked&&(e.closeHoles={}),e}var Ha=null,Ti=null;async function tS(){var n=fe("source").value;return n==="file"?Ha?Xy(Ha):(fe("file").click(),null):Wy(n)}async function Qa(){fe("error").textContent="",fe("processing-overlay").classList.add("active"),await new Promise(function(i){setTimeout(i,30)});try{if(Ti=Ti||await tS(),!Ti)return;var n=performance.now(),t=By(Ti.cols,Qy(Ti)),e=Math.round(performance.now()-n);hc=t,jy(t,Ti.cols),$y(t,e)}catch(i){console.error(i),fe("error").textContent=(i.code?i.code+": ":"")+i.message}finally{fe("processing-overlay").classList.remove("active")}}fe("build").addEventListener("click",Qa);fe("source").addEventListener("change",function(){Ti=null;var n=fe("source").value==="file";fe("thin").value=n?"0.03":"0",fe("denoise").value=n?"3":"0",fe("viewpoint").checked=!n&&fe("source").value!=="walls",n?fe("file").click():Qa()});fe("file").addEventListener("change",function(){Ha=fe("file").files[0]||null,Ti=null,Ha&&Qa()});fe("exportObj").addEventListener("click",function(){if(hc){for(var n=zy(hc),t=["# trimesh-build export"],e=0;e<n.positions.length;e+=3)t.push("v "+n.positions[e].toFixed(4)+" "+n.positions[e+1].toFixed(4)+" "+n.positions[e+2].toFixed(4));for(var i=0;i<n.index.length;i+=3)t.push("f "+(n.index[i]+1)+" "+(n.index[i+1]+1)+" "+(n.index[i+2]+1));var r=new Blob([t.join(`
`)],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(r),s.download="trimesh-build.obj",s.click(),URL.revokeObjectURL(s.href)}});fe("viewpoint").checked=!0;Qa();
