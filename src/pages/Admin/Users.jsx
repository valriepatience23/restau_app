import React, { useEffect, useMemo, useState } from 'react';
import { listUsers, createUserAdmin, updateUserAdmin, deleteUserAdmin } from '../../services/api';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { toast } from 'react-toastify';

const initialForm = { name: '', email: '', telephone: '', role: 'user', password: '' };

function Users() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  async function load() {
    setLoading(true);
    setError('');
    try {
      const rows = await listUsers();
      setItems(Array.isArray(rows) ? rows : []);
    } catch (e) {
      const msg = e?.message || 'Erreur de chargement';
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(u =>
      String(u.id).includes(q) ||
      (u.name || '').toLowerCase().includes(q) ||
      (u.email || '').toLowerCase().includes(q) ||
      (u.telephone || '').toLowerCase().includes(q) ||
      (u.role || '').toLowerCase().includes(q)
    );
  }, [items, query]);

  function openCreate() {
    setEditingId(null);
    setForm(initialForm);
    setShowForm(true);
  }

  function openEdit(row) {
    setEditingId(row.id);
    setForm({ name: row.name || '', email: row.email || '', telephone: row.telephone || '', role: row.role || 'user', password: '' });
    setShowForm(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      if (editingId) {
        const payload = { name: form.name, email: form.email, telephone: form.telephone, role: form.role };
        if (form.password) payload.password = form.password;
        await updateUserAdmin(editingId, payload);
        toast.success('Utilisateur modifié avec succès');
      } else {
        await createUserAdmin(form);
        toast.success('Utilisateur créé avec succès');
      }
      setShowForm(false);
      await load();
    } catch (e2) {
      const msg = e2?.message || 'Erreur lors de la sauvegarde';
      setError(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Supprimer cet utilisateur ?')) return;
    try {
      await deleteUserAdmin(id);
      await load();
    } catch (e) {
      alert(e?.message || 'Erreur lors de la suppression');
    }
  }

  return (
    <div className="container py-3">
      <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-3">
        <h4 className="m-0">Utilisateurs</h4>
        <div className="d-flex gap-2 align-items-center">
          <div className="input-group">
            <span className="input-group-text bg-white"><Search size={16} className="opacity-75"/></span>
            <input
              className="form-control"
              placeholder="Rechercher (nom, email, rôle)"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button className="btn btn-success d-flex align-items-center gap-2" onClick={openCreate}>
            <Plus size={18}/> Nouveau
          </button>
        </div>
      </div>

      {loading && <div className="alert alert-info">Chargement...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr className="table-light">
                  <th>#</th>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Rôle</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={6} className="text-center text-muted">Aucun utilisateur</td></tr>
                ) : (
                  filtered.map(u => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>{u.telephone || '-'}</td>
                      <td>
                        <span className={`badge text-capitalize ${u.role === 'admin' ? 'text-bg-success' : 'text-bg-secondary'}`}>{u.role}</span>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-outline-primary me-2 d-inline-flex align-items-center gap-1" onClick={() => openEdit(u)}>
                          <Edit size={16}/>
                        </button>
                        <button className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1" onClick={() => handleDelete(u.id)}>
                          <Trash2 size={16}/>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showForm && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,.4)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingId ? 'Modifier' : 'Créer'} un utilisateur</h5>
                <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label">Nom</label>
                      <input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Téléphone</label>
                      <input className="form-control" value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Rôle</label>
                      <select className="form-select" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
                        <option value="utilisateur">utilisateur</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Mot de passe {editingId && <small className="text-muted">(laisser vide pour ne pas changer)</small>}</label>
                      <input type="password" className="form-control" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} {...(editingId ? {} : { required: true })} />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-light border" onClick={() => setShowForm(false)}>Annuler</button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? 'Enregistrement...' : 'Enregistrer'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;