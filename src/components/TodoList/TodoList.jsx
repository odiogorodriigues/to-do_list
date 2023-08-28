import "./index.scss";
import edit from "../../assets/edit.svg";
import deletar from "../../assets/delete.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";

const TodoList = () => {
    let [text, setText] = useState("");
    let [list, setList] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    let [option, setOption] = useState();
    let [index, setIndex] = useState(0); 

    if (isOpen == true) {
        ///Modal
        if (option == "edit") {
            return (
                <div className='Modal_Background'>
                    <div className='Modal'>
                        <h1>Deseja editar esse item?</h1>
                        <p>{list[index.index]}</p>
                        <button className='nao' onClick={() => fecharModal()}>
                            Não
                        </button>
                        <button className='sim' onClick={() => editarTarefa()}>
                            Sim
                        </button>
                    </div>
                </div>
            );
        } else if (option == "delete") {
            return (
                <div className='Modal_Background'>
                    <div className='Modal'>
                        <h1>Deseja excluir esse item?</h1>
                        <p>{list[index.index]}</p>
                        <button className='nao' onClick={() => fecharModal()}>
                            Não
                        </button>
                        <button className='sim' onClick={() => deleteModal()}>
                            Sim
                        </button>
                    </div>
                </div>
            );
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <table>
                <thead>
                    <tr className='Title'>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>

                {list.map((tarefa, index) => (
                    <tbody key={index}>
                        <tr className='Body'>
                            <td style={{ width: "160px" }}>{tarefa}</td>
                            <td>
                                <input type='checkbox' />
                            </td>
                            <td>
                                <img
                                    src={edit}
                                    onClick={() => {
                                        setIsOpen(true);
                                        setOption("edit");
                                        setIndex({ index });
                                    }}
                                />
                                <img
                                    src={deletar}
                                    onClick={() => {
                                        setIsOpen(true);
                                        setOption("delete");
                                        setIndex({ index });
                                    }}
                                />
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>

            <form onSubmit={handleSubmit}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Nova tarefa..'
                    className="input"
                />
                <button onClick={(text) => adicionarTarefa()}>+</button>
            </form>
        </div>
    );

    function adicionarTarefa() {
        if (text != "") {
            setList([...list, text]);
            setText("");
        }
    }

    function fecharModal() {
        setIsOpen(false);
    }

    function deleteModal() {
        const tempList = list;
        tempList.splice(index, 1);
        setList(tempList);
        fecharModal()
    }

    function editarTarefa() {
        setText(list[index.index])
        deleteModal()
    }

};

export default TodoList;
