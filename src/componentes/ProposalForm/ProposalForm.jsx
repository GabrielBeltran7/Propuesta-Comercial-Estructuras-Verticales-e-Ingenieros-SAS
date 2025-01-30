import React, { useState, useEffect } from 'react';
import styles from './ProposalForm.module.css';

const ProposalForm = ({ onSubmit }) => {
  const initialState = JSON.parse(localStorage.getItem("proposalForm")) || {
    clientName: '',
    clientCompany: '',
    clientAddress: '',
    clientPhone: '',
    clientEmail: '',
    serviceDetails: '',
    amount: '',
    date: '',
    ref: '',
    objective: '',
    quote: '',
    executionTime: '',
    executionPlace: '',
    clientCity: ''
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("proposalForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formatDate = (inputDate) => {
    if (!inputDate) return '';
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const fecha = new Date(inputDate);
    return `${fecha.getDate()} de ${meses[fecha.getMonth()]} ${fecha.getFullYear()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, date: formatDate(formData.date) });
    setFormData(initialState);
    localStorage.removeItem("proposalForm");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <label className={styles.label}>Fecha:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required className={styles.input} />
        </label>
        <label className={styles.label}>Cotización:
          <input type="number" name="quote" value={formData.quote} onChange={handleChange} required className={styles.input} />
        </label>
      </div>
      <label className={styles.label}>Nombre Empresa:
        <input type="text" name="clientCompany" value={formData.clientCompany} onChange={handleChange} required className={styles.input} />
      </label>
      <label className={styles.label}>Nombre del Representante Legal:
        <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} required className={styles.input} />
      </label>
      <label className={styles.label}>Dirección del Cliente:
        <input type="text" name="clientAddress" value={formData.clientAddress} onChange={handleChange} required className={styles.input} />
      </label>
      <label className={styles.label}>Celular del Cliente:
        <input type="number" name="clientPhone" value={formData.clientPhone} onChange={handleChange} required className={styles.input} />
      </label>
      <label className={styles.label}>Correo del Cliente:
        <input type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} required className={styles.input} />
      </label>
      <label className={styles.label}>Ciudad del Cliente:
        <input type="text" name="clientCity" value={formData.clientCity} onChange={handleChange} required className={styles.input} />
      </label>
      <label className={styles.label}>Referencia:
        <textarea name="ref" value={formData.ref} onChange={handleChange} required className={styles.input} />
      </label>
      <label className={styles.label}>Objetivo de la Propuesta:
        <textarea name="objective" value={formData.objective} onChange={handleChange} required className={styles.textarea} />
      </label>
      <label className={styles.label}>Actividades a Desarrollar:
        <textarea name="serviceDetails" value={formData.serviceDetails} onChange={handleChange} required className={styles.textarea} />
      </label>
      <label className={styles.label}>Plazo de Ejecución:
        <textarea name="executionTime" value={formData.executionTime} onChange={handleChange} required className={styles.textarea} />
      </label>
      <label className={styles.label}>Lugar de Ejecución:
  <textarea name="executionPlace" value={formData.clientCompany} readOnly className={styles.textarea} />
</label>
      <label className={styles.label}>Valor:
        <textarea name="amount" value={formData.amount} onChange={handleChange} required className={styles.textarea} />
      </label>
      <button type="submit" className={styles.button}>Generar Propuesta</button>
    </form>
  );
};

export default ProposalForm;
