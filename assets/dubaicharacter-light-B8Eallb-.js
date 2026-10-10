import{db as Ka,dc as Po,bq as _e,dd as qa,c3 as at,bs as Ye,bt as va,bu as ko,cc as Rt,de as Me,bP as ve,cj as Q,ci as Oe,c4 as st,bR as zo,df as To,cf as Eo,cr as Wa,ca as Oa,cs as Ro,c8 as Co,bY as Jt,dg as _o,bX as Na,dh as Ho,bN as Do,bU as et,di as Ua,cq as Ct,cp as ma,cn as ke,b$ as Ga,dj as Va,bZ as Lo,bQ as Bo,dk as ea,dl as Fo,co as Io,cd as Ke}from"./voyagecompanion-qyBseyj5.js";const we=(e,t,s)=>{const o=Math.max(s-Math.abs(e-t),0)/s;return Math.min(e,t)-o*o*s*.25},Ue=(e,t,s)=>{const o=(e[0]-t[0])/s[0],a=(e[1]-t[1])/s[1],i=(e[2]-t[2])/s[2],c=Math.sqrt(o*o+a*a+i*i),A=o/s[0],x=a/s[1],g=i/s[2],k=Math.sqrt(A*A+x*x+g*g);return k<1e-9?-Math.min(s[0],s[1],s[2]):c*(c-1)/k},ta=(e,t,s,o,a)=>{const i=s[0]-t[0],c=s[1]-t[1],A=s[2]-t[2],x=e[0]-t[0],g=e[1]-t[1],k=e[2]-t[2],m=Math.max(0,Math.min(1,(x*i+g*c+k*A)/(i*i+c*c+A*A))),d=x-i*m,T=g-c*m,z=k-A*m;return Math.sqrt(d*d+T*T+z*z)-(o+(a-o)*m)},pa=[{base:[-.045,.67,-.01],ang:106,len:.34,hw:.135,bend:-.05},{base:[.085,.665,.06],ang:82,len:.33,hw:.128,bend:.04}],ot=pa.map(({base:e,ang:t,len:s,hw:o,bend:a})=>{const i=t*Math.PI/180,c=[Math.cos(i),Math.sin(i)];return{base:e,A:c,Lat:[c[1],-c[0]],len:s,hw:o,bend:a,out:a<0?-1:1}}),xa=(e,t)=>e.hw*Math.pow(Math.max(0,1-t),.75)*(1+.7*t);function _t(e,t,s){const o=xa(e,t)*(s*e.out>0?1.08:.92),a=e.base[0]+e.A[0]*e.len*t+e.Lat[0]*e.bend*e.len*t*t,i=e.base[1]+e.A[1]*e.len*t+e.Lat[1]*e.bend*e.len*t*t;let c=e.A[0]+2*e.bend*t*e.Lat[0],A=e.A[1]+2*e.bend*t*e.Lat[1];const x=Math.hypot(c,A);c/=x,A/=x;const g=A*e.out,k=-c*e.out,m=s*o,d=e.base[2]+.3*m*m/e.hw-.06*t;return{p:[a+g*m,i+k*m,d],t:[c,A]}}const Ko=[.035,.615,.05],qo=[.035,.48],Wo=[-.12,.15],Oo=e=>{const t=(222-192*e)*Math.PI/180;return[.02+.142*Math.cos(t),.05+.13*Math.pow(1-e,2)+.05*e*e*e,.04+.15*Math.sin(t),.026+.05*Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(e,.7))),.6)+.01*e]},Lt=13,No=Array.from({length:Lt+1},(e,t)=>Oo(t/Lt)),Uo=[[[.09,.37,.11],[.12,.05,.185],[.145,.026,.2],4,.044],[[.02,.36,.07],[.035,.05,.14],[.06,.026,.155],5,.041]],Go=[.05,.027,.042];function aa(e){let t=Ue(e,[-.04,.16,-.03],[.17,.16,.15]);t=we(t,Ue(e,[.015,.3,.015],[.108,.16,.1]),.08),t=we(t,Ue(e,[.075,.415,.08],[.1,.12,.085]),.06);let s=0,o=0,a=ta(e,[.035,.45,.04],[.04,.535,.05],.078,.072);a=we(a,Ue(e,Ko,[.15,.12,.115]),.05),a=we(a,Ue(e,[.045,.565,.08],[.162,.066,.09]),.04),a=we(a,ta(e,[.07,.58,.11],[.16,.552,.185],.052,.012),.04),a<t&&e[1]>.5&&(s=1),t=we(t,a,.06);for(const[x,g,k,m,d]of Uo){let T=ta(e,x,g,d,d*.78);T=we(T,Ue(e,k,Go),.025),T<t&&(s=m),t=we(t,T,.03)}const i=Ue(e,[-.07,.03,.09],[.07,.03,.045]);i<t&&(s=6),t=we(t,i,.03);let c=9,A=0;if(e[1]<.32)for(let x=0;x<=Lt;x++){const g=No[x],k=e[0]-g[0],m=e[1]-g[1],d=e[2]-g[2],T=Math.sqrt(k*k+m*m+d*d)-g[3];T<c&&(A=x/Lt),c=we(c,T,.04)}return c<t&&(s=7,o=A),t=we(t,c,.03),{d:t,g:s,s:o}}const It=(()=>{let e=9,t=-9,s=-9;for(const o of ot)for(let a=0;a<=40;a++)for(const i of[-1,1]){const{p:c}=_t(o,a/40,i);e=Math.min(e,c[0]),t=Math.max(t,c[0]),s=Math.max(s,c[1])}return{x0:e,x1:t,y1:s}})(),xt=Math.min(-.212,It.x0)-.02,Pa=Math.max(.21,It.x1),Vo=Math.max(.15,It.x1)+.004,pt=It.y1+.01;function lo(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}const Ya=.05,Yo=[[[-.015,.63,.14],.017,.022],[[.088,.627,.153],.019,.024]],oa=[.163,.553,.19],$o=e=>.2+.8*Math.pow(1-Math.min(1,Math.abs(e)),2);function*jo(e,t){const s=lo(t),o=new Float32Array(e*4),a=new Float32Array(e*2),i=new Float32Array(e*3),c=()=>Math.sqrt(-2*Math.log(Math.max(1e-9,s())))*Math.cos(6.2832*s()),A=Math.min(140,Math.round(e*.008)),x=[0,Math.round(e*.08),Math.round(e*.04),Math.round(e*.05),A,Math.round(e*.025)];x[0]=e-x[1]-x[2]-x[3]-x[4]-x[5];const g=Math.round(x[0]*.2),k=Math.round(g*.62),m=[0,0,0,0,0,0];let d=0,T=0;const z=[0,0,0],F=[0,0,0],I=(p,L,R)=>(F[0]=p,F[1]=L,F[2]=R,aa(F).d),v=(p,L,R,B,C,W,Y,$,G)=>{o.set([p,L,R,B],d*4),a.set([C,W],d*2),i.set([Y,$,G],d*3),m[B]++,d++};for(;m[4]<x[4];){const p=s();if(p<.84){const[L,R,B]=Yo[p<.38?0:1],C=s()*6.2832,W=Math.pow(s(),.75);v(L[0]+Math.cos(C)*R*W,L[1]+Math.sin(C)*B*W,L[2],4,1,1-W,0,0,1)}else{const L=s()*6.2832,R=Math.sqrt(s())*.013;v(oa[0]+Math.cos(L)*R,oa[1]+Math.sin(L)*R*.8,oa[2],4,1,.5,0,0,1)}}const w=()=>{for(;;){const p=s();if(s()<xa(ot[0],p)/ot[0].hw/1.12)return p}};let b=0,q=0;for(;b<k;){(b&511)===0&&(yield);const p=s()<.5?0:1,L=ot[p],R=Math.pow(s(),.85)*.995,B=s()<.5?-1:1,C=Math.abs(c())*(.004+.011*(1-R)),W=B*Math.max(0,1-C/Math.max(.004,xa(L,R))),{p:Y,t:$}=_t(L,R,W),G=$[1]*L.out*B,J=-$[0]*L.out*B;v(Y[0],Y[1],Y[2]+(s()-.5)*.012,0,2+p,R,G,J,.15),b++}for(;q<g-k;){(q&511)===0&&(yield);const p=s()<.5?0:1,L=ot[p],R=w(),B=s()*2-1,{p:C}=_t(L,R,B);v(C[0],C[1],C[2],0,2+p,R,0,0,1),q++}for(;m[3]<x[3];){const p=s()<.5?0:1,L=ot[p],R=.04+.8*w(),B=s()<.55?(s()<.5?-1:1)*(1-Math.abs(c())*.12):s()*2-1,{p:C}=_t(L,R,-.1+.6*Math.max(-1,Math.min(1,B))*(1-.3*R));v(C[0],C[1],C[2]+.004,3,2+p,R,0,0,.6)}typeof performance<"u"&&performance.now();const y=x[0]-g;let O=0;for(;(O<y||m[1]<x[1]||m[2]<x[2])&&T<e*900;){T++,z[0]=xt-.03+s()*(Pa-xt+.06),z[1]=-.02+s()*.8,z[2]=(s()-.5)*.44,(T&63)===0&&(yield);let p=aa(z);const L=()=>{const Y=z[0],$=z[1],G=z[2],J=I(Y+.003,$-.003,G-.003),ee=I(Y-.003,$-.003,G+.003),le=I(Y-.003,$+.003,G-.003),de=I(Y+.003,$+.003,G+.003),ne=J-ee-le+de,re=-J-ee+le+de,pe=-J+ee-le+de,ce=Math.sqrt(ne*ne+re*re+pe*pe)||1;return[ne/ce,re/ce,pe/ce]};let R=-1,B;if(Math.abs(p.d)<.06&&O<y){for(let W=0;W<2;W++)B=L(),z[0]-=B[0]*p.d,z[1]-=B[1]*p.d,z[2]-=B[2]*p.d,p=aa(z);if(Math.abs(p.d)>.004||(B=L(),B[2]<-.35&&s()<.75)||s()>$o(B[2]))continue;R=0}else if(p.d<0&&m[1]<x[1]){const W=Math.min(1,-p.d/Ya);s()<.35+.65*(1-W)&&(R=1)}else p.d>0&&p.d<.04&&m[2]<x[2]&&s()<Math.exp(-p.d/.012)&&(R=2);if(R<0)continue;m[R]+1,x[R],B??(B=L());const C=R===1?Math.min(1,-p.d/Ya):1;v(z[0],z[1],z[2],R,p.g,p.s,B[0]*C,B[1]*C,B[2]*C),R===0&&O++}const j=d;for(;m[5]<x[5]&&j>0;){const p=Math.floor(s()*j);o[p*4+3]===0&&v(o[p*4],o[p*4+1],o[p*4+2],5,a[p*2],a[p*2+1],0,0,.3)}for(let p=d-1;p>0;p--){(p&2047)===0&&(yield);const L=Math.floor(s()*(p+1));for(const[R,B]of[[o,4],[a,2],[i,3]])for(let C=0;C<B;C++){const W=R[p*B+C];R[p*B+C]=R[L*B+C],R[L*B+C]=W}}return{pos:o,bone:a,nrm:i,count:d,classes:m}}const Xo=28;function Zo(e){const{W:t,H:s,well:o}=e;if(!(t>0)||!(s>0)||!(o.x0>0))return null;const a=Math.max(t,s)/1920,i=s>t*1.2,c=Math.max(9*a,10),A=120*a,x=i?0:A*.12,g=o.x0-(i?Math.max(16*a,10):Xo*a)-c-x,k=(i?Vo:Pa)-xt;let m=Math.min(g/(k*1.03),(i?.3:.6)*s/pt);if(!(m*pt>70*a))return null;const d=c+Math.max(0,(g-k*1.03*m)/2)-xt*1.02*m,T=i?o.y0-16*a+pt*m:s*.84,z=t/544,F=i?[[16*z,0,166*z,126*z],[378*z,0,528*z,126*z]]:[];return m=Math.max(0,m),{ox:d,oy:T,scale:m,dir:1,unit:a,rise:A,portrait:i,hud:F,sway:i?0:.12}}const nt=e=>{const t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)};function Qo(e,t,s,o=.12){if(s)return[0,0];const a=nt((e-Ye*.4)/(Ye*.6+va));return[t*o*Math.sin(Math.PI*a),t*(1-a)]}const ga=new WeakMap;let Bt,na=!1;const Jo=2e4,en=9e3,tn=()=>{try{return typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches}catch{return!1}};function uo(){if(Bt||na)return;na=!0;const e=jo(Jo,389607),t=()=>{const s=performance.now();for(;;){const o=e.next();if(o.done){Bt=o.value,na=!1;return}if(performance.now()-s>4)break}setTimeout(t,12)};setTimeout(t,0)}function an(){const e=Bt,t=lo(659918),s=new Float32Array(e.count*4);for(let c=0;c<s.length;c++)s[c]=t();const o=new Rt,a=new Float32Array(e.count*3),i=new Float32Array(e.count*3);for(let c=0;c<e.count;c++)a.set([e.pos[c*4],e.pos[c*4+1],e.pos[c*4+2]],c*3),i.set([e.bone[c*2],e.bone[c*2+1],e.pos[c*4+3]],c*3);return o.setAttribute("position",new Me(a,3)),o.setAttribute("aBone",new Me(i,3)),o.setAttribute("aNrm",new Me(e.nrm.subarray(0,e.count*3),3)),o.setAttribute("aSeed",new Me(s,4)),o.setDrawRange(0,tn()?Math.min(e.count,en):e.count),o}const St=e=>`vec2(${e[0].toFixed(4)},${e[1].toFixed(4)})`,on=`
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
const vec2 NECK=${St(qo)}, TROOT=${St(Wo)};
const vec2 EARB0=${St(pa[0].base)}, EARB1=${St(pa[1].base)};
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
}`,nn=`
precision highp float;
varying vec3 vColor; varying float vAlpha; varying float vCore;
void main(){
  vec2 d=gl_PointCoord-.5; float r2=dot(d,d)*4.; if(r2>1.) discard;
  // a tight halo: specks stay specks (no fog under the bloom)
  // white lives only in the tiny core (capped); the colour lives in the halo
  float core=exp(-r2*18.), halo=exp(-r2*5.)*(1.-r2);
  vec3 c=vColor*halo*.9+vec3(1.,.98,.95)*core*min(vCore,1.)*1.05;
  gl_FragColor=vec4(c*vAlpha,1.);
}`;function sn(e){return new ve({vertexShader:on,fragmentShader:nn,blending:zo,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uT:{value:0},uGather:{value:0},uScatter:{value:0},uStill:{value:0},uAlpha:{value:1},uPulse:{value:0},uBeat:{value:0},uScale:{value:300},uDir:{value:1},uUnit:{value:1},uPx:{value:1},uHold:{value:0},uOrigin:{value:new st},uScr:{value:new st(1080,1920)},uPearl:{value:new st},uCtrl:{value:new st},uWell:{value:new Oe},uHudA:{value:new Oe},uHudB:{value:new Oe},uHue:{value:new Q(.45,.95,1)},uView:e.uView}})}function $a(e,t){let s=ga.get(e);if(s)return s;const o=an(),a=sn(t),i=new at(o,a);return i.frustumCulled=!1,i.renderOrder=7,i.visible=!1,i.name="noor-spirit",e.add(i),s={pts:i,mat:a,warm:0,count:o.drawRange.count},ga.set(e,s),s}function ja(e){if(e.warm===0){e.pts.geometry.setDrawRange(0,0),e.pts.visible=!0,e.warm=1;return}e.warm===1&&(e.pts.geometry.setDrawRange(0,e.count),e.pts.visible=!1,e.warm=2)}let Xa=-1,sa=0;const rn=[[.36,.88,1],[1,.52,.42]];function Za(e,t,s){const o=typeof performance<"u"?performance.now():0;_e.seq!==Xa?(Xa=_e.seq,sa=0):sa++;const a=_e.age,i=a>=0&&a<Po&&!!s.board&&sa<4,c=ga.get(e),A=()=>{c&&(c.pts.visible=!1),qa.k=0};if(!Bt){uo(),A();return}if(!i){const G=$a(e,t);G.warm<2?ja(G):A();return}const x=s.reduced||_e.reduced,g=s.board,k=t.uViewport.value,m=s.view??{x0:0,y0:0,x1:1,y1:1},d=k.x*(m.x1-m.x0),T=k.y*(m.y1-m.y0),z=G=>(G-m.x0)/(m.x1-m.x0)*d,F=G=>(G-m.y0)/(m.y1-m.y0)*T,I={W:d,H:T,well:{x0:z(g.x0),y0:F(g.y0),x1:z(g.x1),y1:F(g.y1)}},v=Zo(I);if(!v){A();return}const w=$a(e,t);w.warm<2&&(w.warm=1,ja(w));const b=w.mat.uniforms,[q,y]=Qo(a,v.rise,x,v.sway);b.uOrigin.value.set(v.ox+q,v.oy+y),b.uScr.value.set(d,T),b.uWell.value.set(I.well.x0,I.well.y0,I.well.x1,I.well.y1);const[O,j]=v.hud;b.uHudA.value.set(...O??[0,0,0,0]),b.uHudB.value.set(...j??[0,0,0,0]);const p=[_e.hudX*d,_e.hudY*T];b.uPearl.value.set(...p),b.uCtrl.value.set(v.portrait?I.well.x0*.55:(p[0]+v.ox)/2,v.portrait?I.well.y0-75*v.unit:Math.min(p[1],v.oy-pt*v.scale)+40*v.unit),b.uScale.value=v.scale,b.uDir.value=v.dir,b.uUnit.value=v.unit,b.uPx.value=Math.max(1,k.y/1e3);const L=a/Ye,R=(a-Ye-va)/ko;b.uT.value=x?0:s.time,b.uBeat.value=x?0:s.beat,b.uGather.value=x?1:Math.min(1,L),b.uScatter.value=x?0:Math.max(0,R),b.uHold.value=x?0:nt((a-Ye)/va),b.uStill.value=x?1:0,b.uPulse.value=s.pulse,b.uHue.value.set(...rn[_e.hue&1]);const B=x?nt(a/Ye)*(1-nt(R)):1;b.uAlpha.value=(_e.chain?.85:1)*B*.6*1,w.pts.visible=!0,_e.shownAt=o;const C=v.ox+q+xt*v.scale,W=Math.min(I.well.x0,v.ox+q+Pa*v.scale),Y=v.oy+y+.02*v.scale,$=v.oy+y-pt*v.scale;Object.assign(qa,{x0:C/d,x1:W/d,y0:$/T,y1:Y/T,k:x?B:Math.min(nt(a/Ye),1-nt(Math.max(0,R)))})}Ka.includes(Za)||Ka.push(Za);typeof window<"u"&&typeof performance<"u"&&uo();const ln=[[1,.46,.68],[.36,1,.62],[.56,.5,1],[1,.72,.3],[.36,.86,1]];function un(e){e=e-Math.floor(e);const t=[1,.42,.66],s=[.3,.95,.92],o=[.32,.42,1],[a,i,c]=e<1/3?[t,s,e*3]:e<2/3?[s,o,e*3-1]:[o,t,e*3-2];return[a[0]+(i[0]-a[0])*c,a[1]+(i[1]-a[1])*c,a[2]+(i[2]-a[2])*c]}const At=[[0,.3],[20,.5],[40,.7],[60,.85],[70,1],[100,.45],[120,.3]];function co(e){if(!Number.isFinite(e))return .5;const t=Math.max(0,e);let s=At[0][1];for(let o=1;o<At.length;o++){const[a,i]=At[o];s+=(i-At[o-1][1])*U(a-1.5,a+.5,t)}return s}const Pt=.1;let kt;function cn(e,t){if(!Number.isFinite(e))return t*.42;kt??(kt=(()=>{const a=Math.ceil(130/Pt)+1,i=new Float32Array(a);for(let c=1;c<a;c++)i[c]=i[c-1]+Pt*(.26+.34*co((c-.5)*Pt));return i})());const s=Math.max(0,Math.min(129.9,e))/Pt,o=Math.floor(s);return kt[o]+(kt[o+1]-kt[o])*(s-o)}const hn=[0,20,40,70,100];function dn(e){if(!Number.isFinite(e))return 0;const t=e;let s=0;for(const o of hn)o>0&&t>=o-.8&&t<o&&(s=Math.max(s,U(o-.8,o-.05,t))),t>=o&&t<o+1.9&&(s=Math.max(s,o===0?1-U(.2,1.9,t):1-U(o+.25,o+1.9,t)));return s}const ra=e=>Math.pow(Math.max(0,1-e*e),.62),ia=.95,Qa=.72,la=.1,S={BODY:0,HEAD:1,EAR_L:2,EAR_R:3,PAW_L:4,PAW_R:5,TAIL:6,PEARL:7,EYE_L:8,EYE_R:9},Ft=10,me=.98,Ht=-2.1,Dt=.22,wa=.56,ya=.45,Ge=[1,.74,.42],Z=[1,.86,.62],ue=[1,.96,.9],Ja=[.58,.98,.93],he=[1,.98,.95];function fn(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}const vn=(e,t,s)=>{const o=Math.max(s-Math.abs(e-t),0)/s;return Math.min(e,t)-o*o*s*.25};function oe(e,t,s=0,o=0){const a=Math.cos(s),i=Math.sin(s),c=Math.cos(o),A=Math.sin(o);return(x,g,k)=>{let m=x-e[0],d=g-e[1],T=k-e[2];const z=c*m+A*d,F=-A*m+c*d;m=z,d=F;const I=a*d+i*T,v=-i*d+a*T;d=I,T=v;const w=Math.hypot(m/t[0],d/t[1],T/t[2]),b=Math.hypot(m/(t[0]*t[0]),d/(t[1]*t[1]),T/(t[2]*t[2]));return b<1e-9?-Math.min(...t):w*(w-1)/b}}function je(e,t,s,o){const a=t[0]-e[0],i=t[1]-e[1],c=t[2]-e[2],A=a*a+i*i+c*c;return(x,g,k)=>{const m=x-e[0],d=g-e[1],T=k-e[2],z=Math.max(0,Math.min(1,(m*a+d*i+T*c)/A));return Math.hypot(m-a*z,d-i*z,T-c*z)-(s+(o-s)*z)}}const De=(e,...t)=>(s,o,a)=>{let i=t[0](s,o,a);for(let c=1;c<t.length;c++)i=vn(i,t[c](s,o,a),e);return i},ba=[oe([0,.6,.14],[.17,.25,.14])],Ma=De(.11,oe([0,.24,-.05],[.31,.24,.27]),oe([0,.43,0],[.285,.27,.245]),oe([0,.7,.03],[.275,.2,.2]),oe([0,.83,.02],[.255,.1,.17]),ba[0]),mn=De(.05,oe([-.19,.76,.04],[.12,.1,.12]),oe([.19,.76,.04],[.12,.1,.12])),ho=De(.04,oe([-.22,.2,-.05],[.14,.17,.22],.25,-.12),oe([.22,.2,-.05],[.14,.17,.22],.25,.12)),fo=De(.02,je([-.2,.78,.12],[-.2,.6,.24],.066,.056),je([.2,.78,.12],[.2,.6,.24],.066,.056)),pn=De(.02,je([-.17,.045,.02],[-.2,.042,.3],.045,.052),je([.17,.045,.02],[.2,.042,.3],.045,.052)),ua=De(.06,De(.08,Ma,ho,mn),fo,pn),vt=[.2,.6,.24],vo=e=>De(.05,je([0,0,0],[-e*.07,-.1,.17],.056,.048),oe([-e*.1,-.12,.25],[.074,.048,.07],.45,-e*.55)),eo=vo(-1),to=vo(1),ye=[0,-.015,.392],Ve=[oe([-.19,.08,.1],[.16,.12,.14]),oe([.19,.08,.1],[.16,.12,.14]),je([0,.07,.2],[0,-0,.355],.1,.036)],xn=[oe([-.29,.05,0],[.075,.045,.06],0,-.5),oe([.29,.05,0],[.075,.045,.06],0,.5)],gn=oe([0,-.04,-.02],[.22,.13,.17]),ca=De(.12,oe([0,.19,0],[.33,.265,.3]),...Ve,...xn,gn),He=[.37,.5,.055],$e=e=>1-.72*Math.pow(Math.max(0,Math.min(1,e/1)),1.05),Sa=(e,t)=>{const s=$e(t),o=e/(He[0]*s);return .075*o*o-.03},ha=(e,t,s)=>{const o=$e(t);return oe([0,.5,0],He)(e/o,t,s+Sa(e,t))*Math.min(1,o+.15)},wn=e=>.035+.135*Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(Math.min(1,e),.8))),.72)+.02*(1-e),ao=(e,t,s)=>{const o=Math.max(0,Math.min(me,e));return Math.hypot(e-o,t,s*1.12)-wn(o/me)},Se=5,oo=(e,t)=>{const s=Math.max(0,Math.min(1,e/me));return t*Math.pow(s,1.25)};function yn(e,t,s,o){const a=Math.max(0,Math.min(me,e.x)),i=e.x-a,c=a/8;let A=0,x=0;for(let F=0;F<8;F++){const I=oo((F+.5)*c,s);A+=Math.cos(I)*c,x-=Math.sin(I)*c}const g=oo(a,s),k=Math.cos(g),m=-Math.sin(g),d=Math.sin(g),T=Math.cos(g),z=a/me;e.set(A+k*i+d*e.z,e.y+o*a*z,x+m*i+T*e.z),t&&t.set(t.x*k+t.z*d,t.y,t.x*m+t.z*T)}function bn(e,t,s,o){const a=Math.ceil((s[0]-t[0])/o)+1,i=Math.ceil((s[1]-t[1])/o)+1,c=Math.ceil((s[2]-t[2])/o)+1,A=new Float32Array(a*i*c);for(let v=0;v<c;v++)for(let w=0;w<i;w++)for(let b=0;b<a;b++)A[b+a*(w+i*v)]=e(t[0]+b*o,t[1]+w*o,t[2]+v*o);const x=new Int32Array((a-1)*(i-1)*(c-1)).fill(-1),g=[],k=[],m=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],d=new Float64Array(8),T=(v,w,b)=>{const q=o*.5,y=[e(v+q,w,b)-e(v-q,w,b),e(v,w+q,b)-e(v,w-q,b),e(v,w,b+q)-e(v,w,b-q)],O=Math.hypot(...y)||1;return[y[0]/O,y[1]/O,y[2]/O]};for(let v=0;v<c-1;v++)for(let w=0;w<i-1;w++)for(let b=0;b<a-1;b++){let q=0;for(let C=0;C<8;C++){const W=A[b+(C&1)+a*(w+(C>>1&1)+i*(v+(C>>2&1)))];d[C]=W,W<0&&(q|=1<<C)}if(q===0||q===255)continue;let y=0,O=0,j=0,p=0;for(const[C,W]of m){if(d[C]<0==d[W]<0)continue;const Y=d[C]/(d[C]-d[W]),$=C&1,G=C>>1&1,J=C>>2&1,ee=W&1,le=W>>1&1,de=W>>2&1;y+=$+(ee-$)*Y,O+=G+(le-G)*Y,j+=J+(de-J)*Y,p++}const L=t[0]+(b+y/p)*o,R=t[1]+(w+O/p)*o,B=t[2]+(v+j/p)*o;x[b+(a-1)*(w+(i-1)*v)]=g.length/3,g.push(L,R,B),k.push(...T(L,R,B))}const z=[],F=(v,w,b)=>v<0||w<0||b<0||v>=a-1||w>=i-1||b>=c-1?-1:x[v+(a-1)*(w+(i-1)*b)],I=(v,w,b,q)=>{if(!(v<0||w<0||b<0||q<0))for(const[y,O,j]of[[v,w,b],[v,b,q]]){const p=g[O*3]-g[y*3],L=g[O*3+1]-g[y*3+1],R=g[O*3+2]-g[y*3+2],B=g[j*3]-g[y*3],C=g[j*3+1]-g[y*3+1],W=g[j*3+2]-g[y*3+2],Y=L*W-R*C,$=R*B-p*W,G=p*C-L*B;Y*(k[y*3]+k[O*3]+k[j*3])+$*(k[y*3+1]+k[O*3+1]+k[j*3+1])+G*(k[y*3+2]+k[O*3+2]+k[j*3+2])>=0?z.push(y,O,j):z.push(y,j,O)}};for(let v=0;v<c;v++)for(let w=0;w<i;w++)for(let b=0;b<a;b++){const q=A[b+a*(w+i*v)]<0;b<a-1&&w>0&&v>0&&q!==A[b+1+a*(w+i*v)]<0&&I(F(b,w-1,v-1),F(b,w,v-1),F(b,w,v),F(b,w-1,v)),w<i-1&&b>0&&v>0&&q!==A[b+a*(w+1+i*v)]<0&&I(F(b-1,w,v-1),F(b,w,v-1),F(b,w,v),F(b-1,w,v)),v<c-1&&b>0&&w>0&&q!==A[b+a*(w+i*(v+1))]<0&&I(F(b-1,w-1,v),F(b,w-1,v),F(b,w,v),F(b-1,w,v))}return{pos:new Float32Array(g),nrm:new Float32Array(k),idx:z}}const mo=`
uniform vec4 uTail; // x curl, w lift (y, z unused)
// five bones, root to tip: each adds its angle over its fifth of the length
// (a spring chain: every bone lags the one before it), plus a vertical bend
uniform float uBones[${Se}]; uniform float uBonesV[${Se}];
float tailHeading(float x){ float s=clamp(x/${me.toFixed(3)},0.,1.); float h=uTail.x*pow(s,1.25);
 for(int k=0;k<${Se};k++) h+=uBones[k]*clamp(s*${Se}.-float(k),0.,1.);
 return h; }
float tailRise(float x){ float y=0.; for(int k=0;k<${Se};k++) y+=uBonesV[k]*max(0.,x-float(k)*${(me/5).toFixed(4)}); return y; }
void bendTail(inout vec3 p, inout vec3 n){
 float x=clamp(p.x,0.,${me.toFixed(3)}), over=p.x-x, dx=x/8.;
 vec2 c=vec2(0.);
 for(int i=0;i<8;i++){ float th=tailHeading((float(i)+.5)*dx); c+=vec2(cos(th),-sin(th))*dx; }
 float th=tailHeading(x); vec2 tg=vec2(cos(th),-sin(th)), nr=vec2(sin(th),cos(th));
 vec2 xz=c+tg*over+nr*p.z;
 p=vec3(xz.x,p.y+uTail.w*x*x/${me.toFixed(3)}+tailRise(x),xz.y);
 n=vec3(n.x*tg.x+n.z*nr.x,n.y,n.x*tg.y+n.z*nr.y);
}`,no=`
uniform float uBend;
attribute float aVis;
varying vec3 vN; varying vec3 vV; varying float vVis; varying float vY; varying vec3 vW;
${mo}
void main(){
 vec3 p=position, n=normal;
 if(uBend>.5) bendTail(p,n);
 vec4 w=modelMatrix*vec4(p,1.); vY=w.y; vW=w.xyz; vec4 mv=viewMatrix*w;
 vN=normalize(normalMatrix*n); vV=normalize(-mv.xyz); vVis=aVis;
 gl_Position=projectionMatrix*mv; }`,ka=`
vec3 nacreRamp(float x){ x=fract(x);
 vec3 rose=vec3(1.,.42,.66), aqua=vec3(.3,.95,.92), lapis=vec3(.32,.42,1.);
 return x<.3333?mix(rose,aqua,x*3.):x<.6667?mix(aqua,lapis,x*3.-1.):mix(lapis,rose,x*3.-2.); }
// one strong hue per combo (uHueAt on the ramp), with only a narrow drift
uniform float uHueAt;
vec3 nacre(float j){ return nacreRamp(uHueAt+sin(j*6.2832)*.06); }`,Mn=`
uniform vec3 uTint; uniform float uRim; uniform float uGlow; uniform float uBright; uniform float uTime; uniform float uNacre;
uniform vec3 uPearlW; uniform float uPearlI; uniform vec3 uClearCol; uniform float uMask;
varying vec3 vN; varying vec3 vV; varying float vVis; varying float vY; varying vec3 vW;
${ka}
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
}`,so=`
varying vec3 vN; varying vec3 vV; varying vec3 vL;
void main(){ vL=position; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,Sn=`
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
}`,An=`
varying vec3 vN; varying vec3 vV; varying vec3 vL;
void main(){
 vec3 n=normalize(vN), v=normalize(vV); float fr=max(0.,1.-abs(dot(n,v)));
 vec3 col=vec3(1.,.82,.66)*(.1+.22*(1.-fr*fr));
 col+=vec3(1.)*pow(max(dot(n,normalize(vec3(-.4,.7,1.))),0.),30.)*.9;
 gl_FragColor=vec4(col,1.);
}`,da=`
uniform mat4 uParts[${Ft}];
uniform float uTime; uniform float uPx; uniform float uPulse; uniform float uLive; uniform float uPeel; uniform float uPeelFrac;
uniform float uEyeOpen; uniform float uHappyEyes; uniform float uGlow; uniform float uBright; uniform float uBoost;
uniform float uHue; uniform float uDust; uniform float uMinPx; uniform float uRimGain; uniform float uThin; uniform float uBeat; uniform float uLoose; uniform float uTwinkle;
uniform float uShadow; uniform float uShadowA; uniform float uOverlay;
uniform float uWave; uniform float uWaveTint; uniform vec3 uClearCol; uniform vec3 uPearlP; uniform float uSmall;
uniform float uBreathK; uniform float uUnwind; uniform float uUnwindP;
attribute vec3 aNormal; attribute float aPart; attribute vec4 aSeed; attribute vec3 aColor; attribute float aSize; attribute float aKind; attribute vec3 aDir;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
${mo}
${ka}
void main(){
 int pi=int(aPart+.5);
 vec3 lp=position, ln=aNormal, ld=aDir;
 if(pi==${S.TAIL}) bendTail(lp,ln);
 // breath: the chest swells along its normal and the shoulders rise (not a scale)
 if(pi==${S.BODY}){ float ch=smoothstep(.42,.66,lp.y)*(1.-smoothstep(.86,.98,lp.y)); float sh=smoothstep(.62,.84,lp.y)*smoothstep(.08,.22,abs(lp.x));
  lp+=ln*.014*uBreathK*ch*step(-.1,ln.z)+vec3(0.,.012*uBreathK*sh,0.); }
 // the ear tips curl on a slow noise field (~4% of the ear's length)
 if(pi==${S.EAR_L}||pi==${S.EAR_R}){ float tk=smoothstep(.42,1.,lp.y)*uLive; float ph=aPart*1.9;
  lp.x+=.04*tk*tk*(sin(uTime*.83+lp.y*4.2+ph)+.5*sin(uTime*1.37-lp.y*7.+ph*2.));
  lp.z+=.03*tk*tk*sin(uTime*.61+lp.y*3.1+ph); }
 // the ear streams drift on a slow curl field in the ear's own plane
 if(aKind>5.5&&aKind<6.5) lp+=vec3(sin(uTime*.9+aSeed.y*31.+lp.y*9.),.4*sin(uTime*.7+aSeed.z*23.),0.)*.006*aDir.z*uLive;
 mat4 M=uParts[pi];
 vec3 p=(M*vec4(lp,1.)).xyz;
 vec3 n=normalize(mat3(M)*ln);
 // face protect: the eyes and muzzle never peel, loosen or spill at a peak
 float fprot=0.;
 if(pi==${S.HEAD}){ vec3 fq=(lp-vec3(0.,.12,.3))/vec3(.27,.18,.2); fprot=1.-smoothstep(.75,1.15,length(fq)); }
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
 float uw=uUnwind*step(.55,aSeed.x)*(1.-fprot)*faceK*(pi==${S.PEARL}?0.:1.);
 if(uw>0.){
  float rs=fract(aSeed.y*1.618+aSeed.z*.37);
  float st=clamp(uw*1.7-aSeed.w*.7,0.,1.); st=st*st*(3.-2.*st);
  float th=6.2832*(rs*.62+uUnwindP)-1.2;
  float rr=.74+.05*(aSeed.z-.5)+.06*sin(rs*9.+uTime);
  vec3 rib=vec3(cos(th)*rr, .3+.95*rs+.07*(aSeed.w-.5)-.22*sin(th)*rr, sin(th)*rr*.8);
  p=mix(p,rib+vec3(0.,uParts[${S.BODY}][3].y,0.),st);
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
 float wk=uWaveTint*(band+.08*behind)*hueK*step(.25,aSeed.x)*(pi==${S.PEARL}?0.:1.);
 vColor=mix(aColor,mix(uClearCol,nac,.15),min(1.,wk*(aKind>8.5&&aKind<9.5?.5:.85)));
 // the quarter the hue skips burns white-hot ON the band only
 vColor=mix(vColor,vec3(1.,.97,.93),uWaveTint*band*hueK*(1.-step(.25,aSeed.x))*.85);
 // thumbnail LOD: half the count, the rest grow to carry the light
 float keep=aKind<.5||(aKind>8.5&&aKind<9.5)?step(uThin*.5,fract(aSeed.x*7.31)):1.;
 // small frames: the interior thins so the face and the silhouette carry the read
 if(aKind>8.5&&aKind<9.5) a*=1.-.15*uSmall;
 // thumbnails: the pearl's own dust stays faint so the pearl reads as a jewel, not a starburst
 if(pi==${S.PEARL}) a*=1.-.65*uThin;
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

}`,ro=`
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
}`,Pn=`
uniform float uOverlay; uniform float uOvGain;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
void main(){
 vec2 q=gl_PointCoord*2.-1.; float d=dot(q,q); if(d>1.)discard;
 float a=vAlpha*(exp(-d*7.)+.25*exp(-d*2.5)*(1.-d)); vec3 c=vColor*a*uOvGain; gl_FragColor=vec4(c,max(c.r,max(c.g,c.b)));
}`,kn=`
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
void main(){
 vec2 q=gl_PointCoord*2.-1.; float d=dot(q,q); if(d>1.)discard;
 float a=min(vHot,(vHot>.5?1.-smoothstep(.55,1.,d):exp(-d*2.2)*(1.-d))*vAlpha); // rim <= 25%; the pupil is a dark eye, not a body fill
 gl_FragColor=vHot>.5?vec4(vColor,a):vec4(vColor*a,a);
}`,zn=`
uniform float uTime; uniform float uPx; uniform float uPulse; uniform float uLive; uniform float uBreath; uniform float uRibbon;
uniform float uArcAge; uniform float uArcSide; uniform float uArcPow; uniform float uSpill;
uniform float uLandAge; uniform vec3 uPearl; uniform vec3 uMuzzle; uniform float uEnergy; uniform float uBright; uniform float uExhaleAge; uniform float uExhaleSeed; uniform float uBoost;
uniform float uStream; uniform vec3 uTarget; uniform float uHue; uniform float uOrbit; uniform float uBokeh; uniform vec3 uClearCol; uniform vec3 uFace; uniform float uLodK; uniform float uMinFx;
attribute vec4 aData; attribute vec4 aSeed; attribute float aKind;
varying vec3 vColor; varying float vAlpha; varying float vHot; varying float vSoft; varying float vAng; varying float vStr;
vec3 gold(float s){ return s<.42?vec3(1.,.97,.92):s<.8?vec3(1.,.84,.58):vec3(1.,.72,.42); }
${ka}
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
}`,Tn="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",En=`
uniform float uI; varying vec2 vUv;
void main(){ vec2 q=vUv*2.-1.; float d=length(q*vec2(1.,.9));
 float g=(exp(-d*d*5.)*.7+exp(-d*d*1.6)*.3)*(1.-smoothstep(.5,.98,d));
 vec3 c=mix(vec3(1.,.8,.5),vec3(.5,.36,.2),smoothstep(.1,.9,d));
 gl_FragColor=vec4(c*g*uI,g*uI*.2); }`,Rn=`
uniform sampler2D tIn; uniform vec2 uHalf; varying vec2 vUv;
void main(){
 vec4 c=texture2D(tIn,vUv)*4.;
 c+=texture2D(tIn,vUv+vec2(-uHalf.x,-uHalf.y))+texture2D(tIn,vUv+vec2(uHalf.x,-uHalf.y));
 c+=texture2D(tIn,vUv+vec2(-uHalf.x,uHalf.y))+texture2D(tIn,vUv+vec2(uHalf.x,uHalf.y));
 gl_FragColor=c*.125;
}`,io="varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",Cn=`
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
}`;let ze,Aa=!1;const zt=e=>(e.transparent=!0,e.depthWrite=!1,e.blending=Ct,e.blendEquation=ma,e.blendSrc=Fo,e.blendDst=ke,e.blendSrcAlpha=Io,e.blendDstAlpha=ke,e);function tt(e,t,s,o){const{pos:a,nrm:i,idx:c}=bn(e,t,s,o),A=new Float64Array(c.length/3);let x=0;for(let g=0;g<c.length;g+=3){const k=c[g]*3,m=c[g+1]*3,d=c[g+2]*3,T=a[m]-a[k],z=a[m+1]-a[k+1],F=a[m+2]-a[k+2],I=a[d]-a[k],v=a[d+1]-a[k+1],w=a[d+2]-a[k+2];x+=.5*Math.hypot(z*w-F*v,F*I-T*w,T*v-z*I),A[g/3]=x}return{pos:a,nrm:i,idx:c,cdf:A,area:x}}function mt(e,t,s,o){const a=t()*e.area;let i=0,c=e.cdf.length-1;for(;i<c;){const T=i+c>>1;e.cdf[T]<a?i=T+1:c=T}let A=t(),x=t();A+x>1&&(A=1-A,x=1-x);const g=e.idx[i*3]*3,k=e.idx[i*3+1]*3,m=e.idx[i*3+2]*3,d=1-A-x;s.set(e.pos[g]*d+e.pos[k]*A+e.pos[m]*x,e.pos[g+1]*d+e.pos[k+1]*A+e.pos[m+1]*x,e.pos[g+2]*d+e.pos[k+2]*A+e.pos[m+2]*x),o.set(e.nrm[g]*d+e.nrm[k]*A+e.nrm[m]*x,e.nrm[g+1]*d+e.nrm[k+1]*A+e.nrm[m+1]*x,e.nrm[g+2]*d+e.nrm[k+2]*A+e.nrm[m+2]*x).normalize()}function _n(){const e=new Eo({alpha:!0,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!0,powerPreference:"low-power"});e.setClearColor(0,0),e.setPixelRatio(1),e.setSize(256,256,!1),e.autoClear=!0;const t=e.extensions.has("EXT_color_buffer_float")||e.extensions.has("EXT_color_buffer_half_float"),s={type:t?Ro:Co,generateMipmaps:!1,minFilter:Oa,magFilter:Oa},o=[0,1].map(()=>({rt:new Wa(256,256,{...s,depthBuffer:!0}),down:[128,64,32,16].map(n=>new Wa(n,n,{...s,depthBuffer:!1}))})),{rt:a,down:i}=o[0],c=new Jt,A=new _o(2*Math.atan(be.span/16)*180/Math.PI,1,1,30),x=be.span/2-be.feetFromBottom;A.position.set(0,x,8),A.lookAt(0,x,0);const g=[];for(let n=0;n<Ft;n++)g.push(new Na);const k=new Na;c.add(k);const m=g[S.BODY];k.add(m);const d=g[S.HEAD];d.position.set(0,.895,.05),m.add(d);const T=g[S.EAR_L];T.position.set(-.2,.3,-.05),T.rotation.set(-.14,.3,.7),d.add(T);const z=g[S.EAR_R];z.position.set(.2,.3,-.05),z.rotation.set(-.14,-.3,-.7),d.add(z);const F=g[S.PAW_L];F.position.set(-.2,vt[1],vt[2]),m.add(F);const I=g[S.PAW_R];I.position.set(vt[0],vt[1],vt[2]),m.add(I);const v={x:.135,y:.19,z:.268};for(const[n,r]of[[-1,S.EYE_L],[1,S.EYE_R]]){const l=g[r];l.position.set(n*v.x,v.y,v.z),l.rotation.set(-.05,n*.42,n*la),d.add(l)}const w=g[S.TAIL];w.position.set(.24,.12,-.12),w.rotation.set(-1.25,.35,0),m.add(w);const b=g[S.PEARL];b.position.set(0,wa,ya),m.add(b),k.updateMatrixWorld(!0);const q=new Ho;q.position.set(0,-.04,.4),d.add(q);const y={body:tt(ua,[-.62,-.05,-.45],[.62,1.05,.5],.028),head:tt(ca,[-.45,-.17,-.35],[.45,.52,.5],.026),ear:tt(ha,[-.34,-.05,-.12],[.34,1.06,.12],.022),tail:tt(ao,[-.34,-.34,-.34],[me+.34,.34,.34],.026),pawL:tt(eo,[-.12,-.25,-.1],[.25,.1,.36],.016),pawR:tt(to,[-.25,-.25,-.1],[.12,.1,.36],.016)},O=n=>new Ua().copy(n.matrixWorld).invert(),j=[{part:S.BODY,f:ua,m:O(m)},{part:S.HEAD,f:ca,m:O(d)},{part:S.EAR_L,f:ha,m:O(T)},{part:S.EAR_R,f:ha,m:O(z)},{part:S.PAW_L,f:eo,m:O(F)},{part:S.PAW_R,f:to,m:O(I)}],p=new Q,L=(n,r)=>{let l=9;for(const h of j)h.part!==r&&(p.copy(n).applyMatrix4(h.m),l=Math.min(l,h.f(p.x,p.y,p.z)));return l},R=(n,r,l,h,f)=>{h.copy(r),f&&l&&f.copy(l),n===S.TAIL&&yn(h,f,Ht,Dt),h.applyMatrix4(g[n].matrixWorld),f&&f.transformDirection(g[n].matrixWorld)},B=(n,r,l=!1)=>{const h=new ve({vertexShader:no,fragmentShader:Mn,transparent:!0,depthWrite:!1,side:Bo,uniforms:{uTint:{value:new Q(...n)},uRim:{value:r},uGlow:{value:0},uBright:{value:1},uBend:{value:l?1:0},uTail:{value:new Oe(Ht,0,0,Dt)},uBones:{value:new Array(Se).fill(0)},uBonesV:{value:new Array(Se).fill(0)},uTime:{value:0},uNacre:{value:0},uHueAt:{value:.33},uPearlW:{value:new Q},uPearlI:{value:.5},uClearCol:{value:new Q(1,.5,.7)},uMask:{value:0}}});return h.blending=Ct,h.blendEquation=ma,h.blendSrc=ke,h.blendDst=ke,h.blendSrcAlpha=ke,h.blendDstAlpha=ke,h.blendEquationAlpha=ea,h},C=B(Ge,.8),W=B(Z,.9),Y=B(Ge,.85,!0),$=[C,W,Y],G=[],J=new Q,ee=(n,r,l)=>{const h=new Rt;h.setAttribute("position",new Me(n.pos,3)),h.setAttribute("normal",new Me(n.nrm,3)),h.setIndex(n.idx);const f=new Float32Array(n.pos.length/3);for(let E=0;E<f.length;E++){p.set(n.pos[E*3],n.pos[E*3+1],n.pos[E*3+2]),R(r,p,null,J,null);const _=L(J,r);f[E]=Math.max(0,Math.min(1,(_+.005)/.05))}h.setAttribute("aVis",new Me(f,1));const P=new et(h,l);if(P.renderOrder=0,P.frustumCulled=!1,g[r].add(P),r!==S.PAW_L&&r!==S.PAW_R){const E=new ve({vertexShader:no,fragmentShader:"void main(){ gl_FragColor=vec4(0.); }",uniforms:l.uniforms,colorWrite:!1,depthWrite:!0,depthTest:!0}),_=new et(h,E);_.renderOrder=-2,_.frustumCulled=!1,_.name="depth",g[r].add(_),G.push(_)}};ee(y.body,S.BODY,C),ee(y.head,S.HEAD,C),ee(y.ear,S.EAR_L,W),ee(y.ear,S.EAR_R,W),ee(y.tail,S.TAIL,Y),ee(y.pawL,S.PAW_L,C),ee(y.pawR,S.PAW_R,C);const le=new Do(1,40,28),de=new ve({vertexShader:so,fragmentShader:Sn,uniforms:{uTime:{value:0},uGlow:{value:0},uCap:{value:1.2},uTintC:{value:new Q(1,1,1)},uTintK:{value:0},uSpec:{value:3.5}},transparent:!0}),ne=new et(le,de);ne.scale.setScalar(.13),b.add(ne);const re=[g[S.EYE_L],g[S.EYE_R]],pe=[...re],ce=zt(new ve({vertexShader:so,fragmentShader:An,depthTest:!1})),K=new et(le,ce);K.position.set(ye[0],ye[1]+.014,ye[2]-.006),K.scale.set(.026,.018,.016),K.renderOrder=2,d.add(K);const u=fn(854946),te=[],Le=[],xe=[],Te=[],rt=[],Xe=[],Be=[],Ee=[],se=(n,r,l,h,f,P,E=[0,1,0],_=u())=>{te.push(n.x,n.y,n.z),Le.push(r.x,r.y,r.z),xe.push(l),Te.push(u(),u(),u(),_);const H=.85+u()*.25;rt.push(Math.min(1,h[0]*H),Math.min(1,h[1]*H),Math.min(1,h[2]*H)),Xe.push(f),Be.push(P),Ee.push(...E)},Re=()=>{let n=0;for(let r=0;r<4;r++)n+=u();return(n-2)*1.732},Ze=()=>Math.min(.06,Math.max(.005,.0135*Math.exp(.5*Re()))),Fe=new Q(0,.05,1).normalize(),M=new Q,D=new Q,ae=new Q,Ce=new Q,za=(n,r)=>{const l=j.find(h=>h.part===r);return p.copy(n).applyMatrix4(l.m),l.f(p.x,p.y,p.z)},Kt=(n,r)=>r===S.BODY?1-U(0,.1,za(n,S.HEAD)):r===S.HEAD?(1-U(0,.24,za(n,S.BODY)))*(1-U(.87,.97,n.y)):0,gt=(n,r,l,h,f=()=>0)=>{let P=0,E=0;for(;P<l&&E<l*14;){if(E++,mt(n,u,M,D),R(r,M,D,ae,Ce),L(ae,r)<.004)continue;const _=1-Math.abs(Ce.dot(Fe)),H=Kt(ae,r),N=(.14+.86*Math.pow(Math.max(0,Math.min(1,(_-.1)/.6)),1.5))*(1-.5*H);if(u()>Math.max(N,f(M)))continue;const X=u()<.005,ge=!X&&u()<.22?-Math.log(1-u()*.95)*.016:0;ge&&M.addScaledVector(D,ge);const ie=!ge&&!X&&u()<.3?-Math.log(1-u()*.96)*.03:0;ie&&M.addScaledVector(D,-ie),se(M,D,r,u()<.08?he:h(M,D),X?.055+u()*.035:Ze()*(ge?.75:ie?.8:1),X?7:0,[0,1,Math.max(H,ie?Math.min(.75,ie/.06):0)]),P++}},qt=(n,r,l)=>n.some(h=>h(r.x,r.y,r.z)<l),Ta=(n,r)=>qt(r,n,.012)?u()<.6?ue:Z:u()<.55?Ge:Z,Qe=1300;gt(y.body,S.BODY,Math.round(y.body.area*Qe*.4),n=>Ta(n,ba),n=>qt(ba,n,.01)?.3:0);const Ea=[-1,1].map(n=>je([n*.085,.155,.28],[n*.05,-0,.33],.02,.016)),Ra=Math.round(y.head.area*Qe*.6);{let n=0,r=0;for(;n<Ra&&r<Ra*14;){if(r++,mt(y.head,u,M,D),R(S.HEAD,M,D,ae,Ce),L(ae,S.HEAD)<.004||Ea.some(H=>H(M.x,M.y,M.z)<.004))continue;if(M.z>.15){const H=Math.abs(M.x)-v.x,N=M.y-v.y,X=Math.cos(la),ge=Math.sin(la),ie=(X*H+ge*N)/(.1*.91*1.12),ft=(-ge*H+X*N)/.076,Ia=ra(Math.min(.999,Math.abs(ie)));if(Math.abs(ie)<1&&(ft>0?ft/(ia*Ia):-ft/(Qa*Ia))<1.15)continue}const l=1-Math.abs(Ce.dot(Fe)),h=(.07+.93*Math.pow(Math.max(0,Math.min(1,(l-.12)/.6)),1.4))*(1-.5*Kt(ae,S.HEAD)),f=Ve[2](M.x,M.y,M.z)<.012&&M.z>.25,P=f?.4:qt(Ve,M,.01)&&D.z>.2?M.z>.3?.6:.45:0;if(u()>Math.max(h,P))continue;const E=P>0&&u()<(f?.6:.7)?8:0,_=E===0&&u()<.3?-Math.log(1-u()*.96)*.028:0;_&&M.addScaledVector(D,-_),se(M,D,S.HEAD,u()<.08?he:f?Z:Ta(M,Ve),Ze()*(f||_?.8:1),E,[0,1,Math.max(Kt(ae,S.HEAD),_?Math.min(.75,_/.06):0)]),n++}}for(let n=0,r=0;n<120&&r<6e4;r++){mt(y.head,u,M,D);const l=M.y>.04&&M.y<.17&&Math.abs(M.x)<.022+(.17-M.y)*.22&&M.z>.24;if(!(Ve[2](M.x,M.y,M.z)<.01&&M.z>.27||l)||D.z<.15||(R(S.HEAD,M,D,ae,Ce),L(ae,S.HEAD)<.004||Ea.some(E=>E(M.x,M.y,M.z)<.006)))continue;const h=U(.3,.39,M.z),f=u()<.15?he:u()<.5?ue:Z,P=(.006+u()*.005)*(1-.4*h);se(M,D,S.HEAD,f,P,8,[0,1,0]),M.x=-M.x,D.x=-D.x,se(M,D,S.HEAD,f,P,8,[0,1,0]),n+=2}{const n=Math.round(y.tail.area*Qe*.55),r=[.66,.38,.19];let l=0,h=0;for(;l<n&&h<n*14;){if(h++,mt(y.tail,u,M,D),R(S.TAIL,M,D,ae,Ce),L(ae,S.TAIL)<.004)continue;const f=M.x/me,P=1-Math.abs(Ce.dot(Fe)),E=(.06+.94*Math.pow(Math.max(0,Math.min(1,(P-.12)/.6)),1.4))*(f>.86?.75:1);if(u()>E)continue;const _=u()<.55+.35*U(.75,.95,f)?-Math.log(1-u()*.95)*(.02+.02*f+.05*U(.8,1,f)):0;_&&(M.addScaledVector(D,_),M.x+=_*1.8);const H=Math.max(0,Math.min(1,(f-.68)/.25)),N=u()<.07*(1-H)?he:u()<.6?Ge:Z;se(M,D,S.TAIL,[N[0]+(r[0]-N[0])*H,N[1]+(r[1]-N[1])*H,N[2]+(r[2]-N[2])*H],Ze()*(_?.75:1),0),l++}}const po=oe([0,.5,0],He),Wt=(n,r)=>{let l=.06;for(let h=0;h<6;h++){const f=po(n/$e(r),r,l+Sa(n,r));l-=f*.8}return l};for(const n of[S.EAR_L,S.EAR_R]){gt(y.ear,n,Math.round(y.ear.area*Qe*.42),()=>u()<.6?Z:Ge);for(let l=0;l<620;l++){const h=u()*Math.PI*2,f=.5+Math.sin(h)*He[1]*.985;if(f<.12)continue;const P=Math.cos(h)*He[0]*$e(f)*.985,E=-Sa(P,f)+(u()-.5)*.02;M.set(P,f,E),D.set(Math.cos(h),Math.sin(h)*.5,.15).normalize(),se(M,D,n,u()<.15?he:Z,.01+u()*.014,0)}const r=l=>{const h=Math.max(0,Math.min(1,(l-.08)/.8));return[1-.22*h,.7+.24*h,.6+.32*h]};for(let l=0,h=0;l<560&&h<9e3;h++){const f=.08+u()*.82,P=u()*2-1,E=Math.pow(Math.abs(P),3),_=1-(f-.08)/.82;if(u()>.12+.5*E+.6*_*_)continue;const H=P*.94*He[0]*$e(f);M.set(H,f,Wt(H,f)+.004),D.set(0,0,1),se(M,D,n,u()<.12?ue:r(f),.0055+u()*.0045,2),l++}for(let l=0;l<300;l++){const h=Math.PI*(.5+(u()*2-1)*.9),f=.5+Math.sin(h)*He[1]*.74-.04;if(f<.1)continue;const P=U(.1,.85,f),E=Math.cos(h)*He[0]*$e(f)*.6;M.set(E,f,Wt(E,f)+.008),D.set(Math.cos(h),Math.sin(h)*.5,.15).normalize(),se(M,D,n,u()<.25?ue:r(f),(.006+u()*.006)*(1.1-.35*P),0,[0,1,.45])}for(let l=0;l<7;l++){const h=-.62+l*.207+(u()-.5)*.04,f=.86-Math.abs(h)*.3;for(let P=0;P<3;P++){const E=[78,40,22][P];for(let _=0;_<E;_++){const H=Math.pow(u(),.85),N=.07+H*(f-.07),X=Re()*[.004,.012,.026][P],ge=h*(1-.15*H)+X*4,ie=ge*He[0]*$e(N)*.92;M.set(ie,N,Wt(ie,N)+.006+P*.004),D.set(0,0,1),se(M,D,n,u()<.3?ue:r(N),[.0065,.008,.011][P]*(.8+u()*.5),6,[H,P/2,.6+P*.7])}}}}gt(y.pawL,S.PAW_L,Math.round(y.pawL.area*Qe*3.2),()=>u()<.65?ue:Z),gt(y.pawR,S.PAW_R,Math.round(y.pawR.area*Qe*3.2),()=>u()<.65?ue:Z);const Ca=(n,r,l,h)=>{for(let f=0;f<h;f++){const P=u()*2-1,E=u()*Math.PI*2,_=Math.sqrt(1-P*P);D.set(_*Math.cos(E),_*Math.sin(E),P);const H=1-Math.abs(D.z);if(u()>.2+.8*H||D.y<-.5){f--;continue}M.set(r[0]+D.x*l[0],r[1]+D.y*l[1],r[2]+D.z*l[2]),se(M,D,n,u()<.5?ue:Z,.01+u()*.016,0)}};for(const n of[-1,1]){for(let r=0;r<4;r++)Ca(S.BODY,[n*.2+(r-1.5)*.034,.048,.35-Math.abs(r-1.5)*.012],[.015,.016,.016],30);for(let r=0;r<70;r++){const l=u();M.set(n*(.17+.03*l)+(u()-.5)*.012,.09-.02*l+(u()-.5)*.006,.02+.3*l),D.set(n*.3,.9,.2).normalize(),se(M,D,S.BODY,u()<.5?ue:Z,.008+u()*.008,0)}}for(const[n,r]of[[S.PAW_L,-1],[S.PAW_R,1]])for(let l=0;l<3;l++)Ca(n,[-r*.112+(l-1)*.026*-r,-.12+Math.abs(l-1)*.008,.3],[.012,.012,.012],22);const Ot=(n,r,l,h,f,P,E=1)=>{let _=0,H=0;for(;_<f&&H<f*60;){H++,M.set(l[0]+u()*(h[0]-l[0]),l[1]+u()*(h[1]-l[1]),l[2]+u()*(h[2]-l[2]));const N=n(M.x,M.y,M.z);if(N>-.012||r===S.HEAD&&Math.hypot((Math.abs(M.x)-v.x)/.13,(M.y-v.y)/.1)<1)continue;const X=.15+.85*(1-U(.035,.2,-N));if(u()>X)continue;const ge=P?Math.hypot(M.x-P[0],M.y-P[1],M.z-P[2]):9,ie=Math.max(0,1-ge/.3),ft=ie>.35&&u()<ie?he:u()<.5?Z:u()<.6?ue:Ge;se(M,D.set(0,0,1),r,ft,(.008+u()*.009)*(1+ie*.5),9,[ie,0,0],((.2+.26*u())*(.6+.6*X)+ie*.5)*E),_++}};Ot(ua,S.BODY,[-.5,0,-.32],[.5,1,.45],3e3,[0,wa,ya],.62),Ot(ca,S.HEAD,[-.45,-.12,-.3],[.45,.48,.5],1200,null,.6),Ot(ao,S.TAIL,[0,-.22,-.22],[me,.22,.22],1100,null,.75);const wt=(n,r,l,h,f,P,E,_)=>{for(let H=0,N=0;H<f&&N<f*400;N++)mt(n,u,M,D),!(!E(M,D)||Math.abs(l(M.x,M.y,M.z)-h(M.x,M.y,M.z))>P*(.6+.8*u()))&&(R(r,M,D,ae,Ce),!(L(ae,r)<.004)&&(M.addScaledVector(D,-.006-u()*.01),se(M,D,r,u()<.3?he:_,.007+u()*.008,9,[.15,0,0],.32+.3*u()),H++))};wt(y.body,S.BODY,ho,Ma,360,.014,(n,r)=>r.z>.05&&n.y<.42,Z),wt(y.body,S.BODY,fo,Ma,220,.012,(n,r)=>r.z>.1,ue);const _a=oe([0,.19,0],[.33,.265,.3]);wt(y.head,S.HEAD,Ve[0],_a,150,.012,(n,r)=>r.z>.15&&n.x<-.08&&n.y<.13,ue),wt(y.head,S.HEAD,Ve[1],_a,150,.012,(n,r)=>r.z>.15&&n.x>.08&&n.y<.13,ue);for(let n=0;n<140;n++){const r=u()*2-1,l=u()*Math.PI*2,h=Math.sqrt(1-r*r),f=.16+Math.abs(Re())*.09;D.set(h*Math.cos(l),h*Math.sin(l),r),se(M.copy(D).multiplyScalar(f),D,S.PEARL,u()<.6?he:u()<.5?Ja:Z,.006+u()*.01,0)}se(M.set(0,0,.02),D.set(0,0,1),S.PEARL,[.85,.97,1],.62,11,[0,1,0],.16);const Ne=te.length/3;{const n=Array.from({length:Ne},(l,h)=>h);for(let l=Ne-1;l>0;l--){const h=Math.floor(u()*(l+1)),f=n[l];n[l]=n[h],n[h]=f}const r=(l,h)=>{const f=l.slice();for(let P=0;P<Ne;P++)for(let E=0;E<h;E++)l[P*h+E]=f[n[P]*h+E]};r(te,3),r(Le,3),r(xe,1),r(Te,4),r(rt,3),r(Xe,1),r(Be,1),r(Ee,3)}const yt=n=>{const r=new Rt;return r.setAttribute("position",new Ke(n.pos,3)),r.setAttribute("aNormal",new Ke(n.nrm,3)),r.setAttribute("aPart",new Ke(n.part,1)),r.setAttribute("aSeed",new Ke(n.seed,4)),r.setAttribute("aColor",new Ke(n.col,3)),r.setAttribute("aSize",new Ke(n.size,1)),r.setAttribute("aKind",new Ke(n.kind,1)),r.setAttribute("aDir",new Ke(n.dir,3)),r},Nt=[];for(let n=0;n<Ft;n++)Nt.push(new Ua);const Je=zt(new ve({vertexShader:da,fragmentShader:ro,uniforms:{uParts:{value:Nt},uTime:{value:0},uPx:{value:600},uPulse:{value:0},uLive:{value:1},uPeel:{value:0},uPeelFrac:{value:.3},uEyeOpen:{value:1},uHappyEyes:{value:0},uGlow:{value:0},uBright:{value:1},uBoost:{value:1},uTail:{value:new Oe(Ht,0,0,Dt)},uHue:{value:0},uDust:{value:0},uMinPx:{value:1.5},uRimGain:{value:1},uThin:{value:0},uBeat:{value:0},uLoose:{value:0},uTwinkle:{value:.45},uShadow:{value:0},uShadowA:{value:.25},uOverlay:{value:0},uHueAt:{value:.33},uWave:{value:0},uWaveTint:{value:0},uClearCol:{value:new Q(1,.5,.7)},uPearlP:{value:new Q},uSmall:{value:0},uBones:{value:new Array(Se).fill(0)},uBonesV:{value:new Array(Se).fill(0)},uBreathK:{value:0},uUnwind:{value:0},uUnwindP:{value:0}}}));Je.depthTest=!1;const it=new at(yt({pos:te,nrm:Le,part:xe,seed:Te,col:rt,size:Xe,kind:Be,dir:Ee}),Je);it.geometry.setDrawRange(0,Ne),it.frustumCulled=!1,it.renderOrder=1,c.add(it);const xo=n=>{const r=new ve({vertexShader:da,fragmentShader:kn,uniforms:{...Je.uniforms,uShadow:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Ct});return r.blendEquation=ea,r.blendEquationAlpha=ea,r},Ae={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]};for(let n=0,r=0;n<Ne;n++)Be[n]!==0||r++%3!==0||(Ae.pos.push(te[n*3],te[n*3+1],te[n*3+2]),Ae.nrm.push(Le[n*3],Le[n*3+1],Le[n*3+2]),Ae.part.push(xe[n]),Ae.seed.push(Te[n*4],Te[n*4+1],Te[n*4+2],Te[n*4+3]),Ae.col.push(0,0,0),Ae.size.push(Xe[n]),Ae.kind.push(0),Ae.dir.push(Ee[n*3],Ee[n*3+1],Ee[n*3+2]));const Ha=yt(Ae),go=Ae.kind.length,lt=new at(Ha,xo());lt.name="silhouette",lt.frustumCulled=!1,lt.renderOrder=-.5,c.add(lt);const V={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]},fe=(n,r,l,h,f,P=he,E=1,_=S.HEAD,H=[0,1,0])=>{V.pos.push(n,r,l),V.nrm.push(0,0,1),V.part.push(_),V.seed.push(u(),u(),f===5&&E<0?1:f===10?u():0,Math.abs(E)),V.col.push(...P),V.size.push(h),V.kind.push(f),V.dir.push(...H)},ut=.1,ct=.076,ht=.03,Da=(n,r)=>{const l=ra(Math.min(.999,Math.abs(n)));return Math.max(Math.abs(n),l<=0?9:r>0?r/(ia*l):-r/(Qa*l))+Math.max(0,Math.abs(n)-1)},wo=n=>ht*Math.sqrt(Math.max(0,1-n*n*.8))+.004;for(const n of[S.EYE_L,S.EYE_R]){for(let r=0,l=0;r<440&&l<12e3;l++){const h=(u()*2-1)*1.6,f=(u()*2-1)*1.6,P=Da(h,f);P<1.02||P>1.45||u()>Math.pow(1-(P-1.02)/.43,2.4)||(fe(h*ut,f*ct,ht*.2,.006+u()*.007,8,u()<.6?Z:Ge,1,n,[0,0,1]),r++)}for(let r=0,l=0;r<420&&l<12e3;l++){const h=u()*2-1,f=u()*2-1,P=Da(h,f);if(P>.97)continue;const E=Math.hypot(h/.36,(f-.08)/.62),_=U(.2,-.8,f),H=U(.6,.97,P);if(u()>.35+.4*_+.25*H)continue;const N=_>.5?u()<.25?Ja:[1,.66,.34]:[.55,.36,.22];fe(h*ut,f*ct,wo(P)*.6,.006+u()*.005,10,N,(.035+.16*_+.06*H)*(E<1?.25:1)*(.6+.6*u()),n),r++}fe(-.3*ut,.36*ct,ht+.008,.048,3,he,1,n),fe(.32*ut,-.36*ct,ht+.006,.014,3,[.85,1,.96],.5,n);for(let r=0;r<32;r++){const l=r/31,h=-.86+1.72*l,f=ra(Math.min(.99,Math.abs(h))),P=Math.sin(Math.PI*(.06+.88*l));fe(h*ut,f*ia*1.12*ct+.005,ht*.6,.0045+.005*P,5,u()<.3?he:Z,-(.3+.6*P),n)}}for(const n of[-1,1]){const r=n*v.x,l=v.y,h=v.z+.03;for(let f=0;f<=20;f++){const P=Math.PI*(.12+.76*f/20);fe(r+Math.cos(P)*.07,l-.025+Math.sin(P)*.05,h,.03,4,[1,.9,.7])}for(let f=0;f<=16;f++){if(u()<.25)continue;const P=f/16+(u()-.5)*.03,E=n*(.085+(.05-.085)*P),_=.155+(0-.155)*P,H=.29+(.33-.29)*P;fe(E+n*.03*(1-P*.3),_+.004,H,.01+u()*.008,5,ue,.22+u()*.18)}}fe(0,ye[1]+.02,ye[2]+.012,.016,3,he,.55);for(let n=0;n<=22;n++){const r=-1.25+2.5*n/22,l=Math.cos(r*1.1);fe(Math.sin(r)*.1,ye[1]-.035-.045*Math.cos(r),ye[2]-.05-.05*(1-Math.cos(r)),.006+.003*l,5,Z,.16+.12*l)}for(const n of[-1,1])for(const[r,l]of[[.012,.045],[-.006,-.002],[-.024,-.05]])for(let h=0;h<10;h++){const f=h/9;fe(n*(.07+.12*f),r+(l-r)*f+.01*Math.sin(f*Math.PI),.33-.06*f,.011*(1-.6*f),5,f<.25?he:ue,1-.75*f)}for(const n of[-1,1])for(let r=0;r<7;r++){const l=r/6;fe(n*.034*l,ye[1]-.026-.016*Math.sin(l*Math.PI),ye[2]-.014-.012*l,.006,5,Z,.42)}for(let n=0;n<4;n++)fe(0,ye[1]-.004-n*.006,ye[2]-.004,.006,5,Z,.42);const Ut=new at(yt(V),Je);Ut.frustumCulled=!1,Ut.renderOrder=3,c.add(Ut);const yo=n=>{const r={pos:[],nrm:[],part:[],seed:[],col:[],size:[],kind:[],dir:[]};for(let l=0;l<V.kind.length;l++)n(V.kind[l],l)&&(r.pos.push(V.pos[l*3],V.pos[l*3+1],V.pos[l*3+2]),r.nrm.push(V.nrm[l*3],V.nrm[l*3+1],V.nrm[l*3+2]),r.part.push(V.part[l]),r.seed.push(V.seed[l*4],V.seed[l*4+1],V.seed[l*4+2],V.seed[l*4+3]),r.col.push(V.col[l*3],V.col[l*3+1],V.col[l*3+2]),r.size.push(V.size[l]),r.kind.push(V.kind[l]),r.dir.push(V.dir[l*3],V.dir[l*3+1],V.dir[l*3+2]));return yt(r)},Gt=new Jt,La=yo(n=>n>=3&&n<=5);{const n=new ve({vertexShader:da,fragmentShader:Pn,uniforms:{...Je.uniforms,uOverlay:{value:2},uOvGain:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Ct});n.blendEquation=ma,n.blendSrc=ke,n.blendDst=ke,n.blendSrcAlpha=ke,n.blendDstAlpha=ke;const r=new at(La,n);r.frustumCulled=!1,r.renderOrder=2,Gt.add(r)}const Vt={d:[],sd:[],kd:[]},Yt={d:[],sd:[],kd:[]};let bt=Vt;const Ie=(n,r,l,h,f)=>{bt.d.push(r,l,h,f),bt.sd.push(u(),u(),u(),u()),bt.kd.push(n)};for(let n=0;n<300;n++){const r=u()*2-1,l=u()*Math.PI*2,h=Math.sqrt(1-r*r),f=.95+u()*.7;Ie(0,h*Math.cos(l)*f*1.05,h*Math.sin(l)*f*.95,r*f*.8,u()<.05?.07+u()*.06:.012+u()*.02)}for(let n=0;n<2;n++)for(let r=0,l=n?420:680;r<l;r++)Ie(1,u(),n,Re(),.008+u()*u()*.02);for(let n=0;n<150;n++)Ie(3,u()*Math.PI*2,Math.min(1,Math.max(0,.45+Re()*.22)),0,.01+u()*.016);for(const[n,r,l,h,f]of[[16,-4.2,-3.2,.1,2.6],[10,-2,-1.2,.15,2.1],[6,2.2,3,.145,1.5]])for(let P=0;P<n;P++){const E=r+u()*(l-r);let _=(u()*2-1)*f;const H=1.05+(u()*2-1)*f*.95;Math.abs(_)<.5&&E>0&&(_+=Math.sign(_||1)*.6),Ie(4,_,H,E,h*(.8+u()*.45))}for(let n=0;n<70;n++)Ie(5,0,0,0,.012+u()*.02);bt=Yt;for(let n=0;n<700;n++){const r=u()<.5?(u()-.5)*.3:u()*2-1;Ie(2,u(),r,0,.012+u()*.018)}for(let n=0;n<440;n++){const r=u()*2-1,l=u()*Math.PI*2,h=Math.sqrt(1-r*r);Ie(6,h*Math.cos(l)*1.4,h*Math.sin(l)*.5-.1,Math.abs(r)*.8+.35,.014+u()*.024)}for(let n=0;n<700;n++)Ie(7,u(),u()*2-1,u(),.012+u()*.018);const $t=zt(new ve({vertexShader:zn,fragmentShader:ro,uniforms:{uTime:{value:0},uPx:{value:600},uPulse:{value:0},uLive:{value:1},uBreath:{value:0},uRibbon:{value:.3},uArcAge:{value:-1},uArcSide:{value:1},uArcPow:{value:1},uSpill:{value:.5},uLandAge:{value:9},uPearl:{value:new Q},uMuzzle:{value:new Q},uEnergy:{value:0},uBright:{value:1},uExhaleAge:{value:9},uExhaleSeed:{value:0},uBoost:{value:1},uStream:{value:0},uTarget:{value:new Q(1.4,-.5,1)},uHue:{value:0},uOrbit:{value:0},uBokeh:{value:.4},uHueAt:{value:.33},uClearCol:{value:new Q(1,.5,.7)},uFace:{value:new Q},uLodK:{value:1},uMinFx:{value:1}}}));$t.depthTest=!0;const Ba=n=>{const r=n.kd.length,l=Array.from({length:r},(H,N)=>N);for(let H=r-1;H>0;H--){const N=Math.floor(u()*(H+1)),X=l[H];l[H]=l[N],l[N]=X}l.sort((H,N)=>(n.kd[H]===4?0:1)-(n.kd[N]===4?0:1));const h=new Float32Array(r*4),f=new Float32Array(r*4),P=new Float32Array(r);l.forEach((H,N)=>{for(let X=0;X<4;X++)h[N*4+X]=n.d[H*4+X],f[N*4+X]=n.sd[H*4+X];P[N]=n.kd[H]});const E=new Rt;E.setAttribute("position",new Me(new Float32Array(r*3),3)),E.setAttribute("aData",new Me(h,4)),E.setAttribute("aSeed",new Me(f,4)),E.setAttribute("aKind",new Me(P,1));const _=new at(E,$t);return _.frustumCulled=!1,_.renderOrder=4,c.add(_),_},bo=Ba(Vt),Mo=Ba(Yt),So=Vt.kd.length,Ao=Yt.kd.length,jt=zt(new ve({vertexShader:Tn,fragmentShader:En,uniforms:{uI:{value:.2}}}));jt.depthTest=!1;const Xt=new et(new Ga(3.2,3.2),jt);Xt.position.set(0,1.05,-1.2),Xt.renderOrder=-1,c.add(Xt);const Zt=new ve({vertexShader:io,fragmentShader:Cn,depthTest:!1,depthWrite:!1,blending:Va,uniforms:{tSrc:{value:a.texture},tB1:{value:i[0].texture},tB2:{value:i[1].texture},tB3:{value:i[2].texture},tB4:{value:i[3].texture},uTexel:{value:new st(1/256,1/256)},uBloom:{value:.8},uHalo:{value:0},uExpo:{value:1},uWide:{value:0},uSat:{value:0},uBack:{value:0},uWin:{value:new Oe(-1,-1,2,2)},uFea:{value:new Oe(.01,.01,.01,.01)},uRound:{value:0}}}),Fa=new ve({vertexShader:io,fragmentShader:Rn,depthTest:!1,depthWrite:!1,blending:Va,uniforms:{tIn:{value:a.texture},uHalf:{value:new st}}}),Mt=new Jt,dt=new et(new Ga(2,2),Zt);dt.frustumCulled=!1,Mt.add(dt);const Qt=new Lo(-1,1,1,-1,0,1);try{e.setRenderTarget(a),e.compile(c,A),dt.material=Fa,e.setRenderTarget(i[0]),e.compile(Mt,Qt),dt.material=Zt,e.setRenderTarget(null),e.compile(Mt,Qt),e.compile(Gt,A)}catch{}return{depthMeshes:G,overlay:Gt,overlayCount:La.attributes.position.count,pupilCount:0,r:e,scene:c,cam:A,groups:g,root:k,eyes:re,eyeWorld:pe,speck:Je,fx:$t,aura:jt,pearl:de,shells:$,tailShell:Y,partM:Nt,muzzle:q,rt:a,down:i,sets:o,frame:0,downMat:Fa,quad:dt,comp:Zt,compScene:Mt,compCam:Qt,hdr:t,specks:Ne+V.pos.length/3,speckGeo:it.geometry,bodySpecks:Ne,shadowGeo:Ha,shadowCount:go,shadowPts:lt,fxIdlePts:bo,fxReactPts:Mo,fxIdle:So,fxReact:Ao}}const We=e=>Math.max(0,Math.min(1,e)),U=(e,t,s)=>{const o=We((s-e)/(t-e));return o*o*(3-2*o)},Tt=e=>e-Math.floor(e),Et=(e,t,s)=>{const o=((e+s)%t+t)%t;return o<.32?Math.sin(o/.32*Math.PI)*Math.sin(o/.32*Math.PI*2):0};function Hn(e){const t=(e%5.3+5.3)%5.3;let s=0;t>4.9&&t<5.12&&(s=Math.sin((t-4.9)/.22*Math.PI));const o=(e%11.7+11.7)%11.7;return o>2.2&&o<2.38&&(s=Math.max(s,Math.sin((o-2.2)/.18*Math.PI))),s}const qe=2.5,fa=e=>-Math.sin(e*.72)*.035*.9+Math.sin(e*.53)*.07+Math.sin(e*.21)*.04;function Dn(e){const t=!!e.reducedMotion,s=Number.isFinite(e.time)?e.time:0,o=We(Number.isFinite(e.music)?e.music:0),a=We(Number.isFinite(e.energy)?e.energy:0);let i=Number.isFinite(e.clearAge)&&e.clearAge>=0?e.clearAge:99;const c=!t&&Number.isFinite(e.spiritAge)&&e.spiritAge>=0&&e.spiritAge<i;c&&(i=e.spiritAge);const A=!t&&Number.isFinite(e.spiritAge)&&e.spiritAge>=0?e.spiritAge:-1,x=A>=0?U(0,.6,A)*(1-U(3.1,3.7,A)):0,g=A>=0?U(.15,.5,A)*(1-U(3.4,3.8,A)):0,k=Math.max(-1,Math.min(1,e.spiritX??-.85))*.6,m=Number.isFinite(e.landAge)&&e.landAge>=0?e.landAge:99,d=c?3:Number.isFinite(e.chain)?e.chain:1,T=Number.isFinite(e.clearGap)?e.clearGap:0,z=Math.max(-1,Math.min(1,c?e.spiritX??0:Number.isFinite(e.clearX)?e.clearX:0)),F=i<2.2?Math.sin(Math.min(1,i/.18)*Math.PI/2)*Math.exp(-i*1.6):0,I=!t&&i<2.4;let v=0;if(Number.isFinite(e.bar)&&i<99){const ae=(e.bar-i/qe)*16;v=(Math.ceil(ae)-ae)/16*qe}const w=i-Math.max(.08,v),b=I?w<0?Math.sin(Math.min(1,i/.08)*Math.PI/2):Math.exp(-w*14):0,q=I&&w>0?(1-Math.exp(-w*16))*Math.exp(-w*1.9):0,y=I&&w>0?Math.min(1,1.35*(1-Math.exp(-w*11))*Math.exp(-w*w*3.6)):0,O=!t&&m<.4?Math.sin(m/.4*Math.PI)*Math.exp(-m*3):0,j=ae=>1+(1.9+1)*Math.pow(ae-1,3)+1.9*Math.pow(ae-1,2),p=w/.35,L=I&&d>=3&&w>0&&p<1?.2*(p<.45?j(p/.45):1-Math.pow((p-.45)/.55,2)):0,R=L>0?L:I&&w>0&&w<.42?Math.sin(w/.42*Math.PI)*(.05+.05*a):!t&&e.happy?Math.abs(Math.sin(s*4.2))*.05:0,B=Number.isFinite(e.bar)?Tt(e.bar)*qe:9,C=I&&d<2&&i<.9?Math.sin(i/.25*Math.PI*2)*Math.exp(-i*7):x>.5&&B<.9?Math.sin(B/.25*Math.PI*2)*Math.exp(-B*7)*x:0,W=I&&d===2?Math.sin(Math.min(1,i/.16)*Math.PI/2)*Math.exp(-Math.max(0,i-.16)*1.5):0,Y=I&&d>=2?Math.exp(-Math.max(0,w)*5)*(w>0?1:0):0,$=Number.isFinite(e.bar)?e.bar:s/3.2,G=t?0:Math.cos(Math.PI*2*$),J=t?9:Tt($)*(Number.isFinite(e.bar)?qe:3.2),ee=e.happy||i<1.6&&(d>=2||T>=2),le=e.happy?1:ee&&!t?U(0,.1,i)*(1-U(1.2,1.6,i))*(1-g):0,de=!t&&!ee&&i>.04&&i<.24?Math.sin((i-.04)/.2*Math.PI):0,ne=t?0:i<1.6?U(.05,.25,i)*(1-U(1.1,1.6,i)):0,re=Math.max(ne,x),pe=t?0:(e.lookX??0)*(1-re)+(x>=ne?k:z)*re,ce=t?0:(e.lookY??0)*(1-re)+.55*re,K=t?0:Math.sin(s*.72)*.035,u=t?0:fa(s),te=t?.5+.5*Math.sin(s*Math.PI*2/6):0,Le=d>=2?We((d-1)/2):0,xe=i<3.2?Le*U(0,.4,i)*(1-U(1.8,3.2,i)):0,Te=We(xe+Math.max(0,a-.75)*.6)*(e.reducedFlash?.6:1),rt=!t&&Number.isFinite(e.bar)?Math.exp(-Tt(e.bar*4)*5):0,Xe=t?0:.6*dn(e.songTime),Be=Number.isFinite(e.bar),Ee=Be?e.bar*qe:s,se=co(e.songTime),Re=.2,Ze=1.05,Fe=I&&d>=3&&w>Re&&w<Re+Ze?(w-Re)/Ze:-1,M=Fe>=0?Math.sin(Math.PI*Fe)*(e.reducedFlash?.6:1):0,D=Fe>=0?.5-.5*Math.cos(Math.PI*Fe):0;return{unwind:M,unwindP:D,hopK:I&&d>=3?1:0,t:s,rm:t,music:t?0:o,energy:a,clear:F,crouch:b,rise:q,peel:y,scatter:y,land:O,hop:R,breath:G,happyEyes:le,exhaleAge:J,exhaleSeed:Math.floor($),eyeOpen:t?1:1-Math.max(Hn(s),de),sway:K,lookX:pe,lookY:ce,yaw:(t?0:Math.sin(s*.23)*.12)+pe*.3+.04,headTilt:u,headNod:t?0:-.035*G-.12*b+.1*q+ce*.16,earLag:t?0:(fa(s-.12)-fa(s))*2.2,earL:t?0:(Be?Et(Ee,2*qe,0):Et(s,(e.thumb??0)>0?2.6:4.3,.7))*.22+o*.05,earR:t?0:(Be?Et(Ee,4*qe,-2.5*qe):Et(s,(e.thumb??0)>0?3.4:6.1,2.9))*-.22-o*.05,earPerk:t?0:q*.35-b*.22-O*.18-L*1.6,flick:C,flickSide:x>.5?k>=0?1:-1:z>=0?1:-1,gaze:x,lean:t?0:-z*.16*W-(z===0?.06*W:0),pearlPulse:Y,tailWag:t?0:q*.6,glow:We(.25+o*.3+F*(e.reducedFlash?.25:.45-.2*a)+a*.15+te*.12),glowBreath:te,ribbon:(t?.3:.26+a*.2+o*.12)+F*(e.reducedFlash?.12:.3),arcAge:!t&&i<2?w:-1,arcSide:z>=0?1:-1,spill:(t?0:Math.min(1,(.3+a*.4)*(1+1.5*xe)))*(e.reducedFlash?.6:1),landAge:t?9:m,combo:xe,hue:Te,beat:rt,dust:Xe,phrase:se,beatPhase:t?0:Tt(Number.isFinite(e.bar)?e.bar*4:s*1.6),hueAt:d>=4&&i<3.2?.4:d>=3&&i<3.2?.36:.02,loose:t?0:xe*(e.reducedFlash?.4:1)+(t?0:y*.25),orbit:t?0:cn(e.songTime,s),twinkle:t?0:.45+.35*se,stream:t||i>=2?0:.25+.75*xe+.15*a,wide:xe*(e.reducedFlash?.5:1),gestureAge:I&&w>0?w:-1,wave:i<3?t?1:1-Math.pow(1-Math.min(1,i/.9),2.2):0,waveTint:i<3?U(0,.4,i)*(i<.5?1:Math.exp(-(i-.5)/1.2*3))*(e.reducedFlash?.6:1)*(d>=2||c?1:.65):0,clearCol:Number.isFinite(e.clearType)?ln[Math.max(0,Math.min(4,Math.round(e.clearType)))]:un(d>=4?.4:d>=3?.36:.02)}}function Ln(e){const t=e.t,s=e.land*.08+e.crouch*.07,o=e.rise*.24,a=(m,d)=>m>0&&m<4?m/d*Math.exp(1-m/d):0,i=e.gestureAge,c=e.landAge,A=[],x=[];for(let m=0;m<Se;m++){const d=m*.0875,T=1+.45*m,z=t-d,F=Math.sin(z*.72)*.035+e.lean;A.push(e.rm?0:T*(.035*Math.sin(z*1.1)+.018*Math.sin(z*.53+1)+F*.5)+a(i-d,.13+.025*m)*(.08+.045*m)*e.arcSide+a(c-d,.11+.02*m)*.035*T),x.push(e.rm?0:-a(i-d,.16+.03*m)*(.05+.03*m)*(.4+2.5*e.hopK)+a(i-d-.3,.2)*.04*e.hopK+a(c-d,.12)*.04)}const g=A[0],k=A[Se-1];return{root:{y:e.hop-e.crouch*.03,yaw:e.yaw,roll:e.sway+e.lean,sx:1+s*.6-e.breath*.006,sy:1-s+e.breath*.03,sz:1+s*.6},head:{x:e.headNod,y:e.lookX*.32+(e.rm?0:Math.sin(t*.31)*.07),z:e.headTilt},earL:{x:-.14-e.earPerk*.5+e.breath*.04-(e.flickSide<0?e.flick*.3:0),y:.3,z:.7-e.earPerk+e.earL+e.earLag+e.lean*.6+(e.flickSide<0?e.flick*.45:0)},earR:{x:-.14-e.earPerk*.5+e.breath*.04-(e.flickSide>0?e.flick*.3:0),y:-.3,z:-.7+e.earPerk+e.earR+e.earLag+e.lean*.6-(e.flickSide>0?e.flick*.45:0)},pearlScale:(1+.28*e.pearlPulse)*(1+.02*(1-Math.cos(2*Math.PI*e.beatPhase))),pearlY:wa+o+e.breath*.006,pearlZ:ya+o*.8,pawRot:-o*1.5+e.breath*.01,tail:{curl:Ht,base:g,tip:k,lift:Dt+e.rise*.25,bones:A,bonesV:x}}}const Pe={t:-1e9,col:[1,.5,.7],at:.02};function Fn(e,t,s=720){if(Aa)return null;try{ze??(ze=_n())}catch(K){return Aa=!0,typeof console<"u"&&console.warn("dubai light unavailable",K),null}const o=ze,a=Dn(t),i=Ln(a);{const K=a.t-Pe.t;Pe.t=a.t;const u=K>0&&K<1?1-Math.exp(-K/.35):1;for(let te=0;te<3;te++)Pe.col[te]+=(a.clearCol[te]-Pe.col[te])*u;Pe.at+=(a.hueAt-Pe.at)*u,a.clearCol=[Pe.col[0],Pe.col[1],Pe.col[2]],a.hueAt=Pe.at}const c=Math.max(64,Math.min(s,Math.round(e))),A=o.r.domElement.width,x=A>=c&&A<=Math.min(s,Math.max(c+64,c*1.18))?A:Math.max(64,Math.min(s,Math.ceil(c/32)*32)),g=Number.isFinite(t.screenPx)&&t.screenPx>0?x/t.screenPx:1;e=Number.isFinite(t.screenPx)&&t.screenPx>0?t.screenPx:e;const k=o.r.domElement;if(k.width!==x||k.height!==x){o.r.setSize(x,x,!1),o.comp.uniforms.uTexel.value.set(1/x,1/x);for(const K of o.sets)K.rt.setSize(x,x),K.down.forEach((u,te)=>u.setSize(Math.max(4,x>>te+1),Math.max(4,x>>te+1)))}const m=a.t,d=o.groups;o.root.position.set(0,i.root.y,0),o.root.rotation.set(0,i.root.yaw,i.root.roll),o.root.scale.set(i.root.sx,i.root.sy,i.root.sz),d[S.HEAD].rotation.set(i.head.x,i.head.y,i.head.z),d[S.EAR_L].rotation.set(i.earL.x,i.earL.y,i.earL.z),d[S.EAR_R].rotation.set(i.earR.x,i.earR.y,i.earR.z),d[S.PEARL].position.set(0,i.pearlY,i.pearlZ),d[S.PAW_L].rotation.set(i.pawRot,0,0),d[S.PAW_R].rotation.set(i.pawRot,0,0);const T=a.eyeOpen*(1-a.happyEyes),z=1-U(110,210,e*be.creatureHeight/be.span),F=1+.3*z;for(const K of o.eyes)K.scale.set(F,F*Math.max(.08,T),F);d[S.PEARL].scale.setScalar((1+.2*z)*i.pearlScale),o.scene.updateMatrixWorld(!0);for(let K=0;K<Ft;K++)o.partM[K].copy(d[K].matrixWorld);const I=new Oe(i.tail.curl,0,0,i.tail.lift),v=1-(a.rm?.14*(1-a.glowBreath):0),w=x/(2*Math.tan(To.degToRad(o.cam.fov/2))),b=e<560?1.4:e<800?1.2:1,q=Math.max(0,Math.min(1,Number.isFinite(t.thumb)?t.thumb:0)),y=o.speck.uniforms;y.uTime.value=m,y.uPx.value=w,y.uPulse.value=a.music,y.uLive.value=a.rm?0:1,y.uPeel.value=a.peel,y.uPeelFrac.value=.08+.08*a.energy+.06*a.combo,y.uEyeOpen.value=T>.3?1:0,y.uHappyEyes.value=a.happyEyes,y.uGlow.value=a.glow,y.uBright.value=v*(.9+a.glow*.25),y.uHue.value=a.hue,y.uDust.value=a.dust,y.uRimGain.value=b*(1+.4*q)*(1+.2*a.combo),y.uThin.value=q,y.uBeat.value=a.beat*(.6+.6*a.phrase),y.uWave.value=a.wave,y.uWaveTint.value=a.waveTint,y.uClearCol.value.set(...a.clearCol),y.uSmall.value=1-U(110,210,e*be.creatureHeight/be.span),y.uLoose.value=a.loose,y.uTwinkle.value=a.twinkle;const O=Math.max(.12,Math.min(1,Number.isFinite(t.lod)?t.lod:e<440?.24+.08*U(220,440,e):.32+.68*U(440,900,e)));o.speckGeo.setDrawRange(0,Math.round(o.bodySpecks*O)),o.shadowGeo.setDrawRange(0,Math.round(o.shadowCount*O)),o.shadowPts.visible=t.silhouette===!0;const j=1/Math.sqrt(O);y.uMinPx.value=Math.max(1.25*g,1.5*Math.min(1,x/Math.max(1,e))),y.uTail.value.copy(I),y.uBones.value=i.tail.bones,y.uBonesV.value=i.tail.bonesV,y.uBreathK.value=a.rm?0:a.breath,y.uUnwind.value=a.unwind,y.uUnwindP.value=a.unwindP;const p=o.fx.uniforms;p.uTime.value=m,p.uPx.value=w,p.uPulse.value=a.music,p.uLive.value=a.rm?0:1,p.uBreath.value=a.breath,p.uRibbon.value=q>0||a.rm?0:a.ribbon,p.uArcAge.value=a.arcAge,p.uArcSide.value=a.arcSide,p.uArcPow.value=.6+.5*a.energy,p.uSpill.value=a.spill,p.uLandAge.value=a.landAge,p.uEnergy.value=a.energy,p.uBright.value=v,p.uExhaleAge.value=a.exhaleAge,p.uExhaleSeed.value=a.exhaleSeed,p.uStream.value=a.stream,p.uHue.value=a.hue,p.uOrbit.value=a.orbit;const L=Math.max(.45,Math.min(1,e<300?.5:e<480?.5+.2*U(300,480,e):.7+.3*U(480,820,e))),R=a.arcAge>=0&&a.arcAge<2.2;o.fxIdlePts.geometry.setDrawRange(0,Math.round(o.fxIdle*L)),o.fxReactPts.visible=R,o.fxReactPts.geometry.setDrawRange(0,Math.round(o.fxReact*L)),p.uLodK.value=1/Math.sqrt(L),p.uMinFx.value=Math.max(1,1.25*g),p.uTarget.value.set(a.lookX*1.25+a.arcSide*.25,-.35,1.2),p.uPearl.value.setFromMatrixPosition(d[S.PEARL].matrixWorld),p.uMuzzle.value.setFromMatrixPosition(o.muzzle.matrixWorld),p.uFace.value.set(0,.13,.3).applyMatrix4(d[S.HEAD].matrixWorld),o.aura.uniforms.uI.value=Math.min(.12,.03+a.beat*.04+a.combo*.05)*v,o.pearl.uniforms.uTime.value=m,o.pearl.uniforms.uGlow.value=Math.min(1,a.glow+a.beat*.15),o.pearl.uniforms.uCap.value=q>0?.62:.85,o.pearl.uniforms.uSpec.value=(q>0?2.2:3.6)*(1+.3*a.beat),o.pearl.uniforms.uTintC.value.set(...a.clearCol),o.pearl.uniforms.uTintK.value=a.waveTint,y.uPearlP.value.setFromMatrixPosition(d[S.PEARL].matrixWorld),o.fx.uniforms.uClearCol.value.set(...a.clearCol);const B=U(.35,.6,Number.isFinite(t.backdrop)?t.backdrop:0);for(const K of o.depthMeshes)K.visible=a.dust<.3;for(const K of o.shells)K.uniforms.uMask.value=.15*B,K.uniforms.uGlow.value=a.glow,K.uniforms.uBright.value=v*(1-a.dust*.7),K.uniforms.uTail.value.copy(I),K.uniforms.uBones.value=i.tail.bones,K.uniforms.uBonesV.value=i.tail.bonesV,K.uniforms.uTime.value=m,K.uniforms.uNacre.value=a.waveTint*.1,K.uniforms.uClearCol.value.set(...a.clearCol),K.uniforms.uPearlW.value.setFromMatrixPosition(d[S.PEARL].matrixWorld),K.uniforms.uPearlI.value=(.42+.3*a.glow+.25*a.beat)*(1-a.dust*.6),K.uniforms.uRim.value=(K===o.tailShell?.85:K===o.shells[1]?.9:.8)*b;const C=We(Math.max(a.energy,a.clear*.8,a.combo));o.comp.uniforms.uBloom.value=Math.min(1.25,(.95+.25*C)*(1+a.wide*.15+a.beat*.06))*(o.hdr?1:.8)*(1-.22*a.hue),o.comp.uniforms.uWide.value=a.wide,o.comp.uniforms.uSat.value=Math.max(.35,a.hue),y.uHueAt.value=a.hueAt,p.uHueAt.value=a.hueAt;for(const K of o.shells)K.uniforms.uHueAt.value=a.hueAt;const W=Math.max(1,Math.min(2.4,Number.isFinite(t.speckBoost)?t.speckBoost:1)),Y=e*be.creatureHeight/be.span,$=1-U(90,170,Y);y.uBoost.value=W*Math.pow(j,.25)*(1+.4*$),p.uBoost.value=W,o.comp.uniforms.uHalo.value=q>0?0:(.22+.4*$)*(1-U(380,560,Y))*(a.rm?.8:1),y.uBright.value*=Math.pow(j,.85),o.comp.uniforms.uExpo.value=1.35*Math.sqrt(Math.min(2,W))*(b>1?1.1:1)/(1+.35*C)*Math.max(.5,Math.min(2,Number.isFinite(t.exposure)?t.exposure:1)),o.comp.uniforms.uBack.value=Number.isFinite(t.backdrop)?We(t.backdrop):0;const G=t.window??[-1,-1,2,2],J=t.feather??[.01,.01,.01,.01];o.comp.uniforms.uWin.value.set(G[0],G[1],G[2],G[3]),o.comp.uniforms.uRound.value=Math.min(1,a.dust*4),o.comp.uniforms.uFea.value.set(Math.max(.001,J[0]),Math.max(.001,J[1]),Math.max(.001,J[2]),Math.max(.001,J[3]));const ee=be.span/2-be.feetFromBottom;o.cam.position.set(a.rm?0:Math.sin(m*.13)*.12,ee+(a.rm?0:Math.sin(m*.09+1)*.05),8),o.cam.lookAt(0,ee,0),p.uBokeh.value=Math.max(0,Math.min(1.5,Number.isFinite(t.bokeh)?t.bokeh:q>0?1:.3))*v;const le=globalThis.__dubaiPerfIn,de=le?performance.now():0,ne=o.sets[o.frame++&1],re=o.comp.uniforms;re.tSrc.value=ne.rt.texture,re.tB1.value=ne.down[0].texture,re.tB2.value=ne.down[1].texture,re.tB3.value=ne.down[2].texture,re.tB4.value=ne.down[3].texture,o.r.setRenderTarget(ne.rt),o.r.clear(),o.r.render(o.scene,o.cam);const pe=le?performance.now():0;o.quad.material=o.downMat;let ce=ne.rt;for(const K of ne.down)o.downMat.uniforms.tIn.value=ce.texture,o.downMat.uniforms.uHalf.value.set(.5/ce.width,.5/ce.height),o.r.setRenderTarget(K),o.r.render(o.compScene,o.compCam),ce=K;return o.quad.material=o.comp,o.r.setRenderTarget(null),o.r.render(o.compScene,o.compCam),o.r.autoClear=!1,o.r.render(o.overlay,o.cam),o.r.autoClear=!0,le&&le.push([pe-de,performance.now()-pe]),k}function In(){if(!ze)return null;const e=ze.r.domElement.width,t=new Q;let s=1e9,o=-1e9,a=1e9,i=-1e9;for(const A of ze.eyeWorld){t.setFromMatrixPosition(A.matrixWorld).project(ze.cam);const x=(t.x*.5+.5)*e,g=(.5-t.y*.5)*e;s=Math.min(s,x),o=Math.max(o,x),a=Math.min(a,g),i=Math.max(i,g)}const c=(o-s)*.45;return{x:s-c,y:a-c*.8,w:o-s+c*2,h:i-a+c*2.2}}function Kn(){return ze&&!Aa?ze.r.domElement:null}function qn(){if(!ze)return null;const e=ze,t=e.speckGeo.drawRange.count,s=e.fxIdlePts.geometry.drawRange.count+(e.fxReactPts.visible?e.fxReactPts.geometry.drawRange.count:0),o=e.specks-e.bodySpecks+e.overlayCount+e.pupilCount;return{specks:e.specks,hdr:e.hdr,drawn:t+o+s+(e.shadowPts.visible?e.shadowGeo.drawRange.count:0),body:t,face:o,fx:s}}const be={span:3.8,feetFromBottom:.5,creatureHeight:2.3};export{ln as DUBAI_CLEAR_HUES,be as DUBAI_LIGHT_FRAME,hn as DUBAI_PHRASE_CUES,Se as TAIL_BONES,In as dubaiFaceProbe,Kn as dubaiLightCanvas,Dn as dubaiLightMotion,qn as dubaiLightStats,un as dubaiNacre,cn as dubaiOrbitClock,dn as dubaiPhraseDust,co as dubaiPhraseLevel,Ln as dubaiRigPose,Fn as renderDubaiLight};
