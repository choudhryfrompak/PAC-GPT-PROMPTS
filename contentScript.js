(()=>{"use strict";document.onreadystatechange=()=>{"complete"===document.readyState&&setTimeout(n,1e3)};let e=document.title;const t=new MutationObserver((t=>{document.title!==e&&(e=document.title,"/chat"==document.location.pathname&&setTimeout(n,500))}));t.observe(document,{subtree:!0,childList:!0}),window.addEventListener("beforeunload",(function(e){t.disconnect()}));const n=()=>{var e=document.createElement("div");e.setAttribute("class","flex flex-1 flex-grow-0 ml-auto mr-auto flex-col pt-5 md:max-w-2xl lg:max-w-3xl");const t=document.createElement("h2");

t.setAttribute("class","mb-3"),


t.innerHTML=" ZubairGPT Prompts - Comprehensive use of ChatGPT",

e.appendChild(t);

const n=document.createElement("ul");n.setAttribute("class","flex gap-3.5 overflow-y-auto"),n.setAttribute("style","flex-wrap: wrap;flex: 1 0 auto; height: 500px; align-items: flex-start;");const o=document.createElement("input");o.setAttribute("class","dark:bg-gray-700 dark:text-white mb-6 md:pl-4 md:py-3 relative resize-none rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] w-full"),o.setAttribute("placeholder","Search prompts.."),o.onkeyup=e=>{const t=e.target.value;n.childNodes.forEach((function(e){e.innerText.search(new RegExp(t,"i"))<0?(e.style.visibility="hidden",e.style.display="none"):(e.style.visibility="",e.style.display="")}))},e.appendChild(o);const s=l(`https://raw.githubusercontent.com/zubairjammu/ZubairGPT/main/prompts.csv?v=${Date.now()}`),a=r(s,'","');

if(null!=a&&null!=a&&a.length>0){const t=document.querySelector('textarea[data-id="root"]');for(let e=0;e<a.length;e++){const r=a[e];if(null==r.prompt||null==r.prompt||""===r.prompt)continue;const l=document.createElement("li");

l.setAttribute("class","flex-1 bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900 flex items-center justify-center text-center cursor-pointer"),l.setAttribute("style","min-width: 30%;"),




l.innerHTML=r.act,l.onclick=()=>{t.value=r.prompt,t.dispatchEvent(new Event("input",{bubbles:!0}))},n.appendChild(l)}e.appendChild(n)}var i=document.querySelector("h1");i.classList.add("mt-6"),i.classList.remove("flex-grow");var c=i.parentNode;"H1"!=c.lastChild.nodeName&&c.lastChild.remove(),c.appendChild(e)},r=(e,t=",")=>{const n=e.slice(0,e.indexOf("\n")).split(t).map((e=>e.replace(/(^"|"$)/g,"")));return e.slice(e.indexOf("\n")+1).split("\n").map((function(e){const r=e.replace(/(^"|"$)/g,"").split(t);return n.reduce((function(e,t,n){return e[t]=r[n],e}),{})}))},l=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText}})();
