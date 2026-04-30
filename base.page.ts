import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Exemplo de método genérico útil para todas as páginas
  async navigateTo(path: string) {
    await this.page.goto(path);
  }
}