import { reregister } from "../../Pages/reregister";

const reobj= new reregister;

import registerdata from '../../fixtures/reregister.json'

describe('checking re registration',()=>{

it('re register',()=>{

    reobj.openUrl()
    reobj.clickonregister()
    reobj.enterfirstname(registerdata.firstname)
    reobj.enterlastname(registerdata.Lastname)
    reobj.enterEmail(registerdata.email)
    reobj.enterPassword(registerdata.password)
    reobj.enterConfPassword(registerdata.confpassword)
    reobj.enterSubscribe()
    reobj.enterPrivacyPolicy()
    reobj.entersubmit()
    reobj.warningmessage()

})







})