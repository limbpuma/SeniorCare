import"https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js";import"./ViewTransitions.astro_astro_type_script_index_0_lang.BB6uRyKX.js";const o=document.getElementById("contact-form"),s=document.getElementById("message-modal"),i=document.getElementById("modal-title"),c=document.getElementById("modal-message"),l=document.getElementById("close-modal"),m=document.getElementById("consent");function u(e){return/^(\+49|0)[1-9]\d{1,14}$/.test(e.replace(/\s/g,""))}o.addEventListener("submit",async e=>{if(e.preventDefault(),!m.checked){n("Fehler","Bitte bestätigen Sie die Datenschutzerklärung, um fortzufahren.");return}const t=new FormData(o),a=t.get("phone");if(!u(a)){n("Ungültige Telefonnummer","Bitte geben Sie eine gültige deutsche Telefonnummer ein.");return}try{const r=await(await fetch("/api/send-email",{method:"POST",body:t})).json();r.success?(n("Nachricht gesendet!","Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns bald bei Ihnen melden."),o.reset()):n("Fehler","Beim Senden der Nachricht ist ein Fehler aufgetreten: "+r.error)}catch{n("Fehler","Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.")}});function n(e,t){i.textContent=e,c.textContent=t,s.classList.remove("hidden")}l.addEventListener("click",()=>{s.classList.add("hidden")});s.addEventListener("click",e=>{e.target===s&&s.classList.add("hidden")});
