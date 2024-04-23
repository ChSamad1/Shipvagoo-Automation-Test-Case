exports.loginPage = class loginPage{

    constructor(page){
        this.page = page;
        this.logo = page.locator('.image-logo')
        this.emailAddress = page.getByRole('textbox',{name: 'Username'})
        this.password = page.getByRole('textbox',{name: 'Password'})
        this.loginButton = page.locator('.q-focus-helper')
        this.updateButton = page.locator('.q-btn.q-btn-item.non-selectable.no-outline.q-btn--standard.q-btn--rectangle.bg-primary.text-white.q-btn--actionable.q-focusable.q-hoverable')
        
        
    }
    async gotoLoginPage(){
        await this.page.goto('/')
         
    }
    async Login(email,password){
            await this.emailAddress.fill(email)
            await this.password.fill(password)
            await this.loginButton.click()

    }

}