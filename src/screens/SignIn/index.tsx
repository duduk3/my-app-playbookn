import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, View, useWindowDimensions } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import { styles } from './styles';
import { Auth } from 'aws-amplify';

type LoginData = {
  username: string;
  password: string;
}

export function SignIn(){
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  async function handleSignin(data: LoginData) {
    const response = await Auth.signIn(data.username, data.password)
    console.log(response);
    
    // navigation.navigate('home');
  }

  function handleFogotPassword() {
    navigation.navigate('newPassword');
  }

  function handleFacebook() {
    navigation.navigate('home');
  }

  function handleGoogle() {
    navigation.navigate('home');
  }

  function handleApple() {
    navigation.navigate('home');
  }

  function handleCreateAccount() {
    navigation.navigate('signup');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        
        <Image
          source={require('../../../assets/images/booknplay.png')}
          style={[styles.logo, {height: height * 0.3, width: '70%'}]}
          resizeMode='contain'
        />

        <CustomInput
          placeholder='Username'
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder='Password'
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton
          text='Sign In'
          onPress={handleSignin}
          type='PRIMARY'
        />
        <CustomButton
          text='Forgot password?'
          onPress={handleFogotPassword}
          type='TERTIARY'
        />
        <CustomButton
          text='Sign In with Facebook'
          onPress={handleFacebook}
          bgColor='#e7eaf4'
          fgColor='#4765a9'
        />
        <CustomButton
          text='Sign In with Google'
          onPress={handleGoogle}
          bgColor='#fae9ea'
          fgColor='#dd4d44'
        />
        <CustomButton
          text='Sign In with Apple'              
          onPress={handleApple}
          bgColor='#e3e3e3'
          fgColor='#363636'
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={handleCreateAccount}
          type='TERTIARY'
        />
      </View>
    </ScrollView>
  );
}

//  log you into the Amplify CLI
// eyJpZFRva2VuIjp7Imp3dFRva2VuIjoiZXlKcmFXUWlPaUl6ZDFaeFZtTjBXVmxWVjJ4S1EyaDRUazh4Vm5kMU5Fa3lNM1pKUTJoM1pYaHhNVU55VWpWbVlXTm5QU0lzSW1Gc1p5STZJbEpUTWpVMkluMC5leUp6ZFdJaU9pSTBOekV6TW1RMk55MWxPV0U1TFRSbE56TXRZV1psWmkwMllqSTRZelF5TkRFMVlURWlMQ0pqYjJkdWFYUnZPbWR5YjNWd2N5STZXeUpHZFd4c0xXRmpZMlZ6Y3lKZExDSmpiMmR1YVhSdk9uQnlaV1psY25KbFpGOXliMnhsSWpvaVlYSnVPbUYzY3pwcFlXMDZPalE0TURNMU1qazBNRGc1TWpweWIyeGxYQzl6WVMxbFlYTjBMVEZmVDJSb01YVkpNRVpxWDBaMWJHd3RZV05qWlhOeklpd2lhWE56SWpvaWFIUjBjSE02WEM5Y0wyTnZaMjVwZEc4dGFXUndMbk5oTFdWaGMzUXRNUzVoYldGNmIyNWhkM011WTI5dFhDOXpZUzFsWVhOMExURmZUMlJvTVhWSk1FWnFJaXdpWTI5bmJtbDBienAxYzJWeWJtRnRaU0k2SW1GM2N5MWhiWEJzYVdaNUxXRmtiV2x1SWl3aWIzSnBaMmx1WDJwMGFTSTZJakZoT1RRNFlUVXhMV1ppWkdJdE5HSXlOeTFpWVRnMExXRm1OREprWXpFelkyVTRNQ0lzSW1OdloyNXBkRzg2Y205c1pYTWlPbHNpWVhKdU9tRjNjenBwWVcwNk9qUTRNRE0xTWprME1EZzVNanB5YjJ4bFhDOXpZUzFsWVhOMExURmZUMlJvTVhWSk1FWnFYMFoxYkd3dFlXTmpaWE56SWwwc0ltRjFaQ0k2SWpRMU16ZDBkR2htTjJVNVkyUnZPVzUxZGpCalpITXhjREpuSWl3aVpYWmxiblJmYVdRaU9pSmhObVF5T0RabE5DMHlOall6TFRRek56RXRPREkwWkMwME1tSXdOMlV6WTJSaE9UUWlMQ0owYjJ0bGJsOTFjMlVpT2lKcFpDSXNJbUYxZEdoZmRHbHRaU0k2TVRZMk56YzFNRGcwTUN3aVpYaHdJam94TmpZM056Z3hOemN3TENKcFlYUWlPakUyTmpjM056Z3hOekFzSW1wMGFTSTZJalZoTnpka016Rm1MVGRtT1dRdE5HSTBNQzA1WmpNeUxXSTRaVGxsWkRZeE9EZzFPU0o5LnJ1eklGYjU0VXlxUTZRYzRKRlJvWU4yaHA3NElCMFZDdS0wLWZxYWs5bWhDME9JNjluR09LekRlSlVjRzJuOGRLdVhoUUFIb1JVb2E2YUNkd296QTBFamhtVGhpSmRtaFJfaFoxNzgzSm9lV01xM3YwelV4VE1lV1pCZ2ZPMTVWVXVJcWtmcVZ5MG5SZ3RNU0RCWEp1R19qY2Nvd1ZjdjVhdG9hVS13ZWNKeGt1ZWxjU0hwLUZyZ3BsbERxcWljb1pPMHZDTjBVZjlMSzNuRTBCTVhBNFpRMHIzZ29UbHdSMmZGRmVkRnJOeVI2RjRLS1c1dGVwQTNUbUM1WVRheEx1TndNblgwclBZTU5nQ0dxQkhoOVJoM2xMcXIxcnRWMWMyMXFjY1RRZUVlS0I5dEhYWDNLMjlWaloteGJlLXo3ZTJ6WUo1YWw2SmNwclB5UG4zSmN5ZyIsInBheWxvYWQiOnsic3ViIjoiNDcxMzJkNjctZTlhOS00ZTczLWFmZWYtNmIyOGM0MjQxNWExIiwiY29nbml0bzpncm91cHMiOlsiRnVsbC1hY2Nlc3MiXSwiY29nbml0bzpwcmVmZXJyZWRfcm9sZSI6ImFybjphd3M6aWFtOjo0ODAzNTI5NDA4OTI6cm9sZS9zYS1lYXN0LTFfT2RoMXVJMEZqX0Z1bGwtYWNjZXNzIiwiaXNzIjoiaHR0cHM6Ly9jb2duaXRvLWlkcC5zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9zYS1lYXN0LTFfT2RoMXVJMEZqIiwiY29nbml0bzp1c2VybmFtZSI6ImF3cy1hbXBsaWZ5LWFkbWluIiwib3JpZ2luX2p0aSI6IjFhOTQ4YTUxLWZiZGItNGIyNy1iYTg0LWFmNDJkYzEzY2U4MCIsImNvZ25pdG86cm9sZXMiOlsiYXJuOmF3czppYW06OjQ4MDM1Mjk0MDg5Mjpyb2xlL3NhLWVhc3QtMV9PZGgxdUkwRmpfRnVsbC1hY2Nlc3MiXSwiYXVkIjoiNDUzN3R0aGY3ZTljZG85bnV2MGNkczFwMmciLCJldmVudF9pZCI6ImE2ZDI4NmU0LTI2NjMtNDM3MS04MjRkLTQyYjA3ZTNjZGE5NCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjY3NzUwODQwLCJleHAiOjE2Njc3ODE3NzAsImlhdCI6MTY2Nzc3ODE3MCwianRpIjoiNWE3N2QzMWYtN2Y5ZC00YjQwLTlmMzItYjhlOWVkNjE4ODU5In19LCJyZWZyZXNoVG9rZW4iOnsidG9rZW4iOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTWpVMlIwTk5JaXdpWVd4bklqb2lVbE5CTFU5QlJWQWlmUS5seTBSNThDeUd3RnU5MTlENDFFWmp6N3FMSFBjTkFYaWZlLUNlVU1STzZGdURQLTVzaUxpT2ZvdDdBbnVtM1hCdWZaejdGYV84aW9qU2xsdDcyS2RwX3hzMmVmZUEyejFoX3dZckFOeWlMRktIRmNrcXF4QU81XzIydzJkUi13SDB2S3RXcDhLRW5KTERrbk5ETUk2dFd1QVlZWFhXOHlvdzFvMXhMdmdTcjBhT0JIZEVJVDcybjNoQkJwZkFybmNXRDlUWDlOVUVzMjZoZV9Db1g0U05HRXdsTDVHc1QwRUw4S1pvNkNVb3g1TUg0V05CZXYybFJjbEotUVVCYkFoeWF5NlVUYjFaU3E0OHZVTFRVSzQ1eEV4eW9TRlpIcTZvcWVVam1SSElkc0xZT1NvdWNhVVZCQ3NyZTJxV2QzdXQ0RXZhVm1BQ2lwMEkyUDdURDhQOEEuMHhobzV3Y2p3RG8wVS1XcC5EWWlhRURQNVEtSkc4OTVrcENpeUpmT0wwQXQtX1N6NDQ1YzFIS0xiQkM3WnBFTzhFOTFKaWNsaXd2QnB0NF96RmZSYzJTbnpCc0hENjM3eEFTWm0ydVJaNFV2X3NzZUhaMjVEamtzLTdpRjNvX2owTG16UmpJcXZBNmdVeWxobWJZd3QxQnBkUEtwMWxjam5LdHh5bU5leGdBMVZKbTJUakJGZ0o1M1d0TlUzNm5DbFJfUjZmY24yaUVLeUNKN2ZnQm5NLTg4d3huX0NGT2FTTWdwdGNyNGh5R0c3a1lHVWs3ck95a2pBWjJEZ0NPY2ZOLTAzamJaeUU1SmZvRzFBZlBnOUt1dHktdGNDb1Fza1RIVG42QmRrNzFPaF9INFgyZGY3V3gwdG1sUmxnelR5VkpRZ1BudUNxSVBMTnVrbXlQTVVkdlZ1VVVrSUUzRFdGMHptQl9RVEYyeHpDSnJhbFFnVlB1RkN0cXlnZG53dy1EeGMzNFNfRjZvaWxlaUdNR0Qxc25nRXh2cmhxSFhhWXB5SDM1bWE1Mnh3WGk2TzQyZm5PdlRHNzgwZDFyeUlIZ0NUQUhqSFNuaW1FanNnZ0RiV2Y1VnFTMVVsalFLZHFwR184aDJtUDBNeWhXcG53eEplRDJBYl9LbnlJVldMY1d4Um5kM0NqaUhyeWUzNzNCdzlhczRndjBhUzBsMnZ0QzVJMHpMWDJERG9WYURZU3ppdVM0NFJKYkFxMEE4VXh2V2ZPM1pycnRJell5MEE5a09DRU51eVY4MXQ3cHlQeU45MkpKRjVJd1hwd0JmdllRZll3d0VpZnVndlM1R3lfU3Q1RHVVUi1QRXVEdnE1U09nQncwc0t0a01SbVpNU29lNXBBRmNsNTFfVXZKRDJua0RRZjNsTDJvZ3pyWk53elhKV285NXZZWFZ0M3VCdjFWVDNXMEZ1WnZZX1JMaFc4ckotLU8zZ3YyN1dXN19mUkNiWGpmNHRkTGFxRFlQM05NOGhySUtEandFcVM1YWlRbFhlTURtTDEtejFOUVpvM0ljT2NYSG9QQ0wyX3djdXVPc2w3Zl9CNlAyZ0dzY1NOX3FNSXFoUWZ1MHhkb2FhZjk1RnlRSldQX0ZvRWhIM1lHR244a1hDU3VmcDN5cUhxM09XUVpwR05KSjNTS09YYmZfUEN0VmZUY29SRmx5WW15cGJtVk9TYkxNemhXcDlhaTlSTEVyTko5ZzhtVXVBNE14VlVKTU9HZGNyeWxnOXFyblZzTXdUaUxuQ0cycmxIUVVWVS0wQ2tySHN0eG8tRWRqRnkwS1hHTzNBQkFZZDFpRFhXX0hvOEFodEo2VHpwVkgtaTYzZlVSYnBCX3hIOVB1R3FqTnZLRTJKMFljMmpfU01EMDJobklIRS1lOXh2bkExalhiYW5QOWZERERpWVVIZmZmZEJYOXdDZ1BhTHJPRDVJeTZ4LWxfSDdkUzlEaDBadEp5VlROUjN3TzBxb25xaU9xUUFKSWVVUGw3cXpZYUNvdTd4UDgwZ3VmcGViOGZJTnRpTlhpSGMtcGFRaHZjYWV2R0lfQ3hsQm83X2k5akZjM01UOS1iWDZqMXZ1SkdDNXo0UnBwQUV5NWV6S2YyU2RNNXRxRll4QmF1Z2N6Q0NaaUg4eVRySDZQdjdyOENpczJldUgwdEthSWF1d1FiaWpCclB3UlA2LWpUT0YzeklVRkxWT2NGaFJUTktlSDk0ZW9SNnVnLk1HcE1JTEEtSHZHZzZyZjY5Z29OcEEifSwiYWNjZXNzVG9rZW4iOnsiand0VG9rZW4iOiJleUpyYVdRaU9pSkVOR1kxUkhkeGREUnplVEZRUkhCVVUwcFZPV2d5VkZReGFrazFUMXB1T1VOVFMxSnJkRTExVmtWRlBTSXNJbUZzWnlJNklsSlRNalUySW4wLmV5SnpkV0lpT2lJME56RXpNbVEyTnkxbE9XRTVMVFJsTnpNdFlXWmxaaTAyWWpJNFl6UXlOREUxWVRFaUxDSmpiMmR1YVhSdk9tZHliM1Z3Y3lJNld5SkdkV3hzTFdGalkyVnpjeUpkTENKcGMzTWlPaUpvZEhSd2N6cGNMMXd2WTI5bmJtbDBieTFwWkhBdWMyRXRaV0Z6ZEMweExtRnRZWHB2Ym1GM2N5NWpiMjFjTDNOaExXVmhjM1F0TVY5UFpHZ3hkVWt3Um1vaUxDSmpiR2xsYm5SZmFXUWlPaUkwTlRNM2RIUm9aamRsT1dOa2J6bHVkWFl3WTJSek1YQXlaeUlzSW05eWFXZHBibDlxZEdraU9pSXhZVGswT0dFMU1TMW1ZbVJpTFRSaU1qY3RZbUU0TkMxaFpqUXlaR014TTJObE9EQWlMQ0psZG1WdWRGOXBaQ0k2SW1FMlpESTRObVUwTFRJMk5qTXRORE0zTVMwNE1qUmtMVFF5WWpBM1pUTmpaR0U1TkNJc0luUnZhMlZ1WDNWelpTSTZJbUZqWTJWemN5SXNJbk5qYjNCbElqb2lZWGR6TG1OdloyNXBkRzh1YzJsbmJtbHVMblZ6WlhJdVlXUnRhVzRpTENKaGRYUm9YM1JwYldVaU9qRTJOamMzTlRBNE5EQXNJbVY0Y0NJNk1UWTJOemM0TVRjM01Dd2lhV0YwSWpveE5qWTNOemM0TVRjd0xDSnFkR2tpT2lJelpqTXlPVGxqWkMxaE9USTJMVFF3WWpZdFlXSmhPUzFtWmpVME5tTm1PV1prTkdJaUxDSjFjMlZ5Ym1GdFpTSTZJbUYzY3kxaGJYQnNhV1o1TFdGa2JXbHVJbjAuZWotdFNEaHlaYmptTDZWRVVwU1JlQmVsSUU5cjY2cjNTUlVsWVZYS1pDN0MtSzZTRTd0dzh3V01sMGxQcnR1OEtXcUdyMXh1by1jWnB3SzRKZE5TM0k5cVM1Mmt0MVZqNjJtS245b3QzS29zbTZXM1pSRzQ1TEt1MmlSMGR6S2cySEZfTDRGNm12YWRpSDkwYVJJNDk1dnhrQlpyY1hzVmdwcXM4d0kyY01CZEtjS29NOHU4WENncnBKZDUzMUxxXzJISnBxUUNlMWwxZURTeW1laDloTWt1aEJhcWVWYS1lMXo1RHhjalEwS0ZXN0R5V1d4TndRNC1CaE1lRjlxcFZDdnZpaHFQRE9PQlEzVW1ZUWVRLUxGTHlCMDJHUVBhVnN4bmhLc0dqeVB1THNNZmplQlpCTzd4TnBJdmxRbDN3QVhodmd3dzZMSTVhTU5PQVVnTTNBIiwicGF5bG9hZCI6eyJzdWIiOiI0NzEzMmQ2Ny1lOWE5LTRlNzMtYWZlZi02YjI4YzQyNDE1YTEiLCJjb2duaXRvOmdyb3VwcyI6WyJGdWxsLWFjY2VzcyJdLCJpc3MiOiJodHRwczovL2NvZ25pdG8taWRwLnNhLWVhc3QtMS5hbWF6b25hd3MuY29tL3NhLWVhc3QtMV9PZGgxdUkwRmoiLCJjbGllbnRfaWQiOiI0NTM3dHRoZjdlOWNkbzludXYwY2RzMXAyZyIsIm9yaWdpbl9qdGkiOiIxYTk0OGE1MS1mYmRiLTRiMjctYmE4NC1hZjQyZGMxM2NlODAiLCJldmVudF9pZCI6ImE2ZDI4NmU0LTI2NjMtNDM3MS04MjRkLTQyYjA3ZTNjZGE5NCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2Njc3NTA4NDAsImV4cCI6MTY2Nzc4MTc3MCwiaWF0IjoxNjY3Nzc4MTcwLCJqdGkiOiIzZjMyOTljZC1hOTI2LTQwYjYtYWJhOS1mZjU0NmNmOWZkNGIiLCJ1c2VybmFtZSI6ImF3cy1hbXBsaWZ5LWFkbWluIn19LCJjbG9ja0RyaWZ0IjowLCJyZWdpb24iOiJzYS1lYXN0LTEiLCJJZGVudGl0eVBvb2xJZCI6InNhLWVhc3QtMTowODA0NzIzYy05NjNhLTQ3M2UtYjdhYi03ODRlYjIzZjI4ZGIifQ==

