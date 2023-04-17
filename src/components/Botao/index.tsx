import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<any, any> {

    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
                {
                /* 'children é propriedade padrão do react*/
                /* sem '<any, any> não funciona*/
                }
            </button>
        )
    }
}

export default Botao;
