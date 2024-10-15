//HeaderBar 컴포넌트. 메인화면인지에 대한 불린값, 상단에 표시될 텍스트를 인자로 받음. 
import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

type TopProps = {
    isMain: boolean;
    title: string;
};

const Top: React.FC<TopProps> = ({isMain, title}) => {
    if (!isMain){   //메인 화면이 아닐 시 뒤로가기 화살표 아이콘이 있는 헤더를 반환
  	    return (
    		<View style={styles.top}>
      			<Image style={styles.iconLeftArrow} resizeMode="cover" source={require("../assets/images/icon_left_arrow.png")} />
      			<Text style={styles.travelMaiker}>{title}</Text> 
    		</View>);
    }
    else{           //메인 화면 일시 구슬이가 있는 헤더를 반환
        return (
    		<View style={styles.top}>
      			<Image style={styles.bead} resizeMode="cover" source={require("../assets/images/bead.png")} />
      			<Text style={styles.travelMaiker}>{title}</Text> 
    		</View>);
    }
};

const styles = StyleSheet.create({
    bead: {
        height: 40,
        width: 40
    },
  	iconLeftArrow: {
    		width: 35,
    		height: 35
  	},
  	travelMaiker: {
    		fontSize: 24,
    		fontWeight: "600",
    		color: "#000",
    		textAlign: "center"
  	},
  	top: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 50,
    		overflow: "hidden",
    		flexDirection: "row",
    		alignItems: "center",
    		paddingHorizontal: 16,
    		paddingVertical: 0,
    		gap: 34,
            elevation: 4,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
  	}
});

export default Top;