import React from 'react'; 
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import HeaderIcon from '../../components/Header/Header';
import { FooterTabsIcon } from '../../components/Footer/Footer';
export default class FirstPage extends React.Component
{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
            <HeaderIcon  />
            <View>
            <Button
                    title="Navigate to Product Page"
                    onPress={() =>
                    navigate('Product')
                    }
                />   
                 <Button
                    title="Navigate to Product Page with ScrollView"
                    onPress={() =>
                    navigate('ScrollViewDemo')
                    }
                />   
                </View>
              <FooterTabsIcon style = {styles.footer}  />
            </View>
              
                
 );
 }
}







{/* <Header>
<Left>
  <Button transparent>
    <Icon name='menu' />
  </Button>
</Left>
<Body>
  <Title>Header</Title>
</Body>
<Right />
</Header>
<Content>
<Text>
  This is Content Section
</Text>
</Content>
<Footer>
<FooterTab>
  <Button full>
    <Text>Footer</Text>
  </Button>
</FooterTab>
</Footer> */}

















const styles = StyleSheet.create({
    container: {
    flex: 1,
 
    },
    content : {
        flex:0.8,
    },
  
    });

export {FirstPage}



