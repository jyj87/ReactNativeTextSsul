import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

//ArticleCategory
const DropDownHashTypeMenu = ({selectedHashTypeValue,setSelectedHashTypeValue}) => {
  const [open, setOpen] = useState(false);
  const items = [
    {
      label: '유머',
      value: '1',
      icon: () => (
        <Feather
          name="hash"
          size={15}
          color="black"
        />
      ),
    },
    {
      label: '사랑',
      value: '2',
      icon: () => (
        <Feather
          name="hash"
          size={15}
          color="black"
        />
      ),
    },
    {
      label: '취업',
      value: '3',
      icon: () => (
        <Feather
          name="hash"
          size={15}
          color="black"
        />
      ),
    },
  ];
  return (
    <DropDownPicker
      open={open}
      value={selectedHashTypeValue}
      items={items}
      setOpen={setOpen}
      setValue={setSelectedHashTypeValue}
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
export default DropDownHashTypeMenu;
