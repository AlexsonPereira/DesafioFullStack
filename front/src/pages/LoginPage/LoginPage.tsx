import bg from "../../assets/PhotoInitialPage.png"
import { ScreenLogin, SideFormLogin } from "./style"

export const LoginPage = () => {
   return (
      <ScreenLogin>
         <img src={bg} alt="Planta samabaia" />
         <SideFormLogin>
            <div className="BoxLoginForm">
               <h1>ContactAPP</h1>
               <form className="FormLogin" action="">
                  <h2>Login</h2>
                  <label htmlFor="">Email</label>
                  <input placeholder="Insira seu email " type="text" name="" id="" />
                  <label htmlFor="">Senha</label>
                  <input placeholder="Insira sua senha"  type="text" name="" id="" />
                  <div>
                     <button type="submit">Entrar</button>  
                     <p>Ainda não tem cadastro? faça seu registro aqui</p>
                  </div>
               </form>
            </div>
         </SideFormLogin>
      </ScreenLogin>         
   )
}