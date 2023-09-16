import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientService {
  private clients = [
    {
      id: 1,
      nombre: 'cliente 1',
      direccion: 'direccion 1',
    },
    {
      id: 2,
      nombre: 'cliente 2',
      direccion: 'direccion 2',
    },
  ];

  findAll() {
    return this.clients;
  }

  findById(id: number) {
    const client = this.clients.find((c) => c.id === id);
    if (!client) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    return client;
  }

  create(clientData: any) {
    const newClient = {
      id: this.clients.length + 1, // Assign a new ID
      ...clientData,
    };
    this.clients.push(newClient);
    return newClient;
  }

  updateClient(id: number, updatedClientData: any) {
    const clientIndex = this.clients.findIndex((c) => c.id === id);
    if (clientIndex === -1) {
      return null; // Return null if client is not found
    }
    this.clients[clientIndex] = { ...this.clients[clientIndex], ...updatedClientData };
    return this.clients[clientIndex];
  }

  deleteClient(id: number) {
    const clientIndex = this.clients.findIndex((c) => c.id === id);
    if (clientIndex === -1) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    const deletedClient = this.clients.splice(clientIndex, 1)[0];
    return deletedClient;
  }
}
