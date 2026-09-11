const search = document.querySelector('#search');
const stateFilter = document.querySelector('#stateFilter');
const tierFilter = document.querySelector('#tierFilter');
const experienceFilter = document.querySelector('#experienceFilter');
const clearFilters = document.querySelector('#clearFilters');
const cards = [...document.querySelectorAll('#wonderGrid .wonder-card')];
const empty = document.querySelector('#emptyState');
const resultCount = document.querySelector('#resultCount');

function setVisible(el, visible){
  if(!el) return;
  el.hidden = !visible;
  el.style.display = visible ? '' : 'none';
}

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
    setVisible(card, ok);
    if(ok) shown++;
  });
  setVisible(empty, shown===0);
  if(resultCount) resultCount.textContent=shown;
}

if(search){
  const params=new URLSearchParams(location.search);
  const q=params.get('q');
  if(q) search.value=q;
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

const hero=document.querySelector('#homeHero');
const heroCredit=document.querySelector('#heroCredit');
const heroCandidates=[...document.querySelectorAll('.hero-candidate')].filter(item=>item.dataset.image);
if(hero && heroCandidates.length){
  const candidate=heroCandidates[Math.floor(Math.random()*heroCandidates.length)];
  hero.style.backgroundImage=`linear-gradient(90deg,rgba(13,25,32,.68),rgba(13,25,32,.3)),url('${candidate.dataset.image}')`;
  if(heroCredit){
    heroCredit.textContent=candidate.dataset.credit||'Image credit';
    if(candidate.dataset.source) heroCredit.href=candidate.dataset.source;
  }
}

const menuToggle=document.querySelector('#menuToggle');
const primaryNav=document.querySelector('#primaryNav');
function closeMenu(){
  if(!menuToggle||!primaryNav) return;
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.setAttribute('aria-label','Open menu');
  primaryNav.classList.remove('open');
  document.body.classList.remove('menu-open');
}
menuToggle?.addEventListener('click',()=>{
  const opening=menuToggle.getAttribute('aria-expanded')!=='true';
  menuToggle.setAttribute('aria-expanded',String(opening));
  menuToggle.setAttribute('aria-label',opening?'Close menu':'Open menu');
  primaryNav?.classList.toggle('open',opening);
  document.body.classList.toggle('menu-open',opening);
});
primaryNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));

const mobileFiltersToggle=document.querySelector('#mobileFiltersToggle');
const filters=document.querySelector('#filters');
function setMobileFilters(open){
  if(!mobileFiltersToggle||!filters) return;
  mobileFiltersToggle.setAttribute('aria-expanded',String(open));
  mobileFiltersToggle.textContent=open?'Fewer filters':'More filters';
  filters.classList.toggle('filters-open',open);
}
mobileFiltersToggle?.addEventListener('click',()=>setMobileFilters(mobileFiltersToggle.getAttribute('aria-expanded')!=='true'));
if(location.hash==='#filters') setMobileFilters(true);
if(location.hash==='#search') setTimeout(()=>search?.focus(),100);

const areaButtons=[...document.querySelectorAll('[data-area-filter]')];
const areaCards=[...document.querySelectorAll('[data-area-type]')];
areaButtons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.areaFilter;
  areaButtons.forEach(item=>item.classList.toggle('active',item===button));
  areaCards.forEach(card=>setVisible(card,filter==='all'||card.dataset.areaType===filter));
}));

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
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeSheet();
    closeMenu();
  }
});

filterCards();
