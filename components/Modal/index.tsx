import { Modal as ReactModal, View, Button, TextInput, StyleSheet } from "react-native";
import ModalInterFace from "./ModalInterFace";
const Modal: React.FC<ModalInterFace> =
    ({ visible, input, setInput, addTodo, setVisible }) => {
        return (
            <ReactModal
                animationType="slide"
                visible={visible}
            >
                <View style={styles.modal}>
                    <TextInput
                        style={styles.textarea}
                        placeholder='Todo...'
                        value={input}
                        onChangeText={setInput}
                    />
                    <View style={styles.buttonView}>
                        <View style={styles.button}>
                            <Button title="Cancel" onPress={() => setVisible(false)} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Add Todo" onPress={addTodo} />
                        </View>
                    </View>
                </View>
            </ReactModal>
        )
    }

export default Modal;

const styles = StyleSheet.create({
    textarea: {
        marginVertical: 10,
        borderWidth: 1,
        padding: 5,
        width: "100%"
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    buttonView: {
        flexDirection: "row",
    },
    button: {
        width: "50%",
        marginHorizontal: 10
    }
})