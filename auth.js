/**
 * Autenticação Google OAuth — restrita ao domínio @hotmart.com
 * 
 * SETUP: Substitua o CLIENT_ID abaixo pelo seu Google Cloud OAuth Client ID.
 * 
 * Para criar o Client ID:
 * 1. Acesse https://console.cloud.google.com/apis/credentials
 * 2. Crie um OAuth 2.0 Client ID do tipo "Web application"
 * 3. Em "Authorized JavaScript origins" adicione:
 *    - https://hotmart-org.github.io
 *    - http://localhost (para dev)
 * 4. Copie o Client ID e cole abaixo
 */
var GOOGLE_CLIENT_ID = '92346177609-a8reb9845m5behppsf3nhf3u317mg68b.apps.googleusercontent.com';
var ALLOWED_DOMAIN = 'hotmart.com';
var AUTH_STORAGE_KEY = 'gw_auth_user';
var AUTH_EXPIRY_KEY = 'gw_auth_expiry';
var SESSION_HOURS = 8;

(function () {
  'use strict';

  // ── Verificar sessão existente ──
  function getStoredUser() {
    try {
      var expiry = localStorage.getItem(AUTH_EXPIRY_KEY);
      if (!expiry || Date.now() > parseInt(expiry)) {
        clearSession();
        return null;
      }
      var user = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
      return user && user.email ? user : null;
    } catch (e) { return null; }
  }

  function saveSession(user) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    localStorage.setItem(AUTH_EXPIRY_KEY, String(Date.now() + SESSION_HOURS * 60 * 60 * 1000));
  }

  function clearSession() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(AUTH_EXPIRY_KEY);
  }

  // ── Injetar CSS do overlay ──
  var style = document.createElement('style');
  style.textContent = [
    '#auth-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#f7f9fa;font-family:"Nunito Sans",-apple-system,sans-serif}',
    'html:not(.light) #auth-overlay{background:#191c1f}',
    '.auth-box{text-align:center;max-width:400px;padding:48px 40px;background:#fff;border:1px solid #c9ced4;border-radius:20px;box-shadow:0 8px 32px rgba(0,0,0,.08)}',
    'html:not(.light) .auth-box{background:#282c2f;border-color:#464b52;box-shadow:0 8px 32px rgba(0,0,0,.3)}',
    '.auth-logo{font-size:48px;margin-bottom:16px}',
    '.auth-title{font-size:22px;font-weight:700;color:#191c1f;margin-bottom:8px}',
    'html:not(.light) .auth-title{color:#fff}',
    '.auth-subtitle{font-size:14px;color:#707780;margin-bottom:32px;line-height:1.5}',
    '.auth-btn{display:inline-flex;align-items:center;gap:10px;padding:12px 28px;border-radius:12px;border:1px solid #c9ced4;background:#fff;color:#282c2f;font-size:15px;font-weight:600;cursor:pointer;transition:all .2s;font-family:inherit}',
    'html:not(.light) .auth-btn{background:#32363b;border-color:#464b52;color:#e6e9ed}',
    '.auth-btn:hover{border-color:#355cc0;box-shadow:0 2px 12px rgba(53,92,192,.15);transform:translateY(-1px)}',
    '.auth-btn svg{width:20px;height:20px}',
    '.auth-error{color:#d6342c;font-size:13px;margin-top:16px;display:none}',
    '.auth-user-bar{display:flex;align-items:center;gap:8px;font-size:13px;color:#707780}',
    '.auth-user-bar img{width:24px;height:24px;border-radius:50%}',
    '.auth-logout{background:none;border:none;color:#707780;cursor:pointer;font-size:12px;text-decoration:underline;padding:0;font-family:inherit}',
    '.auth-logout:hover{color:#d6342c}',
    '#app-content.auth-hidden{display:none!important}',
  ].join('\n');
  document.head.appendChild(style);

  // ── Wrap conteúdo existente ──
  var user = getStoredUser();

  function wrapContent() {
    var body = document.body;
    var children = Array.prototype.slice.call(body.childNodes);
    var wrapper = document.createElement('div');
    wrapper.id = 'app-content';
    if (!user) wrapper.className = 'auth-hidden';
    children.forEach(function (child) { wrapper.appendChild(child); });
    body.appendChild(wrapper);
  }

  // ── Criar overlay de login ──
  function createOverlay() {
    var overlay = document.createElement('div');
    overlay.id = 'auth-overlay';
    overlay.innerHTML =
      '<div class="auth-box">' +
      '<div class="auth-logo">🔐</div>' +
      '<div class="auth-title">Acesso Restrito</div>' +
      '<div class="auth-subtitle">Este conteúdo é exclusivo para colaboradores Hotmart.<br>Faça login com sua conta <strong>@hotmart.com</strong></div>' +
      '<button class="auth-btn" id="auth-google-btn">' +
      '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>' +
      'Entrar com Google' +
      '</button>' +
      '<div class="auth-error" id="auth-error"></div>' +
      '</div>';
    document.body.insertBefore(overlay, document.body.firstChild);
  }

  // ── Mostrar user logado na topbar ──
  function showUserInTopbar(u) {
    var topbar = document.querySelector('.topbar-right') || document.querySelector('.topbar');
    if (!topbar) return;
    var bar = document.createElement('div');
    bar.className = 'auth-user-bar';
    bar.innerHTML =
      (u.picture ? '<img src="' + u.picture + '" alt="">' : '') +
      '<span>' + u.name + '</span>' +
      '<button class="auth-logout" id="auth-logout-btn">sair</button>';
    if (topbar.classList.contains('topbar-right')) {
      topbar.insertBefore(bar, topbar.firstChild);
    } else {
      var right = topbar.querySelector('.topbar-right');
      if (right) right.insertBefore(bar, right.firstChild);
      else topbar.appendChild(bar);
    }
    document.getElementById('auth-logout-btn').addEventListener('click', function () {
      clearSession();
      location.reload();
    });
  }

  // ── Decode JWT payload ──
  function decodeJwt(token) {
    try {
      var base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      return JSON.parse(atob(base64));
    } catch (e) { return null; }
  }

  // ── Callback do Google ──
  window.handleGoogleAuth = function (response) {
    var payload = decodeJwt(response.credential);
    if (!payload || !payload.email) {
      showError('Não foi possível verificar sua identidade.');
      return;
    }
    var domain = payload.email.split('@')[1];
    if (domain !== ALLOWED_DOMAIN) {
      showError('Acesso permitido apenas para contas @' + ALLOWED_DOMAIN);
      return;
    }
    var u = { email: payload.email, name: payload.name || payload.email, picture: payload.picture || '' };
    saveSession(u);
    // Remover overlay e mostrar conteúdo
    var overlay = document.getElementById('auth-overlay');
    if (overlay) overlay.remove();
    var content = document.getElementById('app-content');
    if (content) content.classList.remove('auth-hidden');
    showUserInTopbar(u);
  };

  function showError(msg) {
    var el = document.getElementById('auth-error');
    if (el) { el.textContent = msg; el.style.display = 'block'; }
  }

  // ── Init ──
  function init() {
    wrapContent();

    if (user) {
      // Já autenticado
      showUserInTopbar(user);
      return;
    }

    // Não autenticado — mostrar overlay
    createOverlay();

    // Carregar Google Identity Services
    var script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = function () {
      if (typeof google === 'undefined' || !google.accounts) return;
      google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleAuth,
        hosted_domain: ALLOWED_DOMAIN,
        auto_select: true,
      });
      var btn = document.getElementById('auth-google-btn');
      if (btn) {
        btn.addEventListener('click', function () {
          google.accounts.id.prompt(function (notification) {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
              // Fallback: redirect flow
              google.accounts.id.prompt();
            }
          });
        });
      }
    };
    document.head.appendChild(script);
  }

  // Rodar após DOM pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
