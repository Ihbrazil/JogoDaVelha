import { Text, View } from 'react-native';

import Casa from '../Casa';
import styles from './styles';

export default function Game() {

    return (
        <View style={styles.container}>
            <View style={styles.tabuleiro}>
                <View style={styles.linha}>
                    <Casa
                        temBordaDireita={true}
                        temBordaInferior={true}
                    />
                    <Casa
                        temBordaDireita={true} temBordaInferior={true}
                    />
                    <Casa
                        temBordaInferior={true}
                    />
                </View>
                <View style={styles.linha}>
                    <Casa
                        temBordaDireita={true} temBordaInferior={true}
                    />
                    <Casa
                        temBordaDireita={true} temBordaInferior={true}
                    />
                    <Casa
                        temBordaInferior={true}
                    />
                </View>
                <View style={styles.linha}>
                    <Casa
                        temBordaDireita={true}
                    />
                    <Casa
                        temBordaDireita={true}
                    />
                    <Casa />
                </View>
            </View>
        </View>
    );
}