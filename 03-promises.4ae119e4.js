!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form"),a=function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))};var l=function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))},u=function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))},s=function(){r.reset()};r.addEventListener("submit",(function(e){e.preventDefault(),function(e){for(var n=e.delay,t=e.step,o=e.amount,i=1;i<=o;i+=1)a(i,n).then(l).catch(u).finally(s),n+=t}({delay:r.elements.delay.valueAsNumber,step:r.elements.step.valueAsNumber,amount:r.elements.amount.valueAsNumber})}))}();
//# sourceMappingURL=03-promises.4ae119e4.js.map
