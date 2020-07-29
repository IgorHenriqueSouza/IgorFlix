import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FormField from '../../../components/Carousel/components/FormField';

function CadastroCategoria(){
    const valoresIniciais ={
        nome:'',
        descricao:'',
        cor: '',
    }

    const [categorias,setCategoria] = useState([])
    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })

    }

    function handChange(infosDoEvento){
        setValue(infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
             <h1> Cadastro De Categoria: {values.nome} </h1>

             <form onSubmit={function handsubmit(infosDoEvento){
                 infosDoEvento.preventDefault();
                 setCategoria([
                     ...categorias,
                     values

                 ]);

                 setValues(valoresIniciais)
             }}>

                <FormField 
                label="Nome da Categoria"
                type="colotext"
                name="nome"
               value={values.nome}
               onChange={handChange}
                />

                <FormField 
                    label="Descrição"
                    type="text"
                    name="name"
                    value={values.nome}
                    onChange={handChange}
                />

                <FormField 
                    label="Cor"
                   type="color"
                    name="cor"
                    value={values.nome}
                    onChange={handChange}
                            
                />

                 <button>
                     Cadastrar
                 </button>
             </form>

             <ul>
                 {categorias.map ((categorias, indice) => {
                     return (
                         <li key={`${categorias}${indice}`}>
                             {categorias.nome}
                         </li>
                     )
                 })}
             </ul>

            <Link to="/">
                Ir para a home

            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;