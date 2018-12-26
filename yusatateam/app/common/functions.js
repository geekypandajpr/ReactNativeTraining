import { Toast } from 'native-base';

export default functions = {
    showToast
}

/**NativeBase Toast can be used to display quick warning or error messages */
export function showToast(message, type) {
    Toast.show({
        text: message,
        buttonText: "Ok",
        type: type,
        duration: 5000
    })
}