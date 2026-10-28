(function () {
  'use strict';
  const root = document.querySelector('[data-research-map]');
  if (!root) return;
  const topics = {
        assumptions:{number:'01 / EVIDENCE & ASSUMPTIONS',title:'Different accounts, different results?',question:'If the evidence supports more than one scientific account, which conclusions depend on the account used to train a model?',explain:'I compare alternative learning conditions and examine their effects on specific scientific quantities, including what is missed when full retraining is approximated.',example:'Controlled representation-learning experiments; AMR-genomics feasibility studies.'},
        evaluation:{number:'02 / EVALUATION & RELIABILITY',title:'Beyond a single performance score',question:'Does a computational result remain meaningful when methods, assumptions, or evaluation choices change?',explain:'I develop and examine comparative evaluations, controlled experiments, and benchmarks that expose method-dependent differences rather than reducing a system to one metric.',example:'UNACORM; model retraining and approximation comparisons.'},
        visual:{number:'03 / VISUAL ANALYTICS & OVERSIGHT',title:'Making the process inspectable',question:'How can a visualization show not only an output, but the trade-offs or uncertainty conditions behind it?',explain:'I design interactive ways to compare alternatives and make the link between uncertainty and appropriate human oversight visible.',example:'ActionCue; DNAsmart; phylogenetic visualization.'},
        biology:{number:'04 / COMPUTATIONAL BIOLOGY',title:'Grounding analysis in biological evidence',question:'What do genomic, transcriptomic, and surveillance data support, and where are the limits of interpretation?',explain:'I develop computational approaches to biological questions, from genome annotation and alternative splicing to examining how assumptions affect AMR-related interpretations.',example:'GeAnnotate; RNA-seq workflows; AMR research.'}
      };
  const buttons = Array.from(root.querySelectorAll('[data-theme]'));
  const canvas = root.querySelector('.research-map__canvas');
  const hub = root.querySelector('.research-map__hub');
  const lines = root.querySelector('.research-map__lines');
  const paths = Array.from(lines.querySelectorAll('[data-to]'));
  const fields = {};
  ['number', 'title', 'question', 'explain', 'example'].forEach(function (name) {
    fields[name] = root.querySelector('#detail-' + name);
  });
  function drawConnections() {
    const box = canvas.getBoundingClientRect();
    const middle = hub.getBoundingClientRect();
    if (!box.width || !box.height) return;
    lines.setAttribute('viewBox', '0 0 ' + box.width + ' ' + box.height);
    const compact = getComputedStyle(hub).position !== 'absolute';
    buttons.forEach(function (button, index) {
      const card = button.getBoundingClientRect();
      const left = compact ? index % 2 === 0 : card.left < middle.left;
      const x1 = (left ? middle.left : middle.right) - box.left;
      const y1 = middle.top + middle.height / 2 - box.top;
      const x2 = (left ? (compact ? card.left : card.right) : (compact ? card.right : card.left)) - box.left;
      const y2 = card.top + card.height / 2 - box.top;
      let d;
      if (compact) {
        const lane = left ? 9 : box.width - 9;
        d = 'M ' + x1 + ' ' + y1 + ' H ' + lane + ' V ' + y2 + ' H ' + x2;
      } else {
        d = 'M ' + x1 + ' ' + y1 + ' Q ' + ((x1 + x2) / 2) + ' ' + y2 + ' ' + x2 + ' ' + y2;
      }
      paths.find(function (path) { return path.dataset.to === button.dataset.theme; }).setAttribute('d', d);
    });
    root.dataset.enhanced = 'true';
  }
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const topic = topics[button.dataset.theme];
      if (!topic) return;
      buttons.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
      paths.forEach(function (path) { path.classList.toggle('is-selected', path.dataset.to === button.dataset.theme); });
      const selected = paths.find(function (path) { return path.dataset.to === button.dataset.theme; });
      lines.appendChild(selected);
      Object.keys(fields).forEach(function (name) {
        fields[name].textContent = (name === 'example' ? 'Research in practice: ' : '') + topic[name];
      });
    });
  });
  let scheduled = false;
  function scheduleDraw() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () { scheduled = false; drawConnections(); });
  }
  if ('ResizeObserver' in window) new ResizeObserver(scheduleDraw).observe(canvas);
  window.addEventListener('resize', scheduleDraw);
  if (document.fonts) document.fonts.ready.then(scheduleDraw);
  drawConnections();
})();
