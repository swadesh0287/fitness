// ClientList.js
import React, { useState } from 'react';
import ClientsRow from './ClientsRow';
import ClientsData from './ClientsData';

const ClientsList = () => {
  const [clients, setClients] = useState(ClientsData);

  const handleUpdate = (updatedClient) => {
    // Find the index of the client in the array
    const index = clients.findIndex((client) => client.id === updatedClient.id);

    // Update the client array with the edited client data
    const updatedClients = [...clients];
    updatedClients[index] = updatedClient;

    // Update the state with the edited client data
    setClients(updatedClients);
  };

  return (
    <div>
      {clients.map((client) => (
        <ClientsRow key={client.id} client={client} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default ClientsList;

