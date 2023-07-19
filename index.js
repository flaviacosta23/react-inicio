function Perfil(props) {

    const tituloPagina = <h1>Olá,<br />meu nome é<br />{props.meuNome}!</h1>;
    const minhaFoto = <img src={props.arquivoFoto} className="inline_img"></img>;
  
    const perfilContent = (
      <div>
        <div className="nome">
          {tituloPagina}
        </div>
        <div>
          {minhaFoto}
        </div>
      </div>);
  
    return perfilContent;
  }

  function Bio() {
    const minibio = <div className='minibio'>
        Flávia Costa, formada em administração, mas encontrou na programação um caminho <br/>
        para colocar em prática sua criatividade e o gosto pela tecnologia. 
    </div>
    return minibio;
  }

  function LinkLinkedin() {
    return (<div className='linkedin'>
        <a href='#' target='_blank'>Linkedin</a>
    </div>);
  }
  
  function Content() {
    return (
    <div>
    <Perfil meuNome="Flávia Costa" arquivoFoto='perfilfoto.jpg' />
    <br />
    <Bio />
    <br/> <br/>
    <LinkLinkedin/>

    </div>);
  }
ReactDOM.render(
  <Content/>,
    document.getElementById('root')
);