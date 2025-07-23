import { useState } from 'react';
import { View } from 'react-native';
import { NDatePicker } from 'react-native-nayan';

const Component = () => {
  const [date, setDate] = useState(new Date());
  return (
    <View className="p-3">
      <NDatePicker label="Pick Date" onChange={setDate} value={date} />
    </View>
  );
};

export default Component;
