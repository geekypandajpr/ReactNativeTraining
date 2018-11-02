import { SecureStore } from 'expo';

function getCredentials(key) {
    SecureStore.getItemAsync(key)
    .then((data) => { console.log(data) })
    .catch((e) => { console.log(e) })
}

function saveCredentials(key, value) {
    SecureStore.setItemAsync(key, value)
    .then(() => console.log('Saved to preferences!'))
    .catch((e) => { console.log(e) })
}

function clearCredentials(key) {
    SecureStore.deleteItemAsync(key)
    .then(() => console.log('Preference cleared!'))
    .catch((e) => { console.log(e) })
}

export const functions = {
    getCredentials,
    saveCredentials,
    clearCredentials
}