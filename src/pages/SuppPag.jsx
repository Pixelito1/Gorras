function SuppPage() {
  return (
    <form>
      <div>
        <label for="nombreapellido">Nombre y Apellido</label>
        <input type="text" id="nombreapellido" />
        <label for="correoelectronico">Correo Electrónico</label>
        <input type="text" id="correoelectronico" />

        <label for="telefono">Teléfono</label>
        <input type="text" id="telefono" />

        <input type="submit" value="Enviar formulario" />
      </div>
    </form>
  );
}

export default SuppPage;
