---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
<div class="publications">
  <p class="publications__note">Earlier publications appear under the name Chisom Ezekannagha.</p>
  {% if site.author.googlescholar %}
    <p class="publications__note"><a href="{{ site.author.googlescholar }}">Google Scholar profile</a></p>
  {% endif %}

  {% assign publication_years = site.publications | sort: "publication_order" | group_by: "publication_year" | sort: "name" | reverse %}
  {% for year in publication_years %}
    <section class="publications__year" aria-labelledby="publications-{{ year.name }}">
      <h2 id="publications-{{ year.name }}">{{ year.name }}</h2>
      {% for publication in year.items %}
        {% include publication-entry.html publication=publication %}
      {% endfor %}
    </section>
  {% endfor %}
</div>
