---
layout: default
title: About
permalink: /about/
---
{% assign about_image = site.data.signature_images['utah'] %}
<section class="wg-story-hero" {% if about_image %}style="background-image:linear-gradient(180deg,rgba(13,25,32,.18),rgba(13,25,32,.66)),url('{{ about_image.image_url }}')"{% endif %}>
  <div class="page-shell"><p class="wg-kicker">About WanderGuy</p><h1>Real places. Bigger stories.</h1></div>
</section>
<section class="page-shell wg-story-page">
  <article class="wg-story-row"><span class="wg-reason-icon signature">★</span><div><h2>Start with somewhere worth seeing.</h2><p>WanderGuy is built around a simple belief: every part of the United States has places capable of changing how you see that area. The guide begins with a defining place, then keeps going wherever the travel value is real.</p></div></article>
  <article class="wg-story-row"><span class="wg-reason-icon travel">◆</span><div><h2>More than the obvious landmarks.</h2><p>National parks matter, but the story is bigger than parks. State lands, islands, historic districts, architecture, wildlife refuges, scenic roads, cultural landscapes, coastlines, and lesser-known places all belong when they give someone a genuine reason to go.</p></div></article>
  <article class="wg-story-row"><span class="wg-reason-icon detour">○</span><div><h2>Useful enough to travel with.</h2><p>The goal is not to collect names. It is to help people understand why a place matters and what they should know before going, including planning sources, access, pets, RV considerations, photography, wildlife, and changing conditions where they matter.</p></div></article>
  <div class="wg-story-quote"><p>A more meaningful way</p><strong>to explore America.</strong></div>
</section>
