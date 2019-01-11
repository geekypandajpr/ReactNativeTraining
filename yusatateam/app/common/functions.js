import { Toast } from 'native-base';

export default functions = {
    showToast,
    saveCredentials,
    getCredentials,
    deleteCredentials
}

/**NativeBase Toast can be used to display quick warning or error messages */
export function showToast(message, type) {
    Toast.show({
        text: message,
        buttonText: "Ok",
        type: type,
        duration: 3000
    })
}

async function saveCredentials(key, value){
    await Expo.SecureStore.setItemAsync(key, value)
    .then((res) => {
        // console.log('Saved successfully '+ value);
    })
    .catch((e) => {
        console.log(e);
    });
}

async function getCredentials(key) {
    return await Expo.SecureStore.getItemAsync(key);
}

async function deleteCredentials(key) {
    await Expo.SecureStore.deleteItemAsync(key)
    .then((res) => {
        // console.log('deleted');
    })
    .catch((e) => {
        console.log(e);
    });
}