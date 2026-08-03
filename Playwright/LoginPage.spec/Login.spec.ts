import {test, expect} from '@playwright/test';
import {LoginPage} from '../LoginPage/LoginPage';

test('TC_LP_001 - Login with valid values', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('','');
  expect(page.locator('text="Logged In Successfully"')).toBeTruthy();
});

test('TC_LP_002 - Login with valid  username and invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','pAsSword14587');
    
});

test('TC_LP_003 - Login with invalid  username and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('studentik','Password123');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_004 - Login without username, but with correct password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('','Password123');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_005 - Login with correct username, but without password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_006 - Login without username and password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('','');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_007 - Login with valid uppercase username and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('STUDENT','Password123');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_008 - Login with valid username and valid uppercase password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','PASSWORD123');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_009 - Login with valid username and valid password with empty space at the end of these correct values', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student ','Password123 ');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_010 - Login with valid username and invalid password, but password will have +20 letters', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','WrongPassworddaeefwsdfrethnbghfewbr');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_011 - Login with valid lowercase username and valid lowercase password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','password123');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_012 - Login with valid lowercase username and valid lowercase password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','wrongpassword');
  await expect(page.locator('#error')).toBeVisible();
});

test('TC_LP_013 - Login with valid username and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','Password123');
  await loginPage.logout();
});

test('TC_LP_014 - Login with valid username and valid password coppied from documents', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','Password123');
  await loginPage.logout();
});

test('TC_LP_015 - Login with valid username and valid password and then  clicking on "submit" button 10-times', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','Password123');
  await loginPage.logout();
});

test('TC_LP_016 - Login with valid username and valid password, then logout from the website', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoUrl();
  await loginPage.login('student','Password123');
  await loginPage.logout();
});