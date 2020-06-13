// ========================== Funciones pokebank

//Consulta obtencion de tabla movimientos
const getTableM = async () => {
  const divTabla = $("#tableMovimientos");
  const tabla = await $.ajax({ url: "php/tabla.php" });
  divTabla.html(tabla);
  $("#dataTable").DataTable();
};

// Funcion Deposito
const deposito = () => {
  Swal.fire({
    title: "DEPOSITAR EN CUENTA CORRIENTE",
    info: "info",
    showCancelButton: true,
    confirmButtonText: "Depositar",
    html: `
    <div class="form-group">
    <input type="text" placeholder="Ingresa cantidad"  class="form-control" id="deposito">
    </div>`,
    onOpen: function () {
      //Crear mascara
      $("#deposito").mask("000,000,000,000,000.00", {
        reverse: true,
      });
    },
    preConfirm: () => {
      const valor = $("#deposito").val().replace(",", "");
      return valor;
    },
  }).then(async (result) => {
    if (result.value) {
      console.log("Cantidad a depositar" + result.value);
      const data = {
        operacion: "Deposito",
        saldo: result.value,
        fecha: getTodayDate(),
      };
      const add = await $.ajax({
        url: `php/ingresar.php`,
        type: "POST",
        data: data,
      });
      console.log(add);
      getTableM();
      AlertaExito()
    }
  });
};

// Funcion Retiro
const retiro = () => {
  Swal.fire({
    title: "RETIRAR EN CUENTA CORRIENTE",
    info: "info",
    showCancelButton: true,
    confirmButtonText: "Retirar",
    html: `
    <div class="form-group">
    <input type="text" placeholder="Ingresa cantidad"  class="form-control" id="retiro">
    </div>`,
    onOpen: function () {
      //Crear mascara
      $("#retiro").mask("000,000,000,000,000.00", {
        reverse: true,
      });
    },
    preConfirm: () => {
      const valor = $("#retiro").val().replace(",", "");
      return valor;
    },
  }).then(async (result) => {
    if (result.value) {
      console.log("Cantidad a retirar" + result.value);
      const data = {
        operacion: "Retiro",
        saldo: result.value,
        fecha: getTodayDate(),
      };
      const add = await $.ajax({
        url: `php/ingresar.php`,
        type: "POST",
        data: data,
      });
      console.log(add);
      getTableM();
      AlertaExito()
    }
  });
};




// Funcion pago de servicios
const servicios = () => {
  Swal.fire({
    title: "PAGO DE SERVICIOS INGRESAR NIC.",
    info: "info",
    showCancelButton: true,
    confirmButtonText: "Retirar",
    html: `
    <div class="form-group">
    <input type="text" placeholder="Ingresa NIC"  class="form-control" id="nic">
    </div>`,
  }).then((result) => {
    if (result.value) {
        Swal.fire({
          title: "Pago de servicios",
          text: "Tu recibo de luz es de $70.40",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Si, Pagar ahora",
        }).then(async(result) => {
          if (result.value) {
                const data = {
                  operacion: "Pago de Servicios",
                  saldo: 70.40,
                  fecha: getTodayDate(),
                };
                const add = await $.ajax({
                  url: `php/ingresar.php`,
                  type: "POST",
                  data: data,
                });
                console.log(add);
                getTableM();
                AlertaExito()
          }
        });
    }
  });
};




// =================================================== Helpers
//Retorna fecha actual
const getTodayDate = () => {
  let date = new Date();
  let m = ("0" + (date.getMonth() + 1)).slice(-2);
  let d = date.getDay();
  let y = date.getFullYear();
  return `${d}/${m}/${y}`;
};


//Alerta de exito
const AlertaExito = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "success",
    title: "Operación exitosa",
  });
};



//Carga de pagina
$(document).ready(function () {
  getTableM();
});
