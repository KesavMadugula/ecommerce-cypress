import { registerpage } from "../../Pages/registerpage"
const registerobj= new registerpage()
import registerdata from '../../fixtures/registerdata.json'

describe('test1',()=>{

it('register',()=>{
registerobj.openUrl()
registerobj.enterfirstname(registerdata.firstname)
registerobj.enterlastname(registerdata.Lastname)
registerobj.enterEmail(registerdata.email)
registerobj.enterPassword(registerdata.password)
registerobj.enterConfPassword(registerdata.confpassword)
registerobj.enterSubscribe()
registerobj.enterPrivacyPolicy()
registerobj.entersubmit()
})



})