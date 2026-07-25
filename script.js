/* -------------------------------------------------------------
   Nilesh Suthar Portfolio Interaction Script
------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Initialize Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.1,
    touchMultiplier: 1.2
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 2. Trigger Hero Backdrop Slide-up on Load
  setTimeout(() => {
    const backdrop = document.getElementById('heroBackdrop');
    if (backdrop) {
      backdrop.classList.add('active');
    }
  }, 300);

  // 3. Split Text Helper for Scroll-Reveal Characters
  function splitTextForReveal(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.innerText.trim();
    el.innerHTML = '';
    
    // Split into words, then split words into characters
    const words = text.split(' ');
    words.forEach((word, wordIdx) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';
      
      word.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        charSpan.classList.add('intro-char');
        wordSpan.appendChild(charSpan);
      });
      
      el.appendChild(wordSpan);
      
      // Add a space span between words
      if (wordIdx < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = '&nbsp;';
        spaceSpan.style.display = 'inline-block';
        el.appendChild(spaceSpan);
      }
    });
  }

  // Split the intro statement characters
  splitTextForReveal('introText');

  // 4. Role Pills Intersection Observer (Slide in when in view)
  const rolePills = document.querySelectorAll('.role-pill');
  const pillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        rolePills.forEach(pill => pill.classList.add('visible'));
        pillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const pillsSection = document.querySelector('.pills-track-section');
  if (pillsSection) {
    pillsObserver.observe(pillsSection);
  }

  // 5. Scroll-Based Interactive Animations (Optimized to prevent layout thrashing)
  const introContainer = document.getElementById('introContainer');
  const watermark = document.getElementById('watermark');
  const footerSection = document.getElementById('footer');

  // Cache dimensions to prevent forced layouts in the scroll handler
  let introContainerTop = 0;
  let introContainerHeight = 0;
  let footerSectionTop = 0;
  let windowHeight = window.innerHeight;

  function cacheDimensions() {
    windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    if (introContainer) {
      const rect = introContainer.getBoundingClientRect();
      introContainerTop = rect.top + scrollY;
      introContainerHeight = rect.height;
    }
    
    if (footerSection) {
      const rect = footerSection.getBoundingClientRect();
      footerSectionTop = rect.top + scrollY;
    }
  }

  // Initial caching and updates on resize/scroll jumps
  cacheDimensions();
  window.addEventListener('resize', cacheDimensions);
  // Recalculate slightly after load for dynamic layouts
  setTimeout(cacheDimensions, 1000);

  lenis.on('scroll', (e) => {
    const scrollY = window.scrollY;

    // A. Character Scroll Reveal in Intro Container
    if (introContainer) {
      const startTrigger = introContainerTop - windowHeight;
      let progress = (scrollY - startTrigger) / introContainerHeight;
      progress = Math.max(0, Math.min(1, progress));

      const chars = document.querySelectorAll('.intro-char');
      const totalChars = chars.length;
      const activeLimit = Math.floor(progress * totalChars * 1.5); // Multiplier to accelerate complete fill-in

      chars.forEach((char, idx) => {
        if (idx < activeLimit) {
          char.classList.add('active');
        } else {
          char.classList.remove('active');
        }
      });
    }

    // B. Footer Watermark Parallax Effect
    if (footerSection && watermark) {
      if (scrollY > footerSectionTop - windowHeight) {
        const offset = (scrollY - (footerSectionTop - windowHeight)) * 0.15;
        watermark.style.transform = `translateX(${offset - 100}px)`;
      }
    }
  });

  // 6. Dynamic Skills Display Box Switcher
  const skillTitles = document.querySelectorAll('.skill-row-title');
  const skillTitleEl = document.getElementById('skillTitle');
  const skillContentEl = document.getElementById('skillContent');
  const skillPillsEl = document.getElementById('skillPills');
  const skillIconEl = document.getElementById('skillIcon');

  const skillsData = [
    {
      title: "Backend Development",
      content: "Designing robust server architectures, business logic layers, and secure RESTful APIs. Proficient in traditional enterprise Java development using Core Java, Advanced Java, and Spring Boot framework, as well as Python/Django stacks. Skilled in designing scalable database structures and optimizing SQL queries inside MySQL.",
      pills: ["Java", "Spring Boot", "Django", "MySQL", "REST APIs", "SQL"],
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
             </svg>`
    },
    {
      title: "AI & Deep Learning",
      content: "Creating pipeline utilities leveraging leading AI models. Self-taught implementation of Meta's Nougat optical character recognition engine and Hugging Face Transformers. Utilized PyTorch for custom tensor math manipulations to digitize and convert unstructured mathematical files and scientific PDFs into structured Markdown.",
      pills: ["Python", "PyTorch", "Transformers", "Nougat", "Pandas", "NumPy"],
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
             </svg>`
    },
    {
      title: "Cloud & Developer Tools",
      content: "Certified in Oracle Cloud Infrastructure (OCI) AI Foundations. Adept at collaborative development using Git and GitHub workflows. Highly efficient development setups utilizing IntelliJ IDEA, PyCharm, and VS Code for smooth, structured engineering workflows.",
      pills: ["Oracle Cloud (OCI)", "Git", "GitHub", "IntelliJ IDEA", "PyCharm", "VS Code"],
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
             </svg>`
    }
  ];

  skillTitles.forEach((title, idx) => {
    title.addEventListener('click', () => {
      // Set active visual row
      skillTitles.forEach(t => {
        t.classList.remove('active');
        t.classList.add('inactive');
      });
      title.classList.remove('inactive');
      title.classList.add('active');

      // Update Detail Display with a smooth transition
      const box = document.getElementById('skillDisplayBox');
      if (box) {
        box.style.opacity = '0';
        box.style.transform = 'translateY(10px)';
        box.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        setTimeout(() => {
          // Change data
          const data = skillsData[idx];
          skillTitleEl.innerText = data.title;
          skillContentEl.innerText = data.content;
          skillIconEl.innerHTML = data.icon;

          // Repopulate pills
          skillPillsEl.innerHTML = '';
          data.pills.forEach(pillText => {
            const span = document.createElement('span');
            span.classList.add('skill-pill-tag');
            span.innerText = pillText;
            skillPillsEl.appendChild(span);
          });

          // Fade back in
          box.style.opacity = '1';
          box.style.transform = 'translateY(0)';
        }, 300);
      }
    });
  });

});
