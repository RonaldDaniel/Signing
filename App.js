import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, AsyncStorage, ActivityIndicator, View, Dimensions, Alert,TextInput, Animated, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles/Styles';
import { Constants, Font } from 'expo';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Stripe from 'react-native-stripe-api';
import ViewClass from './screens/ViewClass';
import ScrollViewMargin from './components/ScrollViewMargin';
import Api from './Api/index'
import axios from 'axios';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);


const {height} = Dimensions.get('window')




class MyClassPreviewItem extends React.Component {



  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.myClassPreviewItem}>
        <View style={styles.myClassPreviewItemImageContainer}>
          <Image source={{uri: this.props.image }}  style={styles.myClassPreviewItemImage}/>
        </View>
        <View style={styles.myClassPreviewItemInfo}>
          <Text style={styles.myClassPreviewItemTitle}>Mum's fitness</Text>
          <Text style={styles.myClassPreviewItemMeta}>£13.00 • 25 May, 2:00PM</Text>
          <View style={styles.myClassPreviewItemMethodContainer}>
            <Text style={styles.myClassPreviewItemMethodText}>Paid using</Text>
            <View style={styles.myClassPreviewItemMethodTypeContainer}>
              <Text style={styles.myClassPreviewItemMethodTypeText}>Card</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}


class AllClassesPreviewItem extends React.Component {


  render() {


    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('ViewClass')} style={styles.trainingSelectionItem}>
        <Image source={{uri: this.props.image }}  style={styles.trainingSelectionItemBackground}/>

        <View style={styles.trainingSelectionItemContent}>
          <Text style={styles.trainingSelectionClassTitle}>{this.props.name}</Text>
          <Text style={styles.trainingSelectionClassInfo}>{this.props.price} • {this.props.time}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


class ClassesFirstRoute extends React.Component {







  render() {

   

    return (
  <View style={{backgroundColor: '#28292B', flex: 1}}>
    <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 30 }]}>

      <MyClassPreviewItem 
        image={"http://yudi.co.uk/apis/images/classes/1.png"}
      />
      <MyClassPreviewItem 
        image={"http://yudi.co.uk/apis/images/classes/2.png"}
      />
      <MyClassPreviewItem 
        image={"http://yudi.co.uk/apis/images/classes/3.png"}
      />
      <MyClassPreviewItem 
        image={"http://yudi.co.uk/apis/images/classes/1.png"}
      />
      <MyClassPreviewItem 
        image={"http://yudi.co.uk/apis/images/classes/2.png"}
      />
      <ScrollViewMargin/>



    </ScrollView>

    {/*<View style={{justifyContent: 'center', marginTop: 150}}>
      <Image source={require('./assets/logo-white.png')}
        style={{width: 104, height: 40, alignSelf: 'center'}}
      />
      <Text style={styles.noClassesText}>You haven’t joined any classes</Text>
      <TouchableOpacity activeOpacity={0.6} style={[styles.CTAButton, {marginHorizontal: 20}]}>
        <Text style={styles.CTAButtonText}>Browse Classes</Text>
      </TouchableOpacity>

    </View>*/}
  </View>
  
    );
  }
}


class ClassesSecondRoute extends React.Component {







  render() {


    const {navigate} = this.props.navigate;
   

    return (
      
      <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 20, paddingTop: 20 }]}>




        <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('ViewClass')}  style={styles.trainingSelectionItem}>
          <Image source={{uri: 'http://yudi.co.uk/apis/images/classes/1.png' }}  style={styles.trainingSelectionItemBackground}/>

          <View style={styles.trainingSelectionItemContent}>
            <Text style={styles.trainingSelectionClassTitle}>Mum's fitness</Text>
            <Text style={styles.trainingSelectionClassInfo}>£13.00 • 25 May, 2:00PM</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('ViewClass')}  style={styles.trainingSelectionItem}>
          <Image source={{uri: 'http://yudi.co.uk/apis/images/classes/1.png' }}  style={styles.trainingSelectionItemBackground}/>

          <View style={styles.trainingSelectionItemContent}>
            <Text style={styles.trainingSelectionClassTitle}>Mum's fitness</Text>
            <Text style={styles.trainingSelectionClassInfo}>£13.00 • 25 May, 2:00PM</Text>
          </View>
        </TouchableOpacity>



        <ScrollViewMargin/>



      </ScrollView>
  
    );
  }
}

class PackagesFirstRoute extends React.Component {


  static defaultProps = {
    draggableRange: {
      top: 275,
      bottom: 0,
    }
  }

  _draggedValue = new Animated.Value(0)





  render() {

    const {top, bottom} = this.props.draggableRange

    const draggedValue = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const transform = [{scale: draggedValue}]


    const {navigate} = this.props.navigate;


    return (

      <View style={{flex: 1}}>
      
      <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 20, paddingTop: 20 }]}>


        <View style={styles.packageItemsRow}>

          <View style={styles.packageItemRow}>
            <Image source={{uri: 'http://yudi.co.uk/apis/images/packages/1.png' }} style={styles.packageItemImage}/>
            <View style={styles.packageItemContent}>
              <Text style={styles.packageItemContentName}>Gold</Text>
              <Text style={styles.packageItemContentInfo}>£240 • 20 Sessions</Text>
              <Text style={styles.packageItemContentValid}>Valid for 12 weeks</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => this._panel.show()} style={styles.packageItemContentButtonOuter}>
                <Text style={styles.packageItemContentButtonText}>Purchase</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginLeft: 10}}/>

          <View style={styles.packageItemRow}>
            <Image source={{uri: 'http://yudi.co.uk/apis/images/packages/1.png' }} style={styles.packageItemImage}/>
            <View style={styles.packageItemContent}>
              <Text style={styles.packageItemContentName}>Gold</Text>
              <Text style={styles.packageItemContentInfo}>£240 • 20 Sessions</Text>
              <Text style={styles.packageItemContentValid}>Valid for 12 weeks</Text>
              <TouchableOpacity onPress={() => this._panel.show()} style={styles.packageItemContentButtonOuter}>
                <Text style={styles.packageItemContentButtonText}>Purchase</Text>
              </TouchableOpacity>
            </View>
          </View>   


        </View>


        <View style={styles.packageItemsRow}>

          <View style={styles.packageItemRow}>
            <Image source={{uri: 'http://yudi.co.uk/apis/images/packages/1.png' }} style={styles.packageItemImage}/>
            <View style={styles.packageItemContent}>
              <Text style={styles.packageItemContentName}>Gold</Text>
              <Text style={styles.packageItemContentInfo}>£240 • 20 Sessions</Text>
              <Text style={styles.packageItemContentValid}>Valid for 12 weeks</Text>
              <TouchableOpacity onPress={() => this._panel.show()} activeOpacity={0.6} style={styles.packageItemContentButtonOuter}>
                <Text style={styles.packageItemContentButtonText}>Purchase</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginLeft: 10}}/>

          <View style={styles.packageItemRow}>
            <Image source={{uri: 'http://yudi.co.uk/apis/images/packages/1.png' }} style={styles.packageItemImage}/>
            <View style={styles.packageItemContent}>
              <Text style={styles.packageItemContentName}>Gold</Text>
              <Text style={styles.packageItemContentInfo}>£240 • 20 Sessions</Text>
              <Text style={styles.packageItemContentValid}>Valid for 12 weeks</Text>
              <TouchableOpacity onPress={() => this._panel.show()} style={styles.packageItemContentButtonOuter}>
                <Text style={styles.packageItemContentButtonText}>Purchase</Text>
              </TouchableOpacity>
            </View>
          </View>   


        </View>

        <View style={styles.packageItemsRow}>

          <View style={styles.packageItemRow}>
            <Image source={{uri: 'http://yudi.co.uk/apis/images/packages/1.png' }} style={styles.packageItemImage}/>
            <View style={styles.packageItemContent}>
              <Text style={styles.packageItemContentName}>Gold</Text>
              <Text style={styles.packageItemContentInfo}>£240 • 20 Sessions</Text>
              <Text style={styles.packageItemContentValid}>Valid for 12 weeks</Text>
              <TouchableOpacity onPress={() => this._panel.show()} activeOpacity={0.6} style={styles.packageItemContentButtonOuter}>
                <Text style={styles.packageItemContentButtonText}>Purchase</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginLeft: 10}}/>

          <View style={styles.packageItemRow}>
            <Image source={{uri: 'http://yudi.co.uk/apis/images/packages/1.png' }} style={styles.packageItemImage}/>
            <View style={styles.packageItemContent}>
              <Text style={styles.packageItemContentName}>Gold</Text>
              <Text style={styles.packageItemContentInfo}>£240 • 20 Sessions</Text>
              <Text style={styles.packageItemContentValid}>Valid for 12 weeks</Text>
              <TouchableOpacity onPress={() => this._panel.show()} style={styles.packageItemContentButtonOuter}>
                <Text style={styles.packageItemContentButtonText}>Purchase</Text>
              </TouchableOpacity>
            </View>
          </View>   


        </View>





        <ScrollViewMargin/>



      </ScrollView>


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


                  <Text style={styles.confirmClassMainTitle}>Select card to buy silver</Text>


                  <View style={styles.confirmClassBottomSection}>
                    
                    <ScrollView style={[styles.confirmClassSelectionSection, {height: 100}]}>
                      <View style={[styles.confirmClassSelectionItem, styles.confirmClassSelectionItemCard, styles.confirmClassSelectionItemSelected]}>
                        <Text style={styles.confirmClassSelectionItemCardNumber}>•••• •••• •••• 4921</Text>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                          <Image source={require('./assets/mastercard.png')}
                            style={{width: 33, height: 21}}
                          /> 
                        </View>                          
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

  
    );
  }
}


class PackagesSecondRoute extends React.Component {







  render() {

   

    return (
      
      <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 20, paddingTop: 20 }]}>


        <View style={styles.packageItemsRow}>

          <View style={styles.packageItemRow}>
            <Image source={{uri: 'http://yudi.co.uk/apis/images/packages/1.png' }} style={styles.packageItemImage}/>
            <View style={styles.packageItemContent}>
              <Text style={styles.packageItemContentName}>Gold</Text>
              <Text style={styles.packageItemContentInfo}>£240 • 20 Sessions</Text>
              <View style={styles.packageItemLowerBought}>
                <View>
                  <Text style={styles.packageItemLowerBoughtTitles}>Sessions left</Text>
                  <Text style={styles.packageItemLowerBoughtDescriptions}>5</Text>
                </View>
                <View>
                  <Text style={styles.packageItemLowerBoughtTitles}>Expires on</Text>
                  <Text style={styles.packageItemLowerBoughtDescriptions}>24 May 2019</Text>
                </View>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.packageItemsRow}>


          <View style={styles.packageItemRow}>
            <Image source={{uri: 'http://yudi.co.uk/apis/images/packages/1.png' }} style={styles.packageItemImage}/>
            <View style={styles.packageItemContent}>
              <Text style={styles.packageItemContentName}>Gold</Text>
              <Text style={styles.packageItemContentInfo}>£240 • 20 Sessions</Text>
              <View style={styles.packageItemLowerBought}>
                <View>
                  <Text style={styles.packageItemLowerBoughtTitles}>Sessions left</Text>
                  <Text style={styles.packageItemLowerBoughtDescriptions}>5</Text>
                </View>
                <View>
                  <Text style={styles.packageItemLowerBoughtTitles}>Expires on</Text>
                  <Text style={styles.packageItemLowerBoughtDescriptions}>24 May 2019</Text>
                </View>
              </View>
            </View>
          </View>


          


        </View>


        <ScrollViewMargin/>



      </ScrollView>
  
    );
  }
}



class AccountFirstRoute extends React.Component {





  async logout() {
    const {navigate} = this.props.navigate;
    navigate('Login')
    try {
      await AsyncStorage.setItem('Token','false');
    } catch (err) {
        console.log('Async ===>>>',err)
    }
  }

  render() {

    const {navigate} = this.props.navigate;

    return (
      
      <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 20, paddingTop: 20 }]}>

        <View style={{borderRadius: 50, backgroundColor: 'white', padding: 10}}>
          <Text style={{fontFamily: 'Muli-Bold', textAlign: 'center', alignSelf: 'center'}}>You are a NXT Phase member</Text>
        </View>

        <View style={styles.genericTextInputContainer}>
         <Image source={require('./assets/tii-user.png')}
            style={[styles.genericTextInputImage, {width: 23, height: 23}]}
          />
          <TextInput
          placeholder="Full name"
          placeholderTextColor="#9A9B9C"
          
          style={styles.genericTextInput}/>
        </View>

        <View style={styles.genericTextInputContainer}>
         <Image source={require('./assets/tii-mail.png')}
            style={[styles.genericTextInputImage, {width: 23, height: 17, bottom: 15}]}
          />
          <TextInput
          placeholder="Email address"
          placeholderTextColor="#9A9B9C"
          
          style={styles.genericTextInput}
          keyboardType={"email-address"}/>

        </View>


        <View style={styles.genericTextInputContainer}>
         <Image source={require('./assets/tii-phone.png')}
            style={[styles.genericTextInputImage, {width: 14, height: 23}]}
          />
          <TextInput
          placeholder="Phone number"
          placeholderTextColor="#9A9B9C"
          
          style={styles.genericTextInput}
          keyboardType={"phone-pad"}/>
        </View>

        <View style={styles.genericTextInputContainer}>
         <Image source={require('./assets/tii-password.png')}
            style={[styles.genericTextInputImage, {width: 23, height: 23}]}
          />
          <TextInput
          placeholder="Password"
          placeholderTextColor="#9A9B9C"
          
          style={styles.genericTextInput}/>
        </View>

        <View style={styles.genericTextInputContainer}>
         <Image source={require('./assets/tii-password.png')}
            style={[styles.genericTextInputImage, {width: 23, height: 23}]}
          />
          <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#9A9B9C"
          
          style={styles.genericTextInput}/>
        </View>

        
        <TouchableOpacity activeOpacity={0.6} style={[styles.CTAButton, {marginHorizontal: 0, marginTop: 20}]}>
          <Text style={styles.CTAButtonText}>Save changes</Text>
        </TouchableOpacity>
        


        <TouchableOpacity activeOpacity={0.6} style={styles.logoutButton} onPress={() => this.logout()}>
          <Text style={styles.logoutButtonText}>Logout</Text>
          <Image source={require('./assets/logout.png')}
            style={styles.logoutButtonImage}
          />
          
        </TouchableOpacity>

        
        <ScrollViewMargin/>
        <ScrollViewMargin/>



      </ScrollView>
  
    );
  }
}

class AccountSecondRoute extends React.Component {



  static defaultProps = {
    draggableRange: {
      top: 457,
      bottom: 0,
    }
  }

  _draggedValue = new Animated.Value(0)





  render() {




    const {top, bottom} = this.props.draggableRange

    const draggedValue = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const transform = [{scale: draggedValue}]


    const {navigate} = this.props.navigate;



    return (
  
      <View style={{flex: 1}}>

        <View style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 20, paddingTop: 20 }]}>


          <View style={styles.myCardsItem}>

            <View>
              <Text style={styles.myCardTitle}>Mastercard</Text>
              <Text style={styles.myCardNumber}>•••• •••• •••• 4921</Text>
              <View style={styles.myCardExpiryContainer}>
                <Text style={styles.myCardExpiry}>08 / 19</Text>
              </View>
            </View>
            <View>
              <Image source={require('./assets/mastercard.png')}
                style={styles.myCardType}
              />
              <TouchableOpacity activeOpacity={0.3} style={{bottom: 3, right: 3, position: 'absolute'}}>
                <Image source={require('./assets/delete.png')}
                style={styles.myCardDeleteIcon}
                />
              </TouchableOpacity>

            </View>

          </View>

          <View style={styles.myCardsItem}>

            <View>
              <Text style={styles.myCardTitle}>Mastercard</Text>
              <Text style={styles.myCardNumber}>•••• •••• •••• 4921</Text>
              <View style={styles.myCardExpiryContainer}>
                <Text style={styles.myCardExpiry}>08 / 19</Text>
              </View>
            </View>
            <View>
              <Image source={require('./assets/mastercard.png')}
                style={styles.myCardType}
              />
              <TouchableOpacity activeOpacity={0.3} style={{bottom: 3, right: 3, position: 'absolute'}}>
                <Image source={require('./assets/delete.png')}
                style={styles.myCardDeleteIcon}
                />
              </TouchableOpacity>

            </View>

          </View>

          <TouchableOpacity activeOpacity={0.6} onPress={() => navigate('AddCard')} style={[styles.CTAButton, {marginHorizontal: 0}]}>
            <Text style={styles.CTAButtonText}>Add a new card</Text>
          </TouchableOpacity>


          <ScrollViewMargin/>



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


              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={[styles.confirmClassMainTitle, {marginBottom: 0}]}>Add a New Card</Text>
                <TouchableOpacity onPress={() => this._panel.hide()}>
                   <Image source={require('./assets/close.png')}
                      style={{width: 30, height: 30, bottom: -3}}
                    />
                </TouchableOpacity>  
              </View>            

              <View style={styles.confirmClassBottomSection}>
                
                <View>
                  <View style={[styles.genericTextInputContainer, {marginTop: 15}]}>
                   <Image source={require('./assets/tii-user.png')}
                      style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                    />
                    <TextInput
                    placeholder="Full name"
                    placeholderTextColor="#9A9B9C"
                    
                    style={styles.genericTextInput}/>
                  </View>
                  <View style={styles.genericTextInputContainer}>
                   <Image source={require('./assets/tick.png')}
                      style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                    />
                    <TextInput
                    placeholder="16-digit card number"
                    placeholderTextColor="#9A9B9C"
                    
                    style={styles.genericTextInput}/>
                  </View>

                  <View style={styles.genericTextInputContainer}>
                   <Image source={require('./assets/tick.png')}
                      style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                    />
                    <TextInput
                    placeholder="CVC code"
                    placeholderTextColor="#9A9B9C"
                    
                    style={styles.genericTextInput}/>
                  </View>


                  <View style={{flexDirection: 'row'}}>

                    <View style={[styles.genericTextInputContainer, {flex: 1}]}>
                     <Image source={require('./assets/calendar.png')}
                        style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                      />
                      <TextInput
                      placeholder="Expiry (MM)"
                      placeholderTextColor="#9A9B9C"
                      
                      style={styles.genericTextInput}/>
                    </View>

                    <View style={[styles.genericTextInputContainer, {flex: 1, marginLeft: 20}]}>
                     <Image source={require('./assets/calendar.png')}
                        style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                      />
                      <TextInput
                      placeholder="Expiry (YY)"
                      placeholderTextColor="#9A9B9C"
                      
                      style={styles.genericTextInput}/>
                    </View>
               

                  </View>

                </View>
                <TouchableOpacity activeOpacity={0.6} style={[styles.CTAButton, {marginHorizontal: 0, marginTop: 25}]}>
                  <Text style={styles.CTAButtonText}>Add Card</Text>
                </TouchableOpacity>

              </View>  


            </View>
          </View>
        </SlidingUpPanel>


        </View>
    );
  }
}


class Classes extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'My Classes' },
      { key: 'second', title: 'All Classes' },
    ],
    fontLoaded: false,
  };

  async componentDidMount() {
  

      await Font.loadAsync({
        'Muli-Regular': require('./assets/Muli/Muli-Regular.ttf'),
        'Muli-SemiBold': require('./assets/Muli/Muli-SemiBold.ttf'),
        'Muli-Bold': require('./assets/Muli/Muli-Bold.ttf'),
        'Muli-Black': require('./assets/Muli/Muli-Black.ttf'),
        'Muli-ExtraBold': require('./assets/Muli/Muli-ExtraBold.ttf'),
      });

      this.setState({ fontLoaded: true });
   
  }


  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <ClassesFirstRoute navigate={this.props.navigation}/>;
      case 'second':
        
      return <ClassesSecondRoute navigate={this.props.navigation}/>;
    }
  };



  render() {

    const {navigate} = this.props.navigation;

    return (

      <View style={{flex: 1}}>

      {
      this.state.fontLoaded ? (

          <View style={{flex: 1}}>

            <View style={{paddingTop: 35, backgroundColor: '#28292B', paddingHorizontal: 20, paddingBottom: 5}}>
              <Text style={{fontFamily: 'Muli-Black', fontSize: 28, color: '#fff'}}>Classes</Text>
            </View>

            <TabView
              navigationState={this.state}
              renderScene={this._renderScene}
              style={{
                borderWidth: 0
              }}


              renderTabBar={props => <TabBar
                {...props}
                indicatorStyle={{
                  backgroundColor: '#0AA0E2',
                  height: 3.5,
                  borderWidth: 0,
                  bottom: -1.2
                }}
                style={{
                  backgroundColor: '#28292B',
                  borderWidth: 0,
                  color: 'red',
                  paddingVertical: 2.5,
                  borderBottomWidth: 0.8,
                  borderBottomColor: '#777879'
                }}
                labelStyle={{
                  fontSize: 15.5,
                  fontFamily: 'Muli-Bold',
                  borderWidth: 0
                }}
                activeColor={'#0AA0E2'}
                inactiveColor={'#939495'}
                upperCaseLabel={false}
                getLabelText={({route}) => route.title}
                />
              }
              renderHeader={this._renderHeader}
              labelStyle={{
                color: 'red',
                borderWidth: 0
              }}


              swipeVelocityThreshold={800}

              onIndexChange={index => this.setState({
                index
              })}
              initialLayout={{
                width: Dimensions.get('window').width
              }}
              >
            
            </TabView>
          </View>

        ) : null
      }

      </View>


    );
  }
}


class Packages extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'My Packages' },
      { key: 'second', title: 'All Packages' },
    ],
    fontLoaded: false
  };



  async componentDidMount() {
  

      await Font.loadAsync({
        'Muli-Regular': require('./assets/Muli/Muli-Regular.ttf'),
        'Muli-SemiBold': require('./assets/Muli/Muli-SemiBold.ttf'),
        'Muli-Bold': require('./assets/Muli/Muli-Bold.ttf'),
        'Muli-Black': require('./assets/Muli/Muli-Black.ttf'),
        'Muli-ExtraBold': require('./assets/Muli/Muli-ExtraBold.ttf'),
      });

      this.setState({ fontLoaded: true });
   
  }




  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <PackagesSecondRoute/>;
      case 'second':
        
      return <PackagesFirstRoute navigate={this.props.navigation}/>;
    }
  };


  render() {



    const {navigate} = this.props.navigation;


    return (

      <View style={{flex: 1}}>

      {
      this.state.fontLoaded ? (

          <View style={{flex: 1}}>

            <View style={{paddingTop: 35, backgroundColor: '#28292B', paddingHorizontal: 20, paddingBottom: 5}}>
              <Text style={{fontFamily: 'Muli-Black', fontSize: 28, color: '#fff'}}>Packages</Text>
            </View>

            <TabView
              navigationState={this.state}
              renderScene={this._renderScene}

              style={{
                borderWidth: 0
              }}


              renderTabBar={props => <TabBar
                {...props}
                indicatorStyle={{
                  backgroundColor: '#0AA0E2',
                  height: 3.5,
                  borderWidth: 0,
                  bottom: -1.2
                }}
                style={{
                  backgroundColor: '#28292B',
                  borderWidth: 0,
                  color: 'red',
                  paddingVertical: 2.5,
                  borderBottomWidth: 0.8,
                  borderBottomColor: '#777879'
                }}
                labelStyle={{
                  fontSize: 15.5,
                  fontFamily: 'Muli-Bold',
                  borderWidth: 0
                }}
                activeColor={'#0AA0E2'}
                inactiveColor={'#939495'}
                upperCaseLabel={false}
                getLabelText={({route}) => route.title}
                />
              }
              renderHeader={this._renderHeader}
              labelStyle={{
                color: 'red',
                borderWidth: 0
              }}


              swipeVelocityThreshold={800}

              onIndexChange={index => this.setState({
                index
              })}
              initialLayout={{
                width: Dimensions.get('window').width
              }}
              >
            
            </TabView>




          </View>

        ) : null
      }


      </View>


    );
  }
}

class Account extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Profile' },
      { key: 'second', title: 'Cards' },
    ],
    fontLoaded: false,
  };

  async componentDidMount() {
  

      await Font.loadAsync({
        'Muli-Regular': require('./assets/Muli/Muli-Regular.ttf'),
        'Muli-SemiBold': require('./assets/Muli/Muli-SemiBold.ttf'),
        'Muli-Bold': require('./assets/Muli/Muli-Bold.ttf'),
        'Muli-Black': require('./assets/Muli/Muli-Black.ttf'),
        'Muli-ExtraBold': require('./assets/Muli/Muli-ExtraBold.ttf'),
      });

      this.setState({ fontLoaded: true });
   
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <AccountFirstRoute navigate={this.props.navigation}/>;
      case 'second':
        
      return <AccountSecondRoute navigate={this.props.navigation}/>;
    }
  };



  render() {

    const {navigate} = this.props.navigation;

    return (

      <View style={{flex: 1}}>

      {
      this.state.fontLoaded ? (

          <View style={{flex: 1}}>

            <View style={{paddingTop: 35, backgroundColor: '#28292B', paddingHorizontal: 20, paddingBottom: 5}}>
              <Text style={{fontFamily: 'Muli-Black', fontSize: 28, color: '#fff'}}>Account</Text>
            </View>

            <TabView
              navigationState={this.state}
              
              renderScene={this._renderScene}
              style={{
                borderWidth: 0
              }}


              renderTabBar={props => <TabBar
                {...props}
                indicatorStyle={{
                  backgroundColor: '#0AA0E2',
                  height: 3.5,
                  borderWidth: 0,
                  bottom: -1.2
                }}
                style={{
                  backgroundColor: '#28292B',
                  borderWidth: 0,
                  color: 'red',
                  paddingVertical: 2.5,
                  borderBottomWidth: 0.8,
                  borderBottomColor: '#777879'
                }}
                labelStyle={{
                  fontSize: 15.5,
                  fontFamily: 'Muli-Bold',
                  borderWidth: 0
                }}
                activeColor={'#0AA0E2'}
                inactiveColor={'#939495'}
                upperCaseLabel={false}
                getLabelText={({route}) => route.title}
                />
              }
              renderHeader={this._renderHeader}
              labelStyle={{
                color: 'red',
                borderWidth: 0
              }}


              swipeVelocityThreshold={800}

              onIndexChange={index => this.setState({
                index
              })}
              initialLayout={{
                width: Dimensions.get('window').width
              }}
              >
            
            </TabView>
          </View>

        ) : null
      }

      </View>


    );
  }
}

class AddCard extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
  

      await Font.loadAsync({
        'Muli-Regular': require('./assets/Muli/Muli-Regular.ttf'),
        'Muli-SemiBold': require('./assets/Muli/Muli-SemiBold.ttf'),
        'Muli-Bold': require('./assets/Muli/Muli-Bold.ttf'),
        'Muli-Black': require('./assets/Muli/Muli-Black.ttf'),
        'Muli-ExtraBold': require('./assets/Muli/Muli-ExtraBold.ttf'),
      });

      this.setState({ fontLoaded: true });
   
  }


  render() {

    const {navigate} = this.props.navigation;

    return (

      <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>

      {
      this.state.fontLoaded ? (

          <View style={{flex: 1, backgroundColor: '#28292B'}}>


          <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 35, paddingTop: 60 }]}>


            
              

              <Text style={[styles.confirmClassMainTitle, {marginBottom: 0}]}>Add a New Card</Text>

              <View style={styles.confirmClassBottomSection}>
                
                <View>
                  <View style={[styles.genericTextInputContainer, {marginTop: 15}]}>
                   <Image source={require('./assets/tii-user.png')}
                      style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                    />
                    <TextInput
                    placeholder="Full name"
                    placeholderTextColor="#9A9B9C"
                    
                    style={styles.genericTextInput}/>
                  </View>
                  <View style={styles.genericTextInputContainer}>
                   <Image source={require('./assets/tick.png')}
                      style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                    />
                    <TextInput
                    placeholder="16-digit card number"
                    placeholderTextColor="#9A9B9C"
                    
                    style={styles.genericTextInput}/>
                  </View>

                  <View style={styles.genericTextInputContainer}>
                   <Image source={require('./assets/tick.png')}
                      style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                    />
                    <TextInput
                    placeholder="CVC code"
                    placeholderTextColor="#9A9B9C"
                    
                    style={styles.genericTextInput}/>
                  </View>


                  <View style={{flexDirection: 'row'}}>

                    <View style={[styles.genericTextInputContainer, {flex: 1}]}>
                     <Image source={require('./assets/calendar.png')}
                        style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                      />
                      <TextInput
                      placeholder="Expiry (MM)"
                      placeholderTextColor="#9A9B9C"
                      
                      style={styles.genericTextInput}/>
                    </View>

                    <View style={[styles.genericTextInputContainer, {flex: 1, marginLeft: 20}]}>
                     <Image source={require('./assets/calendar.png')}
                        style={[styles.genericTextInputImage, {width: 23, height: 23}]}
                      />
                      <TextInput
                      placeholder="Expiry (YY)"
                      placeholderTextColor="#9A9B9C"
                      
                      style={styles.genericTextInput}/>
                    </View>
               

                  </View>

                </View>
                <TouchableOpacity activeOpacity={0.6} style={[styles.CTAButton, {marginHorizontal: 0, marginTop: 25}]}>
                  <Text style={styles.CTAButtonText}>Add Card</Text>
                </TouchableOpacity>

              </View>  

              <ScrollViewMargin/>
              <ScrollViewMargin/>

              <View style={{flexDirection: 'row'}}>

                <View style={{flex: 1, bottom: -6}}>
                  <Text style={{color: '#fff', fontFamily: 'Muli-Regular', fontSize: 16}}>Go back to all cards</Text>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flex: 1, marginLeft: 20, borderColor: '#464444', borderWidth: 1, borderRadius: 50, padding: 6, justifyContent: 'center', alignItems: 'center'}}>
                  
                    <Text style={{alignSelf: 'center', color: '#fff', fontFamily: 'Muli-Regular', fontSize: 16}}>All Cards</Text>
                  
                </TouchableOpacity>


              </View>



          </ScrollView>
           

          </View>

        ) : (

          <Text>Loading add card</Text>

        )
      }

      </KeyboardAvoidingView>


    );
  }
}


class Signup extends React.Component {
  state = {
    fontLoaded: false,
    fullNmae: '',
    email: '',
    phoneNumber: undefined,
    password: '',
    confirmPass: '',

  };

  async componentDidMount() {
  
      const {navigate } = this.props.navigation

      await Font.loadAsync({
        'Muli-Regular': require('./assets/Muli/Muli-Regular.ttf'),
        'Muli-SemiBold': require('./assets/Muli/Muli-SemiBold.ttf'),
        'Muli-Bold': require('./assets/Muli/Muli-Bold.ttf'),
        'Muli-Black': require('./assets/Muli/Muli-Black.ttf'),
        'Muli-ExtraBold': require('./assets/Muli/Muli-ExtraBold.ttf'),
      });

      this.setState({ fontLoaded: true });
      
      try {
        const value = await AsyncStorage.getItem('Token');
        if(value === null){
          await AsyncStorage.setItem('Token','false');
        }
        if(value !== null && value === 'true'){
          navigate('Main')
        }
      } catch (err) {
          console.log('Async ===>>>',err)
      }
  }

  async signUp() {
    const {navigate } = this.props.navigation
    this.setState({signUping: true})
    if (this.state.password !== this.state.confirmPass) {
      alert('Alert: Password and confirm password do not match')
      this.setState({signUping: false})
      return 0 ;
    }

    fetch('http://yudi.co.uk/apis/NXT/signup.php', {
      method: 'POST',
      headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
      body: JSON.stringify({
        name: this.state.fullNmae,
        email: this.state.email,
        phone: this.state.phoneNumber,
        password: this.state.password,
      })
    }).then(response => response.json()) 
      .then(res => {
        console.log(res);
        if (res.success) {
          this.setState({signUping: false})
          navigate('Main')
          AsyncStorage.setItem('Token','true');
        }
        else {
          alert(res.responseMessage)
          this.setState({signUping: false})
        }
      })
      .catch(err => {
        console.log(err);
        alert('something went wrong')
        this.setState({signUping: false})
      })
  }

  render() {

    const {navigate} = this.props.navigation;

    return (

      <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>

      {
      this.state.fontLoaded ? (

          <View style={{flex: 1, backgroundColor: '#28292B'}}>


          <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 35, paddingTop: 60 }]}>


            <View style={{marginBottom: 10}}>
             <Image source={require('./assets/logo-white.png')}
                style={styles.loginSignupImage}
              />

              <Text style={styles.loginSignupTitle}>Create an account</Text>
            </View>



            <View style={styles.genericTextInputContainer}>
             <Image source={require('./assets/tii-user.png')}
                style={[styles.genericTextInputImage, {width: 23, height: 23}]}
              />
              <TextInput
              placeholder="Full name"
              placeholderTextColor="#9A9B9C"
              value = {this.state.fullNmae}
              onChangeText = {(value) => this.setState({fullNmae: value})}
              style={styles.genericTextInput}/>
            </View>

            <View style={styles.genericTextInputContainer}>
             <Image source={require('./assets/tii-mail.png')}
                style={[styles.genericTextInputImage, {width: 23, height: 17, bottom: 15}]}
              />
              <TextInput
              placeholder="Email address"
              placeholderTextColor="#9A9B9C"
              value = {this.state.email}
              onChangeText = {(value) => this.setState({email: value})}
              style={styles.genericTextInput}
              keyboardType={"email-address"}/>
            </View>


            <View style={styles.genericTextInputContainer}>
             <Image source={require('./assets/tii-phone.png')}
                style={[styles.genericTextInputImage, {width: 14, height: 23}]}
              />
              <TextInput
              placeholder="Phone number"
              placeholderTextColor="#9A9B9C"
              value = {this.state.phoneNumber}
              onChangeText = {(value) => this.setState({phoneNumber: value})}
              style={styles.genericTextInput}/>
            </View>

            <View style={styles.genericTextInputContainer}>
             <Image source={require('./assets/tii-password.png')}
                style={[styles.genericTextInputImage, {width: 23, height: 23}]}
              />
              <TextInput
              placeholder="Password"
              placeholderTextColor="#9A9B9C"
              value = {this.state.password}
              onChangeText = {(value) => this.setState({password: value})}
              style={styles.genericTextInput}
              secureTextEntry={true}/>
              
            </View>

            <View style={styles.genericTextInputContainer}>
             <Image source={require('./assets/tii-password.png')}
                style={[styles.genericTextInputImage, {width: 23, height: 23}]}
              />
              <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#9A9B9C"
              value = {this.state.confirmPass}
              onChangeText = {(value) => this.setState({confirmPass: value})}
              style={styles.genericTextInput}
              secureTextEntry={true}/>

            </View>

            <View style={styles.acceptTermsContainer}>
              <View style={styles.acceptTermsCheckbox}/>
              <Text style={styles.acceptTermsText}>I accept the privacy policy and terms of service</Text>
            </View>

            
            <TouchableOpacity onPress={() => this.signUp()} activeOpacity={0.6} style={[styles.CTAButton, {marginHorizontal: 0, marginTop: 30}]}>
              {
                this.state.signUping ?
                <ActivityIndicator color = {'white'} size = {'small'} />
                :
                <Text style={styles.CTAButtonText}>Sign up</Text>
              }
            </TouchableOpacity>
            
            <ScrollViewMargin/>
            
            <View style={{flexDirection: 'row'}}>

              <View style={{flex: 1, bottom: -6}}>
                <Text style={{color: '#fff', fontFamily: 'Muli-Regular', fontSize: 16}}>Have an account?</Text>
              </View>

              <TouchableOpacity onPress={() => navigate('Login')} style={{flex: 1, marginLeft: 20, borderColor: '#464444', borderWidth: 1, borderRadius: 50, padding: 6, justifyContent: 'center', alignItems: 'center'}}>
                
                  <Text style={{alignSelf: 'center', color: '#fff', fontFamily: 'Muli-Regular', fontSize: 16}}>Login</Text>
                
              </TouchableOpacity>
              


            </View>

            <ScrollViewMargin/>
            <ScrollViewMargin/>
            <ScrollViewMargin/>
            <ScrollViewMargin/>



          </ScrollView>
           

          </View>

        ) : null
      }

      </KeyboardAvoidingView>


    );
  }
}


class Login extends React.Component {
  state = {
    fontLoaded: false,
    email: '',
    password: '',
    logining: false,
  };

  async componentDidMount() {
  

      await Font.loadAsync({
        'Muli-Regular': require('./assets/Muli/Muli-Regular.ttf'),
        'Muli-SemiBold': require('./assets/Muli/Muli-SemiBold.ttf'),
        'Muli-Bold': require('./assets/Muli/Muli-Bold.ttf'),
        'Muli-Black': require('./assets/Muli/Muli-Black.ttf'),
        'Muli-ExtraBold': require('./assets/Muli/Muli-ExtraBold.ttf'),
      });

      this.setState({ fontLoaded: true });
      
      try {
        const value = await AsyncStorage.getItem('Token');
        if(value === null){
          await AsyncStorage.setItem('Token','false');
        }
        if(value !== null && value === 'true'){
          navigate('Main')
        }
      } catch (err) {
          console.log('Async ===>>>',err)
      }
  }

  login() {
    const {navigate } = this.props.navigation
    this.setState({logining: true})
    fetch('http://yudi.co.uk/apis/NXT/login.php', {
      method: 'POST',
      headers: { 'Accept': 'application/json','Content-Type': 'application/json',},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => response.json()) 
      .then(res => {
        console.log(res);
        if (res.success) {
          navigate('Main')
          AsyncStorage.setItem('Token','true');
        }
        else {
          alert('email and password is not correct !')
          this.setState({logining: false})
        }
      })
      .catch(err => {
        console.log(err);
        alert('something went wrong')
        this.setState({logining: false})
      })
  }

  render() {

    const {navigate} = this.props.navigation;

    return (

      <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>

      {
      this.state.fontLoaded ? (

          <View style={{flex: 1, backgroundColor: '#28292B'}}>


          <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 35, paddingTop: 60 }]}>


            <View style={{marginBottom: 10}}>
             <Image source={require('./assets/logo-white.png')}
                style={styles.loginSignupImage}
              />

              <Text style={styles.loginSignupTitle}>Login to your account</Text>
            </View>
            <ScrollViewMargin/>
            <ScrollViewMargin/>

            <View style={styles.genericTextInputContainer}>
             <Image source={require('./assets/tii-mail.png')}
                style={[styles.genericTextInputImage, {width: 23, height: 17, bottom: 15}]}
              />
              <TextInput
              placeholder="Email address"
              placeholderTextColor="#9A9B9C"
              value = {this.state.email}
              onChangeText = {(value) => this.setState({email: value})}
              style={styles.genericTextInput}
              keyboardType={"email-address"}/>
            </View>


            <View style={styles.genericTextInputContainer}>
             <Image source={require('./assets/tii-password.png')}
                style={[styles.genericTextInputImage, {width: 23, height: 23}]}
              />
              <TextInput
              placeholder="Password"
              placeholderTextColor="#9A9B9C"
              value = {this.state.password}
              onChangeText = {(value) => this.setState({password: value})}
              style={styles.genericTextInput}
              secureTextEntry={true}/>
            </View>

            
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.login()} style={[styles.CTAButton, {marginHorizontal: 0, marginTop: 30}]}>
              {
                this.state.logining ?
                  <ActivityIndicator color = {'white'} />
                :
                  <Text style={styles.CTAButtonText}>Login</Text>
              }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('ResetPassword')} style={styles.loginScreenForgotPasswordContainer}>
              <Text style={styles.loginScreenForgotPasswordText}>
              Forgot Password?  <Text style={styles.loginScreenForgotPasswordInner}>Reset now</Text>
              </Text>
            </TouchableOpacity>
            

            
            <ScrollViewMargin/>
            <ScrollViewMargin/>
            <ScrollViewMargin/>
            
            <View style={{flexDirection: 'row'}}>

              <View style={{flex: 1, bottom: -6}}>
                <Text style={{color: '#fff', fontFamily: 'Muli-Regular', fontSize: 16}}>Don't have an account?</Text>
              </View>

              <TouchableOpacity onPress={() => navigate('Signup')} style={{flex: 1, marginLeft: 20, borderColor: '#464444', borderWidth: 1, borderRadius: 50, padding: 6, justifyContent: 'center', alignItems: 'center'}}>
                
                  <Text style={{alignSelf: 'center', color: '#fff', fontFamily: 'Muli-Regular', fontSize: 16}}>Register</Text>
                
              </TouchableOpacity>


            </View>




          </ScrollView>
           

          </View>

        ) : null
      }

      </KeyboardAvoidingView>


    );
  }
}

class ResetPassword extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
  

      await Font.loadAsync({
        'Muli-Regular': require('./assets/Muli/Muli-Regular.ttf'),
        'Muli-SemiBold': require('./assets/Muli/Muli-SemiBold.ttf'),
        'Muli-Bold': require('./assets/Muli/Muli-Bold.ttf'),
        'Muli-Black': require('./assets/Muli/Muli-Black.ttf'),
        'Muli-ExtraBold': require('./assets/Muli/Muli-ExtraBold.ttf'),
      });

      this.setState({ fontLoaded: true });
   
  }


  render() {

    const {navigate} = this.props.navigation;

    return (

      <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>

      {
      this.state.fontLoaded ? (

          <View style={{flex: 1, backgroundColor: '#28292B'}}>


          <ScrollView style={[styles.scene, { backgroundColor: '#28292B', paddingHorizontal: 35, paddingTop: 60 }]}>


            <ScrollViewMargin/>
            <ScrollViewMargin/>

            <View style={{marginBottom: 10}}>


              <Text style={styles.loginSignupTitle}>Reset your password</Text>
            </View>
            <ScrollViewMargin/>
            <ScrollViewMargin/>

            <View style={styles.genericTextInputContainer}>
             <Image source={require('./assets/tii-mail.png')}
                style={[styles.genericTextInputImage, {width: 23, height: 17, bottom: 15}]}
              />
              <TextInput
              placeholder="Email address"
              placeholderTextColor="#9A9B9C"
              
              style={styles.genericTextInput}/>
            </View>

            
            <TouchableOpacity activeOpacity={0.6} style={[styles.CTAButton, {marginHorizontal: 0, marginTop: 30}]}>
              <Text style={styles.CTAButtonText}>Send reset link</Text>
            </TouchableOpacity>
            

            
            <ScrollViewMargin/>
            <ScrollViewMargin/>
            <ScrollViewMargin/>
            
            <View style={{flexDirection: 'row'}}>

              <View style={{flex: 1, bottom: -6}}>
                <Text style={{color: '#fff', fontFamily: 'Muli-Regular', fontSize: 16}}>Remembered your password?</Text>
              </View>

              <TouchableOpacity onPress={() => navigate('Login')} style={{flex: 1, marginLeft: 20, borderColor: '#464444', borderWidth: 1, borderRadius: 50, padding: 6, justifyContent: 'center', alignItems: 'center'}}>
                
                  <Text style={{alignSelf: 'center', color: '#fff', fontFamily: 'Muli-Regular', fontSize: 16}}>Login</Text>
                
              </TouchableOpacity>


            </View>




          </ScrollView>
           

          </View>

        ) : null
      }

      </KeyboardAvoidingView>


    );
  }
}


class TabBarIconCustom extends React.Component {




  render (){

    return (
      <View>

    

         <View style={{alignItems: 'center', justifyContent: 'center', minWidth: 65}}>
            <Icon size={24} name={this.props.icon} style={{color: this.props.tintColor, marginBottom: 2}} />
            <Text style={{fontSize: 12, textAlign: 'center', fontFamily: 'Muli-SemiBold', color: this.props.tintColor}}>{this.props.title}</Text>
          </View>

      </View>


    );
  }

}


const MainNavigator = createStackNavigator({
 


  Signup: {
            screen: Signup,
            navigationOptions: {
              gesturesEnabled: false
            }
          }, 
  Login: {
            screen: Login,
            navigationOptions: {
              gesturesEnabled: false
            }
          },  
  Main: { 


    screen: createMaterialBottomTabNavigator({
      Classes: { 
        screen: Classes,
        navigationOptions: {
          gesturesEnabled: false,
          tabBarIcon: ({ tintColor, focused }) => (
            <TabBarIconCustom title="Classes" tintColor={tintColor} icon="th-large"/>
          ),
          
        } 
      },
      Packages: { 
        screen: Packages,
        navigationOptions: {
          gesturesEnabled: false,
          tabBarIcon: ({ tintColor, focused }) => (
            <TabBarIconCustom title="Packages" tintColor={tintColor} icon="bookmark"/>
          )
        } 
      },
      Account: { 
        screen: Account,
        navigationOptions: {
          gesturesEnabled: false,
          tabBarIcon: ({ tintColor, focused }) => (

            <TabBarIconCustom title="Account" tintColor={tintColor} icon="user"/>
          )
        } 
      },


      }, {
      initialRouteName: 'Classes',
      shifting: false,
      activeColor: '#0AA0E2',
      inactiveColor: '#D8D8D8',
      labeled: false,
      barStyle: { backgroundColor: '#343232', minHeight: 63 },
      labelStyle: {
        fontSize: 22,
      },

    })
  },

  ResetPassword: {screen: ResetPassword},

  ViewClass: {screen: ViewClass},
  AddCard: {screen: AddCard},

  

  



},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    },

      transitionConfig: () => ({
        transitionSpec: {
          duration: 240,
        },
      }),

  }
);
const App = createAppContainer(MainNavigator);

export default App;

