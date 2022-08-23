import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Images from './src/assets';
import React from 'react';
import {moderateScale} from './src/helper';

const App2 = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewText}>
          <Image style={styles.arrow} source={Images.Vector} />
          <View>
            <Text style={styles.textHeader}>Notification</Text>
          </View>
        </View>

        {/* p1 */}
        <TouchableOpacity style={styles.viewInfor}>
          <Image style={styles.tinyLogo} source={Images.I1} />
          <View style={styles.leftContainer}>
            <Text style={styles.textBody}>
              Fighting to protect against Wuhan virus during Lunar...
            </Text>

            <View style={styles.viewDot}>
              <View>
                <Text style={styles.fontText}>CNN TV • </Text>
              </View>
              <View>
                <Text style={styles.fontText}>10 hours ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* p2 */}
        <TouchableOpacity style={styles.viewInfor}>
          <Image style={styles.tinyLogo} source={Images.I2} />

          <View style={styles.left}>
            <Text style={styles.fontM}>Mery Silmon</Text>
            <View style={styles.viewDot}>
              <View>
                <Text style={styles.fontText}>116598V</Text>
              </View>

              <View>
                <Image style={styles.fontText1} source={Images.dot} />
              </View>

              <View>
                <Text style={styles.fontText}>Start: 16/01/2020</Text>
              </View>
            </View>
            <Text style={styles.fontW}>Weak resistance</Text>
          </View>

          <View style={styles.rightDot}>
            <Image style={styles.dot} source={Images.ellipse2} />
          </View>
        </TouchableOpacity>

        {/* p3 */}

        <TouchableOpacity style={styles.viewInfor}>
          <Image style={styles.avt} source={Images.I3} />
          <View style={styles.left}>
            <Text style={styles.fontM}>Nina America</Text>
            <View style={styles.viewDot}>
              <View>
                <Text style={styles.fontText}>116598</Text>
              </View>

              <View>
                <Image style={styles.fontText1} source={Images.dot} />
              </View>

              <View>
                <Text style={styles.fontText}>Start: 16/01/2020</Text>
              </View>
            </View>
            <Text style={styles.fontN}>Infected by Coronavirus</Text>
          </View>
          <View style={styles.rightDot1}>
            <Image style={styles.dot} source={Images.ellipse1} />
          </View>
        </TouchableOpacity>

        {/* p4 */}
        <TouchableOpacity style={styles.viewInfor}>
          <Image style={styles.tinyLogo} source={Images.I4} />

          <View style={styles.leftContainer}>
            <View>
              <Text style={styles.font}>
                Daily Kos 2019-nCov (the Wuhan coronavirus)...
              </Text>
            </View>

            <View style={styles.viewDot}>
              <View>
                <Text style={styles.fontText}>CNN TV</Text>
              </View>

              <View>
                <Image style={styles.fontText1} source={Images.dot} />
              </View>

              <View>
                <Text style={styles.fontText}>2 days ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* p5 */}
        <TouchableOpacity style={styles.viewInfor}>
          <Image style={styles.tinyLogo} source={Images.I5} />

          <View style={styles.leftContainer}>
            <View>
              <Text style={styles.font}>
                Life inside ground zero of Wuhan nCoV outbreak
              </Text>
            </View>

            <View style={styles.viewDot}>
              <View>
                <Text style={styles.fontText}>CNN TV</Text>
              </View>

              <View>
                <Image style={styles.fontText1} source={Images.dot} />
              </View>

              <View>
                <Text style={styles.fontText}>2 days ago</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default App2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f6',
  },
  viewText: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(28),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: moderateScale(30),
    color: '#1B1A1A',
    marginLeft: moderateScale(15),
    fontWeight: '700',
  },
  viewImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewInfor: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginBottom: moderateScale(14),
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(18),
    borderRadius: moderateScale(8),
    marginHorizontal: moderateScale(14),
  },
  avt: {
    marginRight: moderateScale(10),
  },
  right: {
    flexDirection: 'row',
  },
  left: {
    marginLeft: moderateScale(20),
  },
  leftContainer: {
    marginLeft: moderateScale(20),
    width: moderateScale(219),
  },
  textBody: {
    fontSize: moderateScale(16),
    color: '#1B1A1A',
    fontWeight: '500',
  },
  font1: {
    fontSize: moderateScale(13),
    marginTop: moderateScale(18),
  },
  fontM: {
    fontSize: moderateScale(16),
    color: '#1B1A1A',
    paddingRight: moderateScale(14),
  },
  fontdate: {
    fontSize: moderateScale(13),
    marginTop: moderateScale(14),
    color: '#828282',
  },
  fontW: {
    fontSize: 14,
    // marginTop: 14,
    color: '#E77F24',
  },
  fontN: {
    fontSize: moderateScale(14),
    // marginTop: 14,
    color: '#E71818',
  },
  rightDot: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: moderateScale(75),
    marginTop: moderateScale(-10),
  },
  dot: {},
  rightDot1: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: moderateScale(75),
    // marginTop: -10,
  },
  viewDot: {
    flexDirection: 'row',
    paddingVertical: moderateScale(18),
  },
  fontText1: {
    marginHorizontal: moderateScale(14),
  },
  arrow: {
    marginLeft: moderateScale(15),
  },
});
