function showMenu(){cbutton.style.display="block",horNav.classList.toggle("hide"),bbutton.style.display="none"}function hideMenu(){bbutton.style.display="block",horNav.classList.toggle("hide"),cbutton.style.display="none"}function selectData(t){const e=document.getElementById(t);e.classList.toggle("selected")}const horNav=document.getElementById("horNav"),RScreen=window.matchMedia("(max-width:1024px)"),RScreen1=window.matchMedia("(max-width:812px)"),RScreen7=window.matchMedia("(width:768px)"),RScreen2=window.matchMedia("(max-width:700px)"),RScreen3=window.matchMedia("(max-width:600px)"),RScreen4=window.matchMedia("(max-width:450px)"),RScreen5=window.matchMedia("(max-width:400px)"),RScreen6=window.matchMedia("(max-width:350px)"),addTaskCont=document.getElementById("addTaskCont"),taskHeadCont=document.getElementById("taskHeadCont"),profileCont=document.getElementById("profileCont"),profileContMobile=document.getElementById("profileContMobile"),tasksHeader=document.getElementById("tasksHeader"),tasksContent=document.getElementById("tasksContent"),tasksSubContent=document.getElementById("tasksSubContent"),data=document.getElementById("data"),bbutton=document.getElementById("bbutton"),bbutton2=document.getElementById("bbutton2"),bbutton3=document.getElementById("bbutton3"),cbutton=document.getElementById("cbutton"),buttonsgroup=document.getElementById("buttonsgroup"),taskBtns=document.getElementsByClassName("taskBtn");if(bbutton.style.display="none",bbutton2.style.display="none",bbutton3.style.display="none",cbutton.style.display="none",RScreen.matches){var width=window.innerWidth>0?window.innerWidth:screen.width;taskHeadCont.style.width=width,tasksContent.style.width=width,tasksSubContent.style.width="1024px",tasksContent.style.overflow="scroll",bbutton2.style.zIndex="1",horNav.classList.remove("s3"),horNav.classList.add("s7"),horNav.classList.add("hide"),horNav.style.zIndex="2",horNav.style.position="fixed",addTaskCont.classList.add("s12"),addTaskCont.classList.remove("s10"),taskHeadCont.classList.add("s12"),taskHeadCont.classList.remove("s10"),profileCont.classList.add("s12"),profileCont.classList.remove("s10"),profileContMobile.classList.add("s12"),profileContMobile.classList.remove("s10"),bbutton.style.display="block",bbutton2.style.display="block",bbutton3.style.display="block",taskHeadCont.style.overflow="scroll",bbutton.addEventListener("touchstart",showMenu),bbutton2.addEventListener("touchstart",showMenu),bbutton3.addEventListener("touchstart",showMenu),cbutton.addEventListener("touchstart",hideMenu)}if(RScreen1.matches&&(addTaskCont.classList.remove("cont"),addTaskCont.style.height="100%",profileCont.classList.remove("cont"),profileCont.style.height="100%",horNav.classList.remove("nav"),horNav.style.height="100%",profileContMobile.classList.remove("cont"),profileContMobile.style.height="100%",horNav.classList.remove("s3"),horNav.classList.add("s6"),taskBtns[0].style.width="40%",taskBtns[1].style.width="40%",taskBtns[2].style.width="40%",taskBtns[3].style.width="40%",taskBtns[4].style.width="40%",taskBtns[5].style.width="40%"),RScreen2.matches&&(horNav.classList.remove("s3"),horNav.classList.add("s5")),RScreen3.matches){horNav.classList.remove("s3"),horNav.classList.add("s6");const taskInput=document.getElementById("taskInput");taskInput.classList.add("s12"),taskInput.classList.remove("s6");const site=document.getElementById("site");site.classList.add("s12"),site.classList.remove("s6"),site.classList.remove("a4");const backupInput=document.getElementById("backupInput");backupInput.classList.add("s12"),backupInput.classList.remove("s6");const mode=document.getElementById("mode");mode.classList.add("s12"),mode.classList.remove("s6"),mode.classList.remove("a4");const proxyInput=document.getElementById("proxyInput");proxyInput.classList.add("s12"),proxyInput.classList.remove("s6");const proxyLabel=document.getElementById("proxyLabel");proxyLabel.style.fontSize="80%";const billing=document.getElementById("billing");billing.classList.add("s12"),billing.classList.remove("s6"),billing.classList.remove("a4");const sizeQuant=document.getElementById("sizeQuant");sizeQuant.classList.add("s12"),sizeQuant.classList.remove("s6");const sizeInput=document.getElementById("sizeInput");sizeInput.classList.add("s12"),sizeInput.classList.remove("s5");const quantInput=document.getElementById("quantInput");quantInput.classList.add("s12"),quantInput.classList.remove("s5");const pchcks=document.getElementById("pchecks");pchecks.classList.add("s5"),pchecks.classList.remove("s6"),pchecks.classList.remove("a4");const usernameInput=document.getElementById("usernameInput");usernameInput.classList.add("s12"),usernameInput.classList.remove("s5");const usernameLabel=document.getElementById("usernameLabel");usernameLabel.style.fontSize="80%",usernameLabel.style.letterSpacing="2px";const accountPassword=document.getElementById("accountPassword");accountPassword.classList.add("s12"),accountPassword.classList.remove("s6");const accountPasswordLabel=document.getElementById("accountPasswordLabel");accountPasswordLabel.style.fontSize="80%";const addTaskB=document.getElementById("addTaskB");addTaskB.classList.add("s12"),addTaskB.classList.remove("s6");const address1input=document.getElementById("address1input");address1input.classList.add("s12"),address1input.classList.remove("s6");const ccnumberinput=document.getElementById("ccnumberinput");ccnumberinput.classList.add("s12"),ccnumberinput.classList.remove("s6"),ccnumberinput.classList.remove("a4");const address2input=document.getElementById("address2input");address2input.classList.add("s12"),address2input.classList.remove("s6");const ccnameinput=document.getElementById("ccnameinput");ccnameinput.classList.add("s12"),ccnameinput.classList.remove("s6"),ccnameinput.classList.remove("a4");const cityInput=document.getElementById("cityInput");cityInput.classList.add("s12"),cityInput.classList.remove("s4");const zcodeInput=document.getElementById("zcodeInput");zcodeInput.classList.add("s12"),zcodeInput.classList.remove("s2");const expdateInput=document.getElementById("expdateInput");expdateInput.classList.add("s6"),expdateInput.classList.remove("s2"),expdateInput.classList.remove("a4");const expdateLabel=document.getElementById("expdateLabel");expdateLabel.style.fontSize="80%";const cvvInput=document.getElementById("cvvInput");cvvInput.classList.add("s6"),cvvInput.classList.remove("s2");const countryandstate=document.getElementById("countryandstate");countryandstate.classList.add("s12"),countryandstate.classList.remove("s6");const countryInput=document.getElementById("countryInput");countryInput.classList.add("s12"),countryInput.classList.remove("s6");const stateInput=document.getElementById("stateInput");stateInput.classList.add("s12"),stateInput.classList.remove("s6");const emailInput=document.getElementById("emailInput");emailInput.classList.add("s12"),emailInput.classList.remove("s6"),emailInput.classList.remove("a4");const firstlastnameInput=document.getElementById("firstlastnameInput");firstlastnameInput.classList.add("s12"),firstlastnameInput.classList.remove("s6");const firstnameInput=document.getElementById("firstnameInput");firstnameInput.classList.add("s12"),firstnameInput.classList.remove("s6");const lastnameInput=document.getElementById("lastnameInput");lastnameInput.classList.add("s12"),lastnameInput.classList.remove("s6");const oneUseInput=document.getElementById("oneUseInput");oneUseInput.classList.add("s12"),oneUseInput.classList.remove("s6"),oneUseInput.classList.remove("a4");const profileEditInput=document.getElementById("profileEditInput");profileEditInput.classList.add("s12"),profileEditInput.classList.remove("s8");const profileInput=document.getElementById("profileInput");profileInput.classList.add("s12"),profileInput.classList.remove("s6");const editInput=document.getElementById("editInput");editInput.classList.add("s12"),editInput.classList.remove("s6");const buttonsInput=document.getElementById("buttonsInput");buttonsInput.classList.add("s12"),buttonsInput.classList.remove("s8");const fBInput=document.getElementById("fBInput");fBInput.classList.add("s12"),fBInput.classList.remove("s5");const sBInput=document.getElementById("sBInput");sBInput.classList.add("s6"),sBInput.classList.remove("s3"),sBInput.classList.remove("a2");const tBInput=document.getElementById("tBInput");tBInput.classList.add("s6"),tBInput.classList.remove("s3"),tBInput.classList.remove("a1");const address1inputMobile=document.getElementById("address1inputMobile");address1inputMobile.classList.add("s12"),address1inputMobile.classList.remove("s6");const ccnumberinputMobile=document.getElementById("ccnumberinputMobile");ccnumberinputMobile.classList.add("s12"),ccnumberinputMobile.classList.remove("s6"),ccnumberinputMobile.classList.remove("a4");const address2inputMobile=document.getElementById("address2inputMobile");address2inputMobile.classList.add("s12"),address2inputMobile.classList.remove("s6");const ccnameinputMobile=document.getElementById("ccnameinputMobile");ccnameinputMobile.classList.add("s12"),ccnameinputMobile.classList.remove("s6"),ccnameinputMobile.classList.remove("a4");const cityInputMobile=document.getElementById("cityInputMobile");cityInputMobile.classList.add("s12"),cityInputMobile.classList.remove("s4");const zcodeInputMobile=document.getElementById("zcodeInputMobile");zcodeInputMobile.classList.add("s12"),zcodeInputMobile.classList.remove("s2");const expdateInputMobile=document.getElementById("expdateInputMobile");expdateInputMobile.classList.add("s6"),expdateInputMobile.classList.remove("s2"),expdateInputMobile.classList.remove("a4");const expdateLabelMobile=document.getElementById("expdateLabelMobile");expdateLabelMobile.style.fontSize="80%";const cvvInputMobile=document.getElementById("cvvInputMobile");cvvInputMobile.classList.add("s6"),cvvInputMobile.classList.remove("s2");const countryandstateMobile=document.getElementById("countryandstateMobile");countryandstateMobile.classList.add("s12"),countryandstateMobile.classList.remove("s6");const countryInputMobile=document.getElementById("countryInputMobile");countryInputMobile.classList.add("s12"),countryInputMobile.classList.remove("s6");const stateInputMobile=document.getElementById("stateInputMobile");stateInputMobile.classList.add("s12"),stateInputMobile.classList.remove("s6");const emailInputMobile=document.getElementById("emailInputMobile");emailInputMobile.classList.add("s12"),emailInputMobile.classList.remove("s6"),emailInputMobile.classList.remove("a4");const firstlastnameInputMobile=document.getElementById("firstlastnameInputMobile");firstlastnameInputMobile.classList.add("s12"),firstlastnameInputMobile.classList.remove("s6");const firstnameInputMobile=document.getElementById("firstnameInputMobile");firstnameInputMobile.classList.add("s12"),firstnameInputMobile.classList.remove("s6");const lastnameInputMobile=document.getElementById("lastnameInputMobile");lastnameInputMobile.classList.add("s12"),lastnameInputMobile.classList.remove("s6");const oneUseInpuMobilet=document.getElementById("oneUseInputMobile");oneUseInputMobile.classList.add("s12"),oneUseInputMobile.classList.remove("s6"),oneUseInputMobile.classList.remove("a4");const profileEditInputMobile=document.getElementById("profileEditInputMobile");profileEditInputMobile.classList.add("s12"),profileEditInputMobile.classList.remove("s8");const profileInputMobile=document.getElementById("profileInputMobile");profileInputMobile.classList.add("s12"),profileInputMobile.classList.remove("s6");const editInputMobile=document.getElementById("editInputMobile");editInputMobile.classList.add("s12"),editInputMobile.classList.remove("s6");const buttonsInputMobile=document.getElementById("buttonsInputMobile");buttonsInputMobile.classList.add("s12"),buttonsInputMobile.classList.remove("s8");const fBInputMobile=document.getElementById("fBInputMobile");fBInputMobile.classList.add("s12"),fBInputMobile.classList.remove("s5");const sBInputMobile=document.getElementById("sBInputMobile");sBInputMobile.classList.add("s6"),sBInputMobile.classList.remove("s3"),sBInputMobile.classList.remove("a2");const tBInputMobile=document.getElementById("tBInputMobile");tBInputMobile.classList.add("s6"),tBInputMobile.classList.remove("s3"),tBInputMobile.classList.remove("a1")}RScreen4.matches&&(horNav.classList.remove("s3"),horNav.classList.add("s7")),RScreen5.matches&&(buttonsgroup.style.top="100%",taskBtns[0].style.width="80%",taskBtns[1].style.width="80%",taskBtns[2].style.width="80%",taskBtns[3].style.width="80%",taskBtns[4].style.width="80%",taskBtns[5].style.width="80%",horNav.classList.remove("s3"),horNav.classList.add("s8")),RScreen6.matches&&(horNav.classList.remove("s3"),horNav.classList.add("s9")),RScreen7.matches&&(addTaskCont.style.height="87vh",taskHeadCont.style.height="87vh",profileCont.style.height="87vh",horNav.style.height="87vh");
