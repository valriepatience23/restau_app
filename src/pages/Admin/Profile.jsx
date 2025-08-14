import React, { useEffect, useState } from 'react';
import { fetchMe, updateMe } from '../../services/api';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [me, setMe] = useState({ id: '', name: '', email: '', telephone: '', role: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError('');
      try {
        const data = await fetchMe();
        if (!mounted) return;
        setMe({
          id: data.id,
          name: data.name || '',
          email: data.email || '',
          telephone: data.telephone || '',
          role: data.role || ''
        });
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || 'Erreur de chargement');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');
    try {
      await updateMe({ name: me.name, telephone: me.telephone });
      setSuccess('Profil mis à jour avec succès.');
    } catch (e) {
      setError(e?.message || "Erreur lors de la mise à jour");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container py-3">
      <h4 className="mb-3">Mon profil</h4>
      {loading && <div className="alert alert-info">Chargement...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      {!loading && !error && (
        <div className="row g-3">
          <div className="col-12 col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <form onSubmit={onSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label">Nom</label>
                      <input className="form-control" value={me.name} onChange={e => setMe({ ...me, name: e.target.value })} required />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Téléphone</label>
                      <input className="form-control" value={me.telephone} onChange={e => setMe({ ...me, telephone: e.target.value })} />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Email</label>
                      <input className="form-control" value={me.email} disabled />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label">Rôle</label>
                      <input className="form-control text-capitalize" value={me.role} disabled />
                    </div>
                  </div>
                  <div className="mt-3 d-flex gap-2">
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                      {submitting ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                    <button className="btn btn-light border" type="button" onClick={() => window.history.back()}>Annuler</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body d-flex align-items-center gap-3">
                <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: 56, height: 56, fontSize: 22 }}>
                  {me.name ? me.name.charAt(0).toUpperCase() : '?'}
                </div>
                <div>
                  <div className="fw-semibold">{me.name || '-'}</div>
                  <div className="text-muted small">{me.email}</div>
                  <div><span className={`badge text-capitalize ${me.role === 'admin' ? 'text-bg-success' : 'text-bg-secondary'}`}>{me.role || 'user'}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
