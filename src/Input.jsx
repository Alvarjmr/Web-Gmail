function Input() {
  return (
    <>
      <div className="App">
       
          <form>
            <input type="text" placeholder="Correo electronico o Teléfono "/>
            <p className="coloL">¿Has olvidado tu correo electronico?</p>
            <p>¿No es tu ordenador?Usa el modo invitado para iniciar sesion de forma privada</p>
            <p className="coloL">Mas informacion de como usar el modo invitado</p>
            </form>
            
        </div>
        <button type="button" className="crear">Crea cuenta</button><button type="button" className="siguiente">Siguiente</button>
      
    </>
  );
}

export default Input;
