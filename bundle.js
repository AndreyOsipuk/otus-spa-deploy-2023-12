!function(){function e(e){const t=window.location.href;document.querySelector("#app").textContent=e?t.includes("#")?t.replace(/#.*/,e):t+e:window.location.href}document.querySelectorAll("a").forEach((e=>{e.href="otus-spa-deploy-2023-12"+e.pathname})),document.body.addEventListener("click",(t=>{if(t.target.matches("a")){t.preventDefault();const o=t.target.href;window.history.pushState({},"",o),e()}})),e()}();