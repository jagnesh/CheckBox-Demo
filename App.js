import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,

  StatusBar,
  Text,
  FlatList
} from 'react-native';
import listData from './listData'
import ListItem from './common/listItem';
import Styles from './styles/Styles';

class App extends Component {
  state = {
    selectedItems:[]
  }
  items = []
  onSelectionChange = (checked, obj) => {
    (checked)?this.items.push(obj):this.remove(this.items,obj)
    this.setState({selectedItems:this.items })

    //alert(`Checked: ${JSON.stringify(checked)} and Obj: ${JSON.stringify(obj)}`)
  }
  remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }
  render() {
    return (
      <SafeAreaView style={Styles.container} >

        <Text style={Styles.countStyle}>Checked Count <Text style={Styles.countDigit}>{JSON.stringify(this.state.selectedItems.length)}</Text></Text>
        <FlatList
          data={listData}
          renderItem={({ item }) => <ListItem item={item} onSelectionChange={this.onSelectionChange} />}
        />
      </SafeAreaView>

    )
  }

}



export default App;
