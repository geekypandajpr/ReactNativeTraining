import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Permissions } from 'expo';
import Index from './app/index';

EStyleSheet.build({
    $primaryColor: '#0073b7',
    $primaryColorDark: '#004887',
    $primaryColorLight: '#56a1ea',
    $primaryColortext: '#FFFFFF',
    $fontSize: '0.8rem',
});

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            cameraperm: null,
        };
    }
    async componentDidMount() {
        this.allowPermission();
    }

    allowPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ cameraperm: status === 'granted' });
        const { cstatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraPermission: cstatus === 'granted' });
    }

    render() {
        return (
            <Index />
        );
    }
}





// import React from 'react';
// import { Image, Button, View } from 'react-native';

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             img:null
//         }
//     }

//     do=()=> {
//         var Base64 = {
//             _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
//             encode: function (e) {
//                 var t = "";
//                 var n, r, i, s, o, u, a;
//                 var f = 0;
//                 e = Base64._utf8_encode(e);
//                 while (f < e.length) {
//                     n = e.charCodeAt(f++);
//                     r = e.charCodeAt(f++);
//                     i = e.charCodeAt(f++);
//                     s = n >> 2;
//                     o = (n & 3) << 4 | r >> 4;
//                     u = (r & 15) << 2 | i >> 6;
//                     a = i & 63;
//                     if (isNaN(r)) {
//                         u = a = 64
//                     } else if (isNaN(i)) {
//                         a = 64
//                     }
//                     t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
//                 }
//                 return t
//             },

//             decode: function (e) {
//                 var t = "";
//                 var n, r, i;
//                 var s, o, u, a;
//                 var f = 0;
//                 e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
//                 while (f < e.length) {
//                     s = this._keyStr.indexOf(e.charAt(f++));
//                     o = this._keyStr.indexOf(e.charAt(f++));
//                     u = this._keyStr.indexOf(e.charAt(f++));
//                     a = this._keyStr.indexOf(e.charAt(f++));
//                     n = s << 2 | o >> 4;
//                     r = (o & 15) << 4 | u >> 2;
//                     i = (u & 3) << 6 | a;
//                     t = t + String.fromCharCode(n);
//                     if (u != 64) {
//                         t = t + String.fromCharCode(r)
//                     }
//                     if (a != 64) {
//                         t = t + String.fromCharCode(i)
//                     }
//                 }
//                 t = Base64._utf8_decode(t);
//                 return t
//             },
//             _utf8_encode: function (e) {
//                 e = e.replace(/\r\n/g, "\n");
//                 var t = "";
//                 for (var n = 0; n < e.length; n++) {
//                     var r = e.charCodeAt(n);
//                     if (r < 128) {
//                         t += String.fromCharCode(r)
//                     } else if (r > 127 && r < 2048) {
//                         t += String.fromCharCode(r >> 6 | 192);
//                         t += String.fromCharCode(r & 63 | 128)
//                     } else {
//                         t += String.fromCharCode(r >> 12 | 224);
//                         t += String.fromCharCode(r >> 6 & 63 | 128);
//                         t += String.fromCharCode(r & 63 | 128)
//                     }
//                 } return t
//             },
//             _utf8_decode: function (e) {
//                 var t = "";
//                 var n = 0;
//                 var r = c1 = c2 = 0;
//                 while (n < e.length) {
//                     r = e.charCodeAt(n);
//                     if (r < 128) {
//                         t += String.fromCharCode(r);
//                         n++
//                     } else if (r > 191 && r < 224) {
//                         c2 = e.charCodeAt(n + 1);
//                         t += String.fromCharCode((r & 31) << 6 | c2 & 63);
//                         n += 2
//                     } else {
//                         c2 = e.charCodeAt(n + 1);
//                         c3 = e.charCodeAt(n + 2);
//                         t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
//                         n += 3
//                     }
//                 }
//                 return t
//             }
//         }
//         var encodedString = Base64.encode("https://facebook.github.io/react-native/docs/assets/favicon.png");
//         // var encodedString = Base64.encode("./assets/launcher.png");
//         console.log(encodedString);
//         var decodedString = Base64.decode(encodedString);
//         console.log(decodedString);
//         this.setState({img: decodedString});
//     }

//     render() {
//         var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';
//         return(
//             // <Image source={{uri: `data:image/gif;base64,${encodedData}`}} />
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Image style={{ width: 100, height: 50, borderWidth: 1, borderColor: 'red' }}
//                     source={{ uri: this.state.img }} resizeMode="contain" />
//                 <Button title="do" onPress={this.do} />
//             </View>
//         )
//     }
// }