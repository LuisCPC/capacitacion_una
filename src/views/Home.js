import React, { Component } from 'react';
import { Drawer} from 'native-base';
import colors from '../constant/colors'
import Sidebar from '../views/Sidebar'
import HomeView from '../views/HomeView'

export default class Home extends Component {
 

    closeDrawer() {
        this.drawer._root.close()
    };
    
    openDrawer() {
        this.drawer._root.open()
    };



    render() {
        return (
        <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<Sidebar />}
            onClose={() => this.closeDrawer()} 
            type={'overlay'} // displace 
            panOpenMask={.1}
            panCloseMask={.1} 
            acceptPan={true} 
            >
    
            <HomeView
              openDrawer={this.openDrawer.bind(this)}
            />
          </Drawer>
        );
      }


  
 

}