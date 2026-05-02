/* ═══════════════════════════════════════
   MARE NOSTRUM — app.js
════════════════════════════════════════ */

// ─── DATA ────────────────────────────────────────────────
const MENU_DATA = {
  ceviches: [
    {
      id: 1,
      name: "Ceviche Clásico Norteño",
      desc: "Lenguado fresco, leche de tigre al ají limo, cebolla morada, choclo y camote.",
      price: 52,
      img: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&q=80",
      popular: true,
      soldOut: false
    },
    {
      id: 2,
      name: "Ceviche de Conchas Negras",
      desc: "Conchas negras de Tumbes, tigre negro, ají amarillo y culantro fresco.",
      price: 68,
      img: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=400&q=80",
      popular: false,
      soldOut: false
    },
    {
      id: 3,
      name: "Tiradito Nikkei",
      desc: "Láminas de atún, salsa ponzu, aguacate, sésamo tostado y aceite de trufa.",
      price: 75,
      img: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80",
      popular: false,
      soldOut: true
    }
  ],
  mariscos: [
    {
      id: 4,
      name: "Arroz con Mariscos",
      desc: "Arroz caldoso con mix de mariscos frescos, bisque de camarón y aceite de cilantro.",
      price: 65,
      img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
      popular: true,
      soldOut: false
    },
    {
      id: 5,
      name: "Chupe de Camarones",
      desc: "Receta tradicional chiclayana con camarones del río, leche evaporada y queso fresco.",
      price: 58,
      img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400&q=80",
      popular: false,
      soldOut: false
    },
    {
      id: 6,
      name: "Langosta a la Parrilla",
      desc: "Media langosta local a las brasas, mantequilla de hierbas, limón y papas nativas.",
      price: 120,
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
      popular: false,
      soldOut: false
    }
  ],
  carnes: [
    {
      id: 7,
      name: "Lomo Saltado Fusión",
      desc: "Lomo fino salteado al wok con soja, pisco, tomate cherry y papas amarillas fritas.",
      price: 72,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
      popular: true,
      soldOut: false
    },
    {
      id: 8,
      name: "Seco de Cabrito",
      desc: "Cabrito norteño en salsa de culantro, chicha de jora y frejoles zarza.",
      price: 62,
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80",
      popular: false,
      soldOut: false
    },
    {
      id: 9,
      name: "Picante de Cuy",
      desc: "Cuy dorado al horno, salsa de maní y ají panca, papas y maíz choclo.",
      price: 55,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
      popular: false,
      soldOut: false
    }
  ],
  postres: [
    {
      id: 10,
      name: "Suspiro a la Limeña",
      desc: "Cremoso manjar blanco con merengue italiano al Oporto y canela molida.",
      price: 35,
      img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
      popular: false,
      soldOut: false
    },
    {
      id: 11,
      name: "Alfajor de Maracuyá",
      desc: "Galleta suave rellena con lemon curd de maracuyá, cubierta de coco rallado.",
      price: 32,
      img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
      popular: true,
      soldOut: false
    },
    {
      id: 12,
      name: "Picarones con Miel",
      desc: "Rosquillas de camote y zapallo fritas en aceite limpio, con miel de chancaca.",
      price: 38,
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
      popular: false,
      soldOut: false
    }
  ]
};

const FAQS = [
  {
    q: "¿Cuál es el horario de atención?",
    a: "Atendemos de martes a domingo, de 12:00 pm a 10:00 pm. Los lunes permanecemos cerrados para garantizar la frescura de nuestros ingredientes y el bienestar de nuestro equipo."
  },
  {
    q: "¿Necesito reservar con anticipación?",
    a: "Recomendamos reservar con mínimo 24 horas de anticipación, especialmente para fines de semana. Para grupos de más de 8 personas, la reserva es obligatoria con 48 horas de anticipación."
  },
  {
    q: "¿Hacen servicio de delivery?",
    a: "Sí, realizamos delivery dentro de Chiclayo y distritos aledaños (José Leonardo Ortiz, La Victoria, Pimentel). El tiempo estimado es de 30–50 minutos. Pedido mínimo: S/ 60."
  },
  {
    q: "¿Tienen opciones vegetarianas o veganas?",
    a: "Contamos con opciones vegetarianas como nuestro Ceviche de Hongos y el Tiradito de Mango. Por favor, infórmanos al hacer tu reserva para preparar alternativas especiales."
  },
  {
    q: "¿Cuál es su política de cancelación?",
    a: "Las cancelaciones con más de 4 horas de anticipación no generan ningún cargo. Cancelaciones posteriores pueden implicar un cargo de S/ 30 por persona para grupos grandes."
  },
  {
    q: "¿Tienen menú infantil o opciones para niños?",
    a: "Tenemos una carta especial para los más pequeños con versiones suaves de nuestros clásicos, además de postres que encantan a toda la familia."
  },
  {
    q: "¿Ofrecen eventos privados o celebraciones?",
    a: "Sí, disponemos de un salón privado para hasta 40 personas ideal para cumpleaños, aniversarios y reuniones corporativas. Contáctanos para cotizar menús especiales."
  }
];

const CHATBOT_RESPONSES = {
  menu: "🍽️ Nuestra carta tiene 4 categorías: **Ceviches**, **Mariscos**, **Carnes** y **Postres**. Puedes verla completa en la sección 'Menú' de esta página. Nuestro plato estrella es el Ceviche Clásico Norteño (S/ 52) ¡Te lo recomendamos!",
  reserva: "📅 Para reservar tu mesa, presiona el botón **'Reservar Mesa'** en la sección de Reservas o en el Hero. También puedes llamarnos al +51 74 234-5678. Recuerda que recomendamos reservar con al menos 24 horas de anticipación.",
  horarios: "🕐 Nuestro horario es: **Martes a Domingo de 12:00 pm a 10:00 pm**. Los lunes estamos cerrados. ¡Te esperamos!",
  ubicacion: "📍 Estamos ubicados en **Av. Salaverry 1240, Chiclayo 14001**, a 2 cuadras de la Plaza de Armas. Contamos con estacionamiento propio. ¿Necesitas indicaciones más precisas?",
  delivery: "🛵 Hacemos delivery dentro de Chiclayo y distritos como Pimentel y José Leonardo Ortiz. El tiempo estimado es de **30–50 minutos** y el pedido mínimo es S/ 60. ¡Puedes hacer tu pedido desde esta misma página!",
  precio: "💰 Nuestros precios van desde **S/ 32** (postres) hasta **S/ 120** (Langosta a la Parrilla). El rango promedio de nuestros platos principales es S/ 52–S/ 75. ¡Una experiencia de lujo a precio justo!",
  default: "¡Gracias por escribir! 😊 Puedo ayudarte con información sobre nuestro menú, reservas, horarios, ubicación y delivery. ¿Qué quisieras saber?"
};

// ─── STATE ───────────────────────────────────────────────
let cart = [];
let currentTab = 'ceviches';
let orderType = 'reserva';

// ─── INIT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initNavbar();
  renderMenu(currentTab);
  renderFAQs();
  initCartPanel();
  initOrderModal();
  initChatbot();
  initMobileMenu();
  initScrollReveal();
  initMenuTabs();
});

// ─── NAVBAR ──────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ─── MOBILE MENU ─────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
  overlay.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
  document.querySelectorAll('[data-close-menu]').forEach(el => {
    el.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

// ─── MENU RENDERING ──────────────────────────────────────
function initMenuTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      renderMenu(currentTab);
      lucide.createIcons();
    });
  });
}

function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  const items = MENU_DATA[category] || [];

  grid.innerHTML = items.map(item => `
    <div class="menu-card reveal ${item.soldOut ? 'sold-out' : ''}">
      <div class="menu-card-img-wrap">
        ${item.popular ? `<span class="badge-popular">⭐ Popular</span>` : ''}
        ${item.soldOut ? `<span class="badge-sold-out">Agotado</span>` : ''}
        <img 
          src="${item.img}" 
          alt="${item.name}" 
          class="menu-card-img"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80'"
        />
      </div>
      <div class="menu-card-body">
        <h3 class="menu-card-name">${item.name}</h3>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <div class="menu-card-price">
            <span>S/</span>${item.price.toFixed(2)}
          </div>
          <button 
            class="add-to-cart-btn" 
            onclick="addToCart(${item.id})"
            ${item.soldOut ? 'disabled title="Agotado"' : ''}
            aria-label="Agregar ${item.name} al carrito"
          >
            <i data-lucide="${item.soldOut ? 'x' : 'plus'}" style="width:16px;height:16px;"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
  // Trigger reveal for new cards
  setTimeout(() => {
    document.querySelectorAll('.menu-card.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }, 50);
}

// ─── CART ─────────────────────────────────────────────────
function addToCart(itemId) {
  const allItems = Object.values(MENU_DATA).flat();
  const item = allItems.find(i => i.id === itemId);
  if (!item || item.soldOut) return;

  const existing = cart.find(ci => ci.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartUI();
  showToast(`✓ ${item.name} agregado`);
  openCart();
}

function removeFromCart(itemId) {
  cart = cart.filter(ci => ci.id !== itemId);
  updateCartUI();
}

function updateQty(itemId, delta) {
  const item = cart.find(ci => ci.id === itemId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(itemId);
  else updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function getCartTotal() {
  return cart.reduce((sum, ci) => sum + ci.price * ci.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, ci) => sum + ci.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();
  const countEl = document.getElementById('cart-count');
  const totalEl = document.getElementById('cart-total');
  const subtotalEl = document.getElementById('cart-subtotal');
  const itemsEl = document.getElementById('cart-items');

  // Badge
  if (count > 0) {
    countEl.textContent = count;
    countEl.classList.remove('hidden');
  } else {
    countEl.classList.add('hidden');
  }

  // Total
  if (totalEl) totalEl.textContent = `S/ ${total.toFixed(2)}`;
  if (subtotalEl) subtotalEl.textContent = `S/ ${total.toFixed(2)}`;

  // Items
  if (itemsEl) {
    if (cart.length === 0) {
      itemsEl.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <p>Tu carrito está vacío</p>
          <p style="margin-top:6px;font-size:0.8rem;opacity:0.6;">Agrega platos desde el menú</p>
        </div>
      `;
    } else {
      itemsEl.innerHTML = cart.map(ci => `
        <div class="cart-item">
          <img src="${ci.img}" alt="${ci.name}" class="cart-item-img" 
               onerror="this.src='https://images.unsplash.com/photo-1559339352-11d035aa65de?w=100&q=70'" />
          <div class="cart-item-info">
            <div class="cart-item-name">${ci.name}</div>
            <div class="cart-item-price">S/ ${(ci.price * ci.qty).toFixed(2)}</div>
          </div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="updateQty(${ci.id}, -1)">−</button>
            <span class="qty-num">${ci.qty}</span>
            <button class="qty-btn" onclick="updateQty(${ci.id}, 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${ci.id})">
            <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
          </button>
        </div>
      `).join('');
      lucide.createIcons();
    }
  }
}

function initCartPanel() {
  const cartBtn = document.getElementById('cart-btn');
  const cartClose = document.getElementById('cart-close');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartClear = document.getElementById('cart-clear');

  cartBtn.addEventListener('click', toggleCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  cartClear.addEventListener('click', clearCart);

  updateCartUI();
}

function openCart() {
  const panel = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  panel.classList.remove('hidden');
  overlay.classList.remove('hidden');
  setTimeout(() => panel.classList.add('open'), 10);
  lucide.createIcons();
}

function closeCart() {
  const panel = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  panel.classList.remove('open');
  setTimeout(() => {
    panel.classList.add('hidden');
    overlay.classList.add('hidden');
  }, 350);
}

function toggleCart() {
  const panel = document.getElementById('cart-panel');
  if (panel.classList.contains('open')) closeCart();
  else openCart();
}

// ─── ORDER MODAL ──────────────────────────────────────────
function initOrderModal() {
  const modal = document.getElementById('order-modal');
  const closeBtn = document.getElementById('modal-close');
  const confirmBtn = document.getElementById('confirm-order-btn');
  const typeBtns = document.querySelectorAll('.order-type-btn');

  closeBtn.addEventListener('click', closeOrderModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeOrderModal();
  });

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      orderType = btn.dataset.type;
      const addrGroup = document.getElementById('delivery-address-group');
      if (orderType === 'delivery') {
        addrGroup.classList.remove('hidden');
      } else {
        addrGroup.classList.add('hidden');
      }
    });
  });

  confirmBtn.addEventListener('click', confirmOrder);
}

function openOrderModal(type = null) {
  closeCart();
  if (type) {
    orderType = type;
    document.querySelectorAll('.order-type-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === type);
    });
    const addrGroup = document.getElementById('delivery-address-group');
    if (type === 'delivery') addrGroup.classList.remove('hidden');
    else addrGroup.classList.add('hidden');
  }

  // Reset to form step
  document.getElementById('modal-form-step').classList.remove('hidden');
  document.getElementById('modal-success-step').classList.add('hidden');

  // Render cart summary
  renderOrderSummary();

  const modal = document.getElementById('order-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeOrderModal() {
  const modal = document.getElementById('order-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function renderOrderSummary() {
  const container = document.getElementById('order-cart-summary');
  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center;font-size:0.85rem;color:#999;padding:8px 0;">No hay platos en tu carrito. Agrega platos desde el menú.</p>`;
    return;
  }
  container.innerHTML = `
    ${cart.map(ci => `
      <div class="summary-item">
        <span>${ci.name} × ${ci.qty}</span>
        <span>S/ ${(ci.price * ci.qty).toFixed(2)}</span>
      </div>
    `).join('')}
    <div class="summary-total">
      <span>Total</span>
      <span>S/ ${getCartTotal().toFixed(2)}</span>
    </div>
  `;
}

function confirmOrder() {
  const name = document.getElementById('order-name').value.trim();
  const phone = document.getElementById('order-phone').value.trim();

  if (!name) {
    showFieldError('order-name', 'Por favor ingresa tu nombre.');
    return;
  }
  if (!phone) {
    showFieldError('order-phone', 'Por favor ingresa tu teléfono.');
    return;
  }

  const orderNumber = `MN-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000) + 1000}`;
  document.getElementById('order-number-display').textContent = orderNumber;
  document.getElementById('modal-form-step').classList.add('hidden');
  document.getElementById('modal-success-step').classList.remove('hidden');

  // Clear cart after order
  clearCart();
}

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.style.borderColor = '#e53e3e';
  field.focus();
  showToast(`⚠️ ${message}`);
  field.addEventListener('input', () => {
    field.style.borderColor = '';
  }, { once: true });
}

// ─── FAQs ─────────────────────────────────────────────────
function renderFAQs() {
  const list = document.getElementById('faq-list');
  list.innerHTML = FAQS.map((faq, i) => `
    <div class="faq-item reveal" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${faq.q}</span>
        <i data-lucide="plus" class="faq-icon w-5 h-5"></i>
      </button>
      <div class="faq-answer">${faq.a}</div>
    </div>
  `).join('');
  lucide.createIcons();
}

function toggleFAQ(index) {
  const item = document.getElementById(`faq-${index}`);
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  if (!isActive) item.classList.add('active');
}

// ─── CHATBOT ──────────────────────────────────────────────
function initChatbot() {
  const toggle = document.getElementById('chatbot-toggle');
  const panel = document.getElementById('chatbot-panel');
  const openIcon = document.getElementById('chat-open-icon');
  const closeIcon = document.getElementById('chat-close-icon');
  const sendBtn = document.getElementById('chat-send');
  const input = document.getElementById('chat-input');
  const dot = document.querySelector('.chat-notification-dot');

  toggle.addEventListener('click', () => {
    const isOpen = !panel.classList.contains('hidden');
    if (isOpen) {
      panel.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      panel.classList.remove('hidden');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      dot.style.display = 'none';
    }
    lucide.createIcons();
  });

  sendBtn.addEventListener('click', sendChatMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });

  document.querySelectorAll('.quick-reply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const question = btn.dataset.question;
      addChatMessage(btn.textContent, 'user');
      setTimeout(() => {
        addChatMessage(CHATBOT_RESPONSES[question] || CHATBOT_RESPONSES.default, 'bot');
      }, 600);
      // Hide quick replies after first use
      const qr = document.getElementById('quick-replies');
      if (qr) qr.remove();
    });
  });
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  addChatMessage(text, 'user');
  input.value = '';

  // Simple keyword matching
  const lower = text.toLowerCase();
  let response = CHATBOT_RESPONSES.default;
  if (lower.includes('menú') || lower.includes('menu') || lower.includes('carta') || lower.includes('plato')) {
    response = CHATBOT_RESPONSES.menu;
  } else if (lower.includes('reserv') || lower.includes('mesa')) {
    response = CHATBOT_RESPONSES.reserva;
  } else if (lower.includes('horario') || lower.includes('abre') || lower.includes('cierra') || lower.includes('hora')) {
    response = CHATBOT_RESPONSES.horarios;
  } else if (lower.includes('ubic') || lower.includes('direcc') || lower.includes('dónde') || lower.includes('donde')) {
    response = CHATBOT_RESPONSES.ubicacion;
  } else if (lower.includes('delivery') || lower.includes('domicilio') || lower.includes('envío')) {
    response = CHATBOT_RESPONSES.delivery;
  } else if (lower.includes('precio') || lower.includes('cuánto') || lower.includes('costo') || lower.includes('cuanto')) {
    response = CHATBOT_RESPONSES.precio;
  }

  setTimeout(() => addChatMessage(response, 'bot'), 700);
}

function addChatMessage(text, sender) {
  const container = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = `chat-msg ${sender}`;
  // Convert **bold** markdown
  msg.innerHTML = `<p>${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

// ─── TOAST ────────────────────────────────────────────────
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-msg');
  msg.textContent = message;
  toast.classList.remove('hidden', 'hiding');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2500);
}

// ─── SCROLL REVEAL ────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Observe static elements
  document.querySelectorAll('.historia-text, .historia-img-wrap, .reservas-img-wrap, .reservas-text, .footer-brand, .footer-info, .footer-links, .footer-newsletter').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // FAQs will be observed after render
  setTimeout(() => {
    document.querySelectorAll('.faq-item.reveal').forEach(el => observer.observe(el));
  }, 100);
}

// Re-run reveal observer for dynamically added menu cards
function observeMenuCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.menu-card.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// Expose globally for inline handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty = updateQty;
window.openOrderModal = openOrderModal;
window.closeOrderModal = closeOrderModal;
window.toggleFAQ = toggleFAQ;
