import React from react;
import {react} from 'react-native';
import {Header} from 'react-native-elements';

export default class HeaderTab extends React.Component
{
    render()
    {
        return( 
           
           
           <Header
            placement="left"
             leftComponent={{ icon: 'menu', color: '#fff' }}
             centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
               
             rightComponent={{ icon: 'search', color: '#fff' }}
         />

          
        

        )
    }

}

export{HeaderTab}