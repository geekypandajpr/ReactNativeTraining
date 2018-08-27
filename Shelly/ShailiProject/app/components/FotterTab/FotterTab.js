import React from 'react';
import {View} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class FotterTab extends React.Component{

    render()
    {
        return(
            <View>
              <Footer>
                  <FooterTab>
                      <Button>
                        <Icon name={this.props.icon1} />
                      </Button>

                      <Button>
                        <Icon name={this.props.icon2} />
                      </Button>

                      <Button active>
                        <Icon active name={this.props.icon3} />
                      </Button>

                      <Button>
                        <Icon name={this.props.icon4} />
                      </Button>

                      <Button>
                        <Icon name={this.props.icon5} />
                      </Button>
                  </FooterTab>
              </Footer>
            </View>     
              
        )
    }

}
export{FotterTab}