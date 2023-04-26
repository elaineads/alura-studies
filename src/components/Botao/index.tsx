import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{type?: 'button' | 'submit' | 'reset' | undefined, children: any}> {

    render() {
        const { type = 'button'} = this.props;
        return (
            <button type={type} className={style.botao}>
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
