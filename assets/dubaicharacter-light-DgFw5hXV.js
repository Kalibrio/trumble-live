import{$n as e,Qn as t,er as n,nr as r,qn as i,tr as a}from"./voyagecompanion-WKoyEJZk.js";import{$ as o,B as s,C as c,Ct as l,F as u,J as d,K as f,R as p,St as m,X as h,Z as g,at as _,bt as v,dt as y,n as b,o as x,ot as S,s as C,w,x as T,xt as E,yt as ee,z as te}from"./three.module-Dz3mLrz8.js";var D=(e,t,n)=>{let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25},O=(e,t,n)=>{let r=(e[0]-t[0])/n[0],i=(e[1]-t[1])/n[1],a=(e[2]-t[2])/n[2],o=Math.sqrt(r*r+i*i+a*a),s=r/n[0],c=i/n[1],l=a/n[2],u=Math.sqrt(s*s+c*c+l*l);return u<1e-9?-Math.min(n[0],n[1],n[2]):o*(o-1)/u},k=(e,t,n,r,i)=>{let a=n[0]-t[0],o=n[1]-t[1],s=n[2]-t[2],c=e[0]-t[0],l=e[1]-t[1],u=e[2]-t[2],d=Math.max(0,Math.min(1,(c*a+l*o+u*s)/(a*a+o*o+s*s))),f=c-a*d,p=l-o*d,m=u-s*d;return Math.sqrt(f*f+p*p+m*m)-(r+(i-r)*d)},A=[{base:[-.045,.67,-.01],ang:106,len:.34,hw:.135,bend:-.05},{base:[.085,.665,.06],ang:82,len:.33,hw:.128,bend:.04}],j=A.map(({base:e,ang:t,len:n,hw:r,bend:i})=>{let a=t*Math.PI/180,o=[Math.cos(a),Math.sin(a)];return{base:e,A:o,Lat:[o[1],-o[0]],len:n,hw:r,bend:i,out:i<0?-1:1}}),M=(e,t)=>e.hw*Math.max(0,1-t)**.75*(1+.7*t);function N(e,t,n){let r=M(e,t)*(n*e.out>0?1.08:.92),i=e.base[0]+e.A[0]*e.len*t+e.Lat[0]*e.bend*e.len*t*t,a=e.base[1]+e.A[1]*e.len*t+e.Lat[1]*e.bend*e.len*t*t,o=e.A[0]+2*e.bend*t*e.Lat[0],s=e.A[1]+2*e.bend*t*e.Lat[1],c=Math.hypot(o,s);o/=c,s/=c;let l=s*e.out,u=-o*e.out,d=n*r,f=e.base[2]+.3*d*d/e.hw-.06*t;return{p:[i+l*d,a+u*d,f],t:[o,s]}}var ne=[.035,.615,.05],re=[.035,.48],ie=[-.12,.15],P=e=>{let t=(222-192*e)*Math.PI/180;return[.02+.142*Math.cos(t),.05+.13*(1-e)**2+.05*e*e*e,.04+.15*Math.sin(t),.026+.05*Math.max(0,Math.sin(Math.PI*e**.7))**.6+.01*e]},F=13,ae=Array.from({length:14},(e,t)=>P(t/F)),oe=[[[.09,.37,.11],[.12,.05,.185],[.145,.026,.2],4,.044],[[.02,.36,.07],[.035,.05,.14],[.06,.026,.155],5,.041]],I=[.05,.027,.042];function se(e){let t=O(e,[-.04,.16,-.03],[.17,.16,.15]);t=D(t,O(e,[.015,.3,.015],[.108,.16,.1]),.08),t=D(t,O(e,[.075,.415,.08],[.1,.12,.085]),.06);let n=0,r=0,i=k(e,[.035,.45,.04],[.04,.535,.05],.078,.072);i=D(i,O(e,ne,[.15,.12,.115]),.05),i=D(i,O(e,[.045,.565,.08],[.162,.066,.09]),.04),i=D(i,k(e,[.07,.58,.11],[.16,.552,.185],.052,.012),.04),i<t&&e[1]>.5&&(n=1),t=D(t,i,.06);for(let[r,i,a,o,s]of oe){let c=k(e,r,i,s,s*.78);c=D(c,O(e,a,I),.025),c<t&&(n=o),t=D(t,c,.03)}let a=O(e,[-.07,.03,.09],[.07,.03,.045]);a<t&&(n=6),t=D(t,a,.03);let o=9,s=0;if(e[1]<.32)for(let t=0;t<=F;t++){let n=ae[t],r=e[0]-n[0],i=e[1]-n[1],a=e[2]-n[2],c=Math.sqrt(r*r+i*i+a*a)-n[3];c<o&&(s=t/F),o=D(o,c,.04)}return o<t&&(n=7,r=s),t=D(t,o,.03),{d:t,g:n,s:r}}var L=(()=>{let e=9,t=-9,n=-9;for(let r of j)for(let i=0;i<=40;i++)for(let a of[-1,1]){let{p:o}=N(r,i/40,a);e=Math.min(e,o[0]),t=Math.max(t,o[0]),n=Math.max(n,o[1])}return{x0:e,x1:t,y1:n}})(),R=Math.min(-.212,L.x0)-.02,ce=Math.max(.21,L.x1),le=Math.max(.15,L.x1)+.004,ue=L.y1+.01;function de(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var fe=.05,pe=[[[-.015,.63,.14],.017,.022],[[.088,.627,.153],.019,.024]],me=[.163,.553,.19],he=e=>.2+.8*(1-Math.min(1,Math.abs(e)))**2;function*ge(e,t){let n=de(t),r=new Float32Array(e*4),i=new Float32Array(e*2),a=new Float32Array(e*3),o=()=>Math.sqrt(-2*Math.log(Math.max(1e-9,n())))*Math.cos(6.2832*n()),s=Math.min(140,Math.round(e*.008)),c=[0,Math.round(e*.08),Math.round(e*.04),Math.round(e*.05),s,Math.round(e*.025)];c[0]=e-c[1]-c[2]-c[3]-c[4]-c[5];let l=Math.round(c[0]*.2),u=Math.round(l*.62),d=[0,0,0,0,0,0],f=0,p=0,m=[0,0,0],h=[0,0,0],g=(e,t,n)=>(h[0]=e,h[1]=t,h[2]=n,se(h).d),_=(e,t,n,o,s,c,l,u,p)=>{r.set([e,t,n,o],f*4),i.set([s,c],f*2),a.set([l,u,p],f*3),d[o]++,f++};for(;d[4]<c[4];){let e=n();if(e<.84){let[t,r,i]=pe[e<.38?0:1],a=n()*6.2832,o=n()**.75;_(t[0]+Math.cos(a)*r*o,t[1]+Math.sin(a)*i*o,t[2],4,1,1-o,0,0,1)}else{let e=n()*6.2832,t=Math.sqrt(n())*.013;_(me[0]+Math.cos(e)*t,me[1]+Math.sin(e)*t*.8,me[2],4,1,.5,0,0,1)}}let v=()=>{for(;;){let e=n();if(n()<M(j[0],e)/j[0].hw/1.12)return e}},y=0,b=0;for(;y<u;){y&511||(yield);let e=n()<.5?0:1,t=j[e],r=n()**.85*.995,i=n()<.5?-1:1,a=Math.abs(o())*(.004+.011*(1-r)),{p:s,t:c}=N(t,r,i*Math.max(0,1-a/Math.max(.004,M(t,r)))),l=c[1]*t.out*i,u=-c[0]*t.out*i;_(s[0],s[1],s[2]+(n()-.5)*.012,0,2+e,r,l,u,.15),y++}for(;b<l-u;){b&511||(yield);let e=n()<.5?0:1,t=j[e],r=v(),{p:i}=N(t,r,n()*2-1);_(i[0],i[1],i[2],0,2+e,r,0,0,1),b++}for(;d[3]<c[3];){let e=n()<.5?0:1,t=j[e],r=.04+.8*v(),i=n()<.55?(n()<.5?-1:1)*(1-Math.abs(o())*.12):n()*2-1,{p:a}=N(t,r,-.1+.6*Math.max(-1,Math.min(1,i))*(1-.3*r));_(a[0],a[1],a[2]+.004,3,2+e,r,0,0,.6)}typeof performance<`u`&&performance.now();let x=[0,0,0,0,0,0],S=c[0]-l,C=0;for(;(C<S||d[1]<c[1]||d[2]<c[2])&&p<e*900;){p++,m[0]=R-.03+n()*(ce-R+.06),m[1]=-.02+n()*.8,m[2]=(n()-.5)*.44,p&63||(yield);let e=se(m),t=()=>{let e=.003,t=m[0],n=m[1],r=m[2],i=g(t+e,n-e,r-e),a=g(t-e,n-e,r+e),o=g(t-e,n+e,r-e),s=g(t+e,n+e,r+e),c=i-a-o+s,l=-i-a+o+s,u=-i+a-o+s,d=Math.sqrt(c*c+l*l+u*u)||1;return[c/d,l/d,u/d]},r=-1,i;if(Math.abs(e.d)<.06&&C<S){for(let n=0;n<2;n++)i=t(),m[0]-=i[0]*e.d,m[1]-=i[1]*e.d,m[2]-=i[2]*e.d,e=se(m);if(Math.abs(e.d)>.004||(i=t(),i[2]<-.35&&n()<.75)||n()>he(i[2]))continue;r=0}else if(e.d<0&&d[1]<c[1]){let t=Math.min(1,-e.d/fe);n()<.35+.65*(1-t)&&(r=1)}else e.d>0&&e.d<.04&&d[2]<c[2]&&n()<Math.exp(-e.d/.012)&&(r=2);if(r<0)continue;d[r]+1===c[r]&&(x[r]=p),i??=t();let a=r===1?Math.min(1,-e.d/fe):1;_(m[0],m[1],m[2],r,e.g,e.s,i[0]*a,i[1]*a,i[2]*a),r===0&&C++}let w=f;for(;d[5]<c[5]&&w>0;){let e=Math.floor(n()*w);r[e*4+3]===0&&_(r[e*4],r[e*4+1],r[e*4+2],5,i[e*2],i[e*2+1],0,0,.3)}for(let e=f-1;e>0;e--){e&2047||(yield);let t=Math.floor(n()*(e+1));for(let[n,o]of[[r,4],[i,2],[a,3]])for(let r=0;r<o;r++){let i=n[e*o+r];n[e*o+r]=n[t*o+r],n[t*o+r]=i}}return{pos:r,bone:i,nrm:a,count:f,classes:d}}function _e(e){let{W:t,H:n,well:r}=e;if(!(t>0)||!(n>0)||!(r.x0>0))return null;let i=Math.max(t,n)/1920,a=n>t*1.2,o=Math.max(9*i,10),s=120*i,c=a?0:s*.12,l=r.x0-(a?Math.max(16*i,10):28*i)-o-c,u=(a?le:ce)-R,d=Math.min(l/(u*1.03),(a?.3:.6)*n/ue);if(!(d*ue>70*i))return null;let f=o+Math.max(0,(l-u*1.03*d)/2)-R*1.02*d,p=a?r.y0-16*i+ue*d:n*.84,m=t/544,h=a?[[16*m,0,166*m,126*m],[378*m,0,528*m,126*m]]:[];return d=Math.max(0,d),{ox:f,oy:p,scale:d,dir:1,unit:i,rise:s,portrait:a,hud:h,sway:a?0:.12}}var ve=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function ye(n,r,i,a=.12){if(i)return[0,0];let o=ve((n-t*.4)/(t*.6+e));return[r*a*Math.sin(Math.PI*o),r*(1-o)]}var be=new WeakMap,xe,Se=!1,Ce=2e4,we=9e3,z=()=>{try{return typeof matchMedia<`u`&&matchMedia(`(pointer: coarse)`).matches}catch{return!1}};function Te(){if(xe||Se)return;Se=!0;let e=ge(Ce,389607),t=()=>{let n=performance.now();for(;;){let t=e.next();if(t.done){xe=t.value,Se=!1;return}if(performance.now()-n>4)break}setTimeout(t,12)};setTimeout(t,0)}function Ee(){let e=xe,t=de(659918),n=new Float32Array(e.count*4);for(let e=0;e<n.length;e++)n[e]=t();let r=new C,i=new Float32Array(e.count*3),a=new Float32Array(e.count*3);for(let t=0;t<e.count;t++)i.set([e.pos[t*4],e.pos[t*4+1],e.pos[t*4+2]],t*3),a.set([e.bone[t*2],e.bone[t*2+1],e.pos[t*4+3]],t*3);return r.setAttribute(`position`,new x(i,3)),r.setAttribute(`aBone`,new x(a,3)),r.setAttribute(`aNrm`,new x(e.nrm.subarray(0,e.count*3),3)),r.setAttribute(`aSeed`,new x(n,4)),r.setDrawRange(0,z()?Math.min(e.count,we):e.count),r}var De=e=>`vec2(${e[0].toFixed(4)},${e[1].toFixed(4)})`,Oe=`
uniform float uT, uGather, uScatter, uStill, uAlpha, uPulse, uBeat, uScale, uDir, uUnit, uPx, uHold;
uniform vec2 uOrigin, uScr, uPearl, uCtrl; uniform vec4 uWell, uHudA, uHudB; uniform vec4 uView; uniform vec3 uHue;
attribute vec4 aSeed; attribute vec3 aBone; attribute vec3 aNrm;
varying vec3 vColor; varying float vAlpha; varying float vCore;
vec2 rot(vec2 p, vec2 c, float a){ p-=c; float cs=cos(a), sn=sin(a); return c+vec2(cs*p.x-sn*p.y, sn*p.x+cs*p.y); }
vec2 curl2(vec2 p, float t){
  float e=.01;
  #define PSI(q) (sin(q.x*2.1+t*.7)*cos(q.y*1.7-t*.5)+.5*sin(q.x*4.3-q.y*3.1+t*1.1))
  vec2 a=p+vec2(0.,e), b=p-vec2(0.,e), c=p+vec2(e,0.), d=p-vec2(e,0.);
  return vec2(PSI(a)-PSI(b), -(PSI(c)-PSI(d)))/(2.*e);
}
float sdBox(vec2 p, vec4 b){ vec2 q=max(b.xy-p,p-b.zw); return length(max(q,0.))+min(max(q.x,q.y),0.); }
vec2 bez(vec2 a, vec2 b, vec2 c, float t){ float u=1.-t; return u*u*a+2.*u*t*b+t*t*c; }
const vec2 NECK=${De(re)}, TROOT=${De(ie)};
const vec2 EARB0=${De(A[0].base)}, EARB1=${De(A[1].base)};
void main(){
  vec3 rp=position; float cls=aBone.z;
  vec2 q=rp.xy; float z=rp.z;
  int g=int(aBone.x+.5); float s=aBone.y;
  float live=1.-uStill;
  // one ear flick on each bar's downbeat (alternate ears), a quick out-and-back (~0.25 s);
  // the tip bends more than the base (s along the ear)
  float bf=fract(uBeat), bar=mod(floor(uBeat),4.), bi=mod(floor(uBeat/4.),2.);
  float flick=sin(clamp(bf/.4,0.,1.)*3.1416)*live*step(bar,.5)*(.4+.6*s);
  if(g==2&&bi<.5) q=rot(q,EARB0,.2*flick);
  if(g==3&&bi>.5) q=rot(q,EARB1,-.2*flick);
  // the head: a slow look up toward the HUD Noor over the hold, and an idle drift
  if(g==1||g==2||g==3) q=rot(q,NECK,(.04*uHold+.01*sin(uT*.6))*live);
  // the tail: the tip sways at 0.4 Hz, the root barely moves; the tip lifts on the sway
  if(g==7){ float sw=sin(6.2832*.4*(uT-.35*s)); q=rot(q,TROOT,-.07*sw*pow(s,1.6)*live); q.y+=.025*max(0.,sw)*s*s*s*live; }
  // breathing: 2% about the base, a 3.6 s breath
  q*=1.+.02*sin(uT*1.745)*live;
  // the skin shimmers by a hair
  q+=vec2(sin(aSeed.y*50.+uT*2.3),cos(aSeed.z*47.+uT*1.9))*.0025*live;
  // fray dust drifts up and away from the skin, renewing itself
  float fr=0.;
  if(cls>1.5&&cls<2.5){ fr=fract(uT*.35+aSeed.x); q+=vec2(-.03,.06)*fr*live; }
  // screen px (top-left origin): the creature faces the well
  vec2 formed=uOrigin+vec2(q.x*uDir,-q.y)*uScale;
  // gather: dust rides in from off screen (the left edge and below) along
  // curl paths and lands with an ease-out; a pearl comet leaves the HUD Noor
  float feed=step(4.5,cls);
  float comet=max(feed,step(.9,aSeed.w)*step(cls,1.5));
  float dl=comet>.5?aSeed.x*.2:.05+aSeed.x*.35;
  float gk=clamp((uGather-dl)/max(.05,1.-dl),0.,1.); gk=1.-pow(1.-gk,3.);
  if(uStill>.5) gk=1.;
  vec2 start=aSeed.z<.65?vec2(-uScr.x*(.08+.3*aSeed.y),formed.y+(aSeed.w-.5)*uScr.y*.5):vec2(formed.x+(aSeed.y-.3)*uScr.x*.5,uScr.y*(1.06+.2*aSeed.w));
  vec2 pf=mix(start,formed,gk)+curl2(start/uScr.y*3.+aSeed.w*3.,uT*.8)*(1.-gk)*gk*uScr.y*.07;
  if(comet>.5) pf=bez(uPearl,uCtrl,formed,gk)+curl2(formed/uScr.y*6.,uT)*(1.-gk)*gk*12.*uUnit;
  // the pearl feeds it all through the hold: a slow stream of light down the curve
  // (reduced motion: no stream, and the stream's end points never pile up in the chest)
  float fa=feed>.5&&uStill>.5?0.:1.;
  if(feed>.5&&gk>=1.&&uStill<.5){ float fl=fract(uT*.42+aSeed.x); pf=bez(uPearl,uCtrl,formed,fl)+curl2(vec2(fl*4.,aSeed.y*9.),uT)*(1.5+4.*sin(3.1416*fl))*uUnit; fa=sin(3.1416*fl)*.9; }
  // scatter: a dissolve on the phrase boundary, ears last; each speck lets go
  // at its own moment and drifts outward, away from the glass, fading
  float sl=aSeed.x*.4+(1.-clamp(q.y,0.,1.))*.25;
  float sk=uStill>.5?0.:clamp((uScatter-sl)/.6,0.,1.);
  vec2 outv=normalize(formed-(uOrigin+vec2(0.,-.45*uScale))+vec2(1e-3))+vec2(-.55*uDir,-.35);
  pf+=(outv*uScale*.45*pow(sk,1.2)+curl2(formed/uScr.y*5.+aSeed.yz*4.,uT)*sk*30.*uUnit);
  vec2 ndc=vec2(pf.x/uScr.x*2.-1.,1.-pf.y/uScr.y*2.);
  gl_Position=vec4(mix(uView.x,uView.y,ndc.x*.5+.5),mix(uView.z,uView.w,ndc.y*.5+.5),0.,1.);
  // per-particle masks (alpha, before the additive blend): nothing inside the
  // well, a smoothstep over the last 28 px outside its rim; the HUD label boxes likewise
  float m=smoothstep(0.,28.*uUnit,sdBox(pf,uWell));
  if(uHudA.z>uHudA.x){ m*=smoothstep(0.,24.*uUnit,sdBox(pf,uHudA))*smoothstep(0.,24.*uUnit,sdBox(pf,uHudB)); }
  // the limb: skin specks whose normal turns away from the eye carry the outline
  float nl=length(aNrm); vec3 nn=nl>1e-4?aNrm/nl:vec3(0.,0.,1.);
  float limb=pow(1.-abs(nn.z),1.5);
  // depth: additive light has no occlusion, so the far side fades hard (no see-through rings)
  float near=clamp(.5+z*4.,0.,1.);
  // the ears are thin leaves facing the camera: never depth-faded
  if(g==2||g==3) near=max(near,.9);
  float depthK=feed>.5?1.:mix(.14,1.,near*near)*(g==5?.55:1.)*((g==2||g==3)?1.15:g==7?.8:1.);
  float tw=.78+.22*sin(uT*(2.+aSeed.w*5.)+aSeed.x*60.);
  float hot=step(.93,aSeed.y);
  // the tail tip and the ear tips are the brightest edges (dense rim, white-hot cores)
  // tips: a soft lift spread over the last third of the tail (noisy, never one bright arc)
  // and the last quarter of each ear
  float tip=g==7?smoothstep(.6,1.,s)*(.25+.75*fract(aSeed.x*7.31+aSeed.y*3.7))*.45:(g==2||g==3)?smoothstep(.75,1.,s)*.35:0.;
  vec3 hue=uHue*(1.+uPulse*.25);
  vec3 gold=vec3(1.,.8,.5);
  float form=gk*(1.-sk);
  vColor=mix(gold,hue,form);
  if(comet>.5) vColor=mix(vec3(1.,.95,.85),vColor,gk*(1.-feed));
  if(feed>.5) vColor=mix(vec3(1.,.93,.8),uHue,.35);
  float sz;
  // the shell's density already carries the fresnel (rim dense, a floor across the face-on skin);
  // the rim is also brighter, but per-speck energy is capped so stacks never clip to a plate
  if(cls<.5){ vAlpha=(.4+1.0*limb*limb+.25*limb)*(.75+.4*aSeed.z)*tw*(1.+.6*tip); vCore=min(.85,.2+.55*hot+.25*limb+.3*tip); sz=.7+.7*aSeed.z*aSeed.z+.7*hot+.3*limb+.2*tip; }
  else if(cls<1.5){ float sk2=1.-nl; vAlpha=(.04+.22*sk2*sk2)*(.7+.5*aSeed.z)*tw; vCore=.2+.7*hot; sz=.5+.5*aSeed.z+.6*hot; }
  else if(cls<2.5){ vAlpha=.3*tw*sin(3.1416*fr); vCore=.2; sz=.45+.4*aSeed.z; }
  else if(cls<3.5){ vAlpha=.6*tw*(.6+.4*s); vCore=.15+.4*hot; sz=.75+.5*aSeed.z; vColor=mix(vColor,vec3(1.,.62,.55),.45*form); }
  else if(cls<4.5){ vAlpha=.3+.5*s; vCore=.2+.45*s; sz=.75+.3*aSeed.z; vColor=mix(vColor,vec3(.85,1.,1.),.4); }
  else { vAlpha=.9*fa; vCore=.5; sz=.8+.5*aSeed.z; }
  vAlpha*=depthK*m;
  sz*=mix(.85,1.08,near);
  // dust is fainter and smaller until it lands; the scatter fades it into the world
  float dustA=mix(.3+.5*comet,1.,gk)*pow(1.-sk,1.5);
  vAlpha*=dustA*uAlpha;
  sz*=mix(.7,1.,gk)*(1.-.4*sk);
  gl_PointSize=max(1.,uPx*sz);
}`,ke=`
precision highp float;
varying vec3 vColor; varying float vAlpha; varying float vCore;
void main(){
  vec2 d=gl_PointCoord-.5; float r2=dot(d,d)*4.; if(r2>1.) discard;
  // a tight halo: specks stay specks (no fog under the bloom)
  // white lives only in the tiny core (capped); the colour lives in the halo
  float core=exp(-r2*18.), halo=exp(-r2*5.)*(1.-r2);
  vec3 c=vColor*halo*.9+vec3(1.,.98,.95)*core*min(vCore,1.)*1.05;
  gl_FragColor=vec4(c*vAlpha,1.);
}`;function Ae(e){return new S({vertexShader:Oe,fragmentShader:ke,blending:2,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uT:{value:0},uGather:{value:0},uScatter:{value:0},uStill:{value:0},uAlpha:{value:1},uPulse:{value:0},uBeat:{value:0},uScale:{value:300},uDir:{value:1},uUnit:{value:1},uPx:{value:1},uHold:{value:0},uOrigin:{value:new v},uScr:{value:new v(1080,1920)},uPearl:{value:new v},uCtrl:{value:new v},uWell:{value:new m},uHudA:{value:new m},uHudB:{value:new m},uHue:{value:new E(.45,.95,1)},uView:e.uView}})}function je(e,t){let n=be.get(e);if(n)return n;let r=Ee(),i=Ae(t),a=new o(r,i);return a.frustumCulled=!1,a.renderOrder=7,a.visible=!1,a.name=`noor-spirit`,e.add(a),n={pts:a,mat:i,warm:0,count:r.drawRange.count},be.set(e,n),n}function Me(e){e.warm===0?(e.pts.geometry.setDrawRange(0,0),e.pts.visible=!0,e.warm=1):e.warm===1&&(e.pts.geometry.setDrawRange(0,e.count),e.pts.visible=!1,e.warm=2)}var B=-1,Ne=0,Pe=[[.36,.88,1],[1,.52,.42]];function Fe(i,o,s){let c=typeof performance<`u`?performance.now():0;a.seq===B?Ne++:(B=a.seq,Ne=0);let l=a.age,u=l>=0&&l<4.8&&!!s.board&&Ne<4,d=be.get(i),f=()=>{d&&(d.pts.visible=!1),r.k=0};if(!xe){Te(),f();return}if(!u){let e=je(i,o);e.warm<2?Me(e):f();return}let p=s.reduced||a.reduced,m=s.board,h=o.uViewport.value,g=s.view??{x0:0,y0:0,x1:1,y1:1},_=h.x*(g.x1-g.x0),v=h.y*(g.y1-g.y0),y=e=>(e-g.x0)/(g.x1-g.x0)*_,b=e=>(e-g.y0)/(g.y1-g.y0)*v,x={W:_,H:v,well:{x0:y(m.x0),y0:b(m.y0),x1:y(m.x1),y1:b(m.y1)}},S=_e(x);if(!S){f();return}let C=je(i,o);C.warm<2&&(C.warm=1,Me(C));let w=C.mat.uniforms,[T,E]=ye(l,S.rise,p,S.sway);w.uOrigin.value.set(S.ox+T,S.oy+E),w.uScr.value.set(_,v),w.uWell.value.set(x.well.x0,x.well.y0,x.well.x1,x.well.y1);let[ee,te]=S.hud;w.uHudA.value.set(...ee??[0,0,0,0]),w.uHudB.value.set(...te??[0,0,0,0]);let D=[a.hudX*_,a.hudY*v];w.uPearl.value.set(...D),w.uCtrl.value.set(S.portrait?x.well.x0*.55:(D[0]+S.ox)/2,S.portrait?x.well.y0-75*S.unit:Math.min(D[1],S.oy-ue*S.scale)+40*S.unit),w.uScale.value=S.scale,w.uDir.value=S.dir,w.uUnit.value=S.unit,w.uPx.value=Math.max(1,h.y/1e3);let O=l/t,k=(l-t-e)/n;w.uT.value=p?0:s.time,w.uBeat.value=p?0:s.beat,w.uGather.value=p?1:Math.min(1,O),w.uScatter.value=p?0:Math.max(0,k),w.uHold.value=p?0:ve((l-t)/e),w.uStill.value=+!!p,w.uPulse.value=s.pulse,w.uHue.value.set(...Pe[a.hue&1]);let A=p?ve(l/t)*(1-ve(k)):1;w.uAlpha.value=(a.chain?.85:1)*A*.6*1,C.pts.visible=!0,a.shownAt=c;let j=S.ox+T+R*S.scale,M=Math.min(x.well.x0,S.ox+T+ce*S.scale),N=S.oy+E+.02*S.scale,ne=S.oy+E-ue*S.scale;Object.assign(r,{x0:j/_,x1:M/_,y0:ne/v,y1:N/v,k:p?A:Math.min(ve(l/t),1-ve(Math.max(0,k)))})}i.includes(Fe)||i.push(Fe),typeof window<`u`&&typeof performance<`u`&&Te();var V=[[1,.46,.68],[.36,1,.62],[.56,.5,1],[1,.72,.3],[.36,.86,1]];function H(e){e-=Math.floor(e);let t=[1,.42,.66],n=[.3,.95,.92],r=[.32,.42,1],[i,a,o]=e<1/3?[t,n,e*3]:e<2/3?[n,r,e*3-1]:[r,t,e*3-2];return[i[0]+(a[0]-i[0])*o,i[1]+(a[1]-i[1])*o,i[2]+(a[2]-i[2])*o]}var U=[[0,.3],[20,.5],[40,.7],[60,.85],[70,1],[100,.45],[120,.3]];function Ie(e){if(!Number.isFinite(e))return .5;let t=Math.max(0,e),n=U[0][1];for(let e=1;e<U.length;e++){let[r,i]=U[e];n+=(i-U[e-1][1])*X(r-1.5,r+.5,t)}return n}var Le=.1,Re;function ze(e,t){if(!Number.isFinite(e))return t*.42;Re??=(()=>{let e=Math.ceil(130/Le)+1,t=new Float32Array(e);for(let n=1;n<e;n++)t[n]=t[n-1]+Le*(.26+.34*Ie((n-.5)*Le));return t})();let n=Math.max(0,Math.min(129.9,e))/Le,r=Math.floor(n);return Re[r]+(Re[r+1]-Re[r])*(n-r)}var Be=[0,20,40,70,100];function Ve(e){if(!Number.isFinite(e))return 0;let t=e,n=0;for(let e of Be)e>0&&t>=e-.8&&t<e&&(n=Math.max(n,X(e-.8,e-.05,t))),t>=e&&t<e+1.9&&(n=Math.max(n,e===0?1-X(.2,1.9,t):1-X(e+.25,e+1.9,t)));return n}var He=e=>Math.max(0,1-e*e)**.62,Ue=.95,We=.72,Ge=.1,W={BODY:0,HEAD:1,EAR_L:2,EAR_R:3,PAW_L:4,PAW_R:5,TAIL:6,PEARL:7,EYE_L:8,EYE_R:9},Ke=10,qe=.98,Je=-2.1,Ye=.22,Xe=.56,Ze=.45,Qe=[1,.74,.42],G=[1,.86,.62],K=[1,.96,.9],$e=[.58,.98,.93],q=[1,.98,.95];function et(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var tt=(e,t,n)=>{let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25};function J(e,t,n=0,r=0){let i=Math.cos(n),a=Math.sin(n),o=Math.cos(r),s=Math.sin(r);return(n,r,c)=>{let l=n-e[0],u=r-e[1],d=c-e[2],f=o*l+s*u,p=-s*l+o*u;l=f,u=p;let m=i*u+a*d,h=-a*u+i*d;u=m,d=h;let g=Math.hypot(l/t[0],u/t[1],d/t[2]),_=Math.hypot(l/(t[0]*t[0]),u/(t[1]*t[1]),d/(t[2]*t[2]));return _<1e-9?-Math.min(...t):g*(g-1)/_}}function nt(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2],s=i*i+a*a+o*o;return(t,c,l)=>{let u=t-e[0],d=c-e[1],f=l-e[2],p=Math.max(0,Math.min(1,(u*i+d*a+f*o)/s));return Math.hypot(u-i*p,d-a*p,f-o*p)-(n+(r-n)*p)}}var rt=(e,...t)=>(n,r,i)=>{let a=t[0](n,r,i);for(let o=1;o<t.length;o++)a=tt(a,t[o](n,r,i),e);return a},it=[J([0,.6,.14],[.17,.25,.14])],at=rt(.11,J([0,.24,-.05],[.31,.24,.27]),J([0,.43,0],[.285,.27,.245]),J([0,.7,.03],[.275,.2,.2]),J([0,.83,.02],[.255,.1,.17]),it[0]),ot=rt(.05,J([-.19,.76,.04],[.12,.1,.12]),J([.19,.76,.04],[.12,.1,.12])),st=rt(.04,J([-.22,.2,-.05],[.14,.17,.22],.25,-.12),J([.22,.2,-.05],[.14,.17,.22],.25,.12)),ct=rt(.02,nt([-.2,.78,.12],[-.2,.6,.24],.066,.056),nt([.2,.78,.12],[.2,.6,.24],.066,.056)),lt=rt(.02,nt([-.17,.045,.02],[-.2,.042,.3],.045,.052),nt([.17,.045,.02],[.2,.042,.3],.045,.052)),ut=rt(.06,rt(.08,at,st,ot),ct,lt),dt=[.2,.6,.24],ft=e=>rt(.05,nt([0,0,0],[-e*.07,-.1,.17],.056,.048),J([-e*.1,-.12,.25],[.074,.048,.07],.45,-e*.55)),pt=ft(-1),mt=ft(1),ht=[0,-.015,.392],gt=[J([-.19,.08,.1],[.16,.12,.14]),J([.19,.08,.1],[.16,.12,.14]),nt([0,.07,.2],[0,-0,.355],.1,.036)],_t=[J([-.29,.05,0],[.075,.045,.06],0,-.5),J([.29,.05,0],[.075,.045,.06],0,.5)],vt=J([0,-.04,-.02],[.22,.13,.17]),yt=rt(.12,J([0,.19,0],[.33,.265,.3]),...gt,..._t,vt),bt=[.37,.5,.055],xt=e=>1-.72*Math.max(0,Math.min(1,e/1))**1.05,St=(e,t)=>{let n=xt(t),r=e/(bt[0]*n);return .075*r*r-.03},Ct=(e,t,n)=>{let r=xt(t);return J([0,.5,0],bt)(e/r,t,n+St(e,t))*Math.min(1,r+.15)},wt=e=>.035+.135*Math.max(0,Math.sin(Math.PI*Math.min(1,e)**.8))**.72+.02*(1-e),Tt=(e,t,n)=>{let r=Math.max(0,Math.min(qe,e));return Math.hypot(e-r,t,n*1.12)-wt(r/qe)},Et=5,Dt=(e,t)=>t*Math.max(0,Math.min(1,e/qe))**1.25;function Ot(e,t,n,r){let i=Math.max(0,Math.min(qe,e.x)),a=e.x-i,o=i/8,s=0,c=0;for(let e=0;e<8;e++){let t=Dt((e+.5)*o,n);s+=Math.cos(t)*o,c-=Math.sin(t)*o}let l=Dt(i,n),u=Math.cos(l),d=-Math.sin(l),f=Math.sin(l),p=Math.cos(l),m=i/qe;e.set(s+u*a+f*e.z,e.y+r*i*m,c+d*a+p*e.z),t&&t.set(t.x*u+t.z*f,t.y,t.x*d+t.z*p)}function kt(e,t,n,r){let i=Math.ceil((n[0]-t[0])/r)+1,a=Math.ceil((n[1]-t[1])/r)+1,o=Math.ceil((n[2]-t[2])/r)+1,s=new Float32Array(i*a*o);for(let n=0;n<o;n++)for(let o=0;o<a;o++)for(let c=0;c<i;c++)s[c+i*(o+a*n)]=e(t[0]+c*r,t[1]+o*r,t[2]+n*r);let c=new Int32Array((i-1)*(a-1)*(o-1)).fill(-1),l=[],u=[],d=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],f=new Float64Array(8),p=(t,n,i)=>{let a=r*.5,o=[e(t+a,n,i)-e(t-a,n,i),e(t,n+a,i)-e(t,n-a,i),e(t,n,i+a)-e(t,n,i-a)],s=Math.hypot(...o)||1;return[o[0]/s,o[1]/s,o[2]/s]};for(let e=0;e<o-1;e++)for(let n=0;n<a-1;n++)for(let o=0;o<i-1;o++){let m=0;for(let t=0;t<8;t++){let r=s[o+(t&1)+i*(n+(t>>1&1)+a*(e+(t>>2&1)))];f[t]=r,r<0&&(m|=1<<t)}if(m===0||m===255)continue;let h=0,g=0,_=0,v=0;for(let[e,t]of d){if(f[e]<0==f[t]<0)continue;let n=f[e]/(f[e]-f[t]),r=e&1,i=e>>1&1,a=e>>2&1,o=t&1,s=t>>1&1,c=t>>2&1;h+=r+(o-r)*n,g+=i+(s-i)*n,_+=a+(c-a)*n,v++}let y=t[0]+(o+h/v)*r,b=t[1]+(n+g/v)*r,x=t[2]+(e+_/v)*r;c[o+(i-1)*(n+(a-1)*e)]=l.length/3,l.push(y,b,x),u.push(...p(y,b,x))}let m=[],h=(e,t,n)=>e<0||t<0||n<0||e>=i-1||t>=a-1||n>=o-1?-1:c[e+(i-1)*(t+(a-1)*n)],g=(e,t,n,r)=>{if(!(e<0||t<0||n<0||r<0))for(let[i,a,o]of[[e,t,n],[e,n,r]]){let e=l[a*3]-l[i*3],t=l[a*3+1]-l[i*3+1],n=l[a*3+2]-l[i*3+2],r=l[o*3]-l[i*3],s=l[o*3+1]-l[i*3+1],c=l[o*3+2]-l[i*3+2],d=t*c-n*s,f=n*r-e*c,p=e*s-t*r;d*(u[i*3]+u[a*3]+u[o*3])+f*(u[i*3+1]+u[a*3+1]+u[o*3+1])+p*(u[i*3+2]+u[a*3+2]+u[o*3+2])>=0?m.push(i,a,o):m.push(i,o,a)}};for(let e=0;e<o;e++)for(let t=0;t<a;t++)for(let n=0;n<i;n++){let r=s[n+i*(t+a*e)]<0;n<i-1&&t>0&&e>0&&r!==s[n+1+i*(t+a*e)]<0&&g(h(n,t-1,e-1),h(n,t,e-1),h(n,t,e),h(n,t-1,e)),t<a-1&&n>0&&e>0&&r!==s[n+i*(t+1+a*e)]<0&&g(h(n-1,t,e-1),h(n,t,e-1),h(n,t,e),h(n-1,t,e)),e<o-1&&n>0&&t>0&&r!==s[n+i*(t+a*(e+1))]<0&&g(h(n-1,t-1,e),h(n,t-1,e),h(n,t,e),h(n-1,t,e))}return{pos:new Float32Array(l),nrm:new Float32Array(u),idx:m}}var At=`
uniform vec4 uTail; // x curl, w lift (y, z unused)
// five bones, root to tip: each adds its angle over its fifth of the length
// (a spring chain: every bone lags the one before it), plus a vertical bend
uniform float uBones[5]; uniform float uBonesV[5];
float tailHeading(float x){ float s=clamp(x/${qe.toFixed(3)},0.,1.); float h=uTail.x*pow(s,1.25);
 for(int k=0;k<5;k++) h+=uBones[k]*clamp(s*5.-float(k),0.,1.);
 return h; }
float tailRise(float x){ float y=0.; for(int k=0;k<5;k++) y+=uBonesV[k]*max(0.,x-float(k)*${(qe/5).toFixed(4)}); return y; }
void bendTail(inout vec3 p, inout vec3 n){
 float x=clamp(p.x,0.,${qe.toFixed(3)}), over=p.x-x, dx=x/8.;
 vec2 c=vec2(0.);
 for(int i=0;i<8;i++){ float th=tailHeading((float(i)+.5)*dx); c+=vec2(cos(th),-sin(th))*dx; }
 float th=tailHeading(x); vec2 tg=vec2(cos(th),-sin(th)), nr=vec2(sin(th),cos(th));
 vec2 xz=c+tg*over+nr*p.z;
 p=vec3(xz.x,p.y+uTail.w*x*x/${qe.toFixed(3)}+tailRise(x),xz.y);
 n=vec3(n.x*tg.x+n.z*nr.x,n.y,n.x*tg.y+n.z*nr.y);
}`,jt=`
uniform float uBend;
attribute float aVis;
varying vec3 vN; varying vec3 vV; varying float vVis; varying float vY; varying vec3 vW;
${At}
void main(){
 vec3 p=position, n=normal;
 if(uBend>.5) bendTail(p,n);
 vec4 w=modelMatrix*vec4(p,1.); vY=w.y; vW=w.xyz; vec4 mv=viewMatrix*w;
 vN=normalize(normalMatrix*n); vV=normalize(-mv.xyz); vVis=aVis;
 gl_Position=projectionMatrix*mv; }`,Mt=`
vec3 nacreRamp(float x){ x=fract(x);
 vec3 rose=vec3(1.,.42,.66), aqua=vec3(.3,.95,.92), lapis=vec3(.32,.42,1.);
 return x<.3333?mix(rose,aqua,x*3.):x<.6667?mix(aqua,lapis,x*3.-1.):mix(lapis,rose,x*3.-2.); }
// one strong hue per combo (uHueAt on the ramp), with only a narrow drift
uniform float uHueAt;
vec3 nacre(float j){ return nacreRamp(uHueAt+sin(j*6.2832)*.06); }`,Nt=`
uniform vec3 uTint; uniform float uRim; uniform float uGlow; uniform float uBright; uniform float uTime; uniform float uNacre;
uniform vec3 uPearlW; uniform float uPearlI; uniform vec3 uClearCol; uniform float uMask;
varying vec3 vN; varying vec3 vV; varying float vVis; varying float vY; varying vec3 vW;
${Mt}
void main(){
 vec3 n=normalize(vN), v=normalize(vV); float fv=min(1.,abs(dot(n,v))), fr=1.-fv;
 float f3=pow(fr,2.5), f8=pow(fr,7.);
 vec3 nacre=mix(uClearCol,nacre(fr*.6+vY*.32+n.x*.18-uTime*.12),.2);
 vec3 tint=mix(uTint,nacre,uNacre);
 // PURE rim: light only where the glass turns away (pow(1-N.V, 3)); facing
 // glass adds nothing, so the interior stays true black space with specks
 vec3 col=tint*f3*uRim*(.32+.2*uGlow+.1*uNacre) + vec3(1.,.97,.9)*f8*uRim*.16;
 // the faintest deep-jewel tint just inside the rim (never umber, never at the core)
 col+=vec3(.16,.2,.42)*pow(fr,2.2)*.05;
 // the pearl lights the chest from inside: a small, cool pearl-white pool
 vec3 dp=vW-uPearlW; float pl=exp(-dot(dp,dp)*16.)*uPearlI;
 col+=mix(vec3(.85,.95,1.),nacre,.5*uNacre)*pl*.16*f3;
 col*=uBright;
 col=col/(1.+max(col.r,max(col.g,col.b))*.6);
 // over a bright backdrop the glass body takes a dark core (alpha = how much of
 // the backdrop it holds back: ~40% where it faces the eye, nothing at the rim)
 gl_FragColor=vec4(col*vVis,uMask*smoothstep(.15,.7,fv));
}`,Pt=`
varying vec3 vN; varying vec3 vV; varying vec3 vL;
void main(){ vL=position; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,Ft=`
uniform float uTime; uniform float uGlow; uniform float uCap; uniform vec3 uTintC; uniform float uTintK; uniform float uSpec;
varying vec3 vN; varying vec3 vV; varying vec3 vL;
void main(){
 vec3 n=normalize(vN), v=normalize(vV); float fv=clamp(dot(n,v),0.,1.); float fr=1.-fv;
 float sw=sin(vL.x*9.+uTime*1.1)+sin(vL.y*7.-uTime*.8+vL.z*5.)+sin(vL.z*8.+uTime*.6);
 // thin film: thickness rises toward the limb and swirls slowly over the surface
 float film=fr*1.25+sw*.06+uTime*.025;
 // pastel: nacre is a whisper of rose / green / aqua, never a soap-bubble rainbow
 vec3 irid=mix(vec3(1.),.5+.5*cos(6.2832*(film+vec3(0.,.33,.67))),.45);
 vec3 body=mix(vec3(.95,.95,.96),irid,.25+.5*fr);
 body=mix(body,uTintC*.9+.1,uTintK*.35);
 // push 3 iter 3: a TONEMAPPED orb, never a flat white disc: the nacre body falls off
 // exponentially from the centre to the limb (pearl-tinted, mid value), and only a small
 // HDR core (~25-30% of the radius: 6-10 px at 1080p) runs white-hot and blooms
 vec3 col=body*(.32+.22*uGlow)*pow(fv,1.4);
 float m=max(col.r,max(col.g,col.b)); col*=min(1.,uCap/max(m,1e-4));
 col*=.72+.28*smoothstep(-.9,.6,n.y);
 // a soft film-hued sheen toward the limb that fades out AT the limb (no ring)
 col+=irid*pow(fr,1.5)*(1.-smoothstep(.55,.9,fr))*.16;
 float core=exp(-(1.-fv)*34.);
 col+=vec3(1.,.985,.96)*core*(1.1+.5*uGlow);
 // one HDR specular glint (>1: the composite blooms it), a faint second glint
 col+=vec3(1.)*pow(max(dot(n,normalize(vec3(-.45,.6,1.))),0.),90.)*uSpec*.6;
 col+=vec3(.9,1.,.98)*pow(max(dot(n,normalize(vec3(.5,-.5,1.))),0.),24.)*.12;
 // the limb feathers into the light behind it (no disc edge)
 float a=smoothstep(0.,.7,fv);
 gl_FragColor=vec4(col,a);
}`,It=`
varying vec3 vN; varying vec3 vV; varying vec3 vL;
void main(){
 vec3 n=normalize(vN), v=normalize(vV); float fr=max(0.,1.-abs(dot(n,v)));
 vec3 col=vec3(1.,.82,.66)*(.1+.22*(1.-fr*fr));
 col+=vec3(1.)*pow(max(dot(n,normalize(vec3(-.4,.7,1.))),0.),30.)*.9;
 gl_FragColor=vec4(col,1.);
}`,Lt=`
uniform mat4 uParts[${Ke}];
uniform float uTime; uniform float uPx; uniform float uPulse; uniform float uLive; uniform float uPeel; uniform float uPeelFrac;
uniform float uEyeOpen; uniform float uHappyEyes; uniform float uGlow; uniform float uBright; uniform float uBoost;
uniform float uHue; uniform float uDust; uniform float uMinPx; uniform float uRimGain; uniform float uThin; uniform float uBeat; uniform float uLoose; uniform float uTwinkle;
uniform float uShadow; uniform float uShadowA; uniform float uOverlay;
uniform float uWave; uniform float uWaveTint; uniform vec3 uClearCol; uniform vec3 uPearlP; uniform float uSmall;
uniform float uBreathK; uniform float uUnwind; uniform float uUnwindP;
attribute vec3 aNormal; attribute float aPart; attribute vec4 aSeed; attribute vec3 aColor; attribute float aSize; attribute float aKind; attribute vec3 aDir;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
${At}
${Mt}
void main(){
 int pi=int(aPart+.5);
 vec3 lp=position, ln=aNormal, ld=aDir;
 if(pi==${W.TAIL}) bendTail(lp,ln);
 // breath: the chest swells along its normal and the shoulders rise (not a scale)
 if(pi==${W.BODY}){ float ch=smoothstep(.42,.66,lp.y)*(1.-smoothstep(.86,.98,lp.y)); float sh=smoothstep(.62,.84,lp.y)*smoothstep(.08,.22,abs(lp.x));
  lp+=ln*.014*uBreathK*ch*step(-.1,ln.z)+vec3(0.,.012*uBreathK*sh,0.); }
 // the ear tips curl on a slow noise field (~4% of the ear's length)
 if(pi==${W.EAR_L}||pi==${W.EAR_R}){ float tk=smoothstep(.42,1.,lp.y)*uLive; float ph=aPart*1.9;
  lp.x+=.04*tk*tk*(sin(uTime*.83+lp.y*4.2+ph)+.5*sin(uTime*1.37-lp.y*7.+ph*2.));
  lp.z+=.03*tk*tk*sin(uTime*.61+lp.y*3.1+ph); }
 // the ear streams drift on a slow curl field in the ear's own plane
 if(aKind>5.5&&aKind<6.5) lp+=vec3(sin(uTime*.9+aSeed.y*31.+lp.y*9.),.4*sin(uTime*.7+aSeed.z*23.),0.)*.006*aDir.z*uLive;
 mat4 M=uParts[pi];
 vec3 p=(M*vec4(lp,1.)).xyz;
 vec3 n=normalize(mat3(M)*ln);
 // face protect: the eyes and muzzle never peel, loosen or spill at a peak
 float fprot=0.;
 if(pi==${W.HEAD}){ vec3 fq=(lp-vec3(0.,.12,.3))/vec3(.27,.18,.2); fprot=1.-smoothstep(.75,1.15,length(fq)); }
 // the clear: edge specks peel off along a curling path, then settle home
 float pk=uPeel*step(aSeed.x,uPeelFrac)*step(aKind,.5)*(1.-fprot);
 vec3 curl=vec3(sin(aSeed.y*41.+uTime*1.3+p.y*3.),sin(aSeed.z*37.+uTime*1.1)+.9,sin(aSeed.w*43.+uTime*.9+p.x*3.));
 p+=(n*.2+curl*.1)*pk*(.3+aSeed.y);
 // song phrase: the body dissolves to dust and gathers back (the face stays)
 float faceK=(aKind>2.5&&aKind<5.5)||(aKind>9.5)?0.:1.;
 float dk=uDust*faceK*(.4+.9*aSeed.y)*(1.-.85*fprot);
 vec3 drift=vec3(sin(aSeed.z*29.+p.y*4.+uTime*.7),.6+sin(aSeed.w*31.+uTime*.5),cos(aSeed.y*23.+p.x*4.+uTime*.6));
 p+=(n*.2+drift*.16)*dk; // push 3 iter 2: a loosened fennec that hugs the body, never a frame-filling cloud
 // chain 3+: ~45% of the body (never the face or the pearl) unwinds into one
 // ribbon of light that circles the body once and winds back home
 float uw=uUnwind*step(.55,aSeed.x)*(1.-fprot)*faceK*(pi==${W.PEARL}?0.:1.);
 if(uw>0.){
  float rs=fract(aSeed.y*1.618+aSeed.z*.37);
  float st=clamp(uw*1.7-aSeed.w*.7,0.,1.); st=st*st*(3.-2.*st);
  float th=6.2832*(rs*.62+uUnwindP)-1.2;
  float rr=.74+.05*(aSeed.z-.5)+.06*sin(rs*9.+uTime);
  vec3 rib=vec3(cos(th)*rr, .3+.95*rs+.07*(aSeed.w-.5)-.22*sin(th)*rr, sin(th)*rr*.8);
  p=mix(p,rib+vec3(0.,uParts[${W.BODY}][3].y,0.),st);
 }
 p+=n*.008*sin(uTime*2.6+aSeed.z*30.)*uLive;
 // combo: the light loosens off the silhouette (2-6 px) and trails with drag
 float lk=uLoose*(aKind<.5||(aKind>8.5&&aKind<9.5)||(aKind>1.5&&aKind<2.5)?1.:0.)*(1.-fprot);
 p+=(n*(.012+.03*aSeed.z)+.016*vec3(sin(uTime*1.7+aSeed.x*50.),sin(uTime*1.3+aSeed.y*40.)+.6,sin(uTime*1.5+aSeed.w*45.)))*lk*(1.-uShadow);
 vec4 mv=viewMatrix*vec4(p,1.);
 vec3 nv=normalize(mat3(viewMatrix)*n);
 float facing=nv.z, rim=1.-abs(facing);
 float edge=smoothstep(.08,.85,rim);
 float tw=1.-uTwinkle*(.5+.5*sin(uTime*(1.4+aSeed.w*4.5)+aSeed.x*60.));
 // log-normal brightness: a few specks burn, most are embers
 float lum=exp((aSeed.z-.5)*1.7);
 float a; vStr=0.; vAng=0.; vHot=0.; vSoft=.35;
 float minPx=1.;
 if(aKind<.5){ // surface: dense bright silhouette, a sparse dim interior
  // (round 10: a lighter rim; the volume's own density carries the limb)
  a=(facing>-.05?1.:.15)*(.13+.78*pow(edge,1.7)*uRimGain*(1.-.6*aDir.z))*mix(1.,tw,uLive)*lum;
  vHot=edge*step(.88,aSeed.w); vSoft=.06+edge*.5; minPx=mix(1.,uMinPx*(.55+.9*aSeed.y),edge);
 } else if(aKind<1.5){ // interior glow
  a=.035*mix(1.,tw,uLive); vSoft=1.;
 } else if(aKind<2.5){ // ear lining: pearl-rose at the base, champagne toward the tip
  a=(facing>-.2?1.:.15)*(.3+.36*edge)*(.8+.4*uGlow)*mix(1.,tw,uLive); vHot=step(.95,aSeed.w); vSoft=.45;
 } else if(aKind<3.5){ // catchlight: one HDR white-hot speck (~4.0, it blooms)
  a=uEyeOpen*(1.-uHappyEyes)*3.2; vHot=1.; vSoft=.3; minPx=uMinPx*1.2;
 } else if(aKind<4.5){ // happy-eye arcs
  a=uHappyEyes*3.4; vHot=1.; vSoft=.25; minPx=uMinPx*1.6;
 } else if(aKind<5.5){ // face lines: upper lid, tear-line flank, whisker dots
  a=(facing>-.1?1.:0.)*aSeed.w*1.5*(1.-.9*uHappyEyes*step(.5,aSeed.z)); vSoft=.3; minPx=mix(1.,uMinPx*.9,step(.5,aSeed.z));
 } else if(aKind<6.5){ // ear stream: hair-fine light flowing up the inner contours
  float u=aDir.x, tier=aDir.y;
  float wave=pow(clamp(.5+.5*sin((u*2.3-uTime*.42*uLive+aSeed.y*.35)*6.2832),0.,1.),3.);
  a=(facing>-.25?1.:.25)*(.7+1.6*wave)*(1.-.35*tier)*(.8+.4*uGlow)*(1.-.6*smoothstep(.85,1.,u))*1.8;
  vHot=step(.9,aSeed.w)*wave; vSoft=.12+.2*tier;
 } else if(aKind<7.5){ // large soft bokeh specks riding the body
  a=(facing>-.1?1.:.2)*.07*mix(1.,tw,uLive); vSoft=2.;
 } else if(aKind<8.5){ // pearl-white face mask: the muzzle and cheeks hold a little light
  a=(facing>0.?1.:.1)*(.38+.6*edge)*mix(1.,tw,uLive)*uRimGain*(1.-.4*uHue); vHot=step(.9,aSeed.w)*.6; vSoft=.3; minPx=uMinPx*.8;
 } else if(aKind<9.5){ // interior volume: fine specks, white-hot by the pearl, breathing on the beat
  a=aSeed.w*3.*mix(1.,tw,uLive)*(1.+uBeat*.6)*lum*(1.-.45*uHue); vHot=aDir.x; vSoft=.22;
 } else if(aKind<10.5){ // iris rim: a dense ring of champagne light around a dark pupil
  a=uEyeOpen*(1.-uHappyEyes)*aSeed.w*(.85+.3*uGlow)*(1.+.3*uSmall); vHot=step(.82,aSeed.z)*.7; vSoft=.22; minPx=uMinPx*(.75+.6*uSmall);
 } else if(aKind<11.5){ // soft additive glow (eye bloom / inner-ear glow)
  a=aSeed.w*(.8+.4*uGlow)*(aDir.x>.5?uEyeOpen*(1.-uHappyEyes):1.); vSoft=3.;
 } else { // pupil disc: silhouette pass only
  a=0.;
 }
 // combo nacre: the light runs through the rose -> aqua -> lapis ramp; a
 // quarter of the specks stay white-hot cores
 // the clear's hue wave: a front runs out from the pearl (uWave 0..1), the
 // cleared tile's colour fills in behind it and decays back to champagne;
 // a quarter of the specks stay white-hot, the pearl's own dust keeps its colour
 vec3 nac=nacre(aSeed.y*.5+p.y*.3+p.x*.12-uTime*.16);
 float hueK=(aKind>2.5&&aKind<5.5)||(aKind>7.5&&aKind<8.5)||(aKind>9.5&&aKind<10.5)?.3:.95;
 float dpl=length(p-uPearlP), front=uWave*2.2;
 float behind=smoothstep(front+.06,front-.3,dpl);
 // push 2: the body stays champagne. The clear's colour lives ONLY in a band
 // that travels out from the pearl (a ring ~.45 wide behind the front) and in
 // the emitted ribbon / shed specks; behind the band the fur is back to gold
 // within a few frames (a reaction reads as motion, never as a palette swap)
 float band=smoothstep(front+.05,front-.08,dpl)*smoothstep(front-.6,front-.18,dpl);
 float crest=exp(-(dpl-front)*(dpl-front)/.008)*(1.-uWave*uWave)*uWaveTint;
 float wk=uWaveTint*(band+.08*behind)*hueK*step(.25,aSeed.x)*(pi==${W.PEARL}?0.:1.);
 vColor=mix(aColor,mix(uClearCol,nac,.15),min(1.,wk*(aKind>8.5&&aKind<9.5?.5:.85)));
 // the quarter the hue skips burns white-hot ON the band only
 vColor=mix(vColor,vec3(1.,.97,.93),uWaveTint*band*hueK*(1.-step(.25,aSeed.x))*.85);
 // thumbnail LOD: half the count, the rest grow to carry the light
 float keep=aKind<.5||(aKind>8.5&&aKind<9.5)?step(uThin*.5,fract(aSeed.x*7.31)):1.;
 // small frames: the interior thins so the face and the silhouette carry the read
 if(aKind>8.5&&aKind<9.5) a*=1.-.15*uSmall;
 // thumbnails: the pearl's own dust stays faint so the pearl reads as a jewel, not a starburst
 if(pi==${W.PEARL}) a*=1.-.65*uThin;
 a*=1.+crest*.9*step(aKind,9.5);
 // at a peak the fur and the interior over the face hold back (<= 35% extra), so
 // the eyes and the muzzle keep their contrast on any wash
 if(aKind<.5||(aKind>8.5&&aKind<9.5)) a*=1.-fprot*(.25+.45*uHue);
 vAlpha=min(a*keep*(1.+uPulse*.3)*(1.-.5*pk)*(1.-.35*clamp(uDust,0.,1.))*uBright,aKind<.5?1.5:aKind>8.5&&aKind<9.5?.9:aKind>2.5&&aKind<3.5?4.:1.6);
 float ps=aSize*uPx*(.8+edge*.35+pk*.35+dk*.4+lk*.25)*uBoost*(1.+uThin*.45*step(aKind,.5))/-mv.z;
 if(uOverlay>.5){
  // the face overlay (drawn AFTER the bloom / tonemap, at fixed contrast): eyes,
  // catch-lights, happy arcs, lids, whiskers. Pass 1 lays a dark under-shadow
  // halo (~.4), pass 2 the crisp light; a wash can never flatten the face
  float ov=(aKind>2.5&&aKind<5.5)?1.:0.;
  float oa=clamp(a,0.,1.)*ov*keep*(1.-clamp(dk,0.,1.));
  vAlpha=oa*.9;
  ps=max(ps,minPx)*.85;
  minPx=1.25;
  vColor=mix(vColor,vec3(1.,.97,.9),.4);
 }
 if(uShadow>.5){
  // silhouette pass: umber, normal-blended, only on the rim and the pupils;
  // the interior is never covered (it can not read as a cutout)
  // (the happy arcs get a soft umber halo too, so they read on a bright wash)
  // face lines, happy arcs and the iris never get a dark halo (only the pupil disc)
  float sa=aKind<.5?(.55+.45*smoothstep(.45,.9,rim))*(facing>-.05?1.:0.)*(1.-.7*aDir.z):aKind>11.5?uEyeOpen*(1.-uHappyEyes)*1.4:0.;
  vAlpha=(aKind>11.5?sa*.65:sa*uShadowA)*keep*(1.-clamp(dk+pk*3.,0.,1.));
  vColor=aKind>11.5?vec3(.02,.012,.01):vec3(.2,.12,.06); vHot=aKind>11.5?.88:.25; vSoft=3.;
  ps*=aKind>11.5?1.:3.4;
  minPx=2.;
 }
 gl_PointSize=keep<.5||vAlpha<.002?0.:clamp(max(ps,minPx),max(1.,uMinPx*.8),128.);
 vSoft=vSoft<1.5?min(1.,vSoft+pk):vSoft;
 gl_Position=projectionMatrix*mv;
 vec2 ndc=gl_Position.xy/gl_Position.w;
 vAlpha*=1.-smoothstep(.72,.9,max(abs(ndc.x),abs(ndc.y)));

}`,Rt=`
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
void main(){
 vec2 q=gl_PointCoord*2.-1.; float d=dot(q,q); if(d>1.)discard;
 float core, halo;
 if(vStr>.05){ // a velocity-aligned streak: long along its axis, thin across
  float ca=cos(vAng), sa=sin(vAng);
  vec2 r=vec2(ca*q.x+sa*q.y, -sa*q.x+ca*q.y);
  float th=mix(8.,260.,vStr), lg=mix(2.2,2.6,vStr);
  core=exp(-r.x*r.x*lg-r.y*r.y*th); halo=exp(-r.x*r.x*lg-r.y*r.y*th*.15)*.14*(.5+vSoft);
 } else if(vSoft>2.5){ // pure soft glow
  core=0.; halo=exp(-d*3.2)*(1.-d);
 } else if(vSoft>1.5){ // bokeh disc with a brighter lip
  core=0.; halo=(1.-smoothstep(.6,1.,sqrt(d)))*(.65+.35*smoothstep(.3,.9,d));
 } else {
  core=exp(-d*16.); halo=exp(-d*3.6)*.4*vSoft;
 }
 float a=(core+halo)*vAlpha;
 vec3 c=mix(vColor,vec3(1.),clamp(core*(.25+vHot),0.,1.));
 c=c/(1.+max(c.r,max(c.g,c.b))*.6)*1.6;
 gl_FragColor=vec4(c,a);
}`,zt=`
uniform float uOverlay; uniform float uOvGain;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
void main(){
 vec2 q=gl_PointCoord*2.-1.; float d=dot(q,q); if(d>1.)discard;
 float a=vAlpha*(exp(-d*7.)+.25*exp(-d*2.5)*(1.-d)); vec3 c=vColor*a*uOvGain; gl_FragColor=vec4(c,max(c.r,max(c.g,c.b)));
}`,Bt=`
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
void main(){
 vec2 q=gl_PointCoord*2.-1.; float d=dot(q,q); if(d>1.)discard;
 float a=min(vHot,(vHot>.5?1.-smoothstep(.55,1.,d):exp(-d*2.2)*(1.-d))*vAlpha); // rim <= 25%; the pupil is a dark eye, not a body fill
 gl_FragColor=vHot>.5?vec4(vColor,a):vec4(vColor*a,a);
}`,Vt=`
uniform float uTime; uniform float uPx; uniform float uPulse; uniform float uLive; uniform float uBreath; uniform float uRibbon;
uniform float uArcAge; uniform float uArcSide; uniform float uArcPow; uniform float uSpill;
uniform float uLandAge; uniform vec3 uPearl; uniform vec3 uMuzzle; uniform float uEnergy; uniform float uBright; uniform float uExhaleAge; uniform float uExhaleSeed; uniform float uBoost;
uniform float uStream; uniform vec3 uTarget; uniform float uHue; uniform float uOrbit; uniform float uBokeh; uniform vec3 uClearCol; uniform vec3 uFace; uniform float uLodK; uniform float uMinFx;
attribute vec4 aData; attribute vec4 aSeed; attribute float aKind;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
vec3 gold(float s){ return s<.42?vec3(1.,.97,.92):s<.8?vec3(1.,.84,.58):vec3(1.,.72,.42); }
${Mt}
void main(){
 vec3 p; vec3 vel=vec3(0.); float a=0.; float size=aData.w; vHot=0.; vSoft=1.; vColor=gold(aSeed.x); vAng=0.; vStr=0.;
 float t=uTime*uLive;
 if(aKind<.5){ // drifting gold motes
  vec3 h=aData.xyz; float ang=t*(.04+.06*aSeed.y)*(aSeed.z>.5?1.:-1.);
  h.xz=mat2(cos(ang),-sin(ang),sin(ang),cos(ang))*h.xz;
  p=vec3(0.,1.05,0.)+h*(1.+.05*uBreath)+.07*vec3(sin(t*.7+aSeed.w*20.),sin(t*.5+aSeed.y*17.),cos(t*.6+aSeed.z*13.));
  a=(.22+.3*(.5+.5*sin(t*(1.+aSeed.w*3.)+aSeed.x*40.)))*(.65+uEnergy*.25)*(1.-.55*uHue);
  vHot=step(.9,aSeed.w);
  vColor=mix(vColor,mix(uClearCol,vec3(1.),.45),uHue*.85);
 } else if(aKind<1.5){ // two orbit rings of particle dust (no line primitive, no streak)
  // Every speck has its own angle on the ring and a Gaussian radial offset; a
  // comet head runs round it and the dust behind it glows with a falloff along
  // the direction of motion, so the ring reads as a swarm, never as a stroke.
  // Both rings ride LOW (haunches / feet): the near arc passes under the paws
  // and the pearl, the far arc climbs behind the body, where the shell's depth
  // pre-pass occludes it, so a ring never crosses the face, muzzle or chest.
  float side=aData.y, dirn=side>.5?-1.:1.;
  float head=uOrbit*(side>.5?-1.12:1.)+side*2.4;
  float ang=aData.x*6.2832+t*.03*dirn*(.5+aSeed.y);
  float rad=(side>.5?.84:1.02)*(1.+aData.z*.045)+.02*sin(ang*3.+t*.6+side*2.);
  float yc=side>.5?.42:.3, kx=side>.5?.3:.24;
  float zr=sin(ang)*rad*.85;
  p=vec3(cos(ang)*rad,yc-kx*zr+(aSeed.z-.5)*.035*(1.+abs(aData.z)),zr);
  // how far behind the comet head this speck sits (0 at the head, 1 a full turn back)
  float behind=fract((head-ang)*dirn/6.2832);
  float comet=exp(-behind*4.2), headK=exp(-behind*behind*1400.);
  float core=exp(-aData.z*aData.z*1.6);
  float flow=.75+.25*sin(behind*40.-uTime*2.*uLive+aSeed.x*6.);
  a=(.3+2.6*comet*flow+headK*3.)*(.35+.65*core)*uRibbon*(side>.5?.7:1.);
  // depth: the far arc runs BEHIND the body at ~35% (and the depth pre-pass hides it where the body covers it)
  float zf=sin(ang);
  a*=mix(1.,.35,1.-smoothstep(-.1,.2,zf));
  size*=(.85+.7*comet+.8*headK)*(1.+.3*max(zf,0.));
  vSoft=.3+.3*max(zf,0.);
  vColor=mix(vec3(1.,.76,.46),vec3(1.,.95,.86),comet);
  vColor=mix(vColor,vec3(1.,.98,.95),headK);
  vColor=mix(vColor,mix(uClearCol,nacre(behind*.8+side*.5-uTime*.1),.3),uHue*.8);
  vHot=max(step(.93,aSeed.w)*comet,headK);
 } else if(aKind<2.5){ // the clear: one silk arc from the pearl toward the board
  float s=aData.x, w=aData.y;
  float age=uArcAge;
  float head=1.-exp(-max(age,0.)*3.4), tail=1.-exp(-max(age-.22,0.)*2.4);
  // one silk loop: it leaves the pearl, rises out to the clear's side and comes
  // down toward the clear, staying inside the frame (never a detached bar)
  // (push 2: it arcs OUT and settles, never a long vertical drop onto the
  // board; a wide silk ~2x the old width that breaks up into specks along its
  // length and dissolves before its end, so no hard crescent / streak reads)
  vec3 P0=uPearl, P1=uPearl+vec3(uArcSide*.85,.8,.4), P2=uPearl+vec3(uArcSide*1.25,-.12,.55);
  vec3 b=mix(mix(P0,P1,s),mix(P1,P2,s),s);
  vec3 tg=normalize(mix(P1-P0,P2-P1,s));
  vec3 side=normalize(cross(tg,vec3(0.,0.,1.)));
  float tw=sin(s*10.-age*6.+aSeed.z*3.);
  vec3 jit=(aSeed.xyz-.5)*vec3(1.,1.,.6);
  p=b+side*w*.2*(.45+.55*tw)+vec3(0.,0.,w*.05)+jit*(.04+.2*s*s+.12*smoothstep(.3,1.2,age))+vec3(0.,.1*s*smoothstep(.4,1.4,age),0.);
  // the tail never retracts past 45% of the way behind the head: the whole silk
  // fades as one, so no straight end-piece is ever left floating on its own
  tail=min(tail,max(0.,head-.45));
  float body=smoothstep(tail,tail+.2,s)*(1.-smoothstep(head-.08,head,s))*smoothstep(0.,.2,s);
  float tq=(s-head+.04)*14.; float tip=exp(-tq*tq);
  a=step(0.,age)*(body*(.3+.5*exp(-w*w*25.))+tip*.55*smoothstep(0.,.2,s))*uArcPow*(1.-smoothstep(.9,1.6,age))*1.7*(1.-smoothstep(.55,1.,s));
  vColor=mix(vec3(1.,.84,.56),vec3(1.,.97,.92),tip+exp(-w*w*40.)*.5);
  vColor=mix(vColor,mix(uClearCol,vec3(1.),.3+.5*tip),uHue*.75);
  vHot=tip*.5*(1.-s); vSoft=.6;
  size*=(1.3+tip*.4)*(1.+.5*s);
 } else if(aKind<3.5){ // the ground: a ring of drifting gold dust (no fill), rippling on each landing
  float ang=aData.x+t*(.05+.05*aSeed.y)*(aSeed.z>.5?1.:-1.), ring=aData.y;
  float r=.36+.3*ring+.03*sin(ang*3.+t*.8+aSeed.w*6.);
  float rip=uLandAge<1.2?(.3+uLandAge*1.1):0.;
  float lift=.04*aSeed.w*(.5+.5*sin(t*.9+aSeed.x*30.));
  p=vec3(cos(ang)*r,.01+lift,sin(ang)*r*.55+.05);
  // depth: the far side of the ring is dimmer and finer
  float zf=sin(ang);
  a=.3*(1.-abs(ring-.45)*1.2)*(.55+.45*sin(t*1.5+aSeed.x*40.))*(1.+uPulse*.5)*mix(.35,1.,.5+.5*zf);
  size*=mix(.7,1.15,.5+.5*zf);
  if(rip>0.){ float d=abs(r-rip); a+=exp(-d*d*120.)*(1.-uLandAge/1.2)*.6; }
  vHot=step(.92,aSeed.w);
  vColor=mix(vec3(1.,.78,.48),vec3(1.,.93,.82),aSeed.y);
 } else if(aKind<4.5){ // three depth tiers of large soft bokeh discs (parallax against the camera drift)
  p=aData.xyz+vec3(sin(t*.07+aSeed.x*9.)*.12,sin(t*.05+aSeed.y*7.)*.08,0.);
  a=uBokeh*(.03+.035*aSeed.z)*(.75+.25*sin(t*.3+aSeed.w*20.));
  vSoft=2.; vColor=aSeed.w<.62?vec3(1.,.84,.6):aSeed.w<.82?vec3(1.,.66,.8):vec3(.6,.9,1.);
 } else if(aKind<5.5){ // breath: motes leave the muzzle on the bar's downbeat
  float age=uExhaleAge-aSeed.x*.45;
  vec3 dir=normalize(vec3((aSeed.y-.5)*.9,.35+aSeed.z*.5,1.));
  float k=1.-exp(-max(age,0.)*1.6);
  float sw=fract(aSeed.w+uExhaleSeed*.618)*6.28;
  p=uMuzzle+dir*k*(.35+.45*aSeed.w)+vec3(sin(age*2.+sw)*.04,.12*k*k,0.);
  float life=clamp(1.-age/2.,0.,1.);
  a=step(0.,age)*smoothstep(0.,.15,age)*life*life*.75*uLive;
  vHot=step(.8,aSeed.w)*life;
  size*=.8+.6*(1.-life);
 } else if(aKind<6.5){ // pearl spill: a gold / nacre bloom that drifts up and dissolves
  float age=uArcAge*(.8+.4*aSeed.w);
  vec3 dir=normalize(aData.xyz);
  float k=1.-exp(-max(age,0.)*3.2);
  p=uPearl+dir*k*(.22+.36*aSeed.y)*(1.+uHue*.2)+vec3(0.,.08*k,0.)-vec3(0.,.1*age*age,0.);
  float life=clamp(1.-age/1.3,0.,1.);
  a=step(aSeed.z,uSpill)*life*life*.42*step(0.,age);
  vHot=exp(-age*3.)*step(.6,aSeed.w);
  vColor=mix(vColor,mix(uClearCol,nacre(aSeed.y*.9+uTime*.1),.25),uHue*step(.3,aSeed.x));
 } else { // directed stream: light pours from the pearl toward the clear in curl-noise filaments
  float s=fract(aData.x+uArcAge*(.55+.35*aSeed.w));
  float on=step(aSeed.z,uStream)*step(0.,uArcAge)*(1.-smoothstep(1.2,1.9,uArcAge));
  // from the pearl, an eased arc (up and out, then down onto the clear) with curl
  vec3 P0=uPearl, P2=uTarget+vec3(0.,.35,0.), P1=mix(P0,P2,.35)+vec3(0.,.55+aData.y*.12,.5);
  float se=s*s*(3.-2.*s)*.35+s*.65;
  vec3 b=mix(mix(P0,P1,se),mix(P1,P2,se),se);
  float q=s*6.+aSeed.y*9.+uTime*.9;
  vec3 cn=vec3(sin(q*1.3+aSeed.w*7.)+.5*sin(q*2.7),cos(q*1.1+aSeed.x*5.)+.5*cos(q*2.3),sin(q*.9+aSeed.z*6.));
  p=b+cn*(.03+.16*s*s)*(.6+.4*aData.z);
  a=on*smoothstep(0.,.2,s)*(1.-smoothstep(.5,.9,s))*.5*(.6+.4*aSeed.x);
  vHot=step(.8,aSeed.w)*(1.-s);
  vSoft=.45;
  vColor=mix(vec3(1.,.9,.7),mix(uClearCol,nacre(aSeed.y*.6+s*.45),.25),uHue*.9);
  size*=1.-.4*s;
 }
 // the face is protected: free light crossing the eyes / muzzle drops to <= 35%
 if(aKind<2.5||aKind>5.5){ vec2 fd=(p.xy-uFace.xy)/vec2(.3,.2); a*=mix(.35,1.,smoothstep(.75,1.25,length(fd))+step(p.z,uFace.z-.25)); }
 vec4 mv=viewMatrix*vec4(p,1.);
 gl_PointSize=clamp(size*uPx*(aKind>3.5&&aKind<4.5?1.:uBoost)*(vStr>0.?1.9:1.)/-mv.z,uMinFx,140.);
 gl_Position=projectionMatrix*mv;
 if(vStr>0.){ // streak along the projected velocity
  vec4 c1=projectionMatrix*(viewMatrix*vec4(p+normalize(vel)*.05,1.));
  vec2 sd=c1.xy/c1.w-gl_Position.xy/gl_Position.w; vAng=atan(-sd.y,sd.x);
  a*=1.6;
 }
 vec2 ndc=gl_Position.xy/gl_Position.w; float rad=gl_PointSize/(uPx*.4);
 // fade before the frame edge so no halo is ever cut square
 vAlpha=a*(aKind>3.5&&aKind<4.5?1.:uLodK)*(1.+uPulse*.4)*uBright*(1.-smoothstep(.62,.92,max(abs(ndc.x),abs(ndc.y))+rad*.5));
}`,Ht=`varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,Ut=`
uniform float uI; varying vec2 vUv;
void main(){ vec2 q=vUv*2.-1.; float d=length(q*vec2(1.,.9));
 float g=(exp(-d*d*5.)*.7+exp(-d*d*1.6)*.3)*(1.-smoothstep(.5,.98,d));
 vec3 c=mix(vec3(1.,.8,.5),vec3(.5,.36,.2),smoothstep(.1,.9,d));
 gl_FragColor=vec4(c*g*uI,g*uI*.2); }`,Wt=`
uniform sampler2D tIn; uniform vec2 uHalf; varying vec2 vUv;
void main(){
 vec4 c=texture2D(tIn,vUv)*4.;
 c+=texture2D(tIn,vUv+vec2(-uHalf.x,-uHalf.y))+texture2D(tIn,vUv+vec2(uHalf.x,-uHalf.y));
 c+=texture2D(tIn,vUv+vec2(-uHalf.x,uHalf.y))+texture2D(tIn,vUv+vec2(uHalf.x,uHalf.y));
 gl_FragColor=c*.125;
}`,Gt=`varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }`,Kt=`
uniform sampler2D tSrc; uniform sampler2D tB1; uniform sampler2D tB2; uniform sampler2D tB3; uniform sampler2D tB4;
uniform vec2 uTexel; uniform float uBloom; uniform float uHalo; uniform float uExpo; uniform float uWide; uniform float uSat; uniform float uBack;
// stage window (uv, y up): x0,y0,x1,y1 and per-side feather widths
uniform vec4 uWin; uniform vec4 uFea; uniform float uRound;
varying vec2 vUv;
vec3 up(sampler2D t, float k){ vec2 o=uTexel*k;
 return (texture2D(t,vUv+vec2(o.x,0.)).rgb+texture2D(t,vUv-vec2(o.x,0.)).rgb+texture2D(t,vUv+vec2(0.,o.y)).rgb+texture2D(t,vUv-vec2(0.,o.y)).rgb)*.25; }
void main(){
 vec4 base=texture2D(tSrc,vUv);
 vec3 b=up(tB1,2.)*.3+up(tB2,4.)*.28+up(tB3,8.)*(.24+.12*uWide)+up(tB4,16.)*(.2+.22*uWide);
 // combos: the colour lives in the bloom falloff (saturated), the cores stay white-hot
 float bl=dot(b,vec3(.2126,.7152,.0722)); b=max(mix(vec3(bl),b,1.+1.6*uSat),0.);
 vec3 hdr=max(base.rgb,0.)*uExpo+b*uBloom;
 // small HUD frames: a wide, low bloom halo (~25% of the figure) carries the read at 65 px
 hdr+=up(tB4,24.)*uHalo;
 float m=max(hdr.r,max(hdr.g,hdr.b));
 float mt=1.-exp(-1.3*m);
 vec3 col=m>1e-5?hdr*(mt/m):vec3(0.);
 col=mix(col,vec3(mt),smoothstep(.55,1.,mt)*.3*(1.-.4*uSat)); // white-hot cores, colour lives in the falloff
 // over a bright backdrop (screen-blended light washes toward pastel): richer,
 // lower-value cores so the hue and the face survive
 float bk=smoothstep(.35,.6,uBack);
 float cl=dot(col,vec3(.2126,.7152,.0722));
 // the gold rim saturates toward #ffb347 (never pastel); combos keep their own hue
 vec3 G=vec3(1.,.702,.278); vec3 tg=G*(cl/.7406);
 col=mix(col,min(tg,vec3(1.)),bk*.6*(1.-smoothstep(.4,.8,uSat))*(1.-smoothstep(.6,.9,cl)));
 col=mix(col,max(mix(vec3(cl),col,1.45)*.84,0.),bk*(1.-smoothstep(.55,.85,cl)));
 col=min(col,vec3(.97));
 float e=smoothstep(0.,.16,min(min(vUv.x,1.-vUv.x),min(vUv.y,1.-vUv.y)));
 // the host's stage window: everything (bloom, pool, motes) fades out before
 // its clip, so the HUD never shows a cut line or a lit rectangle
 e*=smoothstep(uWin.x,uWin.x+uFea.x,vUv.x)*smoothstep(uWin.z,uWin.z-uFea.z,vUv.x)*smoothstep(uWin.y,uWin.y+uFea.y,vUv.y)*smoothstep(uWin.w,uWin.w-uFea.w,vUv.y);
 // push 3 iter 2: a phrase dissolve throws dust toward the frame edges; the
 // square feather above then drew a lit rectangle. While dust is out the
 // frame is an ellipse that ends well inside the canvas.
 e*=mix(1.,1.-smoothstep(.27,.46,length((vUv-vec2(.5,.47))*vec2(1.,1.06))),uRound);
 col*=e;
 float occ=clamp(base.a,0.,1.)*.95*e;
 // over a bright wash the light ADDS (alpha well under its value): it reads as
 // light on the wash, never as a muddy dark cutout; the rim carries the contrast
 float lk=max(col.r,max(col.g,col.b))*(1.-.85*bk);
 float a=clamp(occ+lk*(1.-occ),0.,1.);
 a=max(a,lk);
 gl_FragColor=vec4(col,a);
}`,Y,qt=!1,Jt=e=>(e.transparent=!0,e.depthWrite=!1,e.blending=5,e.blendEquation=100,e.blendSrc=204,e.blendDst=201,e.blendSrcAlpha=200,e.blendDstAlpha=201,e);function Yt(e,t,n,r){let{pos:i,nrm:a,idx:o}=kt(e,t,n,r),s=new Float64Array(o.length/3),c=0;for(let e=0;e<o.length;e+=3){let t=o[e]*3,n=o[e+1]*3,r=o[e+2]*3,a=i[n]-i[t],l=i[n+1]-i[t+1],u=i[n+2]-i[t+2],d=i[r]-i[t],f=i[r+1]-i[t+1],p=i[r+2]-i[t+2];c+=.5*Math.hypot(l*p-u*f,u*d-a*p,a*f-l*d),s[e/3]=c}return{pos:i,nrm:a,idx:o,cdf:s,area:c}}function Xt(e,t,n,r){let i=t()*e.area,a=0,o=e.cdf.length-1;for(;a<o;){let t=a+o>>1;e.cdf[t]<i?a=t+1:o=t}let s=t(),c=t();s+c>1&&(s=1-s,c=1-c);let l=e.idx[a*3]*3,u=e.idx[a*3+1]*3,d=e.idx[a*3+2]*3,f=1-s-c;n.set(e.pos[l]*f+e.pos[u]*s+e.pos[d]*c,e.pos[l+1]*f+e.pos[u+1]*s+e.pos[d+1]*c,e.pos[l+2]*f+e.pos[u+2]*s+e.pos[d+2]*c),r.set(e.nrm[l]*f+e.nrm[u]*s+e.nrm[d]*c,e.nrm[l+1]*f+e.nrm[u+1]*s+e.nrm[d+1]*c,e.nrm[l+2]*f+e.nrm[u+2]*s+e.nrm[d+2]*c).normalize()}function Zt(){let e=new b({alpha:!0,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:`low-power`});e.setClearColor(0,0),e.setPixelRatio(1),e.setSize(256,256,!1),e.autoClear=!0;let t=e.extensions.has(`EXT_color_buffer_float`)||e.extensions.has(`EXT_color_buffer_half_float`),n={type:t?w:ee,generateMipmaps:!1,minFilter:u,magFilter:u},r=[0,1].map(()=>({rt:new l(256,256,{...n,depthBuffer:!0}),down:[128,64,32,16].map(e=>new l(e,e,{...n,depthBuffer:!1}))})),{rt:i,down:a}=r[0],p=new _,D=new h(2*Math.atan(ln.span/16)*180/Math.PI,1,1,30),O=ln.span/2-ln.feetFromBottom;D.position.set(0,O,8),D.lookAt(0,O,0);let k=[];for(let e=0;e<Ke;e++)k.push(new c);let A=new c;p.add(A);let j=k[W.BODY];A.add(j);let M=k[W.HEAD];M.position.set(0,.895,.05),j.add(M);let N=k[W.EAR_L];N.position.set(-.2,.3,-.05),N.rotation.set(-.14,.3,.7),M.add(N);let ne=k[W.EAR_R];ne.position.set(.2,.3,-.05),ne.rotation.set(-.14,-.3,-.7),M.add(ne);let re=k[W.PAW_L];re.position.set(-dt[0],dt[1],dt[2]),j.add(re);let ie=k[W.PAW_R];ie.position.set(dt[0],dt[1],dt[2]),j.add(ie);let P={x:.135,y:.19,z:.268};for(let[e,t]of[[-1,W.EYE_L],[1,W.EYE_R]]){let n=k[t];n.position.set(e*P.x,P.y,P.z),n.rotation.set(-.05,e*.42,e*Ge),M.add(n)}let F=k[W.TAIL];F.position.set(.24,.12,-.12),F.rotation.set(-1.25,.35,0),j.add(F);let ae=k[W.PEARL];ae.position.set(0,Xe,Ze),j.add(ae),A.updateMatrixWorld(!0);let oe=new f;oe.position.set(0,-.04,.4),M.add(oe);let I={body:Yt(ut,[-.62,-.05,-.45],[.62,1.05,.5],.028),head:Yt(yt,[-.45,-.17,-.35],[.45,.52,.5],.026),ear:Yt(Ct,[-.34,-.05,-.12],[.34,1.06,.12],.022),tail:Yt(Tt,[-.34,-.34,-.34],[1.32,.34,.34],.026),pawL:Yt(pt,[-.12,-.25,-.1],[.25,.1,.36],.016),pawR:Yt(mt,[-.25,-.25,-.1],[.12,.1,.36],.016)},se=e=>new te().copy(e.matrixWorld).invert(),L=[{part:W.BODY,f:ut,m:se(j)},{part:W.HEAD,f:yt,m:se(M)},{part:W.EAR_L,f:Ct,m:se(N)},{part:W.EAR_R,f:Ct,m:se(ne)},{part:W.PAW_L,f:pt,m:se(re)},{part:W.PAW_R,f:mt,m:se(ie)}],R=new E,ce=(e,t)=>{let n=9;for(let r of L)r.part!==t&&(R.copy(e).applyMatrix4(r.m),n=Math.min(n,r.f(R.x,R.y,R.z)));return n},le=(e,t,n,r,i)=>{r.copy(t),i&&n&&i.copy(n),e===W.TAIL&&Ot(r,i,Je,Ye),r.applyMatrix4(k[e].matrixWorld),i&&i.transformDirection(k[e].matrixWorld)},ue=(e,t,n=!1)=>{let r=new S({vertexShader:jt,fragmentShader:Nt,transparent:!0,depthWrite:!1,side:0,uniforms:{uTint:{value:new E(...e)},uRim:{value:t},uGlow:{value:0},uBright:{value:1},uBend:{value:+!!n},uTail:{value:new m(Je,0,0,Ye)},uBones:{value:[,,,,,].fill(0)},uBonesV:{value:[,,,,,].fill(0)},uTime:{value:0},uNacre:{value:0},uHueAt:{value:.33},uPearlW:{value:new E},uPearlI:{value:.5},uClearCol:{value:new E(1,.5,.7)},uMask:{value:0}}});return r.blending=5,r.blendEquation=100,r.blendSrc=201,r.blendDst=201,r.blendSrcAlpha=201,r.blendDstAlpha=201,r.blendEquationAlpha=104,r},de=ue(Qe,.8),fe=ue(G,.9),pe=ue(Qe,.85,!0),me=[de,fe,pe],he=[],ge=new E,_e=(e,t,n)=>{let r=new C;r.setAttribute(`position`,new x(e.pos,3)),r.setAttribute(`normal`,new x(e.nrm,3)),r.setIndex(e.idx);let i=new Float32Array(e.pos.length/3);for(let n=0;n<i.length;n++){R.set(e.pos[n*3],e.pos[n*3+1],e.pos[n*3+2]),le(t,R,null,ge,null);let r=ce(ge,t);i[n]=Math.max(0,Math.min(1,(r+.005)/.05))}r.setAttribute(`aVis`,new x(i,1));let a=new s(r,n);if(a.renderOrder=0,a.frustumCulled=!1,k[t].add(a),t!==W.PAW_L&&t!==W.PAW_R){let e=new S({vertexShader:jt,fragmentShader:`void main(){ gl_FragColor=vec4(0.); }`,uniforms:n.uniforms,colorWrite:!1,depthWrite:!0,depthTest:!0}),i=new s(r,e);i.renderOrder=-2,i.frustumCulled=!1,i.name=`depth`,k[t].add(i),he.push(i)}};_e(I.body,W.BODY,de),_e(I.head,W.HEAD,de),_e(I.ear,W.EAR_L,fe),_e(I.ear,W.EAR_R,fe),_e(I.tail,W.TAIL,pe),_e(I.pawL,W.PAW_L,de),_e(I.pawR,W.PAW_R,de);let ve=new y(1,40,28),ye=new S({vertexShader:Pt,fragmentShader:Ft,uniforms:{uTime:{value:0},uGlow:{value:0},uCap:{value:1.2},uTintC:{value:new E(1,1,1)},uTintK:{value:0},uSpec:{value:3.5}},transparent:!0}),be=new s(ve,ye);be.scale.setScalar(.13),ae.add(be);let xe=[k[W.EYE_L],k[W.EYE_R]],Se=[...xe],Ce=Jt(new S({vertexShader:Pt,fragmentShader:It,depthTest:!1})),we=new s(ve,Ce);we.position.set(ht[0],ht[1]+.014,ht[2]-.006),we.scale.set(.026,.018,.016),we.renderOrder=2,M.add(we);let z=et(854946),Te=[],Ee=[],De=[],Oe=[],ke=[],Ae=[],je=[],Me=[],B=(e,t,n,r,i,a,o=[0,1,0],s=z())=>{Te.push(e.x,e.y,e.z),Ee.push(t.x,t.y,t.z),De.push(n),Oe.push(z(),z(),z(),s);let c=.85+z()*.25;ke.push(Math.min(1,r[0]*c),Math.min(1,r[1]*c),Math.min(1,r[2]*c)),Ae.push(i),je.push(a),Me.push(...o)},Ne=()=>{let e=0;for(let t=0;t<4;t++)e+=z();return(e-2)*1.732},Pe=()=>Math.min(.06,Math.max(.005,.0135*Math.exp(.5*Ne()))),Fe=new E(0,.05,1).normalize(),V=new E,H=new E,U=new E,Ie=new E,Le=(e,t)=>{let n=L.find(e=>e.part===t);return R.copy(e).applyMatrix4(n.m),n.f(R.x,R.y,R.z)},Re=(e,t)=>t===W.BODY?1-X(0,.1,Le(e,W.HEAD)):t===W.HEAD?(1-X(0,.24,Le(e,W.BODY)))*(1-X(.87,.97,e.y)):0,ze=(e,t,n,r,i=()=>0)=>{let a=0,o=0;for(;a<n&&o<n*14;){if(o++,Xt(e,z,V,H),le(t,V,H,U,Ie),ce(U,t)<.004)continue;let n=1-Math.abs(Ie.dot(Fe)),s=Re(U,t),c=(.14+.86*Math.max(0,Math.min(1,(n-.1)/.6))**1.5)*(1-.5*s);if(z()>Math.max(c,i(V)))continue;let l=z()<.005,u=!l&&z()<.22?-Math.log(1-z()*.95)*.016:0;u&&V.addScaledVector(H,u);let d=!u&&!l&&z()<.3?-Math.log(1-z()*.96)*.03:0;d&&V.addScaledVector(H,-d),B(V,H,t,z()<.08?q:r(V,H),l?.055+z()*.035:Pe()*(u?.75:d?.8:1),l?7:0,[0,1,Math.max(s,d?Math.min(.75,d/.06):0)]),a++}},Be=(e,t,n)=>e.some(e=>e(t.x,t.y,t.z)<n),Ve=(e,t)=>Be(t,e,.012)?z()<.6?K:G:z()<.55?Qe:G,tt=1300;ze(I.body,W.BODY,Math.round(I.body.area*tt*.4),e=>Ve(e,it),e=>Be(it,e,.01)?.3:0);let rt=[-1,1].map(e=>nt([e*.085,.155,.28],[e*.05,-0,.33],.02,.016)),ot=Math.round(I.head.area*tt*.6);{let e=0,t=0;for(;e<ot&&t<ot*14;){if(t++,Xt(I.head,z,V,H),le(W.HEAD,V,H,U,Ie),ce(U,W.HEAD)<.004||rt.some(e=>e(V.x,V.y,V.z)<.004))continue;if(V.z>.15){let e=Math.abs(V.x)-P.x,t=V.y-P.y,n=Math.cos(Ge),r=Math.sin(Ge),i=(n*e+r*t)/(.1*.91*1.12),a=(-r*e+n*t)/.076,o=He(Math.min(.999,Math.abs(i)));if(Math.abs(i)<1&&(a>0?a/(Ue*o):-a/(We*o))<1.15)continue}let n=1-Math.abs(Ie.dot(Fe)),r=(.07+.93*Math.max(0,Math.min(1,(n-.12)/.6))**1.4)*(1-.5*Re(U,W.HEAD)),i=gt[2](V.x,V.y,V.z)<.012&&V.z>.25,a=i?.4:Be(gt,V,.01)&&H.z>.2?V.z>.3?.6:.45:0;if(z()>Math.max(r,a))continue;let o=a>0&&z()<(i?.6:.7)?8:0,s=o===0&&z()<.3?-Math.log(1-z()*.96)*.028:0;s&&V.addScaledVector(H,-s),B(V,H,W.HEAD,z()<.08?q:i?G:Ve(V,gt),Pe()*(i||s?.8:1),o,[0,1,Math.max(Re(U,W.HEAD),s?Math.min(.75,s/.06):0)]),e++}}for(let e=0,t=0;e<120&&t<6e4;t++){Xt(I.head,z,V,H);let t=V.y>.04&&V.y<.17&&Math.abs(V.x)<.022+(.17-V.y)*.22&&V.z>.24;if(!(gt[2](V.x,V.y,V.z)<.01&&V.z>.27||t)||H.z<.15||(le(W.HEAD,V,H,U,Ie),ce(U,W.HEAD)<.004||rt.some(e=>e(V.x,V.y,V.z)<.006)))continue;let n=X(.3,.39,V.z),r=z()<.15?q:z()<.5?K:G,i=(.006+z()*.005)*(1-.4*n);B(V,H,W.HEAD,r,i,8,[0,1,0]),V.x=-V.x,H.x=-H.x,B(V,H,W.HEAD,r,i,8,[0,1,0]),e+=2}{let e=Math.round(I.tail.area*tt*.55),t=[.66,.38,.19],n=0,r=0;for(;n<e&&r<e*14;){if(r++,Xt(I.tail,z,V,H),le(W.TAIL,V,H,U,Ie),ce(U,W.TAIL)<.004)continue;let e=V.x/qe,i=1-Math.abs(Ie.dot(Fe)),a=(.06+.94*Math.max(0,Math.min(1,(i-.12)/.6))**1.4)*(e>.86?.75:1);if(z()>a)continue;let o=z()<.55+.35*X(.75,.95,e)?-Math.log(1-z()*.95)*(.02+.02*e+.05*X(.8,1,e)):0;o&&(V.addScaledVector(H,o),V.x+=o*1.8);let s=Math.max(0,Math.min(1,(e-.68)/.25)),c=z()<.07*(1-s)?q:z()<.6?Qe:G;B(V,H,W.TAIL,[c[0]+(t[0]-c[0])*s,c[1]+(t[1]-c[1])*s,c[2]+(t[2]-c[2])*s],Pe()*(o?.75:1),0),n++}}let lt=J([0,.5,0],bt),ft=(e,t)=>{let n=.06;for(let r=0;r<6;r++){let r=lt(e/xt(t),t,n+St(e,t));n-=r*.8}return n};for(let e of[W.EAR_L,W.EAR_R]){ze(I.ear,e,Math.round(I.ear.area*tt*.42),()=>z()<.6?G:Qe);for(let t=0;t<620;t++){let t=z()*Math.PI*2,n=.5+Math.sin(t)*bt[1]*.985;if(n<.12)continue;let r=Math.cos(t)*bt[0]*xt(n)*.985,i=-St(r,n)+(z()-.5)*.02;V.set(r,n,i),H.set(Math.cos(t),Math.sin(t)*.5,.15).normalize(),B(V,H,e,z()<.15?q:G,.01+z()*.014,0)}let t=e=>{let t=Math.max(0,Math.min(1,(e-.08)/.8));return[1-.22*t,.7+.24*t,.6+.32*t]};for(let n=0,r=0;n<560&&r<9e3;r++){let r=.08+z()*.82,i=z()*2-1,a=Math.abs(i)**3,o=1-(r-.08)/.82;if(z()>.12+.5*a+.6*o*o)continue;let s=i*.94*bt[0]*xt(r);V.set(s,r,ft(s,r)+.004),H.set(0,0,1),B(V,H,e,z()<.12?K:t(r),.0055+z()*.0045,2),n++}for(let n=0;n<300;n++){let n=Math.PI*(.5+(z()*2-1)*.9),r=.5+Math.sin(n)*bt[1]*.74-.04;if(r<.1)continue;let i=X(.1,.85,r),a=Math.cos(n)*bt[0]*xt(r)*.6;V.set(a,r,ft(a,r)+.008),H.set(Math.cos(n),Math.sin(n)*.5,.15).normalize(),B(V,H,e,z()<.25?K:t(r),(.006+z()*.006)*(1.1-.35*i),0,[0,1,.45])}for(let n=0;n<7;n++){let r=-.62+n*.207+(z()-.5)*.04,i=.86-Math.abs(r)*.3;for(let n=0;n<3;n++){let a=[78,40,22][n];for(let o=0;o<a;o++){let a=z()**.85,o=.07+a*(i-.07),s=Ne()*[.004,.012,.026][n],c=(r*(1-.15*a)+s*4)*bt[0]*xt(o)*.92;V.set(c,o,ft(c,o)+.006+n*.004),H.set(0,0,1),B(V,H,e,z()<.3?K:t(o),[.0065,.008,.011][n]*(.8+z()*.5),6,[a,n/2,.6+n*.7])}}}}ze(I.pawL,W.PAW_L,Math.round(I.pawL.area*tt*3.2),()=>z()<.65?K:G),ze(I.pawR,W.PAW_R,Math.round(I.pawR.area*tt*3.2),()=>z()<.65?K:G);let _t=(e,t,n,r)=>{for(let i=0;i<r;i++){let r=z()*2-1,a=z()*Math.PI*2,o=Math.sqrt(1-r*r);H.set(o*Math.cos(a),o*Math.sin(a),r);let s=1-Math.abs(H.z);z()>.2+.8*s||H.y<-.5?i--:(V.set(t[0]+H.x*n[0],t[1]+H.y*n[1],t[2]+H.z*n[2]),B(V,H,e,z()<.5?K:G,.01+z()*.016,0))}};for(let e of[-1,1]){for(let t=0;t<4;t++)_t(W.BODY,[e*.2+(t-1.5)*.034,.048,.35-Math.abs(t-1.5)*.012],[.015,.016,.016],30);for(let t=0;t<70;t++){let t=z();V.set(e*(.17+.03*t)+(z()-.5)*.012,.09-.02*t+(z()-.5)*.006,.02+.3*t),H.set(e*.3,.9,.2).normalize(),B(V,H,W.BODY,z()<.5?K:G,.008+z()*.008,0)}}for(let[e,t]of[[W.PAW_L,-1],[W.PAW_R,1]])for(let n=0;n<3;n++)_t(e,[-t*.112+(n-1)*.026*-t,-.12+Math.abs(n-1)*.008,.3],[.012,.012,.012],22);let vt=(e,t,n,r,i,a,o=1)=>{let s=0,c=0;for(;s<i&&c<i*60;){c++,V.set(n[0]+z()*(r[0]-n[0]),n[1]+z()*(r[1]-n[1]),n[2]+z()*(r[2]-n[2]));let i=e(V.x,V.y,V.z);if(i>-.012||t===W.HEAD&&Math.hypot((Math.abs(V.x)-P.x)/.13,(V.y-P.y)/.1)<1)continue;let l=.15+.85*(1-X(.035,.2,-i));if(z()>l)continue;let u=a?Math.hypot(V.x-a[0],V.y-a[1],V.z-a[2]):9,d=Math.max(0,1-u/.3),f=d>.35&&z()<d?q:z()<.5?G:z()<.6?K:Qe;B(V,H.set(0,0,1),t,f,(.008+z()*.009)*(1+d*.5),9,[d,0,0],((.2+.26*z())*(.6+.6*l)+d*.5)*o),s++}};vt(ut,W.BODY,[-.5,0,-.32],[.5,1,.45],3e3,[0,Xe,Ze],.62),vt(yt,W.HEAD,[-.45,-.12,-.3],[.45,.48,.5],1200,null,.6),vt(Tt,W.TAIL,[0,-.22,-.22],[qe,.22,.22],1100,null,.75);let wt=(e,t,n,r,i,a,o,s)=>{for(let c=0,l=0;c<i&&l<i*400;l++)Xt(e,z,V,H),!(!o(V,H)||Math.abs(n(V.x,V.y,V.z)-r(V.x,V.y,V.z))>a*(.6+.8*z()))&&(le(t,V,H,U,Ie),!(ce(U,t)<.004)&&(V.addScaledVector(H,-.006-z()*.01),B(V,H,t,z()<.3?q:s,.007+z()*.008,9,[.15,0,0],.32+.3*z()),c++))};wt(I.body,W.BODY,st,at,360,.014,(e,t)=>t.z>.05&&e.y<.42,G),wt(I.body,W.BODY,ct,at,220,.012,(e,t)=>t.z>.1,K);let Et=J([0,.19,0],[.33,.265,.3]);wt(I.head,W.HEAD,gt[0],Et,150,.012,(e,t)=>t.z>.15&&e.x<-.08&&e.y<.13,K),wt(I.head,W.HEAD,gt[1],Et,150,.012,(e,t)=>t.z>.15&&e.x>.08&&e.y<.13,K);for(let e=0;e<140;e++){let e=z()*2-1,t=z()*Math.PI*2,n=Math.sqrt(1-e*e),r=.16+Math.abs(Ne())*.09;H.set(n*Math.cos(t),n*Math.sin(t),e),B(V.copy(H).multiplyScalar(r),H,W.PEARL,z()<.6?q:z()<.5?$e:G,.006+z()*.01,0)}B(V.set(0,0,.02),H.set(0,0,1),W.PEARL,[.85,.97,1],.62,11,[0,1,0],.16);let Dt=Te.length/3;{let e=Array.from({length:Dt},(e,t)=>t);for(let t=Dt-1;t>0;t--){let n=Math.floor(z()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}let t=(t,n)=>{let r=t.slice();for(let i=0;i<Dt;i++)for(let a=0;a<n;a++)t[i*n+a]=r[e[i]*n+a]};t(Te,3),t(Ee,3),t(De,1),t(Oe,4),t(ke,3),t(Ae,1),t(je,1),t(Me,3)}let kt=e=>{let t=new C;return t.setAttribute(`position`,new T(e.pos,3)),t.setAttribute(`aNormal`,new T(e.nrm,3)),t.setAttribute(`aPart`,new T(e.part,1)),t.setAttribute(`aSeed`,new T(e.seed,4)),t.setAttribute(`aColor`,new T(e.col,3)),t.setAttribute(`aSize`,new T(e.size,1)),t.setAttribute(`aKind`,new T(e.kind,1)),t.setAttribute(`aDir`,new T(e.dir,3)),t},At=[];for(let e=0;e<Ke;e++)At.push(new te);let Mt=Jt(new S({vertexShader:Lt,fragmentShader:Rt,uniforms:{uParts:{value:At},uTime:{value:0},uPx:{value:600},uPulse:{value:0},uLive:{value:1},uPeel:{value:0},uPeelFrac:{value:.3},uEyeOpen:{value:1},uHappyEyes:{value:0},uGlow:{value:0},uBright:{value:1},uBoost:{value:1},uTail:{value:new m(Je,0,0,Ye)},uHue:{value:0},uDust:{value:0},uMinPx:{value:1.5},uRimGain:{value:1},uThin:{value:0},uBeat:{value:0},uLoose:{value:0},uTwinkle:{value:.45},uShadow:{value:0},uShadowA:{value:.25},uOverlay:{value:0},uHueAt:{value:.33},uWave:{value:0},uWaveTint:{value:0},uClearCol:{value:new E(1,.5,.7)},uPearlP:{value:new E},uSmall:{value:0},uBones:{value:[,,,,,].fill(0)},uBonesV:{value:[,,,,,].fill(0)},uBreathK:{value:0},uUnwind:{value:0},uUnwindP:{value:0}}}));Mt.depthTest=!1;let Y=new o(kt({pos:Te,nrm:Ee,part:De,seed:Oe,col:ke,size:Ae,kind:je,dir:Me}),Mt);Y.geometry.setDrawRange(0,Dt),Y.frustumCulled=!1,Y.renderOrder=1,p.add(Y);let qt=e=>{let t=new S({vertexShader:Lt,fragmentShader:Bt,uniforms:{...Mt.uniforms,uShadow:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,blending:5});return e?(t.blendEquation=104,t.blendEquationAlpha=104):(t.blendEquation=100,t.blendSrc=204,t.blendDst=205,t.blendSrcAlpha=201,t.blendDstAlpha=205),t},Zt={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]};for(let e=0,t=0;e<Dt;e++)je[e]===0&&t++%3==0&&(Zt.pos.push(Te[e*3],Te[e*3+1],Te[e*3+2]),Zt.nrm.push(Ee[e*3],Ee[e*3+1],Ee[e*3+2]),Zt.part.push(De[e]),Zt.seed.push(Oe[e*4],Oe[e*4+1],Oe[e*4+2],Oe[e*4+3]),Zt.col.push(0,0,0),Zt.size.push(Ae[e]),Zt.kind.push(0),Zt.dir.push(Me[e*3],Me[e*3+1],Me[e*3+2]));let Qt=kt(Zt),$t=Zt.kind.length,en=new o(Qt,qt(!0));en.name=`silhouette`,en.frustumCulled=!1,en.renderOrder=-.5,p.add(en);let Z={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]},Q=(e,t,n,r,i,a=q,o=1,s=W.HEAD,c=[0,1,0])=>{Z.pos.push(e,t,n),Z.nrm.push(0,0,1),Z.part.push(s),Z.seed.push(z(),z(),i===5&&o<0?1:i===10?z():0,Math.abs(o)),Z.col.push(...a),Z.size.push(r),Z.kind.push(i),Z.dir.push(...c)},tn=.1,nn=.076,rn=.03,$=(e,t)=>{let n=He(Math.min(.999,Math.abs(e)));return Math.max(Math.abs(e),n<=0?9:t>0?t/(Ue*n):-t/(We*n))+Math.max(0,Math.abs(e)-1)},an=e=>rn*Math.sqrt(Math.max(0,1-e*e*.8))+.004;for(let e of[W.EYE_L,W.EYE_R]){for(let t=0,n=0;t<440&&n<12e3;n++){let n=(z()*2-1)*1.6,r=(z()*2-1)*1.6,i=$(n,r);i<1.02||i>1.45||z()>(1-(i-1.02)/.43)**2.4||(Q(n*tn,r*nn,rn*.2,.006+z()*.007,8,z()<.6?G:Qe,1,e,[0,0,1]),t++)}for(let t=0,n=0;t<420&&n<12e3;n++){let n=z()*2-1,r=z()*2-1,i=$(n,r);if(i>.97)continue;let a=Math.hypot(n/.36,(r-.08)/.62),o=X(.2,-.8,r),s=X(.6,.97,i);if(z()>.35+.4*o+.25*s)continue;let c=o>.5?z()<.25?$e:[1,.66,.34]:[.55,.36,.22];Q(n*tn,r*nn,an(i)*.6,.006+z()*.005,10,c,(.035+.16*o+.06*s)*(a<1?.25:1)*(.6+.6*z()),e),t++}Q(-.3*tn,.36*nn,.038,.048,3,q,1,e),Q(.32*tn,-.36*nn,.036,.014,3,[.85,1,.96],.5,e);for(let t=0;t<32;t++){let n=t/31,r=-.86+1.72*n,i=He(Math.min(.99,Math.abs(r))),a=Math.sin(Math.PI*(.06+.88*n));Q(r*tn,i*Ue*1.12*nn+.005,rn*.6,.0045+.005*a,5,z()<.3?q:G,-(.3+.6*a),e)}}for(let e of[-1,1]){let t=e*P.x,n=P.y,r=P.z+.03;for(let e=0;e<=20;e++){let i=Math.PI*(.12+.76*e/20);Q(t+Math.cos(i)*.07,n-.025+Math.sin(i)*.05,r,.03,4,[1,.9,.7])}for(let t=0;t<=16;t++){if(z()<.25)continue;let n=t/16+(z()-.5)*.03,r=e*(.085+-.035*n),i=.155+-.155*n,a=.29+(.33-.29)*n;Q(r+e*.03*(1-n*.3),i+.004,a,.01+z()*.008,5,K,.22+z()*.18)}}Q(0,ht[1]+.02,ht[2]+.012,.016,3,q,.55);for(let e=0;e<=22;e++){let t=-1.25+2.5*e/22,n=Math.cos(t*1.1);Q(Math.sin(t)*.1,ht[1]-.035-.045*Math.cos(t),ht[2]-.05-.05*(1-Math.cos(t)),.006+.003*n,5,G,.16+.12*n)}for(let e of[-1,1])for(let[t,n]of[[.012,.045],[-.006,-.002],[-.024,-.05]])for(let r=0;r<10;r++){let i=r/9;Q(e*(.07+.12*i),t+(n-t)*i+.01*Math.sin(i*Math.PI),.33-.06*i,.011*(1-.6*i),5,i<.25?q:K,1-.75*i)}for(let e of[-1,1])for(let t=0;t<7;t++){let n=t/6;Q(e*.034*n,ht[1]-.026-.016*Math.sin(n*Math.PI),ht[2]-.014-.012*n,.006,5,G,.42)}for(let e=0;e<4;e++)Q(0,ht[1]-.004-e*.006,ht[2]-.004,.006,5,G,.42);let on=new o(kt(Z),Mt);on.frustumCulled=!1,on.renderOrder=3,p.add(on);let sn=e=>{let t={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]};for(let n=0;n<Z.kind.length;n++)e(Z.kind[n],n)&&(t.pos.push(Z.pos[n*3],Z.pos[n*3+1],Z.pos[n*3+2]),t.nrm.push(Z.nrm[n*3],Z.nrm[n*3+1],Z.nrm[n*3+2]),t.part.push(Z.part[n]),t.seed.push(Z.seed[n*4],Z.seed[n*4+1],Z.seed[n*4+2],Z.seed[n*4+3]),t.col.push(Z.col[n*3],Z.col[n*3+1],Z.col[n*3+2]),t.size.push(Z.size[n]),t.kind.push(Z.kind[n]),t.dir.push(Z.dir[n*3],Z.dir[n*3+1],Z.dir[n*3+2]));return kt(t)},cn=new _,un=sn(e=>e>=3&&e<=5);{let e=new S({vertexShader:Lt,fragmentShader:zt,uniforms:{...Mt.uniforms,uOverlay:{value:2},uOvGain:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,blending:5});e.blendEquation=100,e.blendSrc=201,e.blendDst=201,e.blendSrcAlpha=201,e.blendDstAlpha=201;let t=new o(un,e);t.frustumCulled=!1,t.renderOrder=2,cn.add(t)}let dn={d:[],sd:[],kd:[]},fn={d:[],sd:[],kd:[]},pn=dn,mn=(e,t,n,r,i)=>{pn.d.push(t,n,r,i),pn.sd.push(z(),z(),z(),z()),pn.kd.push(e)};for(let e=0;e<300;e++){let e=z()*2-1,t=z()*Math.PI*2,n=Math.sqrt(1-e*e),r=.95+z()*.7;mn(0,n*Math.cos(t)*r*1.05,n*Math.sin(t)*r*.95,e*r*.8,z()<.05?.07+z()*.06:.012+z()*.02)}for(let e=0;e<2;e++)for(let t=0,n=e?420:680;t<n;t++)mn(1,z(),e,Ne(),.008+z()*z()*.02);for(let e=0;e<150;e++)mn(3,z()*Math.PI*2,Math.min(1,Math.max(0,.45+Ne()*.22)),0,.01+z()*.016);for(let[e,t,n,r,i]of[[16,-4.2,-3.2,.1,2.6],[10,-2,-1.2,.15,2.1],[6,2.2,3,.145,1.5]])for(let a=0;a<e;a++){let e=t+z()*(n-t),a=(z()*2-1)*i,o=1.05+(z()*2-1)*i*.95;Math.abs(a)<.5&&e>0&&(a+=Math.sign(a||1)*.6),mn(4,a,o,e,r*(.8+z()*.45))}for(let e=0;e<70;e++)mn(5,0,0,0,.012+z()*.02);pn=fn;for(let e=0;e<700;e++){let e=z()<.5?(z()-.5)*.3:z()*2-1;mn(2,z(),e,0,.012+z()*.018)}for(let e=0;e<440;e++){let e=z()*2-1,t=z()*Math.PI*2,n=Math.sqrt(1-e*e);mn(6,n*Math.cos(t)*1.4,n*Math.sin(t)*.5-.1,Math.abs(e)*.8+.35,.014+z()*.024)}for(let e=0;e<700;e++)mn(7,z(),z()*2-1,z(),.012+z()*.018);let hn=Jt(new S({vertexShader:Vt,fragmentShader:Rt,uniforms:{uTime:{value:0},uPx:{value:600},uPulse:{value:0},uLive:{value:1},uBreath:{value:0},uRibbon:{value:.3},uArcAge:{value:-1},uArcSide:{value:1},uArcPow:{value:1},uSpill:{value:.5},uLandAge:{value:9},uPearl:{value:new E},uMuzzle:{value:new E},uEnergy:{value:0},uBright:{value:1},uExhaleAge:{value:9},uExhaleSeed:{value:0},uBoost:{value:1},uStream:{value:0},uTarget:{value:new E(1.4,-.5,1)},uHue:{value:0},uOrbit:{value:0},uBokeh:{value:.4},uHueAt:{value:.33},uClearCol:{value:new E(1,.5,.7)},uFace:{value:new E},uLodK:{value:1},uMinFx:{value:1}}}));hn.depthTest=!0;let gn=e=>{let t=e.kd.length,n=Array.from({length:t},(e,t)=>t);for(let e=t-1;e>0;e--){let t=Math.floor(z()*(e+1)),r=n[e];n[e]=n[t],n[t]=r}n.sort((t,n)=>(e.kd[t]===4?0:1)-(e.kd[n]===4?0:1));let r=new Float32Array(t*4),i=new Float32Array(t*4),a=new Float32Array(t);n.forEach((t,n)=>{for(let a=0;a<4;a++)r[n*4+a]=e.d[t*4+a],i[n*4+a]=e.sd[t*4+a];a[n]=e.kd[t]});let s=new C;s.setAttribute(`position`,new x(new Float32Array(t*3),3)),s.setAttribute(`aData`,new x(r,4)),s.setAttribute(`aSeed`,new x(i,4)),s.setAttribute(`aKind`,new x(a,1));let c=new o(s,hn);return c.frustumCulled=!1,c.renderOrder=4,p.add(c),c},_n=gn(dn),vn=gn(fn),yn=dn.kd.length,bn=fn.kd.length,xn=Jt(new S({vertexShader:Ht,fragmentShader:Ut,uniforms:{uI:{value:.2}}}));xn.depthTest=!1;let Sn=new s(new g(3.2,3.2),xn);Sn.position.set(0,1.05,-1.2),Sn.renderOrder=-1,p.add(Sn);let Cn=new S({vertexShader:Gt,fragmentShader:Kt,depthTest:!1,depthWrite:!1,blending:0,uniforms:{tSrc:{value:i.texture},tB1:{value:a[0].texture},tB2:{value:a[1].texture},tB3:{value:a[2].texture},tB4:{value:a[3].texture},uTexel:{value:new v(1/256,1/256)},uBloom:{value:.8},uHalo:{value:0},uExpo:{value:1},uWide:{value:0},uSat:{value:0},uBack:{value:0},uWin:{value:new m(-1,-1,2,2)},uFea:{value:new m(.01,.01,.01,.01)},uRound:{value:0}}}),wn=new S({vertexShader:Gt,fragmentShader:Wt,depthTest:!1,depthWrite:!1,blending:0,uniforms:{tIn:{value:i.texture},uHalf:{value:new v}}}),Tn=new _,En=new s(new g(2,2),Cn);En.frustumCulled=!1,Tn.add(En);let Dn=new d(-1,1,1,-1,0,1);try{e.setRenderTarget(i),e.compile(p,D),En.material=wn,e.setRenderTarget(a[0]),e.compile(Tn,Dn),En.material=Cn,e.setRenderTarget(null),e.compile(Tn,Dn),e.compile(cn,D)}catch{}return{depthMeshes:he,overlay:cn,overlayCount:un.attributes.position.count,pupilCount:0,r:e,scene:p,cam:D,groups:k,root:A,eyes:xe,eyeWorld:Se,speck:Mt,fx:hn,aura:xn,pearl:ye,shells:me,tailShell:pe,partM:At,muzzle:oe,rt:i,down:a,sets:r,frame:0,downMat:wn,quad:En,comp:Cn,compScene:Tn,compCam:Dn,hdr:t,specks:Dt+Z.pos.length/3,speckGeo:Y.geometry,bodySpecks:Dt,shadowGeo:Qt,shadowCount:$t,shadowPts:en,fxIdlePts:_n,fxReactPts:vn,fxIdle:yn,fxReact:bn}}var Qt=e=>Math.max(0,Math.min(1,e)),X=(e,t,n)=>{let r=Qt((n-e)/(t-e));return r*r*(3-2*r)},$t=e=>e-Math.floor(e),en=(e,t,n)=>{let r=((e+n)%t+t)%t;return r<.32?Math.sin(r/.32*Math.PI)*Math.sin(r/.32*Math.PI*2):0};function Z(e){let t=(e%5.3+5.3)%5.3,n=0;t>4.9&&t<5.12&&(n=Math.sin((t-4.9)/.22*Math.PI));let r=(e%11.7+11.7)%11.7;return r>2.2&&r<2.38&&(n=Math.max(n,Math.sin((r-2.2)/.18*Math.PI))),n}var Q=2.5,tn=e=>-Math.sin(e*.72)*.035*.9+Math.sin(e*.53)*.07+Math.sin(e*.21)*.04;function nn(e){let t=!!e.reducedMotion,n=Number.isFinite(e.time)?e.time:0,r=Qt(Number.isFinite(e.music)?e.music:0),i=Qt(Number.isFinite(e.energy)?e.energy:0),a=Number.isFinite(e.clearAge)&&e.clearAge>=0?e.clearAge:99,o=!t&&Number.isFinite(e.spiritAge)&&e.spiritAge>=0&&e.spiritAge<a;o&&(a=e.spiritAge);let s=!t&&Number.isFinite(e.spiritAge)&&e.spiritAge>=0?e.spiritAge:-1,c=s>=0?X(0,.6,s)*(1-X(3.1,3.7,s)):0,l=s>=0?X(.15,.5,s)*(1-X(3.4,3.8,s)):0,u=Math.max(-1,Math.min(1,e.spiritX??-.85))*.6,d=Number.isFinite(e.landAge)&&e.landAge>=0?e.landAge:99,f=o?3:Number.isFinite(e.chain)?e.chain:1,p=Number.isFinite(e.clearGap)?e.clearGap:0,m=Math.max(-1,Math.min(1,o?e.spiritX??0:Number.isFinite(e.clearX)?e.clearX:0)),h=a<2.2?Math.sin(Math.min(1,a/.18)*Math.PI/2)*Math.exp(-a*1.6):0,g=!t&&a<2.4,_=0;if(Number.isFinite(e.bar)&&a<99){let t=(e.bar-a/Q)*16;_=(Math.ceil(t)-t)/16*Q}let v=a-Math.max(.08,_),y=g?v<0?Math.sin(Math.min(1,a/.08)*Math.PI/2):Math.exp(-v*14):0,b=g&&v>0?(1-Math.exp(-v*16))*Math.exp(-v*1.9):0,x=g&&v>0?Math.min(1,1.35*(1-Math.exp(-v*11))*Math.exp(-v*v*3.6)):0,S=!t&&d<.4?Math.sin(d/.4*Math.PI)*Math.exp(-d*3):0,C=e=>1+2.9*(e-1)**3+1.9*(e-1)**2,w=v/.35,T=g&&f>=3&&v>0&&w<1?.2*(w<.45?C(w/.45):1-((w-.45)/.55)**2):0,E=T>0?T:g&&v>0&&v<.42?Math.sin(v/.42*Math.PI)*(.05+.05*i):!t&&e.happy?Math.abs(Math.sin(n*4.2))*.05:0,ee=Number.isFinite(e.bar)?$t(e.bar)*Q:9,te=g&&f<2&&a<.9?Math.sin(a/.25*Math.PI*2)*Math.exp(-a*7):c>.5&&ee<.9?Math.sin(ee/.25*Math.PI*2)*Math.exp(-ee*7)*c:0,D=g&&f===2?Math.sin(Math.min(1,a/.16)*Math.PI/2)*Math.exp(-Math.max(0,a-.16)*1.5):0,O=g&&f>=2?Math.exp(-Math.max(0,v)*5)*+(v>0):0,k=Number.isFinite(e.bar)?e.bar:n/3.2,A=t?0:Math.cos(Math.PI*2*k),j=t?9:$t(k)*(Number.isFinite(e.bar)?Q:3.2),M=e.happy||a<1.6&&(f>=2||p>=2),N=e.happy?1:M&&!t?X(0,.1,a)*(1-X(1.2,1.6,a))*(1-l):0,ne=!t&&!M&&a>.04&&a<.24?Math.sin((a-.04)/.2*Math.PI):0,re=t?0:a<1.6?X(.05,.25,a)*(1-X(1.1,1.6,a)):0,ie=Math.max(re,c),P=t?0:(e.lookX??0)*(1-ie)+(c>=re?u:m)*ie,F=t?0:(e.lookY??0)*(1-ie)+.55*ie,ae=t?0:Math.sin(n*.72)*.035,oe=t?0:tn(n),I=t?.5+.5*Math.sin(n*Math.PI*2/6):0,se=f>=2?Qt((f-1)/2):0,L=a<3.2?se*X(0,.4,a)*(1-X(1.8,3.2,a)):0,R=Qt(L+Math.max(0,i-.75)*.6)*(e.reducedFlash?.6:1),ce=!t&&Number.isFinite(e.bar)?Math.exp(-$t(e.bar*4)*5):0,le=t?0:.6*Ve(e.songTime),ue=Number.isFinite(e.bar),de=ue?e.bar*Q:n,fe=Ie(e.songTime),pe=.2,me=g&&f>=3&&v>pe&&v<1.25?(v-pe)/1.05:-1;return{unwind:me>=0?Math.sin(Math.PI*me)*(e.reducedFlash?.6:1):0,unwindP:me>=0?.5-.5*Math.cos(Math.PI*me):0,hopK:g&&f>=3?1:0,t:n,rm:t,music:t?0:r,energy:i,clear:h,crouch:y,rise:b,peel:x,scatter:x,land:S,hop:E,breath:A,happyEyes:N,exhaleAge:j,exhaleSeed:Math.floor(k),eyeOpen:t?1:1-Math.max(Z(n),ne),sway:ae,lookX:P,lookY:F,yaw:(t?0:Math.sin(n*.23)*.12)+P*.3+.04,headTilt:oe,headNod:t?0:-.035*A-.12*y+.1*b+F*.16,earLag:t?0:(tn(n-.12)-tn(n))*2.2,earL:t?0:(ue?en(de,2*Q,0):en(n,(e.thumb??0)>0?2.6:4.3,.7))*.22+r*.05,earR:t?0:(ue?en(de,4*Q,-2.5*Q):en(n,(e.thumb??0)>0?3.4:6.1,2.9))*-.22-r*.05,earPerk:t?0:b*.35-y*.22-S*.18-T*1.6,flick:te,flickSide:c>.5?u>=0?1:-1:m>=0?1:-1,gaze:c,lean:t?0:-m*.16*D-(m===0?.06*D:0),pearlPulse:O,tailWag:t?0:b*.6,glow:Qt(.25+r*.3+h*(e.reducedFlash?.25:.45-.2*i)+i*.15+I*.12),glowBreath:I,ribbon:(t?.3:.26+i*.2+r*.12)+h*(e.reducedFlash?.12:.3),arcAge:!t&&a<2?v:-1,arcSide:m>=0?1:-1,spill:(t?0:Math.min(1,(.3+i*.4)*(1+1.5*L)))*(e.reducedFlash?.6:1),landAge:t?9:d,combo:L,hue:R,beat:ce,dust:le,phrase:fe,beatPhase:t?0:$t(Number.isFinite(e.bar)?e.bar*4:n*1.6),hueAt:f>=4&&a<3.2?.4:f>=3&&a<3.2?.36:.02,loose:t?0:L*(e.reducedFlash?.4:1)+(t?0:x*.25),orbit:t?0:ze(e.songTime,n),twinkle:t?0:.45+.35*fe,stream:t||a>=2?0:.25+.75*L+.15*i,wide:L*(e.reducedFlash?.5:1),gestureAge:g&&v>0?v:-1,wave:a<3?t?1:1-(1-Math.min(1,a/.9))**2.2:0,waveTint:a<3?X(0,.4,a)*(a<.5?1:Math.exp(-(a-.5)/1.2*3))*(e.reducedFlash?.6:1)*(f>=2||o?1:.65):0,clearCol:Number.isFinite(e.clearType)?V[Math.max(0,Math.min(4,Math.round(e.clearType)))]:H(f>=4?.4:f>=3?.36:.02)}}function rn(e){let t=e.t,n=e.land*.08+e.crouch*.07,r=e.rise*.24,i=(e,t)=>e>0&&e<4?e/t*Math.exp(1-e/t):0,a=e.gestureAge,o=e.landAge,s=[],c=[];for(let n=0;n<5;n++){let r=n*.0875,l=1+.45*n,u=t-r,d=Math.sin(u*.72)*.035+e.lean;s.push(e.rm?0:l*(.035*Math.sin(u*1.1)+.018*Math.sin(u*.53+1)+d*.5)+i(a-r,.13+.025*n)*(.08+.045*n)*e.arcSide+i(o-r,.11+.02*n)*.035*l),c.push(e.rm?0:-i(a-r,.16+.03*n)*(.05+.03*n)*(.4+2.5*e.hopK)+i(a-r-.3,.2)*.04*e.hopK+i(o-r,.12)*.04)}let l=s[0],u=s[4];return{root:{y:e.hop-e.crouch*.03,yaw:e.yaw,roll:e.sway+e.lean,sx:1+n*.6-e.breath*.006,sy:1-n+e.breath*.03,sz:1+n*.6},head:{x:e.headNod,y:e.lookX*.32+(e.rm?0:Math.sin(t*.31)*.07),z:e.headTilt},earL:{x:-.14-e.earPerk*.5+e.breath*.04-(e.flickSide<0?e.flick*.3:0),y:.3,z:.7-e.earPerk+e.earL+e.earLag+e.lean*.6+(e.flickSide<0?e.flick*.45:0)},earR:{x:-.14-e.earPerk*.5+e.breath*.04-(e.flickSide>0?e.flick*.3:0),y:-.3,z:-.7+e.earPerk+e.earR+e.earLag+e.lean*.6-(e.flickSide>0?e.flick*.45:0)},pearlScale:(1+.28*e.pearlPulse)*(1+.02*(1-Math.cos(2*Math.PI*e.beatPhase))),pearlY:Xe+r+e.breath*.006,pearlZ:Ze+r*.8,pawRot:-r*1.5+e.breath*.01,tail:{curl:Je,base:l,tip:u,lift:Ye+e.rise*.25,bones:s,bonesV:c}}}var $={t:-1e9,col:[1,.5,.7],at:.02};function an(e,t,n=720){if(qt)return null;try{Y??=Zt()}catch(e){return qt=!0,typeof console<`u`&&console.warn(`dubai light unavailable`,e),null}let r=Y,i=nn(t),a=rn(i);{let e=i.t-$.t;$.t=i.t;let t=e>0&&e<1?1-Math.exp(-e/.35):1;for(let e=0;e<3;e++)$.col[e]+=(i.clearCol[e]-$.col[e])*t;$.at+=(i.hueAt-$.at)*t,i.clearCol=[$.col[0],$.col[1],$.col[2]],i.hueAt=$.at}let o=Math.max(64,Math.min(n,Math.round(e))),s=r.r.domElement.width,c=s>=o&&s<=Math.min(n,Math.max(o+64,o*1.18))?s:Math.max(64,Math.min(n,Math.ceil(o/32)*32)),l=Number.isFinite(t.screenPx)&&t.screenPx>0?c/t.screenPx:1;e=Number.isFinite(t.screenPx)&&t.screenPx>0?t.screenPx:e;let u=r.r.domElement;if(u.width!==c||u.height!==c){r.r.setSize(c,c,!1),r.comp.uniforms.uTexel.value.set(1/c,1/c);for(let e of r.sets)e.rt.setSize(c,c),e.down.forEach((e,t)=>e.setSize(Math.max(4,c>>t+1),Math.max(4,c>>t+1)))}let d=i.t,f=r.groups;r.root.position.set(0,a.root.y,0),r.root.rotation.set(0,a.root.yaw,a.root.roll),r.root.scale.set(a.root.sx,a.root.sy,a.root.sz),f[W.HEAD].rotation.set(a.head.x,a.head.y,a.head.z),f[W.EAR_L].rotation.set(a.earL.x,a.earL.y,a.earL.z),f[W.EAR_R].rotation.set(a.earR.x,a.earR.y,a.earR.z),f[W.PEARL].position.set(0,a.pearlY,a.pearlZ),f[W.PAW_L].rotation.set(a.pawRot,0,0),f[W.PAW_R].rotation.set(a.pawRot,0,0);let h=i.eyeOpen*(1-i.happyEyes),g=1-X(110,210,e*ln.creatureHeight/ln.span),_=1+.3*g;for(let e of r.eyes)e.scale.set(_,_*Math.max(.08,h),_);f[W.PEARL].scale.setScalar((1+.2*g)*a.pearlScale),r.scene.updateMatrixWorld(!0);for(let e=0;e<Ke;e++)r.partM[e].copy(f[e].matrixWorld);let v=new m(a.tail.curl,0,0,a.tail.lift),y=1-(i.rm?.14*(1-i.glowBreath):0),b=c/(2*Math.tan(p.degToRad(r.cam.fov/2))),x=e<560?1.4:e<800?1.2:1,S=Math.max(0,Math.min(1,Number.isFinite(t.thumb)?t.thumb:0)),C=r.speck.uniforms;C.uTime.value=d,C.uPx.value=b,C.uPulse.value=i.music,C.uLive.value=+!i.rm,C.uPeel.value=i.peel,C.uPeelFrac.value=.08+.08*i.energy+.06*i.combo,C.uEyeOpen.value=+(h>.3),C.uHappyEyes.value=i.happyEyes,C.uGlow.value=i.glow,C.uBright.value=y*(.9+i.glow*.25),C.uHue.value=i.hue,C.uDust.value=i.dust,C.uRimGain.value=x*(1+.4*S)*(1+.2*i.combo),C.uThin.value=S,C.uBeat.value=i.beat*(.6+.6*i.phrase),C.uWave.value=i.wave,C.uWaveTint.value=i.waveTint,C.uClearCol.value.set(...i.clearCol),C.uSmall.value=1-X(110,210,e*ln.creatureHeight/ln.span),C.uLoose.value=i.loose,C.uTwinkle.value=i.twinkle;let w=Math.max(.12,Math.min(1,Number.isFinite(t.lod)?t.lod:e<440?.24+.08*X(220,440,e):.32+.68*X(440,900,e)));r.speckGeo.setDrawRange(0,Math.round(r.bodySpecks*w)),r.shadowGeo.setDrawRange(0,Math.round(r.shadowCount*w)),r.shadowPts.visible=t.silhouette===!0;let T=1/Math.sqrt(w);C.uMinPx.value=Math.max(1.25*l,1.5*Math.min(1,c/Math.max(1,e))),C.uTail.value.copy(v),C.uBones.value=a.tail.bones,C.uBonesV.value=a.tail.bonesV,C.uBreathK.value=i.rm?0:i.breath,C.uUnwind.value=i.unwind,C.uUnwindP.value=i.unwindP;let E=r.fx.uniforms;E.uTime.value=d,E.uPx.value=b,E.uPulse.value=i.music,E.uLive.value=+!i.rm,E.uBreath.value=i.breath,E.uRibbon.value=S>0||i.rm?0:i.ribbon,E.uArcAge.value=i.arcAge,E.uArcSide.value=i.arcSide,E.uArcPow.value=.6+.5*i.energy,E.uSpill.value=i.spill,E.uLandAge.value=i.landAge,E.uEnergy.value=i.energy,E.uBright.value=y,E.uExhaleAge.value=i.exhaleAge,E.uExhaleSeed.value=i.exhaleSeed,E.uStream.value=i.stream,E.uHue.value=i.hue,E.uOrbit.value=i.orbit;let ee=Math.max(.45,Math.min(1,e<300?.5:e<480?.5+.2*X(300,480,e):.7+.3*X(480,820,e))),te=i.arcAge>=0&&i.arcAge<2.2;r.fxIdlePts.geometry.setDrawRange(0,Math.round(r.fxIdle*ee)),r.fxReactPts.visible=te,r.fxReactPts.geometry.setDrawRange(0,Math.round(r.fxReact*ee)),E.uLodK.value=1/Math.sqrt(ee),E.uMinFx.value=Math.max(1,1.25*l),E.uTarget.value.set(i.lookX*1.25+i.arcSide*.25,-.35,1.2),E.uPearl.value.setFromMatrixPosition(f[W.PEARL].matrixWorld),E.uMuzzle.value.setFromMatrixPosition(r.muzzle.matrixWorld),E.uFace.value.set(0,.13,.3).applyMatrix4(f[W.HEAD].matrixWorld),r.aura.uniforms.uI.value=Math.min(.12,.03+i.beat*.04+i.combo*.05)*y,r.pearl.uniforms.uTime.value=d,r.pearl.uniforms.uGlow.value=Math.min(1,i.glow+i.beat*.15),r.pearl.uniforms.uCap.value=S>0?.62:.85,r.pearl.uniforms.uSpec.value=(S>0?2.2:3.6)*(1+.3*i.beat),r.pearl.uniforms.uTintC.value.set(...i.clearCol),r.pearl.uniforms.uTintK.value=i.waveTint,C.uPearlP.value.setFromMatrixPosition(f[W.PEARL].matrixWorld),r.fx.uniforms.uClearCol.value.set(...i.clearCol);let D=X(.35,.6,Number.isFinite(t.backdrop)?t.backdrop:0);for(let e of r.depthMeshes)e.visible=i.dust<.3;for(let e of r.shells)e.uniforms.uMask.value=.15*D,e.uniforms.uGlow.value=i.glow,e.uniforms.uBright.value=y*(1-i.dust*.7),e.uniforms.uTail.value.copy(v),e.uniforms.uBones.value=a.tail.bones,e.uniforms.uBonesV.value=a.tail.bonesV,e.uniforms.uTime.value=d,e.uniforms.uNacre.value=i.waveTint*.1,e.uniforms.uClearCol.value.set(...i.clearCol),e.uniforms.uPearlW.value.setFromMatrixPosition(f[W.PEARL].matrixWorld),e.uniforms.uPearlI.value=(.42+.3*i.glow+.25*i.beat)*(1-i.dust*.6),e.uniforms.uRim.value=(e===r.tailShell?.85:e===r.shells[1]?.9:.8)*x;let O=Qt(Math.max(i.energy,i.clear*.8,i.combo));r.comp.uniforms.uBloom.value=Math.min(1.25,(.95+.25*O)*(1+i.wide*.15+i.beat*.06))*(r.hdr?1:.8)*(1-.22*i.hue),r.comp.uniforms.uWide.value=i.wide,r.comp.uniforms.uSat.value=Math.max(.35,i.hue),C.uHueAt.value=i.hueAt,E.uHueAt.value=i.hueAt;for(let e of r.shells)e.uniforms.uHueAt.value=i.hueAt;let k=Math.max(1,Math.min(2.4,Number.isFinite(t.speckBoost)?t.speckBoost:1)),A=e*ln.creatureHeight/ln.span,j=1-X(90,170,A);C.uBoost.value=k*T**.25*(1+.4*j),E.uBoost.value=k,r.comp.uniforms.uHalo.value=S>0?0:(.22+.4*j)*(1-X(380,560,A))*(i.rm?.8:1),C.uBright.value*=T**.85,r.comp.uniforms.uExpo.value=1.35*Math.sqrt(Math.min(2,k))*(x>1?1.1:1)/(1+.35*O)*Math.max(.5,Math.min(2,Number.isFinite(t.exposure)?t.exposure:1)),r.comp.uniforms.uBack.value=Number.isFinite(t.backdrop)?Qt(t.backdrop):0;let M=t.window??[-1,-1,2,2],N=t.feather??[.01,.01,.01,.01];r.comp.uniforms.uWin.value.set(M[0],M[1],M[2],M[3]),r.comp.uniforms.uRound.value=Math.min(1,i.dust*4),r.comp.uniforms.uFea.value.set(Math.max(.001,N[0]),Math.max(.001,N[1]),Math.max(.001,N[2]),Math.max(.001,N[3]));let ne=ln.span/2-ln.feetFromBottom;r.cam.position.set(i.rm?0:Math.sin(d*.13)*.12,ne+(i.rm?0:Math.sin(d*.09+1)*.05),8),r.cam.lookAt(0,ne,0),E.uBokeh.value=Math.max(0,Math.min(1.5,Number.isFinite(t.bokeh)?t.bokeh:S>0?1:.3))*y;let re=globalThis.__dubaiPerfIn,ie=re?performance.now():0,P=r.sets[r.frame++&1],F=r.comp.uniforms;F.tSrc.value=P.rt.texture,F.tB1.value=P.down[0].texture,F.tB2.value=P.down[1].texture,F.tB3.value=P.down[2].texture,F.tB4.value=P.down[3].texture,r.r.setRenderTarget(P.rt),r.r.clear(),r.r.render(r.scene,r.cam);let ae=re?performance.now():0;r.quad.material=r.downMat;let oe=P.rt;for(let e of P.down)r.downMat.uniforms.tIn.value=oe.texture,r.downMat.uniforms.uHalf.value.set(.5/oe.width,.5/oe.height),r.r.setRenderTarget(e),r.r.render(r.compScene,r.compCam),oe=e;return r.quad.material=r.comp,r.r.setRenderTarget(null),r.r.render(r.compScene,r.compCam),r.r.autoClear=!1,r.r.render(r.overlay,r.cam),r.r.autoClear=!0,re&&re.push([ae-ie,performance.now()-ae]),u}function on(){if(!Y)return null;let e=Y.r.domElement.width,t=new E,n=1e9,r=-1e9,i=1e9,a=-1e9;for(let o of Y.eyeWorld){t.setFromMatrixPosition(o.matrixWorld).project(Y.cam);let s=(t.x*.5+.5)*e,c=(.5-t.y*.5)*e;n=Math.min(n,s),r=Math.max(r,s),i=Math.min(i,c),a=Math.max(a,c)}let o=(r-n)*.45;return{x:n-o,y:i-o*.8,w:r-n+o*2,h:a-i+o*2.2}}function sn(){return Y&&!qt?Y.r.domElement:null}function cn(){if(!Y)return null;let e=Y,t=e.speckGeo.drawRange.count,n=e.fxIdlePts.geometry.drawRange.count+(e.fxReactPts.visible?e.fxReactPts.geometry.drawRange.count:0),r=e.specks-e.bodySpecks+e.overlayCount+e.pupilCount;return{specks:e.specks,hdr:e.hdr,drawn:t+r+n+(e.shadowPts.visible?e.shadowGeo.drawRange.count:0),body:t,face:r,fx:n}}var ln={span:3.8,feetFromBottom:.5,creatureHeight:2.3};export{V as DUBAI_CLEAR_HUES,ln as DUBAI_LIGHT_FRAME,Be as DUBAI_PHRASE_CUES,Et as TAIL_BONES,on as dubaiFaceProbe,sn as dubaiLightCanvas,nn as dubaiLightMotion,cn as dubaiLightStats,H as dubaiNacre,ze as dubaiOrbitClock,Ve as dubaiPhraseDust,Ie as dubaiPhraseLevel,rn as dubaiRigPose,an as renderDubaiLight};