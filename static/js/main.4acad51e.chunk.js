(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{245:function(e,t,a){e.exports=a(470)},254:function(e,t,a){},470:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(230),s=a.n(r),i=(a(254),a(472)),c=a(474),m=a(473),o=a(242),d=a(243),u=a(42),h=a(58),g=a(241);var p=()=>{const e=[1,12,10,8,6,1],[t,a]=Object(n.useState)([]),[r,s]=Object(n.useState)([]),[p,x]=Object(n.useState)(.05),[E,f]=Object(n.useState)(0),[b,N]=Object(n.useState)(!1),[w,y]=Object(n.useState)([]),[v,M]=Object(n.useState)([]),[k,S]=Object(n.useState)(1),A=Object(n.useRef)(null),F=Object(n.useRef)(null),C=Object(n.useRef)({weights:[],biases:[]});Object(n.useEffect)(()=>{j()},[]);const j=()=>{const t=[],n=[];for(let a=0;a<e.length-1;a++){const l=[],r=[];for(let t=0;t<e[a+1];t++){const t=[];for(let n=0;n<e[a];n++){const n=Math.sqrt(1/(e[a]+e[a+1]));t.push((2*Math.random()-1)*n)}l.push(t),r.push(.05*(2*Math.random()-1))}t.push(l),n.push(r)}a(t),s(n),f(0),S(1),C.current={weights:t,biases:n},B(t,n)},B=(e,t)=>{const a=.1*Math.PI,n=[];for(let l=0;l<40;l++){const e=-Math.PI-a+(2*Math.PI+2*a)*l/39,t=Math.sin(e)+.5*Math.sin(3*e)*(e*e/5);n.push({x:e,y:t,yApprox:0})}for(let l=0;l<10;l++){const e=l/10,t=-Math.PI-a+e*Math.PI*.4,r=Math.sin(t)+.5*Math.sin(3*t)*(t*t/5);n.push({x:t,y:r,yApprox:0})}for(let l=0;l<10;l++){const e=l/10,t=.6*Math.PI+e*(.4*Math.PI+a),r=Math.sin(t)+.5*Math.sin(3*t)*(t*t/5);n.push({x:t,y:r,yApprox:0})}if(M(n),e&&e.length>0){const a=n.map(a=>{const n=T([a.x],e,t)[0];return{x:a.x,y:a.y,yApprox:n}});y(a)}},T=(e,t,a)=>{let n=[...e];const l=t||C.current.weights,r=a||C.current.biases;for(let s=0;s<l.length;s++){const e=l[s],t=r[s],a=[];for(let r=0;r<e.length;r++){const i=e[r];let c=t[r];for(let e=0;e<i.length;e++)c+=i[e]*n[e];if(s<l.length-1){const e=1/(1+Math.exp(-c));a.push(c*e)}else a.push(c)}n=[...a]}return n},O=(t,n)=>{const l=C.current.weights,r=C.current.biases,i=[t],c=[];let m=[...t];for(let e=0;e<l.length;e++){const t=l[e],a=r[e],n=[],s=[];for(let r=0;r<t.length;r++){const i=t[r];let c=a[r];for(let e=0;e<i.length;e++)c+=i[e]*m[e];if(s.push(c),e<l.length-1){const e=1/(1+Math.exp(-c));n.push(c*e)}else n.push(c)}c.push(s),m=[...n],i.push(n)}const o=i[i.length-1].map((e,t)=>e-n[t]),d=[o];for(let a=l.length-1;a>0;a--){const t=d[0],n=[];for(let r=0;r<e[a];r++){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*l[a][n][r];const s=c[a-1][r],i=1/(1+Math.exp(-s)),m=i+s*i*(1-i);n.push(e*m)}d.unshift(n)}const u=JSON.parse(JSON.stringify(l)),h=JSON.parse(JSON.stringify(r));for(let e=0;e<l.length;e++)for(let t=0;t<l[e].length;t++){for(let a=0;a<l[e][t].length;a++){const n=p*d[e][t]*i[e][a];u[e][t][a]-=n}h[e][t]-=p*d[e][t]}return C.current={weights:u,biases:h},a([...u]),s([...h]),o.reduce((e,t)=>e+t*t,0)/o.length},P=()=>{F.current&&cancelAnimationFrame(F.current),N(!1)};return Object(n.useEffect)(()=>{var t;if(!A.current)return;const a=A.current,n=a.getContext("2d");n.clearRect(0,0,a.width,a.height),a.width=700,a.height=500;const l=a.width-140,r=a.height-140,s=l/(e.length-1),i=e.map(e=>60),c=e.map((e,t)=>{const a=r/e;return Math.max(i[t],a)}),m=e.map((e,t)=>(e-1)*c[t]),o=E%v.length,d=v[o]||{x:0,y:0},u=(null===(t=w[o])||void 0===t?void 0:t.yApprox)||0;for(let h=0;h<e.length;h++){const t=e[h],a=m[h],l=70+(r-a)/2;if(h>0){const a=e[h-1],i=m[h-1],o=70+(r-i)/2,d=c[h-1],u=c[h];for(let e=0;e<t;e++){const t=70+h*s,r=l+e*u;for(let l=0;l<a;l++){const a=70+(h-1)*s,i=o+l*d;if(C.current.weights.length>0&&h-1<C.current.weights.length){const s=C.current.weights[h-1][e]&&C.current.weights[h-1][e][l]||0,c=Math.abs(s);if(c>.05){const e=s>0?`rgba(0, 128, 0, ${Math.min(c,1)})`:`rgba(255, 0, 0, ${Math.min(c,1)})`,l=.5+2*Math.min(c,1);if(n.beginPath(),n.moveTo(a+12,i),n.lineTo(t-12,r),n.strokeStyle=e,n.lineWidth=l,n.stroke(),c>.3){const e=(a+12+t-12)/2,l=(i+r)/2;n.fillStyle="rgba(255, 255, 255, 0.7)";const c=n.measureText(s.toFixed(2)).width;n.fillRect(e-c/2-2,l-7,c+4,14),n.fillStyle="#000000",n.font="9px Arial",n.fillText(s.toFixed(2),e,l)}}}}}}for(let r=0;r<t;r++){const t=70+h*s,a=l+r*c[h];if(n.beginPath(),n.arc(t,a,12,0,2*Math.PI),n.fillStyle=0===h?"#88CCEE":h===e.length-1?"#DDCC77":"#44AA99",n.fill(),n.strokeStyle="#000000",n.lineWidth=1,n.stroke(),n.fillStyle="#000000",n.font="9px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(`${h+1}-${r+1}`,t,a),0===h){n.fillStyle="#000000",n.font="bold 10px Arial",n.textAlign="right";const e=`Input x: ${d.x.toFixed(2)}`,l=n.measureText(e).width;n.fillStyle="rgba(255, 255, 255, 0.8)",n.fillRect(t-12-8-l,a-7,l+4,14),n.fillStyle="#000000",n.fillText(e,t-12-8,a)}else if(h===e.length-1){const e=`Output: ${u.toFixed(2)}`,l=`Target: ${d.y.toFixed(2)}`,r=n.measureText(e).width,s=n.measureText(l).width,i=Math.max(r,s);n.fillStyle="rgba(255, 255, 255, 0.8)",n.fillRect(t+12+8,a-15,i+8,30),n.fillStyle="#0000AA",n.font="bold 10px Arial",n.textAlign="left",n.fillText(e,t+12+12,a-5),n.fillStyle="#AA0000",n.fillText(l,t+12+12,a+10)}}}},[t,E,v,w]),Object(n.useEffect)(()=>()=>{F.current&&cancelAnimationFrame(F.current)},[]),l.a.createElement("div",{className:"w-full p-4 bg-white"},l.a.createElement("h2",{className:"text-xl font-bold mb-4 text-center"},"Neural Network Learning Visualization (Complex Function)"),l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},l.a.createElement("div",{className:"bg-gray-50 p-4 rounded"},l.a.createElement("h3",{className:"text-lg font-semibold mb-2"},"Control Panel"),l.a.createElement("div",{className:"mb-4"},l.a.createElement("p",{className:"text-sm mb-2"},"Network Structure: 1-12-10-8-6-1 (fixed, pyramid architecture)"),l.a.createElement("label",{className:"block text-sm font-medium mb-1"},"Learning Rate: ",p.toFixed(3)),l.a.createElement("input",{type:"range",min:"0.001",max:"0.2",step:"0.001",value:p,onChange:e=>x(parseFloat(e.target.value)),className:"w-full",disabled:b})),l.a.createElement("div",{className:"flex space-x-2"},l.a.createElement("button",{onClick:b?P:()=>{if(b)return;N(!0);let e=0;const t=()=>{++e%3===0&&((()=>{let e=0;const t=[...v].sort(()=>Math.random()-.5);for(let n=0;n<t.length;n+=10)t.slice(n,Math.min(n+10,t.length)).forEach(t=>{const a=O([t.x],[t.y]);e+=a});e/=t.length;const a=v.map(e=>{const t=T([e.x],C.current.weights,C.current.biases)[0];return{x:e.x,y:e.y,yApprox:t}});return y([...a]),S(e),f(e=>e+1),e<1e-4&&E>=300||E>=2e3})()||E>=1e3)?N(!1):F.current=requestAnimationFrame(t)};F.current=requestAnimationFrame(t)},className:`px-4 py-2 rounded ${b?"bg-red-500 hover:bg-red-600":"bg-green-500 hover:bg-green-600"} text-white font-medium`},b?"Stop Training":"Start Training"),l.a.createElement("button",{onClick:()=>{P(),j()},className:"px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded",disabled:b},"Reset Network")),l.a.createElement("div",{className:"mt-4"},l.a.createElement("p",{className:"text-sm"},"Current Epoch: ",l.a.createElement("span",{className:"font-semibold"},E)),l.a.createElement("p",{className:"text-sm"},"Current Loss: ",l.a.createElement("span",{className:"font-semibold"},k.toFixed(6))))),l.a.createElement("div",{className:"bg-gray-50 p-4 rounded"},l.a.createElement("h3",{className:"text-lg font-semibold mb-2"},"Network Structure Visualization"),l.a.createElement("div",{className:"border rounded bg-white"},l.a.createElement("canvas",{ref:A,width:"500",height:"300",className:"w-full h-64"})),l.a.createElement("p",{className:"text-xs mt-1 text-gray-500"},"Colors represent weights: green for positive, red for negative. Line thickness indicates weight magnitude."))),l.a.createElement("div",{className:"bg-gray-50 p-4 rounded"},l.a.createElement("h3",{className:"text-lg font-semibold mb-2"},"Function Approximation"),l.a.createElement("div",{className:"border rounded bg-white"},l.a.createElement(i.a,{width:"100%",height:300},l.a.createElement(c.a,{margin:{top:20,right:30,left:20,bottom:20},data:w},l.a.createElement(m.a,{strokeDasharray:"3 3"}),l.a.createElement(o.a,{dataKey:"x",label:{value:"x",position:"bottom",offset:0},domain:[1.1*-Math.PI,1.1*Math.PI],tickFormatter:e=>e.toFixed(2)}),l.a.createElement(d.a,{label:{value:"y",angle:-90,position:"left",offset:-5},domain:[-2,2]}),l.a.createElement(u.a,{formatter:(e,t)=>[e.toFixed(4),t]}),l.a.createElement(h.a,null),l.a.createElement(g.a,{type:"monotone",dataKey:"y",name:"Target Function",stroke:"#8884d8",dot:!1,strokeWidth:2}),l.a.createElement(g.a,{type:"monotone",dataKey:"yApprox",name:"Approximation Function",stroke:"#82ca9d",dot:!1,strokeWidth:2,isAnimationActive:!1})))),l.a.createElement("div",{className:"mt-2 text-sm"},l.a.createElement("p",null,l.a.createElement("span",{className:"inline-block w-4 h-2 bg-purple-500 mr-1"})," Target Function: sin(x) + 0.5*sin(3x) * x\xb2/5"),l.a.createElement("p",null,l.a.createElement("span",{className:"inline-block w-4 h-2 bg-green-500 mr-1"})," Approximation Function: Current network output"))),l.a.createElement("div",{className:"mt-4 p-4 bg-gray-50 rounded"},l.a.createElement("h3",{className:"text-lg font-semibold mb-2"},"Training Data and Backpropagation"),l.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4"},l.a.createElement("div",null,l.a.createElement("h4",{className:"font-medium mb-1"},"Training Data Generation"),l.a.createElement("p",{className:"text-sm mb-1"},"How training data is created:"),l.a.createElement("ol",{className:"text-sm list-decimal list-inside space-y-1"},l.a.createElement("li",null,"Sample 50 x values uniformly in range [-\u03c0, \u03c0]"),l.a.createElement("li",null,"For each x, calculate y = sin(x) as the target"),l.a.createElement("li",null,"These (x, y) pairs form the training dataset"),l.a.createElement("li",null,"During training, samples are randomly selected"))),l.a.createElement("div",null,l.a.createElement("h4",{className:"font-medium mb-1"},"Backpropagation Process"),l.a.createElement("p",{className:"text-sm"},"Backpropagation is the core learning algorithm for neural networks:"),l.a.createElement("ul",{className:"text-sm list-disc list-inside space-y-1"},l.a.createElement("li",null,"Green/red connections show weight values and changes"),l.a.createElement("li",null,"Input node displays current sample's x value"),l.a.createElement("li",null,"Output node shows both network output and target value"),l.a.createElement("li",null,"As training progresses, the approximation function (green line) gets closer to the target function (purple line)"))))))};var x=()=>{const[e,t]=Object(n.useState)("exploration"),[a,r]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),[c,m]=Object(n.useState)(0),o=(e,t,a)=>{const n=`rgb(${Math.max(0,Math.min(255,255-Math.floor(127.5*(e+1))))}, 50, ${Math.max(0,Math.min(255,Math.floor(127.5*(e+1))))})`,r=Math.max(.1,.45*(t+1)+.1),s=a;return l.a.createElement("g",{transform:"translate(150, 150)"},l.a.createElement("rect",{x:-2,y:-5,width:4,height:80,fill:"#2E8B57"}),l.a.createElement("path",{d:"M -2,24 C -20,16 -30,32 -15,40",fill:"#3CB371",stroke:"#2E8B57",strokeWidth:"1"}),l.a.createElement("path",{d:"M 2,48 C 20,40 30,56 15,64",fill:"#3CB371",stroke:"#2E8B57",strokeWidth:"1"}),l.a.createElement("circle",{cx:"0",cy:"-8",r:10*r,fill:"#FFD700"}),[...Array(s<0?5:8)].map((e,t)=>{const a=2*t*Math.PI/(s<0?5:8),i=30*r,c=i*(s<0?.3:.8);return l.a.createElement("path",{key:t,d:`\n                M 0,-8\n                Q ${Math.cos(a)*c},${Math.sin(a)*c-8} \n                  ${Math.cos(a)*i},${Math.sin(a)*i-8}\n                Q ${Math.cos(a+.2)*c},${Math.sin(a+.2)*c-8}\n                  0,-8\n              `,fill:n,stroke:n,strokeWidth:"1",opacity:"0.9"})}))},d=(t,a,n)=>{const r=75+40*t,s=75+40*a,i=5+2*(n+1);return l.a.createElement("g",null,l.a.createElement("rect",{x:"25",y:"25",width:"100",height:"100",fill:"#f0f9ff",stroke:"#3498db",strokeWidth:"1"}),l.a.createElement("line",{x1:"25",y1:"75",x2:"125",y2:"75",stroke:"#3498db",strokeWidth:"0.5"}),l.a.createElement("line",{x1:"75",y1:"25",x2:"75",y2:"125",stroke:"#3498db",strokeWidth:"0.5"}),[{color:-.8,bloom:.7,shape:.2},{color:.8,bloom:.6,shape:.3},{color:-.7,bloom:-.8,shape:.1},{color:.7,bloom:-.5,shape:-.7}].map((e,t)=>l.a.createElement("circle",{key:t,cx:75+40*e.color,cy:75+40*e.bloom,r:5+2*(e.shape+1),fill:"#3498db",opacity:"0.6"})),l.a.createElement("circle",{cx:r,cy:s,r:i,fill:"#e74c3c"}),"diffusion"===e&&l.a.createElement(l.a.Fragment,null,[...Array(15)].map((e,t)=>{const a=r+20*(Math.random()-.5),n=s+20*(Math.random()-.5);return l.a.createElement("circle",{key:t,cx:a,cy:n,r:2,fill:"#e74c3c",opacity:.2+.2*Math.random()})})),l.a.createElement("text",{x:"125",y:"78",fontSize:"10",textAnchor:"start"},"Color"),l.a.createElement("text",{x:"75",y:"20",fontSize:"10",textAnchor:"middle"},"Bloom"),l.a.createElement("text",{x:"20",y:"20",fontSize:"10",textAnchor:"start"},"Shape (size)"))};return l.a.createElement("div",{className:"flex flex-col p-4 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md"},l.a.createElement("h2",{className:"text-2xl font-bold text-center mb-6"},"VAE Latent Space Exploration"),l.a.createElement("div",{className:"w-full mb-6 p-4 bg-white rounded-lg shadow"},l.a.createElement("h3",{className:"text-lg font-medium mb-3"},"How VAEs Represent Images"),l.a.createElement("div",{className:"flex items-center"},l.a.createElement("div",{className:"w-1/3 p-2"},l.a.createElement("div",{className:"bg-blue-50 p-3 rounded"},l.a.createElement("h4",{className:"text-sm font-medium mb-2 text-center"},"Training Data"),l.a.createElement("div",{className:"grid grid-cols-2 gap-2"},l.a.createElement("div",{className:"p-1 bg-white rounded"},l.a.createElement("svg",{width:"70",height:"70",viewBox:"0 0 300 300"},o(-.8,.7,.2))),l.a.createElement("div",{className:"p-1 bg-white rounded"},l.a.createElement("svg",{width:"70",height:"70",viewBox:"0 0 300 300"},o(.8,.6,.3))),l.a.createElement("div",{className:"p-1 bg-white rounded"},l.a.createElement("svg",{width:"70",height:"70",viewBox:"0 0 300 300"},o(-.7,-.8,.1))),l.a.createElement("div",{className:"p-1 bg-white rounded"},l.a.createElement("svg",{width:"70",height:"70",viewBox:"0 0 300 300"},o(.7,-.5,-.7)))))),l.a.createElement("div",{className:"w-1/3 p-2 flex flex-col items-center"},l.a.createElement("div",{className:"relative w-full"},l.a.createElement("div",{className:"absolute inset-0 flex items-center justify-center"},l.a.createElement("svg",{width:"50",height:"20",viewBox:"0 0 50 20"},l.a.createElement("defs",null,l.a.createElement("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto"},l.a.createElement("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#333"}))),l.a.createElement("line",{x1:"0",y1:"10",x2:"40",y2:"10",stroke:"#333",strokeWidth:"2",markerEnd:"url(#arrowhead)"}))),l.a.createElement("div",{className:"bg-purple-50 p-3 rounded text-center"},l.a.createElement("h4",{className:"text-sm font-medium mb-2"},"Learned Dimensions"),l.a.createElement("div",{className:"mb-2"},l.a.createElement("span",{className:"inline-block w-4 h-4 mr-1 bg-gradient-to-r from-red-500 to-blue-500 rounded"}),l.a.createElement("span",{className:"text-xs"},"Dimension 1: Color")),l.a.createElement("div",{className:"mb-2"},l.a.createElement("span",{className:"inline-block w-4 h-4 mr-1 bg-gradient-to-r from-green-100 to-green-500 rounded"}),l.a.createElement("span",{className:"text-xs"},"Dimension 2: Bloom")),l.a.createElement("div",null,l.a.createElement("span",{className:"inline-block w-4 h-4 mr-1 bg-gradient-to-r from-purple-100 to-purple-500 rounded"}),l.a.createElement("span",{className:"text-xs"},"Dimension 3: Shape"))))),l.a.createElement("div",{className:"w-1/3 p-2"},l.a.createElement("div",{className:"bg-green-50 p-3 rounded"},l.a.createElement("h4",{className:"text-sm font-medium mb-2 text-center"},"Continuous Latent Space"),l.a.createElement("div",{className:"h-32 relative bg-white rounded p-2"},l.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 150 150"},d(0,0,0)),l.a.createElement("div",{className:"absolute bottom-2 right-2 text-xs bg-white bg-opacity-75 p-1 rounded"},l.a.createElement("span",null,"Any point = a flower"))))))),l.a.createElement("div",{className:"w-full p-6 bg-white rounded-lg shadow"},l.a.createElement("div",{className:"flex justify-between items-center mb-4"},l.a.createElement("h3",{className:"text-lg font-semibold"},"Explore Latent Space"),l.a.createElement("div",null,l.a.createElement("button",{onClick:()=>t("diffusion"),className:`px-4 py-2 rounded transition-colors mr-2 ${"exploration"===e?"bg-purple-600 text-white hover:bg-purple-700":"bg-gray-200 text-gray-800 hover:bg-gray-300"}`},"Try Latent Diffusion"),l.a.createElement("button",{onClick:()=>t("exploration"),className:`px-4 py-2 rounded transition-colors ${"diffusion"===e?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-200 text-gray-800 hover:bg-gray-300"}`},"Basic Generation"))),l.a.createElement("div",{className:"flex items-start"},l.a.createElement("div",{className:"w-1/3 pr-4"},l.a.createElement("h4",{className:"text-md font-medium mb-3"},"Adjust Latent Vector"),l.a.createElement("div",{className:"mb-6"},l.a.createElement("label",{className:"flex items-center justify-between mb-2"},l.a.createElement("span",{className:"font-medium"},"Flower Color:"),l.a.createElement("span",{className:"text-blue-600"},a.toFixed(2))),l.a.createElement("input",{type:"range",min:"-1.5",max:"1.5",step:"0.01",value:a,onChange:e=>r(parseFloat(e.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),l.a.createElement("div",{className:"flex justify-between text-xs text-gray-500 mt-1"},l.a.createElement("span",null,"Red"),l.a.createElement("span",null,"Purple"),l.a.createElement("span",null,"Blue"))),l.a.createElement("div",{className:"mb-6"},l.a.createElement("label",{className:"flex items-center justify-between mb-2"},l.a.createElement("span",{className:"font-medium"},"Bloom Stage:"),l.a.createElement("span",{className:"text-blue-600"},s.toFixed(2))),l.a.createElement("input",{type:"range",min:"-1.5",max:"1.5",step:"0.01",value:s,onChange:e=>i(parseFloat(e.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),l.a.createElement("div",{className:"flex justify-between text-xs text-gray-500 mt-1"},l.a.createElement("span",null,"Bud"),l.a.createElement("span",null,"Partial"),l.a.createElement("span",null,"Full Bloom"))),l.a.createElement("div",{className:"mb-2"},l.a.createElement("label",{className:"flex items-center justify-between mb-2"},l.a.createElement("span",{className:"font-medium"},"Flower Shape:"),l.a.createElement("span",{className:"text-blue-600"},c.toFixed(2))),l.a.createElement("input",{type:"range",min:"-1.5",max:"1.5",step:"0.01",value:c,onChange:e=>m(parseFloat(e.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),l.a.createElement("div",{className:"flex justify-between text-xs text-gray-500 mt-1"},l.a.createElement("span",null,"Tulip-like"),l.a.createElement("span",null,"Mixed"),l.a.createElement("span",null,"Rose-like")))),l.a.createElement("div",{className:"w-1/3 px-4"},l.a.createElement("h4",{className:"text-md font-medium mb-3 text-center"},"Latent Space"),l.a.createElement("div",{className:"bg-gray-100 p-2 rounded"},l.a.createElement("svg",{width:"200",height:"200",viewBox:"0 0 150 150",className:"mx-auto"},d(a,s,c)),Math.abs(a)>1||Math.abs(s)>1||Math.abs(c)>1?l.a.createElement("div",{className:"text-xs text-center mt-2 p-1 bg-yellow-100 rounded"},l.a.createElement("span",{className:"font-medium"},"Exploring beyond training data!")):null)),l.a.createElement("div",{className:"w-1/3 pl-4"},l.a.createElement("h4",{className:"text-md font-medium mb-3 text-center"},"Generated Flower"),l.a.createElement("div",{className:"bg-gray-100 p-2 rounded"},l.a.createElement("svg",{width:"200",height:"200",viewBox:"0 0 300 300",className:"mx-auto"},o(a,s,c))),"diffusion"===e&&l.a.createElement("div",{className:"mt-3 p-2 bg-white rounded shadow-md"},l.a.createElement("p",{className:"text-sm font-medium mb-1 text-center"},"Diffusion Process"),l.a.createElement("div",{className:"flex justify-center space-x-2"},[...Array(5)].map((e,t)=>{const n=.2+t/5*.8;return l.a.createElement("div",{key:t,className:"w-8 h-8 bg-gray-100 rounded overflow-hidden",style:{opacity:n}},l.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 300 300"},o(a+(.5-t/10)*(Math.random()-.5),s+(.5-t/10)*(Math.random()-.5),c+(.5-t/10)*(Math.random()-.5))))}))),(Math.abs(a)>1||Math.abs(s)>1||Math.abs(c)>1)&&l.a.createElement("div",{className:"mt-2 p-2 bg-yellow-50 rounded text-xs"},l.a.createElement("p",{className:"font-medium"},"Novel Generation"),l.a.createElement("p",null,"This flower combines features in ways not seen in training data!"))))),l.a.createElement("div",{className:"w-full mt-6 p-4 bg-white rounded-lg shadow text-gray-700"},l.a.createElement("h3",{className:"text-lg font-semibold mb-2"},"How VAEs & Latent Diffusion Work"),l.a.createElement("div",{className:"mb-4"},l.a.createElement("h4",{className:"font-medium"},"VAE Latent Space"),l.a.createElement("p",{className:"text-sm mb-2"},"Variational Autoencoders (VAEs) learn to compress images into a continuous latent space where:"),l.a.createElement("ul",{className:"list-disc pl-5 text-sm mb-2"},l.a.createElement("li",null,"Similar features are mapped to similar regions"),l.a.createElement("li",null,"Each dimension controls a specific visual attribute"),l.a.createElement("li",null,"The space is continuous, allowing smooth interpolation"),l.a.createElement("li",null,"Novel combinations beyond training data can be generated"))),l.a.createElement("div",null,l.a.createElement("h4",{className:"font-medium"},"Latent Diffusion"),l.a.createElement("p",{className:"text-sm mb-2"},"Diffusion models like Stable Diffusion extend this by:"),l.a.createElement("ol",{className:"list-decimal pl-5 text-sm"},l.a.createElement("li",null,"Adding noise to latent vectors to create variations"),l.a.createElement("li",null,"Learning to remove noise in a controlled way"),l.a.createElement("li",null,"Enabling text-guided latent space navigation"),l.a.createElement("li",null,"Allowing for creative generation beyond the training distribution")))))};var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(x,null))};var f=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,475)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:s}=t;a(e),n(e),l(e),r(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null))),f()}},[[245,1,2]]]);
//# sourceMappingURL=main.4acad51e.chunk.js.map