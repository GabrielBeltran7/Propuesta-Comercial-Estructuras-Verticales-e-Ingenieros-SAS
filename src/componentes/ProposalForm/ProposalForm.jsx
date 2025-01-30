import React, { useState } from 'react';
import styles from './ProposalForm.module.css';

const ProposalForm = ({ onSubmit }) => {
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [serviceDetails, setServiceDetails] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [ref, setRef] = useState('');
  const [objective, setObjective] = useState('');
  const [quote, setQuote] = useState('');
  const [executionTime, setExecutionTime] = useState('');
  const [executionPlace, setExecutionPlace] = useState('');
  const [clientCity, setClientCity] = useState(''); // Nuevo estado para la ciudad

  const formatDate = (inputDate) => {
    if (!inputDate) return '';
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const fecha = new Date(inputDate);
    return `${fecha.getDate()} de ${meses[fecha.getMonth()]} ${fecha.getFullYear()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      clientName,
      clientAddress,
      clientPhone,
      clientEmail,
      serviceDetails,
      amount,
      date: formatDate(date),
      ref,
      objective,
      quote,
      executionTime,
      executionPlace,
      clientCity // Agregar la ciudad al objeto enviado
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <label className={styles.label}>Fecha:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className={styles.input} />
        </label>
        <label className={styles.label}>Cotización:
          <input type="number" value={quote} onChange={(e) => setQuote(e.target.value)} required className={styles.input} />
        </label>
      </div>
      <label className={styles.label}>Nombre del Cliente O Empresa:
        <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} required className={styles.input} />
      </label>
      <label className={styles.label}>Dirección del Cliente:
        <input type="text" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} required className={styles.input} />
      </label>
      <label className={styles.label}>Celular del Cliente:
        <input type="number" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} required className={styles.input} />
      </label>
      <label className={styles.label}>Correo del Cliente:
        <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required className={styles.input} />
      </label>
      <label className={styles.label}>Ciudad del Cliente: {/* Campo para ciudad */}
        <input type="text" value={clientCity} onChange={(e) => setClientCity(e.target.value)} required className={styles.input} />
      </label>
      <label className={styles.label}>Ref:
        <textarea type="text" value={ref} onChange={(e) => setRef(e.target.value)} required className={styles.input} />
      </label>
      <label className={styles.label}>Objetivo de la Propuesta:
        <textarea value={objective} onChange={(e) => setObjective(e.target.value)} required className={styles.textarea} />
      </label>
      <label className={styles.label}>Actividades a Desarrollar:
        <textarea value={serviceDetails} onChange={(e) => setServiceDetails(e.target.value)} required className={styles.textarea} />
      </label>
      <label className={styles.label}>Plazo de Ejecución:
        <textarea type="text" value={executionTime} onChange={(e) => setExecutionTime(e.target.value)} required className={styles.textarea} />
      </label>
      <label className={styles.label}>Lugar de Ejecución:
        <textarea type="text" value={executionPlace} onChange={(e) => setExecutionPlace(e.target.value)} required className={styles.textarea} />
      </label>
      <label className={styles.label}>Valor:
        <textarea type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required className={styles.textarea} />
      </label>

      <button type="submit" className={styles.button}>Generar Propuesta</button>
    </form>
  );
};

export default ProposalForm;

// import React, { useState } from 'react';
// import styles from './ProposalForm.module.css';

// const ProposalForm = ({ onSubmit }) => {
//   const [clientName, setClientName] = useState('');
//   const [clientAddress, setClientAddress] = useState('');
//   const [clientPhone, setClientPhone] = useState('');
//   const [clientEmail, setClientEmail] = useState('');
//   const [serviceDetails, setServiceDetails] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');
//   const [ref, setRef] = useState('');
//   const [objective, setObjective] = useState('');
//   const [quote, setQuote] = useState('');
//   const [executionTime, setExecutionTime] = useState('');
//   const [executionPlace, setExecutionPlace] = useState('');

//   const formatDate = (inputDate) => {
//     if (!inputDate) return '';
//     const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
//     const fecha = new Date(inputDate);
//     return `${fecha.getDate()} de ${meses[fecha.getMonth()]} ${fecha.getFullYear()}`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       clientName,
//       clientAddress,
//       clientPhone,
//       clientEmail,
//       serviceDetails,
//       amount,
//       date: formatDate(date),
//       ref,
//       objective,
//       quote,
//       executionTime,
//       executionPlace
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <div className={styles.row}>
//         <label className={styles.label}>Fecha:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className={styles.input} />
//         </label>
//         <label className={styles.label}>Cotización:
//           <input type="number" value={quote} onChange={(e) => setQuote(e.target.value)} required className={styles.input} />
//         </label>
//       </div>
//       <label className={styles.label}>Nombre del Cliente O Empresa:
//         <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} required className={styles.input} />
//       </label>
//       <label className={styles.label}>Dirección del Cliente:
//         <input type="text" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} required className={styles.input} />
//       </label>
//       <label className={styles.label}>Celular del Cliente:
//         <input type="number" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} required className={styles.input} />
//       </label>
//       <label className={styles.label}>Correo del Cliente:
//         <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required className={styles.input} />
//       </label>
//       <label className={styles.label}>Ref:
//         <textarea type="text"  value={ref} onChange={(e) => setRef(e.target.value)} required className={styles.input} />
//       </label>
//       <label className={styles.label}>Objetivo de la Propuesta:
//         <textarea value={objective} onChange={(e) => setObjective(e.target.value)} required className={styles.textarea} />
//       </label>
//       <label className={styles.label}>Actividades a Desarrollar:
//         <textarea value={serviceDetails} onChange={(e) => setServiceDetails(e.target.value)} required className={styles.textarea} />
//       </label>
//       <label className={styles.label}>Plazo de Ejecución:
//         <textarea type="text" value={executionTime} onChange={(e) => setExecutionTime(e.target.value)} required className={styles.textarea} />
//       </label>
//       <label className={styles.label}>Lugar de Ejecución:
//         <textarea type="text" value={executionPlace} onChange={(e) => setExecutionPlace(e.target.value)} required className={styles.textarea} />
//       </label>
//       <label className={styles.label}>Valor:
//         <textarea type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required className={styles.textarea} />
//       </label>

//       <button type="submit" className={styles.button}>Generar Propuesta</button>
//     </form>
//   );
// };

// export default ProposalForm;

