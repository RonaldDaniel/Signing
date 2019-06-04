import { StyleSheet, StatusBar } from "react-native"

const blackColor = "#28292B";
const blueColor = "#0AA0E2";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blackColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scene: {
    flex: 1,
    
  },
  trainingSelectionItem: {
  	flex: 1,
  	flexDirection: 'row',
  	marginBottom: 16,
    shadowOffset:{  width: 2,  height: 6,  },
    shadowColor: 'black',
    shadowOpacity: 0.02,
    borderRadius: 6,

  },
  trainingSelectionItemBackground: {
  	flex: 1,
  	height: 170,
  	width: 300,
    borderRadius: 6,
  },
  trainingSelectionItemContent: {
  	position: 'absolute',
  	top: 92,
  	left: 20,

  },
  trainingSelectionClassTitle: {
  	fontSize: 27,
  	textAlign: 'left',
  	color: '#fff',
  	fontFamily: 'Muli-ExtraBold',
  	marginBottom: 5
  },
  trainingSelectionClassInfo: {
  	fontSize: 16,
  	textAlign: 'left',
  	color: '#fff',
  	fontFamily: 'Muli-SemiBold',
  	letterSpacing: 0.8
  },
  trainingSelectionItemText: {
  	fontFamily: 'circular-bold',
  	fontSize: 24,
  	textAlign: 'center',
  	color: '#fff',
  	marginTop: 10
  },
  myClassPreviewItem: {
    backgroundColor: '#36373A',
    flex: 1,
    flexDirection: 'row',
    height: 126,
    borderRadius: 4,
    padding: 13,
    marginBottom: 16
  },
  myClassPreviewItemImageContainer: {
    flex: 0.5,
    backgroundColor: '#f5f5f5',
    marginRight: 13,
    height: 100,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 4,

  },
  myClassPreviewItemInfo: {
    flex: 1,

  },
  myClassPreviewItemImage: {
    alignSelf: 'center',
    width: 130,
    height: 100
  },
  myClassPreviewItemTitle: {
    fontSize: 21,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-ExtraBold',
    marginBottom: 5
  },
  myClassPreviewItemMeta: {
    fontSize: 14,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-SemiBold',
    letterSpacing: 0.7
  },
  myClassPreviewItemMethodContainer: {
    marginTop: 15,
    flexDirection: 'row'
  },
  myClassPreviewItemMethodText: {
    fontSize: 15,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-SemiBold',
    flex: 1,
    bottom: -2
  },

  myClassPreviewItemMethodTypeContainer: {
    backgroundColor: '#4A3F36',
    borderRadius: 5,
    padding: 4,
    flex: 1,
    alignSelf: 'flex-start'
  },

  myClassPreviewItemMethodTypeText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Muli-SemiBold',    
  },
  CTAButton: {
    backgroundColor: blueColor,
    marginHorizontal: 20,
    borderRadius: 4,
    height: 46,
    justifyContent: 'center'


  },
  CTAButtonText: {
    color: 'white',
    fontFamily: 'Muli-Bold',
    textAlign: 'center',
    fontSize: 18,

  },
  viewClassTitle: {
    fontSize: 27,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-ExtraBold',
    marginBottom: 5

  },
  viewClassMeta: {
    fontSize: 16,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-SemiBold',
    letterSpacing: 0.8
  },
  viewClassInstructorContainer: {
    backgroundColor: '#36373A',
    borderRadius: 5,
    padding: 13,
    marginVertical: 20,
    flexDirection: 'row'
  },
  viewClassInstructorImageContainer: {
    width: 83
  },
  viewClassInstructorInfo: {
    flex: 1,
    marginTop: 8
  },
  viewClassInstructorImageOuter: {
    borderWidth: 2,
    borderColor: '#979797',
    borderRadius: 100,
    height: 65,
    width: 65,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewClassInstructorInfoName: {
    fontSize: 17.5,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-Bold',
    marginBottom: 2
  },
  viewClassInstructorInfoRole: {
    color: '#939495',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Muli-SemiBold',

  },
  packageItemsRow: {
    flex: 1, 
    flexDirection: 'row',
    marginBottom: 10

  },
  packageItemRow: {
    flex: 1, 
    height: 150, 
    overflow: 'hidden', 
    borderRadius: 4

  },
  packageItemImage: {
    flex: 1,
    height: 150

  },
  packageItemContent: {
    position: 'absolute', 
    padding: 13,
    left: 0,
    right: 0

  },
  packageItemContentName: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'left',
    fontFamily: 'Muli-Black',    
  },
  packageItemContentInfo: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Muli-SemiBold',   
    marginTop: 5  
  },
  packageItemContentValid: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Muli-Regular',   
    marginTop: 10  
  },
  packageItemContentButtonOuter: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8,
    position: 'relative',
    bottom: -10
  },
  packageItemContentButtonText: {
    color: '#28292B',
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Muli-Bold',   

  },
  payPanelOuter: {
    flex: 1,
    backgroundColor: '#28292B',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,


  },
  payPanelPanel: {
    flex: 1,
    backgroundColor: '#28292B',
    position: 'relative',
    bottom: 0,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  confirmClassTopSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#363739',
    paddingBottom: 15,
    flexDirection: 'row'
  },
  confirmClassImageContainer: {
    width: 120,
    height: 80,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

  },
  confirmClassImage: {
    width: 120, 
    height: 120,
    alignSelf: 'center'
  },

  confirmClassTopSectionRightInfo: {
    flex: 1,
    marginLeft: 12
  },
  confirmClassMainTitle: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'left',
    fontFamily: 'Muli-Black',   
    marginBottom: 15   
  },
  confirmClassTopSectionRightName: {
    fontSize: 20,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-SemiBold',
    marginBottom: 6    
  },
  confirmClassTopSectionRightMeta: {
    fontSize: 15,
    textAlign: 'left',
    color: '#939495',
    fontFamily: 'Muli-SemiBold',
    marginBottom: 5,
    letterSpacing: 0.4
  },
  confirmClassTopSectionRightLocationText: {
    fontSize: 13,
    textAlign: 'left',
    color: '#939495',
    fontFamily: 'Muli-SemiBold',
  },

  confirmClassTopSectionRightLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3
  },
  packageItemLowerBought: {
    marginTop: 30,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  packageItemLowerBoughtTitles: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Muli-SemiBold',
  },
  packageItemLowerBoughtDescriptions: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Muli-SemiBold', 
    marginTop: 3   
  },
  genericTextInputContainer: {
    borderBottomColor: '#363739',
    borderBottomWidth: 1,
    marginTop: 30,
    color: '#fff'
    

  },
  genericTextInputImage: {
    left: 0,
    bottom: 13,
    position: 'absolute'
  },
  genericTextInput: {
    paddingLeft: 42,
    fontFamily: 'Muli-Regular', 
    fontSize: 17.5,
    paddingVertical: 12.5

  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 30
  },
  logoutButtonImage: {
    width: 19,
    height: 19,
    marginLeft: 10,
    bottom: -5
  },

  logoutButtonText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'left',
    fontFamily: 'Muli-SemiBold', 
    marginTop: 3   
  },

  myCardsItem: {
    flex: 1,
    backgroundColor: '#36373A',
    padding: 15,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  myCardTitle: {
    fontSize: 23,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-Black',
    marginBottom: 10
  },
  myCardNumber: {
    fontSize: 16,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-SemiBold',
    marginBottom: 5    
  },
  myCardExpiryContainer: {
    backgroundColor: '#4A3F36',
    width: 70,
    padding: 7,
    borderRadius: 4,
    marginTop: 7
  },
  myCardExpiry: {
    color: '#fff',
    fontFamily: 'Muli-Bold',  
    alignSelf: 'center'  
  },
  myCardType: {
    width: 42,
    height: 26
  },  
  myCardDeleteIcon: {
    width: 17,
    height: 22,

  },
  noClassesText: {
    color: '#fff',
    fontFamily: 'Muli-SemiBold',  
    alignSelf: 'center',
    fontSize: 17.5,
    textAlign: 'center',
    marginVertical: 25
  },
  confirmClassBottomSection: {
    marginBottom: 15
  },
  confirmClassBottomSectionTitle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Muli-Black',   
    marginBottom: 15
  },
  confirmClassBottomSection: {
    paddingVertical: 15
  },
  confirmClassSelectionSection: {
    paddingVertical: 5,
    height: 190
  },
  confirmClassSelectionItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'transparent',
    borderWidth: 2.5,
    flex: 1, 
    backgroundColor: '#D8D8D8', 
    borderRadius: 4, 
    padding: 12, 
    flexDirection: 'row',
    marginBottom: 10

  },
  confirmClassSelectionItemSelected: {
    borderColor: '#0AA0E2',

  },
  confirmClassCheckboxContainer: {
    width: 30,
    height: 30,
    borderColor: '#fff', 
    borderWidth: 1,
    borderRadius: 100
  },
  confirmClassPackageName: {
    color: '#24272C',
    fontFamily: 'Muli-Bold',
    fontSize: 17.5,
    lineHeight: 17.5,
    marginBottom: 2

  },
  confirmClassPackageExpiry: {
    color: '#7D7F81',
    fontFamily: 'Muli-SemiBold',
    fontSize: 14,    


  },
  confirmClassPackageLeft: {
    flex: 0.5, 
    textAlign: 'right',
    color: '#24272C',
    fontFamily: 'Muli-SemiBold',
    fontSize: 14,    

  },
  confirmClassSelectionItemCard: {
    backgroundColor: '#36373A'

  },
  confirmClassSelectionItemCardNumber: {
    fontSize: 16,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Muli-SemiBold', 
    flex: 1  
  },
  loginSignupTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Muli-Black',
    alignSelf: 'center'    
  },
  loginSignupImage: {
    width: 104, 
    height: 40,
    alignSelf: 'center',
    marginBottom: 15

  },
  loginScreenForgotPasswordContainer: {
    marginTop: 25
  },
  loginScreenForgotPasswordText: {
    fontSize: 14.5,
    color: '#fff',
    fontFamily: 'Muli-SemiBold',
  },
  loginScreenForgotPasswordInner: {
    fontSize: 14.5,
    color: '#0AA0E2',
    fontFamily: 'Muli-SemiBold',
  },
  acceptTermsContainer: {
    flexDirection: 'row',
    marginTop: 26,
    marginBottom: 7

  },
  acceptTermsCheckbox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3,
    marginRight: 17
  },
  acceptTermsText: {
    flex: 1,
    fontSize: 14.5,
    color: '#939495',
    fontFamily: 'Muli-SemiBold',
    top: -4

  },












});
