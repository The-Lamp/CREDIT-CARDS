(()=>{class a{constructor(a){this.query=[],a&&this.parse(a)}parse(a){const b=("?"===a.charAt(0)?a.slice(1):a).split("&");b.forEach(a=>{const[b,c]=a.split("=");this.set(b,decodeURIComponent(c))})}get(a){const b=this.query.find(({key:b})=>b===a);return b?b.value:null}set(a,b){this.remove(a),this.query.push({key:a,value:b})}remove(a){this.query=this.query.filter(({key:b})=>b!==a)}}const b=document.querySelectorAll("[data-sysflow-query]");if(b.length){const c=new a(window.location.search);b.forEach(a=>{const b=a.dataset.sysflowQuery,d=c.get(b),e=a.dataset.sysflowQueryDefault;if(!d&&"0"===e)a.style.display="none";else{const b=a.querySelectorAll("[data-sysflow-query-text");b.length&&b.forEach(a=>{a.innerText=d&&"undefined"!=d?d:e})}})}})();