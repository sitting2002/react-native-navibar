# react-native-navibar
*Easy to customize your NavigationBar for ReactNative app.*

![](https://cloud.githubusercontent.com/assets/6848625/23743695/a44d4c88-04ec-11e7-898a-ade90bf9477e.jpeg)

### Getting started

* Install the react-native-navibar from npm 
```
npm install react-native-navibar --save
```

* Import it in the file where you want to use it

```
import NaviBar from 'react-native-navibar';
```
* Add it into the class, for example

```
export default class SecondVC extends Component {
    render() {
        return (
            <View style = {{flex: 1}}>
                <NaviBar
                    StatusBarStyle = 'default'
                    statusBarBackgroundColor = '#00f'                    
                    
                    naviBackgroundColor = '#fff'
                    titleClickAction = {() => Alert.alert('It\'s facebook logo')}
                    titleImg = {{uri: titleImg}}

                    leftImgBtn1 = {NaviBackIcon}
                    leftBtn1Action = {() => this.props.navigator.pop()}
                    leftImgBtn2 = {{uri: webImg}}
                    leftBtn2Action = {() => Alert.alert('leftBtn2Action')}

                    rightTextBtn1 = 'world'
                    rightTextBtn1Color = '#f00'
                    rightBtn1Action = {() => Alert.alert('rightBtn1Action')}
                    rightImgBtn2 = {{uri: webImg}}
                    rightBtn2Action = {() => Alert.alert('rightBtn2Action')}
                />
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#726dd1'}}>
                    <Text>I am the SecondVC</Text>
                    <Text>try to click the 'Back' button and push to the first view</Text>
                </View>
            </View>
        );
    }
}
```

### API
| --StatusBar--              |Description
| -------------------------- |-------------
|  StatusBarStyle            |'default' or 'light-content'
|  statusBarBackgroundColor  |

|  --NaviBar--               |Description
| -------------------------- |-------------
|  naviBackgroundColor       |


|  --TitleView--             |Description
| -------------------------- |-------------
|  title                     |
|  titleClickAction          |
|  titleTextColor            |
|  titleImg                  |


|  --LeftButtonGroup--       |Description
| -------------------------- |-------------
|  leftTextBtn1              | 
|  leftTextBtn1Color         |
|  leftImgBtn1               |
|  leftBtn1Action            |
|  leftTextBtn2              |
|  leftTextBtn2Color         |
|  leftImgBtn2               |
|  leftBtn2Action            |


|  --RightButtonGroup--      |Description
| -------------------------- |-------------
|  rightTextBtn1             |
|  rightTextBtn1Color        |
|  rightImgBtn1              | 
|  rightBtn1Action           |
|  rightTextBtn2             |
|  rightTextBtn2Color        |
|  rightImgBtn2              | 
|  rightBtn2Action           |
 
 ## If any bug found, please submit an issue!