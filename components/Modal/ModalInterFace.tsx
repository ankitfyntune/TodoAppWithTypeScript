interface ModalInterFace {
    visible: boolean,
    input: string,
    setInput: (text: string) => void,
    addTodo: () => void,
    setVisible: (visible: boolean) => void
}
export default ModalInterFace;