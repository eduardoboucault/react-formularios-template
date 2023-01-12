import { useState } from "react";

export default function useForm(initialState) {

    //* Criar um estado padrão para criação de estados novos;

    //* Estado inicial será um objeto para receber mais de uma informação nos argumentos;

    const [form, setForm] = useState(initialState)

    //* Criar uma função padrão que controla a alteração do estado e retornar o estado inicial;

    //* Spread atualiza estado em React;

    //* Toda atualização de estado através de array ou objetos, temos que fazer em uma cópia(spread);

    const onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name
        setForm({ ...form, [name]: value })
    }

    //* Retornando estado e função;

    return { form, onChange };

}