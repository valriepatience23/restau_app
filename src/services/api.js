// Simple API client using fetch; no external deps
const BASE_URL = (import.meta?.env?.VITE_API_BASE_URL) || 'http://localhost:3000/api';

function getHeaders(auth = false) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

async function request(path, { method = 'GET', body, auth = false } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: getHeaders(auth),
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || data?.error || res.statusText;
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export async function login(email, password) {
  const data = await request('/auth/login', { method: 'POST', body: { email, password } });
  if (data?.token) localStorage.setItem('token', data.token);
  if (data?.user) localStorage.setItem('user', JSON.stringify(data.user));
  return data;
}

export async function register({ name, telephone, email, password }) {
  const payload = { name, telephone, email, password };
  const data = await request('/auth/register', { method: 'POST', body: payload });
  if (data?.token) localStorage.setItem('token', data.token);
  if (data?.user) localStorage.setItem('user', JSON.stringify(data.user));
  return data;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export async function forgotPassword(email) {
  return await request('/auth/forgot-password', { method: 'POST', body: { email } });
}

export async function resetPassword(email, code, newPassword) {
  return await request('/auth/reset-password', { 
    method: 'POST', 
    body: { email, code, newPassword } 
  });
}

export function getCurrentUser() {
  const raw = localStorage.getItem('user');
  try { return raw ? JSON.parse(raw) : null; } catch { return null; }
}
