import{Cr as e,Dn as t,Hn as n,On as r,Qn as i,Sr as a,Tn as o,Un as s,Wn as c,Xn as l,br as u,c as d,d as f,dn as p,er as m,l as h,lr as g,mr as _,n as v,on as y,rr as b,s as x,tr as S,u as C,un as w,ur as T,wr as E,xr as D,zn as ee}from"./dubaiworld-gl-CjeznuG5.js";var O=(e,t,n)=>{let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25},k=(e,t,n)=>{let r=(e[0]-t[0])/n[0],i=(e[1]-t[1])/n[1],a=(e[2]-t[2])/n[2],o=Math.sqrt(r*r+i*i+a*a),s=r/n[0],c=i/n[1],l=a/n[2],u=Math.sqrt(s*s+c*c+l*l);return u<1e-9?-Math.min(n[0],n[1],n[2]):o*(o-1)/u},A=(e,t,n,r,i)=>{let a=n[0]-t[0],o=n[1]-t[1],s=n[2]-t[2],c=e[0]-t[0],l=e[1]-t[1],u=e[2]-t[2],d=Math.max(0,Math.min(1,(c*a+l*o+u*s)/(a*a+o*o+s*s))),f=c-a*d,p=l-o*d,m=u-s*d;return Math.sqrt(f*f+p*p+m*m)-(r+(i-r)*d)},j=[{base:[-.045,.67,-.01],ang:106,len:.34,hw:.135,bend:-.05},{base:[.085,.665,.06],ang:82,len:.33,hw:.128,bend:.04}],M=j.map(({base:e,ang:t,len:n,hw:r,bend:i})=>{let a=t*Math.PI/180,o=[Math.cos(a),Math.sin(a)];return{base:e,A:o,Lat:[o[1],-o[0]],len:n,hw:r,bend:i,out:i<0?-1:1}}),N=(e,t)=>e.hw*Math.max(0,1-t)**.75*(1+.7*t);function P(e,t,n){let r=N(e,t)*(n*e.out>0?1.08:.92),i=e.base[0]+e.A[0]*e.len*t+e.Lat[0]*e.bend*e.len*t*t,a=e.base[1]+e.A[1]*e.len*t+e.Lat[1]*e.bend*e.len*t*t,o=e.A[0]+2*e.bend*t*e.Lat[0],s=e.A[1]+2*e.bend*t*e.Lat[1],c=Math.hypot(o,s);o/=c,s/=c;let l=s*e.out,u=-o*e.out,d=n*r,f=e.base[2]+.3*d*d/e.hw-.06*t;return{p:[i+l*d,a+u*d,f],t:[o,s]}}var te=[.035,.615,.05],ne=[.035,.48],re=[-.12,.15],F=e=>{let t=(222-192*e)*Math.PI/180;return[.02+.142*Math.cos(t),.05+.13*(1-e)**2+.05*e*e*e,.04+.15*Math.sin(t),.026+.05*Math.max(0,Math.sin(Math.PI*e**.7))**.6+.01*e]},I=13,ie=Array.from({length:14},(e,t)=>F(t/I)),ae=[[[.09,.37,.11],[.12,.05,.185],[.145,.026,.2],4,.044],[[.02,.36,.07],[.035,.05,.14],[.06,.026,.155],5,.041]],L=[.05,.027,.042];function oe(e){let t=k(e,[-.04,.16,-.03],[.17,.16,.15]);t=O(t,k(e,[.015,.3,.015],[.108,.16,.1]),.08),t=O(t,k(e,[.075,.415,.08],[.1,.12,.085]),.06);let n=0,r=0,i=A(e,[.035,.45,.04],[.04,.535,.05],.078,.072);i=O(i,k(e,te,[.15,.12,.115]),.05),i=O(i,k(e,[.045,.565,.08],[.162,.066,.09]),.04),i=O(i,A(e,[.07,.58,.11],[.16,.552,.185],.052,.012),.04),i<t&&e[1]>.5&&(n=1),t=O(t,i,.06);for(let[r,i,a,o,s]of ae){let c=A(e,r,i,s,s*.78);c=O(c,k(e,a,L),.025),c<t&&(n=o),t=O(t,c,.03)}let a=k(e,[-.07,.03,.09],[.07,.03,.045]);a<t&&(n=6),t=O(t,a,.03);let o=9,s=0;if(e[1]<.32)for(let t=0;t<=I;t++){let n=ie[t],r=e[0]-n[0],i=e[1]-n[1],a=e[2]-n[2],c=Math.sqrt(r*r+i*i+a*a)-n[3];c<o&&(s=t/I),o=O(o,c,.04)}return o<t&&(n=7,r=s),t=O(t,o,.03),{d:t,g:n,s:r}}var R=(()=>{let e=9,t=-9,n=-9;for(let r of M)for(let i=0;i<=40;i++)for(let a of[-1,1]){let{p:o}=P(r,i/40,a);e=Math.min(e,o[0]),t=Math.max(t,o[0]),n=Math.max(n,o[1])}return{x0:e,x1:t,y1:n}})(),z=Math.min(-.212,R.x0)-.02,se=Math.max(.21,R.x1),ce=Math.max(.15,R.x1)+.004,le=R.y1+.01;function ue(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var de=.05,fe=[[[-.015,.63,.14],.017,.022],[[.088,.627,.153],.019,.024]],pe=[.163,.553,.19],me=e=>.2+.8*(1-Math.min(1,Math.abs(e)))**2;function*he(e,t){let n=ue(t),r=new Float32Array(e*4),i=new Float32Array(e*2),a=new Float32Array(e*3),o=()=>Math.sqrt(-2*Math.log(Math.max(1e-9,n())))*Math.cos(6.2832*n()),s=Math.min(140,Math.round(e*.008)),c=[0,Math.round(e*.08),Math.round(e*.04),Math.round(e*.05),s,Math.round(e*.025)];c[0]=e-c[1]-c[2]-c[3]-c[4]-c[5];let l=Math.round(c[0]*.2),u=Math.round(l*.62),d=[0,0,0,0,0,0],f=0,p=0,m=[0,0,0],h=[0,0,0],g=(e,t,n)=>(h[0]=e,h[1]=t,h[2]=n,oe(h).d),_=(e,t,n,o,s,c,l,u,p)=>{r.set([e,t,n,o],f*4),i.set([s,c],f*2),a.set([l,u,p],f*3),d[o]++,f++};for(;d[4]<c[4];){let e=n();if(e<.84){let[t,r,i]=fe[e<.38?0:1],a=n()*6.2832,o=n()**.75;_(t[0]+Math.cos(a)*r*o,t[1]+Math.sin(a)*i*o,t[2],4,1,1-o,0,0,1)}else{let e=n()*6.2832,t=Math.sqrt(n())*.013;_(pe[0]+Math.cos(e)*t,pe[1]+Math.sin(e)*t*.8,pe[2],4,1,.5,0,0,1)}}let v=()=>{for(;;){let e=n();if(n()<N(M[0],e)/M[0].hw/1.12)return e}},y=0,b=0;for(;y<u;){y&511||(yield);let e=n()<.5?0:1,t=M[e],r=n()**.85*.995,i=n()<.5?-1:1,a=Math.abs(o())*(.004+.011*(1-r)),{p:s,t:c}=P(t,r,i*Math.max(0,1-a/Math.max(.004,N(t,r)))),l=c[1]*t.out*i,u=-c[0]*t.out*i;_(s[0],s[1],s[2]+(n()-.5)*.012,0,2+e,r,l,u,.15),y++}for(;b<l-u;){b&511||(yield);let e=n()<.5?0:1,t=M[e],r=v(),{p:i}=P(t,r,n()*2-1);_(i[0],i[1],i[2],0,2+e,r,0,0,1),b++}for(;d[3]<c[3];){let e=n()<.5?0:1,t=M[e],r=.04+.8*v(),i=n()<.55?(n()<.5?-1:1)*(1-Math.abs(o())*.12):n()*2-1,{p:a}=P(t,r,-.1+.6*Math.max(-1,Math.min(1,i))*(1-.3*r));_(a[0],a[1],a[2]+.004,3,2+e,r,0,0,.6)}typeof performance<`u`&&performance.now();let x=[0,0,0,0,0,0],S=c[0]-l,C=0;for(;(C<S||d[1]<c[1]||d[2]<c[2])&&p<e*900;){p++,m[0]=z-.03+n()*(se-z+.06),m[1]=-.02+n()*.8,m[2]=(n()-.5)*.44,p&63||(yield);let e=oe(m),t=()=>{let e=.003,t=m[0],n=m[1],r=m[2],i=g(t+e,n-e,r-e),a=g(t-e,n-e,r+e),o=g(t-e,n+e,r-e),s=g(t+e,n+e,r+e),c=i-a-o+s,l=-i-a+o+s,u=-i+a-o+s,d=Math.sqrt(c*c+l*l+u*u)||1;return[c/d,l/d,u/d]},r=-1,i;if(Math.abs(e.d)<.06&&C<S){for(let n=0;n<2;n++)i=t(),m[0]-=i[0]*e.d,m[1]-=i[1]*e.d,m[2]-=i[2]*e.d,e=oe(m);if(Math.abs(e.d)>.004||(i=t(),i[2]<-.35&&n()<.75)||n()>me(i[2]))continue;r=0}else if(e.d<0&&d[1]<c[1]){let t=Math.min(1,-e.d/de);n()<.35+.65*(1-t)&&(r=1)}else e.d>0&&e.d<.04&&d[2]<c[2]&&n()<Math.exp(-e.d/.012)&&(r=2);if(r<0)continue;d[r]+1===c[r]&&(x[r]=p),i??=t();let a=r===1?Math.min(1,-e.d/de):1;_(m[0],m[1],m[2],r,e.g,e.s,i[0]*a,i[1]*a,i[2]*a),r===0&&C++}let w=f;for(;d[5]<c[5]&&w>0;){let e=Math.floor(n()*w);r[e*4+3]===0&&_(r[e*4],r[e*4+1],r[e*4+2],5,i[e*2],i[e*2+1],0,0,.3)}for(let e=f-1;e>0;e--){e&2047||(yield);let t=Math.floor(n()*(e+1));for(let[n,o]of[[r,4],[i,2],[a,3]])for(let r=0;r<o;r++){let i=n[e*o+r];n[e*o+r]=n[t*o+r],n[t*o+r]=i}}return{pos:r,bone:i,nrm:a,count:f,classes:d}}function ge(e){let{W:t,H:n,well:r}=e;if(!(t>0)||!(n>0)||!(r.x0>0))return null;let i=Math.max(t,n)/1920,a=n>t*1.2,o=Math.max(9*i,10),s=120*i,c=a?0:s*.12,l=r.x0-(a?Math.max(16*i,10):28*i)-o-c,u=(a?ce:se)-z,d=Math.min(l/(u*1.03),(a?.3:.6)*n/le);if(!(d*le>70*i))return null;let f=o+Math.max(0,(l-u*1.03*d)/2)-z*1.02*d,p=a?r.y0-16*i+le*d:n*.84,m=t/544,h=a?[[16*m,0,166*m,126*m],[378*m,0,528*m,126*m]]:[];return d=Math.max(0,d),{ox:f,oy:p,scale:d,dir:1,unit:i,rise:s,portrait:a,hud:h,sway:a?0:.12}}var _e=e=>{let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function ve(e,t,n,r=.12){if(n)return[0,0];let i=_e((e-x*.4)/(x*.6+d));return[t*r*Math.sin(Math.PI*i),t*(1-i)]}var ye=new WeakMap,be,xe=!1,Se=2e4,Ce=9e3,B=()=>{try{return typeof matchMedia<`u`&&matchMedia(`(pointer: coarse)`).matches}catch{return!1}};function we(){if(be||xe)return;xe=!0;let e=he(Se,389607),t=()=>{let n=performance.now();for(;;){let t=e.next();if(t.done){be=t.value,xe=!1;return}if(performance.now()-n>4)break}setTimeout(t,12)};setTimeout(t,0)}function Te(){let e=be,t=ue(659918),n=new Float32Array(e.count*4);for(let e=0;e<n.length;e++)n[e]=t();let r=new p,i=new Float32Array(e.count*3),a=new Float32Array(e.count*3);for(let t=0;t<e.count;t++)i.set([e.pos[t*4],e.pos[t*4+1],e.pos[t*4+2]],t*3),a.set([e.bone[t*2],e.bone[t*2+1],e.pos[t*4+3]],t*3);return r.setAttribute(`position`,new w(i,3)),r.setAttribute(`aBone`,new w(a,3)),r.setAttribute(`aNrm`,new w(e.nrm.subarray(0,e.count*3),3)),r.setAttribute(`aSeed`,new w(n,4)),r.setDrawRange(0,B()?Math.min(e.count,Ce):e.count),r}var Ee=e=>`vec2(${e[0].toFixed(4)},${e[1].toFixed(4)})`,De=`
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
const vec2 NECK=${Ee(ne)}, TROOT=${Ee(re)};
const vec2 EARB0=${Ee(j[0].base)}, EARB1=${Ee(j[1].base)};
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
}`,Oe=`
precision highp float;
varying vec3 vColor; varying float vAlpha; varying float vCore;
void main(){
  vec2 d=gl_PointCoord-.5; float r2=dot(d,d)*4.; if(r2>1.) discard;
  // a tight halo: specks stay specks (no fog under the bloom)
  // white lives only in the tiny core (capped); the colour lives in the halo
  float core=exp(-r2*18.), halo=exp(-r2*5.)*(1.-r2);
  vec3 c=vColor*halo*.9+vec3(1.,.98,.95)*core*min(vCore,1.)*1.05;
  gl_FragColor=vec4(c*vAlpha,1.);
}`;function ke(t){return new T({vertexShader:De,fragmentShader:Oe,blending:2,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uT:{value:0},uGather:{value:0},uScatter:{value:0},uStill:{value:0},uAlpha:{value:1},uPulse:{value:0},uBeat:{value:0},uScale:{value:300},uDir:{value:1},uUnit:{value:1},uPx:{value:1},uHold:{value:0},uOrigin:{value:new D},uScr:{value:new D(1080,1920)},uPearl:{value:new D},uCtrl:{value:new D},uWell:{value:new e},uHudA:{value:new e},uHudB:{value:new e},uHue:{value:new a(.45,.95,1)},uView:t.uView}})}function Ae(e,t){let n=ye.get(e);if(n)return n;let r=Te(),i=ke(t),a=new b(r,i);return a.frustumCulled=!1,a.renderOrder=7,a.visible=!1,a.name=`noor-spirit`,e.add(a),n={pts:a,mat:i,warm:0,count:r.drawRange.count},ye.set(e,n),n}function je(e){e.warm===0?(e.pts.geometry.setDrawRange(0,0),e.pts.visible=!0,e.warm=1):e.warm===1&&(e.pts.geometry.setDrawRange(0,e.count),e.pts.visible=!1,e.warm=2)}var V=-1,Me=0,Ne=[[.36,.88,1],[1,.52,.42]];function Pe(e,t,n){let r=typeof performance<`u`?performance.now():0;C.seq===V?Me++:(V=C.seq,Me=0);let i=C.age,a=i>=0&&i<4.8&&!!n.board&&Me<4,o=ye.get(e),s=()=>{o&&(o.pts.visible=!1),f.k=0};if(!be){we(),s();return}if(!a){let n=Ae(e,t);n.warm<2?je(n):s();return}let c=n.reduced||C.reduced,l=n.board,u=t.uViewport.value,p=n.view??{x0:0,y0:0,x1:1,y1:1},m=u.x*(p.x1-p.x0),g=u.y*(p.y1-p.y0),_=e=>(e-p.x0)/(p.x1-p.x0)*m,v=e=>(e-p.y0)/(p.y1-p.y0)*g,y={W:m,H:g,well:{x0:_(l.x0),y0:v(l.y0),x1:_(l.x1),y1:v(l.y1)}},b=ge(y);if(!b){s();return}let S=Ae(e,t);S.warm<2&&(S.warm=1,je(S));let w=S.mat.uniforms,[T,E]=ve(i,b.rise,c,b.sway);w.uOrigin.value.set(b.ox+T,b.oy+E),w.uScr.value.set(m,g),w.uWell.value.set(y.well.x0,y.well.y0,y.well.x1,y.well.y1);let[D,ee]=b.hud;w.uHudA.value.set(...D??[0,0,0,0]),w.uHudB.value.set(...ee??[0,0,0,0]);let O=[C.hudX*m,C.hudY*g];w.uPearl.value.set(...O),w.uCtrl.value.set(b.portrait?y.well.x0*.55:(O[0]+b.ox)/2,b.portrait?y.well.y0-75*b.unit:Math.min(O[1],b.oy-le*b.scale)+40*b.unit),w.uScale.value=b.scale,w.uDir.value=b.dir,w.uUnit.value=b.unit,w.uPx.value=Math.max(1,u.y/1e3);let k=i/x,A=(i-x-d)/h;w.uT.value=c?0:n.time,w.uBeat.value=c?0:n.beat,w.uGather.value=c?1:Math.min(1,k),w.uScatter.value=c?0:Math.max(0,A),w.uHold.value=c?0:_e((i-x)/d),w.uStill.value=+!!c,w.uPulse.value=n.pulse,w.uHue.value.set(...Ne[C.hue&1]);let j=c?_e(i/x)*(1-_e(A)):1;w.uAlpha.value=(C.chain?.85:1)*j*.6*1,S.pts.visible=!0,C.shownAt=r;let M=b.ox+T+z*b.scale,N=Math.min(y.well.x0,b.ox+T+se*b.scale),P=b.oy+E+.02*b.scale,te=b.oy+E-le*b.scale;Object.assign(f,{x0:M/m,x1:N/m,y0:te/g,y1:P/g,k:c?j:Math.min(_e(i/x),1-_e(Math.max(0,A)))})}v.includes(Pe)||v.push(Pe),typeof window<`u`&&typeof performance<`u`&&we();var H=[[1,.46,.68],[.36,1,.62],[.56,.5,1],[1,.72,.3],[.36,.86,1]];function U(e){e-=Math.floor(e);let t=[1,.42,.66],n=[.3,.95,.92],r=[.32,.42,1],[i,a,o]=e<1/3?[t,n,e*3]:e<2/3?[n,r,e*3-1]:[r,t,e*3-2];return[i[0]+(a[0]-i[0])*o,i[1]+(a[1]-i[1])*o,i[2]+(a[2]-i[2])*o]}var W=[[0,.3],[20,.5],[40,.7],[60,.85],[70,1],[100,.45],[120,.3]];function Fe(e){if(!Number.isFinite(e))return .5;let t=Math.max(0,e),n=W[0][1];for(let e=1;e<W.length;e++){let[r,i]=W[e];n+=(i-W[e-1][1])*Z(r-1.5,r+.5,t)}return n}var Ie=.1,Le;function Re(e,t){if(!Number.isFinite(e))return t*.42;Le??=(()=>{let e=Math.ceil(130/Ie)+1,t=new Float32Array(e);for(let n=1;n<e;n++)t[n]=t[n-1]+Ie*(.26+.34*Fe((n-.5)*Ie));return t})();let n=Math.max(0,Math.min(129.9,e))/Ie,r=Math.floor(n);return Le[r]+(Le[r+1]-Le[r])*(n-r)}var ze=[0,20,40,70,100];function Be(e){if(!Number.isFinite(e))return 0;let t=e,n=0;for(let e of ze)e>0&&t>=e-.8&&t<e&&(n=Math.max(n,Z(e-.8,e-.05,t))),t>=e&&t<e+1.9&&(n=Math.max(n,e===0?1-Z(.2,1.9,t):1-Z(e+.25,e+1.9,t)));return n}var Ve=e=>Math.max(0,1-e*e)**.62,He=.95,Ue=.72,We=.1,G={BODY:0,HEAD:1,EAR_L:2,EAR_R:3,PAW_L:4,PAW_R:5,TAIL:6,PEARL:7,EYE_L:8,EYE_R:9},Ge=10,Ke=.98,qe=-2.1,Je=.22,Ye=.56,Xe=.45,Ze=[1,.74,.42],K=[1,.86,.62],q=[1,.96,.9],Qe=[.58,.98,.93],J=[1,.98,.95];function $e(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var et=(e,t,n)=>{let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25};function Y(e,t,n=0,r=0){let i=Math.cos(n),a=Math.sin(n),o=Math.cos(r),s=Math.sin(r);return(n,r,c)=>{let l=n-e[0],u=r-e[1],d=c-e[2],f=o*l+s*u,p=-s*l+o*u;l=f,u=p;let m=i*u+a*d,h=-a*u+i*d;u=m,d=h;let g=Math.hypot(l/t[0],u/t[1],d/t[2]),_=Math.hypot(l/(t[0]*t[0]),u/(t[1]*t[1]),d/(t[2]*t[2]));return _<1e-9?-Math.min(...t):g*(g-1)/_}}function tt(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2],s=i*i+a*a+o*o;return(t,c,l)=>{let u=t-e[0],d=c-e[1],f=l-e[2],p=Math.max(0,Math.min(1,(u*i+d*a+f*o)/s));return Math.hypot(u-i*p,d-a*p,f-o*p)-(n+(r-n)*p)}}var nt=(e,...t)=>(n,r,i)=>{let a=t[0](n,r,i);for(let o=1;o<t.length;o++)a=et(a,t[o](n,r,i),e);return a},rt=[Y([0,.6,.14],[.17,.25,.14])],it=nt(.11,Y([0,.24,-.05],[.31,.24,.27]),Y([0,.43,0],[.285,.27,.245]),Y([0,.7,.03],[.275,.2,.2]),Y([0,.83,.02],[.255,.1,.17]),rt[0]),at=nt(.05,Y([-.19,.76,.04],[.12,.1,.12]),Y([.19,.76,.04],[.12,.1,.12])),ot=nt(.04,Y([-.22,.2,-.05],[.14,.17,.22],.25,-.12),Y([.22,.2,-.05],[.14,.17,.22],.25,.12)),st=nt(.02,tt([-.2,.78,.12],[-.2,.6,.24],.066,.056),tt([.2,.78,.12],[.2,.6,.24],.066,.056)),ct=nt(.02,tt([-.17,.045,.02],[-.2,.042,.3],.045,.052),tt([.17,.045,.02],[.2,.042,.3],.045,.052)),lt=nt(.06,nt(.08,it,ot,at),st,ct),ut=[.2,.6,.24],dt=e=>nt(.05,tt([0,0,0],[-e*.07,-.1,.17],.056,.048),Y([-e*.1,-.12,.25],[.074,.048,.07],.45,-e*.55)),ft=dt(-1),pt=dt(1),mt=[0,-.015,.392],ht=[Y([-.19,.08,.1],[.16,.12,.14]),Y([.19,.08,.1],[.16,.12,.14]),tt([0,.07,.2],[0,-0,.355],.1,.036)],gt=[Y([-.29,.05,0],[.075,.045,.06],0,-.5),Y([.29,.05,0],[.075,.045,.06],0,.5)],_t=Y([0,-.04,-.02],[.22,.13,.17]),vt=nt(.12,Y([0,.19,0],[.33,.265,.3]),...ht,...gt,_t),yt=[.37,.5,.055],bt=e=>1-.72*Math.max(0,Math.min(1,e/1))**1.05,xt=(e,t)=>{let n=bt(t),r=e/(yt[0]*n);return .075*r*r-.03},St=(e,t,n)=>{let r=bt(t);return Y([0,.5,0],yt)(e/r,t,n+xt(e,t))*Math.min(1,r+.15)},Ct=e=>.035+.135*Math.max(0,Math.sin(Math.PI*Math.min(1,e)**.8))**.72+.02*(1-e),wt=(e,t,n)=>{let r=Math.max(0,Math.min(Ke,e));return Math.hypot(e-r,t,n*1.12)-Ct(r/Ke)},Tt=5,Et=(e,t)=>t*Math.max(0,Math.min(1,e/Ke))**1.25;function Dt(e,t,n,r){let i=Math.max(0,Math.min(Ke,e.x)),a=e.x-i,o=i/8,s=0,c=0;for(let e=0;e<8;e++){let t=Et((e+.5)*o,n);s+=Math.cos(t)*o,c-=Math.sin(t)*o}let l=Et(i,n),u=Math.cos(l),d=-Math.sin(l),f=Math.sin(l),p=Math.cos(l),m=i/Ke;e.set(s+u*a+f*e.z,e.y+r*i*m,c+d*a+p*e.z),t&&t.set(t.x*u+t.z*f,t.y,t.x*d+t.z*p)}function Ot(e,t,n,r){let i=Math.ceil((n[0]-t[0])/r)+1,a=Math.ceil((n[1]-t[1])/r)+1,o=Math.ceil((n[2]-t[2])/r)+1,s=new Float32Array(i*a*o);for(let n=0;n<o;n++)for(let o=0;o<a;o++)for(let c=0;c<i;c++)s[c+i*(o+a*n)]=e(t[0]+c*r,t[1]+o*r,t[2]+n*r);let c=new Int32Array((i-1)*(a-1)*(o-1)).fill(-1),l=[],u=[],d=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],f=new Float64Array(8),p=(t,n,i)=>{let a=r*.5,o=[e(t+a,n,i)-e(t-a,n,i),e(t,n+a,i)-e(t,n-a,i),e(t,n,i+a)-e(t,n,i-a)],s=Math.hypot(...o)||1;return[o[0]/s,o[1]/s,o[2]/s]};for(let e=0;e<o-1;e++)for(let n=0;n<a-1;n++)for(let o=0;o<i-1;o++){let m=0;for(let t=0;t<8;t++){let r=s[o+(t&1)+i*(n+(t>>1&1)+a*(e+(t>>2&1)))];f[t]=r,r<0&&(m|=1<<t)}if(m===0||m===255)continue;let h=0,g=0,_=0,v=0;for(let[e,t]of d){if(f[e]<0==f[t]<0)continue;let n=f[e]/(f[e]-f[t]),r=e&1,i=e>>1&1,a=e>>2&1,o=t&1,s=t>>1&1,c=t>>2&1;h+=r+(o-r)*n,g+=i+(s-i)*n,_+=a+(c-a)*n,v++}let y=t[0]+(o+h/v)*r,b=t[1]+(n+g/v)*r,x=t[2]+(e+_/v)*r;c[o+(i-1)*(n+(a-1)*e)]=l.length/3,l.push(y,b,x),u.push(...p(y,b,x))}let m=[],h=(e,t,n)=>e<0||t<0||n<0||e>=i-1||t>=a-1||n>=o-1?-1:c[e+(i-1)*(t+(a-1)*n)],g=(e,t,n,r)=>{if(!(e<0||t<0||n<0||r<0))for(let[i,a,o]of[[e,t,n],[e,n,r]]){let e=l[a*3]-l[i*3],t=l[a*3+1]-l[i*3+1],n=l[a*3+2]-l[i*3+2],r=l[o*3]-l[i*3],s=l[o*3+1]-l[i*3+1],c=l[o*3+2]-l[i*3+2],d=t*c-n*s,f=n*r-e*c,p=e*s-t*r;d*(u[i*3]+u[a*3]+u[o*3])+f*(u[i*3+1]+u[a*3+1]+u[o*3+1])+p*(u[i*3+2]+u[a*3+2]+u[o*3+2])>=0?m.push(i,a,o):m.push(i,o,a)}};for(let e=0;e<o;e++)for(let t=0;t<a;t++)for(let n=0;n<i;n++){let r=s[n+i*(t+a*e)]<0;n<i-1&&t>0&&e>0&&r!==s[n+1+i*(t+a*e)]<0&&g(h(n,t-1,e-1),h(n,t,e-1),h(n,t,e),h(n,t-1,e)),t<a-1&&n>0&&e>0&&r!==s[n+i*(t+1+a*e)]<0&&g(h(n-1,t,e-1),h(n,t,e-1),h(n,t,e),h(n-1,t,e)),e<o-1&&n>0&&t>0&&r!==s[n+i*(t+a*(e+1))]<0&&g(h(n-1,t-1,e),h(n,t-1,e),h(n,t,e),h(n-1,t,e))}return{pos:new Float32Array(l),nrm:new Float32Array(u),idx:m}}var kt=`
uniform vec4 uTail; // x curl, w lift (y, z unused)
// five bones, root to tip: each adds its angle over its fifth of the length
// (a spring chain: every bone lags the one before it), plus a vertical bend
uniform float uBones[5]; uniform float uBonesV[5];
float tailHeading(float x){ float s=clamp(x/${Ke.toFixed(3)},0.,1.); float h=uTail.x*pow(s,1.25);
 for(int k=0;k<5;k++) h+=uBones[k]*clamp(s*5.-float(k),0.,1.);
 return h; }
float tailRise(float x){ float y=0.; for(int k=0;k<5;k++) y+=uBonesV[k]*max(0.,x-float(k)*${(Ke/5).toFixed(4)}); return y; }
void bendTail(inout vec3 p, inout vec3 n){
 float x=clamp(p.x,0.,${Ke.toFixed(3)}), over=p.x-x, dx=x/8.;
 vec2 c=vec2(0.);
 for(int i=0;i<8;i++){ float th=tailHeading((float(i)+.5)*dx); c+=vec2(cos(th),-sin(th))*dx; }
 float th=tailHeading(x); vec2 tg=vec2(cos(th),-sin(th)), nr=vec2(sin(th),cos(th));
 vec2 xz=c+tg*over+nr*p.z;
 p=vec3(xz.x,p.y+uTail.w*x*x/${Ke.toFixed(3)}+tailRise(x),xz.y);
 n=vec3(n.x*tg.x+n.z*nr.x,n.y,n.x*tg.y+n.z*nr.y);
}`,At=`
uniform float uBend;
attribute float aVis;
varying vec3 vN; varying vec3 vV; varying float vVis; varying float vY; varying vec3 vW;
${kt}
void main(){
 vec3 p=position, n=normal;
 if(uBend>.5) bendTail(p,n);
 vec4 w=modelMatrix*vec4(p,1.); vY=w.y; vW=w.xyz; vec4 mv=viewMatrix*w;
 vN=normalize(normalMatrix*n); vV=normalize(-mv.xyz); vVis=aVis;
 gl_Position=projectionMatrix*mv; }`,jt=`
vec3 nacreRamp(float x){ x=fract(x);
 vec3 rose=vec3(1.,.42,.66), aqua=vec3(.3,.95,.92), lapis=vec3(.32,.42,1.);
 return x<.3333?mix(rose,aqua,x*3.):x<.6667?mix(aqua,lapis,x*3.-1.):mix(lapis,rose,x*3.-2.); }
// one strong hue per combo (uHueAt on the ramp), with only a narrow drift
uniform float uHueAt;
vec3 nacre(float j){ return nacreRamp(uHueAt+sin(j*6.2832)*.06); }`,Mt=`
uniform vec3 uTint; uniform float uRim; uniform float uGlow; uniform float uBright; uniform float uTime; uniform float uNacre;
uniform vec3 uPearlW; uniform float uPearlI; uniform vec3 uClearCol; uniform float uMask;
varying vec3 vN; varying vec3 vV; varying float vVis; varying float vY; varying vec3 vW;
${jt}
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
}`,Nt=`
varying vec3 vN; varying vec3 vV; varying vec3 vL;
void main(){ vL=position; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,Pt=`
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
}`,Ft=`
varying vec3 vN; varying vec3 vV; varying vec3 vL;
void main(){
 vec3 n=normalize(vN), v=normalize(vV); float fr=max(0.,1.-abs(dot(n,v)));
 vec3 col=vec3(1.,.82,.66)*(.1+.22*(1.-fr*fr));
 col+=vec3(1.)*pow(max(dot(n,normalize(vec3(-.4,.7,1.))),0.),30.)*.9;
 gl_FragColor=vec4(col,1.);
}`,It=`
uniform mat4 uParts[${Ge}];
uniform float uTime; uniform float uPx; uniform float uPulse; uniform float uLive; uniform float uPeel; uniform float uPeelFrac;
uniform float uEyeOpen; uniform float uHappyEyes; uniform float uGlow; uniform float uBright; uniform float uBoost;
uniform float uHue; uniform float uDust; uniform float uMinPx; uniform float uRimGain; uniform float uThin; uniform float uBeat; uniform float uLoose; uniform float uTwinkle;
uniform float uShadow; uniform float uShadowA; uniform float uOverlay;
uniform float uWave; uniform float uWaveTint; uniform vec3 uClearCol; uniform vec3 uPearlP; uniform float uSmall;
uniform float uBreathK; uniform float uUnwind; uniform float uUnwindP;
attribute vec3 aNormal; attribute float aPart; attribute vec4 aSeed; attribute vec3 aColor; attribute float aSize; attribute float aKind; attribute vec3 aDir;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
${kt}
${jt}
void main(){
 int pi=int(aPart+.5);
 vec3 lp=position, ln=aNormal, ld=aDir;
 if(pi==${G.TAIL}) bendTail(lp,ln);
 // breath: the chest swells along its normal and the shoulders rise (not a scale)
 if(pi==${G.BODY}){ float ch=smoothstep(.42,.66,lp.y)*(1.-smoothstep(.86,.98,lp.y)); float sh=smoothstep(.62,.84,lp.y)*smoothstep(.08,.22,abs(lp.x));
  lp+=ln*.014*uBreathK*ch*step(-.1,ln.z)+vec3(0.,.012*uBreathK*sh,0.); }
 // the ear tips curl on a slow noise field (~4% of the ear's length)
 if(pi==${G.EAR_L}||pi==${G.EAR_R}){ float tk=smoothstep(.42,1.,lp.y)*uLive; float ph=aPart*1.9;
  lp.x+=.04*tk*tk*(sin(uTime*.83+lp.y*4.2+ph)+.5*sin(uTime*1.37-lp.y*7.+ph*2.));
  lp.z+=.03*tk*tk*sin(uTime*.61+lp.y*3.1+ph); }
 // the ear streams drift on a slow curl field in the ear's own plane
 if(aKind>5.5&&aKind<6.5) lp+=vec3(sin(uTime*.9+aSeed.y*31.+lp.y*9.),.4*sin(uTime*.7+aSeed.z*23.),0.)*.006*aDir.z*uLive;
 mat4 M=uParts[pi];
 vec3 p=(M*vec4(lp,1.)).xyz;
 vec3 n=normalize(mat3(M)*ln);
 // face protect: the eyes and muzzle never peel, loosen or spill at a peak
 float fprot=0.;
 if(pi==${G.HEAD}){ vec3 fq=(lp-vec3(0.,.12,.3))/vec3(.27,.18,.2); fprot=1.-smoothstep(.75,1.15,length(fq)); }
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
 float uw=uUnwind*step(.55,aSeed.x)*(1.-fprot)*faceK*(pi==${G.PEARL}?0.:1.);
 if(uw>0.){
  float rs=fract(aSeed.y*1.618+aSeed.z*.37);
  float st=clamp(uw*1.7-aSeed.w*.7,0.,1.); st=st*st*(3.-2.*st);
  float th=6.2832*(rs*.62+uUnwindP)-1.2;
  float rr=.74+.05*(aSeed.z-.5)+.06*sin(rs*9.+uTime);
  vec3 rib=vec3(cos(th)*rr, .3+.95*rs+.07*(aSeed.w-.5)-.22*sin(th)*rr, sin(th)*rr*.8);
  p=mix(p,rib+vec3(0.,uParts[${G.BODY}][3].y,0.),st);
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
 float wk=uWaveTint*(band+.08*behind)*hueK*step(.25,aSeed.x)*(pi==${G.PEARL}?0.:1.);
 vColor=mix(aColor,mix(uClearCol,nac,.15),min(1.,wk*(aKind>8.5&&aKind<9.5?.5:.85)));
 // the quarter the hue skips burns white-hot ON the band only
 vColor=mix(vColor,vec3(1.,.97,.93),uWaveTint*band*hueK*(1.-step(.25,aSeed.x))*.85);
 // thumbnail LOD: half the count, the rest grow to carry the light
 float keep=aKind<.5||(aKind>8.5&&aKind<9.5)?step(uThin*.5,fract(aSeed.x*7.31)):1.;
 // small frames: the interior thins so the face and the silhouette carry the read
 if(aKind>8.5&&aKind<9.5) a*=1.-.15*uSmall;
 // thumbnails: the pearl's own dust stays faint so the pearl reads as a jewel, not a starburst
 if(pi==${G.PEARL}) a*=1.-.65*uThin;
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

}`,Lt=`
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
}`,Rt=`
uniform float uOverlay; uniform float uOvGain;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
void main(){
 vec2 q=gl_PointCoord*2.-1.; float d=dot(q,q); if(d>1.)discard;
 float a=vAlpha*(exp(-d*7.)+.25*exp(-d*2.5)*(1.-d)); vec3 c=vColor*a*uOvGain; gl_FragColor=vec4(c,max(c.r,max(c.g,c.b)));
}`,zt=`
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
void main(){
 vec2 q=gl_PointCoord*2.-1.; float d=dot(q,q); if(d>1.)discard;
 float a=min(vHot,(vHot>.5?1.-smoothstep(.55,1.,d):exp(-d*2.2)*(1.-d))*vAlpha); // rim <= 25%; the pupil is a dark eye, not a body fill
 gl_FragColor=vHot>.5?vec4(vColor,a):vec4(vColor*a,a);
}`,Bt=`
uniform float uTime; uniform float uPx; uniform float uPulse; uniform float uLive; uniform float uBreath; uniform float uRibbon;
uniform float uArcAge; uniform float uArcSide; uniform float uArcPow; uniform float uSpill;
uniform float uLandAge; uniform vec3 uPearl; uniform vec3 uMuzzle; uniform float uEnergy; uniform float uBright; uniform float uExhaleAge; uniform float uExhaleSeed; uniform float uBoost;
uniform float uStream; uniform vec3 uTarget; uniform float uHue; uniform float uOrbit; uniform float uBokeh; uniform vec3 uClearCol; uniform vec3 uFace; uniform float uLodK; uniform float uMinFx;
attribute vec4 aData; attribute vec4 aSeed; attribute float aKind;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
vec3 gold(float s){ return s<.42?vec3(1.,.97,.92):s<.8?vec3(1.,.84,.58):vec3(1.,.72,.42); }
${jt}
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
}`,Vt=`varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,Ht=`
uniform float uI; varying vec2 vUv;
void main(){ vec2 q=vUv*2.-1.; float d=length(q*vec2(1.,.9));
 float g=(exp(-d*d*5.)*.7+exp(-d*d*1.6)*.3)*(1.-smoothstep(.5,.98,d));
 vec3 c=mix(vec3(1.,.8,.5),vec3(.5,.36,.2),smoothstep(.1,.9,d));
 gl_FragColor=vec4(c*g*uI,g*uI*.2); }`,Ut=`
uniform sampler2D tIn; uniform vec2 uHalf; varying vec2 vUv;
void main(){
 vec4 c=texture2D(tIn,vUv)*4.;
 c+=texture2D(tIn,vUv+vec2(-uHalf.x,-uHalf.y))+texture2D(tIn,vUv+vec2(uHalf.x,-uHalf.y));
 c+=texture2D(tIn,vUv+vec2(-uHalf.x,uHalf.y))+texture2D(tIn,vUv+vec2(uHalf.x,uHalf.y));
 gl_FragColor=c*.125;
}`,Wt=`varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }`,Gt=`
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
}`,X,Kt=!1,qt=e=>(e.transparent=!0,e.depthWrite=!1,e.blending=5,e.blendEquation=100,e.blendSrc=204,e.blendDst=201,e.blendSrcAlpha=200,e.blendDstAlpha=201,e);function Jt(e,t,n,r){let{pos:i,nrm:a,idx:o}=Ot(e,t,n,r),s=new Float64Array(o.length/3),c=0;for(let e=0;e<o.length;e+=3){let t=o[e]*3,n=o[e+1]*3,r=o[e+2]*3,a=i[n]-i[t],l=i[n+1]-i[t+1],u=i[n+2]-i[t+2],d=i[r]-i[t],f=i[r+1]-i[t+1],p=i[r+2]-i[t+2];c+=.5*Math.hypot(l*p-u*f,u*d-a*p,a*f-l*d),s[e/3]=c}return{pos:i,nrm:a,idx:o,cdf:s,area:c}}function Yt(e,t,n,r){let i=t()*e.area,a=0,o=e.cdf.length-1;for(;a<o;){let t=a+o>>1;e.cdf[t]<i?a=t+1:o=t}let s=t(),c=t();s+c>1&&(s=1-s,c=1-c);let l=e.idx[a*3]*3,u=e.idx[a*3+1]*3,d=e.idx[a*3+2]*3,f=1-s-c;n.set(e.pos[l]*f+e.pos[u]*s+e.pos[d]*c,e.pos[l+1]*f+e.pos[u+1]*s+e.pos[d+1]*c,e.pos[l+2]*f+e.pos[u+2]*s+e.pos[d+2]*c),r.set(e.nrm[l]*f+e.nrm[u]*s+e.nrm[d]*c,e.nrm[l+1]*f+e.nrm[u+1]*s+e.nrm[d+1]*c,e.nrm[l+2]*f+e.nrm[u+2]*s+e.nrm[d+2]*c).normalize()}function Xt(){let n=new y({alpha:!0,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:`low-power`});n.setClearColor(0,0),n.setPixelRatio(1),n.setSize(256,256,!1),n.autoClear=!0;let d=n.extensions.has(`EXT_color_buffer_float`)||n.extensions.has(`EXT_color_buffer_half_float`),f={type:d?r:u,generateMipmaps:!1,minFilter:ee,magFilter:ee},h=[0,1].map(()=>({rt:new E(256,256,{...f,depthBuffer:!0}),down:[128,64,32,16].map(e=>new E(e,e,{...f,depthBuffer:!1}))})),{rt:v,down:x}=h[0],C=new g,O=new m(2*Math.atan(ln.span/16)*180/Math.PI,1,1,30),k=ln.span/2-ln.feetFromBottom;O.position.set(0,k,8),O.lookAt(0,k,0);let A=[];for(let e=0;e<Ge;e++)A.push(new t);let j=new t;C.add(j);let M=A[G.BODY];j.add(M);let N=A[G.HEAD];N.position.set(0,.895,.05),M.add(N);let P=A[G.EAR_L];P.position.set(-.2,.3,-.05),P.rotation.set(-.14,.3,.7),N.add(P);let te=A[G.EAR_R];te.position.set(.2,.3,-.05),te.rotation.set(-.14,-.3,-.7),N.add(te);let ne=A[G.PAW_L];ne.position.set(-ut[0],ut[1],ut[2]),M.add(ne);let re=A[G.PAW_R];re.position.set(ut[0],ut[1],ut[2]),M.add(re);let F={x:.135,y:.19,z:.268};for(let[e,t]of[[-1,G.EYE_L],[1,G.EYE_R]]){let n=A[t];n.position.set(e*F.x,F.y,F.z),n.rotation.set(-.05,e*.42,e*We),N.add(n)}let I=A[G.TAIL];I.position.set(.24,.12,-.12),I.rotation.set(-1.25,.35,0),M.add(I);let ie=A[G.PEARL];ie.position.set(0,Ye,Xe),M.add(ie),j.updateMatrixWorld(!0);let ae=new l;ae.position.set(0,-.04,.4),N.add(ae);let L={body:Jt(lt,[-.62,-.05,-.45],[.62,1.05,.5],.028),head:Jt(vt,[-.45,-.17,-.35],[.45,.52,.5],.026),ear:Jt(St,[-.34,-.05,-.12],[.34,1.06,.12],.022),tail:Jt(wt,[-.34,-.34,-.34],[1.32,.34,.34],.026),pawL:Jt(ft,[-.12,-.25,-.1],[.25,.1,.36],.016),pawR:Jt(pt,[-.25,-.25,-.1],[.12,.1,.36],.016)},oe=e=>new s().copy(e.matrixWorld).invert(),R=[{part:G.BODY,f:lt,m:oe(M)},{part:G.HEAD,f:vt,m:oe(N)},{part:G.EAR_L,f:St,m:oe(P)},{part:G.EAR_R,f:St,m:oe(te)},{part:G.PAW_L,f:ft,m:oe(ne)},{part:G.PAW_R,f:pt,m:oe(re)}],z=new a,se=(e,t)=>{let n=9;for(let r of R)r.part!==t&&(z.copy(e).applyMatrix4(r.m),n=Math.min(n,r.f(z.x,z.y,z.z)));return n},ce=(e,t,n,r,i)=>{r.copy(t),i&&n&&i.copy(n),e===G.TAIL&&Dt(r,i,qe,Je),r.applyMatrix4(A[e].matrixWorld),i&&i.transformDirection(A[e].matrixWorld)},le=(t,n,r=!1)=>{let i=new T({vertexShader:At,fragmentShader:Mt,transparent:!0,depthWrite:!1,side:0,uniforms:{uTint:{value:new a(...t)},uRim:{value:n},uGlow:{value:0},uBright:{value:1},uBend:{value:+!!r},uTail:{value:new e(qe,0,0,Je)},uBones:{value:[,,,,,].fill(0)},uBonesV:{value:[,,,,,].fill(0)},uTime:{value:0},uNacre:{value:0},uHueAt:{value:.33},uPearlW:{value:new a},uPearlI:{value:.5},uClearCol:{value:new a(1,.5,.7)},uMask:{value:0}}});return i.blending=5,i.blendEquation=100,i.blendSrc=201,i.blendDst=201,i.blendSrcAlpha=201,i.blendDstAlpha=201,i.blendEquationAlpha=104,i},ue=le(Ze,.8),de=le(K,.9),fe=le(Ze,.85,!0),pe=[ue,de,fe],me=[],he=new a,ge=(e,t,n)=>{let r=new p;r.setAttribute(`position`,new w(e.pos,3)),r.setAttribute(`normal`,new w(e.nrm,3)),r.setIndex(e.idx);let i=new Float32Array(e.pos.length/3);for(let n=0;n<i.length;n++){z.set(e.pos[n*3],e.pos[n*3+1],e.pos[n*3+2]),ce(t,z,null,he,null);let r=se(he,t);i[n]=Math.max(0,Math.min(1,(r+.005)/.05))}r.setAttribute(`aVis`,new w(i,1));let a=new c(r,n);if(a.renderOrder=0,a.frustumCulled=!1,A[t].add(a),t!==G.PAW_L&&t!==G.PAW_R){let e=new T({vertexShader:At,fragmentShader:`void main(){ gl_FragColor=vec4(0.); }`,uniforms:n.uniforms,colorWrite:!1,depthWrite:!0,depthTest:!0}),i=new c(r,e);i.renderOrder=-2,i.frustumCulled=!1,i.name=`depth`,A[t].add(i),me.push(i)}};ge(L.body,G.BODY,ue),ge(L.head,G.HEAD,ue),ge(L.ear,G.EAR_L,de),ge(L.ear,G.EAR_R,de),ge(L.tail,G.TAIL,fe),ge(L.pawL,G.PAW_L,ue),ge(L.pawR,G.PAW_R,ue);let _e=new _(1,40,28),ve=new T({vertexShader:Nt,fragmentShader:Pt,uniforms:{uTime:{value:0},uGlow:{value:0},uCap:{value:1.2},uTintC:{value:new a(1,1,1)},uTintK:{value:0},uSpec:{value:3.5}},transparent:!0}),ye=new c(_e,ve);ye.scale.setScalar(.13),ie.add(ye);let be=[A[G.EYE_L],A[G.EYE_R]],xe=[...be],Se=qt(new T({vertexShader:Nt,fragmentShader:Ft,depthTest:!1})),Ce=new c(_e,Se);Ce.position.set(mt[0],mt[1]+.014,mt[2]-.006),Ce.scale.set(.026,.018,.016),Ce.renderOrder=2,N.add(Ce);let B=$e(854946),we=[],Te=[],Ee=[],De=[],Oe=[],ke=[],Ae=[],je=[],V=(e,t,n,r,i,a,o=[0,1,0],s=B())=>{we.push(e.x,e.y,e.z),Te.push(t.x,t.y,t.z),Ee.push(n),De.push(B(),B(),B(),s);let c=.85+B()*.25;Oe.push(Math.min(1,r[0]*c),Math.min(1,r[1]*c),Math.min(1,r[2]*c)),ke.push(i),Ae.push(a),je.push(...o)},Me=()=>{let e=0;for(let t=0;t<4;t++)e+=B();return(e-2)*1.732},Ne=()=>Math.min(.06,Math.max(.005,.0135*Math.exp(.5*Me()))),Pe=new a(0,.05,1).normalize(),H=new a,U=new a,W=new a,Fe=new a,Ie=(e,t)=>{let n=R.find(e=>e.part===t);return z.copy(e).applyMatrix4(n.m),n.f(z.x,z.y,z.z)},Le=(e,t)=>t===G.BODY?1-Z(0,.1,Ie(e,G.HEAD)):t===G.HEAD?(1-Z(0,.24,Ie(e,G.BODY)))*(1-Z(.87,.97,e.y)):0,Re=(e,t,n,r,i=()=>0)=>{let a=0,o=0;for(;a<n&&o<n*14;){if(o++,Yt(e,B,H,U),ce(t,H,U,W,Fe),se(W,t)<.004)continue;let n=1-Math.abs(Fe.dot(Pe)),s=Le(W,t),c=(.14+.86*Math.max(0,Math.min(1,(n-.1)/.6))**1.5)*(1-.5*s);if(B()>Math.max(c,i(H)))continue;let l=B()<.005,u=!l&&B()<.22?-Math.log(1-B()*.95)*.016:0;u&&H.addScaledVector(U,u);let d=!u&&!l&&B()<.3?-Math.log(1-B()*.96)*.03:0;d&&H.addScaledVector(U,-d),V(H,U,t,B()<.08?J:r(H,U),l?.055+B()*.035:Ne()*(u?.75:d?.8:1),l?7:0,[0,1,Math.max(s,d?Math.min(.75,d/.06):0)]),a++}},ze=(e,t,n)=>e.some(e=>e(t.x,t.y,t.z)<n),Be=(e,t)=>ze(t,e,.012)?B()<.6?q:K:B()<.55?Ze:K,et=1300;Re(L.body,G.BODY,Math.round(L.body.area*et*.4),e=>Be(e,rt),e=>ze(rt,e,.01)?.3:0);let nt=[-1,1].map(e=>tt([e*.085,.155,.28],[e*.05,-0,.33],.02,.016)),at=Math.round(L.head.area*et*.6);{let e=0,t=0;for(;e<at&&t<at*14;){if(t++,Yt(L.head,B,H,U),ce(G.HEAD,H,U,W,Fe),se(W,G.HEAD)<.004||nt.some(e=>e(H.x,H.y,H.z)<.004))continue;if(H.z>.15){let e=Math.abs(H.x)-F.x,t=H.y-F.y,n=Math.cos(We),r=Math.sin(We),i=(n*e+r*t)/(.1*.91*1.12),a=(-r*e+n*t)/.076,o=Ve(Math.min(.999,Math.abs(i)));if(Math.abs(i)<1&&(a>0?a/(He*o):-a/(Ue*o))<1.15)continue}let n=1-Math.abs(Fe.dot(Pe)),r=(.07+.93*Math.max(0,Math.min(1,(n-.12)/.6))**1.4)*(1-.5*Le(W,G.HEAD)),i=ht[2](H.x,H.y,H.z)<.012&&H.z>.25,a=i?.4:ze(ht,H,.01)&&U.z>.2?H.z>.3?.6:.45:0;if(B()>Math.max(r,a))continue;let o=a>0&&B()<(i?.6:.7)?8:0,s=o===0&&B()<.3?-Math.log(1-B()*.96)*.028:0;s&&H.addScaledVector(U,-s),V(H,U,G.HEAD,B()<.08?J:i?K:Be(H,ht),Ne()*(i||s?.8:1),o,[0,1,Math.max(Le(W,G.HEAD),s?Math.min(.75,s/.06):0)]),e++}}for(let e=0,t=0;e<120&&t<6e4;t++){Yt(L.head,B,H,U);let t=H.y>.04&&H.y<.17&&Math.abs(H.x)<.022+(.17-H.y)*.22&&H.z>.24;if(!(ht[2](H.x,H.y,H.z)<.01&&H.z>.27||t)||U.z<.15||(ce(G.HEAD,H,U,W,Fe),se(W,G.HEAD)<.004||nt.some(e=>e(H.x,H.y,H.z)<.006)))continue;let n=Z(.3,.39,H.z),r=B()<.15?J:B()<.5?q:K,i=(.006+B()*.005)*(1-.4*n);V(H,U,G.HEAD,r,i,8,[0,1,0]),H.x=-H.x,U.x=-U.x,V(H,U,G.HEAD,r,i,8,[0,1,0]),e+=2}{let e=Math.round(L.tail.area*et*.55),t=[.66,.38,.19],n=0,r=0;for(;n<e&&r<e*14;){if(r++,Yt(L.tail,B,H,U),ce(G.TAIL,H,U,W,Fe),se(W,G.TAIL)<.004)continue;let e=H.x/Ke,i=1-Math.abs(Fe.dot(Pe)),a=(.06+.94*Math.max(0,Math.min(1,(i-.12)/.6))**1.4)*(e>.86?.75:1);if(B()>a)continue;let o=B()<.55+.35*Z(.75,.95,e)?-Math.log(1-B()*.95)*(.02+.02*e+.05*Z(.8,1,e)):0;o&&(H.addScaledVector(U,o),H.x+=o*1.8);let s=Math.max(0,Math.min(1,(e-.68)/.25)),c=B()<.07*(1-s)?J:B()<.6?Ze:K;V(H,U,G.TAIL,[c[0]+(t[0]-c[0])*s,c[1]+(t[1]-c[1])*s,c[2]+(t[2]-c[2])*s],Ne()*(o?.75:1),0),n++}}let ct=Y([0,.5,0],yt),dt=(e,t)=>{let n=.06;for(let r=0;r<6;r++){let r=ct(e/bt(t),t,n+xt(e,t));n-=r*.8}return n};for(let e of[G.EAR_L,G.EAR_R]){Re(L.ear,e,Math.round(L.ear.area*et*.42),()=>B()<.6?K:Ze);for(let t=0;t<620;t++){let t=B()*Math.PI*2,n=.5+Math.sin(t)*yt[1]*.985;if(n<.12)continue;let r=Math.cos(t)*yt[0]*bt(n)*.985,i=-xt(r,n)+(B()-.5)*.02;H.set(r,n,i),U.set(Math.cos(t),Math.sin(t)*.5,.15).normalize(),V(H,U,e,B()<.15?J:K,.01+B()*.014,0)}let t=e=>{let t=Math.max(0,Math.min(1,(e-.08)/.8));return[1-.22*t,.7+.24*t,.6+.32*t]};for(let n=0,r=0;n<560&&r<9e3;r++){let r=.08+B()*.82,i=B()*2-1,a=Math.abs(i)**3,o=1-(r-.08)/.82;if(B()>.12+.5*a+.6*o*o)continue;let s=i*.94*yt[0]*bt(r);H.set(s,r,dt(s,r)+.004),U.set(0,0,1),V(H,U,e,B()<.12?q:t(r),.0055+B()*.0045,2),n++}for(let n=0;n<300;n++){let n=Math.PI*(.5+(B()*2-1)*.9),r=.5+Math.sin(n)*yt[1]*.74-.04;if(r<.1)continue;let i=Z(.1,.85,r),a=Math.cos(n)*yt[0]*bt(r)*.6;H.set(a,r,dt(a,r)+.008),U.set(Math.cos(n),Math.sin(n)*.5,.15).normalize(),V(H,U,e,B()<.25?q:t(r),(.006+B()*.006)*(1.1-.35*i),0,[0,1,.45])}for(let n=0;n<7;n++){let r=-.62+n*.207+(B()-.5)*.04,i=.86-Math.abs(r)*.3;for(let n=0;n<3;n++){let a=[78,40,22][n];for(let o=0;o<a;o++){let a=B()**.85,o=.07+a*(i-.07),s=Me()*[.004,.012,.026][n],c=(r*(1-.15*a)+s*4)*yt[0]*bt(o)*.92;H.set(c,o,dt(c,o)+.006+n*.004),U.set(0,0,1),V(H,U,e,B()<.3?q:t(o),[.0065,.008,.011][n]*(.8+B()*.5),6,[a,n/2,.6+n*.7])}}}}Re(L.pawL,G.PAW_L,Math.round(L.pawL.area*et*3.2),()=>B()<.65?q:K),Re(L.pawR,G.PAW_R,Math.round(L.pawR.area*et*3.2),()=>B()<.65?q:K);let gt=(e,t,n,r)=>{for(let i=0;i<r;i++){let r=B()*2-1,a=B()*Math.PI*2,o=Math.sqrt(1-r*r);U.set(o*Math.cos(a),o*Math.sin(a),r);let s=1-Math.abs(U.z);B()>.2+.8*s||U.y<-.5?i--:(H.set(t[0]+U.x*n[0],t[1]+U.y*n[1],t[2]+U.z*n[2]),V(H,U,e,B()<.5?q:K,.01+B()*.016,0))}};for(let e of[-1,1]){for(let t=0;t<4;t++)gt(G.BODY,[e*.2+(t-1.5)*.034,.048,.35-Math.abs(t-1.5)*.012],[.015,.016,.016],30);for(let t=0;t<70;t++){let t=B();H.set(e*(.17+.03*t)+(B()-.5)*.012,.09-.02*t+(B()-.5)*.006,.02+.3*t),U.set(e*.3,.9,.2).normalize(),V(H,U,G.BODY,B()<.5?q:K,.008+B()*.008,0)}}for(let[e,t]of[[G.PAW_L,-1],[G.PAW_R,1]])for(let n=0;n<3;n++)gt(e,[-t*.112+(n-1)*.026*-t,-.12+Math.abs(n-1)*.008,.3],[.012,.012,.012],22);let _t=(e,t,n,r,i,a,o=1)=>{let s=0,c=0;for(;s<i&&c<i*60;){c++,H.set(n[0]+B()*(r[0]-n[0]),n[1]+B()*(r[1]-n[1]),n[2]+B()*(r[2]-n[2]));let i=e(H.x,H.y,H.z);if(i>-.012||t===G.HEAD&&Math.hypot((Math.abs(H.x)-F.x)/.13,(H.y-F.y)/.1)<1)continue;let l=.15+.85*(1-Z(.035,.2,-i));if(B()>l)continue;let u=a?Math.hypot(H.x-a[0],H.y-a[1],H.z-a[2]):9,d=Math.max(0,1-u/.3),f=d>.35&&B()<d?J:B()<.5?K:B()<.6?q:Ze;V(H,U.set(0,0,1),t,f,(.008+B()*.009)*(1+d*.5),9,[d,0,0],((.2+.26*B())*(.6+.6*l)+d*.5)*o),s++}};_t(lt,G.BODY,[-.5,0,-.32],[.5,1,.45],3e3,[0,Ye,Xe],.62),_t(vt,G.HEAD,[-.45,-.12,-.3],[.45,.48,.5],1200,null,.6),_t(wt,G.TAIL,[0,-.22,-.22],[Ke,.22,.22],1100,null,.75);let Ct=(e,t,n,r,i,a,o,s)=>{for(let c=0,l=0;c<i&&l<i*400;l++)Yt(e,B,H,U),!(!o(H,U)||Math.abs(n(H.x,H.y,H.z)-r(H.x,H.y,H.z))>a*(.6+.8*B()))&&(ce(t,H,U,W,Fe),!(se(W,t)<.004)&&(H.addScaledVector(U,-.006-B()*.01),V(H,U,t,B()<.3?J:s,.007+B()*.008,9,[.15,0,0],.32+.3*B()),c++))};Ct(L.body,G.BODY,ot,it,360,.014,(e,t)=>t.z>.05&&e.y<.42,K),Ct(L.body,G.BODY,st,it,220,.012,(e,t)=>t.z>.1,q);let Tt=Y([0,.19,0],[.33,.265,.3]);Ct(L.head,G.HEAD,ht[0],Tt,150,.012,(e,t)=>t.z>.15&&e.x<-.08&&e.y<.13,q),Ct(L.head,G.HEAD,ht[1],Tt,150,.012,(e,t)=>t.z>.15&&e.x>.08&&e.y<.13,q);for(let e=0;e<140;e++){let e=B()*2-1,t=B()*Math.PI*2,n=Math.sqrt(1-e*e),r=.16+Math.abs(Me())*.09;U.set(n*Math.cos(t),n*Math.sin(t),e),V(H.copy(U).multiplyScalar(r),U,G.PEARL,B()<.6?J:B()<.5?Qe:K,.006+B()*.01,0)}V(H.set(0,0,.02),U.set(0,0,1),G.PEARL,[.85,.97,1],.62,11,[0,1,0],.16);let Et=we.length/3;{let e=Array.from({length:Et},(e,t)=>t);for(let t=Et-1;t>0;t--){let n=Math.floor(B()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}let t=(t,n)=>{let r=t.slice();for(let i=0;i<Et;i++)for(let a=0;a<n;a++)t[i*n+a]=r[e[i]*n+a]};t(we,3),t(Te,3),t(Ee,1),t(De,4),t(Oe,3),t(ke,1),t(Ae,1),t(je,3)}let Ot=e=>{let t=new p;return t.setAttribute(`position`,new o(e.pos,3)),t.setAttribute(`aNormal`,new o(e.nrm,3)),t.setAttribute(`aPart`,new o(e.part,1)),t.setAttribute(`aSeed`,new o(e.seed,4)),t.setAttribute(`aColor`,new o(e.col,3)),t.setAttribute(`aSize`,new o(e.size,1)),t.setAttribute(`aKind`,new o(e.kind,1)),t.setAttribute(`aDir`,new o(e.dir,3)),t},kt=[];for(let e=0;e<Ge;e++)kt.push(new s);let jt=qt(new T({vertexShader:It,fragmentShader:Lt,uniforms:{uParts:{value:kt},uTime:{value:0},uPx:{value:600},uPulse:{value:0},uLive:{value:1},uPeel:{value:0},uPeelFrac:{value:.3},uEyeOpen:{value:1},uHappyEyes:{value:0},uGlow:{value:0},uBright:{value:1},uBoost:{value:1},uTail:{value:new e(qe,0,0,Je)},uHue:{value:0},uDust:{value:0},uMinPx:{value:1.5},uRimGain:{value:1},uThin:{value:0},uBeat:{value:0},uLoose:{value:0},uTwinkle:{value:.45},uShadow:{value:0},uShadowA:{value:.25},uOverlay:{value:0},uHueAt:{value:.33},uWave:{value:0},uWaveTint:{value:0},uClearCol:{value:new a(1,.5,.7)},uPearlP:{value:new a},uSmall:{value:0},uBones:{value:[,,,,,].fill(0)},uBonesV:{value:[,,,,,].fill(0)},uBreathK:{value:0},uUnwind:{value:0},uUnwindP:{value:0}}}));jt.depthTest=!1;let X=new b(Ot({pos:we,nrm:Te,part:Ee,seed:De,col:Oe,size:ke,kind:Ae,dir:je}),jt);X.geometry.setDrawRange(0,Et),X.frustumCulled=!1,X.renderOrder=1,C.add(X);let Kt=e=>{let t=new T({vertexShader:It,fragmentShader:zt,uniforms:{...jt.uniforms,uShadow:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,blending:5});return e?(t.blendEquation=104,t.blendEquationAlpha=104):(t.blendEquation=100,t.blendSrc=204,t.blendDst=205,t.blendSrcAlpha=201,t.blendDstAlpha=205),t},Xt={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]};for(let e=0,t=0;e<Et;e++)Ae[e]===0&&t++%3==0&&(Xt.pos.push(we[e*3],we[e*3+1],we[e*3+2]),Xt.nrm.push(Te[e*3],Te[e*3+1],Te[e*3+2]),Xt.part.push(Ee[e]),Xt.seed.push(De[e*4],De[e*4+1],De[e*4+2],De[e*4+3]),Xt.col.push(0,0,0),Xt.size.push(ke[e]),Xt.kind.push(0),Xt.dir.push(je[e*3],je[e*3+1],je[e*3+2]));let Zt=Ot(Xt),Qt=Xt.kind.length,$t=new b(Zt,Kt(!0));$t.name=`silhouette`,$t.frustumCulled=!1,$t.renderOrder=-.5,C.add($t);let Q={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]},$=(e,t,n,r,i,a=J,o=1,s=G.HEAD,c=[0,1,0])=>{Q.pos.push(e,t,n),Q.nrm.push(0,0,1),Q.part.push(s),Q.seed.push(B(),B(),i===5&&o<0?1:i===10?B():0,Math.abs(o)),Q.col.push(...a),Q.size.push(r),Q.kind.push(i),Q.dir.push(...c)},en=.1,tn=.076,nn=.03,rn=(e,t)=>{let n=Ve(Math.min(.999,Math.abs(e)));return Math.max(Math.abs(e),n<=0?9:t>0?t/(He*n):-t/(Ue*n))+Math.max(0,Math.abs(e)-1)},an=e=>nn*Math.sqrt(Math.max(0,1-e*e*.8))+.004;for(let e of[G.EYE_L,G.EYE_R]){for(let t=0,n=0;t<440&&n<12e3;n++){let n=(B()*2-1)*1.6,r=(B()*2-1)*1.6,i=rn(n,r);i<1.02||i>1.45||B()>(1-(i-1.02)/.43)**2.4||($(n*en,r*tn,nn*.2,.006+B()*.007,8,B()<.6?K:Ze,1,e,[0,0,1]),t++)}for(let t=0,n=0;t<420&&n<12e3;n++){let n=B()*2-1,r=B()*2-1,i=rn(n,r);if(i>.97)continue;let a=Math.hypot(n/.36,(r-.08)/.62),o=Z(.2,-.8,r),s=Z(.6,.97,i);if(B()>.35+.4*o+.25*s)continue;let c=o>.5?B()<.25?Qe:[1,.66,.34]:[.55,.36,.22];$(n*en,r*tn,an(i)*.6,.006+B()*.005,10,c,(.035+.16*o+.06*s)*(a<1?.25:1)*(.6+.6*B()),e),t++}$(-.3*en,.36*tn,.038,.048,3,J,1,e),$(.32*en,-.36*tn,.036,.014,3,[.85,1,.96],.5,e);for(let t=0;t<32;t++){let n=t/31,r=-.86+1.72*n,i=Ve(Math.min(.99,Math.abs(r))),a=Math.sin(Math.PI*(.06+.88*n));$(r*en,i*He*1.12*tn+.005,nn*.6,.0045+.005*a,5,B()<.3?J:K,-(.3+.6*a),e)}}for(let e of[-1,1]){let t=e*F.x,n=F.y,r=F.z+.03;for(let e=0;e<=20;e++){let i=Math.PI*(.12+.76*e/20);$(t+Math.cos(i)*.07,n-.025+Math.sin(i)*.05,r,.03,4,[1,.9,.7])}for(let t=0;t<=16;t++){if(B()<.25)continue;let n=t/16+(B()-.5)*.03,r=e*(.085+-.035*n),i=.155+-.155*n,a=.29+(.33-.29)*n;$(r+e*.03*(1-n*.3),i+.004,a,.01+B()*.008,5,q,.22+B()*.18)}}$(0,mt[1]+.02,mt[2]+.012,.016,3,J,.55);for(let e=0;e<=22;e++){let t=-1.25+2.5*e/22,n=Math.cos(t*1.1);$(Math.sin(t)*.1,mt[1]-.035-.045*Math.cos(t),mt[2]-.05-.05*(1-Math.cos(t)),.006+.003*n,5,K,.16+.12*n)}for(let e of[-1,1])for(let[t,n]of[[.012,.045],[-.006,-.002],[-.024,-.05]])for(let r=0;r<10;r++){let i=r/9;$(e*(.07+.12*i),t+(n-t)*i+.01*Math.sin(i*Math.PI),.33-.06*i,.011*(1-.6*i),5,i<.25?J:q,1-.75*i)}for(let e of[-1,1])for(let t=0;t<7;t++){let n=t/6;$(e*.034*n,mt[1]-.026-.016*Math.sin(n*Math.PI),mt[2]-.014-.012*n,.006,5,K,.42)}for(let e=0;e<4;e++)$(0,mt[1]-.004-e*.006,mt[2]-.004,.006,5,K,.42);let on=new b(Ot(Q),jt);on.frustumCulled=!1,on.renderOrder=3,C.add(on);let sn=e=>{let t={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]};for(let n=0;n<Q.kind.length;n++)e(Q.kind[n],n)&&(t.pos.push(Q.pos[n*3],Q.pos[n*3+1],Q.pos[n*3+2]),t.nrm.push(Q.nrm[n*3],Q.nrm[n*3+1],Q.nrm[n*3+2]),t.part.push(Q.part[n]),t.seed.push(Q.seed[n*4],Q.seed[n*4+1],Q.seed[n*4+2],Q.seed[n*4+3]),t.col.push(Q.col[n*3],Q.col[n*3+1],Q.col[n*3+2]),t.size.push(Q.size[n]),t.kind.push(Q.kind[n]),t.dir.push(Q.dir[n*3],Q.dir[n*3+1],Q.dir[n*3+2]));return Ot(t)},cn=new g,un=sn(e=>e>=3&&e<=5);{let e=new T({vertexShader:It,fragmentShader:Rt,uniforms:{...jt.uniforms,uOverlay:{value:2},uOvGain:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,blending:5});e.blendEquation=100,e.blendSrc=201,e.blendDst=201,e.blendSrcAlpha=201,e.blendDstAlpha=201;let t=new b(un,e);t.frustumCulled=!1,t.renderOrder=2,cn.add(t)}let dn={d:[],sd:[],kd:[]},fn={d:[],sd:[],kd:[]},pn=dn,mn=(e,t,n,r,i)=>{pn.d.push(t,n,r,i),pn.sd.push(B(),B(),B(),B()),pn.kd.push(e)};for(let e=0;e<300;e++){let e=B()*2-1,t=B()*Math.PI*2,n=Math.sqrt(1-e*e),r=.95+B()*.7;mn(0,n*Math.cos(t)*r*1.05,n*Math.sin(t)*r*.95,e*r*.8,B()<.05?.07+B()*.06:.012+B()*.02)}for(let e=0;e<2;e++)for(let t=0,n=e?420:680;t<n;t++)mn(1,B(),e,Me(),.008+B()*B()*.02);for(let e=0;e<150;e++)mn(3,B()*Math.PI*2,Math.min(1,Math.max(0,.45+Me()*.22)),0,.01+B()*.016);for(let[e,t,n,r,i]of[[16,-4.2,-3.2,.1,2.6],[10,-2,-1.2,.15,2.1],[6,2.2,3,.145,1.5]])for(let a=0;a<e;a++){let e=t+B()*(n-t),a=(B()*2-1)*i,o=1.05+(B()*2-1)*i*.95;Math.abs(a)<.5&&e>0&&(a+=Math.sign(a||1)*.6),mn(4,a,o,e,r*(.8+B()*.45))}for(let e=0;e<70;e++)mn(5,0,0,0,.012+B()*.02);pn=fn;for(let e=0;e<700;e++){let e=B()<.5?(B()-.5)*.3:B()*2-1;mn(2,B(),e,0,.012+B()*.018)}for(let e=0;e<440;e++){let e=B()*2-1,t=B()*Math.PI*2,n=Math.sqrt(1-e*e);mn(6,n*Math.cos(t)*1.4,n*Math.sin(t)*.5-.1,Math.abs(e)*.8+.35,.014+B()*.024)}for(let e=0;e<700;e++)mn(7,B(),B()*2-1,B(),.012+B()*.018);let hn=qt(new T({vertexShader:Bt,fragmentShader:Lt,uniforms:{uTime:{value:0},uPx:{value:600},uPulse:{value:0},uLive:{value:1},uBreath:{value:0},uRibbon:{value:.3},uArcAge:{value:-1},uArcSide:{value:1},uArcPow:{value:1},uSpill:{value:.5},uLandAge:{value:9},uPearl:{value:new a},uMuzzle:{value:new a},uEnergy:{value:0},uBright:{value:1},uExhaleAge:{value:9},uExhaleSeed:{value:0},uBoost:{value:1},uStream:{value:0},uTarget:{value:new a(1.4,-.5,1)},uHue:{value:0},uOrbit:{value:0},uBokeh:{value:.4},uHueAt:{value:.33},uClearCol:{value:new a(1,.5,.7)},uFace:{value:new a},uLodK:{value:1},uMinFx:{value:1}}}));hn.depthTest=!0;let gn=e=>{let t=e.kd.length,n=Array.from({length:t},(e,t)=>t);for(let e=t-1;e>0;e--){let t=Math.floor(B()*(e+1)),r=n[e];n[e]=n[t],n[t]=r}n.sort((t,n)=>(e.kd[t]===4?0:1)-(e.kd[n]===4?0:1));let r=new Float32Array(t*4),i=new Float32Array(t*4),a=new Float32Array(t);n.forEach((t,n)=>{for(let a=0;a<4;a++)r[n*4+a]=e.d[t*4+a],i[n*4+a]=e.sd[t*4+a];a[n]=e.kd[t]});let o=new p;o.setAttribute(`position`,new w(new Float32Array(t*3),3)),o.setAttribute(`aData`,new w(r,4)),o.setAttribute(`aSeed`,new w(i,4)),o.setAttribute(`aKind`,new w(a,1));let s=new b(o,hn);return s.frustumCulled=!1,s.renderOrder=4,C.add(s),s},_n=gn(dn),vn=gn(fn),yn=dn.kd.length,bn=fn.kd.length,xn=qt(new T({vertexShader:Vt,fragmentShader:Ht,uniforms:{uI:{value:.2}}}));xn.depthTest=!1;let Sn=new c(new S(3.2,3.2),xn);Sn.position.set(0,1.05,-1.2),Sn.renderOrder=-1,C.add(Sn);let Cn=new T({vertexShader:Wt,fragmentShader:Gt,depthTest:!1,depthWrite:!1,blending:0,uniforms:{tSrc:{value:v.texture},tB1:{value:x[0].texture},tB2:{value:x[1].texture},tB3:{value:x[2].texture},tB4:{value:x[3].texture},uTexel:{value:new D(1/256,1/256)},uBloom:{value:.8},uHalo:{value:0},uExpo:{value:1},uWide:{value:0},uSat:{value:0},uBack:{value:0},uWin:{value:new e(-1,-1,2,2)},uFea:{value:new e(.01,.01,.01,.01)},uRound:{value:0}}}),wn=new T({vertexShader:Wt,fragmentShader:Ut,depthTest:!1,depthWrite:!1,blending:0,uniforms:{tIn:{value:v.texture},uHalf:{value:new D}}}),Tn=new g,En=new c(new S(2,2),Cn);En.frustumCulled=!1,Tn.add(En);let Dn=new i(-1,1,1,-1,0,1);try{n.setRenderTarget(v),n.compile(C,O),En.material=wn,n.setRenderTarget(x[0]),n.compile(Tn,Dn),En.material=Cn,n.setRenderTarget(null),n.compile(Tn,Dn),n.compile(cn,O)}catch{}return{depthMeshes:me,overlay:cn,overlayCount:un.attributes.position.count,pupilCount:0,r:n,scene:C,cam:O,groups:A,root:j,eyes:be,eyeWorld:xe,speck:jt,fx:hn,aura:xn,pearl:ve,shells:pe,tailShell:fe,partM:kt,muzzle:ae,rt:v,down:x,sets:h,frame:0,downMat:wn,quad:En,comp:Cn,compScene:Tn,compCam:Dn,hdr:d,specks:Et+Q.pos.length/3,speckGeo:X.geometry,bodySpecks:Et,shadowGeo:Zt,shadowCount:Qt,shadowPts:$t,fxIdlePts:_n,fxReactPts:vn,fxIdle:yn,fxReact:bn}}var Zt=e=>Math.max(0,Math.min(1,e)),Z=(e,t,n)=>{let r=Zt((n-e)/(t-e));return r*r*(3-2*r)},Qt=e=>e-Math.floor(e),$t=(e,t,n)=>{let r=((e+n)%t+t)%t;return r<.32?Math.sin(r/.32*Math.PI)*Math.sin(r/.32*Math.PI*2):0};function Q(e){let t=(e%5.3+5.3)%5.3,n=0;t>4.9&&t<5.12&&(n=Math.sin((t-4.9)/.22*Math.PI));let r=(e%11.7+11.7)%11.7;return r>2.2&&r<2.38&&(n=Math.max(n,Math.sin((r-2.2)/.18*Math.PI))),n}var $=2.5,en=e=>-Math.sin(e*.72)*.035*.9+Math.sin(e*.53)*.07+Math.sin(e*.21)*.04;function tn(e){let t=!!e.reducedMotion,n=Number.isFinite(e.time)?e.time:0,r=Zt(Number.isFinite(e.music)?e.music:0),i=Zt(Number.isFinite(e.energy)?e.energy:0),a=Number.isFinite(e.clearAge)&&e.clearAge>=0?e.clearAge:99,o=!t&&Number.isFinite(e.spiritAge)&&e.spiritAge>=0&&e.spiritAge<a;o&&(a=e.spiritAge);let s=!t&&Number.isFinite(e.spiritAge)&&e.spiritAge>=0?e.spiritAge:-1,c=s>=0?Z(0,.6,s)*(1-Z(3.1,3.7,s)):0,l=s>=0?Z(.15,.5,s)*(1-Z(3.4,3.8,s)):0,u=Math.max(-1,Math.min(1,e.spiritX??-.85))*.6,d=Number.isFinite(e.landAge)&&e.landAge>=0?e.landAge:99,f=o?3:Number.isFinite(e.chain)?e.chain:1,p=Number.isFinite(e.clearGap)?e.clearGap:0,m=Math.max(-1,Math.min(1,o?e.spiritX??0:Number.isFinite(e.clearX)?e.clearX:0)),h=a<2.2?Math.sin(Math.min(1,a/.18)*Math.PI/2)*Math.exp(-a*1.6):0,g=!t&&a<2.4,_=0;if(Number.isFinite(e.bar)&&a<99){let t=(e.bar-a/$)*16;_=(Math.ceil(t)-t)/16*$}let v=a-Math.max(.08,_),y=g?v<0?Math.sin(Math.min(1,a/.08)*Math.PI/2):Math.exp(-v*14):0,b=g&&v>0?(1-Math.exp(-v*16))*Math.exp(-v*1.9):0,x=g&&v>0?Math.min(1,1.35*(1-Math.exp(-v*11))*Math.exp(-v*v*3.6)):0,S=!t&&d<.4?Math.sin(d/.4*Math.PI)*Math.exp(-d*3):0,C=e=>1+2.9*(e-1)**3+1.9*(e-1)**2,w=v/.35,T=g&&f>=3&&v>0&&w<1?.2*(w<.45?C(w/.45):1-((w-.45)/.55)**2):0,E=T>0?T:g&&v>0&&v<.42?Math.sin(v/.42*Math.PI)*(.05+.05*i):!t&&e.happy?Math.abs(Math.sin(n*4.2))*.05:0,D=Number.isFinite(e.bar)?Qt(e.bar)*$:9,ee=g&&f<2&&a<.9?Math.sin(a/.25*Math.PI*2)*Math.exp(-a*7):c>.5&&D<.9?Math.sin(D/.25*Math.PI*2)*Math.exp(-D*7)*c:0,O=g&&f===2?Math.sin(Math.min(1,a/.16)*Math.PI/2)*Math.exp(-Math.max(0,a-.16)*1.5):0,k=g&&f>=2?Math.exp(-Math.max(0,v)*5)*+(v>0):0,A=Number.isFinite(e.bar)?e.bar:n/3.2,j=t?0:Math.cos(Math.PI*2*A),M=t?9:Qt(A)*(Number.isFinite(e.bar)?$:3.2),N=e.happy||a<1.6&&(f>=2||p>=2),P=e.happy?1:N&&!t?Z(0,.1,a)*(1-Z(1.2,1.6,a))*(1-l):0,te=!t&&!N&&a>.04&&a<.24?Math.sin((a-.04)/.2*Math.PI):0,ne=t?0:a<1.6?Z(.05,.25,a)*(1-Z(1.1,1.6,a)):0,re=Math.max(ne,c),F=t?0:(e.lookX??0)*(1-re)+(c>=ne?u:m)*re,I=t?0:(e.lookY??0)*(1-re)+.55*re,ie=t?0:Math.sin(n*.72)*.035,ae=t?0:en(n),L=t?.5+.5*Math.sin(n*Math.PI*2/6):0,oe=f>=2?Zt((f-1)/2):0,R=a<3.2?oe*Z(0,.4,a)*(1-Z(1.8,3.2,a)):0,z=Zt(R+Math.max(0,i-.75)*.6)*(e.reducedFlash?.6:1),se=!t&&Number.isFinite(e.bar)?Math.exp(-Qt(e.bar*4)*5):0,ce=t?0:.6*Be(e.songTime),le=Number.isFinite(e.bar),ue=le?e.bar*$:n,de=Fe(e.songTime),fe=.2,pe=g&&f>=3&&v>fe&&v<1.25?(v-fe)/1.05:-1;return{unwind:pe>=0?Math.sin(Math.PI*pe)*(e.reducedFlash?.6:1):0,unwindP:pe>=0?.5-.5*Math.cos(Math.PI*pe):0,hopK:g&&f>=3?1:0,t:n,rm:t,music:t?0:r,energy:i,clear:h,crouch:y,rise:b,peel:x,scatter:x,land:S,hop:E,breath:j,happyEyes:P,exhaleAge:M,exhaleSeed:Math.floor(A),eyeOpen:t?1:1-Math.max(Q(n),te),sway:ie,lookX:F,lookY:I,yaw:(t?0:Math.sin(n*.23)*.12)+F*.3+.04,headTilt:ae,headNod:t?0:-.035*j-.12*y+.1*b+I*.16,earLag:t?0:(en(n-.12)-en(n))*2.2,earL:t?0:(le?$t(ue,2*$,0):$t(n,(e.thumb??0)>0?2.6:4.3,.7))*.22+r*.05,earR:t?0:(le?$t(ue,4*$,-2.5*$):$t(n,(e.thumb??0)>0?3.4:6.1,2.9))*-.22-r*.05,earPerk:t?0:b*.35-y*.22-S*.18-T*1.6,flick:ee,flickSide:c>.5?u>=0?1:-1:m>=0?1:-1,gaze:c,lean:t?0:-m*.16*O-(m===0?.06*O:0),pearlPulse:k,tailWag:t?0:b*.6,glow:Zt(.25+r*.3+h*(e.reducedFlash?.25:.45-.2*i)+i*.15+L*.12),glowBreath:L,ribbon:(t?.3:.26+i*.2+r*.12)+h*(e.reducedFlash?.12:.3),arcAge:!t&&a<2?v:-1,arcSide:m>=0?1:-1,spill:(t?0:Math.min(1,(.3+i*.4)*(1+1.5*R)))*(e.reducedFlash?.6:1),landAge:t?9:d,combo:R,hue:z,beat:se,dust:ce,phrase:de,beatPhase:t?0:Qt(Number.isFinite(e.bar)?e.bar*4:n*1.6),hueAt:f>=4&&a<3.2?.4:f>=3&&a<3.2?.36:.02,loose:t?0:R*(e.reducedFlash?.4:1)+(t?0:x*.25),orbit:t?0:Re(e.songTime,n),twinkle:t?0:.45+.35*de,stream:t||a>=2?0:.25+.75*R+.15*i,wide:R*(e.reducedFlash?.5:1),gestureAge:g&&v>0?v:-1,wave:a<3?t?1:1-(1-Math.min(1,a/.9))**2.2:0,waveTint:a<3?Z(0,.4,a)*(a<.5?1:Math.exp(-(a-.5)/1.2*3))*(e.reducedFlash?.6:1)*(f>=2||o?1:.65):0,clearCol:Number.isFinite(e.clearType)?H[Math.max(0,Math.min(4,Math.round(e.clearType)))]:U(f>=4?.4:f>=3?.36:.02)}}function nn(e){let t=e.t,n=e.land*.08+e.crouch*.07,r=e.rise*.24,i=(e,t)=>e>0&&e<4?e/t*Math.exp(1-e/t):0,a=e.gestureAge,o=e.landAge,s=[],c=[];for(let n=0;n<5;n++){let r=n*.0875,l=1+.45*n,u=t-r,d=Math.sin(u*.72)*.035+e.lean;s.push(e.rm?0:l*(.035*Math.sin(u*1.1)+.018*Math.sin(u*.53+1)+d*.5)+i(a-r,.13+.025*n)*(.08+.045*n)*e.arcSide+i(o-r,.11+.02*n)*.035*l),c.push(e.rm?0:-i(a-r,.16+.03*n)*(.05+.03*n)*(.4+2.5*e.hopK)+i(a-r-.3,.2)*.04*e.hopK+i(o-r,.12)*.04)}let l=s[0],u=s[4];return{root:{y:e.hop-e.crouch*.03,yaw:e.yaw,roll:e.sway+e.lean,sx:1+n*.6-e.breath*.006,sy:1-n+e.breath*.03,sz:1+n*.6},head:{x:e.headNod,y:e.lookX*.32+(e.rm?0:Math.sin(t*.31)*.07),z:e.headTilt},earL:{x:-.14-e.earPerk*.5+e.breath*.04-(e.flickSide<0?e.flick*.3:0),y:.3,z:.7-e.earPerk+e.earL+e.earLag+e.lean*.6+(e.flickSide<0?e.flick*.45:0)},earR:{x:-.14-e.earPerk*.5+e.breath*.04-(e.flickSide>0?e.flick*.3:0),y:-.3,z:-.7+e.earPerk+e.earR+e.earLag+e.lean*.6-(e.flickSide>0?e.flick*.45:0)},pearlScale:(1+.28*e.pearlPulse)*(1+.02*(1-Math.cos(2*Math.PI*e.beatPhase))),pearlY:Ye+r+e.breath*.006,pearlZ:Xe+r*.8,pawRot:-r*1.5+e.breath*.01,tail:{curl:qe,base:l,tip:u,lift:Je+e.rise*.25,bones:s,bonesV:c}}}var rn={t:-1e9,col:[1,.5,.7],at:.02};function an(t,r,i=720){if(Kt)return null;try{X??=Xt()}catch(e){return Kt=!0,typeof console<`u`&&console.warn(`dubai light unavailable`,e),null}let a=X,o=tn(r),s=nn(o);{let e=o.t-rn.t;rn.t=o.t;let t=e>0&&e<1?1-Math.exp(-e/.35):1;for(let e=0;e<3;e++)rn.col[e]+=(o.clearCol[e]-rn.col[e])*t;rn.at+=(o.hueAt-rn.at)*t,o.clearCol=[rn.col[0],rn.col[1],rn.col[2]],o.hueAt=rn.at}let c=Math.max(64,Math.min(i,Math.round(t))),l=a.r.domElement.width,u=l>=c&&l<=Math.min(i,Math.max(c+64,c*1.18))?l:Math.max(64,Math.min(i,Math.ceil(c/32)*32)),d=Number.isFinite(r.screenPx)&&r.screenPx>0?u/r.screenPx:1;t=Number.isFinite(r.screenPx)&&r.screenPx>0?r.screenPx:t;let f=a.r.domElement;if(f.width!==u||f.height!==u){a.r.setSize(u,u,!1),a.comp.uniforms.uTexel.value.set(1/u,1/u);for(let e of a.sets)e.rt.setSize(u,u),e.down.forEach((e,t)=>e.setSize(Math.max(4,u>>t+1),Math.max(4,u>>t+1)))}let p=o.t,m=a.groups;a.root.position.set(0,s.root.y,0),a.root.rotation.set(0,s.root.yaw,s.root.roll),a.root.scale.set(s.root.sx,s.root.sy,s.root.sz),m[G.HEAD].rotation.set(s.head.x,s.head.y,s.head.z),m[G.EAR_L].rotation.set(s.earL.x,s.earL.y,s.earL.z),m[G.EAR_R].rotation.set(s.earR.x,s.earR.y,s.earR.z),m[G.PEARL].position.set(0,s.pearlY,s.pearlZ),m[G.PAW_L].rotation.set(s.pawRot,0,0),m[G.PAW_R].rotation.set(s.pawRot,0,0);let h=o.eyeOpen*(1-o.happyEyes),g=1-Z(110,210,t*ln.creatureHeight/ln.span),_=1+.3*g;for(let e of a.eyes)e.scale.set(_,_*Math.max(.08,h),_);m[G.PEARL].scale.setScalar((1+.2*g)*s.pearlScale),a.scene.updateMatrixWorld(!0);for(let e=0;e<Ge;e++)a.partM[e].copy(m[e].matrixWorld);let v=new e(s.tail.curl,0,0,s.tail.lift),y=1-(o.rm?.14*(1-o.glowBreath):0),b=u/(2*Math.tan(n.degToRad(a.cam.fov/2))),x=t<560?1.4:t<800?1.2:1,S=Math.max(0,Math.min(1,Number.isFinite(r.thumb)?r.thumb:0)),C=a.speck.uniforms;C.uTime.value=p,C.uPx.value=b,C.uPulse.value=o.music,C.uLive.value=+!o.rm,C.uPeel.value=o.peel,C.uPeelFrac.value=.08+.08*o.energy+.06*o.combo,C.uEyeOpen.value=+(h>.3),C.uHappyEyes.value=o.happyEyes,C.uGlow.value=o.glow,C.uBright.value=y*(.9+o.glow*.25),C.uHue.value=o.hue,C.uDust.value=o.dust,C.uRimGain.value=x*(1+.4*S)*(1+.2*o.combo),C.uThin.value=S,C.uBeat.value=o.beat*(.6+.6*o.phrase),C.uWave.value=o.wave,C.uWaveTint.value=o.waveTint,C.uClearCol.value.set(...o.clearCol),C.uSmall.value=1-Z(110,210,t*ln.creatureHeight/ln.span),C.uLoose.value=o.loose,C.uTwinkle.value=o.twinkle;let w=Math.max(.12,Math.min(1,Number.isFinite(r.lod)?r.lod:t<440?.24+.08*Z(220,440,t):.32+.68*Z(440,900,t)));a.speckGeo.setDrawRange(0,Math.round(a.bodySpecks*w)),a.shadowGeo.setDrawRange(0,Math.round(a.shadowCount*w)),a.shadowPts.visible=r.silhouette===!0;let T=1/Math.sqrt(w);C.uMinPx.value=Math.max(1.25*d,1.5*Math.min(1,u/Math.max(1,t))),C.uTail.value.copy(v),C.uBones.value=s.tail.bones,C.uBonesV.value=s.tail.bonesV,C.uBreathK.value=o.rm?0:o.breath,C.uUnwind.value=o.unwind,C.uUnwindP.value=o.unwindP;let E=a.fx.uniforms;E.uTime.value=p,E.uPx.value=b,E.uPulse.value=o.music,E.uLive.value=+!o.rm,E.uBreath.value=o.breath,E.uRibbon.value=S>0||o.rm?0:o.ribbon,E.uArcAge.value=o.arcAge,E.uArcSide.value=o.arcSide,E.uArcPow.value=.6+.5*o.energy,E.uSpill.value=o.spill,E.uLandAge.value=o.landAge,E.uEnergy.value=o.energy,E.uBright.value=y,E.uExhaleAge.value=o.exhaleAge,E.uExhaleSeed.value=o.exhaleSeed,E.uStream.value=o.stream,E.uHue.value=o.hue,E.uOrbit.value=o.orbit;let D=Math.max(.45,Math.min(1,t<300?.5:t<480?.5+.2*Z(300,480,t):.7+.3*Z(480,820,t))),ee=o.arcAge>=0&&o.arcAge<2.2;a.fxIdlePts.geometry.setDrawRange(0,Math.round(a.fxIdle*D)),a.fxReactPts.visible=ee,a.fxReactPts.geometry.setDrawRange(0,Math.round(a.fxReact*D)),E.uLodK.value=1/Math.sqrt(D),E.uMinFx.value=Math.max(1,1.25*d),E.uTarget.value.set(o.lookX*1.25+o.arcSide*.25,-.35,1.2),E.uPearl.value.setFromMatrixPosition(m[G.PEARL].matrixWorld),E.uMuzzle.value.setFromMatrixPosition(a.muzzle.matrixWorld),E.uFace.value.set(0,.13,.3).applyMatrix4(m[G.HEAD].matrixWorld),a.aura.uniforms.uI.value=Math.min(.12,.03+o.beat*.04+o.combo*.05)*y,a.pearl.uniforms.uTime.value=p,a.pearl.uniforms.uGlow.value=Math.min(1,o.glow+o.beat*.15),a.pearl.uniforms.uCap.value=S>0?.62:.85,a.pearl.uniforms.uSpec.value=(S>0?2.2:3.6)*(1+.3*o.beat),a.pearl.uniforms.uTintC.value.set(...o.clearCol),a.pearl.uniforms.uTintK.value=o.waveTint,C.uPearlP.value.setFromMatrixPosition(m[G.PEARL].matrixWorld),a.fx.uniforms.uClearCol.value.set(...o.clearCol);let O=Z(.35,.6,Number.isFinite(r.backdrop)?r.backdrop:0);for(let e of a.depthMeshes)e.visible=o.dust<.3;for(let e of a.shells)e.uniforms.uMask.value=.15*O,e.uniforms.uGlow.value=o.glow,e.uniforms.uBright.value=y*(1-o.dust*.7),e.uniforms.uTail.value.copy(v),e.uniforms.uBones.value=s.tail.bones,e.uniforms.uBonesV.value=s.tail.bonesV,e.uniforms.uTime.value=p,e.uniforms.uNacre.value=o.waveTint*.1,e.uniforms.uClearCol.value.set(...o.clearCol),e.uniforms.uPearlW.value.setFromMatrixPosition(m[G.PEARL].matrixWorld),e.uniforms.uPearlI.value=(.42+.3*o.glow+.25*o.beat)*(1-o.dust*.6),e.uniforms.uRim.value=(e===a.tailShell?.85:e===a.shells[1]?.9:.8)*x;let k=Zt(Math.max(o.energy,o.clear*.8,o.combo));a.comp.uniforms.uBloom.value=Math.min(1.25,(.95+.25*k)*(1+o.wide*.15+o.beat*.06))*(a.hdr?1:.8)*(1-.22*o.hue),a.comp.uniforms.uWide.value=o.wide,a.comp.uniforms.uSat.value=Math.max(.35,o.hue),C.uHueAt.value=o.hueAt,E.uHueAt.value=o.hueAt;for(let e of a.shells)e.uniforms.uHueAt.value=o.hueAt;let A=Math.max(1,Math.min(2.4,Number.isFinite(r.speckBoost)?r.speckBoost:1)),j=t*ln.creatureHeight/ln.span,M=1-Z(90,170,j);C.uBoost.value=A*T**.25*(1+.4*M),E.uBoost.value=A,a.comp.uniforms.uHalo.value=S>0?0:(.22+.4*M)*(1-Z(380,560,j))*(o.rm?.8:1),C.uBright.value*=T**.85,a.comp.uniforms.uExpo.value=1.35*Math.sqrt(Math.min(2,A))*(x>1?1.1:1)/(1+.35*k)*Math.max(.5,Math.min(2,Number.isFinite(r.exposure)?r.exposure:1)),a.comp.uniforms.uBack.value=Number.isFinite(r.backdrop)?Zt(r.backdrop):0;let N=r.window??[-1,-1,2,2],P=r.feather??[.01,.01,.01,.01];a.comp.uniforms.uWin.value.set(N[0],N[1],N[2],N[3]),a.comp.uniforms.uRound.value=Math.min(1,o.dust*4),a.comp.uniforms.uFea.value.set(Math.max(.001,P[0]),Math.max(.001,P[1]),Math.max(.001,P[2]),Math.max(.001,P[3]));let te=ln.span/2-ln.feetFromBottom;a.cam.position.set(o.rm?0:Math.sin(p*.13)*.12,te+(o.rm?0:Math.sin(p*.09+1)*.05),8),a.cam.lookAt(0,te,0),E.uBokeh.value=Math.max(0,Math.min(1.5,Number.isFinite(r.bokeh)?r.bokeh:S>0?1:.3))*y;let ne=globalThis.__dubaiPerfIn,re=ne?performance.now():0,F=a.sets[a.frame++&1],I=a.comp.uniforms;I.tSrc.value=F.rt.texture,I.tB1.value=F.down[0].texture,I.tB2.value=F.down[1].texture,I.tB3.value=F.down[2].texture,I.tB4.value=F.down[3].texture,a.r.setRenderTarget(F.rt),a.r.clear(),a.r.render(a.scene,a.cam);let ie=ne?performance.now():0;a.quad.material=a.downMat;let ae=F.rt;for(let e of F.down)a.downMat.uniforms.tIn.value=ae.texture,a.downMat.uniforms.uHalf.value.set(.5/ae.width,.5/ae.height),a.r.setRenderTarget(e),a.r.render(a.compScene,a.compCam),ae=e;return a.quad.material=a.comp,a.r.setRenderTarget(null),a.r.render(a.compScene,a.compCam),a.r.autoClear=!1,a.r.render(a.overlay,a.cam),a.r.autoClear=!0,ne&&ne.push([ie-re,performance.now()-ie]),f}function on(){if(!X)return null;let e=X.r.domElement.width,t=new a,n=1e9,r=-1e9,i=1e9,o=-1e9;for(let a of X.eyeWorld){t.setFromMatrixPosition(a.matrixWorld).project(X.cam);let s=(t.x*.5+.5)*e,c=(.5-t.y*.5)*e;n=Math.min(n,s),r=Math.max(r,s),i=Math.min(i,c),o=Math.max(o,c)}let s=(r-n)*.45;return{x:n-s,y:i-s*.8,w:r-n+s*2,h:o-i+s*2.2}}function sn(){return X&&!Kt?X.r.domElement:null}function cn(){if(!X)return null;let e=X,t=e.speckGeo.drawRange.count,n=e.fxIdlePts.geometry.drawRange.count+(e.fxReactPts.visible?e.fxReactPts.geometry.drawRange.count:0),r=e.specks-e.bodySpecks+e.overlayCount+e.pupilCount;return{specks:e.specks,hdr:e.hdr,drawn:t+r+n+(e.shadowPts.visible?e.shadowGeo.drawRange.count:0),body:t,face:r,fx:n}}var ln={span:3.8,feetFromBottom:.5,creatureHeight:2.3};export{H as DUBAI_CLEAR_HUES,ln as DUBAI_LIGHT_FRAME,ze as DUBAI_PHRASE_CUES,Tt as TAIL_BONES,on as dubaiFaceProbe,sn as dubaiLightCanvas,tn as dubaiLightMotion,cn as dubaiLightStats,U as dubaiNacre,Re as dubaiOrbitClock,Be as dubaiPhraseDust,Fe as dubaiPhraseLevel,nn as dubaiRigPose,an as renderDubaiLight};