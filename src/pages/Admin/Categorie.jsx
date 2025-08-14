import React, { useEffect, useMemo, useState } from 'react';
import { listCategories, createCategoryAdmin, updateCategoryAdmin, deleteCategoryAdmin } from '../../services/api';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { toast } from 'react-toastify';

const initialForm = { nom: '', description: '' };

export default function Categorie() {
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
      const rows = await listCategories();
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
    return items.filter(c =>
      String(c.id_categorie).includes(q) ||
      (c.nom || '').toLowerCase().includes(q) ||
      (c.description || '').toLowerCase().includes(q)
    );
  }, [items, query]);

  function openCreate() {
    setEditingId(null);
    setForm(initialForm);
    setShowForm(true);
  }

  function openEdit(row) {
    setEditingId(row.id_categorie);
    setForm({ nom: row.nom || '', description: row.description || '' });
    setShowForm(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      if (editingId) {
        await updateCategoryAdmin(editingId, form);
        toast.success('Catégorie modifiée avec succès');
      } else {
        await createCategoryAdmin(form);
        toast.success('Catégorie créée avec succès');
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
    if (!window.confirm('Supprimer cette catégorie ?')) return;
    try {
      await deleteCategoryAdmin(id);
      toast.success('Catégorie supprimée');
      await load();
    } catch (e) {
      const msg = e?.message || 'Erreur lors de la suppression';
      toast.error(msg);
    }
  }

  return (
    <div className="container py-3">
      <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-3">
        <h4 className="m-0">Catégories</h4>
        <div className="d-flex gap-2 align-items-center">
          <div className="input-group">
            <span className="input-group-text bg-white"><Search size={16} className="opacity-75"/></span>
            <input
              className="form-control"
              placeholder="Rechercher (nom, description)"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button className="btn btn-success d-flex align-items-center gap-2" onClick={openCreate}>
            <Plus size={18}/> Nouvelle
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
                  <th>Description</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={4} className="text-center text-muted">Aucune catégorie</td></tr>
                ) : (
                  filtered.map(c => (
                    <tr key={c.id_categorie}>
                      <td>{c.id_categorie}</td>
                      <td className="fw-semibold">{c.nom}</td>
                      <td className="text-muted">{c.description || '-'}</td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-outline-primary me-2 d-inline-flex align-items-center gap-1" onClick={() => openEdit(c)}>
                          <Edit size={16}/>
                        </button>
                        <button className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1" onClick={() => handleDelete(c.id_categorie)}>
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
                <h5 className="modal-title">{editingId ? 'Modifier' : 'Créer'} une catégorie</h5>
                <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Nom</label>
                      <input className="form-control" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Description</label>
                      <textarea className="form-control" rows="3" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
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
