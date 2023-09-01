
class Pessoa {
    constructor(name, CPF, endereço, email, telefone = null) {
      this.name = name;
      this.CPF = CPF;
      this.endereço = endereço;
      this.email = email;
      this.telephone = telefone;
    }
  }
  


  class estudante extends Pessoa {
    imprimirInformaçao() {
      console.log(`Name: ${this.name}`);
      console.log(`CPF: ${this.CPF}`);
      console.log(`endereço: ${this.endereço}`);
      console.log(`E-mail: ${this.email}`);
      if (this.telefone === null) {
        console.log("sem telefone cadastrado");
      } else {
        console.log(`telefone: ${this.telefone}`);
      }
    }
  }
  
  
  const Aderbal = new Pessoa(
    "Aderbal",
    "01234567891",
    "Rua dos bobos nº 0",
    "aderbal@ifms.edu.br",
    "67999996666"
  );
  
  const Adrasteia = new estudante(
    "Adrasteia",
    "32132132100",
    "Rua nome da rua nº 200",
    "adrasteia@ifms.edu.br"
  );
  
  
  Adrasteia.imprimirInformaçao();
  



