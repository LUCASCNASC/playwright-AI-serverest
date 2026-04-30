import { test, expect } from '@playwright/test';
import { ApiClient } from '../../support/api-client';

test.describe('Users API - ServeRest', () => {
  test('deve retornar a lista de usuários', async ({ request }) => {
    const apiClient = new ApiClient(request);
    const response = await apiClient.getUsers();
    
    expect(response.status()).toBe(200);
    // const body = await response.json();
  });
});