import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


//ArticleType
const DropDownBoardTypeMenu = ({selectedBoardTypeValue,setSelectedBoardTypeValue}) => {
  const [open, setOpen] = useState(false);
  const items = [
    {
      label: '게시글',
      value: '1',
      icon: () => (
        <Foundation
          name="clipboard-pencil"
          size={15}
          color="black"
        />
      ),
    },
    {
      label: '인기투표',
      value: '2',
      icon: () => (
        <MaterialCommunityIcons
          name="vote"
          size={15}
          color="black"
        />
      ),
    },
    {
      label: '찬반결정',
      value: '3',
      icon: () => (
        <FontAwesome6
          name="circle-half-stroke"
          size={15}
          color="black"
        />
      ),
    },
  ];
  return (
    <DropDownPicker
      open={open}
      value={selectedBoardTypeValue}
      items={items}
      setOpen={setOpen}
      setValue={setSelectedBoardTypeValue}
      style={styles.baseStyle}
      containerStyle={styles.containerStyle}
      labelStyle={styles.labelStyle}
      textStyle={styles.textStyle}
      dropDownContainerStyle={styles.dropDownContainerStyle}
      ArrowDownIconComponent={() => {
        return (
          <Ionicons
            size={18}
            color="black"
            name="arrow-down-circle"
          />
        );
      }}
      ArrowUpIconComponent={() => {
        return (
          <Ionicons
            size={18}
            color="black"
            name="arrow-down-circle"
          />
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  baseStyle: {
    width: 150,
    minHeight: 4,
    backgroundColor: '#DCD8D8',
    zIndex: 1,
  },
  containerStyle: {
    width: 150,
    minHeight: 4,
  },
  labelStyle: {
    textAlign: 'center',
  },
  textStyle: {
    backgroundColor: '#DCD8D8',
  },
  dropDownContainerStyle: {
    backgroundColor: '#DCD8D8',
  },
});
export default DropDownBoardTypeMenu;
