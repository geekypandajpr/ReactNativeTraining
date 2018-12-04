import { Toast } from 'native-base';

export default functions = {
    showToast
}

export function showToast(message, type) {
    Toast.show({
        text: message,
        buttonText: "Okay",
        type: type
    })
}