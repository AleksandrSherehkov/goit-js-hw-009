var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const l=document.querySelector(".form"),r=(e,t)=>new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}));const s=({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)},a=({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)},d=()=>{l.reset()};l.addEventListener("submit",(function(e){e.preventDefault(),(({delay:e,step:t,amount:n})=>{for(let o=1;o<=n;o+=1)r(o,e).then(s).catch(a).finally(d),e+=t})({delay:l.elements.delay.valueAsNumber,step:l.elements.step.valueAsNumber,amount:l.elements.amount.valueAsNumber})}));
//# sourceMappingURL=03-promises.4eb54a31.js.map
