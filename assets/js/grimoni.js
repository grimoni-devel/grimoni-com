(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  });

  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }));

  const revealElements = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealElements.forEach(el => observer.observe(el));
  }

  document.querySelectorAll('.layer-summary').forEach(button => {
    button.addEventListener('click', () => {
      const selected = button.closest('.layer');
      document.querySelectorAll('.layer').forEach(layer => {
        const active = layer === selected;
        layer.classList.toggle('is-active', active);
        const summary = layer.querySelector('.layer-summary');
        summary?.setAttribute('aria-expanded', String(active));
        const toggle = layer.querySelector('.layer-toggle');
        if (toggle) toggle.textContent = active ? '−' : '+';
      });
    });
  });

  const sectorDataByLanguage = {
    es: {
      operaciones: { title: 'Procesos que avanzan sin esperas', items: ['Lectura y clasificación de solicitudes', 'Coordinación entre sistemas y equipos', 'Detección y escalado de incidencias'] },
      administracion: { title: 'Back office con contexto y criterio', items: ['Extracción y validación de documentos', 'Conciliación y preparación de expedientes', 'Generación de informes y comunicaciones'] },
      clientes: { title: 'Cada interacción llega preparada', items: ['Identificación de intención y prioridad', 'Respuesta asistida con conocimiento interno', 'Registro y seguimiento automático en el CRM'] },
      riesgo: { title: 'Control antes de ejecutar', items: ['Verificación de reglas y documentación', 'Detección de anomalías y excepciones', 'Escalado por confianza, impacto o permiso'] }
    },
    ca: {
      operaciones: { title: 'Processos que avancen sense esperes', items: ['Lectura i classificació de sol·licituds', 'Coordinació entre sistemes i equips', 'Detecció i escalat d’incidències'] },
      administracion: { title: 'Back office amb context i criteri', items: ['Extracció i validació de documents', 'Conciliació i preparació d’expedients', 'Generació d’informes i comunicacions'] },
      clientes: { title: 'Cada interacció arriba preparada', items: ['Identificació de la intenció i la prioritat', 'Resposta assistida amb coneixement intern', 'Registre i seguiment automàtic al CRM'] },
      riesgo: { title: 'Control abans d’executar', items: ['Verificació de regles i documentació', 'Detecció d’anomalies i excepcions', 'Escalat per confiança, impacte o permís'] }
    },
    en: {
      operaciones: { title: 'Processes that move forward without delays', items: ['Reading and classifying requests', 'Coordination across systems and teams', 'Issue detection and escalation'] },
      administracion: { title: 'Back office with context and judgment', items: ['Document extraction and validation', 'Reconciliation and case-file preparation', 'Report and communication generation'] },
      clientes: { title: 'Every interaction arrives prepared', items: ['Intent and priority identification', 'Assisted responses using internal knowledge', 'Automatic CRM logging and follow-up'] },
      riesgo: { title: 'Control before execution', items: ['Rule and document verification', 'Anomaly and exception detection', 'Escalation by confidence, impact or permission'] }
    }
  };
  const pageLanguage = document.documentElement.lang.toLowerCase().split('-')[0];
  const sectorData = sectorDataByLanguage[pageLanguage] || sectorDataByLanguage.es;
  const sectorPaths = {
    es: { operaciones: 'operaciones', administracion: 'administracion', clientes: 'clientes', riesgo: 'riesgo' },
    ca: { operaciones: 'operacions', administracion: 'administracio', clientes: 'clients', riesgo: 'risc' },
    en: { operaciones: 'operations', administracion: 'administration', clientes: 'customers', riesgo: 'risk' }
  }[pageLanguage] || { operaciones: 'operaciones', administracion: 'administracion', clientes: 'clientes', riesgo: 'riesgo' };

  const sectorTabs = document.querySelectorAll('[data-sector]');
  const sectorPath = document.querySelector('#sector-path');
  const sectorTitle = document.querySelector('#sector-title');
  const sectorItems = document.querySelector('#sector-items');
  sectorTabs.forEach(tab => tab.addEventListener('click', () => {
    const key = tab.dataset.sector;
    const data = sectorData[key];
    if (!data) return;
    sectorTabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    sectorPath.textContent = sectorPaths[key] || key;
    sectorTitle.textContent = data.title;
    sectorItems.innerHTML = data.items.map((item, index) => `<li><span>0${index + 1}</span> ${item}</li>`).join('');
  }));

  const verb = document.querySelector('#rotating-verb');
  if (verb && !reducedMotion) {
    const words = ['entender.', 'decidir.', 'actuar.', 'mejorar.'];
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % words.length;
      verb.classList.remove('swap');
      void verb.offsetWidth;
      verb.textContent = words[index];
      verb.classList.add('swap');
    }, 1900);
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
