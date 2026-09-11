const search = document.querySelector('#search');
const stateFilter = document.querySelector('#stateFilter');
const cards = [...document.querySelectorAll('.wonder-card')];
const empty = document.querySelector('#emptyState');
function filterCards(){
  if(!cards.length) return;
  const q=(search?.value||'').trim().toLowerCase();
  const s=stateFilter?.value||'';
  let shown=0;
  cards.forEach(card=>{
    const ok=(!q||card.dataset.search.includes(q))&&(!s||card.dataset.state===s);
    card.hidden=!ok; if(ok) shown++;
  });
  if(empty) empty.hidden=shown!==0;
}
search?.addEventListener('input',filterCards); stateFilter?.addEventListener('change',filterCards);

const sheet=document.querySelector('#navSheet');
function closeSheet(){ if(sheet){sheet.hidden=true; document.body.classList.remove('sheet-open');}}
function openSheet(query){
  if(!sheet) return;
  const enc=encodeURIComponent(query);
  document.querySelector('#navDestination').textContent=query;
  document.querySelector('#navGoogle').href=`https://www.google.com/maps/search/?api=1&query=${enc}`;
  document.querySelector('#navApple').href=`https://maps.apple.com/?q=${enc}`;
  document.querySelector('#navWaze').href=`https://www.waze.com/ul?q=${enc}&navigate=yes`;
  sheet.hidden=false; document.body.classList.add('sheet-open');
}
document.querySelectorAll('.nav-open').forEach(btn=>btn.addEventListener('click',()=>openSheet(btn.dataset.query)));
document.querySelector('.nav-close')?.addEventListener('click',closeSheet);
document.querySelector('.nav-backdrop')?.addEventListener('click',closeSheet);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet();});
