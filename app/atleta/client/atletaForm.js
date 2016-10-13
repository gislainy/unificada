Template.atletaForm.helpers({
  cursoCod(){
    var curso = Template.instance().data ? Template.instance().data : ''; 
    if(this.value == curso)
      return 'selected';
  },
  cursosoptions(){
    return [
      {
        value: 1,
        nome: 'Ciência da Computação'
      },
      {
        value: 2,
        nome: 'Engenharia de software'
      },
      {
        value: 3,
        nome: 'Sistema de Informação'
      },
    ];
  }
});    
