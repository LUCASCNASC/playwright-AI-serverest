import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  readonly request: APIRequestContext;
  readonly baseUrl: string = 'https://serverest.dev';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Métodos que mapeiam as chamadas HTTP
  async getUsers() {
    const response = await this.request.get(`${this.baseUrl}/usuarios`);
    return response;
  }
}