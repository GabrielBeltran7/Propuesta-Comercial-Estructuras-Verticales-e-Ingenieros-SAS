
import './App.css'

import React, { useState } from 'react';
import ProposalForm from './componentes/ProposalForm/ProposalForm';
import GenerateProposal from './componentes/GenerateProposal/GenerateProposal';

const App = () => {
  const [proposalData, setProposalData] = useState(null);

  const handleFormSubmit = (data) => {
    setProposalData(data);
  };

  return (
    <div>
      <h1>Generador de Propuestas Comerciales</h1>
      {!proposalData ? (
        <ProposalForm onSubmit={handleFormSubmit} />
      ) : (
        <GenerateProposal proposalData={proposalData} />
      )}
    </div>
  );
};

export default App;

