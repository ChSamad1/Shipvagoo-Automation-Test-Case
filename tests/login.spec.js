const {test,expect} = require('@playwright/test')
const { loginPage } = require('../pages/login.page')
const staticData = require('../data/staticData')


test('Login Validation with valid credentials', async({page}) =>{

    //login Page
    const login = new loginPage(page)
     await login.gotoLoginPage()
     await expect(login.logo).toBeVisible()
     await login.Login(staticData.email,staticData.password)
     await login.updateButton.click()
    

          
          

     
    

})












