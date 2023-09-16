import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getClients() {
    return this.clientService.findAll();
  }

  @Get(':id')
  getClientById(@Param('id', ParseIntPipe) id: number) {
    const client = this.clientService.findById(id);
    if (!client) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    return client;
  }

  @Post()
  createClient(@Body() clientData: any) {
    return this.clientService.create(clientData);
  }

  @Put(':id')
  updateClient(@Param('id', ParseIntPipe) id: number, @Body() updatedClientData: any) {
    const updatedClient = this.clientService.updateClient(id, updatedClientData);
    if (!updatedClient) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    return updatedClient;
  }

  @Delete(':id')
  deleteClient(@Param('id', ParseIntPipe) id: number) {
    const deletedClient = this.clientService.deleteClient(id);
    if (!deletedClient) {
      throw new NotFoundException(`Client with id ${id} not found`);
    }
    return { message: `Client with id ${id} deleted successfully` };
  }
}
