const search = document.querySelector('#search');
const stateFilter = document.querySelector('#stateFilter');
const tierFilter = document.querySelector('#tierFilter');
const experienceFilter = document.querySelector('#experienceFilter');
const clearFilters = document.querySelector('#clearFilters');
const cards = [...document.querySelectorAll('#wonderGrid .wonder-card')];
const empty = document.querySelector('#emptyState');
const resultCount = document.querySelector('#resultCount');

function filterCards(){
  if(!cards.length) return;
  const q=(search?.value||'').trim().toLowerCase();
  const s=stateFilter?.value||'';
  const t=tierFilter?.value||'';
  const e=(experienceFilter?.value||'').toLowerCase();
  let shown=0;
  cards.forEach(card=>{
    const searchText=card.dataset.search||'';
    const experiences=(card.dataset.experiences||'').split('|');
    const ok=(!q||searchText.includes(q))&&(!s||card.dataset.state===s)&&(!t||card.dataset.tier===t)&&(!e||experiences.includes(e));
    card.hidden=!ok;
    if(ok) shown++;
  });
  if(empty) empty.hidden=shown!==0;
  if(resultCount) resultCount.textContent=shown;
}

[search,stateFilter,tierFilter,experienceFilter].forEach(el=>{
  el?.addEventListener(el.tagName==='INPUT'?'input':'change',filterCards);
});

clearFilters?.addEventListener('click',()=>{
  if(search) search.value='';
  if(stateFilter) stateFilter.value='';
  if(tierFilter) tierFilter.value='';
  if(experienceFilter) experienceFilter.value='';
  filterCards();
  search?.focus();
});

const featuredItems=[...document.querySelectorAll('.featured-item')];
if(featuredItems.length){
  for(let i=featuredItems.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [featuredItems[i],featuredItems[j]]=[featuredItems[j],featuredItems[i]];
  }
  featuredItems.forEach((item,index)=>{ item.hidden=index>=6; });
}

const expandStates=document.querySelector('#expandStates');
const extraStates=[...document.querySelectorAll('.state-card-extra')];
expandStates?.addEventListener('click',()=>{
  const expanding=expandStates.getAttribute('aria-expanded')!=='true';
  extraStates.forEach(card=>card.hidden=!expanding);
  expandStates.setAttribute('aria-expanded',String(expanding));
  expandStates.textContent=expanding?'Show fewer states':'Explore all 50 states';
});

const sheet=document.querySelector('#navSheet');
function closeSheet(){ if(sheet){sheet.hidden=true; document.body.classList.remove('sheet-open');}}
function openSheet(query){
  if(!sheet) return;
  const enc=encodeURIComponent(query);
  document.querySelector('#navDestination').textContent=query;
  document.querySelector('#navGoogle').href=`https://www.google.com/maps/search/?api=1&query=${enc}`;
  document.querySelector('#navApple').href=`https://maps.apple.com/?q=${enc}`;
  document.querySelector('#navWaze').href=`https://www.waze.com/ul?q=${enc}&navigate=yes`;
  sheet.hidden=false;
  document.body.classList.add('sheet-open');
}
document.addEventListener('click',event=>{
  const button=event.target.closest('.nav-open');
  if(button) openSheet(button.dataset.query||'');
});
document.querySelector('.nav-close')?.addEventListener('click',closeSheet);
document.querySelector('.nav-backdrop')?.addEventListener('click',closeSheet);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet();});
