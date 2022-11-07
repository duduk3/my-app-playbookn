
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  signin: undefined;
  signup: undefined;
  forgotPassword: undefined;
  newPassword: undefined;
  confirmEmail: undefined;
  home: undefined;
};

// type StackProps = NativeStackScreenProps<StackParamList, '< current screen here >';

// type Props = {
//   routes: StackProps;
// };

// function AnyScreen({ routes }: Props) {
//   const { navigation } = routes;
//   navigation.navigate('<your choosed screen here>')
// }