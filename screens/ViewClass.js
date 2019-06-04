import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, Dimensions, TextInput, Animated, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../styles/Styles';
import { Constants, Font } from 'expo';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Stripe from 'react-native-stripe-api';
import ScrollViewMargin from '../components/ScrollViewMargin';


const {height} = Dimensions.get('window')
const apiKey = 'pk_test_pDKmgELNZxBKbFBrlZ49fXcA00qFE2sWrc';
const client = new Stripe(apiKey);

/*const token = await client.createToken({
  number: '4242424242424242' ,
  exp_month: '09', 
  exp_year: '18', 
  cvc: '111',
  address_zip: '12345'
});*/



export default class ViewClass extends React.Component {
  state = {

    fontLoaded: false
  };

  static defaultProps = {
    draggableRange: {
      top: 500,
      bottom: 0,
    }
  }

  _draggedValue = new Animated.Value(0)



  async componentDidMount() {


  

      await Font.loadAsync({
        'Muli-Regular': require('../assets/Muli/Muli-Regular.ttf'),
        'Muli-SemiBold': require('../assets/Muli/Muli-SemiBold.ttf'),
        'Muli-Bold': require('../assets/Muli/Muli-Bold.ttf'),
        'Muli-Black': require('../assets/Muli/Muli-Black.ttf'),
        'Muli-ExtraBold': require('../assets/Muli/Muli-ExtraBold.ttf'),
      });

      this.setState({ fontLoaded: true });

      //this._panel.hide()
   
  }


  render() {

    const {top, bottom} = this.props.draggableRange

    const draggedValue = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const transform = [{scale: draggedValue}]


    const {navigate} = this.props.navigation;



    return (

      <View style={{flex: 1}}>

      {
      this.state.fontLoaded ? (

          <View style={{flex: 1}}>

            <View style={{height: 185, backgroundColor: '#28292B'}}>
              <Image source={{uri: 'http://yudi.co.uk/apis/images/classes/1.png'}} ImageResizeMode={'cover'}
              style={{flex: 1, paddingTop: 20}}/>
              <View style={{position: 'absolute', flex: 1, flexDirection: 'column', left: 20, top: 32}}>

                <View style={{flex: 1, zIndex: 1000}}>
                  <TouchableOpacity activeOpacity={0.3} onPress={() => this.props.navigation.goBack()}>
                    <Image source={require('../assets/leftArrow.png')}
                      style={{width: 21, height: 21}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 50}}>
                  <Text style={styles.viewClassTitle}>Mum's fitness</Text>
                  <Text style={styles.viewClassMeta}>£13.00 • 25 May, 2:00PM</Text>
                </View>



              </View>
            </View>
            <ScrollView style={{flex: 1, backgroundColor: '#28292B', padding: 20}}>
              <View style={{paddingBottom: 25, paddingTop: 10, flexDirection: 'row', flex: 1}}>
                <Image source={require('../assets/locationIcon.png')}
                  style={{width: 19, height: 24, marginRight: 8}}
                />
                <Text style={{color: '#939495', fontFamily: 'Muli-SemiBold', fontSize: 20}}>London, UK</Text>                
              </View>
              <Text style={{color: '#939495', fontFamily: 'Muli-SemiBold', lineHeight: 25, fontSize: 15}}>

                Participate in fitness classes, Courses focus on shedding pounds and fat, stretching, and building strength.
                {"\n"}{"\n"}
                With Mum’s fitness, you can discover & experience various fitness forms like Gyms, Yoga, Zumba, Functional Training, Marathon training, Dance, MMA & kickboxing, Healthy Tiffins and many more by taking unlimited trials.

              </Text>
              <View style={styles.viewClassInstructorContainer}>
                <View style={styles.viewClassInstructorImageContainer}>
                  <View style={styles.viewClassInstructorImageOuter}>
                    
                    <Image source={require('../assets/profileImage.jpg')}
                      style={{width: 65, height: 65}}
                    />

                  </View>
                </View>
                <View style={styles.viewClassInstructorInfo}>
                  <Text style={styles.viewClassInstructorInfoName}>Terry Longmore</Text>
                  <Text style={styles.viewClassInstructorInfoRole}>Personal trainer</Text>
                </View>
              </View>
              <ScrollViewMargin/>
            </ScrollView>
            <View style={{height: 85, backgroundColor: '#343232', justifyContent: 'center'}}>
              <TouchableOpacity activeOpacity={0.6} style={styles.CTAButton} onPress={() => this._panel.show()}>
                <Text style={styles.CTAButtonText}>Join Class</Text>
              </TouchableOpacity>
            </View>


            <SlidingUpPanel
              showBackdrop={true}
              ref={c => (this._panel = c)}
              draggableRange={this.props.draggableRange}
              animatedValue={this._draggedValue}
              allowDragging ={false}
              friction={0.6}

              >

              <View style={styles.payPanelOuter}>
                <View style={styles.payPanelContainer}>


                  <Text style={styles.confirmClassMainTitle}>Confirm booking</Text>


                  <View style={styles.confirmClassTopSection}>
                    <View style={styles.confirmClassImageContainer}>
                      <Image source={{uri: 'http://yudi.co.uk/apis/images/classes/1.png' }}
                        style={styles.confirmClassImage}
                      />
                    </View>
                    <View style={styles.confirmClassTopSectionRightInfo}>
                      <Text style={styles.confirmClassTopSectionRightName}>Mum's fitness</Text>
                      <Text style={styles.confirmClassTopSectionRightMeta}>£13.00  •  25 May, 2:00PM</Text>
                      

                      <View style={styles.confirmClassTopSectionRightLocation}>
                        <Image source={require('../assets/locationIcon.png')}
                          style={{width: 16, height: 21, marginRight: 8}}
                        />                       
                        <Text style={styles.confirmClassTopSectionRightLocationText}>London, UK</Text>
                      </View>
                    </View>                   
                  </View>

                  <View style={styles.confirmClassBottomSection}>
                    <Text style={styles.confirmClassBottomSectionTitle}>Select card or package to pay</Text>
                    <ScrollView style={styles.confirmClassSelectionSection}>
                      <View style={[styles.confirmClassSelectionItem, styles.confirmClassSelectionItemCard, styles.confirmClassSelectionItemSelected]}>
                        <Text style={styles.confirmClassSelectionItemCardNumber}>•••• •••• •••• 4921</Text>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                          <Image source={require('../assets/mastercard.png')}
                            style={{width: 33, height: 21}}
                          /> 
                        </View>                          
                      </View>
                      
                      <View style={[styles.confirmClassSelectionItem]}>
                        {/*<View style={{width: 47, justifyContent: 'center'}}>
                          <View style={styles.confirmClassCheckboxContainer}/>
                        </View>*/}
                        
                        <View style={{flex: 1}}>
                          <Text style={styles.confirmClassPackageName}>Bronze</Text>
                          <Text style={styles.confirmClassPackageExpiry}>Expires - 24 May 2019</Text>
                        </View>
                        <Text style={styles.confirmClassPackageLeft}>3 classes left</Text>
                      </View>

                      <View style={styles.confirmClassSelectionItem}>
                        {/*<View style={{width: 47, justifyContent: 'center'}}>
                          <View style={styles.confirmClassCheckboxContainer}/>
                        </View>*/}
                        
                        <View style={{flex: 1}}>
                          <Text style={styles.confirmClassPackageName}>Bronze</Text>
                          <Text style={styles.confirmClassPackageExpiry}>Expires - 24 May 2019</Text>
                        </View>
                        <Text style={styles.confirmClassPackageLeft}>3 classes left</Text>
                      </View>


                    </ScrollView>
                    <TouchableOpacity activeOpacity={0.6} style={[styles.CTAButton, {marginHorizontal: 0, marginTop: 25}]}>
                      <Text style={styles.CTAButtonText}>Pay Now</Text>
                    </TouchableOpacity>

                  </View>  


                </View>
              </View>
            </SlidingUpPanel>


          </View>

        ) : null
      }

      </View>


    );
  }
}

