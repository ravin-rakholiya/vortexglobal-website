/* Vortex Global - Application Logic & Product Catalog Engine */

// 7 Export Products Catalog Data (Dehydrated Produce & Yellow Split Moong removed as requested)
const productsData = [
  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    category: "spices",
    subCategory: "Spices",
    hsCode: "090931",
    origin: "Gujarat & Rajasthan, India",
    img: "images/prod_cumin_seeds.jpg",
    desc: "Hand-harvested from Gujarat's famous spice belts, our premium Cumin Seeds offer an intense earthy aroma, rich essential oil content, and unmatched warmth. Sorted using advanced optical technology to ensure zero impurities for global spice blenders and culinary mastercraft.",
    singaporeSpecs: {
      purity: "99% / 99.5% Machine Cleaned",
      moisture: "Max 8.0% - 9.0%",
      admixture: "Max 0.5% - 1.0%",
      volatileOil: "Min 1.5% - 2.0%",
      foreignMatter: "Max 0.5%",
      qualityGrade: "Singapore Quality (Standard Commercial Grade)",
      marketSuitability: "Asia, Southeast Asia & Middle East Markets"
    },
    europeSpecs: {
      purity: "99.5% / 99.9% Sortex Cleaned",
      moisture: "Max 7.0% - 8.0%",
      admixture: "Max 0.1% - 0.5%",
      volatileOil: "Min 2.5% - 3.0%",
      foreignMatter: "Nil (Optical Sortex Cleared)",
      qualityGrade: "Europe Quality (High ASTA Grade, EU Compliant)",
      pesticideCompliance: "Compliant with EU Pesticide & Heavy Metal Norms (ETO / Steam Sterilized Options)"
    }
  },
  {
    id: "coriander-seeds",
    name: "Coriander Seeds",
    category: "spices",
    subCategory: "Spices",
    hsCode: "090921",
    origin: "Gujarat & Madhya Pradesh, India",
    img: "images/prod_coriander_seeds.jpg",
    desc: "Sun-dried golden-brown Coriander Seeds renowned for their sweet citrusy aroma and rich essential oils. Carefully graded to deliver uniform kernel size and fresh flavor, ideal for curry powders, essential oil extraction, and gourmet seasonings."
  },
  {
    id: "fennel-seeds",
    name: "Green Fennel Seeds",
    category: "spices",
    subCategory: "Spices",
    hsCode: "090961",
    origin: "Gujarat, India",
    img: "images/prod_fennel_seeds.jpg",
    desc: "Sourced directly from prime Gujarat harvests, our Green Fennel Seeds feature a naturally vibrant color, crisp crunch, and sweet aromatic flavor. Perfectly machine-cleaned for confectioneries, digestive mouth fresheners, teas, and spice blends."
  },
  {
    id: "groundnuts",
    name: "Groundnuts / Peanuts (Bold & Java)",
    category: "oilseeds",
    subCategory: "Oil Seeds",
    hsCode: "120242",
    origin: "Gujarat (Saurashtra), India",
    img: "images/prod_groundnuts.jpg",
    desc: "Naturally sweet, crunchy Groundnuts processed in Saurashtra. 100% Aflatoxin-tested with high oil content and golden kernels, ideal for peanut butter production, roasting, confectionery, and premium snack manufacturing."
  },
  {
    id: "black-sesame",
    name: "Black Sesame Seeds",
    category: "oilseeds",
    subCategory: "Oil Seeds",
    hsCode: "120740",
    origin: "Gujarat, India",
    img: "images/prod_black_sesame.jpg",
    desc: "Nutrient-dense, deep natural Black Sesame Seeds packed with rich antioxidants and essential fatty acids. Double-sortex cleaned for a bold nutty flavor and pristine appearance, perfect for Asian cuisine, gourmet bakery, and wellness formulations."
  },
  {
    id: "white-sesame",
    name: "White Sesame Seeds (Hulled & Natural)",
    category: "oilseeds",
    subCategory: "Oil Seeds",
    hsCode: "120740",
    origin: "Gujarat, India",
    img: "images/prod_white_sesame.jpg",
    desc: "Mechanically hulled pearl-white Sesame Seeds with a uniform 99.95% purity rating. Celebrated for their delicate nuttiness and high oil yield, preferred by leading global Tahini producers and industrial bakeries."
  },
  {
    id: "chickpeas",
    name: "Kabuli Chickpeas (Garbanzo Beans)",
    category: "pulses",
    subCategory: "Pulses",
    hsCode: "071320",
    origin: "Madhya Pradesh & Gujarat, India",
    img: "images/prod_chickpeas.jpg",
    desc: "Large, uniform count Kabuli Chickpeas featuring a creamy texture, thin skin, and rich nutty taste. Harvested in Madhya Pradesh and processed under strict hygienic standards for hummus production, canning, and bulk retail."
  }
];

// Active Modal State
let activeModalProductId = 'cumin-seeds';

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initNavbar();
  renderProducts('all');
  initCatalogTabs();
  initCatalogSearch();
  initRFQForm();
  initFAQAccordion();
  initScrollReveals();
  initParallaxEffects();
  initParticles();
  initScrollCanvasAnimation();
});

/* Direct Email Composer Handler (Opens Gmail composer directly to vortexglobal@vortexglobal.co.in) */
window.openEmailComposer = function(e, subject = 'Export Enquiry - Vortex Global', body = '') {
  if (e && e.preventDefault) e.preventDefault();
  
  showToast("Opening Email Composer for vortexglobal@vortexglobal.co.in...");

  const recipient = 'vortexglobal@vortexglobal.co.in';
  const defaultBody = body || `Dear Vortex Global Team,\n\nI am interested in sourcing agricultural export commodities from your company. Please send me your price quotation.\n\nThank you!`;
  
  // Gmail Web Composer URL
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(defaultBody)}`;
  
  // Open Gmail composer in a new window/tab
  window.open(gmailUrl, '_blank');
};

/* 6. High-Performance Scroll-Driven Background Canvas Engine */
function initScrollCanvasAnimation() {
  const canvas = document.getElementById('scroll-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const frameCount = 240;
  const images = [];
  let currentFrameIndex = 0;
  let targetFrame = 0;

  const currentFramePath = (index) => `extracted_frames_30fps_jpg_q90/frame_${String(index).padStart(5, '0')}.jpg`;

  // Preload Images
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFramePath(i);
    if (i === 0) {
      img.onload = () => {
        resizeAndDrawFrame(0);
      };
    }
    images.push(img);
  }

  function resizeAndDrawFrame(index) {
    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hRatio = canvas.width / img.naturalWidth;
    const vRatio = canvas.height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);

    const centerShift_x = (canvas.width - img.naturalWidth * ratio) / 2;
    const centerShift_y = (canvas.height - img.naturalHeight * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0, 0, img.naturalWidth, img.naturalHeight,
      centerShift_x, centerShift_y, img.naturalWidth * ratio, img.naturalHeight * ratio
    );
  }

  window.addEventListener('resize', () => {
    resizeAndDrawFrame(Math.round(currentFrameIndex));
  });

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
    targetFrame = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
  });

  function renderLoop() {
    currentFrameIndex += (targetFrame - currentFrameIndex) * 0.15;
    const rounded = Math.round(currentFrameIndex);
    resizeAndDrawFrame(rounded);
    requestAnimationFrame(renderLoop);
  }

  renderLoop();
}

/* 1. Custom Interactive Cursor */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor__cursor');
  const dot = document.querySelector('.custom-cursor__cursor-dot');
  if (!cursor || !dot) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  const interactives = 'a, button, input, select, textarea, .product-card, .tab-btn, .country-chip, .cert-card, .nk-side-item, .nk-modal-back-btn';
  document.querySelectorAll(interactives).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering-interactive'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-interactive'));
  });
}

/* 2. Scroll Reveal Animations */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.classList.contains('stat-number') && !entry.target.dataset.counted) {
          animateCounter(entry.target);
          entry.target.dataset.counted = "true";
        }
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll('.section-header, .product-card, .usp-card, .cert-card, .contact-info-card, .calc-card').forEach((el, idx) => {
    el.classList.add('reveal');
    if (idx % 2 === 0) el.classList.add('reveal-left');
    else el.classList.add('reveal-right');
    observer.observe(el);
  });
}

/* 3. Dynamic Number Counter Animation */
function animateCounter(counterEl) {
  const text = counterEl.innerText;
  const num = parseFloat(text.replace(/[^0-9.]/g, ''));
  if (isNaN(num)) return;
  const suffix = text.replace(/[0-9.]/g, '');

  let start = 0;
  const duration = 2000;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = num / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= num) {
      counterEl.innerText = `${num}${suffix}`;
      clearInterval(timer);
    } else {
      counterEl.innerText = `${Math.floor(start)}${suffix}`;
    }
  }, stepTime);
}

/* 4. Parallax Background Effects */
function initParallaxEffects() {
  const videoBg = document.querySelector('.hero-video-bg video');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (videoBg && scrollY < window.innerHeight) {
      videoBg.style.transform = `scale(1.05) translateY(${scrollY * 0.3}px)`;
    }
  });
}

/* 5. Ambient Floating Particle Generator */
function initParticles() {
  const particleContainers = document.querySelectorAll('.particles-bg');
  particleContainers.forEach(container => {
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 8 + 3;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${Math.random() * 10 + 8}s`;
      p.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(p);
    }
  });
}

// Navbar Handler
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSec = document.querySelector(targetId);
      if (targetSec) {
        navMenu.classList.remove('active');
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Product Catalog Renderer
function renderProducts(category, searchQuery = '') {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = productsData.filter(item => {
    const matchesCat = category === 'all' || item.category === category;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="lucide-package-search" style="font-size: 2.5rem; color: var(--navy-primary); margin-bottom: 1rem;"></i>
        <p>No export products found matching your filter criteria.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((prod, index) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal reveal-zoom';
    card.style.animationDelay = `${(index % 3) * 0.15}s`;
    card.innerHTML = `
      <div class="product-thumb" onclick="openProductModal('${prod.id}')" style="cursor:pointer;">
        <img src="${prod.img}" alt="${prod.name}" loading="lazy" />
        <span class="product-category-tag">${prod.subCategory}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title" onclick="openProductModal('${prod.id}')" style="cursor:pointer;">${prod.name}</h3>
        <div class="product-sub">HS Code: ${prod.hsCode}</div>
        <p class="product-desc">${prod.desc}</p>
        <div class="product-meta">
          <span class="product-hs">HS Code: <span>${prod.hsCode}</span></span>
          <button class="btn btn-secondary" style="padding: 0.45rem 1rem; font-size: 0.82rem;" onclick="openProductModal('${prod.id}')">
            Enquiry Now <i class="lucide-chevron-right"></i>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  initScrollReveals();
}

function initCatalogTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      const searchVal = document.getElementById('searchInput')?.value || '';
      renderProducts(cat, searchVal);
    });
  });
}

function initCatalogSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.tab-btn.active');
      const cat = activeTab ? activeTab.getAttribute('data-category') : 'all';
      renderProducts(cat, e.target.value);
    });
  }
}

/* Focused Product Modal Drawer with Back Button Navigation */
window.openProductModal = function(productId = 'cumin-seeds') {
  activeModalProductId = productId;
  const modal = document.getElementById('productModal');
  renderNKAgroModalContent();
  modal.classList.add('active');
};

window.closeProductModal = function() {
  document.getElementById('productModal').classList.remove('active');
};

function switchNKProduct(productId) {
  activeModalProductId = productId;
  renderNKAgroModalContent();
}

function renderNKAgroModalContent() {
  const prod = productsData.find(p => p.id === activeModalProductId) || productsData[0];
  const container = document.getElementById('modalContainer');
  if (!container) return;

  const sidebarHtml = `
    <div class="nk-side-menu">
      <div class="nk-side-title">VORTEX EXPORT MENU</div>
      <ul class="nk-side-list">
        ${productsData.map(item => `
          <li class="nk-side-item ${item.id === prod.id ? 'active' : ''}" onclick="switchNKProduct('${item.id}')">
            <span>${item.name.replace(/^[0-9]+\.\s*/, '')}</span>
            <i class="lucide-chevron-right" style="font-size:0.75rem;"></i>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  let specsContentHtml = '';

  if (prod.id === 'cumin-seeds') {
    // Dual Category Specification Layout ONLY for Cumin Seeds (Singapore Quality & Europe Quality)
    specsContentHtml = `
      <div style="margin-top: 1rem;">
        <h3 style="font-size: 1.2rem; color: var(--navy-primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="lucide-sliders"></i> Cumin Seeds Export Quality Specifications
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
          We supply Cumin Seeds categorized strictly into <strong>Singapore Quality</strong> and <strong>Europe Quality</strong> to meet international market regulations and buyer standards.
        </p>

        <div class="nk-dual-spec-grid">
          <!-- Singapore Quality Card -->
          <div class="nk-spec-card">
            <div class="nk-spec-card-title">
              <i class="lucide-globe"></i> 1. Singapore Quality
            </div>
            <table class="nk-spec-table">
              <tbody>
                <tr><td><strong>Grade Type</strong></td><td>Singapore Quality (Standard Commercial)</td></tr>
                <tr><td><strong>Purity Level</strong></td><td>${prod.singaporeSpecs.purity}</td></tr>
                <tr><td><strong>Moisture Content</strong></td><td>${prod.singaporeSpecs.moisture}</td></tr>
                <tr><td><strong>Admixture</strong></td><td>${prod.singaporeSpecs.admixture}</td></tr>
                <tr><td><strong>Volatile Oil</strong></td><td>${prod.singaporeSpecs.volatileOil}</td></tr>
                <tr><td><strong>Foreign Matter</strong></td><td>${prod.singaporeSpecs.foreignMatter}</td></tr>
                <tr><td><strong>Target Markets</strong></td><td>${prod.singaporeSpecs.marketSuitability}</td></tr>
              </tbody>
            </table>
          </div>

          <!-- Europe Quality Card -->
          <div class="nk-spec-card">
            <div class="nk-spec-card-title">
              <i class="lucide-award"></i> 2. Europe Quality
            </div>
            <table class="nk-spec-table">
              <tbody>
                <tr><td><strong>Grade Type</strong></td><td>Europe Quality (High ASTA Grade Sortex)</td></tr>
                <tr><td><strong>Purity Level</strong></td><td>${prod.europeSpecs.purity}</td></tr>
                <tr><td><strong>Moisture Content</strong></td><td>${prod.europeSpecs.moisture}</td></tr>
                <tr><td><strong>Admixture</strong></td><td>${prod.europeSpecs.admixture}</td></tr>
                <tr><td><strong>Volatile Oil</strong></td><td>${prod.europeSpecs.volatileOil}</td></tr>
                <tr><td><strong>Foreign Matter</strong></td><td>${prod.europeSpecs.foreignMatter}</td></tr>
                <tr><td><strong>EU Compliance</strong></td><td>${prod.europeSpecs.pesticideCompliance}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  } else {
    // For all other products: Pure Description & HSN Code ONLY
    specsContentHtml = `
      <div style="margin-top: 1rem; background: #F8FAFC; padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid #E2E8F0;">
        <h3 style="font-size: 1.15rem; color: var(--navy-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="lucide-file-text"></i> Product Overview & Export Details
        </h3>
        <div style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 1rem; line-height: 1.7;">
          <strong>HSN Code:</strong> <span style="color: var(--navy-bright); font-weight: 700;">${prod.hsCode}</span>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.7;">
          ${prod.desc}
        </p>
      </div>
    `;
  }

  const mainContentHtml = `
    <div class="nk-main-content">
      <!-- Product Header Overview -->
      <div class="nk-product-header">
        <div class="nk-product-img">
          <img src="${prod.img}" alt="${prod.name}" />
        </div>
        <div>
          <h2 style="font-size: 1.8rem; line-height: 1.2; margin-bottom: 0.4rem;" class="text-navy">${prod.name}</h2>
          <div style="font-size: 0.85rem; color: var(--navy-bright); font-weight: 600; margin-bottom: 0.75rem;">
            Category: ${prod.subCategory} | HSN Code: ${prod.hsCode} | Origin: ${prod.origin}
          </div>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.2rem;">${prod.desc}</p>
          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;" onclick="closeProductModal(); scrollToRFQ('${prod.name}');">
              Enquiry Now <i class="lucide-send"></i>
            </button>
            <button onclick="openEmailComposer(event, 'Export Enquiry for ${encodeURIComponent(prod.name)}', 'Dear Vortex Global Team,\n\nI am interested in sourcing ${encodeURIComponent(prod.name)}. Please send me your latest quotation.')" class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
              Email Us <i class="lucide-mail"></i>
            </button>
            <a href="https://wa.me/919023850669?text=Inquiry%20for%20${encodeURIComponent(prod.name)}" target="_blank" class="btn btn-emerald" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
              WhatsApp <i class="lucide-message-square"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Product Description & HSN Code Section -->
      ${specsContentHtml}

      <!-- Bottom Navigation Controls with Back to Products Button -->
      <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: space-between;">
        <button class="nk-modal-back-btn" onclick="closeProductModal()">
          <i class="lucide-arrow-left"></i> Back to Products
        </button>
        <button class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;" onclick="closeProductModal(); scrollToRFQ('${prod.name}');">
          Send Export Enquiry <i class="lucide-send"></i>
        </button>
      </div>
    </div>
  `;

  container.innerHTML = `
    <div class="nk-modal-header">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <button class="nk-modal-back-btn" onclick="closeProductModal()">
          <i class="lucide-arrow-left"></i> Back to Products
        </button>
        <div class="nk-breadcrumbs">
          <span>Vortex Global</span>
          <i class="lucide-chevron-right" style="font-size:0.75rem;"></i>
          <span>${prod.subCategory}</span>
          <i class="lucide-chevron-right" style="font-size:0.75rem;"></i>
          <span class="active">${prod.name}</span>
        </div>
      </div>
      <button class="nk-modal-close" onclick="closeProductModal()" title="Close Product View"><i class="lucide-x"></i></button>
    </div>

    <div class="nk-layout-grid">
      ${sidebarHtml}
      ${mainContentHtml}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.scrollToRFQ = function(productName) {
  const rfqSec = document.getElementById('contact');
  if (rfqSec) {
    rfqSec.scrollIntoView({ behavior: 'smooth' });
    const prodSelect = document.getElementById('rfqProduct');
    if (prodSelect) {
      for (let option of prodSelect.options) {
        if (option.text.includes(productName) || productName.includes(option.value)) {
          option.selected = true;
          break;
        }
      }
    }
  }
};

// Streamlined Enquiry Form Handler
function initRFQForm() {
  const form = document.getElementById('rfqForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rfqName').value;
      const product = document.getElementById('rfqProduct').value;

      showToast(`Enquiry Submitted for ${product}! Contacting sales team...`);
      
      const waMsg = encodeURIComponent(`Hello Vortex Global, I would like to send an export enquiry.\nName/Company: ${name}\nProduct: ${product}`);
      const waUrl = `https://wa.me/919023850669?text=${waMsg}`;
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);
      
      form.reset();
    });
  }
}

// FAQ Accordion
function initFAQAccordion() {
  const faqItemsList = document.querySelectorAll('.faq-item');
  faqItemsList.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItemsList.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Toast Helper
function showToast(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="lucide-check-circle-2" style="color:var(--silver-bright);"></i> <span>${msg}</span>`;
  
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}
